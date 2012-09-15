// Google Protocol Buffers .proto files grammar

/* lexical grammar */
%lex

rule ("required"|"optional"|"repeated")
name ([A-Za-z_][A-Za-z0-9_]*)
int  ([1-9][0-9]*)

%%

\s+                   /* skip whitespace */

"package"             return 'PACKAGE'
"message"             return 'MESSAGE'
{rule}                return 'RULE'
{name}                return 'NAME'
{int}                 return 'INT'

";"                   return ';'
"{"                   return '{'
"}"                   return '}'
"="                   return '='
<<EOF>>               return 'EOF'
.                     return 'INVALID'

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
                tag:  field.tag
              };
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

field_type
  : NAME { $$ = $1; }
  ;

field
  : RULE field_type NAME '=' INT ';' %{
    $$ = {};
    $$.rule = $1;
    $$.type = $2;
    $$.name = $3;
    $$.tag  = $5;
  }%
  ;
