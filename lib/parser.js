/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"file":3,"file_elements":4,"EOF":5,"element":6,"package":7,"message":8,"enum":9,"PACKAGE":10,"NAME":11,";":12,"MESSAGE":13,"{":14,"message_body":15,"}":16,"message_field":17,"RULE":18,"message_field_type":19,"=":20,"int":21,"message_field_options":22,"DEC":23,"HEX":24,"OCT":25,"[":26,"message_field_options_list":27,"]":28,"message_field_option":29,",":30,"message_field_option_default":31,"DEFAULT":32,"constant":33,"FLOAT":34,"BOOL":35,"string":36,"QUOTE":37,"string_quoted":38,"string_quoted_char":39,"HEX_ESCAPE":40,"OCT_ESCAPE":41,"CHAR_ESCAPE":42,"NON_ESCAPED":43,"ENUM":44,"enum_fields":45,"enum_field":46,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",10:"PACKAGE",11:"NAME",12:";",13:"MESSAGE",14:"{",16:"}",18:"RULE",20:"=",23:"DEC",24:"HEX",25:"OCT",26:"[",28:"]",30:",",32:"DEFAULT",34:"FLOAT",35:"BOOL",37:"QUOTE",40:"HEX_ESCAPE",41:"OCT_ESCAPE",42:"CHAR_ESCAPE",43:"NON_ESCAPED",44:"ENUM"},
productions_: [0,[3,2],[4,1],[4,2],[6,1],[6,1],[6,1],[7,3],[8,5],[15,0],[15,2],[15,2],[17,7],[19,1],[21,1],[21,1],[21,1],[22,0],[22,3],[27,1],[27,3],[29,1],[31,3],[33,1],[33,1],[33,1],[33,1],[33,1],[36,3],[38,1],[38,2],[39,1],[39,1],[39,1],[39,1],[39,1],[9,5],[45,1],[45,2],[46,4]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return this.$; 
break;
case 2: this.$ = [$$[$0]]; 
break;
case 3: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 7:
    this.$ = {
      type: 'package',
      name: $$[$0-1]
    };
  
break;
case 8:
    this.$ = {
      type: 'message',
      name: $$[$0-3],
      enums: $$[$0-1].enums,
      fields: $$[$0-1].fields
    };
  
break;
case 9: this.$ = {enums: [], fields: []}; 
break;
case 10: this.$ = $$[$0-1]; this.$.enums.push($$[$0]); 
break;
case 11: this.$ = $$[$0-1]; this.$.fields.push($$[$0]); 
break;
case 12:
    this.$ = {
      rule: $$[$0-6],
      type: $$[$0-5],
      name: $$[$0-4],
      tag : $$[$0-2]
    };
    if ($$[$0-1]) {
      if (typeof $$[$0-1].default !== 'undefined') {
        this.$.default = $$[$0-1].default;
      }
    }
  
break;
case 13: this.$ = $$[$0]; 
break;
case 18: this.$ = $$[$0-1]; 
break;
case 19: this.$ = {}; for (var i in $$[$0]) this.$[i] = $$[$0][i]; 
break;
case 20: for (var i in $$[$0]) this.$[i] = $$[$0][i]; 
break;
case 21: this.$ = $$[$0]; 
break;
case 22: this.$ = {default: $$[$0]}; 
break;
case 23: this.$ = parseFloat($$[$0]); 
break;
case 24: this.$ = parseInt($$[$0]); 
break;
case 25: this.$ = ($$[$0] == 'true'); 
break;
case 26: this.$ = $$[$0]; 
break;
case 27: this.$ = $$[$0]; 
break;
case 28: this.$ = $$[$0-1]; 
break;
case 29: this.$ = $$[$0]; 
break;
case 30: this.$ = $$[$0-1] + $$[$0]; 
break;
case 31: this.$ = parser.protobufCharUnescape($$[$0]); 
break;
case 32: this.$ = parser.protobufCharUnescape($$[$0]); 
break;
case 33: this.$ = parser.protobufCharUnescape($$[$0]); 
break;
case 34: this.$ = $$[$0]; 
break;
case 35: this.$ = $$[$0]; 
break;
case 36:
    this.$ = {
      type: 'enum',
      name: $$[$0-3],
      fields: $$[$0-1]
    };
  
break;
case 37: this.$ = [$$[$0]]; 
break;
case 38: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 39:
    this.$ = {};
    this.$.name = $$[$0-3];
    this.$.tag  = $$[$0-1];
  
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:[1,7],13:[1,8],44:[1,9]},{1:[3]},{5:[1,10],6:11,7:4,8:5,9:6,10:[1,7],13:[1,8],44:[1,9]},{5:[2,2],10:[2,2],13:[2,2],44:[2,2]},{5:[2,4],10:[2,4],13:[2,4],44:[2,4]},{5:[2,5],10:[2,5],13:[2,5],44:[2,5]},{5:[2,6],10:[2,6],13:[2,6],44:[2,6]},{11:[1,12]},{11:[1,13]},{11:[1,14]},{1:[2,1]},{5:[2,3],10:[2,3],13:[2,3],44:[2,3]},{12:[1,15]},{14:[1,16]},{14:[1,17]},{5:[2,7],10:[2,7],13:[2,7],44:[2,7]},{15:18,16:[2,9],18:[2,9],44:[2,9]},{11:[1,21],45:19,46:20},{9:23,16:[1,22],17:24,18:[1,25],44:[1,9]},{11:[1,21],16:[1,26],46:27},{11:[2,37],16:[2,37]},{20:[1,28]},{5:[2,8],10:[2,8],13:[2,8],44:[2,8]},{16:[2,10],18:[2,10],44:[2,10]},{16:[2,11],18:[2,11],44:[2,11]},{11:[1,30],19:29},{5:[2,36],10:[2,36],13:[2,36],16:[2,36],18:[2,36],44:[2,36]},{11:[2,38],16:[2,38]},{21:31,23:[1,32],24:[1,33],25:[1,34]},{11:[1,35]},{11:[2,13]},{12:[1,36]},{12:[2,14],26:[2,14],28:[2,14],30:[2,14]},{12:[2,15],26:[2,15],28:[2,15],30:[2,15]},{12:[2,16],26:[2,16],28:[2,16],30:[2,16]},{20:[1,37]},{11:[2,39],16:[2,39]},{21:38,23:[1,32],24:[1,33],25:[1,34]},{12:[2,17],22:39,26:[1,40]},{12:[1,41]},{27:42,29:43,31:44,32:[1,45]},{16:[2,12],18:[2,12],44:[2,12]},{28:[1,46],30:[1,47]},{28:[2,19],30:[2,19]},{28:[2,21],30:[2,21]},{20:[1,48]},{12:[2,18]},{29:49,31:44,32:[1,45]},{11:[1,54],21:52,23:[1,32],24:[1,33],25:[1,34],33:50,34:[1,51],35:[1,53],36:55,37:[1,56]},{28:[2,20],30:[2,20]},{28:[2,22],30:[2,22]},{28:[2,23],30:[2,23]},{28:[2,24],30:[2,24]},{28:[2,25],30:[2,25]},{28:[2,26],30:[2,26]},{28:[2,27],30:[2,27]},{11:[1,63],38:57,39:58,40:[1,59],41:[1,60],42:[1,61],43:[1,62]},{11:[1,63],37:[1,64],39:65,40:[1,59],41:[1,60],42:[1,61],43:[1,62]},{11:[2,29],37:[2,29],40:[2,29],41:[2,29],42:[2,29],43:[2,29]},{11:[2,31],37:[2,31],40:[2,31],41:[2,31],42:[2,31],43:[2,31]},{11:[2,32],37:[2,32],40:[2,32],41:[2,32],42:[2,32],43:[2,32]},{11:[2,33],37:[2,33],40:[2,33],41:[2,33],42:[2,33],43:[2,33]},{11:[2,34],37:[2,34],40:[2,34],41:[2,34],42:[2,34],43:[2,34]},{11:[2,35],37:[2,35],40:[2,35],41:[2,35],42:[2,35],43:[2,35]},{28:[2,28],30:[2,28]},{11:[2,30],37:[2,30],40:[2,30],41:[2,30],42:[2,30],43:[2,30]}],
defaultActions: {10:[2,1],30:[2,13],46:[2,18]},
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

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:return 5
break;
case 1:this.begin('package'); return 10;
break;
case 2:this.popState(); return 12;
break;
case 3:return 11;
break;
case 4:this.begin('message'); return 13;
break;
case 5:return 11;
break;
case 6:this.begin('message_body'); return 14;
break;
case 7:this.popState(); this.popState(); return 16;
break;
case 8:this.begin('enum'); return 44;
break;
case 9:this.begin('message_field'); return 18;
break;
case 10:this.popState(); return 12;
break;
case 11:return 11;
break;
case 12:return 20;
break;
case 13:return 23;
break;
case 14:return 24;
break;
case 15:return 25;
break;
case 16:return 34;
break;
case 17:return 35;
break;
case 18:this.begin('message_field_options'); return 26;
break;
case 19:this.popState(); return 28;
break;
case 20:return 30;
break;
case 21:return 32;
break;
case 22:return 20;
break;
case 23:return 34;
break;
case 24:return 23;
break;
case 25:return 24;
break;
case 26:return 25;
break;
case 27:return 35;
break;
case 28:return 11;
break;
case 29:this.begin('string_quoted_content'); parser.protobufCharUnescapeCurrentQuote = this.match; return 37;
break;
case 30:return 43;
break;
case 31:return 40;
break;
case 32:return 41;
break;
case 33:return 42;
break;
case 34:if (parser.protobufCharUnescapeCurrentQuote === this.match) { this.popState(); return 37; } else { return 'NON_ESCAPED'; }
break;
case 35:return 43;
break;
case 36:this.begin('enum'); return 44;
break;
case 37:return 11;
break;
case 38:this.begin('enum_body'); return 14;
break;
case 39:this.popState(); this.popState(); return 16;
break;
case 40:this.begin('enum_field'); return 11;
break;
case 41:this.popState(); return 12;
break;
case 42:return 20;
break;
case 43:return 23;
break;
case 44:return 24;
break;
case 45:return 25;
break;
case 46:/* skip whitespaces */
break;
case 47:return 'INVALID'
break;
}
};
lexer.rules = [/^(?:$)/,/^(?:package\b)/,/^(?:;)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:message\b)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:\{)/,/^(?:\})/,/^(?:enum\b)/,/^(?:((required|optional|repeated)))/,/^(?:;)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:=)/,/^(?:(([1-9][0-9]*)))/,/^(?:(([xX][A-Fa-f0-9]+)))/,/^(?:(([0-7]+)))/,/^(?:((\d+(\.\d+)?([Ee][\+-]?\d+)?)))/,/^(?:((true|false)))/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?:default\b)/,/^(?:=)/,/^(?:((\d+(\.\d+)?([Ee][\+-]?\d+)?)))/,/^(?:(([1-9][0-9]*)))/,/^(?:(([xX][A-Fa-f0-9]+)))/,/^(?:(([0-7]+)))/,/^(?:((true|false)))/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:((['"])))/,/^(?:\s+)/,/^(?:((\\[Xx][A-Fa-f0-9]{1,2})))/,/^(?:((\\?[0-7]{1,3})))/,/^(?:((\\[abfnrtv\\/'"])))/,/^(?:((['"])))/,/^(?:(([^\0\n])))/,/^(?:enum\b)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:\{)/,/^(?:\})/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:;)/,/^(?:=)/,/^(?:(([1-9][0-9]*)))/,/^(?:(([xX][A-Fa-f0-9]+)))/,/^(?:(([0-7]+)))/,/^(?:\s+)/,/^(?:.)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,4,36,46,47],"inclusive":true},"package":{"rules":[0,2,3,46,47],"inclusive":false},"message":{"rules":[0,5,6,46,47],"inclusive":false},"message_body":{"rules":[0,7,8,9,46,47],"inclusive":false},"message_field":{"rules":[0,10,11,12,13,14,15,16,17,18,46,47],"inclusive":false},"message_field_options":{"rules":[0,19,20,21,22,23,24,25,26,27,28,29,46,47],"inclusive":false},"enum":{"rules":[0,37,38,46,47],"inclusive":false},"enum_body":{"rules":[0,39,40,46,47],"inclusive":false},"enum_field":{"rules":[0,41,42,43,44,45,46,47],"inclusive":false},"string_quoted_content":{"rules":[0,30,31,32,33,34,35,46,47],"inclusive":false}};
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