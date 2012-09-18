/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"file":3,"file_elements":4,"EOF":5,"element":6,"package":7,"message":8,"enum":9,"option":10,"PACKAGE":11,"NAME":12,";":13,"MESSAGE":14,"{":15,"message_body":16,"}":17,"message_field":18,"RULE":19,"=":20,"int":21,"message_field_options":22,"DEC":23,"HEX":24,"OCT":25,"[":26,"message_field_options_list":27,"]":28,"message_field_option":29,",":30,"constant":31,"FLOAT":32,"BOOL":33,"string":34,"QUOTE":35,"string_quoted":36,"string_quoted_char":37,"HEX_ESCAPE":38,"OCT_ESCAPE":39,"CHAR_ESCAPE":40,"NON_ESCAPED":41,"ENUM":42,"enum_fields":43,"enum_field":44,"OPTION":45,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",11:"PACKAGE",12:"NAME",13:";",14:"MESSAGE",15:"{",17:"}",19:"RULE",20:"=",23:"DEC",24:"HEX",25:"OCT",26:"[",28:"]",30:",",32:"FLOAT",33:"BOOL",35:"QUOTE",38:"HEX_ESCAPE",39:"OCT_ESCAPE",40:"CHAR_ESCAPE",41:"NON_ESCAPED",42:"ENUM",45:"OPTION"},
productions_: [0,[3,2],[4,1],[4,2],[6,1],[6,1],[6,1],[6,1],[7,3],[8,5],[16,0],[16,2],[16,2],[16,2],[16,2],[18,7],[21,1],[21,1],[21,1],[22,0],[22,3],[27,1],[27,3],[29,3],[31,1],[31,1],[31,1],[31,1],[31,1],[34,3],[36,1],[36,2],[37,1],[37,1],[37,1],[37,1],[37,1],[9,5],[43,1],[43,2],[44,4],[10,5]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return this.$; 
break;
case 2: this.$ = [$$[$0]]; 
break;
case 3: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 8:
    this.$ = {
      type: 'package',
      name: $$[$0-1]
    };
  
break;
case 9:
    this.$ = {
      type: 'message',
      name: $$[$0-3],
      enums: $$[$0-1].enums,
      options: $$[$0-1].options,
      messages: $$[$0-1].messages,
      fields: $$[$0-1].fields
    };
  
break;
case 10: this.$ = {enums: [], options: [], messages: [], fields: []}; 
break;
case 11: this.$ = $$[$0-1]; this.$.enums.push($$[$0]); 
break;
case 12: this.$ = $$[$0-1]; this.$.options.push($$[$0]); 
break;
case 13: this.$ = $$[$0-1]; this.$.messages.push($$[$0]); 
break;
case 14: this.$ = $$[$0-1]; this.$.fields.push($$[$0]); 
break;
case 15:
    this.$ = {
      rule: $$[$0-6],
      type: $$[$0-5],
      name: $$[$0-4],
      tag: $$[$0-2],
      options: $$[$0-1]
    };
  
break;
case 19: this.$ = []; 
break;
case 20: this.$ = $$[$0-1]; 
break;
case 21: this.$ = [$$[$0]]; 
break;
case 22: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 23:
    this.$ = {
      type: 'option',
      name: $$[$0-2],
      value: $$[$0]
    };
  
break;
case 24: this.$ = parseFloat($$[$0]); 
break;
case 25: this.$ = parseInt($$[$0]); 
break;
case 26: this.$ = ($$[$0] == 'true'); 
break;
case 27: this.$ = $$[$0]; 
break;
case 28: this.$ = $$[$0]; 
break;
case 29: this.$ = $$[$0-1]; 
break;
case 30: this.$ = $$[$0]; 
break;
case 31: this.$ = $$[$0-1] + $$[$0]; 
break;
case 32: this.$ = parser.protobufCharUnescape($$[$0]); 
break;
case 33: this.$ = parser.protobufCharUnescape($$[$0]); 
break;
case 34: this.$ = parser.protobufCharUnescape($$[$0]); 
break;
case 35: this.$ = $$[$0]; 
break;
case 36: this.$ = $$[$0]; 
break;
case 37:
    this.$ = {
      type: 'enum',
      name: $$[$0-3],
      fields: $$[$0-1]
    };
  
break;
case 38: this.$ = [$$[$0]]; 
break;
case 39: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 40:
    this.$ = {};
    this.$.name = $$[$0-3];
    this.$.tag  = $$[$0-1];
  
break;
case 41:
    this.$ = {
      type: 'option',
      name: $$[$0-3],
      value: $$[$0-1]
    };
  
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:[1,8],14:[1,9],42:[1,10],45:[1,11]},{1:[3]},{5:[1,12],6:13,7:4,8:5,9:6,10:7,11:[1,8],14:[1,9],42:[1,10],45:[1,11]},{5:[2,2],11:[2,2],14:[2,2],42:[2,2],45:[2,2]},{5:[2,4],11:[2,4],14:[2,4],42:[2,4],45:[2,4]},{5:[2,5],11:[2,5],14:[2,5],42:[2,5],45:[2,5]},{5:[2,6],11:[2,6],14:[2,6],42:[2,6],45:[2,6]},{5:[2,7],11:[2,7],14:[2,7],42:[2,7],45:[2,7]},{12:[1,14]},{12:[1,15]},{12:[1,16]},{12:[1,17]},{1:[2,1]},{5:[2,3],11:[2,3],14:[2,3],42:[2,3],45:[2,3]},{13:[1,18]},{15:[1,19]},{15:[1,20]},{20:[1,21]},{5:[2,8],11:[2,8],14:[2,8],42:[2,8],45:[2,8]},{14:[2,10],16:22,17:[2,10],19:[2,10],42:[2,10],45:[2,10]},{12:[1,25],43:23,44:24},{12:[1,30],21:28,23:[1,32],24:[1,33],25:[1,34],31:26,32:[1,27],33:[1,29],34:31,35:[1,35]},{8:39,9:37,10:38,14:[1,9],17:[1,36],18:40,19:[1,41],42:[1,10],45:[1,11]},{12:[1,25],17:[1,42],44:43},{12:[2,38],17:[2,38]},{20:[1,44]},{13:[1,45]},{13:[2,24],28:[2,24],30:[2,24]},{13:[2,25],28:[2,25],30:[2,25]},{13:[2,26],28:[2,26],30:[2,26]},{13:[2,27],28:[2,27],30:[2,27]},{13:[2,28],28:[2,28],30:[2,28]},{13:[2,16],26:[2,16],28:[2,16],30:[2,16]},{13:[2,17],26:[2,17],28:[2,17],30:[2,17]},{13:[2,18],26:[2,18],28:[2,18],30:[2,18]},{12:[1,52],36:46,37:47,38:[1,48],39:[1,49],40:[1,50],41:[1,51]},{5:[2,9],11:[2,9],14:[2,9],17:[2,9],19:[2,9],42:[2,9],45:[2,9]},{14:[2,11],17:[2,11],19:[2,11],42:[2,11],45:[2,11]},{14:[2,12],17:[2,12],19:[2,12],42:[2,12],45:[2,12]},{14:[2,13],17:[2,13],19:[2,13],42:[2,13],45:[2,13]},{14:[2,14],17:[2,14],19:[2,14],42:[2,14],45:[2,14]},{12:[1,53]},{5:[2,37],11:[2,37],14:[2,37],17:[2,37],19:[2,37],42:[2,37],45:[2,37]},{12:[2,39],17:[2,39]},{21:54,23:[1,32],24:[1,33],25:[1,34]},{5:[2,41],11:[2,41],14:[2,41],17:[2,41],19:[2,41],42:[2,41],45:[2,41]},{12:[1,52],35:[1,55],37:56,38:[1,48],39:[1,49],40:[1,50],41:[1,51]},{12:[2,30],35:[2,30],38:[2,30],39:[2,30],40:[2,30],41:[2,30]},{12:[2,32],35:[2,32],38:[2,32],39:[2,32],40:[2,32],41:[2,32]},{12:[2,33],35:[2,33],38:[2,33],39:[2,33],40:[2,33],41:[2,33]},{12:[2,34],35:[2,34],38:[2,34],39:[2,34],40:[2,34],41:[2,34]},{12:[2,35],35:[2,35],38:[2,35],39:[2,35],40:[2,35],41:[2,35]},{12:[2,36],35:[2,36],38:[2,36],39:[2,36],40:[2,36],41:[2,36]},{12:[1,57]},{13:[1,58]},{13:[2,29],28:[2,29],30:[2,29]},{12:[2,31],35:[2,31],38:[2,31],39:[2,31],40:[2,31],41:[2,31]},{20:[1,59]},{12:[2,40],17:[2,40]},{21:60,23:[1,32],24:[1,33],25:[1,34]},{13:[2,19],22:61,26:[1,62]},{13:[1,63]},{12:[1,66],27:64,29:65},{14:[2,15],17:[2,15],19:[2,15],42:[2,15],45:[2,15]},{28:[1,67],30:[1,68]},{28:[2,21],30:[2,21]},{20:[1,69]},{13:[2,20]},{12:[1,66],29:70},{12:[1,30],21:28,23:[1,32],24:[1,33],25:[1,34],31:71,32:[1,27],33:[1,29],34:31,35:[1,35]},{28:[2,22],30:[2,22]},{28:[2,23],30:[2,23]}],
defaultActions: {12:[2,1],67:[2,20]},
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
case 0:return 5;
break;
case 1:this.begin('package'); return 11;
break;
case 2:this.popState(); return 13;
break;
case 3:return 12;
break;
case 4:this.begin('message'); return 14;
break;
case 5:return 12;
break;
case 6:this.begin('message_body'); return 15;
break;
case 7:this.popState(); this.popState(); return 17;
break;
case 8:this.begin('enum'); return 42;
break;
case 9:this.begin('option'); return 45;
break;
case 10:this.begin('message'); return 14;
break;
case 11:this.begin('message_field'); return 19;
break;
case 12:this.popState(); return 13;
break;
case 13:return 12;
break;
case 14:return 20;
break;
case 15:return 23;
break;
case 16:return 24;
break;
case 17:return 25;
break;
case 18:return 32;
break;
case 19:return 33;
break;
case 20:this.begin('message_field_options'); return 26;
break;
case 21:this.begin('message_field_option'); return 12;
break;
case 22:this.begin('message_field_option_value'); return 20;
break;
case 23:return 32;
break;
case 24:return 23;
break;
case 25:return 24;
break;
case 26:return 25;
break;
case 27:return 33;
break;
case 28:return 12;
break;
case 29:this.begin('string_quoted_content'); parser.protobufCharUnescapeCurrentQuote = this.match; return 35;
break;
case 30:this.popState(); this.popState(); return 30;
break;
case 31:this.popState(); this.popState(); this.popState(); return 28;
break;
case 32:return 41;
break;
case 33:return 38;
break;
case 34:return 39;
break;
case 35:return 40;
break;
case 36:if (parser.protobufCharUnescapeCurrentQuote === this.match) { this.popState(); return 35; } else { return 'NON_ESCAPED'; }
break;
case 37:return 41;
break;
case 38:this.begin('enum'); return 42;
break;
case 39:return 12;
break;
case 40:this.begin('enum_body'); return 15;
break;
case 41:this.popState(); this.popState(); return 17;
break;
case 42:this.begin('enum_field'); return 12;
break;
case 43:this.popState(); return 13;
break;
case 44:return 20;
break;
case 45:return 23;
break;
case 46:return 24;
break;
case 47:return 25;
break;
case 48:this.begin('option'); return 45;
break;
case 49:this.popState(); this.popState(); return 13;
break;
case 50:return 12;
break;
case 51:this.begin('option_value'); return 20;
break;
case 52:return 32;
break;
case 53:return 23;
break;
case 54:return 24;
break;
case 55:return 25;
break;
case 56:return 33;
break;
case 57:return 12;
break;
case 58:this.begin('string_quoted_content'); parser.protobufCharUnescapeCurrentQuote = this.match; return 35;
break;
case 59:/* skip whitespaces */
break;
case 60:return 'INVALID'
break;
}
};
lexer.rules = [/^(?:$)/,/^(?:package\b)/,/^(?:;)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:message\b)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:\{)/,/^(?:\})/,/^(?:enum\b)/,/^(?:option\b)/,/^(?:message\b)/,/^(?:((required|optional|repeated)))/,/^(?:;)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:=)/,/^(?:(([1-9][0-9]*)))/,/^(?:(([xX][A-Fa-f0-9]+)))/,/^(?:(([0-7]+)))/,/^(?:((\d+(\.\d+)?([Ee][\+-]?\d+)?)))/,/^(?:((true|false)))/,/^(?:\[)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:=)/,/^(?:((\d+(\.\d+)?([Ee][\+-]?\d+)?)))/,/^(?:(([1-9][0-9]*)))/,/^(?:(([xX][A-Fa-f0-9]+)))/,/^(?:(([0-7]+)))/,/^(?:((true|false)))/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:((['"])))/,/^(?:,)/,/^(?:\])/,/^(?:\s+)/,/^(?:((\\[Xx][A-Fa-f0-9]{1,2})))/,/^(?:((\\?[0-7]{1,3})))/,/^(?:((\\[abfnrtv\\/'"])))/,/^(?:((['"])))/,/^(?:(([^\0\n])))/,/^(?:enum\b)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:\{)/,/^(?:\})/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:;)/,/^(?:=)/,/^(?:(([1-9][0-9]*)))/,/^(?:(([xX][A-Fa-f0-9]+)))/,/^(?:(([0-7]+)))/,/^(?:option\b)/,/^(?:;)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:=)/,/^(?:((\d+(\.\d+)?([Ee][\+-]?\d+)?)))/,/^(?:(([1-9][0-9]*)))/,/^(?:(([xX][A-Fa-f0-9]+)))/,/^(?:(([0-7]+)))/,/^(?:((true|false)))/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:((['"])))/,/^(?:\s+)/,/^(?:.)/];
lexer.conditions = {"enum":{"rules":[0,39,40,59,60],"inclusive":false},"enum_body":{"rules":[0,41,42,59,60],"inclusive":false},"enum_field":{"rules":[0,43,44,45,46,47,59,60],"inclusive":false},"string_quoted_content":{"rules":[0,32,33,34,35,36,37,59,60],"inclusive":false},"option":{"rules":[0,50,51,59,60],"inclusive":false},"option_value":{"rules":[0,49,52,53,54,55,56,57,58,59,60],"inclusive":false},"message":{"rules":[0,5,6,59,60],"inclusive":false},"message_body":{"rules":[0,7,8,9,10,11,59,60],"inclusive":false},"message_field":{"rules":[0,12,13,14,15,16,17,18,19,20,59,60],"inclusive":false},"message_field_options":{"rules":[0,21,59,60],"inclusive":false},"message_field_option":{"rules":[0,22,59,60],"inclusive":false},"message_field_option_value":{"rules":[0,23,24,25,26,27,28,29,30,31,59,60],"inclusive":false},"INITIAL":{"rules":[0,1,4,38,48,59,60],"inclusive":true},"package":{"rules":[0,2,3,59,60],"inclusive":false}};
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