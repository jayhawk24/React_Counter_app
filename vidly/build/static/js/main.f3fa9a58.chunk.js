(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{49:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(25),o=n.n(c),i=(n(49),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))}),l=(n(50),n(51),n(10)),u=n(3),d=n(5),b=n(6),h=n(8),p=n(7),m=n(19),j=n(4),v=n(20),f=n(2),O=n.n(f),g=n(11),x=n(18),k=n.n(x);var y={init:function(){},log:function(e){console.error(e)}};function w(e){k.a.defaults.headers.common["x-auth-token"]=e}k.a.defaults.baseURL="https://infinite-inlet-62675.herokuapp.com/api",k.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(y.log(e),m.b.error("Unexpected error occured")),Promise.reject(e)}));var S={get:k.a.get,post:k.a.post,put:k.a.put,delete:k.a.delete,setJwt:w},C=n(41),N=n.n(C),I="token",P="/auth";function R(e,t){return A.apply(this,arguments)}function A(){return(A=Object(g.a)(O.a.mark((function e(t,n){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.post(P,{email:t,password:n});case 2:r=e.sent,a=r.data,localStorage.setItem(I,a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){try{var e=localStorage.getItem(I);return N()(e)}catch(t){return null}}function _(e){localStorage.setItem(I,e)}w(localStorage.getItem(I));var G=function(e){e.path;var t=e.component,n=e.render,a=Object(v.a)(e,["path","component","render"]);return Object(r.jsx)(j.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){return D()?t?Object(r.jsx)(t,Object(u.a)({},e)):n(e):Object(r.jsx)(j.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},L=n(31),M="/movies",F=function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.get(M));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.delete("/movies/"+t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.get("/movies/"+t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(g.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._id){e.next=4;break}return delete(n=Object(u.a)({},t))._id,e.abrupt("return",S.put("/movies/"+t._id,n));case 4:return e.abrupt("return",S.post(M,t));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e){for(var t=e.itemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChange,o=Math.ceil(t/n),i=[],l=1;l<=o;l++)i.push(l);return 1===o?null:Object(r.jsx)(s.a.Fragment,{children:Object(r.jsx)("nav",{"aria-label":"Page navigation example",children:Object(r.jsx)("ul",{className:"pagination",children:i.map((function(e){return Object(r.jsx)("li",{className:e===a?"page-item active":"page-item",children:Object(r.jsx)("a",{className:"page-link",onClick:function(){return c(e)},children:e})},e)}))})})})},z=n(21),E=n.n(z);var J=function(e){var t=e.lgenres,n=e.genreClicked,a=e.selectedGenre;if(!t)return null;var s=t.map((function(e){return Object(r.jsx)("li",{className:a===e.name?"list-group-item list-group-item-action active":"list-group-item list-group-item-action",onClick:function(){return n(e.name)},children:e.name},e._id)}));return Object(r.jsx)("ul",{className:"list-group",children:s})};function V(){return S.get("/genres")}var Q=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),Object(r.jsx)("i",{onClick:e.onClick,className:t,"aria-hidden":"true",style:{cursor:"pointer"}})},H=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).raiseSort=function(t){var n=Object(u.a)({},e.props.sortColumn);n.path===t?n.order="asc"===n.order?"desc":"asc":(n.path=t,n.order="asc"),e.props.onSort(n)},e.renderSortIcon=function(t){return t.path!==e.props.sortColumn.path?null:"asc"===e.props.sortColumn.order?Object(r.jsx)("i",{className:"fa fa-sort-asc"}):Object(r.jsx)("i",{className:"fa fa-sort-desc"})},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:this.props.columns.map((function(t){return Object(r.jsxs)("th",{className:"clickable",onClick:function(){return e.raiseSort(t.path)},children:[t.label," ",e.renderSortIcon(t)]},t.path||t.key)}))})})}}]),n}(a.Component),K=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).renderCell=function(e,t){return t.content?t.content(e):E.a.get(e,t.path)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.columns;return Object(r.jsx)("tbody",{children:n.map((function(t){return Object(r.jsx)("tr",{children:a.map((function(n){return Object(r.jsx)("td",{children:e.renderCell(t,n)},t._id+(n.path||n.key))}))},t._id)}))})}}]),n}(a.Component),W=function(e){var t=e.columns,n=e.sortColumn,a=e.onSort,s=e.data;return Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)(H,{columns:t,sortColumn:n,onSort:a}),Object(r.jsx)(K,{data:s,columns:t})]})},X=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n),(e=t.call(this)).columns=[{path:"title",label:"Title",content:function(e){return Object(r.jsx)(l.b,{to:"/movies/".concat(e._id),children:e.title})}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return Object(r.jsx)(Q,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}];var a=D();return a&&a.isAdmin&&e.columns.push(e.deleteColumn()),e}return Object(b.a)(n,[{key:"deleteColumn",value:function(){var e=this;return{key:"delete",content:function(t){return Object(r.jsx)("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger btn-sm",children:"Delete"})}}}},{key:"render",value:function(){var e=this.props,t=e.filtmovies,n=e.sortColumn,a=e.onSort;return Object(r.jsx)(W,{columns:this.columns,data:t,sortColumn:n,onSort:a})}}]),n}(a.Component),Y=n(43),Z=n(23),$=n(12),ee=n.n($),te=function(e){var t=e.name,n=e.label,a=e.error,s=Object(v.a)(e,["name","label","error"]);return Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:t,children:n}),Object(r.jsx)("input",Object(u.a)(Object(u.a)({},s),{},{id:t,name:t,className:"form-control"})),a&&Object(r.jsx)("div",{className:"alert alert-danger",children:a})]})},ne=function(e){var t=e.name,n=e.label,a=e.error,s=e.options,c=Object(v.a)(e,["name","label","error","options"]);return Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:t,children:n}),Object(r.jsx)("select",Object(u.a)(Object(u.a)({},c),{},{id:t,name:t,className:"form-control",children:s.map((function(e){return"All Genres"===e.name||null===e.name?Object(r.jsx)("option",{disabled:!0}):Object(r.jsx)("option",{value:e._id,children:e.name},e._id)}))})),a&&Object(r.jsx)("div",{className:"alert alert-danger",children:a})]})},re=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{},errors:{}},e.validateProperty=function(t){var n=t.name,r=t.value,a=Object(Z.a)({},n,r),s=Object(Z.a)({},n,e.schema[n]),c=ee.a.validate(a,s).error;return c?c.details[0].message:null},e.validate=function(){var t=ee.a.validate(e.state.data,e.schema,{abortEarly:!1});if(!t.error)return null;var n,r={},a=Object(Y.a)(t.error.details);try{for(a.s();!(n=a.n()).done;){var s=n.value;r[s.path[0]]=s.message}}catch(c){a.e(c)}finally{a.f()}return r},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),n||e.doSubmit()},e.handleChange=function(t){var n=t.currentTarget,r=Object(u.a)({},e.state.errors),a=e.validateProperty(n);a?r[n.name]=a:delete r[n.name];var s=Object(u.a)({},e.state.data);s[n.name]=n.value,e.setState({data:s,errors:r})},e}return Object(b.a)(n,[{key:"renderButton",value:function(e){return Object(r.jsx)("button",{disabled:this.validate(),className:"btn btn-primary",children:e})}},{key:"renderInput",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=this.state,c=s.data,o=s.errors;return Object(r.jsx)(te,{name:e,value:c[e],label:t,onChange:this.handleChange,error:o[e],type:n,placeholder:a})}},{key:"renderDropDown",value:function(e,t,n){var a=this.state,s=a.data,c=a.errors;return Object(r.jsx)(ne,{name:e,value:s[e],label:t,onChange:this.handleChange,error:c[e],options:n})}}]),n}(a.Component),ae=function(e){var t=e.value,n=e.onChange;return Object(r.jsx)("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search ...",value:t,onChange:function(e){return n(e.currentTarget.value)}})},se=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={movies:"",pageSize:5,currentPage:1,genres:"",selectedGenre:"All Genres",sortColumn:{path:"title",order:"asc"}},e.deleteMov=function(){var t=Object(g.a)(O.a.mark((function t(n){var r,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state.movies,a=r.filter((function(e){return e._id!==n._id})),e.setState({movies:a}),t.prev=3,t.next=6,q(n._id);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&404===t.t0.response.status&&(m.b.error("This movie is not found. Already Deleted?"),e.setState({movies:r})),t.t0.response&&403===t.t0.response.status&&(m.b.error("Access Denied"),e.setState({movies:r}));case 12:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleLike=function(t){var n=Object(L.a)(e.state.movies),r=n.indexOf(t);n[r]=Object(u.a)({},n[r]),n[r].liked=!n[r].liked,e.setState({movies:n})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleGenre=function(t){e.setState({selectedGenre:t,currentPage:1})},e.handleSort=function(t){e.setState({sortColumn:t})},e.handleSearch=function(t){e.setState({selectedGenre:null,currentPage:1,searchQuery:t})},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,n,r,a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:return t=e.sent,n=t.data,e.next=6,F();case 6:r=e.sent,a=r.data,s=[{_id:"",name:"All Genres"}].concat(Object(L.a)(n)),this.setState({genres:s,movies:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.pageSize,n=e.currentPage,a=e.movies,c=e.selectedGenre,o=e.genres,i=e.sortColumn,u=e.searchQuery;if(!a)return null;var d=this.getPagedData(a,c,i,n,t,u),b=d.moviesLength,h=d.filtmovies,p=this.props.user;return Object(r.jsx)(s.a.Fragment,{children:Object(r.jsxs)("div",{className:"row mx-auto",children:[Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)(J,{lgenres:o,genreClicked:this.handleGenre,selectedGenre:c})}),Object(r.jsxs)("div",{className:"col",children:[p&&Object(r.jsx)("button",{className:"btn btn-primary btn-submit",style:{marginBottom:20},children:Object(r.jsx)(l.b,{to:"movies/new",children:"New Movie"})}),Object(r.jsxs)("h3",{children:["Showing ",b," movies in the database."]}),Object(r.jsx)(ae,{value:this.state.query,onChange:this.handleSearch}),Object(r.jsx)(X,{filtmovies:h,onLike:this.handleLike,onDelete:this.deleteMov,onSort:this.handleSort,sortColumn:i,user:p}),Object(r.jsx)(U,{itemsCount:b,pageSize:t,onPageChange:this.handlePageChange,currentPage:n})]})]})})}},{key:"getPagedData",value:function(e,t,n,r,a,s){var c=e.filter((function(e){return s?e.title.toLowerCase().includes(s.toLowerCase()):"All Genres"===t||null===t||e.genre.name===t?e:""})),o=function(e,t,n){var r=(t-1)*n;return E()(e).slice(r).take(n).value()}(E.a.orderBy(c,[n.path],[n.order]),r,a);return{moviesLength:c.length,filtmovies:o}}}]),n}(re),ce=function(e){return Object(r.jsx)("h1",{children:"Customers"})},oe=function(e){return Object(r.jsx)("h1",{children:"Rentals"})},ie=function(){return Object(r.jsx)("h1",{children:"404 Not Found"})},le=function(e){var t=e.user;return Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(r.jsx)(l.b,{className:"navbar-brand",to:"/movies",children:"Vidly"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(r.jsxs)("div",{className:"navbar-nav",children:[Object(r.jsx)(l.c,{className:"nav-item nav-link",to:"/movies",children:"Movies"}),Object(r.jsx)(l.c,{className:"nav-item nav-link",to:"/customers",children:"Customers"}),Object(r.jsx)(l.c,{className:"nav-item nav-link",to:"/rentals",children:"Rentals"}),!t&&Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(l.c,{className:"nav-item nav-link",to:"/login",children:"Login"}),Object(r.jsx)(l.c,{className:"nav-item nav-link",to:"/register",children:"Register"})]}),t&&Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(l.c,{className:"nav-item nav-link",to:"/profile",children:t.name}),Object(r.jsx)(l.c,{className:"nav-item nav-link",to:"/logout",children:"Logout"})]})]})})]})},ue=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:"",errors:{}},e.schema={_id:ee.a.string(),title:ee.a.string().required().label("Title"),genreId:ee.a.string().required().label("Genre"),numberInStock:ee.a.number().required().min(0).max(100).label("Stock"),dailyRentalRate:ee.a.number().required().min(0).max(5).label("Rate")},e.doSubmit=Object(g.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e.state.data);case 2:e.props.history.push("/movies");case 3:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,n,r,a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:if(t=e.sent,n=t.data,this.setState({genres:n}),e.prev=5,"new"!==(r=this.props.match.params.id)){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,T(r);case 11:a=e.sent,s=a.data,this.setState({data:this.mapToViewModel(s)}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),e.t0.response&&404===e.t0.response.status&&this.props.history.replace("/not-found");case 19:case"end":return e.stop()}}),e,this,[[5,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){var e=this.props.match;return this.state.genres?Object(r.jsxs)("div",{children:[Object(r.jsxs)("h1",{children:["MovieForm ",e.params.id," "]}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("title","Title"),this.renderDropDown("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")]})]}):null}}]),n}(re),de=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{username:"",password:""},errors:{}},e.schema={username:ee.a.string().required().label("Username"),password:ee.a.string().required().label("Password")},e.doSubmit=Object(g.a)(O.a.mark((function t(){var n,r,a,s,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.state.data,r=n.username,a=n.password,t.next=4,R(r,a);case 4:s=e.props.location.state,window.location=s?s.from.pathname:"/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((c=Object(u.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:c}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(b.a)(n,[{key:"render",value:function(){return D()?Object(r.jsx)(j.a,{to:"/"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")]})]})}}]),n}(re),be=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){localStorage.removeItem(I),window.location="/"}},{key:"render",value:function(){return null}}]),n}(a.Component);function he(e){return S.post("/users",{email:e.email,password:e.password,name:e.name})}var pe=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{email:"",password:"",name:""},errors:{}},e.schema={email:ee.a.string().required().email().label("Username"),password:ee.a.string().required().min(5).label("Password"),name:ee.a.string().required().label("Name")},e.doSubmit=Object(g.a)(O.a.mark((function t(){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,he(e.state.data);case 3:_(t.sent.headers["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((n=Object(u.a)({},e.state.errors)).email=t.t0.response.data,e.setState({errors:n}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(b.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Register"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("email","Username/E-mail"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")]})]})}}]),n}(re),me=(n(81),n(82),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={user:""},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=D();this.setState({user:e})}},{key:"render",value:function(){var e=this.state.user;return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(m.a,{}),Object(r.jsx)(le,{user:e}),Object(r.jsx)("main",{className:"container",children:Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{path:"/register",component:pe}),Object(r.jsx)(j.b,{path:"/login",component:de}),Object(r.jsx)(j.b,{path:"/logout",component:be}),Object(r.jsx)(G,{path:"/movies/:id",component:ue}),Object(r.jsx)(j.b,{path:"/movies",render:function(t){return Object(r.jsx)(se,Object(u.a)(Object(u.a)({},t),{},{user:e}))}}),Object(r.jsx)(j.b,{path:"/customers",component:ce}),Object(r.jsx)(j.b,{path:"/rentals",component:oe}),Object(r.jsx)(j.b,{path:"/not-found",component:ie}),Object(r.jsx)(j.a,{from:"/",exact:!0,to:"/movies"}),Object(r.jsx)(j.a,{to:"/not-found"})]})})]})}}]),n}(a.Component));o.a.render(Object(r.jsx)(l.a,{children:Object(r.jsx)(me,{})}),document.getElementById("root")),i()}},[[83,1,2]]]);
//# sourceMappingURL=main.f3fa9a58.chunk.js.map