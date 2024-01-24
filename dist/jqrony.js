/**!
 * jQrony is pure Javascript Library 1.1.1
 * https://github.com/jqrony/jqrony
 * 
 * @license MIT license
 * @version 1.1.1
 * 
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT 
 * https://github.com/jqrony/jqrony/blob/main/LICENSE
 * 
 * @author Shahzada Modassir
 * Date: 01 Junuary 2023 AT 02:10 PM
 */
(function (winGlobal, fnFactory) {

"use strict";

typeof module === "object" && typeof module.exports === "object" ?

   // For CommonJS and CommonJS-like environments where a proper `window`
   // is present, execute the factory and get jQrony.
   // For environments that do not have a `window` with a `document`
   // (such as Node.js), expose a factory as module.exports.
   // This accentuates the need for the creation of a real `window`.
   // e.g. var jQrony = require("jqrony")(window);
   // See ticket #14549 for more info.
   (module.exports = winGlobal.document ?
      fnFactory(winGlobal, true) : function (win) {
         if (!win.document) {
            throw new Error(
               "jQrony requires a `window` with a document: document"
            );
         }
      }) : fnFactory(winGlobal);
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

// We are showing jQrony activited message. only once time. if user first
// time implement my jQrony library on our Browser.
// !Notice: If developer clear localStorage so I will show again message
if (window.localStorage.getItem && !window.localStorage.getItem("jqrony")) {
   var msg = "jQrony 1.1.1 active on your Browser.";
   window.localStorage.setItem("jqrony", msg), console.log(msg);
}

// strict-mode
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw execption error when pass undeclare variable or duplicate constant var
"use strict";


/* About jQrony 1.1.1
-------------------------------------------------------------------------------*/
const aboutJqrony = {
   "name": "jQrony",
   "language": "Javascript",
   "version": "1.1.1",
   "support": {
      platform: ["windows", "macos", "linux"],
      browser: "chorome edge firefox IE safari opera android ios".split(" ")
   },
   "npm": {
      "keyword": "jqrony",
      "install": "npm i jqrony"
   },
   "repository": {
      "type": "git",
      "url": "git+https://github.com/jqrony/jqrony.git"
   },
   "license": "MIT",
   "author": "<codingmodassir@gmail.com>",
   "bugs": {
      "url": "https://github.com/jqrony/jqrony/issues"
   },
   "homepage": "https://github.com/jqrony/jqrony#readme"
};


/* Define requirement of variable
-------------------------------------------------------------------------------*/
var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function (array) {
   return arr.flat.call(array);

} : function (array) {
   return arr.concat.apply([], array);
};


var indexOf = arr.indexOf;

var push = arr.push;

var unshift = arr.unshift;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjFnString = fnToString.call(Object);

var support = {};


var isFunction = function isFunction(obj) {

   // Support: Chrome <=57, Firefox <=52
   // In some browsers, typeof returns "function" for HTML <object> elements
   // (i.e., `typeof document.createElement( "object" ) === "function"`).
   // We don't want to classify *any* DOM node as a function.
   // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
   // Plus for old WebKit, typeof returns "function" for HTML collections
   // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
   return typeof obj === "function" && typeof obj.nodeType !== "number" &&
      typeof obj.items !== "function";
};



var isWindow = function isWindow(obj) {

   // isWindow method will be used identify and find or matching
   // a valid or proper window.window object (#window)
   // Browser support: Chorome, Firefox, Safari and IE<=Edge
   return typeof obj != null && obj.window === window;
};


var isNavigator = function isNavigator(obj) {

   // isNavigator method will be used detecting and finding of a
   // window.navigator object (#navigator)
   // Browser support: Chorome, Firefox, Safari and IE<=Edge
   return typeof navigator === "object" && obj === window.navigator;
};


// Fix bugs define the document variable of window.document (#document)
var document = window.document;


// define preservedScriptAttributes in #object
var scriptAttributes = {
   type: true,
   src: true,
   nonce: true,
   noModule: true,
   accept: true,
   async: true,
   defer: true
};

function DOMEval(code, node, doc) {
   doc = doc || document;

   var i, val,
      script = document.createElement("script");

   script.text = code;

   if (node) {
      for (i in scriptAttributes) {
         val = node[i] && node.getAttribute && node.getAttribute(i);
         if (val) {
            script.setAttribute(i, val);
         }
      }
   }

   doc.head.appendChild(script).parentNode.removeChild(script);
}


function isType(obj) {
   if (obj == null) {
      return obj + "";
   }

   // Support: Android <=2.3 only (functionish RegExp)
   return typeof obj === "function" || typeof obj === "object" ?
      class2type[toString.call(obj)] || "object" :
      typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module


/* Here method will made related to Array or Object
   * The method created here is similar to the PHP array method
   */

/**
 * Returns The Intersect method matches the common value between two arrays.
 * @param {Array} array targeted array
 * @param {Array} compaire array when you compaire
 * @support Only Index Array, Browser: max-browser
 * @returns newly-clean compaired intersected array
 */
function intersect(array, compaire) {

   if (!Array.isArray(compaire)) {
      throw new Error(
         "Argument Error: compaire accept only array but '"
         + compaire + "' is not array."
      );
   }

   var intersected = [],
      i = 0,
      length = array.length;

   for (; i < length; i++) {
      if (indexOf.call(compaire, array[i]) > -1) {
         intersected.push(array[i]);
      }
   }

   return intersected;
}

/**
 * Returns The diff method matched the diffrence value between two arrays.
 * @param {Array} array targeted array
 * @param {Array} compaire array when you compaire
 * @support Only Index Array, Browser: max-browser
 * @returns newly-clean compaired diffrenced array
 */
function diff(array, compaire) {

   if (!Array.isArray(compaire)) {
      throw new Error(
         "Argument Error: compaire accept only array but '"
         + compaire + "' is not array."
      );
   }

   var diffranced = [],
      i = 0,
      length = array.length;

   for (; i < length; i++) {
      if (indexOf.call(compaire, array[i]) === -1) {
         diffranced.push(array[i]);
      }
   }

   return diffranced;
}

/**
 * cacheObject method will be used cache keyable not empty array or object
 * @param {Object} obj [key:value], {key:value}
 * @returns Boolean true or false
 */
function cacheObject(obj) {
   var i = 0;
   for (; i < obj.length; i++) return false;
   for (i in obj) return true;
   return false;
}

/**
 * flip method convert array or object to opposite direction [val=>key]
 * @param {Object} obj object or noIndexArray
 * @returns newly-flipped array
 */
function flip(obj) {
   if (!cacheObject(obj)) {
      return obj;
   }

   var name;
   for (name in obj) {
      obj[obj[name]] = name;
      delete obj[name];
   }
   return obj;
}

/**
 * cKeyCase method basecally used change key Case lowerCase and upperCase
 * @param {Object} obj targeted object
 * @param {String} preservedCase UPPER_CASE || LOWER_CASE
 * @returns newly-changed-keyCase object
 */
function cKeyCase(obj, preservedCase) {
   if (!cacheObject(obj)) {
      return obj;
   }

   var name, caseHandler = {
      "UPPER_CASE": "toUpperCase",
      "LOWER_CASE": "toLowerCase"
   };

   preservedCase = (preservedCase in caseHandler) && caseHandler[preservedCase] || "toLowerCase";

   for (name in obj) {
      obj[String.prototype[preservedCase].call(name)] = obj[name];
      delete obj[name];
   }

   return obj;
}

/**
 * chunk method will be make a new group paire array follow on your paire
 * @param {Array} array targeted array
 * @param {Number} paire group paire length
 * @returns newly-chunked array
 */
function chunk(array, paire) {
   if (cacheObject(array)) {
      return array;
   }

   var chunked = [], chunkVal,
      i = 0,
      length = array.length,
      paireLen = +paire || 2;

   for (; i < length; i++) {
      if ((chunkVal = array.splice(0, paireLen)) && chunkVal.length) {
         chunked.push(chunkVal);
      }
   }

   return chunked;
}

/**
 * Returns max method heighest maximum number of targeted array
 * @param {Array} array targeted array
 * @param {Boolean} indexOnly true | false
 * @returns maximum number
 */
function max(array, indexOnly) {
   var maxNum = array[0],
      i = 0,
      index = 0,
      length = array.length;

   for (; i < length; i++) {
      if (maxNum < array[i]) {
         index = i;
         maxNum = array[i];
      }
   }

   return indexOnly === true ? index : maxNum;
}

/**
 * Returns min method heighest minimum number of targeted array
 * @param {Array} array targeted array
 * @param {Boolean} indexOnly true | false
 * @returns mininum number
 */
function min(array, indexOnly) {
   var minNum = array[0],
      index = 0,
      i = 0,
      length = array.length;

   for (; i < length; i++) {
      if (minNum > array[i]) {
         index = i;
         minNum = array[i];
      }
   }

   return indexOnly === true ? index : minNum;
}

/**
 * sum method will be add all integer or numericable value of array
 * @param {Array} array targeted array
 * @returns total added number
 */
function sum(array) {
   var index, decimal, result = 0;

   if (Array.isArray(array)) {
      for (index in array) {
         if ((decimal = parseFloat(array[index]))) {
            result += decimal;
         }
      }
   }

   return result;
}

/**
 * sum method will be multiplied all integer or numericable value of array
 * @param {Array} array targeted array
 * @returns total multipied number
 */
function product(array) {
   var index, decimal, result = 1;

   if (Array.isArray(array)) {
      for (index in array) {
         if ((decimal = parseFloat(array[index]))) {
            result *= decimal;
         }
      }
   }

   return result;
}

/**
 * sum method will be subtract all integer or numericable value of array
 * @param {Array} array targeted array
 * @returns total subtracted number
 */
function deduct(array) {
   var index,
      decimal,
      result = max(array);

   delete array[max(array, true)];

   for (index in array) {
      if ((decimal = parseFloat(array[index]))) {
         result -= decimal;
      }
   }

   return result;
}

/**
 * Return rand method random value of array to numeric format
 * Notic: if number greater than 1 Return values array format
 * @param {Array} array targeted array
 * @param {Number} number random length
 * @returns random value
 */
function rand(array, number) {
   var random = [],
      i = 0,
      numLen = +number || 1;

   for (; i < numLen; i++) {
      random.push(array[Math.floor(Math.random() * array.length)]);
   }

   return random.length === 1 ? random[0] : random;
}

/**
 * clone method will cloned targeted array. no effect your previous array
 * @param {Array} array targeted array
 * @returns cloned array
 */
function clone(array) {
   if (!Array.isArray(array)) {
      return [];
   }

   var copy, clone = [];

   for (copy in array) clone[copy] = array[copy];
   return clone;
}

/**
 * shuffle method will be Randomize the order of the elements in the array
 * @param {Array} array targeted array
 * @returns shuffled array
 */
function shuffle(array) {
   var s = [],
      i = 0,
      random,
      cArray = clone(array),
      length = array.length;

   for (; i < length; i++) {
      if ((random = Math.floor(Math.random() * cArray.length)) != null) {
         s.push(cArray[random]);
         cArray.splice(random, 1);
      }
   }

   return s;
}

/**
 * walk mthod will be called a callback function per index of array
 * @param {Array} array targeted array
 * @param {Function} callback function
 * @param {Param} param callback parameter
 * @returns previous array
 */
function walk(array, callback, param) {
   var i = 0,
      length = array.length,
      fn = typeof callback === "function" && callback;

   for (; i < length; i++) {
      fn && fn(i, array[i], param);
   }

   return array;
}

/**
 * range method will be make a array from start to end [start, end]
 * @param {Number} startRange start
 * @param {Number} endRange end
 * @param {Number} step count step
 * @returns range array
 */
function range(startRange, endRange, step) {

   if (endRange == undefined) {
      endRange = startRange;
      startRange = 0;
   }

   if (+startRange == null || +startRange > +endRange) {
      return null;
   }

   step = +step || 1; var result = [];

   for (; startRange <= endRange; startRange += step) {
      result.push(startRange);
   }

   return result;
}

/**
 * unique method will be used remove multiple duplicates value
 * @param {Array} obj who do you want to unique
 * @returns unique array
 */
var unique = function unique(obj) {
   var i = 0,
      elem,
      noDuplicates = [];

   // Don't make unique array if obj !array
   if (!(Array.isArray(obj) || obj.version)) {
      return obj;
   }

   for (; i < obj.length; i++) {
      elem = obj[i];
      if (slice.call(obj).indexOf(elem) === i) {
         noDuplicates.push(elem);
      }
   }

   // empty obj array in deeply and convert empty []
   obj.splice(0, obj.length);

   // Fixes bugs (#empty) Array []
   obj.length = 0;

   // push unique data
   // applying unique data in name of obj #argument
   [].push.apply(obj, noDuplicates);
   return obj || noDuplicates;
};

/**
 * clean method will clean your array in empty, null, undefined, values
 * @param {Array} array who do you want to clean
 * @returns newly-clean array
 */
var clean = function clean(array) {
   if (!Array.isArray(array)) {
      return [];
   }

   var i = 0,
      length = array.length,
      elem,
      cached = [];

   for (; i < length; i++) {
      elem = array[i];
      if (elem != null && elem !== undefined) {
         cached.push(elem);
      }
   }

   // empty array in deeply and convert empty []
   array.splice(0, array.length);

   // Fixes bugs (#empty) Array []
   array.length = 0;

   // push unique data
   // applying unique data in name of #argument
   [].push.apply(array, cached);
   return array || cached;
};

/**
 * replace method find target value and replace to given value single or globlay
 * @param {Array} array targeted array
 * @param {Find} find Array | String | Number | Boolean
 * @param {replace} replace String | Boolean | Number
 * @param {Boolean} global true | false
 * @returns newly-replaced array
 */
function replaces(array, find, replace, global) {
   var i = 0,
      length = array.length;

   find = Array.isArray(find) ? find : [find];

   if (typeof find !== "function" && typeof replace !== "object") {
      for (; i < length; i++) {

         if (indexOf.call(find, array[i]) > -1) {
            if (typeof global === "boolean" && global) {
               array[i] = replace;
            } else {
               array[i] = replace;
               break;
            }
         }
      }
   }

   return array;
}

/**
 * search method will be used find value in array regex or array through
 * @param {Array} array when do you want to target array
 * @param {Find} find regex | array allow only
 * @param {Boolean} indexOnly true | false Default false
 * @returns matched-array
 */
function search(array, find, indexOnly) {
   var searched = [],
      i = 0,
      length = array.length;

   find = typeof find === "string" ? [find] : find;
   for (; i < length; i++) {

      if (!Array.isArray(find) && typeof find.test !== "undefined") {
         if (find.test(array[i])) {
            indexOnly === true ? searched.push(i) :
               searched.push(array[i]);
         }
      } else if (indexOf.call(find, array[i]) > -1) {
         indexOnly === true ? searched.push(i) :
            searched.push(array[i]);
      }
   }

   return searched;
}

/**
 * arrayToLower method will be change case of array inner values to upperCase
 * @param {Array} array targeted array
 * @returns upperCased-value array
 */
function arrayToUpper(array) {
   var ret = [],
      i = 0,
      length = array.length;

   for (; i < length; i++) {
      typeof array[i] === "string" ? ret.push(array[i].toUpperCase()) : ret.push(array[i]);
   }

   return ret;
}

/**
 * arrayCapitalize method will be change case of array inner values to capitalize
 * @param {Array} array targeted array
 * @returns capitalized-value with array
 */
function arrayCapitalize(array) {
   var i = 0, cur,
      capitalize,
      length = array.length;

   for (; i < length; i++) {
      cur = array[i];
      capitalize = cur[0].toUpperCase() + cur.slice(1);
      array[i] = capitalize;
   }

   return array;
}

/**
 * arrayToLower method will be change case of array inner values to lowerCase
 * @param {Array} array targeted array
 * @returns lowerCased-value array
 */
function arrayToLower(array) {
   var ret = [],
      i = 0,
      length = array.length;

   for (; i < length; i++) {
      typeof array[i] === "string" ? ret.push(array[i].toLowerCase()) : ret.push(array[i]);
   }

   return ret;
}



/* Create some usefull methods
   * Here creating some usefull methods when use normally use
   * multiple time and Here create main method throwError
   */
/**
 * call function called a targeted function with param
 * @param {Function} fn What do want call callback function
 * @param {keyword} thisArg this keyword
 * @param {Argument} args pass callback argument
 * @returns function
 */
function call(fn, thisArg, args) {

   args = slice.call(arguments, 2);
   apply(fn, thisArg, args);

   if (Array.isArray(fn)) {
      var i = 0,
         length = array.length;
      for (; i < length; i++) {
         if (typeof fn[i] === "function") {
            fn[i]();
         }
      }
   }

   return fn;
}

/**
 * apply function method applied target function with param
 * @param {Function} fn What do want call callback function
 * @param {keyword} thisArg this keyword
 * @param {[Argument]} args pass callback [arguments]
 * @returns function
 */
function apply(fn, thisArg, args) {
   if (typeof fn === "function") {
      fn.apply(thisArg, args);
      return fn;
   }

   if (Array.isArray(fn)) {
      var i = 0,
         length = array.length;
      for (; i < length; i++) {
         if (typeof fn[i] === "function") {
            fn[i]();
         }
      }
   }

   return fn;
}

/**
 * trap method trapping or access values for three types to be easily.
 * 1 ACCESS_KEY target with key
 * 2 ACCESS_VALUE target with value
 * 3 ACCESS_BOTH target with both
 * @param {Object} obj What do you want to target Object
 * @param {Mixed} find Mixed Boolean, String, number etc.
 * @param {String} access Use kewords ACCESS_KEY | ACCESS_VALUE | ACCESS_BOTH By default SET: ACCESS_VALUE
 * @param {String} searchWith Use kewords SW_KEY | SW_VALUE By default SET: SW_KEY
 * @returns Mixed value or matched object
 */
var trap = function trap(obj, find, access, searchWith) {
   // Access
   // ACCESS_KEY
   // ACCESS_VALUE
   // ACCESS_BOTH

   // SearchWith
   // SW_KEY
   // SW_VALUE
   access = access || "ACCESS_VALUE";
   searchWith = searchWith || "SW_KEY";

   var src = {}, name, matched,
      acFn = {
         "ACCESS_KEY": function (key) {
            return key;
         },
         "ACCESS_VALUE": function (_key, value) {
            return value;
         },
         "ACCESS_BOTH": function (key, value) {
            src[key] = value;
         }
      },
      swFn = {
         "SW_KEY": function (key) {
            return key;
         },
         "SW_VALUE": function (key, obj) {
            return obj[key];
         }
      };

   for (name in obj) {
      if (swFn[searchWith](name, obj) === find) {
         if ((matched = acFn[access](name, obj[name]))) {
            return matched;
         }
      }
   }

   return src;
};

/**
 * Returns createObject initiaize a new-object with set key and value
 * @param {String} key String
 * @param {String} value String Boolean Number Array
 * @returns clean created object
 */
var createObject = function createObject(key, value) {
   var prefix = {};
   return prefix[camelCase(key)] = value, prefix;
};

/**
 * objIn method check exists method or keys in specifically targeted #object
 * @param {Array|Object} obj Pass #object or #array do whereas want to match in
 * @param {Argument|Array} argument Pass array or arguments only whereas match
 * @returns Boolean value or exists value
 */
var objIn = function objIn(obj, argument) {
   var i = 0,
      length = argument.length;
   for (; i < length; i++) {
      if (argument[i] in obj) {
         return argument[i];
      }
   }
   return false;
};


var errortype, errortypes = {};

var rkeyCache = /^\\(\w+)\\$/,
   rerrorSign = /\W+$/,
   rquickURI = /(?:http|https)[^\x20\r\n\f\t\)]+/g,
   rURI = /^(?:https|http)([^\x20\r\f\n\t])+$/;


function errorStack(e /* catch(<=e=>) */) {

   if (!(this instanceof errorStack)) {
      return new errorStack(e);
   }

   var stack = errorStack.prototype, core, lines;

   // Getting stack name or message
   stack.name = e.name;
   stack.message = e.message;

   // Getting all stack error lines
   core = e.stack.match(rquickURI);
   lines = core.slice(0, 2);

   // SET: All error line in stack
   stack.line = lines.pop();
   stack.lines = core;
   stack.prevLine = lines.join("");

   // Object Convertation
   this.toObject = function () {
      return stack;
   };

   // Array Convertation
   this.toArray = function () {
      return Array(
         stack.name, stack.message, stack.prevLine, stack.line
      );
   };

   // String Convertation
   this.toString = function () {
      return String(
         stack.name + ": " + stack.message +
         "\n\nFile: " + stack.lines.join("\nFile: ")
      );
   };

   return this;
}

function isErrorType(errorobj) {
   if (errorobj == null) {
      return errorobj + "";
   }

   return typeof errorobj === "object" || typeof errorobj === "function" ?
      errortypes[errorobj.prototype.toString()] ||
      errorobj.prototype.toString() : errorobj;
}


// Populate errortypes map
for (var index in
   (errortype = ("Error InternalError RangeError ReferenceError " +
      "SyntaxError TypeError URIError Warning EvalError ErrorEvent " +
      "AggregateError DOMError DOMException MediaError").split(" "))) {

   errortypes["[object " + errortype[index] + "]"] = errortype[index];
}

function throwError(type, msg, desc, overrideLink, overrideLine) {
   var line, errorLine;

   type = isErrorType(type);
   type += rerrorSign.test(type) ? " " : ": ";

   if (rURI.test(overrideLink) && overrideLine) {
      line = overrideLink + ":" + overrideLine;
   }

   try {
      throw new Error("throwError method just throwing a fake error.");
   } catch (e) {
      // Force and Extract error uri https://jqrony.ml/filestack/at:593:22
      errorLine = (line || e.stack.match(rquickURI).pop());

      throw type && msg && desc ?
         type + msg + ("\n\n" + desc) + ("\n\n" + errorLine) :
         type + msg + ("\n\n" + errorLine);
   }
}



var
   // Define The current version of jQrony name of the version variable
   version = aboutJqrony.version,

   // Define a local copy of jQrony
   jQrony = function (selector, context) {

      // The jQrony object is actually just the init constructor 'enhanced'
      // Need init if jQrony is called (just allow error to be thrown if not included)
      return new jQrony.fn.init(selector, context);
   };

jQrony.fn = jQrony.prototype = {

   // The current version of jQrony being use Latest: 1.1.1
   version: version,

   // ? Define jQrony constructor
   constructor: jQrony,

   // The default length of a jQrony object is eq 0
   length: 0,

   pushStack: function (obj) {

      var ret = jQrony.merge(this.constructor(), obj);
      ret.prevData = this;

      // return the newly-element set 
      return ret;
   },

   each: function (callback) {
      return this.pushStack(jQrony.each(this, callback));
   },

   map: function (callback) {
      return this.pushStack(jQrony.map(this, function (elem, i) {
         return callback.call(elem, i, elem);
      }));
   },

   eq: function (i) {
      var len = this.length,
         j = +i + (len < 0 ? len : 0);

      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
   },

   first: function () {
      return this.eq(0);
   },

   last: function () {
      return this.eq(-1);
   },

   even: function () {
      return this.pushStack(jQrony.grep(this, function (_elem, i) {
         return (i + 1) % 2;
      }));
   },

   odd: function () {
      return this.pushStack(jQrony.grep(this, function (_elem, i) {
         return i % 2;
      }));
   },

   end: function () {
      return this.prevData || this.constructor();
   },

   // Get the Nth element in the matched element set OR
   // Get the whole matched element set as a clean array
   get: function (num) {

      // Return all the elements in a clean array
      if (num == null) {
         return slice.call(this);
      }

      // Return just the one element from the set
      return num < 0 ? this[num + this.length] : this[num];
   },

   slice: function () {
      return this.pushStack(slice.apply(this, arguments));
   },

   // * Define About jQrony
   aboutJqrony: aboutJqrony,

   // For internal use only.
   // Behaves like an Array's method, not like a jQrony method.
   push: push,

   // Set sort method like in jQrony method Internal use Only
   sort: arr.sort,

   // Set splice method like in jQrony method Internal use Only
   splice: arr.splice
};

// ?Create jQrony.extend and jQrony.fn.extend method
jQrony.extend = jQrony.fn.extend = function () {
   var name, options, target = arguments[0] || {},
      i = 1, match,
      copy,
      clone,
      length = arguments.length, src, isCopyable,
      access = false;

   // HANDLE: if typeof target is Boolean and target
   if (typeof target === "boolean" && target) {
      access = target;

      // skip the boolean and the target
      target = arguments[i] || {};
      i++;
   }

   // Handle case when target is a string or something (possible in deep copy)
   if (typeof target !== "object" && !isFunction(target)) {
      target = {};
   }

   // Extend jQrony itself if only one argument is passed
   if (i === length) {
      target = this;
      i--;
   }

   for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
         for (name in options) {
            copy = options[name];

            // Prevent Object.prototype pollution and set continue statement
            // Prevent never-ending loop
            if (name === "__proto__" || target === copy) {
               continue;
            }

            // HANDLE: if typeof access is equal to Boolean and access
            // ?conditions: copy value don't be empty and copy of 
            // ?dataType object and object should be isPlainObject
            if (access && copy && (jQrony.isPlainObject(copy) ||
               (isCopyable = Array.isArray(copy)))) {

               // ? define previous seted data in src
               src = target[name];

               // Attach empty array if src of dataType not be array
               if (isCopyable && !Array.isArray(src)) {
                  clone = [];
               }
               else if (!isCopyable && !jQrony.isPlainObject(src)) {
                  clone = {};
               }
               else {
                  clone = src;
               }

               isCopyable = false;

               // HANDLE: if target[ name ] and copy of dataType is array
               // ?merging Previous key: of [array] value in [copy] value
               if (Array.isArray(target[name]) && Array.isArray(copy)) {
                  push.apply(clone, copy);

                  // Never move original objects, clone them
               } else {
                  target[name] = jQrony.extend(access, clone, copy);
               }
            }

            // Don't bring in undefined values
            else if (copy !== undefined) {
               target[name] = copy;
            }

            // set `undefined` value if target key matched *keyname* matcher
            if ((match = rkeyCache.exec(name)) && copy === undefined) {
               match.shift() && (target[match] = copy);
            }
         }
      }
   }

   return target;
};

jQrony.extend({

   expando: "jQrony" + (version + Math.random()).replace(/\D+/g, ""),

   // Assume jQrony is ready without the ready module
   isReady: true,

   // throwError throwing custom errors
   throwError: throwError,

   // errorStack work only catch(e) error event
   stack: errorStack,

   isEmptyObject: function (obj) {
      var name;
      for (name in obj) return false;
      return true;
   },

   globalEval: function (code, options, doc) {
      DOMEval(code, { nonce: options && options.nonce }, doc);
   },

   // Support: Android <=4.0 only, PhantomJS 1 only
   merge: function (current, merging) {
      var length = +merging.length,
         j = 0,
         i = current.length;

      for (; j < length; j++) {
         current[i++] = merging[j];
      }

      current.length = i;

      return current;
   },

   createArray: function (array, results) {

      // Force ret to be an array []
      var ret = results || [];

      if (array != null) {
         if (isArrayLike(Object(array))) {
            jQrony.merge(ret,
               typeof array === "string" ?
                  [array] : array
            );
         } else {
            push.call(ret, array);
         }
      }
      return ret;
   },

   isPlainObject: function (obj) {
      var proto, Cofar;

      // Detect obvious negatives
      // Use toString instead of jQrony.type to catch host objects
      if (!obj || toString.call(obj) !== "[object Object]") {
         return false;
      }

      proto = getProto(obj);

      // Object with not exist prototype and __proto__ data {}
      // ?accept only (e.g., `Object.create( null )`) or plain
      if (!proto) {
         return true;
      }

      Cofar = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Cofar === "function" &&
         fnToString.call(Cofar) === ObjFnString;
   },

   range: function (startIndex, endIndex, step) {
      return range(startIndex, endIndex, step);
   },

   inArray: function (elem, array, index) {
      return array == null ? -1 : indexOf.call(array, elem, index);
   },

   inObject: function (object, key) {
      return object == null || typeof object !== "object" ?
         false :
         hasOwn.call(object, camelCase(key)) || object[camelCase(key)];
   },

   // A global GUID counter for objects
   guid: 1,

   // jQrony.support is not used in Core but other projects attach their
   // properties to it so it needs to exist.
   support: support
});

// ? Handle jQrony loops
jQrony.extend({

   // ? Create jQrony.each method in (#jQrony) alilas
   each: function (obj, callback) {
      var i = 0, length;

      if (isArrayLike(obj)) {
         length = obj.length;
         for (; i < length; i++) {
            if (call(callback, obj[i], i, obj[i], obj) === false) {
               break;
            }
         }
      } else {
         for (i in obj) {
            if (call(callback, obj[i], i, obj[i], obj) === false) {
               break;
            }
         }
      }
      return obj;
   },

   // ? Create jQrony.grep method in (#jQrony) alilas
   grep: function (elems, callback, invert) {
      var matched = [],
         cbInverse,
         i = 0,
         length = elems.length,
         cbExpect = !invert;

      for (; i < length; i++) {
         cbInverse = !callback(elems[i], i, elems);
         if (cbInverse !== cbExpect) {
            matched.push(elems[i]);
         }
      }

      return matched;
   },

   every: function (obj, callback) {
      obj.nodeType ?
         call(callback, obj, 1, obj, [obj]) : jQrony.each(obj, callback);
      return obj;
   },

   // ? Create jQrony.map method in (#jQrony) alilas
   map: function (obj, callback, args) {
      var length, value,
         i = 0,
         matched = [];

      // Go through the array, translating each of the items to their new values
      if (isArrayLike(obj)) {
         length = obj.length;
         for (; i < length; i++) {
            value = callback(obj[i], i, args, obj);

            if (value != null) {
               matched.push(value);
            }
         }

         // Go through every key on the object,
      } else {
         for (i in obj) {
            value = callback(obj[i], i, args, obj);

            if (value != null) {
               matched.push(value);
            }
         }
      }

      return flat(matched);
   }
});

// Add Symbol.iterator function in jQrony.fn
// ?Fix iterator @@none-callee caller error
if (typeof Symbol === "function") {
   jQrony.fn[Symbol.iterator] = arr[Symbol.iterator];
}



// Populate the `{class2type}` map
jQrony.each(("Boolean Number String Function NodeList HTMLElements HTMLCollection " +
   "Array Date RegExp Object Error Symbol").split(" "),
   function (_i, name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
   });


// Create isArrayLike method used only for Array
function isArrayLike(obj) {
   try {
      // Support: real iOS 8.2 only (not reproducible in simulator)
      // `in` check used to prevent JIT error (gh-2145)
      // hasOwn isn't used here due to false negatives
      // regarding Nodelist length in IE
      var length = !!obj && "length" in obj && obj.length,
         type = isType(obj);
   }
   catch (e) {
      // if catch or detect any errors when return false
      return false;
   }

   // Returns false if obj equal to `window` or `function`
   if (isWindow(obj) || isFunction(obj)) {
      return false;
   }

   return type === "array" || length === 0 ||
      typeof length === "number" && length > 0 && (length - 1) in obj;
}



/* Create String releated methods
   * Here created some jQrony.methods matched from PHP String methods.
   * Support: Chrome, Safari, Edge, IE, Opera, Android, and extra.
   */

var rtags = /<.*?>/g;
var rcots = /(?:'|")/g;
var rslashes = /\\/g;
var rnothtmlwhite = new RegExp("[^\\x20\\t\\r\\n\\f]+", "g");

jQrony.extend({

   /**
    * toFirstUpperCase method will convert all first character of words to uppercase
    * @param {String} string What do you want to target String
    * @returns firstUpperCased String
    */
   toFirstUpperCase: function (string) {
      return (string + "").trim().replace(rnothtmlwhite, fToUpper);
   },

   /**
    * toFirstLowerCase method will convert all first character of words to lowercase
    * @param {String} string What do you want to target String
    * @returns firstLowerCased String
    */
   toFirstLowerCase: function (string) {
      return (string + "").trim().replace(rnothtmlwhite, fToLower);
   },

   /**
    * firstUpper method will be change string first index to toUpperCase
    * @param {String} string When do you want to target String
    * @returns first-UpperCase string
    */
   firstUpper: function (string) {
      return (string + "")[0].toUpperCase() + string.slice(1);
   },

   /**
    * firstLower method will be change string first index to toLowerCase
    * @param {String} string When do you want to target String
    * @returns first-lowerCase string
    */
   firstLower: function (string) {
      return (string + "")[0].toLowerCase() + string.slice(1);
   },

   /**
    * wordCount method find match words multiple time and return word array or word count
    * @param {String} string What do you want to target String
    * @param {Boolean} format true => words array | false match count
    * @returns number or wordArray
    */
   wordCount: function (string, format) {
      var wordArray = (string + "").match(rnothtmlwhite);
      return format === true ? wordArray : wordArray.length;
   },

   /**
    * substrCount count matched string and return total matched string count
    * @param {String} string What do you want to target String
    * @param {String} search What do you want to search String
    * @param {Number} start set position where search in number
    * @param {Number} length set limited search range in number
    * @returns matched count in number format
    */
   substrCount: function (string, search, start, length) {
      start = +start || 0;
      length = +length || string.length;

      if (!(typeof string === "string" && typeof search === "string")) {
         return null;
      }

      var rmatcher = new RegExp("(" + search + ")", "g"),
         stringToArray = string.slice(start, length).match(rnothtmlwhite);

      return (stringToArray.join(" ").match(rmatcher) || []).length;
   },

   /**
    * strrpos method find string from opposite direction of targeted string
    * @param {String} string What do you want to target String
    * @param {String} find What do you want to find String
    * @param {Number} start set position where search in number
    * @returns matched length - subtracted string length
    */
   strrpos: function (string, find, start) {
      var matched,
         subtract = string.length,
         rmatcher = new RegExp("(" + find + ")", "g"),
         stringToArray = (string + "").slice(+start || 0).match(rnothtmlwhite);

      if ((matched = (stringToArray.join(" ").match(rmatcher) || []).length)) {
         return subtract - matched;
      }

      return matched;
   },

   /**
    * strripos method find string from opposite direction of targeted string
    * strripos or strrpos method same work but strripos method is a case-insensitive
    * @param {String} string What do you want to target String
    * @param {String} find What do you want to find String
    * @param {Number} start Set position where search in number
    * @returns matched length - subtracted string length
    */
   strripos: function (string, find, start) {
      var matched,
         subtract = string.length,
         rmatcher = new RegExp("(" + find + ")", "gi"),
         stringToArray = (string + "").slice(+start || 0).match(rnothtmlwhite);

      if ((matched = (stringToArray.join(" ").match(rmatcher) || []).length)) {
         return subtract - matched;
      }

      return matched;
   },

   /**
    * Return strstr find your target string when targeted string matched so return after
    * matched string of all words, if pass (Param beforeSearch=true) true so return
    * matched string of before all words
    * @param {String} string What do you want to target String
    * @param {String} find What do you want to find String
    * @param {Boolean} beforeSearch true | false By default set false.
    * @returns sliced string
    */
   strstr: function (string, find, beforeSearch) {
      var matcherIndex,
         adjustDir,
         stringToArray = (string + "").match(rnothtmlwhite);

      if ((matcherIndex = stringToArray.indexOf(find)) > -1) {
         adjustDir = beforeSearch === true ? [0, matcherIndex] : [matcherIndex];
         return slice.apply(stringToArray, adjustDir).join(" ");
      }

      return null;
   },

   /**
    * Return strstr find your target string when targeted string matched so return after
    * matched string of all words, if pass (Param beforeSearch=true) true so return
    * matched string of before all words
    * ?Notice: stristr and strstr method are same but strstr is a case-sensitive method
    * ?and stristr is case-insensitive method, "PHP" <= "Php", "jqrony" <= "jQrony"
    * @param {String} string What do you want to target String
    * @param {String} find What do you want to find String
    * @param {Boolean} beforeSearch  beforeSearch true | false By default set false.
    * @returns sliced string
    */
   stristr: function (string, find, beforeSearch) {
      var matcherIndex,
         adjustDir,
         stringToArray = (string + "").match(rnothtmlwhite);

      if ((matcherIndex = arrayToUpper(stringToArray).indexOf(find.toUpperCase())) > -1) {
         adjustDir = beforeSearch === true ? [0, matcherIndex] : [matcherIndex];
         return slice.apply(stringToArray, adjustDir).join(" ");
      }

      return null;
   },

   /**
    * strireplace method work same String.replace but strireplace is case-insensitive
    * @param {String} string What do you want to target String
    * @param {String} find 
    * @param {String} replace 
    * @returns 
    */
   strireplace: function (string, find, replace) {
      return string.replace(new RegExp("(" + find + ")", "ig"), replace);
   },

   repeat: function (str, len) {
      if (typeof str !== "string" || !str) {
         return;
      }

      if (support.strRepeat) {
         return str.repeat(+len);
      }

      var l = +len, ret = "";

      while (l--) {
         ret += str;
      }

      return ret; // return repeated string
   },

   /**
    * strrev method reverse all string "Hello worlds" to reverse "sdlrow olleH"
    * @param {String} string What do you want to target String
    * @returns reversed string
    */
   strrev: function (string) {
      var srev = "",
         length = string.length;

      while (length--) {
         srev += string[length];
      }

      return srev;
   },

   toUpper: function (string) {
      if (string == null) {
         return;
      }
      return jQrony.isNumeric(string) ? +string : string.toUpperCase();
   },

   toLower: function (string) {
      if (string == null) {
         return;
      }
      return jQrony.isNumeric(string) ? +string : string.toLowerCase();
   },

   /**
    * shuffle method will be shuffling and change position of String
    * @param {String} string What do you want to target String
    * @returns shuffled-string
    */
   shuffle: function (string) {
      var shuffled = "",
         randIndex,
         strToArray = string.split(""),
         i = 0,
         length = strToArray.length;

      for (; i < length; i++) {
         if ((randIndex = Math.floor(Math.random() * strToArray.length)) != null) {
            shuffled += strToArray[randIndex];
            strToArray.splice(randIndex, 1);
         }
      }

      return shuffled;
   },

   /**
    * Returns random method random values String, Number, and custom values
    * @param {Number} randLen How many generate random value of length
    * @param {Mixed} mixed true for random String and true for random Number
    * If pass String so we return random value for your String
    */
   random: function (randLen, mixed) {
      var num = "0123456789".split(""),
         ret = "",
         i = 0,
         cacheLen,
         str = "abcdefghijklmnopqrstuvwxyz".split("");

      mixed = mixed || false;
      if (!(typeof mixed === "boolean" || typeof mixed === "string")) {
         return null;
      }

      mixed = mixed === false ? num : mixed === true ? str : mixed.split("");
      randLen = +randLen || 1;

      for (; i < randLen; i++) {
         ret += (mixed)[Math.floor(Math.random() * mixed.length)];
      }

      if ((cacheLen = (parseInt(ret) + "").length) &&
         (cacheLen = randLen - cacheLen)) {

         for (i = 0; i < cacheLen; i++) {
            ret += (mixed[0] === 0 && mixed.slice(1) || mixed)[
               Math.floor(Math.random() * mixed.length)
            ];
         }
      }

      if (jQrony.isNumeric(ret) && ret.length > 17) return BigInt(ret);

      return parseInt(ret) || ret;
   },

   /**
    * strpad method add a (new-pad) string given your padlength
    * @param {String} string What do you want to target String
    * @param {Number} length padding length Note: your padding
    * length greater than for your targeted String
    * @param {String} padstring Keyboard value Alpha, numeric etc.
    * @param {String} padtype PAD_LEFT | PAD_RIGHT | PAD_BOTH
    * @returns String
    */
   strpad: function (string, length, padstring, padtype) {
      var strappedstr = "",
         i = 0,
         padFormat,
         phLen,
         padLen = length - string.length;

      padtype = padtype || "PAD_RIGHT";

      for (; i < padLen; i++) strappedstr += padstring;
      phLen = strappedstr.length / 2;

      padFormat = {
         "PAD_LEFT": strappedstr + string,
         "PAD_RIGHT": string + strappedstr,
         "PAD_BOTH": strappedstr.slice(0, phLen) + string + strappedstr.slice(phLen),
      };

      return padFormat[padtype];
   },

   /**
    * addslashes method will be add slashes before '|" single cots or double cots
    * @param {String} string What do you want to target String
    * @returns added slashes string
    */
   addslashes: function (string) {
      return string.replace(rcots, fAddSlash);
   },

   /**
    * stripslashes find back slash \ and remove back slashes of targeted string globaly
    * @param {String} string What do you want to target String
    * @returns stripslashes String
    */
   stripslashes: function (string) {
      return string.replace(rslashes, "");
   },

   split: function (string, separator, limit) {
      if (typeof string !== "string" && !string) {
         return [string];
      }

      // short spliting perform operation for string or regexp
      if (isType(separator) === "regexp" || typeof separator === "string") {
         return string.split(separator, limit);
      }

      var splited = [];

      if ((separator = +separator) && typeof separator === "number") {
         while (string) {

            splited.push(string.slice(0, separator));
            string = string.slice(separator);
         }
      }

      return splited;
   },

   /**
    * striptags find tags in string "<body><table>...etc." and remove tags globaly
    * ?Notice: If allow any tags so striptags method ignore allow tags
    * @param {String} string What do you want to target String
    * @param {String} allow If do you want to skip tags "<body><table>"
    * @returns stripedtags String
    */
   striptags: function (string, allow) {
      var skip, tmp = document.createElement("div");

      tmp.innerHTML = allow;
      skip = tmp.innerHTML.match(rtags) || [];

      return string.replace(rtags, stripFn(skip));
   },

   /**
    * chunksplit method chunked String and add new (keyboard-string)
    * for example :input (ofgotoinco) :outputs (of-go-to-in-co)
    * chunked pos different of 2 if pass chunklen 2 customize chunklen
    * @param {String} string What do you want to target String
    * @param {Number} chunklen Your chunkedlen less than of string len
    * @param {Mixed} include keyboard character, number, alpha etc.
    * @param {Boolean} ignoreend true for ignored value | default by set false
    * @returns String
    */
   chunksplit: function (string, chunklen, include, ignoreend) {
      var i = 0,
         rchunk,
         source = "",
         pushend = string.length === +chunklen ? "" : include || "";

      ignoreend === true ? pushend = "" : pushend;

      for (; i < +chunklen; i++) source += ".";
      rchunk = new RegExp("(" + source + ")", "g");

      return string.replace(rchunk, fChunk(include)) + pushend;
   }
});

// RegExp Handler Fn use in replace method
function fToUpper(letter, _pos) {
   return letter.substr(0, 1).toUpperCase() + letter.slice(1).toLowerCase();
}

// RegExp Handler Fn use in replace method
function fAddSlash(letter, _pos) {
   return ("\\" + letter);
}

// RegExp Handler Fn use in replace method
function stripFn(qualifier) {
   return function fStripTags(letter, _pos) {
      return indexOf.call(qualifier, letter) > -1 ? letter : "";
   };
}

// RegExp Handler Fn use in replace method
function fChunk(include) {
   return function (letter, _pos) {
      return letter += include;
   };
}

// RegExp Handler Fn use in replace method
function fToLower(letter, _pos) {
   return letter.substr(0, 1).toLowerCase() + letter.slice(1).toUpperCase();
}

/* :Snizzle 1.1.1
   * > npm i snizzle
----------------------------------------------------------------------------*/
var Snizzle =
   /*!
      * Snizzle CSS Selector Engine 1.1.1
      * 
      * No Copyright JS Foundation and other contributors
      * No Released under the MIT any license
      * 
      * Author: <codingmodassir@gmail.com>
      * Date: 12-11-2022 AT 3:12 PM
      */
   (function (window) {
      var i,
         support,
         unique,
         Expr,
         getText,
         isXML,
         tokenize,
         select,
         contains,

         // Instance-specific data
         expando = "Snizzle" + 1 * Date.now(),
         preferredDoc = window.document,

         // Local document vars
         setDocument,
         document,
         docElem,
         documentIsHTML,

         // Snizzle Engine of version
         version = "1.1.1",

         // Instance methods
         hasOwn = ({}).hasOwnProperty,
         arr = [],
         indexOf = arr.indexOf,
         push = arr.push,
         slice = arr.slice,

         flat = arr.flat ? function (array) {
            return arr.flat.call(array);
         } : function (array) {
            return arr.concat.apply([], array);
         },

         booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
            "ismap|loop|multiple|open|readonly|required|scoped",

         // HTML Singleton TAGS with no closing TAG
         nctags = "img|input|meta|area|keygen|base|link|br|hr|command|col|param|track|wbr",

         // Regular expressions

         whitespace = "[\\x20\\t\\r\\n\\f]",

         identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

         // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
         attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

            // Operator (capture 2)
            "*([*^$|!~]?=)" + whitespace +

            // "Attribute values must be CSS identifiers [capture 5]
            // or strings [capture 3 or capture 4]"
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
            whitespace + "*\\]",

         pseudos = ":(" + identifier + ")(?:\\((" +

            // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
            // 1. quoted (capture 3; capture 4 or capture 5)
            "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

            // 2. simple (capture 6)
            "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

            // 3. anything else (capture 2)
            ".*" +
            ")\\)|)",

         // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
         rwhitespace = new RegExp(whitespace + "+", "g"),
         rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
            whitespace + "+$", "g"),

         rcombinators = new RegExp("^" + whitespace + "*([>+~=<]|" + whitespace + ")" + whitespace +
            "*"),
         ridentifier = new RegExp("^" + identifier + "$"),

         matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
               whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
               whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            nocloseTags: new RegExp("^(?:" + nctags + ")$", "i"),

            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            "needsContext": new RegExp("^" + whitespace +
               "*[>+~=<]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
               "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
         },

         rhtml = /HTML$/i,
         rinputs = /^(?:input|select|textarea|button)/i,
         rheader = /^h\d$/i,
         reditable = /^(?:input|textarea)/i,

         rnative = /^[^{]+\{\s*\[native \w/,

         // Easily-parseable/retrievable ID or TAG or CLASS selectors
         rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

         runiqueRelative = /^[>+~=<]+$/,

         // camelCase Handling regular expression
         rmsPrefix = /^-ms-/,
         rdashAlpha = /-([a-z])/g,

         // dashed Handling regular expression
         rmsPrefilter = /^ms/,
         rmultiAlpha = /([A-Z])/g,

         // detect rcomma and lcomma and whitespaces
         rcomma = /(^,|,$|\s+)/g,

         rnoneAnimation = /^(none)\s*(0s)\s*(ease)\s*(0s).*(running)/;

      function Snizzle(selector, context, results, seed) {
         var m, match, elem,
            newContext = context && context.ownerDocument,

            nodeType = context ? context.nodeType : 9;

         results = results || [];

         if (nodeType !== 1 && nodeType !== 11 && nodeType !== 9 ||
            typeof selector !== "string" || !selector) {
            return document;
         }

         // HANDLE: If not seed[]
         if (!seed) {

            setDocument(context);
            context = context || document;

            if (documentIsHTML) {
               if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

                  // HANDLE: ID matcher (#id)
                  if ((m = match[1])) {
                     if (nodeType === 9) {
                        if ((elem = context.getElementById(m))) {
                           results.push(elem);
                           return results;
                        }
                     } else {
                        if (newContext && (elem = newContext.getElementById(m))) {
                           results.push(elem);
                           return results;
                        }
                     }
                     // HANDLE: TAG matcher (h1)
                  } else if ((m = match[2])) {
                     if ((elem = context.getElementsByTagName(selector))) {
                        push.apply(results, elem);
                        return results;
                     }
                     // HANDLE: CLASS matcher (.class)
                  } else if ((m = match[3])) {
                     if ((elem = context.getElementsByClassName(m))) {
                        push.apply(results, elem);
                        return results;
                     }
                  }
               }
            }
         }

         // All others
         return select(selector.replace(rtrim, "$1"), context, results, seed);
      }

      /**
       * specialFunction method for use special  by Sizzzles
       * @param {Function} fn The function to special target
       * @returns expended fn
       */
      function specialFunction(fn) {
         fn[expando] = true;
         return fn;
      }

      /**
       * Support testing using an element
       * @param {Function} fn Passed the created element and returns a boolean result
       */
      function assert(fn) {
         var elem = document.createElement("fieldset");
         try {
            return !!fn(elem);
         }
         catch (e) {
            return false;
         }
         finally {
            if (elem.parentNode) {
               elem.parentNode.removeChild(elem);
            }
            elem = null;
         }
      }

      /**
       * unique function remove multiple duplicates value
       * @param {Array} obj who do you want to unique arr
       * @returns unique array
       */
      function unique(obj) {
         var i = 0,
            elem,
            noDuplicates = [];

         // Don't make unique array if obj !array
         if (!(Array.isArray(obj) || obj.version)) {
            return obj;
         }

         for (; i < obj.length; i++) {
            elem = obj[i];
            if (slice.call(obj).indexOf(elem) === i) {
               noDuplicates.push(elem);
            }
         }

         // empty obj array in deeply and convert empty []
         obj.splice(0, obj.length);

         // Fixes bugs (#empty) Array []
         obj.length = 0;

         // push unique data
         // applying unique data in name of obj #argument
         [].push.apply(obj, noDuplicates);
         return obj || noDuplicates;
      }


      // Expose support vars for convenience
      support = Snizzle.support = {};

      Snizzle.dashed = dashed;
      Snizzle.camelCase = camelCase;

      // SET: current version of Snizzle 1.1.1
      Snizzle.version = version;

      /**
       * Detects XML nodes
       * @param {Element|Object} elem An element or a document
       * @returns {Boolean} True iff elem is a non-HTML XML node
       */
      isXML = Snizzle.isXML = function (elem) {
         var namespace = elem && elem.namespaceURI,
            docElem = elem && (elem.ownerDocument || elem).documentElement;

         return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
      };

      /**
       * Snizzle.matches returns expr string to find DOM-Elements
       * @param {String} expr selector matcher with expr :eq(0), :odd, :first etc.
       * @param {Object} elements array of elements
       * @returns matcher DOM-Elements
       */
      Snizzle.matches = function (expr, elements) {
         return Snizzle(expr, null, null, elements);
      };

      // Snizzle error Throwers function
      Snizzle.error = function (msg) {
         throw new Error("Syntax Error: unrecognized expression: " + msg);
      };

      Snizzle.contains = function (context, elem) {

         // Set document vars if needed
         // Support: IE 11+, Edge 17 - 18+
         // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
         // two documents; shallow comparisons work.
         // eslint-disable-next-line eqeqeq
         if ((context.ownerDocument || context) !== document) {
            setDocument(context);
         }

         return contains(context, elem);
      };

      Snizzle.attr = function (elem, name) {

         // Set document vars if needed
         // Support: IE 11+, Edge 17 - 18+
         // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
         // two documents; shallow comparisons work.
         // eslint-disable-next-line eqeqeq
         if ((elem.ownerDocument || elem) !== document) {
            setDocument(elem);
         }

         var fn = Expr.attrHandle[name.toLowerCase()],
            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
               fn(elem) : undefined;

         return val !== undefined && val.length ?
            val :
            support.attributes || !documentIsHTML ?
               checker(elem, "getAttribute", name) :
               ((val = checker(elem, "getAttributeNode", name))) && val.specified ?
                  val.value : null;
      };

      /**
       * Sets document-related variables once based on the current document
       * @param {Element|Object} [doc] An element or document object to use to set the document
       * @returns {Object} Returns the current document
       */
      setDocument = Snizzle.setDocument = function (node) {
         var hasCompare,
            doc = node ? node.ownerDocument || node : preferredDoc;

         // Return early if doc is invalid or already selected
         // Support: IE 11+, Edge 17 - 18+
         // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
         // two documents; shallow comparisons work.
         // eslint-disable-next-line eqeqeq
         if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
            return document;
         }

         // Update global variables
         document = doc;
         docElem = document.documentElement;
         documentIsHTML = !isXML(document);

         // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
         // Safari 4 - 5 only, Opera <=11.6 - 12.x only
         // IE/Edge & older browsers don't support the :scope pseudo-class.
         // Support: Safari 6.0 only
         // Safari 6.0 supports :scope but it's an alias of :root there.
         support.scope = assert(function (el) {
            docElem.appendChild(el).appendChild(document.createElement("div"));
            return typeof el.querySelectorAll !== "undefined" &&
               !el.querySelectorAll(":scope fieldset div").length;
         });

         /* Attributes
         --------------------------------------------------------------------------- */
         // Support: IE<8
         // Verify that getAttribute really returns attributes and not properties
         // (excepting IE8 booleans)
         support.attributes = assert(function (el) {
            el.className = "j";
            return !el.getAttribute("className");
         });

         /* getElement(s)By*
         --------------------------------------------------------------------------- */

         // Check if getElementsByTagName("*") returns only elements
         support.getElementsByTagName = assert(function (el) {
            el.appendChild(document.createComment(""));
            return !el.getElementsByTagName("*").length;
         });

         // Support: IE<=9
         support.getElementsByClassName = rnative.test(document.getElementsByClassName);

         /* QSA/matchesSelector
         --------------------------------------------------------------------------- */

         // QSA and matchesSelector support
         support.qsa = rnative.test(document.querySelectorAll);

         // Support: IE<10
         // Check if getElementById returns elements by name
         // The broken getElementById methods don't pick up programmatically-set names,
         // so use a roundabout getElementsByName test
         support.getById = assert(function (el) {
            docElem.appendChild(el).id = expando;
            return !document.getElementsByName || document.getElementsByName(expando).length;
         });

         /* #ID
         --------------------------------------------------------------------------- */
         if (support.getById) {
            Expr.filter["ID"] = specialFunction(function (id) {
               return access(function (elem) {
                  return elem && elem.id === id || attrchecker(elem, "id") === id;
               });
            });
         } else {
            Expr.filter["ID"] = specialFunction(function (id) {
               return access(function (elem) {
                  var node = checker(elem, "getAttributeNode", "id");
                  return node && node.nodeValue === id;
               });
            });
         }


         /* TAG
         --------------------------------------------------------------------------- */
         Expr.find["TAG"] = support.getElementsByTagName ?
            function (tag, context) {
               if (typeof context.getElementsByTagName !== "undefined") {
                  return context.getElementsByTagName(tag);

                  // DocumentFragment nodes don't have gEBTN
               } else if (support.qsa) {
                  return context.querySelectorAll(tag);
               }
            } :

            function (tag, context) {
               var elem, tmp = [], i = 0,

                  // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                  results = context.getElementsByTagName(tag);

               // HANDLE: If tag is equal to "*"
               if (tag === "*") {
                  while ((elem = results[i++])) {
                     if (elem.nodeType === 1) {
                        tmp.push(elem);
                     }
                  }

                  return tmp; // return only nodeType 1 elements
               }

               return results;
            }

         /* CLASS
         --------------------------------------------------------------------------- */
         Expr.find["CLASS"] = support.getElementsByClassName &&
            function (className, context) {
               if (documentIsHTML &&
                  typeof context.getElementsByClassName(className)) {
                  return context.getElementsByClassName(className);

                  // DocumentFragment nodes don't have gEBCN
               } else if (support.qsa) {
                  return context.querySelectorAll(className);
               }
            }

         /* contains
         --------------------------------------------------------------------------- */
         hasCompare = rnative.test(docElem.compaireDocumentPosition);

         contains = hasCompare || rnative.test(docElem.contains) ?
            function (context, elem) {

               htmlNode = context.nodeType === 9 ? context.documentElement : context,
                  elemPnode = elem && elem.parentNode;

               return htmlNode === elemPnode || !!(elemPnode &&
                  elemPnode.nodeType === 1 && (context.contains ? context.contains(elem) :
                     context.compaireDocumentPosition && context.compaireDocumentPosition(elem)
                  ));
            } :
            function (context, elem) {
               if (elem) {
                  while ((elem = elem.parentNode)) {
                     if (context === elem) {
                        return true;
                     }
                  }
               }
               return false;
            };

         /* DOCUMENT
         --------------------------------------------------------------------------- */
         return document;
      };

      /**
       * Utility function for retrieving the text value of an array of DOM nodes
       * @return {Array|Element} elem
       */
      getText = Snizzle.getText = function (elem) {
         var node,
            text = "",
            i = 0,
            nodeType = elem.nodeType;

         if (!nodeType) {
            while ((node = elem[i++])) {
               text += getText(node);
            }

         } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {

            // Use textContent for elements
            if (typeof elem.textContent === "string") {
               return elem.textContent;
            }
            else {
               // Traverse its children
               for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  text += getText(elem);
               }
            }

            // HANDLE: textNode <= nt===3, any <= nt===4
         } else if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
         }

         // Do not include comment or processing instruction nodes
         return text;
      };

      /**
       * makeParam function basically used on arguments setup. argument setup
       * in include object, length or object, empty array [], only
       * @param {Function} callback Pass function whereas you want to called
       * @returns arged caller Function value
       */
      function makeParam(each, callback) {
         if (each === true) {

            return function (obj) {
               var extend = [], i = 0, val,
                  length = obj.length;

               for (; i < length; i++) {
                  val = callback(obj[i], obj, obj.length);
                  val && extend.push(val);
               }

               return extend;
            }
         }

         // Force callback to be an Function
         callback = each || callback;

         return function (obj) {
            return callback(obj, obj.length, []) || [];
         };
      }

      /**
       * access method work as like each and map method 2 in 1 function mutual
       * @param {Boolean} mapped true | false By default SET: false, if you are
       * pass true value so access method work as map methods
       * @param {Function} callback Pass a function whereas you want to called
       * @returns main function
       */
      access = Snizzle.access = function (mapped, callback) {
         /**
          * @param {HTMLElement|Object} obj
          * @returns matched Elements of array
          */
         return function (obj) {
            var i = 0, length = obj.length,
               value,
               ret = [];

            // shift arguments for to be Boolean
            if (typeof mapped === "function") {
               callback = callback || mapped;
               mapped = false;
            }

            for (; i < length; i++) {
               value = callback(obj[i], i, obj, length);
               (mapped === true && value != null) &&
                  ret.push(value) || (value && ret.push(obj[i]));
            }

            return unique(flat(ret));
         };
      };

      /**
       * schunk split or break string from comma and adjust whitespce
       * @param {String} expr Selector expr string with comma
       * @returns chunked-spered string array
       */
      function schunk(expr) {
         return expr.replace(rcomma, " ").trim().split(",");
      }

      /**
       * checker function check support element attribute and sort-hand method
       * @param {Object|HTML} elem HTML Elements object with object or array
       * @param {String} methods function in Elements method
       * @param {String} value access final direct short hand method
       * @returns matched value
       */
      function checker(elem, methods, value) {
         return elem[methods] && elem[methods](value) || elem[value];
      }

      /**
       * Retuns createHiddenPseudo only hidden or visible Elements
       * @param {Boolean} isHidden true for Hidden | false for Visible
       * @returns HTMLElements
       */
      function createHiddenPseudo(isHidden) {
         return access(function (elem) {
            var visibility = window.getComputedStyle(elem).visibility === "hidden";
            return (visibility || elem.hidden) === isHidden;
         });
      }

      /**
       * createFormsPseudo method identify form tag in GET/POST method
       * @param {String} method GET | POST
       * @returns HTMLElements
       */
      function createFormsPseudo(method) {
         // Know :GET only detect the method get in form elements and :POST only get method post form elements
         return access(function (elem) {
            var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
            return nodeName === "form" &&
               checker(elem, "getAttribute", "method").toUpperCase() === method;
         });
      }

      /**
       * Returns createInputPseudo only <input /> Elements with type="target"
       * @param {String} type input type [type="yourtype"]
       * @returns createInputPseudo
       */
      function createInputPseudo(type) {
         return access(function (elem) {
            var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
            return nodeName === "input" && elem.type === type;
         });
      }

      /**
       * Returns createButtonPseudo method only button Elements
       * @param {String} type Button of type
       * @returns createButtonPseudo
       */
      function createButtonPseudo(type) {
         return access(function (elem) {
            var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
            return nodeName === "button" && elem.type === type;
         });
      }

      /**
       * Returns createURLPseudo method SRC/HREF Elements
       * @param {String} attr SRC | HREF
       * @returns createURLPseudo
       */
      function createURLPseudo(attr) {
         return access(function (elem) {
            return elem && !!checker(elem, "getAttribute", attr);
         });
      }

      /**
       * Returns a function to use in pseudos for :enabled/:disabled
       * @param {Boolean} disabled true for :disabled; false for :enabled
       * @returns Boolean
       */
      function createDisabledPseudo(disabled) {
         return access(function (elem) {
            if ("form" in elem) {
               if (elem.parentNode && elem.disabled === false) {

                  if ("label" in elem) {
                     if ("label" in elem.parentNode) {
                        return elem.parentNode.disabled === disabled;
                     } else {
                        return elem.disabled === disabled;
                     }
                  }

                  // Support: IE 6 - 11
                  // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                  return elem.disabled === disabled ||
                     elem.disabled !== !disabled;
               }

               return elem.disabled === disabled;

            } else if ("label" in elem) {
               return elem.disabled === disabled;
            }

            // Remaining elements are neither :enabled nor :disabled
            return false;
         });
      }

      // Used by dashed as callback to replace()
      function fdashed(_all, letter) {
         return ("-" + letter).toLowerCase();
      }

      // Used by camelCase as callback to replace()
      function fcamelCase(_all, letter) {
         return letter.toUpperCase();
      }

      // Convert camelCase to dashed; used by the css and data modules
      // Support: IE <=9 - 11, Edge 12 - 15
      // Microsoft forgot to hump their vendor prefix (#9572)
      function dashed(string) {
         return string.replace(rmsPrefilter, "-ms").replace(rmultiAlpha, fdashed);
      }

      // Convert dashed to camelCase; used by the css and data modules
      // Support: IE <=9 - 11, Edge 12 - 15
      // Microsoft forgot to hump their vendor prefix (#9572)
      function camelCase(string) {
         return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }

      // attrchecker Check the multiple attribute (id, class, data-attr)
      // Support: IE <=9 - 11, Edge 12 - 15
      // Microsoft forgot to hump their vendor prefix (#9572)
      function attrchecker(elem, attr, isDataAttr) {
         if (isDataAttr === true) {
            attr = ("data-" + attr);
         }
         return elem.getAttribute && elem.getAttribute(dashed(attr)) != null;
      }


      Expr = Snizzle.selectors = {

         pseudosLength: this.length,

         match: matchExpr,

         attrHandle: {},

         find: {},

         preFilter: {},

         createPseudo: specialFunction,

         filter: {

            "TAG": specialFunction(function (tnSelector) {
               return access(function (elem) {
                  tnSelector = tnSelector && tnSelector.toLowerCase();
                  return tnSelector === "*" ? true :
                     elem.nodeName.toLowerCase() === tnSelector;
               });
            }),

            "CLASS": specialFunction(function (cnSelector) {
               return access(function (elem) {
                  var pattern;

                  return (pattern = new RegExp("(^|" + whitespace + ")" +
                     cnSelector + "(" + whitespace + "|$)")) &&
                     pattern.test(
                        typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                     );
               });
            }),

            "ATTR": specialFunction(function (name, operator, check) {
               return access(function (elem) {
                  var result = Snizzle.attr(elem, name) || elem.hasAttribute(name) && name || "";

                  if (result == null) {
                     return operator = "!=";
                  }

                  if (!operator) {
                     return !!result;
                  }

                  result += "";

                  /* eslint-disable max-len */
                  return operator === "=" ? result === check :
                     operator === "!=" ? result !== check :
                        operator === "^=" ? check && result.indexOf(check) === 0 :
                           operator === "*=" ? check && result.indexOf(check) > -1 :
                              operator === "$=" ? check && result.slice(-check.length) === check :
                                 operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 :

                                    operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
                                       false;
                  /* eslint-enable max-len */
               });
            }),

            "CHILD": specialFunction(function (child) {
               return access(true, function (elem) {
                  return !!(elem.querySelectorAll(child) || []).length;
               });
            }),

            "PSEUDO": function (pseudo, argument) {

               // pseudo-class names are case-insensitive
               // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
               // Remember that setFilters inherits from pseudos
               var fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
                  Snizzle.error("Unsupported pseudo: Compilation failed your '" + pseudo + "' is not supported.");

               // The user may use createPseudo to indicate that
               // arguments are needed to create the filter function
               // just as Snizzle does
               if (fn[expando]) {
                  return fn(argument);
               }


               // Return none-special pseudos function
               return fn;
            }
         },

         exprRelative: {
            " ": access(true, function (elem) {
               return slice.call(Expr.find["TAG"]("*", elem));
            }),

            ">": access(true, function (elem) {
               return slice.call(elem.children.length && elem.children);
            }),

            "+": access(true, function (elem) {
               var sibling;
               if ((sibling = elem.nextElementSibling)) {
                  return sibling;
               }
            }),

            "~": access(true, function (elem) {
               var ret = [];
               while ((elem = elem.nextElementSibling)) {
                  ret.push(elem);
               }
               return ret;
            }),

            "=": access(true, function (elem) {
               var sibling;
               if ((sibling = elem.previousElementSibling)) {
                  return sibling;
               }
            }),

            "<": access(true, function (elem) {
               var ret = [];
               while ((elem = elem.previousElementSibling)) {
                  ret.push(elem);
               }
               return ret;
            })
         },

         pseudos: {

            "not": specialFunction(function (selector) {
               var target = jQrony(selector);
               return access(function (elem) {
                  return (indexOf.call(target, elem) > -1) === false;
               });
            }),

            "has": specialFunction(function (selector) {
               return access(function (elem) {
                  return Snizzle(selector, elem).length > 0;
               });
            }),

            "filter": specialFunction(function (selector) {
               return access(function (elem) {
                  var target = jQrony(selector);
                  return (indexOf.call(target, elem) > -1) === true;
               });
            }),

            "theme": access(function (elem) {
               var ctv = checker(elem, "getAttributeNode", "name") || elem.name,
                  nodeName = elem.nodeName;
               if (ctv && nodeName === "META") {
                  return (ctv.nodeValue || ctv) === "theme-color";
               }
            }),

            "iscript": access(function (elem) {
               return elem.nodeName === "SCRIPT" &&
                  (!checker(elem, "getAttribute", "src") || !elem.src);
            }),

            "guard": access(function (elem) {
               return elem.nodeName === "BODY" || window.document.body === elem;
            }),

            // "nocloser" pseudos find only no closing tags <input /> <img />
            "nocloser": access(function (elem) {
               return elem.nodeName && matchExpr.nocloseTags.test(elem.nodeName);
            }),

            // "closer" pseudos find only closing tags <div></div>,<p></p>
            "closer": access(function (elem) {
               return elem.nodeName && !matchExpr.nocloseTags.test(elem.nodeName);
            }),

            "title": access(function (elem) {
               return checker(elem, "hasAttribute", "title");
            }),

            "contains": specialFunction(function (text) {
               return access(function (elem) {
                  return (elem.textContent || getText(elem)).indexOf(text) > -1;
               });
            }),

            // "lang" work only lang attribute Elements By default select <html lang="en">
            "lang": specialFunction(function (lang) {

               // lang value must be a valid identifier
               if (!ridentifier.test(lang || "")) {
                  Snizzle.error("Unsupported Language: " + lang);
               }

               // change case lang toLowerCase
               lang = (lang + "").toLocaleLowerCase();

               return access(function (elem) {
                  do {
                     var langElem;
                     if ((langElem = documentIsHTML ?
                        elem.lang :
                        elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {

                        // change case langElem toLowerCase
                        langElem = langElem.toLowerCase();
                        return langElem === lang || langElem.indexOf(lang + "-") === 0;
                     }
                  }
                  while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
               })
            }),

            // Miscellaneous
            "target": access(function (elem) {
               var hash = window.location && window.location.hash;
               return hash && hash.slice(1) === elem.id;
            }),

            "root": access(function (elem) {
               return elem === docElem;
            }),

            "focus": access(function (elem) {
               return elem === elem.activeElement &&
                  (!document.hasFocus || document.hasFocus()) ||
                  !!(elem.type || elem.href || ~elem.tabIndex);
            }),

            // Boolean properties
            "visible": createHiddenPseudo(false),
            "hidden": createHiddenPseudo(true),

            "get": createFormsPseudo("GET"),
            "post": createFormsPseudo("POST"),

            "enabled": createDisabledPseudo(false),
            "disabled": createDisabledPseudo(true),

            "checked": access(function (elem) {
               var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
               return (nodeName === "input" && !!elem.checked) ||
                  (nodeName === "option" && !!elem.selected);
            }),

            "selected": access(function (elem) {

               if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
               }

               return elem.selected === true;
            }),

            // Contents
            // empty Elements
            "empty": access(function (elem) {

               // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; Clazzer ref: 5),
               //   but not by others (comment: 8; processing instruction: 7; etc.)
               // nodeType < 6 works because attributes (2) do not appear as children
               for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                     return false;
                  }
               }
               return true;
            }),

            "parent": access(function (_elem, i, seed) {
               return !Expr.pseudos["empty"](seed)[i];
            }),

            // Search none-disabled, readonly and contenteditable=true Elements
            // Find specific editable Elements input/textarea, "editable=true";
            "editable": access(function (elem) {
               return (reditable.test(elem.nodeName) && !elem.disabled && !elem.readOnly) ||
                  (checker(elem, "getAttribute", "contenteditable"));
            }),

            // Elements/input types pseudos
            "header": access(function (elem) {
               return rheader.test(elem.nodeName);
            }),

            "input": access(function (elem) {
               return rinputs.test(elem.nodeName);
            }),

            "button": access(function (elem) {
               var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
               return (nodeName === "button" || (nodeName === "input" && elem.type === "button"));
            }),

            "text": access(function (elem) {
               var attr,
                  nodeName = elem.nodeName && elem.nodeName.toLowerCase();
               return nodeName === "input" && elem.type === "text" &&
                  ((attr = elem.getAttribute("type")) == null ||
                     attr.toLowerCase() === "text");
            }),

            "ctx": makeParam(true, function (elem) {
               return rnative.test(elem.getContext) && elem.getContext("2d");
            }),

            // Position-in-collection pseudos
            "eq": specialFunction(function (i) {
               return makeParam(function (seed, length) {
                  return [seed[+i < 0 ? +i + length : +i]];
               });
            }),

            "first": function (seed) {
               return Expr.pseudos["eq"](0)(seed);
            },

            "last": function (seed) {
               return Expr.pseudos["eq"](-1)(seed);
            },

            "center": makeParam(function (seed, length) {
               return Expr.pseudos["eq"](parseInt(length / 2))(seed);
            }),

            "even": access(function (_elem, i) {
               return (i + 1) % 2;
            }),

            "odd": access(function (_elem, i) {
               return i % 2;
            }),

            "lt": specialFunction(function (paire) {
               return makeParam(function (seed, length, matchIndexes) {
                  var i = +paire < 0 ? +paire + length : +paire > length ? length : +paire;
                  for (; --i >= 0;) {
                     matchIndexes.push(seed[i]);
                  }
                  return matchIndexes.reverse();
               });
            }),

            "gt": specialFunction(function (paire) {
               return makeParam(function (seed, length, matchIndexes) {
                  var i = +paire < 0 ? +paire + length : + paire;
                  for (; ++i < length;) {
                     matchIndexes.push(seed[i]);
                  }
                  return matchIndexes;
               });
            }),

            "skip": specialFunction(function (paire) {
               return makeParam(function (seed, length, matchIndexes) {
                  var i = 0;
                  paire = +paire < length && +paire > 0 ? +paire : length;
                  for (; i < length; i += paire) {
                     matchIndexes.push(seed[i]);
                  }
                  return matchIndexes;
               });
            }),

            "offset": access(function (elem) {
               return elem.nodeType && elem.nodeType !== 9 &&
                  window.getComputedStyle(elem).position !== "static" || elem === docElem;
            }),

            "data": specialFunction(function (data) {
               return access(function (elem) {
                  return elem.dataset[data] != null || attrchecker(elem, data, true);
               });
            }),

            "animated": access(function (elem) {
               var animation = elem.nodeType && window.getComputedStyle(elem).animation;
               return !rnoneAnimation.test(animation) || elem.nodeName === "MARQUEE";
            }),
         }
      };

      Expr.pseudos["ignore"] = Expr.pseudos["skip"];
      Expr.pseudos["middle"] = Expr.pseudos.center;
      Expr.pseudos["is"] = Expr.pseudos["filter"];
      Expr.pseudos["nth"] = Expr.pseudos["eq"];
      Expr.pseudos["context"] = Expr.pseudos["get2d"] = Expr.pseudos["ctx"];

      // Add button/input type pseudos
      for (i in {
         radio: true, checkbox: true,
         file: true, password: true, image: true, search: true, url: true, range: true
      }) {
         Expr.pseudos[i] = createInputPseudo(i);
      }

      for (i in { submit: true, reset: true, menu: true }) {
         Expr.pseudos[i] = createButtonPseudo(i);
      }

      // Add src/href attribute pseudos
      for (i in { src: true, href: true }) {
         Expr.pseudos[i] = createURLPseudo(i);
      }


      access(function (attr) {
         Expr.attrHandle[attr] = access(function (elem) {
            return !!checker(elem, "hasAttribute", attr);
         });
      })(booleans.match(/\w+/g));


      // Easy API for creating new setFilters
      function setFilters() { }
      setFilters.prototype = Expr.filters = Expr.pseudos;
      Expr.setFilters = new setFilters();


      tokenize = Snizzle.tokenize = function (selector) {
         var matched, soFar, match, groups, type;

         soFar = selector.trim();
         groups = [];

         while (soFar) {

            matched = false;

            if ((match = rcombinators.exec(soFar))) {
               matched = match.shift();

               groups.push({
                  value: matched,
                  type: match[0].replace(rtrim, " ")
               });
               soFar = soFar.slice(matched.length);
            }

            for (type in Expr.filter) {
               if ((match = matchExpr[type].exec(soFar))) {
                  matched = match.shift();
                  groups.push({
                     type: type,
                     value: matched,
                     matches: match,
                     unique: match[0]
                  });
                  soFar = soFar.slice(matched.length);
               }
            }

            if (!matched) {
               break;
            }
         }

         return soFar.length && soFar ?
            Snizzle.error(soFar) :
            groups.slice(0);
      };

      function getDefaultAllDocumentElements(results, outermost) {
         var elem, seed = results || [],
            i = 0,

            // We must always have either seed elements or outermost context
            elems = outermost && Expr.find["TAG"]("*", outermost),
            len = elems.length;

         // Add elements passing elementMatchers directly to results
         // Support: IE<9, Safari
         for (; i != len && (elem = elems[i]) != null; i++) {
            if (elem && elem.nodeType) {
               seed.push(elem);
            }
         }

         return seed;
      }

      select = Snizzle.select = function (selector, context, results, seed) {

         var i = 0, tokens, match, j, token, matched, seedAdjusted;

         // chunk/split selector at pos (,) and trim whitespace
         selector = schunk(selector);

         // Force results to be an empty [array]
         results = results || [];

         while ((tokens = selector[i++])) {

            // HANDLE: If seed is empty and not exists or array (#seed)
            // FORCE: force a seed to be an seed Elements object
            seedAdjusted = seed;
            if (seed == null) {
               seedAdjusted = [];
               getDefaultAllDocumentElements(seedAdjusted, context || preferredDoc);
            }

            match = tokenize(tokens);
            j = 0;

            while ((token = match[j++])) {

               // FIND: Only single combination none-expr char [>+~] symbol
               // TARGET: context node @return [context] elements
               if ((matched = runiqueRelative.exec(tokens))) {
                  seedAdjusted = Expr.exprRelative[matched[0]]([context]);
               }

               // RUN: Execute exprRelative pseudos [>+~] symbol in deepth
               else if (Expr.exprRelative[token.type]) {
                  seedAdjusted = Expr.exprRelative[token.type](seedAdjusted);

                  // ALWAYS: Execute all type PSEUDO (TAG|ID|ATTR|CLASS) expr
               } else {
                  seedAdjusted = Expr.filter[token.type](
                     token.matches[0], token.matches[1],
                     (token.matches[2] || token.matches[3] || token.matches[4])
                  )(seedAdjusted);
               }
            }

            push.apply(results, seedAdjusted);
         }

         // unique( results ); // UNIQUE: results object
         return results;
      };

      // one time assignments
      // Initialize against the default document
      setDocument();


      return Snizzle;
   })
      (window);

jQrony.expr = Snizzle.selectors;
jQrony.find = Snizzle;

// Depracated
jQrony.expr[":"] = jQrony.expr.pseudos;
jQrony.text = Snizzle.getText;
jQrony.isXMLDoc = Snizzle.isXML;
jQrony.matches = Snizzle.matches;
jQrony.contains = Snizzle.contains;
jQrony.unique = jQrony.uniqueSort = unique;




var dir = function (elem, dir, until) {
   var matched = [],
      truncate = typeof until !== "undefined";

   while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
         if (truncate && jQrony(elem).is(truncate)) {
            break;
         }
         matched.push(elem);
      }
   }
   return matched;
};

var siblings = function (n, elem) {
   var matched = [];
   for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
         matched.push(n);
      }
   }
   return matched;
};

var sibling = function (cur, dir) {
   while ((cur = cur[dir]) && cur.nodeType !== 1) { }
   return cur;
};

var rscriptType = (/^$|^module$|\/(?:ecma|java)script/);

var rsingleTag = (/<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:\/\1>|)$/i);

var rsnizzleExpr = jQrony.expr.match.needsContext;

function nodeName(elem, name) {
   return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
}

// Implement the identical functionality for filter and not
function winnow(elements, qualifier, not) {

   // HANDLE: qualifier is a Functioin
   if (isFunction(qualifier)) {
      return jQrony.grep(elements, function (elem, i) {
         return !!qualifier.call(elem, i, elem) !== not;
      });
   }

   // Single element
   if (qualifier.nodeType) {
      return jQrony.grep(elements, function (elem) {
         return (elem === qualifier) !== not;
      });
   }

   // Arraylike of elements (jQrony, arguments, Array)
   if (typeof qualifier !== "string") {
      return jQrony.grep(elements, function (elem) {
         return (indexOf.call(qualifier, elem) > -1) !== not;
      });
   }

   // Filtered directly for both simple and complex selectors
   return jQrony.filter(elements, qualifier, not);
}

jQrony.filter = function (elems, expr, not) {
   if (not) {
      expr = ":not(" + expr + ")";
   }

   return jQrony.find.matches(expr, jQrony.grep(elems, function (elem) {
      return elem.nodeType === 1;
   }));
};

jQrony.fn.extend({
   find: function (selector) {
      var i = 0, ret, len = this.length, self = this;

      // ADD: pushStack[]
      ret = this.pushStack([]);

      for (; i < len; i++) {
         jQrony.find(selector, self[i], ret);
      }

      return len > 1 ? unique(ret) : ret;
   },

   filter: function (selector) {
      return this.pushStack(winnow(this, selector || [], false));
   },

   not: function (selector) {
      return this.pushStack(winnow(this, selector || [], true));
   },

   is: function (selector) {
      return !!winnow(
         this,

         // If this is a positional/relative selector, check membership in the returned set
         // so $("p:first").is("p:last") won't return true for a doc with two "p".
         typeof selector === "string" && rsnizzleExpr.test(selector) ?
            jQrony(selector) :
            selector || [],
         false
      ).length;
   }
});


/* Initialize a jQrony object
------------------------------------------------------------------------*/
// A central reference to the root jQrony(document)

var rootjQusry,

   init = jQrony.fn.init = function (selector, context, root) {
      var elem, match, ridExpr = /^(?:(\w-)|#([\w-]+))$/;

      // HANDLE: $(), $(null), $(undefined)
      if (!selector) {
         return this;
      }

      // Force root
      root = root || rootjQusry;

      // HANDLE: If typeof selector is a String
      if (typeof selector === "string") {
         if (selector[0] === "<" &&
            selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
         } else {
            match = ridExpr.exec(selector);
         }

         if (match && (match[1] || !context)) {

            // HANDLE: $(HTML) -> $(array)
            if (match[1]) {
               context = context instanceof jQrony ? context[0] : context;
               jQrony.merge(this, jQrony.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document,
                  true
               ));

               // HANDLE: $(HTML, props);
               if (rsingleTag.test(match[1]) && jQrony.isPlainObject(context)) {
                  for (match in context) {

                     if (isFunction(this[match])) {
                        this[match](context[match]);

                        // ...and otherwise set as attributes
                     } else {
                        this.attr(match, context[match]);
                     }
                  }
               }

               return this;

               // HANDLE: $(#id)
            } else {
               elem = document.getElementById(match[2]);
               if (elem) {
                  this[0] = elem;
                  this.length = 1;
               }
               return this;
            }

            // HANDLE: $(expr, $(...));
         } else if (!context || context.version) {
            return (context || root).find(selector);

            // HANDLE: $(expr, context);
         } else {
            return this.constructor(context).find(selector);
         }

         // HANDLE: $(DOMElements); #object
      } else if (selector.nodeType) {
         this[0] = selector;
         this.length = 1;
         return this;

         // HANDLE: $(function() { }); #function
         // Shortcut for document ready
      } else if (isFunction(selector)) {

         return root.ready !== undefined ?
            root.ready(selector) :
            selector(jQrony);
      }

      return jQrony.createArray(selector, this);
   };

// Give the init function the jQrony prototype for later instantiation
init.prototype = jQrony.fn;

// Initialize central reference rootjQusry
rootjQusry = jQrony(window.document);


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

   // Methods guaranteed to produce a unique set when starting from a unique set
   requiredUnique = {
      next: true,
      prev: true,
      children: true,
      contents: true
   };


jQrony.fn.extend({

   has: function (target) {
      var targets = jQrony(target, this),
         len = targets.length;

      return this.filter(function () {
         return !!len ? true : false;
      });
   },

   closest: function (selector, context) {
      var cur, i = 0, matched = [],
         l = this.length,
         targets = typeof selector !== "string" && jQrony(selector);

      if (!rsnizzleExpr.test(selector)) {
         for (; i < l; i++) {
            for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

               // Always skip document fragments
               if (cur.nodeType < 11 &&
                  (targets ? targets.index(cur) > -1 :
                     cur.nodeType === 1 && jQrony(cur).is(selector))) {
                  matched.push(cur);
                  break;
               }
            }
         }
      }

      return this.pushStack(matched.length > 1 ? jQrony.uniqueSort(matched) : matched);
   },

   index: function (elems) {

      // No argument, return index in parent
      if (!elems) {
         return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
      }

      // Index in selector
      if (typeof elems === "string") {
         return indexOf.call(jQrony(elems), this[0]);
      }

      // Locate the position of the desired element
      return indexOf.call(this,
         // If it receives a jQrony object, the first element is used
         elems.version ? elems[0] : elems
      );
   },

   add: function (selector, context) {
      return this.pushStack(
         jQrony.uniqueSort(
            jQrony.merge(this.get(), jQrony(selector, context))
         )
      );
   },

   addBack: function (selector) {
      return this.add(selector == null ?
         this.prevData : this.prevData.filter(selector)
      );
   },

   deep: function (selector) {
      var ret = this.map(function (_i, elem) {

         // Getting: deep tree Inner Elements
         while (elem.firstElementChild) {
            elem = elem.firstElementChild;
         }

         return elem;
      }).unique();

      // HANDLE: If Selector values
      if (selector) {
         return jQrony(ret).filter(selector);
      }

      return ret;
   },

   extract: function (selector) {
      var ret = this.map(function (_i, elem) {
         return slice.call(
            elem.getElementsByTagName("*")
         );
      });

      if (selector) {
         return ret.filter(selector);
      }

      return ret.length > 1 ? unique(ret) : ret;
   }
});



/* Mutual PHP Methods in jQeuery
----------------------------------------------------------------------------*/
jQrony.fn.extend({

   intersect: function (compaire) {
      return this.pushStack(intersect(this, compaire));
   },

   diff: function (compaire) {
      return this.pushStack(diff(this, compaire));
   },

   objIn: function (argument) {
      return objIn(this, argument);
   },

   flip: function () {
      return this.pushStack([flip(this[0])]);
   },

   cKeyCase: function (preservedCase) {
      return this.pushStack([cKeyCase(this[0], preservedCase)]);
   },

   chunk: function (paire) {
      return this.pushStack(chunk(this, paire));
   },

   max: function (indexOnly) {
      return max(this, indexOnly);
   },

   min: function (indexOnly) {
      return min(this, indexOnly);
   },

   sum: function () {
      return sum(slice.call(this));
   },

   product: function () {
      return product(slice.call(this));
   },

   deduct: function () {
      return deduct(slice.call(this));
   },

   rand: function (ranLength) {
      return rand(this, ranLength);
   },

   copy: function () {
      return this.pushStack(clone(slice.call(this)));
   },

   shuffle: function () {
      return this.pushStack(shuffle(slice.call(this)));
   },

   walk: function (callback, param) {
      return walk(this, callback, param);
   },

   unique: function () {
      return this.pushStack(unique(this));
   },

   cleanArray: function () {
      return this.pushStack(clean(this));
   },

   replace: function (find, replace, global) {
      return replaces(this, find, replace, global);
   },

   search: function (find, indexOnly) {
      return search(this, find, indexOnly);
   },

   arrayToUpper: function () {
      return this.pushStack(arrayToUpper(this));
   },

   arrayCapitalize: function () {
      return this.pushStack(arrayCapitalize(this));
   },

   arrayToLower: function () {
      return this.pushStack(arrayToLower(this));
   },

   trap: function (find, access, searchWith) {
      return trap(this[0], find, access, searchWith);
   }
});



/* $(selector).advs(); Advance selector methods
----------------------------------------------------------------------------*/
jQrony.each({
   parent: function (elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
   },
   parents: function (elem) {
      return dir(elem, "parentNode");
   },
   parentsUntil: function (elem, _i, until) {
      return dir(elem, "parentNode", until);
   },
   next: function (elem) {
      return sibling(elem, "nextSibling");
   },
   prev: function () {
      return sibling(elem, "previousSibling");
   },
   nextAll: function (elem) {
      return dir(elem, "nextSibling");
   },
   prevAll: function (elem) {
      return dir(elem, "previousSibling");
   },
   nextUntil: function (elem, _i, until) {
      return dir(elem, "nextSibling", until);
   },
   prevUntil: function (elem, _i, until) {
      return dir(elem, "previousSibling", until);
   },
   siblings: function (elem) {
      return siblings((elem.parentNode).firstChild, elem);
   },
   children: function (elem) {
      return siblings(elem.firstChild);
   },
   contents: function (elem) {
      if (elem.contentDocument != null &&
         getProto(elem.contentDocument)) {

         return elem.contentDocument;
      }

      // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.
      if (nodeName(elem, "template")) {
         elem = elem.content || elem;
      }

      return jQrony.merge([], elem.childNodes);
   }
}, function (name, fn) {
   jQrony.fn[name] = function (selector, until) {

      // Swap until, selector
      var swap = selector;
      until = selector;
      selector = swap;

      var matched = jQrony.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
         selector = until;
      }

      // HANDLE: expr selector :not, :contains(text)
      if (selector && typeof selector === "string") {
         matched = jQrony.filter(matched, selector);
      }

      // HANDLE: Granteed unique with name of Elements
      if (this.length > 1) {
         // Remove duplicates
         if (!requiredUnique[name]) {
            unique(matched);
         }
      }

      // Reverse order for parents* and prev-derivatives
      if (rparentsprev.test(name)) {
         matched.reverse();
      }

      return this.pushStack(matched);
   };
});



/* Support Handler :createHTMLDocument
----------------------------------------------------------------------------*/
support.createHTMLDocument = (function () {
   var body = document.implementation.createHTMLDocument("").body;
   body.innerHTML = "<form></form><form></form><form></form>";
   return body.childNodes.length === 3;
})();

/* Creating jQrony parsing releated method
   * Support: Chorome, Edge IE, Safari, Android
   */
// cross-browser xml parsing from string
jQrony.parseXML = function (data) {
   var xml, parserErrorElem;

   if (typeof data !== "string" || !data) {
      return null;
   }

   try {
      xml = (new window.DOMParser()).parseFromString(data, "text/xml");
   } catch (e) { }

   parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
   if (parserErrorElem || !xml) {
      throwError(
         "Invalid XML",
         parserErrorElem ?
            jQrony.map(parserErrorElem.childNodes, function (elem) {
               return elem.textContent;
            }).join("\n") :
            data
      );
   }

   return xml;
};

// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQrony.parseHTML = function (data, context, keepScripts) {
   if (typeof data !== "string") {
      return [];
   }
   if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
   }

   var base, parsed, scripts;

   if (!context) {
      if (support.createHTMLDocument) {
         context = document.implementation.createHTMLDocument("");

         // create the base element from context document
         // and set the href default current location
         // href and after insert base under head section
         base = context.createElement("base");
         base.href = window.location.href;
         context.head.appendChild(base);
      } else {
         context = window.document;
      }
   }

   parsed = rsingleTag.exec(data);
   scripts = !keepScripts && [];

   // Single tag
   if (parsed) {
      return [document.createElement(parsed[1])];
   }

   parsed = buildFragment([data], context, scripts);

   if (scripts && scripts.length) {
      jQrony(scripts).remove();
   }

   return jQrony.merge([], parsed.childNodes);
};

// parsing string to anchor tag with URL
jQrony.parseLINK = function (uri) {
   if (typeof uri !== "string" || !uri) {
      return null;
   }

   if (!rURI.test(uri)) {
      throwError("Invalid URI", "Link creation error 'uri' param require a valid URL because your '" + uri
         + "' is not a valid URL.");
   }

   var a = document.createElement("a");
   return a.href = uri, a;
};


/* Binary convertation
----------------------------------------------------------------------------*/

// Matches Regular expression Binary, noBinary, bipaire variables
var rbinary = /^([0-1]{8})+$/,
   rnobinary = /[^0-1]+/,
   rbinpaire = /\b([0-1]{4,7})\b/g;

// Used by cleanBinary as callback to replace() function
function f8bin(_all, letter) {
   return Array(8 - letter.length + 1).join("0") + letter;
}

// clean binary whitespace fix 8-bin length of binary values
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function cleanBinary(binary) {
   var bin = binary.replace(rbinpaire, f8bin);
   return (bin.match(rnothtmlwhite) || []).join("");
}

// Convert String to Binary format with always 8-bin length
function strToBin(string) {
   var bin = string.charCodeAt().toString(2);
   return Array(8 - bin.length + 1).join("0") + bin;
}

// Convert Binary to String "String.fromCharCode" through
function binToStr(binary) {
   return String.fromCharCode(parseInt(binary, 2));
}

/**
 * encodeBinary convert String to Binary format with always 8-bin length
 * @param {String} string Pass string value when do you want to convert binary
 * @returns 8-binary values
 */
jQrony.encodeBinary = function (string) {
   if (!rnobinary.test(string)) {
      return null;
   }

   var encoded = [],
      i = 0,
      str = jQrony.split(string, 1),
      strlen = str.length;

   for (; i < strlen; i++) encoded.push(strToBin(str[i]));

   return encoded.join("");
};

/**
 * encodeBinary convert Binary to String format with maximum Browsers Supports
 * @param {Binary} binary Pass binary value when do you want to convert string
 * @returns decoded string
 */
jQrony.decodeBinary = function (binary) {

   // clean binary whitespace fix 8-bin length of binary values
   binary = cleanBinary(binary);

   if (!rbinary.test(binary)) {
      return null;
   }

   var decoded = [],
      i = 0,
      bin = jQrony.split(binary, 8),
      binlen = bin.length;

   for (; i < binlen; i++) decoded.push(binToStr(bin[i]));

   return decoded.join("");
};



/* Support Handler :QSA, :getElementsByTagName
----------------------------------------------------------------------------*/
(function () {
   support.qsa = typeof document.querySelectorAll !== "undefined";
   support.getElementsByTagName = !!document.getElementsByTagName("*").length;
})();


/* Support Handler :checkOn, :optSelected, :radioValue
----------------------------------------------------------------------------*/
(function () {
   var input = document.createElement("input"),
      select = document.createElement("select"),
      opt = select.appendChild(document.createElement("option"));

   input.type = "checkbox";
   // Support: Android <=4.3 only
   // Default value for a checkbox should be "on"
   support.checkOn = input.value !== "";

   // Support: IE <=11 only
   // Must access selectedIndex to make default options select
   support.optSelected = opt.selected;

   // Support: IE <=11 only
   // An input loses its value after becoming a radio
   // Fix the bugg and create new input element
   input = document.createElement("input");
   input.type = "radio";
   input.value = "jQrony";
   support.radioValue = input.value === "jQrony";
})();


/* :camelCase :dashed :acceptData
----------------------------------------------------------------------------*/

// Matches dashed string for camelizing or 
// camelCase String for dashelizing
var rmsPrefix = /^-ms-/,
   rmsPrefilter = /^ms/,
   rdashAlpha = /-([a-z])/g,
   rmultiAlpha = /([A-Z])/g;

// Used by camelCase as callback to replace()
function fcamelCase(_all, letter) {
   return letter.toUpperCase();
}

// Used by dashed as callback to replace()
function fdashed(_all, letter) {
   return ("-" + letter).toLowerCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase(string) {
   return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
}

// Convert camelCase to dashed; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function dashed(string) {
   return string.replace(rmsPrefilter, "-ms").replace(rmultiAlpha, fdashed);
}

var acceptData = function (owner) {

   // Accepts only:
   //  - Node
   //    - Node.ELEMENT_NODE
   //    - Node.DOCUMENT_NODE
   //  - Object
   //    - Any
   return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
};

var isBinary = function (binary) {

   // Check only:
   // - Binary
   // With Paire:
   // 10100101
   return !rnobinary.test(binary) && (binary + "").length >= 5;
};




/* HTML Clazzer parser
   * > npm install clazzer
   * :encodeSpecEntity :decodeSpecEntity
   * :encodeHTMLEntity :decodeHTMLEntity
   * :encodeEntity :decodeEntity
----------------------------------------------------------------------------*/

var Clazzer =
   /*!
      * Clazzer is pure Javascript HTMLEntity parser 1.1.1
      * 
      * No Copyright JS Foundation and other contributors
      * No Released under the MIT any license
      * 
      * Author: <codingmodassir@gmail.com>
      * Date: 03-12-2022 AT GMT 2:28 PM
      */
   (function (_window) {

      var arr = [],
         push = arr.push,

         // Clazzer identifier of Regular Expressions
         rentiCache = /&(?:\w+|#\d+);/g,
         rentCompat = /(")/g,
         rentQuotes = /(?:'|")/g,

         rdecCompat = /(&quot;)/g,
         rdecQuotes = /&(?:quot|#39);/g,

         // Define The current version of HTMLEntity
         version = "1.1.1",

         // ASCII Clazzer char, name, code vars
         ascii = [
            { entityChar: " ", entityName: "", entityCode: "&#32;" },
            { entityChar: "!", entityName: "", entityCode: "&#33;" },
            { entityChar: "\"", entityName: "", entityCode: "&#34;" },
            { entityChar: "#", entityName: "", entityCode: "&#35;" },
            { entityChar: "$", entityName: "", entityCode: "&#36;" },
            { entityChar: "%", entityName: "", entityCode: "&#37;" },
            { entityChar: "&", entityName: "&amp;", entityCode: "&#38;" },
            { entityChar: "\'", entityName: "", entityCode: "&#39;" },
            { entityChar: "(", entityName: "", entityCode: "&#40;" },
            { entityChar: ")", entityName: "", entityCode: "&#41;" },
            { entityChar: "*", entityName: "", entityCode: "&#42;" },
            { entityChar: "+", entityName: "", entityCode: "&#43;" },
            { entityChar: ",", entityName: "", entityCode: "&#44;" },
            { entityChar: "-", entityName: "", entityCode: "&#45;" },
            { entityChar: ".", entityName: "", entityCode: "&#46;" },
            { entityChar: "/", entityName: "", entityCode: "&#47;" },
            { entityChar: "0", entityName: "", entityCode: "&#48;" },
            { entityChar: "1", entityName: "", entityCode: "&#49;" },
            { entityChar: "2", entityName: "", entityCode: "&#50;" },
            { entityChar: "3", entityName: "", entityCode: "&#51;" },
            { entityChar: "4", entityName: "", entityCode: "&#52;" },
            { entityChar: "5", entityName: "", entityCode: "&#53;" },
            { entityChar: "6", entityName: "", entityCode: "&#54;" },
            { entityChar: "7", entityName: "", entityCode: "&#55;" },
            { entityChar: "8", entityName: "", entityCode: "&#56;" },
            { entityChar: "9", entityName: "", entityCode: "&#57;" },
            { entityChar: ":", entityName: "", entityCode: "&#58;" },
            { entityChar: ";", entityName: "", entityCode: "&#59;" },
            { entityChar: "<", entityName: "&lt;", entityCode: "&#60;" },
            { entityChar: "=", entityName: "", entityCode: "&#61;" },
            { entityChar: ">", entityName: "&gt;", entityCode: "&#62;" },
            { entityChar: "?", entityName: "", entityCode: "&#63;" },
            { entityChar: "@", entityName: "", entityCode: "&#64;" },
            { entityChar: "A", entityName: "", entityCode: "&#65;" },
            { entityChar: "B", entityName: "", entityCode: "&#66;" },
            { entityChar: "C", entityName: "", entityCode: "&#67;" },
            { entityChar: "D", entityName: "", entityCode: "&#68;" },
            { entityChar: "E", entityName: "", entityCode: "&#69;" },
            { entityChar: "F", entityName: "", entityCode: "&#70;" },
            { entityChar: "G", entityName: "", entityCode: "&#71;" },
            { entityChar: "H", entityName: "", entityCode: "&#72;" },
            { entityChar: "I", entityName: "", entityCode: "&#73;" },
            { entityChar: "J", entityName: "", entityCode: "&#74;" },
            { entityChar: "K", entityName: "", entityCode: "&#75;" },
            { entityChar: "L", entityName: "", entityCode: "&#76;" },
            { entityChar: "M", entityName: "", entityCode: "&#77;" },
            { entityChar: "N", entityName: "", entityCode: "&#78;" },
            { entityChar: "O", entityName: "", entityCode: "&#79;" },
            { entityChar: "P", entityName: "", entityCode: "&#80;" },
            { entityChar: "Q", entityName: "", entityCode: "&#81;" },
            { entityChar: "R", entityName: "", entityCode: "&#82;" },
            { entityChar: "S", entityName: "", entityCode: "&#83;" },
            { entityChar: "T", entityName: "", entityCode: "&#84;" },
            { entityChar: "U", entityName: "", entityCode: "&#85;" },
            { entityChar: "V", entityName: "", entityCode: "&#86;" },
            { entityChar: "W", entityName: "", entityCode: "&#87;" },
            { entityChar: "X", entityName: "", entityCode: "&#88;" },
            { entityChar: "Y", entityName: "", entityCode: "&#89;" },
            { entityChar: "Z", entityName: "", entityCode: "&#90;" },
            { entityChar: "[", entityName: "", entityCode: "&#91;" },
            { entityChar: "\\", entityName: "", entityCode: "&#92;" },
            { entityChar: "]", entityName: "", entityCode: "&#93;" },
            { entityChar: "^", entityName: "", entityCode: "&#94;" },
            { entityChar: "_", entityName: "", entityCode: "&#95;" },
            { entityChar: "`", entityName: "", entityCode: "&#96;" },
            { entityChar: "a", entityName: "", entityCode: "&#97;" },
            { entityChar: "b", entityName: "", entityCode: "&#98;" },
            { entityChar: "c", entityName: "", entityCode: "&#99;" },
            { entityChar: "d", entityName: "", entityCode: "&#100;" },
            { entityChar: "e", entityName: "", entityCode: "&#101;" },
            { entityChar: "f", entityName: "", entityCode: "&#102;" },
            { entityChar: "g", entityName: "", entityCode: "&#103;" },
            { entityChar: "h", entityName: "", entityCode: "&#104;" },
            { entityChar: "i", entityName: "", entityCode: "&#105;" },
            { entityChar: "j", entityName: "", entityCode: "&#106;" },
            { entityChar: "k", entityName: "", entityCode: "&#107;" },
            { entityChar: "l", entityName: "", entityCode: "&#108;" },
            { entityChar: "m", entityName: "", entityCode: "&#109;" },
            { entityChar: "n", entityName: "", entityCode: "&#110;" },
            { entityChar: "o", entityName: "", entityCode: "&#111;" },
            { entityChar: "p", entityName: "", entityCode: "&#112;" },
            { entityChar: "q", entityName: "", entityCode: "&#113;" },
            { entityChar: "r", entityName: "", entityCode: "&#114;" },
            { entityChar: "s", entityName: "", entityCode: "&#115;" },
            { entityChar: "t", entityName: "", entityCode: "&#116;" },
            { entityChar: "u", entityName: "", entityCode: "&#117;" },
            { entityChar: "v", entityName: "", entityCode: "&#118;" },
            { entityChar: "w", entityName: "", entityCode: "&#119;" },
            { entityChar: "x", entityName: "", entityCode: "&#120;" },
            { entityChar: "y", entityName: "", entityCode: "&#121;" },
            { entityChar: "z", entityName: "", entityCode: "&#122;" },
            { entityChar: "{", entityName: "", entityCode: "&#123;" },
            { entityChar: "|", entityName: "", entityCode: "&#124;" },
            { entityChar: "}", entityName: "", entityCode: "&#125;" },
            { entityChar: "~", entityName: "", entityCode: "&#126;" },
            { entityChar: " ", entityName: "&nbsp;", entityCode: "&#160;" },
            { entityChar: "¡", entityName: "&iexcl;", entityCode: "&#161;" },
            { entityChar: "¢", entityName: "&cent;", entityCode: "&#162;" },
            { entityChar: "£", entityName: "&pound;", entityCode: "&#163;" },
            { entityChar: "¤", entityName: "&curren;", entityCode: "&#164;" },
            { entityChar: "¥", entityName: "&yen;", entityCode: "&#165;" },
            { entityChar: "¦", entityName: "&brvbar;", entityCode: "&#166;" },
            { entityChar: "§", entityName: "&sect;", entityCode: "&#167;" },
            { entityChar: "¨", entityName: "&uml;", entityCode: "&#168;" },
            { entityChar: "©", entityName: "&copy;", entityCode: "&#169;" },
            { entityChar: "ª", entityName: "&ordf;", entityCode: "&#170;" },
            { entityChar: "«", entityName: "&laquo;", entityCode: "&#171;" },
            { entityChar: "¬", entityName: "&not;", entityCode: "&#172;" },
            { entityChar: "­", entityName: "&shy;", entityCode: "&#173;" },
            { entityChar: "®", entityName: "&reg;", entityCode: "&#174;" },
            { entityChar: "¯", entityName: "&macr;", entityCode: "&#175;" },
            { entityChar: "°", entityName: "&deg;", entityCode: "&#176;" },
            { entityChar: "±", entityName: "&plusmn;", entityCode: "&#177;" },
            { entityChar: "²", entityName: "&sup2;", entityCode: "&#178;" },
            { entityChar: "³", entityName: "&sup3;", entityCode: "&#179;" },
            { entityChar: "´", entityName: "&acute;", entityCode: "&#180;" },
            { entityChar: "µ", entityName: "&micro;", entityCode: "&#181;" },
            { entityChar: "¶", entityName: "&para;", entityCode: "&#182;" },
            { entityChar: "¸", entityName: "&cedil;", entityCode: "&#184;" },
            { entityChar: "¹", entityName: "&sup1;", entityCode: "&#185;" },
            { entityChar: "º", entityName: "&ordm;", entityCode: "&#186;" },
            { entityChar: "»", entityName: "&raquo;", entityCode: "&#187;" },
            { entityChar: "¼", entityName: "&frac14;", entityCode: "&#188;" },
            { entityChar: "½", entityName: "&frac12;", entityCode: "&#189;" },
            { entityChar: "¾", entityName: "&frac34;", entityCode: "&#190;" },
            { entityChar: "¿", entityName: "&iquest;", entityCode: "&#191;" },
            { entityChar: "×", entityName: "&times;", entityCode: "&#215;" },
            { entityChar: "÷", entityName: "&divide;", entityCode: "&#247;" },
            { entityChar: "∀", entityName: "&forall;", entityCode: "&#8704;" },
            { entityChar: "∂", entityName: "&part;", entityCode: "&#8706;" },
            { entityChar: "∃", entityName: "&exist;", entityCode: "&#8707;" },
            { entityChar: "∅", entityName: "&empty;", entityCode: "&#8709;" },
            { entityChar: "∇", entityName: "&nabla;", entityCode: "&#8711;" },
            { entityChar: "∈", entityName: "&isin;", entityCode: "&#8712;" },
            { entityChar: "∉", entityName: "&notin;", entityCode: "&#8713;" },
            { entityChar: "∋", entityName: "&ni;", entityCode: "&#8715;" },
            { entityChar: "∏", entityName: "&prod;", entityCode: "&#8719;" },
            { entityChar: "∑", entityName: "&sum;", entityCode: "&#8721;" },
            { entityChar: "−", entityName: "&minus;", entityCode: "&#8722;" },
            { entityChar: "∗", entityName: "&lowast;", entityCode: "&#8727;" },
            { entityChar: "√", entityName: "&radic;", entityCode: "&#8730;" },
            { entityChar: "∝", entityName: "&prop;", entityCode: "&#8733;" },
            { entityChar: "∞", entityName: "&infin;", entityCode: "&#8734;" },
            { entityChar: "∠", entityName: "&ang;", entityCode: "&#8736;" },
            { entityChar: "∧", entityName: "&and;", entityCode: "&#8743;" },
            { entityChar: "∨", entityName: "&or;", entityCode: "&#8744;" },
            { entityChar: "∩", entityName: "&cap;", entityCode: "&#8745;" },
            { entityChar: "∪", entityName: "&cup;", entityCode: "&#8746;" },
            { entityChar: "∫", entityName: "&int;", entityCode: "&#8747;" },
            { entityChar: "∴", entityName: "&there4;", entityCode: "&#8756;" },
            { entityChar: "∼", entityName: "&sim;", entityCode: "&#8764;" },
            { entityChar: "≅", entityName: "&cong;", entityCode: "&#8773;" },
            { entityChar: "≈", entityName: "&asymp;", entityCode: "&#8776;" },
            { entityChar: "≠", entityName: "&ne;", entityCode: "&#8800;" },
            { entityChar: "≡", entityName: "&equiv;", entityCode: "&#8801;" },
            { entityChar: "≤", entityName: "&le;", entityCode: "&#8804;" },
            { entityChar: "≥", entityName: "&ge;", entityCode: "&#8805;" },
            { entityChar: "⊂", entityName: "&sub;", entityCode: "&#8834;" },
            { entityChar: "⊃", entityName: "&sup;", entityCode: "&#8835;" },
            { entityChar: "⊄", entityName: "&nsub;", entityCode: "&#8836;" },
            { entityChar: "⊆", entityName: "&sube;", entityCode: "&#8838;" },
            { entityChar: "⊇", entityName: "&supe;", entityCode: "&#8839;" },
            { entityChar: "⊕", entityName: "&oplus;", entityCode: "&#8853;" },
            { entityChar: "⊗", entityName: "&otimes;", entityCode: "&#8855;" },
            { entityChar: "⊥", entityName: "&perp;", entityCode: "&#8869;" },
            { entityChar: "⋅", entityName: "&sdot;", entityCode: "&#8901;" },
            { entityChar: "Α", entityName: "&Alpha;", entityCode: "&#913;" },
            { entityChar: "Β", entityName: "&Beta;", entityCode: "&#914;" },
            { entityChar: "Γ", entityName: "&Gamma;", entityCode: "&#915;" },
            { entityChar: "Δ", entityName: "&Delta;", entityCode: "&#916;" },
            { entityChar: "Ε", entityName: "&Epsilon;", entityCode: "&#917;" },
            { entityChar: "Ζ", entityName: "&Zeta;", entityCode: "&#918;" },
            { entityChar: "Η", entityName: "&Eta;", entityCode: "&#919;" },
            { entityChar: "Θ", entityName: "&Theta;", entityCode: "&#920;" },
            { entityChar: "Ι", entityName: "&Iota;", entityCode: "&#921;" },
            { entityChar: "Κ", entityName: "&Kappa;", entityCode: "&#922;" },
            { entityChar: "Λ", entityName: "&Lambda;", entityCode: "&#923;" },
            { entityChar: "Μ", entityName: "&Mu;", entityCode: "&#924;" },
            { entityChar: "Ν", entityName: "&Nu;", entityCode: "&#925;" },
            { entityChar: "Ξ", entityName: "&Xi;", entityCode: "&#926;" },
            { entityChar: "Ο", entityName: "&Omicron;", entityCode: "&#927;" },
            { entityChar: "Π", entityName: "&Pi;", entityCode: "&#928;" },
            { entityChar: "Ρ", entityName: "&Rho;", entityCode: "&#929;" },
            { entityChar: "Σ", entityName: "&Sigma;", entityCode: "&#931;" },
            { entityChar: "Τ", entityName: "&Tau;", entityCode: "&#932;" },
            { entityChar: "Υ", entityName: "&Upsilon;", entityCode: "&#933;" },
            { entityChar: "Φ", entityName: "&Phi;", entityCode: "&#934;" },
            { entityChar: "Χ", entityName: "&Chi;", entityCode: "&#935;" },
            { entityChar: "Ψ", entityName: "&Psi;", entityCode: "&#936;" },
            { entityChar: "Ω", entityName: "&Omega;", entityCode: "&#937;" },
            { entityChar: "α", entityName: "&alpha;", entityCode: "&#945;" },
            { entityChar: "β", entityName: "&beta;", entityCode: "&#946;" },
            { entityChar: "γ", entityName: "&gamma;", entityCode: "&#947;" },
            { entityChar: "δ", entityName: "&delta;", entityCode: "&#948;" },
            { entityChar: "ε", entityName: "&epsilon;", entityCode: "&#949;" },
            { entityChar: "ζ", entityName: "&zeta;", entityCode: "&#950;" },
            { entityChar: "η", entityName: "&eta;", entityCode: "&#951;" },
            { entityChar: "θ", entityName: "&theta;", entityCode: "&#952;" },
            { entityChar: "ι", entityName: "&iota;", entityCode: "&#953;" },
            { entityChar: "κ", entityName: "&kappa;", entityCode: "&#954;" },
            { entityChar: "λ", entityName: "&lambda;", entityCode: "&#955;" },
            { entityChar: "μ", entityName: "&mu;", entityCode: "&#956;" },
            { entityChar: "ν", entityName: "&nu;", entityCode: "&#957;" },
            { entityChar: "ξ", entityName: "&xi;", entityCode: "&#958;" },
            { entityChar: "ο", entityName: "&omicron;", entityCode: "&#959;" },
            { entityChar: "π", entityName: "&pi;", entityCode: "&#960;" },
            { entityChar: "ρ", entityName: "&rho;", entityCode: "&#961;" },
            { entityChar: "ς", entityName: "&sigmaf;", entityCode: "&#962;" },
            { entityChar: "σ", entityName: "&sigma;", entityCode: "&#963;" },
            { entityChar: "τ", entityName: "&tau;", entityCode: "&#964;" },
            { entityChar: "υ", entityName: "&upsilon;", entityCode: "&#965;" },
            { entityChar: "φ", entityName: "&phi;", entityCode: "&#966;" },
            { entityChar: "χ", entityName: "&chi;", entityCode: "&#967;" },
            { entityChar: "ψ", entityName: "&psi;", entityCode: "&#968;" },
            { entityChar: "ω", entityName: "&omega;", entityCode: "&#969;" },
            { entityChar: "ϑ", entityName: "&thetasym;", entityCode: "&#977;" },
            { entityChar: "ϒ", entityName: "&upsih;", entityCode: "&#978;" },
            { entityChar: "ϖ", entityName: "&piv;", entityCode: "&#982;" },
            { entityChar: "Œ", entityName: "&OElig;", entityCode: "&#338;" },
            { entityChar: "œ", entityName: "&oelig;", entityCode: "&#339;" },
            { entityChar: "Š", entityName: "&Scaron;", entityCode: "&#352;" },
            { entityChar: "š", entityName: "&scaron;", entityCode: "&#353;" },
            { entityChar: "Ÿ", entityName: "&Yuml;", entityCode: "&#376;" },
            { entityChar: "ƒ", entityName: "&fnof;", entityCode: "&#402;" },
            { entityChar: "ˆ", entityName: "&circ;", entityCode: "&#710;" },
            { entityChar: "˜", entityName: "&tilde;", entityCode: "&#732;" },
            { entityChar: " ", entityName: "&ensp;", entityCode: "&#8194;" },
            { entityChar: " ", entityName: "&emsp;", entityCode: "&#8195;" },
            { entityChar: " ", entityName: "&thinsp;", entityCode: "&#8201;" },
            { entityChar: "‌", entityName: "&zwnj;", entityCode: "&#8204;" },
            { entityChar: "‍", entityName: "&zwj;", entityCode: "&#8205;" },
            { entityChar: "‎", entityName: "&lrm;", entityCode: "&#8206;" },
            { entityChar: "‏", entityName: "&rlm;", entityCode: "&#8207;" },
            { entityChar: "–", entityName: "&ndash;", entityCode: "&#8211;" },
            { entityChar: "—", entityName: "&mdash;", entityCode: "&#8212;" },
            { entityChar: "‘", entityName: "&lsquo;", entityCode: "&#8216;" },
            { entityChar: "’", entityName: "&rsquo;", entityCode: "&#8217;" },
            { entityChar: "‚", entityName: "&sbquo;", entityCode: "&#8218;" },
            { entityChar: "“", entityName: "&ldquo;", entityCode: "&#8220;" },
            { entityChar: "”", entityName: "&rdquo;", entityCode: "&#8221;" },
            { entityChar: "„", entityName: "&bdquo;", entityCode: "&#8222;" },
            { entityChar: "†", entityName: "&dagger;", entityCode: "&#8224;" },
            { entityChar: "‡", entityName: "&Dagger;", entityCode: "&#8225;" },
            { entityChar: "•", entityName: "&bull;", entityCode: "&#8226;" },
            { entityChar: "…", entityName: "&hellip;", entityCode: "&#8230;" },
            { entityChar: "‰", entityName: "&permil;", entityCode: "&#8240;" },
            { entityChar: "′", entityName: "&prime;", entityCode: "&#8242;" },
            { entityChar: "″", entityName: "&Prime;", entityCode: "&#8243;" },
            { entityChar: "‹", entityName: "&lsaquo;", entityCode: "&#8249;" },
            { entityChar: "›", entityName: "&rsaquo;", entityCode: "&#8250;" },
            { entityChar: "‾", entityName: "&oline;", entityCode: "&#8254;" },
            { entityChar: "€", entityName: "&euro;", entityCode: "&#8364;" },
            { entityChar: "™", entityName: "&trade;", entityCode: "&#8482;" },
            { entityChar: "←", entityName: "&larr;", entityCode: "&#8592;" },
            { entityChar: "↑", entityName: "&uarr;", entityCode: "&#8593;" },
            { entityChar: "→", entityName: "&rarr;", entityCode: "&#8594;" },
            { entityChar: "↓", entityName: "&darr;", entityCode: "&#8595;" },
            { entityChar: "↔", entityName: "&harr;", entityCode: "&#8596;" },
            { entityChar: "↵", entityName: "&crarr;", entityCode: "&#8629;" },
            { entityChar: "⌈", entityName: "&lceil;", entityCode: "&#8968;" },
            { entityChar: "⌉", entityName: "&rceil;", entityCode: "&#8969;" },
            { entityChar: "⌊", entityName: "&lfloor;", entityCode: "&#8970;" },
            { entityChar: "⌋", entityName: "&rfloor;", entityCode: "&#8971;" },
            { entityChar: "◊", entityName: "&loz;", entityCode: "&#9674;" },
            { entityChar: "♠", entityName: "&spades;", entityCode: "&#9824;" },
            { entityChar: "♣", entityName: "&clubs;", entityCode: "&#9827;" },
            { entityChar: "♥", entityName: "&hearts;", entityCode: "&#9829;" },
            { entityChar: "♦", entityName: "&diams;", entityCode: "&#9830;" }
         ];


      // Initialize a Clazzer #object
      function Clazzer(uri) {
         if (!(this instanceof Clazzer)) {
            return new Clazzer(uri);
         }

         // HANDLE: If Clazzer(); Clazzer(undefined); Clazzer(null);
         if (!uri) {
            return this;
         }

         return push.call(this, (uri + ""));
      }

      /**
       * Returns feach matched values ascii in [entityChar, entityName, entityCode]
       * where searching command [entityChar, entityName, entityCode] use keywords
       * @param {Object} obj ASCII Array objects only:
       * @param {String} search ASCII characters, code, name, Only:
       * @param {String} searchWith entityChar | entityName | entityCode use keywords
       * @param {String} accessWith entityChar | entityName | entityCode use keywords
       * @returns matched values
       */
      feach = function (obj, search, searchWith, accessWith) {
         var i = 0, matched,
            cur,
            length = obj.length;

         for (; i < length; i++) {
            cur = ascii[i];
            if (cur[searchWith] === search &&
               (matched = cur[accessWith])) {
               return matched;
            }
         }

         return search;
      };

      Clazzer.prototype = {

         // The current version of Clazzer being use Latest: 1.1.1
         version: version,

         // The default length of a Clazzer object is eq 0
         length: 0,

         // ? Define Clazzer constructor
         constructor: Clazzer,

         encodeEntity: function () {
            return Clazzer.encodeEntity(this[0]);
         },

         decodeEntity: function () {
            return Clazzer.decodeEntity(this[0]);
         },

         encodeSpecEntity: function (flags) {
            return Clazzer.encodeSpecEntity(this[0], flags);
         },

         decodeSpecEntity: function (flags) {
            return Clazzer.decodeSpecEntity(this[0], flags);
         },

         encodeHTMLEntity: function () {
            return Clazzer.encodeHTMLEntity(this[0]);
         },

         decodeHTMLEntity: function () {
            return Clazzer.decodeHTMLEntity(this[0]);
         },

         // For internal use only.
         // Behaves like an Array's method, not like a Clazzer method.
         push: push,

         // Set sort method like in Clazzer method Internal use Only
         sort: arr.sort,

         // Set splice method like in Clazzer method Internal use Only
         splice: arr.splice
      };

      // encodeEntity encode only HTML Special characters and symbols
      // encoder type encoding from named input:&, outputs: &amp;
      Clazzer.encodeEntity = function (uri) {
         var ret = "",
            i = 0,
            chars = (uri + "").split(""),
            length = chars.length;

         for (; i < length; i++) {
            ret += feach(ascii, chars[i], "entityChar", "entityName");
         }

         return ret;
      };

      // Used by decodeEntity as callback to replace()
      function fdecodeEntity(letter, _pos) {
         return feach(ascii, letter, "entityName", "entityChar");
      }

      // decodeEntity decode only HTML Special characters and symbols
      // decoder type decoding from named input:&amp;, outputs: &;
      Clazzer.decodeEntity = function (uri) {
         return (uri + "").replace(rentiCache, fdecodeEntity);
      };

      // Used by encodeSpecEntity as callback to replace()
      // Used by encodeSpecEntity replace (") double cots
      function fentCompat(_quotes, _pos) {
         return "&quot;";
      }

      // Used by encodeSpecEntity as callback to replace()
      // Used by encodeSpecEntity replace ("|') double & cots
      function fentQuotes(quotes, _pos) {
         return quotes === "'" ? "&#39;" : "&quot;";
      }

      // Used by decodeSpecEntity as callback to replace()
      // Used by encodeSpecEntity replace (&quot;) double cots
      function fdecCompat(_quotes, _pos) {
         return ('"');
      }

      // Used by decodeSpecEntity as callback to replace()
      // Used by encodeSpecEntity replace (&quot|&#39;) double cots
      function fdecQuotes(quotes, _pos) {
         return quotes === "&quot;" ? '"' : "'";
      }

      /* encodeSpecEntity
         * encodeSpecEntity always encode HTMLSpecial characters and symbols
         * ?But encodeSpecEntity in more one features includes Quotes encode
         * encodeSpecEntity encoding single "'" cots and double "\"" cots
         * 1) if pass in flags keywords ENT_COMPAT so encodeSpecEntity
         *    - encode only double "\"" to "&quote;"
         * 2) if pass in flags keywords ENT_QUOTES so encodeSpecEntity
         *    - encode double "\"" and single "'" cots "&quote;" and "&#39;"
         * 3) if pass in flags "ENT_NOQUOTES" so encodeSpecEntity encode
         *    - Only double "\"" cots.
         */
      Clazzer.encodeSpecEntity = function (uri, flags) {
         var encstr = Clazzer.encodeEntity(uri),

            flagsHandler = {
               "ENT_NOQUOTES": encstr,
               "ENT_COMPAT": encstr.replace(rentCompat, fentCompat),
               "ENT_QUOTES": encstr.replace(rentQuotes, fentQuotes)
            };

         // Force Clazzer flags to be an (valid) #flags
         flags = flags || "ENT_QUOTES";

         return flagsHandler[flags];
      };

      /* decodeSpecEntity
         * decodeSpecEntity always decode HTMLSpecial characters and symbols
         * ?But decodeSpecEntity in more one features includes Quotes decode
         * decodeSpecEntity encoding single "'" cots and double "\"" cots
         * 1) if pass in flags keywords ENT_COMPAT so decodeSpecEntity
         *    - decode only double "\"" to "&quote;"
         * 2) if pass in flags keywords ENT_QUOTES so decodeSpecEntity
         *    - decode double "\"" and single "'" cots "&quote;" and "&#39;"
         * 3) if pass in flags "ENT_NOQUOTES" so decodeSpecEntity decode
         *    - Only double "\"" cots.
         */
      Clazzer.decodeSpecEntity = function (uri, flags) {

         var decstr = Clazzer.decodeEntity(uri),

            flagsHandler = {
               "ENT_NOQUOTES": decstr,
               "ENT_COMPAT": decstr.replace(rdecCompat, fdecCompat),
               "ENT_QUOTES": decstr.replace(rdecQuotes, fdecQuotes)
            };

         // Force Clazzer flags to be an (valid) #flags
         flags = flags || "ENT_QUOTES";

         return flagsHandler[flags];
      };

      // encodeHTMLEntity encode ASCII and All string & characters
      // :Inputs $.encodeHTMLEntity("jQrony");
      // :Outputs: '&#106;&#81;&#101;&#117;&#114;&#121;'
      Clazzer.encodeHTMLEntity = function (uri) {
         var ret = "",
            i = 0,
            chars = (uri + "").split(""),
            length = chars.length;

         for (; i < length; i++) {
            ret += feach(ascii, chars[i], "entityChar", "entityCode");
         }

         return ret;
      };

      // Used by decodeHTMLEntity as callback to replace()
      function fdecodeHTMLEntity(letter, _pos) {
         return feach(ascii, letter, "entityCode", "entityChar");
      }

      // decodeHTMLEntity decode ASCII and All string & characters
      // :Inputs $.decodeHTMLEntity("&#106;&#81;&#101;&#117;&#114;&#121;");
      // :Outputs: "jQrony"
      Clazzer.decodeHTMLEntity = function (uri) {
         return (uri + "").replace(rentiCache, fdecodeHTMLEntity);
      };



      return Clazzer;
   })(window);


jQrony.encodeSpecEntity = Clazzer.encodeSpecEntity;
jQrony.decodeSpecEntity = Clazzer.decodeSpecEntity;

jQrony.encodeEntity = Clazzer.encodeEntity;
jQrony.decodeEntity = Clazzer.decodeEntity;

jQrony.Clazzer = Clazzer;

jQrony.encodeHTMLEntity = Clazzer.encodeHTMLEntity;
jQrony.decodeHTMLEntity = Clazzer.decodeHTMLEntity;



/* :customize
----------------------------------------------------------------------------*/
var customize = function (elems, fn, key, value, chainable, emptyGet, raw) {
   var i = 0,
      len = elems.length,
      bulk = key == null;

   // HANDLE: If key is a #object
   // Sets many values
   if (isType(key) === "object") {
      chainable = true;
      for (i in key) {
         customize(elems, fn, i, key[i], true, emptyGet, raw);
      }

      // Sets one value
   } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
         raw = true;
      }

      if (bulk) {

         // Bulk operations run against the entire set
         if (raw) {
            fn.call(elems, value);
            fn = null;

            // ...except when executing function values
         } else {
            bulk = fn;
            fn = function (elem, _key, value) {
               return bulk.call(jQrony(elem), value);
            };
         }
      }

      if (fn) {
         for (; i < len; i++) {
            fn(
               elems[i], key, raw ?
               value :
               value.call(elems[i], i, fn(elems[i], key))
            );
         }
      }
   }

   if (chainable) {
      return elems;
   }

   // Gets
   if (bulk) {
      return fn.call(elems);
   }

   return len ? fn(elems[0], key) : emptyGet;
};



/* :Manipulation :remove :detach :clone
----------------------------------------------------------------------------*/

var

   // Support: IE <=10 - 11, Edge 12 - 13 only
   // In IE/Edge using regex groups here causes severe slowdowns.
   // See https://connect.microsoft.com/IE/feedback/details/1736512/
   rnoInnerhtml = /<(?:script|style|link)/i,

   // <h1> tag and &nbsp; &#39; identifier
   rhtml = /<|&#?\w+;/,
   // <![CDATA[  <-- identifier CDATA script // ]]-->
   rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget(elem, content) {
   if (nodeName(elem, "table") &&
      nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

      return jQrony(elem).children("tbody")[0] || elem;
   }

   return elem;
}

// :disabled Script SET: type="true/", type="true/text/javascript"
// OR: type="false/" script Attribute
// Support: Chorome, IE<=Edge, Firefox, Opera, Android
function disableScript(elem) {
   elem.type = (elem.getAttribute("type") != null) + "/" + elem.type;
   return elem;
}

// :enable Script SET: type="text/javascript", type=""
// OR: parmanent remove type of script attribute
// Support: Chorome, IE<=Edge, Firefox, Opera, Android
function enableScript(elem) {

   if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);

   } else {
      elem.removeAttribute("type");
   }

   return elem;
}

// Returns getAll function target All Elements with has context
function getAll(context, tag) {
   var ret;

   // Support: IE <=9 - 11 only
   // Use typeof to avoid zero-argument method invocation on host objects (#15151)
   // HANDLE: QSA :matcher
   if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag);

      // HANDLE: GEBTN :matcher
   } else if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag);

      // Otherwise SET: default empty Array []
   } else {
      ret = []; // SET: By default empty array
   }

   // HANDLE: If tag is eq `undefined` or single element and without has children
   if (tag === undefined || tag && nodeName(context, tag)) {
      return jQrony.merge([context], ret);
   }

   return ret;
}

// SET: Global Script
function setGlobalEval(scripts /* Accept Only Script Elems */) {
   var i = 0, script, doc, l = scripts.length;

   while ((script = scripts[i++])) {
      doc = scripts[l - 1].ownerDocument;
      DOMEval(script.textContent.replace(rcleanScript, ""), script, doc);
   }

   return scripts;
}

// Removing Script data and HTML-TAGS Elements
function remove(elems, selector) {
   var i = 0,
      node,
      nodes = selector ? jQrony.filter(selector, elems) : elems;

   for (; (node = nodes[i]) != null; i++) {
      // check parent of node
      if (node.parentNode) {
         setGlobalEval(getAll(node, "script"));
         node.parentNode.removeChild(node);
      }
   }
}

function buildFragment(elems, context, scripts) {
   var elem, tmp, j,
      fragment = (context || document).createDocumentFragment(),
      i = 0,
      nodes = [],
      length = elems.length;

   for (; i < length; i++) {
      elem = elems[i];

      // elem eq 0 HTML updated elements eq 0
      if (elem || elem === 0) {

         // HANDLE: If elem eq #object or HTML-Elements
         if (typeof elem === "object") {
            jQrony.merge(nodes, elem.nodeType ? [elem] : elem);

            // Skip <h1>... &nbsp;... &#39;... Elements
         } else if (!rhtml.test(elem)) {
            nodes.push(document.createTextNode(elem));

            // Otherwise catch tmp and merge all values
         } else {
            tmp = document.createElement("div");
            tmp.innerHTML = elem;
            jQrony.merge(nodes, tmp.childNodes);
         }
      }
   }

   for (i = 0; (elem = nodes[i]) != null; i++) {

      // Append to fragment
      tmp = getAll(fragment.appendChild(elem), "script");

      // Capture executables
      if (scripts) {
         j = 0;
         while ((elem = tmp[j++])) {
            if (rscriptType.test(elem.type || "")) {
               scripts.push(elem);
            }
         }
      }
   }

   return fragment;
}

function domManip(collection, args, callback) {

   // Flatten any nested arrays
   args = flat(args);

   var fragment, first, scripts, hasScripts, node, doc,
      i = 0,
      l = collection.length,
      iNoClone = l - 1;

   if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument);
      first = fragment.firstChild;

      // Force fragment if fragment nodLen eq 1
      if (fragment.childNodes.length === 1) {
         fragment = first;
      }

      if (first) {
         // Getting all fragment script and :disabled matched script
         scripts = jQrony.map(getAll(fragment, "script"), disableScript);
         hasScripts = scripts.length;
      }

      for (; i < l; i++) {
         node = fragment;

         if (i !== iNoClone) {

            // Copy or clone fragment of clonable node
            node = jQrony.clone(node, true);

            if (hasScripts) {
               jQrony.merge(scripts, getAll(node, "script"));
            }
         }

         // call the callback function
         callback.call(collection[i], node, i);
      }

      if (hasScripts) {
         doc = scripts[scripts.length - 1].ownerDocument;

         // :enabled matched script
         jQrony.map(scripts, enableScript);

         for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (jQrony.contains(doc, node) && rscriptType.test(node.type)) {
               if (node.src && (node.type || "").toLowerCase() !== "module") {
                  if (jQrony.__evalURI && !node.noModule) {
                     jQrony.__evalURI(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                     }, doc);
                  }

                  // Otherwise execute script DOMEval
               } else {
                  DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
               }
            }
         }
      }
   }

   return collection;
}


jQrony.extend({

   htmlPrefilter: function (html) {
      return html;
   },

   clone: function (elem, dataAndEvents) {
      var destElements,
         clone = elem.cloneNode(true);

      if (dataAndEvents === true) {
         destElements = getAll(clone, "script");
         if (destElements.length > 0) {
            setGlobalEval(destElements);
         }
      }

      return clone;
   }

});

jQrony.fn.extend({

   detach: function (selector) {
      return remove(this, selector, true);
   },

   remove: function (selector) {
      return remove(this, selector);
   },

   clone: function (dataAndEvents) {
      return this.map(function () {
         return jQrony.clone(this, dataAndEvents);
      });
   },

   text: function (value) {
      return customize(this, function (value) {
         return value === undefined ?
            jQrony.text(this) :
            this.empty().each(function (_i, elem) {
               if (elem.nodeType === 1 || elem.nodeType === 9 || elem.nodeType === 11) {
                  elem.textContent = value;
               }
            });
      }, null, value, arguments.length);
   },

   empty: function () {
      var i = 0, elem;

      for (; (elem = this[i]) != null; i++) {
         if (elem.nodeType === 1) {
            elem.textContent = "";
         }
      }

      return this;
   },

   html: function (value, all) {

      // HANDLE: If value is Boolean
      // shift arguments for all and value
      if (typeof value === "boolean") {
         all = all || value;
         value = undefined;
      }

      return customize(this, function (value) {
         var elem = this[0] || {},
            ret = "",
            i = 0,
            l = this.length;

         // return html if not pressed value
         if (value === undefined && elem.nodeType === 1 && !all) {
            return elem.innerHTML;
         }

         // return all elements of html if passed all
         // of dataType is boolean and all eq = true
         if (typeof all === "boolean" && all) {
            for (; i < l; i++) {
               ret += this[i].innerHTML;
            }
            return ret;
         }

         // SET: plain or not rnoInnerHTML value in elements
         if (typeof value === "string" && !rnoInnerhtml.test(value)) {

            // preFilter the value
            value = jQrony.htmlPrefilter(value);

            for (; i < l; i++) {
               elem = this[i] || {};
               elem.innerHTML = value;
            }

            // Dont' execute for more way SET: elem eq 0
            elem = 0;
         }

         if (elem) {
            this.empty().append(value);
         }

      }, null, value, arguments.length);
   }
});

jQrony.fn.extend({

   append: function () {
      return domManip(this, arguments, function (elem) {
         if (this.nodeType === 1 || this.nodeType === 9 || this.nodeType === 11) {
            var target = manipulationTarget(this, elem);
            target.appendChild(elem);
         }
      });
   },

   prepend: function () {
      return domManip(this, arguments, function (elem) {
         if (this.nodeType === 1 || this.nodeType === 9 || this.nodeType === 11) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild);
         }
      });
   },

   after: function () {
      return domManip(this, arguments, function (elem) {
         if (this.parentNode) {
            this.parentNode.insertBefore(elem, this.nextSibling);
         }
      });
   },

   before: function () {
      return domManip(this, arguments, function (elem) {
         if (this.parentNode) {
            this.parentNode.insertBefore(elem, this);
         }
      });
   },

   replaceWith: function () {
      return domManip(this, arguments, function (elem) {
         console.log(this.parentNode, this);
         if (this.parentNode) {
            this.parentNode.replaceChild(elem, this);
         }
      });
   }
});


jQrony.each({
   replaceAll: "replaceWith",
   prependTo: "prepend",
   appendTo: "append",
   insertAfter: "after",
   insertBefore: "before"
}, function (name, original) {
   jQrony.fn[name] = function (selector) {
      var elems, ret = [],
         i = 0,
         insert = jQrony(selector),
         last = insert.length - 1;

      for (; i <= last; i++) {
         elems = i === last ? this : this.clone(true);
         jQrony(insert[i])[original](elems);
         jQrony.merge(ret, elems.get());
      }

      return this.pushStack(ret);
   };
});



/* :css
----------------------------------------------------------------------------*/
var

   // need of :css :positional requirements variables or regular expressions
   pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source,
   cssExpand = ["Top", "Right", "Bottom", "Left"],
   documentElement = window.document.documentElement,

   vendorProps = {},
   cssPrefixes = ["Webkit", "Moz", "ms"],
   emptyStyle = document.createElement("div").style,
   cssNormalCase = {
      letterSpacing: "0",
      fontWeight: "400"
   },

   // :css from realated regular expression
   // customProp (--background-dark: #000;)
   rdisplayswap = /^(none|table(?!-c[ea]).+)/,
   rcustomCssProp = /^--/,
   rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
   rboxStyle = new RegExp(cssExpand.join("|"), "i"),
   rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
   cssShow = { position: "absolute", visibility: "hidden", display: "block" };

var getStyles = function (elem) {

   // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
   // IE throws on elements created in popups
   // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
   var view = elem.ownerDocument.defaultView;

   if (!view || !view.opener) {
      view = window;
   }

   return view.getComputedStyle(elem);
};

function curCSS(elem, name, computed) {
   var width, minWidth, maxWidth, ret,

      // Support: Firefox 51+
      // Retrieving style before computed somehow
      // fixes an issue with getting wrong values
      // on detached elements
      style = elem.style;

   // Force computed to be an computed!
   computed = computed || getStyles(elem);

   // getPropertyValue is needed for:
   //   .css('filter') (IE 9 only, #12537)
   //   .css('--customProperty) (#3144)
   if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (rnumnonpx.test(ret) && rboxStyle.test(name)) {

         // SET: original internal css values
         // Remember the original values
         width = style.width;
         minWidth = style.minWidth;
         maxWidth = style.maxWidth;

         // Put in the new values to get a computed value out
         style.minWidth = style.maxWidth = style.width = ret;
         ret = computed.width;

         // Revert the changed values
         style.width = width;
         style.minWidth = minWidth;
         style.maxWidth = maxWidth;
      }
   }

   // Support: IE <=9 - 11 only
   // IE returns zIndex value as an integer.
   return ret !== undefined ? ret + "" : ret;
}

function adjustCSS(elem, prop, valueParts, tween) {
   var intAdjusted, cssScale,
      cssMaxIteration = 20,
      currentValue = function () {
         return jQrony.css(elem, prop, "");
      },
      initial = currentValue(),
      unit = valueParts && valueParts[3] || (jQrony.cssNumber[prop] ? "" : "px"),
      initialInUnit = elem.nodeType &&
         (jQrony.cssNumber[prop] || unit !== "px" && +initial) &&
         rcssNum.exec(jQrony.css(elem, prop));

   // Don't eq initialInUnit[ 3 ] from unit "%"!=="%"
   if (initialInUnit && initialInUnit[3] !== unit) {

      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      // SET: Half value of initial/2
      initial = initial / 2;

      // Trust units reported by jQrony.css
      unit = unit || initialInUnit[3];

      // Iteratively approximate from a nonzero starting point
      initialInUnit = +initial || 1;


      while (cssMaxIteration--) {
         jQrony.style(elem, prop, initialInUnit + unit);
         if ((1 - cssScale) * (1 - (cssScale = currentValue() / initial || 0.5)) <= 0) {
            cssMaxIteration = 0;
         }
         initialInUnit = initialInUnit / cssScale;
      }

      initialInUnit = initialInUnit * 2;
      jQrony.style(elem, prop, initialInUnit + unit);

      // Force valueParts to be an array
      valueParts = valueParts || [];
   }

   if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;

      // HANDLE: expr (+=4539) / (-=3847) specified
      // Apply relative offset (+=/-=) if specified
      // merge previous value from current value
      // 1) initialInUnit given always integer data
      // 2) The value of valueParts[ 1 ] given [+-] mathematics sign
      // 3) The value of valueParts[ 2 ] given integer data
      // Adjust: number + ( (+/-) + 1 ) * numeric-string
      intAdjusted = valueParts[1] ?
         initialInUnit + (valueParts[1] + 1) * valueParts[2] :
         +valueParts[2];

      // :Animation handler for tween
      if (tween) {
         tween.unit = unit;
         tween.start = initialInUnit;
         tween.end = intAdjusted;
      }
   }

   return intAdjusted;
}

// Return a vendor-prefixed property or undefined
function vendorPropName(name) {

   // Check for vendor prefixed names
   var capName = name[0].toUpperCase() + name.slice(1),
      i = cssPrefixes.length;

   while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in emptyStyle) {
         return name;
      }
   }
}

// Support: css of setProperty method <= check browser
(function () {
   var div = document.createElement("div");
   support.setProperty = typeof div.style.setProperty !== "undefined";
   support.dataset = div.dataset && isType(div.dataset) === "object";
})();

// Return a potentially-mapped jQrony.cssProps or vendor prefixed property
function finalPropName(name) {
   var final = jQrony.cssProps[name] || vendorProps[name];

   if (final) {
      return final;
   }
   if (name in emptyStyle) {
      return name;
   }
   return vendorProps[name] = vendorPropName(name) || name;
}

function swap(elem, options, callback) {
   var name, ret,
      old = {};

   // Remember the old values, and insert the new ones
   for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
   }

   ret = callback.call(elem);

   // Revert the old values and set previous old{css}
   for (name in options) {
      elem.style[name] = old[name];
   }

   return ret;
}

function setPossitiveNum(_elem, value, subtract) {

   // Any relative (+/-) values have already been
   // normalized at this point
   var matches = rcssNum.exec(value);

   return matches ?
      Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") :
      value;
}

function boxModelAdjustment(elem, dimension, exprop, isBorderBox, styles, computedVal) {
   var i = dimension === "width" ? 1 : 0,
      delta = 0,
      extra = 0;

   // Adjustment may not be necessary
   if (exprop === (isBorderBox ? "border" : "content")) {
      return 0;
   }

   for (; i < 4; i += 2) {

      if (exprop === "margin") {
         delta += jQrony.css(elem, exprop + cssExpand[i], true, styles);
      }

      if (!isBorderBox) {

         // Add padding both
         delta += jQrony.css(elem, "padding" + cssExpand[i], true, styles);

         // For "border" or "margin", add border
         if (exprop !== "padding") {
            delta += jQrony.css(elem, "border" + cssExpand[i] + "Width", true, styles);

            // But still keep track of it otherwise
         } else {
            extra += jQrony.css(elem, "border" + cssExpand[i] + "Width", true, styles);
         }

      } else {

         // For "content", subtract padding both
         if (exprop === "content") {
            delta -= jQrony.css(elem, "padding" + cssExpand[i], true, styles);
         }

         // For "content" or "padding", subtract border both
         if (exprop !== "margin") {
            delta -= jQrony.css(elem, "border" + cssExpand[i] + "Width", true, styles);
         }
      }
   }

   // Account for positive content-box scroll gutter when requested by providing computedVal
   if (!isBorderBox && computedVal >= 0) {
      delta += Math.max(0, Math.ceil(
         elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
         computedVal -
         delta -
         extra -
         0.5
      )) || 0;
   }

   return delta;
}

function getWidthOrHeight(elem, dimension, extra) {

   // Start with computed style
   var styles = getStyles(elem),

      isBorderBox = extra && jQrony.css(elem, "boxSizing", false, styles) === "border-box",
      val = curCSS(elem, dimension, styles);

   // Normalize "" and auto
   val = parseFloat(val) || 0;

   return (val +
      boxModelAdjustment(
         elem,
         dimension,
         extra || (isBorderBox ? "border" : "content"),
         isBorderBox,
         styles,
         val
      )
   ) + "px";
}

jQrony.extend({

   cssHooks: {
      opacity: {
         get: function (elem, computed) {
            if (computed) {
               // We should always get a number back from opacity
               var ret = curCSS(elem, "opacity");
               return ret === "" ? 1 : ret;
            }
         }
      }
   },

   cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
   },

   // Add in properties whose names you wish to fix before
   // setting or getting the value
   cssProps: {},

   /**
    * jQrony.style(arguments) method will be SET/GET css value or property
    * @param {Object} elem HTMLElements object only
    * @param {String} name css property of name
    * @param {String} value css property of value
    * @param {Boolean|String} extra Boolean true, false | "content", "border", "padding", "content"
    * @returns css-value
    */
   style: function (elem, name, value, extra) {

      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8) {
         return;
      }

      // Make sure that we're working with the right name
      var ret, type, hooks,
         origName = camelCase(name),
         isCustomProp = rcustomCssProp.test(name),
         style = elem.style;

      // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.
      if (!isCustomProp) {
         name = finalPropName(origName);
      }

      // Try prefixed name followed by the unprefixed name
      hooks = jQrony.cssHooks[name] || jQrony.cssHooks[origName];

      // HANDLE: If passed The value argument or value !eq undefined
      if (value !== undefined) {
         type = typeof value;

         // match exact (#value) of expr (+=cssProps) or (-=cssProps)
         // executing conditions type eq (#string) and ret[ 1 ] eq [+-]
         if (type === "string" && (ret = rcssNum.exec(value)) &&
            ret[1]) {
            // ADD: or Merge: values in previous curCSS data
            value = adjustCSS(elem, name, ret);

            // Fixes bug #9237 of type <= change type is eq "number"
            type = "number";
         }

         // HANDLE: If value is eq to null or NaN and value!==value
         // Make sure that null and NaN values aren't set (#7116)
         if (value == null || value !== value) {
            return;
         }

         // merge units (vw%px) etc. If ret in exist index number of [ 3 ]
         // !Note: If not ret[ 3 ] so merge value in Default "px" unit
         // But value should be not match from jQrony.cssNumber[origName]
         if (type === "number") {
            value += ret && ret[3] || (jQrony.cssNumber[origName] ? "" : "px");
         }

         // background-* props affect original clone's values
         if (value === "" && name.indexOf("background") === 0) {
            style[name] = "inherit";
         }

         // If a hook was provided, use that value, otherwise just set the specified
         if (!hooks || !("set" in hooks) ||
            (value = hooks.set(elem, value, extra)) !== undefined) {

            // HANDLE: If matched css var props
            // For example (--background-dark)
            if (isCustomProp) {
               style.setProperty(name, value);
               // Otherwise set styles
            } else {
               elem.style[name] = value;
            }
         }
      } else {
         // If a hook was provided get the non-computed value from there
         if (hooks && "get" in hooks &&
            (ret = hooks.get(elem, false, extra)) !== undefined) {
            return ret;
         }

         // Otherwise just get the value from the style object
         return style[name];
      }
   },

   /**
    * jQrony.css(arguments) method will be GET only targeted css property value
    * @param {Object} elem HTMLElements object only
    * @param {String} name css property of name
    * @param {Boolean|String} extra Boolean true, false | "content", "border", "padding", "content"
    * @param {Object} styles Elements style object or computed #object
    * @returns css-value
    */
   css: function (elem, name, extra, styles) {
      var val, num, hooks,
         origName = camelCase(name),
         isCustomProp = rcustomCssProp.test(name);

      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8) {
         return;
      }

      // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.
      if (!isCustomProp) {
         name = finalPropName(origName);
      }

      // Try prefixed name followed by the unprefixed name
      hooks = jQrony.cssHooks[name] || jQrony.cssHooks[origName];

      // If a hook was provided get the computed value from there
      if (hooks && "get" in hooks) {
         val = hooks.get(elem, true, extra);
      }

      // Otherwise, if a way to get the computed value exists, use that
      if (val === undefined) {
         val = curCSS(elem, name, styles);
      }

      if (val === "normal" && name in cssNormalCase) {
         return cssNormalCase[name];
      }

      // Make numeric if forced or a qualifier val looks numeric
      if (extra === "" || extra) {
         num = parseFloat(val);
         return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
   }
});


jQrony.each(["width", "height"], function (_i, dimension) {
   jQrony.cssHooks[dimension] = {
      get: function (elem, computed, extra) {
         if (computed) {

            return rdisplayswap.test(jQrony.css(elem, "display")) &&

               // Support: Safari 8+
               // Table columns in Safari have non-zero offsetWidth & zero
               // getBoundingClientRect().width unless display is changed.
               // Support: IE <=11 only
               // Running getBoundingClientRect on a disconnected node
               // in IE throws an error.
               (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ?
               swap(elem, cssShow, function () {
                  return getWidthOrHeight(elem, dimension, extra);
               }) :
               // Get width or height getWidthOrHeight function
               // through: getWidthOrHeight always returns
               // possitive value (integer) or (units) [vw%px] [vh%px]
               // format. getWidthOrHeight only GET: (width) or (height)
               getWidthOrHeight(elem, dimension, extra);
         }
      },

      set: function (elem, value, extra) {
         var matches,
            styles = getStyles(elem),

            isBorderBox = extra && jQrony.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ?
               boxModelAdjustment(
                  elem,
                  dimension,
                  extra,
                  isBorderBox,
                  styles
               ) :
               0;

         // Convert to pixels if value adjustment is needed
         if (subtract && (matches = rcssNum.exec(value)) &&
            (matches[3] || "px") !== "px") {

            elem.style[dimension] = value;
            value = jQrony.css(elem, dimension);
         }

         return setPossitiveNum(elem, value, subtract);
      }
   };
});

// Creating Here (#main) :css method.
jQrony.fn.extend({
   css: function (name, value) {

      // manage return integer handler and target value
      var isDecimal = value === true && value;
      chainable = !(isDecimal || !(arguments.length > 1));

      return customize(this, function (elem, name, value) {
         var styles, len, extra = isDecimal,
            map = {},
            i = 0;

         if (Array.isArray(name)) {
            styles = getStyles(elem);
            len = name.length;

            for (; i < len; i++) {
               map[name[i]] = jQrony.css(elem, name[i], false, styles);
            }

            return map;
         }

         return value !== undefined ?
            jQrony.style(elem, name, value) :
            jQrony.css(elem, name, extra);
      }, name, value === true ? undefined : value, chainable);
   }
});


/* Create width height related methods:
   * 1) $(selector).outerHeight(param);
   * 2) $(selector).innerWidth(param);
   * 3) $(selector).width(param);
   * 4) $(selector).height(param);
   * 5) $(selector).innerHeight(param);
   * 6) $(selector).outerWidth(param);
----------------------------------------------------------------------------*/
jQrony.each({ Height: "height", Width: "width" },
   function (name, type) {
      jQrony.each({
         padding: "inner" + name,
         content: type,
         "": "outer" + name
      }, function (defaultExtra, funcName) {

         // Margin is only for outerHeight, outerWidth
         jQrony.fn[funcName] = function (margin, value) {

            var extra = defaultExtra || (margin === true || value === true ? "margin" : "border"),
               chainable = arguments.length && (defaultExtra || typeof margin !== "boolean");

            return customize(this,
               function (elem, type, value) {
                  var doc;

                  // HANDLE: elem eq `window`
                  if (isWindow(elem)) {
                     // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                     return funcName.indexOf("outer") === 0 ?
                        elem["inner" + name] :
                        elem.document.documentElement["client" + name];
                  }

                  // HANDLE: elem eq `document`
                  // Get document width or height
                  if (elem.nodeType === 9) {
                     doc = document.documentElement;

                     // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                     // whichever is greatest
                     return Math.max(
                        elem.body["scroll" + name], doc["scroll" + name],
                        elem.body["offset" + name], doc["offset" + name],
                        doc["client" + name]
                     );
                  }

                  return value === undefined ?
                     // Get width or height on the element, requesting but not forcing parseFloat
                     jQrony.css(elem, type, extra) :

                     // Set width or height on the element
                     jQrony.style(elem, type, value, extra);

               }, type, chainable ? margin : undefined, chainable);
         };
      });
   });




/* :positonal, :offset methods
----------------------------------------------------------------------------*/

jQrony.offset = {
   setOffset: function (elem, options, i) {
      var curPosition, curCSSLeft, curCSSTop, curTop, curLeft, curOffset, calculatePosition,
         position = jQrony.css(elem, "position"),
         curElem = jQrony(elem),
         props = {};

      // Set position (#relative) in-case top/left are set on static elem
      // Set position first, in-case top/left are set even on static elem
      if (jQrony.css(elem, "position") === "static") {
         elem.style.position = "relative";
      }

      // Restore current css in variables
      curOffset = curElem.offset();
      curCSSLeft = jQrony.css(elem, "left");
      curCSSTop = jQrony.css(elem, "top");
      calculatePosition = (position === "absolute" || position === "fixed") &&
         (curCSSLeft + curCSSTop).indexOf("auto") > -1;

      // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed
      if (calculatePosition) {
         curPosition = curElem.position();
         curTop = curPosition.top;
         curLeft = curPosition.left;

         // Convert: always string to number and force to be an number
      } else {
         curTop = parseFloat(curCSSTop) || 0;
         curLeft = parseFloat(curCSSLeft) || 0;
      }

      // HANDLE: If options is eq to a Function
      if (isFunction(options)) {
         options.call(elem, i, jQrony.extend({}, curOffset));
      }

      // SET: the position in props { top: true, left: true };
      // IF options in top
      if (options.top != null) {
         props.top = (options.top - curOffset.top) + curTop;
      }
      // IF options in left
      if (options.left != null) {
         props.left = (options.left - curOffset.left) + curLeft;
      }

      if ("using" in options) {
         options.using.call(elem, ele, i, props);
      } else {
         curElem.css(props);
      }
   }
};

jQrony.fn.extend({

   // offset() relates an element's border box to the document origin
   offset: function (options) {

      // Preserve chaining for setter
      if (arguments.length) {
         return options === undefined ?
            this :
            this.each(function (i) {
               jQrony.offset.setOffset(this, options, i);
            });
      }

      var gbrect, win,
         elem = this[0];

      if (!elem) {
         return;
      }

      // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error
      if (!elem.getClientRects().length) {
         return { top: 0, left: 0 };
      }

      // Get document-relative position by adding viewport scroll to viewport-relative gBCR
      gbrect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;

      return {
         top: gbrect.top + win.pageYOffset,
         left: gbrect.left + win.pageXOffset
      };
   },

   // position() relates an element's margin box to its offset parent's padding box
   // This corresponds to the behavior of CSS absolute positioning
   position: function () {
      var offsetParent, offset, doc,
         elem = this[0],
         parentOffset = { top: 0, left: 0 };

      if (!elem) {
         return this;
      }

      // position:fixed, of elements so always set offset from the viewport, gBCR
      if (jQrony.css(elem, "position") === "fixed") {
         offset = elem.getBoundingClientRect();
      } else {
         offset = this.offset();

         // Account for the *real* offset parent, which can be the document or its
         // root element when a statically positioned element is identified
         doc = elem.ownerDocument;
         offsetParent = elem.offsetParent || doc.documentElement;

         // Now start the while loop and check document or root elements
         while (offsetParent &&
            (offsetParent === doc.body || offsetParent === doc.documentElement) &&
            jQrony.css(offsetParent, "position") === "static") {

            offsetParent = offsetParent.parentNode;
         }

         // Skip :docuement, and test offsetParent of nodeType eq `1` and at the
         // time there should not be match between `offsetParent` and `elem`
         if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {

            // Incorporate borders into its offset, since they are outside its content origin
            parentOffset = jQrony(offsetParent).offset();
            // SET/MERGE offsetParent of borderWidth (→L/↑T) in parentOffset
            parentOffset.top += jQrony.css(offsetParent, "borderTopWidth", true);
            parentOffset.left += jQrony.css(offsetParent, "borderLeftWidth", true);
         }
      }

      // Subtract parent offsets and element margins
      return {
         top: offset.top - parentOffset.top - jQrony.css(elem, "marginTop", true),
         left: offset.left - parentOffset.left - jQrony.css(elem, "marginLeft", true)
      };
   },

   // This method will return documentElement in the following cases:
   // 1) For the element inside the iframe without offsetParent, this method will return
   //    documentElement of the parent window
   // 2) For the hidden or detached element
   // 3) For body or html element, i.e. in case of the html node - it will return itself
   //
   // but those exceptions were never presented as a real life use-cases
   // and might be considered as more preferable results.
   //
   // This logic, however, is not guaranteed and can change at any point in the future
   offsetParent: function () {
      return this.map(function () {
         var offsetParent = this.offsetParent;

         while (offsetParent && jQrony.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.offsetParent;
         }

         return offsetParent || documentElement;
      });
   }
});



/* :scrollLeft, :scrollTop method
----------------------------------------------------------------------------*/
jQrony.each({
   scrollLeft: "pageXOffset",
   scrollTop: "pageYOffset"
}, function (method, property) {
   var top = "pageYOffset" === property;

   jQrony.fn[method] = function (val) {
      return customize(this, function (elem, method, val) {

         // Coalesce documents and windows
         var win;
         if (isWindow(elem)) {
            win = elem;
         } else if (elem.nodeType === 9) {
            win = elem.defaultView;
         }

         /**
          * HANDLE: If value [undefined, null]
          * @returns scrollData
          */
         if (val === undefined) {
            return win ? win[property] : elem[method];
         }

         // HANDLE: If value and win eq `window`
         if (win) {
            win.scrollTo(
               !top ? val : win.pageXOffset,
               top ? val : win.pageYOffset
            );

            // Otherwise SET: always elem[ method ] eq scrollData
         } else {
            elem[method] = val;
         }
      }, method, val, arguments.length);
   };
});



/* :Attributes Related Methods!
----------------------------------------------------------------------------*/

var boolHooks,
   rfocusable = /^(?:input|select|textarea|button)$/i,
   rclickable = /^(?:a|area)$/i,
   rnothtmlws = new RegExp("[^\\x20\\t\\r\\n\\f]+", "g"),
   rdataAttr = /^data([A-Z]{1}(\w*))$/;

jQrony.extend({
   attr: function (elem, name, value) {
      var ret, hooks,
         nodeType = elem.nodeType;

      // Don't get/set attributes on text, comment and attribute nodes
      if (nodeType === 3 || nodeType === 8 || nodeType === 2) {
         return;
      }

      // Fallback to prop when attributes are not supported
      if (typeof elem.getAttribute === "undefined") {
         return jQrony.prop(elem, name, value);
      }

      // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined
      if (nodeType !== 1 || !jQrony.isXMLDoc(elem)) {
         hooks = jQrony.attrHooks[name.toLowerCase()] ||
            (jQrony.expr.match.bool.test(name) ? boolHooks : undefined);
      }

      // HANDLE: If value is not eq to "undefined"
      if (value !== undefined) {

         // Remove Attributes when value is eq null
         if (value === null) {
            jQrony.removeAttr(elem, name);
            return;
         }

         // HANDLE: If hooks and set in hooks and ret not eq to undefind
         // SET: "type" or "boolean" attributes
         if (hooks && "set" in hooks &&
            (ret = hooks.set(elem, value, name)) !== undefined) {
            return ret;
         }

         elem.setAttribute(name, value + "");
         return value;
      }

      // Otherwise GET/RESTORE always attribute values
      ret = jQrony.find.attr(elem, name);

      // Non-existent attributes return null, we normalize to undefined
      return ret == null ? undefined : ret;
   },

   attrHooks: {
      type: {
         set: function (elem, value) {
            if (value === "radio" &&
               nodeName(elem, "input")) {
               var val = elem.value;

               // SET: always type attribute in elem
               elem.setAttribute("type", val);
               if (val) {
                  elem.value = val; // SET: value
               }
               return val;
            }
         }
      }
   },

   removeAttr: function (elem, value) {
      var name,
         i = 0,
         // Attribute names can contain non-HTML whitespace characters
         attrNames = value && value.match(rnothtmlws) || [];
      while ((name = attrNames[i++])) {
         elem.removeAttribute(name);
      }
   }
});

// Hooks for boolean attributes and singleAttribute
boolHooks = {
   set: function (elem, value, name) {

      value === false ?
         // Remove boolean attributes when set to false
         jQrony.removeAttr(elem, name) :

         // Otherwise SET: boolean attributes both
         elem.setAttribute(name, name);

      return name; // return boolean attribute
   }
};

if (!support.optSelected) {
   jQrony.propHooks = {
      selected: {
         set: function (elem) {

            /* eslint no-unused-expressions: "off" */
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
               parent.parentNode.selectedIndex;
            }
            return null;
         },

         get: function (elem) {

            /* eslint no-unused-expressions: "off" */
            var parent = elem.parentNode;
            if (parent) {
               parent.selectedIndex;
               if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
               }
            }
         }
      }
   };
}

jQrony.extend({
   propFix: {
      "for": "htmlFor",
      "class": "className"
   },
   prop: function (elem, name, value) {
      var ret, hooks, nodeType = elem.nodeType;

      // Don't get/set attributes on text, comment and attribute nodes
      if (nodeType === 3 || nodeType === 8 || nodeType === 2) {
         return;
      }

      // SKIP: `document` nt<=9 or `XMLEelements` use only childNode
      if (nodeType !== 9 || !jQrony.isXMLDoc(elem)) {

         // Fix name and attach hooks
         name = jQrony.propFix[name] || name;
         hooks = jQrony.propHooks[name];
      }

      // HANDLE: If value is not eq to "undefined"
      if (value !== undefined) {

         // HANDLE: If hooks and set in hooks and ret not eq to undefind
         if (hooks && "set" in hooks &&
            (ret = hooks.set(elem, value, name)) !== undefined) {
            return ret;
         }

         return (elem[name] = value);
      }

      // HANDLE: If hooks and get in hooks and ret not eq to undefind
      if (hooks && "get" in hooks &&
         (ret = hooks.get(elem, name)) !== undefined) {
         return ret;
      }

      return elem[name];
   },

   propHooks: {
      tabIndex: {
         get: function (elem) {

            // Support: IE <=9 - 11 only
            // elem.tabIndex doesn't always return the
            // correct value when it hasn't been explicitly set
            // Use proper attribute retrieval(#12072)
            var tabindex = jQrony.find.attr(elem, "tabindex");

            if (tabindex) {
               return parseInt(tabindex, 10);
            }

            if (
               rfocusable.test(elem.nodeName) ||
               rclickable.test(elem.nodeName) &&
               elem.href
            ) {
               return 0;
            }

            return -1;
         }
      }
   }
});

jQrony.hasDataInElem = function (elem, method, prop) {
   return !!(elem[prop] || elem[method] && elem[method](prop));
};

jQrony.fn.extend({

   replaceAttr: function (curname, newvalue) {
      return this.each(function (_i, elem) {
         var attr = {},
            name,
            multiattr = isType(curname) === "object",
            nodeType = elem.nodeType;

         // Don't replace attributes if not multiattr or cuname not eq #object
         if (!(multiattr ||

            // OR typeof curname is not equal to String
            (typeof curname === "string" &&

               // And or typeof newvalue is not equal to String
               typeof newvalue === "string")) ||

            // Don't replace attributes on text, comment and attribute nodes
            (nodeType === 3 || nodeType === 8 || nodeType === 2)) {
            return;
         }

         // HANDLE: If multiattr then just force cuname to an attr
         if (multiattr) {
            attr = curname;
            newvalue = undefined;

            // Otherwise SET: attributes values in attr with curname
         } else {
            attr[curname] = newvalue;
         }

         for (name in attr) {

            // COND: The name by which you want to replace the attributes
            // that name of attributes must be include in your elements
            if (jQrony.hasDataInElem(elem, "getAttribute", name) &&

               // COND: The name you want to replace the attributes with
               // that the name of attrubutes should not be includes
               !jQrony.hasDataInElem(elem, "getAttribute", attr[name])) {

               // SET: replace new attributes
               jQrony.attr(elem, attr[name], jQrony.attr(elem, name));

               // remove previous attributes
               jQrony.removeAttr(elem, name);
            }
         }
      });
   },

   toggleAttr: function (name, aftersetattr) {
      return this.each(function (_i, elem) {
         var force = function (val) {
            return val || "";
         },
            valueBackup,
            nodeType = elem.nodeType;

         // HANDLE: If typeof aftersetattr is not equal to String
         if (!(typeof aftersetattr === "string" ||

            // OR typeof name is not equal to String
            typeof name === "string") ||

            // Don't replace attributes on text,
            // comment and attribute nodes
            (nodeType === 3 || nodeType === 8 || nodeType === 2)) {
            return;
         }

         valueBackup = force(jQrony.attr(elem, name));

         if (elem.hasAttribute(name)) {

            jQrony.removeAttr(elem, name);
            dataPriv.set(elem, "attrBackup", valueBackup);

            if (aftersetattr) {
               jQrony.attr(elem, aftersetattr, valueBackup);
            }
         } else {
            valueBackup = force(dataPriv.get(elem, "attrBackup"));
            jQrony.attr(elem, name, valueBackup);

            if (aftersetattr) {
               jQrony.removeAttr(elem, aftersetattr);
            }
         }
      });
   }
});

jQrony.fn.extend({
   attr: function (name, value) {
      return customize(this, jQrony.attr, name, value, arguments.length > 1);
   },

   removeAttr: function (name) {
      return this.each(function () { jQrony.removeAttr(this, name); });
   }
});

jQrony.fn.extend({
   prop: function (name, value) {
      return customize(this, jQrony.prop, name, value, arguments.length > 1);
   },

   removeProp: function (name) {
      return this.each(function () {
         delete this[jQrony.propFix[name] || name];
      });
   }
});


jQrony.each([
   "tabIndex",
   "readOnly",
   "maxLength",
   "cellSpacing",
   "cellPadding",
   "rowSpan",
   "colSpan",
   "useMap",
   "frameBorder",
   "contentEditable"
], function () {
   jQrony.propFix[this.toLowerCase()] = this;
});




/* :ClassList Reated Methods.
----------------------------------------------------------------------------*/


// Strip and collabarator whitespace according to HTML spec
function stripAndCollabarator(value) {
   var tokens = value.match(rnothtmlwhite) || [];
   return tokens.join(" ");
}


function getClass(elem) {
   return force(
      elem && elem.getAttribute && elem.getAttribute("class")
   );
}

// Returns force method null, undefined force with empty String
function force(value) {
   return value || "";
}

// Returns convClassToArray All classes to a [ Array ] format
function convClassToArray(value) {
   // HANDLE: If value is eq Array
   if (Array.isArray(value)) {
      return value;
   }
   // HANDLE: If value is eq String
   if (typeof value === "string") {
      return value.match(rnothtmlwhite);
   }
   // Otherwise return empty array
   return [];
}

jQrony.fn.extend({
   addClass: function (value) {
      var classes, elem, curValue, cur, j, clazz, finalValue,
         i = 0;

      // HANDLE: If value is a function
      if (isFunction(value)) {
         return this.each(function (i) {
            jQrony(this).addClass(value.call(this, i, getClass(this)));
         });
      }

      classes = convClassToArray(value);

      if (classes.length) {
         while ((elem = this[i++])) {
            curValue = getClass(elem);
            cur = elem && (" " + stripAndCollabarator(curValue) + " ");

            if (cur) {
               j = 0;
               while ((clazz = classes[j++])) {
                  if (cur.indexOf(" " + clazz + " ") < 0) {
                     cur += clazz + " ";
                  }
               }

               // Only assign if different to avoid unneeded rendering.
               finalValue = stripAndCollabarator(cur);
               if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
               }
            }
         }
      }

      return this;
   },

   removeClass: function (value) {
      var classes, elem, cur, curValue, j, clazz, finalValue,
         i = 0;

      // HANDLE: If value is a function
      if (isFunction(value)) {
         return this.each(function (i) {
            jQrony(this).removeClass(value.call(this, i, getClass(this)));
         });
      }

      classes = convClassToArray(value);

      if (classes.length) {
         while ((elem = this[i++])) {
            curValue = getClass(elem);
            cur = elem && (" " + stripAndCollabarator(curValue) + " ");

            if (cur) {
               j = 0;
               while ((clazz = classes[j++])) {
                  if (cur.indexOf(" " + clazz + " ") > -1) {
                     cur = cur.replace(" " + clazz + " ", " ");
                  }
               }

               // Only assign if different to avoid unneeded rendering.
               finalValue = stripAndCollabarator(cur);
               if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
               }
            }
         }
      }

      return this;
   },

   replaceClass: function (curvalue, newvalue) {
      var curClasses, newClasses, j, elem, cur, curClass, finalValue,
         i = 0;

      // HANDLE: If value is a function
      if (isFunction(curvalue)) {
         return this.each(function (j) {
            jQrony(this).replaceClass(
               curvalue.call(this, j, getClass(this), newvalue),
               newvalue
            );
         });
      }

      newClasses = convClassToArray(newvalue);
      curClasses = convClassToArray(curvalue);

      if (curClasses.length && newClasses.length) {
         while ((elem = this[i++])) {
            curClass = getClass(elem);
            cur = elem && (" " + stripAndCollabarator(curClass) + " ");

            if (cur) {
               j = 0;
               while ((clazz = curClasses[j++])) {
                  if (cur.indexOf(" " + clazz + " ") > -1) {
                     cur = cur.replace(
                        " " + clazz + " ", " " + force(newClasses[j - 1]) + " "
                     );
                  }
               }

               // Only assign if different to avoid unneeded rendering.
               finalValue = stripAndCollabarator(cur);
               if (finalValue !== curClass) {
                  elem.setAttribute("class", finalValue);
               }
            }
         }
      }

      return this;
   },

   toggleClass: function (value, stateVal) {
      var type = typeof value,
         isvvCond = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isvvCond) {
         return stateVal ?
            this.addClass(value) : this.rmvClass(value);
      }

      // HANDLE: If value is a function
      if (isFunction(value)) {
         return this.each(function (i) {
            jQrony(this).toggleClass(
               value.call(this, i, getClass(this), stateVal),
               stateVal
            );
         });
      }

      return this.each(function (_i, _elem) {
         var classNames, i, self, className;

         if (isvvCond) {

            // Toggle individual class names if isvvCond true
            i = 0;
            self = jQrony(this);
            classNames = convClassToArray(value);

            while ((className = classNames[i++])) {

               // Check each className given, space separated list
               if (self.hasClass(className)) {
                  self.removeClass(className);
               } else {
                  self.addClass(className);
               }
            }

            // HANDE: If value is a boolean, or undefined
         } else if (value === undefined || type === "boolean") {
            className = getClass(this);

            if (className) {
               dataPriv.set(this, "__className__", className);
            }

            if (this.setAttribute) {
               this.setAttribute("class",
                  className || value === false ?
                     "" :
                     force(dataPriv.get(this, "__className__"))
               );
            }
         }
      });
   },

   rmvClass: function (value) {
      return this.removeClass(value);
   },

   hasClass: function (value) {
      var className, elem,
         i = 0;

      className = " " + value + " ";
      while ((elem = this[i++])) {
         if (elem.nodeType === 1 &&
            (" " + stripAndCollabarator(getClass(elem)) + " ").indexOf(className) > -1) {
            return true;
         }
      }

      return false;
   }
});



/* Build :val(), <valHooks>
----------------------------------------------------------------------------*/

var rreturn = /\r/g;

jQrony.fn.extend({
   val: function (value) {
      var hooks, valueIsFunction,
         elem = this[0];

      // GET: If not passed value, passed null or any aruguments
      if (!arguments.length) {
         if (elem) {
            hooks = jQrony.valHooks[elem.type] ||
               jQrony.valHooks[elem.nodeName.toLowerCase()];

            if (hooks &&
               "get" in hooks &&
               (ret = hooks.get(elem, "value")) !== undefined
            ) {
               return ret;
            }

            ret = elem.value;

            // Handle most common string cases
            if (typeof ret === "string") {
               return ret.replace(rreturn, "");
            }

            // Handle cases where value is null/undef or number
            return ret == null ? "" : ret;
         }

         return;
      }

      valueIsFunction = isFunction(value);

      return this.each(function (i) {
         var val;

         // Dont't set if this nt !== 1
         if (this.nodeType !== 1) {
            return;
         }

         // HANDLE: if value is a function
         if (valueIsFunction) {
            val = valueIsFunction.call(this, i, jQrony(this).val());

            // Otherwise force value in val
         } else {
            val = value;
         }

         // Treat null/undefined as ""; convert numbers to string
         if (value == null) {
            val = "";

            // convertation value is Number to String
         } else if (typeof value === "number") {
            val = value + "";

            // HANDLE: If in-case value is a Array []
         } else if (Array.isArray(value)) {
            val = jQrony.map(value, function (value) {
               return value == null ? "" : value + "";
            });
         }

         hooks = jQrony.valHooks[this.type] || jQrony.valHooks[this.nodeName.toLowerCase()];

         // If set returns undefined, fall back to normal setting
         if (!hooks || !("set" in hooks) || hooks.set(elem, val) === undefined) {
            this.value = val;
         }
      });
   }
});

jQrony.extend({
   valHooks: {
      option: {
         get: function (elem) {

            var val = jQrony.attr(elem, "value");
            return val != null ?
               val :

               // Support: IE <=10 - 11 only
               // option.text throws exceptions (#14686, #14858)
               // Strip and collapse whitespace
               stripAndCollabarator(jQrony.text(elem));
         }
      },

      select: {
         get: function (elem) {
            var value, i, option, options = elem.options,
               one = elem.type === "select-one",
               index = elem.selectedIndex,
               values = one ? null : [],
               max = one ? index + 1 : options.length;

            if (index < 0) {
               i = max;

            } else {
               i = one ? index : 0;
            }

            // Loop through all the selected options
            for (; i < max; i++) {
               option = options[i];

               // Support: IE <=9 only
               // IE8-9 doesn't update selected after form reset (#2551)
               if ((options.selected || i === index) &&


                  // Don't return options
                  // that are disabled or in a disabled optgroup
                  !option.disabled &&
                  (!option.parentNode.disabled ||
                     !nodeName(option.parentNode, "optgroup"))) {

                  // Get the specific value for the option
                  value = jQrony(option).val();

                  // We don't need an array for one selects
                  if (one) {
                     return value;
                  }

                  // Multi-Selects return an array push all values
                  values.push(value);
               }
            }

            return values;
         },

         set: function (elem, value) {
            var optionSet, option, options = elem.options,
               values = jQrony.createArray(value),
               i = options.length;

            while (i--) {
               option = options[i];

               /* eslint-disable no-cond-assign */

               if (option.select =
                  jQrony.inArray(jQrony.valHooks.option.get(option), values) > -1
               ) {
                  optionSet = true;
               }

               /* eslint-enable no-cond-assign */
            }

            // Force browsers to behave consistently when non-matching value is set
            if (!optionSet) {
               elem.selectedIndex = -1;
            }
            return values;
         }
      }
   }
});

// Radios and checkboxes getter/setter
jQrony.each(["radio", "checkbox"], function () {
   jQrony.valHooks[this] = {
      set: function (elem, value) {
         if (Array.isArray(value)) {
            return (elem.checked = jQrony.inArray(jQrony(elem).val(), value) > -1);
         }
      }
   };

   if (!support.checkOn) {
      jQrony.valHooks.get = function (elem) {
         return elem.getAttribute("value") === null ? "on" : elem.value;
      }
   }
});


/* :dataPriv :dataBackup
----------------------------------------------------------------------------*/

function Data() {
   this.expando = jQrony.expando + Data.uid++;
}

// SET: uid in Data
Data.uid = 1;

Data.prototype = {
   cache: function (owner) {

      // Check if the owner object already has a cache
      var value = owner[this.expando];

      // If not, create one
      if (!value) {
         value = {};

         // We can accept data for non-element nodes in modern browsers,
         // but we should not, see #8335.
         // Always return an empty object.
         if (acceptData(owner)) {

            // If it is a node unlikely to be stringify-ed or looped over
            // use plain assignment
            if (owner.nodeType) {
               owner[this.expando] = value;

               // Otherwise secure it in a non-enumerable property
               // configurable must be true to allow the property to be
               // deleted when data is removed
            } else {
               Object.defineProperty(owner, this.expando, {
                  value: value,
                  configurable: true
               });
            }
         }
      }

      return value;
   },

   set: function (owner, key, value) {
      var prop,
         cache = this.cache(owner);

      // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)
      if (typeof key === "string") {
         cache[camelCase(key)] = value;

         // Handle: [ owner, { properties } ] args
      } else {
         for (prop in key) {
            cache[camelCase(prop)] = prop[key];
         }
      }

      return cache;
   },

   get: function (owner, key) {
      return key === undefined ?
         this.cache(owner) :
         // Always use camelCase key (gh-2257)
         owner[this.expando] && owner[this.expando][camelCase(key)];
   },

   access: function (owner, key, value) {
      if (key === undefined ||
         (key && typeof key === "undefined" && value === undefined)) {
         this.get(owner, key);
      }

      this.set(owner, key, value);

      return value !== undefined ? value : key;
   },

   remove: function (owner, key) {
      var l,
         cache = owner[this.expando];

      // SKIP If cache===undefined return;
      if (cache === undefined) {
         return;
      }

      if (key !== undefined) {

         // HANDLE: If key is [] Array
         if (Array.isArray(key)) {
            key = key.map(camelCase);

         } else {
            // Always key camelCase
            key = camelCase(key);

            key = key in cache ?
               [key] :
               (key.match(rnothtmlwhite) || []);
         }

         l = key.length;

         while (l--) {
            delete cache[key[l]];
         }
      }

      // Remove the expando if there's no more data
      if (key === undefined || jQrony.isEmptyObject(cache)) {
         if (owner.nodeType) {
            owner[this.expando] = undefined;
         } else {
            delete owner[this.expando];
         }
      }

      return owner;
   },

   hasData: function (owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQrony.isEmptyObject(cache);
   }
};

// Initialize dataPriv object
var dataPriv = new Data();

// Initialize dataBackup object
var dataBackup = new Data();


jQrony.extend({
   hasData: function (elem) {
      return dataBackup.hasData(elem) || dataPriv.hasData(elem);
   },
   data: function (elem, key, value) {
      return dataBackup.access(elem, key, value);
   },
   removeData: function (elem, key) {
      return dataBackup.remove(elem, key);
   },
   // TODO: Now that all calls to _data and _removeData have been replaced
   // with direct calls to dataPriv methods, these can be deprecated.
   __data: function (elem, key, value) {
      return dataPriv.access(elem, key, value);
   },
   __removeData: function (elem, key) {
      return dataPriv.remove(elem, key);
   }
});

jQrony.fn.extend({
   removeData: function (key) {
      return this.each(function () {
         return dataBackup.remove(this, key);
      });
   }
});



/* :Decidered Method
----------------------------------------------------------------------------*/
jQrony.memory = function (data) {
   var memory = data, callback, extractQueue, fn,
      argument,
      queue = {
         "progress": [], "done": [], "fail": []
      },
      cache = {
         insert: function () {

            argument = arguments[0];

            while (argument) {
               if (isFunction(argument)) {
                  fn = argument;
                  break;
               } else {
                  argument = argument[0];
               }
            }

            if (isFunction(fn)) {
               push.call(queue[memory], fn);
            }

            return this;
         },
         fireWith: function (context, args) {
            extractQueue = queue[memory];

            while ((callback = extractQueue.shift())) {
               callback.apply(context, args);
            }
            return this;
         }
      };
   return cache;
};

jQrony.extend({
   Decidered: function (callback) {
      var tupples = [

         // Promise +With, handlers, insert-fire memory data
         // Action insert listener, callbacks, with promise
         ["notify", "progress", jQrony.memory("progress"),
            // * 303 :running
            303, "running", 2],
         ["resolve", "done", jQrony.memory("done"),
            // * 204 :resolved
            204, "resolved", 0],
         ["reject", "fail", jQrony.memory("fail"),
            // * 408 :rejected
            408, "rejected", 1]
      ],
         state = "pending",
         decideredCode = 104, // * 104 :pending decideredCode
         promise = {
            decideredCode: function () {
               return decideredCode;
            },
            state: function () {
               return state;
            },
            always: function () {
               decidered.done(arguments).fail(arguments);
               return this;
            },
            "catch": function (fn) {
               return promise.then(null, fn);
            },
            pipe: function ( /* fnDone, fnFail, fnProgress */) {
               var argument = arguments;
               return jQrony.Decidered(function (newDecidered) {
                  jQrony.each(tupples, function (_i, tupple) {

                     var fn = isFunction(argument[tupple[5]]) && argument[tupple[5]];

                     decidered[tupple[1]](function () {
                        var returned = fn && fn.apply(this, arguments);

                        /*
                           * onFulFilled = fnDone, Handle then all done!
                           * onRejected = fnFail, Handle failiur schuation
                           * onProgress = fnProgress, Handle progress
                           */
                        if (returned && isFunction(returned.promise)) {
                           returned.promise()
                              .progress(newDecidered.notify)
                              .done(newDecidered.resolve)
                              .fail(newDecidered.reject);
                        } else {
                           newDecidered[tupple[0] + "With"](
                              this,
                              fn ? [returned] : arguments
                           );
                        }
                     });
                  });
                  argument = null;
               }).promise();
            },
            then: function (onFulfilled, onRejected, onProgress) {
               return jQrony.Decidered(function (_newDecidered) {
                  return decidered
                     /*
                        * onFulFilled, Handle then all done!
                        * onRejected, Handle failiur schuation
                        * onProgress, Handle progress running
                        */
                     .done(onFulfilled)       // fullFilled
                     .fail(onRejected)        // rejected ! failed
                     .progress(onProgress);   // progress ! running
               }).promise();
            },
            // Get a promise for this decidered
            // If obj is provided, the promise aspect is added to the object
            promise: function (obj) {
               return obj != null ? jQrony.extend(obj, promise) : promise;
            }
         },
         decidered = {};

      // Add list-specific methods
      jQrony.each(tupples, function (_i, tupple) {
         var statusCode = tupple[3], data = tupple[2],
            statusText = tupple[4];

         // promise.progress = data.insert
         // promise.done = data.insert
         // promise.fail = data.insert
         promise[tupple[1]] = data.insert;

         if (statusText) {
            data.insert(
               function () {
                  // Update state value
                  // state = "resolved"
                  // state = "rejected"
                  state = statusText;
               }
            );
         }

         if (statusCode) {
            data.insert(
               function () {
                  // Update decideredCode value
                  // DONE = 303
                  // DONE = 204
                  // DONE = 408
                  decideredCode = statusCode;
               }
            );
         }

         // decidered.notify = ƒ () { decidered.notifyWith(...) }
         // decidered.reject = ƒ () { decidered.rejectWith(...) }
         // decidered.resolve = ƒ () { decidered.resolveWith(...) }
         decidered[tupple[0]] = function () {
            decidered[tupple[0] + "With"](this === decidered ? undefined : this, arguments);
            return this;
         };

         // decidered.notifyWith = data.fireWith
         // decidered.resolveWith = data.fireWith
         // decidered.rejectWith = data.fireWith
         decidered[tupple[0] + "With"] = data.fireWith;
      });

      // Make the decidered a promise
      promise.promise(decidered);

      // Call given func if any
      if (isFunction(callback)) {
         callback.call(decidered, decidered);
      }

      // All done!
      return decidered;
   }
});


/* :ready method (:DOM-Ready)
----------------------------------------------------------------------------*/

jQrony.Decidered.exceptionHook = function (error, stack) {

   // Support: IE 8 - 9 only
   // Console exists when dev tools are open, which can happen at any time
   if (window.console && window.console.warn && error && errortypes["[object " + stack + "]"]) {
      window.console.warn("Decidered ExceptionError: " + error.message + error.stack + stack);
   }
};




jQrony.readyException = function (error) {
   window.setTimeout(function () {
      throw error;
   });
};




// The decidered used on DOM ready
var readyHold = jQrony.Decidered();

jQrony.fn.ready = function (fn) {

   readyHold
      .then(fn)

      // DOM ready error handling registration when
      // DOM not ready
      .catch(function (error) {
         jQrony.readyException(error);
      });

   return this;
};

jQrony.extend({
   ready: function () {
      readyHold.resolveWith(document, [jQrony]);
   }
});

function completedFn() {
   // Removing all `dom` privious set: ready events "DOMContentLoaded"
   document.removeEventListener("DOMContentLoaded", completedFn);

   // Removing all `window` in previous set: ready events "load"
   window.removeEventListener("load", completedFn);
   jQrony.ready(); // If all ready event removed then Fire jQrony.ready
}

if (document.readyState === "complete" ||
   (document.readyState !== "loading" && !document.documentElement.doScroll)) {
   setTimeout(jQrony.ready);
} else {

   document.addEventListener("DOMContentLoaded", completedFn);
   window.addEventListener("load", completedFn);
}



/* Build :(Animation) Method
----------------------------------------------------------------------------*/

var defaultDisplayMap = {},
   fxNow, inprogress,
   rprifixType = /^(?:show|hide|toggle)$/;


function getDefaultDisplay(elem) {
   var temp,
      doc = elem.ownerDocument,
      nodeName = elem.nodeName,
      display = defaultDisplayMap[nodeName];

   // Return if exists previous display
   if (display) {
      return display;
   }

   temp = doc.body.appendChild(document.createElement("div"));

   display = jQrony.css(temp, "display");

   temp.parentNode.removeChild(temp);

   if (display === "none") {
      display = "block";
   }

   defaultDisplayMap[nodeName] = display;
   return display;
}

var isHiddenElement = function (elem, el) {

   elem = el || elem;

   // Getting: access shortly Internal display of elements in var display
   var display = elem.style.display;

   // Inline style trumps all
   return display === "none" ||
      display === "" &&

      // Otherwise check computed style
      // Support: Firefox, Chrome etc.
      // Check property Internal or External style elements or computed
      // display computed is eq to "none"
      jQrony.css(elem, "display") === "none";
};

function showHide(elements, show) {
   var display, elem,
      value = [],
      index = 0,
      length = elements.length;

   for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
         continue;
      }

      display = elem.style.display;
      if (show) {
         if (display === "none") {
            value[index] = dataPriv.get(elem, "display") || null;
            elem.style.display = "";
         }
         if (elem.style.display === "" && isHiddenElement(elem)) {
            value[index] = getDefaultDisplay(elem);
         }
      } else {
         if (display !== "none") {
            value[index] = "none";
            dataPriv.set(elem, "display", display);
         }
      }
   }

   // Set the display of the elements in a second loop to avoid constant reflow
   for (index = 0; index < length; index++) {
      if (value[index] != null) {
         elements[index].style.display = value[index];
      }
   }

   return elements;
}

function schedule() {
   if (inprogress) {
      if (document.hidden !== true && window.requestAnimationFrame) {
         window.requestAnimationFrame(schedule);
         // Otherwise set setTimout loop
      } else {
         window.setTimeout(schedule, jQrony.animFx.interval);
      }

      jQrony.animFx.tick();
   }
}

function animTween(elem, options, prop, end, easing) {
   return new animTween.prototype.init(elem, options, prop, end, easing);
}

jQrony.animTween = animTween;

animTween.prototype = {
   constructor: animTween,
   init: function (elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQrony.easing._default;
      this.options = options;
      this.start = this.now || this.cur(),
         this.end = end;
      this.unit = unit || (jQrony.cssNumber[unit] ? "" : "px");
   },
   cur: function () {
      var hooks = animTween.propHooks[this.prop];

      return hooks && hooks.get ?
         hooks.get(this) :
         animTween.propHooks._default.get(this);
   },
   run: function (percent) {
      var eased,
         hooks = animTween.propHooks[this.prop];

      if (this.options.duration) {
         eased = jQrony.easing[this.easing](percent);
      } else {
         eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
         this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
         hooks.set(this);
      } else {
         animTween.propHooks._default.set(this);
      }

      return this;
   }
};


animTween.prototype.init.prototype = animTween.prototype;

// Create Animation propHooks
animTween.propHooks = {
   _default: {
      get: function (tween) {
         var result;

         if (tween.elem.nodeType !== 1 ||
            tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
            return tween.elem[tween.prop];
         }

         result = jQrony.css(tween.elem, tween.prop, "");

         return !result || result === "auto" ? 0 : result;
      },
      set: function (tween) {

         if (jQrony.animFx[tween.prop]) {
            jQrony.animFx.step[tween.prop](tween);
         } else if (tween.elem.nodeType === 1 && (
            jQrony.cssHooks[tween.prop] ||
            tween.elem.style[finalPropName(tween.prop) !== null])) {
            jQrony.style(tween.elem, tween.prop, tween.now + tween.unit);
         } else {
            tween.elem[tween.prop] = tween.now;
         }
      }
   }
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
// scrollTop and scrollTleft method in animTween.propHooks
jQrony.each([
   "scrollLeft",
   "scrollTop"
], function (_i, method) {
   animTween.propHooks[method] = {
      set: function (tween) {
         if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
         }
      }
   };
});


// SET: aniFx in jQuery
jQrony.animFx = animTween.prototype.init;

// Back compat <1.8 extension point
jQrony.animFx.step = {};


// Define Animation behaviour
jQrony.easing = {
   linear: function (p) {
      return p;
   },

   swing: function (p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
   },

   _default: "swing"
};

jQrony.animFx.tick = function () {
   var timer,
      i = 0,
      timers = jQrony.timers;

   // Update always fxNow
   fxNow = Date.now();

   for (; i < timers.length; i++) {
      timer = timers[i];

      // Run the timer and safely remove it when done (allowing for external removal)
      if (!timer() && timers[i] === timer) {
         timers.splice(i--, 1);
      }
   }

   // Complete animation or empty timers
   // value now stop the started animation
   if (!timers.length) {
      jQrony.animFx.stop();
   }

   fxNow = undefined;
};

// Animations created synchronously will run synchronously
function createFxNow() {
   setTimeout(function () {
      fxNow = undefined;
   });

   return (fxNow = Date.now());
}

// Generate parameters to create a standard animation
function genFx(type, includeWidth) {
   var which,
      i = 0,
      attrs = { height: type };

   // If we include width, step value is 1 to do all cssExpand values,
   // otherwise step value is 2 to skip over Left and Right
   includeWidth = includeWidth ? 1 : 0;
   for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
   }

   if (includeWidth) {
      attrs.opacity = attrs.width = type;
   }

   return attrs;
}

// SET: default interval delay time
jQrony.animFx.interval = 13;

jQrony.timers = [];

// ?:Main animation starter function
jQrony.animFx.start = function () {
   if (inprogress) {
      return true;
   }

   inprogress = true;
   schedule();
};

// !STOP animation stop function
jQrony.animFx.stop = function () {
   inprogress = null;
};

// *Animation timer starter function
jQrony.animFx.timer = function (timer) {
   // push (css) timer values
   jQrony.timers.push(timer);
   jQrony.animFx.start();
};

// Define root animation speeds
jQrony.animFx.speeds = {
   slow: 600,
   fast: 200,

   // Default speed
   _default: 400
};

jQrony.speed = function (speed, easing, fn) {
   var opt = speed && typeof speed === "object" ? jQrony.extend({}, speed) : {
      complete: fn || !fn && easing ||
         isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
   };

   // Go to the end state if animFx are off
   if (jQrony.animFx.off) {
      opt.duration = 0;
   } else {
      if (typeof opt.duration !== "number") {
         // If opt.duration in animFx.speeds now SET: animation duration
         if (opt.duration in jQrony.animFx.speeds) {
            opt.duration = jQrony.animFx.speeds[opt.duration];

            // Otherwise SET: default animation duration
         } else {
            opt.duration = jQrony.animFx.speeds._default;
         }
      }
   }

   return opt;
};

function defaultPrefilter(elem, props, opts) {
   var prop, value, toggle, propTween, display, restoreDisplay,
      isBox = "width" in props || "height" in props,
      anim = this,
      orig = {},
      style = elem.style,
      hidden = elem.nodeType && isHiddenElement(elem),
      dataShow = dataPriv.get(elem, "fxshow");

   // Detect show/hide animations
   for (prop in props) {

      value = props[prop];

      if (rprifixType.test(value)) {
         toggle = toggle || value === "toggle";

         if (value === (hidden ? "hide" : "show")) {
            if (value === "show" && dataShow && dataShow[prop] !== undefined) {
               hidden = true;

               // Ignore all other no-op show/hide data
            } else {
               continue;
            }
         }

         orig[prop] = dataShow && dataShow[prop] || jQrony.style(elem, prop);
      }
   }

   // Bail out if this is a no-op like .hide().hide()
   propTween = !jQrony.isEmptyObject(props);
   if (!propTween && jQrony.isEmptyObject(orig)) {
      return;
   }

   if (isBox && elem.nodeType === 1) {

      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];

      // Identify a display type, preferring old show/hide data over the CSS cascade
      restoreDisplay = dataShow && dataShow.display;
      if (restoreDisplay == null) {
         restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQrony.css(elem, "display");

      // HANDLE: When if display is eq to `none`
      if (display === "none") {
         if (restoreDisplay) {
            display = restoreDisplay;
         } else {
            // Get nonempty value(s) by temporarily forcing visibility
            showHide([elem], true);
            restoreDisplay = elem.style.display || restoreDisplay;
            display = jQrony.css(elem, "display");
            showHide([elem]);
         }
      }

      // Animate inline elements as inline-block
      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
         if (jQrony.css(elem, "float") === "none") {

            if (!propTween) {
               if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
               }
            }

            style.display = "inline-block";
         }
      }
   }

   // SET: overflow in elem
   if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
         style.overflow = opts.overflow[0],
            style.overflowX = opts.overflow[1],
            style.overflowY = opts.overflow[2]
      });
   }

   // Implement show/hide animations
   propTween = false;
   for (prop in orig) {

      // General show/hide setup for this element animation
      if (!propTween) {
         if (dataShow) {
            if ("hidden" in dataShow) {
               hidden = dataShow.hidden;
            }
         } else {
            dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
         }

         // Store hidden/visible for toggle
         // so `.stop().toggle()` "reverses"
         if (toggle) {
            dataShow.hidden = !hidden;
         }

         // Show elements before animating them
         if (hidden) {
            showHide([elem], true);
         }

         /* eslint-disable no-loop-func */

         anim.done(function () {

            /* eslint-enable no-loop-func */
            if (!hidden) {
               showHide([elem]);
            }

            dataPriv.remove(elem, "fxshow");

            for (prop in orig) {
               jQrony.style(elem, prop, orig[prop]);
            }
         });
      }

      // Per-property setup
      propTween = extendTween(hidden ? dataShow[prop] : 0, prop, anim);
      if (!(prop in dataShow)) {
         dataShow[prop] = propTween.start;
         if (hidden) {
            propTween.end = propTween.start;
            propTween.start = 0;
         }
      }
   }
}

function propFilter(props, specialEasing) {
   var index, easing, name, value;

   for (index in props) {

      // SET: always camelize index
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];


      // Array Handling value
      if (Array.isArray(value)) {
         easing = value[1];
         value = props[index] = value[0];
      }

      if (index !== name) {
         props[name] = value;
         delete props[index];
      }

      specialEasing[name] = easing;
   }
}

// Creating Animation tweeners method
jQrony.Animation = jQrony.extend(Animation, {

   tweeners: {
      "*": [
         function (prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
         }
      ]
   },

   prefilters: [defaultPrefilter]
});

function extendTween(value, prop, animation) {
   var tween,
      collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"])
   index = 0,
      length = collection.length;

   for (; index < length; index++) {
      if ((tween = collection[index].call(animation, prop, value))) {
         // We're done with this property
         return tween;
      }
   }
}

function Animation(elem, properties, options) {
   var decidered = jQrony.Decidered(),
      stopped,
      index = 0,
      length = Animation.prefilters.length,
      tick = function () {
         if (stopped) {
            return false;
         }

         var currentTime = fxNow || Date.now(),
            remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

            // Support: Android 2.3 only
            // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
            temp = remaining / animation.duration || 0,
            percent = 1 - temp,
            index = 0,
            length = animation.tweens.length;

         for (; index < length; index++) {
            animation.tweens[index].run(percent);
         }

         // If there's more to do, yield
         if (percent < 1 && length) {
            return remaining;
         }

         // Resolve the animation and report its conclusion
         decidered.resolveWith(elem, [animation]);
         return false;
      },
      animation = decidered.promise({
         elem: elem,
         props: jQrony.extend({}, properties),
         opts: jQrony.extend(true, {
            specialEasing: {},
            easing: jQrony.easing._default
         }, options),
         OriginalProperties: properties,
         OriginalOptions: options,
         startTime: fxNow || createFxNow(),
         duration: options.duration,
         tweens: [],
         createTween: function (prop, end) {
            var tween = jQrony.animTween(elem, animation.opts, prop, end,
               animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
         },
         stop: function () {
            jQrony.animFx.stop();
         }
      }),
      props = animation.props;

   propFilter(props, animation.opts.specialEasing);

   for (; index < length; index++) {
      Animation.prefilters[index].call(animation, elem, props, animation.opts);
   }

   jQrony.map(props, extendTween, animation);

   if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
   }

   animation.done(animation.opts.complete);

   jQrony.animFx.timer(
      jQrony.extend(tick, {
         elem: elem,
         animation: animation
      })
   );

   return animation;
}


jQrony.fn.extend({
   fadeTo: function (speed, to, easing, callback) {

      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenElement).css("opacity", 0).show()

         // Animate to the value specified
         .end().animate({ opacity: to }, speed, easing, callback);
   },
   stop: function () {
      jQrony.animFx.stop();
   },
   animate: function (prop, speed, easing, callback) {
      var empty = jQrony.isEmptyObject(prop),
         optall = jQrony.speed(speed, easing, callback),
         startAnimation = function () {

            // Operate on a copy of prop so per-property easing won't be lost
            var anim = Animation(this, jQrony.extend({}, prop), optall);

            if (empty) {
               anim.stop(true);
            }
         };

      return this.each(startAnimation);
   }
});


/* =========== Create Show Hide Toggle Method =========== */
jQrony.fn.extend({
   show: function () {
      return showHide(this, true);
   },
   hide: function () {
      return showHide(this);
   },
   toggle: function (state) {
      if (typeof state === "boolean") {
         return state ? this.show() : this.hide();
      }

      return this.each(function () {
         if (isHiddenElement(this)) {
            jQrony(this).show();
         } else {
            jQrony(this).hide();
         }
      });
   }
});

jQrony.each([
   "show",
   "hide",
   "toggle"
], function (_i, name) {
   var cssFunc = jQrony.fn[name];
   jQrony.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ?
         cssFunc.apply(this, arguments) :
         this.animate(genFx(name, true),
            speed, easing, callback
         );
   }
});

// Generate shortcuts for custom animations
jQrony.each({
   slideRight: { width: "show" },
   slideLeft: { width: "hide" },
   slideDown: genFx("show"),
   slideUp: genFx("hide"),
   slideToggle: genFx("toggle"),
   fadeIn: { opacity: "show" },
   fadeOut: { opacity: "hide" },
   fadeToggle: { opacity: "toggle" },
}, function (name, props) {
   jQrony.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
   };
});




/* Build :(Events) Method
----------------------------------------------------------------------------*/

// var rsingleKey = "backspace|tab|enter|pause|break|capslock|escape|space|end"+
//       "home|printscreen|insert|delete|",
//    functionKey = "f([1-";

// Return jQrony for attributes-only inclusion
support.focusin = "onfocusin" in window;

function preventDefault(e) {
   e.preventDefault();
}

function returnTrue() {
   return true;
}

function returnFalse() {
   return false;
}

var ridentifierNamespace = /^([^.]*)(?:\.(.+)|)/,
   rgroupBindKey = /(?:meta|shift|ctrl|control|alt(?:left|right|))/i,
   stopPropagationCallback = function (e) {
      e.stopPropagation();
   };

// Strip and collapse whitespace according to HTML spec
// And break or split string at ("+") sign
function stripAndCollapsePaire(paire) {
   var tokens = (paire.match(rnothtmlwhite) || []);
   return tokens.join("").split("+");
}

function offImmediateEvent(elem, type, bubbles) {
   elem.addEventListener(type, function (e) {
      e.stopPropagation();
      e.stopImmediatePropagation();
   }, bubbles);
}

(function () {
   var button = document.createElement("button");
   support.addEventListener = typeof button.addEventListener !== "undefined";
})();

/*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */
jQrony.event = {

   global: {},

   add: function (elem, types, data, selector, fnHandler, one, event) {

      event = {};
      types = force(types).match(rnothtmlwhite) || [""];

      jQrony.each(types, function (_i, _type) {
         var type, tmp, origType, namespaces, eventHandle,
            objHandle, undefobjIn;

         tmp = ridentifierNamespace.exec(_type) || [];
         type = origType = tmp[1];

         namespaces = force(tmp[2]).split(".").sort();

         // SET: Guid++; if not exist Guid in fnHandler
         if (!fnHandler.guid) {
            fnHandler.guid = jQrony.guid++;
         }

         objHandle = jQrony.extend({
            type: type,
            origType: origType,
            data: data,
            fnHandler: fnHandler,
            guid: fnHandler.guid,
            selector: selector,
            needsContext: jQrony.expr.match.needsContext.test(selector),
            namespace: namespaces.join(".")
         }, undefobjIn);

         // MAIN: eventHandle (event) of callback function
         eventHandle = function (event) {

            // Getting previous event and Force event to be an new jQrony.Event{}; initializer
            event = dataPriv.get(this, "__eventBackup__") || new jQrony.Event(event);

            // SET: the some importants method in events
            event.isTrigger ? event.current = this : null;
            event.objHandle = objHandle;
            event.data = objHandle.data;
            event.delegateTarget = fnHandler.delegateTarget;

            fnHandler.call(this, event);

            // Fire event only one time if one is eq to `1`
            if (one === 1) {
               jQrony.removeEvent(this, type, eventHandle);
            }
         };

         event[type] = objHandle;

         // SET: dataPriv in event Where event is a objHandle
         dataPriv.set(elem, "__event__", event);

         // SET: dataPriv in main eventHandle callback function
         dataPriv.set(elem, "__handle__", eventHandle);


         // Attach: eventListener event if support AEL event
         if (support.addEventListener) {
            elem.addEventListener(type, eventHandle);

            // Otherwise SET: defualt "on" + type direct method
         } else {
            elem["on" + type] = eventHandle;
         }

         // SET: globale events type is eq true
         jQrony.event.global[type] = true;
      });
   },

   addProp: function (name, hook) {
      Object.defineProperty(jQrony.Event.prototype, name, {
         enumerable: true,
         configurable: true,

         get: isFunction(hook) ?
            function () {
               if (this.originalEvent) {
                  return hook(this.originalEvent);
               }
            } :
            function () {
               if (this.originalEvent) {
                  return this.originalEvent[name];
               }
            },

         set: function (value) {
            Object.defineProperty(this, name, {
               enumerable: true,
               configurable: true,
               writable: true,
               value: value
            });
         }
      });
   },

   // Detach an event or set of events from an element
   remove: function (elem, types, selector, fnHandler) {
      var events, t, tmp, rnamespace,
         types, namespaces, handlers,
         elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.__event__)) {
         return;
      }

      // Once for each type.namespace in types; type may be omitted
      types = force(types).match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
         tmp = ridentifierNamespace.exec(types[t]) || [];
         type = tmp[1];
         namespaces = force(tmp[2]).split(".").sort();

         // Unbind all events (on this namespace, if provided) for the element
         if (!type) {
            for (type in events) {
               jQrony.event.remove(elem, type + types[t], selector, fnHandler);
            }
            continue;
         }

         handlers = events[type] || [];
         rnamespace = tmp[2] &&
            new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

         if (handlers && handlers.type === type) {
            if (rnamespace && rnamespace.test(handlers.namespace) || !rnamespace) {
               offImmediateEvent(elem, type, true);
               jQrony.removeEvent(elem, type, elemData.__handle__);
            }

            delete events[type];
         }
      }

      // Remove data and the expando if it's no longer used
      if (jQrony.isEmptyObject(events)) {
         dataPriv.remove(elem, "__handle__ __event__");
      }
   },

   dispatch: function (elem, type, src) {
      var event;

      if (document.createEvent) {
         event = document.createEvent("HTMLEvents");
         event.initEvent(type, true, true);
         event.eventName = type;

      } else if (window.CustomEvent) {
         event = new CustomEvent(type, src);
      } else {
         event = document.createEvent("CustomEvent");
         event.initCustomEvent(type, true, true, src);
      }

      if (event) {
         elem.dispatchEvent(event);
      } else {
         event = document.createEventObject();
         even.eventName = type;
         event.eventType = type;
         elem.fireEvent("on" + type, event);
      }

      return elem;
   },

   trigger: function (elem, event, data) {
      var i = 0, cur, tmp, lastElement, handle, executable = true;
      eventPath = [],
         type = hasOwn.call(event, "type") ? event.type : event,
         namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

      cur = lastElement = tmp = elem = elem || document;

      // Don't do events on text and comment nodes
      if (cur.nodeType === 3 && cur.nodeType === 8) {
         return;
      }

      // HANDLE: If exists type and namespaces
      if (type.indexOf(".") > -1) {

         // Namespaced trigger; create a regexp to match event type in handle()
         namespaces = type.split(".");
         type = namespaces.shift();
         namespaces.sort();
      }

      // Caller can pass in a jQuery.Event object, Object, or just an event type string
      event = event[jQrony.expando] ?
         event :
         new jQrony.Event(type, typeof event === "object" && event);

      // Add extra Handler or methods & namespace
      event.isTrigger = 1;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ?
         new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;


      // SET: undefined result in event
      event.result = undefined;

      // SET: target if not exists target in event
      if (!event.target) {
         event.target = elem;
      }

      data = data == null ? [event] : jQrony.createArray(data, [event]);

      // eventPath setup and inserting full element path [parent NodeList]
      if (!isWindow(elem) && elem.nodeType) {
         for (; cur; cur = cur.parentNode) {
            eventPath.push(cur);
            tmp = cur;
         }

         // SET: newly-event path in jQrony.Event object
         event.path = eventPath;

         // HANDLE: If tmp is `document` now push `window`
         // #object in eventPath
         if (tmp === (tmp.ownerDocument || document)) {
            eventPath.push(tmp.defaultView || tmp.parentWindow || window);
         }
      }

      // HANDLE: Auto callable fn methods for example "focus()" or "click()" and etc. fnHandler
      if (isFunction(elem[event.type])) {
         elem[event.type]();
         executable = false;
      }

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
         lastElement = cur;

         // jQrony handler
         handle = (dataPriv.get(cur, "__event__") || Object.create(null))[event.type];

         if (handle && executable) {

            // Checking condition if include event in namespace so event.namespace should be match
            // Backup handle.namespace or event.namespace should be exists in event
            if (event.namespace && event.rnamespace.test(handle.namespace) || !event.namespace) {
               jQrony.event.dispatch(cur, type, event);
               dataPriv.set(cur, "__eventBackup__", event);
            }
         }
      }

      if (event.isPropagationStopped()) {
         lastElement.removeEventListener(type, stopPropagationCallback);
      }

      return event.result;
   }
};

// ADD: remove event method in jqrony
jQrony.removeEvent = function (elem, type, fnHandle, bubbles) {

   // Force bubbles elements
   bubbles = bubbles || false;

   // This "if" is needed for plain objects
   if (typeof elem.removeEventListener) {
      elem.removeEventListener(type, fnHandle, bubbles);
   }
};

/* Create Here Main Methods: for jQrony.Event
   */
jQrony.Event = function (src, props) {

   // Allow instantiation without the 'new' keyword
   if (!(this instanceof jQrony.Event)) {
      return new jQrony.Event(src, props);
   }

   // Event Handler #object
   if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented ||
         src.defaultPrevented === undefined &&
         src.returnValue === false ?
         returnTrue : returnFalse;

      // Create target properties
      this.target = (src.target && src.target.nodeType === 3) ?
         src.target.parentNode :
         src.target;

      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget;

      // Event type
   } else {
      this.type = src;
   }

   // Put explicitly provided properties onto the event object
   if (props) {
      jQrony.extend(this, props);
   }

   // Create a timestamp if incoming event doesn't have one
   this.timeStamp = src && src.timeStamp || Date.now();

   this[jQrony.expando] = true;
};


// jQrony.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
jQrony.Event.prototype = {
   constructor: jQrony.Event,
   isDefaultPrevented: returnFalse,
   isPropagationStopped: returnFalse,
   isImmediatePropagationStopped: returnFalse,
   isSimulated: false,

   preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
         e.preventDefault();
      }
   },
   stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
         e.stopPropagation();
      }
   },
   stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
         e.stopImmediatePropagation();
      }

      this.stopPropagation();
   }
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQrony.each({
   altKey: true,
   bubbles: true,
   cancelable: true,
   changedTouches: true,
   ctrlKey: true,
   detail: true,
   eventPhase: true,
   metaKey: true,
   pageX: true,
   pageY: true,
   shiftKey: true,
   view: true,
   "char": true,
   code: true,
   charCode: true,
   key: true,
   keyCode: true,
   button: true,
   buttons: true,
   clientX: true,
   clientY: true,
   offsetX: true,
   offsetY: true,
   pointerId: true,
   pointerType: true,
   screenX: true,
   screenY: true,
   targetTouches: true,
   toElement: true,
   touches: true,
   which: true
}, jQrony.event.addProp);


function on(elem, types, selector, data, fn, one) {
   var type, elements;

   // HANDLE: If types of type is eq #object
   if (typeof types === "object") {
      if (typeof selector !== "string") {
         data = data || selector;
         selector = undefined;
      }

      for (type in types) {
         on(elem, type, selector, data, types[type], one);
      }

      return elem;
   }

   if (data == null && fn == null) {
      fn = selector;
      data = selector = undefined;
   } else if (fn == null) {
      if (typeof selector === "string") {
         fn = data;
         data = undefined;
      } else {
         fn = data;
         selector = data;
         data = undefined;
      }
   }

   if (fn === false) {
      fn = returnFalse;
   }
   if (!fn) {
      return elem;
   }

   if (isFunction(selector)) {
      fn = fn || selector;
      selector = undefined;
   }

   elements = elem;

   if (selector) {
      elements = elem.find(selector);
   }

   return elements.each(function () {
      fn.delegateTarget = elem[0];
      jQrony.event.add(this, types, data, selector, fn, one);
   });
}


// Create Trigger method:
jQrony.fn.extend({
   trigger: function (type, data) {
      return this.each(function () {
         jQrony.event.trigger(this, type, data);
      });
   }
});

// Create :one :on :off methods
jQrony.fn.extend({
   one: function (types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1);
   },
   on: function (types, selector, data, fn) {
      return on(this, types, selector, data, fn);
   },
   off: function (types, selector, fn) {
      var type

      if (typeof types === "object") {

         // ( types-object [, selector] )
         for (type in types) {
            this.off(type, selector, types[type]);
         }
         return this;
      }
      if (selector === false || typeof selector === "function") {

         // ( types [, fn] )
         fn = selector;
         selector = undefined;
      }
      if (fn === false) {
         fn = returnFalse;
      }

      return this.each(function () {
         jQrony.event.remove(this, types, selector, fn);
      });
   }
});

jQrony.fn.extend({
   clickHold: function (runtime, selector, data, fn) {

      var td = runtime > 1000 && runtime < 10000 && runtime;

      if (isFunction(runtime)) {
         fn = fn || runtime;
         td = 2000;
      }

      // Don't fire clickHold event when runtime no a number
      if (typeof td !== "number") {
         return;
      }

      var waitHolder, eventHandler, cur, completed;

      if (isFunction(selector)) {
         fn = fn || selector;
         selector = data = undefined;
      }

      if (isFunction(data)) {
         fn = fn || data;
         data = undefined;
      }

      if (typeof selector !== "string") {
         selector = undefined;
      }


      eventHandler = function (event) {
         cur = this;
         completed = event.type === "mousedown" ? true : false;

         if (!completed) {
            clearTimeout(waitHolder);
            return;
         } else {
            waitHolder = setTimeout(function () {
               if (completed) {
                  fn.call(cur, event);
                  clearTimeout(waitHolder);
               }
            }, td);
         }
      };

      this.on("mousedown", selector, data, eventHandler)
         .on("mouseup", selector, data, eventHandler);

      return this;
   },
   longPress: function (runtime, selector, data, fn) {

      var td = runtime > 1000 && runtime < 10000 && runtime;

      if (isFunction(runtime)) {
         fn = fn || runtime;
         td = 2000;
      }

      // Don't fire longPress event when runtime no a number
      if (typeof td !== "number") {
         return;
      }

      var ms = 100, eventHandler, duration = 0, complete;

      if (isFunction(selector)) {
         fn = fn || selector;
         selector = data = undefined;
      }

      if (isFunction(data)) {
         fn = fn || data;
         data = undefined;
      }

      if (typeof selector !== "string") {
         selector = undefined;
      }


      eventHandler = function (event) {
         duration++;

         if (event.type === "keyup") {
            duration = 0;
            complete = false;
         } else {
            if ((duration * ms) >= td && !complete) {
               complete = true;
               fn.call(this, event);
            }
         }
      };

      this.on("keydown", selector, data, eventHandler)
         .on("keyup", selector, data, eventHandler);

      return this;
   }
});

// Original Event Handler Method:
jQrony.fn.extend({
   origOn: function (types, selector, fn, bubbles) {
      var type, elements, evType;

      // Force the bubbles to be false Boolean
      bubbles = bubbles || false;

      if (typeof types === "object") {
         if (typeof selector !== "string") {
            bubbles = fn || selector;
            selector = undefined;
         }
         for (type in types) {
            this.origOn(type, selector, types[type], bubbles);
         }
         return this;
      }

      if (isFunction(selector)) {
         fn = selector;
         bubbles = fn;
         selector = undefined;
      }

      if (fn === false) fn = returnFalse;
      if (!fn) return this;

      elements = this;
      if (selector) {
         elements = this.find(selector);
      }
      return elements.each(function (_i, elem) {
         evType = (types || "").match(rnothtmlwhite) || [""];

         jQrony.each(evType, function (_i, type) {
            if (typeof elem.addEventListener === "undefined") {
               elem["on" + type] = fn;
            } else {
               elem.addEventListener(type, fn, bubbles);
            }
         });
      });
   }
});


// Create Keymapping and Keybinding Methods:
jQrony.fn.extend({
   keymap: function (keypaire, data, callback, bubbles) {

      // Shift the arguemnts When data is eq to function
      if (isFunction(data)) {
         callback = callback || data;
         data = undefined;
      }

      // Don't bind key if keypaire not eq to string
      // OR callback function if not eq to function
      if (typeof keypaire !== "string" && !isFunction(callback)) {
         return this;
      }

      var i = 0, paireToarray, key, method, paireLen, event;

      bubbles = bubbles || false;

      paireToarray = stripAndCollapsePaire(keypaire);

      paireLen = paireToarray.length;

      // Require kepaire of length at least 2 and maximum 10 instead value
      if (paireToarray.length < 2 && paireToarray.length > 10) {
         return;
      }

      // Cancel always binding progress if release "keyup" event without
      // completing keyMapping steps and set value of i eq to 0
      this.origOn("keyup", function (_event) {
         i = 0;
      });

      return this.origOn("keydown", function (e) {
         e.preventDefault();

         // Short hand each loop getting one by one value and convert numeric
         // if integer value else convert always string to uppercase format
         if (((key = jQrony.toUpper(paireToarray[i])) &&

            // Create a event method "keyCode" or "code" if key is a numeric
            // value so create event method "keyCode" else create "code" method
            (method = jQrony.isNumeric(key) ? "keyCode" : "code") &&
            jQrony.toUpper(e[method]) === key) ||

            // 2nd conditon check event.key or binding key altKey or ctrlKey
            (e.key.toUpperCase() === key || rgroupBindKey.test(key) &&
               e[jQrony.toLower(key) + "Key"])) {

            i++; // increment value of i++;

            key = data != null ? "data" : "\\data\\";

            event = jQrony.Event(e, createObject(key, data));

            if (i === paireLen && isFunction(callback)) {
               callback.call(this, event, key, paireToarray);
            }
         }
      }, bubbles /* keyMapping events bubbling bubbles */);
   },

   keybind: function (bindingpaire, selector, data, callback) {
      var elements = this;

      if (isFunction(selector)) {
         callback = callback || selector;
         data = selector;
         selector = undefined;
      }

      if (isFunction(data)) {
         callback = callback || data;
         data = undefined;
      }

      if (typeof selector !== "string") {
         selector = undefined;
      }

      if (typeof data !== "object") {
         data = undefined;
      }

      return this.each(function () {
         elements = selector && elements.find(selector) || elements;
         elements.keymap(bindingpaire, data, callback);
      });
   }
});


jQrony(document).on("DOMContentLoaded", function () {

   var defaultCursor = { "default": true, "auto": true },
      anctarget = { _parent: true, _top: true, _blank: true, blank: true, _self: true };

   // preventDefault short-hand method without jQrony method
   jQrony(":data(prevent)").each(function () {
      var attr = jQrony(this).attr("data-prevent");

      try {
         attr = JSON.parse(attr);
      } catch (e) {
         return;
      }

      if (!("event" in attr)) {
         return;
      }

      // Fire preventDefault events handler method
      jQrony(this).on(attr.event, preventDefault);
   });

   jQrony(":data(href)").each(function () {
      var anchor, target, url,
         cursor = jQrony(this).css("cursor");

      if (cursor in defaultCursor) {
         support.setProperty ?
            this.style.setProperty("cursor", "pointer", "important") : this.style.cursor = "pointer";
      }

      url = jQrony(this).attr("data-href");
      anchor = document.createElement("a");
      anchor.href = url;

      if ((target = jQrony(this).attr("data-target")) && target in anctarget) {
         anchor.target = target;
      }

      jQrony(this).on("click", function () {
         jQrony(anchor).click();
      });
   });

   // SET: ellipsis remainder data-ellipsis="7" Hello w...
   jQrony(":data(ellipsis)").each(function () {
      var remaining,
         remainder,
         ellipsis,
         curText = jQrony(this).text();

      remaining = jQrony(this).attr("data-ellipsis");
      remainder = curText.slice(0, remaining);
      ellipsis = curText.slice(remainder.length);

      if (ellipsis && (remainder += "...")) {
         jQrony(this).text(remainder);
      }
   });

   // When set data attribute on HTMLEelement data-origin http://127.0.0.1:5500/test.html
   // SET: data-origin in full original url _default SET: root location URI
   // Support: Firefox, IE Edge, Mozila, Safari, Chrome and Android Browser
   jQrony("[data-origin=true]").each(function () {
      var url, attr;

      if ((attr = (url = this.src) && "src" || (url = this.href) && "href")) {
         jQrony(this).attr(attr, url);
      }

      if (url == null) {
         url = window.location.href;
         jQrony(this).attr("data-origin", url);
      }
   });

   // SEO: customization
   // SET: Default title element If missing title element on web application
   (function () {
      if (!document.title) {
         jQrony("head").prepend("<title>jQrony v" + version + "</title>");
      }

      // SET: Default alt attribute If missing img in alt attribute
      jQrony("img").each(function () {
         var alt = jQrony(this).attr("data-alt");

         if (!this.alt) {
            jQrony(this).attr("alt", alt || "( Shahzada Modassir )");
         }
      });

      // SET: Default <meta> author if missing author name on web application
      var author = jQrony("meta[name=author]");
      if (!author.length) {
         jQrony("head").prepend("<meta name=author content=Modassir />");
      }
   })();

   // SET: time-stamp data attr in stamp value data-time-stamp="1671607079915"
   jQrony(":data(time-stamp)").each(function () {
      var stamp = Date.now();
      support.dataset ? this.dataset["timeStamp"] = stamp : this.setAttribute("time-stamp", stamp);
   });
});

jQrony.each([
   "ajaxStart",
   "ajaxStop",
   "ajaxComplete",
   "ajaxError",
   "ajaxSuccess",
   "ajaxSend"
], function (_i, type) {
   jQrony.fn[type] = function (fn) {
      return this.on(type, fn);
   }
});


jQrony.fn.extend({
   hover: function (overFn, outFn) {
      return this.mouseenter(overFn).mouseleave(outFn || overFn);
   },
   bind: function (types, data, fn) {
      return this.on(types, null, data, fn);
   },
   unbind: function (types, fn) {
      this.off(types, null, fn);
   },
   delegate: function (selector, types, data, fn) {
      return this.on(types, selector, data, fn);
   }
});

jQrony.each(
   ("blur focus focusin focusout resize scroll click dblclick timeupdate " +
      "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
      "change select submit keydown keypress keyup contextmenu animationend " +
      "animationstart animationiteration beforecopy beforecut beforepaste").split(" "),
   function (_i, method) {
      jQrony.fn[method] = function (data, fn) {
         return arguments.length > 0 ?
            this.on(method, null, data, fn) :
            this.trigger(method);
      };
   }
);


/* Build :list-sortner by accending order
----------------------------------------------------------------------------*/

function sortOrder(maxUnique, minUnique) {
   var compaireA = jQrony.text(maxUnique) || maxUnique,
      compaireB = jQrony.text(minUnique) || minUnique,
      numericable = jQrony.isIntegeric(compaireA) && jQrony.isIntegeric(compaireB);

   // Sorting by number
   if (numericable) {
      return parseFloat(compaireA) - parseFloat(compaireB);
   }

   // Sorting by String
   return (compaireA > compaireB) ? 1 : (compaireB > compaireA) ? -1 : 0;
}

jQrony.fn.extend({
   sortList: function () {
      var data = [],
         i = 0,
         sorted = this.get().sort(sortOrder),
         length = sorted.length;

      for (; i < length; i++) {
         data.push(jQrony(sorted[i]).html());
      }

      for (i in data) {
         jQrony(this[i]).html(data[i]);
      }

      return this.pushStack(sorted);
   }
});



/* Create => :Queue (callback) Methods
----------------------------------------------------------------------------*/

jQrony.queue = function () {

   // Allow instantiation without the 'new' keyword
   if (!(this instanceof jQrony.queue)) {
      return new jQrony.queue();
   }

   // STORAGE: Queue (#object) data tick
   this.queue = [];

   // STORAGE: Queue (#function) response
   this.etag = [];

   this.beforeRun = function (fnrunner) {
      fnrunner.call(this, this.queue);
      return this;
   };

   this.inprogress = true; // always true progress

   this.pause = function () {
      this.inprogress = false;
      return this;
   };

   this.start = function () {
      var i = 0, queue = this.queue, dataFirst = queue[0],
         delay = (dataFirst || {}).delay, ret, timeout,

         queueEvent = {
            dataFirst: dataFirst,
            pos: i,
            timeStamp: Date.now(),
            "status": 200,
            state: 4,
            cur: this,
            nextFn: queue[i]
         };

      // set proto value of `this` (#object)
      queueEvent.__proto__ = this;

      queueEvent.response = this.etag[i];

      if (queue.length && this.inprogress) {
         timeout = setTimeout(function () {

            // DELETE: one by-one queue data recall start() fn through
            queue.splice(0, 1);

            // DELETE: one by-one return callback data
            queueEvent.cur.etag.splice(0, 1);

            ret = dataFirst.fnHandler.call(queueEvent.cur, queueEvent);
            queueEvent.cur.etag.push(ret);

            queueEvent.cur.start(); // recalling multi time
            clearTimeout(timeout);
         }, delay);
      }

      return this;
   };

   this.add = function (delay, callback) {

      // Return this if not delay is numeric
      if (!jQrony.isNumeric(delay)) {
         return this;
      }

      // Deal always if callback is function
      if (isFunction(callback)) {
         this.queue.push({ delay: delay, fnHandler: callback });
      }

      return this;
   };
};


/* Create :Counter Method (:type Animation)
----------------------------------------------------------------------------*/

var timeFx, isRunning;

jQrony.counterPrams = {
   interval: 13,
   timers: [],
   speeds: { slow: 1500, fast: 1000, _default: 1200 },
   createTimeFx: function () {
      setTimeout(function () {
         timeFx = undefined;
      });
      return (timeFx = Date.now());
   },
   timer: function (timer) {
      jQrony.counterPrams.timers.push(timer);
      jQrony.counterPrams.start();
   },
   start: function () {
      if (isRunning) {
         return true;
      }

      isRunning = true;
      jQrony.counterPrams.schedule();
   },
   stop: function () {
      isRunning = null;
   },
   timer: function (timer) {
      jQrony.counterPrams.timers.push(timer);
      jQrony.counterPrams.start();
   },
   schedule: function () {
      if (isRunning) {
         if (!document.hidden &&
            window.requestAnimationFrame) {
            window.requestAnimationFrame(jQrony.counterPrams.schedule);
         } else {
            setTimeout(jQrony.counterPrams.schedule, jQrony.counterPrams.interval);
         }
         jQrony.counterPrams.tick();
      }
   },
   adjustArgs: function (speed, fn) {
      var opts = typeof speed === "object" ? jQrony.extend({}, speed) : {
         complete: setFunction(fn || speed),
         duration: speed
      };

      // SET: duration
      if (typeof opts.duration !== "number") {
         if (opts.duration in jQrony.counterPrams.speeds) {
            opts.duration = jQrony.counterPrams.speeds[opts.duration];
         } else {
            opts.duration = jQrony.counterPrams.speeds._default;
         }
      }

      return opts;
   },
   tick: function () {
      var timer,
         i = 0,
         timers = jQrony.counterPrams.timers;

      timeFx = Date.now();

      for (; i < timers.length; i++) {
         timer = timers[i];

         // Run the timer and safely remove it when done (allowing for external removal)
         if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
         }
      }

      if (!timers.length) {
         jQrony.counterPrams.stop();
      }

      timeFx = undefined;
   }
};

function counterTween(elem, prop, options, end) {
   return new counterTween.prototype.init(elem, prop, options, end);
}

// SET: counterTween Method
jQrony.counterTween = counterTween;

counterTween.prototype = {
   constructor: counterTween,
   init: function (elem, prop, options, end) {
      this.elem = elem;
      this.prop = prop;
      this.options = options;
      this.end = end,
         this.start = prop.start || 0;
   },
   run: function (percent) {
      this.now = (this.end - this.start) * percent + this.start;
      jQrony(this.elem).html(parseInt(this.now));
   }
};

counterTween.prototype.init.prototype = counterTween.prototype;

function mergeTweens(value, prop, counter) {
   counter.createTween(prop, value)
   return counter;
}

function Counter(elem, properties, option) {
   var decidered = jQrony.Decidered(),
      createLoop,
      stopped,
      tick = function () {

         if (stopped) {
            return;
         }

         var currentTime = timeFx || jQrony.counterPrams.createTimeFx(),
            remaining = Math.max(0, counter.startTime + counter.duration - currentTime),

            // Support: Android 2.3 only
            // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
            temp = remaining / counter.duration || 0,
            percent = 1 - temp,
            index = 0,
            length = counter.tweens.length;

         for (; index < length; index++) {
            counter.tweens[index].run(percent);
         }

         // If there's more to do, yield
         if (percent < 1 && length) {
            return remaining;
         }

         decidered.resolveWith(elem, [counter]);

         if (counter.loop === true && !stopped) {

            createLoop = setTimeout(function () {
               Counter(elem, properties, option);
               clearTimeout(createLoop);
            }, counter.duration);
         }
         return;
      },
      counter = decidered.promise({
         elem: elem,
         props: jQrony.extend({}, { counter: properties.counter }),
         opts: option,
         loop: setBoolean(properties.loop),
         startTime: timeFx || jQrony.counterPrams.createTimeFx(),
         duration: option.duration,
         tweens: [],
         createTween: function (prop, end) {
            var tween = jQrony.counterTween(elem, counter.opts,
               prop, end);
            counter.tweens.push(tween);
            return tween;
         },
         stop: function () {
            stopped = true;
            jQrony.counterPrams.stop();
         }
      }),
      props = counter.props;

   jQrony.map(props, mergeTweens, counter);

   counter.done(counter.opts.complete);

   jQrony.counterPrams.timer(
      jQrony.extend(tick, {
         elem: elem,
         counter: counter
      })
   );

   return counter;
}

function setBoolean(terms) {
   return typeof terms === "boolean" ? terms : false;
}

function setFunction(terms) {
   return isFunction(terms) ? terms : function () { };
}

jQrony.fn.extend({

   // STOPPED: Immediate All running counter events
   stopCounter: function () {
      jQrony.counterPrams.stop();
   },

   counter: function (prop, speed, callback) {

      var empty = jQrony.isEmptyObject(prop),
         argopts = jQrony.counterPrams.adjustArgs(speed, callback),
         startCounter = function () {
            var count = Counter(this, prop, argopts);
            if (empty) {
               count.stop();
            }
         };

      return this.each(startCounter);
   }
});



/* :Detector (Browsers, Devices)
----------------------------------------------------------------------------*/


function Detector() {

   // Allow instantiation without the 'new' keyword
   if (!(this instanceof Detector)) {
      return new Detector();
   }

   this.detectDevice = function () {

   };

   this.detectBrowser = function () {

   };
}

jQrony.Detector = Detector;

// Attach/Extend Detector without 'new' keyword Globaly in `window` #object
window.Detector = Detector;




/* SERIALIZER: Methods
----------------------------------------------------------------------------*/

var location = window.location;
var rquery = (/\?/);
var nonce = { guid: Date.now() };

var
   queryIdentifier = "(?!\\&|\\=)([\\w\\W]+)",
   rsearchParam = new RegExp("^((" + queryIdentifier + "=" + queryIdentifier +
      ")(\\&" + queryIdentifier + "=" + queryIdentifier + ")?)$", "i"),
   rbracket = /\[\]$/,
   rbracketPaire = /\[(\w+)\]$/,
   risMultiBracket = /((\[(\w+)\])(\[\])?)+$/,
   rCRLF = /\r?\n/g,
   rcheckableType = /^(?:checkbox|radio)$/i,
   rsubmitterTypes = /^(?:image|submit|reset|button|file)$/i,
   rsubmittable = /^(?:input|keygen|textarea|select)$/i;

// encuriComp encode all special charaters '%3D'
// Support: IE<=Edge, Chrome, Safari, Opera, Android
function encuriComp(uriComp) {
   return window.encodeURIComponent(uriComp);
}

// decuriComp decode all encoded characters '%3D' '='
// Support: IE<=Edge, Chrome, Safari, Opera, Android
function decuriComp(uriComp) {
   return window.decodeURIComponent(uriComp);
}

// TODO checking or SET: deep object value with chainable system
function checkDeepObject(obj, key, value, deep, ismultiple) {
   var name, curdeep;

   if (jQrony.isEmptyObject(obj)) {
      if (key != null && value != null) {
         obj[key] = value;
         return obj;
      }
   }

   for (name in obj) {
      curdeep = obj[name];

      if (isType(curdeep) === "object" &&
         !jQrony.isEmptyObject(curdeep)) {

         checkDeepObject(curdeep, key, value, deep, ismultiple);
         continue;

      } else {
         if (key != null && value != null) {
            obj[key] = value;
         }

         if (ismultiple !== true) {
            deep[name] = obj[name];
         } else {
            deep.push(createObject(name, obj[name]));
         }

         break;
      }
   }

   return obj;
}

// GET: all deepth key object "{key:{key:{key:{key:value}}}}";
function getAndSetDeepObject(object, key, value, ismultiple) {
   var deep = ismultiple === true ? [] : {};

   if (isType(object) !== "object") {
      return;
   }

   try { value = JSON.parse(value) } catch (e) { }

   checkDeepObject(object, key, value, deep, ismultiple);
   return deep;
}

// Create/Extend suppoter method in support #object
(function () {

   // Support: URLSearchParams Chrome, Safari
   support.URLSearchParams = typeof window.URLSearchParams !== "undefined";
})();


function buildParams(prefix, mixed, traditional, add) {
   var name;

   // Serialize (mixed) array item.
   // HANDLE: If (mixed) of data is eq to array format so Serialize deepth name[] multiselector
   if (Array.isArray(mixed)) {
      jQrony.each(mixed, function (index, value) {

         // HANDLE: If traditional or prefix value
         // "file[]", multiple selector
         if (traditional || rbracket.test(prefix)) {

            // Treat each array item as a string-scalar.
            add(prefix, value);

            // Otherwise
         } else {

            // HANDLE: is none string-scalar ( array or object ) multiselector numeric [index]
            // If value is object make "prefix[index]" else "prefix[]" call deepth buildParams
            buildParams(
               prefix + "[" + (typeof value === "object" && value != null ? index : "") + "]",
               value,
               traditional,
               add
            );
         }
      });

      // HANDLE: not traditional && mixed is eq {key:...} nested #object
   } else if (!traditional && isType(mixed) === "object") {

      // Serialize object item.
      for (name in mixed) {
         buildParams(prefix + "[" + name + "]", mixed[name], traditional, add);
      }

   } else {

      // Serialize string-scalar item.
      add(prefix, mixed);
   }
}

function buildJsonParam(mixed, prefix, paramAdjusted, add) {
   var paire = [], matched, i = 0, keychain, lastvalue, len,
      iNodeep, valuefirst;

   while ((keychain = rbracketPaire.exec(mixed))) {
      matched = keychain.shift();
      unshift.apply(paire, keychain);
      mixed = mixed.slice(0, -matched.length);
   }

   len = paire.length;
   iNodeep = len - 1;
   lastvalue = paire[len - 1];

   while ((valuefirst = paire[i]) && i !== iNodeep) {

      // Add deepth object[index][index] value
      getAndSetDeepObject(paramAdjusted,
         valuefirst,
         createObject(paire[i + 1] || lastvalue, paire[i + 1])
      );

      // increment value of i++;
      i++;
   }

   // * SET: final last deep (prefix) value
   getAndSetDeepObject(paramAdjusted, lastvalue, prefix);
   add(mixed, paramAdjusted);
}

// TODO convert URLSearchParams to {deeply} object format
function convUSPTO(owner, prefix, index, paramAdjusted) {

   var cloneDeep, curowner;

   curowner = owner;

   if (rbracket.test(owner)) {
      curowner = owner = owner.replace(rbracket, "");
      owner = curowner += "[" + index + "]";
   }

   cloneDeep = paramAdjusted;

   // *SET: deepth nested-object values call cacheParam
   jQrony.extend(
      true,
      cloneDeep,
      jQrony.jsonParam((owner + "=" + prefix), false)
   );
}

// TODO Parse jsonParam query string name=modassir or object [{name:"modassir"}]
// to convert '{"name":"modassir"}' '[{"name":"modassir"}]' JSON format
jQrony.jsonParam = function (sdata, jsonConvertation) {
   var i = 0, l, encJSON = {}, soFar, key, val,
      specval = [],
      scalar,
      temp,
      paramAdjusted = {},
      noPaireFD = true,
      add = function (key, valueOrFn) {

         // If value is a function, invoke it and use its return value
         var value = isFunction(valueOrFn) ?
            valueOrFn() :
            valueOrFn;

         encJSON[key] = value;
      }

   // Return when sdata is null
   if (sdata == null) {
      return;
   }

   if (typeof sdata === "string" && rsearchParam.test(sdata)) {
      soFar = sdata.split("&");

      jQrony.each(soFar, function (_i, value) {
         val = decuriComp(value).split("=");
         key = val.shift();
         scalar = force(val[0]);

         // Check empty none-scalar multi key data "name[]"
         if (rbracket.test(key)) {

            // Serialize none-scalar "name[]" items.
            specval[specval.length] = scalar;
            add(key.replace(rbracket, ""), specval);

            // Check none-empty multi key data "name[index]"
            // OR check chainable "name[index][index][index]"
         } else if (risMultiBracket.test(key)) {

            // Serialize deepth none-scalar nested
            // "name[index][index][index]" multiple items.
            buildJsonParam(key, scalar, paramAdjusted, add);

            // Otherwise Serialize scalar items.
         } else {
            add(key, scalar);
         }
      });

      // If an array was passed in, assume that it is an array of form elements.
   } else if (Array.isArray(sdata) ||
      (sdata.jQrony && !jQrony.isPlainObject(sdata))) {

      // Serialize only named #object [{...},{...},{...}]
      jQrony.each(sdata, function () {
         if (this.name != null && this.value != null) {
            noPaireFD = false;
            add(this.name, this.value);
         }
      });

      // Serialize only not name Array ["name","modassir"]
      if (noPaireFD && (l = sdata.length)) {
         temp = !(l % 2) ? l : l + 1;

         for (; i < temp; i += 2) {
            add(sdata[i], sdata[i + 1]);
         }
      }

      // Otherwise buildPrams only for #objects
   } else {

      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (temp in sdata) {
         add(temp, sdata[temp]);
      }
   }

   return jsonConvertation === false ? encJSON : JSON.stringify(encJSON);
};

// Serialize an array of form elements or a set of
// key/values into a query string
jQrony.param = function (ao, traditional) {
   var i = 0, prefix, s = [], len, calcLen,
      noPaireFD = true,
      add = function (key, value) {

         // If value is a function, invoke it and use its return value
         var value = isFunction(value) ?
            value() :
            value;

         s[s.length] = encuriComp(key) + "=" +
            encuriComp(value == null ? "" : value);
      };

   if (ao == null) {
      return "";
   }

   // If an array was passed in, assume that it is an array of form elements.
   if (Array.isArray(ao) || (ao.version && !jQrony.isPlainObject(ao))) {

      // Serialize only named #object [{...},{...},{...}]
      jQrony.each(ao, function () {
         if (this.name != null && this.value != null) {
            noPaireFD = false;
            add(this.name, this.value);
         }
      });

      // Serialize only not name Array ["name","modassir"]
      if (noPaireFD && (len = ao.length)) {

         // remaining calcLen if odd len add +1
         calcLen = !(len % 2) ? len : len + 1;

         for (; i < calcLen; i += 2) { add(ao[i], ao[i + 1]) }
      }

      // Otherwise buildPrams only for #objects
   } else {

      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in ao) {
         buildParams(prefix, ao[prefix], traditional, add);
      }
   }

   // Return the resulting serialization name=modassir&lib=jqrony
   return s.join("&");
};

jQrony.querytoObject = function (init) {
   jQrony.paramHooks.get(null, true, init || location.search);
};

function URLSearchParams(init) {
   var hooks, getHooks, setHooks;

   // Don't execute next code emptyObject or not init and
   // noPlainObject or string
   if (!(jQrony.isEmptyObject(init) || !init) &&
      !(jQrony.isPlainObject(init) || typeof init === "string")) {

   }

   init = force(init);

   hooks = jQrony.paramHooks.get(null, true, init);

   getHooks = jQrony.paramHooks.get;
   setHooks = jQrony.paramHooks.set;

   // get method will be find you name key in search query
   // When match name and finded then return name value
   this.get = function (name) {
      return getHooks(name, false, hooks);
   };

   // (:set) method will set new record but if name is not
   // bracketpaire so set method will be override value
   this.set = function (name, value) {
      return setHooks(name, value, hooks);
   };

   // append method append or add new query data with name and value
   this.append = function (name, value) {
      var newParam,
         prefix = {}, currentParam;

      if (name == null || value == null) {
         return;
      }

      // make prefix object and store name value
      prefix[name] = value;

      // let current url search parameter
      currentParam = jQrony.param(hooks);

      // include "&" or "?" sign
      newParam = (rquery.test(currentParam) ? "?" : "&");

      // parse prefix and set in new Param
      newParam += jQrony.param(prefix);

      return currentParam + newParam;
   };

   // delete method will be delete before set query data
   this.delete = function (name) {
      var i = 0, paires = [], paire, result, lastpaire,
         matched, deepFirst;

      // Don't delete name is none-string undefined or null
      if (typeof name !== "string" || !name) {
         return;
      }

      if (risMultiBracket.test(name)) {

         if (rbracket.test(name)) {
            name = name.replace(rbracket, "");
            name += "[0]";
         }

         // * GET:/main keyword and STORE:/all targeted nested-key
         while ((paire = rbracketPaire.exec(name))) {
            matched = paire.shift();
            unshift.apply(paires, paire);
            name = name.slice(0, -matched.length);
         }

         // let backup last value of paires
         // and delete or pop paires
         lastpaire = paires.pop();

         // !Dont't skip to define deepFirst and
         // deepFirst is a #object
         if (!(deepFirst = hooks[name])) {
            return;
         }

         // * START: searching to hooks in deep or nested items.
         while ((result = deepFirst[paires[i]])) {
            deepFirst = result;
            paires.splice(0, 1);
         }

         // Fixes bugs not matched deep data
         if (paires.length) {
            return;
         }

         // Delete hooks data of deep item.
         delete deepFirst[lastpaire];

      } else {
         // Delete hooks data item. shortly
         delete hooks[name];
      }
   };

   // each method getting all keys and values callback fn through
   this.each = function (callbackFn) {
      return jQrony.each(hooks, callbackFn);
   };

   // getAll method will be return all duplicates named keys in one array
   this.getAll = function (name) {
      var matched = [], match,
         search = location.search.replace(rquery, ""),
         querys = search.split("&");

      // Don't delete name is none-string undefined or null
      if (typeof name !== "string" || !name) {
         return;
      }

      jQrony.each(querys, function (_i, query) {
         match = jQrony.paramHooks.get(
            name,
            false,
            jQrony.paramHooks.get(null, true, query)
         );

         if (match != null || match === null) {
            matched.push(match);
         }
      });

      return matched;
   };

   // has method will be check exists data in search query
   this.has = function (name) {
      if (typeof name !== "string") {
         return null;
      }
      return getHooks(name, false, hooks) != null || null;
   };

   // toString method return search query to (String) format
   this.toString = function () {
      return jQrony.param(hooks).replace(rquery, "");
   };

   // toObject method return return search query to (Object) format
   this.toObject = function () {
      if (!init) {
         return {};
      }
      return typeof init === "object" ? init : hooks;
   };

   // toJSON method return search query to (JSON) format
   this.toJSON = function () {
      return JSON.stringify(this.toObject(init));
   };

   return this;
}

jQrony.URLSearchParams = function (init) {

   if (!(this instanceof jQrony.URLSearchParams)) {
      return new jQrony.URLSearchParams(init);
   }

   this.__proto__ = new URLSearchParams(init);

   return this;
};

jQrony.extend({
   paramHooks: {
      get: function (name /* Search Key Name */, noSearch, init) {
         var i = 0, querys, qSplit, owner, matched, result,
            firstDeepValue,
            arrayAdjusted = [],
            paramAdjusted = {},
            // ignore rfn var next version
            rfn = typeof init === "object" ? "" : init,
            search = (rfn || location.search).replace(rquery, ""),
            add = function (key, valueOrFunction, seed, adjust) {
               var value = isFunction(valueOrFunction) ?
                  valueOrFunction() :
                  valueOrFunction,
                  adjuster = adjust || paramAdjusted;

               try { value = JSON.parse(value) } catch (e) { }

               // SET: key and value in paramAdjusted
               // When seed not available and not array seed
               !seed && (adjuster[key] = value);

               // If seed SET: first array with key of first value
               if (seed && adjuster[key] == null) {
                  seed[seed.length] = value;
                  adjuster[key] = seed || value;
               }

               // Deal only seed and already seted previous key
               if (seed && force(adjuster[key]).indexOf(value) < 0) {
                  adjuster[key].push(value);
               }
            };

         if (typeof init !== "object") {

            // * split or break url query string from pos "&"
            querys = decuriComp(search).trim().split("&");

            jQrony.each(querys, function (_i, query) {
               qSplit = query.split("=");
               owner = qSplit.shift();
               value = force(qSplit[0]);

               if (owner[0] !== "[" && risMultiBracket.test(owner)) {
                  convUSPTO(owner, value, _i, paramAdjusted);

               } else if (owner[0] !== "[" && rbracket.test(owner)) {
                  owner = owner.replace(rbracket, "");
                  add(owner, value, []);

               } else {
                  add(owner, value); // Add all scalar items.
               }
            });
         } else {
            paramAdjusted = init;
         }

         // Adjust or shift arguments When typoef name is a Boolean value
         if (typeof name === "boolean" && name) {
            noSearch = noSearch || name;
            name = undefined;
         }


         // Return paramAdjusted object when noSearch is eq to true
         if (typeof noSearch === "boolean" && noSearch) {
            return paramAdjusted;
         }

         // SEARCH: multiple nested deep value in URLSearchParams #object
         if (name && rbracketPaire.test(name)) {

            // * GET: / main keyword and STORE: / all targeted nested-key
            while ((owner = rbracketPaire.exec(name))) {
               matched = owner.shift();
               unshift.apply(arrayAdjusted, owner);
               name = name.slice(0, -matched.length);
            }

            // !Dont't skip to define firstDeepValue
            firstDeepValue = paramAdjusted[name];

            // * Return null firstDeepValue not a object
            if (typeof firstDeepValue !== "object") {
               return null;
            }

            // * START: searching to chainable or nested keys of value
            while ((result = firstDeepValue[arrayAdjusted[i]])) {
               i++;
               firstDeepValue = result; // update firstDeepValue
            }

            return firstDeepValue;
         }

         return paramAdjusted[name];
      },
      set: function (name, value, hooks, override) {
         var hooks, deep, setHooks, cacheQuery, init;

         // !Don't set url params if name and value not string name is a url param
         if (!(typeof name == "string" &&
            typeof value == "string") || rsearchParam.test(name)) {
            return;
         }

         // ?check deep condition
         if (risMultiBracket.test(name) || rbracket.test(name)) {
            deep = true;
         }

         hooks = jQrony.paramHooks.get(true);

         if ((typeof override === "boolean" && override) || !deep) {
            init = hooks;
            deep = false;
         }

         if (deep) {
            init = true;
         }

         cacheQuery = (encuriComp(name) + "=" + encuriComp(value));
         setHooks = jQrony.paramHooks.get(null, true, cacheQuery);

         // * Extend/Merge hooks in setHooks value
         jQrony.extend(init, hooks, setHooks);

         return jQrony.param(hooks);
      }
   }
});

jQrony.fn.extend({
   serialize: function (origData /* ?Boolean true|false */) {
      var i, form = this[0],
         multiFormData,
         formData,
         prefix,
         dataFromArray,
         multiData = this.length > 1;

      if (origData !== true) {
         return jQrony.param(this.serializeArray());
      }

      // Don't create FormData without form elements
      if (!form || !nodeName(form, "FORM")) {
         return;
      }

      // Initialize self formData ( `new FormData{}` )
      formData = new FormData(form);

      if (multiData) {
         this.not(form).each(function (_i, elem) {

            // Don't create FormData without form elements
            if (!nodeName(elem, "FORM")) {
               return;
            }

            // Initialize multi-nested formData
            multiFormData = new FormData(elem);

            // Getting all FormData value in seprate array
            // format [[array()],[array()]]
            dataFromArray = Array.from(multiFormData);

            for (i in dataFromArray) {
               prefix = dataFromArray[i];

               // Append/Merge prefixes formData
               formData.append(prefix[0], prefix[1]);
            }
         });
      }

      return formData;
   },
   serializeJson: function () {
      return jQrony.jsonParam(this.serializeArray());
   },
   serializeArray: function () {
      return this.map(function () {

         // filter form elements HTMLFormControlsCollection(3)[name:input,pass:input]
         var elements = jQrony.prop(this, "elements");
         return elements ? jQrony.createArray(elements) : this;

      }).filter(function () {
         var type = this.type;

         // Use .is( ":disabled" ) so that fieldset[disabled] works
         // Don't serialize not submittable elements "image, submit"
         // "button, file" and skip not if checked "radio, checkbox"
         // Allow only enabled && submittable and checked elements
         return this.name && !jQrony(this).is(":disabled") &&
            rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
            (this.checked || !rcheckableType.test(type));

      }).map(function (_i, elem) {
         var val = jQrony(elem).val();

         if (val == null) {
            return null;
         }

         // HANDLE: If val is a Aarray format
         if (Array.isArray(val)) {
            return jQrony.map(val, function (val) {
               return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            });
         }

         // Return _default Data
         return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
      }).get();
   }
});



/* Ajax
----------------------------------------------------------------------------*/
var
   r20 = /%20/g,
   rhash = /#.*$/,
   rantiCache = /([?&])=_[^&]*/,

   rlocalProtocol = /^(?:about|app|app-storage|.+-extention|file|res|widget):$/,
   rnoContent = /^(?:GET|HEAD)$/i,
   rprotocol = /^\/\//,
   rheaders = /^(.*?):[\t]*([^\r\n]*)$/gm,

   // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
   allTypes = "*/".concat("*"),

   prefilters = {},

   transports = {},

   // Anchor tag for parsing the document origin
   originAnchor = document.createElement("a");

originAnchor.href = location.href;

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend(target, src) {
   var key, deep,
      flatOptions = jQrony.ajaxSettings.flatOptions || {};

   for (key in src) {
      if (src[key] !== undefined) {
         (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
      }
   }

   if (deep) {
      jQrony.extend(true, target, deep);
   }

   return target;
}

/* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */
function ajaxHandleResponse(s, jqXHR, responses) {
   var ctype, type, firstDataType, finalDataType,
      contents = s.contents, // s.contents reg expr "/\bhtml\b/"
      dataTypes = s.dataTypes;

   // Remove auto dataType and get content-type in the process
   if (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ctype === undefined) {
         ctype = jqXHR.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
   }

   // SET: dataTypes: [ , "html"]
   // Check if we're dealing with a known content-type
   if (ctype) {
      for (type in contents) {
         if (contents[type] && contents[type].test(ctype)) {
            dataTypes.unshift(type);
            break;
         }
      }
   }

   // Check to see if we have a response for the expected dataType
   if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
   } else {
      for (type in responses) {
         if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
            finalDataType = type;
            break;
         }
         if (!firstDataType) {
            firstDataType = type;
         }
      }

      // Or just use first one
      finalDataType = finalDataType || firstDataType;
   }

   // SET: dataTypes: ["text", ] and if finalDataType
   if (finalDataType) {
      if (dataTypes[0] !== finalDataType) {
         dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
   }
}


// Convert response to real or Original face
// Chain conversions given the request and the original response
function ajaxConvertOrigData(s, response, jqXHR, isSuccess) {

   var origconv, cur, prev, origconv2, tmp,
      converters = {},
      dataTypes = s.dataTypes.slice();


   // Create/Clone new converters map with lowerCased key
   if (dataTypes[1]) {
      for (origconv in s.converters) {
         converters[origconv.toLowerCase()] = s.converters[origconv];
      }
   }

   cur = dataTypes.shift();

   // Convert to each sequential dataType
   while (cur) {

      if (s.responseFields[cur]) {
         jqXHR[s.responseFields[cur]] = response;
      }

      // Apply the dataFilter if provided in options
      if (!prev && isSuccess && s.dataFilter) {
         response = s.dataFilter(response, s.dataType);
      }

      prev = cur;
      cur = dataTypes.shift();

      if (cur) {
         if (cur === "*") {
            cur = prev;
         } else if (prev !== "*" && prev !== cur) {
            origconv = converters[prev + " " + cur];

            // HANDLE: When if not origconv
            // If none found, seek a pair
            if (!origconv) {
               for (origconv2 in converters) {

                  // If conv2 outputs current
                  tmp = origconv2.split(" ");
                  if (tmp[1] === cur) {

                     // If prev can be converted to accepted input
                     origconv = converters[prev + " " + tmp[0]] ||
                        converters["* " + tmp[0]];

                     if (origconv) {
                        // Condense equivalence converters
                        if (origconv === true) {
                           origconv = converters[origconv2];

                           // Otherwise, insert the intermediate dataType
                        } else if (converters[origconv2] !== true) {
                           cur = tmp[0];
                           dataTypes.unshift(tmp[1]);
                        }
                        break;
                     }
                  }
               }
            }

            // Apply converter (if not an equivalence)
            if (origconv !== true) {
               if (origconv && s.throws) {
                  response = origconv(response);
               } else {
                  try {
                     response = origconv(response);
                  } catch (e) {
                     return {
                        state: "Ajax parsererror",
                        error: origconv ? e : "Failed convertation from " + prev + "to " + cur
                     };
                  }
               }
            }
         }
      }
   }

   return { status: "success", data: response };
}

function addToPrefilterOrTransdata(structure) {
   return function (dataExpression, cbFunc) {
      if (typeof dataExpression !== "string") {
         cbFunc = dataExpression;
         dataExpression = "*";
      }

      var dataType,
         i = 0,
         dataTypes = dataExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(cbFunc)) {

         // For each dataType in the dataTypeExpression
         while ((dataType = dataTypes[i++])) {

            // Prepend if requested
            if (dataType[0] === "+") {
               dataType = dataType.slice(1) || "*";
               (structure[dataType] = structure[dataType] || []).unshift(cbFunc);

               // Otherwise append
            } else {
               (structure[dataType] = structure[dataType] || []).push(cbFunc);
            }
         }
      }
   };
}

function inspectPrefilterOrTransport(structure, options, origOptions, jqXHR) {

   var inspected = {},
      seekingTransport = (structure === transports);

   function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQrony.each(structure[dataType] || [], function (_, factory) {
         var dataTypeOrTransport = factory(options, origOptions, jqXHR);

         if (typeof dataTypeOrTransport === "string" &&
            !seekingTransport && !inspected[seekingTransport]) {

            options.dataTypes.unshift(dataTypeOrTransport);
            inspect(dataTypeOrTransport);
            return false;
         } else if (seekingTransport) {
            return !(selected = dataTypeOrTransport);
         }
      });
      return selected;
   }

   return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
}


jQrony.extend({

   // Counter for holding the number of active queries
   active: 0,

   lastModified: {},

   etag: {},

   ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.href),
      global: true,
      processData: true,
      async: true,
      // sendType accept "form", "json", "entity"
      sendType: "text",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */

      accepts: {
         "*": allTypes,
         text: "text/plain",
         html: "text/html",
         xml: "application/xml, text/xml",
         json: "application/json, text/javascript",
         binary: "application/octet-stream"
      },

      contents: {
         html: /\bhtml\b/,
         xml: /\bxml\b/,
         json: /\bjson\b/,
         binary: /\boctet-stream\b/,
      },

      // responseFields or responseType xhr
      responseFields: {
         text: "responseText",
         xml: "responseXML",
         json: "responseJSON"
      },

      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {

         // Convert anything to text
         "* text": String,

         // Text to html (true = no transformation)
         "text html": true,

         // Evaluate text as a json expression
         "text json": JSON.parse,

         // Parse text as xml
         "text xml": jQrony.parseXML,

         // Convert data as Entity format
         "text entity": jQrony.encodeHTMLEntity,

         // Convert data as Binary format
         "text binary": jQrony.encodeBinary
      },

      flatOptions: {
         url: true,
         context: true
      }
   },

   ajaxSetup: function (target, setting) {

      return setting ?

         // Building a settings object
         ajaxExtend(ajaxExtend(target, jQrony.ajaxSettings), setting) :

         // Extending ajaxSettings
         ajaxExtend(jQrony.ajaxSettings, target);
   },

   ajaxPrefilter: addToPrefilterOrTransdata(prefilters),
   ajaxTransport: addToPrefilterOrTransdata(transports),

   ajax: function (url, options) {

      // If url is an object, simulate pre-1.5 signature
      if (typeof url === "object") {
         options = options || url;
         url = undefined;
      }

      // Force options to be an object
      options = options || {};

      var transport,

         // URL without anti-cache param
         cacheURL,


         // Response headers
         responseHeadersString,
         responseHeaders,

         // Url cleanup var
         urlAnchor,

         // timeout handle
         timeoutFn,

         // Request state (becomes false upon send and true upon completion)
         completed,

         // To know if global events are to be dispatched
         fireGlobals,

         // Loop variable
         i,

         // uncached part of the url
         uncached,

         // Create the final options object
         s = jQrony.ajaxSetup({}, options),

         // Callbacks context
         callbackContext = s.context || s,

         // Status-dependent callbacks
         statusCode = s.statusCode || {},

         // Decidereds
         decidered = jQrony.Decidered(),
         completeDecidered = jQrony.memory("done"),

         // Headers (they are sent all at once)
         requestHeaders = {},
         requestHeadersNames = {},

         // Default abort message
         strAbort = "canceled",

         // Fake XHR async object
         jqXHR = {

            readyState: 0,

            // Builds headers hashtable if needed
            getResponseHeader: function (key) {
               var match;

               if (completed) {
                  if (!responseHeaders) {
                     responseHeaders = {};
                     while ((match = rheaders.exec(responseHeadersString))) {
                        responseHeaders[match[1].toLowerCase()] =
                           (responseHeaders[match[1].toLowerCase()] || [])
                              .concat(match[2]);

                     }
                  }
                  match = responseHeaders[key.toLowerCase()];
               }
               return match == null ? null : match.join(", ");
            },

            // Raw string
            getAllResponseHeaders: function () {
               return completed ? responseHeadersString : null;
            },

            // Caches the header
            setRequestHeader: function (name, value) {
               if (completed == null) {
                  name = requestHeadersNames[name.toLowerCase()] =
                     requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
               }
               return this;
            },

            // Overrides response content-type header
            overrideMimeType: function (type) {
               if (completed == null) {
                  s.mimeType = type;
               }
               return this;
            },

            // Status-dependent callbacks
            statusCode: function (map) {
               var code;
               if (map) {
                  if (completed) {

                     // Execute the appropriate callbacks
                     jqXHR.always(map[jqXHR.status]);
                  } else {

                     // Lazy-add the new callbacks in a way that preserves old ones
                     for (code in map) {
                        statusCode[code] = [statusCode[code], map[code]];
                     }
                  }
               }
               return this;
            },

            // Cancel the request
            abort: function (statusText) {
               var finalText = statusText || strAbort;
               if (transport) {
                  transport.abort();
               }
               done(0, finalText);
               return this;
            }
         };

      decidered.promise(jqXHR);

      // ADD: protocol if not provided (https://|http://) in url
      // "//jqrony.epizy.com" to https://jqrony.epizy.com
      s.url = ((url || s.url || location.href) + "")
         .replace(rprotocol, location.protocol + "//");


      // Force type method options
      s.type = options.method || options.type || s.method || s.type;

      // Extract dataTypes list ["*"], ["html"]
      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

      // A cross-domain request is in order when the origin doesn't match the current origin.
      if (s.crossDomain == null) {
         urlAnchor = document.createElement("a");

         try {
            urlAnchor.href = s.href;
            urlAnchor.href = urlAnchor.href;

            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
               urlAnchor.protocol + "//" + urlAnchor.host
         } catch (e) {
            s.crossDomain = true;
         }
      }

      // Convert data if data not already a string
      // Handle: If data is {plainObject} or {FormData} [array]
      if (s.data && s.processData && typeof s.data !== "string") {
         s.data = jQrony.param(s.data, s.traditional);
      }

      // Change type case or Update type to UpperCase
      s.type = s.type.toUpperCase();

      // Apply prefilters
      inspectPrefilterOrTransport(prefilters, s, options, jqXHR);

      // If request was aborted inside a prefilter, stop there
      if (completed) {
         return jqXHR;
      }

      // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
      fireGlobals = jQrony.event && s.global;

      // Watch for a new set of requests
      if (fireGlobals && jQrony.active++ === 0) {
         // jQrony.event.trigger( "ajaxStart" );
      }

      // Determine if request has content
      s.hasContent = !rnoContent.test(s.type);

      // Save cacheURL in clean If-Modified-Since
      // Remove hash to simplify url manipulation
      cacheURL = s.url.replace(rhash, "");

      if (!s.hasContent) {

         // Extract #hash data
         // Remember the hash so we can put it back
         uncached = s.url.slice(cacheURL.length);

         if (s.data && (s.processData || typeof s.data === "string")) {
            cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

            delete s.data; // DELETE: s.data
         }

         // Add or update anti-cache param if needed
         if (s.cache === false) {
            cacheURL = cacheURL.replace(rantiCache, "$1");
            uncached = (rquery.test(cacheURL) ? "&" : "?") + "__=" + (nonce.guid)
               + uncached;
         }

         // Put hash and anti-cache on the URL that will be requested (gh-1732)
         s.url = cacheURL + uncached;

         // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData &&
         (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
         s.data = s.data.replace(r20, "+");
      }

      // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
      if (s.ifModified) {
         if (jQrony.lastModified[cacheURL]) {
            jqXHR.setRequestHeader("If-Modified-Since", jQrony.lastModified[cacheURL]);
         }
         if (jQrony.etag[cacheURL]) {
            jqXHR.setRequestHeader("If-None-Match", jQrony.etag[cacheURL]);
         }
      }

      // Set the correct header, if data is being sent
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
         jqXHR.setRequestHeader("Content-Type", s.contentType);
      }

      // Set the Accepts header for the server, depending on the dataType
      jqXHR.setRequestHeader(
         "Accept",
         s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
            s.accepts[s.dataTypes[0]] +
            (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
            s.accepts["*"]
      );

      // Check for headers option and SET: custom headers
      for (i in s.headers) {
         jqXHR.setRequestHeader(i, s.headers[i]);
      }

      // Allow custom headers/mimetypes and early abort
      if (s.beforeSend &&
         (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

         // Abort if not done already and return
         jqXHR.abort();
      }

      // Aborting is no longer a cancellation
      strAbort = "abort";

      // Install callbacks on decidered
      completeDecidered.insert(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error);

      // GET: transport
      transport = inspectPrefilterOrTransport(transports, s, options, jqXHR);


      // If no transport, we auto-abort
      if (!transport) {
         done(-1, "No Transdata");
      } else {

         jqXHR.readyState = 1;

         // If request was aborted inside a prefilter, stop there
         if (completed) {
            return jqXHR;
         }

         // Request Timeout
         if (s.async && s.timeout > 0) {
            timeoutFn = window.setTimeout(function () {
               jqXHR.abort("timeout");
            }, s.timeout);
         }

         try {
            completed = false;
            transport.send(requestHeaders, done);
         } catch (e) {

            // Rethrow post-completion exceptions
            if (completed) {
               throw e;
            }

            // Propagate others as results
            done(-1, e);
         }
      }

      function done(status, nativeStatusText, responses, headers) {
         var isSuccess, success, error, response, modified,
            statusText = nativeStatusText;

         // Ignore repeat invocations
         // Fixes maxium call exceed
         if (completed) {
            return;
         }

         completed = true;

         // Clear timeout if it exists timeoutFn
         if (timeoutFn) {
            window.clearTimeout(timeoutFn);
         }

         // Dereference transport for early garbage collection
         transport = undefined;

         // Cache response headers
         responseHeadersString = headers || "";

         // SET: readyState in jqXHR
         jqXHR.readyState = status > 0 ? 4 : 0;

         // Ajax success condition determine
         isSuccess = status >= 200 && status < 300 || status === 304;

         // GET/SET response data/response dataTypes
         if (responses) {
            response = ajaxHandleResponse(s, jqXHR, responses);
         }

         if (!isSuccess &&
            jQrony.inArray("script", s.dataTypes) > -1 &&
            jQrony.inArray("json", s.dataTypes) < 0) {
            s.converters["text script"] = function () { };
         }

         // Convert response to real or Original face
         response = ajaxConvertOrigData(s, response, jqXHR, isSuccess);

         // If successful, handle type chaining
         if (isSuccess) {

            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
               modified = jqXHR.getResponseHeader("last-modified");

               // If modified SET: last-modified with cacheURL in jQrony
               if (modified) {
                  jQrony.lastModified[cacheURL] = modified;
               }

               // Update/change modified value to be etag
               modified = jqXHR.getResponseHeader("etag");
               if (modified) {
                  jQrony.etag[cacheURL] = modified;
               }
            }

            // if no content or not response in orginal xhr-object
            if (status === 204 || s.type === "HEAD") {
               statusText = "nocontent";

               // if not modified in orginal xhr-object
            } if (status === 304) {
               statusText = "notmodified";

               // If we have data, let's convert it
            } else {
               statusText = response.status;
               success = response.data;
               error = response.error;
               isSuccess = !error;
            }
         } else {

            // Extract error from statusText and normalize for non-aborts
            error = statusText; // real error for xhr
            if (status || !statusText) {
               statusText = "error";
               if (status < 0) {
                  status = 0;
               }
            }
         }

         // Set data for the fake xhr object
         jqXHR.status = status;
         jqXHR.statusText = (nativeStatusText || statusText) + "";

         // SUCCESS/ERROR
         if (isSuccess) {
            decidered.resolveWith(callbackContext, [success, statusText, jqXHR]);
         } else {
            decidered.rejectWith(callbackContext, [jqXHR, statusText, error]);
         }

         // Status-dependent callbacks
         jqXHR.statusCode(statusCode);
         statusCode = undefined;

         // Completed Request
         completeDecidered.fireWith(callbackContext, [jqXHR, statusText]);
      }

      return jqXHR;
   }
});

// SET/UPDATE contentType of ajax options
jQrony.ajaxPrefilter(function (s) {
   var i;
   for (i in s.headers) {
      if (i.toLowerCase() === "content-type") {
         s.contentType = s.headers[i] || "";
      }
   }
});


jQrony.ajaxSettings.xhr = function () {
   try {
      return new window.XMLHttpRequest();
   } catch (e) { }
};

var xhrSuccessStatusCode = {

   // File protocol always yields status code 0, assume 200
   0: 200,

   // Support: IE <=9 only
   // #1450: sometimes IE returns 1223 when it should be 204
   1223: 204
},

   xhrSupported = jQrony.ajaxSettings.xhr();

support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
support.ajax = xhrSupported = !!xhrSupported;

jQrony.ajaxTransport(function (options) {
   var callback, errorCallback;

   // Cross domain only allowed if supported through XMLHttpRequest
   if (support.cors || xhrSupported || !options.crossDomain) {
      return {
         send: function (headers, complete) {
            var i,
               xhr = options.xhr();

            xhr.open(
               options.type,
               options.url,
               options.async,
               options.username,
               options.password
            );

            // Apply custom fields if provided or options in xhrFields
            if (options.xhrFields) {
               for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
               }
            }

            // Override mime type if needed or options in mimeType
            if (options.mimeType && xhr.overrideMimeType) {
               xhr.overrideMimeType(options.mimeType);
            }

            // SET: always X-Requested-With header in current headers
            if (!options.crossDomain && !headers["X-Request-With"]) {
               headers["X-Request-With"] = "XMLHttpRequest";
            }

            // SET: headers
            for (i in headers) {
               xhr.setRequestHeader(i, headers[i]);
            }

            // Callback
            callback = function (type) {
               return function () {
                  if (callback) {
                     callback = errorCallback = xhr.onload = xhr.onerror =
                        xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                     // HANDLE: "abort"
                     if (type === "abort") {
                        xhr.abort();

                        // HANDLE: "error"
                     } else if (type === "error") {

                        if (typeof xhr.status !== "number") {
                           complete(0, type);
                        } else {

                           complete(xhr.status, xhr.statusText);
                        }

                        // Otherwise SET: all complete arguments
                     } else {

                        complete(

                           // Passed 1th argument
                           xhrSuccessStatusCode[xhr.status] || xhr.status,

                           // Passed 2nd argument
                           xhr.statusText,

                           // Passed 3rd argument
                           (xhr.responseType || "text") !== "text" ||
                              typeof xhr.responseText !== "string" ?
                              { binary: xhr.response } :
                              { text: xhr.response },

                           // Passed last 4th argument
                           xhr.getAllResponseHeaders()
                        );
                     }
                  }
               }
            };

            // Listen-Fire to events
            xhr.onload = callback();

            // Handle errorCallback
            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");

            // Handle uncaught aborts force abort function
            if (xhr.onabort !== undefined) {
               xhr.onabort = errorCallback;
            } else {
               xhr.onreadystatechange = function () {

                  if (xhr.readyState === 4) {
                     window.setTimeout(function () {
                        if (callback) {
                           errorCallback();
                        }
                     });
                  }
               }
            }


            // Create the abort callback
            callback = callback("abort");

            try {

               // Do send the request (this may raise an exception)
               xhr.send(options.hasContent && options.data || null);
            } catch (e) {

               // #14683: Only rethrow if this hasn't been notified as an error yet
               if (callback) {
                  throw e;
               }
            }

         },

         abort: function () {
            if (callback) {
               callback();
            }
         }
      };
   }
});


// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQrony.ajaxPrefilter(function (s) {
   if (s.crossDomain) {
      s.contents.script = false;
   }
});

// Handle cache's special case and crossDomain
jQrony.ajaxPrefilter("script", function (s) {
   if (s.cache === undefined) {
      s.cache = false;
   }
   if (s.crossDomain) {
      s.type = "GET";
   }
});

// Default jsonp settings
jQrony.ajaxSetup({
   jsonp: "callback",
   jsonpCallback: function () {
      var callback = (jQrony.expand + "__" + (nonce.guid++));
      this[callback] = true;
      return callback;
   }
});

// Install script dataType
jQrony.ajaxSetup({

   accepts: {
      script: "text/javascript, application/javascript" +
         "application/ecmascript, application/x-ecmascript"
   },

   contents: {
      script: /\b(?:ecma|java)script\b/
   },

   converters: {
      "text script": function (text) {
         jQrony.globalEval(text);
         return text;
      }
   }
});

// Bind script tag hack transport
jQrony.ajaxTransport("script", function (s) {

   if (s.crossDomain || s.scriptAttrs) {
      var script, callback;
      return {
         send: function (_, complete) {
            script = jQrony("<script>")
               .attr(s.scriptAttrs || {})
               .prop({ charset: s.scriptCharset, src: s.url })
               .on("load error", callback = function (sevt) {
                  script.remove();
                  callback = null;
                  if (sevt) {
                     complete(sevt.type === "error" ? 404 : 200, sevt.type);
                  }
               });

            // Use native DOM manipulation to avoid our domManip AJAX trickery
            document.head.appendChild(script[0]);
         },

         abort: function () {
            if (callback) {
               callback();
            }
         }
      };
   }
});


jQrony.__evalURI = function (url, option, doc) {
   return jQrony.ajax({
      url: url,

      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,

      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
         "text script": function () { }
      },

      dataFilter: function (response) {
         jQrony.globalEval(response, option, doc);
      }
   });
};

/**
 * Load a url into a page
 */
jQrony.fn.load = function (url, params, callback) {
   var type, response, selector,
      elems = this,
      selectOff = url.indexOf("::");

   if (selectOff > 0) {
      selector = stripAndCollabarator(url.slice(selectOff));
      url = url.slice(0, selectOff);
   }

   // Clean cache selector and removing "::" sign
   if (selector) {
      selector = selector.slice(2);
   }

   // HANDLE: If it's a function prams
   if (isFunction(params)) {
      callback = callback || params;
      params = undefined;

   } else if (params && typeof params === "object") {
      type = "POST";
   }

   // If we have elements to modify, make the request
   jQrony.ajax({
      url: url,

      // If "type" variable is undefined, then "GET" method will be used.
      // Make value of this field explicit since
      // user can override it through ajaxSetup method
      type: type || "GET",
      dataType: "html",
      data: params,
   }).done(function (responseText) {

      response = arguments;

      // HANDLE: If selector now match selector in response where creating a dummy div
      // And append all responseText in dummy div and after find selector matcher
      // If selector matcher match in respnseText so SET: matcher otherwise SET: only
      // responseText
      elems.html(selector ? jQrony("<div>").append(responseText).find(selector) :
         responseText
      );
   }).always(callback && function (jqXHR, status) {
      elems.each(function () {
         callback.apply(this,
            // Success || Apply only Request Rejection or Failuire schuations
            response || [jqXHR.responseText, status, jqXHR.statusText]
         );
      });
   });

   return this;
};



/* :Wrap method
----------------------------------------------------------------------------*/

jQrony.fn.extend({
   wrapAll: function (html) {
      var wrap,
         self = this[0];

      if (self) {
         if (isFunction(html)) {
            html.call(self, html);
         }

         // The elements to wrap the target around clone first element
         wrap = jQrony(html, self.ownerDocument).eq(0).clone(true);

         if (self.parentNode) {
            wrap.insertBefore(self);
         }

         wrap.map(function () {
            var elem = this;

            // Getting first deepth elements
            while (elem.firstElementChild) {
               elem = elem.firstElementChild;
            }
            return elem;

         }).append(this);
      }

      return this;
   },
   wrapInner: function (html) {

      if (isFunction(html)) {
         return this.each(function (i) {
            jQrony(this).html(html.call(this, i));
         });
      }

      return this.each(function () {
         var elem = jQrony(this), contents = elem.contents();

         // wrap only innerContent or hasData content
         if (contents.length) {
            contents.wrapAll(html);

            // Otherwise append current elem in html
         } else {
            elem.append(html);
         }
      });
   },
   wrap: function (html) {
      var isFunctionHTML = isFunction(html);
      return this.each(function (i) {
         jQrony(this).wrapAll(isFunctionHTML ? html.call(this, i) : html);
      });
   },
   unwrap: function (selector) {
      this.parent(selector).not("body").each(function () {
         jQrony(this).replaceWith(this.childNodes);
      });
      return this;
   }
});



/* STORAGE Method (:sessionStorage, :localStorage)
----------------------------------------------------------------------------*/

var storages = { localStorage: true, sessionStorage: true },

   rdateUTC = /^(\d{1,2})(?:(minute|hour|day|week|month|year)(s)?)$/i;

function Storage(init) {

   // Force Storage to be an localStorage in init var
   init = storages[init] && init || "localStorage";

   // Initialize Storage
   // * localStorage
   // * sessionStorage
   var storage = window[init];

   this.set = function (key, value, expireTime, fn, extend) {
      var setup = {}, strTime, error, DMYHSI, timeline,
         minute = 60 * 1000,
         hour = minute * 60,
         day = hour * 24,
         week = day * 7,
         month = week * 4,
         year = month * 12,
         curDate = (Date.now()),
         curData = storage && storage.getItem(key),
         decidered = new jQrony.Decidered(),

         dateTable = {
            minute: minute, hour: hour, day: day, week: week, month: month, year: year
         };

      // Shifting arguments for function expireTime
      if (isFunction(expireTime)) {
         extend = extend || fn;
         fn = expireTime;
         expireTime = undefined;
      }

      // Shifting arguments for Booleans expireTime
      if (typeof expireTime === "boolean") {
         extend = extend || expireTime;
         fn = expireTime = undefined;
      }

      // Don't set Storage items undefined or null
      if (typeof key == null || value == null) {
         return;
      }

      if (curData != null) {
         try { curData = JSON.parse(curData) } catch (e) { }

         // If all ready set storage in setup getting value
         if (curData.expireTime) {
            curData = curData.value;
         }

         // SET: temporarily key and value in setup --object
         setup[key] = curData;

         // Insert/Merge extend value
         if (extend === true) {
            jQrony.extend(true, setup, createObject(key, value));
         } else {
            setup[key] = value; // override value
         }

         // Extract curData in extended data target with key;
         curData = setup[key];

         delete setup[key]; // delete temporarily key
      }

      // Force value to be and main parameter value
      value = curData || value;

      // SET: the final --nested of key/value in name of setup object
      jQrony.extend(setup, { key: key, value: value });

      // SET: expireTime stamp integer value
      if (typeof expireTime === "number") {
         setup.__proto__ = { expireTime: expireTime };
      }

      if ((strTime = rdateUTC.exec(expireTime))) {
         error = strTime[1] > 1 && !strTime[3] &&
            strTime[2] + "[:Missing (s)]" || strTime[1] == 1 &&
            strTime[3] && strTime[2] + "[:Unrequired (!" + strTime[3] + ")]";
      }

      // Throw Errors
      if (error) {
         throwError("timeStamp Error",
            "Invalid expireTime stamp follow on '" + error + "' then fix it."
         );
      }

      // SET: expiretime
      if (strTime) {
         DMYHSI = dateTable[strTime[2].toLowerCase()];
         setup.__proto__ = { expireTime: curDate + (parseInt(strTime[1]) * DMYHSI) };
      }

      decidered.done(fn).fail(fn);

      // Before clear all previous or set intervals then start interval
      window.clearInterval && window.clearInterval(timeline);

      // START: timeline intervals execute time per 1s
      if (setup.expireTime) {
         timeline = window.setInterval(function () {

            if (setup.expireTime <= Date.now()) {
               storage.removeItem && storage.removeItem(key);
               decidered.rejectWith(setup, ["Storage Expired", "No Data Found"]);
               window.clearInterval(timeline);
            }
         }, 1000);
      }

      // Check Storage Support: in active Browsers
      if (!support[init].set) {
         decidered.rejectWith(this,
            ["Not Support", ":Change browser or Update browser version"]
         );
         return false;
      }

      try {
         decidered.resolveWith(this, [setup, "Data inserted successfuly", "DONE"]);
         storage.setItem(setup.key,
            typeof setup.value === "object" ? JSON.stringify(setup.value) : setup.value
         );
      } catch (e) {
         decidered.rejectWith(this, [e.error, e.message, e.stack, "Storage Error"]);
      }

      return !isFunction(fn) ? setup : this;
   };

   this.get = function (key, fn) {
      var complete = {},
         curData = storage && storage.getItem(key);

      if (curData == null) {
         return null;
      }

      try { curData = JSON.parse(curData) } catch (e) { }

      jQrony.extend(complete, {
         key: key,
         value: curData
      });

      if (isFunction(fn)) {
         fn.apply(this, [curData, complete, "success"]);
      }

      return !isFunction(fn) ? curData : this;
   };

   this.each = function (key, callback) {
      var curData = storage, complete = {}, name, value, protoBackup;

      if (isFunction(key)) {
         callback = callback || key;
         key = undefined;
      }

      // STORE: backup of storage __proto__ --object
      protoBackup = curData.__proto__;

      // Unset/Remove temporarily storage proto
      curData.__proto__ = complete;

      for (name in curData) {
         try { value = JSON.parse(curData[name]) }
         catch (e) { value = curData[name] }
         complete[name] = value;
      }

      // now set protoBackup in curData proto
      curData.__proto__ = protoBackup;

      if (key != null) {
         complete = this.get(key);
      }

      // convert always from comming storage data in --object format.
      complete = typeof complete === "object" ? complete : [complete];

      jQrony.each(complete, function (i, value) {
         isFunction(callback) &&
            callback.apply(this, [i, value, complete, key || i]);
      });

      return this;
   };

   this.has = function (key) {
      var exists = false;

      // check shortly has data in storage
      if (key in storage) {
         return true;
      }

      // perform deepth proccess checking storage data
      this.get(key, function (_data, object) {
         exists = "value" in object;
      });

      return exists;
   };

   this.clear = this.truncate = this.empty = function () {
      var curData = storage, complete = false, name, protoBackup;

      // Clear all Storage data shortly
      if (support[init].clear) {
         storage.clear();
         return true;
      }

      // STORE: backup of storage __proto__ --object
      protoBackup = curData.__proto__;

      // Unset/Remove temporarily storage proto
      curData.__proto__ = complete;

      // Clear Storage proccessing...
      for (name in curData) {
         if (support[init].remove) {
            complete = true; // cleared success then complete true
            // removing items storage method through
            storage.removeItem(name);
         } else {
            // Support: always maxium browser
            delete storage[name];
            complete = true; // cleared success then complete true
         }
      }

      // now set protoBackup in curData proto
      curData.__proto__ = protoBackup;

      return complete;
   };

   this.remove = this.delete = function (key, fn) {
      var curStorage;

      if (support[init].remove) {

         // removing items storage method through
         storage.removeItem(key);

         // removed success then re-init storage
         curStorage = storage;

      } else {
         // Support: always maxium browser
         delete storage[key];

         // removed success then re-init storage
         curStorage = storage;
      }

      apply(fn, this, [curStorage, "success"]);

      return isFunction(fn) ? this : curStorage;
   };
}

// Create Support: for Storages and Storages inner methods
(function () {
   var storage;
   for (storage in storages) {
      if (storage in window) {
         support[storage] = {
            set: !!window[storage].setItem,
            get: !!window[storage].getItem,
            clear: !!window[storage].clear,
            remove: !!window[storage].removeItem
         };
      }
   }
})();

// Initialize Storage with new instanceof keyword
jQrony.Storage = function (init) {

   if (!(this instanceof jQrony.Storage)) {
      return new jQrony.Storage(init);
   }

   this.__proto__ = new Storage(init);

   return this;
};

jQrony.each(storages, function (storage) {

   var initStorage = new jQrony.Storage(storage);

   jQrony.each({
      set: function (key, value, expireTime, fn, extend) {
         return initStorage.set(key, value, expireTime, fn, extend);
      },
      get: function (key, fn) {
         return initStorage.get(key, fn);
      },
      clear: function () {
         return initStorage.clear();
      },
      has: function (key) {
         return initStorage.has(key);
      },
      remove: function (key, fn) {
         return initStorage.remove(key, fn);
      }
   }, function (method, storageFn) {
      jQrony[method + jQrony.firstUpper(storage)] = storageFn;
   });
});


// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQrony.isArray = Array.isArray;
jQrony.isFunction = isFunction;
jQrony.stringify = JSON.stringify;
jQrony.isBinary = isBinary;
jQrony.type = isType;
jQrony.dashed = dashed;
jQrony.isWindow = isWindow;
jQrony.isNavigator = isNavigator;
jQrony.camelCase = camelCase;


jQrony.now = Date.now();


jQrony.isNumeric = function (obj) {
   var type = jQrony.type(obj);

   return (type === "number" || type === "string") &&
      !isNaN(obj - parseFloat(obj));
};

jQrony.isIntegeric = function (obj) {
   var type = jQrony.type(obj);
   return type === "number" || !isNaN(parseFloat(obj));
};

jQrony.trim = function (text) {
   return text == null ?
      "" :
      (text + "").replace(rtrim, "");
};

jQrony.getType = function (uri) {
   return isBinary(uri) && "binary" || isType(uri);
};



/* Connection Area
--------------------------------------------------------------------------------*/

/**
 * expand method extend multiple jQrony caller identifier name. work as renjQusry
 * ? Notice: expand method accept only String caller name, Don't pass any dataType
 */
jQrony.expand = function ( /* expandName */) {
   var em;
   if ((em = objIn(window, arguments))) {
      throwError("Expand Error:",
         "Faild expand your '" + em + "' already exists in window: object."
      );
   }
   for (var i = 0; i < arguments.length; i++) window[arguments[i]] = jQrony;
};


if (typeof define === "function" && define.amd) {
   define("jqrony", [], function () {
      return jQrony;
   });
}



/**
 * renjQusry override mean jQrony identifier and rename with a new name
 * ? Notice: renjQusry method rename only external name
 * @param {String} rename What do want to rename jQrony
 */
jQrony.renjQusry = function (rename) {
   window[rename] = jQrony;
   window.jQrony = window.$ = window._jQusry = window._$ = undefined;
};


/**
 * @param {Boolean} isDisabled true: for disabled jQrony always and after
 * cannot use jQrony or jQrony methods. if pass 
 * false: enabled again jQrony and access easily jQrony or jQrony methods
 */
window.disabled = jQrony.disabled = function disabled(isDisabled) {
   if (isDisabled === true || isDisabled == null) {
      // Delete all jQrony identifier
      delete window.$
      delete window._jQusry
      delete window._$
      delete window.jQrony
   } else {
      window.jQrony = window.$ = window._jQusry = window._$ = jQrony;
   }
};



// Attach/Extend jQrony Library with identifier $ and Expose jQrony and $ identifier
if (typeof noGlobal === "undefined") {
   window.jQrony = window.$ = window._jQrony = window._$ = jQrony;
}



return jQrony;
});