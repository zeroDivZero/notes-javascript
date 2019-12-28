# LODASH

Util lib to perform common programming tasks, using functional programming (fp) paradigm.

## Install

npm:

```shell
npm i -g npm
npm i --save lodash
```

node:

```javascript
// load full
var _ = require('lodash');
// or
import _ from 'lodash'

// load core
var _ = require('lodash/core');

// load FP build for immutable auto-curried iteratee-first data-last methods
var fp = require('lodash/fp');
 
// load method categories
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// cherry-pick methods for smaller browserify/rollup/webpack bundles
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
```

## Usage


```javascript
_.camelCase('Foo Bar');
_.camelCase('--foo-bar--');
_.camelCase('__FOO_BAR__');
// all return 'fooBar'
```
