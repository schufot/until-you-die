(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9659:function(e,t,n){Promise.resolve().then(n.bind(n,5296)),Promise.resolve().then(n.t.bind(n,3247,23)),Promise.resolve().then(n.t.bind(n,8877,23))},5296:function(e,t,n){"use strict";var c=n(7437),a=n(9512);n(2265),t.default=function(e){let{children:t}=e;return(0,c.jsx)(a.f,{attribute:"class",defaultTheme:"dark",enableSystem:!0,disableTransitionOnChange:!0,children:t})}},8877:function(){},3247:function(e){e.exports={style:{fontFamily:"'__Inter_293693', '__Inter_Fallback_293693'",fontStyle:"normal"},className:"__className_293693"}},9512:function(e,t,n){"use strict";n.d(t,{F:function(){return i},f:function(){return m}});var c=n(2265),a=["light","dark"],o="(prefers-color-scheme: dark)",r="undefined"==typeof window,l=c.createContext(void 0),s={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=c.useContext(l))?e:s},m=e=>c.useContext(l)?e.children:c.createElement(u,{...e}),d=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:m=d,defaultTheme:u=r?"system":"light",attribute:b="data-theme",value:g,children:S,nonce:p}=e,[k,w]=c.useState(()=>f(i,u)),[C,T]=c.useState(()=>f(i)),_=g?Object.values(g):m,E=c.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=v());let c=g?g[t]:t,o=n?y():null,l=document.documentElement;if("class"===b?(l.classList.remove(..._),c&&l.classList.add(c)):c?l.setAttribute(b,c):l.removeAttribute(b),s){let e=a.includes(u)?u:null,n=a.includes(t)?t:e;l.style.colorScheme=n}null==o||o()},[]),x=c.useCallback(e=>{let t="function"==typeof e?e(e):e;w(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),L=c.useCallback(e=>{T(v(e)),"system"===k&&r&&!t&&E("system")},[k,t]);c.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),c.useEffect(()=>{let e=e=>{e.key===i&&x(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),c.useEffect(()=>{E(null!=t?t:k)},[t,k]);let N=c.useMemo(()=>({theme:k,setTheme:x,forcedTheme:t,resolvedTheme:"system"===k?C:k,themes:r?[...m,"system"]:m,systemTheme:r?C:void 0}),[k,x,t,C,r,m]);return c.createElement(l.Provider,{value:N},c.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:s,storageKey:i,themes:m,defaultTheme:u,attribute:b,value:g,children:S,attrs:_,nonce:p}),S)},h=c.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:r,enableSystem:l,enableColorScheme:s,defaultTheme:i,value:m,attrs:d,nonce:u}=e,h="system"===i,f="class"===r?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(r,"',s='setAttribute';"),y=s?(a.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],c=m?m[e]:e,o=t?e+"|| ''":"'".concat(c,"'"),l="";return s&&n&&!t&&a.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===r?t||c?l+="c.add(".concat(o,")"):l+="null":c&&(l+="d[s](n,".concat(o,")")),l},b=t?"!function(){".concat(f).concat(v(t),"}()"):l?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(o,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(v(m?"x[e]":"e",!0),"}").concat(h?"":"else{"+v(i,!1,!1)+"}").concat(y,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(v(m?"x[e]":"e",!0),"}else{").concat(v(i,!1,!1),";}").concat(y,"}catch(t){}}();");return c.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:b}})}),f=(e,t)=>{let n;if(!r){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},function(e){e.O(0,[569,971,23,744],function(){return e(e.s=9659)}),_N_E=e.O()}]);