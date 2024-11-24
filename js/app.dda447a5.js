(function(){"use strict";var e={4842:function(e,t,i){var a=i(5130),s=i(6768),o=(i(4114),i(144)),r=i(782),l=i(1387),n={__name:"AppHeader",setup(e){const t=(0,r.Pj)(),i=(0,l.rd)(),a=(0,s.EW)((()=>t.getters.isLoggedIn)),n=(0,o.KR)(!1),c=e=>{n.value=e},u=()=>{t.dispatch("logout"),i.push("/signin")};return(e,t)=>{const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("nav",{class:"header",onMouseover:t[0]||(t[0]=e=>c(!0)),onMouseleave:t[1]||(t[1]=e=>c(!1))},[(0,s.bF)(i,{to:"/"},{default:(0,s.k6)((()=>t[2]||(t[2]=[(0,s.eW)("홈")]))),_:1}),t[7]||(t[7]=(0,s.eW)(" | ")),(0,s.bF)(i,{to:"/popular"},{default:(0,s.k6)((()=>t[3]||(t[3]=[(0,s.eW)("인기 영화")]))),_:1}),t[8]||(t[8]=(0,s.eW)(" | ")),(0,s.bF)(i,{to:"/search"},{default:(0,s.k6)((()=>t[4]||(t[4]=[(0,s.eW)("검색하기")]))),_:1}),t[9]||(t[9]=(0,s.eW)(" | ")),(0,s.bF)(i,{to:"/wishlist"},{default:(0,s.k6)((()=>t[5]||(t[5]=[(0,s.eW)("좋아하는 영화")]))),_:1}),t[10]||(t[10]=(0,s.eW)(" | ")),a.value?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:u},"로그아웃")):((0,s.uX)(),(0,s.Wv)(i,{key:1,to:"/signin"},{default:(0,s.k6)((()=>t[6]||(t[6]=[(0,s.eW)("로그인")]))),_:1}))],32)}}},c=i(1241);const u=(0,c.A)(n,[["__scopeId","data-v-746148f0"]]);var d=u;const p={id:"app"};var v={__name:"App",setup(e){const t=(0,r.Pj)(),i=(0,s.EW)((()=>t.getters.isLoggedIn));return(e,t)=>{const a=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",p,[i.value?((0,s.uX)(),(0,s.Wv)(d,{key:0})):(0,s.Q3)("",!0),(0,s.bF)(a)])}}};const g=v;var h=g,m=i(4373),y=(0,r.y$)({state:{isLoggedIn:!1,apiKey:null,user:null,popularMovies:[],movieDetails:null,searchedMovies:[],genreMovies:[],genres:[]},getters:{isLoggedIn:e=>e.isLoggedIn,user:e=>e.user,apiKey:e=>e.apiKey,popularMovies:e=>e.popularMovies,movieDetails:e=>e.movieDetails,searchedMovies:e=>e.searchedMovies,genreMovies:e=>e.genreMovies,genres:e=>e.genres},mutations:{SET_LOGIN_STATE(e,t){e.isLoggedIn=t.isLoggedIn,e.apiKey=t.apiKey,e.user=t.user},LOGOUT(e){e.isLoggedIn=!1,e.apiKey=null,e.user=null},SET_POPULAR_MOVIES(e,t){e.popularMovies=t},SET_MOVIE_DETAILS(e,t){e.movieDetails=t},SET_SEARCHED_MOVIES(e,t){e.searchedMovies=t},SET_GENRE_MOVIES(e,t){e.genreMovies=t},SET_GENRES(e,t){e.genres=t}},actions:{async login({commit:e},{apiKey:t,user:i}){try{const a=await m.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:t,language:"ko-KR",page:1}});200===a.status&&(e("SET_LOGIN_STATE",{isLoggedIn:!0,apiKey:t,user:i}),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("apiKey",t),localStorage.setItem("user",JSON.stringify(i)))}catch(a){throw alert("Invalid API Key. Please try again."),new Error("API Key is not valid")}},logout({commit:e}){e("LOGOUT"),localStorage.removeItem("isLoggedIn"),localStorage.removeItem("apiKey"),localStorage.removeItem("user")},loadAuthState({commit:e}){const t="true"===localStorage.getItem("isLoggedIn"),i=localStorage.getItem("apiKey"),a=JSON.parse(localStorage.getItem("user"));t&&i&&e("SET_LOGIN_STATE",{isLoggedIn:t,apiKey:i,user:a})},async fetchPopularMovies({commit:e,state:t}){try{if(!t.apiKey)throw new Error("API Key is missing");const i=await m.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:t.apiKey,language:"ko-KR",page:1}});e("SET_POPULAR_MOVIES",i.data.results)}catch(i){console.error("Error fetching popular movies:",i),alert("Failed to fetch movies. Please check your API Key.")}},async fetchMovieDetails({commit:e,state:t},i){try{if(!t.apiKey)throw new Error("API Key is missing");const a=await m.A.get(`https://api.themoviedb.org/3/movie/${i}`,{params:{api_key:t.apiKey,language:"ko-KR"}});e("SET_MOVIE_DETAILS",a.data)}catch(a){console.error("Error fetching movie details:",a),alert("Failed to fetch movie details. Please check your API Key.")}},async fetchSearchedMovies({commit:e,state:t},i){try{if(!t.apiKey)throw new Error("API Key is missing");const a=await m.A.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:t.apiKey,language:"ko-KR",query:i,page:1}});e("SET_SEARCHED_MOVIES",a.data.results)}catch(a){console.error("Error fetching searched movies:",a),alert("Failed to fetch searched movies. Please check your API Key.")}},async fetchGenreMovies({commit:e,state:t},i){try{if(!t.apiKey)throw new Error("API Key is missing");const a=await m.A.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:t.apiKey,language:"ko-KR",with_genres:i,page:1}});e("SET_GENRE_MOVIES",a.data.results)}catch(a){console.error("Error fetching genre movies:",a),alert("Failed to fetch genre movies. Please check your API Key.")}},async fetchGenres({commit:e,state:t}){try{if(!t.apiKey)throw new Error("API Key is missing");const i=await m.A.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:t.apiKey,language:"ko-KR"}});e("SET_GENRES",i.data.genres)}catch(i){console.error("Error fetching genres:",i),alert("Failed to fetch genres. Please check your API Key.")}}},modules:{}}),f=i(4232);const k={class:"home"},b={key:0,class:"loading"},L={key:1},w={key:0,class:"featured-movie"},I=["src","alt"],E={class:"featured-info"},S={class:"genre-sections"},_=["onWheel"];function K(e,t,i,o,r,l){const n=(0,s.g2)("MovieCard");return(0,s.uX)(),(0,s.CE)("div",k,[r.loading?((0,s.uX)(),(0,s.CE)("div",b," 데이터를 불러오는 중입니다... ")):((0,s.uX)(),(0,s.CE)("div",L,[r.featuredMovie?((0,s.uX)(),(0,s.CE)("div",w,[(0,s.Lk)("img",{src:"https://image.tmdb.org/t/p/original"+r.featuredMovie.backdrop_path,alt:r.featuredMovie.title,class:"featured-image"},null,8,I),(0,s.Lk)("div",E,[(0,s.Lk)("h1",null,(0,f.v_)(r.featuredMovie.title),1),(0,s.Lk)("p",null,(0,f.v_)(r.featuredMovie.overview),1)])])):(0,s.Q3)("",!0),(0,s.Lk)("div",S,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.genres,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:e.name,class:"genre-section",ref_for:!0,ref:"genreSections"},[(0,s.Lk)("h2",null,(0,f.v_)(e.name),1),(0,s.Lk)("div",{class:"movie-slider",onWheel:(0,a.D$)((e=>l.handleScroll(e,t)),["prevent"])},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.movies,(e=>((0,s.uX)(),(0,s.Wv)(n,{key:e.id,movie:e},null,8,["movie"])))),128))],40,_)])))),128))])]))])}const C={class:"movie-card"},M=["src","alt"];function P(e,t,i,o,r,l){return(0,s.uX)(),(0,s.CE)("div",C,[(0,s.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+i.movie.poster_path,alt:i.movie.title,onClick:t[0]||(t[0]=(...e)=>l.toggleWishlist&&l.toggleWishlist(...e))},null,8,M),r.isWishlisted?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"wishlist-icon",onClick:t[1]||(t[1]=(0,a.D$)(((...e)=>l.toggleWishlist&&l.toggleWishlist(...e)),["stop"]))}," ★ ")):(0,s.Q3)("",!0),(0,s.Lk)("h3",null,(0,f.v_)(i.movie.title),1)])}i(8992),i(7550);var A={props:{movie:Object},data(){return{isWishlisted:!1}},created(){this.checkWishlistStatus()},methods:{toggleWishlist(){const e=JSON.parse(localStorage.getItem("wishlist"))||[],t=e.findIndex((e=>e.id===this.movie.id));t>-1?(e.splice(t,1),this.isWishlisted=!1):(e.push(this.movie),this.isWishlisted=!0),localStorage.setItem("wishlist",JSON.stringify(e)),this.$emit("wishlist-updated")},checkWishlistStatus(){const e=JSON.parse(localStorage.getItem("wishlist"))||[];this.isWishlisted=e.some((e=>e.id===this.movie.id))}}};const W=(0,c.A)(A,[["render",P],["__scopeId","data-v-e756170a"]]);var O=W,R={components:{MovieCard:O},data(){return{featuredMovie:null,genres:[{name:"최신",endpoint:"now_playing",movies:[]},{name:"인기",endpoint:"popular",movies:[]},{name:"코믹",genreId:35,movies:[]},{name:"액션",genreId:28,movies:[]},{name:"로맨스",genreId:10749,movies:[]}],apiKey:null,loading:!0}},async mounted(){if(this.apiKey=localStorage.getItem("apiKey"),!this.apiKey)return alert("API Key가 없습니다. 로그인을 먼저 진행해주세요."),void this.$router.push("/signin");try{const e=await m.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=1`);this.featuredMovie=e.data.results[0];for(let t of this.genres){const e=t.endpoint?`https://api.themoviedb.org/3/movie/${t.endpoint}?api_key=${this.apiKey}&language=ko-KR&page=1`:`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${t.genreId}&language=ko-KR&page=1`,i=await m.A.get(e);t.movies=i.data.results.slice(0,10)}}catch(e){console.error("영화 데이터를 불러오는 데 실패했습니다:",e.message),alert("영화 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요."),this.$router.push("/signin")}finally{this.loading=!1}},methods:{handleScroll(e,t){const i=this.$refs.genreSections[t].querySelector(".movie-slider");i.scrollLeft+=e.deltaY>0?100:-100}}};const X=(0,c.A)(R,[["render",K],["__scopeId","data-v-0b5bbb84"]]);var T=X;const F={key:0,class:"movie-details"},D=["src","alt"],$={key:1};function V(e,t,i,a,o,r){return r.movie?((0,s.uX)(),(0,s.CE)("div",F,[(0,s.Lk)("h1",null,(0,f.v_)(r.movie.title),1),(0,s.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+r.movie.poster_path,alt:r.movie.title},null,8,D),(0,s.Lk)("p",null,(0,f.v_)(r.movie.overview),1),(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,[t[0]||(t[0]=(0,s.Lk)("strong",null,"평점:",-1)),(0,s.eW)(" "+(0,f.v_)(r.movie.vote_average),1)]),(0,s.Lk)("li",null,[t[1]||(t[1]=(0,s.Lk)("strong",null,"개봉일:",-1)),(0,s.eW)(" "+(0,f.v_)(r.movie.release_date),1)])])])):((0,s.uX)(),(0,s.CE)("div",$,t[2]||(t[2]=[(0,s.Lk)("p",null,"영화 정보를 불러오는 중입니다...",-1)])))}var q={data(){return{movieId:this.$route.params.id}},computed:{...(0,r.L8)(["movieDetails"]),movie(){return this.movieDetails}},methods:{...(0,r.i0)(["fetchMovieDetails"])},async mounted(){await this.fetchMovieDetails(this.movieId)}};const J=(0,c.A)(q,[["render",V],["__scopeId","data-v-293801ce"]]);var N=J;const U={class:"search"},G={class:"search-filters"},x=["value"],j={class:"poster-wrapper"},Q=["src","alt","onClick"],H={key:0,class:"wishlist-star"},B={key:0,class:"loading"};function Y(e,t,i,o,r,l){return(0,s.uX)(),(0,s.CE)("div",U,[(0,s.Lk)("div",G,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.query=e),onInput:t[1]||(t[1]=(...t)=>e.debouncedSearch&&e.debouncedSearch(...t)),placeholder:"영화 검색..."},null,544),[[a.Jo,r.query]]),(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.selectedGenre=e),onChange:t[3]||(t[3]=(...e)=>l.applyFilters&&l.applyFilters(...e))},[t[10]||(t[10]=(0,s.Lk)("option",{value:""},"장르 선택",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.genres,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.id},(0,f.v_)(e.name),9,x)))),128))],544),[[a.u1,r.selectedGenre]]),(0,s.bo)((0,s.Lk)("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=e=>r.minRating=e),onInput:t[5]||(t[5]=(...e)=>l.applyFilters&&l.applyFilters(...e)),placeholder:"최소 평점 (0 ~ 10)",min:"0",max:"10"},null,544),[[a.Jo,r.minRating]]),(0,s.bo)((0,s.Lk)("input",{type:"date","onUpdate:modelValue":t[6]||(t[6]=e=>r.releaseDate=e),onChange:t[7]||(t[7]=(...e)=>l.applyFilters&&l.applyFilters(...e))},null,544),[[a.Jo,r.releaseDate]]),(0,s.Lk)("button",{onClick:t[8]||(t[8]=(...e)=>l.resetFilters&&l.resetFilters(...e))},"필터 초기화")]),(0,s.Lk)("div",{class:"movie-list",ref:"scrollContainer",onScroll:t[9]||(t[9]=(...e)=>l.handleScroll&&l.handleScroll(...e))},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.filteredMovies,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"movie-card"},[(0,s.Lk)("div",j,[(0,s.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title,onClick:t=>l.toggleWishlist(e)},null,8,Q),l.isInWishlist(e)?((0,s.uX)(),(0,s.CE)("span",H,"★")):(0,s.Q3)("",!0)]),(0,s.Lk)("h3",null,(0,f.v_)(e.title),1)])))),128)),r.loading?((0,s.uX)(),(0,s.CE)("div",B,"로딩 중...")):(0,s.Q3)("",!0)],544)])}i(4520),i(1454);var z=i(8626),Z={data(){return{movies:[],allMovies:[],genres:[],selectedGenre:"",minRating:"",releaseDate:"",query:"",page:1,loading:!1,isEndOfData:!1,apiKey:localStorage.getItem("apiKey")}},created(){if(!this.apiKey)return alert("로그인 세션이 만료되었습니다. 다시 로그인해주세요."),void this.$router.push("/signin");this.debouncedSearch=(0,z.debounce)(this.searchMovies,500),this.fetchGenres(),this.loadInitialMovies()},computed:{filteredMovies(){return this.movies.filter((e=>{const t=!this.selectedGenre||e.genre_ids.includes(parseInt(this.selectedGenre)),i=!this.minRating||e.vote_average>=parseFloat(this.minRating),a=!this.releaseDate||e.release_date>=this.releaseDate;return t&&i&&a}))}},methods:{async fetchGenres(){try{const e=await m.A.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=ko-KR`);this.genres=e.data.genres}catch(e){console.error("장르 목록 가져오기 실패:",e),alert("장르 데이터를 불러오지 못했습니다.")}},async loadInitialMovies(){try{this.loading=!0;const e=await m.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=${this.page}`);this.allMovies=[...this.allMovies,...e.data.results],this.movies=[...this.allMovies],0===e.data.results.length&&(this.isEndOfData=!0)}catch(e){console.error("초기 영화 데이터 로드 실패:",e),alert("영화 데이터를 불러오지 못했습니다.")}finally{this.loading=!1}},handleScroll(){const e=this.$refs.scrollContainer;e.scrollTop+e.clientHeight>=e.scrollHeight&&!this.loading&&!this.isEndOfData&&(this.page++,this.loadInitialMovies())},applyFilters(){this.movies=this.allMovies},resetFilters(){this.query="",this.selectedGenre="",this.minRating="",this.releaseDate="",this.applyFilters()},async searchMovies(){if(this.query.trim())try{const e=await m.A.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.query}&language=ko-KR`);this.movies=e.data.results}catch(e){console.error("영화 검색 오류:",e),alert("검색 결과를 가져오지 못했습니다.")}else this.movies=this.allMovies},toggleWishlist(e){let t=JSON.parse(localStorage.getItem("wishlist"))||[];const i=t.findIndex((t=>t.id===e.id));-1===i?t.push(e):t.splice(i,1),localStorage.setItem("wishlist",JSON.stringify(t)),this.movies=this.movies.map((t=>(t.id===e.id&&(t.isInWishlist=!t.isInWishlist),t)))},isInWishlist(e){const t=JSON.parse(localStorage.getItem("wishlist"))||[];return t.some((t=>t.id===e.id))}}};const ee=(0,c.A)(Z,[["render",Y],["__scopeId","data-v-7a2cf4ab"]]);var te=ee;const ie={class:"trend-movies"},ae={class:"view-options"},se={key:0,class:"movie-list table-view"},oe={class:"pagination"},re=["disabled"],le=["disabled"],ne={key:0,class:"loading"};function ce(e,t,i,a,o,r){const l=(0,s.g2)("movie-card");return(0,s.uX)(),(0,s.CE)("div",ie,[t[5]||(t[5]=(0,s.Lk)("h1",null,"대세 콘텐츠",-1)),(0,s.Lk)("div",ae,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=e=>r.changeView("table"))},"Table View"),(0,s.Lk)("button",{onClick:t[1]||(t[1]=e=>r.changeView("infinite"))},"Infinite Scroll")]),"table"===o.viewType?((0,s.uX)(),(0,s.CE)("div",se,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.paginatedMovies,(e=>((0,s.uX)(),(0,s.Wv)(l,{key:e.id,movie:e},null,8,["movie"])))),128)),(0,s.Lk)("div",oe,[(0,s.Lk)("button",{onClick:t[2]||(t[2]=e=>r.changePage("previous")),disabled:1===o.page},"이전",8,re),(0,s.Lk)("span",null,"페이지 "+(0,f.v_)(o.page),1),(0,s.Lk)("button",{onClick:t[3]||(t[3]=e=>r.changePage("next")),disabled:o.page*o.itemsPerPage>=o.totalResults},"다음",8,le)])])):(0,s.Q3)("",!0),"infinite"===o.viewType?((0,s.uX)(),(0,s.CE)("div",{key:1,class:"movie-list infinite-scroll",onScroll:t[4]||(t[4]=(...e)=>r.loadMore&&r.loadMore(...e)),ref:"scrollContainer"},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.movies,(e=>((0,s.uX)(),(0,s.Wv)(l,{key:e.id,movie:e},null,8,["movie"])))),128)),o.loading?((0,s.uX)(),(0,s.CE)("div",ne,"Loading...")):(0,s.Q3)("",!0)],544)):(0,s.Q3)("",!0)])}var ue={components:{MovieCard:O},data(){return{viewType:"table",movies:[],page:1,loading:!1,itemsPerPage:20,totalResults:0}},mounted(){this.fetchMovies()},computed:{paginatedMovies(){const e=(this.page-1)*this.itemsPerPage,t=this.page*this.itemsPerPage;return this.movies.slice(e,t)}},methods:{async fetchMovies(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{this.loading=!0;const t=await m.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${this.page}`);1===this.page?this.movies=t.data.results:this.movies.push(...t.data.results),this.totalResults=t.data.total_results}catch(t){console.error("영화 데이터를 가져오는 데 오류가 발생했습니다.",t)}finally{this.loading=!1}},toggleWishlist(e){const t=JSON.parse(localStorage.getItem("wishlist"))||[],i=t.findIndex((t=>t.id===e.id));-1===i?(t.push(e),localStorage.setItem("wishlist",JSON.stringify(t))):(t.splice(i,1),localStorage.setItem("wishlist",JSON.stringify(t)))},changeView(e){this.viewType=e,this.page=1,this.movies=[],this.fetchMovies()},changePage(e){"previous"===e&&this.page>1?this.page--:"next"===e&&this.page*this.itemsPerPage<this.totalResults&&this.page++,this.fetchMovies()},async loadMore(){this.loading||(this.page++,await this.fetchMovies())}}};const de=(0,c.A)(ue,[["render",ce],["__scopeId","data-v-cb4328da"]]);var pe=de;const ve={class:"wishlist"},ge={key:0,class:"movie-list"},he={key:1};function me(e,t,i,a,o,r){const l=(0,s.g2)("movie-card");return(0,s.uX)(),(0,s.CE)("div",ve,[t[1]||(t[1]=(0,s.Lk)("h1",null,"위시리스트",-1)),o.movies.length>0?((0,s.uX)(),(0,s.CE)("div",ge,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.movies,(e=>((0,s.uX)(),(0,s.Wv)(l,{key:e.id,movie:e,onWishlistUpdated:r.loadWishlist},null,8,["movie","onWishlistUpdated"])))),128))])):((0,s.uX)(),(0,s.CE)("div",he,t[0]||(t[0]=[(0,s.Lk)("p",null,"찜한 영화가 없습니다.",-1)])))])}var ye={components:{MovieCard:O},data(){return{movies:[]}},created(){this.loadWishlist()},methods:{loadWishlist(){const e=JSON.parse(localStorage.getItem("wishlist"))||[];this.movies=e}}};const fe=(0,c.A)(ye,[["render",me],["__scopeId","data-v-4b137768"]]);var ke=fe;const be={class:"container"},Le={id:"phone"},we={id:"content-wrapper"},Ie={class:"checkbox remember"},Ee=["disabled"],Se={class:"checkbox remember"},_e=["disabled"];var Ke={__name:"SigninPage",setup(e){const t=(0,o.KR)(!0),i=(0,o.KR)(""),n=(0,o.KR)(""),c=(0,o.KR)(""),u=(0,o.KR)(""),d=(0,o.KR)(!1),p=(0,o.KR)(!1),v=(0,o.KR)(!1),g=(0,o.KR)(!1),h=(0,o.KR)(!1),y=(0,l.rd)(),k=(0,r.Pj)(),b=(0,s.EW)((()=>i.value&&n.value)),L=(0,s.EW)((()=>c.value&&u.value)),w=()=>{t.value=!t.value},I=e=>{"email"===e&&(p.value=!0),"password"===e&&(v.value=!0),"registerEmail"===e&&(g.value=!0),"registerPassword"===e&&(h.value=!0)},E=e=>{"email"===e&&(p.value=!1),"password"===e&&(v.value=!1),"registerEmail"===e&&(g.value=!1),"registerPassword"===e&&(h.value=!1)},S=async()=>{try{const e=await m.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:n.value,language:"en-US",page:1}});200===e.status&&(await k.dispatch("login",{apiKey:n.value,user:{email:i.value}}),d.value&&localStorage.setItem("email",i.value),alert("Login successful!"),y.push("/"))}catch(e){alert("Invalid API Key. Please check and try again.")}},_=async()=>{try{const e=await m.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:u.value,language:"en-US",page:1}});if(200===e.status){if(localStorage.getItem(c.value))return void alert("This email is already registered.");localStorage.setItem(c.value,JSON.stringify({password:u.value})),alert("Registration successful! Please log in."),w()}}catch(e){alert("Invalid API Key for registration. Please check and try again.")}};return(e,o)=>((0,s.uX)(),(0,s.CE)("div",null,[o[28]||(o[28]=(0,s.Lk)("div",{class:"bg-image"},null,-1)),(0,s.Lk)("div",be,[(0,s.Lk)("div",Le,[(0,s.Lk)("div",we,[(0,s.Lk)("div",{class:(0,f.C4)(["card",{hidden:!t.value}]),id:"login"},[(0,s.Lk)("form",{onSubmit:(0,a.D$)(S,["prevent"])},[o[20]||(o[20]=(0,s.Lk)("h1",null,"Sign in",-1)),(0,s.Lk)("div",{class:(0,f.C4)(["input",{active:p.value||i.value}])},[(0,s.bo)((0,s.Lk)("input",{id:"email",type:"email","onUpdate:modelValue":o[0]||(o[0]=e=>i.value=e),onFocus:o[1]||(o[1]=e=>I("email")),onBlur:o[2]||(o[2]=e=>E("email")),required:""},null,544),[[a.Jo,i.value]]),o[17]||(o[17]=(0,s.Lk)("label",{for:"email"},"Username or Email",-1))],2),(0,s.Lk)("div",{class:(0,f.C4)(["input",{active:v.value||n.value}])},[(0,s.bo)((0,s.Lk)("input",{id:"password",type:"password","onUpdate:modelValue":o[3]||(o[3]=e=>n.value=e),onFocus:o[4]||(o[4]=e=>I("password")),onBlur:o[5]||(o[5]=e=>E("password")),required:""},null,544),[[a.Jo,n.value]]),o[18]||(o[18]=(0,s.Lk)("label",{for:"password"},"Password",-1))],2),(0,s.Lk)("span",Ie,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",id:"remember","onUpdate:modelValue":o[6]||(o[6]=e=>d.value=e)},null,512),[[a.lH,d.value]]),o[19]||(o[19]=(0,s.Lk)("label",{for:"remember",class:"read-text"},"Remember me",-1))]),(0,s.Lk)("button",{disabled:!b.value},"Login",8,Ee)],32),(0,s.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:w},o[21]||(o[21]=[(0,s.eW)(" Already have an account? "),(0,s.Lk)("b",null,"Sign in",-1)]))],2),(0,s.Lk)("div",{class:(0,f.C4)(["card",{hidden:t.value}]),id:"register"},[(0,s.Lk)("form",{onSubmit:(0,a.D$)(_,["prevent"])},[o[26]||(o[26]=(0,s.Lk)("h1",null,"Sign up",-1)),(0,s.Lk)("div",{class:(0,f.C4)(["input",{active:g.value||c.value}])},[(0,s.bo)((0,s.Lk)("input",{id:"register-email",type:"email","onUpdate:modelValue":o[7]||(o[7]=e=>c.value=e),onFocus:o[8]||(o[8]=e=>I("registerEmail")),onBlur:o[9]||(o[9]=e=>E("registerEmail")),required:""},null,544),[[a.Jo,c.value]]),o[22]||(o[22]=(0,s.Lk)("label",{for:"register-email"},"Email",-1))],2),(0,s.Lk)("div",{class:(0,f.C4)(["input",{active:h.value||u.value}])},[(0,s.bo)((0,s.Lk)("input",{id:"register-password",type:"password","onUpdate:modelValue":o[10]||(o[10]=e=>u.value=e),onFocus:o[11]||(o[11]=e=>I("registerPassword")),onBlur:o[12]||(o[12]=e=>E("registerPassword")),required:""},null,544),[[a.Jo,u.value]]),o[23]||(o[23]=(0,s.Lk)("label",{for:"register-password"},"Password",-1))],2),(0,s.Lk)("div",{class:(0,f.C4)(["input",{active:e.isConfirmPasswordFocused||e.confirmPassword}])},[(0,s.bo)((0,s.Lk)("input",{id:"confirm-password",type:"password","onUpdate:modelValue":o[13]||(o[13]=t=>e.confirmPassword=t),onFocus:o[14]||(o[14]=e=>I("confirmPassword")),onBlur:o[15]||(o[15]=e=>E("confirmPassword")),required:""},null,544),[[a.Jo,e.confirmPassword]]),o[24]||(o[24]=(0,s.Lk)("label",{for:"confirm-password"},"Confirm Password",-1))],2),(0,s.Lk)("span",Se,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",id:"terms","onUpdate:modelValue":o[16]||(o[16]=t=>e.acceptTerms=t),required:""},null,512),[[a.lH,e.acceptTerms]]),o[25]||(o[25]=(0,s.Lk)("label",{for:"terms",class:"read-text"},[(0,s.eW)("I have read "),(0,s.Lk)("b",null,"Terms and Conditions")],-1))]),(0,s.Lk)("button",{disabled:!L.value},"Register",8,_e)],32),(0,s.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:w},o[27]||(o[27]=[(0,s.eW)(" Don't have an account? "),(0,s.Lk)("b",null,"Sign up",-1)]))],2)])])])]))}};const Ce=(0,c.A)(Ke,[["__scopeId","data-v-526e89cf"]]);var Me=Ce;const Pe=[{path:"/signin",name:"signin",component:Me},{path:"/",name:"home",component:T,meta:{requiresAuth:!0}},{path:"/popular",name:"popular",component:pe,meta:{requiresAuth:!0}},{path:"/movie/:id",name:"movie-details",component:N,props:!0,meta:{requiresAuth:!0}},{path:"/search",name:"search",component:te,meta:{requiresAuth:!0}},{path:"/wishlist",name:"wishlist",component:ke,meta:{requiresAuth:!0}}],Ae=(0,l.aE)({history:(0,l.LA)("/moviewsd/"),routes:Pe});Ae.beforeEach(((e,t,i)=>{const a=y.getters.isLoggedIn;"signin"===e.name&&a?i({name:"home"}):e.meta.requiresAuth&&!a?i({name:"signin"}):i()}));var We=Ae;(0,a.Ef)(h).use(y).use(We).mount("#app")}},t={};function i(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.m=e,function(){var e=[];i.O=function(t,a,s,o){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],s=e[u][1],o=e[u][2];for(var l=!0,n=0;n<a.length;n++)(!1&o||r>=o)&&Object.keys(i.O).every((function(e){return i.O[e](a[n])}))?a.splice(n--,1):(l=!1,o<r&&(r=o));if(l){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,s,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,o,r=a[0],l=a[1],n=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)i.o(l,s)&&(i.m[s]=l[s]);if(n)var u=n(i)}for(t&&t(a);c<r.length;c++)o=r[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},a=self["webpackChunkmoviewsd"]=self["webpackChunkmoviewsd"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[504],(function(){return i(4842)}));a=i.O(a)})();
//# sourceMappingURL=app.dda447a5.js.map