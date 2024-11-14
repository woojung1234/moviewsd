(function(){"use strict";var e={5745:function(e,t,n){var o=n(5130),r=n(6768);function i(e,t){const n=(0,r.g2)("router-link"),o=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("nav",null,[(0,r.bF)(n,{to:"/about"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("About")]))),_:1}),t[2]||(t[2]=(0,r.eW)(" | ")),(0,r.bF)(n,{to:"/movies"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("Movies")]))),_:1})]),(0,r.bF)(o)],64)}var u=n(1241);const a={},c=(0,u.A)(a,[["render",i]]);var s=c,f=n(1387),l=n(4232);const v={key:0},d=["src"],p={key:1};function m(e,t,n,o,i,u){return(0,r.uX)(),(0,r.CE)("div",null,[t[0]||(t[0]=(0,r.Lk)("h1",null,"Movie List",-1)),i.movies.length?((0,r.uX)(),(0,r.CE)("div",v,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.movies,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e.id},[(0,r.Lk)("h3",null,(0,l.v_)(e.title),1),(0,r.Lk)("img",{src:"https://image.tmdb.org/t/p/w200"+e.poster_path,alt:"Movie Poster"},null,8,d),(0,r.Lk)("p",null,(0,l.v_)(e.overview),1)])))),128))])):((0,r.uX)(),(0,r.CE)("p",p,"Loading movies..."))])}var h=n(4373),b={data(){return{movies:[]}},mounted(){this.fetchMovies()},methods:{async fetchMovies(){try{const e=await h.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14"}});this.movies=e.data.results}catch(e){console.error("Error fetching movies:",e)}}}};const g=(0,u.A)(b,[["render",m]]);var y=g;const k=[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,603))},{path:"/movies",name:"movies",component:y}],w=(0,f.aE)({history:(0,f.LA)("/"),routes:k});var E=w,O=n(782),j=(0,O.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.Ef)(s).use(j).use(E).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var u=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],i=e[f][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.252ecfa1.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="moviewsd:";n.l=function(o,r,i,u){if(e[o])e[o].push(r);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var v=function(t,n){a.onerror=a.onload=null,clearTimeout(d);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(v.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=v.bind(null,a.onerror),a.onload=v.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var u=n.p+n.u(t),a=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,u=o[0],a=o[1],c=o[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var f=c(n)}for(t&&t(o);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},o=self["webpackChunkmoviewsd"]=self["webpackChunkmoviewsd"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(5745)}));o=n.O(o)})();
//# sourceMappingURL=app.77ea6381.js.map