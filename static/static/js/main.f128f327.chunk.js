(this["webpackJsonptest-link"]=this["webpackJsonptest-link"]||[]).push([[0],{10:function(e,n,t){e.exports={container:"Input_container__16MGs",input:"Input_input__24dvw",label:"Input_label__3-Wil",containerActive:"Input_containerActive__NKmK5"}},11:function(e,n,t){e.exports={message:"Links_message__SKLEX",heightAnim:"Links_heightAnim__3DO1x",appear:"Links_appear__3MU0v",image:"Links_image__4rLoB",urlMessage:"Links_urlMessage__2SEs9",textMessage:"Links_textMessage__2QzVe"}},17:function(e,n,t){e.exports={logIn:"Login_logIn__3Av5G",topBar:"Login_topBar__2FKYl",buttonContainer:"Login_buttonContainer___HDtm",errorContainer:"Login_errorContainer__3Rfne",appearFromBottom:"Login_appearFromBottom__25jzz"}},18:function(e,n,t){e.exports={contextMenu:"ContextMenu_contextMenu__3qmsv",contextMenuHidden:"ContextMenu_contextMenuHidden__2YEnK",item:"ContextMenu_item__2ziTi"}},2:function(e,n,t){e.exports={main:"Main_main__3de2d",inputContainer:"Main_inputContainer__35VOy",inputContainerText:"Main_inputContainerText__P3SPV",inputButton:"Main_inputButton__30NvA",uploadImageContainer:"Main_uploadImageContainer__2-OV5",uploadImage:"Main_uploadImage__3UDpu",uploadImageSvg:"Main_uploadImageSvg__3Bl80",loadingSvg:"Main_loadingSvg__3Lonw",rotate:"Main_rotate__fUcs_",loading:"Main_loading__1-56n",enbigger:"Main_enbigger__Z3RkF",blurEffect:"Main_blurEffect__3jrdr",h1Container:"Main_h1Container__2GtL-",rotation:"Main_rotation__1jzl2",topBar:"Main_topBar__2kkWe",logOut:"Main_logOut__zT7Ja",menuContainer:"Main_menuContainer__2znkv",menuContainerOpen:"Main_menuContainerOpen__2NfKL",menuCloseButton:"Main_menuCloseButton__RIzsQ",menuList:"Main_menuList__3YNmC",menuItem:"Main_menuItem__3mXI_",flexContainer:"Main_flexContainer__2QlCf",flexTop:"Main_flexTop__37RFt",flexBottom:"Main_flexBottom__1Y8lE",welcomeContainer:"Main_welcomeContainer__2rSMK"}},38:function(e,n,t){e.exports={container:"App_container__1MQN3"}},45:function(e,n,t){},71:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),i=t(37),o=t.n(i),s=(t(45),t(38)),r=t.n(s),l=t(5),u=t(10),d=t.n(u),j=t(0);function b(e){var n=e.label,t=e.id,c=e.value,i=e.onChange,o=e.type,s=e.onKeyPress,r=Object(a.useState)(!1),u=Object(l.a)(r,2),b=u[0],m=u[1];return Object(j.jsxs)("div",{className:b?"".concat(d.a.container," ").concat(d.a.containerActive):d.a.container,children:[void 0!==n&&Object(j.jsx)("label",{className:d.a.label,htmlFor:t,children:n}),Object(j.jsx)("input",{onKeyPress:s,onChange:i,value:c,onFocus:function(){m(!0)},onBlur:function(){""===c&&m(!1)},id:t,className:d.a.input,type:o})]})}function m(e){var n=e.label,t=e.id,c=e.value,i=e.onChange,o=Object(a.useState)(!1),s=Object(l.a)(o,2),r=s[0],u=s[1];return Object(j.jsxs)("div",{className:r?"".concat(d.a.container," ").concat(d.a.containerActive):d.a.container,children:[Object(j.jsx)("label",{className:d.a.label,htmlFor:t,children:n}),Object(j.jsx)("input",{onChange:i,value:c,onFocus:function(){u(!0)},onBlur:function(){""===c&&u(!1)},id:t,className:d.a.input,type:"password"})]})}var p=t(16),f=t(24),h=t(14),x=t.n(h);function O(){return(O=Object(f.a)(Object(p.a)().mark((function e(){var n;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/getuser");case 2:if(200===(n=e.sent).data.code){e.next=5;break}throw new Error(n);case 5:return e.abrupt("return",n.data.user);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(f.a)(Object(p.a)().mark((function e(){var n;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/logout");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=t(17),v=t.n(_),w=t(3);function C(){var e=Object(a.useState)({username:"",password:""}),n=Object(l.a)(e,2),t=n[0],c=n[1],i=Object(w.f)(),o=Object(a.useState)(!1),s=Object(l.a)(o,2),r=s[0],u=s[1];return Object(j.jsxs)("div",{className:v.a.logIn,children:[Object(j.jsx)("div",{className:v.a.topBar,children:Object(j.jsx)("h1",{children:"Lnk"})}),Object(j.jsxs)("form",{onSubmit:function(e){var n,a;e.preventDefault(),(n=t.username,a=t.password,x.a.post("/api/login",{email:n,pass:a})).then((function(){i.push("/")})).catch((function(){u(!0),setTimeout((function(){u(!1)}),4e3)})),c({username:"",password:""})},children:[Object(j.jsx)(b,{onChange:function(e){c((function(n){return{username:e.target.value,password:n.password}}))},id:"username",value:t.username,label:"Email",type:"email"}),Object(j.jsx)(m,{onChange:function(e){c((function(n){return{username:n.username,password:e.target.value}}))},id:"password",value:t.password,label:"Password"}),Object(j.jsx)("div",{className:v.a.buttonContainer,children:Object(j.jsx)("button",{type:"submit",children:"Log in"})})]}),r&&Object(j.jsx)("div",{className:r?v.a.errorContainer:"",children:"Wrong email or password :("})]})}var M=t(26),k=t(40),N="wsid";function y(){return Object(a.useMemo)((function(){if("undefined"===typeof window)return"";var e=window.localStorage.getItem(N);if(e)return e;var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";return Object(k.a)(Array(e)).map((function(){return Math.floor(Math.random()*n.length)})).map((function(e){return n.charAt(e)})).join("")}();return window.localStorage.setItem(N,n),n}),[])}var L=t(2),S=t.n(L),I=t(11),B=t.n(I);function E(e){var n=e.content,t=e.openContextMenu,a=[{label:"Copy image URL",fn:function(){navigator.clipboard.writeText(n)}},{label:"Open in new tab",fn:function(){window.open(n)}}];return Object(j.jsx)("div",{onContextMenu:function(e){e.preventDefault();var n=e.clientX||0,c=e.clientY||0;t(n,c,a)},className:"".concat(B.a.message," ").concat(B.a.textMessage),children:Object(j.jsx)("img",{className:B.a.image,src:n,alt:"image sent by lnk"})})}function F(e){var n=e.content,t=e.openContextMenu,a=[{label:"Copy",fn:function(){navigator.clipboard.writeText(n)}}];return Object(j.jsx)("div",{onContextMenu:function(e){e.preventDefault();var n=e.clientX,c=e.clientY;t(n,c,a)},className:"".concat(B.a.textMessage," ").concat(B.a.message),children:Object(j.jsx)("span",{children:n})})}function A(e){var n=e.content,t=e.openContextMenu,a=[{label:"Go to URL",fn:function(){window.open(n,"_blank")}},{label:"Copy URL",fn:function(){navigator.clipboard.writeText(n)}}];return Object(j.jsx)("div",{onContextMenu:function(e){e.preventDefault();var n=e.clientX,c=e.clientY;t(n,c,a)},onClick:function(){return e=n,void(window.electron?window.electron.openURL(e):window.open(e));var e},className:"".concat(B.a.message," ").concat(B.a.urlMessage),children:Object(j.jsx)("span",{children:n})})}var T=function(e){var n=e.links,t=e.openContextMenu,a=function(e){switch(e.type){case"url":return Object(j.jsx)(A,{openContextMenu:t,content:e.message});case"img":return Object(j.jsx)(E,{openContextMenu:t,content:e.message});default:return Object(j.jsx)(F,{openContextMenu:t,content:e.message})}},c=n.map((function(e){return Object(j.jsx)("div",{children:a(e)},e.uid)}));return Object(j.jsx)("div",{className:B.a.linksContainer,children:c})},z=t(18),K=t.n(z);var R=function(e){var n=e.context;return Object(j.jsx)("div",{style:{left:"".concat(n.x,"px"),top:"".concat(n.y,"px")},className:n.visible?K.a.contextMenu:"".concat(K.a.contextMenu," ").concat(K.a.contextMenuHidden),children:n.items.map((function(e){return Object(j.jsx)("div",{className:K.a.item,onClick:function(){return e.fn()},children:Object(j.jsx)("span",{children:e.label})},e.label)}))})},D="wss://lnk.mssnapps.com/ws";function J(){var e=y(),n=Object(a.useState)({email:"",firstname:"",id:0,key:"",lastname:"",username:""}),t=Object(l.a)(n,2),c=t[0],i=t[1],o=Object(a.useState)([]),s=Object(l.a)(o,2),r=s[0],u=s[1],d=Object(a.useState)(null),m=Object(l.a)(d,2),p=m[0],f=m[1],h=Object(a.useState)(!1),_=Object(l.a)(h,2),v=_[0],C=_[1],k=Object(a.useState)(""),N=Object(l.a)(k,2),L=N[0],I=N[1],B=Object(w.f)(),E=Object(a.useState)(!1),F=Object(l.a)(E,2),A=F[0],z=F[1],K=Object(a.useState)(!1),J=Object(l.a)(K,2),P=J[0],W=J[1],U=Object(a.useState)(!1),Y=Object(l.a)(U,2),V=Y[0],H=Y[1],X=null,G=Object(a.useState)({x:0,y:0,visible:!1,items:[]}),Q=Object(l.a)(G,2),q=Q[0],Z=Q[1];Object(a.useEffect)((function(){window.electron&&(window.electron.getIsNotificationActive().then((function(e){z(e)})),window.electron.getIsOpenLnk().then((function(e){W(e)})))}),[]);var $=Object(a.useState)(!1),ee=Object(l.a)($,2),ne=ee[0],te=ee[1],ae=function(n){var t="";if(n)t=JSON.stringify({code:"message",id:c.key,message:n,sender:e});else{if(""===L)return;t=JSON.stringify({code:"message",id:c.key,message:L,sender:e}),I("")}p.send(t)};Object(a.useEffect)((function(){(function(){return O.apply(this,arguments)})().then((function(e){i(e),f(new WebSocket(D)),window.electron&&window.electron.sendId(e)})).catch((function(){B.push("/login")}))}),[B]),Object(a.useEffect)((function(){""!==c.key&&null!==p&&(p.addEventListener("message",(function(e){var n=JSON.parse(e.data);"message"===n.code&&u(n.content),"success"===n.code&&u(n.content)})),p.addEventListener("open",(function(){C(!0);var n=JSON.stringify({code:"init",id:c.key,message:"",sender:e});p.send(n)})),p.addEventListener("close",(function(){f(new WebSocket(D))})),p.addEventListener("error",(function(){C(!1),f(null)})))}),[p,c]);var ce=function(){(function(){return g.apply(this,arguments)})().then((function(){B.push("/login")})).catch((function(){alert("There was some problem logging out! :(")}))};return Object(j.jsxs)("div",{onClick:function(){Z((function(e){return Object(M.a)(Object(M.a)({},e),{},{visible:!1})}))},ref:function(e){return X=e},className:S.a.main,children:[!v&&Object(j.jsx)("div",{className:S.a.loading,children:Object(j.jsx)("div",{className:S.a.h1Container,children:Object(j.jsx)("h1",{children:"Lnk"})})}),Object(j.jsxs)("div",{className:ne?"".concat(S.a.menuContainer," ").concat(S.a.menuContainerOpen):S.a.menuContainer,children:[Object(j.jsx)("button",{className:S.a.menuCloseButton,onClick:function(){return te(!1)},children:Object(j.jsx)("svg",{"aria-hidden":"false",width:"12",height:"12",viewBox:"0 0 12 12",children:Object(j.jsx)("polygon",{fill:"currentColor",fillRule:"evenodd",points:"11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"})})}),Object(j.jsxs)("ul",{className:S.a.menuList,children:[window.electron&&Object(j.jsxs)("li",{className:S.a.menuItem,children:[Object(j.jsx)("label",{htmlFor:"isNotCheck",children:"Notifications"}),Object(j.jsx)("input",{id:"isNotCheck",onChange:function(e){window.electron&&window.electron.setIsNotificationActive(e.target.checked).then((function(e){z(e)})).catch((function(e){console.error("Error communicating with Electron",e)}))},checked:A,type:"checkbox"})]}),window.electron&&Object(j.jsxs)("li",{className:S.a.menuItem,children:[Object(j.jsx)("label",{htmlFor:"openLnk",children:"Open "}),Object(j.jsx)("input",{id:"openLnk",onChange:function(e){window.electron&&window.electron.setIsOpenLnk(e.target.checked).then((function(e){W(e)})).catch((function(e){console.error("Error communicating with electron",e)}))},checked:P,type:"checkbox"})]}),Object(j.jsx)("li",{onClick:function(){return ce()},className:S.a.menuItem,children:"Log out"}),Object(j.jsx)("li",{onClick:function(){c.key&&confirm("Are you sure you want to delete the messages?")&&(null===p||void 0===p||p.send(JSON.stringify({code:"clear",message:"clear",id:c.key,sender:e})),te(!1))},className:S.a.menuItem,children:"Clear messages"})]})]}),Object(j.jsxs)("div",{className:S.a.flexContainer,children:[Object(j.jsxs)("div",{className:S.a.flexTop,children:[Object(j.jsxs)("div",{className:S.a.topBar,children:[Object(j.jsx)("h1",{children:"Lnk"}),Object(j.jsx)("button",{className:S.a.logOut,onClick:function(){return te(!0)},children:"Menu"})]}),Object(j.jsx)("div",{className:S.a.welcomeContainer,children:Object(j.jsxs)("span",{children:["Welcome ",c.username,"!"]})}),Object(j.jsxs)("div",{className:S.a.inputContainer,children:[Object(j.jsx)("div",{className:S.a.inputContainerText,children:Object(j.jsx)(b,{onKeyPress:function(e){"Enter"===e.code&&ae()},onChange:function(e){I(e.target.value)},value:L,type:"text"})}),Object(j.jsx)("button",{disabled:""===L,className:S.a.inputButton,onClick:function(){return ae()},children:"Send"}),Object(j.jsxs)("div",{className:S.a.uploadImageContainer,children:[Object(j.jsx)("label",{className:S.a.uploadImage,htmlFor:"image-upload",children:V?Object(j.jsxs)("svg",{className:S.a.loadingSvg,xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(j.jsx)("path",{d:"M22 12c0 6-4.39 10-9.806 10C7.792 22 4.24 19.665 3 16"}),Object(j.jsx)("path",{d:"M2 12C2 6 6.39 2 11.806 2 16.209 2 19.76 4.335 21 8"}),Object(j.jsx)("path",{d:"M7 17l-4-1-1 4"}),Object(j.jsx)("path",{d:"M17 7l4 1 1-4"})]}):Object(j.jsxs)("svg",{className:S.a.uploadImageSvg,xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"#dddbdb",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(j.jsx)("path",{d:"M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6z"}),Object(j.jsx)("circle",{cx:"8.5",cy:"8.5",r:"2.5"}),Object(j.jsx)("path",{d:"M14.526 12.621L6 22h12.133A3.867 3.867 0 0 0 22 18.133V18c0-.466-.175-.645-.49-.99l-4.03-4.395a2 2 0 0 0-2.954.006z"})]})}),Object(j.jsx)("input",{disabled:V,onChange:function(e){var n=e.target.files[0];if(n){H(!0);var t=new FormData;t.append("file",n),x.a.post("/api/upload-file",t).then((function(e){var n=e.data.url;ae(n)})).finally((function(){H(!1),e.target.value=null}))}},style:{display:"none"},type:"file",id:"image-upload",name:"image",accept:"*/*"})]})]})]}),Object(j.jsx)("div",{className:S.a.flexBottom,children:Object(j.jsx)(T,{openContextMenu:function(e,n,t){var a,c=null===(a=X)||void 0===a?void 0:a.getBoundingClientRect(),i=e-c.x,o=n-c.y;Z({x:i,y:o,visible:!0,items:t})},links:r})})]}),Object(j.jsx)(R,{context:q})]})}var P=t(19);function W(){return Object(j.jsx)(P.a,{basename:"/",children:Object(j.jsx)("div",{className:r.a.container,children:Object(j.jsxs)(w.c,{children:[Object(j.jsx)(w.a,{path:"/login",children:Object(j.jsx)(C,{})}),Object(j.jsx)(w.a,{path:"/",children:Object(j.jsx)(J,{})})]})})})}var U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,72)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root")),U()}},[[71,1,2]]]);
//# sourceMappingURL=main.f128f327.chunk.js.map