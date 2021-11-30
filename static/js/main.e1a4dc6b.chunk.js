(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(9),s=n.n(a),r=n(8),i=n(3),l=n(2),d=n(0),u=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("h1",{children:"todos"})})},j=n(6),b=function(e){var t=Object(c.useState)({title:"",errMsg:""}),n=Object(l.a)(t,2),o=n[0],a=n[1];return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.title.trim()?(e.addTodoProps(o.title),a({title:""})):a({errMsg:"Please Add Item"})},className:"form-container",children:[Object(d.jsx)("span",{children:o.errMsg}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(e){a(Object(i.a)(Object(i.a)({},o),{},Object(j.a)({},e.target.name,e.target.value)))}}),Object(d.jsx)("button",{className:"input-submit",children:"Submit"})]})},p=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),o=n[0],a=n[1],s=e.todo,r=s.completed,i=s.id,u=s.title,j={},b={};return o?j.display="none":b.display="none",Object(c.useEffect)((function(){return function(){}}),[]),Object(d.jsxs)("li",{className:"list-item",children:[Object(d.jsxs)("div",{onDoubleClick:function(){a(!0)},style:j,className:"todo-task disflex",children:[Object(d.jsx)("input",{type:"checkbox",className:"checkbox",checked:r,onChange:function(){return e.handleChangeProps(i)}}),Object(d.jsx)("span",{style:r?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,className:"title-text",children:u}),Object(d.jsx)("button",{onClick:function(){return e.deleteTodoProps(i)},className:"delete-btn",children:"Delete"})]}),Object(d.jsx)("input",{type:"text",style:b,className:"text-input",value:u,onChange:function(t){e.setUpdate(t.target.value,i)},onKeyDown:function(e){"Enter"===e.key&&a(!1)}})]})},O=function(e){return Object(d.jsx)("ul",{children:e.todos.map((function(t){return Object(d.jsx)(p,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},f=n(18),h=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"inner",children:[Object(d.jsx)(u,{}),Object(d.jsx)(b,{addTodoProps:function(e){var t={id:Object(f.a)(),title:e,completed:!1};o([].concat(Object(r.a)(n),[t]))}}),Object(d.jsx)(O,{todos:n,handleChangeProps:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){o(Object(r.a)(n.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){o(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})};n(15);s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e1a4dc6b.chunk.js.map