(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{15:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),a=i(9),s=i.n(a),r=(i(15),i(2)),o=i(3),l=i(5),d=i(4),j=(i(8),i(10)),h=i(6),b=i(0),u=function(e){return Object(b.jsx)("div",{className:"tab-pane",children:e.childern})},m=function(e){var t=e.children,i=Object(c.useState)([]),a=Object(h.a)(i,2),s=a[0],r=a[1],o=Object(c.useState)({}),l=Object(h.a)(o,2),d=l[0],u=l[1],m=Object(c.useState)(""),O=Object(h.a)(m,2),p=O[0],x=O[1];Object(c.useEffect)((function(){var e=[],i={};n.a.Children.forEach(t,(function(t){if(n.a.isValidElement(t)){var c=t.props.name;e.push(c),i[c]=t.props.children}})),r(e),x(e[0]),u(Object(j.a)({},i)),console.log(i)}),[e,t]);return Object(b.jsxs)("div",{className:"tabs",children:[Object(b.jsx)("ul",{className:"tab-header",children:s.map((function(e){return Object(b.jsx)("li",{onClick:function(){x(e)},className:e===p?"active":"",children:e},e)}))}),Object(b.jsx)("div",{className:"tab-content",children:Object.keys(d).map((function(e){return e===p?Object(b.jsx)("div",{class:"tab-child",children:d[e]}):null}))})]})},O=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"text",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{for:"fname",children:"First name:"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",id:"fname",name:"fname"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{for:"lname",children:"Last name:"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",id:"lname",name:"lname"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"Have you played Final Fantasy VII RE?"}),Object(b.jsx)("input",{type:"radio",id:"Yes",name:"Choice",value:"Yes"}),Object(b.jsx)("label",{for:"Yes",children:"Yes, I love it!"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"radio",id:"No",name:"Choice",value:"No"}),Object(b.jsx)("label",{for:"No",children:"No"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"radio",id:"other",name:"Choice",value:"Will try maybe?"}),Object(b.jsx)("label",{for:"other",children:"Will try maybe?"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]})})}}]),i}(n.a.Component),p=i.p+"static/media/Cloud.af090d5d.jpg",x=i.p+"static/media/Tifa.3a6f62ac.jpg",g=i.p+"static/media/Aerith.4a1a7143.jpg",v=i.p+"static/media/Barret.4a76a571.jpg",f=i.p+"static/media/Jess.430e6739.jpg",w=i.p+"static/media/Lude.f251aee2.jpg",y=i.p+"static/media/Reno.247a587f.jpg",k=i.p+"static/media/Sephiroth.51c0cdd9.jpg",C=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var c;return Object(r.a)(this,i),(c=t.call(this,e)).closeImg=function(){c.setState({renderDiv:!1})},c.showImg=function(e){c.setState({renderDiv:!0,largeSrc:e.target.src})},c.state={Tab_Id:"Images",renderDiv:!1,largeSrc:"/Resources/Pic_2.jpg"},c}return Object(o.a)(i,[{key:"render",value:function(){var e=Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{onClick:this.showImg,src:p,alt:"HTML5 Icon",width:"192",height:"100"}),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",Object(b.jsx)("img",{onClick:this.showImg,src:x,alt:"HTML5 Icon",width:"192",height:"100"}),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",Object(b.jsx)("img",{onClick:this.showImg,src:g,alt:"HTML5 Icon",width:"192",height:"100"}),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",Object(b.jsx)("img",{onClick:this.showImg,src:v,alt:"HTML5 Icon",width:"192",height:"100"}),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",Object(b.jsx)("img",{onClick:this.showImg,src:f,alt:"HTML5 Icon",width:"192",height:"100"}),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",Object(b.jsx)("img",{onClick:this.showImg,src:w,alt:"HTML5 Icon",width:"192",height:"100"}),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",Object(b.jsx)("img",{onClick:this.showImg,src:y,alt:"HTML5 Icon",width:"192",height:"100"}),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",Object(b.jsx)("img",{onClick:this.showImg,src:k,alt:"HTML5 Icon",width:"192",height:"100"}),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"]}),t=Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{id:"popWindow",onClick:this.closeImg,className:"popWindow"}),Object(b.jsx)("div",{id:"maskLayer",className:"maskLayer",children:Object(b.jsx)("img",{id:"enlargedpic",className:"pimg",src:this.state.largeSrc,alt:"large",width:"768",height:"400"})}),e]});return!1===this.state.renderDiv?e:t}}]),i}(n.a.Component),I=i.p+"static/media/V.e97d54ee.mp4",S=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var c;return Object(r.a)(this,i),(c=t.call(this,e)).closeVideo=function(){c.setState({renderDiv:!1})},c.showVideo=function(e){c.setState({renderDiv:!0,largeSrc:e.target.getElementsByTagName("source")[0].src})},c.state={Tab_Id:"Video",renderDiv:!1,largeSrc:"/Resources/Pic_2.jpg"},c}return Object(o.a)(i,[{key:"render",value:function(){var e=Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Youtube video does not work, so I use my own videos, which is taken from Hokkadio, Japan"}),Object(b.jsx)("video",{onClick:this.showVideo,className:"videos",width:"320",height:"240",controls:!0,loop:!0,children:Object(b.jsx)("source",{src:I,type:"video/mp4"})}),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",Object(b.jsx)("video",{onClick:this.showVideo,className:"videos",width:"320",height:"240",controls:!0,loop:!0,children:Object(b.jsx)("source",{src:I,type:"video/mp4"})}),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",Object(b.jsx)("video",{onClick:this.showVideo,className:"videos",width:"320",height:"240",controls:!0,loop:!0,children:Object(b.jsx)("source",{src:I,type:"video/mp4"})}),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",Object(b.jsx)("video",{onClick:this.showVideo,className:"videos",width:"320",height:"240",controls:!0,loop:!0,children:Object(b.jsx)("source",{src:I,type:"video/mp4"})})]}),t=Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{id:"popWindow",onClick:this.closeVideo,className:"popWindow"}),Object(b.jsx)("div",{id:"maskLayer",className:"maskLayer",children:Object(b.jsx)("video",{id:"enlargedpic",width:"1280",height:"960",controls:!0,loop:!0,children:Object(b.jsx)("source",{src:this.state.largeSrc,type:"video/mp4"})})}),e]});return!1===this.state.renderDiv?e:t}}]),i}(n.a.Component),T=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var c;return Object(r.a)(this,i),(c=t.call(this,e)).state={students:[{id:1,name:"Cloud",age:21,about:"Former First Class SOLDIER. After defecting from Shinra, Cloud began work as a mercenary for hire in Midgar. With his trusty broadsword in hand, he always gets the job done"},{id:2,name:"Tifa",age:20,about:"A member of the anti-Shinra militant group Avalanche. Tifa manages Seventh Heaven, a bar located in the Sector 7 slums. A student of Zangan-style martial arts, she can clobber opponents with her fleet-footed combat techniques."},{id:3,name:"Barret",age:35,about:"A faction leader of the anti-Shinra militant group Avalanche. Barret is filled with a burning hatred for Shinra, a company he claims is destroying the planet. His right arm has been modified into a firearm, allowing him to attack his enemies at long range."},{id:4,name:"Sephiroth",age:22,about:"There was one SOLDIER named Sephiroth, who was better than the rest, but when he found out about the terrible experiments that made him, he began to hate Shinra. And then, over time, he began to hate everything."}]},c}return Object(o.a)(i,[{key:"renderTableData",value:function(){return this.state.students.map((function(e,t){var i=e.id,c=e.name,n=e.age,a=e.about;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:i}),Object(b.jsx)("td",{children:c}),Object(b.jsx)("td",{children:n}),Object(b.jsx)("td",{children:a})]},i)}))}},{key:"renderTableHeader",value:function(){return Object.keys(this.state.students[0]).map((function(e,t){return Object(b.jsx)("th",{children:e.toUpperCase()},t)}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{id:"title",children:"Table Component"}),Object(b.jsx)("table",{id:"students",children:Object(b.jsxs)("tbody",{children:[Object(b.jsx)("tr",{children:this.renderTableHeader()}),this.renderTableData()]})})]})}}]),i}(c.Component),N=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var c;return Object(r.a)(this,i),(c=t.call(this,e)).checkEmail=function(){var e=document.getElementById("inputemail").value,t=e.slice(e.length-4);e.includes("@")&&".edu"==t||".com"==t?document.getElementById("result").innerHTML="Input email valid!":document.getElementById("result").innerHTML="Invalid email addres"},c.state={Tab_Id:"Email"},c}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{style:{paddingLeft:20},children:[Object(b.jsx)("br",{}),Object(b.jsx)("label",{for:"inputemail",children:"Email:"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",id:"inputemail",name:"inputemail",placeholder:"Enter your email"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{id:"result"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:this.checkEmail,children:"Validate"})]})}}]),i}(n.a.Component);function L(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),i=t[0],n=t[1],a=function(){window.pageYOffset>=100?n(!0):n(!1)};return Object(c.useEffect)((function(){window.addEventListener("scroll",a)}),[]),Object(b.jsx)("div",{className:"scroll-to-top",children:i&&Object(b.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(b.jsx)("img",{src:"https://i.postimg.cc/R0ChSxxW/long-arrow-up.png",alt:"Go to top"})})})}var E=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"header",children:"Website with React Tab Component"}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(m,{children:[Object(b.jsx)(u,{name:"Text",children:Object(b.jsx)(O,{})},"1"),Object(b.jsx)(u,{name:"Images",children:Object(b.jsx)(C,{})},"2"),Object(b.jsx)(u,{name:"Video",children:Object(b.jsx)(S,{})},"3"),Object(b.jsx)(u,{name:"Table",children:Object(b.jsx)(T,{})},"4"),Object(b.jsx)(u,{name:"Email",children:Object(b.jsx)(N,{})},"5")]})}),Object(b.jsx)("footer",{children:Object(b.jsx)(L,{})})]})}}]),i}(n.a.Component),H=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),c(e),n(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root")),H()},8:function(e,t,i){}},[[17,1,2]]]);
//# sourceMappingURL=main.c0843a4b.chunk.js.map