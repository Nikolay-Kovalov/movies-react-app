"use strict";(self.webpackChunkmovies_react_app=self.webpackChunkmovies_react_app||[]).push([[122],{122:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var o=n(216);const c="Cast_text__P2vgu",r="Cast_cast_list__6yHmm",s="Cast_image__mOsuM",a="Cast_title__0cH9s";var i=n(43),h=n(5);const l="Sceleton_sceleton__0ASBE",m="Sceleton_sceleton_text__fDRQ3";var f=n(579);const u=e=>{const{text:t}=e;return(0,f.jsx)("div",{className:l,children:(0,f.jsx)("span",{className:m,children:t})})},d=()=>{const{movieId:e}=(0,o.g)(),[t,n]=(0,i.useState)([]);return(0,i.useEffect)((()=>{h.A.fetchMovieActors(e).then((e=>(console.log(e.cast),n(e.cast))))}),[e,n]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{className:a,children:"Cast"}),(0,f.jsx)("ul",{className:r,children:null===t||void 0===t?void 0:t.map((e=>(console.log(e.profile_path),(0,f.jsxs)("li",{children:[e.profile_path?(0,f.jsx)("img",{className:s,src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:""}):(0,f.jsx)(u,{text:"No photo"}),(0,f.jsx)("p",{className:c,children:e.name}),(0,f.jsxs)("p",{className:c,children:["as ",'"'.concat(e.character,'"')]})]},e.name))))})]})}},5:(e,t,n)=>{n.d(t,{A:()=>r});const o="https://api.themoviedb.org/3",c={Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjM0ZGIxMWMxNjIwMTE1OTBkMTRhMzA4MDg0OGVkNiIsInN1YiI6IjYzYTNmZDQ0OTNkYjkyMDBmNDkxMGI0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LY_G36csxfyqSH7UhTlCGcx28IJPAx126r45DdOJrQ0"),accept:"application/json"},r={fetchTrandingMovies:async function(){return await fetch("".concat(o,"/trending/movie/week"),{headers:c}).then((e=>{if(!e.ok)throw new Error("Something went wrong");return e.json()}))},searchMovies:function(e){return fetch("".concat(o,"/search/movie?query=").concat(e),{headers:c}).then((e=>{if(!e.ok)throw new Error("Something went wrong");return e.json()}))},fetchMovieDetails:function(e){return fetch("".concat(o,"/movie/").concat(e),{headers:c}).then((e=>{if(!e.ok)throw new Error("Something went wrong");return e.json()}))},fetchMovieActors:function(e){return fetch("".concat(o,"/movie/").concat(e,"/credits"),{headers:c}).then((e=>{if(!e.ok)throw new Error("Something went wrong");return e.json()}))},fetchMovieReviews:function(e){return fetch("".concat(o,"/movie/").concat(e,"/reviews"),{headers:c}).then((e=>{if(!e.ok)throw new Error("Something went wrong");return e.json()}))}}}}]);
//# sourceMappingURL=122.5026ea88.chunk.js.map