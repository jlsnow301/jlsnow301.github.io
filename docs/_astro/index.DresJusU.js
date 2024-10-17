import{r as o}from"./index.l2PZgWEW.js";import{j as u,c as l}from"./utils.BOAak5r2.js";/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g=(...e)=>e.filter((r,t,d)=>!!r&&d.indexOf(r)===t).join(" ");/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=o.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:d,className:a="",children:s,iconNode:n,...c},i)=>o.createElement("svg",{ref:i,...b,width:r,height:r,stroke:e,strokeWidth:d?Number(t)*24/Number(r):t,className:g("lucide",a),...c},[...n.map(([p,x])=>o.createElement(p,x)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(e,r)=>{const t=o.forwardRef(({className:d,...a},s)=>o.createElement(j,{ref:s,iconNode:r,className:g(`lucide-${v(e)}`,d),...a}));return t.displayName=`${e}`,t},y=o.forwardRef(({className:e,...r},t)=>u.jsx("div",{ref:t,className:l("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));y.displayName="Card";const R=o.forwardRef(({className:e,...r},t)=>u.jsx("div",{ref:t,className:l("flex flex-col space-y-1.5 p-6",e),...r}));R.displayName="CardHeader";const S=o.forwardRef(({className:e,...r},t)=>u.jsx("h3",{ref:t,className:l("font-semibold text-2xl leading-none tracking-tight",e),...r}));S.displayName="CardTitle";const $=o.forwardRef(({className:e,...r},t)=>u.jsx("p",{ref:t,className:l("text-muted-foreground text-sm",e),...r}));$.displayName="CardDescription";const k=o.forwardRef(({className:e,...r},t)=>u.jsx("div",{ref:t,className:l("p-6 pt-0",e),...r}));k.displayName="CardContent";const E=o.forwardRef(({className:e,...r},t)=>u.jsx("div",{ref:t,className:l("flex items-center p-6 pt-0",e),...r}));E.displayName="CardFooter";function B(e,r=[]){let t=[];function d(s,n){const c=o.createContext(n),i=t.length;t=[...t,n];function p(m){const{scope:C,children:w,...f}=m,N=C?.[e][i]||c,h=o.useMemo(()=>f,Object.values(f));return u.jsx(N.Provider,{value:h,children:w})}function x(m,C){const w=C?.[e][i]||c,f=o.useContext(w);if(f)return f;if(n!==void 0)return n;throw new Error(`\`${m}\` must be used within \`${s}\``)}return p.displayName=s+"Provider",[p,x]}const a=()=>{const s=t.map(n=>o.createContext(n));return function(c){const i=c?.[e]||s;return o.useMemo(()=>({[`__scope${e}`]:{...c,[e]:i}}),[c,i])}};return a.scopeName=e,[d,_(a,...r)]}function _(...e){const r=e[0];if(e.length===1)return r;const t=()=>{const d=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(s){const n=d.reduce((c,{useScope:i,scopeName:p})=>{const m=i(s)[`__scope${p}`];return{...c,...m}},{});return o.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}export{y as C,R as a,S as b,L as c,k as d,E as e,B as f};
