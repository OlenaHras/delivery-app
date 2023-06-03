"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[555],{5593:function(e,n,r){r.r(n),r.d(n,{default:function(){return $}});var i,t,a,d,s,l,o,c,p,u,x=r(9439),h=r(2791),m=r(168),f=r(225),g=f.Z.div(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 25px;\n  margin: 0 auto;\n  /* border-radius: 25px; */\n  /* border: 2px solid grey; */\n  /* margin-left: 100px; */\n  padding: 25px;\n  width: 80%;\n  text-transform: uppercase;\n  /* height: 400px; */\n"]))),b=f.Z.div(t||(t=(0,m.Z)(["\n  flex-direction: column;\n"]))),j=f.Z.div(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 2px solid grey;\n  border-radius: 25px;\n  align-items: center;\n  padding: 25px;\n  width: 180px;\n  height: 255px;\n  &:hover {\n    transform: translateY(-5px);\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n"]))),Z=f.Z.button(d||(d=(0,m.Z)(["\n  background-color: #fa8072;\n  border: 2px solid #00ffff;\n  border-radius: 25px;\n  padding: 10px;\n\n  width: 150px;\n  text-transform: uppercase;\n  cursor: pointer;\n  &:hover {\n    background: #766a90;\n    border: 2px solid #766a90;\n    color: #ebd8ff;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n"]))),v=f.Z.div(s||(s=(0,m.Z)(["\n  width: 180px;\n  height: 100px;\n  object-fit: contain;\n"]))),y=f.Z.img(l||(l=(0,m.Z)(["\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n"]))),w=f.Z.div(o||(o=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 75px;\n"]))),S=f.Z.div(c||(c=(0,m.Z)(["\n  border: 1px solid grey;\n  border-radius: 25%;\n  height: 25px;\n  width: 25px;\n  cursor: pointer;\n"]))),k=r(184),C=function(e){var n=e.item,r=e.handleButtonClick,i=e.handleTotalCount,t=(0,h.useState)(1),a=(0,x.Z)(t,2),d=a[0],s=a[1];return(0,k.jsxs)(j,{children:[(0,k.jsx)(v,{children:(0,k.jsx)(y,{src:n.img,alt:n.title})}),(0,k.jsx)("div",{children:n.title}),(0,k.jsxs)("div",{children:[n.price," $"]}),(0,k.jsxs)(w,{children:[(0,k.jsx)(S,{onClick:function(){d>0&&s(d-1),i(Number(-n.price))},children:"-"}),(0,k.jsx)("p",{children:d}),(0,k.jsx)(S,{onClick:function(){d<10&&s(Number(d)+1),i(Number(n.price))},children:"+"})]}),(0,k.jsx)(Z,{onClick:function(){return r(n)},children:"remove"})]})},N=r.p+"static/media/ampty.401ab2ffa96809c57006.webp",O=function(e){e.user;var n=(0,h.useState)(0),r=(0,x.Z)(n,2),i=r[0],t=r[1],a=JSON.parse(localStorage.getItem("orders")),d=(0,h.useState)(a||[]),s=(0,x.Z)(d,2),l=s[0],o=s[1];(0,h.useEffect)((function(){l.map((function(e){return t((function(n){return n+Number(e.price)}))}))}),[l]);var c=function(e){var n=a.filter((function(n){return n.id!==e.id}));o(n),t((function(n){return n-Number(e.price)})),localStorage.setItem("orders",JSON.stringify(n))},p=function(e){t((function(n){return n+e}))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(g,{children:l.length>0?l.map((function(e){return(0,k.jsx)("li",{children:(0,k.jsx)(C,{item:e,handleButtonClick:c,handleTotalCount:p})},e.id)})):(0,k.jsxs)(b,{children:[(0,k.jsx)("p",{children:"There are no orders"}),(0,k.jsx)("img",{src:N,alt:"empty cart",width:"600",height:"400"})]})}),(0,k.jsxs)("p",{children:["TOTAL: ",i," $"]})]})},P=r(890),T=r(1582),z=r(7509),A=r(4554),B=r(4281),q=r(1889),D=f.Z.div(p||(p=(0,m.Z)(["\n  /* border-radius: 25px; */\n  border-right: 2px solid grey;\n  padding: 10px;\n  /* margin-right: 10px; */\n  margin: 0 auto;\n  /* width: 300px; */\n  height: 400px;\n"]))),I=function(e){var n=e.handleOrderButton,r=(0,h.useState)({}),i=(0,x.Z)(r,2),t=i[0],a=i[1];return(0,k.jsxs)(D,{children:[(0,k.jsx)(P.Z,{variant:"h5",gutterBottom:!0,children:"Delivery Address"}),(0,k.jsx)(q.ZP,{container:!0,spacing:2,children:(0,k.jsxs)(T.Z,{onSubmit:function(e){e.preventDefault();var r=e.currentTarget;a({name:r.elements.name.value,address:r.elements.address.value,phone:r.elements.phone.value,city:r.elements.city.value}),n(t),r.reset()},component:"form",sx:{width:"30ch"},spacing:2,children:[(0,k.jsx)(q.ZP,{item:!0,xs:12,children:(0,k.jsx)(z.Z,{type:"text",name:"name",placeholder:"Alex Smith",required:!0,label:"Name",id:"outlined-disabled",size:"small",margin:"normal"})}),(0,k.jsx)(q.ZP,{item:!0,xs:12,children:(0,k.jsx)(z.Z,{type:"text",name:"address",placeholder:"",required:!0,label:"Address",id:"outlined-disabled",size:"small",margin:"normal"})}),(0,k.jsx)(q.ZP,{item:!0,xs:12,children:(0,k.jsx)(z.Z,{type:"text",name:"phone",placeholder:"",required:!0,label:"Phone number",id:"outlined-disabled",size:"small",margin:"normal"})}),(0,k.jsx)(q.ZP,{item:!0,xs:12,children:(0,k.jsx)(z.Z,{type:"text",name:"city",placeholder:"",required:!0,label:"City",id:"outlined-disabled",size:"small",margin:"normal"})}),(0,k.jsx)(A.Z,{textAlign:"right",mt:2,children:(0,k.jsx)(B.Z,{type:"submit",variant:"contained",color:"primary",size:"large",children:"Order"})})]})})]})},J=f.Z.div(u||(u=(0,m.Z)(["\n  display: grid;\n  grid-template-columns: 30% 70%;\n  margin: 50px;\n"]))),$=function(){var e=(0,h.useState)({}),n=(0,x.Z)(e,2),r=n[0],i=n[1];return(0,k.jsxs)(J,{children:[(0,k.jsx)(I,{handleOrderButton:function(e){i(e),localStorage.clear()}}),(0,k.jsx)(O,{user:r})]})}}}]);
//# sourceMappingURL=555.fc40a91f.chunk.js.map