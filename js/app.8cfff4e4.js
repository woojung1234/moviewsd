(function(){"use strict";var e={2881:function(e,t,i){var o=i(5130),a=i(6768);function s(e,t){const i=(0,a.g2)("router-link"),o=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("nav",null,[(0,a.bF)(i,{to:"/"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Home")]))),_:1}),t[4]||(t[4]=(0,a.eW)(" | ")),(0,a.bF)(i,{to:"/popular"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("Popular")]))),_:1}),t[5]||(t[5]=(0,a.eW)(" | ")),(0,a.bF)(i,{to:"/search"},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("Search Movies")]))),_:1}),t[6]||(t[6]=(0,a.eW)(" | ")),(0,a.bF)(i,{to:"/genre/28"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("Genre Movies")]))),_:1}),t[7]||(t[7]=(0,a.eW)(" | "))]),(0,a.bF)(o)],64)}var r=i(1241);const n={},l=(0,r.A)(n,[["render",s]]);var c=l,u=i(1387),v=i(4232);const d={class:"home"},p={key:0,class:"featured-movie"},h=["src","alt"],m={class:"featured-info"},g={class:"genre-sections"},f=["onWheel"],k=["src","alt"];function _(e,t,i,s,r,n){const l=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",d,[r.featuredMovie?((0,a.uX)(),(0,a.CE)("div",p,[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/original"+r.featuredMovie.backdrop_path,alt:r.featuredMovie.title,class:"featured-image"},null,8,h),(0,a.Lk)("div",m,[(0,a.Lk)("h1",null,(0,v.v_)(r.featuredMovie.title),1),(0,a.Lk)("p",null,(0,v.v_)(r.featuredMovie.overview),1)])])):(0,a.Q3)("",!0),(0,a.Lk)("div",g,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.genres,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:e.name,class:"genre-section",ref_for:!0,ref:"genreSections"},[(0,a.Lk)("h2",null,(0,v.v_)(e.name),1),(0,a.Lk)("div",{class:"movie-slider",onWheel:(0,o.D$)((e=>n.handleScroll(e,t)),["prevent"])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card"},[(0,a.bF)(l,{to:{name:"movie-details",params:{id:e.id}}},{default:(0,a.k6)((()=>[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w300"+e.poster_path,alt:e.title},null,8,k),(0,a.Lk)("h3",null,(0,v.v_)(e.title),1)])),_:2},1032,["to"])])))),128))],40,f)])))),128))])])}var y=i(4373),b={data(){return{featuredMovie:null,genres:[{name:"최신",endpoint:"now_playing",movies:[]},{name:"인기",endpoint:"popular",movies:[]},{name:"코믹",genreId:35,movies:[]},{name:"액션",genreId:28,movies:[]},{name:"로맨스",genreId:10749,movies:[]}]}},async mounted(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{const t=await y.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=1`);this.featuredMovie=t.data.results[0];for(let i of this.genres){let t=i.endpoint?`https://api.themoviedb.org/3/movie/${i.endpoint}?api_key=${e}&language=ko-KR&page=1`:`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=${i.genreId}&language=ko-KR&page=1`;const o=await y.A.get(t);i.movies=o.data.results.slice(0,10)}}catch(t){console.error("영화 데이터를 불러오는 데 실패했습니다.",t)}},methods:{handleScroll(e,t){const i=this.$refs.genreSections[t].querySelector(".movie-slider");i.scrollLeft+=e.deltaY>0?100:-100}}};const E=(0,r.A)(b,[["render",_],["__scopeId","data-v-778b4f48"]]);var L=E;const M={key:0,class:"movie-details"},w=["src","alt"],S={key:1};function C(e,t,i,o,s,r){return r.movie?((0,a.uX)(),(0,a.CE)("div",M,[(0,a.Lk)("h1",null,(0,v.v_)(r.movie.title),1),(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+r.movie.poster_path,alt:r.movie.title},null,8,w),(0,a.Lk)("p",null,(0,v.v_)(r.movie.overview),1),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[t[0]||(t[0]=(0,a.Lk)("strong",null,"평점:",-1)),(0,a.eW)(" "+(0,v.v_)(r.movie.vote_average),1)]),(0,a.Lk)("li",null,[t[1]||(t[1]=(0,a.Lk)("strong",null,"개봉일:",-1)),(0,a.eW)(" "+(0,v.v_)(r.movie.release_date),1)])])])):((0,a.uX)(),(0,a.CE)("div",S,t[2]||(t[2]=[(0,a.Lk)("p",null,"영화 정보를 불러오는 중입니다...",-1)])))}var I=i(782),X={data(){return{movieId:this.$route.params.id}},computed:{...(0,I.L8)(["movieDetails"]),movie(){return this.movieDetails}},methods:{...(0,I.i0)(["fetchMovieDetails"])},async mounted(){await this.fetchMovieDetails(this.movieId)}};const A=(0,r.A)(X,[["render",C],["__scopeId","data-v-293801ce"]]);var O=A;const R={class:"search"},T={key:0,class:"movie-list"},K=["src","alt"],P={key:1};function $(e,t,i,s,r,n){return(0,a.uX)(),(0,a.CE)("div",R,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.query=e),onInput:t[1]||(t[1]=(...t)=>e.debouncedSearch&&e.debouncedSearch(...t)),placeholder:"영화 검색..."},null,544),[[o.Jo,r.query]]),r.movies.length>0?((0,a.uX)(),(0,a.CE)("div",T,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card"},[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title},null,8,K),(0,a.Lk)("h3",null,(0,v.v_)(e.title),1),(0,a.Lk)("p",null,(0,v.v_)(e.overview),1)])))),128))])):((0,a.uX)(),(0,a.CE)("div",P,t[2]||(t[2]=[(0,a.Lk)("p",null,"검색 결과가 없습니다.",-1)])))])}var F=i(8626),D={data(){return{query:"",movies:[]}},created(){this.debouncedSearch=(0,F.debounce)(this.searchMovies,500)},methods:{async searchMovies(){if(this.query.trim())try{const e=await y.A.get(`https://api.themoviedb.org/3/search/movie?api_key=1cc6831125c4a1baf8f809dc1f68ec14&query=${this.query}&language=ko-KR`);this.movies=e.data.results}catch(e){console.error("영화 검색 오류:",e),this.movies=[],alert("영화 검색에 실패했습니다. 다시 시도해주세요.")}else this.movies=[]}}};const V=(0,r.A)(D,[["render",$],["__scopeId","data-v-6253fcf5"]]);var W=V;const j={class:"genre-movies"},q={class:"movie-slider"},x=["src","alt"];function G(e,t,i,o,s,r){return(0,a.uX)(),(0,a.CE)("div",j,[t[0]||(t[0]=(0,a.Lk)("h1",null,"장르별 영화",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.genres,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"genre-section"},[(0,a.Lk)("h2",null,(0,v.v_)(e.name),1),(0,a.Lk)("div",q,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card"},[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title},null,8,x),(0,a.Lk)("h3",null,(0,v.v_)(e.title),1)])))),128))])])))),128))])}var H={data(){return{genres:[{id:35,name:"코믹",movies:[]},{id:28,name:"액션",movies:[]},{id:10749,name:"로맨스",movies:[]}]}},async created(){for(const t of this.genres)try{const e=await y.A.get(`https://api.themoviedb.org/3/discover/movie?api_key=1cc6831125c4a1baf8f809dc1f68ec14&with_genres=${t.id}&language=ko-KR`);t.movies=e.data.results}catch(e){console.error(`${t.name} 장르 영화 로드 오류:`,e),t.movies=[]}}};const N=(0,r.A)(H,[["render",G],["__scopeId","data-v-084a29ce"]]);var Q=N;const U={class:"trend-movies"},J={class:"view-options"},Y=["src","alt"],z={key:0,class:"loading"},B={key:1,class:"movie-list table-view"},Z=["src","alt"],ee={class:"pagination"},te=["disabled"];function ie(e,t,i,o,s,r){return(0,a.uX)(),(0,a.CE)("div",U,[t[5]||(t[5]=(0,a.Lk)("h1",null,"대세 콘텐츠",-1)),(0,a.Lk)("div",J,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=e=>r.changeView("table"))},"Table View"),(0,a.Lk)("button",{onClick:t[1]||(t[1]=e=>r.changeView("infinite"))},"Infinite Scroll")]),"infinite"===s.viewType?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"movie-list infinite-scroll",onScroll:t[2]||(t[2]=(...e)=>r.loadMore&&r.loadMore(...e)),ref:"scrollContainer"},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card"},[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title},null,8,Y),(0,a.Lk)("h3",null,(0,v.v_)(e.title),1)])))),128)),s.loading?((0,a.uX)(),(0,a.CE)("div",z,"Loading...")):(0,a.Q3)("",!0)],544)):(0,a.Q3)("",!0),"table"===s.viewType?((0,a.uX)(),(0,a.CE)("div",B,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card"},[(0,a.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title},null,8,Z),(0,a.Lk)("h3",null,(0,v.v_)(e.title),1)])))),128)),(0,a.Lk)("div",ee,[(0,a.Lk)("button",{onClick:t[3]||(t[3]=e=>r.changePage("previous")),disabled:1===s.page},"이전",8,te),(0,a.Lk)("span",null,"페이지 "+(0,v.v_)(s.page),1),(0,a.Lk)("button",{onClick:t[4]||(t[4]=e=>r.changePage("next"))},"다음")])])):(0,a.Q3)("",!0)])}i(4114);var oe={data(){return{viewType:"table",movies:[],page:1,loading:!1,itemsPerPage:20,totalResults:0}},mounted(){this.fetchMovies()},methods:{async fetchMovies(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{const t=await y.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${this.page}`);1===this.page?this.movies=t.data.results:this.movies.push(...t.data.results),this.totalResults=t.data.total_results}catch(t){console.error("영화 데이터를 가져오는 데 오류가 발생했습니다.",t)}finally{this.loading=!1}},changeView(e){this.viewType=e,this.page=1,this.movies=[],this.fetchMovies()},changePage(e){"previous"===e&&this.page>1?this.page--:"next"===e&&this.page*this.itemsPerPage<this.totalResults&&this.page++,this.fetchMovies()},loadMore(){const e=this.$refs.scrollContainer,t=e.scrollHeight===e.scrollTop+e.clientHeight;t&&!this.loading&&"infinite"===this.viewType&&this.movies.length<this.totalResults&&(this.loading=!0,this.page++,this.fetchMovies())}}};const ae=(0,r.A)(oe,[["render",ie],["__scopeId","data-v-2f09c703"]]);var se=ae;const re=[{path:"/",name:"home",component:L},{path:"/popular",name:"popular",component:se},{path:"/movie/:id",name:"movie-details",component:O,props:!0},{path:"/search",name:"search",component:W},{path:"/genre/:id",name:"genre",component:Q,props:!0}],ne=(0,u.aE)({history:(0,u.LA)("/moviewsd/"),routes:re});var le=ne,ce=(0,I.y$)({state:{popularMovies:[],movieDetails:null,searchedMovies:[],genreMovies:[],genres:[]},getters:{popularMovies:e=>e.popularMovies,movieDetails:e=>e.movieDetails,searchedMovies:e=>e.searchedMovies,genreMovies:e=>e.genreMovies,genres:e=>e.genres},mutations:{SET_POPULAR_MOVIES(e,t){e.popularMovies=t},SET_MOVIE_DETAILS(e,t){e.movieDetails=t},SET_SEARCHED_MOVIES(e,t){e.searchedMovies=t},SET_GENRE_MOVIES(e,t){e.genreMovies=t},SET_GENRES(e,t){e.genres=t}},actions:{async fetchPopularMovies({commit:e}){try{const t=await y.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR",page:1}});e("SET_POPULAR_MOVIES",t.data.results)}catch(t){console.error("Error fetching popular movies:",t)}},async fetchMovieDetails({commit:e},t){try{const i=await y.A.get(`https://api.themoviedb.org/3/movie/${t}`,{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR"}});e("SET_MOVIE_DETAILS",i.data)}catch(i){console.error("Error fetching movie details:",i)}},async fetchSearchedMovies({commit:e},t){try{const i=await y.A.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR",query:t,page:1}});e("SET_SEARCHED_MOVIES",i.data.results)}catch(i){console.error("Error fetching searched movies:",i)}},async fetchGenreMovies({commit:e},t){try{const i=await y.A.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR",with_genres:t,page:1}});e("SET_GENRE_MOVIES",i.data.results)}catch(i){console.error("Error fetching genre movies:",i)}},async fetchGenres({commit:e}){try{const t=await y.A.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR"}});e("SET_GENRES",t.data.genres)}catch(t){console.error("Error fetching genres:",t)}}},modules:{}});(0,o.Ef)(c).use(ce).use(le).mount("#app")}},t={};function i(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.m=e,function(){var e=[];i.O=function(t,o,a,s){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],s=e[u][2];for(var n=!0,l=0;l<o.length;l++)(!1&s||r>=s)&&Object.keys(i.O).every((function(e){return i.O[e](o[l])}))?o.splice(l--,1):(n=!1,s<r&&(r=s));if(n){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,a,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,s,r=o[0],n=o[1],l=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in n)i.o(n,a)&&(i.m[a]=n[a]);if(l)var u=l(i)}for(t&&t(o);c<r.length;c++)s=r[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(u)},o=self["webpackChunkmoviewsd"]=self["webpackChunkmoviewsd"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=i.O(void 0,[504],(function(){return i(2881)}));o=i.O(o)})();
//# sourceMappingURL=app.8cfff4e4.js.map