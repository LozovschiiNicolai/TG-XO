(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(9),o=n.n(a),c=n(2),i=n(7),s=n(3),u="GET_URL_PARAMS",p="ADD_ROLE",l="WIN_RESULT",d="REPEAT_ROUND",f={token:"",user:0,role:"",winResult:!1,repeatRound:!1};var b=function(e){return{type:l,payload:e}},y=function(e){return{type:d,payload:e}},v="GET_GAME_STATE",j={field:{},moveRole:"master",restart:!1};var O,h,g,m,R,T=Object(i.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),{},{token:t.payload.token,user:t.payload.user});case p:return Object(s.a)(Object(s.a)({},e),{},{role:t.payload.role});case l:return Object(s.a)(Object(s.a)({},e),{},{winResult:t.payload});case d:return Object(s.a)(Object(s.a)({},e),{},{repeatRound:t.payload});default:return e}},gameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(s.a)(Object(s.a)({},e),{},{field:t.payload.data.field,moveRole:t.payload.data.moveRole,restart:t.payload.data.restart});default:return e}}}),w=n(19),x=n(4),S=n.n(x),E=n(8),k=function(){var e=function(){var e=Object(E.a)(S.a.mark((function e(t){var n,r,a,o,c,i=arguments;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:{},e.prev=3,r&&(r=JSON.stringify(r),a["Content-Type"]="application/json"),e.next=7,fetch(t,{method:n,body:r,headers:a});case 7:return o=e.sent,e.next=10,o.json();case 10:return c=e.sent,e.abrupt("return",c);case 14:e.prev=14,e.t0=e.catch(3),console.log("error");case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return{postUserData:function(){var t=Object(E.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/api/session/SessionStart","POST",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getGameData:function(){var t=Object(E.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/api/session/GameUpdate","POST",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),postMoveData:function(){var t=Object(E.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/api/session/MakeMove","POST",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),postRepeatRound:function(){var t=Object(E.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/api/session/RepeatRound","POST",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},_=function(e){return function(t){return function(n){switch(n.type){case"GET_URL_PARAMS":var r=n.payload,a=r.token,o=r.user;(0,k().postUserData)({token:a,user:o}).then((function(t){t&&e.dispatch({type:p,payload:t})})),e.dispatch({type:"START_GAME",payload:a});break;case"REPEAT_ROUND":var c=e.getState().app,i=c.token,s=c.role;(0,k().postRepeatRound)({token:i,role:s})}t(n)}}},M=function(e){return function(t){return function(n){switch(n.type){case"START_GAME":var r=k().getGameData,a=n.payload;setInterval((function(){r({token:a}).then((function(t){var n=e.getState().gameState;if(t&&JSON.stringify(t.data)!==JSON.stringify(n)&&t){e.dispatch({type:v,payload:t});var r=function(e){var t=!1;return[["betType1","betType2","betType3"],["betType4","betType5","betType6"],["betType7","betType8","betType9"],["betType1","betType4","betType7"],["betType2","betType5","betType8"],["betType3","betType6","betType9"],["betType1","betType5","betType9"],["betType7","betType5","betType3"]].map((function(n,r){var a=[];return n.map((function(t,n){return a.push(e[t]?e[t]:n)})),a.every((function(e,t,n){return e===n[0]}))?t="x"===a[0]?"master":"guest":-1===Object.values(e).findIndex((function(e){return!1===e}))&&(t="tie"),a})),t}(t.data.field);r&&e.dispatch(b(r))}}))}),1e3);break;case"MAKE_MOVE":var o=e.getState().app.token,c=k().postMoveData,i=n.payload,s=i.newMove,u=i.field,p=i.role,l=i.moveRole,d=Object.assign({},u);d[s]="master"===p?"x":"y",c({data:{field:d,moveRole:"master"===l?"guest":"master"},token:o});break;case"GET_GAME_STATE":var f=e.getState().app,j=f.repeatRound,O=f.winResult,h=n.payload.data;Object.values(h.field).every((function(e){return"false"===e.toString()}))&&j&&O&&(e.dispatch(b(!1)),e.dispatch(y(!1)))}t(n)}}},A=[w.a,_,M],D=i.a.apply(void 0,A),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,L=Object(i.d)(T,G(D)),P=n(5),U=n(6),C=n(1),N={x:{path:"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z",viewBox:"0 0 49 49"},y:{path:"M256,0C114.508,0,0,114.497,0,256c0,141.493,114.497,256,256,256c141.492,0,256-114.497,256-256    C512,114.507,397.503,0,256,0z M256,472c-119.384,0-216-96.607-216-216c0-119.385,96.607-216,216-216    c119.384,0,216,96.607,216,216C472,375.385,375.393,472,256,472z",viewBox:"0 0 512 512"}},z=function(e){var t=e.icon;return Object(C.jsx)("svg",{viewBox:N[t].viewBox,children:Object(C.jsx)("path",{d:N[t].path})})},B=U.a.div(O||(O=Object(P.a)(["\n  background: ",";\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-gap: 1em;\n  height: 50vh;\n  border: 1px solid;\n"])),(function(e){return e.winResult?"red":"gray"})),I=U.a.div(h||(h=Object(P.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: white;\n  pointer-events: ",";\n  & svg {\n    height: ",";\n  }\n"])),(function(e){return e.active?"all":"none"}),(function(e){return"y"===e.result?"37%":"30%"})),J=function(){var e=Object(c.d)((function(e){return{role:e.app.role||"",field:e.gameState.field||{},moveRole:e.gameState.moveRole||"",winResult:e.app.winResult||!1}})),t=e.role,n=e.field,r=e.moveRole,a=e.winResult,o=Object(c.c)();return Object(C.jsx)(B,{winResult:a,children:Object.entries(n).map((function(e,a){return Object(C.jsx)(I,{active:!e[1]&&t===r,result:e[1].toString(),onClick:function(){return o({type:"MAKE_MOVE",payload:{newMove:e[0],field:n,role:t,moveRole:r}})},children:e[1]&&Object(C.jsx)(z,{icon:e[1]})},a)}))})},V=n(11),F=U.a.div(g||(g=Object(P.a)(["\n  text-align: center;\n  font-size: 1.5em;\n  text-transform: uppercase;\n  font-family: sans-serif;\n  font-weight: bold;\n  color: red;\n"]))),K=function(){var e=Object(c.d)((function(e){return{role:e.app.role||"",moveRole:e.gameState.moveRole||"",winResult:e.app.winResult||!1}})),t=e.role,n=e.moveRole,a=e.winResult,o=Object(r.useState)(""),i=Object(V.a)(o,2),s=i[0],u=i[1];return Object(r.useEffect)((function(){u(a?a===t?"\u041f\u043e\u0431\u0435\u0434\u0430!":"\u0412 \u0434\u0440\u0443\u0433\u043e\u0439 \u0440\u0430\u0437!":t===n?"\u0422\u0432\u043e\u0439 \u0445\u043e\u0434":"\u0425\u043e\u0434 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430")}),[a,t,n]),Object(C.jsx)(F,{children:s})},X=U.a.div(m||(m=Object(P.a)(["\n  position: absolute;\n  top: 15%;\n  height: 30%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: bold;\n  font-size: 2em;\n  text-transform: uppercase;\n  font-family: sans-serif;\n  text-align: center;\n"]))),Q=U.a.div(R||(R=Object(P.a)(["\n  background: green;\n  padding: 0.5em 1em;\n  border-radius: 1em;\n"]))),W=function(){var e=Object(c.d)((function(e){return{winResult:e.app.winResult||!1,repeatRound:e.app.repeatRound||!1}})),t=e.winResult,n=e.repeatRound,a=Object(r.useState)("\u0415\u0449\u0435 \u0440\u0430\u0437"),o=Object(V.a)(a,2),i=o[0],s=o[1],u=Object(c.c)();Object(r.useEffect)((function(){s(n?"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0430":"\u0415\u0449\u0435 \u0440\u0430\u0437")}),[n]);return t&&Object(C.jsx)(X,{children:n?Object(C.jsx)("span",{children:i}):Object(C.jsx)(Q,{onClick:function(){u(y(!0))},children:i})})},q=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(W,{}),Object(C.jsx)(K,{}),Object(C.jsx)(J,{})]})},H=n(23),Y=n.n(H),Z=Object(c.b)()((function(e){var t=e.dispatch,n=Y.a.parse(window.location.search,{ignoreQueryPrefix:!0});return Object(r.useEffect)((function(){t({type:u,payload:n})})),Object(C.jsx)(r.Fragment,{children:e.children})}));o.a.render(Object(C.jsx)(c.a,{store:L,children:Object(C.jsx)(Z,{children:Object(C.jsx)(q,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.535cd6be.chunk.js.map