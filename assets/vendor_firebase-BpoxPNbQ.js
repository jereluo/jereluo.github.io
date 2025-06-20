import{o as yp}from"./vendor-CM0TBqyA.js";const vp=()=>{};var Gl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(n,e){if(!n)throw An(e)},An=function(n){return new Error("Firebase Database ("+Lu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ep=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(r&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const r=n[t++],a=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|a&63)}}return e.join("")},xo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,f=r>>2,_=(r&3)<<4|l>>4;let g=(l&15)<<2|d>>6,A=d&63;u||(A=64,a||(g=64)),s.push(t[f],t[_],t[g],t[A])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ep(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const _=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||d==null||_==null)throw new Tp;const g=r<<2|l>>4;if(s.push(g),d!==64){const A=l<<4&240|d>>2;if(s.push(A),_!==64){const S=d<<6&192|_;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uu=function(n){const e=Fu(n);return xo.encodeByteArray(e,!0)},vi=function(n){return Uu(n).replace(/\./g,"")},Yr=function(n){try{return xo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n){return Bu(void 0,n)}function Bu(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!wp(t)||(n[t]=Bu(n[t],e[t]));return n}function wp(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=()=>Cp().__FIREBASE_DEFAULTS__,Rp=()=>{if(typeof process>"u"||typeof Gl>"u")return;const n=Gl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yr(n[1]);return e&&JSON.parse(e)},Oo=()=>{try{return vp()||Ap()||Rp()||Sp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bp=n=>{var e,t;return(t=(e=Oo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},qu=n=>{const e=bp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ju=()=>{var n;return(n=Oo())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(n){return n.endsWith(".cloudworkstations.dev")}async function $u(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vi(JSON.stringify(t)),vi(JSON.stringify(a)),""].join(".")}const rs={};function Pp(){const n={prod:[],emulator:[]};for(const e of Object.keys(rs))rs[e]?n.emulator.push(e):n.prod.push(e);return n}function Np(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Wl=!1;function Hu(n,e){if(typeof window>"u"||typeof document>"u"||!Ns(window.location.host)||rs[n]===e||rs[n]||Wl)return;rs[n]=e;function t(g){return`__firebase__banner__${g}`}const s="__firebase__banner",r=Pp().prod.length>0;function a(){const g=document.getElementById(s);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,A){g.setAttribute("width","24"),g.setAttribute("id",A),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Wl=!0,a()},g}function f(g,A){g.setAttribute("id",A),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function _(){const g=Np(s),A=t("text"),S=document.getElementById(A)||document.createElement("span"),D=t("learnmore"),V=document.getElementById(D)||document.createElement("a"),J=t("preprendIcon"),z=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const Q=g.element;l(Q),f(V,D);const oe=d();u(z,J),Q.append(z,S,V,oe),document.body.appendChild(Q)}r?(S.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gu())}function kp(){var n;const e=(n=Oo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vp(){return Lu.NODE_ADMIN===!0}function xp(){return!kp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Op(){try{return typeof indexedDB=="object"}catch{return!1}}function Mp(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="FirebaseError";class Rn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Lp,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ku.prototype.create)}}class Ku{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?Fp(r,s):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Rn(i,l,s)}}function Fp(n,e){return n.replace(Up,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Up=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n){return JSON.parse(n)}function me(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=_s(Yr(r[0])||""),t=_s(Yr(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Bp=function(n){const e=Qu(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},qp=function(n){const e=Qu(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function dn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Kl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ei(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function gs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],a=e[i];if(Ql(r)&&Ql(a)){if(!gs(r,a))return!1}else if(r!==a)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ql(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let _=0;_<16;_++)s[_]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let _=16;_<80;_++){const g=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],a=this.chain_[2],l=this.chain_[3],u=this.chain_[4],d,f;for(let _=0;_<80;_++){_<40?_<20?(d=l^r&(a^l),f=1518500249):(d=r^a^l,f=1859775393):_<60?(d=r&a|l&(r|a),f=2400959708):(d=r^a^l,f=3395469782);const g=(i<<5|i>>>27)+d+u+f+s[_]&4294967295;u=l,l=a,a=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let a=this.inbuf_;for(;i<t;){if(a===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[a]=e.charCodeAt(i),++a,++i,a===this.blockSize){this.compress_(r),a=0;break}}else for(;i<t;)if(r[a]=e[i],++a,++i,a===this.blockSize){this.compress_(r),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Mo(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,P(s<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(s)-56320;i=65536+(r<<10)+a}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Hi=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n){return n&&n._delegate?n._delegate:n}class fn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new zi;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wp(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&a.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const a=this.instances.get(i);return a&&e(a,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gp(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gp(n){return n===Ot?void 0:n}function Wp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const Qp={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Yp=H.INFO,Xp={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Jp=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Xp[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lo{constructor(e){this.name=e,this._logLevel=Yp,this._logHandler=Jp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(e_(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function e_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xr="@firebase/app",Yl="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new Lo("@firebase/app"),t_="@firebase/app-compat",n_="@firebase/analytics-compat",s_="@firebase/analytics",i_="@firebase/app-check-compat",r_="@firebase/app-check",o_="@firebase/auth",a_="@firebase/auth-compat",l_="@firebase/database",c_="@firebase/data-connect",u_="@firebase/database-compat",h_="@firebase/functions",d_="@firebase/functions-compat",f_="@firebase/installations",p_="@firebase/installations-compat",__="@firebase/messaging",g_="@firebase/messaging-compat",m_="@firebase/performance",y_="@firebase/performance-compat",v_="@firebase/remote-config",E_="@firebase/remote-config-compat",T_="@firebase/storage",I_="@firebase/storage-compat",w_="@firebase/firestore",C_="@firebase/ai",A_="@firebase/firestore-compat",R_="firebase",S_="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="[DEFAULT]",b_={[Xr]:"fire-core",[t_]:"fire-core-compat",[s_]:"fire-analytics",[n_]:"fire-analytics-compat",[r_]:"fire-app-check",[i_]:"fire-app-check-compat",[o_]:"fire-auth",[a_]:"fire-auth-compat",[l_]:"fire-rtdb",[c_]:"fire-data-connect",[u_]:"fire-rtdb-compat",[h_]:"fire-fn",[d_]:"fire-fn-compat",[f_]:"fire-iid",[p_]:"fire-iid-compat",[__]:"fire-fcm",[g_]:"fire-fcm-compat",[m_]:"fire-perf",[y_]:"fire-perf-compat",[v_]:"fire-rc",[E_]:"fire-rc-compat",[T_]:"fire-gcs",[I_]:"fire-gcs-compat",[w_]:"fire-fst",[A_]:"fire-fst-compat",[C_]:"fire-vertex","fire-js":"fire-js",[R_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new Map,P_=new Map,Zr=new Map;function Xl(n,e){try{n.container.addComponent(e)}catch(t){rt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ms(n){const e=n.name;if(Zr.has(e))return rt.debug(`There were multiple attempts to register component ${e}.`),!1;Zr.set(e,n);for(const t of Ti.values())Xl(t,n);for(const t of P_.values())Xl(t,n);return!0}function Yu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xu(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mt=new Ku("app","Firebase",N_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=S_;function D_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Jr,automaticDataCollectionEnabled:!0},e),i=s.name;if(typeof i!="string"||!i)throw mt.create("bad-app-name",{appName:String(i)});if(t||(t=ju()),!t)throw mt.create("no-options");const r=Ti.get(i);if(r){if(gs(t,r.options)&&gs(s,r.config))return r;throw mt.create("duplicate-app",{appName:i})}const a=new Kp(i);for(const u of Zr.values())a.addComponent(u);const l=new k_(t,s,a);return Ti.set(i,l),l}function Zu(n=Jr){const e=Ti.get(n);if(!e&&n===Jr&&ju())return D_();if(!e)throw mt.create("no-app",{appName:n});return e}function yt(n,e,t){var s;let i=(s=b_[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rt.warn(l.join(" "));return}ms(new fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="firebase-heartbeat-database",x_=1,ys="firebase-heartbeat-store";let Lr=null;function eh(){return Lr||(Lr=yp(V_,x_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ys)}catch(t){console.warn(t)}}}}).catch(n=>{throw mt.create("idb-open",{originalErrorMessage:n.message})})),Lr}async function O_(n){try{const t=(await eh()).transaction(ys),s=await t.objectStore(ys).get(th(n));return await t.done,s}catch(e){if(e instanceof Rn)rt.warn(e.message);else{const t=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rt.warn(t.message)}}}async function Jl(n,e){try{const s=(await eh()).transaction(ys,"readwrite");await s.objectStore(ys).put(e,th(n)),await s.done}catch(t){if(t instanceof Rn)rt.warn(t.message);else{const s=mt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rt.warn(s.message)}}}function th(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=1024,L_=30;class F_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new B_(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>L_){const a=q_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){rt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zl(),{heartbeatsToSend:s,unsentEntries:i}=U_(this._heartbeatsCache.heartbeats),r=vi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return rt.warn(t),""}}}function Zl(){return new Date().toISOString().substring(0,10)}function U_(n,e=M_){const t=[];let s=n.slice();for(const i of n){const r=t.find(a=>a.agent===i.agent);if(r){if(r.dates.push(i.date),ec(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ec(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class B_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Op()?Mp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await O_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ec(n){return vi(JSON.stringify({version:2,heartbeats:n})).length}function q_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(n){ms(new fn("platform-logger",e=>new Zp(e),"PRIVATE")),ms(new fn("heartbeat",e=>new F_(e),"PRIVATE")),yt(Xr,Yl,n),yt(Xr,Yl,"esm2017"),yt("fire-js","")}j_("");var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vt,nh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function v(){}v.prototype=m.prototype,I.D=m.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(E,T,C){for(var y=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)y[Ze-2]=arguments[Ze];return m.prototype[T].apply(E,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,m,v){v||(v=0);var E=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)E[T]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(T=0;16>T;++T)E[T]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=I.g[0],v=I.g[1],T=I.g[2];var C=I.g[3],y=m+(C^v&(T^C))+E[0]+3614090360&4294967295;m=v+(y<<7&4294967295|y>>>25),y=C+(T^m&(v^T))+E[1]+3905402710&4294967295,C=m+(y<<12&4294967295|y>>>20),y=T+(v^C&(m^v))+E[2]+606105819&4294967295,T=C+(y<<17&4294967295|y>>>15),y=v+(m^T&(C^m))+E[3]+3250441966&4294967295,v=T+(y<<22&4294967295|y>>>10),y=m+(C^v&(T^C))+E[4]+4118548399&4294967295,m=v+(y<<7&4294967295|y>>>25),y=C+(T^m&(v^T))+E[5]+1200080426&4294967295,C=m+(y<<12&4294967295|y>>>20),y=T+(v^C&(m^v))+E[6]+2821735955&4294967295,T=C+(y<<17&4294967295|y>>>15),y=v+(m^T&(C^m))+E[7]+4249261313&4294967295,v=T+(y<<22&4294967295|y>>>10),y=m+(C^v&(T^C))+E[8]+1770035416&4294967295,m=v+(y<<7&4294967295|y>>>25),y=C+(T^m&(v^T))+E[9]+2336552879&4294967295,C=m+(y<<12&4294967295|y>>>20),y=T+(v^C&(m^v))+E[10]+4294925233&4294967295,T=C+(y<<17&4294967295|y>>>15),y=v+(m^T&(C^m))+E[11]+2304563134&4294967295,v=T+(y<<22&4294967295|y>>>10),y=m+(C^v&(T^C))+E[12]+1804603682&4294967295,m=v+(y<<7&4294967295|y>>>25),y=C+(T^m&(v^T))+E[13]+4254626195&4294967295,C=m+(y<<12&4294967295|y>>>20),y=T+(v^C&(m^v))+E[14]+2792965006&4294967295,T=C+(y<<17&4294967295|y>>>15),y=v+(m^T&(C^m))+E[15]+1236535329&4294967295,v=T+(y<<22&4294967295|y>>>10),y=m+(T^C&(v^T))+E[1]+4129170786&4294967295,m=v+(y<<5&4294967295|y>>>27),y=C+(v^T&(m^v))+E[6]+3225465664&4294967295,C=m+(y<<9&4294967295|y>>>23),y=T+(m^v&(C^m))+E[11]+643717713&4294967295,T=C+(y<<14&4294967295|y>>>18),y=v+(C^m&(T^C))+E[0]+3921069994&4294967295,v=T+(y<<20&4294967295|y>>>12),y=m+(T^C&(v^T))+E[5]+3593408605&4294967295,m=v+(y<<5&4294967295|y>>>27),y=C+(v^T&(m^v))+E[10]+38016083&4294967295,C=m+(y<<9&4294967295|y>>>23),y=T+(m^v&(C^m))+E[15]+3634488961&4294967295,T=C+(y<<14&4294967295|y>>>18),y=v+(C^m&(T^C))+E[4]+3889429448&4294967295,v=T+(y<<20&4294967295|y>>>12),y=m+(T^C&(v^T))+E[9]+568446438&4294967295,m=v+(y<<5&4294967295|y>>>27),y=C+(v^T&(m^v))+E[14]+3275163606&4294967295,C=m+(y<<9&4294967295|y>>>23),y=T+(m^v&(C^m))+E[3]+4107603335&4294967295,T=C+(y<<14&4294967295|y>>>18),y=v+(C^m&(T^C))+E[8]+1163531501&4294967295,v=T+(y<<20&4294967295|y>>>12),y=m+(T^C&(v^T))+E[13]+2850285829&4294967295,m=v+(y<<5&4294967295|y>>>27),y=C+(v^T&(m^v))+E[2]+4243563512&4294967295,C=m+(y<<9&4294967295|y>>>23),y=T+(m^v&(C^m))+E[7]+1735328473&4294967295,T=C+(y<<14&4294967295|y>>>18),y=v+(C^m&(T^C))+E[12]+2368359562&4294967295,v=T+(y<<20&4294967295|y>>>12),y=m+(v^T^C)+E[5]+4294588738&4294967295,m=v+(y<<4&4294967295|y>>>28),y=C+(m^v^T)+E[8]+2272392833&4294967295,C=m+(y<<11&4294967295|y>>>21),y=T+(C^m^v)+E[11]+1839030562&4294967295,T=C+(y<<16&4294967295|y>>>16),y=v+(T^C^m)+E[14]+4259657740&4294967295,v=T+(y<<23&4294967295|y>>>9),y=m+(v^T^C)+E[1]+2763975236&4294967295,m=v+(y<<4&4294967295|y>>>28),y=C+(m^v^T)+E[4]+1272893353&4294967295,C=m+(y<<11&4294967295|y>>>21),y=T+(C^m^v)+E[7]+4139469664&4294967295,T=C+(y<<16&4294967295|y>>>16),y=v+(T^C^m)+E[10]+3200236656&4294967295,v=T+(y<<23&4294967295|y>>>9),y=m+(v^T^C)+E[13]+681279174&4294967295,m=v+(y<<4&4294967295|y>>>28),y=C+(m^v^T)+E[0]+3936430074&4294967295,C=m+(y<<11&4294967295|y>>>21),y=T+(C^m^v)+E[3]+3572445317&4294967295,T=C+(y<<16&4294967295|y>>>16),y=v+(T^C^m)+E[6]+76029189&4294967295,v=T+(y<<23&4294967295|y>>>9),y=m+(v^T^C)+E[9]+3654602809&4294967295,m=v+(y<<4&4294967295|y>>>28),y=C+(m^v^T)+E[12]+3873151461&4294967295,C=m+(y<<11&4294967295|y>>>21),y=T+(C^m^v)+E[15]+530742520&4294967295,T=C+(y<<16&4294967295|y>>>16),y=v+(T^C^m)+E[2]+3299628645&4294967295,v=T+(y<<23&4294967295|y>>>9),y=m+(T^(v|~C))+E[0]+4096336452&4294967295,m=v+(y<<6&4294967295|y>>>26),y=C+(v^(m|~T))+E[7]+1126891415&4294967295,C=m+(y<<10&4294967295|y>>>22),y=T+(m^(C|~v))+E[14]+2878612391&4294967295,T=C+(y<<15&4294967295|y>>>17),y=v+(C^(T|~m))+E[5]+4237533241&4294967295,v=T+(y<<21&4294967295|y>>>11),y=m+(T^(v|~C))+E[12]+1700485571&4294967295,m=v+(y<<6&4294967295|y>>>26),y=C+(v^(m|~T))+E[3]+2399980690&4294967295,C=m+(y<<10&4294967295|y>>>22),y=T+(m^(C|~v))+E[10]+4293915773&4294967295,T=C+(y<<15&4294967295|y>>>17),y=v+(C^(T|~m))+E[1]+2240044497&4294967295,v=T+(y<<21&4294967295|y>>>11),y=m+(T^(v|~C))+E[8]+1873313359&4294967295,m=v+(y<<6&4294967295|y>>>26),y=C+(v^(m|~T))+E[15]+4264355552&4294967295,C=m+(y<<10&4294967295|y>>>22),y=T+(m^(C|~v))+E[6]+2734768916&4294967295,T=C+(y<<15&4294967295|y>>>17),y=v+(C^(T|~m))+E[13]+1309151649&4294967295,v=T+(y<<21&4294967295|y>>>11),y=m+(T^(v|~C))+E[4]+4149444226&4294967295,m=v+(y<<6&4294967295|y>>>26),y=C+(v^(m|~T))+E[11]+3174756917&4294967295,C=m+(y<<10&4294967295|y>>>22),y=T+(m^(C|~v))+E[2]+718787259&4294967295,T=C+(y<<15&4294967295|y>>>17),y=v+(C^(T|~m))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+C&4294967295}s.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var v=m-this.blockSize,E=this.B,T=this.h,C=0;C<m;){if(T==0)for(;C<=v;)i(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<m;)if(E[T++]=I.charCodeAt(C++),T==this.blockSize){i(this,E),T=0;break}}else for(;C<m;)if(E[T++]=I[C++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=m},s.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var v=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=v&255,v/=256;for(this.u(I),I=Array(16),m=v=0;4>m;++m)for(var E=0;32>E;E+=8)I[v++]=this.g[m]>>>E&255;return I};function r(I,m){var v=l;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=m(I)}function a(I,m){this.h=m;for(var v=[],E=!0,T=I.length-1;0<=T;T--){var C=I[T]|0;E&&C==m||(v[T]=C,E=!1)}this.g=v}var l={};function u(I){return-128<=I&&128>I?r(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return _;if(0>I)return V(d(-I));for(var m=[],v=1,E=0;I>=v;E++)m[E]=I/v|0,v*=4294967296;return new a(m,0)}function f(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return V(f(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(m,8)),E=_,T=0;T<I.length;T+=8){var C=Math.min(8,I.length-T),y=parseInt(I.substring(T,T+C),m);8>C?(C=d(Math.pow(m,C)),E=E.j(C).add(d(y))):(E=E.j(v),E=E.add(d(y)))}return E}var _=u(0),g=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-V(this).m();for(var I=0,m=1,v=0;v<this.g.length;v++){var E=this.i(v);I+=(0<=E?E:4294967296+E)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(D(this))return"-"+V(this).toString(I);for(var m=d(Math.pow(I,6)),v=this,E="";;){var T=oe(v,m).g;v=J(v,T.j(m));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=T,S(v))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function D(I){return I.h==-1}n.l=function(I){return I=J(this,I),D(I)?-1:S(I)?0:1};function V(I){for(var m=I.g.length,v=[],E=0;E<m;E++)v[E]=~I.g[E];return new a(v,~I.h).add(g)}n.abs=function(){return D(this)?V(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],E=0,T=0;T<=m;T++){var C=E+(this.i(T)&65535)+(I.i(T)&65535),y=(C>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=y>>>16,C&=65535,y&=65535,v[T]=y<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function J(I,m){return I.add(V(m))}n.j=function(I){if(S(this)||S(I))return _;if(D(this))return D(I)?V(this).j(V(I)):V(V(this).j(I));if(D(I))return V(this.j(V(I)));if(0>this.l(A)&&0>I.l(A))return d(this.m()*I.m());for(var m=this.g.length+I.g.length,v=[],E=0;E<2*m;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<I.g.length;T++){var C=this.i(E)>>>16,y=this.i(E)&65535,Ze=I.i(T)>>>16,On=I.i(T)&65535;v[2*E+2*T]+=y*On,z(v,2*E+2*T),v[2*E+2*T+1]+=C*On,z(v,2*E+2*T+1),v[2*E+2*T+1]+=y*Ze,z(v,2*E+2*T+1),v[2*E+2*T+2]+=C*Ze,z(v,2*E+2*T+2)}for(E=0;E<m;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=m;E<2*m;E++)v[E]=0;return new a(v,0)};function z(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function Q(I,m){this.g=I,this.h=m}function oe(I,m){if(S(m))throw Error("division by zero");if(S(I))return new Q(_,_);if(D(I))return m=oe(V(I),m),new Q(V(m.g),V(m.h));if(D(m))return m=oe(I,V(m)),new Q(V(m.g),m.h);if(30<I.g.length){if(D(I)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var v=g,E=m;0>=E.l(I);)v=Je(v),E=Je(E);var T=Ee(v,1),C=Ee(E,1);for(E=Ee(E,2),v=Ee(v,2);!S(E);){var y=C.add(E);0>=y.l(I)&&(T=T.add(v),C=y),E=Ee(E,1),v=Ee(v,1)}return m=J(I,T.j(m)),new Q(T,m)}for(T=_;0<=I.l(m);){for(v=Math.max(1,Math.floor(I.m()/m.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=d(v),y=C.j(m);D(y)||0<y.l(I);)v-=E,C=d(v),y=C.j(m);S(C)&&(C=g),T=T.add(C),I=J(I,y)}return new Q(T,I)}n.A=function(I){return oe(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],E=0;E<m;E++)v[E]=this.i(E)&I.i(E);return new a(v,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],E=0;E<m;E++)v[E]=this.i(E)|I.i(E);return new a(v,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],E=0;E<m;E++)v[E]=this.i(E)^I.i(E);return new a(v,this.h^I.h)};function Je(I){for(var m=I.g.length+1,v=[],E=0;E<m;E++)v[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(v,I.h)}function Ee(I,m){var v=m>>5;m%=32;for(var E=I.g.length-v,T=[],C=0;C<E;C++)T[C]=0<m?I.i(C+v)>>>m|I.i(C+v+1)<<32-m:I.i(C+v);return new a(T,I.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,nh=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,vt=a}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});var ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sh,ns,ih,fi,eo,rh,oh,ah;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ri=="object"&&ri];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function i(o,c){if(c)e:{var h=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var w=o[p];if(!(w in h))break e;h=h[w]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function r(o,c){o instanceof String&&(o+="");var h=0,p=!1,w={next:function(){if(!p&&h<o.length){var R=h++;return{value:c(R,o[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(o){return o||function(){return r(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function _(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,p),o.apply(c,w)}}return function(){return o.apply(c,arguments)}}function g(o,c,h){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:_,g.apply(null,arguments)}function A(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function S(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,w,R){for(var k=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)k[Z-2]=arguments[Z];return c.prototype[w].apply(p,k)}}function D(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function V(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const w=o.length||0,R=p.length||0;o.length=w+R;for(let k=0;k<R;k++)o[w+k]=p[k]}else o.push(p)}}class J{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function z(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function oe(o){return oe[" "](o),o}oe[" "]=function(){};var Je=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function Ee(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function I(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,p;for(let w=1;w<arguments.length;w++){p=arguments[w];for(h in p)o[h]=p[h];for(let R=0;R<v.length;R++)h=v[R],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function T(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function C(o){l.setTimeout(()=>{throw o},0)}function y(){var o=fr;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Ze{constructor(){this.h=this.g=null}add(c,h){const p=On.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var On=new J(()=>new Lf,o=>o.reset());class Lf{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Mn,Ln=!1,fr=new Ze,Ga=()=>{const o=l.Promise.resolve(void 0);Mn=()=>{o.then(Ff)}};var Ff=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){C(h)}var c=On;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Ln=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var Uf=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Fn(o,c){if(Ce.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(Je){e:{try{oe(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Bf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Fn.aa.h.call(this)}}S(Fn,Ce);var Bf={2:"touch",3:"pen",4:"mouse"};Fn.prototype.h=function(){Fn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Bs="closure_listenable_"+(1e6*Math.random()|0),qf=0;function jf(o,c,h,p,w){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=w,this.key=++qf,this.da=this.fa=!1}function qs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function js(o){this.src=o,this.g={},this.h=0}js.prototype.add=function(o,c,h,p,w){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var k=_r(o,c,p,w);return-1<k?(c=o[k],h||(c.fa=!1)):(c=new jf(c,this.src,R,!!p,w),c.fa=h,o.push(c)),c};function pr(o,c){var h=c.type;if(h in o.g){var p=o.g[h],w=Array.prototype.indexOf.call(p,c,void 0),R;(R=0<=w)&&Array.prototype.splice.call(p,w,1),R&&(qs(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function _r(o,c,h,p){for(var w=0;w<o.length;++w){var R=o[w];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==p)return w}return-1}var gr="closure_lm_"+(1e6*Math.random()|0),mr={};function Wa(o,c,h,p,w){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Wa(o,c[R],h,p,w);return null}return h=Ya(h),o&&o[Bs]?o.K(c,h,d(p)?!!p.capture:!1,w):$f(o,c,h,!1,p,w)}function $f(o,c,h,p,w,R){if(!c)throw Error("Invalid event type");var k=d(w)?!!w.capture:!!w,Z=vr(o);if(Z||(o[gr]=Z=new js(o)),h=Z.add(c,h,p,k,R),h.proxy)return h;if(p=zf(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Uf||(w=k),w===void 0&&(w=!1),o.addEventListener(c.toString(),p,w);else if(o.attachEvent)o.attachEvent(Qa(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function zf(){function o(h){return c.call(o.src,o.listener,h)}const c=Hf;return o}function Ka(o,c,h,p,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)Ka(o,c[R],h,p,w);else p=d(p)?!!p.capture:!!p,h=Ya(h),o&&o[Bs]?(o=o.i,c=String(c).toString(),c in o.g&&(R=o.g[c],h=_r(R,h,p,w),-1<h&&(qs(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[c],o.h--)))):o&&(o=vr(o))&&(c=o.g[c.toString()],o=-1,c&&(o=_r(c,h,p,w)),(h=-1<o?c[o]:null)&&yr(h))}function yr(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Bs])pr(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(Qa(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=vr(c))?(pr(h,o),h.h==0&&(h.src=null,c[gr]=null)):qs(o)}}}function Qa(o){return o in mr?mr[o]:mr[o]="on"+o}function Hf(o,c){if(o.da)o=!0;else{c=new Fn(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&yr(o),o=h.call(p,c)}return o}function vr(o){return o=o[gr],o instanceof js?o:null}var Er="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ya(o){return typeof o=="function"?o:(o[Er]||(o[Er]=function(c){return o.handleEvent(c)}),o[Er])}function Ae(){ht.call(this),this.i=new js(this),this.M=this,this.F=null}S(Ae,ht),Ae.prototype[Bs]=!0,Ae.prototype.removeEventListener=function(o,c,h,p){Ka(this,o,c,h,p)};function Ve(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Ce(c,o);else if(c instanceof Ce)c.target=c.target||o;else{var w=c;c=new Ce(p,o),E(c,w)}if(w=!0,h)for(var R=h.length-1;0<=R;R--){var k=c.g=h[R];w=$s(k,p,!0,c)&&w}if(k=c.g=o,w=$s(k,p,!0,c)&&w,w=$s(k,p,!1,c)&&w,h)for(R=0;R<h.length;R++)k=c.g=h[R],w=$s(k,p,!1,c)&&w}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)qs(h[p]);delete o.g[c],o.h--}}this.F=null},Ae.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},Ae.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function $s(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,R=0;R<c.length;++R){var k=c[R];if(k&&!k.da&&k.capture==h){var Z=k.listener,Te=k.ha||k.src;k.fa&&pr(o.i,k),w=Z.call(Te,p)!==!1&&w}}return w&&!p.defaultPrevented}function Xa(o,c,h){if(typeof o=="function")h&&(o=g(o,h));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Ja(o){o.g=Xa(()=>{o.g=null,o.i&&(o.i=!1,Ja(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Gf extends ht{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ja(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Un(o){ht.call(this),this.h=o,this.g={}}S(Un,ht);var Za=[];function el(o){Ee(o.g,function(c,h){this.g.hasOwnProperty(h)&&yr(c)},o),o.g={}}Un.prototype.N=function(){Un.aa.N.call(this),el(this)},Un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tr=l.JSON.stringify,Wf=l.JSON.parse,Kf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ir(){}Ir.prototype.h=null;function tl(o){return o.h||(o.h=o.i())}function nl(){}var Bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wr(){Ce.call(this,"d")}S(wr,Ce);function Cr(){Ce.call(this,"c")}S(Cr,Ce);var kt={},sl=null;function zs(){return sl=sl||new Ae}kt.La="serverreachability";function il(o){Ce.call(this,kt.La,o)}S(il,Ce);function qn(o){const c=zs();Ve(c,new il(c))}kt.STAT_EVENT="statevent";function rl(o,c){Ce.call(this,kt.STAT_EVENT,o),this.stat=c}S(rl,Ce);function xe(o){const c=zs();Ve(c,new rl(c,o))}kt.Ma="timingevent";function ol(o,c){Ce.call(this,kt.Ma,o),this.size=c}S(ol,Ce);function jn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function $n(){this.g=!0}$n.prototype.xa=function(){this.g=!1};function Qf(o,c,h,p,w,R){o.info(function(){if(o.g)if(R)for(var k="",Z=R.split("&"),Te=0;Te<Z.length;Te++){var Y=Z[Te].split("=");if(1<Y.length){var Re=Y[0];Y=Y[1];var Se=Re.split("_");k=2<=Se.length&&Se[1]=="type"?k+(Re+"="+Y+"&"):k+(Re+"=redacted&")}}else k=null;else k=R;return"XMLHTTP REQ ("+p+") [attempt "+w+"]: "+c+`
`+h+`
`+k})}function Yf(o,c,h,p,w,R,k){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+w+"]: "+c+`
`+h+`
`+R+" "+k})}function Qt(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Jf(o,h)+(p?" "+p:"")})}function Xf(o,c){o.info(function(){return"TIMEOUT: "+c})}$n.prototype.info=function(){};function Jf(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var w=p[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return Tr(h)}catch{return c}}var Hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},al={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ar;function Gs(){}S(Gs,Ir),Gs.prototype.g=function(){return new XMLHttpRequest},Gs.prototype.i=function(){return{}},Ar=new Gs;function dt(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new Un(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ll}function ll(){this.i=null,this.g="",this.h=!1}var cl={},Rr={};function Sr(o,c,h){o.L=1,o.v=Ys(et(c)),o.m=h,o.P=!0,ul(o,null)}function ul(o,c){o.F=Date.now(),Ws(o),o.A=et(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Cl(h.i,"t",p),o.C=0,h=o.j.J,o.h=new ll,o.g=jl(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Gf(g(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(Za[0]=w.toString()),w=Za);for(var R=0;R<w.length;R++){var k=Wa(h,w[R],p||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),qn(),Qf(o.i,o.u,o.A,o.l,o.R,o.m)}dt.prototype.ca=function(o){o=o.target;const c=this.M;c&&tt(o)==3?c.j():this.Y(o)},dt.prototype.Y=function(o){try{if(o==this.g)e:{const Se=tt(this.g);var c=this.g.Ba();const Jt=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||kl(this.g)))){this.J||Se!=4||c==7||(c==8||0>=Jt?qn(3):qn(2)),br(this);var h=this.g.Z();this.X=h;t:if(hl(this)){var p=kl(this.g);o="";var w=p.length,R=tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dt(this),zn(this);var k="";break t}this.h.i=new l.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(R&&c==w-1)});p.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Yf(this.i,this.u,this.A,this.l,this.R,Se,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,Te=this.g;if((Z=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(Z)){var Y=Z;break t}}Y=null}if(h=Y)Qt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pr(this,h);else{this.o=!1,this.s=3,xe(12),Dt(this),zn(this);break e}}if(this.P){h=!0;let qe;for(;!this.J&&this.C<k.length;)if(qe=Zf(this,k),qe==Rr){Se==4&&(this.s=4,xe(14),h=!1),Qt(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==cl){this.s=4,xe(15),Qt(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else Qt(this.i,this.l,qe,null),Pr(this,qe);if(hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||k.length!=0||this.h.h||(this.s=1,xe(16),h=!1),this.o=this.o&&h,!h)Qt(this.i,this.l,k,"[Invalid Chunked Response]"),Dt(this),zn(this);else if(0<k.length&&!this.W){this.W=!0;var Re=this.j;Re.g==this&&Re.ba&&!Re.M&&(Re.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Or(Re),Re.M=!0,xe(11))}}else Qt(this.i,this.l,k,null),Pr(this,k);Se==4&&Dt(this),this.o&&!this.J&&(Se==4?Fl(this.j,this):(this.o=!1,Ws(this)))}else gp(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,xe(12)):(this.s=0,xe(13)),Dt(this),zn(this)}}}catch{}finally{}};function hl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Zf(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Rr:(h=Number(c.substring(h,p)),isNaN(h)?cl:(p+=1,p+h>c.length?Rr:(c=c.slice(p,p+h),o.C=p+h,c)))}dt.prototype.cancel=function(){this.J=!0,Dt(this)};function Ws(o){o.S=Date.now()+o.I,dl(o,o.I)}function dl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=jn(g(o.ba,o),c)}function br(o){o.B&&(l.clearTimeout(o.B),o.B=null)}dt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Xf(this.i,this.A),this.L!=2&&(qn(),xe(17)),Dt(this),this.s=2,zn(this)):dl(this,this.S-o)};function zn(o){o.j.G==0||o.J||Fl(o.j,o)}function Dt(o){br(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,el(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Pr(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Nr(h.h,o))){if(!o.K&&Nr(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var w=p;if(w[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ni(h),ei(h);else break e;xr(h),xe(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=jn(g(h.Za,h),6e3));if(1>=_l(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else xt(h,11)}else if((o.K||h.g==o)&&ni(h),!z(c))for(w=h.Da.g.parse(c),c=0;c<w.length;c++){let Y=w[c];if(h.T=Y[0],Y=Y[1],h.G==2)if(Y[0]=="c"){h.K=Y[1],h.ia=Y[2];const Re=Y[3];Re!=null&&(h.la=Re,h.j.info("VER="+h.la));const Se=Y[4];Se!=null&&(h.Aa=Se,h.j.info("SVER="+h.Aa));const Jt=Y[5];Jt!=null&&typeof Jt=="number"&&0<Jt&&(p=1.5*Jt,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const qe=o.g;if(qe){const ii=qe.g?qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ii){var R=p.h;R.g||ii.indexOf("spdy")==-1&&ii.indexOf("quic")==-1&&ii.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(kr(R,R.h),R.h=null))}if(p.D){const Mr=qe.g?qe.g.getResponseHeader("X-HTTP-Session-Id"):null;Mr&&(p.ya=Mr,ne(p.I,p.D,Mr))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var k=o;if(p.qa=ql(p,p.J?p.ia:null,p.W),k.K){gl(p.h,k);var Z=k,Te=p.L;Te&&(Z.I=Te),Z.B&&(br(Z),Ws(Z)),p.g=k}else Ml(p);0<h.i.length&&ti(h)}else Y[0]!="stop"&&Y[0]!="close"||xt(h,7);else h.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?xt(h,7):Vr(h):Y[0]!="noop"&&h.l&&h.l.ta(Y),h.v=0)}}qn(4)}catch{}}var ep=class{constructor(o,c){this.g=o,this.map=c}};function fl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function _l(o){return o.h?1:o.g?o.g.size:0}function Nr(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function kr(o,c){o.g?o.g.add(c):o.h=c}function gl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}fl.prototype.cancel=function(){if(this.i=ml(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ml(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return D(o.i)}function tp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function np(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function yl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=np(o),p=tp(o),w=p.length,R=0;R<w;R++)c.call(void 0,p[R],h&&h[R],o)}var vl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sp(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),w=null;if(0<=p){var R=o[h].substring(0,p);w=o[h].substring(p+1)}else R=o[h];c(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Vt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Vt){this.h=o.h,Ks(this,o.j),this.o=o.o,this.g=o.g,Qs(this,o.s),this.l=o.l;var c=o.i,h=new Wn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),El(this,h),this.m=o.m}else o&&(c=String(o).match(vl))?(this.h=!1,Ks(this,c[1]||"",!0),this.o=Hn(c[2]||""),this.g=Hn(c[3]||"",!0),Qs(this,c[4]),this.l=Hn(c[5]||"",!0),El(this,c[6]||"",!0),this.m=Hn(c[7]||"")):(this.h=!1,this.i=new Wn(null,this.h))}Vt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Gn(c,Tl,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Gn(c,Tl,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Gn(h,h.charAt(0)=="/"?op:rp,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Gn(h,lp)),o.join("")};function et(o){return new Vt(o)}function Ks(o,c,h){o.j=h?Hn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Qs(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function El(o,c,h){c instanceof Wn?(o.i=c,cp(o.i,o.h)):(h||(c=Gn(c,ap)),o.i=new Wn(c,o.h))}function ne(o,c,h){o.i.set(c,h)}function Ys(o){return ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Hn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Gn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,ip),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ip(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Tl=/[#\/\?@]/g,rp=/[#\?:]/g,op=/[#\?]/g,ap=/[#\?@]/g,lp=/#/g;function Wn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function ft(o){o.g||(o.g=new Map,o.h=0,o.i&&sp(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Wn.prototype,n.add=function(o,c){ft(this),this.i=null,o=Yt(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Il(o,c){ft(o),c=Yt(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function wl(o,c){return ft(o),c=Yt(o,c),o.g.has(c)}n.forEach=function(o,c){ft(this),this.g.forEach(function(h,p){h.forEach(function(w){o.call(c,w,p,this)},this)},this)},n.na=function(){ft(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const w=o[p];for(let R=0;R<w.length;R++)h.push(c[p])}return h},n.V=function(o){ft(this);let c=[];if(typeof o=="string")wl(this,o)&&(c=c.concat(this.g.get(Yt(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return ft(this),this.i=null,o=Yt(this,o),wl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Cl(o,c,h){Il(o,c),0<h.length&&(o.i=null,o.g.set(Yt(o,c),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const R=encodeURIComponent(String(p)),k=this.V(p);for(p=0;p<k.length;p++){var w=R;k[p]!==""&&(w+="="+encodeURIComponent(String(k[p]))),o.push(w)}}return this.i=o.join("&")};function Yt(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function cp(o,c){c&&!o.j&&(ft(o),o.i=null,o.g.forEach(function(h,p){var w=p.toLowerCase();p!=w&&(Il(this,p),Cl(this,w,h))},o)),o.j=c}function up(o,c){const h=new $n;if(l.Image){const p=new Image;p.onload=A(pt,h,"TestLoadImage: loaded",!0,c,p),p.onerror=A(pt,h,"TestLoadImage: error",!1,c,p),p.onabort=A(pt,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(pt,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function hp(o,c){const h=new $n,p=new AbortController,w=setTimeout(()=>{p.abort(),pt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(w),R.ok?pt(h,"TestPingServer: ok",!0,c):pt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),pt(h,"TestPingServer: error",!1,c)})}function pt(o,c,h,p,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),p(h)}catch{}}function dp(){this.g=new Kf}function fp(o,c,h){const p=h||"";try{yl(o,function(w,R){let k=w;d(w)&&(k=Tr(w)),c.push(p+R+"="+encodeURIComponent(k))})}catch(w){throw c.push(p+"type="+encodeURIComponent("_badmap")),w}}function Xs(o){this.l=o.Ub||null,this.j=o.eb||!1}S(Xs,Ir),Xs.prototype.g=function(){return new Js(this.l,this.j)},Xs.prototype.i=function(o){return function(){return o}}({});function Js(o,c){Ae.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Js,Ae),n=Js.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Qn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Qn(this)),this.g&&(this.readyState=3,Qn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Al(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Al(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Kn(this):Qn(this),this.readyState==3&&Al(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Kn(this))},n.Qa=function(o){this.g&&(this.response=o,Kn(this))},n.ga=function(){this.g&&Kn(this)};function Kn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Qn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Qn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Js.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Rl(o){let c="";return Ee(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Dr(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Rl(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ne(o,c,h))}function ae(o){Ae.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ae,Ae);var pp=/^https?$/i,_p=["POST","PUT"];n=ae.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ar.g(),this.v=this.o?tl(this.o):tl(Ar),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){Sl(this,R);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var w in p)h.set(w,p[w]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())h.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),w=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(_p,c,void 0))||p||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,k]of h)this.g.setRequestHeader(R,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nl(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Sl(this,R)}};function Sl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,bl(o),Zs(o)}function bl(o){o.A||(o.A=!0,Ve(o,"complete"),Ve(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ve(this,"complete"),Ve(this,"abort"),Zs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zs(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Pl(this):this.bb())},n.bb=function(){Pl(this)};function Pl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||tt(o)!=4||o.Z()!=2)){if(o.u&&tt(o)==4)Xa(o.Ea,0,o);else if(Ve(o,"readystatechange"),tt(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=k===0){var w=String(o.D).match(vl)[1]||null;!w&&l.self&&l.self.location&&(w=l.self.location.protocol.slice(0,-1)),p=!pp.test(w?w.toLowerCase():"")}h=p}if(h)Ve(o,"complete"),Ve(o,"success");else{o.m=6;try{var R=2<tt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",bl(o)}}finally{Zs(o)}}}}function Zs(o,c){if(o.g){Nl(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ve(o,"ready");try{h.onreadystatechange=p}catch{}}}function Nl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function tt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<tt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Wf(c)}};function kl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function gp(o){const c={};o=(o.g&&2<=tt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(z(o[p]))continue;var h=T(o[p]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[w]||[];c[w]=R,R.push(h)}I(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Dl(o){this.Aa=0,this.i=[],this.j=new $n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yn("baseRetryDelayMs",5e3,o),this.cb=Yn("retryDelaySeedMs",1e4,o),this.Wa=Yn("forwardChannelMaxRetries",2,o),this.wa=Yn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new fl(o&&o.concurrentRequestLimit),this.Da=new dp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Dl.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,p){xe(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=ql(this,null,this.W),ti(this)};function Vr(o){if(Vl(o),o.G==3){var c=o.U++,h=et(o.I);if(ne(h,"SID",o.K),ne(h,"RID",c),ne(h,"TYPE","terminate"),Xn(o,h),c=new dt(o,o.j,c),c.L=2,c.v=Ys(et(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=jl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ws(c)}Bl(o)}function ei(o){o.g&&(Or(o),o.g.cancel(),o.g=null)}function Vl(o){ei(o),o.u&&(l.clearTimeout(o.u),o.u=null),ni(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ti(o){if(!pl(o.h)&&!o.s){o.s=!0;var c=o.Ga;Mn||Ga(),Ln||(Mn(),Ln=!0),fr.add(c,o),o.B=0}}function mp(o,c){return _l(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=jn(g(o.Ga,o,c),Ul(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new dt(this,this.j,o);let R=this.o;if(this.S&&(R?(R=m(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Ol(this,w,c),h=et(this.I),ne(h,"RID",o),ne(h,"CVER",22),this.D&&ne(h,"X-HTTP-Session-Id",this.D),Xn(this,h),R&&(this.O?c="headers="+encodeURIComponent(String(Rl(R)))+"&"+c:this.m&&Dr(h,this.m,R)),kr(this.h,w),this.Ua&&ne(h,"TYPE","init"),this.P?(ne(h,"$req",c),ne(h,"SID","null"),w.T=!0,Sr(w,h,null)):Sr(w,h,c),this.G=2}}else this.G==3&&(o?xl(this,o):this.i.length==0||pl(this.h)||xl(this))};function xl(o,c){var h;c?h=c.l:h=o.U++;const p=et(o.I);ne(p,"SID",o.K),ne(p,"RID",h),ne(p,"AID",o.T),Xn(o,p),o.m&&o.o&&Dr(p,o.m,o.o),h=new dt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Ol(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),kr(o.h,h),Sr(h,p,c)}function Xn(o,c){o.H&&Ee(o.H,function(h,p){ne(c,p,h)}),o.l&&yl({},function(h,p){ne(c,p,h)})}function Ol(o,c,h){h=Math.min(o.i.length,h);var p=o.l?g(o.l.Na,o.l,o):null;e:{var w=o.i;let R=-1;for(;;){const k=["count="+h];R==-1?0<h?(R=w[0].g,k.push("ofs="+R)):R=0:k.push("ofs="+R);let Z=!0;for(let Te=0;Te<h;Te++){let Y=w[Te].g;const Re=w[Te].map;if(Y-=R,0>Y)R=Math.max(0,w[Te].g-100),Z=!1;else try{fp(Re,k,"req"+Y+"_")}catch{p&&p(Re)}}if(Z){p=k.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function Ml(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Mn||Ga(),Ln||(Mn(),Ln=!0),fr.add(c,o),o.v=0}}function xr(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=jn(g(o.Fa,o),Ul(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ll(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=jn(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xe(10),ei(this),Ll(this))};function Or(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ll(o){o.g=new dt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=et(o.qa);ne(c,"RID","rpc"),ne(c,"SID",o.K),ne(c,"AID",o.T),ne(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ne(c,"TO",o.ja),ne(c,"TYPE","xmlhttp"),Xn(o,c),o.m&&o.o&&Dr(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Ys(et(c)),h.m=null,h.P=!0,ul(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ei(this),xr(this),xe(19))};function ni(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Fl(o,c){var h=null;if(o.g==c){ni(o),Or(o),o.g=null;var p=2}else if(Nr(o.h,c))h=c.D,gl(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var w=o.B;p=zs(),Ve(p,new ol(p,h)),ti(o)}else Ml(o);else if(w=c.s,w==3||w==0&&0<c.X||!(p==1&&mp(o,c)||p==2&&xr(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),w){case 1:xt(o,5);break;case 4:xt(o,10);break;case 3:xt(o,6);break;default:xt(o,2)}}}function Ul(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function xt(o,c){if(o.j.info("Error code "+c),c==2){var h=g(o.fb,o),p=o.Xa;const w=!p;p=new Vt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ks(p,"https"),Ys(p),w?up(p.toString(),h):hp(p.toString(),h)}else xe(2);o.G=0,o.l&&o.l.sa(c),Bl(o),Vl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function Bl(o){if(o.G=0,o.ka=[],o.l){const c=ml(o.h);(c.length!=0||o.i.length!=0)&&(V(o.ka,c),V(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function ql(o,c,h){var p=h instanceof Vt?et(h):new Vt(h);if(p.g!="")c&&(p.g=c+"."+p.g),Qs(p,p.s);else{var w=l.location;p=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var R=new Vt(null);p&&Ks(R,p),c&&(R.g=c),w&&Qs(R,w),h&&(R.l=h),p=R}return h=o.D,c=o.ya,h&&c&&ne(p,h,c),ne(p,"VER",o.la),Xn(o,p),p}function jl(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ae(new Xs({eb:h})):new ae(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $l(){}n=$l.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function si(){}si.prototype.g=function(o,c){return new Be(o,c)};function Be(o,c){Ae.call(this),this.g=new Dl(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!z(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!z(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Xt(this)}S(Be,Ae),Be.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Be.prototype.close=function(){Vr(this.g)},Be.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Tr(o),o=h);c.i.push(new ep(c.Ya++,o)),c.G==3&&ti(c)},Be.prototype.N=function(){this.g.l=null,delete this.j,Vr(this.g),delete this.g,Be.aa.N.call(this)};function zl(o){wr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}S(zl,wr);function Hl(){Cr.call(this),this.status=1}S(Hl,Cr);function Xt(o){this.g=o}S(Xt,$l),Xt.prototype.ua=function(){Ve(this.g,"a")},Xt.prototype.ta=function(o){Ve(this.g,new zl(o))},Xt.prototype.sa=function(o){Ve(this.g,new Hl)},Xt.prototype.ra=function(){Ve(this.g,"b")},si.prototype.createWebChannel=si.prototype.g,Be.prototype.send=Be.prototype.o,Be.prototype.open=Be.prototype.m,Be.prototype.close=Be.prototype.close,ah=function(){return new si},oh=function(){return zs()},rh=kt,eo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hs.NO_ERROR=0,Hs.TIMEOUT=8,Hs.HTTP_ERROR=6,fi=Hs,al.COMPLETE="complete",ih=al,nl.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,ns=nl,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,sh=ae}).apply(typeof ri<"u"?ri:typeof self<"u"?self:typeof window<"u"?window:{});const nc="@firebase/firestore",sc="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Lo("@firebase/firestore");function en(){return jt.logLevel}function x(n,...e){if(jt.logLevel<=H.DEBUG){const t=e.map(Fo);jt.debug(`Firestore (${Sn}): ${n}`,...t)}}function ot(n,...e){if(jt.logLevel<=H.ERROR){const t=e.map(Fo);jt.error(`Firestore (${Sn}): ${n}`,...t)}}function pn(n,...e){if(jt.logLevel<=H.WARN){const t=e.map(Fo);jt.warn(`Firestore (${Sn}): ${n}`,...t)}}function Fo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,lh(n,s,t)}function lh(n,e,t){let s=`FIRESTORE (${Sn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ot(s),new Error(s)}function re(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||lh(e,i,s)}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Pe.UNAUTHENTICATED))}shutdown(){}}class z_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class H_{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let s=this.i;const i=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let r=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Bt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Bt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string",31837,{l:s}),new ch(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new Pe(e)}}class G_{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class W_{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new G_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ic{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xu(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const s=r=>{r.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.m;return this.m=r.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ic(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ic(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=Q_(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function B(n,e){return n<e?-1:n>e?1:0}function to(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),i=e.codePointAt(t);if(s!==i){if(s<128&&i<128)return B(s,i);{const r=uh(),a=X_(r.encode(rc(n,t)),r.encode(rc(e,t)));return a!==0?a:B(s,i)}}t+=s>65535?2:1}return B(n.length,e.length)}function rc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function X_(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return B(n[t],e[t]);return B(n.length,e.length)}function _n(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=-62135596800,ac=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ac);return new ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<oc)throw new O(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ac}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-oc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new ye(0,0))}static max(){return new F(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="__name__";class We{constructor(e,t,s){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&U(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return We.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof We?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=We.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return B(e.length,t.length)}static compareSegments(e,t){const s=We.isNumericId(e),i=We.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?We.extractNumericId(e).compare(We.extractNumericId(t)):to(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vt.fromString(e.substring(4,e.length-2))}}class ie extends We{construct(e,t,s){return new ie(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new O(N.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const J_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends We{construct(e,t,s){return new De(e,t,s)}static isValidIdentifier(e){return J_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lc}static keyField(){return new De([lc])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new O(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new O(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(s+=l,i++):(r(),i++)}if(r(),a)throw new O(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(t)}static emptyPath(){return new De([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ie.fromString(e))}static fromName(e){return new M(ie.fromString(e).popFirst(5))}static empty(){return new M(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ie(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=-1;function Z_(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=F.fromTimestamp(s===1e9?new ye(t+1,0):new ye(t,s));return new It(i,M.empty(),e)}function eg(n){return new It(n.readTime,n.key,vs)}class It{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new It(F.min(),M.empty(),vs)}static max(){return new It(F.max(),M.empty(),vs)}}function tg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:B(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==ng)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,s)=>{t(e)})}static reject(e){return new b((t,s)=>{s(e)})}static waitFor(e){return new b((t,s)=>{let i=0,r=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++r,a&&r===i&&t()},u=>s(u))}),a=!0,r===i&&t()})}static or(e){let t=b.resolve(!1);for(const s of e)t=t.next(i=>i?b.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new b((s,i)=>{const r=e.length,a=new Array(r);let l=0;for(let u=0;u<r;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++l,l===r&&s(a)},f=>i(f))}})}static doWhile(e,t){return new b((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function ig(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Wi.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=-1;function Ki(n){return n==null}function Ii(n){return n===0&&1/n==-1/0}function og(n){return typeof n=="number"&&Number.isInteger(n)&&!Ii(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="";function ag(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=cc(e)),e=lg(n.get(t),e);return cc(e)}function lg(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case hh:t+="";break;default:t+=r}}return t}function cc(n){return n+hh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Pn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ve=class no{constructor(e,t){this.comparator=e,this.root=t||Et.EMPTY}insert(e,t){return new no(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new no(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oi(this.root,e,this.comparator,!1)}getReverseIterator(){return new oi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oi(this.root,e,this.comparator,!0)}},oi=class{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Et=class nt{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??nt.RED,this.left=i??nt.EMPTY,this.right=r??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new nt(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return nt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}};Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,s,i,r){return this}insert(e,t,s){return new Et(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hc(this.data.getIterator())}getIteratorFrom(e){return new hc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class hc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new _t([])}unionWith(e){let t=new fe(De.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new _t(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _n(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new fh("Invalid base64 string: "+r):r}}(e);return new we(t)}static fromUint8Array(e){const t=function(i){let r="";for(let a=0;a<i.length;++a)r+=String.fromCharCode(i[a]);return r}(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const cg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wt(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=cg.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ct(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="server_timestamp",_h="__type__",gh="__previous_value__",mh="__local_write_time__";function Uo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[_h])===null||t===void 0?void 0:t.stringValue)===ph}function Qi(n){const e=n.mapValue.fields[gh];return Uo(e)?Qi(e):e}function Es(n){const e=wt(n.mapValue.fields[mh].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t,s,i,r,a,l,u,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const wi="(default)";class Ts{constructor(e,t){this.projectId=e,this.database=t||wi}static empty(){return new Ts("","")}get isDefaultDatabase(){return this.database===wi}isEqual(e){return e instanceof Ts&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="__type__",hg="__max__",ai={mapValue:{}},vh="__vector__",Ci="value";function At(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Uo(n)?4:fg(n)?9007199254740991:dg(n)?10:11:U(28295,{value:n})}function Xe(n,e){if(n===e)return!0;const t=At(n);if(t!==At(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Es(n).isEqual(Es(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const a=wt(i.timestampValue),l=wt(r.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return Ct(i.bytesValue).isEqual(Ct(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return ce(i.geoPointValue.latitude)===ce(r.geoPointValue.latitude)&&ce(i.geoPointValue.longitude)===ce(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return ce(i.integerValue)===ce(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const a=ce(i.doubleValue),l=ce(r.doubleValue);return a===l?Ii(a)===Ii(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return _n(n.arrayValue.values||[],e.arrayValue.values||[],Xe);case 10:case 11:return function(i,r){const a=i.mapValue.fields||{},l=r.mapValue.fields||{};if(uc(a)!==uc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Xe(a[u],l[u])))return!1;return!0}(n,e);default:return U(52216,{left:n})}}function Is(n,e){return(n.values||[]).find(t=>Xe(t,e))!==void 0}function gn(n,e){if(n===e)return 0;const t=At(n),s=At(e);if(t!==s)return B(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,e.booleanValue);case 2:return function(r,a){const l=ce(r.integerValue||r.doubleValue),u=ce(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return dc(n.timestampValue,e.timestampValue);case 4:return dc(Es(n),Es(e));case 5:return to(n.stringValue,e.stringValue);case 6:return function(r,a){const l=Ct(r),u=Ct(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(r,a){const l=r.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=B(l[d],u[d]);if(f!==0)return f}return B(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,a){const l=B(ce(r.latitude),ce(a.latitude));return l!==0?l:B(ce(r.longitude),ce(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return fc(n.arrayValue,e.arrayValue);case 10:return function(r,a){var l,u,d,f;const _=r.fields||{},g=a.fields||{},A=(l=_[Ci])===null||l===void 0?void 0:l.arrayValue,S=(u=g[Ci])===null||u===void 0?void 0:u.arrayValue,D=B(((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:fc(A,S)}(n.mapValue,e.mapValue);case 11:return function(r,a){if(r===ai.mapValue&&a===ai.mapValue)return 0;if(r===ai.mapValue)return 1;if(a===ai.mapValue)return-1;const l=r.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let _=0;_<u.length&&_<f.length;++_){const g=to(u[_],f[_]);if(g!==0)return g;const A=gn(l[u[_]],d[f[_]]);if(A!==0)return A}return B(u.length,f.length)}(n.mapValue,e.mapValue);default:throw U(23264,{Pe:t})}}function dc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return B(n,e);const t=wt(n),s=wt(e),i=B(t.seconds,s.seconds);return i!==0?i:B(t.nanos,s.nanos)}function fc(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=gn(t[i],s[i]);if(r)return r}return B(t.length,s.length)}function mn(n){return so(n)}function so(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=wt(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ct(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=so(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const a of s)r?r=!1:i+=",",i+=`${a}:${so(t.fields[a])}`;return i+"}"}(n.mapValue):U(61005,{value:n})}function pi(n){switch(At(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qi(n);return e?16+pi(e):16;case 5:return 2*n.stringValue.length;case 6:return Ct(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((i,r)=>i+pi(r),0)}(n.arrayValue);case 10:case 11:return function(s){let i=0;return Pn(s.fields,(r,a)=>{i+=r.length+pi(a)}),i}(n.mapValue);default:throw U(13486,{value:n})}}function pc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function io(n){return!!n&&"integerValue"in n}function Bo(n){return!!n&&"arrayValue"in n}function _c(n){return!!n&&"nullValue"in n}function gc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fr(n){return!!n&&"mapValue"in n}function dg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[yh])===null||t===void 0?void 0:t.stringValue)===vh}function os(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Pn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=os(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=os(n.arrayValue.values[t]);return e}return Object.assign({},n)}function fg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===hg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=os(t)}setAll(e){let t=De.emptyPath(),s={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,s,i),s={},i=[],t=l.popLast()}a?s[l.lastSegment()]=os(a):i.push(l.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Fr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Fr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){Pn(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ke(os(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,s,i,r,a,l){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ne(e,0,F.min(),F.min(),F.min(),Ke.empty(),0)}static newFoundDocument(e,t,s,i){return new Ne(e,1,t,F.min(),s,i,0)}static newNoDocument(e,t){return new Ne(e,2,t,F.min(),F.min(),Ke.empty(),0)}static newUnknownDocument(e,t){return new Ne(e,3,t,F.min(),F.min(),Ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.position=e,this.inclusive=t}}function mc(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],a=n.position[i];if(r.field.isKeyField()?s=M.comparator(M.fromName(a.referenceValue),t.key):s=gn(a,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function yc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Xe(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t="asc"){this.field=e,this.dir=t}}function pg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{}class he extends Eh{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new gg(e,t,s):t==="array-contains"?new vg(e,s):t==="in"?new Eg(e,s):t==="not-in"?new Tg(e,s):t==="array-contains-any"?new Ig(e,s):new he(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new mg(e,s):new yg(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(gn(t,this.value)):t!==null&&At(this.value)===At(t)&&this.matchesComparison(gn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ge extends Eh{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Ge(e,t)}matches(e){return Th(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Th(n){return n.op==="and"}function Ih(n){return _g(n)&&Th(n)}function _g(n){for(const e of n.filters)if(e instanceof Ge)return!1;return!0}function ro(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+mn(n.value);if(Ih(n))return n.filters.map(e=>ro(e)).join(",");{const e=n.filters.map(t=>ro(t)).join(",");return`${n.op}(${e})`}}function wh(n,e){return n instanceof he?function(s,i){return i instanceof he&&s.op===i.op&&s.field.isEqual(i.field)&&Xe(s.value,i.value)}(n,e):n instanceof Ge?function(s,i){return i instanceof Ge&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,a,l)=>r&&wh(a,i.filters[l]),!0):!1}(n,e):void U(19439)}function Ch(n){return n instanceof he?function(t){return`${t.field.canonicalString()} ${t.op} ${mn(t.value)}`}(n):n instanceof Ge?function(t){return t.op.toString()+" {"+t.getFilters().map(Ch).join(" ,")+"}"}(n):"Filter"}class gg extends he{constructor(e,t,s){super(e,t,s),this.key=M.fromName(s.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class mg extends he{constructor(e,t){super(e,"in",t),this.keys=Ah("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class yg extends he{constructor(e,t){super(e,"not-in",t),this.keys=Ah("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ah(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>M.fromName(s.referenceValue))}class vg extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bo(t)&&Is(t.arrayValue,this.value)}}class Eg extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Is(this.value.arrayValue,t)}}class Tg extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(Is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Is(this.value.arrayValue,t)}}class Ig extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Is(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t=null,s=[],i=[],r=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=a,this.endAt=l,this.Ie=null}}function vc(n,e=null,t=[],s=[],i=null,r=null,a=null){return new wg(n,e,t,s,i,r,a)}function qo(n){const e=W(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ro(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ki(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>mn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>mn(s)).join(",")),e.Ie=t}return e.Ie}function jo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!pg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!wh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!yc(n.startAt,e.startAt)&&yc(n.endAt,e.endAt)}function oo(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t=null,s=[],i=[],r=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=a,this.startAt=l,this.endAt=u,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Cg(n,e,t,s,i,r,a,l){return new ks(n,e,t,s,i,r,a,l)}function Rh(n){return new ks(n)}function Ec(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Sh(n){return n.collectionGroup!==null}function as(n){const e=W(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ee.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new fe(De.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ee.push(new Ri(r,s))}),t.has(De.keyField().canonicalString())||e.Ee.push(new Ri(De.keyField(),s))}return e.Ee}function Qe(n){const e=W(n);return e.de||(e.de=Ag(e,as(n))),e.de}function Ag(n,e){if(n.limitType==="F")return vc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Ri(i.field,r)});const t=n.endAt?new Ai(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ai(n.startAt.position,n.startAt.inclusive):null;return vc(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ao(n,e){const t=n.filters.concat([e]);return new ks(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function lo(n,e,t){return new ks(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Yi(n,e){return jo(Qe(n),Qe(e))&&n.limitType===e.limitType}function bh(n){return`${qo(Qe(n))}|lt:${n.limitType}`}function tn(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(i=>Ch(i)).join(", ")}]`),Ki(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(i=>mn(i)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(i=>mn(i)).join(",")),`Target(${s})`}(Qe(n))}; limitType=${n.limitType})`}function Xi(n,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):M.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,e)&&function(s,i){for(const r of as(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,e)&&function(s,i){return!(s.startAt&&!function(a,l,u){const d=mc(a,l,u);return a.inclusive?d<=0:d<0}(s.startAt,as(s),i)||s.endAt&&!function(a,l,u){const d=mc(a,l,u);return a.inclusive?d>=0:d>0}(s.endAt,as(s),i))}(n,e)}function Rg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ph(n){return(e,t)=>{let s=!1;for(const i of as(n)){const r=Sg(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Sg(n,e,t){const s=n.field.isKeyField()?M.comparator(e.key,t.key):function(r,a,l){const u=a.data.field(r),d=l.data.field(r);return u!==null&&d!==null?gn(u,d):U(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return U(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Pn(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return dh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new ve(M.comparator);function Rt(){return bg}const Nh=new ve(M.comparator);function ss(...n){let e=Nh;for(const t of n)e=e.insert(t.key,t);return e}function Pg(n){let e=Nh;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Lt(){return ls()}function kh(){return ls()}function ls(){return new Wt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Ng=new fe(M.comparator);function K(...n){let e=Ng;for(const t of n)e=e.add(t);return e}const kg=new fe(B);function Dg(){return kg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ii(e)?"-0":e}}function Dh(n){return{integerValue:""+n}}function Vg(n,e){return og(e)?Dh(e):$o(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this._=void 0}}function xg(n,e,t){return n instanceof co?function(i,r){const a={fields:{[_h]:{stringValue:ph},[mh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Uo(r)&&(r=Qi(r)),r&&(a.fields[gh]=r),{mapValue:a}}(t,e):n instanceof Si?Vh(n,e):n instanceof bi?xh(n,e):function(i,r){const a=Mg(i,r),l=Tc(a)+Tc(i.Re);return io(a)&&io(i.Re)?Dh(l):$o(i.serializer,l)}(n,e)}function Og(n,e,t){return n instanceof Si?Vh(n,e):n instanceof bi?xh(n,e):t}function Mg(n,e){return n instanceof uo?function(s){return io(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class co extends Ji{}class Si extends Ji{constructor(e){super(),this.elements=e}}function Vh(n,e){const t=Oh(e);for(const s of n.elements)t.some(i=>Xe(i,s))||t.push(s);return{arrayValue:{values:t}}}class bi extends Ji{constructor(e){super(),this.elements=e}}function xh(n,e){let t=Oh(e);for(const s of n.elements)t=t.filter(i=>!Xe(i,s));return{arrayValue:{values:t}}}class uo extends Ji{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Tc(n){return ce(n.integerValue||n.doubleValue)}function Oh(n){return Bo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Lg(n,e){return n.field.isEqual(e.field)&&function(s,i){return s instanceof Si&&i instanceof Si||s instanceof bi&&i instanceof bi?_n(s.elements,i.elements,Xe):s instanceof uo&&i instanceof uo?Xe(s.Re,i.Re):s instanceof co&&i instanceof co}(n.transform,e.transform)}class qt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _i(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zo{}function Mh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ug(n.key,qt.none()):new Ho(n.key,n.data,qt.none());{const t=n.data,s=Ke.empty();let i=new fe(De.comparator);for(let r of e.fields)if(!i.has(r)){let a=t.field(r);a===null&&r.length>1&&(r=r.popLast(),a=t.field(r)),a===null?s.delete(r):s.set(r,a),i=i.add(r)}return new Zi(n.key,s,new _t(i.toArray()),qt.none())}}function Fg(n,e,t){n instanceof Ho?function(i,r,a){const l=i.value.clone(),u=wc(i.fieldTransforms,r,a.transformResults);l.setAll(u),r.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Zi?function(i,r,a){if(!_i(i.precondition,r))return void r.convertToUnknownDocument(a.version);const l=wc(i.fieldTransforms,r,a.transformResults),u=r.data;u.setAll(Lh(i)),u.setAll(l),r.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function cs(n,e,t,s){return n instanceof Ho?function(r,a,l,u){if(!_i(r.precondition,a))return l;const d=r.value.clone(),f=Cc(r.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,s):n instanceof Zi?function(r,a,l,u){if(!_i(r.precondition,a))return l;const d=Cc(r.fieldTransforms,u,a),f=a.data;return f.setAll(Lh(r)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(_=>_.field))}(n,e,t,s):function(r,a,l){return _i(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Ic(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&_n(s,i,(r,a)=>Lg(r,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ho extends zo{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zi extends zo{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Lh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function wc(n,e,t){const s=new Map;re(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const r=n[i],a=r.transform,l=e.data.field(r.field);s.set(r.field,Og(a,l,t[i]))}return s}function Cc(n,e,t){const s=new Map;for(const i of n){const r=i.transform,a=t.data.field(i.field);s.set(i.field,xg(r,a,e))}return s}class Ug extends zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Fg(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=cs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=cs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=kh();return this.mutations.forEach(i=>{const r=e.get(i.key),a=r.overlayedDocument;let l=this.applyToLocalView(a,r.mutatedFields);l=t.has(i.key)?null:l;const u=Mh(a,l);u!==null&&s.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(F.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&_n(this.mutations,e.mutations,(t,s)=>Ic(t,s))&&_n(this.baseMutations,e.baseMutations,(t,s)=>Ic(t,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,G;function Fh(n){if(n===void 0)return ot("GRPC error has no .code"),N.UNKNOWN;switch(n){case ue.OK:return N.OK;case ue.CANCELLED:return N.CANCELLED;case ue.UNKNOWN:return N.UNKNOWN;case ue.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ue.INTERNAL:return N.INTERNAL;case ue.UNAVAILABLE:return N.UNAVAILABLE;case ue.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ue.NOT_FOUND:return N.NOT_FOUND;case ue.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ue.ABORTED:return N.ABORTED;case ue.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ue.DATA_LOSS:return N.DATA_LOSS;default:return U(39323,{code:n})}}(G=ue||(ue={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new vt([4294967295,4294967295],0);function Ac(n){const e=uh().encode(n),t=new nh;return t.update(e),new Uint8Array(t.digest())}function Rc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new vt([t,s],0),new vt([i,r],0)]}class Go{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new is(`Invalid padding: ${t}`);if(s<0)throw new is(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new is(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new is(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=vt.fromNumber(this.pe)}we(e,t,s){let i=e.add(t.multiply(vt.fromNumber(s)));return i.compare($g)===1&&(i=new vt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Ac(e),[s,i]=Rc(t);for(let r=0;r<this.hashCount;r++){const a=this.we(s,i,r);if(!this.be(a))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),a=new Go(r,i,t);return s.forEach(l=>a.insert(l)),a}insert(e){if(this.pe===0)return;const t=Ac(e),[s,i]=Rc(t);for(let r=0;r<this.hashCount;r++){const a=this.we(s,i,r);this.Se(a)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,Ds.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new er(F.min(),i,new ve(B),Rt(),K())}}class Ds{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ds(s,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,s,i){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=i}}class Uh{constructor(e,t){this.targetId=e,this.Ce=t}}class Bh{constructor(e,t,s=we.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Sc{constructor(){this.Fe=0,this.Me=bc(),this.xe=we.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=K(),t=K(),s=K();return this.Me.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:U(38017,{changeType:r})}}),new Ds(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=bc()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,re(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class zg{constructor(e){this.ze=e,this.je=new Map,this.He=Rt(),this.Je=li(),this.Ye=li(),this.Ze=new ve(B)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:U(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,i)=>{this.it(i)&&t(i)})}ot(e){const t=e.targetId,s=e.Ce.count,i=this._t(t);if(i){const r=i.target;if(oo(r))if(s===0){const a=new M(r.path);this.tt(t,a,Ne.newNoDocument(a,F.min()))}else re(s===1,20013,{expectedCount:s});else{const a=this.ut(t);if(a!==s){const l=this.ct(e),u=l?this.lt(l,e,a):1;if(u!==0){this.st(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let a,l;try{a=Ct(s).toUint8Array()}catch(u){if(u instanceof fh)return pn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Go(a,i,r)}catch(u){return pn(u instanceof is?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.pe===0?null:l}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const a=this.ze.Pt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.tt(t,r,null),i++)}),i}It(e){const t=new Map;this.je.forEach((r,a)=>{const l=this._t(a);if(l){if(r.current&&oo(l.target)){const u=new M(l.target.path);this.Et(u).has(a)||this.dt(a,u)||this.tt(a,u,Ne.newNoDocument(u,e))}r.Le&&(t.set(a,r.qe()),r.Qe())}});let s=K();this.Ye.forEach((r,a)=>{let l=!0;a.forEachWhile(u=>{const d=this._t(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(r))}),this.He.forEach((r,a)=>a.setReadTime(e));const i=new er(e,t,this.Ze,this.He,s);return this.He=Rt(),this.Je=li(),this.Ye=li(),this.Ze=new ve(B),i}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const i=this.rt(e);this.dt(e,t)?i.$e(t,1):i.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Sc,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new fe(B),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new fe(B),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Sc),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function li(){return new ve(M.comparator)}function bc(){return new ve(M.comparator)}const Hg={asc:"ASCENDING",desc:"DESCENDING"},Gg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Wg={and:"AND",or:"OR"};class Kg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ho(n,e){return n.useProto3Json||Ki(e)?e:{value:e}}function fo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function on(n){return re(!!n,49232),F.fromTimestamp(function(t){const s=wt(t);return new ye(s.seconds,s.nanos)}(n))}function jh(n,e){return po(n,e).canonicalString()}function po(n,e){const t=function(i){return new ie(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function $h(n){const e=ie.fromString(n);return re(Kh(e),10190,{key:e.toString()}),e}function Ur(n,e){const t=$h(e);if(t.get(1)!==n.databaseId.projectId)throw new O(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(Hh(t))}function zh(n,e){return jh(n.databaseId,e)}function Qg(n){const e=$h(n);return e.length===4?ie.emptyPath():Hh(e)}function Pc(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hh(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Yg(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(d,f){return d.useProto3Json?(re(f===void 0||typeof f=="string",58123),we.fromBase64String(f||"")):(re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),we.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?N.UNKNOWN:Fh(d.code);return new O(f,d.message||"")}(a);t=new Bh(s,i,r,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ur(n,s.document.name),r=on(s.document.updateTime),a=s.document.createTime?on(s.document.createTime):F.min(),l=new Ke({mapValue:{fields:s.document.fields}}),u=Ne.newFoundDocument(i,r,a,l),d=s.targetIds||[],f=s.removedTargetIds||[];t=new gi(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ur(n,s.document),r=s.readTime?on(s.readTime):F.min(),a=Ne.newNoDocument(i,r),l=s.removedTargetIds||[];t=new gi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ur(n,s.document),r=s.removedTargetIds||[];t=new gi([],r,i,null)}else{if(!("filter"in e))return U(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,a=new jg(i,r),l=s.targetId;t=new Uh(l,a)}}return t}function Xg(n,e){return{documents:[zh(n,e.path)]}}function Jg(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=zh(n,i);const r=function(d){if(d.length!==0)return Wh(Ge.create(d,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const a=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:nn(g.field),direction:tm(g.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ho(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{gt:t,parent:i}}function Zg(n){let e=Qg(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){re(s===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let r=[];t.where&&(r=function(_){const g=Gh(_);return g instanceof Ge&&Ih(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(g=>function(S){return new Ri(sn(S.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(_){let g;return g=typeof _=="object"?_.value:_,Ki(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(_){const g=!!_.before,A=_.values||[];return new Ai(A,g)}(t.startAt));let d=null;return t.endAt&&(d=function(_){const g=!_.before,A=_.values||[];return new Ai(A,g)}(t.endAt)),Cg(e,i,a,r,l,"F",u,d)}function em(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Gh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=sn(t.unaryFilter.field);return he.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=sn(t.unaryFilter.field);return he.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=sn(t.unaryFilter.field);return he.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=sn(t.unaryFilter.field);return he.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}}(n):n.fieldFilter!==void 0?function(t){return he.create(sn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ge.create(t.compositeFilter.filters.map(s=>Gh(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U(1026)}}(t.compositeFilter.op))}(n):U(30097,{filter:n})}function tm(n){return Hg[n]}function nm(n){return Gg[n]}function sm(n){return Wg[n]}function nn(n){return{fieldPath:n.canonicalString()}}function sn(n){return De.fromServerFormat(n.fieldPath)}function Wh(n){return n instanceof he?function(t){if(t.op==="=="){if(gc(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NAN"}};if(_c(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gc(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NOT_NAN"}};if(_c(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nn(t.field),op:nm(t.op),value:t.value}}}(n):n instanceof Ge?function(t){const s=t.getFilters().map(i=>Wh(i));return s.length===1?s[0]:{compositeFilter:{op:sm(t.op),filters:s}}}(n):U(54877,{filter:n})}function Kh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t,s,i,r=F.min(),a=F.min(),l=we.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.wt=e}}function rm(n){const e=Zg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(){this.Cn=new am}addToCollectionParentIndex(e,t){return this.Cn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(It.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(It.min())}updateCollectionGroup(e,t,s){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class am{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new fe(ie.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new fe(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qh=41943040;class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(Qh,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new yn(0)}static lr(){return new yn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="LruGarbageCollector",lm=1048576;function Dc([n,e],[t,s]){const i=B(n,t);return i===0?B(e,s):i}class cm{constructor(e){this.Er=e,this.buffer=new fe(Dc),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Dc(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class um{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){x(kc,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bn(t)?x(kc,"Ignoring IndexedDB error during garbage collection: ",t):await Gi(t)}await this.mr(3e5)})}}class hm{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Wi.le);const s=new cm(t);return this.gr.forEachTarget(e,i=>s.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>s.Rr(i))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Nc)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nc):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,i,r,a,l,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),i=this.params.maximumSequenceNumbersToCollect):i=_,a=Date.now(),this.nthSequenceNumber(e,i))).next(_=>(s=_,l=Date.now(),this.removeTargets(e,s,t))).next(_=>(r=_,u=Date.now(),this.removeOrphanedDocuments(e,s))).next(_=>(d=Date.now(),en()<=H.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${r} targets in `+(u-l)+`ms
	Removed ${_} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:_})))}}function dm(n,e){return new hm(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.changes=new Wt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?b.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&cs(s.mutation,i,_t.empty(),ye.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,K()).next(()=>s))}getLocalViewOfDocuments(e,t,s=K()){const i=Lt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let a=ss();return r.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=Lt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,K()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,s,i){let r=Rt();const a=ls(),l=function(){return ls()}();return t.forEach((u,d)=>{const f=s.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Zi)?r=r.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),cs(f.mutation,d,f.mutation.getFieldMask(),ye.now())):a.set(d.key,_t.empty())}),this.recalculateAndSaveOverlays(e,r).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var _;return l.set(d,new pm(f,(_=a.get(d))!==null&&_!==void 0?_:null))}),l))}recalculateAndSaveOverlays(e,t){const s=ls();let i=new ve((a,l)=>a-l),r=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=s.get(u)||_t.empty();f=l.applyToLocalView(d,f),s.set(u,f);const _=(i.get(l.batchId)||K()).add(u);i=i.insert(l.batchId,_)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,_=kh();f.forEach(g=>{if(!r.has(g)){const A=Mh(t.get(g),s.get(g));A!==null&&_.set(g,A),r=r.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return b.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,i){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const a=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):b.resolve(Lt());let l=vs,u=r;return a.next(d=>b.forEach(d,(f,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),r.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,d,r)).next(()=>this.computeViews(e,u,d,K())).next(f=>({batchId:l,changes:Pg(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(s=>{let i=ss();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let a=ss();return this.indexManager.getCollectionParents(e,r).next(l=>b.forEach(l,u=>{const d=function(_,g){return new ks(g,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,u.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,s,i).next(f=>{f.forEach((_,g)=>{a=a.insert(_,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i))).next(a=>{r.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ne.newInvalidDocument(f)))});let l=ss();return a.forEach((u,d)=>{const f=r.get(u);f!==void 0&&cs(f.mutation,d,_t.empty(),ye.now()),Xi(t,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return b.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:on(i.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(i){return{name:i.name,query:rm(i.bundledQuery),readTime:on(i.readTime)}}(t)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(){this.overlays=new ve(M.comparator),this.Qr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Lt();return b.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.St(e,t,r)}),b.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.Qr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Qr.delete(s)),b.resolve()}getOverlaysForCollection(e,t,s){const i=Lt(),r=t.length+1,a=new M(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new ve((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let f=r.get(d.largestBatchId);f===null&&(f=Lt(),r=r.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Lt(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return b.resolve(l)}St(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const a=this.Qr.get(i.largestBatchId).delete(s.key);this.Qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new qg(t,s));let r=this.Qr.get(t);r===void 0&&(r=K(),this.Qr.set(t,r)),this.Qr.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.$r=new fe(_e.Ur),this.Kr=new fe(_e.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new _e(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new _e(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new M(new ie([])),s=new _e(t,e),i=new _e(t,e+1),r=[];return this.Kr.forEachInRange([s,i],a=>{this.zr(a),r.push(a.key)}),r}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new M(new ie([])),s=new _e(t,e),i=new _e(t,e+1);let r=K();return this.Kr.forEachInRange([s,i],a=>{r=r.add(a.key)}),r}containsKey(e){const t=new _e(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class _e{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return M.comparator(e.key,t.key)||B(e.Zr,t.Zr)}static Wr(e,t){return B(e.Zr,t.Zr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new fe(_e.Ur)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Bg(r,t,s,i);this.mutationQueue.push(a);for(const l of i)this.Xr=this.Xr.add(new _e(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ti(s),r=i<0?0:i;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?rg:this.nr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new _e(t,0),i=new _e(t,Number.POSITIVE_INFINITY),r=[];return this.Xr.forEachInRange([s,i],a=>{const l=this.ei(a.Zr);r.push(l)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new fe(B);return t.forEach(i=>{const r=new _e(i,0),a=new _e(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([r,a],l=>{s=s.add(l.Zr)})}),b.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;M.isDocumentKey(r)||(r=r.child(""));const a=new _e(new M(r),0);let l=new fe(B);return this.Xr.forEachWhile(u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.Zr)),!0)},a),b.resolve(this.ni(l))}ni(e){const t=[];return e.forEach(s=>{const i=this.ei(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){re(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return b.forEach(t.mutations,i=>{const r=new _e(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new _e(t,0),i=this.Xr.firstAfterOrEqual(s);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.ii=e,this.docs=function(){return new ve(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,a=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return b.resolve(s?s.document.mutableCopy():Ne.newInvalidDocument(t))}getEntries(e,t){let s=Rt();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ne.newInvalidDocument(i))}),b.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=Rt();const a=t.path,l=new M(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||tg(eg(f),s)<=0||(i.has(f.key)||Xi(t,f))&&(r=r.insert(f.key,f.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,t,s,i){U(9500)}si(e,t){return b.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Tm(this)}getSize(e){return b.resolve(this.size)}}class Tm extends fm{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.Br.addEntry(e,i)):this.Br.removeEntry(s)}),b.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.persistence=e,this.oi=new Wt(t=>qo(t),jo),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this._i=0,this.ai=new Wo,this.targetCount=0,this.ui=yn.cr()}forEachTarget(e,t){return this.oi.forEach((s,i)=>t(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),b.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new yn(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Tr(t),b.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.oi.delete(a),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(r).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return b.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),b.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(a=>{r.push(i.markPotentiallyOrphaned(e,a))}),b.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return b.resolve(s)}containsKey(e,t){return b.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t){this.ci={},this.overlays={},this.li=new Wi(0),this.hi=!1,this.hi=!0,this.Pi=new ym,this.referenceDelegate=e(this),this.Ti=new Im(this),this.indexManager=new om,this.remoteDocumentCache=function(i){return new Em(i)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new im(t),this.Ei=new gm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new vm(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){x("MemoryPersistence","Starting transaction:",e);const i=new wm(this.li.next());return this.referenceDelegate.di(),s(i).next(r=>this.referenceDelegate.Ai(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ri(e,t){return b.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class wm extends sg{constructor(e){super(),this.currentSequenceNumber=e}}class Ko{constructor(e){this.persistence=e,this.Vi=new Wo,this.mi=null}static fi(e){return new Ko(e)}get gi(){if(this.mi)return this.mi;throw U(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),b.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),b.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(i=>this.gi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.gi.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.gi,s=>{const i=M.fromPath(s);return this.pi(e,i).next(r=>{r||t.removeEntry(i,F.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return b.or([()=>b.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Pi{constructor(e,t){this.persistence=e,this.yi=new Wt(s=>ag(s.path),(s,i)=>s.isEqual(i)),this.garbageCollector=dm(this,t)}static fi(e,t){return new Pi(e,t)}di(){}Ai(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(i=>s+i))}br(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return b.forEach(this.yi,(s,i)=>this.Dr(e,s,i).next(r=>r?b.resolve():t(i)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.si(e,a=>this.Dr(e,a,t).next(l=>{l||(s++,r.removeEntry(a,F.min()))})).next(()=>r.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),b.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),b.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=pi(e.data.value)),t}Dr(e,t,s){return b.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.yi.get(t);return b.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.ds=s,this.As=i}static Rs(e,t){let s=K(),i=K();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Qo(e,t.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return xp()?8:ig(Gu())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.ws(e,t).next(a=>{r.result=a}).next(()=>{if(!r.result)return this.bs(e,t,i,s).next(a=>{r.result=a})}).next(()=>{if(r.result)return;const a=new Cm;return this.Ss(e,t,a).next(l=>{if(r.result=l,this.fs)return this.Ds(e,t,a,l.size)})}).next(()=>r.result)}Ds(e,t,s,i){return s.documentReadCount<this.gs?(en()<=H.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",tn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),b.resolve()):(en()<=H.DEBUG&&x("QueryEngine","Query:",tn(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ps*i?(en()<=H.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",tn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):b.resolve())}ws(e,t){if(Ec(t))return b.resolve(null);let s=Qe(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=lo(t,null,"F"),s=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const a=K(...r);return this.ys.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,s).next(u=>{const d=this.vs(t,l);return this.Cs(t,d,a,u.readTime)?this.ws(e,lo(t,null,"F")):this.Fs(e,d,t,u)}))})))}bs(e,t,s,i){return Ec(t)||i.isEqual(F.min())?b.resolve(null):this.ys.getDocuments(e,s).next(r=>{const a=this.vs(t,r);return this.Cs(t,a,s,i)?b.resolve(null):(en()<=H.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),tn(t)),this.Fs(e,a,t,Z_(i,vs)).next(l=>l))})}vs(e,t){let s=new fe(Ph(e));return t.forEach((i,r)=>{Xi(e,r)&&(s=s.add(r))}),s}Cs(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,t,s){return en()<=H.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",tn(t)),this.ys.getDocumentsMatchingQuery(e,t,It.min(),s)}Fs(e,t,s,i){return this.ys.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(a=>{r=r.insert(a.key,a)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="LocalStore",Rm=3e8;class Sm{constructor(e,t,s,i){this.persistence=e,this.Ms=t,this.serializer=i,this.xs=new ve(B),this.Os=new Wt(r=>qo(r),jo),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _m(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function bm(n,e,t,s){return new Sm(n,e,t,s)}async function Xh(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const a=[],l=[];let u=K();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of r){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(s,u).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:l}))})})}function Jh(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function Pm(n,e){const t=W(n),s=e.snapshotVersion;let i=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});i=t.xs;const l=[];e.targetChanges.forEach((f,_)=>{const g=i.get(_);if(!g)return;l.push(t.Ti.removeMatchingKeys(r,f.removedDocuments,_).next(()=>t.Ti.addMatchingKeys(r,f.addedDocuments,_)));let A=g.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(_)!==null?A=A.withResumeToken(we.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,s)),i=i.insert(_,A),function(D,V,J){return D.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Rm?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(g,A,f)&&l.push(t.Ti.updateTargetData(r,A))});let u=Rt(),d=K();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,f))}),l.push(Nm(r,a,e.documentUpdates).next(f=>{u=f.qs,d=f.Qs})),!s.isEqual(F.min())){const f=t.Ti.getLastRemoteSnapshotVersion(r).next(_=>t.Ti.setTargetsMetadata(r,r.currentSequenceNumber,s));l.push(f)}return b.waitFor(l).next(()=>a.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,u,d)).next(()=>u)}).then(r=>(t.xs=i,r))}function Nm(n,e,t){let s=K(),i=K();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let a=Rt();return t.forEach((l,u)=>{const d=r.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(F.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):x(Yo,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{qs:a,Qs:i}})}function km(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Ti.getTargetData(s,e).next(r=>r?(i=r,b.resolve(i)):t.Ti.allocateTargetId(s).next(a=>(i=new gt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.xs.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function _o(n,e,t){const s=W(n),i=s.xs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,a=>s.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!bn(a))throw a;x(Yo,`Failed to update sequence numbers for target ${e}: ${a}`)}s.xs=s.xs.remove(e),s.Os.delete(i.target)}function Vc(n,e,t){const s=W(n);let i=F.min(),r=K();return s.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const _=W(u),g=_.Os.get(f);return g!==void 0?b.resolve(_.xs.get(g)):_.Ti.getTargetData(d,f)}(s,a,Qe(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(a,l.targetId).next(u=>{r=u})}).next(()=>s.Ms.getDocumentsMatchingQuery(a,e,t?i:F.min(),t?r:K())).next(l=>(Dm(s,Rg(e),l),{documents:l,$s:r})))}function Dm(n,e,t){let s=n.Ns.get(e)||F.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Ns.set(e,s)}class xc{constructor(){this.activeTargetIds=Dg()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vm{constructor(){this.xo=new xc,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new xc,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="ConnectivityMonitor";class Mc{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){x(Oc,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){x(Oc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci=null;function go(){return ci===null?ci=function(){return 268435456+Math.round(2147483648*Math.random())}():ci++,"0x"+ci.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="RestConnection",Om={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Mm{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${i}`,this.Go=this.databaseId.database===wi?`project_id=${s}`:`project_id=${s}&database_id=${i}`}zo(e,t,s,i,r){const a=go(),l=this.jo(e,t.toUriEncodedString());x(Br,`Sending RPC '${e}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(u,i,r);const{host:d}=new URL(l),f=Ns(d);return this.Jo(e,l,u,s,f).then(_=>(x(Br,`Received RPC '${e}' ${a}: `,_),_),_=>{throw pn(Br,`RPC '${e}' ${a} failed with error: `,_,"url: ",l,"request:",s),_})}Yo(e,t,s,i,r,a){return this.zo(e,t,s,i,r)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Sn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}jo(e,t){const s=Om[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="WebChannelConnection";class Fm extends Mm{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,i,r){const a=go();return new Promise((l,u)=>{const d=new sh;d.setWithCredentials(!0),d.listenOnce(ih.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case fi.NO_ERROR:const _=d.getResponseJson();x(be,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),l(_);break;case fi.TIMEOUT:x(be,`RPC '${e}' ${a} timed out`),u(new O(N.DEADLINE_EXCEEDED,"Request time out"));break;case fi.HTTP_ERROR:const g=d.getStatus();if(x(be,`RPC '${e}' ${a} failed with status:`,g,"response text:",d.getResponseText()),g>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const D=function(J){const z=J.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(z)>=0?z:N.UNKNOWN}(S.status);u(new O(D,S.message))}else u(new O(N.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new O(N.UNAVAILABLE,"Connection failed."));break;default:U(9055,{h_:e,streamId:a,P_:d.getLastErrorCode(),T_:d.getLastError()})}}finally{x(be,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(i);x(be,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",f,s,15)})}I_(e,t,s){const i=go(),r=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ah(),l=oh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Ho(u.initMessageHeaders,t,s),u.encodeInitMessageHeaders=!0;const f=r.join("");x(be,`Creating RPC '${e}' stream ${i}: ${f}`,u);const _=a.createWebChannel(f,u);this.E_(_);let g=!1,A=!1;const S=new Lm({Zo:V=>{A?x(be,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(g||(x(be,`Opening RPC '${e}' stream ${i} transport.`),_.open(),g=!0),x(be,`RPC '${e}' stream ${i} sending:`,V),_.send(V))},Xo:()=>_.close()}),D=(V,J,z)=>{V.listen(J,Q=>{try{z(Q)}catch(oe){setTimeout(()=>{throw oe},0)}})};return D(_,ns.EventType.OPEN,()=>{A||(x(be,`RPC '${e}' stream ${i} transport opened.`),S.__())}),D(_,ns.EventType.CLOSE,()=>{A||(A=!0,x(be,`RPC '${e}' stream ${i} transport closed`),S.u_(),this.d_(_))}),D(_,ns.EventType.ERROR,V=>{A||(A=!0,pn(be,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),S.u_(new O(N.UNAVAILABLE,"The operation could not be completed")))}),D(_,ns.EventType.MESSAGE,V=>{var J;if(!A){const z=V.data[0];re(!!z,16349);const Q=z,oe=(Q==null?void 0:Q.error)||((J=Q[0])===null||J===void 0?void 0:J.error);if(oe){x(be,`RPC '${e}' stream ${i} received error:`,oe);const Je=oe.status;let Ee=function(v){const E=ue[v];if(E!==void 0)return Fh(E)}(Je),I=oe.message;Ee===void 0&&(Ee=N.INTERNAL,I="Unknown error status: "+Je+" with message "+oe.message),A=!0,S.u_(new O(Ee,I)),_.close()}else x(be,`RPC '${e}' stream ${i} received:`,z),S.c_(z)}}),D(l,rh.STAT_EVENT,V=>{V.stat===eo.PROXY?x(be,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===eo.NOPROXY&&x(be,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.a_()},0),S}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function qr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(n){return new Kg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t,s=1e3,i=1.5,r=6e4){this.xi=e,this.timerId=t,this.A_=s,this.R_=i,this.V_=r,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),i=Math.max(0,t-s);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="PersistentStream";class Um{constructor(e,t,s,i,r,a,l,u){this.xi=e,this.S_=s,this.D_=i,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Zh(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(ot(t.toString()),ot("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.v_===t&&this.z_(s,i)},s=>{e(()=>{const i=new O(N.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(i)})})}z_(e,t){const s=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{s(()=>this.j_(i))}),this.stream.onMessage(i=>{s(()=>++this.M_==1?this.J_(i):this.onNext(i))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return x(Lc,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(x(Lc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bm extends Um{constructor(e,t,s,i,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,a),this.serializer=r}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=Yg(this.serializer,e),s=function(r){if(!("targetChange"in r))return F.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?on(a.readTime):F.min()}(e);return this.listener.Y_(t,s)}Z_(e){const t={};t.database=Pc(this.serializer),t.addTarget=function(r,a){let l;const u=a.target;if(l=oo(u)?{documents:Xg(r,u)}:{query:Jg(r,u).gt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=qh(r,a.resumeToken);const d=ho(r,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=fo(r,a.snapshotVersion.toTimestamp());const d=ho(r,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const s=em(this.serializer,e);s&&(t.labels=s),this.Q_(t)}X_(e){const t={};t.database=Pc(this.serializer),t.removeTarget=e,this.Q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{}class jm extends qm{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new O(N.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.connection.zo(e,po(t,s),i,r,a)).catch(r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new O(N.UNKNOWN,r.toString())})}Yo(e,t,s,i,r){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(e,po(t,s),i,a,l,r)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(N.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class $m{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(ot(t),this.ua=!1):x("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="RemoteStore";class zm{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=r,this.Ra.No(a=>{s.enqueueAndForget(async()=>{xs(this)&&(x(vn,"Restarting streams for network reachability change."),await async function(u){const d=W(u);d.da.add(4),await Vs(d),d.Va.set("Unknown"),d.da.delete(4),await nr(d)}(this))})}),this.Va=new $m(s,i)}}async function nr(n){if(xs(n))for(const e of n.Aa)await e(!0)}async function Vs(n){for(const e of n.Aa)await e(!1)}function ed(n,e){const t=W(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),ea(t)?Zo(t):Nn(t).N_()&&Jo(t,e))}function Xo(n,e){const t=W(n),s=Nn(t);t.Ea.delete(e),s.N_()&&td(t,e),t.Ea.size===0&&(s.N_()?s.k_():xs(t)&&t.Va.set("Unknown"))}function Jo(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Nn(n).Z_(e)}function td(n,e){n.ma.Ke(e),Nn(n).X_(e)}function Zo(n){n.ma=new zg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Nn(n).start(),n.Va.ca()}function ea(n){return xs(n)&&!Nn(n).O_()&&n.Ea.size>0}function xs(n){return W(n).da.size===0}function nd(n){n.ma=void 0}async function Hm(n){n.Va.set("Online")}async function Gm(n){n.Ea.forEach((e,t)=>{Jo(n,e)})}async function Wm(n,e){nd(n),ea(n)?(n.Va.Pa(e),Zo(n)):n.Va.set("Unknown")}async function Km(n,e,t){if(n.Va.set("Online"),e instanceof Bh&&e.state===2&&e.cause)try{await async function(i,r){const a=r.cause;for(const l of r.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ea.delete(l),i.ma.removeTarget(l))}(n,e)}catch(s){x(vn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Fc(n,s)}else if(e instanceof gi?n.ma.Xe(e):e instanceof Uh?n.ma.ot(e):n.ma.nt(e),!t.isEqual(F.min()))try{const s=await Jh(n.localStore);t.compareTo(s)>=0&&await function(r,a){const l=r.ma.It(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=r.Ea.get(d);f&&r.Ea.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=r.Ea.get(u);if(!f)return;r.Ea.set(u,f.withResumeToken(we.EMPTY_BYTE_STRING,f.snapshotVersion)),td(r,u);const _=new gt(f.target,u,d,f.sequenceNumber);Jo(r,_)}),r.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(s){x(vn,"Failed to raise snapshot:",s),await Fc(n,s)}}async function Fc(n,e,t){if(!bn(e))throw e;n.da.add(1),await Vs(n),n.Va.set("Offline"),t||(t=()=>Jh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(vn,"Retrying IndexedDB access"),await t(),n.da.delete(1),await nr(n)})}async function Uc(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),x(vn,"RemoteStore received new credentials");const s=xs(t);t.da.add(3),await Vs(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await nr(t)}async function Qm(n,e){const t=W(n);e?(t.da.delete(2),await nr(t)):e||(t.da.add(2),await Vs(t),t.Va.set("Unknown"))}function Nn(n){return n.fa||(n.fa=function(t,s,i){const r=W(t);return r.oa(),new Bm(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{e_:Hm.bind(null,n),n_:Gm.bind(null,n),i_:Wm.bind(null,n),Y_:Km.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),ea(n)?Zo(n):n.Va.set("Unknown")):(await n.fa.stop(),nd(n))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const a=Date.now()+s,l=new ta(e,t,a,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sd(n,e){if(ot("AsyncQueue",`${e}: ${n}`),bn(n))return new O(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{static emptySet(e){return new an(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||M.comparator(t.key,s.key):(t,s)=>M.comparator(t.key,s.key),this.keyedMap=ss(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof an)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new an;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.pa=new ve(M.comparator)}track(e){const t=e.doc.key,s=this.pa.get(t);s?e.type!==0&&s.type===3?this.pa=this.pa.insert(t,e):e.type===3&&s.type!==1?this.pa=this.pa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pa=this.pa.remove(t):e.type===1&&s.type===2?this.pa=this.pa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):U(63341,{Vt:e,ya:s}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,s)=>{e.push(s)}),e}}class En{constructor(e,t,s,i,r,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,i,r){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new En(e,t,an.emptySet(t),a,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class Xm{constructor(){this.queries=qc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const i=W(t),r=i.queries;i.queries=qc(),r.forEach((a,l)=>{for(const u of l.Sa)u.onError(s)})})(this,new O(N.ABORTED,"Firestore shutting down"))}}function qc(){return new Wt(n=>bh(n),Yi)}async function Jm(n,e){const t=W(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.Da()&&e.va()&&(s=2):(r=new Ym,s=e.va()?0:1);try{switch(s){case 0:r.ba=await t.onListen(i,!0);break;case 1:r.ba=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=sd(a,`Initialization of query '${tn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,r),r.Sa.push(e),e.Fa(t.onlineState),r.ba&&e.Ma(r.ba)&&na(t)}async function Zm(n,e){const t=W(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const a=r.Sa.indexOf(e);a>=0&&(r.Sa.splice(a,1),r.Sa.length===0?i=e.va()?0:1:!r.Da()&&e.va()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function ey(n,e){const t=W(n);let s=!1;for(const i of e){const r=i.query,a=t.queries.get(r);if(a){for(const l of a.Sa)l.Ma(i)&&(s=!0);a.ba=i}}s&&na(t)}function ty(n,e,t){const s=W(n),i=s.queries.get(e);if(i)for(const r of i.Sa)r.onError(t);s.queries.delete(e)}function na(n){n.Ca.forEach(e=>{e.next()})}var mo,jc;(jc=mo||(mo={})).xa="default",jc.Cache="cache";class ny{constructor(e,t,s){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new En(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const s=t!=="Offline";return(!this.options.Qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=En.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==mo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.key=e}}class rd{constructor(e){this.key=e}}class sy{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=K(),this.mutatedKeys=K(),this.Za=Ph(e),this.Xa=new an(this.Za)}get eu(){return this.Ha}tu(e,t){const s=t?t.nu:new Bc,i=t?t.Xa:this.Xa;let r=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,_)=>{const g=i.get(f),A=Xi(this.query,_)?_:null,S=!!g&&this.mutatedKeys.has(g.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let V=!1;g&&A?g.data.isEqual(A.data)?S!==D&&(s.track({type:3,doc:A}),V=!0):this.ru(g,A)||(s.track({type:2,doc:A}),V=!0,(u&&this.Za(A,u)>0||d&&this.Za(A,d)<0)&&(l=!0)):!g&&A?(s.track({type:0,doc:A}),V=!0):g&&!A&&(s.track({type:1,doc:g}),V=!0,(u||d)&&(l=!0)),V&&(A?(a=a.add(A),r=D?r.add(f):r.delete(f)):(a=a.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{Xa:a,nu:s,Cs:l,mutatedKeys:r}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const a=e.nu.wa();a.sort((f,_)=>function(A,S){const D=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Vt:V})}};return D(A)-D(S)}(f.type,_.type)||this.Za(f.doc,_.doc)),this.iu(s),i=i!=null&&i;const l=t&&!i?this.su():[],u=this.Ya.size===0&&this.current&&!i?1:0,d=u!==this.Ja;return this.Ja=u,a.length!==0||d?{snapshot:new En(this.query,e.Xa,r,a,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Bc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=K(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new rd(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new id(s))}),t}au(e){this.Ha=e.$s,this.Ya=K();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return En.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const sa="SyncEngine";class iy{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class ry{constructor(e){this.key=e,this.cu=!1}}class oy{constructor(e,t,s,i,r,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new Wt(l=>bh(l),Yi),this.Pu=new Map,this.Tu=new Set,this.Iu=new ve(M.comparator),this.Eu=new Map,this.du=new Wo,this.Au={},this.Ru=new Map,this.Vu=yn.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function ay(n,e,t=!0){const s=ud(n);let i;const r=s.hu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.uu()):i=await od(s,e,t,!0),i}async function ly(n,e){const t=ud(n);await od(t,e,!0,!1)}async function od(n,e,t,s){const i=await km(n.localStore,Qe(e)),r=i.targetId,a=n.sharedClientState.addLocalQueryTarget(r,t);let l;return s&&(l=await cy(n,e,r,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&ed(n.remoteStore,i),l}async function cy(n,e,t,s,i){n.fu=(_,g,A)=>async function(D,V,J,z){let Q=V.view.tu(J);Q.Cs&&(Q=await Vc(D.localStore,V.query,!1).then(({documents:I})=>V.view.tu(I,Q)));const oe=z&&z.targetChanges.get(V.targetId),Je=z&&z.targetMismatches.get(V.targetId)!=null,Ee=V.view.applyChanges(Q,D.isPrimaryClient,oe,Je);return zc(D,V.targetId,Ee.ou),Ee.snapshot}(n,_,g,A);const r=await Vc(n.localStore,e,!0),a=new sy(e,r.$s),l=a.tu(r.documents),u=Ds.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,u);zc(n,t,d.ou);const f=new iy(e,t,a);return n.hu.set(e,f),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),d.snapshot}async function uy(n,e,t){const s=W(n),i=s.hu.get(e),r=s.Pu.get(i.targetId);if(r.length>1)return s.Pu.set(i.targetId,r.filter(a=>!Yi(a,e))),void s.hu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await _o(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),t&&Xo(s.remoteStore,i.targetId),yo(s,i.targetId)}).catch(Gi)):(yo(s,i.targetId),await _o(s.localStore,i.targetId,!0))}async function hy(n,e){const t=W(n),s=t.hu.get(e),i=t.Pu.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Xo(t.remoteStore,s.targetId))}async function ad(n,e){const t=W(n);try{const s=await Pm(t.localStore,e);e.targetChanges.forEach((i,r)=>{const a=t.Eu.get(r);a&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.cu=!0:i.modifiedDocuments.size>0?re(a.cu,14607):i.removedDocuments.size>0&&(re(a.cu,42227),a.cu=!1))}),await cd(t,s,e)}catch(s){await Gi(s)}}function $c(n,e,t){const s=W(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.hu.forEach((r,a)=>{const l=a.view.Fa(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=W(a);u.onlineState=l;let d=!1;u.queries.forEach((f,_)=>{for(const g of _.Sa)g.Fa(l)&&(d=!0)}),d&&na(u)}(s.eventManager,e),i.length&&s.lu.Y_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function dy(n,e,t){const s=W(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Eu.get(e),r=i&&i.key;if(r){let a=new ve(M.comparator);a=a.insert(r,Ne.newNoDocument(r,F.min()));const l=K().add(r),u=new er(F.min(),new Map,new ve(B),a,l);await ad(s,u),s.Iu=s.Iu.remove(r),s.Eu.delete(e),ia(s)}else await _o(s.localStore,e,!1).then(()=>yo(s,e,t)).catch(Gi)}function yo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Pu.get(e))n.hu.delete(s),t&&n.lu.gu(s,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(s=>{n.du.containsKey(s)||ld(n,s)})}function ld(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(Xo(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),ia(n))}function zc(n,e,t){for(const s of t)s instanceof id?(n.du.addReference(s.key,e),fy(n,s)):s instanceof rd?(x(sa,"Document no longer in limbo: "+s.key),n.du.removeReference(s.key,e),n.du.containsKey(s.key)||ld(n,s.key)):U(19791,{pu:s})}function fy(n,e){const t=e.key,s=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(s)||(x(sa,"New document in limbo: "+t),n.Tu.add(s),ia(n))}function ia(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new M(ie.fromString(e)),s=n.Vu.next();n.Eu.set(s,new ry(t)),n.Iu=n.Iu.insert(t,s),ed(n.remoteStore,new gt(Qe(Rh(t.path)),s,"TargetPurposeLimboResolution",Wi.le))}}async function cd(n,e,t){const s=W(n),i=[],r=[],a=[];s.hu.isEmpty()||(s.hu.forEach((l,u)=>{a.push(s.fu(u,e,t).then(d=>{var f;if((d||t)&&s.isPrimaryClient){const _=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;s.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(d){i.push(d);const _=Qo.Rs(u.targetId,d);r.push(_)}}))}),await Promise.all(a),s.lu.Y_(i),await async function(u,d){const f=W(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>b.forEach(d,g=>b.forEach(g.ds,A=>f.persistence.referenceDelegate.addReference(_,g.targetId,A)).next(()=>b.forEach(g.As,A=>f.persistence.referenceDelegate.removeReference(_,g.targetId,A)))))}catch(_){if(!bn(_))throw _;x(Yo,"Failed to update sequence numbers: "+_)}for(const _ of d){const g=_.targetId;if(!_.fromCache){const A=f.xs.get(g),S=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(S);f.xs=f.xs.insert(g,D)}}}(s.localStore,r))}async function py(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){x(sa,"User change. New user:",e.toKey());const s=await Xh(t.localStore,e);t.currentUser=e,function(r,a){r.Ru.forEach(l=>{l.forEach(u=>{u.reject(new O(N.CANCELLED,a))})}),r.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await cd(t,s.ks)}}function _y(n,e){const t=W(n),s=t.Eu.get(e);if(s&&s.cu)return K().add(s.key);{let i=K();const r=t.Pu.get(e);if(!r)return i;for(const a of r){const l=t.hu.get(a);i=i.unionWith(l.view.eu)}return i}}function ud(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ad.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_y.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dy.bind(null,e),e.lu.Y_=ey.bind(null,e.eventManager),e.lu.gu=ty.bind(null,e.eventManager),e}class Ni{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tr(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return bm(this.persistence,new Am,e.initialUser,this.serializer)}Su(e){return new Yh(Ko.fi,this.serializer)}bu(e){return new Vm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ni.provider={build:()=>new Ni};class gy extends Ni{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){re(this.persistence.referenceDelegate instanceof Pi,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new um(s,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new Yh(s=>Pi.fi(s,t),this.serializer)}}class vo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$c(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=py.bind(null,this.syncEngine),await Qm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Xm}()}createDatastore(e){const t=tr(e.databaseInfo.databaseId),s=function(r){return new Fm(r)}(e.databaseInfo);return function(r,a,l,u){return new jm(r,a,l,u)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,i,r,a,l){return new zm(s,i,r,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>$c(this.syncEngine,t,0),function(){return Mc.C()?new Mc:new xm}())}createSyncEngine(e,t){return function(i,r,a,l,u,d,f){const _=new oy(i,r,a,l,u,d);return f&&(_.mu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const r=W(i);x(vn,"RemoteStore shutting down."),r.da.add(5),await Vs(r),r.Ra.shutdown(),r.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vo.provider={build:()=>new vo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):ot("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="FirestoreClient";class yy{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=Y_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async a=>{x(St,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(x(St,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=sd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function jr(n,e){n.asyncQueue.verifyOperationInProgress(),x(St,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Xh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Hc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await vy(n);x(St,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Uc(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Uc(e.remoteStore,i)),n._onlineComponents=e}async function vy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(St,"Using user provided OfflineComponentProvider");try{await jr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===N.FAILED_PRECONDITION||i.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;pn("Error using user provided cache. Falling back to memory cache: "+t),await jr(n,new Ni)}}else x(St,"Using default OfflineComponentProvider"),await jr(n,new gy(void 0));return n._offlineComponents}async function Ey(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(St,"Using user provided OnlineComponentProvider"),await Hc(n,n._uninitializedComponentsProvider._online)):(x(St,"Using default OnlineComponentProvider"),await Hc(n,new vo))),n._onlineComponents}async function Ty(n){const e=await Ey(n),t=e.eventManager;return t.onListen=ay.bind(null,e.syncEngine),t.onUnlisten=uy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ly.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=hy.bind(null,e.syncEngine),t}function Iy(n,e,t={}){const s=new Bt;return n.asyncQueue.enqueueAndForget(async()=>function(r,a,l,u,d){const f=new my({next:g=>{f.xu(),a.enqueueAndForget(()=>Zm(r,_)),g.fromCache&&u.source==="server"?d.reject(new O(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),_=new ny(l,f,{includeMetadataChanges:!0,Qa:!0});return Jm(r,_)}(await Ty(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new Map;function wy(n,e,t,s){if(e===!0&&s===!0)throw new O(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wc(n){if(M.isDocumentKey(n))throw new O(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function Eo(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sr(n);throw new O(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="firestore.googleapis.com",Kc=!0;class Qc{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new O(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dd,this.ssl=Kc}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Kc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Qh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lm)throw new O(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hd((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ra{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new $_;switch(s.type){case"firstParty":return new W_(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new O(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Gc.get(t);s&&(x("ComponentProvider","Removing Datastore"),Gc.delete(t),s.terminate())}(this),Promise.resolve()}}function Cy(n,e,t,s={}){var i;n=Eo(n,ra);const r=Ns(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;r&&($u(`https://${u}`),Hu("Firestore",!0)),a.host!==dd&&a.host!==u&&pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:u,ssl:r,emulatorOptions:s});if(!gs(d,l)&&(n._setSettings(d),s.mockUserToken)){let f,_;if(typeof s.mockUserToken=="string")f=s.mockUserToken,_=Pe.MOCK_USER;else{f=zu(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const g=s.mockUserToken.sub||s.mockUserToken.user_id;if(!g)throw new O(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Pe(g)}n._authCredentials=new z_(new ch(f,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new kn(this.firestore,e,this._query)}}class ut{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}}class ln extends kn{constructor(e,t,s){super(e,t,Rh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new M(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function nI(n,e,...t){if(n=Ye(n),n instanceof ra){const s=ie.fromString(e,...t);return Wc(s),new ln(n,null,s)}{if(!(n instanceof ut||n instanceof ln))throw new O(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ie.fromString(e,...t));return Wc(s),new ln(n.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="AsyncQueue";class Xc{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Zh(this,"async_queue_retry"),this.rc=()=>{const s=qr();s&&x(Yc,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=e;const t=qr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=qr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new Bt;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!bn(e))throw e;x(Yc,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(s=>{throw this.Xu=s,this.ec=!1,ot("INTERNAL UNHANDLED ERROR: ",Jc(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=t,t}enqueueAfterDelay(e,t,s){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const i=ta.createAndSchedule(this,e,t,s,r=>this.uc(r));return this.Zu.push(i),i}oc(){this.Xu&&U(47125,{cc:Jc(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Jc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class fd extends ra{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Xc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xc(e),this._firestoreClient=void 0,await e}}}function sI(n,e){const t=typeof n=="object"?n:Zu(),s=typeof n=="string"?n:wi,i=Yu(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=qu("firestore");r&&Cy(i,...r)}return i}function Ay(n){if(n._terminated)throw new O(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ry(n),n._firestoreClient}function Ry(n){var e,t,s;const i=n._freezeSettings(),r=function(l,u,d,f){return new ug(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,hd(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new yy(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tn(we.fromBase64String(e))}catch(t){throw new O(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tn(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=/^__.*__$/;function gd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{Ic:n})}}class la{constructor(e,t,s,i,r,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Ec(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new la(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:s,Rc:!1});return i.Vc(e),i}mc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:s,Rc:!1});return i.Ec(),i}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return To(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(gd(this.Ic)&&Sy.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class by{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||tr(e)}bc(e,t,s,i=!1){return new la({Ic:e,methodName:t,wc:s,path:De.emptyPath(),Rc:!1,yc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Py(n){const e=n._freezeSettings(),t=tr(n._databaseId);return new by(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ny(n,e,t,s=!1){return ca(t,n.bc(s?4:3,e))}function ca(n,e){if(md(n=Ye(n)))return Dy("Unsupported field value:",e,n),ky(n,e);if(n instanceof _d)return function(s,i){if(!gd(i.Ic))throw i.gc(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gc(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(s,i){const r=[];let a=0;for(const l of s){let u=ca(l,i.fc(a));u==null&&(u={nullValue:"NULL_VALUE"}),r.push(u),a++}return{arrayValue:{values:r}}}(n,e)}return function(s,i){if((s=Ye(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Vg(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=ye.fromDate(s);return{timestampValue:fo(i.serializer,r)}}if(s instanceof ye){const r=new ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:fo(i.serializer,r)}}if(s instanceof oa)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Tn)return{bytesValue:qh(i.serializer,s._byteString)};if(s instanceof ut){const r=i.databaseId,a=s.firestore._databaseId;if(!a.isEqual(r))throw i.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:jh(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof aa)return function(a,l){return{mapValue:{fields:{[yh]:{stringValue:vh},[Ci]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.gc("VectorValues must only contain numeric values.");return $o(l.serializer,d)})}}}}}}(s,i);throw i.gc(`Unsupported field value: ${sr(s)}`)}(n,e)}function ky(n,e){const t={};return dh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pn(n,(s,i)=>{const r=ca(i,e.Ac(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function md(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ye||n instanceof oa||n instanceof Tn||n instanceof ut||n instanceof _d||n instanceof aa)}function Dy(n,e,t){if(!md(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const s=sr(t);throw s==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+s)}}const Vy=new RegExp("[~\\*/\\[\\]]");function xy(n,e,t){if(e.search(Vy)>=0)throw To(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new pd(...e.split("."))._internalPath}catch{throw To(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function To(n,e,t,s,i){const r=s&&!s.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(r||a)&&(u+=" (found",r&&(u+=` in field ${s}`),a&&(u+=` in document ${i}`),u+=")"),new O(N.INVALID_ARGUMENT,l+n+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Oy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ua("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Oy extends yd{data(){return super.data()}}function ua(n,e){return typeof e=="string"?xy(n,e):e instanceof pd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ha{}class Ly extends ha{}function iI(n,e,...t){let s=[];e instanceof ha&&s.push(e),s=s.concat(t),function(r){const a=r.filter(u=>u instanceof da).length,l=r.filter(u=>u instanceof ir).length;if(a>1||a>0&&l>0)throw new O(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class ir extends Ly{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ir(e,t,s)}_apply(e){const t=this._parse(e);return vd(e._query,t),new kn(e.firestore,e.converter,ao(e._query,t))}_parse(e){const t=Py(e.firestore);return function(r,a,l,u,d,f,_){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){eu(_,f);const S=[];for(const D of _)S.push(Zc(u,r,D));g={arrayValue:{values:S}}}else g=Zc(u,r,_)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||eu(_,f),g=Ny(l,a,_,f==="in"||f==="not-in");return he.create(d,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function rI(n,e,t){const s=e,i=ua("where",n);return ir._create(i,s,t)}class da extends ha{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new da(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Ge.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,r){let a=i;const l=r.getFlattenedFilters();for(const u of l)vd(a,u),a=ao(a,u)}(e._query,t),new kn(e.firestore,e.converter,ao(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Zc(n,e,t){if(typeof(t=Ye(t))=="string"){if(t==="")throw new O(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sh(e)&&t.indexOf("/")!==-1)throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ie.fromString(t));if(!M.isDocumentKey(s))throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return pc(n,new M(s))}if(t instanceof ut)return pc(n,t._key);throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sr(t)}.`)}function eu(n,e){if(!Array.isArray(n)||n.length===0)throw new O(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vd(n,e){const t=function(i,r){for(const a of i)for(const l of a.getFlattenedFilters())if(r.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Fy{convertValue(e,t="none"){switch(At(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ct(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Pn(e,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertVectorValue(e){var t,s,i;const r=(i=(s=(t=e.fields)===null||t===void 0?void 0:t[Ci].arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(a=>ce(a.doubleValue));return new aa(r)}convertGeoPoint(e){return new oa(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Qi(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Es(e));default:return null}}convertTimestamp(e){const t=wt(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ie.fromString(e);re(Kh(s),9688,{name:e});const i=new Ts(s.get(1),s.get(3)),r=new M(s.popFirst(5));return i.isEqual(t)||ot(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Uy extends yd{constructor(e,t,s,i,r,a){super(e,t,s,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ua("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class mi extends Uy{data(e={}){return super.data(e)}}class By{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ui(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new mi(this._firestore,this._userDataWriter,s.key,s,new ui(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new mi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ui(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const u=new mi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ui(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:qy(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function qy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}class jy extends Fy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,t)}}function oI(n){n=Eo(n,kn);const e=Eo(n.firestore,fd),t=Ay(e),s=new jy(e);return My(n._query),Iy(t,n._query).then(i=>new By(e,s,n,i))}(function(e,t=!0){(function(i){Sn=i})(Ju),ms(new fn("firestore",(s,{instanceIdentifier:i,options:r})=>{const a=s.getProvider("app").getImmediate(),l=new fd(new H_(s.getProvider("auth-internal")),new K_(a,s.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ts(d.options.projectId,f)}(a,i),a);return r=Object.assign({useFetchStreams:t},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),yt(nc,sc,e),yt(nc,sc,"esm2017")})();var $y="firebase",zy="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt($y,zy,"app");var tu={};const nu="@firebase/database",su="1.0.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ed="";function Hy(n){Ed=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:_s(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Gy(e)}}catch{}return new Wy},Ft=Td("localStorage"),Ky=Td("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Lo("@firebase/database"),Qy=function(){let n=1;return function(){return n++}}(),Id=function(n){const e=zp(n),t=new $p;t.update(e);const s=t.digest();return xo.encodeByteArray(s)},Os=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Os.apply(null,s):typeof s=="object"?e+=me(s):e+=s,e+=" "}return e};let us=null,iu=!0;const Yy=function(n,e){P(!0,"Can't turn on custom loggers persistently."),cn.logLevel=H.VERBOSE,us=cn.log.bind(cn)},ke=function(...n){if(iu===!0&&(iu=!1,us===null&&Ky.get("logging_enabled")===!0&&Yy()),us){const e=Os.apply(null,n);us(e)}},Ms=function(n){return function(...e){ke(n,...e)}},Io=function(...n){const e="FIREBASE INTERNAL ERROR: "+Os(...n);cn.error(e)},at=function(...n){const e=`FIREBASE FATAL ERROR: ${Os(...n)}`;throw cn.error(e),new Error(e)},Fe=function(...n){const e="FIREBASE WARNING: "+Os(...n);cn.warn(e)},Xy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Jy=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},In="[MIN_NAME]",$t="[MAX_NAME]",Dn=function(n,e){if(n===e)return 0;if(n===In||e===$t)return-1;if(e===In||n===$t)return 1;{const t=ru(n),s=ru(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Zy=function(n,e){return n===e?0:n<e?-1:1},Jn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+me(e))},fa=function(n){if(typeof n!="object"||n===null)return me(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=me(e[s]),t+=":",t+=fa(n[e[s]]);return t+="}",t},Cd=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Ue(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ad=function(n){P(!wd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,a,l,u;n===0?(r=0,a=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,a=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,a=Math.round(n/Math.pow(2,1-s-t))));const d=[];for(u=t;u;u-=1)d.push(a%2?1:0),a=Math.floor(a/2);for(u=e;u;u-=1)d.push(r%2?1:0),r=Math.floor(r/2);d.push(i?1:0),d.reverse();const f=d.join("");let _="";for(u=0;u<64;u+=8){let g=parseInt(f.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),_=_+g}return _.toLowerCase()},ev=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nv(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const sv=new RegExp("^-?(0*)\\d{1,10}$"),iv=-2147483648,rv=2147483647,ru=function(n){if(sv.test(n)){const e=Number(n);if(e>=iv&&e<=rv)return e}return null},Vn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Fe("Exception was thrown by user callback.",t),e},Math.floor(0))}},ov=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},hs=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Xu(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class yi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="5",Rd="v",Sd="s",bd="r",Pd="f",Nd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kd="ls",Dd="p",wo="ac",Vd="websocket",xd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t,s,i,r=!1,a="",l=!1,u=!1,d=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this.emulatorOptions=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ft.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ft.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function cv(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Md(n,e,t){P(typeof e=="string","typeof type must == string"),P(typeof t=="object","typeof params must == object");let s;if(e===Vd)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===xd)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);cv(n)&&(t.ns=n.namespace);const i=[];return Ue(t,(r,a)=>{i.push(r+"="+a)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.counters_={}}incrementCounter(e,t=1){ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ip(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r={},zr={};function _a(n){const e=n.toString();return $r[e]||($r[e]=new uv),$r[e]}function hv(n,e){const t=n.toString();return zr[t]||(zr[t]=e()),zr[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Vn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="start",fv="close",pv="pLPCommand",_v="pRTLPCB",Ld="id",Fd="pw",Ud="ser",gv="cb",mv="seg",yv="ts",vv="d",Ev="dframe",Bd=1870,qd=30,Tv=Bd-qd,Iv=25e3,wv=3e4;class rn{constructor(e,t,s,i,r,a,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ms(e),this.stats_=_a(t),this.urlFn=u=>(this.appCheckToken&&(u[wo]=this.appCheckToken),Md(t,xd,u))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new dv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wv)),Jy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ga((...r)=>{const[a,l,u,d,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===ou)this.id=l,this.password=u;else if(a===fv)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...r)=>{const[a,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ou]="t",s[Ud]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[gv]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Rd]=pa,this.transportSessionId&&(s[Sd]=this.transportSessionId),this.lastSessionId&&(s[kd]=this.lastSessionId),this.applicationId&&(s[Dd]=this.applicationId),this.appCheckToken&&(s[wo]=this.appCheckToken),typeof location<"u"&&location.hostname&&Nd.test(location.hostname)&&(s[bd]=Pd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){rn.forceAllow_=!0}static forceDisallow(){rn.forceDisallow_=!0}static isAvailable(){return rn.forceAllow_?!0:!rn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ev()&&!tv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=me(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Uu(t),i=Cd(s,Tv);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ev]="t",s[Ld]=e,s[Fd]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=me(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ga{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Qy(),window[pv+this.uniqueCallbackIdentifier]=e,window[_v+this.uniqueCallbackIdentifier]=t,this.myIFrame=ga.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){ke("frame writing exception"),l.stack&&ke(l.stack),ke(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ld]=this.myID,e[Fd]=this.myPW,e[Ud]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qd+s.length<=Bd;){const a=this.pendingSegs.shift();s=s+"&"+mv+i+"="+a.seg+"&"+yv+i+"="+a.ts+"&"+vv+i+"="+a.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Iv)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=16384,Av=45e3;let ki=null;typeof MozWebSocket<"u"?ki=MozWebSocket:typeof WebSocket<"u"&&(ki=WebSocket);class je{constructor(e,t,s,i,r,a,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ms(this.connId),this.stats_=_a(t),this.connURL=je.connectionURL_(t,a,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const a={};return a[Rd]=pa,typeof location<"u"&&location.hostname&&Nd.test(location.hostname)&&(a[bd]=Pd),t&&(a[Sd]=t),s&&(a[kd]=s),i&&(a[wo]=i),r&&(a[Dd]=r),Md(e,Vd,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ft.set("previous_websocket_failure",!0);try{let s;Vp(),this.mySock=new ki(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ki!==null&&!je.forceDisallow_}static previouslyFailed(){return Ft.isInMemoryStorage||Ft.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ft.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=_s(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=me(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Cd(t,Cv);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Av))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2;je.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{static get ALL_TRANSPORTS(){return[rn,je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=je&&je.isAvailable();let s=t&&!je.previouslyFailed();if(e.webSocketOnly&&(t||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[je];else{const i=this.transports_=[];for(const r of ws.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ws.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ws.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=6e4,Sv=5e3,bv=10*1024,Pv=100*1024,Hr="t",au="d",Nv="s",lu="r",kv="e",cu="o",uu="a",hu="n",du="p",Dv="h";class Vv{constructor(e,t,s,i,r,a,l,u,d,f){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=u,this.onKill_=d,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ms("c:"+this.id+":"),this.transportManager_=new ws(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=hs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Pv?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bv?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Hr in e){const t=e[Hr];t===uu?this.upgradeIfSecondaryHealthy_():t===lu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===cu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Jn("t",e),s=Jn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:du,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:uu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Jn("t",e),s=Jn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Jn(Hr,e);if(au in e){const s=e[au];if(t===Dv){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===hu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Nv?this.onConnectionShutdown_(s):t===lu?this.onReset_(s):t===kv?Io("Server Error: "+s):t===cu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Io("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),pa!==s&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),hs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Rv))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):hs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Sv))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:du,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ft.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){P(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends $d{static getInstance(){return new Di}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=32,pu=768;class ee{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function X(){return new ee("")}function q(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function bt(n){return n.pieces_.length-n.pieceNum_}function te(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ee(n.pieces_,e)}function zd(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function xv(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Hd(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Gd(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ee(e,0)}function de(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new ee(t,0)}function $(n){return n.pieceNum_>=n.pieces_.length}function Me(n,e){const t=q(n),s=q(e);if(t===null)return e;if(t===s)return Me(te(n),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ma(n,e){if(bt(n)!==bt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function $e(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(bt(n)>bt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Ov{constructor(e,t){this.errorPrefix_=t,this.parts_=Hd(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Hi(this.parts_[s]);Wd(this)}}function Mv(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Hi(e),Wd(n)}function Lv(n){const e=n.parts_.pop();n.byteLength_-=Hi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Wd(n){if(n.byteLength_>pu)throw new Error(n.errorPrefix_+"has a key path longer than "+pu+" bytes ("+n.byteLength_+").");if(n.parts_.length>fu)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fu+") or object contains a cycle "+Mt(n))}function Mt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends $d{static getInstance(){return new ya}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=1e3,Fv=60*5*1e3,_u=30*1e3,Uv=1.3,Bv=3e4,qv="server_kill",gu=3;class it extends jd{constructor(e,t,s,i,r,a,l,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=it.nextPersistentConnectionId_++,this.log_=Ms("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zn,this.maxReconnectDelay_=Fv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ya.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Di.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(me(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new zi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const l=a.d;a.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+r),this.listens.has(a)||this.listens.set(a,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(a).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(a).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},a="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(a,r,l=>{const u=l.d,d=l.s;it.warnOnListenWarnings_(u,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),d!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(d,u))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ct(e,"w")){const s=dn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_u)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Bp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,a=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},a="n";i&&(r.q=s,r.t=i),this.sendRequest(a,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,a=>{i&&setTimeout(()=>{i(a.s,a.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const a={p:t,d:s};r!==void 0&&(a.h=r),this.outstandingPuts_.push({action:e,request:a,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Io("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Bv&&(this.reconnectDelay_=Zn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Uv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+it.nextConnectionId_++,r=this.lastSessionId;let a=!1,l=null;const u=function(){l?l.close():(a=!0,s())},d=function(_){P(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(_)};this.realtime_={close:u,sendRequest:d};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);a?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=g&&g.token,l=new Vv(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,A=>{Fe(A+" ("+this.repoInfo_.toString()+")"),this.interrupt(qv)},r))}catch(_){this.log_("Failed to get token: "+_),a||(this.repoInfo_.nodeAdmin&&Fe(_),u())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Kl(this.interruptReasons_)&&(this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>fa(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ke("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gu&&(this.reconnectDelay_=_u,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ke("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ed.replace(/\./g,"-")]=1,Wu()?e["framework.cordova"]=1:Dp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Di.getInstance().currentlyOnline();return Kl(this.interruptReasons_)&&e}}it.nextPersistentConnectionId_=0;it.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new j(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new j(In,e),i=new j(In,t);return this.compare(s,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;class Kd extends rr{static get __EMPTY_NODE(){return hi}static set __EMPTY_NODE(e){hi=e}compare(e,t){return Dn(e.name,t.name)}isDefinedOn(e){throw An("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return j.MIN}maxPost(){return new j($t,hi)}makePost(e,t){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,hi)}toString(){return".key"}}const un=new Kd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?s(e.key,t):1,i&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ge.RED,this.left=i??Le.EMPTY_NODE,this.right=r??Le.EMPTY_NODE}copy(e,t,s,i,r){return new ge(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class jv{copy(e,t,s,i,r){return this}insert(e,t,s){return new ge(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,t=Le.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Le(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new di(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new di(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new di(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new di(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new jv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(n,e){return Dn(n.name,e.name)}function va(n,e){return Dn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co;function zv(n){Co=n}const Qd=function(n){return typeof n=="number"?"number:"+Ad(n):"string:"+n},Yd=function(n){if(n.isLeafNode()){const e=n.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ct(e,".sv"),"Priority must be a string or number.")}else P(n===Co||n.isEmpty(),"priority of unexpected type.");P(n===Co||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mu;class pe{static set __childrenNodeConstructor(e){mu=e}static get __childrenNodeConstructor(){return mu}constructor(e,t=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yd(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:q(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=q(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(P(s!==".priority"||bt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qd(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ad(this.value_):e+=this.value_,this.lazyHash_=Id(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(t),r=pe.VALUE_TYPE_ORDER.indexOf(s);return P(i>=0,"Unknown leaf type: "+t),P(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xd,Jd;function Hv(n){Xd=n}function Gv(n){Jd=n}class Wv extends rr{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Dn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return j.MIN}maxPost(){return new j($t,new pe("[PRIORITY-POST]",Jd))}makePost(e,t){const s=Xd(e);return new j(t,new pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const le=new Wv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=Math.log(2);class Qv{constructor(e){const t=r=>parseInt(Math.log(r)/Kv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vi=function(n,e,t,s){n.sort(e);const i=function(u,d){const f=d-u;let _,g;if(f===0)return null;if(f===1)return _=n[u],g=t?t(_):_,new ge(g,_.node,ge.BLACK,null,null);{const A=parseInt(f/2,10)+u,S=i(u,A),D=i(A+1,d);return _=n[A],g=t?t(_):_,new ge(g,_.node,ge.BLACK,S,D)}},r=function(u){let d=null,f=null,_=n.length;const g=function(S,D){const V=_-S,J=_;_-=S;const z=i(V+1,J),Q=n[V],oe=t?t(Q):Q;A(new ge(oe,Q.node,D,null,z))},A=function(S){d?(d.left=S,d=S):(f=S,d=S)};for(let S=0;S<u.count;++S){const D=u.nextBitIsOne(),V=Math.pow(2,u.count-(S+1));D?g(V,ge.BLACK):(g(V,ge.BLACK),g(V,ge.RED))}return f},a=new Qv(n.length),l=r(a);return new Le(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr;const Zt={};class st{static get Default(){return P(Zt&&le,"ChildrenNode.ts has not been loaded"),Gr=Gr||new st({".priority":Zt},{".priority":le}),Gr}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=dn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Le?t:null}hasIndex(e){return ct(this.indexSet_,e.toString())}addIndex(e,t){P(e!==un,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(j.Wrap);let a=r.getNext();for(;a;)i=i||e.isDefinedOn(a.node),s.push(a),a=r.getNext();let l;i?l=Vi(s,e.getCompare()):l=Zt;const u=e.toString(),d=Object.assign({},this.indexSet_);d[u]=e;const f=Object.assign({},this.indexes_);return f[u]=l,new st(f,d)}addToIndexes(e,t){const s=Ei(this.indexes_,(i,r)=>{const a=dn(this.indexSet_,r);if(P(a,"Missing index implementation for "+r),i===Zt)if(a.isDefinedOn(e.node)){const l=[],u=t.getIterator(j.Wrap);let d=u.getNext();for(;d;)d.name!==e.name&&l.push(d),d=u.getNext();return l.push(e),Vi(l,a.getCompare())}else return Zt;else{const l=t.get(e.name);let u=i;return l&&(u=u.remove(new j(e.name,l))),u.insert(e,e.node)}});return new st(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ei(this.indexes_,i=>{if(i===Zt)return i;{const r=t.get(e.name);return r?i.remove(new j(e.name,r)):i}});return new st(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es;class L{static get EMPTY_NODE(){return es||(es=new L(new Le(va),null,st.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Yd(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||es}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?es:t}}getChild(e){const t=q(e);return t===null?this:this.getImmediateChild(t).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(P(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new j(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const a=i.isEmpty()?es:this.priorityNode_;return new L(i,a,r)}}updateChild(e,t){const s=q(e);if(s===null)return t;{P(q(e)!==".priority"||bt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(te(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(le,(a,l)=>{t[a]=l.val(e),s++,r&&L.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):r=!1}),!e&&r&&i<2*s){const a=[];for(const l in t)a[l]=t[l];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qd(this.getPriority().val())+":"),this.forEachChild(le,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Id(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new j(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new j(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new j(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ls?-1:0}withIndex(e){if(e===un||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===un||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(le),i=t.getIterator(le);let r=s.getNext(),a=i.getNext();for(;r&&a;){if(r.name!==a.name||!r.node.equals(a.node))return!1;r=s.getNext(),a=i.getNext()}return r===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===un?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Yv extends L{constructor(){super(new Le(va),L.EMPTY_NODE,st.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Ls=new Yv;Object.defineProperties(j,{MIN:{value:new j(In,L.EMPTY_NODE)},MAX:{value:new j($t,Ls)}});Kd.__EMPTY_NODE=L.EMPTY_NODE;pe.__childrenNodeConstructor=L;zv(Ls);Gv(Ls);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=!0;function Ie(n,e=null){if(n===null)return L.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new pe(t,Ie(e))}if(!(n instanceof Array)&&Xv){const t=[];let s=!1;if(Ue(n,(a,l)=>{if(a.substring(0,1)!=="."){const u=Ie(l);u.isEmpty()||(s=s||!u.getPriority().isEmpty(),t.push(new j(a,u)))}}),t.length===0)return L.EMPTY_NODE;const r=Vi(t,$v,a=>a.name,va);if(s){const a=Vi(t,le.getCompare());return new L(r,Ie(e),new st({".priority":a},{".priority":le}))}else return new L(r,Ie(e),st.Default)}else{let t=L.EMPTY_NODE;return Ue(n,(s,i)=>{if(ct(n,s)&&s.substring(0,1)!=="."){const r=Ie(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Ie(e))}}Hv(Ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv extends rr{constructor(e){super(),this.indexPath_=e,P(!$(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Dn(e.name,t.name):r}makePost(e,t){const s=Ie(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new j(t,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Ls);return new j($t,e)}toString(){return Hd(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv extends rr{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Dn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,t){const s=Ie(e);return new j(t,s)}toString(){return".value"}}const eE=new Zv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n){return{type:"value",snapshotNode:n}}function wn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Cs(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function As(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function tE(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this.index_=e}updateChild(e,t,s,i,r,a){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(a!=null&&(s.isEmpty()?e.hasChild(t)?a.trackChildChange(Cs(t,l)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?a.trackChildChange(wn(t,s)):a.trackChildChange(As(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(le,(i,r)=>{t.hasChild(i)||s.trackChildChange(Cs(i,r))}),t.isLeafNode()||t.forEachChild(le,(i,r)=>{if(e.hasChild(i)){const a=e.getImmediateChild(i);a.equals(r)||s.trackChildChange(As(i,r,a))}else s.trackChildChange(wn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.indexedFilter_=new Ea(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rs.getStartPost_(e),this.endPost_=Rs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,a){return this.matches(new j(t,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,a)}updateFullNode(e,t,s){t.isLeafNode()&&(t=L.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return t.forEachChild(le,(a,l)=>{r.matches(new j(a,l))||(i=i.updateImmediateChild(a,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Rs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,a){return this.rangedFilter_.matches(new j(t,s))||(s=L.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,a):this.fullLimitUpdateChild_(e,t,s,r,a)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;r.hasNext()&&a<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),a++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let a=0;for(;r.hasNext();){const l=r.getNext();a<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?a++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let a;if(this.reverse_){const _=this.index_.getCompare();a=(g,A)=>_(A,g)}else a=this.index_.getCompare();const l=e;P(l.numChildren()===this.limit_,"");const u=new j(t,s),d=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(u);if(l.hasChild(t)){const _=l.getImmediateChild(t);let g=i.getChildAfterChild(this.index_,d,this.reverse_);for(;g!=null&&(g.name===t||l.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const A=g==null?1:a(g,u);if(f&&!s.isEmpty()&&A>=0)return r!=null&&r.trackChildChange(As(t,s,_)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Cs(t,_));const D=l.updateImmediateChild(t,L.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(wn(g.name,g.node)),D.updateImmediateChild(g.name,g.node)):D}}else return s.isEmpty()?e:f&&a(d,u)>=0?(r!=null&&(r.trackChildChange(Cs(d.name,d.node)),r.trackChildChange(wn(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(d.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:In}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$t}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new Ta;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sE(n){return n.loadsAllData()?new Ea(n.getIndex()):n.hasLimit()?new nE(n):new Rs(n)}function yu(n){const e={};if(n.isDefault())return e;let t;if(n.index_===le?t="$priority":n.index_===eE?t="$value":n.index_===un?t="$key":(P(n.index_ instanceof Jv,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=me(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=me(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+me(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=me(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+me(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function vu(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==le&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends jd{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ms("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const a=xi.getListenId_(e,s),l={};this.listens_[a]=l;const u=yu(e._queryParams);this.restRequest_(r+".json",u,(d,f)=>{let _=f;if(d===404&&(_=null,d=null),d===null&&this.onDataUpdate_(r,_,!1,s),dn(this.listens_,a)===l){let g;d?d===401?g="permission_denied":g="rest_error:"+d:g="ok",i(g,null)}})}unlisten(e,t){const s=xi.getListenId_(e,t);delete this.listens_[s]}get(e){const t=yu(e._queryParams),s=e._path.toString(),i=new zi;return this.restRequest_(s+".json",t,(r,a)=>{let l=a;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+jp(t);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=_s(l.responseText)}catch{Fe("Failed to parse JSON response for "+a+": "+l.responseText)}s(null,u)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+a+" Status: "+l.status),s(l.status);s=null}},l.open("GET",a,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(){return{value:null,children:new Map}}function ef(n,e,t){if($(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=q(e);n.children.has(s)||n.children.set(s,Oi());const i=n.children.get(s);e=te(e),ef(i,e,t)}}function Ao(n,e,t){n.value!==null?t(e,n.value):rE(n,(s,i)=>{const r=new ee(e.toString()+"/"+s);Ao(i,r,t)})}function rE(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ue(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=10*1e3,aE=30*1e3,lE=5*60*1e3;class cE{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new oE(e);const s=Eu+(aE-Eu)*Math.random();hs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Ue(e,(i,r)=>{r>0&&ct(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),hs(this.reportStats_.bind(this),Math.floor(Math.random()*2*lE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ze||(ze={}));function tf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ia(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wa(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ze.ACK_USER_WRITE,this.source=tf()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ee(e));return new Mi(X(),t,this.revert)}}else return P(q(this.path)===e,"operationForChild called for unrelated child."),new Mi(te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){this.source=e,this.path=t,this.type=ze.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new Ss(this.source,X()):new Ss(this.source,te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ze.OVERWRITE}operationForChild(e){return $(this.path)?new zt(this.source,X(),this.snap.getImmediateChild(e)):new zt(this.source,te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ze.MERGE}operationForChild(e){if($(this.path)){const t=this.children.subtree(new ee(e));return t.isEmpty()?null:t.value?new zt(this.source,X(),t.value):new bs(this.source,X(),t)}else return P(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bs(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const t=q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hE(n,e,t,s){const i=[],r=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&r.push(tE(a.childName,a.snapshotNode))}),ts(n,i,"child_removed",e,s,t),ts(n,i,"child_added",e,s,t),ts(n,i,"child_moved",r,s,t),ts(n,i,"child_changed",e,s,t),ts(n,i,"value",e,s,t),i}function ts(n,e,t,s,i,r){const a=s.filter(l=>l.type===t);a.sort((l,u)=>fE(n,l,u)),a.forEach(l=>{const u=dE(n,l,r);i.forEach(d=>{d.respondsTo(l.type)&&e.push(d.createEvent(u,n.query_))})})}function dE(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function fE(n,e,t){if(e.childName==null||t.childName==null)throw An("Should only compare child_ events.");const s=new j(e.childName,e.snapshotNode),i=new j(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(n,e){return{eventCache:n,serverCache:e}}function ds(n,e,t,s){return or(new Ht(e,t,s),n.serverCache)}function nf(n,e,t,s){return or(n.eventCache,new Ht(e,t,s))}function Ro(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Gt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr;const pE=()=>(Wr||(Wr=new Le(Zy)),Wr);class se{static fromObject(e){let t=new se(null);return Ue(e,(s,i)=>{t=t.set(new ee(s),i)}),t}constructor(e,t=pE()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:X(),value:this.value};if($(e))return null;{const s=q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(te(e),t);return r!=null?{path:de(new ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const t=q(e),s=this.children.get(t);return s!==null?s.subtree(te(e)):new se(null)}}set(e,t){if($(e))return new se(t,this.children);{const s=q(e),r=(this.children.get(s)||new se(null)).set(te(e),t),a=this.children.insert(s,r);return new se(this.value,a)}}remove(e){if($(e))return this.children.isEmpty()?new se(null):new se(null,this.children);{const t=q(e),s=this.children.get(t);if(s){const i=s.remove(te(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new se(null):new se(this.value,r)}else return this}}get(e){if($(e))return this.value;{const t=q(e),s=this.children.get(t);return s?s.get(te(e)):null}}setTree(e,t){if($(e))return t;{const s=q(e),r=(this.children.get(s)||new se(null)).setTree(te(e),t);let a;return r.isEmpty()?a=this.children.remove(s):a=this.children.insert(s,r),new se(this.value,a)}}fold(e){return this.fold_(X(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,X(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if($(e))return null;{const r=q(e),a=this.children.get(r);return a?a.findOnPath_(te(e),de(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,X(),t)}foreachOnPath_(e,t,s){if($(e))return this;{this.value&&s(t,this.value);const i=q(e),r=this.children.get(i);return r?r.foreachOnPath_(te(e),de(t,i),s):new se(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.writeTree_=e}static empty(){return new He(new se(null))}}function fs(n,e,t){if($(e))return new He(new se(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const a=Me(i,e);return r=r.updateChild(a,t),new He(n.writeTree_.set(i,r))}else{const i=new se(t),r=n.writeTree_.setTree(e,i);return new He(r)}}}function Tu(n,e,t){let s=n;return Ue(t,(i,r)=>{s=fs(s,de(e,i),r)}),s}function Iu(n,e){if($(e))return He.empty();{const t=n.writeTree_.setTree(e,new se(null));return new He(t)}}function So(n,e){return Kt(n,e)!=null}function Kt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Me(t.path,e)):null}function wu(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(le,(s,i)=>{e.push(new j(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new j(s,i.value))}),e}function Tt(n,e){if($(e))return n;{const t=Kt(n,e);return t!=null?new He(new se(t)):new He(n.writeTree_.subtree(e))}}function bo(n){return n.writeTree_.isEmpty()}function Cn(n,e){return sf(X(),n.writeTree_,e)}function sf(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=sf(de(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(de(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n,e){return lf(e,n)}function _E(n,e,t,s,i){P(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=fs(n.visibleWrites,e,t)),n.lastWriteId=s}function gE(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function mE(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);P(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,a=n.allWrites.length-1;for(;i&&a>=0;){const l=n.allWrites[a];l.visible&&(a>=t&&yE(l,s.path)?i=!1:$e(s.path,l.path)&&(r=!0)),a--}if(i){if(r)return vE(n),!0;if(s.snap)n.visibleWrites=Iu(n.visibleWrites,s.path);else{const l=s.children;Ue(l,u=>{n.visibleWrites=Iu(n.visibleWrites,de(s.path,u))})}return!0}else return!1}function yE(n,e){if(n.snap)return $e(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&$e(de(n.path,t),e))return!0;return!1}function vE(n){n.visibleWrites=rf(n.allWrites,EE,X()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function EE(n){return n.visible}function rf(n,e,t){let s=He.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const a=r.path;let l;if(r.snap)$e(t,a)?(l=Me(t,a),s=fs(s,l,r.snap)):$e(a,t)&&(l=Me(a,t),s=fs(s,X(),r.snap.getChild(l)));else if(r.children){if($e(t,a))l=Me(t,a),s=Tu(s,l,r.children);else if($e(a,t))if(l=Me(a,t),$(l))s=Tu(s,X(),r.children);else{const u=dn(r.children,q(l));if(u){const d=u.getChild(te(l));s=fs(s,X(),d)}}}else throw An("WriteRecord should have .snap or .children")}}return s}function of(n,e,t,s,i){if(!s&&!i){const r=Kt(n.visibleWrites,e);if(r!=null)return r;{const a=Tt(n.visibleWrites,e);if(bo(a))return t;if(t==null&&!So(a,X()))return null;{const l=t||L.EMPTY_NODE;return Cn(a,l)}}}else{const r=Tt(n.visibleWrites,e);if(!i&&bo(r))return t;if(!i&&t==null&&!So(r,X()))return null;{const a=function(d){return(d.visible||i)&&(!s||!~s.indexOf(d.writeId))&&($e(d.path,e)||$e(e,d.path))},l=rf(n.allWrites,a,e),u=t||L.EMPTY_NODE;return Cn(l,u)}}}function TE(n,e,t){let s=L.EMPTY_NODE;const i=Kt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(r,a)=>{s=s.updateImmediateChild(r,a)}),s;if(t){const r=Tt(n.visibleWrites,e);return t.forEachChild(le,(a,l)=>{const u=Cn(Tt(r,new ee(a)),l);s=s.updateImmediateChild(a,u)}),wu(r).forEach(a=>{s=s.updateImmediateChild(a.name,a.node)}),s}else{const r=Tt(n.visibleWrites,e);return wu(r).forEach(a=>{s=s.updateImmediateChild(a.name,a.node)}),s}}function IE(n,e,t,s,i){P(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,t);if(So(n.visibleWrites,r))return null;{const a=Tt(n.visibleWrites,r);return bo(a)?i.getChild(t):Cn(a,i.getChild(t))}}function wE(n,e,t,s){const i=de(e,t),r=Kt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const a=Tt(n.visibleWrites,i);return Cn(a,s.getNode().getImmediateChild(t))}else return null}function CE(n,e){return Kt(n.visibleWrites,e)}function AE(n,e,t,s,i,r,a){let l;const u=Tt(n.visibleWrites,e),d=Kt(u,X());if(d!=null)l=d;else if(t!=null)l=Cn(u,t);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const f=[],_=a.getCompare(),g=r?l.getReverseIteratorFrom(s,a):l.getIteratorFrom(s,a);let A=g.getNext();for(;A&&f.length<i;)_(A,s)!==0&&f.push(A),A=g.getNext();return f}else return[]}function RE(){return{visibleWrites:He.empty(),allWrites:[],lastWriteId:-1}}function Li(n,e,t,s){return of(n.writeTree,n.treePath,e,t,s)}function Aa(n,e){return TE(n.writeTree,n.treePath,e)}function Cu(n,e,t,s){return IE(n.writeTree,n.treePath,e,t,s)}function Fi(n,e){return CE(n.writeTree,de(n.treePath,e))}function SE(n,e,t,s,i,r){return AE(n.writeTree,n.treePath,e,t,s,i,r)}function Ra(n,e,t){return wE(n.writeTree,n.treePath,e,t)}function af(n,e){return lf(de(n.treePath,e),n.writeTree)}function lf(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;P(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),P(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,As(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Cs(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,wn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,As(s,e.snapshotNode,i.oldSnap));else throw An("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const cf=new PE;class Sa{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ht(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ra(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gt(this.viewCache_),r=SE(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(n){return{filter:n}}function kE(n,e){P(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function DE(n,e,t,s,i){const r=new bE;let a,l;if(t.type===ze.OVERWRITE){const d=t;d.source.fromUser?a=Po(n,e,d.path,d.snap,s,i,r):(P(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered()&&!$(d.path),a=Ui(n,e,d.path,d.snap,s,i,l,r))}else if(t.type===ze.MERGE){const d=t;d.source.fromUser?a=xE(n,e,d.path,d.children,s,i,r):(P(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered(),a=No(n,e,d.path,d.children,s,i,l,r))}else if(t.type===ze.ACK_USER_WRITE){const d=t;d.revert?a=LE(n,e,d.path,s,i,r):a=OE(n,e,d.path,d.affectedTree,s,i,r)}else if(t.type===ze.LISTEN_COMPLETE)a=ME(n,e,t.path,s,r);else throw An("Unknown operation type: "+t.type);const u=r.getChanges();return VE(e,a,u),{viewCache:a,changes:u}}function VE(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ro(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Zd(Ro(e)))}}function uf(n,e,t,s,i,r){const a=e.eventCache;if(Fi(s,t)!=null)return e;{let l,u;if($(t))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=Gt(e),f=d instanceof L?d:L.EMPTY_NODE,_=Aa(s,f);l=n.filter.updateFullNode(e.eventCache.getNode(),_,r)}else{const d=Li(s,Gt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const d=q(t);if(d===".priority"){P(bt(t)===1,"Can't have a priority with additional path components");const f=a.getNode();u=e.serverCache.getNode();const _=Cu(s,t,f,u);_!=null?l=n.filter.updatePriority(f,_):l=a.getNode()}else{const f=te(t);let _;if(a.isCompleteForChild(d)){u=e.serverCache.getNode();const g=Cu(s,t,a.getNode(),u);g!=null?_=a.getNode().getImmediateChild(d).updateChild(f,g):_=a.getNode().getImmediateChild(d)}else _=Ra(s,d,e.serverCache);_!=null?l=n.filter.updateChild(a.getNode(),d,_,f,i,r):l=a.getNode()}}return ds(e,l,a.isFullyInitialized()||$(t),n.filter.filtersNodes())}}function Ui(n,e,t,s,i,r,a,l){const u=e.serverCache;let d;const f=a?n.filter:n.filter.getIndexedFilter();if($(t))d=f.updateFullNode(u.getNode(),s,null);else if(f.filtersNodes()&&!u.isFiltered()){const A=u.getNode().updateChild(t,s);d=f.updateFullNode(u.getNode(),A,null)}else{const A=q(t);if(!u.isCompleteForPath(t)&&bt(t)>1)return e;const S=te(t),V=u.getNode().getImmediateChild(A).updateChild(S,s);A===".priority"?d=f.updatePriority(u.getNode(),V):d=f.updateChild(u.getNode(),A,V,S,cf,null)}const _=nf(e,d,u.isFullyInitialized()||$(t),f.filtersNodes()),g=new Sa(i,_,r);return uf(n,_,t,i,g,l)}function Po(n,e,t,s,i,r,a){const l=e.eventCache;let u,d;const f=new Sa(i,e,r);if($(t))d=n.filter.updateFullNode(e.eventCache.getNode(),s,a),u=ds(e,d,!0,n.filter.filtersNodes());else{const _=q(t);if(_===".priority")d=n.filter.updatePriority(e.eventCache.getNode(),s),u=ds(e,d,l.isFullyInitialized(),l.isFiltered());else{const g=te(t),A=l.getNode().getImmediateChild(_);let S;if($(g))S=s;else{const D=f.getCompleteChild(_);D!=null?zd(g)===".priority"&&D.getChild(Gd(g)).isEmpty()?S=D:S=D.updateChild(g,s):S=L.EMPTY_NODE}if(A.equals(S))u=e;else{const D=n.filter.updateChild(l.getNode(),_,S,g,f,a);u=ds(e,D,l.isFullyInitialized(),n.filter.filtersNodes())}}}return u}function Au(n,e){return n.eventCache.isCompleteForChild(e)}function xE(n,e,t,s,i,r,a){let l=e;return s.foreach((u,d)=>{const f=de(t,u);Au(e,q(f))&&(l=Po(n,l,f,d,i,r,a))}),s.foreach((u,d)=>{const f=de(t,u);Au(e,q(f))||(l=Po(n,l,f,d,i,r,a))}),l}function Ru(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function No(n,e,t,s,i,r,a,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,d;$(t)?d=s:d=new se(null).setTree(t,s);const f=e.serverCache.getNode();return d.children.inorderTraversal((_,g)=>{if(f.hasChild(_)){const A=e.serverCache.getNode().getImmediateChild(_),S=Ru(n,A,g);u=Ui(n,u,new ee(_),S,i,r,a,l)}}),d.children.inorderTraversal((_,g)=>{const A=!e.serverCache.isCompleteForChild(_)&&g.value===null;if(!f.hasChild(_)&&!A){const S=e.serverCache.getNode().getImmediateChild(_),D=Ru(n,S,g);u=Ui(n,u,new ee(_),D,i,r,a,l)}}),u}function OE(n,e,t,s,i,r,a){if(Fi(i,t)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(s.value!=null){if($(t)&&u.isFullyInitialized()||u.isCompleteForPath(t))return Ui(n,e,t,u.getNode().getChild(t),i,r,l,a);if($(t)){let d=new se(null);return u.getNode().forEachChild(un,(f,_)=>{d=d.set(new ee(f),_)}),No(n,e,t,d,i,r,l,a)}else return e}else{let d=new se(null);return s.foreach((f,_)=>{const g=de(t,f);u.isCompleteForPath(g)&&(d=d.set(f,u.getNode().getChild(g)))}),No(n,e,t,d,i,r,l,a)}}function ME(n,e,t,s,i){const r=e.serverCache,a=nf(e,r.getNode(),r.isFullyInitialized()||$(t),r.isFiltered());return uf(n,a,t,s,cf,i)}function LE(n,e,t,s,i,r){let a;if(Fi(s,t)!=null)return e;{const l=new Sa(s,e,i),u=e.eventCache.getNode();let d;if($(t)||q(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Li(s,Gt(e));else{const _=e.serverCache.getNode();P(_ instanceof L,"serverChildren would be complete if leaf node"),f=Aa(s,_)}f=f,d=n.filter.updateFullNode(u,f,r)}else{const f=q(t);let _=Ra(s,f,e.serverCache);_==null&&e.serverCache.isCompleteForChild(f)&&(_=u.getImmediateChild(f)),_!=null?d=n.filter.updateChild(u,f,_,te(t),l,r):e.eventCache.getNode().hasChild(f)?d=n.filter.updateChild(u,f,L.EMPTY_NODE,te(t),l,r):d=u,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Li(s,Gt(e)),a.isLeafNode()&&(d=n.filter.updateFullNode(d,a,r)))}return a=e.serverCache.isFullyInitialized()||Fi(s,X())!=null,ds(e,d,a,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ea(s.getIndex()),r=sE(s);this.processor_=NE(r);const a=t.serverCache,l=t.eventCache,u=i.updateFullNode(L.EMPTY_NODE,a.getNode(),null),d=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),f=new Ht(u,a.isFullyInitialized(),i.filtersNodes()),_=new Ht(d,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=or(_,f),this.eventGenerator_=new uE(this.query_)}get query(){return this.query_}}function UE(n){return n.viewCache_.serverCache.getNode()}function BE(n,e){const t=Gt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!$(e)&&!t.getImmediateChild(q(e)).isEmpty())?t.getChild(e):null}function Su(n){return n.eventRegistrations_.length===0}function qE(n,e){n.eventRegistrations_.push(e)}function bu(n,e,t){const s=[];if(t){P(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const a=r.createCancelEvent(t,i);a&&s.push(a)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const a=n.eventRegistrations_[r];if(!a.matches(e))i.push(a);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Pu(n,e,t,s){e.type===ze.MERGE&&e.source.queryId!==null&&(P(Gt(n.viewCache_),"We should always have a full cache before handling merges"),P(Ro(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=DE(n.processor_,i,e,t,s);return kE(n.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,hf(n,r.changes,r.viewCache.eventCache.getNode(),null)}function jE(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(le,(r,a)=>{s.push(wn(r,a))}),t.isFullyInitialized()&&s.push(Zd(t.getNode())),hf(n,s,t.getNode(),e)}function hf(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return hE(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi;class $E{constructor(){this.views=new Map}}function zE(n){P(!Bi,"__referenceConstructor has already been defined"),Bi=n}function HE(){return P(Bi,"Reference.ts has not been loaded"),Bi}function GE(n){return n.views.size===0}function ba(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return P(r!=null,"SyncTree gave us an op for an invalid query."),Pu(r,e,t,s)}else{let r=[];for(const a of n.views.values())r=r.concat(Pu(a,e,t,s));return r}}function WE(n,e,t,s,i){const r=e._queryIdentifier,a=n.views.get(r);if(!a){let l=Li(t,i?s:null),u=!1;l?u=!0:s instanceof L?(l=Aa(t,s),u=!1):(l=L.EMPTY_NODE,u=!1);const d=or(new Ht(l,u,!1),new Ht(s,i,!1));return new FE(e,d)}return a}function KE(n,e,t,s,i,r){const a=WE(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,a),qE(a,t),jE(a,t)}function QE(n,e,t,s){const i=e._queryIdentifier,r=[];let a=[];const l=Pt(n);if(i==="default")for(const[u,d]of n.views.entries())a=a.concat(bu(d,t,s)),Su(d)&&(n.views.delete(u),d.query._queryParams.loadsAllData()||r.push(d.query));else{const u=n.views.get(i);u&&(a=a.concat(bu(u,t,s)),Su(u)&&(n.views.delete(i),u.query._queryParams.loadsAllData()||r.push(u.query)))}return l&&!Pt(n)&&r.push(new(HE())(e._repo,e._path)),{removed:r,events:a}}function df(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function hn(n,e){let t=null;for(const s of n.views.values())t=t||BE(s,e);return t}function ff(n,e){if(e._queryParams.loadsAllData())return ar(n);{const s=e._queryIdentifier;return n.views.get(s)}}function pf(n,e){return ff(n,e)!=null}function Pt(n){return ar(n)!=null}function ar(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi;function YE(n){P(!qi,"__referenceConstructor has already been defined"),qi=n}function XE(){return P(qi,"Reference.ts has not been loaded"),qi}let JE=1;class Nu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new se(null),this.pendingWriteTree_=RE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _f(n,e,t,s,i){return _E(n.pendingWriteTree_,e,t,s,i),i?Fs(n,new zt(tf(),e,t)):[]}function Ut(n,e,t=!1){const s=gE(n.pendingWriteTree_,e);if(mE(n.pendingWriteTree_,e)){let r=new se(null);return s.snap!=null?r=r.set(X(),!0):Ue(s.children,a=>{r=r.set(new ee(a),!0)}),Fs(n,new Mi(s.path,r,t))}else return[]}function lr(n,e,t){return Fs(n,new zt(Ia(),e,t))}function ZE(n,e,t){const s=se.fromObject(t);return Fs(n,new bs(Ia(),e,s))}function eT(n,e){return Fs(n,new Ss(Ia(),e))}function tT(n,e,t){const s=Na(n,t);if(s){const i=ka(s),r=i.path,a=i.queryId,l=Me(r,e),u=new Ss(wa(a),l);return Da(n,r,u)}else return[]}function ko(n,e,t,s,i=!1){const r=e._path,a=n.syncPointTree_.get(r);let l=[];if(a&&(e._queryIdentifier==="default"||pf(a,e))){const u=QE(a,e,t,s);GE(a)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const d=u.removed;if(l=u.events,!i){const f=d.findIndex(g=>g._queryParams.loadsAllData())!==-1,_=n.syncPointTree_.findOnPath(r,(g,A)=>Pt(A));if(f&&!_){const g=n.syncPointTree_.subtree(r);if(!g.isEmpty()){const A=iT(g);for(let S=0;S<A.length;++S){const D=A[S],V=D.query,J=yf(n,D);n.listenProvider_.startListening(ps(V),ji(n,V),J.hashFn,J.onComplete)}}}!_&&d.length>0&&!s&&(f?n.listenProvider_.stopListening(ps(e),null):d.forEach(g=>{const A=n.queryToTagMap.get(cr(g));n.listenProvider_.stopListening(ps(g),A)}))}rT(n,d)}return l}function nT(n,e,t,s){const i=Na(n,s);if(i!=null){const r=ka(i),a=r.path,l=r.queryId,u=Me(a,e),d=new zt(wa(l),u,t);return Da(n,a,d)}else return[]}function sT(n,e,t,s){const i=Na(n,s);if(i){const r=ka(i),a=r.path,l=r.queryId,u=Me(a,e),d=se.fromObject(t),f=new bs(wa(l),u,d);return Da(n,a,f)}else return[]}function ku(n,e,t,s=!1){const i=e._path;let r=null,a=!1;n.syncPointTree_.foreachOnPath(i,(g,A)=>{const S=Me(g,i);r=r||hn(A,S),a=a||Pt(A)});let l=n.syncPointTree_.get(i);l?(a=a||Pt(l),r=r||hn(l,X())):(l=new $E,n.syncPointTree_=n.syncPointTree_.set(i,l));let u;r!=null?u=!0:(u=!1,r=L.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((A,S)=>{const D=hn(S,X());D&&(r=r.updateImmediateChild(A,D))}));const d=pf(l,e);if(!d&&!e._queryParams.loadsAllData()){const g=cr(e);P(!n.queryToTagMap.has(g),"View does not exist, but we have a tag");const A=oT();n.queryToTagMap.set(g,A),n.tagToQueryMap.set(A,g)}const f=Ca(n.pendingWriteTree_,i);let _=KE(l,e,t,f,r,u);if(!d&&!a&&!s){const g=ff(l,e);_=_.concat(aT(n,e,g))}return _}function Pa(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(a,l)=>{const u=Me(a,e),d=hn(l,u);if(d)return d});return of(i,e,r,t,!0)}function Fs(n,e){return gf(e,n.syncPointTree_,null,Ca(n.pendingWriteTree_,X()))}function gf(n,e,t,s){if($(n.path))return mf(n,e,t,s);{const i=e.get(X());t==null&&i!=null&&(t=hn(i,X()));let r=[];const a=q(n.path),l=n.operationForChild(a),u=e.children.get(a);if(u&&l){const d=t?t.getImmediateChild(a):null,f=af(s,a);r=r.concat(gf(l,u,d,f))}return i&&(r=r.concat(ba(i,n,s,t))),r}}function mf(n,e,t,s){const i=e.get(X());t==null&&i!=null&&(t=hn(i,X()));let r=[];return e.children.inorderTraversal((a,l)=>{const u=t?t.getImmediateChild(a):null,d=af(s,a),f=n.operationForChild(a);f&&(r=r.concat(mf(f,l,u,d)))}),i&&(r=r.concat(ba(i,n,s,t))),r}function yf(n,e){const t=e.query,s=ji(n,t);return{hashFn:()=>(UE(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?tT(n,t._path,s):eT(n,t._path);{const r=nv(i,t);return ko(n,t,null,r)}}}}function ji(n,e){const t=cr(e);return n.queryToTagMap.get(t)}function cr(n){return n._path.toString()+"$"+n._queryIdentifier}function Na(n,e){return n.tagToQueryMap.get(e)}function ka(n){const e=n.indexOf("$");return P(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ee(n.substr(0,e))}}function Da(n,e,t){const s=n.syncPointTree_.get(e);P(s,"Missing sync point for query tag that we're tracking");const i=Ca(n.pendingWriteTree_,e);return ba(s,t,i,null)}function iT(n){return n.fold((e,t,s)=>{if(t&&Pt(t))return[ar(t)];{let i=[];return t&&(i=df(t)),Ue(s,(r,a)=>{i=i.concat(a)}),i}})}function ps(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(XE())(n._repo,n._path):n}function rT(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=cr(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function oT(){return JE++}function aT(n,e,t){const s=e._path,i=ji(n,e),r=yf(n,t),a=n.listenProvider_.startListening(ps(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)P(!Pt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const u=l.fold((d,f,_)=>{if(!$(d)&&f&&Pt(f))return[ar(f).query];{let g=[];return f&&(g=g.concat(df(f).map(A=>A.query))),Ue(_,(A,S)=>{g=g.concat(S)}),g}});for(let d=0;d<u.length;++d){const f=u[d];n.listenProvider_.stopListening(ps(f),ji(n,f))}}return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Va(t)}node(){return this.node_}}class xa{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=de(this.path_,e);return new xa(this.syncTree_,t)}node(){return Pa(this.syncTree_,this.path_)}}const lT=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Du=function(n,e,t){if(!n||typeof n!="object")return n;if(P(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return cT(n[".sv"],e,t);if(typeof n[".sv"]=="object")return uT(n[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},cT=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:P(!1,"Unexpected server value: "+n)}},uT=function(n,e,t){n.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&P(!1,"Unexpected increment value: "+s);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const a=i.getValue();return typeof a!="number"?s:a+s},hT=function(n,e,t,s){return Oa(e,new xa(t,n),s)},vf=function(n,e,t){return Oa(n,new Va(e),t)};function Oa(n,e,t){const s=n.getPriority().val(),i=Du(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const a=n,l=Du(a.getValue(),e,t);return l!==a.getValue()||i!==a.getPriority().val()?new pe(l,Ie(i)):n}else{const a=n;return r=a,i!==a.getPriority().val()&&(r=r.updatePriority(new pe(i))),a.forEachChild(le,(l,u)=>{const d=Oa(u,e.getImmediateChild(l),t);d!==u&&(r=r.updateImmediateChild(l,d))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function La(n,e){let t=e instanceof ee?e:new ee(e),s=n,i=q(t);for(;i!==null;){const r=dn(s.node.children,i)||{children:{},childCount:0};s=new Ma(i,s,r),t=te(t),i=q(t)}return s}function xn(n){return n.node.value}function Ef(n,e){n.node.value=e,Do(n)}function Tf(n){return n.node.childCount>0}function dT(n){return xn(n)===void 0&&!Tf(n)}function ur(n,e){Ue(n.node.children,(t,s)=>{e(new Ma(t,n,s))})}function If(n,e,t,s){t&&e(n),ur(n,i=>{If(i,e,!0)})}function fT(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Us(n){return new ee(n.parent===null?n.name:Us(n.parent)+"/"+n.name)}function Do(n){n.parent!==null&&pT(n.parent,n.name,n)}function pT(n,e,t){const s=dT(t),i=ct(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Do(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Do(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=/[\[\].#$\/\u0000-\u001F\u007F]/,gT=/[\[\].#$\u0000-\u001F\u007F]/,Kr=10*1024*1024,wf=function(n){return typeof n=="string"&&n.length!==0&&!_T.test(n)},Cf=function(n){return typeof n=="string"&&n.length!==0&&!gT.test(n)},mT=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Cf(n)},Af=function(n,e,t,s){s&&e===void 0||Fa(Mo(n,"value"),e,t)},Fa=function(n,e,t){const s=t instanceof ee?new Ov(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Mt(s));if(typeof e=="function")throw new Error(n+"contains a function "+Mt(s)+" with contents = "+e.toString());if(wd(e))throw new Error(n+"contains "+e.toString()+" "+Mt(s));if(typeof e=="string"&&e.length>Kr/3&&Hi(e)>Kr)throw new Error(n+"contains a string greater than "+Kr+" utf8 bytes "+Mt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ue(e,(a,l)=>{if(a===".value")i=!0;else if(a!==".priority"&&a!==".sv"&&(r=!0,!wf(a)))throw new Error(n+" contains an invalid key ("+a+") "+Mt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Mv(s,a),Fa(n,l,s),Lv(s)}),i&&r)throw new Error(n+' contains ".value" child '+Mt(s)+" in addition to actual children.")}},Rf=function(n,e,t,s){if(!Cf(t))throw new Error(Mo(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yT=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Rf(n,e,t)},Sf=function(n,e){if(q(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},vT=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!mT(t))throw new Error(Mo(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ua(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ma(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function bf(n,e,t){Ua(n,t),Pf(n,s=>ma(s,e))}function lt(n,e,t){Ua(n,t),Pf(n,s=>$e(s,e)||$e(e,s))}function Pf(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(TT(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function TT(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();us&&ke("event: "+t.toString()),Vn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="repo_interrupt",wT=25;class CT{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ET,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oi(),this.transactionQueueTree_=new Ma,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AT(n,e,t){if(n.stats_=_a(n.repoInfo_),n.forceRestClient_||ov())n.server_=new xi(n.repoInfo_,(s,i,r,a)=>{Vu(n,s,i,r,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>xu(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new it(n.repoInfo_,e,(s,i,r,a)=>{Vu(n,s,i,r,a)},s=>{xu(n,s)},s=>{RT(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=hv(n.repoInfo_,()=>new cE(n.stats_,n.server_)),n.infoData_=new iE,n.infoSyncTree_=new Nu({startListening:(s,i,r,a)=>{let l=[];const u=n.infoData_.getNode(s._path);return u.isEmpty()||(l=lr(n.infoSyncTree_,s._path,u),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),qa(n,"connected",!1),n.serverSyncTree_=new Nu({startListening:(s,i,r,a)=>(n.server_.listen(s,r,i,(l,u)=>{const d=a(l,u);lt(n.eventQueue_,s._path,d)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Nf(n){const t=n.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ba(n){return lT({timestamp:Nf(n)})}function Vu(n,e,t,s,i){n.dataUpdateCount++;const r=new ee(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(i)if(s){const u=Ei(t,d=>Ie(d));a=sT(n.serverSyncTree_,r,u,i)}else{const u=Ie(t);a=nT(n.serverSyncTree_,r,u,i)}else if(s){const u=Ei(t,d=>Ie(d));a=ZE(n.serverSyncTree_,r,u)}else{const u=Ie(t);a=lr(n.serverSyncTree_,r,u)}let l=r;a.length>0&&(l=hr(n,r)),lt(n.eventQueue_,l,a)}function xu(n,e){qa(n,"connected",e),e===!1&&bT(n)}function RT(n,e){Ue(e,(t,s)=>{qa(n,t,s)})}function qa(n,e,t){const s=new ee("/.info/"+e),i=Ie(t);n.infoData_.updateSnapshot(s,i);const r=lr(n.infoSyncTree_,s,i);lt(n.eventQueue_,s,r)}function kf(n){return n.nextWriteId_++}function ST(n,e,t,s,i){ja(n,"set",{path:e.toString(),value:t,priority:s});const r=Ba(n),a=Ie(t,s),l=Pa(n.serverSyncTree_,e),u=vf(a,l,r),d=kf(n),f=_f(n.serverSyncTree_,e,u,d,!0);Ua(n.eventQueue_,f),n.server_.put(e.toString(),a.val(!0),(g,A)=>{const S=g==="ok";S||Fe("set at "+e+" failed: "+g);const D=Ut(n.serverSyncTree_,d,!S);lt(n.eventQueue_,e,D),DT(n,i,g,A)});const _=Mf(n,e);hr(n,_),lt(n.eventQueue_,_,[])}function bT(n){ja(n,"onDisconnectEvents");const e=Ba(n),t=Oi();Ao(n.onDisconnect_,X(),(i,r)=>{const a=hT(i,r,n.serverSyncTree_,e);ef(t,i,a)});let s=[];Ao(t,X(),(i,r)=>{s=s.concat(lr(n.serverSyncTree_,i,r));const a=Mf(n,i);hr(n,a)}),n.onDisconnect_=Oi(),lt(n.eventQueue_,X(),s)}function PT(n,e,t){let s;q(e._path)===".info"?s=ku(n.infoSyncTree_,e,t):s=ku(n.serverSyncTree_,e,t),bf(n.eventQueue_,e._path,s)}function NT(n,e,t){let s;q(e._path)===".info"?s=ko(n.infoSyncTree_,e,t):s=ko(n.serverSyncTree_,e,t),bf(n.eventQueue_,e._path,s)}function kT(n){n.persistentConnection_&&n.persistentConnection_.interrupt(IT)}function ja(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ke(t,...e)}function DT(n,e,t,s){e&&Vn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const a=new Error(r);a.code=i,e(a)}})}function Df(n,e,t){return Pa(n.serverSyncTree_,e,t)||L.EMPTY_NODE}function $a(n,e=n.transactionQueueTree_){if(e||dr(n,e),xn(e)){const t=xf(n,e);P(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&VT(n,Us(e),t)}else Tf(e)&&ur(e,t=>{$a(n,t)})}function VT(n,e,t){const s=t.map(d=>d.currentWriteId),i=Df(n,e,s);let r=i;const a=i.hash();for(let d=0;d<t.length;d++){const f=t[d];P(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const _=Me(e,f.path);r=r.updateChild(_,f.currentOutputSnapshotRaw)}const l=r.val(!0),u=e;n.server_.put(u.toString(),l,d=>{ja(n,"transaction put response",{path:u.toString(),status:d});let f=[];if(d==="ok"){const _=[];for(let g=0;g<t.length;g++)t[g].status=2,f=f.concat(Ut(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&_.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();dr(n,La(n.transactionQueueTree_,e)),$a(n,n.transactionQueueTree_),lt(n.eventQueue_,e,f);for(let g=0;g<_.length;g++)Vn(_[g])}else{if(d==="datastale")for(let _=0;_<t.length;_++)t[_].status===3?t[_].status=4:t[_].status=0;else{Fe("transaction at "+u.toString()+" failed: "+d);for(let _=0;_<t.length;_++)t[_].status=4,t[_].abortReason=d}hr(n,e)}},a)}function hr(n,e){const t=Vf(n,e),s=Us(t),i=xf(n,t);return xT(n,i,s),s}function xT(n,e,t){if(e.length===0)return;const s=[];let i=[];const a=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],d=Me(t,u.path);let f=!1,_;if(P(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)f=!0,_=u.abortReason,i=i.concat(Ut(n.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=wT)f=!0,_="maxretry",i=i.concat(Ut(n.serverSyncTree_,u.currentWriteId,!0));else{const g=Df(n,u.path,a);u.currentInputSnapshot=g;const A=e[l].update(g.val());if(A!==void 0){Fa("transaction failed: Data returned ",A,u.path);let S=Ie(A);typeof A=="object"&&A!=null&&ct(A,".priority")||(S=S.updatePriority(g.getPriority()));const V=u.currentWriteId,J=Ba(n),z=vf(S,g,J);u.currentOutputSnapshotRaw=S,u.currentOutputSnapshotResolved=z,u.currentWriteId=kf(n),a.splice(a.indexOf(V),1),i=i.concat(_f(n.serverSyncTree_,u.path,z,u.currentWriteId,u.applyLocally)),i=i.concat(Ut(n.serverSyncTree_,V,!0))}else f=!0,_="nodata",i=i.concat(Ut(n.serverSyncTree_,u.currentWriteId,!0))}lt(n.eventQueue_,t,i),i=[],f&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(_==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(_),!1,null))))}dr(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Vn(s[l]);$a(n,n.transactionQueueTree_)}function Vf(n,e){let t,s=n.transactionQueueTree_;for(t=q(e);t!==null&&xn(s)===void 0;)s=La(s,t),e=te(e),t=q(e);return s}function xf(n,e){const t=[];return Of(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Of(n,e,t){const s=xn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);ur(e,i=>{Of(n,i,t)})}function dr(n,e){const t=xn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Ef(e,t.length>0?t:void 0)}ur(e,s=>{dr(n,s)})}function Mf(n,e){const t=Us(Vf(n,e)),s=La(n.transactionQueueTree_,e);return fT(s,i=>{Qr(n,i)}),Qr(n,s),If(s,i=>{Qr(n,i)}),t}function Qr(n,e){const t=xn(e);if(t){const s=[];let i=[],r=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(P(r===a-1,"All SENT items should be at beginning of queue."),r=a,t[a].status=3,t[a].abortReason="set"):(P(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),i=i.concat(Ut(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&s.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ef(e,void 0):t.length=r+1,lt(n.eventQueue_,Us(e),i);for(let a=0;a<s.length;a++)Vn(s[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function MT(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Fe(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ou=function(n,e){const t=LT(n),s=t.namespace;t.domain==="firebase.com"&&at(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&at("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Xy();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Od(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new ee(t.pathString)}},LT=function(n){let e="",t="",s="",i="",r="",a=!0,l="https",u=443;if(typeof n=="string"){let d=n.indexOf("//");d>=0&&(l=n.substring(0,d-1),n=n.substring(d+2));let f=n.indexOf("/");f===-1&&(f=n.length);let _=n.indexOf("?");_===-1&&(_=n.length),e=n.substring(0,Math.min(f,_)),f<_&&(i=OT(n.substring(f,_)));const g=MT(n.substring(Math.min(n.length,_)));d=e.indexOf(":"),d>=0?(a=l==="https"||l==="wss",u=parseInt(e.substring(d+1),10)):d=e.length;const A=e.slice(0,d);if(A.toLowerCase()==="localhost")t="localhost";else if(A.split(".").length<=2)t=A;else{const S=e.indexOf(".");s=e.substring(0,S).toLowerCase(),t=e.substring(S+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:u,domain:t,subdomain:s,secure:a,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",FT=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Mu.charAt(t%64),t=Math.floor(t/64);P(t===0,"Cannot push at time == 0");let a=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)a+=Mu.charAt(e[i]);return P(a.length===20,"nextPushId: Length should be 20."),a}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class BT{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return $(this._path)?null:zd(this._path)}get ref(){return new Nt(this._repo,this._path)}get _queryIdentifier(){const e=vu(this._queryParams),t=fa(e);return t==="{}"?"default":t}get _queryObject(){return vu(this._queryParams)}isEqual(e){if(e=Ye(e),!(e instanceof za))return!1;const t=this._repo===e._repo,s=ma(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+xv(this._path)}}class Nt extends za{constructor(e,t){super(e,t,new Ta,!1)}get parent(){const e=Gd(this._path);return e===null?null:new Nt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $i{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ee(e),s=Ps(this.ref,e);return new $i(this._node.getChild(t),s,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new $i(i,Ps(this.ref,s),le)))}hasChild(e){const t=new ee(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function aI(n,e){return n=Ye(n),n._checkNotDeleted("ref"),Ps(n._root,e)}function Ps(n,e){return n=Ye(n),q(n._path)===null?yT("child","path",e):Rf("child","path",e),new Nt(n._repo,de(n._path,e))}function lI(n,e){n=Ye(n),Sf("push",n._path),Af("push",e,n._path,!0);const t=Nf(n._repo),s=FT(t),i=Ps(n,s),r=Ps(n,s);let a;return e!=null?a=jT(r,e).then(()=>r):a=Promise.resolve(r),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function jT(n,e){n=Ye(n),Sf("set",n._path),Af("set",e,n._path,!1);const t=new zi;return ST(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Ha{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new UT("value",this,new $i(e.snapshotNode,new Nt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new BT(this,e,t):null}matches(e){return e instanceof Ha?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function $T(n,e,t,s,i){const r=new qT(t,void 0),a=new Ha(r);return PT(n._repo,n,a),()=>NT(n._repo,n,a)}function cI(n,e,t,s){return $T(n,"value",e)}zE(Nt);YE(Nt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="FIREBASE_DATABASE_EMULATOR_HOST",Vo={};let HT=!1;function GT(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),a=Ns(r);n.repoInfo_=new Od(e,a,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function WT(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||at("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=Ou(r,i),l=a.repoInfo,u;typeof process<"u"&&tu&&(u=tu[zT]),u?(r=`http://${u}?ns=${l.namespace}`,a=Ou(r,i),l=a.repoInfo):a.repoInfo.secure;const d=new lv(n.name,n.options,e);vT("Invalid Firebase Database URL",a),$(a.path)||at("Database URL must point to the root of a Firebase Database (not including a child path).");const f=QT(l,n,d,new av(n,t));return new YT(f,n)}function KT(n,e){const t=Vo[e];(!t||t[n.key]!==n)&&at(`Database ${e}(${n.repoInfo_}) has already been deleted.`),kT(n),delete t[n.key]}function QT(n,e,t,s){let i=Vo[e.name];i||(i={},Vo[e.name]=i);let r=i[n.toURLString()];return r&&at("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new CT(n,HT,t,s),i[n.toURLString()]=r,r}class YT{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Nt(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&at("Cannot call "+e+" on a deleted database.")}}function uI(n=Zu(),e){const t=Yu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=qu("database");s&&XT(t,...s)}return t}function XT(n,e,t,s={}){n=Ye(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&gs(s,r.repoInfo_.emulatorOptions))return;at("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let a;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&at('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new yi(yi.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:zu(s.mockUserToken,n.app.options.projectId);a=new yi(l)}Ns(e)&&($u(e),Hu("Database",!0)),GT(r,i,s,a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(n){Hy(Ju),ms(new fn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return WT(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),yt(nu,su,n),yt(nu,su,"esm2017")}it.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};it.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};JT();export{sI as a,oI as b,nI as c,uI as g,D_ as i,cI as o,lI as p,iI as q,aI as r,rI as w};
