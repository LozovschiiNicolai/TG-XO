(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),s=n.n(c),o=n(5),i=n(3),u=n(2),p="GET_URL_PARAMS",d="ADD_ROLE",l={token:"",user:0,role:""};var h="GET_GAME_STATE",f={data:{}};var j=Object(i.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(u.a)(Object(u.a)({},e),{},{token:t.payload.token,user:t.payload.user});case d:return Object(u.a)(Object(u.a)({},e),{},{role:t.payload.role});default:return e}},gameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)(Object(u.a)({},e),{},{data:t.payload.data});default:return e}}}),O=n(13),b=n(4),v=n.n(b),y=n(7),g=function(){var e=function(){var e=Object(y.a)(v.a.mark((function e(t){var n,a,r,c,s,o=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{},e.prev=3,a&&(a=JSON.stringify(a),r["Content-Type"]="application/json"),e.next=7,fetch(t,{method:n,body:a,headers:r});case 7:return c=e.sent,e.next=10,c.json();case 10:return s=e.sent,e.abrupt("return",s);case 14:e.prev=14,e.t0=e.catch(3),console.log("error");case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return{postUserData:function(){var t=Object(y.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/api/session/SessionStart","POST",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getGameData:function(){var t=Object(y.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/api/session/GameUpdate","POST",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},x=function(e){return function(t){return function(n){switch(n.type){case"GET_URL_PARAMS":var a=n.payload,r=a.token,c=a.user;(0,g().postUserData)({token:r,user:c}).then((function(t){t&&e.dispatch({type:d,payload:t})})),e.dispatch({type:"START_GAME",payload:r})}t(n)}}},m=function(e){return function(t){return function(n){switch(n.type){case"START_GAME":var a=g().getGameData,r=n.payload;setInterval((function(){a({token:r}).then((function(t){t&&e.dispatch({type:h,payload:t})}))}),1e3)}t(n)}}},w=[O.a,x,m],E=i.a.apply(void 0,w),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,S=Object(i.d)(j,_(E)),T=(n(26),n.p+"static/media/logo.6ce24c58.svg"),k=(n(27),n(1));var A=function(e){var t=Object(o.c)((function(e){return{token:e.app.token||"",user:e.app.user||"",role:e.app.role||""}})),n=t.token,a=t.user,r=t.role;return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsxs)("div",{className:"test-data",children:[Object(k.jsx)("span",{children:n}),Object(k.jsx)("span",{children:a}),Object(k.jsx)("span",{children:r})]}),Object(k.jsx)("header",{className:"App-header",children:Object(k.jsx)("img",{src:T,className:"App-logo",alt:"logo"})})]})},G=n(14),D=n.n(G),R=Object(o.b)()((function(e){var t=e.dispatch,n=D.a.parse(window.location.search,{ignoreQueryPrefix:!0});return Object(a.useEffect)((function(){t({type:p,payload:n})})),Object(k.jsx)(a.Fragment,{children:e.children})}));s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(o.a,{store:S,children:Object(k.jsx)(R,{children:Object(k.jsx)(A,{})})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d2144f4e.chunk.js.map