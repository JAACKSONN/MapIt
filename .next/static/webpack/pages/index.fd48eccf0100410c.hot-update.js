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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Distance; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar commutesPerYear = 260 * 2;\nvar litresPerKM = 10 / 100;\nvar gasLitreCost = 1.5;\nvar litreCostKM = litresPerKM * gasLitreCost;\nvar secondsToMinutes = 1 / 60;\nvar kilometersToMiles = 0.621371;\nvar SURGE_CHARGE_RATE = 1.15;\nfunction Distance(param) {\n    var leg = param.leg;\n    if (!leg.distance || !leg.duration) return null;\n    var time = Math.floor(leg.duration.value * secondsToMinutes);\n    var taxiCost = Math.round(100 * (leg.distance.value / 1000 * 1.3 + 2.6)) / 100;\n    var uberCost = Math.round(100 * (leg.distance.value * kilometersToMiles / 1000) * SURGE_CHARGE_RATE) / 100 + 2.5;\n    var lyftCost = Math.round(100 * (leg.distance.value * kilometersToMiles / 1000) * 1.1) / 100;\n    var spinCost = Math.round(100 * (leg.distance.value / 1000 * 60 * 0.29 / 16)) / 100 + 1;\n    var spinTime = Math.floor(leg.distance.value / 1000 * 60 / 16);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"This location is \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: leg.distance.text\n                    }, void 0, false, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 26\n                    }, this),\n                    \" or \",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: leg.duration.text\n                    }, void 0, false, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    \" away.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"A 🚕 in this city will cost you \",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: [\n                            \"$\",\n                            new Intl.NumberFormat().format(taxiCost)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"./uber.png\",\n                        alt: \"UberX\",\n                        className: \"uber_logo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"will cost you \",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"highlight\",\n                                children: [\n                                    \"$\",\n                                    new Intl.NumberFormat().format(uberCost)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"./lyft.png\",\n                        alt: \"Lyft\",\n                        className: \"lyft_logo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"will cost you \",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"highlight\",\n                                children: [\n                                    \"$\",\n                                    new Intl.NumberFormat().format(lyftCost)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"spin_logo\",\n                        children: \"SPIN\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    \" scooters will cost you \",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: [\n                            \"$\",\n                            new Intl.NumberFormat().format(spinCost)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this),\n                    \", but will take \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: [\n                            spinTime,\n                            \" minutes \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 27\n                    }, this),\n                    \" instead\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jellinge/Desktop/MapIt/MapIt/components/distance.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this));\n};\n_c = Distance;\nvar _c;\n$RefreshReg$(_c, \"Distance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQ3pCO29DQUFDLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ1gsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJOUNJLENBQUc7O2dHQUNDUSxDQUFHO3dCQUFDQyxHQUFHLEVBQUcsQ0FBWTt3QkFBQ0MsR0FBRyxFQUFHLENBQU07d0JBQUNQLFNBQVMsRUFBRyxDQUFXOzs7Ozs7Z0dBQzNERixDQUFDOzs0QkFBQyxDQUNhOzRCQUFDLENBQUc7d0dBQ25CQyxDQUFJO2dDQUFDQyxTQUFTLEVBQUMsQ0FBVzs7b0NBQUMsQ0FDekI7b0NBQUMsR0FBRyxDQUFDRSxJQUFJLENBQUNDLFlBQVksR0FBR0MsTUFBTSxDQUFDVixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUk1Q0ksQ0FBQzs7Z0dBQ0NDLENBQUk7d0JBQUNDLFNBQVMsRUFBRyxDQUFXO2tDQUFDLENBQUk7Ozs7OztvQkFBTyxDQUF3QjtvQkFBQyxDQUFHO2dHQUNwRUQsQ0FBSTt3QkFBQ0MsU0FBUyxFQUFDLENBQVc7OzRCQUFDLENBQ3pCOzRCQUFDLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ1QsUUFBUTs7Ozs7OztvQkFDcEMsQ0FDUztnR0FBQ0ksQ0FBSTt3QkFBQ0MsU0FBUyxFQUFDLENBQVc7OzRCQUFFSixRQUFROzRCQUFDLENBQVM7Ozs7Ozs7b0JBQU8sQ0FDeEU7Ozs7Ozs7Ozs7Ozs7QUFHUixDQUFDO0tBeER1QmIsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rpc3RhbmNlLnRzeD85MmY2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbW11dGVzUGVyWWVhciA9IDI2MCAqIDI7XG5jb25zdCBsaXRyZXNQZXJLTSA9IDEwIC8gMTAwO1xuY29uc3QgZ2FzTGl0cmVDb3N0ID0gMS41O1xuY29uc3QgbGl0cmVDb3N0S00gPSBsaXRyZXNQZXJLTSAqIGdhc0xpdHJlQ29zdDtcbmNvbnN0IHNlY29uZHNUb01pbnV0ZXMgPSAxLzYwXG5jb25zdCBraWxvbWV0ZXJzVG9NaWxlcyA9IDAuNjIxMzcxXG5jb25zdCBTVVJHRV9DSEFSR0VfUkFURSA9IDEuMTVcblxuIFxudHlwZSBEaXN0YW5jZVByb3BzID0ge1xuICBsZWc6IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNMZWc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXN0YW5jZSh7IGxlZyB9OiBEaXN0YW5jZVByb3BzKSB7XG4gIGlmICghbGVnLmRpc3RhbmNlIHx8ICFsZWcuZHVyYXRpb24pIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHRpbWUgPSBNYXRoLmZsb29yKFxuICAgIChsZWcuZHVyYXRpb24udmFsdWUpICogc2Vjb25kc1RvTWludXRlc1xuICApO1xuICBjb25zdCB0YXhpQ29zdCA9IE1hdGgucm91bmQoMTAwICogKCgobGVnLmRpc3RhbmNlLnZhbHVlIC8gMTAwMCkgKiAxLjMwKSArIDIuNjApKS8xMDA7XG4gXG4gIGNvbnN0IHViZXJDb3N0ID0gTWF0aC5yb3VuZCgxMDAgKiAobGVnLmRpc3RhbmNlLnZhbHVlICoga2lsb21ldGVyc1RvTWlsZXMgLyAxMDAwKSAqIFNVUkdFX0NIQVJHRV9SQVRFKSAvIDEwMCArIDIuNVxuXG4gIGNvbnN0IGx5ZnRDb3N0ID0gTWF0aC5yb3VuZCgxMDAgKiAobGVnLmRpc3RhbmNlLnZhbHVlICoga2lsb21ldGVyc1RvTWlsZXMgLyAxMDAwKSAqIDEuMSkgLyAxMDBcblxuICBjb25zdCBzcGluQ29zdCA9IE1hdGgucm91bmQoMTAwICogKCgobGVnLmRpc3RhbmNlLnZhbHVlIC8gMTAwMCkgKiA2MCAqIDAuMjkpIC8gMTYpKSAvIDEwMCArIDFcblxuICBjb25zdCBzcGluVGltZSA9IE1hdGguZmxvb3IoKGxlZy5kaXN0YW5jZS52YWx1ZSAvIDEwMDApICogNjAgLyAxNilcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBsb2NhdGlvbiBpcyA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj57bGVnLmRpc3RhbmNlLnRleHR9PC9zcGFuPiBvciB7XCIgXCJ9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPntsZWcuZHVyYXRpb24udGV4dH08L3NwYW4+IGF3YXkuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBBIPCfmpUgaW4gdGhpcyBjaXR5IHdpbGwgY29zdCB5b3Uge1wiIFwifVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5cbiAgICAgICAgICAke25ldyBJbnRsLk51bWJlckZvcm1hdCgpLmZvcm1hdCh0YXhpQ29zdCl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjID0gXCIuL3ViZXIucG5nXCIgYWx0ID0gJ1ViZXJYJyBjbGFzc05hbWUgPSAndWJlcl9sb2dvJy8+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHdpbGwgY29zdCB5b3Uge1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPlxuICAgICAgICAgICAgJHtuZXcgSW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQodWJlckNvc3QpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjID0gJy4vbHlmdC5wbmcnIGFsdCA9ICdMeWZ0JyBjbGFzc05hbWUgPSAnbHlmdF9sb2dvJy8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB3aWxsIGNvc3QgeW91IHtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5cbiAgICAgICAgICAgICR7bmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KGx5ZnRDb3N0KX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSAnc3Bpbl9sb2dvJz5TUElOPC9zcGFuPiBzY29vdGVycyB3aWxsIGNvc3QgeW91IHtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5cbiAgICAgICAgICAgICR7bmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KHNwaW5Db3N0KX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgLCBidXQgd2lsbCB0YWtlIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPntzcGluVGltZX0gbWludXRlcyA8L3NwYW4+IGluc3RlYWRcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY29tbXV0ZXNQZXJZZWFyIiwibGl0cmVzUGVyS00iLCJnYXNMaXRyZUNvc3QiLCJsaXRyZUNvc3RLTSIsInNlY29uZHNUb01pbnV0ZXMiLCJraWxvbWV0ZXJzVG9NaWxlcyIsIlNVUkdFX0NIQVJHRV9SQVRFIiwiRGlzdGFuY2UiLCJsZWciLCJkaXN0YW5jZSIsImR1cmF0aW9uIiwidGltZSIsIk1hdGgiLCJmbG9vciIsInZhbHVlIiwidGF4aUNvc3QiLCJyb3VuZCIsInViZXJDb3N0IiwibHlmdENvc3QiLCJzcGluQ29zdCIsInNwaW5UaW1lIiwiZGl2IiwicCIsInNwYW4iLCJjbGFzc05hbWUiLCJ0ZXh0IiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/distance.tsx\n");

/***/ })

});