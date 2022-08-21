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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar context_1 = __importStar(__webpack_require__(/*! ./context */ \"./src/context.tsx\"));\r\nvar AuthPage_1 = __importDefault(__webpack_require__(/*! ./shared/AuthPage */ \"./src/shared/AuthPage.tsx\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar AppComponent = function () {\r\n    return (react_1.default.createElement(context_1.default.Provider, { value: context_1.initialState },\r\n        react_1.default.createElement(AuthPage_1.default, null)));\r\n};\r\nexports.App = (0, root_1.hot)(AppComponent);\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/assets/img/danger.tsx":
/*!***********************************!*\
  !*** ./src/assets/img/danger.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction DangerIcon() {\r\n    return react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#FFC8C8\" }),\r\n        react_1.default.createElement(\"path\", { d: \"M9.036 13.446V15H10.59V13.446H9.036ZM10.478 8.084V5.004H9.148V8.084L9.498 12.438H10.128L10.478 8.084Z\", fill: \"#EE6565\" }));\r\n}\r\nexports.default = DangerIcon;\r\n\n\n//# sourceURL=webpack:///./src/assets/img/danger.tsx?");

/***/ }),

/***/ "./src/assets/img/logo.tsx":
/*!*********************************!*\
  !*** ./src/assets/img/logo.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction Logo() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"174\", height: \"49\", viewBox: \"0 0 174 49\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10.48 24.344C10.48 22.3387 10.6933 20.3973 11.12 18.52C11.5893 16.6427 12.3147 14.9787 13.296 13.528C14.2773 12.0347 15.5573 10.8613 17.136 10.008C18.7147 9.112 20.6347 8.664 22.896 8.664C25.1573 8.664 27.0773 9.112 28.656 10.008C30.2347 10.8613 31.5147 12.0347 32.496 13.528C33.4773 14.9787 34.1813 16.6427 34.608 18.52C35.0773 20.3973 35.312 22.3387 35.312 24.344C35.312 26.264 35.0773 28.1413 34.608 29.976C34.1813 31.768 33.4773 33.3893 32.496 34.84C31.5147 36.2907 30.2347 37.464 28.656 38.36C27.0773 39.2133 25.1573 39.64 22.896 39.64C20.6347 39.64 18.7147 39.2133 17.136 38.36C15.5573 37.464 14.2773 36.2907 13.296 34.84C12.3147 33.3893 11.5893 31.768 11.12 29.976C10.6933 28.1413 10.48 26.264 10.48 24.344ZM0.432 24.344C0.432 27.672 0.944 30.7867 1.968 33.688C2.992 36.5467 4.464 39.0427 6.384 41.176C8.304 43.3093 10.6507 44.9947 13.424 46.232C16.24 47.4267 19.3973 48.024 22.896 48.024C26.4373 48.024 29.5947 47.4267 32.368 46.232C35.1413 44.9947 37.488 43.3093 39.408 41.176C41.328 39.0427 42.8 36.5467 43.824 33.688C44.848 30.7867 45.36 27.672 45.36 24.344C45.36 20.9307 44.848 17.7733 43.824 14.872C42.8 11.928 41.328 9.368 39.408 7.192C37.488 5.016 35.1413 3.30933 32.368 2.072C29.5947 0.834666 26.4373 0.216 22.896 0.216C19.3973 0.216 16.24 0.834666 13.424 2.072C10.6507 3.30933 8.304 5.016 6.384 7.192C4.464 9.368 2.992 11.928 1.968 14.872C0.944 17.7733 0.432 20.9307 0.432 24.344ZM52.2285 1.304V47H61.6365V16.408H61.7645L80.7725 47H90.8205V1.304H81.4125V31.96H81.2845L62.2125 1.304H52.2285ZM99.666 1.304V47H131.986V38.552H109.714V1.304H99.666ZM142.319 29.208V47H152.367V29.464L169.327 1.304H158.127L147.503 19.352L136.815 1.304H125.55L142.319 29.208ZM163.715 37.144V47H173.763V37.144H163.715Z\", fill: \"black\" })));\r\n}\r\nexports.default = Logo;\r\n\n\n//# sourceURL=webpack:///./src/assets/img/logo.tsx?");

/***/ }),

/***/ "./src/context.tsx":
/*!*************************!*\
  !*** ./src/context.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.initialState = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.initialState = {\r\n    auth: false\r\n};\r\nvar OnlyContext = react_1.default.createContext(exports.initialState);\r\nexports.default = OnlyContext;\r\n\n\n//# sourceURL=webpack:///./src/context.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>ONLY</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\".concat(content, \"</div>\\n</body>\\n\\n</html>\\n\"); };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_tsx_1 = __webpack_require__(/*! ../App.tsx */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar app = (0, express_1.default)();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('*', function (req, res) {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log(\"server started on port http://localhost:3000\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/AuthPage.tsx":
/*!*********************************!*\
  !*** ./src/shared/AuthPage.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Layout_1 = __importDefault(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout.tsx\"));\r\nvar logo_1 = __importDefault(__webpack_require__(/*! ../assets/img/logo */ \"./src/assets/img/logo.tsx\"));\r\nvar LoginForm_1 = __importDefault(__webpack_require__(/*! ./LoginForm */ \"./src/shared/LoginForm.tsx\"));\r\nfunction AuthPage() {\r\n    return react_1.default.createElement(Layout_1.default, null,\r\n        react_1.default.createElement(logo_1.default, null),\r\n        react_1.default.createElement(LoginForm_1.default, null));\r\n}\r\nexports.default = AuthPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/AuthPage.tsx?");

/***/ }),

/***/ "./src/shared/Button.tsx":
/*!*******************************!*\
  !*** ./src/shared/Button.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\r\nvar Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    padding: 19px 292px;\\n    color: \", \";\\n    background-color: \", \";\\n    border-radius: 8px;\\n    font-weight: 700;\\n    font-size: \", \";\\n    line-height: 22px;\\n    border: 1px solid transparent;\\n    margin-top: 40px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    :disabled {\\n        opacity: 0.8;\\n    }\\n\"], [\"\\n    padding: 19px 292px;\\n    color: \", \";\\n    background-color: \", \";\\n    border-radius: 8px;\\n    font-weight: 700;\\n    font-size: \", \";\\n    line-height: 22px;\\n    border: 1px solid transparent;\\n    margin-top: 40px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    :disabled {\\n        opacity: 0.8;\\n    }\\n\"])), function (props) { return props.color || \"#fff\"; }, function (props) { return props.backgroundColor || \"#4A67FF\"; }, function (props) { return props.size + \"px\" || false; });\r\nexports.default = Button;\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./src/shared/Button.tsx?");

/***/ }),

/***/ "./src/shared/Checkbox.tsx":
/*!*********************************!*\
  !*** ./src/shared/Checkbox.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\r\nvar Checkbox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    margin-top: 40px;\\n    display: flex;\\n    align-items: center;\\n    input {\\n        margin: 0;\\n        padding: 0;\\n        margin-right: 8px;\\n    }\\n    label {\\n        margin-top: 3px;\\n        font-weight: 400;\\n    }\\n\"], [\"\\n    margin-top: 40px;\\n    display: flex;\\n    align-items: center;\\n    input {\\n        margin: 0;\\n        padding: 0;\\n        margin-right: 8px;\\n    }\\n    label {\\n        margin-top: 3px;\\n        font-weight: 400;\\n    }\\n\"])));\r\nexports.default = Checkbox;\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./src/shared/Checkbox.tsx?");

/***/ }),

/***/ "./src/shared/ErrorMessage.tsx":
/*!*************************************!*\
  !*** ./src/shared/ErrorMessage.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ErrorServerMessage = void 0;\r\nvar styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\r\nvar ErrorMessage = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    color: #E26F6F;\\n    font-size: 14px;\\n    line-height: 17px;\\n    margin-top: 8px;\\n\"], [\"\\n    color: #E26F6F;\\n    font-size: 14px;\\n    line-height: 17px;\\n    margin-top: 8px;\\n\"])));\r\nexports.ErrorServerMessage = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n    background: #F5E9E9;\\n    border: 1px solid #E26F6F;\\n    border-radius: 8px;\\n    padding: 20px;\\n    width: 100%;\\n    font-size: 14px;\\n    line-height: 17px;\\n    color: #000;\\n    display: flex;\\n    align-items: center;\\n    svg {\\n        margin: 0;\\n        margin-right: 14px\\n    }\\n    p {\\n        margin: 0;\\n    }\\n\"], [\"\\n    background: #F5E9E9;\\n    border: 1px solid #E26F6F;\\n    border-radius: 8px;\\n    padding: 20px;\\n    width: 100%;\\n    font-size: 14px;\\n    line-height: 17px;\\n    color: #000;\\n    display: flex;\\n    align-items: center;\\n    svg {\\n        margin: 0;\\n        margin-right: 14px\\n    }\\n    p {\\n        margin: 0;\\n    }\\n\"])));\r\nexports.default = ErrorMessage;\r\nvar templateObject_1, templateObject_2;\r\n\n\n//# sourceURL=webpack:///./src/shared/ErrorMessage.tsx?");

/***/ }),

/***/ "./src/shared/Input.tsx":
/*!******************************!*\
  !*** ./src/shared/Input.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.InputContainer = void 0;\r\nvar styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\r\nvar Input = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    background-color: #f5f5f5;\\n    border-radius: 8px;\\n    padding: 20px 100px 20px 20px;\\n    border: \", \";\\n    :focus, :hover {\\n        border: \", \";\\n    }\\n\"], [\"\\n    background-color: #f5f5f5;\\n    border-radius: 8px;\\n    padding: 20px 100px 20px 20px;\\n    border: \", \";\\n    :focus, :hover {\\n        border: \", \";\\n    }\\n\"])), function (props) { return props.error ? \"1px solid #E26F6F\" : \"1px solid transparent\"; }, function (props) { return props.error ? \"1px solid #E26F6F\" : \"1px solid transparent\"; });\r\nexports.InputContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n    display: flex;\\n    flex-direction: column;\\n    margin-top: 20px\\n\"], [\"\\n    display: flex;\\n    flex-direction: column;\\n    margin-top: 20px\\n\"])));\r\nexports.default = Input;\r\nvar templateObject_1, templateObject_2;\r\n\n\n//# sourceURL=webpack:///./src/shared/Input.tsx?");

/***/ }),

/***/ "./src/shared/Label.tsx":
/*!******************************!*\
  !*** ./src/shared/Label.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\r\nvar Label = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    font-weight: 400;\\n    font-size: 16px;\\n    line-height: 19px;\\n    color: #1f1f1f;\\n    margin-bottom: 10px;\\n\"], [\"\\n    font-weight: 400;\\n    font-size: 16px;\\n    line-height: 19px;\\n    color: #1f1f1f;\\n    margin-bottom: 10px;\\n\"])));\r\nexports.default = Label;\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./src/shared/Label.tsx?");

/***/ }),

/***/ "./src/shared/Layout.tsx":
/*!*******************************!*\
  !*** ./src/shared/Layout.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\r\nvar Layout = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    max-width: 1170px;\\n    margin: 0 auto;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-between;\\n    svg {\\n        margin-top: 40px;\\n        margin-bottom: 100px\\n    }\\n\"], [\"\\n    max-width: 1170px;\\n    margin: 0 auto;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-between;\\n    svg {\\n        margin-top: 40px;\\n        margin-bottom: 100px\\n    }\\n\"])));\r\nexports.default = Layout;\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout.tsx?");

/***/ }),

/***/ "./src/shared/LoginForm.tsx":
/*!**********************************!*\
  !*** ./src/shared/LoginForm.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Label_1 = __importDefault(__webpack_require__(/*! ./Label */ \"./src/shared/Label.tsx\"));\r\nvar Input_1 = __importDefault(__webpack_require__(/*! ./Input */ \"./src/shared/Input.tsx\"));\r\nvar Checkbox_1 = __importDefault(__webpack_require__(/*! ./Checkbox */ \"./src/shared/Checkbox.tsx\"));\r\nvar Button_1 = __importDefault(__webpack_require__(/*! ./Button */ \"./src/shared/Button.tsx\"));\r\nvar Input_2 = __webpack_require__(/*! ./Input */ \"./src/shared/Input.tsx\");\r\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\r\nvar ErrorMessage_1 = __importStar(__webpack_require__(/*! ./ErrorMessage */ \"./src/shared/ErrorMessage.tsx\"));\r\nvar danger_1 = __importDefault(__webpack_require__(/*! ../assets/img/danger */ \"./src/assets/img/danger.tsx\"));\r\nvar Text_1 = __importDefault(__webpack_require__(/*! ./Text */ \"./src/shared/Text.tsx\"));\r\nfunction LoginForm() {\r\n    var _a, _b, _c, _d;\r\n    var _e = (0, react_hook_form_1.useForm)(), register = _e.register, handleSubmit = _e.handleSubmit, watch = _e.watch, errors = _e.formState.errors;\r\n    var _f = (0, react_1.useState)(true), disabled = _f[0], setDisabled = _f[1];\r\n    var _g = (0, react_1.useState)({ email: '', pass: '' }), data = _g[0], setData = _g[1];\r\n    var onSubmit = function (data) {\r\n        localStorage.setItem(\"email\", JSON.stringify(data.email));\r\n        localStorage.setItem(\"password\", JSON.stringify(data.password));\r\n        setDisabled(true);\r\n        setData({ email: data.email, pass: data.password });\r\n    };\r\n    return (\r\n    // @ts-ignore\r\n    react_1.default.createElement(\"form\", { onSubmit: handleSubmit(onSubmit) },\r\n        data.email === \"steve.jobs@example.com\" && data.pass === \"password\" ? true : react_1.default.createElement(ErrorMessage_1.ErrorServerMessage, null,\r\n            react_1.default.createElement(danger_1.default, null),\r\n            react_1.default.createElement(Text_1.default, null,\r\n                \"\\u041F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F \",\r\n                data.email,\r\n                \" \\u043D\\u0435 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442\")),\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(Input_2.InputContainer, null,\r\n                react_1.default.createElement(Label_1.default, null, \"\\u041B\\u043E\\u0433\\u0438\\u043D\"),\r\n                react_1.default.createElement(Input_1.default, __assign({ placeholder: \"steve.jobs@example.com\", defaultValue: \"steve.jobs@example.com\" }, register(\"email\", { required: \"Обязательное поле\" }), { \r\n                    // @ts-ignore\r\n                    type: \"email\", error: (_a = errors.email) === null || _a === void 0 ? void 0 : _a.message, onChange: function () { return setDisabled(false); } })),\r\n                react_1.default.createElement(ErrorMessage_1.default, null, (_b = errors.email) === null || _b === void 0 ? void 0 : _b.message)),\r\n            react_1.default.createElement(Input_2.InputContainer, null,\r\n                react_1.default.createElement(Label_1.default, null, \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C\"),\r\n                react_1.default.createElement(Input_1.default, __assign({ placeholder: \"123244\", defaultValue: \"122334\" }, register(\"password\", { required: \"Обязательное поле\" }), { type: \"password\", \r\n                    // @ts-ignore\r\n                    error: (_c = errors.password) === null || _c === void 0 ? void 0 : _c.message, onChange: function () { return setDisabled(false); } })),\r\n                react_1.default.createElement(ErrorMessage_1.default, null, (_d = errors.password) === null || _d === void 0 ? void 0 : _d.message)),\r\n            react_1.default.createElement(Checkbox_1.default, null,\r\n                react_1.default.createElement(\"input\", { type: \"checkbox\", id: \"password\" }),\r\n                react_1.default.createElement(\"label\", { htmlFor: \"password\" }, \"\\u0417\\u0430\\u043F\\u043E\\u043C\\u043D\\u0438\\u0442\\u044C \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C\")),\r\n            errors.exampleRequired && react_1.default.createElement(\"span\", null, \"This field is required\"),\r\n            react_1.default.createElement(Button_1.default, { type: \"submit\", disabled: disabled }, \"\\u0412\\u043E\\u0439\\u0442\\u0438\"))));\r\n}\r\nexports.default = LoginForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/LoginForm.tsx?");

/***/ }),

/***/ "./src/shared/Text.tsx":
/*!*****************************!*\
  !*** ./src/shared/Text.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\r\nvar Text = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    font-size: \", \";\\n    color: \", \"\\n\"], [\"\\n    font-size: \", \";\\n    color: \", \"\\n\"])), function (props) { var _a; return ((_a = props.size) === null || _a === void 0 ? void 0 : _a.toString()) + \"px\" || false; }, function (props) { return props.color || \"#000\"; });\r\nexports.default = Text;\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text.tsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");\n\n//# sourceURL=webpack:///external_%22react-hook-form%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });