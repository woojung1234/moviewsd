(function(){"use strict";var e={540:function(e,i,t){var s=t(5130),o=t(6768),a=(t(4114),t(782)),r=t(1387);const n={class:"header"},l={class:"logo"},c={class:"nav-links"},u={class:"auth"};var d={__name:"AppHeader",setup(e){const i=(0,a.Pj)(),t=(0,r.rd)(),s=(0,o.EW)((()=>i.getters.isLoggedIn)),d=()=>{i.dispatch("logout"),t.push("/signin")},p=()=>{t.push("/search")},g=()=>{t.push("/")},h=()=>{t.push("/popular")},m=()=>{t.push("/wishlist")};return(e,i)=>{const t=(0,o.g2)("font-awesome-icon");return(0,o.uX)(),(0,o.CE)("header",n,[(0,o.Lk)("div",l,[(0,o.Lk)("button",{onClick:g,"aria-label":"로고"},[(0,o.bF)(t,{icon:["fas","tape"]})])]),(0,o.Lk)("nav",c,[(0,o.Lk)("button",{onClick:g,"aria-label":"홈화면"},[(0,o.bF)(t,{icon:["fas","house"]})]),(0,o.Lk)("button",{onClick:h,"aria-label":"인기 영화"},[(0,o.bF)(t,{icon:["fas","fire"]})]),(0,o.Lk)("button",{onClick:m,"aria-label":"좋아하는 영화"},[(0,o.bF)(t,{icon:["fas","heart"]})]),(0,o.Lk)("button",{class:"fab",onClick:p,"aria-label":"검색"},[(0,o.bF)(t,{icon:["fas","magnifying-glass"]})])]),(0,o.Lk)("div",u,[s.value?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:d,"aria-label":"로그아웃"},[(0,o.bF)(t,{icon:["fas","right-from-bracket"]})])):((0,o.uX)(),(0,o.CE)("button",{key:1,onClick:i[0]||(i[0]=(...i)=>e.goToSignIn&&e.goToSignIn(...i)),"aria-label":"로그인"},[(0,o.bF)(t,{icon:["fas","user"]})]))])])}}},p=t(1241);const g=(0,p.A)(d,[["__scopeId","data-v-44070e8a"]]);var h=g;const m={id:"app"};var v={__name:"App",setup(e){const i=(0,a.Pj)(),t=(0,o.EW)((()=>i.getters.isLoggedIn));return(e,i)=>{const s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",m,[t.value?((0,o.uX)(),(0,o.Wv)(h,{key:0})):(0,o.Q3)("",!0),(0,o.bF)(s)])}}};const y=v;var f=y,k=t(4373),b=(0,a.y$)({state:{isLoggedIn:!1,apiKey:null,user:null,popularMovies:[],movieDetails:null,searchedMovies:[],genreMovies:[],genres:[]},getters:{isLoggedIn:e=>e.isLoggedIn,user:e=>e.user,apiKey:e=>e.apiKey,popularMovies:e=>e.popularMovies,movieDetails:e=>e.movieDetails,searchedMovies:e=>e.searchedMovies,genreMovies:e=>e.genreMovies,genres:e=>e.genres},mutations:{SET_LOGIN_STATE(e,i){e.isLoggedIn=i.isLoggedIn,e.apiKey=i.apiKey,e.user=i.user},LOGOUT(e){e.isLoggedIn=!1,e.apiKey=null,e.user=null},SET_POPULAR_MOVIES(e,i){e.popularMovies=i},SET_MOVIE_DETAILS(e,i){e.movieDetails=i},SET_SEARCHED_MOVIES(e,i){e.searchedMovies=i},SET_GENRE_MOVIES(e,i){e.genreMovies=i},SET_GENRES(e,i){e.genres=i}},actions:{async login({commit:e},{apiKey:i,user:t}){try{const s=await k.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:i,language:"ko-KR",page:1}});200===s.status&&(e("SET_LOGIN_STATE",{isLoggedIn:!0,apiKey:i,user:t}),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("apiKey",i),localStorage.setItem("user",JSON.stringify(t)))}catch(s){throw alert("Invalid API Key. Please try again."),new Error("API Key is not valid")}},logout({commit:e}){e("LOGOUT"),localStorage.removeItem("isLoggedIn"),localStorage.removeItem("apiKey"),localStorage.removeItem("user")},loadAuthState({commit:e}){const i="true"===localStorage.getItem("isLoggedIn"),t=localStorage.getItem("apiKey"),s=JSON.parse(localStorage.getItem("user"));i&&t&&e("SET_LOGIN_STATE",{isLoggedIn:i,apiKey:t,user:s})},async fetchPopularMovies({commit:e,state:i}){try{if(!i.apiKey)throw new Error("API Key is missing");const t=await k.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:i.apiKey,language:"ko-KR",page:1}});e("SET_POPULAR_MOVIES",t.data.results)}catch(t){console.error("Error fetching popular movies:",t),alert("Failed to fetch movies. Please check your API Key.")}},async fetchMovieDetails({commit:e,state:i},t){try{if(!i.apiKey)throw new Error("API Key is missing");const s=await k.A.get(`https://api.themoviedb.org/3/movie/${t}`,{params:{api_key:i.apiKey,language:"ko-KR"}});e("SET_MOVIE_DETAILS",s.data)}catch(s){console.error("Error fetching movie details:",s),alert("Failed to fetch movie details. Please check your API Key.")}},async fetchSearchedMovies({commit:e,state:i},t){try{if(!i.apiKey)throw new Error("API Key is missing");const s=await k.A.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:i.apiKey,language:"ko-KR",query:t,page:1}});e("SET_SEARCHED_MOVIES",s.data.results)}catch(s){console.error("Error fetching searched movies:",s),alert("Failed to fetch searched movies. Please check your API Key.")}},async fetchGenreMovies({commit:e,state:i},t){try{if(!i.apiKey)throw new Error("API Key is missing");const s=await k.A.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:i.apiKey,language:"ko-KR",with_genres:t,page:1}});e("SET_GENRE_MOVIES",s.data.results)}catch(s){console.error("Error fetching genre movies:",s),alert("Failed to fetch genre movies. Please check your API Key.")}},async fetchGenres({commit:e,state:i}){try{if(!i.apiKey)throw new Error("API Key is missing");const t=await k.A.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:i.apiKey,language:"ko-KR"}});e("SET_GENRES",t.data.genres)}catch(t){console.error("Error fetching genres:",t),alert("Failed to fetch genres. Please check your API Key.")}}},modules:{}});function w(e,i,t,s,a,r){const n=(0,o.g2)("PopularMoviesTemplate");return(0,o.uX)(),(0,o.Wv)(n)}var I=t(4232);const L={class:"home"},S={key:0,class:"loading"},E={key:1},C={key:0,class:"featured-movie"},_=["src","alt"],P={class:"featured-info"},M={class:"button-group"},K={class:"genre-sections"},A=["onWheel"];function F(e,i,t,a,r,n){const l=(0,o.g2)("MovieCard");return(0,o.uX)(),(0,o.CE)("div",L,[r.loading?((0,o.uX)(),(0,o.CE)("div",S," 데이터를 불러오는 중입니다... ")):((0,o.uX)(),(0,o.CE)("div",E,[r.featuredMovie?((0,o.uX)(),(0,o.CE)("div",C,[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/original"+r.featuredMovie.backdrop_path,alt:r.featuredMovie.title,class:"featured-image"},null,8,_),(0,o.Lk)("div",P,[(0,o.Lk)("h1",null,(0,I.v_)(r.featuredMovie.title),1),(0,o.Lk)("p",null,(0,I.v_)(r.featuredMovie.overview),1),(0,o.Lk)("div",M,[(0,o.Lk)("button",{class:"play-button",onClick:i[0]||(i[0]=(...e)=>n.playMovie&&n.playMovie(...e))},"▶ 재생"),(0,o.Lk)("button",{class:"details-button",onClick:i[1]||(i[1]=e=>n.goToDetails(r.featuredMovie.id))}," 상세정보 ")])])])):(0,o.Q3)("",!0),(0,o.Lk)("div",K,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.genres,((e,i)=>((0,o.uX)(),(0,o.CE)("div",{key:e.name,class:"genre-section",ref_for:!0,ref:"genreSections"},[(0,o.Lk)("h2",null,(0,I.v_)(e.name),1),(0,o.Lk)("div",{class:"movie-slider",onWheel:(0,s.D$)((e=>n.handleScroll(e,i)),["prevent"])},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.movies,(e=>((0,o.uX)(),(0,o.Wv)(l,{key:e.id,movie:e},null,8,["movie"])))),128))],40,A)])))),128))])]))])}const R={class:"movie-card"},T=["src","alt"];function O(e,i,t,a,r,n){return(0,o.uX)(),(0,o.CE)("div",R,[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+t.movie.poster_path,alt:t.movie.title,onClick:i[0]||(i[0]=(...e)=>n.toggleWishlist&&n.toggleWishlist(...e))},null,8,T),r.isWishlisted?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"wishlist-icon",onClick:i[1]||(i[1]=(0,s.D$)(((...e)=>n.toggleWishlist&&n.toggleWishlist(...e)),["stop"]))}," ★ ")):(0,o.Q3)("",!0),(0,o.Lk)("h3",null,(0,I.v_)(t.movie.title),1)])}t(8992),t(7550);var X={props:{movie:Object},data(){return{isWishlisted:!1}},created(){this.checkWishlistStatus()},methods:{toggleWishlist(){const e=JSON.parse(localStorage.getItem("wishlist"))||[],i=e.findIndex((e=>e.id===this.movie.id));i>-1?(e.splice(i,1),this.isWishlisted=!1):(e.push(this.movie),this.isWishlisted=!0),localStorage.setItem("wishlist",JSON.stringify(e)),this.$emit("wishlist-updated")},checkWishlistStatus(){const e=JSON.parse(localStorage.getItem("wishlist"))||[];this.isWishlisted=e.some((e=>e.id===this.movie.id))}}};const W=(0,p.A)(X,[["render",O],["__scopeId","data-v-6958e451"]]);var $=W,V=t(7411),D={components:{MovieCard:$},data(){return{featuredMovie:null,genres:[{name:"최신",endpoint:"now_playing",movies:[]},{name:"인기",endpoint:"popular",movies:[]},{name:"코믹",genreId:35,movies:[]},{name:"액션",genreId:28,movies:[]},{name:"로맨스",genreId:10749,movies:[]}],apiKey:null,loading:!0}},async mounted(){const e=(0,V.dj)();if(this.apiKey=localStorage.getItem("apiKey"),!this.apiKey)return e.error("API Key가 없습니다. 로그인을 먼저 진행해주세요."),void this.$router.push("/signin");try{const e=await k.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=1`);this.featuredMovie=e.data.results[0];for(let i of this.genres){const e=i.endpoint?`https://api.themoviedb.org/3/movie/${i.endpoint}?api_key=${this.apiKey}&language=ko-KR&page=1`:`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${i.genreId}&language=ko-KR&page=1`,t=await k.A.get(e);i.movies=t.data.results.slice(0,20)}}catch(i){console.error("영화 데이터를 불러오는 데 실패했습니다:",i.message),e.error("영화 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요."),this.$router.push("/signin")}finally{this.loading=!1}},methods:{handleScroll(e,i){const t=this.$refs.genreSections[i].querySelector(".movie-slider");t.scrollLeft+=e.deltaY>0?100:-100},playMovie(){},goToDetails(e){this.$router.push({name:"movie-details",params:{id:e}})}}};const q=(0,p.A)(D,[["render",F]]);var j=q,J={components:{MovieCard:$},data(){return{featuredMovie:null,genres:[{name:"최신",endpoint:"now_playing",movies:[]},{name:"인기",endpoint:"popular",movies:[]},{name:"코믹",genreId:35,movies:[]},{name:"액션",genreId:28,movies:[]},{name:"로맨스",genreId:10749,movies:[]}],apiKey:null,loading:!0}},async mounted(){const e=(0,V.dj)();if(this.apiKey=localStorage.getItem("apiKey"),!this.apiKey)return e.error("API Key가 없습니다. 로그인을 먼저 진행해주세요."),void this.$router.push("/signin");try{const e=await k.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=1`);this.featuredMovie=e.data.results[0];for(let i of this.genres){const e=i.endpoint?`https://api.themoviedb.org/3/movie/${i.endpoint}?api_key=${this.apiKey}&language=ko-KR&page=1`:`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${i.genreId}&language=ko-KR&page=1`,t=await k.A.get(e);i.movies=t.data.results.slice(0,20)}}catch(i){console.error("영화 데이터를 불러오는 데 실패했습니다:",i.message),e.error("영화 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요."),this.$router.push("/signin")}finally{this.loading=!1}},methods:{handleScroll(e,i){const t=this.$refs.genreSections[i].querySelector(".movie-slider");t.scrollLeft+=e.deltaY>0?100:-100},playMovie(){console.log("Play Movie clicked!")},goToDetails(e){this.$router.push({name:"movie-details",params:{id:e}})}}},U={components:{PopularMoviesTemplate:j},mixins:[J]};const N=(0,p.A)(U,[["render",w]]);var G=N;const x={key:0,class:"movie-details"},Q=["src","alt"],H={key:1};function B(e,i,t,s,a,r){return r.movie?((0,o.uX)(),(0,o.CE)("div",x,[(0,o.Lk)("h1",null,(0,I.v_)(r.movie.title),1),(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+r.movie.poster_path,alt:r.movie.title},null,8,Q),(0,o.Lk)("p",null,(0,I.v_)(r.movie.overview),1),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[i[0]||(i[0]=(0,o.Lk)("strong",null,"평점:",-1)),(0,o.eW)(" "+(0,I.v_)(r.movie.vote_average),1)]),(0,o.Lk)("li",null,[i[1]||(i[1]=(0,o.Lk)("strong",null,"개봉일:",-1)),(0,o.eW)(" "+(0,I.v_)(r.movie.release_date),1)])])])):((0,o.uX)(),(0,o.CE)("div",H,i[2]||(i[2]=[(0,o.Lk)("p",null,"영화 정보를 불러오는 중입니다...",-1)])))}var Y={data(){return{movieId:this.$route.params.id}},computed:{...(0,a.L8)(["movieDetails"]),movie(){return this.movieDetails}},methods:{...(0,a.i0)(["fetchMovieDetails"])},async mounted(){await this.fetchMovieDetails(this.movieId)}};const z=(0,p.A)(Y,[["render",B],["__scopeId","data-v-293801ce"]]);var Z=z;function ee(e,i,t,s,a,r){const n=(0,o.g2)("SearchMovies",!0);return(0,o.uX)(),(0,o.Wv)(n)}const ie={class:"search"},te={class:"search-filters"},se=["value"],oe={key:0,class:"recent-searches"},ae=["onClick"],re={class:"poster-wrapper"},ne=["src","alt","onClick"],le={key:0,class:"wishlist-star"},ce={key:0,class:"loading"};function ue(e,i,t,a,r,n){return(0,o.uX)(),(0,o.CE)("div",ie,[(0,o.Lk)("div",te,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":i[0]||(i[0]=i=>e.query=i),onInput:i[1]||(i[1]=(...i)=>e.debouncedSearch&&e.debouncedSearch(...i)),placeholder:"영화 검색..."},null,544),[[s.Jo,e.query]]),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":i[2]||(i[2]=i=>e.selectedGenre=i),onChange:i[3]||(i[3]=(...i)=>e.applyFilters&&e.applyFilters(...i))},[i[10]||(i[10]=(0,o.Lk)("option",{value:""},"장르 선택",-1)),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.genres,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.id,value:e.id},(0,I.v_)(e.name),9,se)))),128))],544),[[s.u1,e.selectedGenre]]),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":i[4]||(i[4]=i=>e.minRating=i),onInput:i[5]||(i[5]=(...i)=>e.applyFilters&&e.applyFilters(...i)),placeholder:"최소 평점 (0 ~ 10)",min:"0",max:"10"},null,544),[[s.Jo,e.minRating]]),(0,o.bo)((0,o.Lk)("input",{type:"date","onUpdate:modelValue":i[6]||(i[6]=i=>e.releaseDate=i),onChange:i[7]||(i[7]=(...i)=>e.applyFilters&&e.applyFilters(...i))},null,544),[[s.Jo,e.releaseDate]]),(0,o.Lk)("button",{onClick:i[8]||(i[8]=(...i)=>e.resetFilters&&e.resetFilters(...i))},"필터 초기화")]),e.recentSearches.length?((0,o.uX)(),(0,o.CE)("div",oe,[i[11]||(i[11]=(0,o.Lk)("h4",null,"최근 검색어",-1)),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.recentSearches,(i=>((0,o.uX)(),(0,o.CE)("li",{key:i,onClick:t=>e.applyRecentSearch(i)},(0,I.v_)(i),9,ae)))),128))])])):(0,o.Q3)("",!0),(0,o.Lk)("div",{class:"movie-list",ref:"scrollContainer",onScroll:i[9]||(i[9]=(...i)=>e.handleScroll&&e.handleScroll(...i))},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.filteredMovies,(i=>((0,o.uX)(),(0,o.CE)("div",{key:i.id,class:"movie-card"},[(0,o.Lk)("div",re,[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+i.poster_path,alt:i.title,onClick:t=>e.toggleWishlist(i)},null,8,ne),e.isInWishlist(i)?((0,o.uX)(),(0,o.CE)("span",le,"★")):(0,o.Q3)("",!0)]),(0,o.Lk)("h3",null,(0,I.v_)(i.title),1)])))),128)),e.loading?((0,o.uX)(),(0,o.CE)("div",ce,"로딩 중...")):(0,o.Q3)("",!0)],544)])}t(4520),t(1454);var de=t(8626),pe={data(){return{movies:[],allMovies:[],genres:[],selectedGenre:"",minRating:"",releaseDate:"",query:"",recentSearches:[],page:1,loading:!1,isEndOfData:!1,apiKey:localStorage.getItem("apiKey")}},created(){const e=(0,V.dj)();if(!this.apiKey)return e.error("로그인 세션이 만료되었습니다. 다시 로그인해주세요."),void this.$router.push("/signin");this.debouncedSearch=(0,de.debounce)(this.searchMovies,500),this.fetchGenres(),this.loadInitialMovies(),this.loadRecentSearches()},computed:{filteredMovies(){return this.movies.filter((e=>{const i=!this.selectedGenre||e.genre_ids.includes(parseInt(this.selectedGenre)),t=!this.minRating||e.vote_average>=parseFloat(this.minRating),s=!this.releaseDate||e.release_date>=this.releaseDate;return i&&t&&s}))}},methods:{loadRecentSearches(){const e=JSON.parse(localStorage.getItem("recentSearches"))||[];this.recentSearches=e},saveSearchQuery(e){if(!e.trim())return;const i=[e,...this.recentSearches.filter((i=>i!==e))];this.recentSearches=i.slice(0,10),localStorage.setItem("recentSearches",JSON.stringify(this.recentSearches))},async fetchGenres(){const e=(0,V.dj)();try{const e=await k.A.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=ko-KR`);this.genres=e.data.genres}catch(i){console.error("장르 목록 가져오기 실패:",i),e.error("장르 데이터를 불러오지 못했습니다.")}},async loadInitialMovies(){const e=(0,V.dj)();try{this.loading=!0;const e=await k.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=${this.page}`);this.allMovies=[...this.allMovies,...e.data.results],this.movies=[...this.allMovies],0===e.data.results.length&&(this.isEndOfData=!0)}catch(i){console.error("초기 영화 데이터 로드 실패:",i),e.error("영화 데이터를 불러오지 못했습니다.")}finally{this.loading=!1}},handleScroll(){const e=this.$refs.scrollContainer;e.scrollTop+e.clientHeight>=e.scrollHeight&&!this.loading&&!this.isEndOfData&&(this.page++,this.loadInitialMovies())},applyFilters(){this.movies=this.allMovies},resetFilters(){this.query="",this.selectedGenre="",this.minRating="",this.releaseDate="",this.applyFilters()},async searchMovies(){const e=(0,V.dj)();if(this.query.trim()){this.saveSearchQuery(this.query);try{const e=await k.A.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.query}&language=ko-KR`);this.movies=e.data.results}catch(i){console.error("영화 검색 오류:",i),e.error("검색 결과를 가져오지 못했습니다.")}}else this.movies=this.allMovies},applyRecentSearch(e){this.query=e,this.searchMovies()},toggleWishlist(e){let i=JSON.parse(localStorage.getItem("wishlist"))||[];const t=i.findIndex((i=>i.id===e.id));-1===t?i.push(e):i.splice(t,1),localStorage.setItem("wishlist",JSON.stringify(i)),this.movies=this.movies.map((i=>(i.id===e.id&&(i.isInWishlist=!i.isInWishlist),i)))},isInWishlist(e){const i=JSON.parse(localStorage.getItem("wishlist"))||[];return i.some((i=>i.id===e.id))}}};const ge=(0,p.A)(pe,[["render",ue],["__scopeId","data-v-033a0c32"]]);var he=ge,me={name:"SearchMoviesPage",components:{SearchMovies:he}};const ve=(0,p.A)(me,[["render",ee]]);var ye=ve;function fe(e,i,t,s,a,r){const n=(0,o.g2)("TrendMovies",!0);return(0,o.uX)(),(0,o.Wv)(n)}const ke={class:"trend-movies"},be={class:"view-options"},we={key:0,class:"movie-list table-view"},Ie={class:"pagination"},Le=["disabled"],Se=["disabled"],Ee={key:0,class:"loading"};function Ce(e,i,t,s,a,r){const n=(0,o.g2)("movie-card");return(0,o.uX)(),(0,o.CE)("div",ke,[(0,o.Lk)("div",be,[(0,o.Lk)("button",{onClick:i[0]||(i[0]=i=>e.changeView("table"))},"Table View"),(0,o.Lk)("button",{onClick:i[1]||(i[1]=i=>e.changeView("infinite"))},"Infinite Scroll")]),"table"===e.viewType?((0,o.uX)(),(0,o.CE)("div",we,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.paginatedMovies,(e=>((0,o.uX)(),(0,o.Wv)(n,{key:e.id,movie:e},null,8,["movie"])))),128)),(0,o.Lk)("div",Ie,[(0,o.Lk)("button",{onClick:i[2]||(i[2]=i=>e.changePage("previous")),disabled:1===e.page},"이전",8,Le),(0,o.Lk)("span",null,"페이지 "+(0,I.v_)(e.page),1),(0,o.Lk)("button",{onClick:i[3]||(i[3]=i=>e.changePage("next")),disabled:e.page*e.itemsPerPage>=e.totalResults},"다음",8,Se)])])):(0,o.Q3)("",!0),"infinite"===e.viewType?((0,o.uX)(),(0,o.CE)("div",{key:1,class:"movie-list infinite-scroll",onScroll:i[4]||(i[4]=(...i)=>e.loadMore&&e.loadMore(...i)),ref:"scrollContainer"},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.movies,(e=>((0,o.uX)(),(0,o.Wv)(n,{key:e.id,movie:e},null,8,["movie"])))),128)),e.loading?((0,o.uX)(),(0,o.CE)("div",Ee,"Loading...")):(0,o.Q3)("",!0)],544)):(0,o.Q3)("",!0),"infinite"===e.viewType&&e.isScrolled?((0,o.uX)(),(0,o.CE)("button",{key:2,class:"scroll-to-top",onClick:i[5]||(i[5]=(...i)=>e.scrollToTop&&e.scrollToTop(...i))}," ▲ ")):(0,o.Q3)("",!0)])}var _e={components:{MovieCard:$},data(){return{viewType:"table",movies:[],page:1,loading:!1,itemsPerPage:20,totalResults:0,isScrolled:!1}},mounted(){this.calculateItemsPerPage(),window.addEventListener("resize",this.calculateItemsPerPage),this.$refs.scrollContainer&&this.$refs.scrollContainer.addEventListener("scroll",this.checkScroll),this.fetchMovies()},beforeUnmount(){this.$refs.scrollContainer&&this.$refs.scrollContainer.removeEventListener("scroll",this.checkScroll)},computed:{paginatedMovies(){const e=(this.page-1)*this.itemsPerPage,i=e+this.itemsPerPage;return this.movies.slice(e,i)}},methods:{calculateItemsPerPage(){const e=320,i=220,t=100,s=50,o=window.innerHeight-t-s-50,a=window.innerWidth-50,r=Math.floor(o/e),n=Math.floor(a/i);this.itemsPerPage=r*n},async fetchMovies(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{this.loading=!0;const i=await k.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${this.page}`);1===this.page?this.movies=i.data.results:this.movies.push(...i.data.results),this.totalResults=i.data.total_results}catch(i){console.error("영화 데이터를 가져오는 데 오류가 발생했습니다.",i)}finally{this.loading=!1}},toggleWishlist(e){const i=JSON.parse(localStorage.getItem("wishlist"))||[],t=i.findIndex((i=>i.id===e.id));-1===t?i.push(e):i.splice(t,1),localStorage.setItem("wishlist",JSON.stringify(i))},changeView(e){this.viewType=e,this.page=1,this.movies=[],this.fetchMovies()},changePage(e){"previous"===e&&this.page>1?this.page--:"next"===e&&this.page*this.itemsPerPage<this.totalResults&&this.page++,this.fetchMovies()},loadMore(){this.loading||(this.page++,this.fetchMovies())},scrollToTop(){const e=this.$refs.scrollContainer;e.scrollTo({top:0,behavior:"smooth"})},checkScroll(){const e=this.$refs.scrollContainer;this.isScrolled=e.scrollTop>300}}};const Pe=(0,p.A)(_e,[["render",Ce],["__scopeId","data-v-06aeb7dd"]]);var Me=Pe,Ke={name:"TrendMoviesPage",components:{TrendMovies:Me}};const Ae=(0,p.A)(Ke,[["render",fe]]);var Fe=Ae;const Re={class:"wishlist"},Te={key:0,class:"movie-list"},Oe={key:1};function Xe(e,i,t,s,a,r){const n=(0,o.g2)("movie-card");return(0,o.uX)(),(0,o.CE)("div",Re,[i[1]||(i[1]=(0,o.Lk)("h1",null,"위시리스트",-1)),a.movies.length>0?((0,o.uX)(),(0,o.CE)("div",Te,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.movies,(e=>((0,o.uX)(),(0,o.Wv)(n,{key:e.id,movie:e,onWishlistUpdated:r.loadWishlist},null,8,["movie","onWishlistUpdated"])))),128))])):((0,o.uX)(),(0,o.CE)("div",Oe,i[0]||(i[0]=[(0,o.Lk)("p",null,"찜한 영화가 없습니다.",-1)])))])}var We={components:{MovieCard:$},data(){return{movies:[]}},created(){this.loadWishlist()},methods:{loadWishlist(){const e=JSON.parse(localStorage.getItem("wishlist"))||[];this.movies=e}}};const $e=(0,p.A)(We,[["render",Xe],["__scopeId","data-v-4b137768"]]);var Ve=$e;const De={class:"signin-page"};function qe(e,i,t,s,a,r){const n=(0,o.g2)("SignIn");return(0,o.uX)(),(0,o.CE)("div",De,[(0,o.bF)(n)])}const je={class:"container"},Je={id:"phone"},Ue={id:"content-wrapper"},Ne={class:"checkbox remember"},Ge=["disabled"],xe={class:"checkbox remember"},Qe=["disabled"];function He(e,i,t,a,r,n){return(0,o.uX)(),(0,o.CE)("div",null,[i[32]||(i[32]=(0,o.Lk)("div",{class:"bg-image"},null,-1)),(0,o.Lk)("div",je,[(0,o.Lk)("div",Je,[(0,o.Lk)("div",Ue,[(0,o.Lk)("div",{class:(0,I.C4)(["card",{hidden:!a.isLoginVisible}]),id:"login"},[(0,o.Lk)("form",{onSubmit:i[7]||(i[7]=(0,s.D$)(((...e)=>a.handleLogin&&a.handleLogin(...e)),["prevent"]))},[i[24]||(i[24]=(0,o.Lk)("h1",null,"Sign in",-1)),(0,o.Lk)("div",{class:(0,I.C4)(["input",{active:a.isEmailFocused||a.email}])},[(0,o.bo)((0,o.Lk)("input",{id:"email",type:"email","onUpdate:modelValue":i[0]||(i[0]=e=>a.email=e),onFocus:i[1]||(i[1]=e=>a.focusInput("email")),onBlur:i[2]||(i[2]=e=>a.blurInput("email")),required:""},null,544),[[s.Jo,a.email]]),i[21]||(i[21]=(0,o.Lk)("label",{for:"email"},"Username or Email",-1))],2),(0,o.Lk)("div",{class:(0,I.C4)(["input",{active:a.isPasswordFocused||a.password}])},[(0,o.bo)((0,o.Lk)("input",{id:"password",type:"password","onUpdate:modelValue":i[3]||(i[3]=e=>a.password=e),onFocus:i[4]||(i[4]=e=>a.focusInput("password")),onBlur:i[5]||(i[5]=e=>a.blurInput("password")),required:""},null,544),[[s.Jo,a.password]]),i[22]||(i[22]=(0,o.Lk)("label",{for:"password"},"Password",-1))],2),(0,o.Lk)("span",Ne,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox",id:"remember","onUpdate:modelValue":i[6]||(i[6]=e=>a.rememberMe=e)},null,512),[[s.lH,a.rememberMe]]),i[23]||(i[23]=(0,o.Lk)("label",{for:"remember",class:"read-text"},"Remember me",-1))]),(0,o.Lk)("button",{disabled:!a.isLoginFormValid},"Login",8,Ge)],32),(0,o.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:i[8]||(i[8]=(...e)=>a.toggleCard&&a.toggleCard(...e))},i[25]||(i[25]=[(0,o.eW)(" Already have an account? "),(0,o.Lk)("b",null,"Sign in",-1)]))],2),(0,o.Lk)("div",{class:(0,I.C4)(["card",{hidden:a.isLoginVisible}]),id:"register"},[(0,o.Lk)("form",{onSubmit:i[19]||(i[19]=(0,s.D$)(((...e)=>a.handleRegister&&a.handleRegister(...e)),["prevent"]))},[i[30]||(i[30]=(0,o.Lk)("h1",null,"Sign up",-1)),(0,o.Lk)("div",{class:(0,I.C4)(["input",{active:a.isRegisterEmailFocused||a.registerEmail}])},[(0,o.bo)((0,o.Lk)("input",{id:"register-email",type:"email","onUpdate:modelValue":i[9]||(i[9]=e=>a.registerEmail=e),onFocus:i[10]||(i[10]=e=>a.focusInput("registerEmail")),onBlur:i[11]||(i[11]=e=>a.blurInput("registerEmail")),required:""},null,544),[[s.Jo,a.registerEmail]]),i[26]||(i[26]=(0,o.Lk)("label",{for:"register-email"},"Email",-1))],2),(0,o.Lk)("div",{class:(0,I.C4)(["input",{active:a.isRegisterPasswordFocused||a.registerPassword}])},[(0,o.bo)((0,o.Lk)("input",{id:"register-password",type:"password","onUpdate:modelValue":i[12]||(i[12]=e=>a.registerPassword=e),onFocus:i[13]||(i[13]=e=>a.focusInput("registerPassword")),onBlur:i[14]||(i[14]=e=>a.blurInput("registerPassword")),required:""},null,544),[[s.Jo,a.registerPassword]]),i[27]||(i[27]=(0,o.Lk)("label",{for:"register-password"},"Password",-1))],2),(0,o.Lk)("div",{class:(0,I.C4)(["input",{active:e.isConfirmPasswordFocused||e.confirmPassword}])},[(0,o.bo)((0,o.Lk)("input",{id:"confirm-password",type:"password","onUpdate:modelValue":i[15]||(i[15]=i=>e.confirmPassword=i),onFocus:i[16]||(i[16]=e=>a.focusInput("confirmPassword")),onBlur:i[17]||(i[17]=e=>a.blurInput("confirmPassword")),required:""},null,544),[[s.Jo,e.confirmPassword]]),i[28]||(i[28]=(0,o.Lk)("label",{for:"confirm-password"},"Confirm Password",-1))],2),(0,o.Lk)("span",xe,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox",id:"terms","onUpdate:modelValue":i[18]||(i[18]=i=>e.acceptTerms=i),required:""},null,512),[[s.lH,e.acceptTerms]]),i[29]||(i[29]=(0,o.Lk)("label",{for:"terms",class:"read-text"},[(0,o.eW)("회원가입을 "),(0,o.Lk)("b",null,"동의"),(0,o.eW)("합니다.")],-1))]),(0,o.Lk)("button",{disabled:!a.isRegisterFormValid},"Register",8,Qe)],32),(0,o.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:i[20]||(i[20]=(...e)=>a.toggleCard&&a.toggleCard(...e))},i[31]||(i[31]=[(0,o.eW)(" Don't have an account? "),(0,o.Lk)("b",null,"Sign up",-1)]))],2)])])])])}function Be({useRouter:e,useStore:i,ref:t,computed:s}){const o=t(!0),a=t(""),r=t(""),n=t(""),l=t(""),c=t(!1),u=t(!1),d=t(!1),p=t(!1),g=t(!1),h=e(),m=i(),v=s((()=>a.value&&r.value)),y=s((()=>n.value&&l.value)),f=()=>{o.value=!o.value},b=e=>{"email"===e&&(u.value=!0),"password"===e&&(d.value=!0),"registerEmail"===e&&(p.value=!0),"registerPassword"===e&&(g.value=!0)},w=e=>{"email"===e&&(u.value=!1),"password"===e&&(d.value=!1),"registerEmail"===e&&(p.value=!1),"registerPassword"===e&&(g.value=!1)},I=async()=>{const e=(0,V.dj)();try{const i=await k.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:r.value,language:"en-US",page:1}});200===i.status&&(await m.dispatch("login",{apiKey:r.value,user:{email:a.value}}),c.value&&localStorage.setItem("email",a.value),e.success("Login successful!"),h.push("/"))}catch(i){e.error("Invalid API Key. Please check and try again.")}},L=async()=>{const e=(0,V.dj)();try{const i=await k.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:l.value,language:"en-US",page:1}});if(200===i.status){if(localStorage.getItem(n.value))return void e.error("This email is already registered.");localStorage.setItem(n.value,JSON.stringify({password:l.value})),e.success("Registration successful! Please log in."),f()}}catch(i){e.error("Invalid API Key for registration. Please check and try again.")}};return{isLoginVisible:o,email:a,password:r,registerEmail:n,registerPassword:l,rememberMe:c,isEmailFocused:u,isPasswordFocused:d,isRegisterEmailFocused:p,isRegisterPasswordFocused:g,isLoginFormValid:v,isRegisterFormValid:y,toggleCard:f,focusInput:b,blurInput:w,handleLogin:I,handleRegister:L}}var Ye=t(144),ze={setup(){const{isLoginVisible:e,email:i,password:t,registerEmail:s,registerPassword:n,rememberMe:l,isEmailFocused:c,isPasswordFocused:u,isRegisterEmailFocused:d,isRegisterPasswordFocused:p,isLoginFormValid:g,isRegisterFormValid:h,toggleCard:m,focusInput:v,blurInput:y,handleLogin:f,handleRegister:k}=Be({useRouter:r.rd,useStore:a.Pj,ref:Ye.KR,computed:o.EW});return{isLoginVisible:e,email:i,password:t,registerEmail:s,registerPassword:n,rememberMe:l,isEmailFocused:c,isPasswordFocused:u,isRegisterEmailFocused:d,isRegisterPasswordFocused:p,isLoginFormValid:g,isRegisterFormValid:h,toggleCard:m,focusInput:v,blurInput:y,handleLogin:f,handleRegister:k}}};const Ze=(0,p.A)(ze,[["render",He],["__scopeId","data-v-86b8cfa8"]]);var ei=Ze,ii={components:{SignIn:ei},setup(){const e=Be({useRouter:r.rd,useStore:a.Pj,ref:Ye.KR,computed:o.EW});return{...e}}};const ti=(0,p.A)(ii,[["render",qe],["__scopeId","data-v-714c2fbd"]]);var si=ti;const oi=[{path:"/signin",name:"signin",component:si},{path:"/",name:"home",component:G,meta:{requiresAuth:!0}},{path:"/popular",name:"popular",component:Fe,meta:{requiresAuth:!0}},{path:"/movie/:id",name:"movie-details",component:Z,props:!0,meta:{requiresAuth:!0}},{path:"/search",name:"search",component:ye,meta:{requiresAuth:!0}},{path:"/wishlist",name:"wishlist",component:Ve,meta:{requiresAuth:!0}}],ai=(0,r.aE)({history:(0,r.LA)("/moviewsd/"),routes:oi});ai.beforeEach(((e,i,t)=>{const s=b.getters.isLoggedIn;"signin"===e.name&&s?t({name:"home"}):e.meta.requiresAuth&&!s?t({name:"signin"}):t()}));var ri=ai,ni=(t(7917),t(8950)),li=t(292),ci=t(2353);const ui=(0,s.Ef)(f),di={position:"top-right",timeout:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0};ni.Yv.add(ci.X7I),ni.Yv.add(ci.$UM),ui.use(V.Ay,di),ui.component("font-awesome-icon",li.gc),ui.use(b).use(ri).mount("#app")}},i={};function t(s){var o=i[s];if(void 0!==o)return o.exports;var a=i[s]={id:s,loaded:!1,exports:{}};return e[s].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(i,s,o,a){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],a=e[u][2];for(var n=!0,l=0;l<s.length;l++)(!1&a||r>=a)&&Object.keys(t.O).every((function(e){return t.O[e](s[l])}))?s.splice(l--,1):(n=!1,a<r&&(r=a));if(n){e.splice(u--,1);var c=o();void 0!==c&&(i=c)}}return i}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[s,o,a]}}(),function(){t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,{a:i}),i}}(),function(){t.d=function(e,i){for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};t.O.j=function(i){return 0===e[i]};var i=function(i,s){var o,a,r=s[0],n=s[1],l=s[2],c=0;if(r.some((function(i){return 0!==e[i]}))){for(o in n)t.o(n,o)&&(t.m[o]=n[o]);if(l)var u=l(t)}for(i&&i(s);c<r.length;c++)a=r[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},s=self["webpackChunkmoviewsd"]=self["webpackChunkmoviewsd"]||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))}();var s=t.O(void 0,[504],(function(){return t(540)}));s=t.O(s)})();
//# sourceMappingURL=app.72a123ee.js.map