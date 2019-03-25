'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.registerComponent = exports.renderJSON = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registeredComponents = {};

var renderJSON = exports.renderJSON = function renderJSON(elements) {
	if (registeredComponents[elements.component]) {
		return _react2.default.createElement(registeredComponents[elements.component], elements.props);
	} else {
		return _react2.default.createElement(elements.component, elements.props, elements.children ? elements.children : (elements.childs || []).map(function (i) {
			return renderJSON(i);
		}));
	}
};

var childs = function childs(_childs) {
	if (_childs && _childs.length > 0) {
		return _childs.map(function (child) {
			return undefined.renderJSON(child);
		});
	}
	return null;
};

var registerComponent = exports.registerComponent = function registerComponent(id, component) {
	registeredComponents[id] = component;
};