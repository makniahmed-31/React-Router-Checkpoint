(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(19),o=n.n(l),i=(n(27),n(21)),c=n(9),s=(n(28),function(e){return r.a.createElement("div",{className:"container-filter"},r.a.createElement("h1",null,"MOVIE-APP"),r.a.createElement("input",{className:"filter",type:"text",onChange:function(t){e.FindMovie(t.target.value)},placeholder:"Search ..."}),r.a.createElement("br",null))}),m=n(6),p=function(e){var t=Object(a.useState)({}),n=Object(c.a)(t,2),l=n[0],o=n[1],i=Object(a.useState)("pop-down"),s=Object(c.a)(i,2),p=s[0],d=s[1];return r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"btn-add",onClick:function(){d("pop-up")}},"Add New Film"),r.a.createElement("div",{className:p},r.a.createElement("input",{type:"text",placeholder:"title",onChange:function(e){o(Object(m.a)(Object(m.a)({},l),{},{title:e.target.value}))},className:"add-new-film"}),r.a.createElement("input",{type:"text",placeholder:"description",onChange:function(e){o(Object(m.a)(Object(m.a)({},l),{},{description:e.target.value}))},className:"add-new-film"}),r.a.createElement("input",{type:"text",placeholder:"posterUrl",onChange:function(e){o(Object(m.a)(Object(m.a)({},l),{},{posterUrl:e.target.value}))},className:"add-new-film"}),r.a.createElement("input",{type:"text",placeholder:"rate",onChange:function(e){o(Object(m.a)(Object(m.a)({},l),{},{rate:e.target.value}))},className:"add-new-film"}),r.a.createElement("button",{className:"btn-add-new",onClick:function(){return e.AddFn(l)}},"Add New Film"),r.a.createElement("button",{className:"btn-cancel",onClick:function(){d("pop-down")}},"X Cancel")))},d=n(16),u=function(e){var t=e.movielist,n=[],a=0;n.forEach((function(e){return a+++e})),console.log(n);var l=function(e){e.target.style.fill="red",console.log(e)};return r.a.createElement("div",{className:"container-movielist"},t.filter((function(t){return t.title.toUpperCase().includes(e.Filtermovie.toUpperCase())})).map((function(e,t){return r.a.createElement("div",{className:"list",key:t},r.a.createElement("p",null,function(e){for(var t=[],a=0;a<e;a++)t.push(r.a.createElement(d.a,{className:"Fi",key:a,onClick:l}));return n.push(t),t}(10)),r.a.createElement("img",{src:e.posterUrl,alt:"poster",className:"poster"}),r.a.createElement("h1",{className:"title"},e.title),r.a.createElement("p",{className:"infos"},e.description),r.a.createElement("p",null,e.rate,function(e){for(var t=[],n=0;n<e;n++)t.push(r.a.createElement(d.a,{className:"fi",color:"red",fill:"yellow"}));return t}(e.rate)))})))},b=n(8),f=function(){return r.a.createElement("nav",null,r.a.createElement("h3",null,"Logo"),r.a.createElement("ul",{className:"navmenu"},r.a.createElement(b.b,{to:"/MovieList"},r.a.createElement("li",null,"Movie Lists")),r.a.createElement(b.b,{to:"/Filter"},r.a.createElement("li",null,"Search bar")),r.a.createElement(b.b,{to:"/Add"},r.a.createElement("li",null,"Add New Films"))))},h=n(1);var v=function(){var e=Object(a.useState)([{title:"The Girl Next Door",description:"A teenager is dreams come true when a former porn star moves in next door and they fall in love",posterUrl:"https://pic.egybest.net/i/WmFwZndlY21ibXBURUVjdnRrTmptRW1Dam1n.jpg",rate:6},{title:"Enola Holmes",description:"Enola Holmes est un film de aventure am\xe9ricano-britannique r\xe9alis\xe9 par Harry Bradbeer sorti en 2020 sur le service Netflix",posterUrl:"https://pic.egybest.net/i/WmFwZndlY21ZTE5wRXZOZWNjTkVtcHB2bUVtcGo.jpg",rate:5},{title:"Mulan",description:"A teenager is dreams come true when a former porn star moves in next door and they fall in love",posterUrl:"https://pic.egybest.net/i/WmFwZndlY21ZcG1tam12bWptYWNtbW1ETGNtWWJtdm1F.jpg",rate:8},{title:"Tenet",description:"A teenager is dreams come true when a former porn star moves in next door and they fall in love",posterUrl:"https://pic.egybest.net/i/WmFwZndlY21ZVGptbW1ZWUVFY3ZOWUdObVBQbWo.jpg",rate:4},{title:"Project Power",description:"A teenager is dreams come true when a former porn star moves in next door and they fall in love",posterUrl:"https://pic.egybest.net/i/WmFwZndlY21ZTGNtcEVtWWpFY212bGNOYm12bXZtQnc.jpg",rate:3},{title:"The Girl Next Door",description:"A teenager is dreams come true when a former porn star moves in next door and they fall in love",posterUrl:"https://pic.egybest.net/i/WmFwZndlY21ibXBURUVjdnRrTmptRW1Dam1n.jpg",rate:2},{title:"Enola Holmes",description:"Enola Holmes est un film de aventure am\xe9ricano-britannique r\xe9alis\xe9 par Harry Bradbeer sorti en 2020 sur le service Netflix",posterUrl:"https://pic.egybest.net/i/WmFwZndlY21ZTE5wRXZOZWNjTkVtcHB2bUVtcGo.jpg",rate:1},{title:"Mulan",description:"A teenager is dreams come true when a former porn star moves in next door and they fall in love",posterUrl:"https://pic.egybest.net/i/WmFwZndlY21ZcG1tam12bWptYWNtbW1ETGNtWWJtdm1F.jpg",rate:8},{title:"Tenet",description:"A teenager is dreams come true when a former porn star moves in next door and they fall in love",posterUrl:"https://pic.egybest.net/i/WmFwZndlY21ZVGptbW1ZWUVFY3ZOWUdObVBQbWo.jpg",rate:9},{title:"Project Power",description:"A teenager is dreams come true when a former porn star moves in next door and they fall in love",posterUrl:"https://pic.egybest.net/i/WmFwZndlY21ZTGNtcEVtWWpFY212bGNOYm12bXZtQnc.jpg",rate:4},{title:"The Girl Next Door",description:"A teenager is dreams come true when a former porn star moves in next door and they fall in love",posterUrl:"https://pic.egybest.net/i/WmFwZndlY21ibXBURUVjdnRrTmptRW1Dam1n.jpg",rate:6},{title:"Enola Holmes",description:"Enola Holmes est un film de aventure am\xe9ricano-britannique r\xe9alis\xe9 par Harry Bradbeer sorti en 2020 sur le service Netflix",posterUrl:"https://pic.egybest.net/i/WmFwZndlY21ZTE5wRXZOZWNjTkVtcHB2bUVtcGo.jpg",rate:5}]),t=Object(c.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(""),m=Object(c.a)(o,2),d=m[0],v=m[1],E=function(e){v(e)},g=function(e){l([].concat(Object(i.a)(n),[e]))};return r.a.createElement(b.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/Filter",component:function(e){return r.a.createElement(s,Object.assign({},e,{FindMovie:E}))}}),r.a.createElement(h.a,{path:"/Add",component:function(e){return r.a.createElement(p,Object.assign({},e,{AddFn:g}))}}),r.a.createElement(h.a,{path:"/MovieList",component:function(e){return r.a.createElement(u,Object.assign({},e,{movielist:n,Filtermovie:d}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.b6b871ee.chunk.js.map