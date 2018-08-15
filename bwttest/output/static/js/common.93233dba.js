/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bwttest/view/common/common.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bwttest/node_modules/babel-polyfill/lib/index.js":
/*!**********************************************************!*\
  !*** ./bwttest/node_modules/babel-polyfill/lib/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n__webpack_require__(/*! core-js/shim */ \"./bwttest/node_modules/core-js/shim.js\");\n\n__webpack_require__(/*! regenerator-runtime/runtime */ \"./bwttest/node_modules/regenerator-runtime/runtime.js\");\n\n__webpack_require__(/*! core-js/fn/regexp/escape */ \"./bwttest/node_modules/core-js/fn/regexp/escape.js\");\n\nif (global._babelPolyfill) {\n  throw new Error(\"only one instance of babel-polyfill is allowed\");\n}\nglobal._babelPolyfill = true;\n\nvar DEFINE_PROPERTY = \"defineProperty\";\nfunction define(O, key, value) {\n  O[key] || Object[DEFINE_PROPERTY](O, key, {\n    writable: true,\n    configurable: true,\n    value: value\n  });\n}\n\ndefine(String.prototype, \"padLeft\", \"\".padStart);\ndefine(String.prototype, \"padRight\", \"\".padEnd);\n\n\"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill\".split(\",\").forEach(function (key) {\n  [][key] && define(Array, key, Function.call.bind([][key]));\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./bwttest/node_modules/babel-polyfill/lib/index.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/fn/regexp/escape.js":
/*!**********************************************************!*\
  !*** ./bwttest/node_modules/core-js/fn/regexp/escape.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../../modules/core.regexp.escape */ \"./bwttest/node_modules/core-js/modules/core.regexp.escape.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./bwttest/node_modules/core-js/modules/_core.js\").RegExp.escape;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/fn/regexp/escape.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_a-number-value.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_a-number-value.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar cof = __webpack_require__(/*! ./_cof */ \"./bwttest/node_modules/core-js/modules/_cof.js\");\nmodule.exports = function (it, msg) {\n  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);\n  return +it;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_a-number-value.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"./bwttest/node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {\n    throw TypeError(name + ': incorrect invocation!');\n  }return it;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_an-instance.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_array-copy-within.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_array-copy-within.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\n\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./bwttest/node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {\n  var O = toObject(this);\n  var len = toLength(O.length);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];else delete O[to];\n    to += inc;\n    from += inc;\n  }return O;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_array-copy-within.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_array-fill.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_array-fill.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\n\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./bwttest/node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function fill(value /* , start = 0, end = @length */) {\n  var O = toObject(this);\n  var length = toLength(O.length);\n  var aLen = arguments.length;\n  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);\n  var end = aLen > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n  while (endPos > index) {\n    O[index++] = value;\n  }return O;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_array-fill.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./bwttest/node_modules/core-js/modules/_for-of.js\");\n\nmodule.exports = function (iter, ITERATOR) {\n  var result = [];\n  forOf(iter, false, result.push, result, ITERATOR);\n  return result;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_array-from-iterable.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./bwttest/node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./bwttest/node_modules/core-js/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n      // Array#indexOf ignores holes, Array#includes - not\n    } else for (; length > index; index++) {\n      if (IS_INCLUDES || index in O) {\n        if (O[index] === el) return IS_INCLUDES || index || 0;\n      }\n    }return !IS_INCLUDES && -1;\n  };\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./bwttest/node_modules/core-js/modules/_ctx.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./bwttest/node_modules/core-js/modules/_iobject.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar asc = __webpack_require__(/*! ./_array-species-create */ \"./bwttest/node_modules/core-js/modules/_array-species-create.js\");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (; length > index; index++) {\n      if (NO_HOLES || index in self) {\n        val = self[index];\n        res = f(val, index, O);\n        if (TYPE) {\n          if (IS_MAP) result[index] = res; // map\n          else if (res) switch (TYPE) {\n              case 3:\n                return true; // some\n              case 5:\n                return val; // find\n              case 6:\n                return index; // findIndex\n              case 2:\n                result.push(val); // filter\n            } else if (IS_EVERY) return false; // every\n        }\n      }\n    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_array-methods.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_array-reduce.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_array-reduce.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./bwttest/node_modules/core-js/modules/_iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = function (that, callbackfn, aLen, memo, isRight) {\n  aFunction(callbackfn);\n  var O = toObject(that);\n  var self = IObject(O);\n  var length = toLength(O.length);\n  var index = isRight ? length - 1 : 0;\n  var i = isRight ? -1 : 1;\n  if (aLen < 2) for (;;) {\n    if (index in self) {\n      memo = self[index];\n      index += i;\n      break;\n    }\n    index += i;\n    if (isRight ? index < 0 : length <= index) {\n      throw TypeError('Reduce of empty array with no initial value');\n    }\n  }\n  for (; isRight ? index >= 0 : length > index; index += i) {\n    if (index in self) {\n      memo = callbackfn(memo, self[index], index, O);\n    }\n  }return memo;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_array-reduce.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./bwttest/node_modules/core-js/modules/_is-array.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  }return C === undefined ? Array : C;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_array-species-constructor.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ \"./bwttest/node_modules/core-js/modules/_array-species-constructor.js\");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_array-species-create.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_bind.js":
/*!*******************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_bind.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./bwttest/node_modules/core-js/modules/_invoke.js\");\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function construct(F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) {\n      n[i] = 'a[' + i + ']';\n    } // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  }return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function bound() /* args... */{\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_bind.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./bwttest/node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () {\n  return arguments;\n}()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function tryGet(it, key) {\n  try {\n    return it[key];\n  } catch (e) {/* empty */}\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n  // @@toStringTag case\n  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n  // builtinTag case\n  : ARG ? cof(O)\n  // ES3 arguments fallback\n  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_cof.js":
/*!******************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\").f;\nvar create = __webpack_require__(/*! ./_object-create */ \"./bwttest/node_modules/core-js/modules/_object-create.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./bwttest/node_modules/core-js/modules/_redefine-all.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./bwttest/node_modules/core-js/modules/_ctx.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./bwttest/node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./bwttest/node_modules/core-js/modules/_for-of.js\");\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ \"./bwttest/node_modules/core-js/modules/_iter-define.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./bwttest/node_modules/core-js/modules/_iter-step.js\");\nvar setSpecies = __webpack_require__(/*! ./_set-species */ \"./bwttest/node_modules/core-js/modules/_set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\");\nvar fastKey = __webpack_require__(/*! ./_meta */ \"./bwttest/node_modules/core-js/modules/_meta.js\").fastKey;\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./bwttest/node_modules/core-js/modules/_validate-collection.js\");\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function getEntry(that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME; // collection type\n      that._i = create(null); // index\n      that._f = undefined; // first entry\n      that._l = undefined; // last entry\n      that[SIZE] = 0; // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function _delete(key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        }return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) {\n            entry = entry.p;\n          }\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function get() {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function def(that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n      // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key, // <- key\n        v: value, // <- value\n        p: prev = that._l, // <- previous entry\n        n: undefined, // <- next entry\n        r: false // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== 'F') that._i[index] = entry;\n    }return that;\n  },\n  getEntry: getEntry,\n  setStrong: function setStrong(C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind; // kind\n      this._l = undefined; // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) {\n        entry = entry.p;\n      } // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_collection-strong.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar classof = __webpack_require__(/*! ./_classof */ \"./bwttest/node_modules/core-js/modules/_classof.js\");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./bwttest/node_modules/core-js/modules/_array-from-iterable.js\");\nmodule.exports = function (NAME) {\n  return function toJSON() {\n    if (classof(this) != NAME) throw TypeError(NAME + \"#toJSON isn't generic\");\n    return from(this);\n  };\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_collection-to-json.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_collection-weak.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_collection-weak.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./bwttest/node_modules/core-js/modules/_redefine-all.js\");\nvar getWeak = __webpack_require__(/*! ./_meta */ \"./bwttest/node_modules/core-js/modules/_meta.js\").getWeak;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./bwttest/node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./bwttest/node_modules/core-js/modules/_for-of.js\");\nvar createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./bwttest/node_modules/core-js/modules/_array-methods.js\");\nvar $has = __webpack_require__(/*! ./_has */ \"./bwttest/node_modules/core-js/modules/_has.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./bwttest/node_modules/core-js/modules/_validate-collection.js\");\nvar arrayFind = createArrayMethod(5);\nvar arrayFindIndex = createArrayMethod(6);\nvar id = 0;\n\n// fallback for uncaught frozen keys\nvar uncaughtFrozenStore = function uncaughtFrozenStore(that) {\n  return that._l || (that._l = new UncaughtFrozenStore());\n};\nvar UncaughtFrozenStore = function UncaughtFrozenStore() {\n  this.a = [];\n};\nvar findUncaughtFrozen = function findUncaughtFrozen(store, key) {\n  return arrayFind(store.a, function (it) {\n    return it[0] === key;\n  });\n};\nUncaughtFrozenStore.prototype = {\n  get: function get(key) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) return entry[1];\n  },\n  has: function has(key) {\n    return !!findUncaughtFrozen(this, key);\n  },\n  set: function set(key, value) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) entry[1] = value;else this.a.push([key, value]);\n  },\n  'delete': function _delete(key) {\n    var index = arrayFindIndex(this.a, function (it) {\n      return it[0] === key;\n    });\n    if (~index) this.a.splice(index, 1);\n    return !!~index;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME; // collection type\n      that._i = id++; // collection id\n      that._l = undefined; // leak store for uncaught frozen objects\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.3.3.2 WeakMap.prototype.delete(key)\n      // 23.4.3.3 WeakSet.prototype.delete(value)\n      'delete': function _delete(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);\n        return data && $has(data, this._i) && delete data[this._i];\n      },\n      // 23.3.3.4 WeakMap.prototype.has(key)\n      // 23.4.3.4 WeakSet.prototype.has(value)\n      has: function has(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);\n        return data && $has(data, this._i);\n      }\n    });\n    return C;\n  },\n  def: function def(that, key, value) {\n    var data = getWeak(anObject(key), true);\n    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;\n    return that;\n  },\n  ufstore: uncaughtFrozenStore\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_collection-weak.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./bwttest/node_modules/core-js/modules/_redefine.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./bwttest/node_modules/core-js/modules/_redefine-all.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./bwttest/node_modules/core-js/modules/_meta.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./bwttest/node_modules/core-js/modules/_for-of.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./bwttest/node_modules/core-js/modules/_an-instance.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\nvar $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./bwttest/node_modules/core-js/modules/_iter-detect.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./bwttest/node_modules/core-js/modules/_set-to-string-tag.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./bwttest/node_modules/core-js/modules/_inherit-if-required.js\");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n  var fixMethod = function fixMethod(KEY) {\n    var fn = proto[KEY];\n    redefine(proto, KEY, KEY == 'delete' ? function (a) {\n      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n    } : KEY == 'has' ? function has(a) {\n      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n    } : KEY == 'get' ? function get(a) {\n      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);\n    } : KEY == 'add' ? function add(a) {\n      fn.call(this, a === 0 ? 0 : a);return this;\n    } : function set(a, b) {\n      fn.call(this, a === 0 ? 0 : a, b);return this;\n    });\n  };\n  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    var instance = new C();\n    // early implementations not supports chaining\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;\n    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false\n    var THROWS_ON_PRIMITIVES = fails(function () {\n      instance.has(1);\n    });\n    // most early implementations doesn't supports iterables, most modern - not close it correctly\n    var ACCEPT_ITERABLES = $iterDetect(function (iter) {\n      new C(iter);\n    }); // eslint-disable-line no-new\n    // for early implementations -0 and +0 not the same\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new C();\n      var index = 5;\n      while (index--) {\n        $instance[ADDER](index, index);\n      }return !$instance.has(-0);\n    });\n    if (!ACCEPT_ITERABLES) {\n      C = wrapper(function (target, iterable) {\n        anInstance(target, C, NAME);\n        var that = inheritIfRequired(new Base(), target, C);\n        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n        return that;\n      });\n      C.prototype = proto;\n      proto.constructor = C;\n    }\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);\n    // weak collections should not contains .clear method\n    if (IS_WEAK && proto.clear) delete proto.clear;\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F * (C != Base), O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_collection.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_core.js":
/*!*******************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar core = module.exports = { version: '2.5.7' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./bwttest/node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1:\n      return function (a) {\n        return fn.call(that, a);\n      };\n    case 2:\n      return function (a, b) {\n        return fn.call(that, a, b);\n      };\n    case 3:\n      return function (a, b, c) {\n        return fn.call(that, a, b, c);\n      };\n  }\n  return function () /* ...args */{\n    return fn.apply(that, arguments);\n  };\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_date-to-iso-string.js":
/*!*********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\nvar getTime = Date.prototype.getTime;\nvar $toISOString = Date.prototype.toISOString;\n\nvar lz = function lz(num) {\n  return num > 9 ? num : '0' + num;\n};\n\n// PhantomJS / old WebKit has a broken implementations\nmodule.exports = fails(function () {\n  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  $toISOString.call(new Date(NaN));\n}) ? function toISOString() {\n  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');\n  var d = this;\n  var y = d.getUTCFullYear();\n  var m = d.getUTCMilliseconds();\n  var s = y < 0 ? '-' : y > 9999 ? '+' : '';\n  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';\n} : $toISOString;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_date-to-iso-string.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_date-to-primitive.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_date-to-primitive.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./bwttest/node_modules/core-js/modules/_to-primitive.js\");\nvar NUMBER = 'number';\n\nmodule.exports = function (hint) {\n  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');\n  return toPrimitive(anObject(this), hint != NUMBER);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_date-to-primitive.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function get() {\n      return 7;\n    } }).a != 7;\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// IE 8- don't enum bug keys\nmodule.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./bwttest/node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./bwttest/node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./bwttest/node_modules/core-js/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) {\n      if (isEnum.call(it, key = symbols[i++])) result.push(key);\n    }\n  }return result;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_export.js":
/*!*********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./bwttest/node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./bwttest/node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./bwttest/node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./bwttest/node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function $export(type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1; // forced\n$export.G = 2; // global\n$export.S = 4; // static\n$export.P = 8; // proto\n$export.B = 16; // bind\n$export.W = 32; // wrap\n$export.U = 64; // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_fails-is-regexp.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_fails-is-regexp.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar MATCH = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (KEY) {\n  var re = /./;\n  try {\n    '/./'[KEY](re);\n  } catch (e) {\n    try {\n      re[MATCH] = false;\n      return !'/./'[KEY](re);\n    } catch (f) {/* empty */}\n  }return true;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_fails-is-regexp.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_fails.js":
/*!********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_fix-re-wks.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_fix-re-wks.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar hide = __webpack_require__(/*! ./_hide */ \"./bwttest/node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./bwttest/node_modules/core-js/modules/_redefine.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./bwttest/node_modules/core-js/modules/_defined.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\");\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n  var fns = exec(defined, SYMBOL, ''[KEY]);\n  var strfn = fns[0];\n  var rxfn = fns[1];\n  if (fails(function () {\n    var O = {};\n    O[SYMBOL] = function () {\n      return 7;\n    };\n    return ''[KEY](O) != 7;\n  })) {\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n    // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n    ? function (string, arg) {\n      return rxfn.call(string, this, arg);\n    }\n    // 21.2.5.6 RegExp.prototype[@@match](string)\n    // 21.2.5.9 RegExp.prototype[@@search](string)\n    : function (string) {\n      return rxfn.call(string, this);\n    });\n  }\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_flags.js":
/*!********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_flatten-into-array.js":
/*!*********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_flatten-into-array.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray\n\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./bwttest/node_modules/core-js/modules/_is-array.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./bwttest/node_modules/core-js/modules/_ctx.js\");\nvar IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('isConcatSpreadable');\n\nfunction flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;\n  var element, spreadable;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n\n      spreadable = false;\n      if (isObject(element)) {\n        spreadable = element[IS_CONCAT_SPREADABLE];\n        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);\n      }\n\n      if (spreadable && depth > 0) {\n        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1fffffffffffff) throw TypeError();\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n    sourceIndex++;\n  }\n  return targetIndex;\n}\n\nmodule.exports = flattenIntoArray;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_flatten-into-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./bwttest/node_modules/core-js/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./bwttest/node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./bwttest/node_modules/core-js/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./bwttest/node_modules/core-js/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () {\n    return iterable;\n  } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\n_exports.BREAK = BREAK;\n_exports.RETURN = RETURN;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_for-of.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_global.js":
/*!*********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self\n// eslint-disable-next-line no-new-func\n: Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_has.js":
/*!******************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./bwttest/node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_html.js":
/*!*******************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar document = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = !__webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./bwttest/node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function get() {\n      return 7;\n    } }).a != 7;\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_inherit-if-required.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_inherit-if-required.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar setPrototypeOf = __webpack_require__(/*! ./_set-proto */ \"./bwttest/node_modules/core-js/modules/_set-proto.js\").set;\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  }return that;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_inherit-if-required.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n                  var un = that === undefined;\n                  switch (args.length) {\n                                    case 0:\n                                                      return un ? fn() : fn.call(that);\n                                    case 1:\n                                                      return un ? fn(args[0]) : fn.call(that, args[0]);\n                                    case 2:\n                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);\n                                    case 3:\n                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);\n                                    case 4:\n                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);\n                  }return fn.apply(that, args);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_invoke.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./bwttest/node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./bwttest/node_modules/core-js/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./bwttest/node_modules/core-js/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_is-integer.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_is-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.3 Number.isInteger(number)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar floor = Math.floor;\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_is-integer.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nmodule.exports = function (it) {\n  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_is-regexp.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_is-regexp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.2.8 IsRegExp(argument)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./bwttest/node_modules/core-js/modules/_cof.js\");\nvar MATCH = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_is-regexp.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n    // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar create = __webpack_require__(/*! ./_object-create */ \"./bwttest/node_modules/core-js/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./bwttest/node_modules/core-js/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./bwttest/node_modules/core-js/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./bwttest/node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('iterator'), function () {\n  return this;\n});\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./bwttest/node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./bwttest/node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./bwttest/node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./bwttest/node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./bwttest/node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./bwttest/node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./bwttest/node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function returnThis() {\n  return this;\n};\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function getMethod(kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS:\n        return function keys() {\n          return new Constructor(this, kind);\n        };\n      case VALUES:\n        return function values() {\n          return new Constructor(this, kind);\n        };\n    }return function entries() {\n      return new Constructor(this, kind);\n    };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() {\n      return $native.call(this);\n    };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () {\n    SAFE_CLOSING = true;\n  };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () {\n    throw 2;\n  });\n} catch (e) {/* empty */}\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () {\n      return { done: safe = true };\n    };\n    arr[ITERATOR] = function () {\n      return iter;\n    };\n    exec(arr);\n  } catch (e) {/* empty */}\n  return safe;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_library.js":
/*!**********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = false;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_math-expm1.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_math-expm1.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.14 Math.expm1(x)\nvar $expm1 = Math.expm1;\nmodule.exports = !$expm1\n// Old FF bug\n|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168\n// Tor Browser bug\n|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {\n  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;\n} : $expm1;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_math-expm1.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_math-fround.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_math-fround.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.16 Math.fround(x)\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./bwttest/node_modules/core-js/modules/_math-sign.js\");\nvar pow = Math.pow;\nvar EPSILON = pow(2, -52);\nvar EPSILON32 = pow(2, -23);\nvar MAX32 = pow(2, 127) * (2 - EPSILON32);\nvar MIN32 = pow(2, -126);\n\nvar roundTiesToEven = function roundTiesToEven(n) {\n  return n + 1 / EPSILON - 1 / EPSILON;\n};\n\nmodule.exports = Math.fround || function fround(x) {\n  var $abs = Math.abs(x);\n  var $sign = sign(x);\n  var a, result;\n  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;\n  a = (1 + EPSILON32 / EPSILON) * $abs;\n  result = a - (a - $abs);\n  // eslint-disable-next-line no-self-compare\n  if (result > MAX32 || result != result) return $sign * Infinity;\n  return $sign * result;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_math-fround.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_math-log1p.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_math-log1p.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.20 Math.log1p(x)\nmodule.exports = Math.log1p || function log1p(x) {\n  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_math-log1p.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_math-scale.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_math-scale.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nmodule.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {\n  if (arguments.length === 0\n  // eslint-disable-next-line no-self-compare\n  || x != x\n  // eslint-disable-next-line no-self-compare\n  || inLow != inLow\n  // eslint-disable-next-line no-self-compare\n  || inHigh != inHigh\n  // eslint-disable-next-line no-self-compare\n  || outLow != outLow\n  // eslint-disable-next-line no-self-compare\n  || outHigh != outHigh) return NaN;\n  if (x === Infinity || x === -Infinity) return x;\n  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_math-scale.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_math-sign.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_math-sign.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.28 Math.sign(x)\nmodule.exports = Math.sign || function sign(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_math-sign.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar META = __webpack_require__(/*! ./_uid */ \"./bwttest/node_modules/core-js/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./bwttest/node_modules/core-js/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function setMeta(it) {\n  setDesc(it, META, { value: {\n      i: 'O' + ++id, // object ID\n      w: {} // weak collections IDs\n    } });\n};\nvar fastKey = function fastKey(it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n    // return object ID\n  }return it[META].i;\n};\nvar getWeak = function getWeak(it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n    // return hash weak collections IDs\n  }return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function onFreeze(it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_metadata.js":
/*!***********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_metadata.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar Map = __webpack_require__(/*! ./es6.map */ \"./bwttest/node_modules/core-js/modules/es6.map.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./bwttest/node_modules/core-js/modules/_shared.js\")('metadata');\nvar store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ \"./bwttest/node_modules/core-js/modules/es6.weak-map.js\"))());\n\nvar getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {\n  var targetMetadata = store.get(target);\n  if (!targetMetadata) {\n    if (!create) return undefined;\n    store.set(target, targetMetadata = new Map());\n  }\n  var keyMetadata = targetMetadata.get(targetKey);\n  if (!keyMetadata) {\n    if (!create) return undefined;\n    targetMetadata.set(targetKey, keyMetadata = new Map());\n  }return keyMetadata;\n};\nvar ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);\n};\nvar ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);\n};\nvar ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {\n  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);\n};\nvar ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {\n  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);\n  var keys = [];\n  if (metadataMap) metadataMap.forEach(function (_, key) {\n    keys.push(key);\n  });\n  return keys;\n};\nvar toMetaKey = function toMetaKey(it) {\n  return it === undefined || (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : String(it);\n};\nvar exp = function exp(O) {\n  $export($export.S, 'Reflect', O);\n};\n\nmodule.exports = {\n  store: store,\n  map: getOrCreateMetadataMap,\n  has: ordinaryHasOwnMetadata,\n  get: ordinaryGetOwnMetadata,\n  set: ordinaryDefineOwnMetadata,\n  keys: ordinaryOwnMetadataKeys,\n  key: toMetaKey,\n  exp: exp\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_metadata.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"./bwttest/node_modules/core-js/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./bwttest/node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function flush() {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();else last = undefined;\n        throw e;\n      }\n    }last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function notify() {\n      process.nextTick(flush);\n    };\n    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function notify() {\n      node.data = toggle = !toggle;\n    };\n    // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function notify() {\n      promise.then(flush);\n    };\n    // for other environments - macrotask based on:\n    // - setImmediate\n    // - MessageChannel\n    // - window.postMessag\n    // - onreadystatechange\n    // - setTimeout\n  } else {\n    notify = function notify() {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    }last = task;\n  };\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_microtask.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\n\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./bwttest/node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./bwttest/node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./bwttest/node_modules/core-js/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./bwttest/node_modules/core-js/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) {\n    B[k] = k;\n  });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) {\n  // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\n    }\n  }return T;\n} : $assign;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-assign.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./bwttest/node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./bwttest/node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./bwttest/node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function Empty() {/* empty */};\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar _createDict = function createDict() {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./bwttest/node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./bwttest/node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  _createDict = iframeDocument.F;\n  while (i--) {\n    delete _createDict[PROTOTYPE][enumBugKeys[i]];\n  }return _createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = _createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./bwttest/node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./bwttest/node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) {/* empty */}\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./bwttest/node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) {\n    dP.f(O, P = keys[i++], Properties[P]);\n  }return O;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-forced-pam.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-forced-pam.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Forced replacement prototype accessors methods\n\nmodule.exports = __webpack_require__(/*! ./_library */ \"./bwttest/node_modules/core-js/modules/_library.js\") || !__webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  var K = Math.random();\n  // In FF throws only define methods\n  // eslint-disable-next-line no-undef, no-useless-call\n  __defineSetter__.call(null, K, function () {/* empty */});\n  delete __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\")[K];\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-forced-pam.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./bwttest/node_modules/core-js/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./bwttest/node_modules/core-js/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./bwttest/node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./bwttest/node_modules/core-js/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./bwttest/node_modules/core-js/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./bwttest/node_modules/core-js/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) {/* empty */}\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./bwttest/node_modules/core-js/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./bwttest/node_modules/core-js/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function getWindowNames(it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./bwttest/node_modules/core-js/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./bwttest/node_modules/core-js/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.f = Object.getOwnPropertySymbols;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./bwttest/node_modules/core-js/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./bwttest/node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  }return O instanceof Object ? ObjectProto : null;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar has = __webpack_require__(/*! ./_has */ \"./bwttest/node_modules/core-js/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./bwttest/node_modules/core-js/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./bwttest/node_modules/core-js/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./bwttest/node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) {\n    if (key != IE_PROTO) has(O, key) && result.push(key);\n  } // Don't enum bug & hidden keys\n  while (names.length > i) {\n    if (has(O, key = names[i++])) {\n      ~arrayIndexOf(result, key) || result.push(key);\n    }\n  }return result;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./bwttest/node_modules/core-js/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./bwttest/node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.f = {}.propertyIsEnumerable;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./bwttest/node_modules/core-js/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () {\n    fn(1);\n  }), 'Object', exp);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-sap.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_object-to-array.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_object-to-array.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./bwttest/node_modules/core-js/modules/_object-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./bwttest/node_modules/core-js/modules/_to-iobject.js\");\nvar isEnum = __webpack_require__(/*! ./_object-pie */ \"./bwttest/node_modules/core-js/modules/_object-pie.js\").f;\nmodule.exports = function (isEntries) {\n  return function (it) {\n    var O = toIObject(it);\n    var keys = getKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) {\n      if (isEnum.call(O, key = keys[i++])) {\n        result.push(isEntries ? [key, O[key]] : O[key]);\n      }\n    }return result;\n  };\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_object-to-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_own-keys.js":
/*!***********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_own-keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// all object keys, includes non-enumerable and symbols\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./bwttest/node_modules/core-js/modules/_object-gopn.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./bwttest/node_modules/core-js/modules/_object-gops.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar Reflect = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\").Reflect;\nmodule.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {\n  var keys = gOPN.f(anObject(it));\n  var getSymbols = gOPS.f;\n  return getSymbols ? keys.concat(getSymbols(it)) : keys;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_own-keys.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_parse-float.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $parseFloat = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\").parseFloat;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./bwttest/node_modules/core-js/modules/_string-trim.js\").trim;\n\nmodule.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ \"./bwttest/node_modules/core-js/modules/_string-ws.js\") + '-0') !== -Infinity ? function parseFloat(str) {\n  var string = $trim(String(str), 3);\n  var result = $parseFloat(string);\n  return result === 0 && string.charAt(0) == '-' ? -0 : result;\n} : $parseFloat;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_parse-float.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_parse-int.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $parseInt = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\").parseInt;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./bwttest/node_modules/core-js/modules/_string-trim.js\").trim;\nvar ws = __webpack_require__(/*! ./_string-ws */ \"./bwttest/node_modules/core-js/modules/_string-ws.js\");\nvar hex = /^[-+]?0[xX]/;\n\nmodule.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {\n  var string = $trim(String(str), 3);\n  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));\n} : $parseInt;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_parse-int.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_perform.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./bwttest/node_modules/core-js/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_promise-resolve.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./bwttest/node_modules/core-js/modules/_redefine.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    redefine(target, key, src[key], safe);\n  }return target;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_redefine-all.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./bwttest/node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./bwttest/node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./bwttest/node_modules/core-js/modules/_uid.js\")('src');\nvar TO_STRING = 'toString';\nvar $toString = Function[TO_STRING];\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./bwttest/node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_replacer.js":
/*!***********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_replacer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (regExp, replace) {\n  var replacer = replace === Object(replace) ? function (part) {\n    return replace[part];\n  } : replace;\n  return function (it) {\n    return String(it).replace(regExp, replacer);\n  };\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_replacer.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_same-value.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_same-value.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.2.9 SameValue(x, y)\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_same-value.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./bwttest/node_modules/core-js/modules/_ctx.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./bwttest/node_modules/core-js/modules/_for-of.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {\n      var mapFn = arguments[1];\n      var mapping, A, n, cb;\n      aFunction(this);\n      mapping = mapFn !== undefined;\n      if (mapping) aFunction(mapFn);\n      if (source == undefined) return new this();\n      A = [];\n      if (mapping) {\n        n = 0;\n        cb = ctx(mapFn, arguments[2], 2);\n        forOf(source, false, function (nextItem) {\n          A.push(cb(nextItem, n++));\n        });\n      } else {\n        forOf(source, false, A.push, A);\n      }\n      return new this(A);\n    } });\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_set-collection-from.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { of: function of() {\n      var length = arguments.length;\n      var A = new Array(length);\n      while (length--) {\n        A[length] = arguments[length];\n      }return new this(A);\n    } });\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_set-collection-of.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar check = function check(O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n  function (test, buggy, set) {\n    try {\n      set = __webpack_require__(/*! ./_ctx */ \"./bwttest/node_modules/core-js/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./bwttest/node_modules/core-js/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n      set(test, []);\n      buggy = !(test instanceof Array);\n    } catch (e) {\n      buggy = true;\n    }\n    return function setPrototypeOf(O, proto) {\n      check(O, proto);\n      if (buggy) O.__proto__ = proto;else set(O, proto);\n      return O;\n    };\n  }({}, false) : undefined),\n  check: check\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_set-proto.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function get() {\n      return this;\n    }\n  });\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_set-species.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar def = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./bwttest/node_modules/core-js/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar shared = __webpack_require__(/*! ./_shared */ \"./bwttest/node_modules/core-js/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./bwttest/node_modules/core-js/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar core = __webpack_require__(/*! ./_core */ \"./bwttest/node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./bwttest/node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_species-constructor.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_strict-method.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_strict-method.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () {/* empty */}, 1) : method.call(null);\n  });\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_strict-method.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./bwttest/node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./bwttest/node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_string-context.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_string-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// helper for String#{startsWith, endsWith, includes}\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./bwttest/node_modules/core-js/modules/_is-regexp.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./bwttest/node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, searchString, NAME) {\n  if (isRegExp(searchString)) throw TypeError('String#' + NAME + \" doesn't accept regex!\");\n  return String(defined(that));\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_string-context.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_string-html.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_string-html.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./bwttest/node_modules/core-js/modules/_defined.js\");\nvar quot = /\"/g;\n// B.2.3.2.1 CreateHTML(string, tag, attribute, value)\nvar createHTML = function createHTML(string, tag, attribute, value) {\n  var S = String(defined(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + String(value).replace(quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\nmodule.exports = function (NAME, exec) {\n  var O = {};\n  O[NAME] = exec(createHTML);\n  $export($export.P + $export.F * fails(function () {\n    var test = ''[NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  }), 'String', O);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_string-html.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_string-pad.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_string-pad.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/tc39/proposal-string-pad-start-end\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./bwttest/node_modules/core-js/modules/_string-repeat.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./bwttest/node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, maxLength, fillString, left) {\n  var S = String(defined(that));\n  var stringLength = S.length;\n  var fillStr = fillString === undefined ? ' ' : String(fillString);\n  var intMaxLength = toLength(maxLength);\n  if (intMaxLength <= stringLength || fillStr == '') return S;\n  var fillLen = intMaxLength - stringLength;\n  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));\n  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);\n  return left ? stringFiller + S : S + stringFiller;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_string-pad.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_string-repeat.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_string-repeat.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./bwttest/node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./bwttest/node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function repeat(count) {\n  var str = String(defined(this));\n  var res = '';\n  var n = toInteger(count);\n  if (n < 0 || n == Infinity) throw RangeError(\"Count can't be negative\");\n  for (; n > 0; (n >>>= 1) && (str += str)) {\n    if (n & 1) res += str;\n  }return res;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_string-repeat.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_string-trim.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_string-trim.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./bwttest/node_modules/core-js/modules/_defined.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"./bwttest/node_modules/core-js/modules/_string-ws.js\");\nvar space = '[' + spaces + ']';\nvar non = '\\u200B\\x85';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function exporter(KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_string-trim.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_string-ws.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_string-ws.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = '\\t\\n\\x0B\\f\\r \\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' + '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_string-ws.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_task.js":
/*!*******************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./bwttest/node_modules/core-js/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./bwttest/node_modules/core-js/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./bwttest/node_modules/core-js/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./bwttest/node_modules/core-js/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function run() {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function listener(event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) {\n      args.push(arguments[i++]);\n    }queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./bwttest/node_modules/core-js/modules/_cof.js\")(process) == 'process') {\n    defer = function defer(id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n    // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function defer(id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n    // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n    // Browsers with postMessage, skip WebWorkers\n    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function defer(id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n    // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function defer(id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n    // Rest old browsers\n  } else {\n    defer = function defer(id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_task.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./bwttest/node_modules/core-js/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_to-index.js":
/*!***********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_to-index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/ecma262/#sec-toindex\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./bwttest/node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toInteger(it);\n  var length = toLength(number);\n  if (number !== length) throw RangeError('Wrong length!');\n  return length;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_to-index.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./bwttest/node_modules/core-js/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./bwttest/node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./bwttest/node_modules/core-js/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./bwttest/node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_typed-array.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_typed-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nif (__webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\")) {\n  var LIBRARY = __webpack_require__(/*! ./_library */ \"./bwttest/node_modules/core-js/modules/_library.js\");\n  var global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\n  var fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\n  var $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n  var $typed = __webpack_require__(/*! ./_typed */ \"./bwttest/node_modules/core-js/modules/_typed.js\");\n  var $buffer = __webpack_require__(/*! ./_typed-buffer */ \"./bwttest/node_modules/core-js/modules/_typed-buffer.js\");\n  var ctx = __webpack_require__(/*! ./_ctx */ \"./bwttest/node_modules/core-js/modules/_ctx.js\");\n  var anInstance = __webpack_require__(/*! ./_an-instance */ \"./bwttest/node_modules/core-js/modules/_an-instance.js\");\n  var propertyDesc = __webpack_require__(/*! ./_property-desc */ \"./bwttest/node_modules/core-js/modules/_property-desc.js\");\n  var hide = __webpack_require__(/*! ./_hide */ \"./bwttest/node_modules/core-js/modules/_hide.js\");\n  var redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./bwttest/node_modules/core-js/modules/_redefine-all.js\");\n  var toInteger = __webpack_require__(/*! ./_to-integer */ \"./bwttest/node_modules/core-js/modules/_to-integer.js\");\n  var toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\n  var toIndex = __webpack_require__(/*! ./_to-index */ \"./bwttest/node_modules/core-js/modules/_to-index.js\");\n  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./bwttest/node_modules/core-js/modules/_to-absolute-index.js\");\n  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./bwttest/node_modules/core-js/modules/_to-primitive.js\");\n  var has = __webpack_require__(/*! ./_has */ \"./bwttest/node_modules/core-js/modules/_has.js\");\n  var classof = __webpack_require__(/*! ./_classof */ \"./bwttest/node_modules/core-js/modules/_classof.js\");\n  var isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\n  var toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\n  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./bwttest/node_modules/core-js/modules/_is-array-iter.js\");\n  var create = __webpack_require__(/*! ./_object-create */ \"./bwttest/node_modules/core-js/modules/_object-create.js\");\n  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./bwttest/node_modules/core-js/modules/_object-gpo.js\");\n  var gOPN = __webpack_require__(/*! ./_object-gopn */ \"./bwttest/node_modules/core-js/modules/_object-gopn.js\").f;\n  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./bwttest/node_modules/core-js/modules/core.get-iterator-method.js\");\n  var uid = __webpack_require__(/*! ./_uid */ \"./bwttest/node_modules/core-js/modules/_uid.js\");\n  var wks = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\");\n  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./bwttest/node_modules/core-js/modules/_array-methods.js\");\n  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ \"./bwttest/node_modules/core-js/modules/_array-includes.js\");\n  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./bwttest/node_modules/core-js/modules/_species-constructor.js\");\n  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ \"./bwttest/node_modules/core-js/modules/es6.array.iterator.js\");\n  var Iterators = __webpack_require__(/*! ./_iterators */ \"./bwttest/node_modules/core-js/modules/_iterators.js\");\n  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./bwttest/node_modules/core-js/modules/_iter-detect.js\");\n  var setSpecies = __webpack_require__(/*! ./_set-species */ \"./bwttest/node_modules/core-js/modules/_set-species.js\");\n  var arrayFill = __webpack_require__(/*! ./_array-fill */ \"./bwttest/node_modules/core-js/modules/_array-fill.js\");\n  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ \"./bwttest/node_modules/core-js/modules/_array-copy-within.js\");\n  var $DP = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\");\n  var $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./bwttest/node_modules/core-js/modules/_object-gopd.js\");\n  var dP = $DP.f;\n  var gOPD = $GOPD.f;\n  var RangeError = global.RangeError;\n  var TypeError = global.TypeError;\n  var Uint8Array = global.Uint8Array;\n  var ARRAY_BUFFER = 'ArrayBuffer';\n  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;\n  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';\n  var PROTOTYPE = 'prototype';\n  var ArrayProto = Array[PROTOTYPE];\n  var $ArrayBuffer = $buffer.ArrayBuffer;\n  var $DataView = $buffer.DataView;\n  var arrayForEach = createArrayMethod(0);\n  var arrayFilter = createArrayMethod(2);\n  var arraySome = createArrayMethod(3);\n  var arrayEvery = createArrayMethod(4);\n  var arrayFind = createArrayMethod(5);\n  var arrayFindIndex = createArrayMethod(6);\n  var arrayIncludes = createArrayIncludes(true);\n  var arrayIndexOf = createArrayIncludes(false);\n  var arrayValues = ArrayIterators.values;\n  var arrayKeys = ArrayIterators.keys;\n  var arrayEntries = ArrayIterators.entries;\n  var arrayLastIndexOf = ArrayProto.lastIndexOf;\n  var arrayReduce = ArrayProto.reduce;\n  var arrayReduceRight = ArrayProto.reduceRight;\n  var arrayJoin = ArrayProto.join;\n  var arraySort = ArrayProto.sort;\n  var arraySlice = ArrayProto.slice;\n  var arrayToString = ArrayProto.toString;\n  var arrayToLocaleString = ArrayProto.toLocaleString;\n  var ITERATOR = wks('iterator');\n  var TAG = wks('toStringTag');\n  var TYPED_CONSTRUCTOR = uid('typed_constructor');\n  var DEF_CONSTRUCTOR = uid('def_constructor');\n  var ALL_CONSTRUCTORS = $typed.CONSTR;\n  var TYPED_ARRAY = $typed.TYPED;\n  var VIEW = $typed.VIEW;\n  var WRONG_LENGTH = 'Wrong length!';\n\n  var $map = createArrayMethod(1, function (O, length) {\n    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);\n  });\n\n  var LITTLE_ENDIAN = fails(function () {\n    // eslint-disable-next-line no-undef\n    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;\n  });\n\n  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {\n    new Uint8Array(1).set({});\n  });\n\n  var toOffset = function toOffset(it, BYTES) {\n    var offset = toInteger(it);\n    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');\n    return offset;\n  };\n\n  var validate = function validate(it) {\n    if (isObject(it) && TYPED_ARRAY in it) return it;\n    throw TypeError(it + ' is not a typed array!');\n  };\n\n  var allocate = function allocate(C, length) {\n    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {\n      throw TypeError('It is not a typed array constructor!');\n    }return new C(length);\n  };\n\n  var speciesFromList = function speciesFromList(O, list) {\n    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);\n  };\n\n  var fromList = function fromList(C, list) {\n    var index = 0;\n    var length = list.length;\n    var result = allocate(C, length);\n    while (length > index) {\n      result[index] = list[index++];\n    }return result;\n  };\n\n  var addGetter = function addGetter(it, key, internal) {\n    dP(it, key, { get: function get() {\n        return this._d[internal];\n      } });\n  };\n\n  var $from = function from(source /* , mapfn, thisArg */) {\n    var O = toObject(source);\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var iterFn = getIterFn(O);\n    var i, length, values, result, step, iterator;\n    if (iterFn != undefined && !isArrayIter(iterFn)) {\n      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {\n        values.push(step.value);\n      }O = values;\n    }\n    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);\n    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {\n      result[i] = mapping ? mapfn(O[i], i) : O[i];\n    }\n    return result;\n  };\n\n  var $of = function of() /* ...items */{\n    var index = 0;\n    var length = arguments.length;\n    var result = allocate(this, length);\n    while (length > index) {\n      result[index] = arguments[index++];\n    }return result;\n  };\n\n  // iOS Safari 6.x fails here\n  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {\n    arrayToLocaleString.call(new Uint8Array(1));\n  });\n\n  var $toLocaleString = function toLocaleString() {\n    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);\n  };\n\n  var proto = {\n    copyWithin: function copyWithin(target, start /* , end */) {\n      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    every: function every(callbackfn /* , thisArg */) {\n      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    fill: function fill(value /* , start, end */) {\n      // eslint-disable-line no-unused-vars\n      return arrayFill.apply(validate(this), arguments);\n    },\n    filter: function filter(callbackfn /* , thisArg */) {\n      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));\n    },\n    find: function find(predicate /* , thisArg */) {\n      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    findIndex: function findIndex(predicate /* , thisArg */) {\n      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    forEach: function forEach(callbackfn /* , thisArg */) {\n      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    indexOf: function indexOf(searchElement /* , fromIndex */) {\n      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    includes: function includes(searchElement /* , fromIndex */) {\n      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    join: function join(separator) {\n      // eslint-disable-line no-unused-vars\n      return arrayJoin.apply(validate(this), arguments);\n    },\n    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) {\n      // eslint-disable-line no-unused-vars\n      return arrayLastIndexOf.apply(validate(this), arguments);\n    },\n    map: function map(mapfn /* , thisArg */) {\n      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    reduce: function reduce(callbackfn /* , initialValue */) {\n      // eslint-disable-line no-unused-vars\n      return arrayReduce.apply(validate(this), arguments);\n    },\n    reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n      // eslint-disable-line no-unused-vars\n      return arrayReduceRight.apply(validate(this), arguments);\n    },\n    reverse: function reverse() {\n      var that = this;\n      var length = validate(that).length;\n      var middle = Math.floor(length / 2);\n      var index = 0;\n      var value;\n      while (index < middle) {\n        value = that[index];\n        that[index++] = that[--length];\n        that[length] = value;\n      }return that;\n    },\n    some: function some(callbackfn /* , thisArg */) {\n      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    sort: function sort(comparefn) {\n      return arraySort.call(validate(this), comparefn);\n    },\n    subarray: function subarray(begin, end) {\n      var O = validate(this);\n      var length = O.length;\n      var $begin = toAbsoluteIndex(begin, length);\n      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));\n    }\n  };\n\n  var $slice = function slice(start, end) {\n    return speciesFromList(this, arraySlice.call(validate(this), start, end));\n  };\n\n  var $set = function set(arrayLike /* , offset */) {\n    validate(this);\n    var offset = toOffset(arguments[1], 1);\n    var length = this.length;\n    var src = toObject(arrayLike);\n    var len = toLength(src.length);\n    var index = 0;\n    if (len + offset > length) throw RangeError(WRONG_LENGTH);\n    while (index < len) {\n      this[offset + index] = src[index++];\n    }\n  };\n\n  var $iterators = {\n    entries: function entries() {\n      return arrayEntries.call(validate(this));\n    },\n    keys: function keys() {\n      return arrayKeys.call(validate(this));\n    },\n    values: function values() {\n      return arrayValues.call(validate(this));\n    }\n  };\n\n  var isTAIndex = function isTAIndex(target, key) {\n    return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);\n  };\n  var $getDesc = function getOwnPropertyDescriptor(target, key) {\n    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);\n  };\n  var $setDesc = function defineProperty(target, key, desc) {\n    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')\n    // TODO: add validation descriptor w/o calling accessors\n    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {\n      target[key] = desc.value;\n      return target;\n    }return dP(target, key, desc);\n  };\n\n  if (!ALL_CONSTRUCTORS) {\n    $GOPD.f = $getDesc;\n    $DP.f = $setDesc;\n  }\n\n  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {\n    getOwnPropertyDescriptor: $getDesc,\n    defineProperty: $setDesc\n  });\n\n  if (fails(function () {\n    arrayToString.call({});\n  })) {\n    arrayToString = arrayToLocaleString = function toString() {\n      return arrayJoin.call(this);\n    };\n  }\n\n  var $TypedArrayPrototype$ = redefineAll({}, proto);\n  redefineAll($TypedArrayPrototype$, $iterators);\n  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);\n  redefineAll($TypedArrayPrototype$, {\n    slice: $slice,\n    set: $set,\n    constructor: function constructor() {/* noop */},\n    toString: arrayToString,\n    toLocaleString: $toLocaleString\n  });\n  addGetter($TypedArrayPrototype$, 'buffer', 'b');\n  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');\n  addGetter($TypedArrayPrototype$, 'byteLength', 'l');\n  addGetter($TypedArrayPrototype$, 'length', 'e');\n  dP($TypedArrayPrototype$, TAG, {\n    get: function get() {\n      return this[TYPED_ARRAY];\n    }\n  });\n\n  // eslint-disable-next-line max-statements\n  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {\n    CLAMPED = !!CLAMPED;\n    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';\n    var GETTER = 'get' + KEY;\n    var SETTER = 'set' + KEY;\n    var TypedArray = global[NAME];\n    var Base = TypedArray || {};\n    var TAC = TypedArray && getPrototypeOf(TypedArray);\n    var FORCED = !TypedArray || !$typed.ABV;\n    var O = {};\n    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];\n    var getter = function getter(that, index) {\n      var data = that._d;\n      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);\n    };\n    var setter = function setter(that, index, value) {\n      var data = that._d;\n      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;\n      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);\n    };\n    var addElement = function addElement(that, index) {\n      dP(that, index, {\n        get: function get() {\n          return getter(this, index);\n        },\n        set: function set(value) {\n          return setter(this, index, value);\n        },\n        enumerable: true\n      });\n    };\n    if (FORCED) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME, '_d');\n        var index = 0;\n        var offset = 0;\n        var buffer, byteLength, length, klass;\n        if (!isObject(data)) {\n          length = toIndex(data);\n          byteLength = length * BYTES;\n          buffer = new $ArrayBuffer(byteLength);\n        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          buffer = data;\n          offset = toOffset($offset, BYTES);\n          var $len = data.byteLength;\n          if ($length === undefined) {\n            if ($len % BYTES) throw RangeError(WRONG_LENGTH);\n            byteLength = $len - offset;\n            if (byteLength < 0) throw RangeError(WRONG_LENGTH);\n          } else {\n            byteLength = toLength($length) * BYTES;\n            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);\n          }\n          length = byteLength / BYTES;\n        } else if (TYPED_ARRAY in data) {\n          return fromList(TypedArray, data);\n        } else {\n          return $from.call(TypedArray, data);\n        }\n        hide(that, '_d', {\n          b: buffer,\n          o: offset,\n          l: byteLength,\n          e: length,\n          v: new $DataView(buffer)\n        });\n        while (index < length) {\n          addElement(that, index++);\n        }\n      });\n      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);\n      hide(TypedArrayPrototype, 'constructor', TypedArray);\n    } else if (!fails(function () {\n      TypedArray(1);\n    }) || !fails(function () {\n      new TypedArray(-1); // eslint-disable-line no-new\n    }) || !$iterDetect(function (iter) {\n      new TypedArray(); // eslint-disable-line no-new\n      new TypedArray(null); // eslint-disable-line no-new\n      new TypedArray(1.5); // eslint-disable-line no-new\n      new TypedArray(iter); // eslint-disable-line no-new\n    }, true)) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME);\n        var klass;\n        // `ws` module bug, temporarily remove validation length for Uint8Array\n        // https://github.com/websockets/ws/pull/645\n        if (!isObject(data)) return new Base(toIndex(data));\n        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);\n        }\n        if (TYPED_ARRAY in data) return fromList(TypedArray, data);\n        return $from.call(TypedArray, data);\n      });\n      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {\n        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);\n      });\n      TypedArray[PROTOTYPE] = TypedArrayPrototype;\n      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;\n    }\n    var $nativeIterator = TypedArrayPrototype[ITERATOR];\n    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);\n    var $iterator = $iterators.values;\n    hide(TypedArray, TYPED_CONSTRUCTOR, true);\n    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);\n    hide(TypedArrayPrototype, VIEW, true);\n    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);\n\n    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {\n      dP(TypedArrayPrototype, TAG, {\n        get: function get() {\n          return NAME;\n        }\n      });\n    }\n\n    O[NAME] = TypedArray;\n\n    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);\n\n    $export($export.S, NAME, {\n      BYTES_PER_ELEMENT: BYTES\n    });\n\n    $export($export.S + $export.F * fails(function () {\n      Base.of.call(TypedArray, 1);\n    }), NAME, {\n      from: $from,\n      of: $of\n    });\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);\n\n    $export($export.P, NAME, proto);\n\n    setSpecies(NAME);\n\n    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });\n\n    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);\n\n    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;\n\n    $export($export.P + $export.F * fails(function () {\n      new TypedArray(1).slice();\n    }), NAME, { slice: $slice });\n\n    $export($export.P + $export.F * (fails(function () {\n      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();\n    }) || !fails(function () {\n      TypedArrayPrototype.toLocaleString.call([1, 2]);\n    })), NAME, { toLocaleString: $toLocaleString });\n\n    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;\n    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);\n  };\n} else module.exports = function () {/* empty */};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_typed-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_typed-buffer.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_typed-buffer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./bwttest/node_modules/core-js/modules/_library.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./bwttest/node_modules/core-js/modules/_typed.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./bwttest/node_modules/core-js/modules/_hide.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./bwttest/node_modules/core-js/modules/_redefine-all.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./bwttest/node_modules/core-js/modules/_an-instance.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./bwttest/node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar toIndex = __webpack_require__(/*! ./_to-index */ \"./bwttest/node_modules/core-js/modules/_to-index.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./bwttest/node_modules/core-js/modules/_object-gopn.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\").f;\nvar arrayFill = __webpack_require__(/*! ./_array-fill */ \"./bwttest/node_modules/core-js/modules/_array-fill.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./bwttest/node_modules/core-js/modules/_set-to-string-tag.js\");\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar DATA_VIEW = 'DataView';\nvar PROTOTYPE = 'prototype';\nvar WRONG_LENGTH = 'Wrong length!';\nvar WRONG_INDEX = 'Wrong index!';\nvar $ArrayBuffer = global[ARRAY_BUFFER];\nvar $DataView = global[DATA_VIEW];\nvar Math = global.Math;\nvar RangeError = global.RangeError;\n// eslint-disable-next-line no-shadow-restricted-names\nvar Infinity = global.Infinity;\nvar BaseBuffer = $ArrayBuffer;\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar floor = Math.floor;\nvar log = Math.log;\nvar LN2 = Math.LN2;\nvar BUFFER = 'buffer';\nvar BYTE_LENGTH = 'byteLength';\nvar BYTE_OFFSET = 'byteOffset';\nvar $BUFFER = DESCRIPTORS ? '_b' : BUFFER;\nvar $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;\nvar $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;\n\n// IEEE754 conversions based on https://github.com/feross/ieee754\nfunction packIEEE754(value, mLen, nBytes) {\n  var buffer = new Array(nBytes);\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;\n  var i = 0;\n  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;\n  var e, m, c;\n  value = abs(value);\n  // eslint-disable-next-line no-self-compare\n  if (value != value || value === Infinity) {\n    // eslint-disable-next-line no-self-compare\n    m = value != value ? 1 : 0;\n    e = eMax;\n  } else {\n    e = floor(log(value) / LN2);\n    if (value * (c = pow(2, -e)) < 1) {\n      e--;\n      c *= 2;\n    }\n    if (e + eBias >= 1) {\n      value += rt / c;\n    } else {\n      value += rt * pow(2, 1 - eBias);\n    }\n    if (value * c >= 2) {\n      e++;\n      c /= 2;\n    }\n    if (e + eBias >= eMax) {\n      m = 0;\n      e = eMax;\n    } else if (e + eBias >= 1) {\n      m = (value * c - 1) * pow(2, mLen);\n      e = e + eBias;\n    } else {\n      m = value * pow(2, eBias - 1) * pow(2, mLen);\n      e = 0;\n    }\n  }\n  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}\n  e = e << mLen | m;\n  eLen += mLen;\n  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}\n  buffer[--i] |= s * 128;\n  return buffer;\n}\nfunction unpackIEEE754(buffer, mLen, nBytes) {\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var nBits = eLen - 7;\n  var i = nBytes - 1;\n  var s = buffer[i--];\n  var e = s & 127;\n  var m;\n  s >>= 7;\n  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}\n  m = e & (1 << -nBits) - 1;\n  e >>= -nBits;\n  nBits += mLen;\n  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}\n  if (e === 0) {\n    e = 1 - eBias;\n  } else if (e === eMax) {\n    return m ? NaN : s ? -Infinity : Infinity;\n  } else {\n    m = m + pow(2, mLen);\n    e = e - eBias;\n  }return (s ? -1 : 1) * m * pow(2, e - mLen);\n}\n\nfunction unpackI32(bytes) {\n  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];\n}\nfunction packI8(it) {\n  return [it & 0xff];\n}\nfunction packI16(it) {\n  return [it & 0xff, it >> 8 & 0xff];\n}\nfunction packI32(it) {\n  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];\n}\nfunction packF64(it) {\n  return packIEEE754(it, 52, 8);\n}\nfunction packF32(it) {\n  return packIEEE754(it, 23, 4);\n}\n\nfunction addGetter(C, key, internal) {\n  dP(C[PROTOTYPE], key, { get: function get() {\n      return this[internal];\n    } });\n}\n\nfunction get(view, bytes, index, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = store.slice(start, start + bytes);\n  return isLittleEndian ? pack : pack.reverse();\n}\nfunction set(view, bytes, index, conversion, value, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = conversion(+value);\n  for (var i = 0; i < bytes; i++) {\n    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];\n  }\n}\n\nif (!$typed.ABV) {\n  $ArrayBuffer = function ArrayBuffer(length) {\n    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);\n    var byteLength = toIndex(length);\n    this._b = arrayFill.call(new Array(byteLength), 0);\n    this[$LENGTH] = byteLength;\n  };\n\n  $DataView = function DataView(buffer, byteOffset, byteLength) {\n    anInstance(this, $DataView, DATA_VIEW);\n    anInstance(buffer, $ArrayBuffer, DATA_VIEW);\n    var bufferLength = buffer[$LENGTH];\n    var offset = toInteger(byteOffset);\n    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');\n    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);\n    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);\n    this[$BUFFER] = buffer;\n    this[$OFFSET] = offset;\n    this[$LENGTH] = byteLength;\n  };\n\n  if (DESCRIPTORS) {\n    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');\n    addGetter($DataView, BUFFER, '_b');\n    addGetter($DataView, BYTE_LENGTH, '_l');\n    addGetter($DataView, BYTE_OFFSET, '_o');\n  }\n\n  redefineAll($DataView[PROTOTYPE], {\n    getInt8: function getInt8(byteOffset) {\n      return get(this, 1, byteOffset)[0] << 24 >> 24;\n    },\n    getUint8: function getUint8(byteOffset) {\n      return get(this, 1, byteOffset)[0];\n    },\n    getInt16: function getInt16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;\n    },\n    getUint16: function getUint16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return bytes[1] << 8 | bytes[0];\n    },\n    getInt32: function getInt32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1]));\n    },\n    getUint32: function getUint32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;\n    },\n    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);\n    },\n    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);\n    },\n    setInt8: function setInt8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packF32, value, arguments[2]);\n    },\n    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {\n      set(this, 8, byteOffset, packF64, value, arguments[2]);\n    }\n  });\n} else {\n  if (!fails(function () {\n    $ArrayBuffer(1);\n  }) || !fails(function () {\n    new $ArrayBuffer(-1); // eslint-disable-line no-new\n  }) || fails(function () {\n    new $ArrayBuffer(); // eslint-disable-line no-new\n    new $ArrayBuffer(1.5); // eslint-disable-line no-new\n    new $ArrayBuffer(NaN); // eslint-disable-line no-new\n    return $ArrayBuffer.name != ARRAY_BUFFER;\n  })) {\n    $ArrayBuffer = function ArrayBuffer(length) {\n      anInstance(this, $ArrayBuffer);\n      return new BaseBuffer(toIndex(length));\n    };\n    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];\n    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {\n      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);\n    }\n    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;\n  }\n  // iOS Safari 7.x bug\n  var view = new $DataView(new $ArrayBuffer(2));\n  var $setInt8 = $DataView[PROTOTYPE].setInt8;\n  view.setInt8(0, 2147483648);\n  view.setInt8(1, 2147483649);\n  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {\n    setInt8: function setInt8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    }\n  }, true);\n}\nsetToStringTag($ArrayBuffer, ARRAY_BUFFER);\nsetToStringTag($DataView, DATA_VIEW);\nhide($DataView[PROTOTYPE], $typed.VIEW, true);\nexports[ARRAY_BUFFER] = $ArrayBuffer;\nexports[DATA_VIEW] = $DataView;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_typed-buffer.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_typed.js":
/*!********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_typed.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./bwttest/node_modules/core-js/modules/_hide.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./bwttest/node_modules/core-js/modules/_uid.js\");\nvar TYPED = uid('typed_array');\nvar VIEW = uid('view');\nvar ABV = !!(global.ArrayBuffer && global.DataView);\nvar CONSTR = ABV;\nvar i = 0;\nvar l = 9;\nvar Typed;\n\nvar TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');\n\nwhile (i < l) {\n  if (Typed = global[TypedArrayConstructors[i++]]) {\n    hide(Typed.prototype, TYPED, true);\n    hide(Typed.prototype, VIEW, true);\n  } else CONSTR = false;\n}\n\nmodule.exports = {\n  ABV: ABV,\n  CONSTR: CONSTR,\n  TYPED: TYPED,\n  VIEW: VIEW\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_typed.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_uid.js":
/*!******************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_user-agent.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_validate-collection.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./bwttest/node_modules/core-js/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./bwttest/node_modules/core-js/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./bwttest/node_modules/core-js/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.f = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\");\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/_wks.js":
/*!******************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar store = __webpack_require__(/*! ./_shared */ \"./bwttest/node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./bwttest/node_modules/core-js/modules/_uid.js\");\nvar _Symbol = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof _Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./bwttest/node_modules/core-js/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./bwttest/node_modules/core-js/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./bwttest/node_modules/core-js/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];\n};\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/core.regexp.escape.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/core.regexp.escape.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/benjamingr/RexExp.escape\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $re = __webpack_require__(/*! ./_replacer */ \"./bwttest/node_modules/core-js/modules/_replacer.js\")(/[\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');\n\n$export($export.S, 'RegExp', { escape: function escape(it) {\n    return $re(it);\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/core.regexp.escape.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.copy-within.js":
/*!***********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ \"./bwttest/node_modules/core-js/modules/_array-copy-within.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./bwttest/node_modules/core-js/modules/_add-to-unscopables.js\")('copyWithin');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.copy-within.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.every.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.every.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $every = __webpack_require__(/*! ./_array-methods */ \"./bwttest/node_modules/core-js/modules/_array-methods.js\")(4);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./bwttest/node_modules/core-js/modules/_strict-method.js\")([].every, true), 'Array', {\n  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])\n  every: function every(callbackfn /* , thisArg */) {\n    return $every(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.every.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.fill.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.fill.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ \"./bwttest/node_modules/core-js/modules/_array-fill.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./bwttest/node_modules/core-js/modules/_add-to-unscopables.js\")('fill');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.fill.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.filter.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.filter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $filter = __webpack_require__(/*! ./_array-methods */ \"./bwttest/node_modules/core-js/modules/_array-methods.js\")(2);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./bwttest/node_modules/core-js/modules/_strict-method.js\")([].filter, true), 'Array', {\n  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.filter.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.find-index.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.find-index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./bwttest/node_modules/core-js/modules/_array-methods.js\")(6);\nvar KEY = 'findIndex';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () {\n  forced = false;\n});\n$export($export.P + $export.F * forced, 'Array', {\n  findIndex: function findIndex(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./bwttest/node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.find-index.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.find.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.find.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./bwttest/node_modules/core-js/modules/_array-methods.js\")(5);\nvar KEY = 'find';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () {\n  forced = false;\n});\n$export($export.P + $export.F * forced, 'Array', {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./bwttest/node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.find.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.for-each.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.for-each.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $forEach = __webpack_require__(/*! ./_array-methods */ \"./bwttest/node_modules/core-js/modules/_array-methods.js\")(0);\nvar STRICT = __webpack_require__(/*! ./_strict-method */ \"./bwttest/node_modules/core-js/modules/_strict-method.js\")([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, 'Array', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn /* , thisArg */) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.for-each.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./bwttest/node_modules/core-js/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./bwttest/node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./bwttest/node_modules/core-js/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./bwttest/node_modules/core-js/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./bwttest/node_modules/core-js/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./bwttest/node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  Array.from(iter);\n}), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.index-of.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.index-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $indexOf = __webpack_require__(/*! ./_array-includes */ \"./bwttest/node_modules/core-js/modules/_array-includes.js\")(false);\nvar $native = [].indexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./bwttest/node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n    // convert -0 to +0\n    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.index-of.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ \"./bwttest/node_modules/core-js/modules/_is-array.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.is-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./bwttest/node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./bwttest/node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./bwttest/node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./bwttest/node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./bwttest/node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0; // next index\n  this._k = kind; // kind\n  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.join.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.join.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.13 Array.prototype.join(separator)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./bwttest/node_modules/core-js/modules/_to-iobject.js\");\nvar arrayJoin = [].join;\n\n// fallback for not array-like strings\n$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ \"./bwttest/node_modules/core-js/modules/_iobject.js\") != Object || !__webpack_require__(/*! ./_strict-method */ \"./bwttest/node_modules/core-js/modules/_strict-method.js\")(arrayJoin)), 'Array', {\n  join: function join(separator) {\n    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.join.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./bwttest/node_modules/core-js/modules/_to-iobject.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./bwttest/node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar $native = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./bwttest/node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])\n  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {\n    // convert -0 to +0\n    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;\n    var O = toIObject(this);\n    var length = toLength(O.length);\n    var index = length - 1;\n    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));\n    if (index < 0) index = length + index;\n    for (; index >= 0; index--) {\n      if (index in O) if (O[index] === searchElement) return index || 0;\n    }return -1;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.last-index-of.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.map.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.map.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $map = __webpack_require__(/*! ./_array-methods */ \"./bwttest/node_modules/core-js/modules/_array-methods.js\")(1);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./bwttest/node_modules/core-js/modules/_strict-method.js\")([].map, true), 'Array', {\n  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.map.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.of.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.of.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./bwttest/node_modules/core-js/modules/_create-property.js\");\n\n// WebKit Array.of isn't generic\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  function F() {/* empty */}\n  return !(Array.of.call(F) instanceof F);\n}), 'Array', {\n  // 22.1.2.3 Array.of( ...items)\n  of: function of() /* ...args */{\n    var index = 0;\n    var aLen = arguments.length;\n    var result = new (typeof this == 'function' ? this : Array)(aLen);\n    while (aLen > index) {\n      createProperty(result, index, arguments[index++]);\n    }result.length = aLen;\n    return result;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.of.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.reduce-right.js":
/*!************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./bwttest/node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./bwttest/node_modules/core-js/modules/_strict-method.js\")([].reduceRight, true), 'Array', {\n  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])\n  reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], true);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.reduce-right.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.reduce.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.reduce.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./bwttest/node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./bwttest/node_modules/core-js/modules/_strict-method.js\")([].reduce, true), 'Array', {\n  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], false);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.reduce.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.slice.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.slice.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./bwttest/node_modules/core-js/modules/_html.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./bwttest/node_modules/core-js/modules/_cof.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./bwttest/node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar arraySlice = [].slice;\n\n// fallback for not array-like ES3 strings and DOM objects\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  if (html) arraySlice.call(html);\n}), 'Array', {\n  slice: function slice(begin, end) {\n    var len = toLength(this.length);\n    var klass = cof(this);\n    end = end === undefined ? len : end;\n    if (klass == 'Array') return arraySlice.call(this, begin, end);\n    var start = toAbsoluteIndex(begin, len);\n    var upTo = toAbsoluteIndex(end, len);\n    var size = toLength(upTo - start);\n    var cloned = new Array(size);\n    var i = 0;\n    for (; i < size; i++) {\n      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];\n    }return cloned;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.slice.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.some.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.some.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $some = __webpack_require__(/*! ./_array-methods */ \"./bwttest/node_modules/core-js/modules/_array-methods.js\")(3);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./bwttest/node_modules/core-js/modules/_strict-method.js\")([].some, true), 'Array', {\n  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])\n  some: function some(callbackfn /* , thisArg */) {\n    return $some(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.some.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.sort.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.sort.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null);\n  // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ \"./bwttest/node_modules/core-js/modules/_strict-method.js\")($sort)), 'Array', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.sort.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.array.species.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.array.species.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_set-species */ \"./bwttest/node_modules/core-js/modules/_set-species.js\")('Array');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.array.species.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.date.now.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.date.now.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.3.3.1 / 15.9.4.4 Date.now()\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Date', { now: function now() {\n    return new Date().getTime();\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.date.now.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toISOString = __webpack_require__(/*! ./_date-to-iso-string */ \"./bwttest/node_modules/core-js/modules/_date-to-iso-string.js\");\n\n// PhantomJS / old WebKit has a broken implementations\n$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {\n  toISOString: toISOString\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.date.to-iso-string.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.date.to-json.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.date.to-json.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./bwttest/node_modules/core-js/modules/_to-primitive.js\");\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {\n      return 1;\n    } }) !== 1;\n}), 'Date', {\n  // eslint-disable-next-line no-unused-vars\n  toJSON: function toJSON(key) {\n    var O = toObject(this);\n    var pv = toPrimitive(O);\n    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.date.to-json.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('toPrimitive');\nvar proto = Date.prototype;\n\nif (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ \"./bwttest/node_modules/core-js/modules/_hide.js\")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ \"./bwttest/node_modules/core-js/modules/_date-to-primitive.js\"));\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.date.to-primitive.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.date.to-string.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.date.to-string.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar DateProto = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar $toString = DateProto[TO_STRING];\nvar getTime = DateProto.getTime;\nif (new Date(NaN) + '' != INVALID_DATE) {\n  __webpack_require__(/*! ./_redefine */ \"./bwttest/node_modules/core-js/modules/_redefine.js\")(DateProto, TO_STRING, function toString() {\n    var value = getTime.call(this);\n    // eslint-disable-next-line no-self-compare\n    return value === value ? $toString.call(this) : INVALID_DATE;\n  });\n}\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.date.to-string.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.function.bind.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.function.bind.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ \"./bwttest/node_modules/core-js/modules/_bind.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.function.bind.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.function.has-instance.js":
/*!***************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.function.has-instance.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./bwttest/node_modules/core-js/modules/_object-gpo.js\");\nvar HAS_INSTANCE = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('hasInstance');\nvar FunctionProto = Function.prototype;\n// 19.2.3.6 Function.prototype[@@hasInstance](V)\nif (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\").f(FunctionProto, HAS_INSTANCE, { value: function value(O) {\n    if (typeof this != 'function' || !isObject(O)) return false;\n    if (!isObject(this.prototype)) return O instanceof this;\n    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:\n    while (O = getPrototypeOf(O)) {\n      if (this.prototype === O) return true;\n    }return false;\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.function.has-instance.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.function.name.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.function.name.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\").f;\nvar FProto = Function.prototype;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// 19.2.4.2 name\nNAME in FProto || __webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\") && dP(FProto, NAME, {\n  configurable: true,\n  get: function get() {\n    try {\n      return ('' + this).match(nameRE)[1];\n    } catch (e) {\n      return '';\n    }\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.function.name.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.map.js":
/*!*********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.map.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./bwttest/node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./bwttest/node_modules/core-js/modules/_validate-collection.js\");\nvar MAP = 'Map';\n\n// 23.1 Map Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./bwttest/node_modules/core-js/modules/_collection.js\")(MAP, function (get) {\n  return function Map() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.map.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.acosh.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.acosh.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.3 Math.acosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar log1p = __webpack_require__(/*! ./_math-log1p */ \"./bwttest/node_modules/core-js/modules/_math-log1p.js\");\nvar sqrt = Math.sqrt;\nvar $acosh = Math.acosh;\n\n$export($export.S + $export.F * !($acosh\n// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509\n&& Math.floor($acosh(Number.MAX_VALUE)) == 710\n// Tor Browser bug: Math.acosh(Infinity) -> NaN\n&& $acosh(Infinity) == Infinity), 'Math', {\n  acosh: function acosh(x) {\n    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.acosh.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.asinh.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.asinh.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.5 Math.asinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $asinh = Math.asinh;\n\nfunction asinh(x) {\n  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));\n}\n\n// Tor Browser bug: Math.asinh(0) -> -0\n$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.asinh.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.atanh.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.atanh.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.7 Math.atanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $atanh = Math.atanh;\n\n// Tor Browser bug: Math.atanh(-0) -> 0\n$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {\n  atanh: function atanh(x) {\n    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.atanh.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.cbrt.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.cbrt.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.9 Math.cbrt(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./bwttest/node_modules/core-js/modules/_math-sign.js\");\n\n$export($export.S, 'Math', {\n  cbrt: function cbrt(x) {\n    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.cbrt.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.clz32.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.clz32.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.11 Math.clz32(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clz32: function clz32(x) {\n    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.clz32.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.cosh.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.cosh.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.12 Math.cosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  cosh: function cosh(x) {\n    return (exp(x = +x) + exp(-x)) / 2;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.cosh.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.expm1.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.expm1.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.14 Math.expm1(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./bwttest/node_modules/core-js/modules/_math-expm1.js\");\n\n$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.expm1.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.fround.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.fround.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.16 Math.fround(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ \"./bwttest/node_modules/core-js/modules/_math-fround.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.fround.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.hypot.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.hypot.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Math', {\n  hypot: function hypot(value1, value2) {\n    // eslint-disable-line no-unused-vars\n    var sum = 0;\n    var i = 0;\n    var aLen = arguments.length;\n    var larg = 0;\n    var arg, div;\n    while (i < aLen) {\n      arg = abs(arguments[i++]);\n      if (larg < arg) {\n        div = larg / arg;\n        sum = sum * div * div + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else sum += arg;\n    }\n    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.hypot.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.imul.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.imul.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.18 Math.imul(x, y)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $imul = Math.imul;\n\n// some WebKit versions fails with big numbers, some has wrong arity\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;\n}), 'Math', {\n  imul: function imul(x, y) {\n    var UINT16 = 0xffff;\n    var xn = +x;\n    var yn = +y;\n    var xl = UINT16 & xn;\n    var yl = UINT16 & yn;\n    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.imul.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.log10.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.log10.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.21 Math.log10(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log10: function log10(x) {\n    return Math.log(x) * Math.LOG10E;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.log10.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.log1p.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.log1p.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.20 Math.log1p(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ \"./bwttest/node_modules/core-js/modules/_math-log1p.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.log1p.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.log2.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.log2.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.22 Math.log2(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log2: function log2(x) {\n    return Math.log(x) / Math.LN2;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.log2.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.sign.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.sign.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.28 Math.sign(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ \"./bwttest/node_modules/core-js/modules/_math-sign.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.sign.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.sinh.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.sinh.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.30 Math.sinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./bwttest/node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n// V8 near Chromium 38 has a problem with very small numbers\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  return !Math.sinh(-2e-17) != -2e-17;\n}), 'Math', {\n  sinh: function sinh(x) {\n    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.sinh.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.tanh.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.tanh.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.33 Math.tanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./bwttest/node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  tanh: function tanh(x) {\n    var a = expm1(x = +x);\n    var b = expm1(-x);\n    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.tanh.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.math.trunc.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.math.trunc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.2.2.34 Math.trunc(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  trunc: function trunc(it) {\n    return (it > 0 ? Math.floor : Math.ceil)(it);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.math.trunc.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.number.constructor.js":
/*!************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.number.constructor.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./bwttest/node_modules/core-js/modules/_has.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./bwttest/node_modules/core-js/modules/_cof.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./bwttest/node_modules/core-js/modules/_inherit-if-required.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./bwttest/node_modules/core-js/modules/_to-primitive.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./bwttest/node_modules/core-js/modules/_object-gopn.js\").f;\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./bwttest/node_modules/core-js/modules/_object-gopd.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\").f;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./bwttest/node_modules/core-js/modules/_string-trim.js\").trim;\nvar NUMBER = 'Number';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype;\n// Opera ~12 has broken Object#toString\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ \"./bwttest/node_modules/core-js/modules/_object-create.js\")(proto)) == NUMBER;\nvar TRIM = 'trim' in String.prototype;\n\n// 7.1.3 ToNumber(argument)\nvar toNumber = function toNumber(argument) {\n  var it = toPrimitive(argument, false);\n  if (typeof it == 'string' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66:case 98:\n          radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i\n        case 79:case 111:\n          radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i\n        default:\n          return +it;\n      }\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      }return parseInt(digits, radix);\n    }\n  }return +it;\n};\n\nif (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number\n    // check on 1..constructor(foo) case\n    && (BROKEN_COF ? fails(function () {\n      proto.valueOf.call(that);\n    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n  for (var keys = __webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\") ? gOPN(Base) : (\n  // ES3:\n  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +\n  // ES6 (in case, if modules with ES6 Number statics required before):\n  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n  __webpack_require__(/*! ./_redefine */ \"./bwttest/node_modules/core-js/modules/_redefine.js\")(global, NUMBER, $Number);\n}\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.number.constructor.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.number.epsilon.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.number.epsilon.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.1 Number.EPSILON\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.number.epsilon.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.number.is-finite.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.2 Number.isFinite(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar _isFinite = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\").isFinite;\n\n$export($export.S, 'Number', {\n  isFinite: function isFinite(it) {\n    return typeof it == 'number' && _isFinite(it);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.number.is-finite.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.number.is-integer.js":
/*!***********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.3 Number.isInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ \"./bwttest/node_modules/core-js/modules/_is-integer.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.number.is-integer.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.number.is-nan.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.number.is-nan.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.4 Number.isNaN(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  isNaN: function isNaN(number) {\n    // eslint-disable-next-line no-self-compare\n    return number != number;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.number.is-nan.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!****************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.5 Number.isSafeInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar isInteger = __webpack_require__(/*! ./_is-integer */ \"./bwttest/node_modules/core-js/modules/_is-integer.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Number', {\n  isSafeInteger: function isSafeInteger(number) {\n    return isInteger(number) && abs(number) <= 0x1fffffffffffff;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.number.is-safe-integer.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*****************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.6 Number.MAX_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.number.max-safe-integer.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*****************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 20.1.2.10 Number.MIN_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.number.min-safe-integer.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.number.parse-float.js":
/*!************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.number.parse-float.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./bwttest/node_modules/core-js/modules/_parse-float.js\");\n// 20.1.2.12 Number.parseFloat(string)\n$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.number.parse-float.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.number.parse-int.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./bwttest/node_modules/core-js/modules/_parse-int.js\");\n// 20.1.2.13 Number.parseInt(string, radix)\n$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.number.parse-int.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./bwttest/node_modules/core-js/modules/_to-integer.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./bwttest/node_modules/core-js/modules/_a-number-value.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./bwttest/node_modules/core-js/modules/_string-repeat.js\");\nvar $toFixed = 1.0.toFixed;\nvar floor = Math.floor;\nvar data = [0, 0, 0, 0, 0, 0];\nvar ERROR = 'Number.toFixed: incorrect invocation!';\nvar ZERO = '0';\n\nvar multiply = function multiply(n, c) {\n  var i = -1;\n  var c2 = c;\n  while (++i < 6) {\n    c2 += n * data[i];\n    data[i] = c2 % 1e7;\n    c2 = floor(c2 / 1e7);\n  }\n};\nvar divide = function divide(n) {\n  var i = 6;\n  var c = 0;\n  while (--i >= 0) {\n    c += data[i];\n    data[i] = floor(c / n);\n    c = c % n * 1e7;\n  }\n};\nvar numToString = function numToString() {\n  var i = 6;\n  var s = '';\n  while (--i >= 0) {\n    if (s !== '' || i === 0 || data[i] !== 0) {\n      var t = String(data[i]);\n      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;\n    }\n  }return s;\n};\nvar pow = function pow(x, n, acc) {\n  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);\n};\nvar log = function log(x) {\n  var n = 0;\n  var x2 = x;\n  while (x2 >= 4096) {\n    n += 12;\n    x2 /= 4096;\n  }\n  while (x2 >= 2) {\n    n += 1;\n    x2 /= 2;\n  }return n;\n};\n\n$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !__webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  // V8 ~ Android 4.3-\n  $toFixed.call({});\n})), 'Number', {\n  toFixed: function toFixed(fractionDigits) {\n    var x = aNumberValue(this, ERROR);\n    var f = toInteger(fractionDigits);\n    var s = '';\n    var m = ZERO;\n    var e, z, j, k;\n    if (f < 0 || f > 20) throw RangeError(ERROR);\n    // eslint-disable-next-line no-self-compare\n    if (x != x) return 'NaN';\n    if (x <= -1e21 || x >= 1e21) return String(x);\n    if (x < 0) {\n      s = '-';\n      x = -x;\n    }\n    if (x > 1e-21) {\n      e = log(x * pow(2, 69, 1)) - 69;\n      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);\n      z *= 0x10000000000000;\n      e = 52 - e;\n      if (e > 0) {\n        multiply(0, z);\n        j = f;\n        while (j >= 7) {\n          multiply(1e7, 0);\n          j -= 7;\n        }\n        multiply(pow(10, j, 1), 0);\n        j = e - 1;\n        while (j >= 23) {\n          divide(1 << 23);\n          j -= 23;\n        }\n        divide(1 << j);\n        multiply(1, 1);\n        divide(2);\n        m = numToString();\n      } else {\n        multiply(0, z);\n        multiply(1 << -e, 0);\n        m = numToString() + repeat.call(ZERO, f);\n      }\n    }\n    if (f > 0) {\n      k = m.length;\n      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));\n    } else {\n      m = s + m;\n    }return m;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.number.to-fixed.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.number.to-precision.js":
/*!*************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./bwttest/node_modules/core-js/modules/_a-number-value.js\");\nvar $toPrecision = 1.0.toPrecision;\n\n$export($export.P + $export.F * ($fails(function () {\n  // IE7-\n  return $toPrecision.call(1, undefined) !== '1';\n}) || !$fails(function () {\n  // V8 ~ Android 4.3-\n  $toPrecision.call({});\n})), 'Number', {\n  toPrecision: function toPrecision(precision) {\n    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');\n    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.number.to-precision.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./bwttest/node_modules/core-js/modules/_object-assign.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.assign.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./bwttest/node_modules/core-js/modules/_object-create.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.create.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.define-properties.js":
/*!******************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.define-properties.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ \"./bwttest/node_modules/core-js/modules/_object-dps.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.define-properties.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\").f });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.freeze.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.freeze.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./bwttest/node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./bwttest/node_modules/core-js/modules/_object-sap.js\")('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.freeze.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./bwttest/node_modules/core-js/modules/_to-iobject.js\");\nvar $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./bwttest/node_modules/core-js/modules/_object-gopd.js\").f;\n\n__webpack_require__(/*! ./_object-sap */ \"./bwttest/node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***********************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.7 Object.getOwnPropertyNames(O)\n__webpack_require__(/*! ./_object-sap */ \"./bwttest/node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyNames', function () {\n  return __webpack_require__(/*! ./_object-gopn-ext */ \"./bwttest/node_modules/core-js/modules/_object-gopn-ext.js\").f;\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.get-own-property-names.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./bwttest/node_modules/core-js/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./bwttest/node_modules/core-js/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.is-extensible.js":
/*!**************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.11 Object.isExtensible(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./bwttest/node_modules/core-js/modules/_object-sap.js\")('isExtensible', function ($isExtensible) {\n  return function isExtensible(it) {\n    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.is-extensible.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.12 Object.isFrozen(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./bwttest/node_modules/core-js/modules/_object-sap.js\")('isFrozen', function ($isFrozen) {\n  return function isFrozen(it) {\n    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.is-frozen.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.13 Object.isSealed(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./bwttest/node_modules/core-js/modules/_object-sap.js\")('isSealed', function ($isSealed) {\n  return function isSealed(it) {\n    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.is-sealed.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.is.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.is.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.3.10 Object.is(value1, value2)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ \"./bwttest/node_modules/core-js/modules/_same-value.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.is.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./bwttest/node_modules/core-js/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./bwttest/node_modules/core-js/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.keys.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!*******************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.15 Object.preventExtensions(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./bwttest/node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./bwttest/node_modules/core-js/modules/_object-sap.js\")('preventExtensions', function ($preventExtensions) {\n  return function preventExtensions(it) {\n    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.prevent-extensions.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.seal.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.seal.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.2.17 Object.seal(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./bwttest/node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./bwttest/node_modules/core-js/modules/_object-sap.js\")('seal', function ($seal) {\n  return function seal(it) {\n    return $seal && isObject(it) ? $seal(meta(it)) : it;\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.seal.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./bwttest/node_modules/core-js/modules/_set-proto.js\").set });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.3.6 Object.prototype.toString()\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./bwttest/node_modules/core-js/modules/_classof.js\");\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('toStringTag')] = 'z';\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ \"./bwttest/node_modules/core-js/modules/_redefine.js\")(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.parse-float.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.parse-float.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./bwttest/node_modules/core-js/modules/_parse-float.js\");\n// 18.2.4 parseFloat(string)\n$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.parse-float.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.parse-int.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.parse-int.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./bwttest/node_modules/core-js/modules/_parse-int.js\");\n// 18.2.5 parseInt(string, radix)\n$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.parse-int.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./bwttest/node_modules/core-js/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./bwttest/node_modules/core-js/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./bwttest/node_modules/core-js/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./bwttest/node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./bwttest/node_modules/core-js/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./bwttest/node_modules/core-js/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"./bwttest/node_modules/core-js/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./bwttest/node_modules/core-js/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./bwttest/node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./bwttest/node_modules/core-js/modules/_perform.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./bwttest/node_modules/core-js/modules/_user-agent.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./bwttest/node_modules/core-js/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function empty() {/* empty */};\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise\n    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n    // we can't detect it synchronously, so just check versions\n    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) {/* empty */}\n}();\n\n// helpers\nvar isThenable = function isThenable(it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function notify(promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function run(reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) {\n      run(chain[i++]);\n    } // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function onUnhandled(promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    }promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function isUnhandled(promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function onHandleUnhandled(promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function $reject(value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function $resolve(value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = []; // <- awaiting reactions\n    this._a = undefined; // <- checked in isUnhandled reactions\n    this._s = 0; // <- state\n    this._d = false; // <- done\n    this._v = undefined; // <- value\n    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false; // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./bwttest/node_modules/core-js/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function _catch(onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function OwnPromiseCapability() {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {\n    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./bwttest/node_modules/core-js/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./bwttest/node_modules/core-js/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./bwttest/node_modules/core-js/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./bwttest/node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.promise.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.apply.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.apply.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar rApply = (__webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\").Reflect || {}).apply;\nvar fApply = Function.apply;\n// MS Edge argumentsList argument is optional\n$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  rApply(function () {/* empty */});\n}), 'Reflect', {\n  apply: function apply(target, thisArgument, argumentsList) {\n    var T = aFunction(target);\n    var L = anObject(argumentsList);\n    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.apply.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.construct.js":
/*!***********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar create = __webpack_require__(/*! ./_object-create */ \"./bwttest/node_modules/core-js/modules/_object-create.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\nvar bind = __webpack_require__(/*! ./_bind */ \"./bwttest/node_modules/core-js/modules/_bind.js\");\nvar rConstruct = (__webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\").Reflect || {}).construct;\n\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() {/* empty */}\n  return !(rConstruct(function () {/* empty */}, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  rConstruct(function () {/* empty */});\n});\n\n$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0:\n          return new Target();\n        case 1:\n          return new Target(args[0]);\n        case 2:\n          return new Target(args[0], args[1]);\n        case 3:\n          return new Target(args[0], args[1], args[2]);\n        case 4:\n          return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.construct.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*****************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./bwttest/node_modules/core-js/modules/_to-primitive.js\");\n\n// MS Edge has broken Reflect.defineProperty - throwing instead of returning false\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  // eslint-disable-next-line no-undef\n  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });\n}), 'Reflect', {\n  defineProperty: function defineProperty(target, propertyKey, attributes) {\n    anObject(target);\n    propertyKey = toPrimitive(propertyKey, true);\n    anObject(attributes);\n    try {\n      dP.f(target, propertyKey, attributes);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.define-property.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*****************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.4 Reflect.deleteProperty(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./bwttest/node_modules/core-js/modules/_object-gopd.js\").f;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  deleteProperty: function deleteProperty(target, propertyKey) {\n    var desc = gOPD(anObject(target), propertyKey);\n    return desc && !desc.configurable ? false : delete target[propertyKey];\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.delete-property.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 26.1.5 Reflect.enumerate(target)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar Enumerate = function Enumerate(iterated) {\n  this._t = anObject(iterated); // target\n  this._i = 0; // next index\n  var keys = this._k = []; // keys\n  var key;\n  for (key in iterated) {\n    keys.push(key);\n  }\n};\n__webpack_require__(/*! ./_iter-create */ \"./bwttest/node_modules/core-js/modules/_iter-create.js\")(Enumerate, 'Object', function () {\n  var that = this;\n  var keys = that._k;\n  var key;\n  do {\n    if (that._i >= keys.length) return { value: undefined, done: true };\n  } while (!((key = keys[that._i++]) in that._t));\n  return { value: key, done: false };\n});\n\n$export($export.S, 'Reflect', {\n  enumerate: function enumerate(target) {\n    return new Enumerate(target);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.enumerate.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*****************************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./bwttest/node_modules/core-js/modules/_object-gopd.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {\n    return gOPD.f(anObject(target), propertyKey);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!******************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.8 Reflect.getPrototypeOf(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar getProto = __webpack_require__(/*! ./_object-gpo */ \"./bwttest/node_modules/core-js/modules/_object-gpo.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getPrototypeOf: function getPrototypeOf(target) {\n    return getProto(anObject(target));\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.get-prototype-of.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.get.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.get.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.6 Reflect.get(target, propertyKey [, receiver])\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./bwttest/node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./bwttest/node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./bwttest/node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\n\nfunction get(target, propertyKey /* , receiver */) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var desc, proto;\n  if (anObject(target) === receiver) return target[propertyKey];\n  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;\n  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);\n}\n\n$export($export.S, 'Reflect', { get: get });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.get.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.has.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.has.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.9 Reflect.has(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', {\n  has: function has(target, propertyKey) {\n    return propertyKey in target;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.has.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!***************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.10 Reflect.isExtensible(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar $isExtensible = Object.isExtensible;\n\n$export($export.S, 'Reflect', {\n  isExtensible: function isExtensible(target) {\n    anObject(target);\n    return $isExtensible ? $isExtensible(target) : true;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.is-extensible.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.11 Reflect.ownKeys(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ \"./bwttest/node_modules/core-js/modules/_own-keys.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.own-keys.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!********************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.12 Reflect.preventExtensions(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar $preventExtensions = Object.preventExtensions;\n\n$export($export.S, 'Reflect', {\n  preventExtensions: function preventExtensions(target) {\n    anObject(target);\n    try {\n      if ($preventExtensions) $preventExtensions(target);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.prevent-extensions.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!******************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.14 Reflect.setPrototypeOf(target, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar setProto = __webpack_require__(/*! ./_set-proto */ \"./bwttest/node_modules/core-js/modules/_set-proto.js\");\n\nif (setProto) $export($export.S, 'Reflect', {\n  setPrototypeOf: function setPrototypeOf(target, proto) {\n    setProto.check(target, proto);\n    try {\n      setProto.set(target, proto);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.set-prototype-of.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.reflect.set.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.reflect.set.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./bwttest/node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./bwttest/node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./bwttest/node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./bwttest/node_modules/core-js/modules/_property-desc.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\n\nfunction set(target, propertyKey, V /* , receiver */) {\n  var receiver = arguments.length < 4 ? target : arguments[3];\n  var ownDesc = gOPD.f(anObject(target), propertyKey);\n  var existingDescriptor, proto;\n  if (!ownDesc) {\n    if (isObject(proto = getPrototypeOf(target))) {\n      return set(proto, propertyKey, V, receiver);\n    }\n    ownDesc = createDesc(0);\n  }\n  if (has(ownDesc, 'value')) {\n    if (ownDesc.writable === false || !isObject(receiver)) return false;\n    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {\n      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;\n      existingDescriptor.value = V;\n      dP.f(receiver, propertyKey, existingDescriptor);\n    } else dP.f(receiver, propertyKey, createDesc(0, V));\n    return true;\n  }\n  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);\n}\n\n$export($export.S, 'Reflect', { set: set });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.reflect.set.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.regexp.constructor.js":
/*!************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./bwttest/node_modules/core-js/modules/_inherit-if-required.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\").f;\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./bwttest/node_modules/core-js/modules/_object-gopn.js\").f;\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./bwttest/node_modules/core-js/modules/_is-regexp.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./bwttest/node_modules/core-js/modules/_flags.js\");\nvar $RegExp = global.RegExp;\nvar Base = $RegExp;\nvar proto = $RegExp.prototype;\nvar re1 = /a/g;\nvar re2 = /a/g;\n// \"new\" creates a new object, old webkit buggy here\nvar CORRECT_NEW = new $RegExp(re1) !== re1;\n\nif (__webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  re2[__webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('match')] = false;\n  // RegExp constructor can alter flags and IsRegExp works correct with @@match\n  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';\n}))) {\n  $RegExp = function RegExp(p, f) {\n    var tiRE = this instanceof $RegExp;\n    var piRE = isRegExp(p);\n    var fiU = f === undefined;\n    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);\n  };\n  var proxy = function proxy(key) {\n    key in $RegExp || dP($RegExp, key, {\n      configurable: true,\n      get: function get() {\n        return Base[key];\n      },\n      set: function set(it) {\n        Base[key] = it;\n      }\n    });\n  };\n  for (var keys = gOPN(Base), i = 0; keys.length > i;) {\n    proxy(keys[i++]);\n  }proto.constructor = $RegExp;\n  $RegExp.prototype = proto;\n  __webpack_require__(/*! ./_redefine */ \"./bwttest/node_modules/core-js/modules/_redefine.js\")(global, 'RegExp', $RegExp);\n}\n\n__webpack_require__(/*! ./_set-species */ \"./bwttest/node_modules/core-js/modules/_set-species.js\")('RegExp');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.regexp.constructor.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.regexp.flags.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.regexp.flags.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\").f(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ \"./bwttest/node_modules/core-js/modules/_flags.js\")\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.regexp.match.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.regexp.match.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// @@match logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./bwttest/node_modules/core-js/modules/_fix-re-wks.js\")('match', 1, function (defined, MATCH, $match) {\n  // 21.1.3.11 String.prototype.match(regexp)\n  return [function match(regexp) {\n    'use strict';\n\n    var O = defined(this);\n    var fn = regexp == undefined ? undefined : regexp[MATCH];\n    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n  }, $match];\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.regexp.match.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.regexp.replace.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.regexp.replace.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// @@replace logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./bwttest/node_modules/core-js/modules/_fix-re-wks.js\")('replace', 2, function (defined, REPLACE, $replace) {\n  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)\n  return [function replace(searchValue, replaceValue) {\n    'use strict';\n\n    var O = defined(this);\n    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];\n    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);\n  }, $replace];\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.regexp.replace.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.regexp.search.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.regexp.search.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// @@search logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./bwttest/node_modules/core-js/modules/_fix-re-wks.js\")('search', 1, function (defined, SEARCH, $search) {\n  // 21.1.3.15 String.prototype.search(regexp)\n  return [function search(regexp) {\n    'use strict';\n\n    var O = defined(this);\n    var fn = regexp == undefined ? undefined : regexp[SEARCH];\n    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n  }, $search];\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.regexp.search.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.regexp.split.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.regexp.split.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// @@split logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./bwttest/node_modules/core-js/modules/_fix-re-wks.js\")('split', 2, function (defined, SPLIT, $split) {\n  'use strict';\n\n  var isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./bwttest/node_modules/core-js/modules/_is-regexp.js\");\n  var _split = $split;\n  var $push = [].push;\n  var $SPLIT = 'split';\n  var LENGTH = 'length';\n  var LAST_INDEX = 'lastIndex';\n  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {\n    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group\n    // based on es5-shim implementation, need to rework it\n    $split = function $split(separator, limit) {\n      var string = String(this);\n      if (separator === undefined && limit === 0) return [];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) return _split.call(string, separator, limit);\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var separator2, match, lastIndex, lastLength, i;\n      // Doesn't need flags gy, but they don't hurt\n      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\\\s)', flags);\n      while (match = separatorCopy.exec(string)) {\n        // `separatorCopy.lastIndex` is not reliable cross-browser\n        lastIndex = match.index + match[0][LENGTH];\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG\n          // eslint-disable-next-line no-loop-func\n          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {\n            for (i = 1; i < arguments[LENGTH] - 2; i++) {\n              if (arguments[i] === undefined) match[i] = undefined;\n            }\n          });\n          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));\n          lastLength = match[0][LENGTH];\n          lastLastIndex = lastIndex;\n          if (output[LENGTH] >= splitLimit) break;\n        }\n        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string[LENGTH]) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;\n    };\n    // Chakra, V8\n  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {\n    $split = function $split(separator, limit) {\n      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);\n    };\n  }\n  // 21.1.3.17 String.prototype.split(separator, limit)\n  return [function split(separator, limit) {\n    var O = defined(this);\n    var fn = separator == undefined ? undefined : separator[SPLIT];\n    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);\n  }, $split];\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.regexp.split.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./es6.regexp.flags */ \"./bwttest/node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./bwttest/node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function define(fn) {\n  __webpack_require__(/*! ./_redefine */ \"./bwttest/node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';\n})) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n  // FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.set.js":
/*!*********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./bwttest/node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./bwttest/node_modules/core-js/modules/_validate-collection.js\");\nvar SET = 'Set';\n\n// 23.2 Set Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./bwttest/node_modules/core-js/modules/_collection.js\")(SET, function (get) {\n  return function Set() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n}, {\n  // 23.2.3.1 Set.prototype.add(value)\n  add: function add(value) {\n    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);\n  }\n}, strong);\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.set.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.anchor.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.anchor.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.2 String.prototype.anchor(name)\n\n__webpack_require__(/*! ./_string-html */ \"./bwttest/node_modules/core-js/modules/_string-html.js\")('anchor', function (createHTML) {\n  return function anchor(name) {\n    return createHTML(this, 'a', 'name', name);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.anchor.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.big.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.big.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.3 String.prototype.big()\n\n__webpack_require__(/*! ./_string-html */ \"./bwttest/node_modules/core-js/modules/_string-html.js\")('big', function (createHTML) {\n  return function big() {\n    return createHTML(this, 'big', '', '');\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.big.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.blink.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.blink.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.4 String.prototype.blink()\n\n__webpack_require__(/*! ./_string-html */ \"./bwttest/node_modules/core-js/modules/_string-html.js\")('blink', function (createHTML) {\n  return function blink() {\n    return createHTML(this, 'blink', '', '');\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.blink.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.bold.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.bold.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.5 String.prototype.bold()\n\n__webpack_require__(/*! ./_string-html */ \"./bwttest/node_modules/core-js/modules/_string-html.js\")('bold', function (createHTML) {\n  return function bold() {\n    return createHTML(this, 'b', '', '');\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.bold.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.code-point-at.js":
/*!**************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./bwttest/node_modules/core-js/modules/_string-at.js\")(false);\n$export($export.P, 'String', {\n  // 21.1.3.3 String.prototype.codePointAt(pos)\n  codePointAt: function codePointAt(pos) {\n    return $at(this, pos);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.code-point-at.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.ends-with.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])\n\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./bwttest/node_modules/core-js/modules/_string-context.js\");\nvar ENDS_WITH = 'endsWith';\nvar $endsWith = ''[ENDS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./bwttest/node_modules/core-js/modules/_fails-is-regexp.js\")(ENDS_WITH), 'String', {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = context(this, searchString, ENDS_WITH);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);\n    var search = String(searchString);\n    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.ends-with.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.fixed.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.fixed.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.6 String.prototype.fixed()\n\n__webpack_require__(/*! ./_string-html */ \"./bwttest/node_modules/core-js/modules/_string-html.js\")('fixed', function (createHTML) {\n  return function fixed() {\n    return createHTML(this, 'tt', '', '');\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.fixed.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.7 String.prototype.fontcolor(color)\n\n__webpack_require__(/*! ./_string-html */ \"./bwttest/node_modules/core-js/modules/_string-html.js\")('fontcolor', function (createHTML) {\n  return function fontcolor(color) {\n    return createHTML(this, 'font', 'color', color);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.fontcolor.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.fontsize.js":
/*!*********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.8 String.prototype.fontsize(size)\n\n__webpack_require__(/*! ./_string-html */ \"./bwttest/node_modules/core-js/modules/_string-html.js\")('fontsize', function (createHTML) {\n  return function fontsize(size) {\n    return createHTML(this, 'font', 'size', size);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.fontsize.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.from-code-point.js":
/*!****************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./bwttest/node_modules/core-js/modules/_to-absolute-index.js\");\nvar fromCharCode = String.fromCharCode;\nvar $fromCodePoint = String.fromCodePoint;\n\n// length should be 1, old FF problem\n$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {\n  // 21.1.2.2 String.fromCodePoint(...codePoints)\n  fromCodePoint: function fromCodePoint(x) {\n    // eslint-disable-line no-unused-vars\n    var res = [];\n    var aLen = arguments.length;\n    var i = 0;\n    var code;\n    while (aLen > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');\n      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));\n    }return res.join('');\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.from-code-point.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.includes.js":
/*!*********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.includes.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./bwttest/node_modules/core-js/modules/_string-context.js\");\nvar INCLUDES = 'includes';\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./bwttest/node_modules/core-js/modules/_fails-is-regexp.js\")(INCLUDES), 'String', {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.includes.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.italics.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.italics.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.9 String.prototype.italics()\n\n__webpack_require__(/*! ./_string-html */ \"./bwttest/node_modules/core-js/modules/_string-html.js\")('italics', function (createHTML) {\n  return function italics() {\n    return createHTML(this, 'i', '', '');\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.italics.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $at = __webpack_require__(/*! ./_string-at */ \"./bwttest/node_modules/core-js/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./bwttest/node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0; // next index\n  // 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.link.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.link.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.10 String.prototype.link(url)\n\n__webpack_require__(/*! ./_string-html */ \"./bwttest/node_modules/core-js/modules/_string-html.js\")('link', function (createHTML) {\n  return function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.link.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.raw.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.raw.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./bwttest/node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\n\n$export($export.S, 'String', {\n  // 21.1.2.4 String.raw(callSite, ...substitutions)\n  raw: function raw(callSite) {\n    var tpl = toIObject(callSite.raw);\n    var len = toLength(tpl.length);\n    var aLen = arguments.length;\n    var res = [];\n    var i = 0;\n    while (len > i) {\n      res.push(String(tpl[i++]));\n      if (i < aLen) res.push(String(arguments[i]));\n    }return res.join('');\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.raw.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.repeat.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.repeat.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'String', {\n  // 21.1.3.13 String.prototype.repeat(count)\n  repeat: __webpack_require__(/*! ./_string-repeat */ \"./bwttest/node_modules/core-js/modules/_string-repeat.js\")\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.repeat.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.small.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.small.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.11 String.prototype.small()\n\n__webpack_require__(/*! ./_string-html */ \"./bwttest/node_modules/core-js/modules/_string-html.js\")('small', function (createHTML) {\n  return function small() {\n    return createHTML(this, 'small', '', '');\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.small.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.starts-with.js":
/*!************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.starts-with.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.18 String.prototype.startsWith(searchString [, position ])\n\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./bwttest/node_modules/core-js/modules/_string-context.js\");\nvar STARTS_WITH = 'startsWith';\nvar $startsWith = ''[STARTS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./bwttest/node_modules/core-js/modules/_fails-is-regexp.js\")(STARTS_WITH), 'String', {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = context(this, searchString, STARTS_WITH);\n    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.starts-with.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.strike.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.strike.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.12 String.prototype.strike()\n\n__webpack_require__(/*! ./_string-html */ \"./bwttest/node_modules/core-js/modules/_string-html.js\")('strike', function (createHTML) {\n  return function strike() {\n    return createHTML(this, 'strike', '', '');\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.strike.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.sub.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.sub.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.13 String.prototype.sub()\n\n__webpack_require__(/*! ./_string-html */ \"./bwttest/node_modules/core-js/modules/_string-html.js\")('sub', function (createHTML) {\n  return function sub() {\n    return createHTML(this, 'sub', '', '');\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.sub.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.sup.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.sup.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.14 String.prototype.sup()\n\n__webpack_require__(/*! ./_string-html */ \"./bwttest/node_modules/core-js/modules/_string-html.js\")('sup', function (createHTML) {\n  return function sup() {\n    return createHTML(this, 'sup', '', '');\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.sup.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.string.trim.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.string.trim.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.1.3.25 String.prototype.trim()\n\n__webpack_require__(/*! ./_string-trim */ \"./bwttest/node_modules/core-js/modules/_string-trim.js\")('trim', function ($trim) {\n  return function trim() {\n    return $trim(this, 3);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.string.trim.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./bwttest/node_modules/core-js/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./bwttest/node_modules/core-js/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./bwttest/node_modules/core-js/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./bwttest/node_modules/core-js/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./bwttest/node_modules/core-js/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./bwttest/node_modules/core-js/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./bwttest/node_modules/core-js/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./bwttest/node_modules/core-js/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./bwttest/node_modules/core-js/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./bwttest/node_modules/core-js/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./bwttest/node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./bwttest/node_modules/core-js/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./bwttest/node_modules/core-js/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./bwttest/node_modules/core-js/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./bwttest/node_modules/core-js/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./bwttest/node_modules/core-js/modules/_object-gopd.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./bwttest/node_modules/core-js/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function';\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function get() {\n      return dP(this, 'a', { value: 7 }).a;\n    }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function wrap(tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {\n  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    }return setSymbolDesc(it, key, D);\n  }return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) {\n    $defineProperty(it, key = keys[i++], P[key]);\n  }return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  }return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  }return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function _Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function $set(value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./bwttest/node_modules/core-js/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./bwttest/node_modules/core-js/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ \"./bwttest/node_modules/core-js/modules/_object-gops.js\").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./bwttest/node_modules/core-js/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols =\n// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {\n  wks(es6Symbols[j++]);\n}for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {\n  wksDefine(wellKnownSymbols[k++]);\n}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function _for(key) {\n    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) {\n      if (SymbolRegistry[key] === sym) return key;\n    }\n  },\n  useSetter: function useSetter() {\n    setter = true;\n  },\n  useSimple: function useSimple() {\n    setter = false;\n  }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) {\n      args.push(arguments[i++]);\n    }$replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function replacer(key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./bwttest/node_modules/core-js/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./bwttest/node_modules/core-js/modules/_typed.js\");\nvar buffer = __webpack_require__(/*! ./_typed-buffer */ \"./bwttest/node_modules/core-js/modules/_typed-buffer.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./bwttest/node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar ArrayBuffer = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\").ArrayBuffer;\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./bwttest/node_modules/core-js/modules/_species-constructor.js\");\nvar $ArrayBuffer = buffer.ArrayBuffer;\nvar $DataView = buffer.DataView;\nvar $isView = $typed.ABV && ArrayBuffer.isView;\nvar $slice = $ArrayBuffer.prototype.slice;\nvar VIEW = $typed.VIEW;\nvar ARRAY_BUFFER = 'ArrayBuffer';\n\n$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });\n\n$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {\n  // 24.1.3.1 ArrayBuffer.isView(arg)\n  isView: function isView(it) {\n    return $isView && $isView(it) || isObject(it) && VIEW in it;\n  }\n});\n\n$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\")(function () {\n  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;\n}), ARRAY_BUFFER, {\n  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)\n  slice: function slice(start, end) {\n    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix\n    var len = anObject(this).byteLength;\n    var first = toAbsoluteIndex(start, len);\n    var fin = toAbsoluteIndex(end === undefined ? len : end, len);\n    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));\n    var viewS = new $DataView(this);\n    var viewT = new $DataView(result);\n    var index = 0;\n    while (first < fin) {\n      viewT.setUint8(index++, viewS.getUint8(first++));\n    }return result;\n  }\n});\n\n__webpack_require__(/*! ./_set-species */ \"./bwttest/node_modules/core-js/modules/_set-species.js\")(ARRAY_BUFFER);\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.typed.array-buffer.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.typed.data-view.js":
/*!*********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ \"./bwttest/node_modules/core-js/modules/_typed.js\").ABV, {\n  DataView: __webpack_require__(/*! ./_typed-buffer */ \"./bwttest/node_modules/core-js/modules/_typed-buffer.js\").DataView\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.typed.data-view.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./bwttest/node_modules/core-js/modules/_typed-array.js\")('Float32', 4, function (init) {\n  return function Float32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.typed.float32-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./bwttest/node_modules/core-js/modules/_typed-array.js\")('Float64', 8, function (init) {\n  return function Float64Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.typed.float64-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./bwttest/node_modules/core-js/modules/_typed-array.js\")('Int16', 2, function (init) {\n  return function Int16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.typed.int16-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./bwttest/node_modules/core-js/modules/_typed-array.js\")('Int32', 4, function (init) {\n  return function Int32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.typed.int32-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./bwttest/node_modules/core-js/modules/_typed-array.js\")('Int8', 1, function (init) {\n  return function Int8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.typed.int8-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./bwttest/node_modules/core-js/modules/_typed-array.js\")('Uint16', 2, function (init) {\n  return function Uint16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.typed.uint16-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./bwttest/node_modules/core-js/modules/_typed-array.js\")('Uint32', 4, function (init) {\n  return function Uint32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.typed.uint32-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./bwttest/node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.typed.uint8-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!*******************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_typed-array */ \"./bwttest/node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8ClampedArray(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n}, true);\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.weak-map.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.weak-map.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar each = __webpack_require__(/*! ./_array-methods */ \"./bwttest/node_modules/core-js/modules/_array-methods.js\")(0);\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./bwttest/node_modules/core-js/modules/_redefine.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./bwttest/node_modules/core-js/modules/_meta.js\");\nvar assign = __webpack_require__(/*! ./_object-assign */ \"./bwttest/node_modules/core-js/modules/_object-assign.js\");\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./bwttest/node_modules/core-js/modules/_collection-weak.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./bwttest/node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./bwttest/node_modules/core-js/modules/_fails.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./bwttest/node_modules/core-js/modules/_validate-collection.js\");\nvar WEAK_MAP = 'WeakMap';\nvar getWeak = meta.getWeak;\nvar isExtensible = Object.isExtensible;\nvar uncaughtFrozenStore = weak.ufstore;\nvar tmp = {};\nvar InternalMap;\n\nvar wrapper = function wrapper(get) {\n  return function WeakMap() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n};\n\nvar methods = {\n  // 23.3.3.3 WeakMap.prototype.get(key)\n  get: function get(key) {\n    if (isObject(key)) {\n      var data = getWeak(key);\n      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);\n      return data ? data[this._i] : undefined;\n    }\n  },\n  // 23.3.3.5 WeakMap.prototype.set(key, value)\n  set: function set(key, value) {\n    return weak.def(validate(this, WEAK_MAP), key, value);\n  }\n};\n\n// 23.3 WeakMap Objects\nvar $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ \"./bwttest/node_modules/core-js/modules/_collection.js\")(WEAK_MAP, wrapper, methods, weak, true, true);\n\n// IE11 WeakMap frozen keys fix\nif (fails(function () {\n  return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;\n})) {\n  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);\n  assign(InternalMap.prototype, methods);\n  meta.NEED = true;\n  each(['delete', 'has', 'get', 'set'], function (key) {\n    var proto = $WeakMap.prototype;\n    var method = proto[key];\n    redefine(proto, key, function (a, b) {\n      // store frozen objects on internal weakmap shim\n      if (isObject(a) && !isExtensible(a)) {\n        if (!this._f) this._f = new InternalMap();\n        var result = this._f[key](a, b);\n        return key == 'set' ? this : result;\n        // store all the rest on native weakmap\n      }return method.call(this, a, b);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.weak-map.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es6.weak-set.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es6.weak-set.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./bwttest/node_modules/core-js/modules/_collection-weak.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./bwttest/node_modules/core-js/modules/_validate-collection.js\");\nvar WEAK_SET = 'WeakSet';\n\n// 23.4 WeakSet Objects\n__webpack_require__(/*! ./_collection */ \"./bwttest/node_modules/core-js/modules/_collection.js\")(WEAK_SET, function (get) {\n  return function WeakSet() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n}, {\n  // 23.4.3.1 WeakSet.prototype.add(value)\n  add: function add(value) {\n    return weak.def(validate(this, WEAK_SET), value, true);\n  }\n}, weak, false, true);\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es6.weak-set.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.array.flat-map.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.array.flat-map.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./bwttest/node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./bwttest/node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatMap: function flatMap(callbackfn /* , thisArg */) {\n    var O = toObject(this);\n    var sourceLen, A;\n    aFunction(callbackfn);\n    sourceLen = toLength(O.length);\n    A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./bwttest/node_modules/core-js/modules/_add-to-unscopables.js\")('flatMap');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.array.flat-map.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.array.flatten.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.array.flatten.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./bwttest/node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./bwttest/node_modules/core-js/modules/_to-integer.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./bwttest/node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatten: function flatten() /* depthArg = 1 */{\n    var depthArg = arguments[0];\n    var O = toObject(this);\n    var sourceLen = toLength(O.length);\n    var A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./bwttest/node_modules/core-js/modules/_add-to-unscopables.js\")('flatten');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.array.flatten.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.array.includes.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.array.includes.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/Array.prototype.includes\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $includes = __webpack_require__(/*! ./_array-includes */ \"./bwttest/node_modules/core-js/modules/_array-includes.js\")(true);\n\n$export($export.P, 'Array', {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./bwttest/node_modules/core-js/modules/_add-to-unscopables.js\")('includes');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.array.includes.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.asap.js":
/*!**********************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.asap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./bwttest/node_modules/core-js/modules/_microtask.js\")();\nvar process = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\").process;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./bwttest/node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\n$export($export.G, {\n  asap: function asap(fn) {\n    var domain = isNode && process.domain;\n    microtask(domain ? domain.bind(fn) : fn);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.asap.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.error.is-error.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.error.is-error.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/ljharb/proposal-is-error\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./bwttest/node_modules/core-js/modules/_cof.js\");\n\n$export($export.S, 'Error', {\n  isError: function isError(it) {\n    return cof(it) === 'Error';\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.error.is-error.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.global.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.G, { global: __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.global.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.map.from.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.map.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from\n__webpack_require__(/*! ./_set-collection-from */ \"./bwttest/node_modules/core-js/modules/_set-collection-from.js\")('Map');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.map.from.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.map.of.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.map.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of\n__webpack_require__(/*! ./_set-collection-of */ \"./bwttest/node_modules/core-js/modules/_set-collection-of.js\")('Map');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.map.of.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.map.to-json.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.map.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./bwttest/node_modules/core-js/modules/_collection-to-json.js\")('Map') });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.map.to-json.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.math.clamp.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.math.clamp.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clamp: function clamp(x, lower, upper) {\n    return Math.min(upper, Math.max(lower, x));\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.math.clamp.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.math.deg-per-rad.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.math.deg-per-rad.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.math.degrees.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.math.degrees.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar RAD_PER_DEG = 180 / Math.PI;\n\n$export($export.S, 'Math', {\n  degrees: function degrees(radians) {\n    return radians * RAD_PER_DEG;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.math.degrees.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.math.fscale.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.math.fscale.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar scale = __webpack_require__(/*! ./_math-scale */ \"./bwttest/node_modules/core-js/modules/_math-scale.js\");\nvar fround = __webpack_require__(/*! ./_math-fround */ \"./bwttest/node_modules/core-js/modules/_math-fround.js\");\n\n$export($export.S, 'Math', {\n  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {\n    return fround(scale(x, inLow, inHigh, outLow, outHigh));\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.math.fscale.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.math.iaddh.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.math.iaddh.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  iaddh: function iaddh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.math.iaddh.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.math.imulh.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.math.imulh.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  imulh: function imulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >> 16;\n    var v1 = $v >> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.math.imulh.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.math.isubh.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.math.isubh.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  isubh: function isubh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.math.isubh.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.math.rad-per-deg.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.math.rad-per-deg.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.math.radians.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.math.radians.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar DEG_PER_RAD = Math.PI / 180;\n\n$export($export.S, 'Math', {\n  radians: function radians(degrees) {\n    return degrees * DEG_PER_RAD;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.math.radians.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.math.scale.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.math.scale.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { scale: __webpack_require__(/*! ./_math-scale */ \"./bwttest/node_modules/core-js/modules/_math-scale.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.math.scale.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.math.signbit.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.math.signbit.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// http://jfbastien.github.io/papers/Math.signbit.html\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { signbit: function signbit(x) {\n    // eslint-disable-next-line no-self-compare\n    return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.math.signbit.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.math.umulh.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.math.umulh.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  umulh: function umulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >>> 16;\n    var v1 = $v >>> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.math.umulh.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.object.define-getter.js":
/*!**************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.object.define-getter.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\");\n\n// B.2.2.2 Object.prototype.__defineGetter__(P, getter)\n__webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./bwttest/node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __defineGetter__: function __defineGetter__(P, getter) {\n    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.object.define-getter.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.object.define-setter.js":
/*!**************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.object.define-setter.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./bwttest/node_modules/core-js/modules/_object-dp.js\");\n\n// B.2.2.3 Object.prototype.__defineSetter__(P, setter)\n__webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./bwttest/node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __defineSetter__: function __defineSetter__(P, setter) {\n    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.object.define-setter.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.object.entries.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.object.entries.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $entries = __webpack_require__(/*! ./_object-to-array */ \"./bwttest/node_modules/core-js/modules/_object-to-array.js\")(true);\n\n$export($export.S, 'Object', {\n  entries: function entries(it) {\n    return $entries(it);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.object.entries.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/tc39/proposal-object-getownpropertydescriptors\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar ownKeys = __webpack_require__(/*! ./_own-keys */ \"./bwttest/node_modules/core-js/modules/_own-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./bwttest/node_modules/core-js/modules/_to-iobject.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./bwttest/node_modules/core-js/modules/_object-gopd.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./bwttest/node_modules/core-js/modules/_create-property.js\");\n\n$export($export.S, 'Object', {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIObject(object);\n    var getDesc = gOPD.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var i = 0;\n    var key, desc;\n    while (keys.length > i) {\n      desc = getDesc(O, key = keys[i++]);\n      if (desc !== undefined) createProperty(result, key, desc);\n    }\n    return result;\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.object.lookup-getter.js":
/*!**************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./bwttest/node_modules/core-js/modules/_to-primitive.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./bwttest/node_modules/core-js/modules/_object-gpo.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./bwttest/node_modules/core-js/modules/_object-gopd.js\").f;\n\n// B.2.2.4 Object.prototype.__lookupGetter__(P)\n__webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./bwttest/node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __lookupGetter__: function __lookupGetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.get;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.object.lookup-getter.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.object.lookup-setter.js":
/*!**************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./bwttest/node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./bwttest/node_modules/core-js/modules/_to-primitive.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./bwttest/node_modules/core-js/modules/_object-gpo.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./bwttest/node_modules/core-js/modules/_object-gopd.js\").f;\n\n// B.2.2.5 Object.prototype.__lookupSetter__(P)\n__webpack_require__(/*! ./_descriptors */ \"./bwttest/node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./bwttest/node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __lookupSetter__: function __lookupSetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.set;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.object.lookup-setter.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.object.values.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.object.values.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $values = __webpack_require__(/*! ./_object-to-array */ \"./bwttest/node_modules/core-js/modules/_object-to-array.js\")(false);\n\n$export($export.S, 'Object', {\n  values: function values(it) {\n    return $values(it);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.object.values.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.observable.js":
/*!****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.observable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/zenparsing/es-observable\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./bwttest/node_modules/core-js/modules/_core.js\");\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./bwttest/node_modules/core-js/modules/_microtask.js\")();\nvar OBSERVABLE = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\")('observable');\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./bwttest/node_modules/core-js/modules/_an-instance.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./bwttest/node_modules/core-js/modules/_redefine-all.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./bwttest/node_modules/core-js/modules/_hide.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./bwttest/node_modules/core-js/modules/_for-of.js\");\nvar RETURN = forOf.RETURN;\n\nvar getMethod = function getMethod(fn) {\n  return fn == null ? undefined : aFunction(fn);\n};\n\nvar cleanupSubscription = function cleanupSubscription(subscription) {\n  var cleanup = subscription._c;\n  if (cleanup) {\n    subscription._c = undefined;\n    cleanup();\n  }\n};\n\nvar subscriptionClosed = function subscriptionClosed(subscription) {\n  return subscription._o === undefined;\n};\n\nvar closeSubscription = function closeSubscription(subscription) {\n  if (!subscriptionClosed(subscription)) {\n    subscription._o = undefined;\n    cleanupSubscription(subscription);\n  }\n};\n\nvar Subscription = function Subscription(observer, subscriber) {\n  anObject(observer);\n  this._c = undefined;\n  this._o = observer;\n  observer = new SubscriptionObserver(this);\n  try {\n    var cleanup = subscriber(observer);\n    var subscription = cleanup;\n    if (cleanup != null) {\n      if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {\n        subscription.unsubscribe();\n      };else aFunction(cleanup);\n      this._c = cleanup;\n    }\n  } catch (e) {\n    observer.error(e);\n    return;\n  }if (subscriptionClosed(this)) cleanupSubscription(this);\n};\n\nSubscription.prototype = redefineAll({}, {\n  unsubscribe: function unsubscribe() {\n    closeSubscription(this);\n  }\n});\n\nvar SubscriptionObserver = function SubscriptionObserver(subscription) {\n  this._s = subscription;\n};\n\nSubscriptionObserver.prototype = redefineAll({}, {\n  next: function next(value) {\n    var subscription = this._s;\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n      try {\n        var m = getMethod(observer.next);\n        if (m) return m.call(observer, value);\n      } catch (e) {\n        try {\n          closeSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      }\n    }\n  },\n  error: function error(value) {\n    var subscription = this._s;\n    if (subscriptionClosed(subscription)) throw value;\n    var observer = subscription._o;\n    subscription._o = undefined;\n    try {\n      var m = getMethod(observer.error);\n      if (!m) throw value;\n      value = m.call(observer, value);\n    } catch (e) {\n      try {\n        cleanupSubscription(subscription);\n      } finally {\n        throw e;\n      }\n    }cleanupSubscription(subscription);\n    return value;\n  },\n  complete: function complete(value) {\n    var subscription = this._s;\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n      subscription._o = undefined;\n      try {\n        var m = getMethod(observer.complete);\n        value = m ? m.call(observer, value) : undefined;\n      } catch (e) {\n        try {\n          cleanupSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      }cleanupSubscription(subscription);\n      return value;\n    }\n  }\n});\n\nvar $Observable = function Observable(subscriber) {\n  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);\n};\n\nredefineAll($Observable.prototype, {\n  subscribe: function subscribe(observer) {\n    return new Subscription(observer, this._f);\n  },\n  forEach: function forEach(fn) {\n    var that = this;\n    return new (core.Promise || global.Promise)(function (resolve, reject) {\n      aFunction(fn);\n      var subscription = that.subscribe({\n        next: function next(value) {\n          try {\n            return fn(value);\n          } catch (e) {\n            reject(e);\n            subscription.unsubscribe();\n          }\n        },\n        error: reject,\n        complete: resolve\n      });\n    });\n  }\n});\n\nredefineAll($Observable, {\n  from: function from(x) {\n    var C = typeof this === 'function' ? this : $Observable;\n    var method = getMethod(anObject(x)[OBSERVABLE]);\n    if (method) {\n      var observable = anObject(method.call(x));\n      return observable.constructor === C ? observable : new C(function (observer) {\n        return observable.subscribe(observer);\n      });\n    }\n    return new C(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          try {\n            if (forOf(x, false, function (it) {\n              observer.next(it);\n              if (done) return RETURN;\n            }) === RETURN) return;\n          } catch (e) {\n            if (done) throw e;\n            observer.error(e);\n            return;\n          }observer.complete();\n        }\n      });\n      return function () {\n        done = true;\n      };\n    });\n  },\n  of: function of() {\n    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) {\n      items[i] = arguments[i++];\n    }return new (typeof this === 'function' ? this : $Observable)(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          for (var j = 0; j < items.length; ++j) {\n            observer.next(items[j]);\n            if (done) return;\n          }observer.complete();\n        }\n      });\n      return function () {\n        done = true;\n      };\n    });\n  }\n});\n\nhide($Observable.prototype, OBSERVABLE, function () {\n  return this;\n});\n\n$export($export.G, { Observable: $Observable });\n\n__webpack_require__(/*! ./_set-species */ \"./bwttest/node_modules/core-js/modules/_set-species.js\")('Observable');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.observable.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./bwttest/node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./bwttest/node_modules/core-js/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./bwttest/node_modules/core-js/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function _finally(onFinally) {\n    var C = speciesConstructor(this, core.Promise || global.Promise);\n    var isFunction = typeof onFinally == 'function';\n    return this.then(isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () {\n        return x;\n      });\n    } : onFinally, isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () {\n        throw e;\n      });\n    } : onFinally);\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-promise-try\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./bwttest/node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./bwttest/node_modules/core-js/modules/_perform.js\");\n\n$export($export.S, 'Promise', { 'try': function _try(callbackfn) {\n    var promiseCapability = newPromiseCapability.f(this);\n    var result = perform(callbackfn);\n    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n    return promiseCapability.promise;\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.promise.try.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*****************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./bwttest/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar toMetaKey = metadata.key;\nvar ordinaryDefineOwnMetadata = metadata.set;\n\nmetadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {\n    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.reflect.define-metadata.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*****************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./bwttest/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar toMetaKey = metadata.key;\nvar getOrCreateMetadataMap = metadata.map;\nvar store = metadata.store;\n\nmetadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {\n    var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);\n    var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);\n    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;\n    if (metadataMap.size) return true;\n    var targetMetadata = store.get(target);\n    targetMetadata['delete'](targetKey);\n    return !!targetMetadata.size || store['delete'](target);\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.reflect.delete-metadata.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!*******************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Set = __webpack_require__(/*! ./es6.set */ \"./bwttest/node_modules/core-js/modules/es6.set.js\");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./bwttest/node_modules/core-js/modules/_array-from-iterable.js\");\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./bwttest/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./bwttest/node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nvar ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {\n  var oKeys = ordinaryOwnMetadataKeys(O, P);\n  var parent = getPrototypeOf(O);\n  if (parent === null) return oKeys;\n  var pKeys = ordinaryMetadataKeys(parent, P);\n  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;\n};\n\nmetadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {\n    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!**************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./bwttest/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./bwttest/node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nvar ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;\n};\n\nmetadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {\n    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.reflect.get-metadata.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***********************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./bwttest/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {\n    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!******************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./bwttest/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {\n    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.reflect.get-own-metadata.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!**************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./bwttest/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./bwttest/node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nvar ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return true;\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;\n};\n\nmetadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {\n    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.reflect.has-metadata.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!******************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./bwttest/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {\n    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.reflect.has-own-metadata.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $metadata = __webpack_require__(/*! ./_metadata */ \"./bwttest/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./bwttest/node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./bwttest/node_modules/core-js/modules/_a-function.js\");\nvar toMetaKey = $metadata.key;\nvar ordinaryDefineOwnMetadata = $metadata.set;\n\n$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {\n    return function decorator(target, targetKey) {\n      ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));\n    };\n  } });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.reflect.metadata.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.set.from.js":
/*!**************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.set.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from\n__webpack_require__(/*! ./_set-collection-from */ \"./bwttest/node_modules/core-js/modules/_set-collection-from.js\")('Set');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.set.from.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.set.of.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.set.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of\n__webpack_require__(/*! ./_set-collection-of */ \"./bwttest/node_modules/core-js/modules/_set-collection-of.js\")('Set');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.set.of.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.set.to-json.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.set.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./bwttest/node_modules/core-js/modules/_collection-to-json.js\")('Set') });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.set.to-json.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.string.at.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.string.at.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/mathiasbynens/String.prototype.at\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./bwttest/node_modules/core-js/modules/_string-at.js\")(true);\n\n$export($export.P, 'String', {\n  at: function at(pos) {\n    return $at(this, pos);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.string.at.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.string.match-all.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.string.match-all.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/String.prototype.matchAll/\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./bwttest/node_modules/core-js/modules/_defined.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./bwttest/node_modules/core-js/modules/_to-length.js\");\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./bwttest/node_modules/core-js/modules/_is-regexp.js\");\nvar getFlags = __webpack_require__(/*! ./_flags */ \"./bwttest/node_modules/core-js/modules/_flags.js\");\nvar RegExpProto = RegExp.prototype;\n\nvar $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {\n  this._r = regexp;\n  this._s = string;\n};\n\n__webpack_require__(/*! ./_iter-create */ \"./bwttest/node_modules/core-js/modules/_iter-create.js\")($RegExpStringIterator, 'RegExp String', function next() {\n  var match = this._r.exec(this._s);\n  return { value: match, done: match === null };\n});\n\n$export($export.P, 'String', {\n  matchAll: function matchAll(regexp) {\n    defined(this);\n    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');\n    var S = String(this);\n    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);\n    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);\n    rx.lastIndex = toLength(regexp.lastIndex);\n    return new $RegExpStringIterator(rx, S);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.string.match-all.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.string.pad-end.js":
/*!********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.string.pad-end.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./bwttest/node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./bwttest/node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\n$export($export.P + $export.F * /Version\\/10\\.\\d+(\\.\\d+)? Safari\\//.test(userAgent), 'String', {\n  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.string.pad-end.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.string.pad-start.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./bwttest/node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./bwttest/node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\n$export($export.P + $export.F * /Version\\/10\\.\\d+(\\.\\d+)? Safari\\//.test(userAgent), 'String', {\n  padStart: function padStart(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);\n  }\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.string.pad-start.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.string.trim-left.js":
/*!**********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n\n__webpack_require__(/*! ./_string-trim */ \"./bwttest/node_modules/core-js/modules/_string-trim.js\")('trimLeft', function ($trim) {\n  return function trimLeft() {\n    return $trim(this, 1);\n  };\n}, 'trimStart');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.string.trim-left.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.string.trim-right.js":
/*!***********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n\n__webpack_require__(/*! ./_string-trim */ \"./bwttest/node_modules/core-js/modules/_string-trim.js\")('trimRight', function ($trim) {\n  return function trimRight() {\n    return $trim(this, 2);\n  };\n}, 'trimEnd');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.string.trim-right.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_wks-define */ \"./bwttest/node_modules/core-js/modules/_wks-define.js\")('asyncIterator');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_wks-define */ \"./bwttest/node_modules/core-js/modules/_wks-define.js\")('observable');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.system.global.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.system.global.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'System', { global: __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\") });\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.system.global.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.weak-map.from.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.weak-map.from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from\n__webpack_require__(/*! ./_set-collection-from */ \"./bwttest/node_modules/core-js/modules/_set-collection-from.js\")('WeakMap');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.weak-map.from.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.weak-map.of.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.weak-map.of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of\n__webpack_require__(/*! ./_set-collection-of */ \"./bwttest/node_modules/core-js/modules/_set-collection-of.js\")('WeakMap');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.weak-map.of.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.weak-set.from.js":
/*!*******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.weak-set.from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from\n__webpack_require__(/*! ./_set-collection-from */ \"./bwttest/node_modules/core-js/modules/_set-collection-from.js\")('WeakSet');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.weak-set.from.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/es7.weak-set.of.js":
/*!*****************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/es7.weak-set.of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of\n__webpack_require__(/*! ./_set-collection-of */ \"./bwttest/node_modules/core-js/modules/_set-collection-of.js\")('WeakSet');\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/es7.weak-set.of.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"./bwttest/node_modules/core-js/modules/es6.array.iterator.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./bwttest/node_modules/core-js/modules/_object-keys.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./bwttest/node_modules/core-js/modules/_redefine.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./bwttest/node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./bwttest/node_modules/core-js/modules/_iterators.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./bwttest/node_modules/core-js/modules/_wks.js\");\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) {\n      if (!proto[key]) redefine(proto, key, $iterators[key], true);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/web.immediate.js":
/*!***************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/web.immediate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar $task = __webpack_require__(/*! ./_task */ \"./bwttest/node_modules/core-js/modules/_task.js\");\n$export($export.G + $export.B, {\n  setImmediate: $task.set,\n  clearImmediate: $task.clear\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/web.immediate.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/modules/web.timers.js":
/*!************************************************************!*\
  !*** ./bwttest/node_modules/core-js/modules/web.timers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ie9- setTimeout & setInterval additional parameters fix\nvar global = __webpack_require__(/*! ./_global */ \"./bwttest/node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./bwttest/node_modules/core-js/modules/_export.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./bwttest/node_modules/core-js/modules/_user-agent.js\");\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\nvar wrap = function wrap(set) {\n  return function (fn, time /* , ...args */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : false;\n    return set(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);\n    } : fn, time);\n  };\n};\n$export($export.G + $export.B + $export.F * MSIE, {\n  setTimeout: wrap(global.setTimeout),\n  setInterval: wrap(global.setInterval)\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/modules/web.timers.js?");

/***/ }),

/***/ "./bwttest/node_modules/core-js/shim.js":
/*!**********************************************!*\
  !*** ./bwttest/node_modules/core-js/shim.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/es6.symbol */ \"./bwttest/node_modules/core-js/modules/es6.symbol.js\");\n__webpack_require__(/*! ./modules/es6.object.create */ \"./bwttest/node_modules/core-js/modules/es6.object.create.js\");\n__webpack_require__(/*! ./modules/es6.object.define-property */ \"./bwttest/node_modules/core-js/modules/es6.object.define-property.js\");\n__webpack_require__(/*! ./modules/es6.object.define-properties */ \"./bwttest/node_modules/core-js/modules/es6.object.define-properties.js\");\n__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ \"./bwttest/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js\");\n__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ \"./bwttest/node_modules/core-js/modules/es6.object.get-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.object.keys */ \"./bwttest/node_modules/core-js/modules/es6.object.keys.js\");\n__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ \"./bwttest/node_modules/core-js/modules/es6.object.get-own-property-names.js\");\n__webpack_require__(/*! ./modules/es6.object.freeze */ \"./bwttest/node_modules/core-js/modules/es6.object.freeze.js\");\n__webpack_require__(/*! ./modules/es6.object.seal */ \"./bwttest/node_modules/core-js/modules/es6.object.seal.js\");\n__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ \"./bwttest/node_modules/core-js/modules/es6.object.prevent-extensions.js\");\n__webpack_require__(/*! ./modules/es6.object.is-frozen */ \"./bwttest/node_modules/core-js/modules/es6.object.is-frozen.js\");\n__webpack_require__(/*! ./modules/es6.object.is-sealed */ \"./bwttest/node_modules/core-js/modules/es6.object.is-sealed.js\");\n__webpack_require__(/*! ./modules/es6.object.is-extensible */ \"./bwttest/node_modules/core-js/modules/es6.object.is-extensible.js\");\n__webpack_require__(/*! ./modules/es6.object.assign */ \"./bwttest/node_modules/core-js/modules/es6.object.assign.js\");\n__webpack_require__(/*! ./modules/es6.object.is */ \"./bwttest/node_modules/core-js/modules/es6.object.is.js\");\n__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ \"./bwttest/node_modules/core-js/modules/es6.object.set-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.object.to-string */ \"./bwttest/node_modules/core-js/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ./modules/es6.function.bind */ \"./bwttest/node_modules/core-js/modules/es6.function.bind.js\");\n__webpack_require__(/*! ./modules/es6.function.name */ \"./bwttest/node_modules/core-js/modules/es6.function.name.js\");\n__webpack_require__(/*! ./modules/es6.function.has-instance */ \"./bwttest/node_modules/core-js/modules/es6.function.has-instance.js\");\n__webpack_require__(/*! ./modules/es6.parse-int */ \"./bwttest/node_modules/core-js/modules/es6.parse-int.js\");\n__webpack_require__(/*! ./modules/es6.parse-float */ \"./bwttest/node_modules/core-js/modules/es6.parse-float.js\");\n__webpack_require__(/*! ./modules/es6.number.constructor */ \"./bwttest/node_modules/core-js/modules/es6.number.constructor.js\");\n__webpack_require__(/*! ./modules/es6.number.to-fixed */ \"./bwttest/node_modules/core-js/modules/es6.number.to-fixed.js\");\n__webpack_require__(/*! ./modules/es6.number.to-precision */ \"./bwttest/node_modules/core-js/modules/es6.number.to-precision.js\");\n__webpack_require__(/*! ./modules/es6.number.epsilon */ \"./bwttest/node_modules/core-js/modules/es6.number.epsilon.js\");\n__webpack_require__(/*! ./modules/es6.number.is-finite */ \"./bwttest/node_modules/core-js/modules/es6.number.is-finite.js\");\n__webpack_require__(/*! ./modules/es6.number.is-integer */ \"./bwttest/node_modules/core-js/modules/es6.number.is-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.is-nan */ \"./bwttest/node_modules/core-js/modules/es6.number.is-nan.js\");\n__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ \"./bwttest/node_modules/core-js/modules/es6.number.is-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ \"./bwttest/node_modules/core-js/modules/es6.number.max-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ \"./bwttest/node_modules/core-js/modules/es6.number.min-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.parse-float */ \"./bwttest/node_modules/core-js/modules/es6.number.parse-float.js\");\n__webpack_require__(/*! ./modules/es6.number.parse-int */ \"./bwttest/node_modules/core-js/modules/es6.number.parse-int.js\");\n__webpack_require__(/*! ./modules/es6.math.acosh */ \"./bwttest/node_modules/core-js/modules/es6.math.acosh.js\");\n__webpack_require__(/*! ./modules/es6.math.asinh */ \"./bwttest/node_modules/core-js/modules/es6.math.asinh.js\");\n__webpack_require__(/*! ./modules/es6.math.atanh */ \"./bwttest/node_modules/core-js/modules/es6.math.atanh.js\");\n__webpack_require__(/*! ./modules/es6.math.cbrt */ \"./bwttest/node_modules/core-js/modules/es6.math.cbrt.js\");\n__webpack_require__(/*! ./modules/es6.math.clz32 */ \"./bwttest/node_modules/core-js/modules/es6.math.clz32.js\");\n__webpack_require__(/*! ./modules/es6.math.cosh */ \"./bwttest/node_modules/core-js/modules/es6.math.cosh.js\");\n__webpack_require__(/*! ./modules/es6.math.expm1 */ \"./bwttest/node_modules/core-js/modules/es6.math.expm1.js\");\n__webpack_require__(/*! ./modules/es6.math.fround */ \"./bwttest/node_modules/core-js/modules/es6.math.fround.js\");\n__webpack_require__(/*! ./modules/es6.math.hypot */ \"./bwttest/node_modules/core-js/modules/es6.math.hypot.js\");\n__webpack_require__(/*! ./modules/es6.math.imul */ \"./bwttest/node_modules/core-js/modules/es6.math.imul.js\");\n__webpack_require__(/*! ./modules/es6.math.log10 */ \"./bwttest/node_modules/core-js/modules/es6.math.log10.js\");\n__webpack_require__(/*! ./modules/es6.math.log1p */ \"./bwttest/node_modules/core-js/modules/es6.math.log1p.js\");\n__webpack_require__(/*! ./modules/es6.math.log2 */ \"./bwttest/node_modules/core-js/modules/es6.math.log2.js\");\n__webpack_require__(/*! ./modules/es6.math.sign */ \"./bwttest/node_modules/core-js/modules/es6.math.sign.js\");\n__webpack_require__(/*! ./modules/es6.math.sinh */ \"./bwttest/node_modules/core-js/modules/es6.math.sinh.js\");\n__webpack_require__(/*! ./modules/es6.math.tanh */ \"./bwttest/node_modules/core-js/modules/es6.math.tanh.js\");\n__webpack_require__(/*! ./modules/es6.math.trunc */ \"./bwttest/node_modules/core-js/modules/es6.math.trunc.js\");\n__webpack_require__(/*! ./modules/es6.string.from-code-point */ \"./bwttest/node_modules/core-js/modules/es6.string.from-code-point.js\");\n__webpack_require__(/*! ./modules/es6.string.raw */ \"./bwttest/node_modules/core-js/modules/es6.string.raw.js\");\n__webpack_require__(/*! ./modules/es6.string.trim */ \"./bwttest/node_modules/core-js/modules/es6.string.trim.js\");\n__webpack_require__(/*! ./modules/es6.string.iterator */ \"./bwttest/node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ./modules/es6.string.code-point-at */ \"./bwttest/node_modules/core-js/modules/es6.string.code-point-at.js\");\n__webpack_require__(/*! ./modules/es6.string.ends-with */ \"./bwttest/node_modules/core-js/modules/es6.string.ends-with.js\");\n__webpack_require__(/*! ./modules/es6.string.includes */ \"./bwttest/node_modules/core-js/modules/es6.string.includes.js\");\n__webpack_require__(/*! ./modules/es6.string.repeat */ \"./bwttest/node_modules/core-js/modules/es6.string.repeat.js\");\n__webpack_require__(/*! ./modules/es6.string.starts-with */ \"./bwttest/node_modules/core-js/modules/es6.string.starts-with.js\");\n__webpack_require__(/*! ./modules/es6.string.anchor */ \"./bwttest/node_modules/core-js/modules/es6.string.anchor.js\");\n__webpack_require__(/*! ./modules/es6.string.big */ \"./bwttest/node_modules/core-js/modules/es6.string.big.js\");\n__webpack_require__(/*! ./modules/es6.string.blink */ \"./bwttest/node_modules/core-js/modules/es6.string.blink.js\");\n__webpack_require__(/*! ./modules/es6.string.bold */ \"./bwttest/node_modules/core-js/modules/es6.string.bold.js\");\n__webpack_require__(/*! ./modules/es6.string.fixed */ \"./bwttest/node_modules/core-js/modules/es6.string.fixed.js\");\n__webpack_require__(/*! ./modules/es6.string.fontcolor */ \"./bwttest/node_modules/core-js/modules/es6.string.fontcolor.js\");\n__webpack_require__(/*! ./modules/es6.string.fontsize */ \"./bwttest/node_modules/core-js/modules/es6.string.fontsize.js\");\n__webpack_require__(/*! ./modules/es6.string.italics */ \"./bwttest/node_modules/core-js/modules/es6.string.italics.js\");\n__webpack_require__(/*! ./modules/es6.string.link */ \"./bwttest/node_modules/core-js/modules/es6.string.link.js\");\n__webpack_require__(/*! ./modules/es6.string.small */ \"./bwttest/node_modules/core-js/modules/es6.string.small.js\");\n__webpack_require__(/*! ./modules/es6.string.strike */ \"./bwttest/node_modules/core-js/modules/es6.string.strike.js\");\n__webpack_require__(/*! ./modules/es6.string.sub */ \"./bwttest/node_modules/core-js/modules/es6.string.sub.js\");\n__webpack_require__(/*! ./modules/es6.string.sup */ \"./bwttest/node_modules/core-js/modules/es6.string.sup.js\");\n__webpack_require__(/*! ./modules/es6.date.now */ \"./bwttest/node_modules/core-js/modules/es6.date.now.js\");\n__webpack_require__(/*! ./modules/es6.date.to-json */ \"./bwttest/node_modules/core-js/modules/es6.date.to-json.js\");\n__webpack_require__(/*! ./modules/es6.date.to-iso-string */ \"./bwttest/node_modules/core-js/modules/es6.date.to-iso-string.js\");\n__webpack_require__(/*! ./modules/es6.date.to-string */ \"./bwttest/node_modules/core-js/modules/es6.date.to-string.js\");\n__webpack_require__(/*! ./modules/es6.date.to-primitive */ \"./bwttest/node_modules/core-js/modules/es6.date.to-primitive.js\");\n__webpack_require__(/*! ./modules/es6.array.is-array */ \"./bwttest/node_modules/core-js/modules/es6.array.is-array.js\");\n__webpack_require__(/*! ./modules/es6.array.from */ \"./bwttest/node_modules/core-js/modules/es6.array.from.js\");\n__webpack_require__(/*! ./modules/es6.array.of */ \"./bwttest/node_modules/core-js/modules/es6.array.of.js\");\n__webpack_require__(/*! ./modules/es6.array.join */ \"./bwttest/node_modules/core-js/modules/es6.array.join.js\");\n__webpack_require__(/*! ./modules/es6.array.slice */ \"./bwttest/node_modules/core-js/modules/es6.array.slice.js\");\n__webpack_require__(/*! ./modules/es6.array.sort */ \"./bwttest/node_modules/core-js/modules/es6.array.sort.js\");\n__webpack_require__(/*! ./modules/es6.array.for-each */ \"./bwttest/node_modules/core-js/modules/es6.array.for-each.js\");\n__webpack_require__(/*! ./modules/es6.array.map */ \"./bwttest/node_modules/core-js/modules/es6.array.map.js\");\n__webpack_require__(/*! ./modules/es6.array.filter */ \"./bwttest/node_modules/core-js/modules/es6.array.filter.js\");\n__webpack_require__(/*! ./modules/es6.array.some */ \"./bwttest/node_modules/core-js/modules/es6.array.some.js\");\n__webpack_require__(/*! ./modules/es6.array.every */ \"./bwttest/node_modules/core-js/modules/es6.array.every.js\");\n__webpack_require__(/*! ./modules/es6.array.reduce */ \"./bwttest/node_modules/core-js/modules/es6.array.reduce.js\");\n__webpack_require__(/*! ./modules/es6.array.reduce-right */ \"./bwttest/node_modules/core-js/modules/es6.array.reduce-right.js\");\n__webpack_require__(/*! ./modules/es6.array.index-of */ \"./bwttest/node_modules/core-js/modules/es6.array.index-of.js\");\n__webpack_require__(/*! ./modules/es6.array.last-index-of */ \"./bwttest/node_modules/core-js/modules/es6.array.last-index-of.js\");\n__webpack_require__(/*! ./modules/es6.array.copy-within */ \"./bwttest/node_modules/core-js/modules/es6.array.copy-within.js\");\n__webpack_require__(/*! ./modules/es6.array.fill */ \"./bwttest/node_modules/core-js/modules/es6.array.fill.js\");\n__webpack_require__(/*! ./modules/es6.array.find */ \"./bwttest/node_modules/core-js/modules/es6.array.find.js\");\n__webpack_require__(/*! ./modules/es6.array.find-index */ \"./bwttest/node_modules/core-js/modules/es6.array.find-index.js\");\n__webpack_require__(/*! ./modules/es6.array.species */ \"./bwttest/node_modules/core-js/modules/es6.array.species.js\");\n__webpack_require__(/*! ./modules/es6.array.iterator */ \"./bwttest/node_modules/core-js/modules/es6.array.iterator.js\");\n__webpack_require__(/*! ./modules/es6.regexp.constructor */ \"./bwttest/node_modules/core-js/modules/es6.regexp.constructor.js\");\n__webpack_require__(/*! ./modules/es6.regexp.to-string */ \"./bwttest/node_modules/core-js/modules/es6.regexp.to-string.js\");\n__webpack_require__(/*! ./modules/es6.regexp.flags */ \"./bwttest/node_modules/core-js/modules/es6.regexp.flags.js\");\n__webpack_require__(/*! ./modules/es6.regexp.match */ \"./bwttest/node_modules/core-js/modules/es6.regexp.match.js\");\n__webpack_require__(/*! ./modules/es6.regexp.replace */ \"./bwttest/node_modules/core-js/modules/es6.regexp.replace.js\");\n__webpack_require__(/*! ./modules/es6.regexp.search */ \"./bwttest/node_modules/core-js/modules/es6.regexp.search.js\");\n__webpack_require__(/*! ./modules/es6.regexp.split */ \"./bwttest/node_modules/core-js/modules/es6.regexp.split.js\");\n__webpack_require__(/*! ./modules/es6.promise */ \"./bwttest/node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ./modules/es6.map */ \"./bwttest/node_modules/core-js/modules/es6.map.js\");\n__webpack_require__(/*! ./modules/es6.set */ \"./bwttest/node_modules/core-js/modules/es6.set.js\");\n__webpack_require__(/*! ./modules/es6.weak-map */ \"./bwttest/node_modules/core-js/modules/es6.weak-map.js\");\n__webpack_require__(/*! ./modules/es6.weak-set */ \"./bwttest/node_modules/core-js/modules/es6.weak-set.js\");\n__webpack_require__(/*! ./modules/es6.typed.array-buffer */ \"./bwttest/node_modules/core-js/modules/es6.typed.array-buffer.js\");\n__webpack_require__(/*! ./modules/es6.typed.data-view */ \"./bwttest/node_modules/core-js/modules/es6.typed.data-view.js\");\n__webpack_require__(/*! ./modules/es6.typed.int8-array */ \"./bwttest/node_modules/core-js/modules/es6.typed.int8-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint8-array */ \"./bwttest/node_modules/core-js/modules/es6.typed.uint8-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ \"./bwttest/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.int16-array */ \"./bwttest/node_modules/core-js/modules/es6.typed.int16-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint16-array */ \"./bwttest/node_modules/core-js/modules/es6.typed.uint16-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.int32-array */ \"./bwttest/node_modules/core-js/modules/es6.typed.int32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint32-array */ \"./bwttest/node_modules/core-js/modules/es6.typed.uint32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.float32-array */ \"./bwttest/node_modules/core-js/modules/es6.typed.float32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.float64-array */ \"./bwttest/node_modules/core-js/modules/es6.typed.float64-array.js\");\n__webpack_require__(/*! ./modules/es6.reflect.apply */ \"./bwttest/node_modules/core-js/modules/es6.reflect.apply.js\");\n__webpack_require__(/*! ./modules/es6.reflect.construct */ \"./bwttest/node_modules/core-js/modules/es6.reflect.construct.js\");\n__webpack_require__(/*! ./modules/es6.reflect.define-property */ \"./bwttest/node_modules/core-js/modules/es6.reflect.define-property.js\");\n__webpack_require__(/*! ./modules/es6.reflect.delete-property */ \"./bwttest/node_modules/core-js/modules/es6.reflect.delete-property.js\");\n__webpack_require__(/*! ./modules/es6.reflect.enumerate */ \"./bwttest/node_modules/core-js/modules/es6.reflect.enumerate.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get */ \"./bwttest/node_modules/core-js/modules/es6.reflect.get.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ \"./bwttest/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ \"./bwttest/node_modules/core-js/modules/es6.reflect.get-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.reflect.has */ \"./bwttest/node_modules/core-js/modules/es6.reflect.has.js\");\n__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ \"./bwttest/node_modules/core-js/modules/es6.reflect.is-extensible.js\");\n__webpack_require__(/*! ./modules/es6.reflect.own-keys */ \"./bwttest/node_modules/core-js/modules/es6.reflect.own-keys.js\");\n__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ \"./bwttest/node_modules/core-js/modules/es6.reflect.prevent-extensions.js\");\n__webpack_require__(/*! ./modules/es6.reflect.set */ \"./bwttest/node_modules/core-js/modules/es6.reflect.set.js\");\n__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ \"./bwttest/node_modules/core-js/modules/es6.reflect.set-prototype-of.js\");\n__webpack_require__(/*! ./modules/es7.array.includes */ \"./bwttest/node_modules/core-js/modules/es7.array.includes.js\");\n__webpack_require__(/*! ./modules/es7.array.flat-map */ \"./bwttest/node_modules/core-js/modules/es7.array.flat-map.js\");\n__webpack_require__(/*! ./modules/es7.array.flatten */ \"./bwttest/node_modules/core-js/modules/es7.array.flatten.js\");\n__webpack_require__(/*! ./modules/es7.string.at */ \"./bwttest/node_modules/core-js/modules/es7.string.at.js\");\n__webpack_require__(/*! ./modules/es7.string.pad-start */ \"./bwttest/node_modules/core-js/modules/es7.string.pad-start.js\");\n__webpack_require__(/*! ./modules/es7.string.pad-end */ \"./bwttest/node_modules/core-js/modules/es7.string.pad-end.js\");\n__webpack_require__(/*! ./modules/es7.string.trim-left */ \"./bwttest/node_modules/core-js/modules/es7.string.trim-left.js\");\n__webpack_require__(/*! ./modules/es7.string.trim-right */ \"./bwttest/node_modules/core-js/modules/es7.string.trim-right.js\");\n__webpack_require__(/*! ./modules/es7.string.match-all */ \"./bwttest/node_modules/core-js/modules/es7.string.match-all.js\");\n__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ \"./bwttest/node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ./modules/es7.symbol.observable */ \"./bwttest/node_modules/core-js/modules/es7.symbol.observable.js\");\n__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ \"./bwttest/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js\");\n__webpack_require__(/*! ./modules/es7.object.values */ \"./bwttest/node_modules/core-js/modules/es7.object.values.js\");\n__webpack_require__(/*! ./modules/es7.object.entries */ \"./bwttest/node_modules/core-js/modules/es7.object.entries.js\");\n__webpack_require__(/*! ./modules/es7.object.define-getter */ \"./bwttest/node_modules/core-js/modules/es7.object.define-getter.js\");\n__webpack_require__(/*! ./modules/es7.object.define-setter */ \"./bwttest/node_modules/core-js/modules/es7.object.define-setter.js\");\n__webpack_require__(/*! ./modules/es7.object.lookup-getter */ \"./bwttest/node_modules/core-js/modules/es7.object.lookup-getter.js\");\n__webpack_require__(/*! ./modules/es7.object.lookup-setter */ \"./bwttest/node_modules/core-js/modules/es7.object.lookup-setter.js\");\n__webpack_require__(/*! ./modules/es7.map.to-json */ \"./bwttest/node_modules/core-js/modules/es7.map.to-json.js\");\n__webpack_require__(/*! ./modules/es7.set.to-json */ \"./bwttest/node_modules/core-js/modules/es7.set.to-json.js\");\n__webpack_require__(/*! ./modules/es7.map.of */ \"./bwttest/node_modules/core-js/modules/es7.map.of.js\");\n__webpack_require__(/*! ./modules/es7.set.of */ \"./bwttest/node_modules/core-js/modules/es7.set.of.js\");\n__webpack_require__(/*! ./modules/es7.weak-map.of */ \"./bwttest/node_modules/core-js/modules/es7.weak-map.of.js\");\n__webpack_require__(/*! ./modules/es7.weak-set.of */ \"./bwttest/node_modules/core-js/modules/es7.weak-set.of.js\");\n__webpack_require__(/*! ./modules/es7.map.from */ \"./bwttest/node_modules/core-js/modules/es7.map.from.js\");\n__webpack_require__(/*! ./modules/es7.set.from */ \"./bwttest/node_modules/core-js/modules/es7.set.from.js\");\n__webpack_require__(/*! ./modules/es7.weak-map.from */ \"./bwttest/node_modules/core-js/modules/es7.weak-map.from.js\");\n__webpack_require__(/*! ./modules/es7.weak-set.from */ \"./bwttest/node_modules/core-js/modules/es7.weak-set.from.js\");\n__webpack_require__(/*! ./modules/es7.global */ \"./bwttest/node_modules/core-js/modules/es7.global.js\");\n__webpack_require__(/*! ./modules/es7.system.global */ \"./bwttest/node_modules/core-js/modules/es7.system.global.js\");\n__webpack_require__(/*! ./modules/es7.error.is-error */ \"./bwttest/node_modules/core-js/modules/es7.error.is-error.js\");\n__webpack_require__(/*! ./modules/es7.math.clamp */ \"./bwttest/node_modules/core-js/modules/es7.math.clamp.js\");\n__webpack_require__(/*! ./modules/es7.math.deg-per-rad */ \"./bwttest/node_modules/core-js/modules/es7.math.deg-per-rad.js\");\n__webpack_require__(/*! ./modules/es7.math.degrees */ \"./bwttest/node_modules/core-js/modules/es7.math.degrees.js\");\n__webpack_require__(/*! ./modules/es7.math.fscale */ \"./bwttest/node_modules/core-js/modules/es7.math.fscale.js\");\n__webpack_require__(/*! ./modules/es7.math.iaddh */ \"./bwttest/node_modules/core-js/modules/es7.math.iaddh.js\");\n__webpack_require__(/*! ./modules/es7.math.isubh */ \"./bwttest/node_modules/core-js/modules/es7.math.isubh.js\");\n__webpack_require__(/*! ./modules/es7.math.imulh */ \"./bwttest/node_modules/core-js/modules/es7.math.imulh.js\");\n__webpack_require__(/*! ./modules/es7.math.rad-per-deg */ \"./bwttest/node_modules/core-js/modules/es7.math.rad-per-deg.js\");\n__webpack_require__(/*! ./modules/es7.math.radians */ \"./bwttest/node_modules/core-js/modules/es7.math.radians.js\");\n__webpack_require__(/*! ./modules/es7.math.scale */ \"./bwttest/node_modules/core-js/modules/es7.math.scale.js\");\n__webpack_require__(/*! ./modules/es7.math.umulh */ \"./bwttest/node_modules/core-js/modules/es7.math.umulh.js\");\n__webpack_require__(/*! ./modules/es7.math.signbit */ \"./bwttest/node_modules/core-js/modules/es7.math.signbit.js\");\n__webpack_require__(/*! ./modules/es7.promise.finally */ \"./bwttest/node_modules/core-js/modules/es7.promise.finally.js\");\n__webpack_require__(/*! ./modules/es7.promise.try */ \"./bwttest/node_modules/core-js/modules/es7.promise.try.js\");\n__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ \"./bwttest/node_modules/core-js/modules/es7.reflect.define-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ \"./bwttest/node_modules/core-js/modules/es7.reflect.delete-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ \"./bwttest/node_modules/core-js/modules/es7.reflect.get-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ \"./bwttest/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ \"./bwttest/node_modules/core-js/modules/es7.reflect.get-own-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ \"./bwttest/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js\");\n__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ \"./bwttest/node_modules/core-js/modules/es7.reflect.has-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ \"./bwttest/node_modules/core-js/modules/es7.reflect.has-own-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.metadata */ \"./bwttest/node_modules/core-js/modules/es7.reflect.metadata.js\");\n__webpack_require__(/*! ./modules/es7.asap */ \"./bwttest/node_modules/core-js/modules/es7.asap.js\");\n__webpack_require__(/*! ./modules/es7.observable */ \"./bwttest/node_modules/core-js/modules/es7.observable.js\");\n__webpack_require__(/*! ./modules/web.timers */ \"./bwttest/node_modules/core-js/modules/web.timers.js\");\n__webpack_require__(/*! ./modules/web.immediate */ \"./bwttest/node_modules/core-js/modules/web.immediate.js\");\n__webpack_require__(/*! ./modules/web.dom.iterable */ \"./bwttest/node_modules/core-js/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ./modules/_core */ \"./bwttest/node_modules/core-js/modules/_core.js\");\n\n//# sourceURL=webpack:///./bwttest/node_modules/core-js/shim.js?");

/***/ }),

/***/ "./bwttest/node_modules/fastclick/lib/fastclick.js":
/*!*********************************************************!*\
  !*** ./bwttest/node_modules/fastclick/lib/fastclick.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n;(function () {\n\t'use strict';\n\n\t/**\n  * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.\n  *\n  * @codingstandard ftlabs-jsv2\n  * @copyright The Financial Times Limited [All Rights Reserved]\n  * @license MIT License (see LICENSE.txt)\n  */\n\n\t/*jslint browser:true, node:true*/\n\t/*global define, Event, Node*/\n\n\t/**\n  * Instantiate fast-clicking listeners on the specified layer.\n  *\n  * @constructor\n  * @param {Element} layer The layer to listen on\n  * @param {Object} [options={}] The options to override the defaults\n  */\n\n\tfunction FastClick(layer, options) {\n\t\tvar oldOnClick;\n\n\t\toptions = options || {};\n\n\t\t/**\n   * Whether a click is currently being tracked.\n   *\n   * @type boolean\n   */\n\t\tthis.trackingClick = false;\n\n\t\t/**\n   * Timestamp for when click tracking started.\n   *\n   * @type number\n   */\n\t\tthis.trackingClickStart = 0;\n\n\t\t/**\n   * The element being tracked for a click.\n   *\n   * @type EventTarget\n   */\n\t\tthis.targetElement = null;\n\n\t\t/**\n   * X-coordinate of touch start event.\n   *\n   * @type number\n   */\n\t\tthis.touchStartX = 0;\n\n\t\t/**\n   * Y-coordinate of touch start event.\n   *\n   * @type number\n   */\n\t\tthis.touchStartY = 0;\n\n\t\t/**\n   * ID of the last touch, retrieved from Touch.identifier.\n   *\n   * @type number\n   */\n\t\tthis.lastTouchIdentifier = 0;\n\n\t\t/**\n   * Touchmove boundary, beyond which a click will be cancelled.\n   *\n   * @type number\n   */\n\t\tthis.touchBoundary = options.touchBoundary || 10;\n\n\t\t/**\n   * The FastClick layer.\n   *\n   * @type Element\n   */\n\t\tthis.layer = layer;\n\n\t\t/**\n   * The minimum time between tap(touchstart and touchend) events\n   *\n   * @type number\n   */\n\t\tthis.tapDelay = options.tapDelay || 200;\n\n\t\t/**\n   * The maximum time for a tap\n   *\n   * @type number\n   */\n\t\tthis.tapTimeout = options.tapTimeout || 700;\n\n\t\tif (FastClick.notNeeded(layer)) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Some old versions of Android don't have Function.prototype.bind\n\t\tfunction bind(method, context) {\n\t\t\treturn function () {\n\t\t\t\treturn method.apply(context, arguments);\n\t\t\t};\n\t\t}\n\n\t\tvar methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];\n\t\tvar context = this;\n\t\tfor (var i = 0, l = methods.length; i < l; i++) {\n\t\t\tcontext[methods[i]] = bind(context[methods[i]], context);\n\t\t}\n\n\t\t// Set up event handlers as required\n\t\tif (deviceIsAndroid) {\n\t\t\tlayer.addEventListener('mouseover', this.onMouse, true);\n\t\t\tlayer.addEventListener('mousedown', this.onMouse, true);\n\t\t\tlayer.addEventListener('mouseup', this.onMouse, true);\n\t\t}\n\n\t\tlayer.addEventListener('click', this.onClick, true);\n\t\tlayer.addEventListener('touchstart', this.onTouchStart, false);\n\t\tlayer.addEventListener('touchmove', this.onTouchMove, false);\n\t\tlayer.addEventListener('touchend', this.onTouchEnd, false);\n\t\tlayer.addEventListener('touchcancel', this.onTouchCancel, false);\n\n\t\t// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)\n\t\t// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick\n\t\t// layer when they are cancelled.\n\t\tif (!Event.prototype.stopImmediatePropagation) {\n\t\t\tlayer.removeEventListener = function (type, callback, capture) {\n\t\t\t\tvar rmv = Node.prototype.removeEventListener;\n\t\t\t\tif (type === 'click') {\n\t\t\t\t\trmv.call(layer, type, callback.hijacked || callback, capture);\n\t\t\t\t} else {\n\t\t\t\t\trmv.call(layer, type, callback, capture);\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tlayer.addEventListener = function (type, callback, capture) {\n\t\t\t\tvar adv = Node.prototype.addEventListener;\n\t\t\t\tif (type === 'click') {\n\t\t\t\t\tadv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {\n\t\t\t\t\t\tif (!event.propagationStopped) {\n\t\t\t\t\t\t\tcallback(event);\n\t\t\t\t\t\t}\n\t\t\t\t\t}), capture);\n\t\t\t\t} else {\n\t\t\t\t\tadv.call(layer, type, callback, capture);\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\n\t\t// If a handler is already declared in the element's onclick attribute, it will be fired before\n\t\t// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and\n\t\t// adding it as listener.\n\t\tif (typeof layer.onclick === 'function') {\n\n\t\t\t// Android browser on at least 3.2 requires a new reference to the function in layer.onclick\n\t\t\t// - the old one won't work if passed to addEventListener directly.\n\t\t\toldOnClick = layer.onclick;\n\t\t\tlayer.addEventListener('click', function (event) {\n\t\t\t\toldOnClick(event);\n\t\t\t}, false);\n\t\t\tlayer.onclick = null;\n\t\t}\n\t}\n\n\t/**\n * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.\n *\n * @type boolean\n */\n\tvar deviceIsWindowsPhone = navigator.userAgent.indexOf(\"Windows Phone\") >= 0;\n\n\t/**\n  * Android requires exceptions.\n  *\n  * @type boolean\n  */\n\tvar deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;\n\n\t/**\n  * iOS requires exceptions.\n  *\n  * @type boolean\n  */\n\tvar deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;\n\n\t/**\n  * iOS 4 requires an exception for select elements.\n  *\n  * @type boolean\n  */\n\tvar deviceIsIOS4 = deviceIsIOS && /OS 4_\\d(_\\d)?/.test(navigator.userAgent);\n\n\t/**\n  * iOS 6.0-7.* requires the target element to be manually derived\n  *\n  * @type boolean\n  */\n\tvar deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\\d/.test(navigator.userAgent);\n\n\t/**\n  * BlackBerry requires exceptions.\n  *\n  * @type boolean\n  */\n\tvar deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;\n\n\t/**\n  * Determine whether a given element requires a native click.\n  *\n  * @param {EventTarget|Element} target Target DOM element\n  * @returns {boolean} Returns true if the element needs a native click\n  */\n\tFastClick.prototype.needsClick = function (target) {\n\t\tswitch (target.nodeName.toLowerCase()) {\n\n\t\t\t// Don't send a synthetic click to disabled inputs (issue #62)\n\t\t\tcase 'button':\n\t\t\tcase 'select':\n\t\t\tcase 'textarea':\n\t\t\t\tif (target.disabled) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\n\t\t\t\tbreak;\n\t\t\tcase 'input':\n\n\t\t\t\t// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)\n\t\t\t\tif (deviceIsIOS && target.type === 'file' || target.disabled) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\n\t\t\t\tbreak;\n\t\t\tcase 'label':\n\t\t\tcase 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames\n\t\t\tcase 'video':\n\t\t\t\treturn true;\n\t\t}\n\n\t\treturn (/\\bneedsclick\\b/.test(target.className)\n\t\t);\n\t};\n\n\t/**\n  * Determine whether a given element requires a call to focus to simulate click into element.\n  *\n  * @param {EventTarget|Element} target Target DOM element\n  * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.\n  */\n\tFastClick.prototype.needsFocus = function (target) {\n\t\tswitch (target.nodeName.toLowerCase()) {\n\t\t\tcase 'textarea':\n\t\t\t\treturn true;\n\t\t\tcase 'select':\n\t\t\t\treturn !deviceIsAndroid;\n\t\t\tcase 'input':\n\t\t\t\tswitch (target.type) {\n\t\t\t\t\tcase 'button':\n\t\t\t\t\tcase 'checkbox':\n\t\t\t\t\tcase 'file':\n\t\t\t\t\tcase 'image':\n\t\t\t\t\tcase 'radio':\n\t\t\t\t\tcase 'submit':\n\t\t\t\t\t\treturn false;\n\t\t\t\t}\n\n\t\t\t\t// No point in attempting to focus disabled inputs\n\t\t\t\treturn !target.disabled && !target.readOnly;\n\t\t\tdefault:\n\t\t\t\treturn (/\\bneedsfocus\\b/.test(target.className)\n\t\t\t\t);\n\t\t}\n\t};\n\n\t/**\n  * Send a click event to the specified element.\n  *\n  * @param {EventTarget|Element} targetElement\n  * @param {Event} event\n  */\n\tFastClick.prototype.sendClick = function (targetElement, event) {\n\t\tvar clickEvent, touch;\n\n\t\t// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)\n\t\tif (document.activeElement && document.activeElement !== targetElement) {\n\t\t\tdocument.activeElement.blur();\n\t\t}\n\n\t\ttouch = event.changedTouches[0];\n\n\t\t// Synthesise a click event, with an extra attribute so it can be tracked\n\t\tclickEvent = document.createEvent('MouseEvents');\n\t\tclickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);\n\t\tclickEvent.forwardedTouchEvent = true;\n\t\ttargetElement.dispatchEvent(clickEvent);\n\t};\n\n\tFastClick.prototype.determineEventType = function (targetElement) {\n\n\t\t//Issue #159: Android Chrome Select Box does not open with a synthetic click event\n\t\tif (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {\n\t\t\treturn 'mousedown';\n\t\t}\n\n\t\treturn 'click';\n\t};\n\n\t/**\n  * @param {EventTarget|Element} targetElement\n  */\n\tFastClick.prototype.focus = function (targetElement) {\n\t\tvar length;\n\n\t\t// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.\n\t\tif (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {\n\t\t\tlength = targetElement.value.length;\n\t\t\ttargetElement.setSelectionRange(length, length);\n\t\t} else {\n\t\t\ttargetElement.focus();\n\t\t}\n\t};\n\n\t/**\n  * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.\n  *\n  * @param {EventTarget|Element} targetElement\n  */\n\tFastClick.prototype.updateScrollParent = function (targetElement) {\n\t\tvar scrollParent, parentElement;\n\n\t\tscrollParent = targetElement.fastClickScrollParent;\n\n\t\t// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the\n\t\t// target element was moved to another parent.\n\t\tif (!scrollParent || !scrollParent.contains(targetElement)) {\n\t\t\tparentElement = targetElement;\n\t\t\tdo {\n\t\t\t\tif (parentElement.scrollHeight > parentElement.offsetHeight) {\n\t\t\t\t\tscrollParent = parentElement;\n\t\t\t\t\ttargetElement.fastClickScrollParent = parentElement;\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\n\t\t\t\tparentElement = parentElement.parentElement;\n\t\t\t} while (parentElement);\n\t\t}\n\n\t\t// Always update the scroll top tracker if possible.\n\t\tif (scrollParent) {\n\t\t\tscrollParent.fastClickLastScrollTop = scrollParent.scrollTop;\n\t\t}\n\t};\n\n\t/**\n  * @param {EventTarget} targetElement\n  * @returns {Element|EventTarget}\n  */\n\tFastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {\n\n\t\t// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.\n\t\tif (eventTarget.nodeType === Node.TEXT_NODE) {\n\t\t\treturn eventTarget.parentNode;\n\t\t}\n\n\t\treturn eventTarget;\n\t};\n\n\t/**\n  * On touch start, record the position and scroll offset.\n  *\n  * @param {Event} event\n  * @returns {boolean}\n  */\n\tFastClick.prototype.onTouchStart = function (event) {\n\t\tvar targetElement, touch, selection;\n\n\t\t// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).\n\t\tif (event.targetTouches.length > 1) {\n\t\t\treturn true;\n\t\t}\n\n\t\ttargetElement = this.getTargetElementFromEventTarget(event.target);\n\t\ttouch = event.targetTouches[0];\n\n\t\tif (deviceIsIOS) {\n\n\t\t\t// Only trusted events will deselect text on iOS (issue #49)\n\t\t\tselection = window.getSelection();\n\t\t\tif (selection.rangeCount && !selection.isCollapsed) {\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\tif (!deviceIsIOS4) {\n\n\t\t\t\t// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):\n\t\t\t\t// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched\n\t\t\t\t// with the same identifier as the touch event that previously triggered the click that triggered the alert.\n\t\t\t\t// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an\n\t\t\t\t// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.\n\t\t\t\t// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,\n\t\t\t\t// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,\n\t\t\t\t// random integers, it's safe to to continue if the identifier is 0 here.\n\t\t\t\tif (touch.identifier && touch.identifier === this.lastTouchIdentifier) {\n\t\t\t\t\tevent.preventDefault();\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\n\t\t\t\tthis.lastTouchIdentifier = touch.identifier;\n\n\t\t\t\t// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:\n\t\t\t\t// 1) the user does a fling scroll on the scrollable layer\n\t\t\t\t// 2) the user stops the fling scroll with another tap\n\t\t\t\t// then the event.target of the last 'touchend' event will be the element that was under the user's finger\n\t\t\t\t// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check\n\t\t\t\t// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).\n\t\t\t\tthis.updateScrollParent(targetElement);\n\t\t\t}\n\t\t}\n\n\t\tthis.trackingClick = true;\n\t\tthis.trackingClickStart = event.timeStamp;\n\t\tthis.targetElement = targetElement;\n\n\t\tthis.touchStartX = touch.pageX;\n\t\tthis.touchStartY = touch.pageY;\n\n\t\t// Prevent phantom clicks on fast double-tap (issue #36)\n\t\tif (event.timeStamp - this.lastClickTime < this.tapDelay) {\n\t\t\tevent.preventDefault();\n\t\t}\n\n\t\treturn true;\n\t};\n\n\t/**\n  * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.\n  *\n  * @param {Event} event\n  * @returns {boolean}\n  */\n\tFastClick.prototype.touchHasMoved = function (event) {\n\t\tvar touch = event.changedTouches[0],\n\t\t    boundary = this.touchBoundary;\n\n\t\tif (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {\n\t\t\treturn true;\n\t\t}\n\n\t\treturn false;\n\t};\n\n\t/**\n  * Update the last position.\n  *\n  * @param {Event} event\n  * @returns {boolean}\n  */\n\tFastClick.prototype.onTouchMove = function (event) {\n\t\tif (!this.trackingClick) {\n\t\t\treturn true;\n\t\t}\n\n\t\t// If the touch has moved, cancel the click tracking\n\t\tif (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {\n\t\t\tthis.trackingClick = false;\n\t\t\tthis.targetElement = null;\n\t\t}\n\n\t\treturn true;\n\t};\n\n\t/**\n  * Attempt to find the labelled control for the given label element.\n  *\n  * @param {EventTarget|HTMLLabelElement} labelElement\n  * @returns {Element|null}\n  */\n\tFastClick.prototype.findControl = function (labelElement) {\n\n\t\t// Fast path for newer browsers supporting the HTML5 control attribute\n\t\tif (labelElement.control !== undefined) {\n\t\t\treturn labelElement.control;\n\t\t}\n\n\t\t// All browsers under test that support touch events also support the HTML5 htmlFor attribute\n\t\tif (labelElement.htmlFor) {\n\t\t\treturn document.getElementById(labelElement.htmlFor);\n\t\t}\n\n\t\t// If no for attribute exists, attempt to retrieve the first labellable descendant element\n\t\t// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label\n\t\treturn labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');\n\t};\n\n\t/**\n  * On touch end, determine whether to send a click event at once.\n  *\n  * @param {Event} event\n  * @returns {boolean}\n  */\n\tFastClick.prototype.onTouchEnd = function (event) {\n\t\tvar forElement,\n\t\t    trackingClickStart,\n\t\t    targetTagName,\n\t\t    scrollParent,\n\t\t    touch,\n\t\t    targetElement = this.targetElement;\n\n\t\tif (!this.trackingClick) {\n\t\t\treturn true;\n\t\t}\n\n\t\t// Prevent phantom clicks on fast double-tap (issue #36)\n\t\tif (event.timeStamp - this.lastClickTime < this.tapDelay) {\n\t\t\tthis.cancelNextClick = true;\n\t\t\treturn true;\n\t\t}\n\n\t\tif (event.timeStamp - this.trackingClickStart > this.tapTimeout) {\n\t\t\treturn true;\n\t\t}\n\n\t\t// Reset to prevent wrong click cancel on input (issue #156).\n\t\tthis.cancelNextClick = false;\n\n\t\tthis.lastClickTime = event.timeStamp;\n\n\t\ttrackingClickStart = this.trackingClickStart;\n\t\tthis.trackingClick = false;\n\t\tthis.trackingClickStart = 0;\n\n\t\t// On some iOS devices, the targetElement supplied with the event is invalid if the layer\n\t\t// is performing a transition or scroll, and has to be re-detected manually. Note that\n\t\t// for this to function correctly, it must be called *after* the event target is checked!\n\t\t// See issue #57; also filed as rdar://13048589 .\n\t\tif (deviceIsIOSWithBadTarget) {\n\t\t\ttouch = event.changedTouches[0];\n\n\t\t\t// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null\n\t\t\ttargetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;\n\t\t\ttargetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;\n\t\t}\n\n\t\ttargetTagName = targetElement.tagName.toLowerCase();\n\t\tif (targetTagName === 'label') {\n\t\t\tforElement = this.findControl(targetElement);\n\t\t\tif (forElement) {\n\t\t\t\tthis.focus(targetElement);\n\t\t\t\tif (deviceIsAndroid) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\n\t\t\t\ttargetElement = forElement;\n\t\t\t}\n\t\t} else if (this.needsFocus(targetElement)) {\n\n\t\t\t// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.\n\t\t\t// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).\n\t\t\tif (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {\n\t\t\t\tthis.targetElement = null;\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tthis.focus(targetElement);\n\t\t\tthis.sendClick(targetElement, event);\n\n\t\t\t// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.\n\t\t\t// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)\n\t\t\tif (!deviceIsIOS || targetTagName !== 'select') {\n\t\t\t\tthis.targetElement = null;\n\t\t\t\tevent.preventDefault();\n\t\t\t}\n\n\t\t\treturn false;\n\t\t}\n\n\t\tif (deviceIsIOS && !deviceIsIOS4) {\n\n\t\t\t// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled\n\t\t\t// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).\n\t\t\tscrollParent = targetElement.fastClickScrollParent;\n\t\t\tif (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\n\t\t// Prevent the actual click from going though - unless the target node is marked as requiring\n\t\t// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.\n\t\tif (!this.needsClick(targetElement)) {\n\t\t\tevent.preventDefault();\n\t\t\tthis.sendClick(targetElement, event);\n\t\t}\n\n\t\treturn false;\n\t};\n\n\t/**\n  * On touch cancel, stop tracking the click.\n  *\n  * @returns {void}\n  */\n\tFastClick.prototype.onTouchCancel = function () {\n\t\tthis.trackingClick = false;\n\t\tthis.targetElement = null;\n\t};\n\n\t/**\n  * Determine mouse events which should be permitted.\n  *\n  * @param {Event} event\n  * @returns {boolean}\n  */\n\tFastClick.prototype.onMouse = function (event) {\n\n\t\t// If a target element was never set (because a touch event was never fired) allow the event\n\t\tif (!this.targetElement) {\n\t\t\treturn true;\n\t\t}\n\n\t\tif (event.forwardedTouchEvent) {\n\t\t\treturn true;\n\t\t}\n\n\t\t// Programmatically generated events targeting a specific element should be permitted\n\t\tif (!event.cancelable) {\n\t\t\treturn true;\n\t\t}\n\n\t\t// Derive and check the target element to see whether the mouse event needs to be permitted;\n\t\t// unless explicitly enabled, prevent non-touch click events from triggering actions,\n\t\t// to prevent ghost/doubleclicks.\n\t\tif (!this.needsClick(this.targetElement) || this.cancelNextClick) {\n\n\t\t\t// Prevent any user-added listeners declared on FastClick element from being fired.\n\t\t\tif (event.stopImmediatePropagation) {\n\t\t\t\tevent.stopImmediatePropagation();\n\t\t\t} else {\n\n\t\t\t\t// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)\n\t\t\t\tevent.propagationStopped = true;\n\t\t\t}\n\n\t\t\t// Cancel the event\n\t\t\tevent.stopPropagation();\n\t\t\tevent.preventDefault();\n\n\t\t\treturn false;\n\t\t}\n\n\t\t// If the mouse event is permitted, return true for the action to go through.\n\t\treturn true;\n\t};\n\n\t/**\n  * On actual clicks, determine whether this is a touch-generated click, a click action occurring\n  * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or\n  * an actual click which should be permitted.\n  *\n  * @param {Event} event\n  * @returns {boolean}\n  */\n\tFastClick.prototype.onClick = function (event) {\n\t\tvar permitted;\n\n\t\t// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.\n\t\tif (this.trackingClick) {\n\t\t\tthis.targetElement = null;\n\t\t\tthis.trackingClick = false;\n\t\t\treturn true;\n\t\t}\n\n\t\t// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.\n\t\tif (event.target.type === 'submit' && event.detail === 0) {\n\t\t\treturn true;\n\t\t}\n\n\t\tpermitted = this.onMouse(event);\n\n\t\t// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.\n\t\tif (!permitted) {\n\t\t\tthis.targetElement = null;\n\t\t}\n\n\t\t// If clicks are permitted, return true for the action to go through.\n\t\treturn permitted;\n\t};\n\n\t/**\n  * Remove all FastClick's event listeners.\n  *\n  * @returns {void}\n  */\n\tFastClick.prototype.destroy = function () {\n\t\tvar layer = this.layer;\n\n\t\tif (deviceIsAndroid) {\n\t\t\tlayer.removeEventListener('mouseover', this.onMouse, true);\n\t\t\tlayer.removeEventListener('mousedown', this.onMouse, true);\n\t\t\tlayer.removeEventListener('mouseup', this.onMouse, true);\n\t\t}\n\n\t\tlayer.removeEventListener('click', this.onClick, true);\n\t\tlayer.removeEventListener('touchstart', this.onTouchStart, false);\n\t\tlayer.removeEventListener('touchmove', this.onTouchMove, false);\n\t\tlayer.removeEventListener('touchend', this.onTouchEnd, false);\n\t\tlayer.removeEventListener('touchcancel', this.onTouchCancel, false);\n\t};\n\n\t/**\n  * Check whether FastClick is needed.\n  *\n  * @param {Element} layer The layer to listen on\n  */\n\tFastClick.notNeeded = function (layer) {\n\t\tvar metaViewport;\n\t\tvar chromeVersion;\n\t\tvar blackberryVersion;\n\t\tvar firefoxVersion;\n\n\t\t// Devices that don't support touch don't need FastClick\n\t\tif (typeof window.ontouchstart === 'undefined') {\n\t\t\treturn true;\n\t\t}\n\n\t\t// Chrome version - zero for other browsers\n\t\tchromeVersion = +(/Chrome\\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];\n\n\t\tif (chromeVersion) {\n\n\t\t\tif (deviceIsAndroid) {\n\t\t\t\tmetaViewport = document.querySelector('meta[name=viewport]');\n\n\t\t\t\tif (metaViewport) {\n\t\t\t\t\t// Chrome on Android with user-scalable=\"no\" doesn't need FastClick (issue #89)\n\t\t\t\t\tif (metaViewport.content.indexOf('user-scalable=no') !== -1) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t\t// Chrome 32 and above with width=device-width or less don't need FastClick\n\t\t\t\t\tif (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Chrome desktop doesn't need FastClick (issue #15)\n\t\t\t} else {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\n\t\tif (deviceIsBlackBerry10) {\n\t\t\tblackberryVersion = navigator.userAgent.match(/Version\\/([0-9]*)\\.([0-9]*)/);\n\n\t\t\t// BlackBerry 10.3+ does not require Fastclick library.\n\t\t\t// https://github.com/ftlabs/fastclick/issues/251\n\t\t\tif (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {\n\t\t\t\tmetaViewport = document.querySelector('meta[name=viewport]');\n\n\t\t\t\tif (metaViewport) {\n\t\t\t\t\t// user-scalable=no eliminates click delay.\n\t\t\t\t\tif (metaViewport.content.indexOf('user-scalable=no') !== -1) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t\t// width=device-width (or less than device-width) eliminates click delay.\n\t\t\t\t\tif (document.documentElement.scrollWidth <= window.outerWidth) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)\n\t\tif (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {\n\t\t\treturn true;\n\t\t}\n\n\t\t// Firefox version - zero for other browsers\n\t\tfirefoxVersion = +(/Firefox\\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];\n\n\t\tif (firefoxVersion >= 27) {\n\t\t\t// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896\n\n\t\t\tmetaViewport = document.querySelector('meta[name=viewport]');\n\t\t\tif (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\n\t\t// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version\n\t\t// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx\n\t\tif (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {\n\t\t\treturn true;\n\t\t}\n\n\t\treturn false;\n\t};\n\n\t/**\n  * Factory method for creating a FastClick object\n  *\n  * @param {Element} layer The layer to listen on\n  * @param {Object} [options={}] The options to override the defaults\n  */\n\tFastClick.attach = function (layer, options) {\n\t\treturn new FastClick(layer, options);\n\t};\n\n\tif (\"function\" === 'function' && _typeof(__webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) === 'object' && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n\n\t\t// AMD. Register as an anonymous module.\n\t\t!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn FastClick;\n\t\t}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else if (typeof module !== 'undefined' && module.exports) {\n\t\tmodule.exports = FastClick.attach;\n\t\tmodule.exports.FastClick = FastClick;\n\t} else {\n\t\twindow.FastClick = FastClick;\n\t}\n})();\n\n//# sourceURL=webpack:///./bwttest/node_modules/fastclick/lib/fastclick.js?");

/***/ }),

/***/ "./bwttest/node_modules/n-zepto/n-zepto.js":
/*!*************************************************!*\
  !*** ./bwttest/node_modules/n-zepto/n-zepto.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */\n(function (global, factory) {\n    if (exports === 'object' && typeof module !== 'undefined') module.exports = factory(global);\n    if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n        return factory(global);\n    }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}\n})(typeof window !== \"undefined\" ? window : undefined, function (window) {\n    var Zepto = function () {\n        var undefined,\n            key,\n            $,\n            classList,\n            emptyArray = [],\n            _concat = emptyArray.concat,\n            _filter = emptyArray.filter,\n            _slice = emptyArray.slice,\n            document = window.document,\n            elementDisplay = {},\n            classCache = {},\n            cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1, 'opacity': 1, 'z-index': 1, 'zoom': 1 },\n            fragmentRE = /^\\s*<(\\w+|!)[^>]*>/,\n            singleTagRE = /^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,\n            tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/ig,\n            rootNodeRE = /^(?:body|html)$/i,\n            capitalRE = /([A-Z])/g,\n\n\n        // special attributes that should be get/set via method calls\n        methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],\n            adjacencyOperators = ['after', 'prepend', 'before', 'append'],\n            table = document.createElement('table'),\n            tableRow = document.createElement('tr'),\n            containers = {\n            'tr': document.createElement('tbody'),\n            'tbody': table, 'thead': table, 'tfoot': table,\n            'td': tableRow, 'th': tableRow,\n            '*': document.createElement('div')\n        },\n            readyRE = /complete|loaded|interactive/,\n            simpleSelectorRE = /^[\\w-]*$/,\n            class2type = {},\n            toString = class2type.toString,\n            zepto = {},\n            camelize,\n            uniq,\n            tempParent = document.createElement('div'),\n            propMap = {\n            'tabindex': 'tabIndex',\n            'readonly': 'readOnly',\n            'for': 'htmlFor',\n            'class': 'className',\n            'maxlength': 'maxLength',\n            'cellspacing': 'cellSpacing',\n            'cellpadding': 'cellPadding',\n            'rowspan': 'rowSpan',\n            'colspan': 'colSpan',\n            'usemap': 'useMap',\n            'frameborder': 'frameBorder',\n            'contenteditable': 'contentEditable'\n        },\n            isArray = Array.isArray || function (object) {\n            return object instanceof Array;\n        };\n\n        zepto.matches = function (element, selector) {\n            if (!selector || !element || element.nodeType !== 1) return false;\n            var matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;\n            if (matchesSelector) return matchesSelector.call(element, selector);\n            // fall back to performing a selector:\n            var match,\n                parent = element.parentNode,\n                temp = !parent;\n            if (temp) (parent = tempParent).appendChild(element);\n            match = ~zepto.qsa(parent, selector).indexOf(element);\n            temp && tempParent.removeChild(element);\n            return match;\n        };\n\n        function type(obj) {\n            return obj == null ? String(obj) : class2type[toString.call(obj)] || \"object\";\n        }\n\n        function isFunction(value) {\n            return type(value) == \"function\";\n        }\n        function isWindow(obj) {\n            return obj != null && obj == obj.window;\n        }\n        function isDocument(obj) {\n            return obj != null && obj.nodeType == obj.DOCUMENT_NODE;\n        }\n        function isObject(obj) {\n            return type(obj) == \"object\";\n        }\n        function isPlainObject(obj) {\n            return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;\n        }\n\n        function likeArray(obj) {\n            var length = !!obj && 'length' in obj && obj.length,\n                type = $.type(obj);\n\n            return 'function' != type && !isWindow(obj) && ('array' == type || length === 0 || typeof length == 'number' && length > 0 && length - 1 in obj);\n        }\n\n        function compact(array) {\n            return _filter.call(array, function (item) {\n                return item != null;\n            });\n        }\n        function flatten(array) {\n            return array.length > 0 ? $.fn.concat.apply([], array) : array;\n        }\n        camelize = function camelize(str) {\n            return str.replace(/-+(.)?/g, function (match, chr) {\n                return chr ? chr.toUpperCase() : '';\n            });\n        };\n        function dasherize(str) {\n            return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();\n        }\n        uniq = function uniq(array) {\n            return _filter.call(array, function (item, idx) {\n                return array.indexOf(item) == idx;\n            });\n        };\n\n        function classRE(name) {\n            return name in classCache ? classCache[name] : classCache[name] = new RegExp('(^|\\\\s)' + name + '(\\\\s|$)');\n        }\n\n        function maybeAddPx(name, value) {\n            return typeof value == \"number\" && !cssNumber[dasherize(name)] ? value + \"px\" : value;\n        }\n\n        function defaultDisplay(nodeName) {\n            var element, display;\n            if (!elementDisplay[nodeName]) {\n                element = document.createElement(nodeName);\n                document.body.appendChild(element);\n                display = getComputedStyle(element, '').getPropertyValue(\"display\");\n                element.parentNode.removeChild(element);\n                display == \"none\" && (display = \"block\");\n                elementDisplay[nodeName] = display;\n            }\n            return elementDisplay[nodeName];\n        }\n\n        function _children(element) {\n            return 'children' in element ? _slice.call(element.children) : $.map(element.childNodes, function (node) {\n                if (node.nodeType == 1) return node;\n            });\n        }\n\n        function Z(dom, selector) {\n            var i,\n                len = dom ? dom.length : 0;\n            for (i = 0; i < len; i++) {\n                this[i] = dom[i];\n            }this.length = len;\n            this.selector = selector || '';\n        }\n\n        // `$.zepto.fragment` takes a html string and an optional tag name\n        // to generate DOM nodes from the given html string.\n        // The generated DOM nodes are returned as an array.\n        // This function can be overridden in plugins for example to make\n        // it compatible with browsers that don't support the DOM fully.\n        zepto.fragment = function (html, name, properties) {\n            var dom, nodes, container;\n\n            // A special case optimization for a single tag\n            if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1));\n\n            if (!dom) {\n                if (html.replace) html = html.replace(tagExpanderRE, \"<$1></$2>\");\n                if (name === undefined) name = fragmentRE.test(html) && RegExp.$1;\n                if (!(name in containers)) name = '*';\n\n                container = containers[name];\n                container.innerHTML = '' + html;\n                dom = $.each(_slice.call(container.childNodes), function () {\n                    container.removeChild(this);\n                });\n            }\n\n            if (isPlainObject(properties)) {\n                nodes = $(dom);\n                $.each(properties, function (key, value) {\n                    if (methodAttributes.indexOf(key) > -1) nodes[key](value);else nodes.attr(key, value);\n                });\n            }\n\n            return dom;\n        };\n\n        // `$.zepto.Z` swaps out the prototype of the given `dom` array\n        // of nodes with `$.fn` and thus supplying all the Zepto functions\n        // to the array. This method can be overridden in plugins.\n        zepto.Z = function (dom, selector) {\n            return new Z(dom, selector);\n        };\n\n        // `$.zepto.isZ` should return `true` if the given object is a Zepto\n        // collection. This method can be overridden in plugins.\n        zepto.isZ = function (object) {\n            return object instanceof zepto.Z;\n        };\n\n        // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and\n        // takes a CSS selector and an optional context (and handles various\n        // special cases).\n        // This method can be overridden in plugins.\n        zepto.init = function (selector, context) {\n            var dom;\n            // If nothing given, return an empty Zepto collection\n            if (!selector) return zepto.Z();\n            // Optimize for string selectors\n            else if (typeof selector == 'string') {\n                    selector = selector.trim();\n                    // If it's a html fragment, create nodes from it\n                    // Note: In both Chrome 21 and Firefox 15, DOM error 12\n                    // is thrown if the fragment doesn't begin with <\n                    if (selector[0] == '<' && fragmentRE.test(selector)) dom = zepto.fragment(selector, RegExp.$1, context), selector = null;\n                    // If there's a context, create a collection on that context first, and select\n                    // nodes from there\n                    else if (context !== undefined) return $(context).find(selector);\n                        // If it's a CSS selector, use it to select nodes.\n                        else dom = zepto.qsa(document, selector);\n                }\n                // If a function is given, call it when the DOM is ready\n                else if (isFunction(selector)) return $(document).ready(selector);\n                    // If a Zepto collection is given, just return it\n                    else if (zepto.isZ(selector)) return selector;else {\n                            // normalize array if an array of nodes is given\n                            if (isArray(selector)) dom = compact(selector);\n                            // Wrap DOM nodes.\n                            else if (isObject(selector)) dom = [selector], selector = null;\n                                // If it's a html fragment, create nodes from it\n                                else if (fragmentRE.test(selector)) dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null;\n                                    // If there's a context, create a collection on that context first, and select\n                                    // nodes from there\n                                    else if (context !== undefined) return $(context).find(selector);\n                                        // And last but no least, if it's a CSS selector, use it to select nodes.\n                                        else dom = zepto.qsa(document, selector);\n                        }\n            // create a new Zepto collection from the nodes found\n            return zepto.Z(dom, selector);\n        };\n\n        // `$` will be the base `Zepto` object. When calling this\n        // function just call `$.zepto.init, which makes the implementation\n        // details of selecting nodes and creating Zepto collections\n        // patchable in plugins.\n        $ = function $(selector, context) {\n            return zepto.init(selector, context);\n        };\n\n        function extend(target, source, deep) {\n            for (key in source) {\n                if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {\n                    if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {};\n                    if (isArray(source[key]) && !isArray(target[key])) target[key] = [];\n                    extend(target[key], source[key], deep);\n                } else if (source[key] !== undefined) target[key] = source[key];\n            }\n        }\n\n        // Copy all but undefined properties from one or more\n        // objects to the `target` object.\n        $.extend = function (target) {\n            var deep,\n                args = _slice.call(arguments, 1);\n            if (typeof target == 'boolean') {\n                deep = target;\n                target = args.shift();\n            }\n            args.forEach(function (arg) {\n                extend(target, arg, deep);\n            });\n            return target;\n        };\n\n        // `$.zepto.qsa` is Zepto's CSS selector implementation which\n        // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.\n        // This method can be overridden in plugins.\n        zepto.qsa = function (element, selector) {\n            var found,\n                maybeID = selector[0] == '#',\n                maybeClass = !maybeID && selector[0] == '.',\n                nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,\n                // Ensure that a 1 char tag name still gets checked\n            isSimple = simpleSelectorRE.test(nameOnly);\n            return element.getElementById && isSimple && maybeID ? // Safari DocumentFragment doesn't have getElementById\n            (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11 ? [] : _slice.call(isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName\n            maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class\n            element.getElementsByTagName(selector) : // Or a tag\n            element.querySelectorAll(selector) // Or it's not simple, and we need to query all\n            );\n        };\n\n        function filtered(nodes, selector) {\n            return selector == null ? $(nodes) : $(nodes).filter(selector);\n        }\n\n        $.contains = document.documentElement.contains ? function (parent, node) {\n            return parent !== node && parent.contains(node);\n        } : function (parent, node) {\n            while (node && (node = node.parentNode)) {\n                if (node === parent) return true;\n            }return false;\n        };\n\n        function funcArg(context, arg, idx, payload) {\n            return isFunction(arg) ? arg.call(context, idx, payload) : arg;\n        }\n\n        function setAttribute(node, name, value) {\n            value == null ? node.removeAttribute(name) : node.setAttribute(name, value);\n        }\n\n        // access className property while respecting SVGAnimatedString\n        function className(node, value) {\n            var klass = node.className || '',\n                svg = klass && klass.baseVal !== undefined;\n\n            if (value === undefined) return svg ? klass.baseVal : klass;\n            svg ? klass.baseVal = value : node.className = value;\n        }\n\n        // \"true\"  => true\n        // \"false\" => false\n        // \"null\"  => null\n        // \"42\"    => 42\n        // \"42.5\"  => 42.5\n        // \"08\"    => \"08\"\n        // JSON    => parse if valid\n        // String  => self\n        function deserializeValue(value) {\n            try {\n                return value ? value == \"true\" || (value == \"false\" ? false : value == \"null\" ? null : +value + \"\" == value ? +value : /^[\\[\\{]/.test(value) ? $.parseJSON(value) : value) : value;\n            } catch (e) {\n                return value;\n            }\n        }\n\n        $.type = type;\n        $.isFunction = isFunction;\n        $.isWindow = isWindow;\n        $.isArray = isArray;\n        $.isPlainObject = isPlainObject;\n\n        $.isEmptyObject = function (obj) {\n            var name;\n            for (name in obj) {\n                return false;\n            }return true;\n        };\n\n        $.isNumeric = function (val) {\n            var num = Number(val),\n                type = typeof val === 'undefined' ? 'undefined' : _typeof(val);\n            return val != null && type != 'boolean' && (type != 'string' || val.length) && !isNaN(num) && isFinite(num) || false;\n        };\n\n        $.inArray = function (elem, array, i) {\n            return emptyArray.indexOf.call(array, elem, i);\n        };\n\n        $.camelCase = camelize;\n        $.trim = function (str) {\n            return str == null ? \"\" : String.prototype.trim.call(str);\n        };\n\n        // plugin compatibility\n        $.uuid = 0;\n        $.support = {};\n        $.expr = {};\n        $.noop = function () {};\n\n        $.map = function (elements, callback) {\n            var value,\n                values = [],\n                i,\n                key;\n            if (likeArray(elements)) for (i = 0; i < elements.length; i++) {\n                value = callback(elements[i], i);\n                if (value != null) values.push(value);\n            } else for (key in elements) {\n                value = callback(elements[key], key);\n                if (value != null) values.push(value);\n            }\n            return flatten(values);\n        };\n\n        $.each = function (elements, callback) {\n            var i, key;\n            if (likeArray(elements)) {\n                for (i = 0; i < elements.length; i++) {\n                    if (callback.call(elements[i], i, elements[i]) === false) return elements;\n                }\n            } else {\n                for (key in elements) {\n                    if (callback.call(elements[key], key, elements[key]) === false) return elements;\n                }\n            }\n\n            return elements;\n        };\n\n        $.grep = function (elements, callback) {\n            return _filter.call(elements, callback);\n        };\n\n        if (window.JSON) $.parseJSON = JSON.parse;\n\n        // Populate the class2type map\n        $.each(\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"), function (i, name) {\n            class2type[\"[object \" + name + \"]\"] = name.toLowerCase();\n        });\n\n        // Define methods that will be available on all\n        // Zepto collections\n        $.fn = {\n            constructor: zepto.Z,\n            length: 0,\n\n            // Because a collection acts like an array\n            // copy over these useful array functions.\n            forEach: emptyArray.forEach,\n            reduce: emptyArray.reduce,\n            push: emptyArray.push,\n            sort: emptyArray.sort,\n            splice: emptyArray.splice,\n            indexOf: emptyArray.indexOf,\n            concat: function concat() {\n                var i,\n                    value,\n                    args = [];\n                for (i = 0; i < arguments.length; i++) {\n                    value = arguments[i];\n                    args[i] = zepto.isZ(value) ? value.toArray() : value;\n                }\n                return _concat.apply(zepto.isZ(this) ? this.toArray() : this, args);\n            },\n\n            // `map` and `slice` in the jQuery API work differently\n            // from their array counterparts\n            map: function map(fn) {\n                return $($.map(this, function (el, i) {\n                    return fn.call(el, i, el);\n                }));\n            },\n            slice: function slice() {\n                return $(_slice.apply(this, arguments));\n            },\n\n            ready: function ready(callback) {\n                // need to check if document.body exists for IE as that browser reports\n                // document ready when it hasn't yet created the body element\n                if (readyRE.test(document.readyState) && document.body) callback($);else document.addEventListener('DOMContentLoaded', function () {\n                    callback($);\n                }, false);\n                return this;\n            },\n            get: function get(idx) {\n                return idx === undefined ? _slice.call(this) : this[idx >= 0 ? idx : idx + this.length];\n            },\n            toArray: function toArray() {\n                return this.get();\n            },\n            size: function size() {\n                return this.length;\n            },\n            remove: function remove() {\n                return this.each(function () {\n                    if (this.parentNode != null) this.parentNode.removeChild(this);\n                });\n            },\n            each: function each(callback) {\n                emptyArray.every.call(this, function (el, idx) {\n                    return callback.call(el, idx, el) !== false;\n                });\n                return this;\n            },\n            filter: function filter(selector) {\n                if (isFunction(selector)) return this.not(this.not(selector));\n                return $(_filter.call(this, function (element) {\n                    return zepto.matches(element, selector);\n                }));\n            },\n            add: function add(selector, context) {\n                return $(uniq(this.concat($(selector, context))));\n            },\n            is: function is(selector) {\n                return this.length > 0 && zepto.matches(this[0], selector);\n            },\n            not: function not(selector) {\n                var nodes = [];\n                if (isFunction(selector) && selector.call !== undefined) this.each(function (idx) {\n                    if (!selector.call(this, idx)) nodes.push(this);\n                });else {\n                    var excludes = typeof selector == 'string' ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? _slice.call(selector) : $(selector);\n                    this.forEach(function (el) {\n                        if (excludes.indexOf(el) < 0) nodes.push(el);\n                    });\n                }\n                return $(nodes);\n            },\n            has: function has(selector) {\n                return this.filter(function () {\n                    return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();\n                });\n            },\n            eq: function eq(idx) {\n                return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);\n            },\n            first: function first() {\n                var el = this[0];\n                return el && !isObject(el) ? el : $(el);\n            },\n            last: function last() {\n                var el = this[this.length - 1];\n                return el && !isObject(el) ? el : $(el);\n            },\n            find: function find(selector) {\n                var result,\n                    $this = this;\n                if (!selector) result = $();else if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') result = $(selector).filter(function () {\n                    var node = this;\n                    return emptyArray.some.call($this, function (parent) {\n                        return $.contains(parent, node);\n                    });\n                });else if (this.length == 1) result = $(zepto.qsa(this[0], selector));else result = this.map(function () {\n                    return zepto.qsa(this, selector);\n                });\n                return result;\n            },\n            closest: function closest(selector, context) {\n                var nodes = [],\n                    collection = (typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object' && $(selector);\n                this.each(function (_, node) {\n                    while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) {\n                        node = node !== context && !isDocument(node) && node.parentNode;\n                    }if (node && nodes.indexOf(node) < 0) nodes.push(node);\n                });\n                return $(nodes);\n            },\n            parents: function parents(selector) {\n                var ancestors = [],\n                    nodes = this;\n                while (nodes.length > 0) {\n                    nodes = $.map(nodes, function (node) {\n                        if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {\n                            ancestors.push(node);\n                            return node;\n                        }\n                    });\n                }return filtered(ancestors, selector);\n            },\n            parent: function parent(selector) {\n                return filtered(uniq(this.pluck('parentNode')), selector);\n            },\n            children: function children(selector) {\n                return filtered(this.map(function () {\n                    return _children(this);\n                }), selector);\n            },\n            contents: function contents() {\n                return this.map(function () {\n                    return this.contentDocument || _slice.call(this.childNodes);\n                });\n            },\n            siblings: function siblings(selector) {\n                return filtered(this.map(function (i, el) {\n                    return _filter.call(_children(el.parentNode), function (child) {\n                        return child !== el;\n                    });\n                }), selector);\n            },\n            empty: function empty() {\n                return this.each(function () {\n                    this.innerHTML = '';\n                });\n            },\n            // `pluck` is borrowed from Prototype.js\n            pluck: function pluck(property) {\n                return $.map(this, function (el) {\n                    return el[property];\n                });\n            },\n            show: function show() {\n                return this.each(function () {\n                    this.style.display == \"none\" && (this.style.display = '');\n                    if (getComputedStyle(this, '').getPropertyValue(\"display\") == \"none\") this.style.display = defaultDisplay(this.nodeName);\n                });\n            },\n            replaceWith: function replaceWith(newContent) {\n                return this.before(newContent).remove();\n            },\n            wrap: function wrap(structure) {\n                var func = isFunction(structure);\n                if (this[0] && !func) var dom = $(structure).get(0),\n                    clone = dom.parentNode || this.length > 1;\n\n                return this.each(function (index) {\n                    $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);\n                });\n            },\n            wrapAll: function wrapAll(structure) {\n                if (this[0]) {\n                    $(this[0]).before(structure = $(structure));\n                    var children;\n                    // drill down to the inmost element\n                    while ((children = structure.children()).length) {\n                        structure = children.first();\n                    }$(structure).append(this);\n                }\n                return this;\n            },\n            wrapInner: function wrapInner(structure) {\n                var func = isFunction(structure);\n                return this.each(function (index) {\n                    var self = $(this),\n                        contents = self.contents(),\n                        dom = func ? structure.call(this, index) : structure;\n                    contents.length ? contents.wrapAll(dom) : self.append(dom);\n                });\n            },\n            unwrap: function unwrap() {\n                this.parent().each(function () {\n                    $(this).replaceWith($(this).children());\n                });\n                return this;\n            },\n            clone: function clone() {\n                return this.map(function () {\n                    return this.cloneNode(true);\n                });\n            },\n            hide: function hide() {\n                return this.css(\"display\", \"none\");\n            },\n            toggle: function toggle(setting) {\n                return this.each(function () {\n                    var el = $(this);(setting === undefined ? el.css(\"display\") == \"none\" : setting) ? el.show() : el.hide();\n                });\n            },\n            prev: function prev(selector) {\n                return $(this.pluck('previousElementSibling')).filter(selector || '*');\n            },\n            next: function next(selector) {\n                return $(this.pluck('nextElementSibling')).filter(selector || '*');\n            },\n            html: function html(_html) {\n                return 0 in arguments ? this.each(function (idx) {\n                    var originHtml = this.innerHTML;\n                    $(this).empty().append(funcArg(this, _html, idx, originHtml));\n                }) : 0 in this ? this[0].innerHTML : null;\n            },\n            text: function text(_text) {\n                return 0 in arguments ? this.each(function (idx) {\n                    var newText = funcArg(this, _text, idx, this.textContent);\n                    this.textContent = newText == null ? '' : '' + newText;\n                }) : 0 in this ? this.pluck('textContent').join(\"\") : null;\n            },\n            attr: function attr(name, value) {\n                var result;\n                return typeof name == 'string' && !(1 in arguments) ? 0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined : this.each(function (idx) {\n                    if (this.nodeType !== 1) return;\n                    if (isObject(name)) for (key in name) {\n                        setAttribute(this, key, name[key]);\n                    } else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));\n                });\n            },\n            removeAttr: function removeAttr(name) {\n                return this.each(function () {\n                    this.nodeType === 1 && name.split(' ').forEach(function (attribute) {\n                        setAttribute(this, attribute);\n                    }, this);\n                });\n            },\n            prop: function prop(name, value) {\n                name = propMap[name] || name;\n                return 1 in arguments ? this.each(function (idx) {\n                    this[name] = funcArg(this, value, idx, this[name]);\n                }) : this[0] && this[0][name];\n            },\n            removeProp: function removeProp(name) {\n                name = propMap[name] || name;\n                return this.each(function () {\n                    delete this[name];\n                });\n            },\n            data: function data(name, value) {\n                var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase();\n\n                var data = 1 in arguments ? this.attr(attrName, value) : this.attr(attrName);\n\n                return data !== null ? deserializeValue(data) : undefined;\n            },\n            val: function val(value) {\n                if (0 in arguments) {\n                    if (value == null) value = \"\";\n                    return this.each(function (idx) {\n                        this.value = funcArg(this, value, idx, this.value);\n                    });\n                } else {\n                    return this[0] && (this[0].multiple ? $(this[0]).find('option').filter(function () {\n                        return this.selected;\n                    }).pluck('value') : this[0].value);\n                }\n            },\n            offset: function offset(coordinates) {\n                if (coordinates) return this.each(function (index) {\n                    var $this = $(this),\n                        coords = funcArg(this, coordinates, index, $this.offset()),\n                        parentOffset = $this.offsetParent().offset(),\n                        props = {\n                        top: coords.top - parentOffset.top,\n                        left: coords.left - parentOffset.left\n                    };\n\n                    if ($this.css('position') == 'static') props['position'] = 'relative';\n                    $this.css(props);\n                });\n                if (!this.length) return null;\n                if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0])) return { top: 0, left: 0 };\n                var obj = this[0].getBoundingClientRect();\n                return {\n                    left: obj.left + window.pageXOffset,\n                    top: obj.top + window.pageYOffset,\n                    width: Math.round(obj.width),\n                    height: Math.round(obj.height)\n                };\n            },\n            css: function css(property, value) {\n                if (arguments.length < 2) {\n                    var element = this[0];\n                    if (typeof property == 'string') {\n                        if (!element) return;\n                        return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property);\n                    } else if (isArray(property)) {\n                        if (!element) return;\n                        var props = {};\n                        var computedStyle = getComputedStyle(element, '');\n                        $.each(property, function (_, prop) {\n                            props[prop] = element.style[camelize(prop)] || computedStyle.getPropertyValue(prop);\n                        });\n                        return props;\n                    }\n                }\n\n                var css = '';\n                if (type(property) == 'string') {\n                    if (!value && value !== 0) this.each(function () {\n                        this.style.removeProperty(dasherize(property));\n                    });else css = dasherize(property) + \":\" + maybeAddPx(property, value);\n                } else {\n                    for (key in property) {\n                        if (!property[key] && property[key] !== 0) this.each(function () {\n                            this.style.removeProperty(dasherize(key));\n                        });else css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';\n                    }\n                }\n\n                return this.each(function () {\n                    this.style.cssText += ';' + css;\n                });\n            },\n            index: function index(element) {\n                return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);\n            },\n            hasClass: function hasClass(name) {\n                if (!name) return false;\n                return emptyArray.some.call(this, function (el) {\n                    return this.test(className(el));\n                }, classRE(name));\n            },\n            addClass: function addClass(name) {\n                if (!name) return this;\n                return this.each(function (idx) {\n                    if (!('className' in this)) return;\n                    classList = [];\n                    var cls = className(this),\n                        newName = funcArg(this, name, idx, cls);\n                    newName.split(/\\s+/g).forEach(function (klass) {\n                        if (!$(this).hasClass(klass)) classList.push(klass);\n                    }, this);\n                    classList.length && className(this, cls + (cls ? \" \" : \"\") + classList.join(\" \"));\n                });\n            },\n            removeClass: function removeClass(name) {\n                return this.each(function (idx) {\n                    if (!('className' in this)) return;\n                    if (name === undefined) return className(this, '');\n                    classList = className(this);\n                    funcArg(this, name, idx, classList).split(/\\s+/g).forEach(function (klass) {\n                        classList = classList.replace(classRE(klass), \" \");\n                    });\n                    className(this, classList.trim());\n                });\n            },\n            toggleClass: function toggleClass(name, when) {\n                if (!name) return this;\n                return this.each(function (idx) {\n                    var $this = $(this),\n                        names = funcArg(this, name, idx, className(this));\n                    names.split(/\\s+/g).forEach(function (klass) {\n                        (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);\n                    });\n                });\n            },\n            scrollTop: function scrollTop(value) {\n                if (!this.length) return;\n                var hasScrollTop = 'scrollTop' in this[0];\n                if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;\n                return this.each(hasScrollTop ? function () {\n                    this.scrollTop = value;\n                } : function () {\n                    this.scrollTo(this.scrollX, value);\n                });\n            },\n            scrollLeft: function scrollLeft(value) {\n                if (!this.length) return;\n                var hasScrollLeft = 'scrollLeft' in this[0];\n                if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;\n                return this.each(hasScrollLeft ? function () {\n                    this.scrollLeft = value;\n                } : function () {\n                    this.scrollTo(value, this.scrollY);\n                });\n            },\n            position: function position() {\n                if (!this.length) return;\n\n                var elem = this[0],\n\n                // Get *real* offsetParent\n                offsetParent = this.offsetParent(),\n\n                // Get correct offsets\n                offset = this.offset(),\n                    parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();\n\n                // Subtract element margins\n                // note: when an element has margin: auto the offsetLeft and marginLeft\n                // are the same in Safari causing offset.left to incorrectly be 0\n                offset.top -= parseFloat($(elem).css('margin-top')) || 0;\n                offset.left -= parseFloat($(elem).css('margin-left')) || 0;\n\n                // Add offsetParent borders\n                parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;\n                parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;\n\n                // Subtract the two offsets\n                return {\n                    top: offset.top - parentOffset.top,\n                    left: offset.left - parentOffset.left\n                };\n            },\n            offsetParent: function offsetParent() {\n                return this.map(function () {\n                    var parent = this.offsetParent || document.body;\n                    while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css(\"position\") == \"static\") {\n                        parent = parent.offsetParent;\n                    }return parent;\n                });\n            }\n\n            // for now\n        };$.fn.detach = $.fn.remove\n\n        // Generate the `width` and `height` functions\n        ;['width', 'height'].forEach(function (dimension) {\n            var dimensionProperty = dimension.replace(/./, function (m) {\n                return m[0].toUpperCase();\n            });\n\n            $.fn[dimension] = function (value) {\n                var offset,\n                    el = this[0];\n                if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] : isDocument(el) ? el.documentElement['scroll' + dimensionProperty] : (offset = this.offset()) && offset[dimension];else return this.each(function (idx) {\n                    el = $(this);\n                    el.css(dimension, funcArg(this, value, idx, el[dimension]()));\n                });\n            };\n        });\n\n        function traverseNode(node, fun) {\n            fun(node);\n            for (var i = 0, len = node.childNodes.length; i < len; i++) {\n                traverseNode(node.childNodes[i], fun);\n            }\n        }\n\n        // Generate the `after`, `prepend`, `before`, `append`,\n        // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.\n        adjacencyOperators.forEach(function (operator, operatorIndex) {\n            var inside = operatorIndex % 2; //=> prepend, append\n\n            $.fn[operator] = function () {\n                // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings\n                var argType,\n                    nodes = $.map(arguments, function (arg) {\n                    var arr = [];\n                    argType = type(arg);\n                    if (argType == \"array\") {\n                        arg.forEach(function (el) {\n                            if (el.nodeType !== undefined) return arr.push(el);else if ($.zepto.isZ(el)) return arr = arr.concat(el.get());\n                            arr = arr.concat(zepto.fragment(el));\n                        });\n                        return arr;\n                    }\n                    return argType == \"object\" || arg == null ? arg : zepto.fragment(arg);\n                }),\n                    parent,\n                    copyByClone = this.length > 1;\n                if (nodes.length < 1) return this;\n\n                return this.each(function (_, target) {\n                    parent = inside ? target : target.parentNode;\n\n                    // convert all methods to a \"before\" operation\n                    target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;\n\n                    var parentInDocument = $.contains(document.documentElement, parent);\n\n                    nodes.forEach(function (node) {\n                        if (copyByClone) node = node.cloneNode(true);else if (!parent) return $(node).remove();\n\n                        parent.insertBefore(node, target);\n                        if (parentInDocument) traverseNode(node, function (el) {\n                            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' && (!el.type || el.type === 'text/javascript') && !el.src) {\n                                var target = el.ownerDocument ? el.ownerDocument.defaultView : window;\n                                target['eval'].call(target, el.innerHTML);\n                            }\n                        });\n                    });\n                });\n            };\n\n            // after    => insertAfter\n            // prepend  => prependTo\n            // before   => insertBefore\n            // append   => appendTo\n            $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function (html) {\n                $(html)[operator](this);\n                return this;\n            };\n        });\n\n        zepto.Z.prototype = Z.prototype = $.fn;\n\n        // Export internal API functions in the `$.zepto` namespace\n        zepto.uniq = uniq;\n        zepto.deserializeValue = deserializeValue;\n        $.zepto = zepto;\n\n        return $;\n    }();\n\n    window.Zepto = Zepto;\n    window.$ === undefined && (window.$ = Zepto);(function ($) {\n        var _zid = 1,\n            undefined,\n            slice = Array.prototype.slice,\n            isFunction = $.isFunction,\n            isString = function isString(obj) {\n            return typeof obj == 'string';\n        },\n            handlers = {},\n            specialEvents = {},\n            focusinSupported = 'onfocusin' in window,\n            focus = { focus: 'focusin', blur: 'focusout' },\n            hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' };\n\n        specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';\n\n        function zid(element) {\n            return element._zid || (element._zid = _zid++);\n        }\n        function findHandlers(element, event, fn, selector) {\n            event = parse(event);\n            if (event.ns) var matcher = matcherFor(event.ns);\n            return (handlers[zid(element)] || []).filter(function (handler) {\n                return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);\n            });\n        }\n        function parse(event) {\n            var parts = ('' + event).split('.');\n            return { e: parts[0], ns: parts.slice(1).sort().join(' ') };\n        }\n        function matcherFor(ns) {\n            return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');\n        }\n\n        function eventCapture(handler, captureSetting) {\n            return handler.del && !focusinSupported && handler.e in focus || !!captureSetting;\n        }\n\n        function realEvent(type) {\n            return hover[type] || focusinSupported && focus[type] || type;\n        }\n\n        function add(element, events, fn, data, selector, delegator, capture) {\n            var id = zid(element),\n                set = handlers[id] || (handlers[id] = []);\n            events.split(/\\s/).forEach(function (event) {\n                if (event == 'ready') return $(document).ready(fn);\n                var handler = parse(event);\n                handler.fn = fn;\n                handler.sel = selector;\n                // emulate mouseenter, mouseleave\n                if (handler.e in hover) fn = function fn(e) {\n                    var related = e.relatedTarget;\n                    if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);\n                };\n                handler.del = delegator;\n                var callback = delegator || fn;\n                handler.proxy = function (e) {\n                    e = compatible(e);\n                    if (e.isImmediatePropagationStopped()) return;\n                    e.data = data;\n                    var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));\n                    if (result === false) e.preventDefault(), e.stopPropagation();\n                    return result;\n                };\n                handler.i = set.length;\n                set.push(handler);\n                if ('addEventListener' in element) element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));\n            });\n        }\n        function remove(element, events, fn, selector, capture) {\n            var id = zid(element);(events || '').split(/\\s/).forEach(function (event) {\n                findHandlers(element, event, fn, selector).forEach(function (handler) {\n                    delete handlers[id][handler.i];\n                    if ('removeEventListener' in element) element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));\n                });\n            });\n        }\n\n        $.event = { add: add, remove: remove };\n\n        $.proxy = function (fn, context) {\n            var args = 2 in arguments && slice.call(arguments, 2);\n            if (isFunction(fn)) {\n                var proxyFn = function proxyFn() {\n                    return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);\n                };\n                proxyFn._zid = zid(fn);\n                return proxyFn;\n            } else if (isString(context)) {\n                if (args) {\n                    args.unshift(fn[context], fn);\n                    return $.proxy.apply(null, args);\n                } else {\n                    return $.proxy(fn[context], fn);\n                }\n            } else {\n                throw new TypeError(\"expected function\");\n            }\n        };\n\n        $.fn.bind = function (event, data, callback) {\n            return this.on(event, data, callback);\n        };\n        $.fn.unbind = function (event, callback) {\n            return this.off(event, callback);\n        };\n        $.fn.one = function (event, selector, data, callback) {\n            return this.on(event, selector, data, callback, 1);\n        };\n\n        var returnTrue = function returnTrue() {\n            return true;\n        },\n            returnFalse = function returnFalse() {\n            return false;\n        },\n            ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,\n            eventMethods = {\n            preventDefault: 'isDefaultPrevented',\n            stopImmediatePropagation: 'isImmediatePropagationStopped',\n            stopPropagation: 'isPropagationStopped'\n        };\n\n        function compatible(event, source) {\n            if (source || !event.isDefaultPrevented) {\n                source || (source = event);\n\n                $.each(eventMethods, function (name, predicate) {\n                    var sourceMethod = source[name];\n                    event[name] = function () {\n                        this[predicate] = returnTrue;\n                        return sourceMethod && sourceMethod.apply(source, arguments);\n                    };\n                    event[predicate] = returnFalse;\n                });\n\n                event.timeStamp || (event.timeStamp = Date.now());\n\n                if (source.defaultPrevented !== undefined ? source.defaultPrevented : 'returnValue' in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) event.isDefaultPrevented = returnTrue;\n            }\n            return event;\n        }\n\n        function createProxy(event) {\n            var key,\n                proxy = { originalEvent: event };\n            for (key in event) {\n                if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key];\n            }return compatible(proxy, event);\n        }\n\n        $.fn.delegate = function (selector, event, callback) {\n            return this.on(event, selector, callback);\n        };\n        $.fn.undelegate = function (selector, event, callback) {\n            return this.off(event, selector, callback);\n        };\n\n        $.fn.live = function (event, callback) {\n            $(document.body).delegate(this.selector, event, callback);\n            return this;\n        };\n        $.fn.die = function (event, callback) {\n            $(document.body).undelegate(this.selector, event, callback);\n            return this;\n        };\n\n        $.fn.on = function (event, selector, data, callback, one) {\n            var autoRemove,\n                delegator,\n                $this = this;\n            if (event && !isString(event)) {\n                $.each(event, function (type, fn) {\n                    $this.on(type, selector, data, fn, one);\n                });\n                return $this;\n            }\n\n            if (!isString(selector) && !isFunction(callback) && callback !== false) callback = data, data = selector, selector = undefined;\n            if (callback === undefined || data === false) callback = data, data = undefined;\n\n            if (callback === false) callback = returnFalse;\n\n            return $this.each(function (_, element) {\n                if (one) autoRemove = function autoRemove(e) {\n                    remove(element, e.type, callback);\n                    return callback.apply(this, arguments);\n                };\n\n                if (selector) delegator = function delegator(e) {\n                    var evt,\n                        match = $(e.target).closest(selector, element).get(0);\n                    if (match && match !== element) {\n                        evt = $.extend(createProxy(e), { currentTarget: match, liveFired: element });\n                        return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));\n                    }\n                };\n\n                add(element, event, callback, data, selector, delegator || autoRemove);\n            });\n        };\n        $.fn.off = function (event, selector, callback) {\n            var $this = this;\n            if (event && !isString(event)) {\n                $.each(event, function (type, fn) {\n                    $this.off(type, selector, fn);\n                });\n                return $this;\n            }\n\n            if (!isString(selector) && !isFunction(callback) && callback !== false) callback = selector, selector = undefined;\n\n            if (callback === false) callback = returnFalse;\n\n            return $this.each(function () {\n                remove(this, event, callback, selector);\n            });\n        };\n\n        $.fn.trigger = function (event, args) {\n            event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);\n            event._args = args;\n            return this.each(function () {\n                // handle focus(), blur() by calling them directly\n                if (event.type in focus && typeof this[event.type] == \"function\") this[event.type]();\n                // items in the collection might not be DOM elements\n                else if ('dispatchEvent' in this) this.dispatchEvent(event);else $(this).triggerHandler(event, args);\n            });\n        };\n\n        // triggers event handlers on current element just as if an event occurred,\n        // doesn't trigger an actual event, doesn't bubble\n        $.fn.triggerHandler = function (event, args) {\n            var e, result;\n            this.each(function (i, element) {\n                e = createProxy(isString(event) ? $.Event(event) : event);\n                e._args = args;\n                e.target = element;\n                $.each(findHandlers(element, event.type || event), function (i, handler) {\n                    result = handler.proxy(e);\n                    if (e.isImmediatePropagationStopped()) return false;\n                });\n            });\n            return result;\n        }\n\n        // shortcut methods for `.bind(event, fn)` for each event type\n        ;('focusin focusout focus blur load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select keydown keypress keyup error').split(' ').forEach(function (event) {\n            $.fn[event] = function (callback) {\n                return 0 in arguments ? this.bind(event, callback) : this.trigger(event);\n            };\n        });\n\n        $.Event = function (type, props) {\n            if (!isString(type)) props = type, type = props.type;\n            var event = document.createEvent(specialEvents[type] || 'Events'),\n                bubbles = true;\n            if (props) for (var name in props) {\n                name == 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];\n            }event.initEvent(type, bubbles, true);\n            return compatible(event);\n        };\n    })(Zepto);(function ($) {\n        var jsonpID = +new Date(),\n            document = window.document,\n            key,\n            name,\n            rscript = /<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi,\n            scriptTypeRE = /^(?:text|application)\\/javascript/i,\n            xmlTypeRE = /^(?:text|application)\\/xml/i,\n            jsonType = 'application/json',\n            htmlType = 'text/html',\n            blankRE = /^\\s*$/,\n            originAnchor = document.createElement('a');\n\n        originAnchor.href = window.location.href;\n\n        // trigger a custom event and return false if it was cancelled\n        function triggerAndReturn(context, eventName, data) {\n            var event = $.Event(eventName);\n            $(context).trigger(event, data);\n            return !event.isDefaultPrevented();\n        }\n\n        // trigger an Ajax \"global\" event\n        function triggerGlobal(settings, context, eventName, data) {\n            if (settings.global) return triggerAndReturn(context || document, eventName, data);\n        }\n\n        // Number of active Ajax requests\n        $.active = 0;\n\n        function ajaxStart(settings) {\n            if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');\n        }\n        function ajaxStop(settings) {\n            if (settings.global && ! --$.active) triggerGlobal(settings, null, 'ajaxStop');\n        }\n\n        // triggers an extra global event \"ajaxBeforeSend\" that's like \"ajaxSend\" but cancelable\n        function ajaxBeforeSend(xhr, settings) {\n            var context = settings.context;\n            if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;\n\n            triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);\n        }\n        function ajaxSuccess(data, xhr, settings, deferred) {\n            var context = settings.context,\n                status = 'success';\n            settings.success.call(context, data, status, xhr);\n            if (deferred) deferred.resolveWith(context, [data, status, xhr]);\n            triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);\n            ajaxComplete(status, xhr, settings);\n        }\n        // type: \"timeout\", \"error\", \"abort\", \"parsererror\"\n        function ajaxError(error, type, xhr, settings, deferred) {\n            var context = settings.context;\n            settings.error.call(context, xhr, type, error);\n            if (deferred) deferred.rejectWith(context, [xhr, type, error]);\n            triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type]);\n            ajaxComplete(type, xhr, settings);\n        }\n        // status: \"success\", \"notmodified\", \"error\", \"timeout\", \"abort\", \"parsererror\"\n        function ajaxComplete(status, xhr, settings) {\n            var context = settings.context;\n            settings.complete.call(context, xhr, status);\n            triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);\n            ajaxStop(settings);\n        }\n\n        function ajaxDataFilter(data, type, settings) {\n            if (settings.dataFilter == empty) return data;\n            var context = settings.context;\n            return settings.dataFilter.call(context, data, type);\n        }\n\n        // Empty function, used as default callback\n        function empty() {}\n\n        $.ajaxJSONP = function (options, deferred) {\n            if (!('type' in options)) return $.ajax(options);\n\n            var _callbackName = options.jsonpCallback,\n                callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || 'Zepto' + jsonpID++,\n                script = document.createElement('script'),\n                originalCallback = window[callbackName],\n                responseData,\n                abort = function abort(errorType) {\n                $(script).triggerHandler('error', errorType || 'abort');\n            },\n                xhr = { abort: abort },\n                abortTimeout;\n\n            if (deferred) deferred.promise(xhr);\n\n            $(script).on('load error', function (e, errorType) {\n                clearTimeout(abortTimeout);\n                $(script).off().remove();\n\n                if (e.type == 'error' || !responseData) {\n                    ajaxError(null, errorType || 'error', xhr, options, deferred);\n                } else {\n                    ajaxSuccess(responseData[0], xhr, options, deferred);\n                }\n\n                window[callbackName] = originalCallback;\n                if (responseData && $.isFunction(originalCallback)) originalCallback(responseData[0]);\n\n                originalCallback = responseData = undefined;\n            });\n\n            if (ajaxBeforeSend(xhr, options) === false) {\n                abort('abort');\n                return xhr;\n            }\n\n            window[callbackName] = function () {\n                responseData = arguments;\n            };\n\n            script.src = options.url.replace(/\\?(.+)=\\?/, '?$1=' + callbackName);\n            document.head.appendChild(script);\n\n            if (options.timeout > 0) abortTimeout = setTimeout(function () {\n                abort('timeout');\n            }, options.timeout);\n\n            return xhr;\n        };\n\n        $.ajaxSettings = {\n            // Default type of request\n            type: 'GET',\n            // Callback that is executed before request\n            beforeSend: empty,\n            // Callback that is executed if the request succeeds\n            success: empty,\n            // Callback that is executed the the server drops error\n            error: empty,\n            // Callback that is executed on request complete (both: error and success)\n            complete: empty,\n            // The context for the callbacks\n            context: null,\n            // Whether to trigger \"global\" Ajax events\n            global: true,\n            // Transport\n            xhr: function xhr() {\n                return new window.XMLHttpRequest();\n            },\n            // MIME types mapping\n            // IIS returns Javascript as \"application/x-javascript\"\n            accepts: {\n                script: 'text/javascript, application/javascript, application/x-javascript',\n                json: jsonType,\n                xml: 'application/xml, text/xml',\n                html: htmlType,\n                text: 'text/plain'\n            },\n            // Whether the request is to another domain\n            crossDomain: false,\n            // Default timeout\n            timeout: 0,\n            // Whether data should be serialized to string\n            processData: true,\n            // Whether the browser should be allowed to cache GET responses\n            cache: true,\n            //Used to handle the raw response data of XMLHttpRequest.\n            //This is a pre-filtering function to sanitize the response.\n            //The sanitized response should be returned\n            dataFilter: empty\n        };\n\n        function mimeToDataType(mime) {\n            if (mime) mime = mime.split(';', 2)[0];\n            return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';\n        }\n\n        function appendQuery(url, query) {\n            if (query == '') return url;\n            return (url + '&' + query).replace(/[&?]{1,2}/, '?');\n        }\n\n        // serialize payload and append it to the URL for GET requests\n        function serializeData(options) {\n            if (options.processData && options.data && $.type(options.data) != \"string\") options.data = $.param(options.data, options.traditional);\n            if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType)) options.url = appendQuery(options.url, options.data), options.data = undefined;\n        }\n\n        $.ajax = function (options) {\n            var settings = $.extend({}, options || {}),\n                deferred = $.Deferred && $.Deferred(),\n                urlAnchor,\n                hashIndex;\n            for (key in $.ajaxSettings) {\n                if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];\n            }ajaxStart(settings);\n\n            if (!settings.crossDomain) {\n                urlAnchor = document.createElement('a');\n                urlAnchor.href = settings.url;\n                // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049\n                urlAnchor.href = urlAnchor.href;\n                settings.crossDomain = originAnchor.protocol + '//' + originAnchor.host !== urlAnchor.protocol + '//' + urlAnchor.host;\n            }\n\n            if (!settings.url) settings.url = window.location.toString();\n            if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex);\n            serializeData(settings);\n\n            var dataType = settings.dataType,\n                hasPlaceholder = /\\?.+=\\?/.test(settings.url);\n            if (hasPlaceholder) dataType = 'jsonp';\n\n            if (settings.cache === false || (!options || options.cache !== true) && ('script' == dataType || 'jsonp' == dataType)) settings.url = appendQuery(settings.url, '_=' + Date.now());\n\n            if ('jsonp' == dataType) {\n                if (!hasPlaceholder) settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + '=?' : settings.jsonp === false ? '' : 'callback=?');\n                return $.ajaxJSONP(settings, deferred);\n            }\n\n            var mime = settings.accepts[dataType],\n                headers = {},\n                setHeader = function setHeader(name, value) {\n                headers[name.toLowerCase()] = [name, value];\n            },\n                protocol = /^([\\w-]+:)\\/\\//.test(settings.url) ? RegExp.$1 : window.location.protocol,\n                xhr = settings.xhr(),\n                nativeSetHeader = xhr.setRequestHeader,\n                abortTimeout;\n\n            if (deferred) deferred.promise(xhr);\n\n            if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest');\n            setHeader('Accept', mime || '*/*');\n            if (mime = settings.mimeType || mime) {\n                if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];\n                xhr.overrideMimeType && xhr.overrideMimeType(mime);\n            }\n            if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET') setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');\n\n            if (settings.headers) for (name in settings.headers) {\n                setHeader(name, settings.headers[name]);\n            }xhr.setRequestHeader = setHeader;\n\n            xhr.onreadystatechange = function () {\n                if (xhr.readyState == 4) {\n                    xhr.onreadystatechange = empty;\n                    clearTimeout(abortTimeout);\n                    var result,\n                        error = false;\n                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {\n                        dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));\n\n                        if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob') result = xhr.response;else {\n                            result = xhr.responseText;\n\n                            try {\n                                // http://perfectionkills.com/global-eval-what-are-the-options/\n                                // sanitize response accordingly if data filter callback provided\n                                result = ajaxDataFilter(result, dataType, settings);\n                                if (dataType == 'script') (1, eval)(result);else if (dataType == 'xml') result = xhr.responseXML;else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result);\n                            } catch (e) {\n                                error = e;\n                            }\n\n                            if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred);\n                        }\n\n                        ajaxSuccess(result, xhr, settings, deferred);\n                    } else {\n                        ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred);\n                    }\n                }\n            };\n\n            if (ajaxBeforeSend(xhr, settings) === false) {\n                xhr.abort();\n                ajaxError(null, 'abort', xhr, settings, deferred);\n                return xhr;\n            }\n\n            var async = 'async' in settings ? settings.async : true;\n            xhr.open(settings.type, settings.url, async, settings.username, settings.password);\n\n            if (settings.xhrFields) for (name in settings.xhrFields) {\n                xhr[name] = settings.xhrFields[name];\n            }for (name in headers) {\n                nativeSetHeader.apply(xhr, headers[name]);\n            }if (settings.timeout > 0) abortTimeout = setTimeout(function () {\n                xhr.onreadystatechange = empty;\n                xhr.abort();\n                ajaxError(null, 'timeout', xhr, settings, deferred);\n            }, settings.timeout);\n\n            // avoid sending empty string (#319)\n            xhr.send(settings.data ? settings.data : null);\n            return xhr;\n        };\n\n        // handle optional data/success arguments\n        function parseArguments(url, data, success, dataType) {\n            if ($.isFunction(data)) dataType = success, success = data, data = undefined;\n            if (!$.isFunction(success)) dataType = success, success = undefined;\n            return {\n                url: url,\n                data: data,\n                success: success,\n                dataType: dataType\n            };\n        }\n\n        $.get = function () /* url, data, success, dataType */{\n            return $.ajax(parseArguments.apply(null, arguments));\n        };\n\n        $.post = function () /* url, data, success, dataType */{\n            var options = parseArguments.apply(null, arguments);\n            options.type = 'POST';\n            return $.ajax(options);\n        };\n\n        $.getJSON = function () /* url, data, success */{\n            var options = parseArguments.apply(null, arguments);\n            options.dataType = 'json';\n            return $.ajax(options);\n        };\n\n        $.fn.load = function (url, data, success) {\n            if (!this.length) return this;\n            var self = this,\n                parts = url.split(/\\s/),\n                selector,\n                options = parseArguments(url, data, success),\n                callback = options.success;\n            if (parts.length > 1) options.url = parts[0], selector = parts[1];\n            options.success = function (response) {\n                self.html(selector ? $('<div>').html(response.replace(rscript, \"\")).find(selector) : response);\n                callback && callback.apply(self, arguments);\n            };\n            $.ajax(options);\n            return this;\n        };\n\n        var escape = encodeURIComponent;\n\n        function serialize(params, obj, traditional, scope) {\n            var type,\n                array = $.isArray(obj),\n                hash = $.isPlainObject(obj);\n            $.each(obj, function (key, value) {\n                type = $.type(value);\n                if (scope) key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';\n                // handle data in serializeArray() format\n                if (!scope && array) params.add(value.name, value.value);\n                // recurse into nested objects\n                else if (type == \"array\" || !traditional && type == \"object\") serialize(params, value, traditional, key);else params.add(key, value);\n            });\n        }\n\n        $.param = function (obj, traditional) {\n            var params = [];\n            params.add = function (key, value) {\n                if ($.isFunction(value)) value = value();\n                if (value == null) value = \"\";\n                this.push(escape(key) + '=' + escape(value));\n            };\n            serialize(params, obj, traditional);\n            return params.join('&').replace(/%20/g, '+');\n        };\n    })(Zepto);(function ($) {\n        $.fn.serializeArray = function () {\n            var name,\n                type,\n                result = [],\n                add = function add(value) {\n                if (value.forEach) return value.forEach(add);\n                result.push({ name: name, value: value });\n            };\n            if (this[0]) $.each(this[0].elements, function (_, field) {\n                type = field.type, name = field.name;\n                if (name && field.nodeName.toLowerCase() != 'fieldset' && !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' && (type != 'radio' && type != 'checkbox' || field.checked)) add($(field).val());\n            });\n            return result;\n        };\n\n        $.fn.serialize = function () {\n            var result = [];\n            this.serializeArray().forEach(function (elm) {\n                result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));\n            });\n            return result.join('&');\n        };\n\n        $.fn.submit = function (callback) {\n            if (0 in arguments) this.bind('submit', callback);else if (this.length) {\n                var event = $.Event('submit');\n                this.eq(0).trigger(event);\n                if (!event.isDefaultPrevented()) this.get(0).submit();\n            }\n            return this;\n        };\n    })(Zepto);(function () {\n        // getComputedStyle shouldn't freak out when called\n        // without a valid element as argument\n        try {\n            getComputedStyle(undefined);\n        } catch (e) {\n            var nativeGetComputedStyle = getComputedStyle;\n            window.getComputedStyle = function (element, pseudoElement) {\n                try {\n                    return nativeGetComputedStyle(element, pseudoElement);\n                } catch (e) {\n                    return null;\n                }\n            };\n        }\n    })();\n    return Zepto;\n});\n\n//# sourceURL=webpack:///./bwttest/node_modules/n-zepto/n-zepto.js?");

/***/ }),

/***/ "./bwttest/node_modules/regenerator-runtime/runtime.js":
/*!*************************************************************!*\
  !*** ./bwttest/node_modules/regenerator-runtime/runtime.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global, module) {\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/**\n * Copyright (c) 2014, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * https://raw.github.com/facebook/regenerator/master/LICENSE file. An\n * additional grant of patent rights can be found in the PATENTS file in\n * the same directory.\n */\n\n!function (global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = ( false ? undefined : _typeof(module)) === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      prototype[method] = function (arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function (genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor ? ctor === GeneratorFunction ||\n    // For the native GeneratorFunction constructor, the best we can\n    // do is to check its .name property.\n    (ctor.displayName || ctor.name) === \"GeneratorFunction\" : false;\n  };\n\n  runtime.mark = function (genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function (arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value && (typeof value === \"undefined\" ? \"undefined\" : _typeof(value)) === \"object\" && hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function (value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function (err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function (unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    if (_typeof(global.process) === \"object\" && global.process.domain) {\n      invoke = global.process.domain.bind(invoke);\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function (resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n      // If enqueue has been called before, then we want to wait until\n      // all previous Promises have been resolved before calling invoke,\n      // so that results are always delivered in the correct order. If\n      // enqueue has not been called before, then it is important to\n      // call invoke immediately, without waiting on a callback to fire,\n      // so that the async generator function has the opportunity to do\n      // any necessary setup in a predictable way. This predictability\n      // is why the Promise constructor synchronously invokes its\n      // executor callback, and why async functions synchronously\n      // execute code before the first await. Since we implement simple\n      // async functions in terms of async generators, it is especially\n      // important to get this right, even though it requires care.\n      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,\n      // Avoid propagating failures to Promises returned by later\n      // invocations of the iterator.\n      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function (innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));\n\n    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.\n    : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done ? GenStateCompleted : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (!info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function () {\n    return this;\n  };\n\n  Gp.toString = function () {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function (object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n            next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function reset(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function stop() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function dispatchException(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !!caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry && (type === \"break\" || type === \"continue\") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function complete(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" || record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n}(\n// Among the various tricks for obtaining a reference to the global\n// object, this seems to be the most reliable technique that does not\n// use indirect eval (which violates Content Security Policy).\n(typeof global === \"undefined\" ? \"undefined\" : _typeof(global)) === \"object\" ? global : (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\" ? window : (typeof self === \"undefined\" ? \"undefined\" : _typeof(self)) === \"object\" ? self : undefined);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./bwttest/node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./bwttest/view/common/common.js":
/*!***************************************!*\
  !*** ./bwttest/view/common/common.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./common.scss */ \"./bwttest/view/common/common.scss\");\n\n__webpack_require__(/*! n-zepto */ \"./bwttest/node_modules/n-zepto/n-zepto.js\");\n\n__webpack_require__(/*! babel-polyfill */ \"./bwttest/node_modules/babel-polyfill/lib/index.js\");\n\nvar _fastclick = __webpack_require__(/*! fastclick */ \"./bwttest/node_modules/fastclick/lib/fastclick.js\");\n\nvar _fastclick2 = _interopRequireDefault(_fastclick);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_fastclick2.default.attach(document.body);\n\n//# sourceURL=webpack:///./bwttest/view/common/common.js?");

/***/ }),

/***/ "./bwttest/view/common/common.scss":
/*!*****************************************!*\
  !*** ./bwttest/view/common/common.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./bwttest/view/common/common.scss?");

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\r\nmodule.exports = __webpack_amd_options__;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-options.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar g;\n\n// This works in non-strict mode\ng = function () {\n\treturn this;\n}();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function () {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ })

/******/ });