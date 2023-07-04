(this.webpackJsonpignite=this.webpackJsonpignite||[]).push([[0],{138:function(e,n,t){"use strict";t.r(n);var a,c,r,i,o,s,d,l=t(0),b=t.n(l),m=t(72),g=t.n(m),u=t(12),j=t(13),p=t(139),h=t(32),O=t(7),A=function(e,n){return e.match(/media\/screenshots/)?e.replace("media/screenshots","media/resize/".concat(n,"/-/screenshots")):e.replace("/media/games/","/media/resize/".concat(n,"/-/games/"))},f=t.p+"static/media/playstation.18cc4b9c.svg",x=t.p+"static/media/steam.d7b8819f.svg",w=t.p+"static/media/xbox.3e7db735.svg",v=t.p+"static/media/nintendo.f579be04.svg",E=t.p+"static/media/apple.5757c37e.svg",y=t.p+"static/media/gamepad.c9269ef5.svg",k=t(2),I=Object(j.b)(p.a.div)(a||(a=Object(u.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #ff7676;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: white;\n  }\n"]))),C=Object(j.b)(p.a.div)(c||(c=Object(u.a)(["\n  width: 80%;\n  border-radius: 1rem;\n  padding: 2rem 5rem;\n  background: #01161e;\n  position: absolute;\n  left: 10%;\n  color: #eff6e0;\n  z-index: 10;\n  img {\n    width: 100%;\n  }\n"]))),S=Object(j.b)(p.a.div)(r||(r=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  img {\n    width: 1.2rem;\n    height: 1.2rem;\n    display: inline;\n  }\n"]))),D=Object(j.b)(p.a.div)(i||(i=Object(u.a)(["\n  text-align: center;\n"]))),R=Object(j.b)(p.a.div)(o||(o=Object(u.a)(["\n  display: flex;\n  justify-content: space-around;\n\n  img {\n    margin-left: 1rem;\n    width: 2rem;\n  }\n"]))),U=Object(j.b)(p.a.div)(s||(s=Object(u.a)(["\n  margin-top: 3rem;\n  img {\n    width: 100%;\n  }\n"]))),G=Object(j.b)(p.a.div)(d||(d=Object(u.a)(["\n  margin: 5rem 0rem;\n"]))),B=function(e){var n=e.pathId,t=Object(O.e)(),a=function(e){switch(e){case"PlayStation 4":return f;case"Xbox One":return w;case"PC":return x;case"Nintendo Switch":return v;case"iOS":return E;default:return y}},c=Object(h.c)((function(e){return e.detail})),r=c.screen,i=c.game,o=c.isLoading;return Object(k.jsx)(k.Fragment,{children:!o&&Object(k.jsx)(I,{className:"shadow",onClick:function(e){e.target.classList.contains("shadow")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(k.jsxs)(C,{layoutId:n,children:[Object(k.jsxs)(S,{children:[Object(k.jsxs)("div",{className:"rating",children:[Object(k.jsx)(p.a.h3,{layoutId:"title ".concat(n),children:i.name}),Object(k.jsxs)("p",{children:["Rating: ",i.rating]}),function(){for(var e=[],n=Math.floor(i.rating),t=1;t<=5;t++)t<=n?e.push(Object(k.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg=="},t)):e.push(Object(k.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII="},t));return e}()]}),Object(k.jsxs)(D,{children:[Object(k.jsx)("h3",{children:"Platforms"}),Object(k.jsx)(R,{children:i.platforms.map((function(e){return Object(k.jsx)("img",{alt:e.platform.name,src:a(e.platform.name)},e.platform.id)}))})]})]}),Object(k.jsx)(U,{children:Object(k.jsx)(p.a.img,{layoutId:"image ".concat(n),src:A(i.background_image,1280),alt:i.background_image})}),Object(k.jsx)(G,{children:Object(k.jsx)("p",{children:i.description_raw})}),Object(k.jsx)("div",{className:"gallery",children:r.results.map((function(e){return Object(k.jsx)("img",{src:A(e.image,1280),alt:e.image},e.id)}))})]})})})},L=t(43),N=t.n(L),T=t(68),z=t(44),F=t.n(z),H="https://api.rawg.io/api/",_="34cb2ec9f4c64c57bd574849a9bfdbe1",M=(new Date).getFullYear(),Z=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),P=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),V="".concat(M,"-").concat(Z,"-").concat(P),X="".concat(M-1,"-").concat(Z,"-").concat(P),J="".concat(M+1,"-").concat(Z,"-").concat(P),W="games?key=".concat(_,"&dates=").concat(X,",").concat(V,"&ordering=-rating&page_size=10"),Q="games?key=".concat(_,"&dates=").concat(V,",").concat(J,"&ordering=-added&page_size=10"),Y="games?key=".concat(_,"&dates=").concat(X,",").concat(V,"&ordering=-released&page_size=10"),K=function(){return"".concat(H).concat(Y)},q=function(e){return"".concat(H,"games/").concat(e,"/screenshots?key=").concat(_)};console.log(q());var $=function(e){return"".concat(H,"games?key=").concat(_,"&search=").concat(e,"&page_size=9")};console.log(K());var ee,ne,te,ae,ce,re,ie=t(45),oe={hidden:{opacity:0},show:{opacity:1,transition:{duration:.75},exit:{opacity:0,transition:{duration:.75}}}},se={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.75},exit:{opacity:0,transition:{duration:.75}}}},de=Object(j.b)(p.a.div)(ee||(ee=Object(u.a)(["\n  background-color: #01161e;\n  min-height: 30vh;\n  box-shadow: 0px 2px 10px #01161e;\n  text-align: center;\n  border-radius: 1rem;\n\n  cursor: pointer;\n  overflow: hidden;\n  img {\n    width: 100%;\n    height: 30vh;\n    object-fit: cover;\n  }\n"]))),le=function(e){var n=e.name,t=e.released,a=e.image,c=e.id,r=c.toString(),i=Object(h.b)();return Object(k.jsx)(de,{variants:se,initial:"hidden",animate:"show",layoutId:r,onClick:function(){document.body.style.overflow="hidden",i(function(e){return function(){var n=Object(T.a)(N.a.mark((function n(t){var a,c;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"LOADING_DETAIL"}),n.next=3,F.a.get((r=e,"".concat(H,"games/").concat(r,"?key=").concat(_)));case 3:return a=n.sent,n.next=6,F.a.get(q(e));case 6:c=n.sent,t({type:"GET_DETAIL",payload:{game:a.data,screen:c.data}});case 8:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()}(c))},children:Object(k.jsxs)(ie.b,{to:"/game/".concat(c),children:[Object(k.jsx)(p.a.h3,{layoutId:"title ".concat(r),children:n}),Object(k.jsx)("p",{children:t}),Object(k.jsx)(p.a.img,{layoutId:"image ".concat(r),src:a?A(a,640):"https://via.placeholder.com/640x640",alt:n})]})})},be=t(140),me=t(141),ge=Object(j.b)(p.a.div)(ne||(ne=Object(u.a)(["\n  padding: 0rem 2rem;\n  h2 {\n    padding: 2rem 0rem 3rem 0rem;\n    text-align: center;\n  }\n"]))),ue=Object(j.b)(p.a.div)(te||(te=Object(u.a)(["\n  min-height: 70vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));\n  grid-column-gap: 5rem;\n  grid-row-gap: 4rem;\n"]))),je=function(){var e=Object(O.f)().pathname.split("/")[2],n=Object(h.b)();Object(l.useEffect)((function(){n(function(){var e=Object(T.a)(N.a.mark((function e(n){var t,a,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("".concat(H).concat(W));case 2:return t=e.sent,e.next=5,F.a.get(K());case 5:return a=e.sent,e.next=8,F.a.get("".concat(H).concat(Q));case 8:c=e.sent,n({type:"FETCH_GAMES",payload:{popular:t.data.results,upcoming:c.data.results,newGames:a.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[n]);var t=Object(h.c)((function(e){return e.games})),a=t.popular,c=t.newGames,r=t.upcoming,i=t.searched;return Object(k.jsx)(ge,{variants:oe,initial:"hidden",animate:"show",children:Object(k.jsxs)(be.a,{type:"crossfade",children:[Object(k.jsx)(me.a,{children:e&&Object(k.jsx)(B,{pathId:e})}),i.length?Object(k.jsxs)("div",{className:"searched",children:[Object(k.jsx)("h2",{children:"Searched Games"}),Object(k.jsx)(ue,{children:i.map((function(e){return Object(k.jsx)(le,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]}):"",Object(k.jsx)("h2",{children:"Upcoming Games"}),Object(k.jsx)(ue,{children:r.map((function(e){return Object(k.jsx)(le,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(k.jsx)("h2",{children:"Popular Games"}),Object(k.jsx)(ue,{children:a.map((function(e){return Object(k.jsx)(le,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(k.jsx)("h2",{children:"New Games"}),Object(k.jsx)(ue,{children:c.map((function(e){return Object(k.jsx)(le,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]})})},pe=t(104),he=t.p+"static/media/logo.9b6b8655.svg",Oe=Object(j.b)(p.a.nav)(ae||(ae=Object(u.a)(["\n  padding: 3rem 5rem;\n  text-align: center;\n  form {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n  }\n  input {\n    width: 70%;\n    font-size: 0.8rem;\n    padding: 0.8rem;\n    border: none;\n    margin-top: 1rem;\n    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);\n    color: #0d0428;\n    background-color: #aec3b0;\n    border-radius: 15px;\n  }\n  button {\n    font-size: 1rem;\n    border: none;\n    margin-top: 1rem;\n    padding: 0.5rem 2rem;\n    cursor: pointer;\n    background-color: #0d0428;\n    color: #aec3b0;\n    border-radius: 10px;\n  }\n"]))),Ae=Object(j.b)(p.a.div)(ce||(ce=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  cursor: pointer;\n  h1 {\n    font-size: 2rem;\n  }\n  img {\n    height: 2.2rem;\n    width: 2.3rem;\n    margin-right: 0.2rem;\n  }\n"]))),fe=function(){var e=Object(h.b)(),n=Object(l.useState)(""),t=Object(pe.a)(n,2),a=t[0],c=t[1];return Object(k.jsxs)(Oe,{variants:oe,initial:"hidden",animate:"show",children:[Object(k.jsxs)(Ae,{onClick:function(){e({type:"CLEAR_SEARCHED"})},children:[Object(k.jsx)("img",{src:he,alt:"logo"}),Object(k.jsx)("h1",{children:"GAME REALM"})]}),Object(k.jsxs)("form",{className:"search",children:[Object(k.jsx)("input",{value:a,onChange:function(e){c(e.target.value)},type:"text",placeholder:"Search for Games"}),Object(k.jsx)("button",{onClick:function(n){var t;n.preventDefault(),e((t=a,function(){var e=Object(T.a)(N.a.mark((function e(n){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get($(t));case 2:a=e.sent,n({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())),c("")},type:"submit",children:"Search"})]})]})},xe=Object(j.a)(re||(re=Object(u.a)(["\n    *{\n        margin: 0;\n        padding:0;\n        box-sizing: border-box;\n        color: #EFF6E0;\n    }\n    html{\n        &::-webkit-scrollbar{\n            width: 0.5rem;\n        }\n        &::-webkit-scrollbar-thumb{\n            background-color: darkgrey;\n        }\n        &::-webkit-scrollbar-track {\n    background: white;\n  }\n    }\n    body{\n        font-family: 'Montserrat', sans-serif;\n        width: 100%;   \n        background: rgb(0,13,82);\nbackground: linear-gradient(90deg, rgba(0,13,82,1) 0%, rgba(252,70,108,1) 100%); \n    }\n    h2{\n        font-size: 2rem;\n        font-family: 'Montserrat', sans-serif;\n        font-weight: bold;\n        color: #EFF6E0;\n    }\n    h3{\n        font-size: 0.9rem;\n        color: #AEC3B0;\n        padding: 1rem 0.2rem;\n    }\n    p{\n        font-size: 0.7rem;\n        line-height: 200%;\n        color: #598392;\n    }\n    a{\n        text-decoration: none;\n        color: #EFF6E0;\n    }\n    img{\n        display: block;\n    }\n    input{\n        font-weight: bold;\n    font-family: \"Montserrat\", sans-serif;\n    }\n"])));var we=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(xe,{}),Object(k.jsx)(fe,{}),Object(k.jsx)(O.a,{path:["/game/:id","/"],children:Object(k.jsx)(je,{})})]})},ve=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,142)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))},Ee=t(61),ye=t(15),ke={popular:[],newGames:[],upcoming:[],searched:[]},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(ye.a)(Object(ye.a)({},e),{},{popular:n.payload.popular,upcoming:n.payload.upcoming,newGames:n.payload.newGames});case"FETCH_SEARCHED":return Object(ye.a)(Object(ye.a)({},e),{},{searched:n.payload.searched});case"CLEAR_SEARCHED":return Object(ye.a)(Object(ye.a)({},e),{},{searched:[]});default:return Object(ye.a)({},e)}},Ce={game:{platforms:[]},screen:{results:[]},isLoading:!0},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_DETAIL":return Object(ye.a)(Object(ye.a)({},e),{},{game:n.payload.game,screen:n.payload.screen,isLoading:!1});case"LOADING_DETAIL":return Object(ye.a)(Object(ye.a)({},e),{},{isLoading:!0});default:return Object(ye.a)({},e)}},De=Object(Ee.b)({games:Ie,detail:Se}),Re=t(103),Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ee.c,Ge=Object(Ee.d)(De,Ue(Object(Ee.a)(Re.a)));g.a.render(Object(k.jsx)(b.a.StrictMode,{children:Object(k.jsx)(h.a,{store:Ge,children:Object(k.jsx)(ie.a,{children:Object(k.jsx)(we,{})})})}),document.getElementById("root")),ve()}},[[138,1,2]]]);
//# sourceMappingURL=main.ad39acc6.chunk.js.map