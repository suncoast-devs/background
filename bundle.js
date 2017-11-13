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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _operators = __webpack_require__(1);

var _operators2 = _interopRequireDefault(_operators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COLORS = {
  bd: '#5a9090',
  bl: '#80ced2',
  gr: '#b2d235',
  yw: '#fff100',
  or: '#f89f1b',
  rd: '#d5562b',
  pp: '#885780',
  pl: '#c5a7b4',
  wh: '#f7f1d9'
};

var cellSize = 60;
var elemSize = 20;

var canvas = document.querySelector('canvas');
var controls = document.querySelector('form');

document.addEventListener('DOMContentLoaded', function () {
  draw();
});

controls.addEventListener('submit', function (event) {
  event.preventDefault();
  draw();
});

var ctx = canvas.getContext('2d');
var DOMURL = window.URL || window.webkitURL || window;

var draw = function draw() {
  canvas.width = controls.width.value;
  canvas.height = controls.height.value;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = COLORS.bl;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var _loop = function _loop(i) {
    var _loop2 = function _loop2(j) {
      if (Math.random() > i * cellSize / canvas.height) {
        var data = _operators2.default[rand(_operators2.default.length)].replace('white', randColor());
        var img = new Image();
        var svg = new Blob([data], { type: 'image/svg+xml' });
        var url = DOMURL.createObjectURL(svg);
        img.onload = function () {
          ctx.rotate(-0.0618);
          ctx.globalAlpha = Math.random();
          ctx.translate(cellSize * j + rand(cellSize / 2) + cellSize / 4, cellSize * i + rand(cellSize / 2) + cellSize / 4);
          ctx.drawImage(img, -elemSize / 2, -elemSize / 2, elemSize, elemSize);
          DOMURL.revokeObjectURL(url);
          ctx.resetTransform();
        };
        img.src = url;
      }
    };

    for (var j = -1; j * cellSize < canvas.width; j++) {
      _loop2(j);
    }
  };

  for (var i = -1; i * cellSize < canvas.height; i++) {
    _loop(i);
  }
};

var randColor = function randColor() {
  var gr = COLORS.gr,
      yw = COLORS.yw,
      or = COLORS.or,
      rd = COLORS.rd,
      pp = COLORS.pp,
      pl = COLORS.pl,
      wh = COLORS.wh;

  var colors = [gr, yw, or, rd, pp, pl, wh];
  if (Math.random() > 0.618) {
    return colors[rand(colors.length)];
  } else {
    return COLORS.bd;
  }
};

var rand = function rand(n) {
  return Math.floor(Math.random() * n);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ["<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"38.44 15.57 29.68 15.26 36.15 5.09 29.03 1.23 20.82 13.54 12.9 0.94 6.97 5.98 12.41 14.65 1.23 14.25 0.99 22.33 14.43 23.12 7.07 34.17 14.59 39.02 21.19 28.62 27.54 38.72 33.97 34.47 27.32 23.88 38.29 24.53 38.44 15.57\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"6.46 0.63 9.75 29.88 15.72 29.71 16.76 0.8 6.46 0.63\" />\n    <polygon points=\"22.74 1.62 23.93 29.05 31.7 29.05 32.88 4.75 30.35 1.79 22.74 1.62\" />\n    <polygon points=\"25.27 30.7 23.48 35.66 27.81 39.29 32.14 36.98 31.1 32.19 25.27 30.7\" />\n    <polygon points=\"15.27 32.19 16.46 37.14 12.28 39.46 9 36.65 10.49 31.69 15.27 32.19\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"28.73 4.21 33.76 9.54 20.29 21.97 35.24 32.48 31.24 38.25 6.68 21.97 28.73 4.21\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"33.42 6.41 39.02 10.22 18.97 34.28 13.87 30.73 33.42 6.41\" />\n    <polygon points=\"21.32 6.28 26.31 9.58 7.31 34.73 1.73 29.89 21.32 6.28\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"12.72 0.95 25.73 1.61 23.56 27.13 14.89 27.13 12.72 0.95\" />\n    <polygon points=\"19.72 30.13 23.56 32.8 21.56 37.47 15.39 37.47 14.89 32.8 19.72 30.13\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"27.26 4.62 32.93 9.45 9.59 35.47 5.42 32.3 27.26 4.62\" />\n    <polygon points=\"27.43 23.96 31.1 25.63 30.1 31.96 24.59 30.96 23.76 26.96 27.43 23.96\" />\n    <polygon points=\"10.59 8.45 14.59 10.29 14.42 15.46 8.92 16.46 6.92 11.79 10.59 8.45\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"14.96 4.95 18.83 9.05 9.26 17.94 19.29 27.28 14.96 32.3 1.28 18.85 14.96 4.95\" />\n    <polygon points=\"33.64 6.54 37.52 11.56 27.49 18.62 37.75 27.97 33.87 32.3 17.92 18.62 33.64 6.54\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <path d=\"M20.17,23.76l.46-13.09.67-.38,8.38,3.6,1.65-6.44s-6.64-1.72-10.5-2.68L21,.54,13.4,3.8l.34,4c-3.37,3-7.42,6.65-7.42,6.65l3.29,13,5.78.36.28,3.38-3.21.15.3,4.79,3.3-.16L16.3,39l3.37-.7.08-2.41L28,35.45l2.84-5.84L25,24.37Zm-7-.89-.6-7.64,1.66-.94L15,23.1Zm6.71,8.19.1-2.88,1.43.09.6,2.69Z\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"19.19 6.12 37.2 20.29 25.86 36.47 20.86 31.8 29.03 21.13 16.86 10.95 19.19 6.12\" />\n    <polygon points=\"5.68 9.12 19.36 20.46 10.69 35.13 4.52 30.8 10.52 21.96 1.85 15.29 5.68 9.12\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"2.38 18.29 4.55 22.79 16.06 15.96 27.23 24.96 38.07 18.46 34.9 14.29 27.9 18.29 18.39 8.79 12.22 8.95 2.38 18.29\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"36.69 19.89 32.1 24.48 18.8 13.47 6.26 25.24 1.97 19.74 16.66 3.06 36.69 19.89\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <path d=\"M22.11,11.23l-1.28,2.7-7.7-2-5,10,6.42,10.3,5.56-1L27.82,35,38.94,19,27.53.92,8.42,2.78.86,22l11,16.21,9.56-2L21,33l-7.7.67L5.71,22,11.13,8.52,26.82,7l7.27,11.15-6.7,11.48-4-2.7,2-14ZM19.4,25.92l-3,1.18L12.13,22l2.42-5.4,6.42,1Z\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"12.74 0.63 8.88 6 24.1 18.17 23.47 27.63 10.36 34.67 13.85 39.75 31.41 31.8 30.67 14.75 12.74 0.63\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"8.99 4.54 8.83 37.17 14.93 37.5 15.59 3.06 8.99 4.54\" />\n    <polygon points=\"23.5 3.22 22.84 37.01 29.93 37.34 30.25 3.06 23.5 3.22\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"28.77 4.04 36.19 8.33 12.94 36.84 6.35 32.06 28.77 4.04\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"3.05 15.25 2.89 24.15 36.84 25.31 37.01 16.9 34.7 14.43 3.05 15.25\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"16.2 5.89 15.98 10.78 19.99 13.52 24.9 12.34 25.35 7.65 21.11 3.16 16.2 5.89\" />\n    <polygon points=\"17.48 24.05 13.87 28.41 15.55 31.74 19.16 32.78 17.48 36.31 19.4 37.35 24.45 32.57 24.69 26.54 22.52 23.63 17.48 24.05\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"26.81 3.2 27.04 7.91 18.07 7.91 17.95 33.1 24.16 32.99 24.16 37.59 11.51 37.02 11.05 3.2 26.81 3.2\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"14.78 2.39 14.21 7.68 23.64 8.26 23.87 34.03 16.16 34.83 16.51 38.86 28.59 38.05 28.59 2.97 14.78 2.39\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"25.99 2.16 26.91 5.38 19.55 9.75 21.96 18.84 20.24 21.26 23 23.56 20.81 32.53 24.72 34.37 23 37.71 16.33 33.68 19.43 25.74 15.75 20.8 18.17 18.27 15.63 8.6 25.99 2.16\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"15.66 0.73 13.33 3.96 20.95 8.36 17.46 17.01 20.44 18.95 17.46 22.18 22.63 30.57 16.56 36 19.27 39.35 27.28 31.48 22.37 22.56 25.34 18.3 21.6 15.59 26.89 6.16 15.66 0.73\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"15.98 8.75 20.58 14.5 9.9 23.38 19.92 31.1 16.8 37.18 2.01 24.36 15.98 8.75\" />\n    <polygon points=\"23.7 14.34 23.54 21.07 38.33 20.58 38.17 14.17 23.7 14.34\" />\n    <polygon points=\"23.7 29.13 23.7 34.72 37.18 35.38 37.02 29.29 23.7 29.13\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"18.42 19.87 12.86 19.39 13.38 10.94 8.09 10.53 7.96 18.96 1.16 18.38 1.07 22.84 7.89 23.67 7.76 31.35 12.06 32.26 12.56 24.24 18.01 24.91 18.42 19.87\" />\n    <polygon points=\"39.04 19.5 31.62 19.13 31.94 10.33 27.31 9.42 27.08 18.9 22.52 18.67 22.27 23.46 26.96 23.84 26.73 32.97 31.11 33.13 31.44 24.19 38.88 24.79 39.04 19.5\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"27.31 0.92 30.65 5.9 18.54 14.8 17.55 27.64 27.33 32.9 24.98 38.73 12.57 32.16 13.45 11.14 27.31 0.92\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"35.65 9.63 36.21 18.12 4.32 20.01 3.94 11.7 5.83 9.06 35.65 9.63\" />\n    <polygon points=\"35.65 24.35 35.46 35.29 3.76 34.54 4.13 24.91 35.65 24.35\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"36.15 15.69 26.47 15.52 26.93 3.83 15.44 4.58 15.08 15.32 4.33 15.13 3.2 17.76 3.01 26.05 14.71 26.18 14.31 38.1 25.61 37.91 26.06 26.31 36.15 26.42 36.15 15.69\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"38.64 37.2 33.34 38.94 23.71 26.61 8.4 16.3 7.82 8.98 10.04 2.24 21.21 1.09 25.83 7.83 24.48 16.69 11.96 22.47 9.95 28.62 14.1 33.63 22.27 32.68 28.91 24.78 30.88 16.7 34.59 16.11 33.44 28.63 25.06 36.63 11.29 38.26 2.72 30.46 8.4 19.87 12.54 16.59 19.67 13.61 20.73 8.12 17.93 5.04 13.82 6.01 12.06 10.33 12.64 14.57 26.41 22.95 38.64 37.2\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"38.13 13.3 38.28 19.67 21.85 20.11 21.56 13.6 38.13 13.3\" />\n    <polygon points=\"38.28 23.66 38.87 30.47 22 30.77 22.15 24.4 38.28 23.66\" />\n    <polygon points=\"17.12 24.85 17.12 30.32 1.14 31.06 1.14 24.25 17.12 24.85\" />\n    <polygon points=\"17.86 13.01 18.3 19.37 1.43 19.37 1.58 13.6 3.21 11.68 17.86 13.01\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"2.8 1.72 5.29 28.47 12.78 28.47 13.01 0.81 2.8 1.72\" />\n    <polygon points=\"5.12 31.95 6.25 37.77 12.83 37.95 13.06 32.67 5.12 31.95\" />\n    <polygon points=\"20.11 23.15 20.36 30.55 38.61 30.7 38.48 22.27 20.11 23.15\" />\n    <polygon points=\"20.85 9.18 20.98 16.57 37.97 16.79 37.97 8.06 20.85 9.18\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <path d=\"M37.06,23.6l-7.34.62.67-3.93,7.71-.1-.44-8.58-5.8.09,1.21-7-8.88-.14-.54,7.33L15.72,12l.63-10.28L6.13.51,5.91,12.13l-4.66.07L1.1,20.64l4.64-.06-.11,5.69-3.34.29.14,6.06,3.08-.14L5.39,38.4,14.13,38l.36-5.89,7.68-.36-.35,4.77,5.77.15.89-5.21L37.36,31ZM14.89,25.48l.31-5,7.81-.1-.33,4.45Z\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"3.77 9 7.59 11.27 9.82 7.83 15.33 7.55 19.45 13.22 17.08 17.67 10.68 19.78 10.25 30.37 14.89 30.37 15.45 23.77 21.09 22.94 25.9 13.72 18.47 1.07 7.61 0.8 3.77 9\" />\n    <polygon points=\"10.25 32.95 9.81 36.16 13.12 39.47 16.55 36.82 14.67 33.95 10.25 32.95\" />\n    <polygon points=\"29.01 32.12 31.75 36.24 37 34.99 36.37 28.25 32 27.38 29.01 32.12\" />\n    <polygon points=\"29.56 5.18 29.3 9.95 32.27 12.91 36.39 12.53 37.29 7.5 33.81 4.54 29.56 5.18\" />\n   </svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40\" width=\"40\" style=\"fill:white\">\n    <polygon points=\"9.7 4.51 5.12 11.02 25.68 22.71 11.33 36.03 15.33 39.43 35.45 21.38 9.7 4.51\" />\n  </svg>"];

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map