(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var r=n(19),a=n.n(r),o=n(47),c=n.n(o),i=n(5),s=n.n(i),u=n(58),l=n(132),f=n(0),p=n.n(f),d=n(3),m=n(30),b=n(2),y=n(34),x=n(61),w=n(29),g=n(70),h=n(9),v=n(173),k="black",E="#3A3D40",O="#1A1C20",P=n(98),j=n.n(P),D=n(172),S=n(171);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(){var e=Object(f.useState)(!0),t=c()(e,2),n=t[0],r=t[1],o=Object(f.useState)(""),i=c()(o,2),d=i[0],k=i[1],O=Object(f.useState)({}),P=c()(O,2),z=P[0],T=P[1],J=Object(f.useState)(!1),W=c()(J,2),A=(W[0],W[1]);Object(f.useEffect)((function(){V(),R()}),[]);var H=function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.awrap(u.a.setItem("@toDos",JSON.stringify(e)));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),null,null,[[0,5]],Promise)},N=function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return r(e),t.next=3,s.a.awrap(u.a.setItem("@work",JSON.stringify(e)));case 3:case"end":return t.stop()}}),null,null,null,Promise)},V=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(u.a.getItem("@work"));case 2:e=t.sent,r(!e||JSON.parse(e));case 4:case"end":return t.stop()}}),null,null,null,Promise)},R=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.awrap(u.a.getItem("@toDos"));case 3:(e=t.sent)&&T(JSON.parse(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),null,null,[[0,7]],Promise)};return p.a.createElement(b.a,{style:I.container},p.a.createElement(l.a,{style:"light"}),p.a.createElement(b.a,{style:I.header},p.a.createElement(y.a,{onPress:function(){return N(!0)}},p.a.createElement(m.a,{style:{fontSize:38,fontWeight:"600",color:n?"white":E}},"Work")),p.a.createElement(y.a,{onPress:function(){return N(!1)}},p.a.createElement(m.a,{style:{fontSize:38,fontWeight:"600",color:n?E:"white"}},"Travel"))),p.a.createElement(x.a,{onSubmitEditing:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==d){t.next=2;break}return t.abrupt("return");case 2:return e=C(C({},z),{},a()({},Date.now(),{text:d,working:n,checked:!1,isEdit:!1})),T(e),t.next=6,s.a.awrap(H(e));case 6:k("");case 7:case"end":return t.stop()}}),null,null,null,Promise)},onChangeText:function(e){return k(e)},returnKeyType:"done",value:d,placeholder:n?"Add a To Do":"Where do you want to go?",style:I.input}),p.a.createElement(w.a,null,z&&Object.keys(z).map((function(e){return z[e].working===n?p.a.createElement(b.a,{style:I.toDo,key:e},z[e].isEdit?p.a.createElement(p.a.Fragment,null,p.a.createElement(x.a,{onSubmitEditing:function(){return function(e){var t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==!z[e].text){n.next=2;break}return n.abrupt("return");case 2:return z[e]=C(C({},z[e]),{},{isEdit:!1}),t=C(C({},z),{},a()({},e,z[e])),T(t),n.next=7,s.a.awrap(H(t));case 7:case"end":return n.stop()}}),null,null,null,Promise)}(e)},style:I.editInput,value:z[e].text,onChangeText:function(t){return n={key:e,text:t},void T(C(C({},z),{},a()({},n.key,C(C({},z[n.key]),{},{text:n.text}))));var n},returnKeyType:"done"}),p.a.createElement(y.a,{onPress:function(){return function(e){z[e]=C(C({},z[e]),{},{isEdit:!1});var t=C(C({},z),{},a()({},e,z[e]));A(!1),T(t),H(t)}(e)}},p.a.createElement(S.a,{name:"cancel",size:24,color:E}))):p.a.createElement(p.a.Fragment,null,p.a.createElement(j.a,{text:z[e].text,isChecked:z[e].checked,onPress:function(){return function(e){!1===z[e].checked?z[e]=C(C({},z[e]),{},{checked:!0}):z[e]=C(C({},z[e]),{},{checked:!1});var t=C(C({},z),{},a()({},e,z[e]));T(t),H(t)}(e)},size:25,iconStyle:{borderColor:"white"},fillColor:"black"}),p.a.createElement(b.a,{style:I.toolbox},p.a.createElement(y.a,{onPress:function(){return function(e){z[e]=C(C({},z[e]),{},{isEdit:!0});var t=C(C({},z),{},a()({},e,z[e]));A(!0),T(t),H(t)}(e)}},p.a.createElement(D.a,{name:"edit",size:24,color:E})),p.a.createElement(y.a,{onPress:function(){return function(e){var t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if("web"!==h.a.OS){n.next=10;break}if(!confirm("Do you want to delete this To Do?")){n.next=8;break}return delete(t=C({},z))[e],T(t),n.next=8,s.a.awrap(H(t));case 8:n.next=11;break;case 10:g.a.alert("Delete To Do","Are you sure?",[{text:"Cancel"},{text:"I'm sure",onPress:function(){var t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return delete(t=C({},z))[e],T(t),n.next=5,s.a.awrap(H(t));case 5:case"end":return n.stop()}}),null,null,null,Promise)}}]);case 11:case"end":return n.stop()}}),null,null,null,Promise)}(e)},style:{marginLeft:10}},p.a.createElement(v.a,{name:"trash",size:24,color:E}))))):null}))))}var I=d.a.create({container:{flex:1,backgroundColor:k,paddingHorizontal:20},header:{justifyContent:"space-between",flexDirection:"row",marginTop:100},input:{backgroundColor:"white",paddingVertical:10,paddingHorizontal:20,borderRadius:30,marginVertical:20,fontSize:18},editInput:{flex:.8,backgroundColor:"white",paddingVertical:5,paddingHorizontal:5,borderRadius:5,fontSize:15,color:"black"},toDo:{flexDirection:"row",backgroundColor:O,marginBottom:10,paddingVertical:20,paddingHorizontal:20,borderRadius:15,alignItems:"center",justifyContent:"space-between"},toDoText:{color:"white",fontSize:16,fontWeight:"500"},toolbox:{flexDirection:"row"}})},134:function(e,t,n){e.exports=n(165)}},[[134,1,2]]]);
//# sourceMappingURL=app.337ac258.chunk.js.map