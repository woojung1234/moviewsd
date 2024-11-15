(function(){"use strict";var e={5653:function(e,t,n){var o=n(5130),r=n(6768);function i(e,t){const n=(0,r.g2)("router-link"),o=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("nav",null,[(0,r.bF)(n,{to:"/"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Home")]))),_:1}),t[2]||(t[2]=(0,r.eW)(" | ")),(0,r.bF)(n,{to:"/about"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("About")]))),_:1})]),(0,r.bF)(o)],64)}var a=n(1241);const u={},c=(0,a.A)(u,[["render",i]]);var s=c,l=n(1387),f=n(4232);const d={class:"movies"},v={class:"movie-list"},p=["src","alt"];function m(e,t,n,o,i,a){return(0,r.uX)(),(0,r.CE)("div",d,[t[0]||(t[0]=(0,r.Lk)("h1",null,"영화 목록",-1)),(0,r.Lk)("div",v,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.movies,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e.id,class:"movie-card"},[(0,r.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title},null,8,p),(0,r.Lk)("h3",null,(0,f.v_)(e.title),1),(0,r.Lk)("p",null,(0,f.v_)(e.overview),1)])))),128))])])}var h=n(4373),b={data(){return{movies:[]}},mounted(){this.fetchMovies()},methods:{async fetchMovies(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{const t=await h.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=1`);this.movies=t.data.results}catch(t){console.error("영화 데이터를 가져오는 데 오류가 발생했습니다.",t)}}}};const g=(0,a.A)(b,[["render",m],["__scopeId","data-v-02aa1da0"]]);var y=g;const k=[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,603))}],w=(0,l.aE)({history:(0,l.LA)("/moviewsd/"),routes:k});var O=w,E=n(782),_=(0,E.y$)({state:{popularMovies:[]},getters:{popularMovies:e=>e.popularMovies},mutations:{SET_POPULAR_MOVIES(e,t){e.popularMovies=t}},actions:{async fetchPopularMovies({commit:e}){try{const t=await h.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR",page:1}});e("SET_POPULAR_MOVIES",t.data.results)}catch(t){console.error("Error fetching popular movies:",t)}}},modules:{}});(0,o.Ef)(s).use(_).use(O).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.8ee8a7fa.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="moviewsd:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(v);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/moviewsd/"}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],c=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var l=c(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkmoviewsd"]=self["webpackChunkmoviewsd"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(5653)}));o=n.O(o)})();
//# sourceMappingURL=app.c42ef568.js.map