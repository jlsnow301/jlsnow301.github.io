import{r as t}from"./index.rE2EVDCa.js";import{j as s,c as o}from"./utils.CBNs1GJq.js";/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(...e)=>e.filter((r,a,d)=>!!r&&d.indexOf(r)===a).join(" ");/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:d,className:c="",children:n,iconNode:l,...m},f)=>t.createElement("svg",{ref:f,...u,width:r,height:r,stroke:e,strokeWidth:d?Number(a)*24/Number(r):a,className:i("lucide",c),...m},[...l.map(([p,x])=>t.createElement(p,x)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(e,r)=>{const a=t.forwardRef(({className:d,...c},n)=>t.createElement(w,{ref:n,iconNode:r,className:i(`lucide-${C(e)}`,d),...c}));return a.displayName=`${e}`,a},N=t.forwardRef(({className:e,...r},a)=>s.jsx("div",{ref:a,className:o("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));N.displayName="Card";const g=t.forwardRef(({className:e,...r},a)=>s.jsx("div",{ref:a,className:o("flex flex-col space-y-1.5 p-6",e),...r}));g.displayName="CardHeader";const j=t.forwardRef(({className:e,...r},a)=>s.jsx("h3",{ref:a,className:o("font-semibold text-2xl leading-none tracking-tight",e),...r}));j.displayName="CardTitle";const y=t.forwardRef(({className:e,...r},a)=>s.jsx("p",{ref:a,className:o("text-muted-foreground text-sm",e),...r}));y.displayName="CardDescription";const b=t.forwardRef(({className:e,...r},a)=>s.jsx("div",{ref:a,className:o("p-6 pt-0",e),...r}));b.displayName="CardContent";const h=t.forwardRef(({className:e,...r},a)=>s.jsx("div",{ref:a,className:o("flex items-center p-6 pt-0",e),...r}));h.displayName="CardFooter";export{N as C,g as a,j as b,k as c,b as d,h as e};
