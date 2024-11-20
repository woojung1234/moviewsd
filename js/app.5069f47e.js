(function(){"use strict";var e={6696:function(e,t,i){var a=i(5130),s=i(6768);function o(e,t){const i=(0,s.g2)("router-link"),a=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("nav",null,[(0,s.bF)(i,{to:"/"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("홈")]))),_:1}),t[5]||(t[5]=(0,s.eW)(" | ")),(0,s.bF)(i,{to:"/popular"},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.eW)("인기 영화")]))),_:1}),t[6]||(t[6]=(0,s.eW)(" | ")),(0,s.bF)(i,{to:"/search"},{default:(0,s.k6)((()=>t[2]||(t[2]=[(0,s.eW)("검색하기")]))),_:1}),t[7]||(t[7]=(0,s.eW)(" | ")),(0,s.bF)(i,{to:"/wishlist"},{default:(0,s.k6)((()=>t[3]||(t[3]=[(0,s.eW)("좋아하는 영화")]))),_:1}),t[8]||(t[8]=(0,s.eW)(" | ")),(0,s.bF)(i,{to:"/signin"},{default:(0,s.k6)((()=>t[4]||(t[4]=[(0,s.eW)("로그인")]))),_:1})]),(0,s.bF)(a)],64)}var l=i(1241);const n={},r=(0,l.A)(n,[["render",o]]);var c=r,u=i(1387),d=i(4232);const v={class:"home"},p={key:0,class:"featured-movie"},h=["src","alt"],m={class:"featured-info"},g={class:"genre-sections"},f=["onWheel"];function k(e,t,i,o,l,n){const r=(0,s.g2)("MovieCard");return(0,s.uX)(),(0,s.CE)("div",v,[l.featuredMovie?((0,s.uX)(),(0,s.CE)("div",p,[(0,s.Lk)("img",{src:"https://image.tmdb.org/t/p/original"+l.featuredMovie.backdrop_path,alt:l.featuredMovie.title,class:"featured-image"},null,8,h),(0,s.Lk)("div",m,[(0,s.Lk)("h1",null,(0,d.v_)(l.featuredMovie.title),1),(0,s.Lk)("p",null,(0,d.v_)(l.featuredMovie.overview),1)])])):(0,s.Q3)("",!0),(0,s.Lk)("div",g,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.genres,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:e.name,class:"genre-section",ref_for:!0,ref:"genreSections"},[(0,s.Lk)("h2",null,(0,d.v_)(e.name),1),(0,s.Lk)("div",{class:"movie-slider",onWheel:(0,a.D$)((e=>n.handleScroll(e,t)),["prevent"])},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.movies,(e=>((0,s.uX)(),(0,s.Wv)(r,{key:e.id,movie:e},null,8,["movie"])))),128))],40,f)])))),128))])])}var y=i(4373);const b={class:"movie-card"},_=["src","alt"];function E(e,t,i,o,l,n){return(0,s.uX)(),(0,s.CE)("div",b,[(0,s.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+i.movie.poster_path,alt:i.movie.title,onClick:t[0]||(t[0]=(...e)=>n.toggleWishlist&&n.toggleWishlist(...e))},null,8,_),l.isWishlisted?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"wishlist-icon",onClick:t[1]||(t[1]=(0,a.D$)(((...e)=>n.toggleWishlist&&n.toggleWishlist(...e)),["stop"]))}," ★ ")):(0,s.Q3)("",!0),(0,s.Lk)("h3",null,(0,d.v_)(i.movie.title),1)])}i(4114),i(8992),i(7550);var L={props:{movie:Object},data(){return{isWishlisted:!1}},created(){this.checkWishlistStatus()},methods:{toggleWishlist(){const e=JSON.parse(localStorage.getItem("wishlist"))||[],t=e.findIndex((e=>e.id===this.movie.id));t>-1?(e.splice(t,1),this.isWishlisted=!1):(e.push(this.movie),this.isWishlisted=!0),localStorage.setItem("wishlist",JSON.stringify(e)),this.$emit("wishlist-updated")},checkWishlistStatus(){const e=JSON.parse(localStorage.getItem("wishlist"))||[];this.isWishlisted=e.some((e=>e.id===this.movie.id))}}};const S=(0,l.A)(L,[["render",E],["__scopeId","data-v-e756170a"]]);var w=S,M={components:{MovieCard:w},data(){return{featuredMovie:null,genres:[{name:"최신",endpoint:"now_playing",movies:[]},{name:"인기",endpoint:"popular",movies:[]},{name:"코믹",genreId:35,movies:[]},{name:"액션",genreId:28,movies:[]},{name:"로맨스",genreId:10749,movies:[]}]}},async mounted(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{const t=await y.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=1`);this.featuredMovie=t.data.results[0];for(let i of this.genres){let t=i.endpoint?`https://api.themoviedb.org/3/movie/${i.endpoint}?api_key=${e}&language=ko-KR&page=1`:`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=${i.genreId}&language=ko-KR&page=1`;const a=await y.A.get(t);i.movies=a.data.results.slice(0,10)}}catch(t){console.error("영화 데이터를 불러오는 데 실패했습니다.",t)}},methods:{handleScroll(e,t){const i=this.$refs.genreSections[t].querySelector(".movie-slider");i.scrollLeft+=e.deltaY>0?100:-100}}};const I=(0,l.A)(M,[["render",k],["__scopeId","data-v-9b365ba8"]]);var C=I;const W={key:0,class:"movie-details"},O=["src","alt"],X={key:1};function R(e,t,i,a,o,l){return l.movie?((0,s.uX)(),(0,s.CE)("div",W,[(0,s.Lk)("h1",null,(0,d.v_)(l.movie.title),1),(0,s.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+l.movie.poster_path,alt:l.movie.title},null,8,O),(0,s.Lk)("p",null,(0,d.v_)(l.movie.overview),1),(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,[t[0]||(t[0]=(0,s.Lk)("strong",null,"평점:",-1)),(0,s.eW)(" "+(0,d.v_)(l.movie.vote_average),1)]),(0,s.Lk)("li",null,[t[1]||(t[1]=(0,s.Lk)("strong",null,"개봉일:",-1)),(0,s.eW)(" "+(0,d.v_)(l.movie.release_date),1)])])])):((0,s.uX)(),(0,s.CE)("div",X,t[2]||(t[2]=[(0,s.Lk)("p",null,"영화 정보를 불러오는 중입니다...",-1)])))}var A=i(782),F={data(){return{movieId:this.$route.params.id}},computed:{...(0,A.L8)(["movieDetails"]),movie(){return this.movieDetails}},methods:{...(0,A.i0)(["fetchMovieDetails"])},async mounted(){await this.fetchMovieDetails(this.movieId)}};const D=(0,l.A)(F,[["render",R],["__scopeId","data-v-293801ce"]]);var K=D;const P={class:"search"},V={class:"search-filters"},$=["value"],T={class:"poster-wrapper"},J=["src","alt","onClick"],q={key:0,class:"wishlist-star"},N={key:0,class:"loading"};function U(e,t,i,o,l,n){return(0,s.uX)(),(0,s.CE)("div",P,[(0,s.Lk)("div",V,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.query=e),onInput:t[1]||(t[1]=(...t)=>e.debouncedSearch&&e.debouncedSearch(...t)),placeholder:"영화 검색..."},null,544),[[a.Jo,l.query]]),(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.selectedGenre=e),onChange:t[3]||(t[3]=(...e)=>n.applyFilters&&n.applyFilters(...e))},[t[10]||(t[10]=(0,s.Lk)("option",{value:""},"장르 선택",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.genres,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.id},(0,d.v_)(e.name),9,$)))),128))],544),[[a.u1,l.selectedGenre]]),(0,s.bo)((0,s.Lk)("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=e=>l.minRating=e),onInput:t[5]||(t[5]=(...e)=>n.applyFilters&&n.applyFilters(...e)),placeholder:"최소 평점 (0 ~ 10)",min:"0",max:"10"},null,544),[[a.Jo,l.minRating]]),(0,s.bo)((0,s.Lk)("input",{type:"date","onUpdate:modelValue":t[6]||(t[6]=e=>l.releaseDate=e),onChange:t[7]||(t[7]=(...e)=>n.applyFilters&&n.applyFilters(...e))},null,544),[[a.Jo,l.releaseDate]]),(0,s.Lk)("button",{onClick:t[8]||(t[8]=(...e)=>n.resetFilters&&n.resetFilters(...e))},"필터 초기화")]),(0,s.Lk)("div",{class:"movie-list",ref:"scrollContainer",onScroll:t[9]||(t[9]=(...e)=>n.handleScroll&&n.handleScroll(...e))},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.filteredMovies,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"movie-card"},[(0,s.Lk)("div",T,[(0,s.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title,onClick:t=>n.toggleWishlist(e)},null,8,J),n.isInWishlist(e)?((0,s.uX)(),(0,s.CE)("span",q,"★")):(0,s.Q3)("",!0)]),(0,s.Lk)("h3",null,(0,d.v_)(e.title),1)])))),128)),l.loading?((0,s.uX)(),(0,s.CE)("div",N,"로딩 중...")):(0,s.Q3)("",!0)],544)])}i(4520),i(1454);var G=i(8626),x={data(){return{movies:[],allMovies:[],genres:[],selectedGenre:"",minRating:"",releaseDate:"",query:"",page:1,loading:!1,isEndOfData:!1}},created(){this.debouncedSearch=(0,G.debounce)(this.searchMovies,500),this.fetchGenres(),this.loadInitialMovies()},computed:{filteredMovies(){return this.movies.filter((e=>{const t=!this.selectedGenre||e.genre_ids.includes(parseInt(this.selectedGenre)),i=!this.minRating||e.vote_average>=parseFloat(this.minRating),a=!this.releaseDate||e.release_date>=this.releaseDate;return t&&i&&a}))}},methods:{async fetchGenres(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{const t=await y.A.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${e}&language=ko-KR`);this.genres=t.data.genres}catch(t){console.error("장르 목록 가져오기 실패:",t)}},async loadInitialMovies(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{this.loading=!0;const t=await y.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${this.page}`);this.allMovies=[...this.allMovies,...t.data.results],this.movies=[...this.allMovies],0===t.data.results.length&&(this.isEndOfData=!0)}catch(t){console.error("초기 영화 데이터 로드 실패:",t)}finally{this.loading=!1}},handleScroll(){const e=this.$refs.scrollContainer;e.scrollTop+e.clientHeight>=e.scrollHeight&&!this.loading&&!this.isEndOfData&&(this.page++,this.loadInitialMovies())},applyFilters(){this.movies=this.allMovies},resetFilters(){this.query="",this.selectedGenre="",this.minRating="",this.releaseDate="",this.applyFilters()},async searchMovies(){const e="1cc6831125c4a1baf8f809dc1f68ec14";if(this.query.trim())try{const t=await y.A.get(`https://api.themoviedb.org/3/search/movie?api_key=${e}&query=${this.query}&language=ko-KR`);this.movies=t.data.results}catch(t){console.error("영화 검색 오류:",t)}else this.movies=this.allMovies},toggleWishlist(e){let t=JSON.parse(localStorage.getItem("wishlist"))||[];const i=t.findIndex((t=>t.id===e.id));-1===i?t.push(e):t.splice(i,1),localStorage.setItem("wishlist",JSON.stringify(t)),this.movies=this.movies.map((t=>(t.id===e.id&&(t.isInWishlist=!t.isInWishlist),t)))},isInWishlist(e){const t=JSON.parse(localStorage.getItem("wishlist"))||[];return t.some((t=>t.id===e.id))}}};const Q=(0,l.A)(x,[["render",U],["__scopeId","data-v-3902f6a0"]]);var j=Q;const H={class:"trend-movies"},z={class:"view-options"},Z={key:0,class:"movie-list table-view"},B={class:"pagination"},Y=["disabled"],ee=["disabled"],te={key:0,class:"loading"};function ie(e,t,i,a,o,l){const n=(0,s.g2)("movie-card");return(0,s.uX)(),(0,s.CE)("div",H,[t[5]||(t[5]=(0,s.Lk)("h1",null,"대세 콘텐츠",-1)),(0,s.Lk)("div",z,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=e=>l.changeView("table"))},"Table View"),(0,s.Lk)("button",{onClick:t[1]||(t[1]=e=>l.changeView("infinite"))},"Infinite Scroll")]),"table"===o.viewType?((0,s.uX)(),(0,s.CE)("div",Z,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.paginatedMovies,(e=>((0,s.uX)(),(0,s.Wv)(n,{key:e.id,movie:e},null,8,["movie"])))),128)),(0,s.Lk)("div",B,[(0,s.Lk)("button",{onClick:t[2]||(t[2]=e=>l.changePage("previous")),disabled:1===o.page},"이전",8,Y),(0,s.Lk)("span",null,"페이지 "+(0,d.v_)(o.page),1),(0,s.Lk)("button",{onClick:t[3]||(t[3]=e=>l.changePage("next")),disabled:o.page*o.itemsPerPage>=o.totalResults},"다음",8,ee)])])):(0,s.Q3)("",!0),"infinite"===o.viewType?((0,s.uX)(),(0,s.CE)("div",{key:1,class:"movie-list infinite-scroll",onScroll:t[4]||(t[4]=(...e)=>l.loadMore&&l.loadMore(...e)),ref:"scrollContainer"},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.movies,(e=>((0,s.uX)(),(0,s.Wv)(n,{key:e.id,movie:e},null,8,["movie"])))),128)),o.loading?((0,s.uX)(),(0,s.CE)("div",te,"Loading...")):(0,s.Q3)("",!0)],544)):(0,s.Q3)("",!0)])}var ae={components:{MovieCard:w},data(){return{viewType:"table",movies:[],page:1,loading:!1,itemsPerPage:20,totalResults:0}},mounted(){this.fetchMovies()},computed:{paginatedMovies(){const e=(this.page-1)*this.itemsPerPage,t=this.page*this.itemsPerPage;return this.movies.slice(e,t)}},methods:{async fetchMovies(){const e="1cc6831125c4a1baf8f809dc1f68ec14";try{this.loading=!0;const t=await y.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${this.page}`);1===this.page?this.movies=t.data.results:this.movies.push(...t.data.results),this.totalResults=t.data.total_results}catch(t){console.error("영화 데이터를 가져오는 데 오류가 발생했습니다.",t)}finally{this.loading=!1}},toggleWishlist(e){const t=JSON.parse(localStorage.getItem("wishlist"))||[],i=t.findIndex((t=>t.id===e.id));-1===i?(t.push(e),localStorage.setItem("wishlist",JSON.stringify(t))):(t.splice(i,1),localStorage.setItem("wishlist",JSON.stringify(t)))},changeView(e){this.viewType=e,this.page=1,this.movies=[],this.fetchMovies()},changePage(e){"previous"===e&&this.page>1?this.page--:"next"===e&&this.page*this.itemsPerPage<this.totalResults&&this.page++,this.fetchMovies()},async loadMore(){this.loading||(this.page++,await this.fetchMovies())}}};const se=(0,l.A)(ae,[["render",ie],["__scopeId","data-v-cb4328da"]]);var oe=se;const le={class:"wishlist"},ne={key:0,class:"movie-list"},re={key:1};function ce(e,t,i,a,o,l){const n=(0,s.g2)("movie-card");return(0,s.uX)(),(0,s.CE)("div",le,[t[1]||(t[1]=(0,s.Lk)("h1",null,"위시리스트",-1)),o.movies.length>0?((0,s.uX)(),(0,s.CE)("div",ne,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.movies,(e=>((0,s.uX)(),(0,s.Wv)(n,{key:e.id,movie:e,onWishlistUpdated:l.loadWishlist},null,8,["movie","onWishlistUpdated"])))),128))])):((0,s.uX)(),(0,s.CE)("div",re,t[0]||(t[0]=[(0,s.Lk)("p",null,"찜한 영화가 없습니다.",-1)])))])}var ue={components:{MovieCard:w},data(){return{movies:[]}},created(){this.loadWishlist()},methods:{loadWishlist(){const e=JSON.parse(localStorage.getItem("wishlist"))||[];this.movies=e}}};const de=(0,l.A)(ue,[["render",ce],["__scopeId","data-v-4b137768"]]);var ve=de,pe=(i(2577),i(144));const he={class:"auth-container"},me={key:"login"},ge={key:0,class:"error"},fe={key:"signup"},ke={key:0,class:"error"},ye={key:0,class:"error"},be={key:0,class:"error"};var _e={__name:"SigninPage",setup(e){const t=(0,pe.KR)(""),i=(0,pe.KR)(""),o=(0,pe.KR)(""),l=(0,pe.KR)(!1),n=(0,pe.KR)(!1),r=(0,pe.KR)(!0),c=(0,u.rd)(),v=(0,s.EW)((()=>{const e=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;return e.test(t.value)})),p=()=>{r.value=!r.value},h=()=>{if(!v.value||!t.value||!i.value||i.value!==o.value||!n.value)return void alert("입력값을 확인해주세요.");const e=JSON.parse(localStorage.getItem("users"))||[],a=e.some((e=>e.email===t.value));a?alert("이미 등록된 이메일입니다."):(e.push({email:t.value,password:i.value}),localStorage.setItem("users",JSON.stringify(e)),alert("회원가입 성공!"),p())},m=()=>{if(!v.value||!t.value||!i.value)return void alert("입력값을 확인해주세요.");const e=JSON.parse(localStorage.getItem("users"))||[],a=e.find((e=>e.email===t.value&&e.password===i.value));a?(localStorage.setItem("isLoggedIn","true"),l.value&&localStorage.setItem("rememberMe","true"),alert("로그인 성공!"),c.push("/")):alert("로그인 실패. 아이디와 비밀번호를 확인해주세요.")};return(e,c)=>((0,s.uX)(),(0,s.CE)("div",he,[(0,s.bF)(a.eB,{name:"fade"},{default:(0,s.k6)((()=>[r.value?((0,s.uX)(),(0,s.CE)("div",me,[c[11]||(c[11]=(0,s.Lk)("h2",null,"로그인",-1)),(0,s.Lk)("form",{onSubmit:(0,a.D$)(m,["prevent"])},[(0,s.Lk)("div",null,[c[7]||(c[7]=(0,s.Lk)("label",{for:"email"},"아이디 (이메일): ",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":c[0]||(c[0]=e=>t.value=e),type:"email",id:"email",required:"",placeholder:"이메일을 입력하세요"},null,512),[[a.Jo,t.value]]),t.value&&!v.value?((0,s.uX)(),(0,s.CE)("span",ge,"올바른 이메일 형식을 입력하세요.")):(0,s.Q3)("",!0)]),(0,s.Lk)("div",null,[c[8]||(c[8]=(0,s.Lk)("label",{for:"password"},"비밀번호: ",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":c[1]||(c[1]=e=>i.value=e),type:"password",id:"password",required:"",placeholder:"비밀번호를 입력하세요"},null,512),[[a.Jo,i.value]])]),(0,s.Lk)("div",null,[(0,s.Lk)("label",null,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":c[2]||(c[2]=e=>l.value=e),type:"checkbox"},null,512),[[a.lH,l.value]]),c[9]||(c[9]=(0,s.eW)(" Remember me "))])]),c[10]||(c[10]=(0,s.Lk)("button",{type:"submit"},"로그인",-1))],32)])):((0,s.uX)(),(0,s.CE)("div",fe,[c[17]||(c[17]=(0,s.Lk)("h2",null,"회원가입",-1)),(0,s.Lk)("form",{onSubmit:(0,a.D$)(h,["prevent"])},[(0,s.Lk)("div",null,[c[12]||(c[12]=(0,s.Lk)("label",{for:"email"},"아이디 (이메일): ",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":c[3]||(c[3]=e=>t.value=e),type:"email",id:"email",required:"",placeholder:"이메일을 입력하세요"},null,512),[[a.Jo,t.value]]),t.value&&!v.value?((0,s.uX)(),(0,s.CE)("span",ke,"올바른 이메일 형식을 입력하세요.")):(0,s.Q3)("",!0)]),(0,s.Lk)("div",null,[c[13]||(c[13]=(0,s.Lk)("label",{for:"password"},"비밀번호: ",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":c[4]||(c[4]=e=>i.value=e),type:"password",id:"password",required:"",placeholder:"비밀번호를 입력하세요"},null,512),[[a.Jo,i.value]])]),(0,s.Lk)("div",null,[c[14]||(c[14]=(0,s.Lk)("label",{for:"passwordConfirm"},"비밀번호 확인: ",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":c[5]||(c[5]=e=>o.value=e),type:"password",id:"passwordConfirm",required:"",placeholder:"비밀번호를 다시 입력하세요"},null,512),[[a.Jo,o.value]]),i.value!==o.value?((0,s.uX)(),(0,s.CE)("span",ye,"비밀번호가 일치하지 않습니다.")):(0,s.Q3)("",!0)]),(0,s.Lk)("div",null,[(0,s.Lk)("label",null,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":c[6]||(c[6]=e=>n.value=e),type:"checkbox"},null,512),[[a.lH,n.value]]),c[15]||(c[15]=(0,s.eW)(" 약관 동의 "))]),n.value?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("span",be,"약관에 동의해야 합니다."))]),c[16]||(c[16]=(0,s.Lk)("button",{type:"submit"},"회원가입",-1))],32)]))])),_:1}),(0,s.Lk)("p",{onClick:p},(0,d.v_)(r.value?"회원가입":"로그인")+"으로 전환",1)]))}};const Ee=(0,l.A)(_e,[["__scopeId","data-v-476d446b"]]);var Le=Ee;const Se=[{path:"/signin",name:"signin",component:Le},{path:"/",name:"home",component:C,meta:{requiresAuth:!0}},{path:"/popular",name:"popular",component:oe,meta:{requiresAuth:!0}},{path:"/movie/:id",name:"movie-details",component:K,props:!0,meta:{requiresAuth:!0}},{path:"/search",name:"search",component:j,meta:{requiresAuth:!0}},{path:"/wishlist",name:"wishlist",component:ve,meta:{requiresAuth:!0}}],we=(0,u.aE)({history:(0,u.LA)("/moviewsd/"),routes:Se});we.beforeEach(((e,t,i)=>{const a="true"===localStorage.getItem("isLoggedIn");e.meta.requiresAuth&&!a?i({name:"signin"}):"signin"===e.name&&a?i({name:"home"}):i()}));var Me=we,Ie=(0,A.y$)({state:{popularMovies:[],movieDetails:null,searchedMovies:[],genreMovies:[],genres:[]},getters:{popularMovies:e=>e.popularMovies,movieDetails:e=>e.movieDetails,searchedMovies:e=>e.searchedMovies,genreMovies:e=>e.genreMovies,genres:e=>e.genres},mutations:{SET_POPULAR_MOVIES(e,t){e.popularMovies=t},SET_MOVIE_DETAILS(e,t){e.movieDetails=t},SET_SEARCHED_MOVIES(e,t){e.searchedMovies=t},SET_GENRE_MOVIES(e,t){e.genreMovies=t},SET_GENRES(e,t){e.genres=t}},actions:{async fetchPopularMovies({commit:e}){try{const t=await y.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR",page:1}});e("SET_POPULAR_MOVIES",t.data.results)}catch(t){console.error("Error fetching popular movies:",t)}},async fetchMovieDetails({commit:e},t){try{const i=await y.A.get(`https://api.themoviedb.org/3/movie/${t}`,{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR"}});e("SET_MOVIE_DETAILS",i.data)}catch(i){console.error("Error fetching movie details:",i)}},async fetchSearchedMovies({commit:e},t){try{const i=await y.A.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR",query:t,page:1}});e("SET_SEARCHED_MOVIES",i.data.results)}catch(i){console.error("Error fetching searched movies:",i)}},async fetchGenreMovies({commit:e},t){try{const i=await y.A.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR",with_genres:t,page:1}});e("SET_GENRE_MOVIES",i.data.results)}catch(i){console.error("Error fetching genre movies:",i)}},async fetchGenres({commit:e}){try{const t=await y.A.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"1cc6831125c4a1baf8f809dc1f68ec14",language:"ko-KR"}});e("SET_GENRES",t.data.genres)}catch(t){console.error("Error fetching genres:",t)}}},modules:{}});(0,a.Ef)(c).use(Ie).use(Me).mount("#app")}},t={};function i(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.m=e,function(){var e=[];i.O=function(t,a,s,o){if(!a){var l=1/0;for(u=0;u<e.length;u++){a=e[u][0],s=e[u][1],o=e[u][2];for(var n=!0,r=0;r<a.length;r++)(!1&o||l>=o)&&Object.keys(i.O).every((function(e){return i.O[e](a[r])}))?a.splice(r--,1):(n=!1,o<l&&(l=o));if(n){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,s,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,o,l=a[0],n=a[1],r=a[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(s in n)i.o(n,s)&&(i.m[s]=n[s]);if(r)var u=r(i)}for(t&&t(a);c<l.length;c++)o=l[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},a=self["webpackChunkmoviewsd"]=self["webpackChunkmoviewsd"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[504],(function(){return i(6696)}));a=i.O(a)})();
//# sourceMappingURL=app.5069f47e.js.map