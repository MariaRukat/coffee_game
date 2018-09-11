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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _game = __webpack_require__(/*! ./game */ \"./js/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n    var game = new _game.Game();\n\n    game.showFace();\n    game.showCoffee();\n    game.startGame();\n\n    document.addEventListener(\"keydown\", function (event) {\n        return game.turnFace(event);\n    });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/coffee.js":
/*!**********************!*\
  !*** ./js/coffee.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Coffee = function Coffee() {\n    _classCallCheck(this, Coffee);\n\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n};\n\nexports.Coffee = Coffee;\n\n//# sourceURL=webpack:///./js/coffee.js?");

/***/ }),

/***/ "./js/face.js":
/*!********************!*\
  !*** ./js/face.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Face = function Face() {\n    _classCallCheck(this, Face);\n\n    this.x = 0;\n    this.y = 0;\n    this.direction = \"right\";\n};\n\nexports.Face = Face;\n\n//# sourceURL=webpack:///./js/face.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Game = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _coffee = __webpack_require__(/*! ./coffee */ \"./js/coffee.js\");\n\nvar _face = __webpack_require__(/*! ./face */ \"./js/face.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function () {\n    function Game() {\n        _classCallCheck(this, Game);\n\n        this.board = document.querySelectorAll('.board-box');\n        this.face = new _face.Face();\n        this.coffee = new _coffee.Coffee();\n        this.score = 0;\n        this.speed = 500;\n    }\n\n    _createClass(Game, [{\n        key: \"index\",\n        value: function index(x, y) {\n            return x + y * 10;\n        }\n    }, {\n        key: \"startGame\",\n        value: function startGame() {\n            var _this = this;\n\n            this.interval = setInterval(function () {\n                _this.moveFace();\n            }, this.speed);\n        }\n    }, {\n        key: \"showFace\",\n        value: function showFace() {\n            this.hideVisibleFace();\n            this.board[this.index(this.face.x, this.face.y)].classList.add('face');\n        }\n    }, {\n        key: \"showCoffee\",\n        value: function showCoffee() {\n            this.board[this.index(this.coffee.x, this.coffee.y)].classList.add('coffee');\n        }\n    }, {\n        key: \"hideVisibleFace\",\n        value: function hideVisibleFace() {\n            if (document.querySelector('.face')) {\n                document.querySelector('.face').classList.remove('face');\n            }\n        }\n    }, {\n        key: \"moveFace\",\n        value: function moveFace() {\n            if (this.face.direction === 'right') {\n                this.face.x = this.face.x + 1;\n            } else if (this.face.direction === 'left') {\n                this.face.x = this.face.x - 1;\n            } else if (this.face.direction === 'down') {\n                this.face.y = this.face.y + 1;\n            } else if (this.face.direction === 'up') {\n                this.face.y = this.face.y - 1;\n            }\n            this.checkCoffeeCollision();\n            this.gameOver();\n            this.showFace();\n        }\n    }, {\n        key: \"turnFace\",\n        value: function turnFace(event) {\n            switch (event.which) {\n                case 37:\n                    this.face.direction = 'left';\n                    break;\n                case 38:\n                    this.face.direction = 'up';\n                    break;\n                case 39:\n                    this.face.direction = 'right';\n                    break;\n                case 40:\n                    this.face.direction = 'down';\n                    break;\n            }\n        }\n    }, {\n        key: \"checkCoffeeCollision\",\n        value: function checkCoffeeCollision() {\n            if (this.face.x === this.coffee.x && this.face.y === this.coffee.y) {\n                document.querySelector('.coffee').classList.remove('coffee');\n                this.score++;\n                document.querySelector('#score strong').innerText = this.score;\n                this.coffee = new _coffee.Coffee();\n                this.showCoffee();\n                clearInterval(this.interval);\n                this.speed = this.speed - 50;\n                this.startGame();\n            }\n        }\n    }, {\n        key: \"gameOver\",\n        value: function gameOver() {\n            if (this.face.x < 0 || this.face.x > 9 || this.face.y < 0 || this.face.y > 9) {\n                clearInterval(this.interval);\n                this.hideVisibleFace();\n                document.querySelector('#over').classList.remove('invisible');\n                document.querySelector('#over strong').innerText = this.score;\n                if (this.score >= 4) {\n                    document.querySelector('#over .end-face').classList.add(\"happy-face\");\n                } else if (this.score >= 2) {\n                    document.querySelector('#over .end-face').classList.add(\"rested-face\");\n                } else {\n                    document.querySelector('#over .end-face').classList.add(\"sleepy-face\");\n                }\n            }\n        }\n    }]);\n\n    return Game;\n}();\n\nexports.Game = Game;\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ })

/******/ });