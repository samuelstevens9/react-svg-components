module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icons = function (_React$Component) {
  _inherits(Icons, _React$Component);

  function Icons(props) {
    _classCallCheck(this, Icons);

    var _this = _possibleConstructorReturn(this, (Icons.__proto__ || Object.getPrototypeOf(Icons)).call(this, props));

    _this.state = {
      svg_icon: ""
    };
    _this.static_url = props.static_url ? props.static_url : document.STATIC_URL ? document.STATIC_URL : '';
    _this.icons = {
      'react': 'react-logo.svg'
    };
    return _this;
  }

  _createClass(Icons, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      //console.log("TruthlabSVGIcons fetch",this.static_url+this.icons[this.props.icon_name]);
      this.fetchIcon(this.props.icon_name);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.icon_name != nextProps.icon_name) {
        this.fetchIcon(nextProps.icon_name);
      }
    }
  }, {
    key: 'fetchIcon',
    value: function fetchIcon(icon_name) {
      var _this2 = this;

      if (this.icons[icon_name]) {
        fetch(this.static_url + this.icons[icon_name]).then(function (response) {
          return response.text();
        }).then(function (responseText) {
          //console.log("got icon", icon_name);
          _this2.setState({ svg_icon: responseText });
        }).catch(function (error) {
          console.log("error getting icon", error);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('span', { className: (this.props.className ? this.props.className : "") + " icon-svg icon-svg-" + this.props.icon_name,
        style: this.props.style ? this.props.style : "",
        dangerouslySetInnerHTML: { __html: this.state.svg_icon } });
    }
  }]);

  return Icons;
}(_react2.default.Component);

exports.default = Icons;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Icons = __webpack_require__(1);

var _Icons2 = _interopRequireDefault(_Icons);

var _Buttons = __webpack_require__(3);

var _ReactSelectComponents = __webpack_require__(4);

var _Avatar = __webpack_require__(5);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _InlineEditInput = __webpack_require__(6);

var _InlineEditInput2 = _interopRequireDefault(_InlineEditInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Icons: _Icons2.default,
  CircleAdd: _Buttons.CircleAdd, CardButton: _Buttons.CardButton, CircleIcon: _Buttons.CircleIcon,
  IconOption: _ReactSelectComponents.IconOption, IconValue: _ReactSelectComponents.IconValue,
  Avatar: _Avatar2.default,
  InlineEditInput: _InlineEditInput2.default
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icons = __webpack_require__(1);

var _Icons2 = _interopRequireDefault(_Icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Properties:
 *  className
 *  id
 *  onClick
 *  text
 */
var CardButton = function (_React$Component) {
  _inherits(CardButton, _React$Component);

  function CardButton() {
    _classCallCheck(this, CardButton);

    return _possibleConstructorReturn(this, (CardButton.__proto__ || Object.getPrototypeOf(CardButton)).apply(this, arguments));
  }

  _createClass(CardButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: this.props.id ? this.props.id : "", className: (this.props.className ? this.props.className : "") + " card card-btn", onClick: this.props.onClick },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'btn-icon col-sm-2' },
            _react2.default.createElement(
              'i',
              { 'class': 'material-icons' },
              'add_circle_outline'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'btn-text col-sm-10' },
            this.props.text
          )
        )
      );
    }
  }]);

  return CardButton;
}(_react2.default.Component);
/**
 * Properties:
 *  className
 *  id
 *  onClick
 *  text
 */


var CircleAdd = function (_React$Component2) {
  _inherits(CircleAdd, _React$Component2);

  function CircleAdd() {
    _classCallCheck(this, CircleAdd);

    return _possibleConstructorReturn(this, (CircleAdd.__proto__ || Object.getPrototypeOf(CircleAdd)).apply(this, arguments));
  }

  _createClass(CircleAdd, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: this.props.id ? this.props.id : "", className: this.props.className ? this.props.className : "", onClick: this.props.onClick },
        _react2.default.createElement(
          'div',
          { className: 'btn-icon' },
          _react2.default.createElement(
            'i',
            { 'class': 'material-icons' },
            'add'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'btn-text' },
          this.props.text
        )
      );
    }
  }]);

  return CircleAdd;
}(_react2.default.Component);

var CircleIcon = function (_React$Component3) {
  _inherits(CircleIcon, _React$Component3);

  function CircleIcon() {
    _classCallCheck(this, CircleIcon);

    return _possibleConstructorReturn(this, (CircleIcon.__proto__ || Object.getPrototypeOf(CircleIcon)).apply(this, arguments));
  }

  _createClass(CircleIcon, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: this.props.id ? this.props.id : "", className: this.props.className ? this.props.className : "", onClick: this.props.onClick },
        _react2.default.createElement(_Icons2.default, { className: 'w100', icon_name: this.props.icon_name }),
        this.props.text ? _react2.default.createElement(
          'div',
          { className: 'btn-text' },
          this.props.text
        ) : ""
      );
    }
  }]);

  return CircleIcon;
}(_react2.default.Component);

module.exports = { CircleAdd: CircleAdd, CardButton: CardButton, CircleIcon: CircleIcon };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icons = __webpack_require__(1);

var _Icons2 = _interopRequireDefault(_Icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconOption = function (_React$Component) {
  _inherits(IconOption, _React$Component);

  function IconOption() {
    _classCallCheck(this, IconOption);

    return _possibleConstructorReturn(this, (IconOption.__proto__ || Object.getPrototypeOf(IconOption)).apply(this, arguments));
  }

  _createClass(IconOption, [{
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      event.preventDefault();
      event.stopPropagation();
      this.props.onSelect(this.props.option, event);
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter(event) {
      this.props.onFocus(this.props.option, event);
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      if (this.props.isFocused) return;
      this.props.onFocus(this.props.option, event);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: this.props.className + " Select-option-label",
          onMouseDown: this.handleMouseDown.bind(this),
          onMouseEnter: this.handleMouseEnter.bind(this),
          onMouseMove: this.handleMouseMove.bind(this),
          title: this.props.option.title },
        _react2.default.createElement(_Icons2.default, { icon_name: this.props.option.icon, className: 'Select-Icon' }),
        _react2.default.createElement(
          'span',
          null,
          this.props.children
        )
      );
    }
  }]);

  return IconOption;
}(_react2.default.Component);

var IconValue = function (_React$Component2) {
  _inherits(IconValue, _React$Component2);

  function IconValue() {
    _classCallCheck(this, IconValue);

    return _possibleConstructorReturn(this, (IconValue.__proto__ || Object.getPrototypeOf(IconValue)).apply(this, arguments));
  }

  _createClass(IconValue, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Select-value', title: this.props.value.title },
        _react2.default.createElement(
          'span',
          { className: 'Select-value-label' },
          _react2.default.createElement(_Icons2.default, { icon_name: this.props.value.icon, className: 'Select-Icon' }),
          _react2.default.createElement(
            'span',
            null,
            this.props.children
          )
        )
      );
    }
  }]);

  return IconValue;
}(_react2.default.Component);

module.exports = {
  IconOption: IconOption,
  IconValue: IconValue
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = function (_React$Component) {
  _inherits(Avatar, _React$Component);

  function Avatar(props) {
    _classCallCheck(this, Avatar);

    var _this = _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Avatar, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextprops) {}
  }, {
    key: "renderInitialsAvatar",
    value: function renderInitialsAvatar() {
      var _props = this.props,
          user = _props.user,
          displayName = _props.displayName,
          first_name = _props.first_name,
          last_name = _props.last_name;
      //console.log("renderInitialsAvatar", user, displayName, first_name, last_name);

      var fi = "";
      var li = "";
      if (displayName) {
        var fl = displayName.split(" ");
        fi = fl[0][0];
        if (fl[1]) {
          li = fl[1][0];
        }
        return [fi, li];
      }
      if (first_name && last_name) {
        fi = first_name[0];
        li = last_name[0];
        return [fi, li];
      }
      if (user.first_name) {
        fi = user.first_name[0];
      }
      if (user.firstName) {
        fi = user.firstName[0];
      }
      if (user.last_name) {
        li = user.last_name[0];
      }
      if (user.lastName) {
        li = user.lastName[0];
      }
      if (fi || li) {
        return [fi, li];
      }
      if (!fi && !li && user.displayName) {
        var fl = user.displayName.split(" ");
        fi = fl[0][0];
        if (fl[1]) {
          li = fl[1][0];
        }
        return [fi, li];
      }
      if (!fi && !li && user.userDisplayName) {
        var fl = user.userDisplayName.split(" ");
        fi = fl[0][0];
        if (fl[1]) {
          li = fl[1][0];
        }
        return [fi, li];
      }
      return [fi, li];
    }
  }, {
    key: "render",
    value: function render() {
      var _renderInitialsAvatar = this.renderInitialsAvatar(),
          _renderInitialsAvatar2 = _slicedToArray(_renderInitialsAvatar, 2),
          fi = _renderInitialsAvatar2[0],
          li = _renderInitialsAvatar2[1];

      return _react2.default.createElement(
        "div",
        { id: this.props.id ? this.props.id : "", className: (this.props.className ? this.props.className : "") + " avatar" },
        _react2.default.createElement(
          "div",
          { className: "first-initial" },
          fi
        ),
        _react2.default.createElement(
          "div",
          { className: "last-initial" },
          li
        )
      );
    }
  }]);

  return Avatar;
}(_react2.default.Component);

exports.default = Avatar;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InlineEditInput = function (_React$Component) {
  _inherits(InlineEditInput, _React$Component);

  function InlineEditInput(props) {
    _classCallCheck(this, InlineEditInput);

    var _this = _possibleConstructorReturn(this, (InlineEditInput.__proto__ || Object.getPrototypeOf(InlineEditInput)).call(this, props));

    _this.state = {
      isEditing: false,
      value: props.value
      //console.log("InlineEditInput",props);
    };return _this;
  }

  _createClass(InlineEditInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        value: newProps.value
        //isEditing:(newProps.value == "")
      });
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'onInputKeyPress',
    value: function onInputKeyPress(event) {
      if (event.key == "Enter") {
        this.setState({ isEditing: false });
        if (this.props.onInputChange) {
          this.props.onInputChange(event);
        }
      }
    }
  }, {
    key: 'onSave',
    value: function onSave() {
      this.setState({ isEditing: false });
      if (this.props.onInputChange) {
        this.props.onInputChange(this.state.value);
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      if (event.key == 'Enter') {
        this.setState({ isEditing: false });
        if (this.props.onInputChange) {
          this.props.onInputChange(this.state.value);
        }
      }
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      //console.log("event.key",event,event.keyCode);
      if (event.keyCode === 27) {
        this.setState({ isEditing: false, value: this.props.value });
      }
    }
  }, {
    key: 'onInputBlur',
    value: function onInputBlur(event) {
      this.setState({ isEditing: false });
      if (this.props.onInputChange) {
        this.props.onInputChange(event.target.value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var inpt = _react2.default.createElement(
        'span',
        { onClick: function onClick() {
            _this2.setState({ isEditing: true });
          } },
        this.state.value
      );
      if (this.state.isEditing) {
        var sizeWidth = this.state.value.length == 0 ? '200px' : this.state.value.length * 15;
        inpt = _react2.default.createElement('input', { autoFocus: true, type: 'text', style: { width: sizeWidth + 'px', 'minWidth': '300px', 'maxWidth': '80%' }, value: this.state.value, onChange: this.onInputChange.bind(this), onKeyPress: this.onInputKeyPress.bind(this), onBlur: this.onInputBlur.bind(this) });
      }
      return _react2.default.createElement(
        'span',
        { className: this.props.className ? this.props.className : "" },
        this.state.isEditing ? _react2.default.createElement(
          'div',
          { className: 'input-group input-group-clear' },
          _react2.default.createElement('input', { className: 'form-control', type: 'text', value: this.state.value,
            autoFocus: true,
            onKeyPress: this.handleKeyPress.bind(this),
            onKeyDown: this.handleKeyDown.bind(this),
            onChange: function onChange(evt) {
              _this2.setState({ value: evt.target.value });
            } }),
          _react2.default.createElement(
            'div',
            { className: 'input-group-append' },
            _react2.default.createElement(
              'a',
              { className: 'input-group-text input-group-clear', style: { marginRight: "3px" }, href: '#', onClick: this.onSave.bind(this) },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'save'
              )
            ),
            _react2.default.createElement(
              'a',
              { className: 'input-group-text input-group-clear', href: '#', onClick: function onClick() {
                  return _this2.setState({ isEditing: false, value: _this2.props.value });
                } },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'close'
              )
            )
          )
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'right' },
            _react2.default.createElement(
              'a',
              { href: '#', onClick: function onClick() {
                  return _this2.setState({ isEditing: true });
                } },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'mode_edit'
              )
            )
          ),
          this.props.children ? this.props.children : this.state.value
        )
      );
    }
  }]);

  return InlineEditInput;
}(_react2.default.Component);

exports.default = InlineEditInput;

module.exports = InlineEditInput;

/***/ })
/******/ ]);