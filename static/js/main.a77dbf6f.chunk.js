(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(33),r=a.n(i),c=(a(78),a(8)),o=a(12),s=a(10),m=a(9),u=a(29),d=a(22),h=a(19),g=a.n(h),p=a(30),b=a.n(p),f=a(72),E=a.n(f),v=(a(79),a(20)),k=a.n(v),y=a(21),S=a.n(y);var C=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(g.a,{fluid:!0},l.a.createElement(k.a,{className:"border-top justify-content-between p-3"},l.a.createElement(S.a,{className:"p-0",md:3,sm:12}),l.a.createElement(S.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Michael Alexander."))))},x=a(63),N=a.n(x);var w=function(e){return l.a.createElement(N.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(g.a,{fluid:!0},l.a.createElement(k.a,{className:"justify-content-center py-5"},l.a.createElement(S.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},j=a(26),T=a(38);var O=function(e){var t=Object(T.b)({opacity:1,from:{opacity:0}});return l.a.createElement(T.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var M=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(O,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},A=a(64),I=a.n(A),B=a(65),L=a.n(B),D=a(66),J=a.n(D),W=a(67),F=a.n(W),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(j.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach(function(t){t.id!==e&&(t.selected=!1)}),n.setState({items:a})},n.makeItems=function(e){return e.map(function(e){return l.a.createElement(M,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})})},n.state={items:[{id:0,title:"Michael Alexander",subTitle:"Health Care Professional and Amateur Coder",imgSrc:L.a,link:"https://github.com/ALEX00100alex",selected:!1},{id:1,title:"Solar System Navigator",subTitle:"Solar System Navigator using 3rd party APIs for planetary information",imgSrc:I.a,link:"https://github.com/sloanlacey/solar-system-navigator",selected:!1},{id:2,title:"Book-Worm",subTitle:"Book Finder app using Express, MySQL and DB access.",imgSrc:J.a,link:"https://github.com/sloanlacey/book-worm",selected:!1},{id:3,title:"Workout Tracker",subTitle:"Create and track daily workouts, using Mongo and Express.",imgSrc:F.a,link:"https://github.com/ALEX00100alex/WorkoutTracker",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(g.a,{fluid:!0},l.a.createElement(k.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.a.Component);var H=function(e){return l.a.createElement("div",null,l.a.createElement(w,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(P,null))};var R=function(e){return l.a.createElement(g.a,{fluid:!0},l.a.createElement(k.a,{className:"justify-content-center"},l.a.createElement(S.a,{md:8},e.children)))};var G=function(e){return l.a.createElement("div",null,l.a.createElement(w,{title:e.title}),l.a.createElement(R,null,l.a.createElement("p",null,"I am an innovative full stack software developer offering experience in the entire software lifecycle. I have been trained in advanced development methodologies, tools and processes. I pride myself in being able to analyze code and engineer well-researched, cost-effective and responsive solutions."),l.a.createElement("p",null,"My technical toolkit includes JavaScript, SQL, MongoDB, React, JQuery, CSS and HTML"),l.a.createElement("p",null,"I'm constantly learning new things. Currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS."),l.a.createElement("p",null,"I have an extensive background in health care and retail operations, strategic product development, big data analytics and using cutting-edge technology to transform the customer experience. Possessing strong communication and presentation skills, I am a passionate, self-motivated and hands-on leader whose greatest attribute is the ability to develop and motivate high performing teams. I am currently working in the Commercial Business Products department of Regence Blue Cross Blue Shield of Oregon."),l.a.createElement("p",null,"You can find my resume here:",l.a.createElement("a",{href:"./M Alexander resume.pdf"}," DOWNLOAD MY RESUME "))))},Q=a(25),X=a(17),Y=a.n(X),z=a(69),U=a.n(z),V=a(68),$=a.n(V),_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(Q.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),console.log(e.target),n.setState({disabled:!0}),$.a.post("http://localhost:3030/api/email",n.state).then(function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})}).catch(function(e){console.log(e),n.setState({disabled:!1,emailSent:!1})})},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,{title:this.props.title}),l.a.createElement(R,null,l.a.createElement(Y.a,{onSubmit:this.handleSubmit},l.a.createElement(Y.a.Group,null,l.a.createElement(Y.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(Y.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(Y.a.Group,null,l.a.createElement(Y.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(Y.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(Y.a.Group,null,l.a.createElement(Y.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(Y.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(U.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"Michael Alexander",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Creative Innovation",subTitle:"Changing the world one byte at a time",text:"Click on the images below for more information"},about:{title:"About Me"},contact:{title:"Contact Me!"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(g.a,{className:"p-0",fluid:!0,style:{backgroundColor:"lightblue"}},l.a.createElement(b.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(b.a.Brand,null,"Michael Alexander's Portfolio"),l.a.createElement(b.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(b.a.Collapse,{id:"navbar-toggle"},l.a.createElement(E.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(H,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(G,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(_,{title:e.state.contact.title})}}),l.a.createElement(C,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(137);r.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,t,a){e.exports=a.p+"static/media/Solar System.e0af78a5.png"},65:function(e,t,a){e.exports=a.p+"static/media/my pic.4dc6c453.png"},66:function(e,t,a){e.exports=a.p+"static/media/random-book.668cbb87.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/cardio.f3d9eb0b.jpg"},73:function(e,t,a){e.exports=a(138)},78:function(e,t,a){},79:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.a77dbf6f.chunk.js.map