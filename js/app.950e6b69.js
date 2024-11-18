(function(){"use strict";var e={3067:function(e,t,o){var i=o(5130),a=o(6768);function r(e,t){const o=(0,a.g2)("router-link"),i=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("nav",null,[(0,a.bF)(o,{to:"/"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Home")]))),_:1}),t[4]||(t[4]=(0,a.eW)(" | ")),(0,a.bF)(o,{to:"/popular"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("Popular")]))),_:1}),t[5]||(t[5]=(0,a.eW)(" | ")),(0,a.bF)(o,{to:"/search"},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("Search Movies")]))),_:1}),t[6]||(t[6]=(0,a.eW)(" | ")),(0,a.bF)(o,{to:"/genre/28"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("Genre Movies")]))),_:1}),t[7]||(t[7]=(0,a.eW)(" | "))]),(0,a.bF)(i)],64)}var n=o(1241);const s={},l=(0,n.A)(s,[["render",r]]);var c=l,u=o(1387),v=o(4232);const d={class:"home"},p={key:0,class:"featured-movie"},m=["src","alt"],h={class:"featured-info"},g={class:"genre-sections"},f=["onWheel"],k=["src","alt"];function y(e,t,o,r,n,s){const l=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",d,[n.featuredMovie?((0,a.uX)(),(0,a.CE)("div",p,[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/original"+n.featuredMovie.backdrop_path,alt:n.featuredMovie.title,class:"featured-image"},null,8,m),(0,a.Lk)("div",h,[(0,a.Lk)("h1",null,(0,v.v_)(n.featuredMovie.title),1),(0,a.Lk)("p",null,(0,v.v_)(n.featuredMovie.overview),1)])])):(0,a.Q3)("",!0),(0,a.Lk)("div",g,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.genres,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:e.name,class:"genre-section",ref_for:!0,ref:"genreSections"},[(0,a.Lk)("h2",null,(0,v.v_)(e.name),1),(0,a.Lk)("div",{class:"movie-slider",onWheel:(0,i.D$)((e=>s.handleScroll(e,t)),["prevent"])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card"},[(0,a.bF)(l,{to:{name:"movie-details",params:{id:e.id}}},{default:(0,a.k6)((()=>[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w300"+e.poster_path,alt:e.title},null,8,k),(0,a.Lk)("h3",null,(0,v.v_)(e.title),1)])),_:2},1032,["to"])])))),128))],40,f)])))),128))])])}var _=o(4373),b={data(){return{featuredMovie:null,genres:[{name:"최신",endpoint:"now_playing",movies:[]},{name:"인기",endpoint:"popular",movies:[]},{name:"코믹",genreId:35,movies:[]},{name:"액션",genreId:28,movies:[]},{name:"로맨스",genreId:10749,movies:[]}]}},async mounted(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{const t=await _.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=1`);this.featuredMovie=t.data.results[0];for(let o of this.genres){let t=o.endpoint?`https://api.themoviedb.org/3/movie/${o.endpoint}?api_key=${e}&language=ko-KR&page=1`:`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=${o.genreId}&language=ko-KR&page=1`;const i=await _.A.get(t);o.movies=i.data.results.slice(0,10)}}catch(t){console.error("영화 데이터를 불러오는 데 실패했습니다.",t)}},methods:{handleScroll(e,t){const o=this.$refs.genreSections[t].querySelector(".movie-slider");o.scrollLeft+=e.deltaY>0?100:-100}}};const E=(0,n.A)(b,[["render",y],["__scopeId","data-v-778b4f48"]]);var L=E;const w={key:0,class:"movie-details"},M=["src","alt"],S={key:1};function C(e,t,o,i,r,n){return n.movie?((0,a.uX)(),(0,a.CE)("div",w,[(0,a.Lk)("h1",null,(0,v.v_)(n.movie.title),1),(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+n.movie.poster_path,alt:n.movie.title},null,8,M),(0,a.Lk)("p",null,(0,v.v_)(n.movie.overview),1),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[t[0]||(t[0]=(0,a.Lk)("strong",null,"평점:",-1)),(0,a.eW)(" "+(0,v.v_)(n.movie.vote_average),1)]),(0,a.Lk)("li",null,[t[1]||(t[1]=(0,a.Lk)("strong",null,"개봉일:",-1)),(0,a.eW)(" "+(0,v.v_)(n.movie.release_date),1)])])])):((0,a.uX)(),(0,a.CE)("div",S,t[2]||(t[2]=[(0,a.Lk)("p",null,"영화 정보를 불러오는 중입니다...",-1)])))}var I=o(782),X={data(){return{movieId:this.$route.params.id}},computed:{...(0,I.L8)(["movieDetails"]),movie(){return this.movieDetails}},methods:{...(0,I.i0)(["fetchMovieDetails"])},async mounted(){await this.fetchMovieDetails(this.movieId)}};const A=(0,n.A)(X,[["render",C],["__scopeId","data-v-293801ce"]]);var O=A;const T={class:"search"},K={key:0,class:"movie-list"},R=["src","alt"],$={key:1};function F(e,t,o,r,n,s){return(0,a.uX)(),(0,a.CE)("div",T,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.query=e),onInput:t[1]||(t[1]=(...t)=>e.debouncedSearch&&e.debouncedSearch(...t)),placeholder:"영화 검색..."},null,544),[[i.Jo,n.query]]),n.movies.length>0?((0,a.uX)(),(0,a.CE)("div",K,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card"},[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title},null,8,R),(0,a.Lk)("h3",null,(0,v.v_)(e.title),1),(0,a.Lk)("p",null,(0,v.v_)(e.overview),1)])))),128))])):((0,a.uX)(),(0,a.CE)("div",$,t[2]||(t[2]=[(0,a.Lk)("p",null,"검색 결과가 없습니다.",-1)])))])}var P=o(8626),D={data(){return{query:"",movies:[]}},created(){this.debouncedSearch=(0,P.debounce)(this.searchMovies,500)},methods:{async searchMovies(){if(this.query.trim())try{const e=await _.A.get(`https://api.themoviedb.org/3/search/movie?api_key=1cc6831125c4a1baf8f809dc1f68ec14&query=${this.query}&language=ko-KR`);this.movies=e.data.results}catch(e){console.error("영화 검색 오류:",e),this.movies=[],alert("영화 검색에 실패했습니다. 다시 시도해주세요.")}else this.movies=[]}}};const V=(0,n.A)(D,[["render",F],["__scopeId","data-v-6253fcf5"]]);var W=V;const j={class:"genre-movies"},q={class:"movie-slider"},x=["src","alt"];function G(e,t,o,i,r,n){return(0,a.uX)(),(0,a.CE)("div",j,[t[0]||(t[0]=(0,a.Lk)("h1",null,"장르별 영화",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.genres,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"genre-section"},[(0,a.Lk)("h2",null,(0,v.v_)(e.name),1),(0,a.Lk)("div",q,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card"},[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title},null,8,x),(0,a.Lk)("h3",null,(0,v.v_)(e.title),1)])))),128))])])))),128))])}var H={data(){return{genres:[{id:35,name:"코믹",movies:[]},{id:28,name:"액션",movies:[]},{id:10749,name:"로맨스",movies:[]}]}},async created(){for(const t of this.genres)try{const e=await _.A.get(`https://api.themoviedb.org/3/discover/movie?api_key=1cc6831125c4a1baf8f809dc1f68ec14&with_genres=${t.id}&language=ko-KR`);t.movies=e.data.results}catch(e){console.error(`${t.name} 장르 영화 로드 오류:`,e),t.movies=[]}}};const N=(0,n.A)(H,[["render",G],["__scopeId","data-v-084a29ce"]]);var Q=N;const U={class:"trend-movies"},J={class:"view-options"},Y={key:0,class:"movie-list table-view"},z=["src","alt"],B={class:"pagination"},Z=["disabled"],ee=["src","alt"],te={key:0,class:"loading"};function oe(e,t,o,i,r,n){return(0,a.uX)(),(0,a.CE)("div",U,[t[5]||(t[5]=(0,a.Lk)("h1",null,"대세 콘텐츠",-1)),(0,a.Lk)("div",J,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=e=>n.changeView("table"))},"Table View"),(0,a.Lk)("button",{onClick:t[1]||(t[1]=e=>n.changeView("infinite"))},"Infinite Scroll")]),"table"===r.viewType?((0,a.uX)(),(0,a.CE)("div",Y,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card"},[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title},null,8,z),(0,a.Lk)("h3",null,(0,v.v_)(e.title),1)])))),128)),(0,a.Lk)("div",B,[(0,a.Lk)("button",{onClick:t[2]||(t[2]=e=>n.changePage("previous")),disabled:1===r.page},"이전",8,Z),(0,a.Lk)("span",null,"페이지 "+(0,v.v_)(r.page),1),(0,a.Lk)("button",{onClick:t[3]||(t[3]=e=>n.changePage("next"))},"다음")])])):(0,a.Q3)("",!0),"infinite"===r.viewType?((0,a.uX)(),(0,a.CE)("div",{key:1,class:"movie-list infinite-scroll",onScroll:t[4]||(t[4]=(...e)=>n.loadMore&&n.loadMore(...e)),ref:"scrollContainer"},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card"},[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title},null,8,ee),(0,a.Lk)("h3",null,(0,v.v_)(e.title),1)])))),128)),r.loading?((0,a.uX)(),(0,a.CE)("div",te,"Loading...")):(0,a.Q3)("",!0)],544)):(0,a.Q3)("",!0)])}var ie={data(){return{viewType:"table",movies:[],page:1,loading:!1,itemsPerPage:30}},mounted(){this.fetchMovies()},methods:{async fetchMovies(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{const t=await _.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${this.page}`);this.movies=t.data.results}catch(t){console.error("영화 데이터를 가져오는 데 오류가 발생했습니다.",t)}finally{this.loading=!1}},changeView(e){this.viewType=e,this.page=1,this.movies=[],this.fetchMovies()},changePage(e){"previous"===e&&this.page>1?this.page--:"next"===e&&this.page++,this.fetchMovies()},async loadMore(){const e=this.$refs.scrollContainer,t=e.scrollHeight===e.scrollTop+e.clientHeight;if(t&&!this.loading&&"infinite"===this.viewType){this.loading=!0,this.page++;try{const e="1cc6831125c4a1baf8f809dc1f68ec14",t=await _.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${this.page}`);this.movies=[...this.movies,...t.data.results]}catch(o){console.error("영화 데이터를 가져오는 데 오류가 발생했습니다.",o)}finally{this.loading=!1}}}}};const ae=(0,n.A)(ie,[["render",oe],["__scopeId","data-v-4da3d48a"]]);var re=ae;const ne=[{path:"/",name:"home",component:L},{path:"/popular",name:"popular",component:re},{path:"/movie/:id",name:"movie-details",component:O,props:!0},{path:"/search",name:"search",component:W},{path:"/genre/:id",name:"genre",component:Q,props:!0}],se=(0,u.aE)({history:(0,u.LA)("/moviewsd/"),routes:ne});var le=se,ce=(0,I.y$)({state:{popularMovies:[],movieDetails:null,searchedMovies:[],genreMovies:[],genres:[]},getters:{popularMovies:e=>e.popularMovies,movieDetails:e=>e.movieDetails,searchedMovies:e=>e.searchedMovies,genreMovies:e=>e.genreMovies,genres:e=>e.genres},mutations:{SET_POPULAR_MOVIES(e,t){e.popularMovies=t},SET_MOVIE_DETAILS(e,t){e.movieDetails=t},SET_SEARCHED_MOVIES(e,t){e.searchedMovies=t},SET_GENRE_MOVIES(e,t){e.genreMovies=t},SET_GENRES(e,t){e.genres=t}},actions:{async fetchPopularMovies({commit:e}){try{const t=await _.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR",page:1}});e("SET_POPULAR_MOVIES",t.data.results)}catch(t){console.error("Error fetching popular movies:",t)}},async fetchMovieDetails({commit:e},t){try{const o=await _.A.get(`https://api.themoviedb.org/3/movie/${t}`,{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR"}});e("SET_MOVIE_DETAILS",o.data)}catch(o){console.error("Error fetching movie details:",o)}},async fetchSearchedMovies({commit:e},t){try{const o=await _.A.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR",query:t,page:1}});e("SET_SEARCHED_MOVIES",o.data.results)}catch(o){console.error("Error fetching searched movies:",o)}},async fetchGenreMovies({commit:e},t){try{const o=await _.A.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR",with_genres:t,page:1}});e("SET_GENRE_MOVIES",o.data.results)}catch(o){console.error("Error fetching genre movies:",o)}},async fetchGenres({commit:e}){try{const t=await _.A.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR"}});e("SET_GENRES",t.data.genres)}catch(t){console.error("Error fetching genres:",t)}}},modules:{}});(0,i.Ef)(c).use(ce).use(le).mount("#app")}},t={};function o(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=e,function(){var e=[];o.O=function(t,i,a,r){if(!i){var n=1/0;for(u=0;u<e.length;u++){i=e[u][0],a=e[u][1],r=e[u][2];for(var s=!0,l=0;l<i.length;l++)(!1&r||n>=r)&&Object.keys(o.O).every((function(e){return o.O[e](i[l])}))?i.splice(l--,1):(s=!1,r<n&&(n=r));if(s){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,a,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,r,n=i[0],s=i[1],l=i[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var u=l(o)}for(t&&t(i);c<n.length;c++)r=n[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},i=self["webpackChunkmoviewsd"]=self["webpackChunkmoviewsd"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[504],(function(){return o(3067)}));i=o.O(i)})();
//# sourceMappingURL=app.950e6b69.js.map