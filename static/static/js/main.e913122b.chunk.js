(this["webpackJsonptest-link"]=this["webpackJsonptest-link"]||[]).push([[0],{10:function(e,n,t){e.exports={container:"Input_container__16MGs",input:"Input_input__24dvw",label:"Input_label__3-Wil",containerActive:"Input_containerActive__NKmK5"}},12:function(e,n,t){e.exports={message:"Links_message__SKLEX",heightAnim:"Links_heightAnim__3DO1x",appear:"Links_appear__3MU0v",urlMessage:"Links_urlMessage__2SEs9",textMessage:"Links_textMessage__2QzVe"}},15:function(e,n,t){e.exports={logIn:"Login_logIn__3Av5G",topBar:"Login_topBar__2FKYl",buttonContainer:"Login_buttonContainer___HDtm",errorContainer:"Login_errorContainer__3Rfne",appearFromBottom:"Login_appearFromBottom__25jzz"}},16:function(e,n,t){e.exports={contextMenu:"ContextMenu_contextMenu__3qmsv",contextMenuHidden:"ContextMenu_contextMenuHidden__2YEnK",item:"ContextMenu_item__2ziTi"}},3:function(e,n,t){e.exports={main:"Main_main__3de2d",inputContainer:"Main_inputContainer__35VOy",inputContainerText:"Main_inputContainerText__P3SPV",inputButton:"Main_inputButton__30NvA",loading:"Main_loading__1-56n",enbigger:"Main_enbigger__Z3RkF",blurEffect:"Main_blurEffect__3jrdr",h1Container:"Main_h1Container__2GtL-",rotation:"Main_rotation__1jzl2",topBar:"Main_topBar__2kkWe",logOut:"Main_logOut__zT7Ja",menuContainer:"Main_menuContainer__2znkv",menuContainerOpen:"Main_menuContainerOpen__2NfKL",menuCloseButton:"Main_menuCloseButton__RIzsQ",menuList:"Main_menuList__3YNmC",menuItem:"Main_menuItem__3mXI_",flexContainer:"Main_flexContainer__2QlCf",flexTop:"Main_flexTop__37RFt",flexBottom:"Main_flexBottom__1Y8lE",welcomeContainer:"Main_welcomeContainer__2rSMK"}},35:function(e,n,t){e.exports={container:"App_container__1MQN3"}},41:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),i=t(34),o=t.n(i),s=(t(41),t(35)),r=t.n(s),u=t(5),l=t(10),d=t.n(l),j=t(0);function b(e){var n=e.label,t=e.id,c=e.value,i=e.onChange,o=e.type,s=e.onKeyPress,r=Object(a.useState)(!1),l=Object(u.a)(r,2),b=l[0],p=l[1];return Object(j.jsxs)("div",{className:b?"".concat(d.a.container," ").concat(d.a.containerActive):d.a.container,children:[void 0!==n&&Object(j.jsx)("label",{className:d.a.label,htmlFor:t,children:n}),Object(j.jsx)("input",{onKeyPress:s,onChange:i,value:c,onFocus:function(){p(!0)},onBlur:function(){""===c&&p(!1)},id:t,className:d.a.input,type:o})]})}function p(e){var n=e.label,t=e.id,c=e.value,i=e.onChange,o=Object(a.useState)(!1),s=Object(u.a)(o,2),r=s[0],l=s[1];return Object(j.jsxs)("div",{className:r?"".concat(d.a.container," ").concat(d.a.containerActive):d.a.container,children:[Object(j.jsx)("label",{className:d.a.label,htmlFor:t,children:n}),Object(j.jsx)("input",{onChange:i,value:c,onFocus:function(){l(!0)},onBlur:function(){""===c&&l(!1)},id:t,className:d.a.input,type:"password"})]})}var m=t(14),f=t.n(m),x=t(21),h=t(18),_=t.n(h);function O(){return(O=Object(x.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/getuser");case 2:if(200===(n=e.sent).data.code){e.next=5;break}throw new Error(n);case 5:return e.abrupt("return",n.data.user);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(x.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/logout");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=t(15),C=t.n(g),w=t(2);function M(){var e=Object(a.useState)({username:"",password:""}),n=Object(u.a)(e,2),t=n[0],c=n[1],i=Object(w.f)(),o=Object(a.useState)(!1),s=Object(u.a)(o,2),r=s[0],l=s[1];return Object(j.jsxs)("div",{className:C.a.logIn,children:[Object(j.jsx)("div",{className:C.a.topBar,children:Object(j.jsx)("h1",{children:"Lnk"})}),Object(j.jsxs)("form",{onSubmit:function(e){var n,a;e.preventDefault(),(n=t.username,a=t.password,_.a.post("/api/login",{email:n,pass:a})).then((function(){i.push("/")})).catch((function(){l(!0),setTimeout((function(){l(!1)}),4e3)})),c({username:"",password:""})},children:[Object(j.jsx)(b,{onChange:function(e){c((function(n){return{username:e.target.value,password:n.password}}))},id:"username",value:t.username,label:"Email",type:"email"}),Object(j.jsx)(p,{onChange:function(e){c((function(n){return{username:n.username,password:e.target.value}}))},id:"password",value:t.password,label:"Password"}),Object(j.jsx)("div",{className:C.a.buttonContainer,children:Object(j.jsx)("button",{type:"submit",children:"Log in"})})]}),r&&Object(j.jsx)("div",{className:r?C.a.errorContainer:"",children:"Wrong email or password :("})]})}var k=t(24),N=t(3),L=t.n(N),y=t(12),S=t.n(y);function B(e){var n=e.content,t=e.openContextMenu,a=[{label:"Copy",fn:function(){navigator.clipboard.writeText(n)}}];return Object(j.jsx)("div",{onContextMenu:function(e){e.preventDefault();var n=e.clientX,c=e.clientY;t(n,c,a)},className:"".concat(S.a.textMessage," ").concat(S.a.message),children:Object(j.jsx)("span",{children:n})})}function I(e){var n=e.content,t=e.openContextMenu,a=[{label:"Go to URL",fn:function(){window.open(n,"_blank")}},{label:"Copy URL",fn:function(){navigator.clipboard.writeText(n)}}];return Object(j.jsx)("div",{onContextMenu:function(e){e.preventDefault();var n=e.clientX,c=e.clientY;t(n,c,a)},onClick:function(){return e=n,void(window.electron?window.electron.openURL(e):window.open(e));var e},className:"".concat(S.a.message," ").concat(S.a.urlMessage),children:Object(j.jsx)("span",{children:n})})}var E=function(e){var n=e.links,t=e.openContextMenu,a=function(e){return"url"===e.type?Object(j.jsx)(I,{openContextMenu:t,content:e.message}):Object(j.jsx)(B,{openContextMenu:t,content:e.message})},c=n.map((function(e,t){return Object(j.jsx)("div",{children:a(e)},n.length-t)}));return Object(j.jsx)("div",{className:S.a.linksContainer,children:c})},F=t(16),T=t.n(F);var A=function(e){var n=e.context;return Object(j.jsx)("div",{style:{left:"".concat(n.x,"px"),top:"".concat(n.y,"px")},className:n.visible?T.a.contextMenu:"".concat(T.a.contextMenu," ").concat(T.a.contextMenuHidden),children:n.items.map((function(e){return Object(j.jsx)("div",{className:T.a.item,onClick:function(){return e.fn()},children:Object(j.jsx)("span",{children:e.label})},e.label)}))})},K="wss://lnk.mssnapps.com/ws";function R(){var e=Object(a.useState)({email:"",firstname:"",id:0,key:"",lastname:"",username:""}),n=Object(u.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)([]),o=Object(u.a)(i,2),s=o[0],r=o[1],l=Object(a.useState)(null),d=Object(u.a)(l,2),p=d[0],m=d[1],f=Object(a.useState)(!1),x=Object(u.a)(f,2),h=x[0],_=x[1],g=Object(a.useState)(""),C=Object(u.a)(g,2),M=C[0],N=C[1],y=Object(w.f)(),S=Object(a.useState)(!1),B=Object(u.a)(S,2),I=B[0],F=B[1],T=Object(a.useState)(!1),R=Object(u.a)(T,2),z=R[0],P=R[1],D=null,J=Object(a.useState)({x:0,y:0,visible:!1,items:[]}),W=Object(u.a)(J,2),Y=W[0],G=W[1];Object(a.useEffect)((function(){window.electron&&(window.electron.getIsNotificationActive().then((function(e){F(e)})),window.electron.getIsOpenLnk().then((function(e){P(e)})))}),[]);var H=Object(a.useState)(!1),Q=Object(u.a)(H,2),U=Q[0],X=Q[1],V=function(){if(""!==M){var e=JSON.stringify({code:"message",id:t.key,message:M});p.send(e),N("")}};Object(a.useEffect)((function(){(function(){return O.apply(this,arguments)})().then((function(e){c(e),m(new WebSocket(K)),window.electron&&window.electron.sendId(e)})).catch((function(){y.push("/login")}))}),[y]),Object(a.useEffect)((function(){""!==t.key&&null!==p&&(p.addEventListener("message",(function(e){var n=JSON.parse(e.data);"message"===n.code&&r(n.content),"success"===n.code&&r(n.content)})),p.addEventListener("open",(function(){_(!0);var e=JSON.stringify({code:"init",id:t.key,message:""});p.send(e)})),p.addEventListener("close",(function(){m(new WebSocket(K))})),p.addEventListener("error",(function(){_(!1),m(null)})))}),[p,t]);var q=function(){(function(){return v.apply(this,arguments)})().then((function(){y.push("/login")})).catch((function(){alert("There was some problem logging out! :(")}))};return Object(j.jsxs)("div",{onClick:function(){G((function(e){return Object(k.a)(Object(k.a)({},e),{},{visible:!1})}))},ref:function(e){return D=e},className:L.a.main,children:[!h&&Object(j.jsx)("div",{className:L.a.loading,children:Object(j.jsx)("div",{className:L.a.h1Container,children:Object(j.jsx)("h1",{children:"Lnk"})})}),Object(j.jsxs)("div",{className:U?"".concat(L.a.menuContainer," ").concat(L.a.menuContainerOpen):L.a.menuContainer,children:[Object(j.jsx)("button",{className:L.a.menuCloseButton,onClick:function(){return X(!1)},children:Object(j.jsx)("svg",{"aria-hidden":"false",width:"12",height:"12",viewBox:"0 0 12 12",children:Object(j.jsx)("polygon",{fill:"currentColor",fillRule:"evenodd",points:"11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"})})}),Object(j.jsxs)("ul",{className:L.a.menuList,children:[window.electron&&Object(j.jsxs)("li",{className:L.a.menuItem,children:[Object(j.jsx)("label",{htmlFor:"isNotCheck",children:"Notifications"}),Object(j.jsx)("input",{id:"isNotCheck",onChange:function(e){window.electron&&window.electron.setIsNotificationActive(e.target.checked).then((function(e){F(e)})).catch((function(e){console.error("Error communicating with Electron",e)}))},checked:I,type:"checkbox"})]}),window.electron&&Object(j.jsxs)("li",{className:L.a.menuItem,children:[Object(j.jsx)("label",{htmlFor:"openLnk",children:"Open "}),Object(j.jsx)("input",{id:"openLnk",onChange:function(e){window.electron&&window.electron.setIsOpenLnk(e.target.checked).then((function(e){P(e)})).catch((function(e){console.error("Error communicating with electron",e)}))},checked:z,type:"checkbox"})]}),Object(j.jsx)("li",{onClick:function(){return q()},className:L.a.menuItem,children:"Log out"})]})]}),Object(j.jsxs)("div",{className:L.a.flexContainer,children:[Object(j.jsxs)("div",{className:L.a.flexTop,children:[Object(j.jsxs)("div",{className:L.a.topBar,children:[Object(j.jsx)("h1",{children:"Lnk"}),Object(j.jsx)("button",{className:L.a.logOut,onClick:function(){return X(!0)},children:"Menu"})]}),Object(j.jsx)("div",{className:L.a.welcomeContainer,children:Object(j.jsxs)("span",{children:["Welcome ",t.username,"!"]})}),Object(j.jsxs)("div",{className:L.a.inputContainer,children:[Object(j.jsx)("div",{className:L.a.inputContainerText,children:Object(j.jsx)(b,{onKeyPress:function(e){"Enter"===e.code&&V()},onChange:function(e){N(e.target.value)},value:M,type:"text"})}),Object(j.jsx)("button",{disabled:""===M,className:L.a.inputButton,onClick:function(){return V()},children:"Send"})]})]}),Object(j.jsx)("div",{className:L.a.flexBottom,children:Object(j.jsx)(E,{openContextMenu:function(e,n,t){var a,c=null===(a=D)||void 0===a?void 0:a.getBoundingClientRect(),i=e-c.x,o=n-c.y;G({x:i,y:o,visible:!0,items:t})},links:s})})]}),Object(j.jsx)(A,{context:Y})]})}var z=t(17);function P(){return Object(j.jsx)(z.a,{basename:"/",children:Object(j.jsx)("div",{className:r.a.container,children:Object(j.jsxs)(w.c,{children:[Object(j.jsx)(w.a,{path:"/login",children:Object(j.jsx)(M,{})}),Object(j.jsx)(w.a,{path:"/",children:Object(j.jsx)(R,{})})]})})})}var D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),D()}},[[67,1,2]]]);
//# sourceMappingURL=main.e913122b.chunk.js.map