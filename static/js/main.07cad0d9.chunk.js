(this["webpackJsonpemployee-tracker"]=this["webpackJsonpemployee-tracker"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},60:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(25),r=n.n(a),s=(n(37),n(10)),l=n(3),i=(n(38),n(0));var o=function(){return Object(i.jsx)("img",{className:"homePic",src:"https://www.anthropocenemagazine.org/wp-content/uploads/2017/09/ET-finger.png",alt:"E.T's finger pointing"})};var h=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(o,{}),Object(i.jsx)("p",{className:"introP",style:{fontSize:"20px"},children:"Having trouble keeping track of your employees, E.T is here to help. With E.T, you can click on the search link above that will take you to a page displaying all your current employees non-sensitive information such as: full name, age, date of birth, cell phone and email address. You can also filter your table by the name of a certain employee."})]})},j=n(26),d=n(27),b=n(32),u=n(31);var m=function(e){return Object(i.jsx)("div",{className:"container",style:e.style,children:e.children})};n(40);var p=function(e){return Object(i.jsx)("form",{className:"search",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"employee",type:"text",className:"form-control",placeholder:"Type in the first and last name of the employee",id:"employee"}),Object(i.jsx)("button",{type:"submit",onClick:e.handleSearchFormSubmit,className:"btn btn-success searchOne",children:"Search"}),Object(i.jsx)("button",{type:"submit",onClick:e.handleSearchAllFormSubmit,className:"btn btn-success searchAll",children:"Search All"})]})})},x=n(72);n(41);var O=function(e){return console.log(e.search),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Age"}),Object(i.jsx)("th",{children:"DOB"}),Object(i.jsx)("th",{children:"Cell Phone #"}),Object(i.jsx)("th",{children:"Email Address"})]})}),e.employees.map((function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"".concat(e.name.first," ").concat(e.name.last)}),Object(i.jsx)("td",{children:e.dob.age}),Object(i.jsx)("td",{children:e.dob.date}),Object(i.jsx)("td",{children:e.cell}),Object(i.jsx)("td",{children:e.email})]})})})})),e.results.filter((function(t){return t.name.first.includes(e.search)})).map((function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"".concat(e.name.first," ").concat(e.name.last)}),Object(i.jsx)("td",{children:e.dob.age}),Object(i.jsx)("td",{children:e.dob.date}),Object(i.jsx)("td",{children:e.cell}),Object(i.jsx)("td",{children:e.email})]})})})}))]})})},f=n(29),v=n.n(f),y=function(){return v.a.get("https://randomuser.me/api/?results=50&nat=us&seed=foobar&format=prettyJSON")},g=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={search:"",employees:[],results:[]},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleSearchFormSubmit=function(t){t.preventDefault(),y().then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleSearchAllFormSubmit=function(t){t.preventDefault(),y().then((function(t){return e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(m,{style:{minHeight:"80%"},children:[Object(i.jsx)("h1",{className:"text-center",children:"Search for an employee"}),Object(i.jsx)(p,{handleSearchFormSubmit:this.handleSearchFormSubmit,handleSearchAllFormSubmit:this.handleSearchAllFormSubmit,handleInputChange:this.handleInputChange}),Object(i.jsx)(O,{employees:this.state.employees,search:this.state.search,results:this.state.results})]})})}}]),n}(c.Component);n(60);var S=function(){return Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light ",children:[Object(i.jsx)(s.b,{className:"navbar-brand",children:"Employee Tracker"}),Object(i.jsx)("div",{children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(s.b,{to:"/employee-tracker",className:"/"===window.location.pathname||"/about"===window.location.pathname?"nav-link active":"nav-link",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(s.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link",children:"Search"})})]})})]})};n(68);var k=function(){return Object(i.jsx)(s.a,{children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(S,{}),Object(i.jsx)(l.a,{exact:!0,path:"/employee-tracker",component:h}),Object(i.jsx)(l.a,{exact:!0,path:"/home",component:h}),Object(i.jsx)(l.a,{exact:!0,path:"/search",component:g})]})})};n(69);r.a.render(Object(i.jsx)(k,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.07cad0d9.chunk.js.map