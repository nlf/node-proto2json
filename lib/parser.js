/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"file":3,"file_elements":4,"EOF":5,"element":6,"package":7,"message":8,"PACKAGE":9,"NAME":10,";":11,"MESSAGE":12,"{":13,"fields":14,"}":15,"field":16,"RULE":17,"field_type":18,"=":19,"int":20,"field_options":21,"DEC":22,"HEX":23,"OCT":24,"[":25,"field_options_list":26,"]":27,"field_option":28,",":29,"field_option_default":30,"DEFAULT":31,"constant":32,"FLOAT":33,"BOOL":34,"string":35,"QUOTE":36,"string_quoted":37,"string_quoted_char":38,"HEX_ESCAPE":39,"OCT_ESCAPE":40,"CHAR_ESCAPE":41,"NON_ESCAPED":42,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"PACKAGE",10:"NAME",11:";",12:"MESSAGE",13:"{",15:"}",17:"RULE",19:"=",22:"DEC",23:"HEX",24:"OCT",25:"[",27:"]",29:",",31:"DEFAULT",33:"FLOAT",34:"BOOL",36:"QUOTE",39:"HEX_ESCAPE",40:"OCT_ESCAPE",41:"CHAR_ESCAPE",42:"NON_ESCAPED"},
productions_: [0,[3,2],[4,1],[4,2],[6,1],[6,1],[7,3],[8,5],[14,1],[14,2],[16,7],[18,1],[20,1],[20,1],[20,1],[21,0],[21,3],[26,1],[26,3],[28,1],[30,3],[32,1],[32,1],[32,1],[32,1],[32,1],[35,3],[37,1],[37,2],[38,1],[38,1],[38,1],[38,1],[38,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
    var result = {
      messages: {}
    };
    var message, field;

    // Loop over the collected elements
    for (var i in this.$) {
      if (this.$.hasOwnProperty(i)) {
        if (this.$[i].package) {
          // Package element
          result.package = this.$[i].package;
        } else {
          // Message element
          message = {
            fields: {}
          };
          for (var j in this.$[i].fields) {
            if (this.$[i].fields.hasOwnProperty(j)) {
              field = this.$[i].fields[j];
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
          result.messages[this.$[i].name] = message;
        }
      }
    }

    return result;
  
break;
case 2: this.$ = [$$[$0]]; 
break;
case 3: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 6:
    this.$ = {
      package: $$[$0-1]
    };
  
break;
case 7:
    this.$ = {
      name: $$[$0-3],
      fields: $$[$0-1]
    };
  
break;
case 8: this.$ = [$$[$0]]; 
break;
case 9: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 10:
    this.$ = {};
    this.$.rule = $$[$0-6];
    this.$.type = $$[$0-5];
    this.$.name = $$[$0-4];
    this.$.tag  = $$[$0-2];
    if ($$[$0-1]) {
      if ($$[$0-1].default) {
        this.$.default = $$[$0-1].default;
      }
    }
  
break;
case 11: this.$ = $$[$0]; 
break;
case 16: this.$ = $$[$0-1]; 
break;
case 17: this.$ = {}; for (var i in $$[$0]) this.$[i] = $$[$0][i]; 
break;
case 18: for (var i in $$[$0]) this.$[i] = $$[$0][i]; 
break;
case 19: this.$ = $$[$0]; 
break;
case 20: this.$ = {default: $$[$0]}; 
break;
case 21: this.$ = parseFloat($$[$0]); 
break;
case 22: this.$ = parseInt($$[$0]); 
break;
case 23: this.$ = ($$[$0] == 'true'); 
break;
case 24: this.$ = $$[$0]; 
break;
case 25: this.$ = $$[$0]; 
break;
case 26: this.$ = $$[$0-1]; 
break;
case 27: this.$ = $$[$0]; 
break;
case 28: this.$ = $$[$0-1] + $$[$0]; 
break;
case 29: this.$ = parser.protobufCharUnescape($$[$0]); 
break;
case 30: this.$ = parser.protobufCharUnescape($$[$0]); 
break;
case 31: this.$ = parser.protobufCharUnescape($$[$0]); 
break;
case 32: this.$ = $$[$0]; 
break;
case 33: this.$ = $$[$0]; 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:[1,6],12:[1,7]},{1:[3]},{5:[1,8],6:9,7:4,8:5,9:[1,6],12:[1,7]},{5:[2,2],9:[2,2],12:[2,2]},{5:[2,4],9:[2,4],12:[2,4]},{5:[2,5],9:[2,5],12:[2,5]},{10:[1,10]},{10:[1,11]},{1:[2,1]},{5:[2,3],9:[2,3],12:[2,3]},{11:[1,12]},{13:[1,13]},{5:[2,6],9:[2,6],12:[2,6]},{14:14,16:15,17:[1,16]},{15:[1,17],16:18,17:[1,16]},{15:[2,8],17:[2,8]},{10:[1,20],18:19},{5:[2,7],9:[2,7],12:[2,7]},{15:[2,9],17:[2,9]},{10:[1,21]},{10:[2,11]},{19:[1,22]},{20:23,22:[1,24],23:[1,25],24:[1,26]},{11:[2,15],21:27,25:[1,28]},{11:[2,12],25:[2,12],27:[2,12],29:[2,12]},{11:[2,13],25:[2,13],27:[2,13],29:[2,13]},{11:[2,14],25:[2,14],27:[2,14],29:[2,14]},{11:[1,29]},{26:30,28:31,30:32,31:[1,33]},{15:[2,10],17:[2,10]},{27:[1,34],29:[1,35]},{27:[2,17],29:[2,17]},{27:[2,19],29:[2,19]},{19:[1,36]},{11:[2,16]},{28:37,30:32,31:[1,33]},{10:[1,42],20:40,22:[1,24],23:[1,25],24:[1,26],32:38,33:[1,39],34:[1,41],35:43,36:[1,44]},{27:[2,18],29:[2,18]},{27:[2,20],29:[2,20]},{27:[2,21],29:[2,21]},{27:[2,22],29:[2,22]},{27:[2,23],29:[2,23]},{27:[2,24],29:[2,24]},{27:[2,25],29:[2,25]},{10:[1,51],37:45,38:46,39:[1,47],40:[1,48],41:[1,49],42:[1,50]},{10:[1,51],36:[1,52],38:53,39:[1,47],40:[1,48],41:[1,49],42:[1,50]},{10:[2,27],36:[2,27],39:[2,27],40:[2,27],41:[2,27],42:[2,27]},{10:[2,29],36:[2,29],39:[2,29],40:[2,29],41:[2,29],42:[2,29]},{10:[2,30],36:[2,30],39:[2,30],40:[2,30],41:[2,30],42:[2,30]},{10:[2,31],36:[2,31],39:[2,31],40:[2,31],41:[2,31],42:[2,31]},{10:[2,32],36:[2,32],39:[2,32],40:[2,32],41:[2,32],42:[2,32]},{10:[2,33],36:[2,33],39:[2,33],40:[2,33],41:[2,33],42:[2,33]},{27:[2,26],29:[2,26]},{10:[2,28],36:[2,28],39:[2,28],40:[2,28],41:[2,28],42:[2,28]}],
defaultActions: {8:[2,1],20:[2,11],34:[2,16]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

parser.protobufCharUnescape = function (chr) {
  // not yet implemented
  return chr;
}

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:return 5
break;
case 1:this.begin('package'); return 9;
break;
case 2:this.popState(); return 11;
break;
case 3:return 10;
break;
case 4:this.begin('message'); return 12;
break;
case 5:return 10;
break;
case 6:this.begin('message_body'); return 13;
break;
case 7:this.popState(); this.popState(); return 15;
break;
case 8:this.begin('message_field'); return 17;
break;
case 9:this.popState(); return 11;
break;
case 10:return 10;
break;
case 11:return 19;
break;
case 12:return 22;
break;
case 13:return 23;
break;
case 14:return 24;
break;
case 15:return 33;
break;
case 16:return 34;
break;
case 17:this.begin('message_field_options'); return 25;
break;
case 18:this.popState(); return 27;
break;
case 19:return 29;
break;
case 20:return 31;
break;
case 21:return 19;
break;
case 22:return 33;
break;
case 23:return 22;
break;
case 24:return 23;
break;
case 25:return 24;
break;
case 26:return 34;
break;
case 27:return 10;
break;
case 28:this.begin('string_quoted_content'); return 36;
break;
case 29:this.popState(); return 36;
break;
case 30:return 42;
break;
case 31:return 42;
break;
case 32:return 39;
break;
case 33:return 40;
break;
case 34:return 41;
break;
case 35:/* skip whitespaces */
break;
case 36:return 'INVALID'
break;
}
};
lexer.rules = [/^(?:$)/,/^(?:package\b)/,/^(?:;)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:message\b)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:\{)/,/^(?:\})/,/^(?:((required|optional|repeated)))/,/^(?:;)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:=)/,/^(?:(([1-9][0-9]*)))/,/^(?:(([xX][A-Fa-f0-9]+)))/,/^(?:(([0-7]+)))/,/^(?:((\d+(\.\d+)?([Ee][\+-]?\d+)?)))/,/^(?:((true|false)))/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?:default\b)/,/^(?:=)/,/^(?:((\d+(\.\d+)?([Ee][\+-]?\d+)?)))/,/^(?:(([1-9][0-9]*)))/,/^(?:(([xX][A-Fa-f0-9]+)))/,/^(?:(([0-7]+)))/,/^(?:((true|false)))/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:((['"])))/,/^(?:((['"])))/,/^(?:\s+)/,/^(?:(([^\0\n])))/,/^(?:((\\[Xx][A-Fa-f0-9]{1,2})))/,/^(?:((\\?[0-7]{1,3})))/,/^(?:((\\[abfnrtv\\\?'"])))/,/^(?:\s+)/,/^(?:.)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,4,35,36],"inclusive":true},"package":{"rules":[0,2,3,35,36],"inclusive":false},"message":{"rules":[0,5,6,35,36],"inclusive":false},"message_body":{"rules":[0,7,8,35,36],"inclusive":false},"message_field":{"rules":[0,9,10,11,12,13,14,15,16,17,35,36],"inclusive":false},"message_field_options":{"rules":[0,18,19,20,21,22,23,24,25,26,27,28,35,36],"inclusive":false},"string_quoted_content":{"rules":[0,29,30,31,32,33,34,35,36],"inclusive":false}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}