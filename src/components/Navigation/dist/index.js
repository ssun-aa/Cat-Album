"use strict";
exports.__esModule = true;
var index_js_1 = require("assets/svgs/index.js");
var react_router_dom_1 = require("react-router-dom");
var recoil_1 = require("recoil");
var atom_1 = require("recoil/atom");
var navigation_module_scss_1 = require("./navigation.module.scss");
function Navigation() {
    var _a = recoil_1.useRecoilState(atom_1.themeState), theme = _a[0], settheme = _a[1];
    var handleThemeClick = function () {
        var newTheme = theme === 'light' ? 'dark' : 'light';
        settheme(newTheme);
    };
    return (React.createElement("div", { className: navigation_module_scss_1["default"].wrap },
        React.createElement("button", { type: "button", onClick: handleThemeClick, className: navigation_module_scss_1["default"].theme }, theme),
        React.createElement("div", { className: navigation_module_scss_1["default"].navWrap },
            React.createElement(react_router_dom_1.NavLink, { to: "/", "aria-label": "tagSearch", className: navigation_module_scss_1["default"].icon, style: function (_a) {
                    var isActive = _a.isActive;
                    return (isActive ? { fill: '#AEBAE8' } : {});
                } },
                React.createElement(index_js_1.TagIcon, null)),
            React.createElement(react_router_dom_1.NavLink, { to: "/create", "aria-label": "photo", className: navigation_module_scss_1["default"].icon, style: function (_a) {
                    var isActive = _a.isActive;
                    return (isActive ? { fill: '#AEBAE8' } : {});
                } },
                React.createElement(index_js_1.PhotoIcon, null)),
            React.createElement(react_router_dom_1.NavLink, { to: "/fav", "aria-label": "favorites", className: navigation_module_scss_1["default"].icon, style: function (_a) {
                    var isActive = _a.isActive;
                    return (isActive ? { fill: '#AEBAE8' } : {});
                } },
                React.createElement(index_js_1.HeartIcon, null)))));
}
exports["default"] = Navigation;
