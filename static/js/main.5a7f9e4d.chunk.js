(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{63:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(46),a=(c(63),c(2));var r=function(){return Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"TODO APP"})})},s=c(31),o=c(16),l=c(6),j=c(87),d=c(50),b=c.n(d),u=c(35),O=c(49),f=c.n(O),x=c(44),m=c.n(x),h=Object(u.a)(j.a)({textAlign:"left",background:"#6aa6e1"});function p(e){var t=e.todoList,c=e.CheckBtn,i=e.DeleteBtn;return Object(a.jsx)(n.Fragment,{children:Object(a.jsx)("div",{className:"List",children:t.map((function(e){return Object(a.jsxs)("div",{className:"todo",style:{display:e.isDelete?"none":"flex"},onClick:function(){c(e.id)},children:[Object(a.jsx)(h,{disabled:e.isComplete,fullWidth:!0,variant:"contained",endIcon:e.isComplete&&Object(a.jsx)(m.a,{}),children:e.todo}),Object(a.jsx)(j.a,{color:e.isComplete?"error":"primary",children:e.isComplete?Object(a.jsx)(f.a,{onClick:function(){e.isComplete?i(e.id):c(e.id)}}):Object(a.jsx)(m.a,{onClick:function(){e.isComplete?i(e.id):c(e.id)}})})]},e.id)}))})})}var v=Object(n.memo)(p),g=c(88),C="TODO_APP";var k=function(){var e=Object(n.useRef)(""),t=Object(n.useState)(""),c=Object(l.a)(t,2),i=c[0],r=c[1],d=Object(n.useState)([]),u=Object(l.a)(d,2),O=u[0],f=u[1];Object(n.useEffect)((function(){localStorage.getItem(C)&&f(JSON.parse(localStorage.getItem(C)))}),[]),Object(n.useEffect)((function(){var e;O.length>=1&&localStorage.setItem(C,JSON.stringify((e=!0,O.filter((function(t){return t.isDelete!==e})))))}),[O]);var x=Object(n.useCallback)((function(e){f((function(t){return t.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{isComplete:!0}):t}))}))}),[]),m=Object(n.useCallback)((function(e){f((function(t){return t.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{isDelete:!0}):t}))}))}),[]);return Object(a.jsxs)(n.Fragment,{children:[Object(a.jsxs)("div",{className:"Box-add",children:[Object(a.jsx)("div",{className:"Box-input",tabIndex:1,children:Object(a.jsx)("input",{maxLength:25,placeholder:"Add a todo",autoFocus:!0,ref:e,onChange:function(e){r(e.target.value)},value:i})}),Object(a.jsx)("div",{className:"Box-btn",children:Object(a.jsx)(j.a,{onClick:function(){e.current.focus(),f([].concat(Object(o.a)(O),[{todo:i,id:Object(g.a)(),isComplete:!1,isDelete:!1}])),r("")},disabled:0===i.length||" "===i[0],color:"primary",variant:"contained",size:"small",children:Object(a.jsx)(b.a,{})})})]}),Object(a.jsx)("div",{className:"List-container",children:Object(a.jsx)(v,{todoList:O,CheckBtn:x,DeleteBtn:m})})]})};var B=function(){return Object(a.jsx)("main",{children:Object(a.jsx)(k,{})})};var D=function(){return Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(r,{}),Object(a.jsx)(B,{})]})},N=document.getElementById("root");Object(i.createRoot)(N).render(Object(a.jsx)(n.StrictMode,{children:Object(a.jsx)(D,{})}))}},[[70,1,2]]]);
//# sourceMappingURL=main.5a7f9e4d.chunk.js.map