(this.webpackJsonp7seasclient=this.webpackJsonp7seasclient||[]).push([[0],{41:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n.n(r),s=n(34),c=n.n(s),i=n(2),l=n(3),u=n(4),h=n(6),j=n(5),p=(n(41),n(8)),b=n(16),d=n(15),f=n.n(d),O=n(17),m=n(7),x=n.n(m),g=new(function(){function e(){var t=this;Object(l.a)(this,e),this.handleUpload=function(){var e=Object(O.a)(f.a.mark((function e(n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("file in service",n),e.prev=1,e.next=4,t.auth.post("/upload",n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.auth=x.a.create({baseURL:"https://the7seas.herokuapp.com/",withCredentials:!0})}return Object(u.a)(e,[{key:"signup",value:function(e){var t=e.username,n=e.password;return this.auth.post("/auth/signup",{username:t,password:n}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.username,n=e.password;return this.auth.post("/auth/login",{username:t,password:n}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}},{key:"profile",value:function(e){return this.auth.get("/profile/".concat(e)).then((function(e){return e.data}))}},{key:"edituser",value:function(e){return this.auth.get("/profile/edituser/"+e).then((function(e){return e.data}))}},{key:"editboat",value:function(e){return this.auth.get("/profile/editboat"+e).then((function(e){return e.data}))}}]),e}()),v=o.a.createContext(),y=v.Consumer,C=v.Provider,w=function(e){return function(t){Object(h.a)(r,t);var n=Object(j.a)(r);function r(){return Object(l.a)(this,r),n.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this;return Object(a.jsx)(y,{children:function(n){var r=n.login,o=n.signup,s=n.user,c=n.logout,i=n.isLoggedin;return Object(a.jsx)(e,Object(b.a)({login:r,signup:o,user:s,logout:c,isLoggedin:i},t.props))}})}}]),r}(o.a.Component)},k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedin:!1,user:null,isLoading:!0},e.signup=function(t){var n=t.username,a=t.password;g.signup({username:n,password:a}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(t){var n=t.response;return e.setState({message:n.data.statusMessage})}))},e.login=function(t){var n=t.username,a=t.password;g.login({username:n,password:a}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(e){return console.log(e)}))},e.logout=function(){g.logout().then((function(){return e.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},e.edituser=function(e){g.edituser(e).then((function(e){return e})).catch((function(e){return console.log(e)}))},e.editboat=function(e){g.editboat(e).then((function(e){return e})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.isLoggedin,r=e.user,o=this.login,s=this.logout,c=this.signup;return t?Object(a.jsx)("div",{children:"Loading"}):Object(a.jsx)(C,{value:{isLoggedin:n,user:r,login:o,logout:s,signup:c},children:this.props.children})}}]),n}(o.a.Component),S=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.user,e.logout),n=e.isLoggedin;return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)(i.b,{to:"/",id:"home-btn",children:Object(a.jsx)("h4",{children:"Home"})}),n?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{className:"navbar-button",onClick:t,children:"Logout"})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.b,{to:"/login",children:Object(a.jsx)("button",{className:"navbar-button",children:"Login"})}),Object(a.jsx)("br",{}),Object(a.jsx)(i.b,{to:"/signup",children:Object(a.jsx)("button",{className:"navbar-button",children:"Sign Up"})})]})]})}}]),n}(r.Component)),B=n(10),L=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,r=n.password;e.props.signup({username:a,password:r})},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(B.a)({},a,r))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Username:"}),Object(a.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Signup"})]}),Object(a.jsx)("p",{children:"Already have account?"}),Object(a.jsx)(i.b,{to:"/login",children:" Login"})]})}}]),n}(r.Component)),N=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,r=n.password;e.props.login({username:a,password:r})},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(B.a)({},a,r))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Username:"}),Object(a.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Login"})]})]})}}]),n}(r.Component)),U=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("h1",{children:["Welcome ",this.props.user.username]})})}}]),n}(r.Component)),F=n(20);var T=w((function(e){var t=e.component,n=e.isLoggedin,r=Object(F.a)(e,["component","isLoggedin"]);return Object(a.jsx)(p.b,Object(b.a)(Object(b.a)({},r),{},{render:function(e){return n?Object(a.jsx)(p.a,{to:"/"}):Object(a.jsx)(t,Object(b.a)({},e))}}))}));var D=w((function(e){var t=e.component,n=e.isLoggedin,r=Object(F.a)(e,["component","isLoggedin"]);return Object(a.jsx)(p.b,Object(b.a)(Object(b.a)({},r),{},{render:function(e){return n?Object(a.jsx)(t,Object(b.a)({},e)):Object(a.jsx)(p.a,{to:"/login"})}}))}));var M=w((function(e){return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("h1",{children:"Welcome to 7SEAS"}),Object(a.jsxs)("section",{className:"section-home",children:[e.user?Object(a.jsx)("div",{children:Object(a.jsx)(i.b,{to:"/profile/user/".concat(e.user._id),children:"Ir a profile"})}):null,Object(a.jsx)("div",{children:Object(a.jsxs)(i.b,{to:"/offers/user/boats",children:[" ",Object(a.jsx)("img",{className:"foto-home",src:"https://res.cloudinary.com/dh2lo8p1f/image/upload/v1605811781/fotos/foto_barco_q0adis.jpg"})]})}),Object(a.jsx)("div",{children:Object(a.jsx)(i.b,{to:"/offers/user/crew",children:Object(a.jsx)("img",{className:"foto-home",src:"https://res.cloudinary.com/dh2lo8p1f/image/upload/v1605812445/fotos/popeyehd_bft1ej.jpg"})})})]})]})})),I=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={userId:e.props.user._id,user:{}},e.getProfile=Object(O.a)(f.a.mark((function t(){var n,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.profile(e.props.user._id);case 3:return n=t.sent,t.next=6,x.a.get("".concat("https://the7seas.herokuapp.com/","/profile/user/").concat(e.props.match.params.id));case 6:return a=t.sent,t.next=9,x.a.get("".concat("https://the7seas.herokuapp.com/","/profile/boat/").concat(e.props.match.params.id));case 9:r=t.sent,e.setState({user:n,offers:a.data,boat:r.data}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getProfile()}},{key:"render",value:function(){var e=this;return console.log(this.state.offers),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsxs)("h1",{children:["bienvenido: ",this.state.user.username]})}),Object(a.jsxs)("section",{children:[Object(a.jsxs)(i.b,{to:"/profile/user/".concat(this.props.match.params.id,"/createOffer"),children:[" ",Object(a.jsx)("button",{children:"Create an Offer"})]}),this.state.user.hasBoat?Object(a.jsxs)(i.b,{to:"/profile/user/".concat(this.state.boat.id,"/editBoat"),children:[" ",Object(a.jsx)("button",{children:"Edit your Boat"})]}):Object(a.jsxs)(i.b,{to:"/profile/user/".concat(this.props.match.params.id,"/createBoat"),children:[" ",Object(a.jsx)("button",{children:"Add your boat"})]}),Object(a.jsxs)(i.b,{to:"/profile/user/".concat(this.props.user._id,"/editUser"),children:[" ",Object(a.jsx)("button",{children:"Edit your Profile"})]})]}),this.state.offers?this.state.offers.map((function(t,n){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:e.state.user.image,alt:"foto"}),Object(a.jsxs)("p",{children:["My offers : ",t.destiny]})]})})})):null]})}}]),n}(r.Component)),A=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.age,o=t.gender,s=t.disponibility,c=t.email,i=t.languages,l=t.country,u=t.city,h=t.experience,j=t.hasBoat,p=t.lookinForSailAsCrew,b=t.image;x.a.put("".concat("https://the7seas.herokuapp.com/","/profile/").concat(a.props.match.params.id,"/editUser"),{username:n,age:r,gender:o,disponibility:s,email:c,languages:i,country:l,city:u,experience:h,lookinForSailAsCrew:p,hasBoat:j,image:b}).then((function(){a.props.history.push("/profile/".concat(a.props.match.params.id))})).catch((function(e){return console.log(e)}))},a.handleChangeUser=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(B.a)({},n,r))},a.state={username:a.props.username,age:a.props.age,gender:a.props.gender,disponibility:a.props.disponibility,email:a.props.email,languages:a.props.languages,country:a.props.country,city:a.props.city,experience:a.props.experience,lookinForSailAsCrew:a.props.lookinForSailAsCrew,image:a.props.image,hasBoat:a.props.hasBoat},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h3",{children:"Edit User"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,encType:"multipart/form-data",children:[Object(a.jsx)("label",{children:"Username:"}),Object(a.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChangeUser(t)}}),Object(a.jsx)("label",{children:"Age:"}),Object(a.jsx)("input",{name:"age",value:this.state.age,onChange:function(t){return e.handleChangeUser(t)}}),Object(a.jsx)("label",{children:"Gender:"}),Object(a.jsxs)("select",{name:"gender",onChange:function(t){return e.handleChangeUser(t)},children:[Object(a.jsx)("option",{value:"male",children:"Male"}),Object(a.jsx)("option",{value:"female",children:"Female"})]}),Object(a.jsx)("label",{children:"Disponibility:"}),Object(a.jsx)("input",{type:"text",name:"disponibility",value:this.state.disponibility,onChange:function(t){return e.handleChangeUser(t)}}),Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handleChangeUser(t)}}),Object(a.jsx)("label",{children:"Languages:"}),Object(a.jsx)("input",{type:"text",name:"languages",value:this.state.languajes,onChange:function(t){return e.handleChangeUser(t)}}),Object(a.jsx)("label",{children:"Country:"}),Object(a.jsx)("input",{type:"text",name:"country",value:this.state.country,onChange:function(t){return e.handleChangeUser(t)}}),Object(a.jsx)("label",{children:"City:"}),Object(a.jsx)("input",{type:"text",name:"city",value:this.state.city,onChange:function(t){return e.handleChangeUser(t)}}),Object(a.jsx)("label",{children:"Experience"}),Object(a.jsxs)("select",{name:"experience",onChange:function(t){return e.handleChangeUser(t)},children:[Object(a.jsx)("option",{value:"low",children:"Low"}),Object(a.jsx)("option",{value:"medium",children:"Medium"}),Object(a.jsx)("option",{value:"high",children:"High"})]}),Object(a.jsx)("label",{children:"Looking For Sail As Crew:"}),Object(a.jsx)("input",{type:"checkbox",value:this.state.lookinForSailAsCrew,onChange:function(t){return e.handleChangeUser(t)}}),Object(a.jsx)("label",{children:"Have a boat?:"}),Object(a.jsx)("input",{type:"checkbox",value:this.state.hasBoat,onChange:function(t){return e.handleChangeUser(t)}}),Object(a.jsx)("label",{children:"Image:"}),Object(a.jsx)("input",{type:"file",onChange:function(t){return e.handleChangeUser(t)}}),Object(a.jsx)("input",{type:"submit",value:"Submit"})]}),Object(a.jsx)("button",{children:Object(a.jsx)(i.b,{to:"/profile/user/".concat(this.props.match.params.id),children:"Back to my profile"})})]})}}]),n}(r.Component)),E=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.boatName,r=t.year,o=t.typeBoat,s=t.country,c=t.currentLocation,i=t.owner,l=t.crewNumber,u=t.rooms,h=t.length,j=t.image;x.a.put("".concat("https://the7seas.herokuapp.com/","/profile/").concat(a.props.match.params.id,"/editBoat"),{boatName:n,year:r,typeBoat:o,country:s,currentLocation:c,crewNumber:l,rooms:u,length:h,image:j,owner:i}).then((function(){a.props.history.push("/profile/".concat(a.props.match.params.id))})).catch((function(e){return console.log(e)}))},a.handleChangeBoat=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(B.a)({},n,r))},a.state={boatName:a.props.boatName,year:a.props.year,typeBoat:a.props.typeBoat,country:a.props.country,currentLocation:a.props.currentLocation,crewNumber:a.props.crewNumber,rooms:a.props.rooms,length:a.props.length,image:a.props.image,owner:a.props.owner},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h3",{children:"Edit your Boat"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,encType:"multipart/form-data",children:[Object(a.jsx)("label",{children:"Boat name:"}),Object(a.jsx)("input",{type:"text",name:"boatname",value:this.state.boatName,onChange:function(t){return e.handleChangeBoat(t)}}),Object(a.jsx)("label",{children:"Year:"}),Object(a.jsx)("input",{name:"year",value:this.state.year,onChange:function(t){return e.handleChangeBoat(t)}}),Object(a.jsx)("label",{children:"Type of boat:"}),Object(a.jsxs)("select",{name:"typeboat",onChange:function(t){return e.handleChangeBoat(t)},children:[Object(a.jsx)("option",{value:"power",children:"Power"}),Object(a.jsx)("option",{value:"sail",children:"Sail"})]}),Object(a.jsx)("label",{children:"Country:"}),Object(a.jsx)("input",{type:"text",name:"country",value:this.state.country,onChange:function(t){return e.handleChangeBoat(t)}}),Object(a.jsx)("label",{children:"current Location:"}),Object(a.jsx)("input",{type:"text",name:"currentLocation",value:this.state.currentLocation,onChange:function(t){return e.handleChangeBoat(t)}}),Object(a.jsx)("label",{children:"Crew number:"}),Object(a.jsx)("input",{type:"text",name:"crewNumber",value:this.state.crewNumber,onChange:function(t){return e.handleChangeBoat(t)}}),Object(a.jsx)("label",{children:"Rooms:"}),Object(a.jsx)("input",{type:"text",name:"rooms",value:this.state.rooms,onChange:function(t){return e.handleChangeBoat(t)}}),Object(a.jsx)("label",{children:"Length:"}),Object(a.jsx)("input",{type:"text",name:"length",value:this.state.length,onChange:function(t){return e.handleChangeBoat(t)}}),Object(a.jsx)("label",{children:"Image:"}),Object(a.jsx)("input",{type:"file",name:"image",value:this.state.image,onChange:function(t){return e.handleChangeBoat(t)}}),Object(a.jsx)("input",{type:"submit",value:"Submit"})]}),Object(a.jsx)("button",{children:Object(a.jsx)(i.b,{to:"/profile/user/".concat(this.props.match.params.id),children:"Back to my profile"})})]})}}]),n}(r.Component)),q=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.crewNumber,r=t.boardingLocation,o=t.destiny,s=t.costs,c=t.start,i=t.description,l=t.estimatedTime,u=t.nationality,h=t.ageCrew,j=t.journey,p=t.experience,b=t.seaMiles,d=t.offerImage,f=t.offerCreator;x.a.put("".concat("https://the7seas.herokuapp.com/","/offers/editOffer/").concat(a.props.match.params.id),{crewNumber:n,boardingLocation:r,destiny:o,costs:s,start:c,estimatedTime:l,description:i,nationality:u,ageCrew:h,journey:j,experience:p,seaMiles:b,offerImage:d,offerCreator:f}).then((function(){a.props.history.push("/offers/boats/".concat(a.props.match.params.id))})).catch((function(e){return console.log(e)}))},a.handleChangeOffer=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(B.a)({},n,r))},a.state={crewNumber:a.props.crewNumber,boardingLocation:a.props.boardingLocation,destiny:a.props.destiny,costs:a.props.costs,start:a.props.start,estimatedTime:a.props.estimatedTime,description:a.props.description,nationality:a.props.nationality,ageCrew:a.props.ageCrew,journey:a.props.journey,experience:a.props.experience,seaMiles:a.props.seaMiles,offerImage:a.props.offerImage,offerCreator:a.props.offerCreator},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h3",{children:"Edit Offer"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,encType:"multipart/form-data",children:[Object(a.jsx)("label",{children:"Crew number:"}),Object(a.jsx)("input",{type:"text",name:"crewNumber",value:this.state.crewNumber,onChange:function(t){return e.handleChangeOffer(t)}}),Object(a.jsx)("label",{children:"Boarding location:"}),Object(a.jsx)("input",{type:"text",name:"boardingLocation",value:this.state.boardingLocation,onChange:function(t){return e.handleChangeOffer(t)}}),Object(a.jsx)("label",{children:"Costs:"}),Object(a.jsxs)("select",{name:"costs",onChange:function(t){return e.handleChangeOffer(t)},children:[Object(a.jsx)("option",{children:"Choose Type"}),Object(a.jsx)("option",{value:"unpaid",children:"Unpaid"}),Object(a.jsx)("option",{value:"paid",children:"Paid"}),Object(a.jsx)("option",{value:"contributing",children:"Contributing"})]}),Object(a.jsx)("label",{children:"Destiny:"}),Object(a.jsx)("input",{type:"text",name:"destiny",value:this.state.destiny,onChange:function(t){return e.handleChangeOffer(t)}}),Object(a.jsx)("label",{children:"Start:"}),Object(a.jsx)("input",{type:"text",name:"start",value:this.state.start,onChange:function(t){return e.handleChangeOffer(t)}}),Object(a.jsx)("label",{children:"Estimated time:"}),Object(a.jsx)("input",{type:"text",name:"estimatedTime",value:this.state.estimatedTime,onChange:function(t){return e.handleChangeOffer(t)}}),Object(a.jsx)("label",{children:"nationality:"}),Object(a.jsx)("input",{type:"text",name:"nationality",value:this.state.nationality,onChange:function(t){return e.handleChangeOffer(t)}}),Object(a.jsx)("label",{children:"Description:"}),Object(a.jsx)("textarea",{type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleChangeOffer(t)}}),Object(a.jsx)("label",{children:"Age crew:"}),Object(a.jsx)("input",{type:"text",name:"ageCrew",value:this.state.ageCrew,onChange:function(t){return e.handleChangeOffer(t)}}),Object(a.jsx)("label",{children:"Journey:"}),Object(a.jsxs)("select",{name:"journey",onChange:function(t){return e.handleChangeOffer(t)},children:[Object(a.jsx)("option",{children:"Choose Type"}),Object(a.jsx)("option",{value:"tourism",children:"Tourism"}),Object(a.jsx)("option",{value:"cruising",children:"Cruising"}),Object(a.jsx)("option",{value:"regatta",children:"Regatta"}),Object(a.jsx)("option",{value:"charter",children:"Charter"})]}),Object(a.jsx)("label",{children:"Experience:"}),Object(a.jsxs)("select",{name:"experience",onChange:function(t){return e.handleChangeOffer(t)},children:[Object(a.jsx)("option",{children:"Choose Type"}),Object(a.jsx)("option",{value:"no required",children:"No required"}),Object(a.jsx)("option",{value:"required",children:"Required"})]}),Object(a.jsx)("label",{children:"Sea miles:"}),Object(a.jsxs)("select",{name:"seaMiles",onChange:function(t){return e.handleChangeOffer(t)},children:[Object(a.jsx)("option",{children:"Choose Type"}),Object(a.jsx)("option",{value:"no required",children:"No required"}),Object(a.jsx)("option",{value:"more than 100 miles",children:"More than 100 miles"}),Object(a.jsx)("option",{value:"more than 1000 miles",children:"More than 1000 miles"}),Object(a.jsx)("option",{value:"more than 10000 miles",children:"More than 10000 miles"})]}),Object(a.jsx)("label",{children:"Image:"}),Object(a.jsx)("input",{type:"file",name:"offerImage",value:this.state.offerImage,onChange:function(t){return e.handleChangeOffer(t)}}),Object(a.jsx)("input",{type:"submit",value:"Submit"})]}),Object(a.jsx)("button",{children:Object(a.jsx)(i.b,{to:"/offers/user/boats/".concat(this.props.match.params.id),children:"Back to the Offer"})})]})}}]),n}(r.Component)),_=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.boatName,r=t.year,o=t.typeBoat,s=t.country,c=t.currentLocation,i=t.owner,l=t.crewNumber,u=t.rooms,h=t.length,j=t.image;x.a.post("".concat("https://the7seas.herokuapp.com/","/profile/").concat(a.props.match.params.id,"/createBoat"),{boatName:n,year:r,typeBoat:o,country:s,currentLocation:c,crewNumber:l,rooms:u,length:h,image:j,owner:i}).then((function(){a.props.history.push("/profile/".concat(a.props.match.params.id))})).catch((function(e){return console.log(e)}))},a.handleCreateBoat=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(B.a)({},n,r))},a.handleUpload=function(){var e=Object(O.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("file in service",t),e.prev=1,e.next=4,g.post("/upload",t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleFileUpload=function(){var e=Object(O.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("the file uploaded is ",t.target.files[0]),(n=new FormData).append("image",t.target.files[0]),e.prev=3,e.next=6,g.handleUpload(n);case 6:r=e.sent,console.log("response is ",r),a.setState({image:r.secure_url}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),a.state={boatName:"",year:"",typeBoat:"",country:"",currentLocation:"",crewNumber:"",rooms:"",length:"",image:"",owner:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h3",{children:"Create your Boat"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Boat name:"}),Object(a.jsx)("input",{type:"text",name:"boatName",value:this.state.boatName,onChange:function(t){return e.handleCreateBoat(t)}}),Object(a.jsx)("label",{children:"Year:"}),Object(a.jsx)("input",{name:"year",value:this.state.year,onChange:function(t){return e.handleCreateBoat(t)}}),Object(a.jsx)("label",{children:"Type of boat:"}),Object(a.jsxs)("select",{name:"typeBoat",onChange:function(t){return e.handleCreateBoat(t)},children:[Object(a.jsx)("option",{children:"Choose Type"}),Object(a.jsx)("option",{value:"power",children:"Power"}),Object(a.jsx)("option",{value:"sail",children:"Sail"})]}),Object(a.jsx)("label",{children:"Country:"}),Object(a.jsx)("input",{type:"text",name:"country",value:this.state.country,onChange:function(t){return e.handleCreateBoat(t)}}),Object(a.jsx)("label",{children:"current Location:"}),Object(a.jsx)("input",{type:"text",name:"currentLocation",value:this.state.currentLocation,onChange:function(t){return e.handleCreateBoat(t)}}),Object(a.jsx)("label",{children:"Crew number:"}),Object(a.jsx)("input",{type:"text",name:"crewNumber",value:this.state.crewNumber,onChange:function(t){return e.handleCreateBoat(t)}}),Object(a.jsx)("label",{children:"Rooms:"}),Object(a.jsx)("input",{type:"text",name:"rooms",value:this.state.rooms,onChange:function(t){return e.handleCreateBoat(t)}}),Object(a.jsx)("label",{children:"Length:"}),Object(a.jsx)("input",{type:"text",name:"length",value:this.state.length,onChange:function(t){return e.handleCreateBoat(t)}}),Object(a.jsx)("label",{children:"Image:"}),Object(a.jsx)("input",{type:"file",onChange:function(t){return e.handleFileUpload(t)}}),Object(a.jsx)("input",{type:"submit",value:"Submit"})]}),Object(a.jsx)("button",{children:Object(a.jsx)(i.b,{to:"/profile/user/".concat(this.props.match.params.id),children:"Back to my profile"})})]})}}]),n}(r.Component)),P=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.crewNumber,r=t.boardingLocation,o=t.destiny,s=t.costs,c=t.start,i=t.estimatedTime,l=t.description,u=t.nationality,h=t.ageCrew,j=t.journey,p=t.experience,b=t.seaMiles,d=t.offerImage,f=t.offerCreator;x.a.post("".concat("https://the7seas.herokuapp.com/","/profile/").concat(a.props.match.params.id,"/createOffer"),{crewNumber:n,boardingLocation:r,destiny:o,costs:s,start:c,estimatedTime:i,description:l,nationality:u,ageCrew:h,journey:j,experience:p,seaMiles:b,offerImage:d,offerCreator:f}).then((function(){a.props.history.push("/profile/".concat(a.props.match.params.id))})).catch((function(e){return console.log(e)}))},a.handleCreateOffer=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(B.a)({},n,r))},a.state={crewNumber:"",boardingLocation:"",destiny:"",costs:"",start:"",estimatedTime:"",description:"",nationality:"",ageCrew:"",journey:"",experience:"",seaMiles:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h3",{children:"Create your Offer"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,encType:"multipart/form-data",children:[Object(a.jsx)("label",{children:"Crew number:"}),Object(a.jsx)("input",{type:"text",name:"crewNumber",value:this.state.crewNumber,onChange:function(t){return e.handleCreateOffer(t)}}),Object(a.jsx)("label",{children:"Boarding location:"}),Object(a.jsx)("input",{type:"text",name:"boardingLocation",value:this.state.boardingLocation,onChange:function(t){return e.handleCreateOffer(t)}}),Object(a.jsx)("label",{children:"Costs:"}),Object(a.jsxs)("select",{name:"costs",onChange:function(t){return e.handleCreateOffer(t)},children:[Object(a.jsx)("option",{children:"Choose Type"}),Object(a.jsx)("option",{value:"unpaid",children:"Unpaid"}),Object(a.jsx)("option",{value:"paid",children:"Paid"}),Object(a.jsx)("option",{value:"contributing",children:"Contributing"})]}),Object(a.jsx)("label",{children:"Destiny:"}),Object(a.jsx)("input",{type:"text",name:"destiny",value:this.state.destiny,onChange:function(t){return e.handleCreateOffer(t)}}),Object(a.jsx)("label",{children:"Start:"}),Object(a.jsx)("input",{type:"text",name:"start",value:this.state.start,onChange:function(t){return e.handleCreateOffer(t)}}),Object(a.jsx)("label",{children:"Estimated time:"}),Object(a.jsx)("input",{type:"text",name:"estimatedTime",value:this.state.estimatedTime,onChange:function(t){return e.handleCreateOffer(t)}}),Object(a.jsx)("label",{children:"nationality:"}),Object(a.jsx)("input",{type:"text",name:"nationality",value:this.state.nationality,onChange:function(t){return e.handleCreateOffer(t)}}),Object(a.jsx)("label",{children:"Description:"}),Object(a.jsx)("textarea",{type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleCreateOffer(t)}}),Object(a.jsx)("label",{children:"Age crew:"}),Object(a.jsx)("input",{type:"text",name:"ageCrew",value:this.state.ageCrew,onChange:function(t){return e.handleCreateOffer(t)}}),Object(a.jsx)("label",{children:"Journey:"}),Object(a.jsxs)("select",{name:"journey",onChange:function(t){return e.handleCreateOffer(t)},children:[Object(a.jsx)("option",{children:"Choose Type"}),Object(a.jsx)("option",{value:"tourism",children:"Tourism"}),Object(a.jsx)("option",{value:"cruising",children:"Cruising"}),Object(a.jsx)("option",{value:"regatta",children:"Regatta"}),Object(a.jsx)("option",{value:"charter",children:"Charter"})]}),Object(a.jsx)("label",{children:"Experience:"}),Object(a.jsxs)("select",{name:"experience",onChange:function(t){return e.handleCreateOffer(t)},children:[Object(a.jsx)("option",{children:"Choose Type"}),Object(a.jsx)("option",{value:"no required",children:"No required"}),Object(a.jsx)("option",{value:"required",children:"Required"})]}),Object(a.jsx)("label",{children:"Sea  miles:"}),Object(a.jsxs)("select",{name:"seaMiles",onChange:function(t){return e.handleCreateOffer(t)},children:[Object(a.jsx)("option",{children:"Choose Type"}),Object(a.jsx)("option",{value:"no required",children:"No required"}),Object(a.jsx)("option",{value:"more than 100 miles",children:"More than 100 miles"}),Object(a.jsx)("option",{value:"more than 1000 miles",children:"More than 1000 miles"}),Object(a.jsx)("option",{value:"more than 10000 miles",children:"More than 10000 miles"})]}),Object(a.jsx)("label",{children:"Image:"}),Object(a.jsx)("input",{type:"file",name:"offerImage",value:this.state.offerImage,onChange:function(t){return e.handleCreateOffer(t)}}),Object(a.jsx)("input",{type:"submit",value:"Submit"})]}),Object(a.jsx)("button",{children:Object(a.jsx)(i.b,{to:"/profile/user/".concat(this.props.match.params.id),children:"Back to my profile"})})]})}}]),n}(r.Component)),R=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).getBoatOffers=function(){x.a.get("".concat("https://the7seas.herokuapp.com/","/offers/boats")).then((function(t){e.setState({listOffersBoat:t.data})}))},e.state={listOffersBoat:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getBoatOffers()}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:this.state.listOffersBoat.map((function(e){return console.log(e,"esto son las ofertas"),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"",alt:"Foto"}),Object(a.jsx)("p",{children:e.destiny}),Object(a.jsx)("p",{children:e.start}),Object(a.jsx)("h5",{children:e.boardingLocation}),Object(a.jsx)(i.b,{to:"/offers/user/boats/".concat(e._id),children:"Details"})]},e._id)}))})})}}]),n}(r.Component)),J=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).getCrewOffers=function(){x.a.get("".concat("https://the7seas.herokuapp.com/","/offers/crew")).then((function(t){console.log(t),e.setState({listOffersCrew:t.data})}))},e.state={listOffersCrew:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getCrewOffers()}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:this.state.listOffersCrew.map((function(e){return console.log(e,"esto son las ofertas"),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"",alt:"Foto"}),Object(a.jsx)("h5",{children:e.username}),Object(a.jsx)("p",{children:e.country}),Object(a.jsx)("p",{children:e.disponibility}),Object(a.jsx)(i.b,{to:"/offers/user/crew/".concat(e._id),children:"Details"})]},e._id)}))})})}}]),n}(r.Component)),H=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getSingleOffer=function(){var e=a.props.match.params;console.log(e,"kkkkkkkkkkkkkkkkkkkkk"),x.a.get("".concat("https://the7seas.herokuapp.com/","/offers/boats/").concat(e.id)).then((function(e){var t=e.data;console.log(e,"wwwwwwwwwwwwwww"),a.setState(t)})).catch((function(e){console.log(e)}))},a.DeleteOffer=function(){var e=a.props.match.params;x.a.delete("".concat("https://the7seas.herokuapp.com/","/profile/delete/").concat(e.id)).then((function(){a.props.history.push("/profile/:id")})).catch((function(e){console.log(e)}))},a.state={},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getSingleOffer()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"hello"}),Object(a.jsxs)("p",{children:["Cost: ",this.state.costs," "]}),Object(a.jsxs)("p",{children:["Destiny: ",this.state.destiny," "]}),Object(a.jsxs)("p",{children:["Experience: ",this.state.experience," "]}),Object(a.jsx)(i.b,{to:"/offers/user/boats",children:"Go back"}),this.state.user?Object(a.jsx)("button",{onClick:function(){return e.DeleteOffer()},children:"Delete Offer"})&&Object(a.jsx)(i.b,{to:"/offers/user/editOffer/".concat(this.props.match.params.id),children:"Edit your Offer"}):null]})}}]),n}(r.Component)),G=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getSingleOffer=function(){var e=a.props.match.params;x.a.get("".concat("https://the7seas.herokuapp.com/","/offers/crew/").concat(e.id)).then((function(e){var t=e.data;a.setState(t)})).catch((function(e){console.log(e)}))},a.state={},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getSingleOffer()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"holaaa"}),Object(a.jsxs)("p",{children:["User name: ",this.state.username," "]}),Object(a.jsxs)("p",{children:["Disponibility: ",this.state.disponibility," "]}),Object(a.jsxs)("p",{children:["Experience: ",this.state.experience," "]})]})}}]),n}(r.Component)),W=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(k,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(S,{}),Object(a.jsxs)(p.d,{children:[Object(a.jsx)(p.b,{exact:!0,path:"/",component:M}),Object(a.jsx)(T,{exact:!0,path:"/signup",component:L}),Object(a.jsx)(T,{exact:!0,path:"/login",component:N}),Object(a.jsx)(D,{exact:!0,path:"/private",component:U}),Object(a.jsx)(D,{exact:!0,path:"/profile/user/:id",component:I}),Object(a.jsx)(D,{exact:!0,path:"/profile/user/:id/createBoat",component:_}),Object(a.jsx)(D,{exact:!0,path:"/profile/user/:id/createOffer",component:P}),Object(a.jsx)(D,{exact:!0,path:"/profile/user/:id/editUser",component:A}),Object(a.jsx)(D,{exact:!0,path:"/profile/user/:id/editBoat",component:E}),Object(a.jsx)(D,{exact:!0,path:"/offers/user/editOffer/:id",component:q}),Object(a.jsx)(D,{exact:!0,path:"/offers/user/boats/:id",component:H}),Object(a.jsx)(D,{exact:!0,path:"/offers/user/crew/:id",component:G}),Object(a.jsx)(p.b,{exact:!0,path:"/offers/user/boats",component:R}),Object(a.jsx)(p.b,{exact:!0,path:"/offers/user/crew",component:J})]})]})})}}]),n}(r.Component);c.a.render(Object(a.jsx)(i.a,{children:Object(a.jsx)(W,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.827c29ed.chunk.js.map