"use strict";(self.webpackChunkmovies_react_app=self.webpackChunkmovies_react_app||[]).push([[735],{696:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(216),o=n(475);const c="MovieCard_link__cU0+M",i="MovieCard_image__v3zM0",s="MovieCard_card__HYBCA",a="MovieCard_title__iNP14";var h=n(579);const d=e=>{const t=(0,r.zy)(),{title:n,image:d,id:m}=e;return(0,h.jsx)("li",{className:s,children:(0,h.jsxs)(o.N_,{state:{from:t},to:"/movies/".concat(m),className:c,children:[(0,h.jsx)("img",{className:i,src:"https://image.tmdb.org/t/p/w500/".concat(d),alt:""}),(0,h.jsx)("h3",{className:a,children:n})]})})}},735:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(43);const o="PopularMovies_list__5t5yK";var c=n(5),i=n(696),s=n(579);const a=()=>{const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{c.A.fetchTrandingMovies().then((e=>{t(e.results)})).catch((e=>console.log(e.message)))}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{className:o,children:e.map((e=>(0,s.jsx)(i.A,{id:e.id,title:e.title,image:e.poster_path},e.id)))})})},h=()=>(0,s.jsx)(a,{})},5:(e,t,n)=>{n.d(t,{A:()=>c});const r="https://api.themoviedb.org/3",o={Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjM0ZGIxMWMxNjIwMTE1OTBkMTRhMzA4MDg0OGVkNiIsInN1YiI6IjYzYTNmZDQ0OTNkYjkyMDBmNDkxMGI0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LY_G36csxfyqSH7UhTlCGcx28IJPAx126r45DdOJrQ0"),accept:"application/json"},c={fetchTrandingMovies:async function(){return await fetch("".concat(r,"/trending/movie/week"),{headers:o}).then((e=>{if(!e.ok)throw new Error("Something went wrong");return e.json()}))},searchMovies:function(e){return fetch("".concat(r,"/search/movie?query=").concat(e),{headers:o}).then((e=>{if(!e.ok)throw new Error("Something went wrong");return e.json()}))},fetchMovieDetails:function(e){return fetch("".concat(r,"/movie/").concat(e),{headers:o}).then((e=>{if(!e.ok)throw new Error("Something went wrong");return e.json()}))},fetchMovieActors:function(e){return fetch("".concat(r,"/movie/").concat(e,"/credits"),{headers:o}).then((e=>{if(!e.ok)throw new Error("Something went wrong");return e.json()}))},fetchMovieReviews:function(e){return fetch("".concat(r,"/movie/").concat(e,"/reviews"),{headers:o}).then((e=>{if(!e.ok)throw new Error("Something went wrong");return e.json()}))}}}}]);
//# sourceMappingURL=735.5890a8fe.chunk.js.map