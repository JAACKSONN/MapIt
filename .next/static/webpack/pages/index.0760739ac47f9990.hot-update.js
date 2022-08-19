"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/distance.tsx":
/*!*********************************!*\
  !*** ./components/distance.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Distance; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar commutesPerYear = 260 * 2;\nvar litresPerKM = 10 / 100;\nvar gasLitreCost = 1.5;\nvar litreCostKM = litresPerKM * gasLitreCost;\nvar secondsToMinutes = 1 / 60;\nvar kilometersToMiles = 0.621371;\nvar SURGE_CHARGE_RATE = 1.15;\nfunction Distance(param) {\n    var leg = param.leg;\n    if (!leg.distance || !leg.duration) return null;\n    var time = Math.floor(leg.duration.value * secondsToMinutes);\n    var taxiCost = Math.round(100 * (leg.distance.value / 1000 * 1.3 + 2.6)) / 100;\n    var uberCost = Math.round(100 * (leg.distance.value * kilometersToMiles / 1000) * SURGE_CHARGE_RATE) / 100 + 2.5;\n    var lyftCost = Math.round(100 * (leg.distance.value * kilometersToMiles / 1000) * 1.1) / 100;\n    var spinCost = Math.round(100 * (leg.distance.value / 1000 * 60 * 0.29 / 16)) / 100 + 1;\n    var spinTime = Math.floor(leg.distance.value / 1000 * 60 / 16);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"This location is \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: leg.distance.text\n                    }, void 0, false, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 26\n                    }, this),\n                    \" or \",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: leg.duration.text\n                    }, void 0, false, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    \" away.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"A standard taxi in this city will cost you \",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: [\n                            \"$\",\n                            new Intl.NumberFormat().format(taxiCost)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"../public/uber.png\",\n                        alt: \"UberX\",\n                        className: \"uber_logo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"will cost you \",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"highlight\",\n                                children: [\n                                    \"$\",\n                                    new Intl.NumberFormat().format(uberCost)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Lyft will cost you \",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: [\n                            \"$\",\n                            new Intl.NumberFormat().format(lyftCost)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"A Spin scooter will cost you \",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: [\n                            \"$\",\n                            new Intl.NumberFormat().format(spinCost)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    \", but will take \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: [\n                            spinTime,\n                            \" minutes \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 25\n                    }, this),\n                    \" instead\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this));\n};\n_c = Distance;\nvar _c;\n$RefreshReg$(_c, \"Distance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rpc3RhbmNlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLEdBQUssQ0FBQ0EsZUFBZSxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQy9CLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLEVBQUUsR0FBRyxHQUFHO0FBQzVCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLEdBQUc7QUFDeEIsR0FBSyxDQUFDQyxXQUFXLEdBQUdGLFdBQVcsR0FBR0MsWUFBWTtBQUM5QyxHQUFLLENBQUNFLGdCQUFnQixHQUFHLENBQUMsR0FBQyxFQUFFO0FBQzdCLEdBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsUUFBUTtBQUNsQyxHQUFLLENBQUNDLGlCQUFpQixHQUFHLElBQUk7QUFPZixRQUFRLENBQUNDLFFBQVEsQ0FBQyxLQUFzQixFQUFFLENBQUM7UUFBdkJDLEdBQUcsR0FBTCxLQUFzQixDQUFwQkEsR0FBRztJQUNwQyxFQUFFLEdBQUdBLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLRCxHQUFHLENBQUNFLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSTtJQUUvQyxHQUFLLENBQUNDLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQ3BCTCxHQUFHLENBQUNFLFFBQVEsQ0FBQ0ksS0FBSyxHQUFJVixnQkFBZ0I7SUFFekMsR0FBSyxDQUFDVyxRQUFRLEdBQUdILElBQUksQ0FBQ0ksS0FBSyxDQUFDLEdBQUcsSUFBTVIsR0FBRyxDQUFDQyxRQUFRLENBQUNLLEtBQUssR0FBRyxJQUFJLEdBQUksR0FBSSxHQUFJLEdBQUksS0FBRyxHQUFHO0lBRXBGLEdBQUssQ0FBQ0csUUFBUSxHQUFHTCxJQUFJLENBQUNJLEtBQUssQ0FBQyxHQUFHLElBQUlSLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDSyxLQUFLLEdBQUdULGlCQUFpQixHQUFHLElBQUksSUFBSUMsaUJBQWlCLElBQUksR0FBRyxHQUFHLEdBQUc7SUFFbEgsR0FBSyxDQUFDWSxRQUFRLEdBQUdOLElBQUksQ0FBQ0ksS0FBSyxDQUFDLEdBQUcsSUFBSVIsR0FBRyxDQUFDQyxRQUFRLENBQUNLLEtBQUssR0FBR1QsaUJBQWlCLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHO0lBRTlGLEdBQUssQ0FBQ2MsUUFBUSxHQUFHUCxJQUFJLENBQUNJLEtBQUssQ0FBQyxHQUFHLElBQU1SLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDSyxLQUFLLEdBQUcsSUFBSSxHQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUksRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBRTdGLEdBQUssQ0FBQ00sUUFBUSxHQUFHUixJQUFJLENBQUNDLEtBQUssQ0FBRUwsR0FBRyxDQUFDQyxRQUFRLENBQUNLLEtBQUssR0FBRyxJQUFJLEdBQUksRUFBRSxHQUFHLEVBQUU7SUFFakUsTUFBTSw2RUFDSE8sQ0FBRzs7d0ZBQ0RDLENBQUM7O29CQUFDLENBQ2dCO2dHQUFDQyxDQUFJO3dCQUFDQyxTQUFTLEVBQUMsQ0FBVztrQ0FBRWhCLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDZ0IsSUFBSTs7Ozs7O29CQUFRLENBQUk7b0JBQUMsQ0FBRztnR0FDOUVGLENBQUk7d0JBQUNDLFNBQVMsRUFBQyxDQUFXO2tDQUFFaEIsR0FBRyxDQUFDRSxRQUFRLENBQUNlLElBQUk7Ozs7OztvQkFBUSxDQUN4RDs7Ozs7Ozt3RkFFQ0gsQ0FBQzs7b0JBQUMsQ0FDMEM7b0JBQUMsQ0FBRztnR0FDOUNDLENBQUk7d0JBQUNDLFNBQVMsRUFBQyxDQUFXOzs0QkFBQyxDQUN6Qjs0QkFBQyxHQUFHLENBQUNFLElBQUksQ0FBQ0MsWUFBWSxHQUFHQyxNQUFNLENBQUNiLFFBQVE7Ozs7Ozs7Ozs7Ozs7d0ZBRzVDTSxDQUFHOztnR0FDRFEsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFHLENBQW9CO3dCQUFDQyxHQUFHLEVBQUcsQ0FBTzt3QkFBQ1AsU0FBUyxFQUFHLENBQVc7Ozs7OztnR0FDcEVGLENBQUM7OzRCQUFDLENBQ2E7NEJBQUMsQ0FBRzt3R0FDakJDLENBQUk7Z0NBQUNDLFNBQVMsRUFBQyxDQUFXOztvQ0FBQyxDQUN6QjtvQ0FBQyxHQUFHLENBQUNFLElBQUksQ0FBQ0MsWUFBWSxHQUFHQyxNQUFNLENBQUNYLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSTlDSyxDQUFDOztvQkFBQyxDQUNrQjtvQkFBQyxDQUFHO2dHQUN0QkMsQ0FBSTt3QkFBQ0MsU0FBUyxFQUFDLENBQVc7OzRCQUFDLENBQ3pCOzRCQUFDLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ1YsUUFBUTs7Ozs7Ozs7Ozs7Ozt3RkFHNUNJLENBQUM7O29CQUFDLENBQzRCO29CQUFDLENBQUc7Z0dBQ2hDQyxDQUFJO3dCQUFDQyxTQUFTLEVBQUMsQ0FBVzs7NEJBQUMsQ0FDekI7NEJBQUMsR0FBRyxDQUFDRSxJQUFJLENBQUNDLFlBQVksR0FBR0MsTUFBTSxDQUFDVCxRQUFROzs7Ozs7O29CQUNwQyxDQUNTO2dHQUFDSSxDQUFJO3dCQUFDQyxTQUFTLEVBQUMsQ0FBVzs7NEJBQUVKLFFBQVE7NEJBQUMsQ0FBUzs7Ozs7OztvQkFBTyxDQUN4RTs7Ozs7Ozs7Ozs7OztBQUlOLENBQUM7S0F0RHVCYixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGlzdGFuY2UudHN4PzkyZjYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29tbXV0ZXNQZXJZZWFyID0gMjYwICogMjtcbmNvbnN0IGxpdHJlc1BlcktNID0gMTAgLyAxMDA7XG5jb25zdCBnYXNMaXRyZUNvc3QgPSAxLjU7XG5jb25zdCBsaXRyZUNvc3RLTSA9IGxpdHJlc1BlcktNICogZ2FzTGl0cmVDb3N0O1xuY29uc3Qgc2Vjb25kc1RvTWludXRlcyA9IDEvNjBcbmNvbnN0IGtpbG9tZXRlcnNUb01pbGVzID0gMC42MjEzNzFcbmNvbnN0IFNVUkdFX0NIQVJHRV9SQVRFID0gMS4xNVxuXG4gXG50eXBlIERpc3RhbmNlUHJvcHMgPSB7XG4gIGxlZzogZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc0xlZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc3RhbmNlKHsgbGVnIH06IERpc3RhbmNlUHJvcHMpIHtcbiAgaWYgKCFsZWcuZGlzdGFuY2UgfHwgIWxlZy5kdXJhdGlvbikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgdGltZSA9IE1hdGguZmxvb3IoXG4gICAgKGxlZy5kdXJhdGlvbi52YWx1ZSkgKiBzZWNvbmRzVG9NaW51dGVzXG4gICk7XG4gIGNvbnN0IHRheGlDb3N0ID0gTWF0aC5yb3VuZCgxMDAgKiAoKChsZWcuZGlzdGFuY2UudmFsdWUgLyAxMDAwKSAqIDEuMzApICsgMi42MCkpLzEwMDtcbiBcbiAgY29uc3QgdWJlckNvc3QgPSBNYXRoLnJvdW5kKDEwMCAqIChsZWcuZGlzdGFuY2UudmFsdWUgKiBraWxvbWV0ZXJzVG9NaWxlcyAvIDEwMDApICogU1VSR0VfQ0hBUkdFX1JBVEUpIC8gMTAwICsgMi41XG5cbiAgY29uc3QgbHlmdENvc3QgPSBNYXRoLnJvdW5kKDEwMCAqIChsZWcuZGlzdGFuY2UudmFsdWUgKiBraWxvbWV0ZXJzVG9NaWxlcyAvIDEwMDApICogMS4xKSAvIDEwMFxuXG4gIGNvbnN0IHNwaW5Db3N0ID0gTWF0aC5yb3VuZCgxMDAgKiAoKChsZWcuZGlzdGFuY2UudmFsdWUgLyAxMDAwKSAqIDYwICogMC4yOSkgLyAxNikpIC8gMTAwICsgMVxuXG4gIGNvbnN0IHNwaW5UaW1lID0gTWF0aC5mbG9vcigobGVnLmRpc3RhbmNlLnZhbHVlIC8gMTAwMCkgKiA2MCAvIDE2KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlxuICAgICAgICBUaGlzIGxvY2F0aW9uIGlzIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPntsZWcuZGlzdGFuY2UudGV4dH08L3NwYW4+IG9yIHtcIiBcIn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+e2xlZy5kdXJhdGlvbi50ZXh0fTwvc3Bhbj4gYXdheS5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIEEgc3RhbmRhcmQgdGF4aSBpbiB0aGlzIGNpdHkgd2lsbCBjb3N0IHlvdSB7XCIgXCJ9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPlxuICAgICAgICAgICR7bmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KHRheGlDb3N0KX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmMgPSBcIi4uL3B1YmxpYy91YmVyLnBuZ1wiIGFsdCA9ICdVYmVyWCcgY2xhc3NOYW1lID0gJ3ViZXJfbG9nbycvPlxuICAgICAgICA8cD5cbiAgICAgICAgICB3aWxsIGNvc3QgeW91IHtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5cbiAgICAgICAgICAgICR7bmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KHViZXJDb3N0KX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+XG4gICAgICAgIEx5ZnQgd2lsbCBjb3N0IHlvdSB7XCIgXCJ9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPlxuICAgICAgICAgICR7bmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KGx5ZnRDb3N0KX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEEgU3BpbiBzY29vdGVyIHdpbGwgY29zdCB5b3Uge1wiIFwifVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5cbiAgICAgICAgICAke25ldyBJbnRsLk51bWJlckZvcm1hdCgpLmZvcm1hdChzcGluQ29zdCl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgLCBidXQgd2lsbCB0YWtlIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPntzcGluVGltZX0gbWludXRlcyA8L3NwYW4+IGluc3RlYWRcbiAgICAgIDwvcD5cblxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNvbW11dGVzUGVyWWVhciIsImxpdHJlc1BlcktNIiwiZ2FzTGl0cmVDb3N0IiwibGl0cmVDb3N0S00iLCJzZWNvbmRzVG9NaW51dGVzIiwia2lsb21ldGVyc1RvTWlsZXMiLCJTVVJHRV9DSEFSR0VfUkFURSIsIkRpc3RhbmNlIiwibGVnIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsInRpbWUiLCJNYXRoIiwiZmxvb3IiLCJ2YWx1ZSIsInRheGlDb3N0Iiwicm91bmQiLCJ1YmVyQ29zdCIsImx5ZnRDb3N0Iiwic3BpbkNvc3QiLCJzcGluVGltZSIsImRpdiIsInAiLCJzcGFuIiwiY2xhc3NOYW1lIiwidGV4dCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/distance.tsx\n");

/***/ })

});