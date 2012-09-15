// Google Protocol Buffers .proto files grammar
// Based on https://groups.google.com/forum/#!topic/protobuf/HMz8YkzWEto

%lex

rule  ("required"|"optional"|"repeated")
name  ([A-Za-z_][A-Za-z0-9_]*)

dec    ([1-9][0-9]*)
hex    (0[xX][A-Fa-f0-9]+)
oct    (0[0-7]+)
float  (\d+(\.\d+)?([Ee][\+-]?\d+)?)
bool   ("true"|"false")

quote         (['"])
hex_escape    (\\[Xx][A-Fa-f0-9]{1,2})
oct_escape    (\\0?[0-7]{1,3})
char_escape   (\\[abfnrtv\\\?'"])
non_escaped   ([^\0\n])

%{
parser.protobufCharUnescape = function (chr) {
  // not yet implemented
  return chr;
}
%}

%x INITIAL package message message_body message_field message_field_options string_quoted_content

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
<message_field_options>{quote}         this.begin('string_quoted_content'); return 'QUOTE';
<string_quoted_content>{quote}         this.popState(); return 'QUOTE';

// Quoted string state lexems
<string_quoted_content>\s+             return 'NON_ESCAPED';
<string_quoted_content>{non_escaped}   return 'NON_ESCAPED';
<string_quoted_content>{hex_escape}    return 'HEX_ESCAPE';
<string_quoted_content>{oct_escape}    return 'OCT_ESCAPE';
<string_quoted_content>{char_escape}   return 'CHAR_ESCAPE';

// Skip whitespaces in other states
<*>\s+  /* skip whitespaces */

// All other matches are invalid
<*>.    return 'INVALID'

/lex

%start file

%%

file
  : file_elements EOF %{
    var result = {
      messages: {}
    };
    var message, field;

    // Loop over the collected elements
    for (var i in $$) {
      if ($$.hasOwnProperty(i)) {
        if ($$[i].package) {
          // Package element
          result.package = $$[i].package;
        } else {
          // Message element
          message = {
            fields: {}
          };
          for (var j in $$[i].fields) {
            if ($$[i].fields.hasOwnProperty(j)) {
              field = $$[i].fields[j];
              message.fields[field.name] = {
                rule: field.rule,
                type: field.type,
                tag:  parseInt(field.tag)
              };
              if (typeof field.default !== 'undefined') {
                message.fields[field.name].default = field.default;
              }
            }
          }
          result.messages[$$[i].name] = message;
        }
      }
    }

    return result;
  }%
  ;

file_elements
  : element { $$ = [$1]; }
  | file_elements element { $$ = $1; $$.push($2); }
  ;

element
  : package
  | message
  ;

package
  : PACKAGE NAME ';' %{
    $$ = {
      package: $2
    };
  }%
  ;

message
  : MESSAGE NAME '{' fields '}' %{
    $$ = {
      name: $2,
      fields: $4
    };
  }%
  ;

fields
  : field { $$ = [$1]; }
  | fields field { $$ = $1; $$.push($2); }
  ;

field
  : RULE field_type NAME '=' int field_options ';' %{
    $$ = {};
    $$.rule = $1;
    $$.type = $2;
    $$.name = $3;
    $$.tag  = $5;
    if ($6) {
      if ($6.default) {
        $$.default = $6.default;
      }
    }
  }%
  ;

field_type
  : NAME { $$ = $1; }
  ;

int
  : DEC
  | HEX
  | OCT
  ;

field_options
  : /* empty */
  | '[' field_options_list ']' { $$ = $2; }
  ;

field_options_list
  : field_option { $$ = {}; for (var i in $1) $$[i] = $1[i]; }
  | field_options_list ',' field_option { for (var i in $3) $$[i] = $3[i]; }
  ;

field_option
  : field_option_default { $$ = $1; }
  ;

field_option_default
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
