module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


var _jsxFileName = "C:\\Users\\\uC804\uCC44\uC774\\react-nodebird\\prepare\\front\\pages\\_app.js";


 // 헤드 부분을 수정할 수 있게 하는 것 (head <-> body)





const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_6__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(NodeBird))); // 'antd/dist/antd.css'를  index,profile,signup 모두에 적는 것 보다 이렇게 처리, 공통적인 부분 담당
// return부분이 Component로 들어감
// index, profile, signup의 부모인 셈

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // 이전상태와 액션을 활용해서 다음상태를 만든다

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  //HYDRATE(server side rendering을 위해 사용)를 위한 reducer 추가
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"] //user,post combine

}); // reducer가 함수이기 때문에, 함수끼리 합치려면 combineReducer의 도움을 받아야함

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'halo'
    },
    content: '첫번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMDJfMTQ3%2FMDAxNjA5NTI1NTQyMTM4.7KZAtCG05g_xAqB-O5Aly51dg3t-yeD3XDkOV56W5E4g.kFQxL-ab0KWEAolEYkeBlv4os-cwTfVpKGTonhR5XGIg.JPEG.1993suji%2FA1B6FB71-11E4-4C9A-B743-E7543DE2F83A.jpg&type=a340"
    }, {
      src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDAyMDhfMjAz%2FMDAxNTgxMTY0MDUyNTEx.2IU1wTla8ax8l3tR6J-VW3D_42FH4PLvNci97mrtFl8g.zckwx6NxjVA4w9EcSbcD4cvv7dyJk9dO2H9tak6Udjog.JPEG%2FexternalFile.jpg&type=a340"
    }, {
      src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDAyMDhfMjAz%2FMDAxNTgxMTY0MDUyNTEx.2IU1wTla8ax8l3tR6J-VW3D_42FH4PLvNci97mrtFl8g.zckwx6NxjVA4w9EcSbcD4cvv7dyJk9dO2H9tak6Udjog.JPEG%2FexternalFile.jpg&type=a340"
    }],
    Comments: [{
      User: {
        nickname: 'nek'
      },
      content: '개정판'
    }, {
      User: {
        nickname: 'hh'
      },
      content: '언제 나와용'
    }]
  }],
  imagePaths: [],
  postAdded: false,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; // ACTION이름을 상수로 빼준 이유 : 중간에 오타를 막기 위해(변수로 지정하면 오타나면 오류가 난다)

const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = data => ({
  id: 2,
  content: data,
  User: {
    id: 1,
    nickname: 'codl'
  },
  Images: [],
  Comments: []
});

/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      {
        console.log('add success');
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: [dummyPost(action.data), ...state, mainPosts],
          addPostLoading: false,
          addPostDone: true
        });
      }

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost, ...state, mainPosts],
        addPostLoading: false,
        addPostDone: true
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost, ...state, mainPosts],
        addPostLoading: false,
        addPostDone: true
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainComments: [dummyComment, ...state, mainComments],
        addCommentLoading: false,
        addCommentDone: true
      });

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentError: action.error
      });

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, loginRequestAction, logoutRequestAction, logoutSuccessAction, logoutFailureAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccessAction", function() { return logoutSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutFailureAction", function() { return logoutFailureAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: 'CHAECHAE',
  id: 1,
  Posts: [{
    id: 'dummyUserID'
  }],
  Followings: [{
    id: 'h'
  }],
  Followers: [{
    id: 'k'
  }, {
    id: 'h'
  }]
});

const initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signupLoading: false,
  signupDone: false,
  signupError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpDate: {},
  loginData: []
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};
const logoutSuccessAction = data => {
  return {
    type: LOG_OUT_SUCCESS,
    data
  };
};
const logoutFailureAction = data => {
  return {
    type: LOG_OUT_FAILURE,
    data
  };
};
const dummyFollower = {
  id: 'halomalo'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: true,
        logInError: null,
        logInDone: false
      });

    case LOG_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data)
      });

    case LOG_IN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInError: action.error
      });

    case LOG_OUT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: true,
        logOutError: null,
        logOutDone: false
      });

    case LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutDone: true,
        me: null
      });

    case LOG_OUT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutError: action.error
      });

    case SIGN_UP_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        signupLoading: true,
        signupError: null,
        signupDone: false
      });

    case SIGN_UP_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        signupLoading: false,
        signupDone: true,
        me: null
      });

    case SIGN_UP_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        signupLoading: false,
        signupError: action.error
      });

    case CHANGE_NICKNAME_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: true,
        changeNicknameError: null,
        changeNicknameDone: false
      });

    case CHANGE_NICKNAME_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameDone: true,
        me: null
      });

    case CHANGE_NICKNAME_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameError: action.error
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");



function* rootSaga() {
  /* *=generator 문법 자체가 이렇게 생김(saga에서) 
  generator는 함수이름.next() 뒤에 넥스트를 써주어야 한다 
  generator함수는 안에 yield를 넣어주면 거기서 멈춤, 그리고 또 호출하면 멈춘곳에서부터
  다시 시작하고 또 yield가 있으면 멈춤, 또 호출하면 멈춘곳에서부터 시작 
  */
  // 굳이 yield를 적는 이유는 한줄 한줄 실행해 볼 수 있기 때문에
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"]) //saga는 combinereducer 필요없음
  ]); // all은 배열을 받아서 배열 안에 있는 것을 한번에 실행해준다
  // fork는 함수를 실행한다는 뜻
  // fork 대신 call도 쓰지만 둘의 차이점이 있음
  // fork는 비동기 함수호출, call은 동기 함수호출

  /* call은 10번째 줄에서 loginAPI가 리턴할 때 까지 기다림
   비동기는 요청을 기다리지 않고 바로 다음꺼 실행 */
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");




function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/post', data);
}

function* addPost(action) {
  console.log('saga addPost');

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000); //result = yield call(addPostAPI, action.data)
    // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    //서버 요청 실패시
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put=dispatch 라고 생각하기, 액션 객체 dispatch
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/comment', data);
}

function* addComment(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchAddPost() {
  console.log('watchAddPost');
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchAddCommentPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddCommentPost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);
}

function* logIn(action) {
  try {
    console.log('saga logIn');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    /* result = yield call(logInAPI, action.data) 아직은 서버가 없으니*/
    // call의 첫번째 인자는 함수명, 그다음부터는 매개변수들
    // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    //서버 요청 실패시
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put=dispatch 라고 생각하기, 액션 객체 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //result = yield call(logOutAPI)
    // 만약 서버로 로그인하는 요청을 보냈으면 그 결과를 받는 것

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    //서버 요청 실패시
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put=dispatch 라고 생각하기, 액션 객체 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.signup('/api/signup');
}

function* signUp() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
  /* while(true){ //while로 감싸줘야 로그인하고 로그아웃하고 또 로그인 가능, while로 안감싸주면 로그인 딱 한번만 가능
      yield take('LOG_IN_REQUEST', logIn);
    } */
  // takeEvery는 while과 같은 역할, while이 직관적이지 않아서 사용
  // takeLatest는 예를들어 실수로 글올리기 버튼을 두번 눌렀을 때 둘다 로딩중이라면 마지막으로 누른것에만 반응, takeEvery에서는 두번 올린게 됨(즉각반응)
  //take는 LOG_IN이라는 액션이 실행될 때까지 기다리겠다는 뜻
  //LOG_IN 액션이 실행되면 logIn 함수 실행해라
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");







const configureStore = () => {
  const sagaeMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaeMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  {
    /*배포용일때는 devtools 연결 X, 용량 차지 때문에
    하지만 개발자용일때는 devtools를 연결해서 history가 쌓이게 한다
    배포용일때는 history를 쌓아두지 않고 계속 버림 */
  }
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], enhancer);
  store.sagaTask = sagaeMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwid2l0aFJlZHV4U2FnYSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtYWluQ29tbWVudHMiLCJkdW1teUNvbW1lbnQiLCJkdW1teVVzZXIiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ251cExvYWRpbmciLCJzaWdudXBEb25lIiwic2lnbnVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRlIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImxvZ291dFN1Y2Nlc3NBY3Rpb24iLCJsb2dvdXRGYWlsdXJlQWN0aW9uIiwiZHVtbXlGb2xsb3dlciIsInJlZHVjZXIiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiYWRkUG9zdEFQSSIsImF4aW9zIiwiZGVsYXkiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsImFkZENvbW1lbnRBUEkiLCJyZXN1bHQiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hBZGRDb21tZW50UG9zdCIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWdudXAiLCJzaWduVXAiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYWVNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBR0E7O0FBQ0EsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWdCO0FBQzdCLHNCQUNJO0FBQUEsNEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFLQSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEE7QUFBQSxrQkFESjtBQVNILENBVkQ7O0FBV0FELFFBQVEsQ0FBQ0UsU0FBVCxHQUFtQjtBQUNmRCxXQUFTLEVBQUdFLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDO0FBRG5CLENBQW5CO0FBSWVDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JDLHNEQUFhLENBQUNSLFFBQUQsQ0FBL0IsQ0FBZixFLENBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLE1BQU1TLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNoQ0MsT0FBSyxFQUFHLENBQUVDLEtBQUssR0FBRyxFQUFWLEVBQWNDLE1BQWQsS0FBd0I7QUFDNUIsWUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksV0FBS0MsMERBQUw7QUFDSSwrQ0FBWUgsS0FBWixHQUFzQkMsTUFBTSxDQUFDRyxPQUE3Qjs7QUFDUjtBQUNJLGVBQU9KLEtBQVA7QUFKSjtBQU1ILEdBUitCO0FBU2hDO0FBQ0FLLHFEQVZnQztBQVdoQ0MscURBWGdDLENBWWhDOztBQVpnQyxDQUFELENBQW5DLEMsQ0FjQTs7QUFDZVQsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCTyxNQUFNVSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRyxDQUFDO0FBQ1RDLE1BQUUsRUFBRyxDQURJO0FBRVRDLFFBQUksRUFBRztBQUNIRCxRQUFFLEVBQUMsQ0FEQTtBQUVIRSxjQUFRLEVBQUU7QUFGUCxLQUZFO0FBTVRDLFdBQU8sRUFBRyxzQkFORDtBQU9UQyxVQUFNLEVBQUcsQ0FBQztBQUNOQyxTQUFHLEVBQUU7QUFEQyxLQUFELEVBRVA7QUFDRUEsU0FBRyxFQUFHO0FBRFIsS0FGTyxFQUlQO0FBQ0VBLFNBQUcsRUFBRztBQURSLEtBSk8sQ0FQQTtBQWNUQyxZQUFRLEVBQUcsQ0FDUDtBQUNBTCxVQUFJLEVBQUc7QUFDSEMsZ0JBQVEsRUFBRztBQURSLE9BRFA7QUFJQUMsYUFBTyxFQUFHO0FBSlYsS0FETyxFQU9QO0FBQ0FGLFVBQUksRUFBRztBQUNIQyxnQkFBUSxFQUFHO0FBRFIsT0FEUDtBQUlBQyxhQUFPLEVBQUc7QUFKVixLQVBPO0FBZEYsR0FBRCxDQURZO0FBOEJ4QkksWUFBVSxFQUFHLEVBOUJXO0FBK0J4QkMsV0FBUyxFQUFFLEtBL0JhO0FBZ0N4QkMsZ0JBQWMsRUFBRyxLQWhDTztBQWlDeEJDLGFBQVcsRUFBRyxLQWpDVTtBQWtDeEJDLGNBQVksRUFBRyxJQWxDUztBQW1DeEJDLG1CQUFpQixFQUFHLEtBbkNJO0FBb0N4QkMsZ0JBQWMsRUFBRyxLQXBDTztBQXFDeEJDLGlCQUFlLEVBQUc7QUFyQ00sQ0FBckI7QUF5Q0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCLEMsQ0FFUDs7QUFDTyxNQUFNQyxPQUFPLEdBQUdDLElBQUQsS0FBVztBQUM3QjdCLE1BQUksRUFBR3NCLGdCQURzQjtBQUU3Qk87QUFGNkIsQ0FBWCxDQUFmO0FBSUEsTUFBTUMsVUFBVSxHQUFHRCxJQUFELEtBQVc7QUFDaEM3QixNQUFJLEVBQUd5QixtQkFEeUI7QUFFaENJO0FBRmdDLENBQVgsQ0FBbEI7O0FBSVAsTUFBTUUsU0FBUyxHQUFJRixJQUFELEtBQVc7QUFDekJ0QixJQUFFLEVBQUMsQ0FEc0I7QUFFekJHLFNBQU8sRUFBR21CLElBRmU7QUFHekJyQixNQUFJLEVBQUc7QUFDSEQsTUFBRSxFQUFDLENBREE7QUFFSEUsWUFBUSxFQUFHO0FBRlIsR0FIa0I7QUFPekJFLFFBQU0sRUFBRyxFQVBnQjtBQVF6QkUsVUFBUSxFQUFHO0FBUmMsQ0FBWCxDQUFsQjs7QUFZZSxnRUFBQ2YsS0FBSyxHQUFDTyxZQUFQLEVBQXFCTixNQUFyQixLQUE4QjtBQUN6QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLc0IsZ0JBQUw7QUFDSSw2Q0FDT3hCLEtBRFA7QUFFSWtCLHNCQUFjLEVBQUcsSUFGckI7QUFHSUMsbUJBQVcsRUFBRyxLQUhsQjtBQUlJQyxvQkFBWSxFQUFHO0FBSm5COztBQU1KLFNBQUtLLGdCQUFMO0FBQXNCO0FBQ2xCUyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsK0NBQ09uQyxLQURQO0FBRUlRLG1CQUFTLEVBQUcsQ0FBQ3lCLFNBQVMsQ0FBQ2hDLE1BQU0sQ0FBQzhCLElBQVIsQ0FBVixFQUF5QixHQUFHL0IsS0FBNUIsRUFBa0NRLFNBQWxDLENBRmhCO0FBR0lVLHdCQUFjLEVBQUcsS0FIckI7QUFJSUMscUJBQVcsRUFBRztBQUpsQjtBQUtHOztBQUNQLFNBQUtPLGdCQUFMO0FBQ0ksNkNBQ08xQixLQURQO0FBRUlrQixzQkFBYyxFQUFHLEtBRnJCO0FBR0lFLG9CQUFZLEVBQUduQixNQUFNLENBQUNtQztBQUgxQjs7QUFLSixTQUFLWixnQkFBTDtBQUNJLDZDQUNPeEIsS0FEUDtBQUVJa0Isc0JBQWMsRUFBRyxJQUZyQjtBQUdJQyxtQkFBVyxFQUFHLEtBSGxCO0FBSUlDLG9CQUFZLEVBQUc7QUFKbkI7O0FBTUosU0FBS0ssZ0JBQUw7QUFDSSw2Q0FDT3pCLEtBRFA7QUFFSVEsaUJBQVMsRUFBRyxDQUFDeUIsU0FBRCxFQUFZLEdBQUdqQyxLQUFmLEVBQXFCUSxTQUFyQixDQUZoQjtBQUdJVSxzQkFBYyxFQUFHLEtBSHJCO0FBSUlDLG1CQUFXLEVBQUc7QUFKbEI7O0FBTUosU0FBS08sZ0JBQUw7QUFDSSw2Q0FDTzFCLEtBRFA7QUFFSWtCLHNCQUFjLEVBQUcsS0FGckI7QUFHSUUsb0JBQVksRUFBR25CLE1BQU0sQ0FBQ21DO0FBSDFCOztBQUtKLFNBQUtaLGdCQUFMO0FBQ0ksNkNBQ094QixLQURQO0FBRUlrQixzQkFBYyxFQUFHLElBRnJCO0FBR0lDLG1CQUFXLEVBQUcsS0FIbEI7QUFJSUMsb0JBQVksRUFBRztBQUpuQjs7QUFNSixTQUFLSyxnQkFBTDtBQUNJLDZDQUNPekIsS0FEUDtBQUVJUSxpQkFBUyxFQUFHLENBQUN5QixTQUFELEVBQVksR0FBR2pDLEtBQWYsRUFBcUJRLFNBQXJCLENBRmhCO0FBR0lVLHNCQUFjLEVBQUcsS0FIckI7QUFJSUMsbUJBQVcsRUFBRztBQUpsQjs7QUFNSixTQUFLTyxnQkFBTDtBQUNJLDZDQUNPMUIsS0FEUDtBQUVJa0Isc0JBQWMsRUFBRyxLQUZyQjtBQUdJRSxvQkFBWSxFQUFHbkIsTUFBTSxDQUFDbUM7QUFIMUI7O0FBS0osU0FBS1QsbUJBQUw7QUFDSSw2Q0FDTzNCLEtBRFA7QUFFSXFCLHlCQUFpQixFQUFHLElBRnhCO0FBR0lDLHNCQUFjLEVBQUcsS0FIckI7QUFJSUMsdUJBQWUsRUFBRztBQUp0Qjs7QUFNSixTQUFLSyxtQkFBTDtBQUNJLDZDQUNPNUIsS0FEUDtBQUVJcUMsb0JBQVksRUFBRyxDQUFDQyxZQUFELEVBQWUsR0FBR3RDLEtBQWxCLEVBQXdCcUMsWUFBeEIsQ0FGbkI7QUFHSWhCLHlCQUFpQixFQUFHLEtBSHhCO0FBSUlDLHNCQUFjLEVBQUc7QUFKckI7O0FBTUosU0FBS08sbUJBQUw7QUFDSSw2Q0FDTzdCLEtBRFA7QUFFSXFCLHlCQUFpQixFQUFHLEtBRnhCO0FBR0lFLHVCQUFlLEVBQUd0QixNQUFNLENBQUNtQztBQUg3Qjs7QUFLSjtBQUFVO0FBQ04saUNBQ09wQyxLQURQO0FBR0g7QUF0Rkw7QUF3RkgsQ0F6RkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBLE1BQU11QyxTQUFTLEdBQUlSLElBQUQsb0NBQ1hBLElBRFc7QUFFZHBCLFVBQVEsRUFBRyxVQUZHO0FBR2RGLElBQUUsRUFBRyxDQUhTO0FBSWQrQixPQUFLLEVBQUcsQ0FBQztBQUFDL0IsTUFBRSxFQUFDO0FBQUosR0FBRCxDQUpNO0FBS2RnQyxZQUFVLEVBQUcsQ0FBQztBQUFDaEMsTUFBRSxFQUFDO0FBQUosR0FBRCxDQUxDO0FBTWRpQyxXQUFTLEVBQUcsQ0FBQztBQUFDakMsTUFBRSxFQUFDO0FBQUosR0FBRCxFQUFVO0FBQUNBLE1BQUUsRUFBQztBQUFKLEdBQVY7QUFORSxFQUFsQjs7QUFRTyxNQUFNRixZQUFZLEdBQUc7QUFDeEJvQyxjQUFZLEVBQUcsS0FEUztBQUV4QkMsV0FBUyxFQUFHLEtBRlk7QUFHeEJDLFlBQVUsRUFBRyxJQUhXO0FBSXhCQyxlQUFhLEVBQUcsS0FKUTtBQUt4QkMsWUFBVSxFQUFHLEtBTFc7QUFNeEJDLGFBQVcsRUFBRyxJQU5VO0FBT3hCQyxlQUFhLEVBQUcsS0FQUTtBQVF4QkMsWUFBVSxFQUFHLEtBUlc7QUFTeEJDLGFBQVcsRUFBRyxJQVRVO0FBVXhCQyx1QkFBcUIsRUFBRyxLQVZBO0FBV3hCQyxvQkFBa0IsRUFBRyxLQVhHO0FBWXhCQyxxQkFBbUIsRUFBRyxJQVpFO0FBYXhCQyxJQUFFLEVBQUcsSUFibUI7QUFjeEJDLFlBQVUsRUFBRyxFQWRXO0FBZXhCQyxXQUFTLEVBQUc7QUFmWSxDQUFyQjtBQWlCQSxNQUFNQyxjQUFjLEdBQUUsZ0JBQXRCO0FBQ0EsTUFBTUMsY0FBYyxHQUFDLGdCQUFyQjtBQUNBLE1BQU1DLGNBQWMsR0FBQyxnQkFBckI7QUFFQSxNQUFNQyxlQUFlLEdBQUUsaUJBQXZCO0FBQ0EsTUFBTUMsZUFBZSxHQUFDLGlCQUF0QjtBQUNBLE1BQU1DLGVBQWUsR0FBQyxpQkFBdEI7QUFFQSxNQUFNQyxlQUFlLEdBQUUsaUJBQXZCO0FBQ0EsTUFBTUMsZUFBZSxHQUFDLGlCQUF0QjtBQUNBLE1BQU1DLGVBQWUsR0FBQyxpQkFBdEI7QUFFQSxNQUFNQyxjQUFjLEdBQUUsZ0JBQXRCO0FBQ0EsTUFBTUMsY0FBYyxHQUFDLGdCQUFyQjtBQUNBLE1BQU1DLGNBQWMsR0FBQyxnQkFBckI7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRSxrQkFBeEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBQyxrQkFBdkI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBQyxrQkFBdkI7QUFFQSxNQUFNQyx1QkFBdUIsR0FBRSx5QkFBL0I7QUFDQSxNQUFNQyx1QkFBdUIsR0FBQyx5QkFBOUI7QUFDQSxNQUFNQyx1QkFBdUIsR0FBQyx5QkFBOUI7QUFFQSxNQUFNQyxrQkFBa0IsR0FBSTdDLElBQUQsSUFBVTtBQUN4QyxTQUFPO0FBQ0g3QixRQUFJLEVBQUd3RCxjQURKO0FBRUgzQjtBQUZHLEdBQVA7QUFJSCxDQUxNO0FBTUEsTUFBTThDLG1CQUFtQixHQUFHLE1BQU07QUFDckMsU0FBTztBQUNIM0UsUUFBSSxFQUFHMkQ7QUFESixHQUFQO0FBR0gsQ0FKTTtBQU1BLE1BQU1pQixtQkFBbUIsR0FBSS9DLElBQUQsSUFBVTtBQUN6QyxTQUFPO0FBQ0g3QixRQUFJLEVBQUc0RCxlQURKO0FBRUgvQjtBQUZHLEdBQVA7QUFJSCxDQUxNO0FBT0EsTUFBTWdELG1CQUFtQixHQUFJaEQsSUFBRCxJQUFVO0FBQ3pDLFNBQU87QUFDSDdCLFFBQUksRUFBRzZELGVBREo7QUFFSGhDO0FBRkcsR0FBUDtBQUlILENBTE07QUFPUCxNQUFNaUQsYUFBYSxHQUFHO0FBQ2xCdkUsSUFBRSxFQUFHO0FBRGEsQ0FBdEI7O0FBSUEsTUFBTXdFLE9BQU8sR0FBRyxDQUFDakYsS0FBSyxHQUFDTyxZQUFQLEVBQXFCTixNQUFyQixLQUE4QjtBQUMxQyxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLd0QsY0FBTDtBQUNJLDZDQUNPMUQsS0FEUDtBQUVJMkMsb0JBQVksRUFBRyxJQUZuQjtBQUdJRSxrQkFBVSxFQUFHLElBSGpCO0FBSUlELGlCQUFTLEVBQUc7QUFKaEI7O0FBTUosU0FBS2UsY0FBTDtBQUNJLDZDQUNXM0QsS0FEWDtBQUVRMkMsb0JBQVksRUFBRyxLQUZ2QjtBQUdRQyxpQkFBUyxFQUFHLElBSHBCO0FBSVFXLFVBQUUsRUFBR2hCLFNBQVMsQ0FBQ3RDLE1BQU0sQ0FBQzhCLElBQVI7QUFKdEI7O0FBTUosU0FBSzZCLGNBQUw7QUFDSSw2Q0FDZTVELEtBRGY7QUFFWTJDLG9CQUFZLEVBQUcsS0FGM0I7QUFHWUUsa0JBQVUsRUFBRzVDLE1BQU0sQ0FBQ21DO0FBSGhDOztBQUtKLFNBQUt5QixlQUFMO0FBQ0ksNkNBQ083RCxLQURQO0FBRUk4QyxxQkFBYSxFQUFHLElBRnBCO0FBR0lFLG1CQUFXLEVBQUcsSUFIbEI7QUFJSUQsa0JBQVUsRUFBRztBQUpqQjs7QUFNSixTQUFLZSxlQUFMO0FBQ0ksNkNBQ085RCxLQURQO0FBRUk4QyxxQkFBYSxFQUFHLEtBRnBCO0FBR0lDLGtCQUFVLEVBQUcsSUFIakI7QUFJSVEsVUFBRSxFQUFHO0FBSlQ7O0FBTUosU0FBS1EsZUFBTDtBQUNJLDZDQUNPL0QsS0FEUDtBQUVJOEMscUJBQWEsRUFBRyxLQUZwQjtBQUdJRSxtQkFBVyxFQUFHL0MsTUFBTSxDQUFDbUM7QUFIekI7O0FBS0osU0FBSzRCLGVBQUw7QUFDSSw2Q0FDT2hFLEtBRFA7QUFFSWlELHFCQUFhLEVBQUcsSUFGcEI7QUFHSUUsbUJBQVcsRUFBRyxJQUhsQjtBQUlJRCxrQkFBVSxFQUFHO0FBSmpCOztBQU1KLFNBQUtlLGVBQUw7QUFDSSw2Q0FDT2pFLEtBRFA7QUFFSWlELHFCQUFhLEVBQUcsS0FGcEI7QUFHSUMsa0JBQVUsRUFBRyxJQUhqQjtBQUlJSyxVQUFFLEVBQUc7QUFKVDs7QUFNSixTQUFLVyxlQUFMO0FBQ0ksNkNBQ09sRSxLQURQO0FBRUlpRCxxQkFBYSxFQUFHLEtBRnBCO0FBR0lFLG1CQUFXLEVBQUdsRCxNQUFNLENBQUNtQztBQUh6Qjs7QUFLSixTQUFLcUMsdUJBQUw7QUFDSSw2Q0FDT3pFLEtBRFA7QUFFSW9ELDZCQUFxQixFQUFHLElBRjVCO0FBR0lFLDJCQUFtQixFQUFHLElBSDFCO0FBSUlELDBCQUFrQixFQUFHO0FBSnpCOztBQU1KLFNBQUtxQix1QkFBTDtBQUNJLDZDQUNPMUUsS0FEUDtBQUVJb0QsNkJBQXFCLEVBQUcsS0FGNUI7QUFHSUMsMEJBQWtCLEVBQUcsSUFIekI7QUFJSUUsVUFBRSxFQUFHO0FBSlQ7O0FBTUosU0FBS29CLHVCQUFMO0FBQ0ksNkNBQ08zRSxLQURQO0FBRUlvRCw2QkFBcUIsRUFBRyxLQUY1QjtBQUdJRSwyQkFBbUIsRUFBR3JELE1BQU0sQ0FBQ21DO0FBSGpDOztBQU1KO0FBQ0ksYUFBT3BDLEtBQVA7QUFuRlI7QUFxRkgsQ0F0RkQ7O0FBd0ZlaUYsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDdktBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVlLFVBQVVDLFFBQVYsR0FBcUI7QUFDaEM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNHO0FBQ0EsUUFBTUMsOERBQUcsQ0FDTCxDQUNBQywrREFBSSxDQUFDQyw2Q0FBRCxDQURKLEVBRUFELCtEQUFJLENBQUNFLDZDQUFELENBRkosQ0FHQTtBQUhBLEdBREssQ0FBVCxDQVBpQyxDQWFqQztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNIO0FBQ0MsQzs7Ozs7Ozs7Ozs7O0FDeEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0J4RCxJQUFwQixFQUF5QjtBQUNyQixTQUFPeUQsNENBQUssQ0FBQ2xGLElBQU4sQ0FBVyxXQUFYLEVBQXVCeUIsSUFBdkIsQ0FBUDtBQUNIOztBQUNELFVBQVVELE9BQVYsQ0FBa0I3QixNQUFsQixFQUF5QjtBQUNyQmlDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7O0FBQ0EsTUFBRztBQUNDLFVBQU1zRCxnRUFBSyxDQUFDLElBQUQsQ0FBWCxDQURELENBRUM7QUFDQTs7QUFDQSxVQUFNQyw4REFBRyxDQUFDO0FBQ054RixVQUFJLEVBQUd1QiwrREFERDtBQUVOTSxVQUFJLEVBQUc5QixNQUFNLENBQUM4QjtBQUZSLEtBQUQsQ0FBVDtBQUlILEdBUkQsQ0FRRSxPQUFNNEQsR0FBTixFQUFVO0FBQUU7QUFDVixVQUFNRCw4REFBRyxDQUFDO0FBQUU7QUFDUnhGLFVBQUksRUFBR3dCLCtEQUREO0FBRU5LLFVBQUksRUFBQzRELEdBQUcsQ0FBQ0MsUUFBSixDQUFhN0Q7QUFGWixLQUFELENBQVQ7QUFJSDtBQUNKOztBQUNELFNBQVM4RCxhQUFULENBQXVCOUQsSUFBdkIsRUFBNEI7QUFDeEIsU0FBT3lELDRDQUFLLENBQUNsRixJQUFOLENBQVcsY0FBWCxFQUEwQnlCLElBQTFCLENBQVA7QUFDSDs7QUFDRCxVQUFVQyxVQUFWLENBQXFCL0IsTUFBckIsRUFBNEI7QUFDeEIsTUFBRztBQUNDLFVBQU13RixnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDTnhGLFVBQUksRUFBRzBCLGtFQUREO0FBRU5HLFVBQUksRUFBRytELE1BQU0sQ0FBQy9EO0FBRlIsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1DLE9BQU00RCxHQUFOLEVBQVU7QUFDUCxVQUFNRCw4REFBRyxDQUFFO0FBQ1B4RixVQUFJLEVBQUcyQixrRUFEQTtBQUVQRSxVQUFJLEVBQUc0RCxHQUFHLENBQUNDLFFBQUosQ0FBYTdEO0FBRmIsS0FBRixDQUFUO0FBSUg7QUFDSjs7QUFHRCxVQUFVZ0UsWUFBVixHQUF3QjtBQUNwQjdELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQSxRQUFNNkQscUVBQVUsQ0FBQ3hFLCtEQUFELEVBQW1CTSxPQUFuQixDQUFoQjtBQUNIOztBQUNELFVBQVVtRSxtQkFBVixHQUErQjtBQUMzQixRQUFNRCxxRUFBVSxDQUFDckUsa0VBQUQsRUFBc0JLLFVBQXRCLENBQWhCO0FBQ0g7O0FBQ2MsVUFBVXFELFFBQVYsR0FBb0I7QUFDL0IsUUFBTUYsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDVyxZQUFELENBREUsRUFFTlgsK0RBQUksQ0FBQ2EsbUJBQUQsQ0FGRSxDQUFELENBQVQ7QUFJSCxDOzs7Ozs7Ozs7Ozs7QUN2REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0MsUUFBVCxDQUFrQm5FLElBQWxCLEVBQXVCO0FBQ25CLFNBQU95RCw0Q0FBSyxDQUFDbEYsSUFBTixDQUFXLFlBQVgsRUFBeUJ5QixJQUF6QixDQUFQO0FBQ0g7O0FBQ0QsVUFBVW9FLEtBQVYsQ0FBZ0JsRyxNQUFoQixFQUF1QjtBQUNuQixNQUFHO0FBQ0NpQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EsVUFBTXNELGdFQUFLLENBQUMsSUFBRCxDQUFYO0FBQW1CO0FBQ25CO0FBQ0E7O0FBQ0EsVUFBTUMsOERBQUcsQ0FBQztBQUNOeEYsVUFBSSxFQUFHeUQsNkRBREQ7QUFFTjVCLFVBQUksRUFBRzlCLE1BQU0sQ0FBQzhCO0FBRlIsS0FBRCxDQUFUO0FBSUgsR0FURCxDQVNFLE9BQU00RCxHQUFOLEVBQVU7QUFBRTtBQUNWLFVBQU1ELDhEQUFHLENBQUM7QUFBRTtBQUNSeEYsVUFBSSxFQUFHMEQsNkRBREQ7QUFFTnhCLFdBQUssRUFBRXVELEdBQUcsQ0FBQ0MsUUFBSixDQUFhN0Q7QUFGZCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVNxRSxTQUFULEdBQW9CO0FBQ2hCLFNBQU9aLDRDQUFLLENBQUNsRixJQUFOLENBQVcsYUFBWCxDQUFQO0FBQ0g7O0FBQ0QsVUFBVStGLE1BQVYsR0FBa0I7QUFDZCxNQUFHO0FBQ0MsVUFBTVosZ0VBQUssQ0FBQyxJQUFELENBQVgsQ0FERCxDQUVDO0FBQ0E7O0FBQ0EsVUFBTUMsOERBQUcsQ0FBQztBQUNOeEYsVUFBSSxFQUFHNEQsOERBQWVBO0FBRGhCLEtBQUQsQ0FBVDtBQUdILEdBUEQsQ0FPRSxPQUFNNkIsR0FBTixFQUFVO0FBQUU7QUFDVixVQUFNRCw4REFBRyxDQUFDO0FBQUU7QUFDUnhGLFVBQUksRUFBRzZELDhEQUREO0FBRU4zQixXQUFLLEVBQUN1RCxHQUFHLENBQUNDLFFBQUosQ0FBYTdEO0FBRmIsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTdUUsU0FBVCxHQUFvQjtBQUNoQixTQUFPZCw0Q0FBSyxDQUFDZSxNQUFOLENBQWEsYUFBYixDQUFQO0FBQ0g7O0FBQ0QsVUFBVUMsTUFBVixHQUFrQjtBQUNkLE1BQUc7QUFDQyxVQUFNZixnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDTnhGLFVBQUksRUFBRytELDhEQUFlQTtBQURoQixLQUFELENBQVQ7QUFHSCxHQUxELENBS0MsT0FBTTBCLEdBQU4sRUFBVTtBQUNQLFVBQU1ELDhEQUFHLENBQUM7QUFDTnhGLFVBQUksRUFBR2dFLDhEQUREO0FBRU45QixXQUFLLEVBQUd1RCxHQUFHLENBQUNDLFFBQUosQ0FBYTdEO0FBRmYsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFDRCxVQUFVMEUsVUFBVixHQUFzQjtBQUNsQixRQUFNVCxxRUFBVSxDQUFDdEMsNkRBQUQsRUFBZ0J5QyxLQUFoQixDQUFoQjtBQUNBO0FBQ0o7QUFDQTtBQUVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBQ0QsVUFBVU8sV0FBVixHQUF1QjtBQUNuQixRQUFNVixxRUFBVSxDQUFDbkMsOERBQUQsRUFBa0J3QyxNQUFsQixDQUFoQjtBQUVIOztBQUNELFVBQVVNLFdBQVYsR0FBdUI7QUFDbkIsUUFBTVgscUVBQVUsQ0FBQ2hDLDhEQUFELEVBQWtCd0MsTUFBbEIsQ0FBaEI7QUFDSDs7QUFFYyxVQUFVbEIsUUFBVixHQUFvQjtBQUMvQixRQUFNSCw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNxQixVQUFELENBREUsRUFFTnJCLCtEQUFJLENBQUNzQixXQUFELENBRkUsRUFHTnRCLCtEQUFJLENBQUN1QixXQUFELENBSEUsQ0FBRCxDQUFUO0FBS0gsQzs7Ozs7Ozs7Ozs7O0FDdkZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLE1BQUs7QUFDeEIsUUFBTUMsZUFBZSxHQUFHQyxpREFBb0IsRUFBNUM7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsZUFBRCxDQUFwQjtBQUNBLFFBQU1HLFFBQVEsR0FBRyxRQUNYQyxTQURXLEdBRVhDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FGekI7QUFHQTtBQUFDO0FBQ0w7QUFDQTtBQUFxQztBQUNqQyxRQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUNwQyxpREFBRCxFQUFVK0IsUUFBVixDQUF6QjtBQUNBSSxPQUFLLENBQUNFLFFBQU4sR0FBaUJULGVBQWUsQ0FBQ1UsR0FBaEIsQ0FBb0JyQyw4Q0FBcEIsQ0FBakI7QUFDQSxTQUFPa0MsS0FBUDtBQUNILENBWkQ7O0FBYUEsTUFBTTFILE9BQU8sR0FBRzhILHdFQUFhLENBQUNaLGNBQUQsRUFBaUI7QUFDMUNhLE9BQUs7QUFEcUMsQ0FBakIsQ0FBN0I7QUFJZS9ILHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG4vLyDtl6Trk5wg67aA67aE7J2EIOyImOygle2VoCDsiJgg7J6I6rKMIO2VmOuKlCDqsoMgKGhlYWQgPC0+IGJvZHkpXHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJztcclxuXHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmNvbnN0IE5vZGVCaXJkID0gKHtDb21wb25lbnR9KSA9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbk5vZGVCaXJkLnByb3BUeXBlcz17XHJcbiAgICBDb21wb25lbnQgOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShOb2RlQmlyZCkpO1xyXG4vLyAnYW50ZC9kaXN0L2FudGQuY3NzJ+ulvCAgaW5kZXgscHJvZmlsZSxzaWdudXAg66qo65GQ7JeQIOyggeuKlCDqsoMg67O064ukIOydtOugh+qyjCDsspjrpqwsIOqzte2GteyggeyduCDrtoDrtoQg64u064u5XHJcbi8vIHJldHVybuu2gOu2hOydtCBDb21wb25lbnTroZwg65Ok7Ja06rCQXHJcbi8vIGluZGV4LCBwcm9maWxlLCBzaWdudXDsnZgg67aA66qo7J24IOyFiFxyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gIGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcblxyXG4vLyDsnbTsoITsg4Htg5zsmYAg7JWh7IWY7J2EIO2ZnOyaqe2VtOyEnCDri6TsnYzsg4Htg5zrpbwg66eM65Og64ukXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4IDogKCBzdGF0ZSA9IHt9LCBhY3Rpb24gKT0+e1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURSA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy9IWURSQVRFKHNlcnZlciBzaWRlIHJlbmRlcmluZ+ydhCDsnITtlbQg7IKs7JqpKeulvCDsnITtlZwgcmVkdWNlciDstpTqsIBcclxuICAgIHVzZXIsXHJcbiAgICBwb3N0LFxyXG4gICAgLy91c2VyLHBvc3QgY29tYmluZVxyXG59KTtcclxuLy8gcmVkdWNlcuqwgCDtlajsiJjsnbTquLAg65WM66y47JeQLCDtlajsiJjrgbzrpqwg7ZWp7LmY66Ck66m0IGNvbWJpbmVSZWR1Y2Vy7J2YIOuPhOybgOydhCDrsJvslYTslbztlahcclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHMgOiBbe1xyXG4gICAgICAgIGlkIDogMSxcclxuICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZSA6J2hhbG8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6ICfssqvrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgICAgSW1hZ2VzIDogW3tcclxuICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vc2VhcmNoLnBzdGF0aWMubmV0L2NvbW1vbi8/c3JjPWh0dHAlM0ElMkYlMkZibG9nZmlsZXMubmF2ZXIubmV0JTJGTWpBeU1UQXhNREpmTVRRMyUyRk1EQXhOakE1TlRJMU5UUXlNVE00LjdLWkF0Q0cwNWdfeEFxQi1PNUFseTUxZGczdC15ZUQzWERrT1Y1Nlc1RTRnLmtGUXhMLWFiMEtXRUFvbEVZa2VCbHY0b3MtY3dUZlZwS0dUb25oUjVYR0lnLkpQRUcuMTk5M3N1amklMkZBMUI2RkI3MS0xMUU0LTRDOUEtQjc0My1FNzU0M0RFMkY4M0EuanBnJnR5cGU9YTM0MFwiLFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBzcmMgOiBcImh0dHBzOi8vc2VhcmNoLnBzdGF0aWMubmV0L2NvbW1vbi8/c3JjPWh0dHAlM0ElMkYlMkZjYWZlZmlsZXMubmF2ZXIubmV0JTJGTWpBeU1EQXlNRGhmTWpBeiUyRk1EQXhOVGd4TVRZME1EVXlOVEV4LjJJVTF3VGxhOGF4OGwzdFI2Si1WVzNEXzQyRkg0UEx2TmNpOTdtcnRGbDhnLnpja3d4Nk54alZBNHc5RWNTYmNENGN2djdkeUprOWRPMkg5dGFrNlVkam9nLkpQRUclMkZleHRlcm5hbEZpbGUuanBnJnR5cGU9YTM0MFwiLFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBzcmMgOiBcImh0dHBzOi8vc2VhcmNoLnBzdGF0aWMubmV0L2NvbW1vbi8/c3JjPWh0dHAlM0ElMkYlMkZjYWZlZmlsZXMubmF2ZXIubmV0JTJGTWpBeU1EQXlNRGhmTWpBeiUyRk1EQXhOVGd4TVRZME1EVXlOVEV4LjJJVTF3VGxhOGF4OGwzdFI2Si1WVzNEXzQyRkg0UEx2TmNpOTdtcnRGbDhnLnpja3d4Nk54alZBNHc5RWNTYmNENGN2djdkeUprOWRPMkg5dGFrNlVkam9nLkpQRUclMkZleHRlcm5hbEZpbGUuanBnJnR5cGU9YTM0MFwiLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzIDogW1xyXG4gICAgICAgICAgICB7ICBcclxuICAgICAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lIDogJ25laydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudCA6ICfqsJzsoJXtjJAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFVzZXIgOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA6ICdoaCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiAn7Ja47KCcIOuCmOyZgOyaqScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzIDogW10sXHJcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG4gICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3IgOiBudWxsLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG4vLyBBQ1RJT07snbTrpoTsnYQg7IOB7IiY66GcIOu5vOykgCDsnbTsnKAgOiDspJHqsITsl5Ag7Jik7YOA66W8IOunieq4sCDsnITtlbQo67OA7IiY66GcIOyngOygle2VmOuptCDsmKTtg4DrgpjrqbQg7Jik66WY6rCAIOuCnOuLpClcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3Q9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZSA6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQ9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZSA6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICBpZDoyLFxyXG4gICAgY29udGVudCA6IGRhdGEsXHJcbiAgICBVc2VyIDoge1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWUgOiAnY29kbCcsXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzIDogW10sXHJcbiAgICBDb21tZW50cyA6IFtdLFxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGQgc3VjY2VzcycpXHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzIDogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLG1haW5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmUgOiB0cnVlLFxyXG4gICAgICAgICAgICB9O31cclxuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvciA6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHMgOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZSxtYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lIDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvciA6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHMgOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZSxtYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lIDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvciA6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3IgOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluQ29tbWVudHMgOiBbZHVtbXlDb21tZW50LCAuLi5zdGF0ZSxtYWluQ29tbWVudHNdLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lIDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvciA6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQgOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbiIsImNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIG5pY2tuYW1lIDogJ0NIQUVDSEFFJyxcclxuICAgIGlkIDogMSxcclxuICAgIFBvc3RzIDogW3tpZDonZHVtbXlVc2VySUQnfV0sXHJcbiAgICBGb2xsb3dpbmdzIDogW3tpZDonaCd9XSxcclxuICAgIEZvbGxvd2VycyA6IFt7aWQ6J2snfSx7aWQ6J2gnfV0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Mb2FkaW5nIDogZmFsc2UsXHJcbiAgICBsb2dJbkRvbmUgOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3IgOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9nT3V0RG9uZSA6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyb3IgOiBudWxsLFxyXG4gICAgc2lnbnVwTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgc2lnbnVwRG9uZSA6IGZhbHNlLFxyXG4gICAgc2lnbnVwRXJyb3IgOiBudWxsLFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmUgOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3IgOiBudWxsLFxyXG4gICAgbWUgOiBudWxsLFxyXG4gICAgc2lnblVwRGF0ZSA6IHt9LFxyXG4gICAgbG9naW5EYXRhIDogW10sXHJcbn1cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1M9J0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFPSdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUz0nTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRT0nTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1Q9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTPSdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFPSdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1M9J0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFPSdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVD0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUz0nVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFPSdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVD0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTPSdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRT0nQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGR1bW15Rm9sbG93ZXIgPSB7XHJcbiAgICBpZCA6ICdoYWxvbWFsbycsXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5Mb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRXJyb3IgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5Eb25lIDogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luRG9uZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWUgOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dJbkxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nSW5FcnJvciA6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dExvYWRpbmcgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0RXJyb3IgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0RG9uZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dERvbmUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWUgOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dEVycm9yIDogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ251cExvYWRpbmcgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2lnbnVwRXJyb3IgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2lnbnVwRG9uZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ251cExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpZ251cERvbmUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWUgOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ251cExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpZ251cEVycm9yIDogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3IgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVEb25lIDogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRG9uZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZSA6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3IgOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdCA6IFxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7YWxsLCBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgLyogKj1nZW5lcmF0b3Ig66y467KVIOyekOyytOqwgCDsnbTroIfqsowg7IOd6rmAKHNhZ2Hsl5DshJwpIFxyXG4gICAgZ2VuZXJhdG9y64qUIO2VqOyImOydtOumhC5uZXh0KCkg65Kk7JeQIOuEpeyKpO2KuOulvCDsjajso7zslrTslbwg7ZWc64ukIFxyXG4gICAgZ2VuZXJhdG9y7ZWo7IiY64qUIOyViOyXkCB5aWVsZOulvCDrhKPslrTso7zrqbQg6rGw6riw7IScIOupiOy2pCwg6re466as6rOgIOuYkCDtmLjstpztlZjrqbQg66mI7LaY6rOz7JeQ7ISc67aA7YSwXHJcbiAgICDri6Tsi5wg7Iuc7J6R7ZWY6rOgIOuYkCB5aWVsZOqwgCDsnojsnLzrqbQg66mI7LakLCDrmJAg7Zi47Lac7ZWY66m0IOupiOy2mOqzs+yXkOyEnOu2gO2EsCDsi5zsnpEgXHJcbiAgICAqL1xyXG4gICAvLyDqtbPsnbQgeWllbGTrpbwg7KCB64qUIOydtOycoOuKlCDtlZzspIQg7ZWc7KSEIOyLpO2Wie2VtCDrs7wg7IiYIOyeiOq4sCDrlYzrrLjsl5BcclxuICAgeWllbGQgYWxsKFxyXG4gICAgICAgW1xyXG4gICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgIC8vc2FnYeuKlCBjb21iaW5lcmVkdWNlciDtlYTsmpTsl4bsnYxcclxuICAgXSlcclxuICAgLy8gYWxs7J2AIOuwsOyXtOydhCDrsJvslYTshJwg67Cw7Je0IOyViOyXkCDsnojripQg6rKD7J2EIO2VnOuyiOyXkCDsi6TtlontlbTspIDri6RcclxuICAgLy8gZm9ya+uKlCDtlajsiJjrpbwg7Iuk7ZaJ7ZWc64uk64qUIOucu1xyXG4gICAvLyBmb3JrIOuMgOyLoCBjYWxs64+EIOyTsOyngOunjCDrkZjsnZgg7LCo7J207KCQ7J20IOyeiOydjFxyXG4gICAvLyBmb3Jr64qUIOu5hOuPmeq4sCDtlajsiJjtmLjstpwsIGNhbGzsnYAg64+Z6riwIO2VqOyImO2YuOy2nFxyXG4gICAvKiBjYWxs7J2AIDEw67KI7Ke4IOykhOyXkOyEnCBsb2dpbkFQSeqwgCDrpqzthLTtlaAg65WMIOq5jOyngCDquLDri6TrprxcclxuICAgIOu5hOuPmeq4sOuKlCDsmpTssq3snYQg6riw64uk66as7KeAIOyViuqzoCDrsJTroZwg64uk7J2M6rq8IOyLpO2WiSAqL1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgZGVsYXksIHB1dCwgdGFrZUxhdGVzdCwgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLGRhdGEpXHJcbn1cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKXtcclxuICAgIGNvbnNvbGUubG9nKCdzYWdhIGFkZFBvc3QnKTtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAvL3Jlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgLy8g66eM7JW9IOyEnOuyhOuhnCDroZzqt7jsnbjtlZjripQg7JqU7LKt7J2EIOuztOuDiOycvOuptCDqt7gg6rKw6rO866W8IOuwm+uKlCDqsoNcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpeyAvL+yEnOuyhCDsmpTssq0g7Iuk7Yyo7IucXHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wdXQ9ZGlzcGF0Y2gg65286rOgIOyDneqwge2VmOq4sCwg7JWh7IWYIOqwneyytCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlIDogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTplcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9jb21tZW50JyxkYXRhKVxyXG59XHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0ICh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhIDogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKXtcclxuICAgIGNvbnNvbGUubG9nKCd3YXRjaEFkZFBvc3QnKTtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7IFxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnRQb3N0KSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHthbGwsIGRlbGF5LCBwdXQsIGZvcmssIHRha2VMYXRlc3R9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7TE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBMT0dfSU5fRkFJTFVSRSwgXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUywgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLCBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUyx9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpXHJcbn1cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgbG9nSW4nKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTsgLyogcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpIOyVhOyngeydgCDshJzrsoTqsIAg7JeG7Jy864uIKi9cclxuICAgICAgICAvLyBjYWxs7J2YIOyyq+uyiOynuCDsnbjsnpDripQg7ZWo7IiY66qFLCDqt7jri6TsnYzrtoDthLDripQg66ek6rCc67OA7IiY65OkXHJcbiAgICAgICAgLy8g66eM7JW9IOyEnOuyhOuhnCDroZzqt7jsnbjtlZjripQg7JqU7LKt7J2EIOuztOuDiOycvOuptCDqt7gg6rKw6rO866W8IOuwm+uKlCDqsoNcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpeyAvL+yEnOuyhCDsmpTssq0g7Iuk7Yyo7IucXHJcbiAgICAgICAgeWllbGQgcHV0KHsgLy9wdXQ9ZGlzcGF0Y2gg65286rOgIOyDneqwge2VmOq4sCwg7JWh7IWYIOqwneyytCBkaXNwYXRjaFxyXG4gICAgICAgICAgICB0eXBlIDogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDplcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpXHJcbn1cclxuZnVuY3Rpb24qIGxvZ091dCgpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpXHJcbiAgICAgICAgLy8g66eM7JW9IOyEnOuyhOuhnCDroZzqt7jsnbjtlZjripQg7JqU7LKt7J2EIOuztOuDiOycvOuptCDqt7gg6rKw6rO866W8IOuwm+uKlCDqsoNcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycil7IC8v7ISc67KEIOyalOyyrSDsi6TtjKjsi5xcclxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dD1kaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY6riwLCDslaHshZgg6rCd7LK0IGRpc3BhdGNoXHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnNpZ251cCgnL2FwaS9zaWdudXAnKVxyXG59XHJcbmZ1bmN0aW9uKiBzaWduVXAoKXtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsbG9nSW4pOyBcclxuICAgIC8qIHdoaWxlKHRydWUpeyAvL3doaWxl66GcIOqwkOyLuOykmOyVvCDroZzqt7jsnbjtlZjqs6Ag66Gc6re47JWE7JuD7ZWY6rOgIOuYkCDroZzqt7jsnbgg6rCA64qlLCB3aGlsZeuhnCDslYjqsJDsi7jso7zrqbQg66Gc6re47J24IOuUsSDtlZzrsojrp4wg6rCA64qlXHJcbiAgICAgICAgeWllbGQgdGFrZSgnTE9HX0lOX1JFUVVFU1QnLCBsb2dJbik7XHJcblxyXG4gICAgfSAqL1xyXG4gICAgLy8gdGFrZUV2ZXJ564qUIHdoaWxl6rO8IOqwmeydgCDsl63tlaAsIHdoaWxl7J20IOyngeq0gOyggeydtOyngCDslYrslYTshJwg7IKs7JqpXHJcbiAgICAvLyB0YWtlTGF0ZXN064qUIOyYiOulvOuTpOyWtCDsi6TsiJjroZwg6riA7Jis66as6riwIOuyhO2KvOydhCDrkZDrsogg64iM66CA7J2EIOuVjCDrkZjri6Qg66Gc65Sp7KSR7J20652866m0IOuniOyngOunieycvOuhnCDriITrpbjqsoPsl5Drp4wg67CY7J2RLCB0YWtlRXZlcnnsl5DshJzripQg65GQ67KIIOyYrOumsOqyjCDrkKgo7KaJ6rCB67CY7J2RKVxyXG4gICAgLy90YWtl64qUIExPR19JTuydtOudvOuKlCDslaHshZjsnbQg7Iuk7ZaJ65CgIOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XHJcbiAgICAvL0xPR19JTiDslaHshZjsnbQg7Iuk7ZaJ65CY66m0IGxvZ0luIO2VqOyImCDsi6TtlontlbTrnbxcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG4gICAgXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5cclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJ1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT57XHJcbiAgICBjb25zdCBzYWdhZU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYWVNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbidcclxuICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIHsvKuuwsO2PrOyaqeydvOuVjOuKlCBkZXZ0b29scyDsl7DqsrAgWCwg7Jqp65+JIOywqOyngCDrlYzrrLjsl5BcclxuICAgIO2VmOyngOunjCDqsJzrsJzsnpDsmqnsnbzrlYzripQgZGV2dG9vbHPrpbwg7Jew6rKw7ZW07IScIGhpc3RvcnnqsIAg7IyT7J206rKMIO2VnOuLpFxyXG4gICAg67Cw7Y+s7Jqp7J2865WM64qUIGhpc3Rvcnnrpbwg7IyT7JWE65GQ7KeAIOyViuqzoCDqs4Tsho0g67KE66a8ICovfVxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FlTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gICAgZGVidWcgOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9