// Google Protocol Buffers .proto files FLEX grammar
// Based on https://groups.google.com/forum/#!topic/protobuf/HMz8YkzWEto

%{
parser.protobufCharUnescape = function (chr) {
  if (chr[0] !== "\\") {
    return chr;
  }

  chr = chr.substr(1);

  var quotes = {
    '"':  '"',
    '\'': '\''
  };

  if (quotes[chr]) {
    if (chr === parser.protobufCharUnescapeCurrentQuote) {
      return quotes[chr];
    } else {
      return '\\' + quotes[chr];
    }
  }

  var escapee = {
    '\\': '\\',
    '/':  '/',
    b:    '\b',
    f:    '\f',
    n:    '\n',
    r:    '\r',
    t:    '\t',
    v:    '\v'
  };

  if (escapee[chr]) {
    return escapee[chr];
  }

  chr = String.fromCharCode(chr);

  return chr;
};
%}

%x INITIAL package message message_body message_field message_field_options enum enum_body enum_field string_quoted_content

%%

// End of file match
<*><<EOF>>  return 'EOF'

// Package state
<INITIAL>"package"  this.begin('package'); return 'PACKAGE';
<package>";"        this.popState(); return ';';

// Package state lexems
<package>{name}     return 'NAME';

// Message state
<INITIAL>"message"  this.begin('message'); return 'MESSAGE';

// Message state lexems
<message>{name}     return 'NAME';

// Message body state
<message>"{"                  this.begin('message_body'); return '{';
<message_body>"}"             this.popState(); this.popState(); return '}';

// Message body lexems | Message field state
<message_body>"enum"          this.begin('enum'); return 'ENUM';
<message_body>{rule}          this.begin('message_field'); return 'RULE';
<message_field>";"            this.popState(); return ';';

// Message field state lexems
<message_field>{name}         return 'NAME';
<message_field>"="            return '=';
<message_field>{dec}          return 'DEC';
<message_field>{hex}          return 'HEX';
<message_field>{oct}          return 'OCT';
<message_field>{float}        return 'FLOAT';
<message_field>{bool}         return 'BOOL';

// Message field options state lexems
<message_field>"["            this.begin('message_field_options'); return '[';
<message_field_options>"]"    this.popState(); return ']';

// Message field options state lexems
<message_field_options>","             return ',';
<message_field_options>"default"       return 'DEFAULT';
<message_field_options>"="             return '=';
<message_field_options>{float}         return 'FLOAT';
<message_field_options>{dec}           return 'DEC';
<message_field_options>{hex}           return 'HEX';
<message_field_options>{oct}           return 'OCT';
<message_field_options>{bool}          return 'BOOL';
<message_field_options>{name}          return 'NAME';

// Quoted string state
<message_field_options>{quote}         this.begin('string_quoted_content'); parser.protobufCharUnescapeCurrentQuote = this.match; return 'QUOTE';

// Quoted string state lexems
<string_quoted_content>\s+             return 'NON_ESCAPED';
<string_quoted_content>{hex_escape}    return 'HEX_ESCAPE';
<string_quoted_content>{oct_escape}    return 'OCT_ESCAPE';
<string_quoted_content>{char_escape}   return 'CHAR_ESCAPE';
<string_quoted_content>{quote}         if (parser.protobufCharUnescapeCurrentQuote === this.match) { this.popState(); return 'QUOTE'; } else { return 'NON_ESCAPED'; }
<string_quoted_content>{non_escaped}   return 'NON_ESCAPED';

// Enum state
<INITIAL>"enum"  this.begin('enum'); return 'ENUM';

// Enum state lexems
<enum>{name}     return 'NAME';

// Enum body state
<enum>"{"                  this.begin('enum_body'); return '{';
<enum_body>"}"             this.popState(); this.popState(); return '}';

// Enum body lexems | Enum field state
<enum_body>{name}          this.begin('enum_field'); return 'NAME';
<enum_field>";"            this.popState(); return ';';

// Enum field lexems
<enum_field>"="            return '=';
<enum_field>{dec}          return 'DEC';
<enum_field>{hex}          return 'HEX';
<enum_field>{oct}          return 'OCT';

// Skip whitespaces in other states
<*>\s+  /* skip whitespaces */

// All other matches are invalid
<*>.    return 'INVALID'

/lex

%start file

%%

file
  : file_elements EOF { return $$; }
  ;

file_elements
  : element { $$ = [$1]; }
  | file_elements element { $$ = $1; $$.push($2); }
  ;

element
  : package
  | message
  | enum
  ;

package
  : PACKAGE NAME ';' %{
    $$ = {
      type: 'package',
      name: $2
    };
  }%
  ;

message
  : MESSAGE NAME '{' message_body '}' %{
    $$ = {
      type: 'message',
      name: $2,
      enums: $4.enums,
      fields: $4.fields
    };
  }%
  ;

message_body
  : /* empty */ { $$ = {enums: [], fields: []}; }
  | message_body enum { $$ = $1; $$.enums.push($2); }
  | message_body message_field { $$ = $1; $$.fields.push($2); }
  ;

message_field
  : RULE message_field_type NAME '=' int message_field_options ';' %{
    $$ = {
      rule: $1,
      type: $2,
      name: $3,
      tag : $5
    };
    if ($6) {
      if (typeof $6.default !== 'undefined') {
        $$.default = $6.default;
      }
    }
  }%
  ;

message_field_type
  : NAME { $$ = $1; }
  ;

int
  : DEC
  | HEX
  | OCT
  ;

message_field_options
  : /* empty */
  | '[' message_field_options_list ']' { $$ = $2; }
  ;

message_field_options_list
  : message_field_option { $$ = {}; for (var i in $1) $$[i] = $1[i]; }
  | message_field_options_list ',' message_field_option { for (var i in $3) $$[i] = $3[i]; }
  ;

message_field_option
  : message_field_option_default { $$ = $1; }
  ;

message_field_option_default
  : DEFAULT '=' constant { $$ = {default: $3}; }
  ;

constant
  : FLOAT  { $$ = parseFloat($1); }
  | int    { $$ = parseInt($1); }
  | BOOL   { $$ = ($1 == 'true'); }
  | NAME   { $$ = $1; }
  | string { $$ = $1; }
  ;

string
  : QUOTE string_quoted QUOTE { $$ = $2; }
  ;

string_quoted
  : string_quoted_char { $$ = $1; }
  | string_quoted string_quoted_char { $$ = $1 + $2; }
  ;

string_quoted_char
  : HEX_ESCAPE   { $$ = parser.protobufCharUnescape($1); }
  | OCT_ESCAPE   { $$ = parser.protobufCharUnescape($1); }
  | CHAR_ESCAPE  { $$ = parser.protobufCharUnescape($1); }
  | NON_ESCAPED  { $$ = $1; }
  | NAME         { $$ = $1; } /* because it is valid char sequence and may be matched here*/
  ;

enum
  : ENUM NAME '{' enum_fields '}' %{
    $$ = {
      type: 'enum',
      name: $2,
      fields: $4
    };
  }%
  ;

enum_fields
  : enum_field { $$ = [$1]; }
  | enum_fields enum_field { $$ = $1; $$.push($2); }
  ;

enum_field
  : NAME '=' int ';' %{
    $$ = {};
    $$.name = $1;
    $$.tag  = $3;
  }%
  ;
