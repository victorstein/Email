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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/routes/sendEmails.js":
/*!**********************************!*\
  !*** ./src/routes/sendEmails.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mail */ \"./src/utils/mail.js\");\n/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getDate */ \"./src/utils/getDate.js\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_directory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/directory */ \"./src/utils/directory.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nvar router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nvar ENV = process.env.ENV;\nvar agents = ENV !== 'development' ? _utils_directory__WEBPACK_IMPORTED_MODULE_4__[\"directory\"] : _utils_directory__WEBPACK_IMPORTED_MODULE_4__[\"testDirectory\"];\n\nvar sendEmails = function sendEmails(authDb) {\n  return router.post('/',\n  /*#__PURE__*/\n  function () {\n    var _ref = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(req, res) {\n      var date, data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, agent, ccList, dbAgent;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              date = Object(_utils_getDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n              console.log(\"La fecha de este reporte es \".concat(date));\n              _context.next = 5;\n              return authDb.query(\"\\n          SELECT\\n            cnum as Extension,\\n            cnam as Agent,\\n            count(cnum) as Llamadas,\\n            truncate(sum(billsec / 60), 2) as Minutos\\n          FROM\\n            asteriskcdrdb.cdr\\n          WHERE\\n            calldate like '\".concat(date, \"%'\\n              and cnum like '____'\\n              and dst like '%____%'\\n          GROUP BY cnum\\n          ORDER BY cnum asc\\n        \"), {\n                type: sequelize__WEBPACK_IMPORTED_MODULE_3___default.a.QueryTypes.SELECT\n              });\n\n            case 5:\n              data = _context.sent;\n              _iteratorNormalCompletion = true;\n              _didIteratorError = false;\n              _iteratorError = undefined;\n              _context.prev = 9;\n              _iterator = agents[Symbol.iterator]();\n\n            case 11:\n              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n                _context.next = 20;\n                break;\n              }\n\n              agent = _step.value;\n              ccList = ENV !== 'development' ? agent.role === 'SW' ? 'john@topfloormarketing.net, jose@topfloormarketing.net, lisseth@topfloormarketing.net, carlos@topfloormarketing.net' : 'john@topfloormarketing.net, jose@topfloormarketing.net, carlos@topfloormarketing.net' : 'carlos@topfloormarketing.net, ggo@topfloormarketing.net, ago@topfloormarketing.net';\n              dbAgent = data.find(function (u) {\n                return u.Extension === agent.ext;\n              });\n              _context.next = 17;\n              return Object(_utils_mail__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n                to: agent.email,\n                cc: ccList,\n                agent: dbAgent ? dbAgent.Agent : agent.name,\n                calls: dbAgent ? dbAgent.Llamadas : 0,\n                TalkTime: dbAgent ? dbAgent.Minutos : 0,\n                formattedDate: Object(_utils_getDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('email'),\n                agentType: agent.role\n              });\n\n            case 17:\n              _iteratorNormalCompletion = true;\n              _context.next = 11;\n              break;\n\n            case 20:\n              _context.next = 26;\n              break;\n\n            case 22:\n              _context.prev = 22;\n              _context.t0 = _context[\"catch\"](9);\n              _didIteratorError = true;\n              _iteratorError = _context.t0;\n\n            case 26:\n              _context.prev = 26;\n              _context.prev = 27;\n\n              if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n                _iterator[\"return\"]();\n              }\n\n            case 29:\n              _context.prev = 29;\n\n              if (!_didIteratorError) {\n                _context.next = 32;\n                break;\n              }\n\n              throw _iteratorError;\n\n            case 32:\n              return _context.finish(29);\n\n            case 33:\n              return _context.finish(26);\n\n            case 34:\n              res.send('success');\n              _context.next = 40;\n              break;\n\n            case 37:\n              _context.prev = 37;\n              _context.t1 = _context[\"catch\"](0);\n              console.error(_context.t1);\n\n            case 40:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 37], [9, 22, 26, 34], [27,, 29, 33]]);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendEmails);\n\n//# sourceURL=webpack:///./src/routes/sendEmails.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes_sendEmails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/sendEmails */ \"./src/routes/sendEmails.js\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n // Run the config command to access .env file data\n\nObject(dotenv__WEBPACK_IMPORTED_MODULE_1__[\"config\"])(); // Destructure the data from .env file\n\nvar _process$env = process.env,\n    PORT = _process$env.PORT,\n    DB_HOST = _process$env.DB_HOST,\n    DB_DIALECT = _process$env.DB_DIALECT,\n    DB_USER = _process$env.DB_USER,\n    DB_PASS = _process$env.DB_PASS,\n    DB_PORT = _process$env.DB_PORT,\n    DB_NAME = _process$env.DB_NAME; // Self-invoking async function to run the server\n\n_asyncToGenerator(\n/*#__PURE__*/\nregeneratorRuntime.mark(function _callee() {\n  var app, sequelize;\n  return regeneratorRuntime.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          // Define app\n          app = express__WEBPACK_IMPORTED_MODULE_2___default()(); // Define the database connection\n\n          sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_4___default.a(DB_NAME, DB_USER, DB_PASS, {\n            dialect: DB_DIALECT,\n            host: DB_HOST,\n            port: DB_PORT,\n            logging: false,\n            pool: {\n              max: 5,\n              min: 0,\n              acquire: 30000,\n              idle: 10000\n            }\n          }); // Test Connection to DB\n\n          _context.next = 5;\n          return sequelize.authenticate();\n\n        case 5:\n          // Define a new route\n          app.use('/sendEmails', Object(_routes_sendEmails__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(sequelize)); // Start the app\n\n          app.listen(PORT, function () {\n            return console.log(\"API runing in http://localhost:\".concat(PORT));\n          });\n          _context.next = 12;\n          break;\n\n        case 9:\n          _context.prev = 9;\n          _context.t0 = _context[\"catch\"](0);\n          console.error(_context.t0);\n\n        case 12:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, null, [[0, 9]]);\n}))();\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/utils/directory.js":
/*!********************************!*\
  !*** ./src/utils/directory.js ***!
  \********************************/
/*! exports provided: testDirectory, directory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"testDirectory\", function() { return testDirectory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"directory\", function() { return directory; });\nvar testDirectory = [{\n  ext: '2001',\n  email: 'ago@topfloormarketing.net',\n  role: 'SW'\n}];\nvar directory = [{\n  ext: '2001',\n  email: 'nick@topfloormarketing.net',\n  role: 'Closer',\n  name: 'Edwin Saavedra'\n}, {\n  ext: '2003',\n  email: 'julio@topfloormarketing.net',\n  role: 'Fronter',\n  name: 'Julio Amador'\n}, {\n  ext: '2005',\n  email: 'daniel@topfloormarketing.net',\n  role: 'Closer',\n  name: 'Wilhelm Derbyshire'\n}, {\n  ext: '2008',\n  email: 'lawrence@topfloormarketing.net',\n  role: 'Closer',\n  name: 'Lawrence Downs'\n}, {\n  ext: '2009',\n  email: 'lisseth@topfloormarketing.net',\n  role: 'SW',\n  name: 'Liseth Garcia'\n}, {\n  ext: '2015',\n  email: 'michael@topfloormarketing.net',\n  role: 'Fronter',\n  name: 'Michael Toruno'\n}, {\n  ext: '2017',\n  email: 'will@topfloormarketing.net',\n  role: 'Fronter',\n  name: 'William Garcia'\n}, {\n  ext: '2018',\n  email: 'carolina@topfloormarketing.net',\n  role: 'SW',\n  name: 'Fatima Jiron'\n}, {\n  ext: '2019',\n  email: 'valeska@topfloormarketing.net',\n  role: 'SW',\n  name: 'Valeska Padilla'\n}, {\n  ext: '2021',\n  email: 'helen@topfloormarketing.net',\n  role: 'SW',\n  name: 'Helen Pineda'\n}, {\n  ext: '2022',\n  email: 'brisa@topfloormarketing.net',\n  role: 'SW',\n  name: 'Leana Lopez'\n}, {\n  ext: '2023',\n  email: 'cristian@topfloormarketing.net',\n  role: 'SW',\n  name: 'Cristian Zamora'\n}, {\n  ext: '2028',\n  email: 'veronica@topfloormarketing.net',\n  role: 'SW',\n  name: 'Veronica Tucker'\n}, {\n  ext: '1006',\n  email: 'andrew@topfloormarketing.net',\n  role: 'Fronter',\n  name: 'Andres de Armas'\n}];\n\n//# sourceURL=webpack:///./src/utils/directory.js?");

/***/ }),

/***/ "./src/utils/getDate.js":
/*!******************************!*\
  !*** ./src/utils/getDate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar date = function date() {\n  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'query';\n  var datetime = new Date();\n  var day = datetime.getDate() < 10 ? \"0\".concat(datetime.getDate()) : datetime.getDate();\n  var monthIndex = datetime.getMonth() + 1 < 10 ? \"0\".concat(datetime.getMonth() + 1) : datetime.getMonth() + 1;\n  var year = datetime.getFullYear();\n  var formattedDate = query === 'query' ? \"\".concat(year, \"-\").concat(monthIndex, \"-\").concat(day) : \"\".concat(day, \"-\").concat(monthIndex, \"-\").concat(year);\n  return formattedDate.toString();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (date);\n\n//# sourceURL=webpack:///./src/utils/getDate.js?");

/***/ }),

/***/ "./src/utils/mail.js":
/*!***************************!*\
  !*** ./src/utils/mail.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nvar _process$env = process.env,\n    EMAIL_USER = _process$env.EMAIL_USER,\n    EMAIL_PASSWORD = _process$env.EMAIL_PASSWORD;\n\nvar mailer =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(_ref) {\n    var _ref$to, to, _ref$agent, agent, _ref$calls, calls, _ref$TalkTime, TalkTime, _ref$formattedDate, formattedDate, _ref$cc, cc, _ref$agentType, agentType, transporter, mailOptions, info;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _ref$to = _ref.to, to = _ref$to === void 0 ? 'carlos@topfloormarketing.net' : _ref$to, _ref$agent = _ref.agent, agent = _ref$agent === void 0 ? '' : _ref$agent, _ref$calls = _ref.calls, calls = _ref$calls === void 0 ? '' : _ref$calls, _ref$TalkTime = _ref.TalkTime, TalkTime = _ref$TalkTime === void 0 ? '' : _ref$TalkTime, _ref$formattedDate = _ref.formattedDate, formattedDate = _ref$formattedDate === void 0 ? '' : _ref$formattedDate, _ref$cc = _ref.cc, cc = _ref$cc === void 0 ? '' : _ref$cc, _ref$agentType = _ref.agentType, agentType = _ref$agentType === void 0 ? '' : _ref$agentType;\n            _context.prev = 1;\n            // create reusable transporter object using the default SMTP transport\n            transporter = nodemailer.createTransport({\n              service: 'gmail',\n              secure: false,\n              auth: {\n                user: EMAIL_USER,\n                // generated ethereal user\n                pass: EMAIL_PASSWORD // generated ethereal password\n\n              },\n              tls: {\n                rejectUnauthorized: false\n              }\n            }); // setup email data with unicode symbols\n\n            mailOptions = {\n              from: EMAIL_USER,\n              to: to,\n              subject: \"\".concat(agentType === 'SW' ? 'Llamadas' : 'Calls', \" \").concat(formattedDate),\n              cc: cc,\n              html: \"\\n        <b>Hello \".concat(agent, \"!</b>\\n        <br/>\\n        <br/>\\n        <table style='border:1px solid black;border-spacing: 20px'>\\n          <tr style='margin-bottom:10px'>\\n            <td>As per John's request!! You have </td>\\n            <td><b style='border-bottom:2px solid black; padding-bottom:5px'>\").concat(calls, \" </b></td>\\n            <td>dials so far for today</td>\\n          </tr>\\n          <tr>\\n            <td style='float:right'>and </td>\\n            <td><b style='border-bottom:2px solid black; padding-bottom:5px'>\").concat(TalkTime, \" </b></td>\\n            <td>total talk time</td>\\n          </tr>\\n          <tr style='margin-top:-15px'>\\n            <td><p>Kind Regards,</p><p>I.T.</p></td>\\n          </tr>\\n        </table>\\n      \") // send mail with defined transport object\n\n            };\n            _context.next = 6;\n            return transporter.sendMail(mailOptions);\n\n          case 6:\n            info = _context.sent;\n            console.log('Message sent: %s', info.messageId); // Preview only available when sending through an Ethereal account\n\n            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));\n            _context.next = 14;\n            break;\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](1);\n            console.error(_context.t0);\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 11]]);\n  }));\n\n  return function mailer(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mailer);\n\n//# sourceURL=webpack:///./src/utils/mail.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });