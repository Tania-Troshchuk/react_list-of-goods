(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n,r=s(3),c=s.n(r),a=s(4),o=s(5),i=s(8),l=s(6),u=s(7),b=s(1),d=s.n(b),h=(s(13),s(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.NONE="None",t.ALPABET="Alpabet",t.LENGTH="length"}(n||(n={}));var j=function(t){Object(i.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(a.a)(this,s);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isStarted:!1,isReversed:!1,sortType:n.NONE},t.startRenderingList=function(){t.setState({isStarted:!0})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.sortByAlpabet=function(){t.setState({sortType:n.ALPABET})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isStarted,s=t.isReversed,r=t.sortType,c=function(t,e,s){var r=Object(u.a)(t);return r.sort((function(t,s){switch(e){case n.ALPABET:return t.localeCompare(s);case n.LENGTH:return t.length-s.length;default:return 0}})),s&&r.reverse(),r}(p,r,s);return Object(h.jsx)("div",{className:"App",children:e?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",onClick:this.sortByAlpabet,className:"button",children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",onClick:this.sortByLength,className:"button",children:"Sort by length"}),Object(h.jsx)("button",{type:"button",onClick:this.reverse,className:"button",children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:this.reset,className:"button",children:"Reset"})]}),Object(h.jsx)("ul",{className:"Goods",children:c.map((function(t){return Object(h.jsx)("li",{className:"Goods__item level-item",children:t},t)}))})]}):Object(h.jsx)("button",{type:"button",onClick:this.startRenderingList,className:"button is-success",children:"Start"})})}}]),s}(d.a.Component);c.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.255d2c48.chunk.js.map