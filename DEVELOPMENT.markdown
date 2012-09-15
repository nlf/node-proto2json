Node-proto2json development
===========================


Build and use
-------------

To get source code:

    $> git clone git://github.com/Sannis/node-proto2json.git
    $> cd node-proto2json

If you want to build specific version of node-proto2json, checkout it:

    $> git checkout v1.0.0

No extra build steps is needed.

To run tests:

    $> make test

To lint code:

    $> # install cpplint.py
    $> make lint

To regenerate parser from source:

    $> make parser


Testing
-------

All functions and possible use cases should have tests, places in one of `tests` sub-folders.
`node-proto2json` uses `mocha` as testing tool. If you contributing something,
you should check that your changes do not breakes tests.

If you change some code you can test it using:

    $> make test

All branches build status: ![Build status](https://secure.travis-ci.org/Sannis/node-proto2json.png).
`Master` branch build status: ![Build status](https://secure.travis-ci.org/Sannis/node-proto2json.png?branch=master).
[Go to Travis CI site to view tests results](http://travis-ci.org/Sannis/node-proto2json).


Coding style
------------

Code style based on [Node.js code styles](http://github.com/ry/node/wiki/contributing).

1. Discuss large changes before coding (this is good idea in collaborative development)
2. Javascript code should follow [Douglas Crockford code conventions for the javascript programming language](http://javascript.crockford.com/code.html) and be run through [Nodelint](http://github.com/tav/nodelint). And:
    * Code should has two space indention
    * Multi-line <code>if</code> statements must have braces
3. All code must be MIT licensed

You can lint `node-proto2json` code by executing:

    $> make lint


Contributing
------------

I will be happy to hear tips from the more experienced programmers.
If you are interested in wide MySQL usage in Node.JS applications,
leave your comments to the code.
I'll be glad to see your forks and commits in them :)

To contribute any patches, simply fork this repository using GitHub
and send a pull request to [me](https://github.com/Sannis). Thanks!
