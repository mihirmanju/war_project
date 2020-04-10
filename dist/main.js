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

/***/ "./keypress.js":
/*!*********************!*\
  !*** ./keypress.js ***!
  \*********************/
/*! exports provided: input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n\nvar keys = {};//new arraay variable for keystrokes//\n\nwindow.addEventListener(\"keydown\", function (e) {// listens to key down as a function which is defined within the curley brackets//\n  keys[e.keyCode] = true;\n  e.preventDefault();//prevents default function for arrows//\n});\n\nwindow.addEventListener(\"keyup\", function (e) {\n  delete keys[e.keyCode];//event listner for nome more leyboard pressdown\n});\n\n\nfunction input(player) { //creates new function named input for player variable//\n    if (37 in keys) {\n      player.x -= player.speed;//reduces x value by 5 as stated in speed//\n      player.direction = \"left\";//with left keypress//\n    }\n    if (39 in keys) {\n      player.x += player.speed;\n      player.direction = \"right\";\n    }\n    if (38 in keys) {\n      player.y -= player.speed;\n      player.direction = \"up\";\n    }\n    if (40 in keys) {\n      player.y += player.speed;\n      player.direction = \"down\";\n    }\n  }\n\n\n\n\n//# sourceURL=webpack:///./keypress.js?");

/***/ }),

/***/ "./myscripts.js":
/*!**********************!*\
  !*** ./myscripts.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var canvas = document.getElementById(\"myCanvas\");\nvar ctx = canvas.getContext(\"2d\");\nvar keypress = __webpack_require__(/*! ./keypress.js */ \"./keypress.js\");\n\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\n\n\nfunction Box(options) {\n  this.x = options.x || 10;  color: \"#44ee11\",\n  this.y = options.y || 10;\n  this.width = options.width || 40;\n  this.height = options.height || 50;\n  this.color = options.color || \"#000000\";\n  this.speed = options.speed || 5;\n  this.direction = options.direction || \"right\";\n}\n\nvar player = new Box({\n  X: 10,\n  y: 10,\n  width: 50,\n  height: 50,\n  color: \"red\",\n  speed: 5,\n})\n\n\n\n\n\n\nfunction drawBox(box) { //clears screen and redraws by calling drawbox//\n  ctx.fillStyle = box.color;//fills the box//\n  ctx.fillRect(box.x, box.y, box.width, box.height);//box value//\n}\n\nfunction update() {\n  keypress.input(player);\n}\n\nfunction draw() { //clears thd whole screen before each frame and calls drawbox function//\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n             //clears the whole canvas//\n  drawBox(player);// redwars the player in the next x,y value//\n}\n\nfunction loop() {   //this function does the looping and//\n                    // also loops other function in it//\n  update();         //this function updates after keypress//\n  draw();          //draw and redraw//\n  window.requestAnimationFrame(loop); //runs loop for refreshing the page//\n}\n\nloop(); // things get started reverse from here//\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// var canvas = document.getElementById(\"myCanvas\");\n// var ctx = canvas.getContext(\"2d\");\n// function draw() {\n\n// }\n// setInterval(draw, 10);\n\n// ctx.strokeStyle = 'green';\n// ctx.fillStyle = \"#008000\";\n// ctx.fillRect(20, 20, 25, 20);\n// ctx.fillStyle = \"#FF0000\";\n// ctx.fillRect(50, 200, 25, 20);\n\n\n//# sourceURL=webpack:///./myscripts.js?");

/***/ })

/******/ });