/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"file":3,"file_elements":4,"EOF":5,"element":6,"package":7,"import":8,"message":9,"enum":10,"option":11,"PACKAGE":12,"NAME":13,";":14,"IMPORT":15,"constant":16,"MESSAGE":17,"{":18,"message_body":19,"}":20,"message_field":21,"RULE":22,"=":23,"int":24,"message_field_options":25,"DEC":26,"HEX":27,"OCT":28,"[":29,"message_field_options_list":30,"]":31,"message_field_option":32,",":33,"FLOAT":34,"BOOL":35,"string":36,"QUOTE":37,"string_quoted":38,"string_quoted_char":39,"HEX_ESCAPE":40,"OCT_ESCAPE":41,"CHAR_ESCAPE":42,"NON_ESCAPED":43,"ENUM":44,"enum_fields":45,"enum_field":46,"OPTION":47,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",12:"PACKAGE",13:"NAME",14:";",15:"IMPORT",17:"MESSAGE",18:"{",20:"}",22:"RULE",23:"=",26:"DEC",27:"HEX",28:"OCT",29:"[",31:"]",33:",",34:"FLOAT",35:"BOOL",37:"QUOTE",40:"HEX_ESCAPE",41:"OCT_ESCAPE",42:"CHAR_ESCAPE",43:"NON_ESCAPED",44:"ENUM",47:"OPTION"},
productions_: [0,[3,2],[4,1],[4,2],[6,1],[6,1],[6,1],[6,1],[6,1],[7,3],[8,3],[9,5],[19,0],[19,2],[19,2],[19,2],[19,2],[21,7],[24,1],[24,1],[24,1],[25,0],[25,3],[30,1],[30,3],[32,3],[16,1],[16,1],[16,1],[16,1],[16,1],[36,3],[38,1],[38,2],[39,1],[39,1],[39,1],[39,1],[39,1],[10,5],[45,1],[45,2],[46,4],[11,5]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return this.$; 
break;
case 2: this.$ = [$$[$0]]; 
break;
case 3: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 9:
    this.$ = {
      type: 'package',
      name: $$[$0-1]
    };
  
break;
case 10:
    this.$ = {
      type: 'import',
      name: $$[$0-1]
    };
  
break;
case 11:
    this.$ = {
      type: 'message',
      name: $$[$0-3],
      enums: $$[$0-1].enums,
      options: $$[$0-1].options,
      messages: $$[$0-1].messages,
      fields: $$[$0-1].fields
    };
  
break;
case 12: this.$ = {enums: [], options: [], messages: [], fields: []}; 
break;
case 13: this.$ = $$[$0-1]; this.$.enums.push($$[$0]); 
break;
case 14: this.$ = $$[$0-1]; this.$.options.push($$[$0]); 
break;
case 15: this.$ = $$[$0-1]; this.$.messages.push($$[$0]); 
break;
case 16: this.$ = $$[$0-1]; this.$.fields.push($$[$0]); 
break;
case 17:
    this.$ = {
      rule: $$[$0-6],
      type: $$[$0-5],
      name: $$[$0-4],
      tag: parseInt($$[$0-2]),
      options: $$[$0-1]
    };
  
break;
case 21: this.$ = []; 
break;
case 22: this.$ = $$[$0-1]; 
break;
case 23: this.$ = [$$[$0]]; 
break;
case 24: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 25:
    this.$ = {
      type: 'option',
      name: $$[$0-2],
      value: $$[$0]
    };
  
break;
case 26: this.$ = parseFloat($$[$0]); 
break;
case 27: this.$ = parseInt($$[$0]); 
break;
case 28: this.$ = ($$[$0] == 'true'); 
break;
case 29: this.$ = $$[$0]; 
break;
case 30: this.$ = $$[$0]; 
break;
case 31: this.$ = $$[$0-1]; 
break;
case 32: this.$ = $$[$0]; 
break;
case 33: this.$ = $$[$0-1] + $$[$0]; 
break;
case 34: this.$ = parser.protobufCharUnescape($$[$0]); 
break;
case 35: this.$ = parser.protobufCharUnescape($$[$0]); 
break;
case 36: this.$ = parser.protobufCharUnescape($$[$0]); 
break;
case 37: this.$ = $$[$0]; 
break;
case 38: this.$ = $$[$0]; 
break;
case 39:
    this.$ = {
      type: 'enum',
      name: $$[$0-3],
      fields: $$[$0-1]
    };
  
break;
case 40: this.$ = [$$[$0]]; 
break;
case 41: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 42:
    this.$ = {};
    this.$.name = $$[$0-3];
    this.$.tag  = parseInt($$[$0-1]);
  
break;
case 43:
    this.$ = {
      type: 'option',
      name: $$[$0-3],
      value: $$[$0-1]
    };
  
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:[1,9],15:[1,10],17:[1,11],44:[1,12],47:[1,13]},{1:[3]},{5:[1,14],6:15,7:4,8:5,9:6,10:7,11:8,12:[1,9],15:[1,10],17:[1,11],44:[1,12],47:[1,13]},{5:[2,2],12:[2,2],15:[2,2],17:[2,2],44:[2,2],47:[2,2]},{5:[2,4],12:[2,4],15:[2,4],17:[2,4],44:[2,4],47:[2,4]},{5:[2,5],12:[2,5],15:[2,5],17:[2,5],44:[2,5],47:[2,5]},{5:[2,6],12:[2,6],15:[2,6],17:[2,6],44:[2,6],47:[2,6]},{5:[2,7],12:[2,7],15:[2,7],17:[2,7],44:[2,7],47:[2,7]},{5:[2,8],12:[2,8],15:[2,8],17:[2,8],44:[2,8],47:[2,8]},{13:[1,16]},{13:[1,21],16:17,24:19,26:[1,23],27:[1,24],28:[1,25],34:[1,18],35:[1,20],36:22,37:[1,26]},{13:[1,27]},{13:[1,28]},{13:[1,29]},{1:[2,1]},{5:[2,3],12:[2,3],15:[2,3],17:[2,3],44:[2,3],47:[2,3]},{14:[1,30]},{14:[1,31]},{14:[2,26],31:[2,26],33:[2,26]},{14:[2,27],31:[2,27],33:[2,27]},{14:[2,28],31:[2,28],33:[2,28]},{14:[2,29],31:[2,29],33:[2,29]},{14:[2,30],31:[2,30],33:[2,30]},{14:[2,18],29:[2,18],31:[2,18],33:[2,18]},{14:[2,19],29:[2,19],31:[2,19],33:[2,19]},{14:[2,20],29:[2,20],31:[2,20],33:[2,20]},{13:[1,38],38:32,39:33,40:[1,34],41:[1,35],42:[1,36],43:[1,37]},{18:[1,39]},{18:[1,40]},{23:[1,41]},{5:[2,9],12:[2,9],15:[2,9],17:[2,9],44:[2,9],47:[2,9]},{5:[2,10],12:[2,10],15:[2,10],17:[2,10],44:[2,10],47:[2,10]},{13:[1,38],37:[1,42],39:43,40:[1,34],41:[1,35],42:[1,36],43:[1,37]},{13:[2,32],37:[2,32],40:[2,32],41:[2,32],42:[2,32],43:[2,32]},{13:[2,34],37:[2,34],40:[2,34],41:[2,34],42:[2,34],43:[2,34]},{13:[2,35],37:[2,35],40:[2,35],41:[2,35],42:[2,35],43:[2,35]},{13:[2,36],37:[2,36],40:[2,36],41:[2,36],42:[2,36],43:[2,36]},{13:[2,37],37:[2,37],40:[2,37],41:[2,37],42:[2,37],43:[2,37]},{13:[2,38],37:[2,38],40:[2,38],41:[2,38],42:[2,38],43:[2,38]},{17:[2,12],19:44,20:[2,12],22:[2,12],44:[2,12],47:[2,12]},{13:[1,47],45:45,46:46},{13:[1,21],16:48,24:19,26:[1,23],27:[1,24],28:[1,25],34:[1,18],35:[1,20],36:22,37:[1,26]},{14:[2,31],31:[2,31],33:[2,31]},{13:[2,33],37:[2,33],40:[2,33],41:[2,33],42:[2,33],43:[2,33]},{9:52,10:50,11:51,17:[1,11],20:[1,49],21:53,22:[1,54],44:[1,12],47:[1,13]},{13:[1,47],20:[1,55],46:56},{13:[2,40],20:[2,40]},{23:[1,57]},{14:[1,58]},{5:[2,11],12:[2,11],15:[2,11],17:[2,11],20:[2,11],22:[2,11],44:[2,11],47:[2,11]},{17:[2,13],20:[2,13],22:[2,13],44:[2,13],47:[2,13]},{17:[2,14],20:[2,14],22:[2,14],44:[2,14],47:[2,14]},{17:[2,15],20:[2,15],22:[2,15],44:[2,15],47:[2,15]},{17:[2,16],20:[2,16],22:[2,16],44:[2,16],47:[2,16]},{13:[1,59]},{5:[2,39],12:[2,39],15:[2,39],17:[2,39],20:[2,39],22:[2,39],44:[2,39],47:[2,39]},{13:[2,41],20:[2,41]},{24:60,26:[1,23],27:[1,24],28:[1,25]},{5:[2,43],12:[2,43],15:[2,43],17:[2,43],20:[2,43],22:[2,43],44:[2,43],47:[2,43]},{13:[1,61]},{14:[1,62]},{23:[1,63]},{13:[2,42],20:[2,42]},{24:64,26:[1,23],27:[1,24],28:[1,25]},{14:[2,21],25:65,29:[1,66]},{14:[1,67]},{13:[1,70],30:68,32:69},{17:[2,17],20:[2,17],22:[2,17],44:[2,17],47:[2,17]},{31:[1,71],33:[1,72]},{31:[2,23],33:[2,23]},{23:[1,73]},{14:[2,22]},{13:[1,70],32:74},{13:[1,21],16:75,24:19,26:[1,23],27:[1,24],28:[1,25],34:[1,18],35:[1,20],36:22,37:[1,26]},{31:[2,24],33:[2,24]},{31:[2,25],33:[2,25]}],
defaultActions: {14:[2,1],71:[2,22]},
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
case 1:this.begin('import'); return 15;
break;
case 2:this.popState(); return 14;
break;
case 3:return 13;
break;
case 4:this.begin('string_quoted_content'); parser.protobufCharUnescapeCurrentQuote = this.match; return 37;
break;
case 5:this.begin('package'); return 12;
break;
case 6:this.popState(); return 14;
break;
case 7:return 13;
break;
case 8:this.begin('message'); return 17;
break;
case 9:return 13;
break;
case 10:this.begin('message_body'); return 18;
break;
case 11:this.popState(); this.popState(); return 20;
break;
case 12:this.begin('enum'); return 44;
break;
case 13:this.begin('option'); return 47;
break;
case 14:this.begin('message'); return 17;
break;
case 15:this.begin('message_field'); return 22;
break;
case 16:this.popState(); return 14;
break;
case 17:return 13;
break;
case 18:return 23;
break;
case 19:return 26;
break;
case 20:return 27;
break;
case 21:return 28;
break;
case 22:return 34;
break;
case 23:return 35;
break;
case 24:this.begin('message_field_options'); return 29;
break;
case 25:this.begin('message_field_option'); return 13;
break;
case 26:this.begin('message_field_option_value'); return 23;
break;
case 27:return 34;
break;
case 28:return 26;
break;
case 29:return 27;
break;
case 30:return 28;
break;
case 31:return 35;
break;
case 32:return 13;
break;
case 33:this.begin('string_quoted_content'); parser.protobufCharUnescapeCurrentQuote = this.match; return 37;
break;
case 34:this.popState(); this.popState(); return 33;
break;
case 35:this.popState(); this.popState(); this.popState(); return 31;
break;
case 36:return 43;
break;
case 37:return 40;
break;
case 38:return 41;
break;
case 39:return 42;
break;
case 40:if (parser.protobufCharUnescapeCurrentQuote === this.match) { this.popState(); return 37; } else { return 'NON_ESCAPED'; }
break;
case 41:return 43;
break;
case 42:this.begin('enum'); return 44;
break;
case 43:return 13;
break;
case 44:this.begin('enum_body'); return 18;
break;
case 45:this.popState(); this.popState(); return 20;
break;
case 46:this.begin('enum_field'); return 13;
break;
case 47:this.popState(); return 14;
break;
case 48:return 23;
break;
case 49:return 26;
break;
case 50:return 27;
break;
case 51:return 28;
break;
case 52:this.begin('option'); return 47;
break;
case 53:this.popState(); this.popState(); return 14;
break;
case 54:return 13;
break;
case 55:this.begin('option_value'); return 23;
break;
case 56:return 34;
break;
case 57:return 26;
break;
case 58:return 27;
break;
case 59:return 28;
break;
case 60:return 35;
break;
case 61:return 13;
break;
case 62:this.begin('string_quoted_content'); parser.protobufCharUnescapeCurrentQuote = this.match; return 37;
break;
case 63:
                        if (yy_.yytext.match(/\r|\n/) && parser.restricted) {
                            parser.restricted = false;
                            this.unput(yy_.yytext);
                            return ";";
                        }
                    
break;
case 64:
                            if (yy_.yytext.match(/\r|\n/) && parser.restricted) {
                                parser.restricted = false;
                                this.unput(yy_.yytext);
                                return ";";
                            }
                        
break;
case 65:/* skip whitespaces */
break;
case 66:return 'INVALID'
break;
}
};
lexer.rules = [/^(?:$)/,/^(?:import\b)/,/^(?:;)/,/^(?:(([A-Za-z0-9\-_\/\.]+)))/,/^(?:((['"])))/,/^(?:package\b)/,/^(?:;)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:message\b)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:\{)/,/^(?:\})/,/^(?:enum\b)/,/^(?:option\b)/,/^(?:message\b)/,/^(?:((required|optional|repeated)))/,/^(?:;)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:=)/,/^(?:(([1-9][0-9]*)))/,/^(?:(([xX][A-Fa-f0-9]+)))/,/^(?:(([0-7]+)))/,/^(?:((\d+(\.\d+)?([Ee][\+-]?\d+)?)))/,/^(?:((true|false)))/,/^(?:\[)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:=)/,/^(?:((\d+(\.\d+)?([Ee][\+-]?\d+)?)))/,/^(?:(([1-9][0-9]*)))/,/^(?:(([xX][A-Fa-f0-9]+)))/,/^(?:(([0-7]+)))/,/^(?:((true|false)))/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:((['"])))/,/^(?:,)/,/^(?:\])/,/^(?:\s+)/,/^(?:((\\[Xx][A-Fa-f0-9]{1,2})))/,/^(?:((\\?[0-7]{1,3})))/,/^(?:((\\[abfnrtv\\/'"])))/,/^(?:((['"])))/,/^(?:(([^\0\n])))/,/^(?:enum\b)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:\{)/,/^(?:\})/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:;)/,/^(?:=)/,/^(?:(([1-9][0-9]*)))/,/^(?:(([xX][A-Fa-f0-9]+)))/,/^(?:(([0-7]+)))/,/^(?:option\b)/,/^(?:;)/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:=)/,/^(?:((\d+(\.\d+)?([Ee][\+-]?\d+)?)))/,/^(?:(([1-9][0-9]*)))/,/^(?:(([xX][A-Fa-f0-9]+)))/,/^(?:(([0-7]+)))/,/^(?:((true|false)))/,/^(?:(([A-Za-z_][A-Za-z0-9_]*)))/,/^(?:((['"])))/,/^(?:\/\*(.|\r|\n)*?\*\/)/,/^(?:\/\/.*($|\r|\n))/,/^(?:\s+)/,/^(?:.)/];
lexer.conditions = {"enum":{"rules":[0,43,44,64,65,66],"inclusive":false},"enum_body":{"rules":[0,45,46,64,65,66],"inclusive":false},"enum_field":{"rules":[0,47,48,49,50,51,64,65,66],"inclusive":false},"string_quoted_content":{"rules":[0,36,37,38,39,40,41,64,65,66],"inclusive":false},"option":{"rules":[0,54,55,64,65,66],"inclusive":false},"option_value":{"rules":[0,53,56,57,58,59,60,61,62,64,65,66],"inclusive":false},"message":{"rules":[0,9,10,64,65,66],"inclusive":false},"message_body":{"rules":[0,11,12,13,14,15,64,65,66],"inclusive":false},"message_field":{"rules":[0,16,17,18,19,20,21,22,23,24,64,65,66],"inclusive":false},"message_field_options":{"rules":[0,25,64,65,66],"inclusive":false},"message_field_option":{"rules":[0,26,64,65,66],"inclusive":false},"message_field_option_value":{"rules":[0,27,28,29,30,31,32,33,34,35,64,65,66],"inclusive":false},"INITIAL":{"rules":[0,1,5,8,42,52,63,64,65,66],"inclusive":true},"package":{"rules":[0,6,7,64,65,66],"inclusive":false},"import":{"rules":[0,2,3,4,64,65,66],"inclusive":false}};
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