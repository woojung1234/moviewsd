(function(){"use strict";var e={6312:function(e,t,i){var a=i(5130),s=(i(4114),i(6768)),o=i(782),l=i(1387);const r={class:"header"};var n={__name:"AppHeader",setup(e){const t=(0,o.Pj)(),i=(0,l.rd)(),a=(0,s.EW)((()=>t.getters.isLoggedIn)),n=()=>{t.dispatch("logout"),i.push("/signin")};return(e,t)=>{const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("nav",r,[(0,s.bF)(i,{to:"/"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("홈")]))),_:1}),t[5]||(t[5]=(0,s.eW)(" | ")),(0,s.bF)(i,{to:"/popular"},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.eW)("인기 영화")]))),_:1}),t[6]||(t[6]=(0,s.eW)(" | ")),(0,s.bF)(i,{to:"/search"},{default:(0,s.k6)((()=>t[2]||(t[2]=[(0,s.eW)("검색하기")]))),_:1}),t[7]||(t[7]=(0,s.eW)(" | ")),(0,s.bF)(i,{to:"/wishlist"},{default:(0,s.k6)((()=>t[3]||(t[3]=[(0,s.eW)("좋아하는 영화")]))),_:1}),t[8]||(t[8]=(0,s.eW)(" | ")),a.value?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:n},"로그아웃")):((0,s.uX)(),(0,s.Wv)(i,{key:1,to:"/signin"},{default:(0,s.k6)((()=>t[4]||(t[4]=[(0,s.eW)("로그인")]))),_:1}))])}}},u=i(1241);const c=(0,u.A)(n,[["__scopeId","data-v-064df50b"]]);var d=c,v=i(144);const p={id:"app"};var g={__name:"App",setup(e){const t=(0,o.Pj)(),i=(0,l.rd)(),a=(0,v.KR)(!1);return(0,s.sV)((async()=>{await t.dispatch("loadAuthState"),t.getters.isLoggedIn?a.value=!0:i.push("/signin")})),(e,t)=>{const i=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",p,[a.value?((0,s.uX)(),(0,s.Wv)(d,{key:0})):(0,s.Q3)("",!0),(0,s.bF)(i)])}}};const h=g;var m=h,f=i(4373),k=(0,o.y$)({state:{isLoggedIn:!1,apiKey:null,user:null,popularMovies:[],movieDetails:null,searchedMovies:[],genreMovies:[],genres:[]},getters:{isLoggedIn:e=>e.isLoggedIn,user:e=>e.user,apiKey:e=>e.apiKey,popularMovies:e=>e.popularMovies,movieDetails:e=>e.movieDetails,searchedMovies:e=>e.searchedMovies,genreMovies:e=>e.genreMovies,genres:e=>e.genres},mutations:{SET_LOGIN_STATE(e,t){e.isLoggedIn=t.isLoggedIn,e.apiKey=t.apiKey,e.user=t.user},LOGOUT(e){e.isLoggedIn=!1,e.apiKey=null},SET_POPULAR_MOVIES(e,t){e.popularMovies=t},SET_MOVIE_DETAILS(e,t){e.movieDetails=t},SET_SEARCHED_MOVIES(e,t){e.searchedMovies=t},SET_GENRE_MOVIES(e,t){e.genreMovies=t},SET_GENRES(e,t){e.genres=t}},actions:{login({commit:e},{apiKey:t,user:i}){e("SET_LOGIN_STATE",{isLoggedIn:!0,apiKey:t,user:i}),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("apiKey",t),localStorage.setItem("user",JSON.stringify(i))},logout({commit:e}){e("LOGOUT"),localStorage.setItem("isLoggedIn","false")},loadAuthState({commit:e}){const t="true"===localStorage.getItem("isLoggedIn"),i=localStorage.getItem("apiKey"),a=JSON.parse(localStorage.getItem("user"));t&&i&&e("SET_LOGIN_STATE",{isLoggedIn:t,apiKey:i,user:a})},async fetchPopularMovies({commit:e,state:t}){try{const i=await f.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:t.apiKey,language:"ko-KR",page:1}});e("SET_POPULAR_MOVIES",i.data.results)}catch(i){console.error("Error fetching popular movies:",i)}},async fetchMovieDetails({commit:e,state:t},i){try{const a=await f.A.get(`https://api.themoviedb.org/3/movie/${i}`,{params:{api_key:t.apiKey,language:"ko-KR"}});e("SET_MOVIE_DETAILS",a.data)}catch(a){console.error("Error fetching movie details:",a)}},async fetchSearchedMovies({commit:e,state:t},i){try{const a=await f.A.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:t.apiKey,language:"ko-KR",query:i,page:1}});e("SET_SEARCHED_MOVIES",a.data.results)}catch(a){console.error("Error fetching searched movies:",a)}},async fetchGenreMovies({commit:e,state:t},i){try{const a=await f.A.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:t.apiKey,language:"ko-KR",with_genres:i,page:1}});e("SET_GENRE_MOVIES",a.data.results)}catch(a){console.error("Error fetching genre movies:",a)}},async fetchGenres({commit:e,state:t}){try{const i=await f.A.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:t.apiKey,language:"ko-KR"}});e("SET_GENRES",i.data.genres)}catch(i){console.error("Error fetching genres:",i)}}},modules:{}}),y=i(4232);const b={class:"home"},L={key:0,class:"loading"},S={key:1},E={key:0,class:"featured-movie"},_=["src","alt"],I={class:"featured-info"},w={class:"genre-sections"},C=["onWheel"];function K(e,t,i,o,l,r){const n=(0,s.g2)("MovieCard");return(0,s.uX)(),(0,s.CE)("div",b,[l.loading?((0,s.uX)(),(0,s.CE)("div",L," 데이터를 불러오는 중입니다... ")):((0,s.uX)(),(0,s.CE)("div",S,[l.featuredMovie?((0,s.uX)(),(0,s.CE)("div",E,[(0,s.Lk)("img",{src:"https://image.tmdb.org/t/p/original"+l.featuredMovie.backdrop_path,alt:l.featuredMovie.title,class:"featured-image"},null,8,_),(0,s.Lk)("div",I,[(0,s.Lk)("h1",null,(0,y.v_)(l.featuredMovie.title),1),(0,s.Lk)("p",null,(0,y.v_)(l.featuredMovie.overview),1)])])):(0,s.Q3)("",!0),(0,s.Lk)("div",w,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.genres,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:e.name,class:"genre-section",ref_for:!0,ref:"genreSections"},[(0,s.Lk)("h2",null,(0,y.v_)(e.name),1),(0,s.Lk)("div",{class:"movie-slider",onWheel:(0,a.D$)((e=>r.handleScroll(e,t)),["prevent"])},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.movies,(e=>((0,s.uX)(),(0,s.Wv)(n,{key:e.id,movie:e},null,8,["movie"])))),128))],40,C)])))),128))])]))])}const M={class:"movie-card"},R=["src","alt"];function W(e,t,i,o,l,r){return(0,s.uX)(),(0,s.CE)("div",M,[(0,s.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+i.movie.poster_path,alt:i.movie.title,onClick:t[0]||(t[0]=(...e)=>r.toggleWishlist&&r.toggleWishlist(...e))},null,8,R),l.isWishlisted?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"wishlist-icon",onClick:t[1]||(t[1]=(0,a.D$)(((...e)=>r.toggleWishlist&&r.toggleWishlist(...e)),["stop"]))}," ★ ")):(0,s.Q3)("",!0),(0,s.Lk)("h3",null,(0,y.v_)(i.movie.title),1)])}i(8992),i(7550);var O={props:{movie:Object},data(){return{isWishlisted:!1}},created(){this.checkWishlistStatus()},methods:{toggleWishlist(){const e=JSON.parse(localStorage.getItem("wishlist"))||[],t=e.findIndex((e=>e.id===this.movie.id));t>-1?(e.splice(t,1),this.isWishlisted=!1):(e.push(this.movie),this.isWishlisted=!0),localStorage.setItem("wishlist",JSON.stringify(e)),this.$emit("wishlist-updated")},checkWishlistStatus(){const e=JSON.parse(localStorage.getItem("wishlist"))||[];this.isWishlisted=e.some((e=>e.id===this.movie.id))}}};const A=(0,u.A)(O,[["render",W],["__scopeId","data-v-e756170a"]]);var P=A,X={components:{MovieCard:P},data(){return{featuredMovie:null,genres:[{name:"최신",endpoint:"now_playing",movies:[]},{name:"인기",endpoint:"popular",movies:[]},{name:"코믹",genreId:35,movies:[]},{name:"액션",genreId:28,movies:[]},{name:"로맨스",genreId:10749,movies:[]}],apiKey:null,loading:!0}},async mounted(){if(this.apiKey=localStorage.getItem("apiKey"),!this.apiKey)return alert("API Key가 없습니다. 로그인을 먼저 진행해주세요."),void this.$router.push("/signin");try{const e=await f.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=1`);this.featuredMovie=e.data.results[0];for(let t of this.genres){const e=t.endpoint?`https://api.themoviedb.org/3/movie/${t.endpoint}?api_key=${this.apiKey}&language=ko-KR&page=1`:`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${t.genreId}&language=ko-KR&page=1`,i=await f.A.get(e);t.movies=i.data.results.slice(0,10)}}catch(e){console.error("영화 데이터를 불러오는 데 실패했습니다:",e.message),alert("영화 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요."),this.$router.push("/signin")}finally{this.loading=!1}},methods:{handleScroll(e,t){const i=this.$refs.genreSections[t].querySelector(".movie-slider");i.scrollLeft+=e.deltaY>0?100:-100}}};const T=(0,u.A)(X,[["render",K],["__scopeId","data-v-0b5bbb84"]]);var F=T;const D={key:0,class:"movie-details"},$=["src","alt"],V={key:1};function q(e,t,i,a,o,l){return l.movie?((0,s.uX)(),(0,s.CE)("div",D,[(0,s.Lk)("h1",null,(0,y.v_)(l.movie.title),1),(0,s.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+l.movie.poster_path,alt:l.movie.title},null,8,$),(0,s.Lk)("p",null,(0,y.v_)(l.movie.overview),1),(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,[t[0]||(t[0]=(0,s.Lk)("strong",null,"평점:",-1)),(0,s.eW)(" "+(0,y.v_)(l.movie.vote_average),1)]),(0,s.Lk)("li",null,[t[1]||(t[1]=(0,s.Lk)("strong",null,"개봉일:",-1)),(0,s.eW)(" "+(0,y.v_)(l.movie.release_date),1)])])])):((0,s.uX)(),(0,s.CE)("div",V,t[2]||(t[2]=[(0,s.Lk)("p",null,"영화 정보를 불러오는 중입니다...",-1)])))}var J={data(){return{movieId:this.$route.params.id}},computed:{...(0,o.L8)(["movieDetails"]),movie(){return this.movieDetails}},methods:{...(0,o.i0)(["fetchMovieDetails"])},async mounted(){await this.fetchMovieDetails(this.movieId)}};const G=(0,u.A)(J,[["render",q],["__scopeId","data-v-293801ce"]]);var N=G;const x={class:"search"},U={class:"search-filters"},j=["value"],Q={class:"poster-wrapper"},H=["src","alt","onClick"],B={key:0,class:"wishlist-star"},Y={key:0,class:"loading"};function z(e,t,i,o,l,r){return(0,s.uX)(),(0,s.CE)("div",x,[(0,s.Lk)("div",U,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.query=e),onInput:t[1]||(t[1]=(...t)=>e.debouncedSearch&&e.debouncedSearch(...t)),placeholder:"영화 검색..."},null,544),[[a.Jo,l.query]]),(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.selectedGenre=e),onChange:t[3]||(t[3]=(...e)=>r.applyFilters&&r.applyFilters(...e))},[t[10]||(t[10]=(0,s.Lk)("option",{value:""},"장르 선택",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.genres,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.id},(0,y.v_)(e.name),9,j)))),128))],544),[[a.u1,l.selectedGenre]]),(0,s.bo)((0,s.Lk)("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=e=>l.minRating=e),onInput:t[5]||(t[5]=(...e)=>r.applyFilters&&r.applyFilters(...e)),placeholder:"최소 평점 (0 ~ 10)",min:"0",max:"10"},null,544),[[a.Jo,l.minRating]]),(0,s.bo)((0,s.Lk)("input",{type:"date","onUpdate:modelValue":t[6]||(t[6]=e=>l.releaseDate=e),onChange:t[7]||(t[7]=(...e)=>r.applyFilters&&r.applyFilters(...e))},null,544),[[a.Jo,l.releaseDate]]),(0,s.Lk)("button",{onClick:t[8]||(t[8]=(...e)=>r.resetFilters&&r.resetFilters(...e))},"필터 초기화")]),(0,s.Lk)("div",{class:"movie-list",ref:"scrollContainer",onScroll:t[9]||(t[9]=(...e)=>r.handleScroll&&r.handleScroll(...e))},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.filteredMovies,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"movie-card"},[(0,s.Lk)("div",Q,[(0,s.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title,onClick:t=>r.toggleWishlist(e)},null,8,H),r.isInWishlist(e)?((0,s.uX)(),(0,s.CE)("span",B,"★")):(0,s.Q3)("",!0)]),(0,s.Lk)("h3",null,(0,y.v_)(e.title),1)])))),128)),l.loading?((0,s.uX)(),(0,s.CE)("div",Y,"로딩 중...")):(0,s.Q3)("",!0)],544)])}i(4520),i(1454);var Z=i(8626),ee={data(){return{movies:[],allMovies:[],genres:[],selectedGenre:"",minRating:"",releaseDate:"",query:"",page:1,loading:!1,isEndOfData:!1,apiKey:localStorage.getItem("apiKey")}},created(){if(!this.apiKey)return alert("로그인 세션이 만료되었습니다. 다시 로그인해주세요."),void this.$router.push("/signin");this.debouncedSearch=(0,Z.debounce)(this.searchMovies,500),this.fetchGenres(),this.loadInitialMovies()},computed:{filteredMovies(){return this.movies.filter((e=>{const t=!this.selectedGenre||e.genre_ids.includes(parseInt(this.selectedGenre)),i=!this.minRating||e.vote_average>=parseFloat(this.minRating),a=!this.releaseDate||e.release_date>=this.releaseDate;return t&&i&&a}))}},methods:{async fetchGenres(){try{const e=await f.A.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=ko-KR`);this.genres=e.data.genres}catch(e){console.error("장르 목록 가져오기 실패:",e),alert("장르 데이터를 불러오지 못했습니다.")}},async loadInitialMovies(){try{this.loading=!0;const e=await f.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=${this.page}`);this.allMovies=[...this.allMovies,...e.data.results],this.movies=[...this.allMovies],0===e.data.results.length&&(this.isEndOfData=!0)}catch(e){console.error("초기 영화 데이터 로드 실패:",e),alert("영화 데이터를 불러오지 못했습니다.")}finally{this.loading=!1}},handleScroll(){const e=this.$refs.scrollContainer;e.scrollTop+e.clientHeight>=e.scrollHeight&&!this.loading&&!this.isEndOfData&&(this.page++,this.loadInitialMovies())},applyFilters(){this.movies=this.allMovies},resetFilters(){this.query="",this.selectedGenre="",this.minRating="",this.releaseDate="",this.applyFilters()},async searchMovies(){if(this.query.trim())try{const e=await f.A.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.query}&language=ko-KR`);this.movies=e.data.results}catch(e){console.error("영화 검색 오류:",e),alert("검색 결과를 가져오지 못했습니다.")}else this.movies=this.allMovies},toggleWishlist(e){let t=JSON.parse(localStorage.getItem("wishlist"))||[];const i=t.findIndex((t=>t.id===e.id));-1===i?t.push(e):t.splice(i,1),localStorage.setItem("wishlist",JSON.stringify(t)),this.movies=this.movies.map((t=>(t.id===e.id&&(t.isInWishlist=!t.isInWishlist),t)))},isInWishlist(e){const t=JSON.parse(localStorage.getItem("wishlist"))||[];return t.some((t=>t.id===e.id))}}};const te=(0,u.A)(ee,[["render",z],["__scopeId","data-v-7a2cf4ab"]]);var ie=te;const ae={class:"trend-movies"},se={class:"view-options"},oe={key:0,class:"movie-list table-view"},le={class:"pagination"},re=["disabled"],ne=["disabled"],ue={key:0,class:"loading"};function ce(e,t,i,a,o,l){const r=(0,s.g2)("movie-card");return(0,s.uX)(),(0,s.CE)("div",ae,[t[5]||(t[5]=(0,s.Lk)("h1",null,"대세 콘텐츠",-1)),(0,s.Lk)("div",se,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=e=>l.changeView("table"))},"Table View"),(0,s.Lk)("button",{onClick:t[1]||(t[1]=e=>l.changeView("infinite"))},"Infinite Scroll")]),"table"===o.viewType?((0,s.uX)(),(0,s.CE)("div",oe,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.paginatedMovies,(e=>((0,s.uX)(),(0,s.Wv)(r,{key:e.id,movie:e},null,8,["movie"])))),128)),(0,s.Lk)("div",le,[(0,s.Lk)("button",{onClick:t[2]||(t[2]=e=>l.changePage("previous")),disabled:1===o.page},"이전",8,re),(0,s.Lk)("span",null,"페이지 "+(0,y.v_)(o.page),1),(0,s.Lk)("button",{onClick:t[3]||(t[3]=e=>l.changePage("next")),disabled:o.page*o.itemsPerPage>=o.totalResults},"다음",8,ne)])])):(0,s.Q3)("",!0),"infinite"===o.viewType?((0,s.uX)(),(0,s.CE)("div",{key:1,class:"movie-list infinite-scroll",onScroll:t[4]||(t[4]=(...e)=>l.loadMore&&l.loadMore(...e)),ref:"scrollContainer"},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.movies,(e=>((0,s.uX)(),(0,s.Wv)(r,{key:e.id,movie:e},null,8,["movie"])))),128)),o.loading?((0,s.uX)(),(0,s.CE)("div",ue,"Loading...")):(0,s.Q3)("",!0)],544)):(0,s.Q3)("",!0)])}var de={components:{MovieCard:P},data(){return{viewType:"table",movies:[],page:1,loading:!1,itemsPerPage:20,totalResults:0}},mounted(){this.fetchMovies()},computed:{paginatedMovies(){const e=(this.page-1)*this.itemsPerPage,t=this.page*this.itemsPerPage;return this.movies.slice(e,t)}},methods:{async fetchMovies(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{this.loading=!0;const t=await f.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${this.page}`);1===this.page?this.movies=t.data.results:this.movies.push(...t.data.results),this.totalResults=t.data.total_results}catch(t){console.error("영화 데이터를 가져오는 데 오류가 발생했습니다.",t)}finally{this.loading=!1}},toggleWishlist(e){const t=JSON.parse(localStorage.getItem("wishlist"))||[],i=t.findIndex((t=>t.id===e.id));-1===i?(t.push(e),localStorage.setItem("wishlist",JSON.stringify(t))):(t.splice(i,1),localStorage.setItem("wishlist",JSON.stringify(t)))},changeView(e){this.viewType=e,this.page=1,this.movies=[],this.fetchMovies()},changePage(e){"previous"===e&&this.page>1?this.page--:"next"===e&&this.page*this.itemsPerPage<this.totalResults&&this.page++,this.fetchMovies()},async loadMore(){this.loading||(this.page++,await this.fetchMovies())}}};const ve=(0,u.A)(de,[["render",ce],["__scopeId","data-v-cb4328da"]]);var pe=ve;const ge={class:"wishlist"},he={key:0,class:"movie-list"},me={key:1};function fe(e,t,i,a,o,l){const r=(0,s.g2)("movie-card");return(0,s.uX)(),(0,s.CE)("div",ge,[t[1]||(t[1]=(0,s.Lk)("h1",null,"위시리스트",-1)),o.movies.length>0?((0,s.uX)(),(0,s.CE)("div",he,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.movies,(e=>((0,s.uX)(),(0,s.Wv)(r,{key:e.id,movie:e,onWishlistUpdated:l.loadWishlist},null,8,["movie","onWishlistUpdated"])))),128))])):((0,s.uX)(),(0,s.CE)("div",me,t[0]||(t[0]=[(0,s.Lk)("p",null,"찜한 영화가 없습니다.",-1)])))])}var ke={components:{MovieCard:P},data(){return{movies:[]}},created(){this.loadWishlist()},methods:{loadWishlist(){const e=JSON.parse(localStorage.getItem("wishlist"))||[];this.movies=e}}};const ye=(0,u.A)(ke,[["render",fe],["__scopeId","data-v-4b137768"]]);var be=ye;const Le={class:"container"},Se={id:"phone"},Ee={id:"content-wrapper"},_e={class:"checkbox remember"},Ie=["disabled"],we={class:"checkbox remember"},Ce=["disabled"];var Ke={__name:"SigninPage",setup(e){const t=(0,v.KR)(!0),i=(0,v.KR)(""),o=(0,v.KR)(""),r=(0,v.KR)(""),n=(0,v.KR)(""),u=(0,v.KR)(""),c=(0,v.KR)(!1),d=(0,v.KR)(!1),p=(0,l.rd)(),g=(0,v.KR)("true"===localStorage.getItem("isLoggedIn")),h=(0,v.KR)(!1),m=(0,v.KR)(!1),f=(0,v.KR)(!1),k=(0,v.KR)(!1),b=(0,v.KR)(!1),L=(0,s.EW)((()=>i.value&&o.value)),S=(0,s.EW)((()=>r.value&&n.value&&u.value&&n.value===u.value&&d.value)),E=()=>{t.value=!t.value},_=e=>{"email"===e&&(h.value=!0),"password"===e&&(m.value=!0),"registerEmail"===e&&(f.value=!0),"registerPassword"===e&&(k.value=!0),"confirmPassword"===e&&(b.value=!0)},I=e=>{"email"===e&&(h.value=!1),"password"===e&&(m.value=!1),"registerEmail"===e&&(f.value=!1),"registerPassword"===e&&(k.value=!1),"confirmPassword"===e&&(b.value=!1)},w=()=>{if(i.value&&o.value){const e="1cc6831125c4a1baf8f809dc1f68ec14";localStorage.setItem("isLoggedIn","true"),localStorage.setItem("apiKey",e),alert("Login successful! Redirecting..."),p.push("/").catch((e=>console.error("Router error:",e)))}else alert("Please fill in all fields.")},C=()=>{localStorage.removeItem("isLoggedIn"),localStorage.removeItem("apiKey"),g.value=!1,p.push("/signin").then((()=>{console.log("Redirected to sign-in page.")})).catch((e=>{console.error("Router error:",e)})),alert("You have been logged out.")},K=()=>{n.value===u.value?d.value?(alert("Registration successful! Redirecting..."),E()):alert("You must accept the terms and conditions."):alert("Passwords do not match.")};return(e,l)=>((0,s.uX)(),(0,s.CE)("div",null,[g.value?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:C},"Logout")):(0,s.Q3)("",!0),l[29]||(l[29]=(0,s.Lk)("div",{class:"bg-image"},null,-1)),(0,s.Lk)("div",Le,[(0,s.Lk)("div",Se,[(0,s.Lk)("div",Ee,[(0,s.Lk)("div",{class:(0,y.C4)(["card",{hidden:!t.value}]),id:"login"},[(0,s.Lk)("form",{onSubmit:(0,a.D$)(w,["prevent"])},[l[20]||(l[20]=(0,s.Lk)("h1",null,"Sign in",-1)),(0,s.Lk)("div",{class:(0,y.C4)(["input",{active:h.value||i.value}])},[(0,s.bo)((0,s.Lk)("input",{id:"email",type:"email","onUpdate:modelValue":l[0]||(l[0]=e=>i.value=e),onFocus:l[1]||(l[1]=e=>_("email")),onBlur:l[2]||(l[2]=e=>I("email")),required:""},null,544),[[a.Jo,i.value]]),l[17]||(l[17]=(0,s.Lk)("label",{for:"email"},"Username or Email",-1))],2),(0,s.Lk)("div",{class:(0,y.C4)(["input",{active:m.value||o.value}])},[(0,s.bo)((0,s.Lk)("input",{id:"password",type:"password","onUpdate:modelValue":l[3]||(l[3]=e=>o.value=e),onFocus:l[4]||(l[4]=e=>_("password")),onBlur:l[5]||(l[5]=e=>I("password")),required:""},null,544),[[a.Jo,o.value]]),l[18]||(l[18]=(0,s.Lk)("label",{for:"password"},"Password",-1))],2),(0,s.Lk)("span",_e,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",id:"remember","onUpdate:modelValue":l[6]||(l[6]=e=>c.value=e)},null,512),[[a.lH,c.value]]),l[19]||(l[19]=(0,s.Lk)("label",{for:"remember",class:"read-text"},"Remember me",-1))]),l[21]||(l[21]=(0,s.Lk)("span",{class:"checkbox forgot"},[(0,s.Lk)("a",{href:"#"},"Forgot Password?")],-1)),(0,s.Lk)("button",{disabled:!L.value},"Login",8,Ie)],32),(0,s.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:E},l[22]||(l[22]=[(0,s.eW)(" Already have an account? "),(0,s.Lk)("b",null,"Sign in",-1)]))],2),(0,s.Lk)("div",{class:(0,y.C4)(["card",{hidden:t.value}]),id:"register"},[(0,s.Lk)("form",{onSubmit:(0,a.D$)(K,["prevent"])},[l[27]||(l[27]=(0,s.Lk)("h1",null,"Sign up",-1)),(0,s.Lk)("div",{class:(0,y.C4)(["input",{active:f.value||r.value}])},[(0,s.bo)((0,s.Lk)("input",{id:"register-email",type:"email","onUpdate:modelValue":l[7]||(l[7]=e=>r.value=e),onFocus:l[8]||(l[8]=e=>_("registerEmail")),onBlur:l[9]||(l[9]=e=>I("registerEmail")),required:""},null,544),[[a.Jo,r.value]]),l[23]||(l[23]=(0,s.Lk)("label",{for:"register-email"},"Email",-1))],2),(0,s.Lk)("div",{class:(0,y.C4)(["input",{active:k.value||n.value}])},[(0,s.bo)((0,s.Lk)("input",{id:"register-password",type:"password","onUpdate:modelValue":l[10]||(l[10]=e=>n.value=e),onFocus:l[11]||(l[11]=e=>_("registerPassword")),onBlur:l[12]||(l[12]=e=>I("registerPassword")),required:""},null,544),[[a.Jo,n.value]]),l[24]||(l[24]=(0,s.Lk)("label",{for:"register-password"},"Password",-1))],2),(0,s.Lk)("div",{class:(0,y.C4)(["input",{active:b.value||u.value}])},[(0,s.bo)((0,s.Lk)("input",{id:"confirm-password",type:"password","onUpdate:modelValue":l[13]||(l[13]=e=>u.value=e),onFocus:l[14]||(l[14]=e=>_("confirmPassword")),onBlur:l[15]||(l[15]=e=>I("confirmPassword")),required:""},null,544),[[a.Jo,u.value]]),l[25]||(l[25]=(0,s.Lk)("label",{for:"confirm-password"},"Confirm Password",-1))],2),(0,s.Lk)("span",we,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",id:"terms","onUpdate:modelValue":l[16]||(l[16]=e=>d.value=e),required:""},null,512),[[a.lH,d.value]]),l[26]||(l[26]=(0,s.Lk)("label",{for:"terms",class:"read-text"},[(0,s.eW)("I have read "),(0,s.Lk)("b",null,"Terms and Conditions")],-1))]),(0,s.Lk)("button",{disabled:!S.value},"Register",8,Ce)],32),(0,s.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:E},l[28]||(l[28]=[(0,s.eW)(" Don't have an account? "),(0,s.Lk)("b",null,"Sign up",-1)]))],2)])])])]))}};const Me=(0,u.A)(Ke,[["__scopeId","data-v-08ae4d16"]]);var Re=Me;const We=[{path:"/signin",name:"signin",component:Re},{path:"/",name:"home",component:F,meta:{requiresAuth:!0}},{path:"/popular",name:"popular",component:pe,meta:{requiresAuth:!0}},{path:"/movie/:id",name:"movie-details",component:N,props:!0,meta:{requiresAuth:!0}},{path:"/search",name:"search",component:ie,meta:{requiresAuth:!0}},{path:"/wishlist",name:"wishlist",component:be,meta:{requiresAuth:!0}}],Oe=(0,l.aE)({history:(0,l.LA)(),routes:We});Oe.beforeEach(((e,t,i)=>{const a=k.getters.isLoggedIn;"signin"===e.name&&a?i({name:"home"}):e.meta.requiresAuth&&!a?i({name:"signin"}):i()}));var Ae=Oe;(0,a.Ef)(m).use(k).use(Ae).mount("#app")}},t={};function i(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.m=e,function(){var e=[];i.O=function(t,a,s,o){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],o=e[c][2];for(var r=!0,n=0;n<a.length;n++)(!1&o||l>=o)&&Object.keys(i.O).every((function(e){return i.O[e](a[n])}))?a.splice(n--,1):(r=!1,o<l&&(l=o));if(r){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,s,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,o,l=a[0],r=a[1],n=a[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(n)var c=n(i)}for(t&&t(a);u<l.length;u++)o=l[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},a=self["webpackChunkmoviewsd"]=self["webpackChunkmoviewsd"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[504],(function(){return i(6312)}));a=i.O(a)})();
//# sourceMappingURL=app.da1f41da.js.map