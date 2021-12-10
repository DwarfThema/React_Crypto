(this.webpackJsonpreact_typescript=this.webpackJsonpreact_typescript||[]).push([[0],{67:function(n,e,t){"use strict";t.r(e);var c=t(25),o=t.n(c),i=t(11),r=t(17),a=t(8),s=t(0),l=t(7),d=t(18),b=t(4),j="https://api.coinpaprika.com/v1";function h(){return fetch("".concat(j,"/coins")).then((function(n){return n.json()}))}function u(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(j,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}var p=t(26),x=t.n(p),f=t(1);var m=function(n){var e=n.coinId,t=Object(i.useQuery)(["ohlcv",e],(function(){return u(e)}),{refetchInterval:1e4}),c=t.isLoading,o=t.data;return Object(f.jsx)("div",{children:c?"Loading chart...":Object(f.jsx)(x.a,{type:"line",series:[{name:"Price",data:null===o||void 0===o?void 0:o.map((function(n){return n.close}))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===o||void 0===o?void 0:o.map((function(n){return n.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}})})};var O,g,v,y,k,w,C,L,I,q,Q=function(n){var e=n.coinId,t=Object(i.useQuery)(["ohlcv",e],(function(){return u(e)}),{refetchInterval:1e4}),c=t.isLoading,o=t.data;return Object(f.jsx)("div",{children:c?"Loading chart...":Object(f.jsx)(x.a,{type:"candlestick",series:[{name:"Price",data:null===o||void 0===o?void 0:o.map((function(n){return{x:n.time_close,y:[n.open,n.high,n.low,n.close]}}))}],options:{theme:{mode:"dark"},chart:{type:"candlestick",height:900,background:"transparent",foreColor:"black",animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},xaxis:{type:"datetime"},yaxis:{show:!1}}})})},z=t(27),_=l.c.div(O||(O=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),M=l.c.div(g||(g=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),P=l.c.p(v||(v=Object(a.a)(["\n  margin: 20px 0px;\n"]))),S=l.c.div(y||(y=Object(a.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),T=l.c.header(k||(k=Object(a.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),F=l.c.h1(w||(w=Object(a.a)(["\n  font-size: 48px;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.theme.pointColor})),R=l.c.div(C||(C=Object(a.a)([""]))),B=l.c.div(L||(L=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),D=l.c.span(I||(I=Object(a.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.activated?n.theme.pointColor:n.theme.textColor})),$=l.c.button(q||(q=Object(a.a)([""])));var H,J,A,E,G,U,K,N=function(){var n,e=Object(b.h)().coinId,t=Object(b.e)().state,c=Object(b.f)("/:coinId/chart"),o=Object(b.f)("/:coinId/price"),r=Object(i.useQuery)(["info",e],(function(){return function(n){return fetch("".concat(j,"/coins/").concat(n)).then((function(n){return n.json()}))}(e)})),a=r.isLoading,s=r.data,l=Object(i.useQuery)(["price",e],(function(){return function(n){return fetch("".concat(j,"/tickers/").concat(n)).then((function(n){return n.json()}))}(e)}),{refetchInterval:5e3}),h=l.isLoading,u=l.data,p=a||h;return Object(f.jsxs)(S,{children:[Object(f.jsx)(z.a,{children:Object(f.jsx)("title",{children:(null===t||void 0===t?void 0:t.name)?t.name:p?"Loading...":null===s||void 0===s?void 0:s.name})}),Object(f.jsx)(T,{children:Object(f.jsx)(F,{children:(null===t||void 0===t?void 0:t.name)?t.name:p?"Loading...":null===s||void 0===s?void 0:s.name})})," ",Object(f.jsxs)($,{children:[Object(f.jsx)(d.b,{to:"/",children:"Back to Home"})," "]}),p?Object(f.jsx)(R,{children:"Loading..."}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(_,{children:[Object(f.jsxs)(M,{children:[Object(f.jsx)("span",{children:"Rank:"}),Object(f.jsx)("span",{children:null===s||void 0===s?void 0:s.rank})]}),Object(f.jsxs)(M,{children:[Object(f.jsx)("span",{children:"Symbol:"}),Object(f.jsxs)("span",{children:["$",null===s||void 0===s?void 0:s.symbol]})]}),Object(f.jsxs)(M,{children:[Object(f.jsx)("span",{children:"Price:"}),Object(f.jsxs)("span",{children:["$",null===u||void 0===u||null===(n=u.quotes)||void 0===n?void 0:n.USD.price.toFixed(3)]})]})]}),Object(f.jsx)(P,{children:null===s||void 0===s?void 0:s.description}),Object(f.jsxs)(_,{children:[Object(f.jsxs)(M,{children:[Object(f.jsx)("span",{children:"Total Suply:"}),Object(f.jsx)("span",{children:null===u||void 0===u?void 0:u.total_supply})]}),Object(f.jsxs)(M,{children:[Object(f.jsx)("span",{children:"Max Supply:"}),Object(f.jsx)("span",{children:null===u||void 0===u?void 0:u.max_supply})]})]}),Object(f.jsxs)(B,{children:[Object(f.jsx)(D,{activated:null!==c,children:Object(f.jsx)(d.b,{to:"/".concat(e,"/chart"),children:"Chart"})}),Object(f.jsx)(D,{activated:null!==o,children:Object(f.jsx)(d.b,{to:"/".concat(e,"/price"),children:"Price"})})]}),Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{path:"chart",element:Object(f.jsx)(m,{coinId:e})}),Object(f.jsx)(b.a,{path:"price",element:Object(f.jsx)(Q,{coinId:e})})]})]})]})},V=l.c.div(H||(H=Object(a.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),W=l.c.header(J||(J=Object(a.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),X=l.c.h1(A||(A=Object(a.a)(["\n  font-size: 48px;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.theme.pointColor})),Y=l.c.ul(E||(E=Object(a.a)([""]))),Z=l.c.li(G||(G=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n    align-items: center;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor}),(function(n){return n.theme.pointColor})),nn=l.c.div(U||(U=Object(a.a)([""]))),en=l.c.img(K||(K=Object(a.a)(["\n  height: 25px;\n  margin-right: 10px;\n"])));var tn=function(){var n=Object(i.useQuery)("allCoins",h),e=n.isLoading,t=n.data;return Object(f.jsxs)(V,{children:[Object(f.jsxs)(z.a,{children:[Object(f.jsx)("title",{children:"\ucf54\uc778"}),Object(f.jsx)("link",{rel:"favicon",href:""})]}),Object(f.jsx)(W,{children:Object(f.jsx)(X,{children:"\ucf54\uc778"})}),e?Object(f.jsx)(nn,{children:"Loading..."}):Object(f.jsx)(Y,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(f.jsx)(Z,{children:Object(f.jsxs)(d.b,{to:"/".concat(n.id),state:{name:n.name},children:[Object(f.jsx)(en,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var cn,on,rn=function(){return Object(f.jsx)(d.a,{children:Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{path:"/",element:Object(f.jsx)(tn,{})}),Object(f.jsx)(b.a,{path:"/:coinId/*",element:Object(f.jsx)(N,{})})]})})},an={bgColor:"#2f3640",textColor:"#f5f6fa",pointColor:"#9c88ff"},sn={bgColor:"#f5f6fa",textColor:"#2f3640",pointColor:"#9c88ff"},ln=Object(l.b)(cn||(cn=Object(a.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');\n  /* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n*{\n  box-sizing: border-box;\n}\nbody{  \n  font-weight: 300;\n  font-family: 'Roboto Mono', monospace;\n  background-color: ",";\n  color: ",";\n  line-height: 1.2;\n}\na{\n  text-decoration: none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor})),dn=l.c.button(on||(on=Object(a.a)([""])));var bn=function(){var n=Object(s.useState)(an),e=Object(r.a)(n,2),t=e[0],c=e[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(dn,{onClick:function(){c(t===an?sn:an)},children:"Change Theme"}),Object(f.jsxs)(l.a,{theme:t,children:[Object(f.jsx)(ln,{}),Object(f.jsx)(rn,{})]})]})},jn=t(45),hn=new i.QueryClient;o.a.render(Object(f.jsxs)(i.QueryClientProvider,{client:hn,children:[Object(f.jsx)(bn,{}),Object(f.jsx)(jn.ReactQueryDevtools,{initialIsOpen:!0})]}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.6b75700c.chunk.js.map