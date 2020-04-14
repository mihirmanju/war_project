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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./myscripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./entity/Player.js":
/*!**************************!*\
  !*** ./entity/Player.js ***!
  \**************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\nlet mdraw = __webpack_require__(/*! ../mihirdraw */ \"./mihirdraw.js\");\nlet keycodes = __webpack_require__(/*! ../keypress */ \"./keypress.js\");\nfunction Player(options) {\n  this.x = options.x || 10;\n  (this.y = options.y || 10);\n  this.width = options.width || 40;\n  this.height = options.height || 50;\n  this.color = options.color || \"#000000\";\n  this.speed = options.speed || 5;\n  this.keycodes = options.keycodes;\n  this.direction = options.direction || \"right\";\n\n  let anyplayer = this;\n  anyplayer.nose = {\n    width: 15,\n    height: 15,\n    x: anyplayer.x - 10,\n    y: anyplayer.y,\n    draw: function () {\n      if (anyplayer.direction == \"right\")\n        mdraw.draw_rect(anyplayer.x + 50, anyplayer.y, this.width, this.height);\n      else if (anyplayer.direction == \"left\")\n        mdraw.draw_rect(anyplayer.x - 15, anyplayer.y, this.width, this.height);\n      else if (anyplayer.direction == \"up\")\n        mdraw.draw_rect(anyplayer.x, anyplayer.y - 15, this.width, this.height);\n      else if (anyplayer.direction == \"down\")\n        mdraw.draw_rect(anyplayer.x, anyplayer.y + 50, this.width, this.height);\n    },\n  };\n  this.draw = function () {\n    mdraw.change_fill_style(this.color);\n    mdraw.draw_rect(this.x, this.y, this.width, this.height);\n    this.nose.draw();\n  };\n}\n\n\n//# sourceURL=webpack:///./entity/Player.js?");

/***/ }),

/***/ "./entity/bullet.js":
/*!**************************!*\
  !*** ./entity/bullet.js ***!
  \**************************/
/*! exports provided: bullet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bullet\", function() { return bullet; });\nlet mdraw = __webpack_require__(/*! ../mihirdraw */ \"./mihirdraw.js\");\nlet keycodes = __webpack_require__(/*! ../keypress */ \"./keypress.js\");\nfunction bullet(options) {\n  this.x = options.x || 100;\n  this.y = options.y || 10;\n  this.width = options.width || 20;\n  this.height = options.height || 20;\n  this.color = options.color || \"#ff0000\";\n  this.speed = options.speed || 15;\n  this.keycodes = options.keycodes;\n  this.direction = options.direction || \"right\";\n\n  this.draw = function () {\n    mdraw.change_fill_style(this.color);\n    mdraw.draw_rect(this.x + 100, this.y, this.width, this.height);\n  };\n}\n\n/*if (this.direction == \"right\")\n  mdraw.draw_rect(this.x + 90, this.y, this.width, this.height);\nelse if (this.direction == \"left\")\n  mdraw.draw_rect(this.x - 15, this.y, this.width, this.height);\nelse if (this.direction == \"up\")\n  mdraw.draw_rect(this.x, this.y - 15, this.width, this.height);\nelse if (this.direction == \"down\")*/\n\n\n//# sourceURL=webpack:///./entity/bullet.js?");

/***/ }),

/***/ "./keypress.js":
/*!*********************!*\
  !*** ./keypress.js ***!
  \*********************/
/*! exports provided: input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n\n\nvar keys = {} //new object variable for keystrokes//\n\nwindow.addEventListener(\"keydown\", function (e) {\n  // listens to key down as a function which is defined within the curley brackets//\n  console.log('e.keyCode', e.keyCode);\n  console.log('keys', keys);  \n  keys[e.keyCode] = null;\n  console.log('keys new value', keys);\n\n  e.preventDefault(); //prevents default function for arrows//\n});\n\nwindow.addEventListener(\"keyup\", function (e) {\n  delete keys[e.keyCode]; //event listner for no more leyboard pressdown\n});\n\nfunction input(poop) {\n  //creates new function named input for poop variable//\n  if (poop.keycodes[0] in keys) {\n    poop.x -= poop.speed; \n    poop.direction = \"left\"; \n  }\n  if (poop.keycodes[1] in keys) {\n    poop.x += poop.speed;\n    poop.direction = \"right\";\n  }\n  if (poop.keycodes[2] in keys) {\n    poop.y -= poop.speed;\n    poop.direction = \"up\";\n  }\n  if (poop.keycodes[3] in keys) {\n    poop.y += poop.speed;\n    poop.direction = \"down\";\n  }\n}\n\n\n\n\n\n//# sourceURL=webpack:///./keypress.js?");

/***/ }),

/***/ "./mihirdraw.js":
/*!**********************!*\
  !*** ./mihirdraw.js ***!
  \**********************/
/*! exports provided: clear_screen, change_fill_style, draw_rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clear_screen\", function() { return clear_screen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"change_fill_style\", function() { return change_fill_style; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw_rect\", function() { return draw_rect; });\nvar canvas = document.getElementById(\"myCanvas\");\nvar ctx = canvas.getContext(\"2d\");\n\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\n\nfunction clear_screen(){\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n}\n\nfunction change_fill_style(color){\n    ctx.fillStyle = color;\n}\n\nfunction draw_rect(x, y, width, height){\n    ctx.fillRect(x, y, width, height);//Player value//\n}\n\n\n//# sourceURL=webpack:///./mihirdraw.js?");

/***/ }),

/***/ "./myscripts.js":
/*!**********************!*\
  !*** ./myscripts.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let keypress = __webpack_require__(/*! ./keypress */ \"./keypress.js\");\nlet Player = __webpack_require__(/*! ./entity/Player */ \"./entity/Player.js\").Player;\nlet bullet = __webpack_require__(/*! ./entity/bullet */ \"./entity/bullet.js\").bullet;\nlet mdraw = __webpack_require__(/*! ./mihirdraw */ \"./mihirdraw.js\");\nconsole.log(Player);\n\nvar player1 = new Player({\n  x: 10,\n  y: 10,\n  width: 50,\n  height: 50,\n  color: \"red\",\n  speed: 50,\n  keycodes: [37, 39, 38, 40],\n});\n\nvar player2 = new Player({\n  x: 100,\n  y: 10,\n  width: 50,\n\n  speed: 5,\n  keycodes: [65, 68, 87, 83],\n});\n\nconst bullet1 = new bullet();\n\nfunction update() {\n  keypress.input(player1);\n  keypress.input(player2);\n}\n\nfunction draw() {\n  //clears thd whole screen before each frame and calls drawPlayer function//\n  //clears the whole canvas//\n  mdraw.clear_screen();\n  player1.draw(); // redwars the player1 in the next x,y value//\n  player2.draw(); // redwars the player1 in the next x,y value//\n  bullet1.draw();\n}\n\nfunction loop() {\n  //this function does the looping and//\n  // also loops other function in it//\n  update(); //this function updates after keypress//\n  draw(); //draw and redraw//\n  window.requestAnimationFrame(loop); //runs loop for refreshing the page//\n}\n\nloop(); // things get started reverse from here//\n\n\n//# sourceURL=webpack:///./myscripts.js?");

/***/ })

/******/ });