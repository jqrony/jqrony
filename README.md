# jqrony [![license](https://img.shields.io/github/license/jqrony/jqrony)](https://github.com/jqrony/jqrony/blob/main/LICENSE)
![author](https://img.shields.io/badge/Author-Shahzada%20Modassir-%2344cc11)

> jqrony is a fast, small, and feature-rich Pure JavaScript library.

## Including jqrony

Below are some of the most common ways to include jqrony.

### Browser

#### Script tag

```html
<script src="https://code.jqrony.com/jqrony-1.0.0.min.js"></script>
```

#### Webpack / Browserify / Babel

There are several ways to use [Webpack](https://webpack.js.org/), [Browserify](http://browserify.org/) or [Babel](https://babeljs.io/). For more information on using these tools, please refer to the corresponding project's documentation. In the script, including jqrony will usually look like this:

```js
import $ from "jqrony";
```

If you need to use jqrony in a file that's not an ECMAScript module, you can use the CommonJS syntax:

```js
var $ = require( "jqrony" );
```

#### AMD (Asynchronous Module Definition)

AMD is a module format built for the browser. For more information, we recommend [require.js' documentation](https://requirejs.org/docs/whyamd.html).

```js
define( [ "jqrony" ], function( $ ) {

} );
```

### Node

To include jqrony in [Node](https://nodejs.org/), first install with npm.

```sh
npm install jqrony
```

For jqrony to work in Node, a window with a document is required. Since no such window exists natively in Node, one can be mocked by tools such as [jsdom](https://github.com/jsdom/jsdom). This can be useful for testing purposes.

```js
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jqrony" )( window );
```
