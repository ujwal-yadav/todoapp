(this["webpackJsonptodos-app"]=this["webpackJsonptodos-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),l=c(7),i=c.n(l),a=(c(13),c(8)),r=c(2),o=c(6),d=c(0),j=function(e){var t,c=e.todos,n=e.setTodos,l=e.val,i=Object(s.useState)(!1),a=Object(r.a)(i,2),j=a[0],x=a[1],b=Object(s.useState)(),u=Object(r.a)(b,2);u[0],u[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{id:"todo-item",className:"flex mb-4 py-3 mx-3 py-2 items-center rounded-xl  border-gray-500 text-gray-400 text-2xl",children:[Object(d.jsx)("p",{id:"hs",className:"w-full",style:j?{color:"#1F2735"}:{},children:l}),Object(d.jsx)("a",{href:"#",title:"Hide",className:"text-gray-400 hover:text-blue-400 mr-2 pt-3 ",onClick:function(){x(0==j)},children:Object(d.jsx)("i",(t={className:"material-icons-outlined l",style:{fontSize:25}},Object(o.a)(t,"style",j?{color:"#60A5FA"}:{}),Object(o.a)(t,"children","visibility"),t))}),Object(d.jsx)("a",{href:"#",className:"text-gray-400 hover:text-red-400 ml-2  pt-2",onClick:function(){n(c.filter((function(e){return e!==l})))},children:Object(d.jsx)("i",{className:"material-icons-outlined ",style:{fontSize:25},children:"delete_outline"})})]})})},x=function(e){var t=e.todos,c=e.setTodos;return Object(d.jsx)("div",{children:t.map((function(e,s){return Object(d.jsx)(j,{todos:t,setTodos:c,val:e},s)}))})},b=function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),c=t[0],n=t[1],l=Object(s.useState)([]),i=Object(r.a)(l,2),o=i[0],j=i[1];return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"h-100 w-100 flex items-center justify-center bg-teal-lightest font-sans min-h-screen sm:text-3  bg-gray-900 ",children:Object(d.jsxs)("div",{id:"main",className:"bg-white rounded-xl  p-6 m-5 w-full lg:w-3/4  lg:max-w-xl md:max-w-2xl  sm:max-w-xl bg-opacity-10 bg-gray-400",children:[Object(d.jsxs)("div",{className:"relative",children:[Object(d.jsx)("h1",{className:"pb-5",children:"TO DO APP"}),Object(d.jsx)("a",{href:"#",className:" text-gray-400 hover:text-red-400 mt-2 absolute inset-y-0 right-1",children:Object(d.jsx)("i",{className:"material-icons",style:{fontSize:30},onClick:function(){1==window.confirm("All To Dos will be cleared !")&&j([])},children:"clear"})})]}),Object(d.jsx)("div",{className:"flex mt-4 mx-1 ",children:Object(d.jsxs)("div",{id:"inp-box",className:"flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg w-full py-1 px-3  text-white-900 opacity-40",children:[Object(d.jsx)("input",{spellCheck:"false",className:"h-full w-full outline-none bg-transparent text-2xl",type:"text",placeholder:"Add To Do...",id:"inp-text",onChange:function(e){n(e.target.value)}}),Object(d.jsx)("a",{href:"#",id:"addbtn",className:"text-gray-500 hover:text-gray-900 ml-2 mt-1 ",children:Object(d.jsx)("i",{className:"material-icons-outlined text-base ",style:{fontSize:40},onClick:function(){document.getElementById("inp-text").value?j((function(e){return[].concat(Object(a.a)(e),[c])})):alert("Please add a To Do !"),document.getElementById("inp-text").value=""},children:"add_circle"})})]})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"pt-5",children:Object(d.jsx)(x,{todos:o,setTodos:j})})})]})})})};var u=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,l=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),l(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.3b4573e8.chunk.js.map