webpackJsonp([10],{WePy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a("Yarq")),l=s(a("AA3o")),u=s(a("xSur")),i=s(a("UzKs")),o=s(a("Y7Ml")),c=s(a("0282")),r=a("BXMe");function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){(0,l.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={name:""},a}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname.split("/")[6];this.setState({name:e})}},{key:"click",value:function(){window.history.go(-1)}},{key:"render",value:function(){var e=this.state.name;return c.default.createElement("div",{className:"header"},c.default.createElement("ul",null,c.default.createElement("li",{onClick:this.click.bind(this)},c.default.createElement("span",{className:"iconfont icon-fanhui"})),c.default.createElement("li",null,e),c.default.createElement("li",null,c.default.createElement(r.NavLink,{to:"/home"},c.default.createElement("span",{className:"iconfont icon-shouye"})))))}}]),t}(c.default.Component);t.default=f}});