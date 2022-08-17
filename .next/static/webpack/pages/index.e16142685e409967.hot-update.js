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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Distance; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar commutesPerYear = 260 * 2;\nvar litresPerKM = 10 / 100;\nvar gasLitreCost = 1.5;\nvar litreCostKM = litresPerKM * gasLitreCost;\nvar secondsToMinutes = 1 / 60;\nvar kilometersToMiles = 0.621371;\nvar SURGE_CHARGE_RATE = 1.15;\nfunction Distance(param) {\n    var leg = param.leg;\n    if (!leg.distance || !leg.duration) return null;\n    var time = Math.floor(leg.duration.value * secondsToMinutes);\n    var taxiCost = Math.round(100 * (leg.distance.value / 1000 * 1.3 + 2.6)) / 100;\n    var uberCost = Math.round(100 * (leg.distance.value * kilometersToMiles / 1000) * SURGE_CHARGE_RATE) / 100 + 2.5;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"This home is \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: leg.distance.text\n                    }, void 0, false, {\n                        fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 22\n                    }, this),\n                    \" away. That would take\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: leg.duration.text\n                    }, void 0, false, {\n                        fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    \" each direction.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"That's \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: [\n                            time,\n                            \" minutes\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 16\n                    }, this),\n                    \" to arrive at your desination\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: [\n                            \"$\",\n                            new Intl.NumberFormat().format(taxiCost)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"A standard UberX will cost you \",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"highlight\",\n                        children: [\n                            \"$\",\n                            new Intl.NumberFormat().format(uberCost)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jellinge/Desktop/MapPitt/MapPitt/components/distance.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this));\n};\n_c = Distance;\nvar _c;\n$RefreshReg$(_c, \"Distance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rpc3RhbmNlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLEdBQUssQ0FBQ0EsZUFBZSxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQy9CLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLEVBQUUsR0FBRyxHQUFHO0FBQzVCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLEdBQUc7QUFDeEIsR0FBSyxDQUFDQyxXQUFXLEdBQUdGLFdBQVcsR0FBR0MsWUFBWTtBQUM5QyxHQUFLLENBQUNFLGdCQUFnQixHQUFHLENBQUMsR0FBQyxFQUFFO0FBQzdCLEdBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsUUFBUTtBQUNsQyxHQUFLLENBQUNDLGlCQUFpQixHQUFHLElBQUk7QUFNZixRQUFRLENBQUNDLFFBQVEsQ0FBQyxLQUFzQixFQUFFLENBQUM7UUFBdkJDLEdBQUcsR0FBTCxLQUFzQixDQUFwQkEsR0FBRztJQUNwQyxFQUFFLEdBQUdBLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLRCxHQUFHLENBQUNFLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSTtJQUUvQyxHQUFLLENBQUNDLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQ3BCTCxHQUFHLENBQUNFLFFBQVEsQ0FBQ0ksS0FBSyxHQUFJVixnQkFBZ0I7SUFFekMsR0FBSyxDQUFDVyxRQUFRLEdBQUdILElBQUksQ0FBQ0ksS0FBSyxDQUFDLEdBQUcsSUFBTVIsR0FBRyxDQUFDQyxRQUFRLENBQUNLLEtBQUssR0FBRyxJQUFJLEdBQUksR0FBSSxHQUFJLEdBQUksS0FBRyxHQUFHO0lBRXBGLEdBQUssQ0FBQ0csUUFBUSxHQUFHTCxJQUFJLENBQUNJLEtBQUssQ0FBQyxHQUFHLElBQUlSLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDSyxLQUFLLEdBQUdULGlCQUFpQixHQUFHLElBQUksSUFBSUMsaUJBQWlCLElBQUksR0FBRyxHQUFHLEdBQUc7SUFFbEgsTUFBTSw2RUFDSFksQ0FBRzs7d0ZBQ0RDLENBQUM7O29CQUFDLENBQ1k7Z0dBQUNDLENBQUk7d0JBQUNDLFNBQVMsRUFBQyxDQUFXO2tDQUFFYixHQUFHLENBQUNDLFFBQVEsQ0FBQ2EsSUFBSTs7Ozs7O29CQUFRLENBQXNCO29CQUFDLENBQUc7Z0dBQzVGRixDQUFJO3dCQUFDQyxTQUFTLEVBQUMsQ0FBVztrQ0FBRWIsR0FBRyxDQUFDRSxRQUFRLENBQUNZLElBQUk7Ozs7OztvQkFBUSxDQUN4RDs7Ozs7Ozt3RkFFQ0gsQ0FBQzs7b0JBQUMsQ0FDTTtnR0FBQ0MsQ0FBSTt3QkFBQ0MsU0FBUyxFQUFDLENBQVc7OzRCQUFFVixJQUFJOzRCQUFDLENBQVE7Ozs7Ozs7b0JBQU8sQ0FDeEQ7Z0dBQUNTLENBQUk7d0JBQUNDLFNBQVMsRUFBQyxDQUFXOzs0QkFBQyxDQUN6Qjs0QkFBQyxHQUFHLENBQUNFLElBQUksQ0FBQ0MsWUFBWSxHQUFHQyxNQUFNLENBQUNWLFFBQVE7Ozs7Ozs7Ozs7Ozs7d0ZBRzVDSSxDQUFDOztvQkFBQyxDQUM4QjtvQkFBQyxDQUFHO2dHQUNsQ0MsQ0FBSTt3QkFBQ0MsU0FBUyxFQUFDLENBQVc7OzRCQUFDLENBQ3pCOzRCQUFDLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ1IsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuRCxDQUFDO0tBL0J1QlYsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rpc3RhbmNlLnRzeD85MmY2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbW11dGVzUGVyWWVhciA9IDI2MCAqIDI7XG5jb25zdCBsaXRyZXNQZXJLTSA9IDEwIC8gMTAwO1xuY29uc3QgZ2FzTGl0cmVDb3N0ID0gMS41O1xuY29uc3QgbGl0cmVDb3N0S00gPSBsaXRyZXNQZXJLTSAqIGdhc0xpdHJlQ29zdDtcbmNvbnN0IHNlY29uZHNUb01pbnV0ZXMgPSAxLzYwXG5jb25zdCBraWxvbWV0ZXJzVG9NaWxlcyA9IDAuNjIxMzcxXG5jb25zdCBTVVJHRV9DSEFSR0VfUkFURSA9IDEuMTVcbiBcbnR5cGUgRGlzdGFuY2VQcm9wcyA9IHtcbiAgbGVnOiBnb29nbGUubWFwcy5EaXJlY3Rpb25zTGVnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzdGFuY2UoeyBsZWcgfTogRGlzdGFuY2VQcm9wcykge1xuICBpZiAoIWxlZy5kaXN0YW5jZSB8fCAhbGVnLmR1cmF0aW9uKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCB0aW1lID0gTWF0aC5mbG9vcihcbiAgICAobGVnLmR1cmF0aW9uLnZhbHVlKSAqIHNlY29uZHNUb01pbnV0ZXNcbiAgKTtcbiAgY29uc3QgdGF4aUNvc3QgPSBNYXRoLnJvdW5kKDEwMCAqICgoKGxlZy5kaXN0YW5jZS52YWx1ZSAvIDEwMDApICogMS4zMCkgKyAyLjYwKSkvMTAwO1xuIFxuICBjb25zdCB1YmVyQ29zdCA9IE1hdGgucm91bmQoMTAwICogKGxlZy5kaXN0YW5jZS52YWx1ZSAqIGtpbG9tZXRlcnNUb01pbGVzIC8gMTAwMCkgKiBTVVJHRV9DSEFSR0VfUkFURSkgLyAxMDAgKyAyLjVcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBob21lIGlzIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPntsZWcuZGlzdGFuY2UudGV4dH08L3NwYW4+IGF3YXkuIFRoYXQgd291bGQgdGFrZXtcIiBcIn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+e2xlZy5kdXJhdGlvbi50ZXh0fTwvc3Bhbj4gZWFjaCBkaXJlY3Rpb24uXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBUaGF0J3MgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+e3RpbWV9IG1pbnV0ZXM8L3NwYW4+IHRvIGFycml2ZSBhdCB5b3VyIGRlc2luYXRpb25cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+XG4gICAgICAgICAgJHtuZXcgSW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQodGF4aUNvc3QpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgQSBzdGFuZGFyZCBVYmVyWCB3aWxsIGNvc3QgeW91IHtcIiBcIn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+XG4gICAgICAgICAgJHtuZXcgSW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQodWJlckNvc3QpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY29tbXV0ZXNQZXJZZWFyIiwibGl0cmVzUGVyS00iLCJnYXNMaXRyZUNvc3QiLCJsaXRyZUNvc3RLTSIsInNlY29uZHNUb01pbnV0ZXMiLCJraWxvbWV0ZXJzVG9NaWxlcyIsIlNVUkdFX0NIQVJHRV9SQVRFIiwiRGlzdGFuY2UiLCJsZWciLCJkaXN0YW5jZSIsImR1cmF0aW9uIiwidGltZSIsIk1hdGgiLCJmbG9vciIsInZhbHVlIiwidGF4aUNvc3QiLCJyb3VuZCIsInViZXJDb3N0IiwiZGl2IiwicCIsInNwYW4iLCJjbGFzc05hbWUiLCJ0ZXh0IiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/distance.tsx\n");

/***/ })

});