(this.webpackJsonpmy_horoscope_client=this.webpackJsonpmy_horoscope_client||[]).push([[0],{34:function(e,t,a){e.exports=a(67)},39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),o=a.n(r),i=(a(39),a(7)),l=a(1),s=a(10),m=a(27),u=a(28),d=a(33),p=a(32),h=(a(40),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(s.a)({},e.target.id,e.target.value)),console.log(n.state)},n.state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"page"},c.a.createElement("h1",null," Your Star "),c.a.createElement("div",{id:"signs"},c.a.createElement("img",{src:"https://static.wixstatic.com/media/e6f9d7_1cf63a10d9124730b66cfb48e7683a83~mv2.png/v1/fill/w_504,h_508,al_c,q_85,usm_0.66_1.00_0.01/Zodiac%20Wheel.webp",alt:"signs"})),c.a.createElement("div",{className:"sign-page"},c.a.createElement("form",{onChange:function(t){return e.handleChange(t)},className:"sign-input"},c.a.createElement("input",{id:"sign",type:"text",placeholder:"Tell us your sign, then press enter . . .",required:!0}),c.a.createElement(i.b,{id:"horoscope",to:"/horoscope/".concat(this.state.sign)}," ",c.a.createElement("input",{style:{display:"none"},type:"submit",value:"Find out your Horoscope"})," "))))}}]),a}(n.Component)),E=(a(46),function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("hr",null),c.a.createElement("ul",{id:"footer-list"},c.a.createElement(i.b,{id:"footer-links",to:"/"}," ",c.a.createElement("li",{id:"footer-links"}," \xa9 Your Star 2020 By Per Scholas ")," ")))}),f=a(14),b=a.n(f),y=a(30),g=a(15),v=a(31),_=a.n(v),w=function(e){var t=e.match,a=Object(n.useState)([]),r=Object(g.a)(a,2),o=r[0],l=r[1],m=Object(n.useState)({day:"today"}),u=Object(g.a)(m,2),d=u[0],p=u[1],h=function(){var e=Object(y.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post("https://aztro.sameerkumar.website?sign=".concat(t.params.sign,"&day=").concat(d.day));case 3:a=e.sent,l(a.data),console.log(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[d.day]),c.a.createElement("div",null,c.a.createElement(i.b,{to:"/"}," ",c.a.createElement("h1",{id:"app-name"}," Your Star ")," ",c.a.createElement("img",{style:{width:"4%",margin:"1% 0% 0% -5%"},src:"https://www.pngkey.com/png/full/182-1828465_picture-black-and-white-zodiac-from-the-box.png",alt:""})," "),c.a.createElement("form",{className:"days",onClick:function(e){return function(e){e.preventDefault();var t=e.target,a=t.id,n=t.value;p(Object(s.a)({},a,n)),console.log(d)}(e)},onSubmit:h},c.a.createElement("input",{type:"submit",value:"yesterday",id:"day"}),c.a.createElement("input",{type:"submit",value:"today",id:"day"}),c.a.createElement("input",{type:"submit",value:"tomorrow",id:"day"})),c.a.createElement("div",{className:"zodiac"},c.a.createElement("h1",{id:"title"}," ",t.params.sign.toUpperCase()," "),c.a.createElement("div",{className:"the-date"},c.a.createElement("p",{id:"the-day"}," ",d.day," "),c.a.createElement("p",{id:"date"},"  ",o.current_date," ")),c.a.createElement("div",{id:"horoscope"},c.a.createElement("h2",{id:"horoscope-head"}," Horoscope "),c.a.createElement("p",{id:"horoscope"}," ",o.description," ")),c.a.createElement("ul",{className:"info"},c.a.createElement("h3",{id:"basics"}," BASICS "),c.a.createElement("li",{id:"birthdays"}," Dates: ",o.date_range," "),c.a.createElement("li",{id:"mood"}," Mood: ",o.mood," "),c.a.createElement("li",{id:"compatibility"}," Compatibility: ",o.compatibility," "),c.a.createElement("li",{id:"color"}," Color: ",o.color," "),c.a.createElement("li",{id:"number"}," Lucky Number: ",o.lucky_number," "),c.a.createElement("li",{id:"time"}," Lucky Time: ",o.lucky_time," ")),c.a.createElement("div",{id:"signs-app"},c.a.createElement("img",{src:"https://static.wixstatic.com/media/e6f9d7_1cf63a10d9124730b66cfb48e7683a83~mv2.png/v1/fill/w_504,h_508,al_c,q_85,usm_0.66_1.00_0.01/Zodiac%20Wheel.webp",alt:"signs"}))))};a(66);var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i.a,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/",component:h}),c.a.createElement(l.a,{path:"/horoscope/:sign",component:w})),c.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.46cee97b.chunk.js.map