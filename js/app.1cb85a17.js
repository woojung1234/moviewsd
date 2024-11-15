(function(){"use strict";var e={8566:function(e,t,o){var r=o(5130),a=o(6768);function i(e,t){const o=(0,a.g2)("router-link"),r=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("nav",null,[(0,a.bF)(o,{to:"/"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Home")]))),_:1}),t[2]||(t[2]=(0,a.eW)(" | ")),(0,a.bF)(o,{to:"/about"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("About")]))),_:1})]),(0,a.bF)(r)],64)}var n=o(1241);const s={},c=(0,n.A)(s,[["render",i]]);var l=c,u=o(1387),v=o(4232);const d={class:"movies"},p={class:"movie-list"},m=["src","alt"];function h(e,t,o,r,i,n){const s=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",d,[t[0]||(t[0]=(0,a.Lk)("h1",null,"영화 목록",-1)),(0,a.Lk)("div",p,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card"},[(0,a.bF)(s,{to:{name:"movie-details",params:{id:e.id}}},{default:(0,a.k6)((()=>[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title},null,8,m),(0,a.Lk)("h3",null,(0,v.v_)(e.title),1),(0,a.Lk)("p",null,(0,v.v_)(e.overview),1)])),_:2},1032,["to"])])))),128))])])}var f=o(4373),g={data(){return{movies:[]}},mounted(){this.fetchMovies()},methods:{async fetchMovies(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{const t=await f.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=1`);this.movies=t.data.results}catch(t){console.error("영화 데이터를 가져오는 데 오류가 발생했습니다.",t)}}}};const _=(0,n.A)(g,[["render",h],["__scopeId","data-v-51251a5e"]]);var k=_;const y={key:0,class:"movie-details"},E=["src","alt"],b={key:1};function M(e,t,o,r,i,n){return n.movie?((0,a.uX)(),(0,a.CE)("div",y,[(0,a.Lk)("h1",null,(0,v.v_)(n.movie.title),1),(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+n.movie.poster_path,alt:n.movie.title},null,8,E),(0,a.Lk)("p",null,(0,v.v_)(n.movie.overview),1),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[t[0]||(t[0]=(0,a.Lk)("strong",null,"평점:",-1)),(0,a.eW)(" "+(0,v.v_)(n.movie.vote_average),1)]),(0,a.Lk)("li",null,[t[1]||(t[1]=(0,a.Lk)("strong",null,"개봉일:",-1)),(0,a.eW)(" "+(0,v.v_)(n.movie.release_date),1)])])])):((0,a.uX)(),(0,a.CE)("div",b,t[2]||(t[2]=[(0,a.Lk)("p",null,"영화 정보를 불러오는 중입니다...",-1)])))}var w=o(782),L={data(){return{movieId:this.$route.params.id}},computed:{...(0,w.L8)(["movieDetails"]),movie(){return this.movieDetails}},methods:{...(0,w.i0)(["fetchMovieDetails"])},async mounted(){await this.fetchMovieDetails(this.movieId)}};const S=(0,n.A)(L,[["render",M],["__scopeId","data-v-293801ce"]]);var O=S;const A={class:"search"},C={key:0,class:"movie-list"},I=["src","alt"],R={key:1};function X(e,t,o,i,n,s){return(0,a.uX)(),(0,a.CE)("div",A,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.query=e),onInput:t[1]||(t[1]=(...e)=>s.searchMovies&&s.searchMovies(...e)),placeholder:"영화 검색..."},null,544),[[r.Jo,n.query]]),n.movies.length>0?((0,a.uX)(),(0,a.CE)("div",C,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card"},[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title},null,8,I),(0,a.Lk)("h3",null,(0,v.v_)(e.title),1),(0,a.Lk)("p",null,(0,v.v_)(e.overview),1)])))),128))])):((0,a.uX)(),(0,a.CE)("div",R,t[2]||(t[2]=[(0,a.Lk)("p",null,"검색 결과가 없습니다.",-1)])))])}var G={data(){return{query:"",movies:[]}},methods:{async searchMovies(){if(this.query.trim())try{const e=await f.A.get(`https://api.themoviedb.org/3/search/movie?api_key=1cc6831125c4a1baf8f809dc1f68ec14&query=${this.query}&language=ko-KR`);this.movies=e.data.results}catch(e){console.error("영화 검색 오류:",e)}}}};const K=(0,n.A)(G,[["render",X],["__scopeId","data-v-7e9bf4f9"]]);var T=K;const D={class:"genre-filter"},P=["value"],F={key:0},V=["src","alt"],j={key:1};function $(e,t,o,i,n,s){return(0,a.uX)(),(0,a.CE)("div",D,[t[3]||(t[3]=(0,a.Lk)("h1",null,"장르별 영화 필터링",-1)),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.selectedGenre=e),onChange:t[1]||(t[1]=(...e)=>s.filterByGenre&&s.filterByGenre(...e))},[t[2]||(t[2]=(0,a.Lk)("option",{value:""},"전체 장르",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.genres,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e.id,value:e.id},(0,v.v_)(e.name),9,P)))),128))],544),[[r.u1,n.selectedGenre]]),n.movies.length?((0,a.uX)(),(0,a.CE)("div",F,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card"},[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title},null,8,V),(0,a.Lk)("h3",null,(0,v.v_)(e.title),1),(0,a.Lk)("p",null,(0,v.v_)(e.overview),1)])))),128))])):((0,a.uX)(),(0,a.CE)("p",j,"장르에 맞는 영화가 없습니다."))])}var q={data(){return{genres:[],selectedGenre:"",movies:[]}},mounted(){this.fetchGenres()},methods:{async fetchGenres(){const e="YOUR_API_KEY";try{const t=await f.A.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${e}&language=ko-KR`);this.genres=t.data.genres}catch(t){console.error("장르 목록 불러오기 오류:",t)}},async filterByGenre(){const e="YOUR_API_KEY";if(this.selectedGenre)try{const t=await f.A.get(`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=${this.selectedGenre}&language=ko-KR`);this.movies=t.data.results}catch(t){console.error("장르별 영화 필터링 오류:",t)}else this.movies=[]}}};const U=(0,n.A)(q,[["render",$],["__scopeId","data-v-0621f951"]]);var x=U;const W=[{path:"/",name:"home",component:k},{path:"/movie/:id",name:"movie-details",component:O,props:!0},{path:"/search",name:"search",component:T},{path:"/genre/:id",name:"genre",component:x,props:!0}],N=(0,u.aE)({history:(0,u.LA)("/moviewsd/"),routes:W});var Y=N,B=(0,w.y$)({state:{popularMovies:[],movieDetails:null,searchedMovies:[],genreMovies:[],genres:[]},getters:{popularMovies:e=>e.popularMovies,movieDetails:e=>e.movieDetails,searchedMovies:e=>e.searchedMovies,genreMovies:e=>e.genreMovies,genres:e=>e.genres},mutations:{SET_POPULAR_MOVIES(e,t){e.popularMovies=t},SET_MOVIE_DETAILS(e,t){e.movieDetails=t},SET_SEARCHED_MOVIES(e,t){e.searchedMovies=t},SET_GENRE_MOVIES(e,t){e.genreMovies=t},SET_GENRES(e,t){e.genres=t}},actions:{async fetchPopularMovies({commit:e}){try{const t=await f.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR",page:1}});e("SET_POPULAR_MOVIES",t.data.results)}catch(t){console.error("Error fetching popular movies:",t)}},async fetchMovieDetails({commit:e},t){try{const o=await f.A.get(`https://api.themoviedb.org/3/movie/${t}`,{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR"}});e("SET_MOVIE_DETAILS",o.data)}catch(o){console.error("Error fetching movie details:",o)}},async fetchSearchedMovies({commit:e},t){try{const o=await f.A.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR",query:t,page:1}});e("SET_SEARCHED_MOVIES",o.data.results)}catch(o){console.error("Error fetching searched movies:",o)}},async fetchGenreMovies({commit:e},t){try{const o=await f.A.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR",with_genres:t,page:1}});e("SET_GENRE_MOVIES",o.data.results)}catch(o){console.error("Error fetching genre movies:",o)}},async fetchGenres({commit:e}){try{const t=await f.A.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR"}});e("SET_GENRES",t.data.genres)}catch(t){console.error("Error fetching genres:",t)}}},modules:{}});(0,r.Ef)(l).use(B).use(Y).mount("#app")}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,r,a,i){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||n>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[c])}))?r.splice(c--,1):(s=!1,i<n&&(n=i));if(s){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,a,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,n=r[0],s=r[1],c=r[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(c)var u=c(o)}for(t&&t(r);l<n.length;l++)i=n[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},r=self["webpackChunkmoviewsd"]=self["webpackChunkmoviewsd"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[504],(function(){return o(8566)}));r=o.O(r)})();
//# sourceMappingURL=app.1cb85a17.js.map