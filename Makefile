
parser: lib/parser.js

lib/parser.js: src/parser.jison
		./node_modules/.bin/jison $< -o $@

.PHONY: parser
