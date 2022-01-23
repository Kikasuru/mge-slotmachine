var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function i(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(i)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function l(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function u(e,...n){if(null==e)return t;const i=e.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}function d(t,e,n){t.$$.on_destroy.push(u(e,n))}function h(t,e,n,i){if(t){const s=p(t,e,n,i);return t[0](s)}}function p(t,e,i,s){return t[1]&&s?n(i.ctx.slice(),t[1](s(e))):i.ctx}function f(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let i=0;i<n;i+=1)t[i]=e.dirty[i]|s[i];return t}return e.dirty|s}return e.dirty}function m(t,e,n,i,s,r){if(s){const o=p(e,n,i,r);t.p(o,s)}}function g(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function y(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function v(t,e){const n={};e=new Set(e);for(const i in t)e.has(i)||"$"===i[0]||(n[i]=t[i]);return n}function b(t,e,n){return t.set(n),e}function $(e){return e&&o(e.destroy)?e.destroy:t}const I="undefined"!=typeof window;let _=I?()=>window.performance.now():()=>Date.now(),E=I?t=>requestAnimationFrame(t):t;const w=new Set;function T(t){w.forEach((e=>{e.c(t)||(w.delete(e),e.f())})),0!==w.size&&E(T)}function S(t,e){t.appendChild(e)}function A(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function C(t){const e=O("style");return function(t,e){S(t.head||t,e)}(A(t),e),e}function x(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function O(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function R(){return L(" ")}function N(){return L("")}function D(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function M(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)null==e[i]?t.removeAttribute(i):"style"===i?t.style.cssText=e[i]:"__value"===i?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:M(t,i,e[i])}function F(t,e){for(const n in e)M(t,n,e[n])}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function V(t,e){t.value=null==e?"":e}function B(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function H(t,e,n){t.classList[n?"add":"remove"](e)}const j=new Set;let q,z=0;function G(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||E((()=>{z||(j.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),j.clear())})))}function K(t){q=t}function W(){if(!q)throw new Error("Function called outside component initialization");return q}function X(t){W().$$.on_mount.push(t)}function Y(t){W().$$.on_destroy.push(t)}function J(t,e){W().$$.context.set(t,e)}function Q(t){return W().$$.context.get(t)}function Z(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const tt=[],et=[],nt=[],it=[],st=Promise.resolve();let rt=!1;function ot(){rt||(rt=!0,st.then(ht))}function at(t){nt.push(t)}function ct(t){it.push(t)}const lt=new Set;let ut,dt=0;function ht(){const t=q;do{for(;dt<tt.length;){const t=tt[dt];dt++,K(t),pt(t.$$)}for(K(null),tt.length=0,dt=0;et.length;)et.pop()();for(let t=0;t<nt.length;t+=1){const e=nt[t];lt.has(e)||(lt.add(e),e())}nt.length=0}while(tt.length);for(;it.length;)it.pop()();rt=!1,lt.clear(),K(t)}function pt(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(at)}}function ft(t,e,n){t.dispatchEvent(function(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}(`${e?"intro":"outro"}${n}`))}const mt=new Set;let gt;function yt(){gt={r:0,c:[],p:gt}}function vt(){gt.r||r(gt.c),gt=gt.p}function bt(t,e){t&&t.i&&(mt.delete(t),t.i(e))}function $t(t,e,n,i){if(t&&t.o){if(mt.has(t))return;mt.add(t),gt.c.push((()=>{mt.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}const It={duration:0};function _t(n,i,s){let r,a,c=i(n,s),l=!1,u=0;function d(){r&&G(n,r)}function h(){const{delay:i=0,duration:s=300,easing:o=e,tick:h=t,css:p}=c||It;p&&(r=function(t,e,n,i,s,r,o,a=0){const c=16.666/i;let l="{\n";for(let t=0;t<=1;t+=c){const i=e+(n-e)*r(t);l+=100*t+`%{${o(i,1-i)}}\n`}const u=l+`100% {${o(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,h=A(t);j.add(h);const p=h.__svelte_stylesheet||(h.__svelte_stylesheet=C(t).sheet),f=h.__svelte_rules||(h.__svelte_rules={});f[d]||(f[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${i}ms linear ${s}ms 1 both`,z+=1,d}(n,0,1,s,i,o,p,u++)),h(0,1);const f=_()+i,m=f+s;a&&a.abort(),l=!0,at((()=>ft(n,!0,"start"))),a=function(t){let e;return 0===w.size&&E(T),{promise:new Promise((n=>{w.add(e={c:t,f:n})})),abort(){w.delete(e)}}}((t=>{if(l){if(t>=m)return h(1,0),ft(n,!0,"end"),d(),l=!1;if(t>=f){const e=o((t-f)/s);h(e,1-e)}}return l}))}let p=!1;return{start(){p||(p=!0,G(n),o(c)?(c=c(),(ut||(ut=Promise.resolve(),ut.then((()=>{ut=null}))),ut).then(h)):h())},invalidate(){p=!1},end(){l&&(d(),l=!1)}}}const Et="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function wt(t,e){$t(t,1,1,(()=>{e.delete(t.key)}))}function Tt(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const t in o)t in a||(i[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[r]=a}else for(const t in o)s[t]=1}for(const t in i)t in n||(n[t]=void 0);return n}function St(t){return"object"==typeof t&&null!==t?t:{}}function At(t,e,n){const i=t.$$.props[e];void 0!==i&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ct(t){t&&t.c()}function xt(t,e,n,s){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,n),s||at((()=>{const e=c.map(i).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(at)}function kt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(e,n,i,o,a,c,l,u=[-1]){const d=q;K(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(h.root);let p=!1;if(h.ctx=i?i(e,n.props||{},((t,n,...i)=>{const s=i.length?i[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),p&&function(t,e){-1===t.$$.dirty[0]&&(tt.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!o&&o(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(k)}else h.fragment&&h.fragment.c();n.intro&&bt(e.$$.fragment),xt(e,n.target,n.anchor,n.customElement),ht()}K(d)}class Lt{$destroy(){kt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var Rt=function(t,e){return Rt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},Rt(t,e)};function Nt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}Rt(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var Dt=function(){return Dt=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},Dt.apply(this,arguments)};function Mt(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]])}return n}function Pt(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */var Ft=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */var Ut=Object.freeze({__proto__:null,applyPassive:function(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,n),t.document.removeEventListener("test",i,n)}catch(t){e=!1}return e}(t)&&{passive:!0}}});
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */function Vt(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}var Bt,Ht=Object.freeze({__proto__:null,closest:function(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(Vt(n,e))return n;n=n.parentElement}return null},matches:Vt,estimateScrollWidth:function(t){var e=t;if(null!==e.offsetParent)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}}),jt={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},qt={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},zt={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var Gt=["touchstart","pointerdown","mousedown","keydown"],Kt=["touchend","pointerup","mouseup","contextmenu"],Wt=[],Xt=function(t){function e(n){var i=t.call(this,Dt(Dt({},e.defaultAdapter),n))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(t){i.activateImpl(t)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Nt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return jt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return qt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return zt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var i=e.cssClasses,s=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(s),t.adapter.isUnbounded()&&(t.adapter.addClass(r),t.layoutInternal())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,s=n.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(i),t.adapter.removeClass(s),t.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){t.layoutInternal(),t.layoutFrame=0}))},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var e,n;if(t){try{for(var i=Pt(Gt),s=i.next();!s.done;s=i.next()){var r=s.value;this.adapter.registerInteractionHandler(r,this.activateHandler)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var e,n;if("keydown"===t.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var i=Pt(Kt),s=i.next();!s.done;s=i.next()){var r=s.value;this.adapter.registerDocumentInteractionHandler(r,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}},e.prototype.deregisterRootHandlers=function(){var t,e;try{for(var n=Pt(Gt),i=n.next();!i.done;i=n.next()){var s=i.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var n=Pt(Kt),i=n.next();!i.done;i=n.next()){var s=i.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings;Object.keys(n).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter.updateCssVariable(n[e],null)}))},e.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var n=this.activationState;if(!n.isActivated){var i=this.previousActivationEvent;if(!(i&&void 0!==t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&Wt.length>0&&Wt.some((function(t){return e.adapter.containsEventTarget(t)}))?this.resetActivationState():(void 0!==t&&(Wt.push(t.target),this.registerDeactivationHandlers(t)),n.wasElementMadeActive=this.checkElementMadeActive(t),n.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){Wt=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive(t),n.wasElementMadeActive&&e.animateActivation()),n.wasElementMadeActive||(e.activationState=e.defaultActivationState())})))}}},e.prototype.checkElementMadeActive=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},e.prototype.animateActivation=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,s=n.VAR_FG_TRANSLATE_END,r=e.cssClasses,o=r.FG_DEACTIVATION,a=r.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var l="",u="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),h=d.startPoint,p=d.endPoint;l=h.x+"px, "+h.y+"px",u=p.x+"px, "+p.y+"px"}this.adapter.updateCssVariable(i,l),this.adapter.updateCssVariable(s,u),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(a),this.activationTimer=setTimeout((function(){t.activationTimerCallback()}),c)},e.prototype.getFgTranslationCoordinates=function(){var t,e=this.activationState,n=e.activationEvent;return t=e.wasActivatedByPointer?function(t,e,n){if(!t)return{x:0,y:0};var i,s,r=e.x,o=e.y,a=r+n.left,c=o+n.top;if("touchstart"===t.type){var l=t;i=l.changedTouches[0].pageX-a,s=l.changedTouches[0].pageY-c}else{var u=t;i=u.pageX-a,s=u.pageY-c}return{x:i,y:s}}(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2},{startPoint:t={x:t.x-this.initialSize/2,y:t.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState,s=i.hasDeactivationUXRun,r=i.isActivated;(s||!r)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout((function(){t.adapter.removeClass(n)}),zt.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return t.previousActivationEvent=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var n=Dt({},e);e.isProgrammatic?(requestAnimationFrame((function(){t.animateDeactivation(n)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(n),t.resetActivationState()})))}},e.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?n:Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2))+e.numbers.PADDING;var i=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize=i-1:this.initialSize=i,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,s=t.VAR_TOP,r=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(r,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(s,this.unboundedCoords.top+"px"))},e}(Ft),Yt={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Jt={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Qt={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},Zt=function(t){function e(n){return t.call(this,Dt(Dt({},e.defaultAdapter),n))||this}return Nt(e,t),Object.defineProperty(e,"strings",{get:function(){return Qt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Yt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Jt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(Ft),te=function(t){function e(e){var n=t.call(this,e)||this;return n.wasDocked=!0,n.isDockedShowing=!0,n.currentAppBarOffsetTop=0,n.isCurrentlyBeingResized=!1,n.resizeThrottleId=0,n.resizeDebounceId=0,n.lastScrollPosition=n.adapter.getViewportScrollY(),n.topAppBarHeight=n.adapter.getTopAppBarHeight(),n}return Nt(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),e=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=e,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout((function(){t.resizeThrottleId=0,t.throttledResizeHandler()}),Jt.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout((function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=0}),Jt.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,e=this.currentAppBarOffsetTop<0,n=this.currentAppBarOffsetTop>t,i=e&&n;if(i)this.wasDocked=!1;else{if(!this.wasDocked)return this.wasDocked=!0,!0;if(this.isDockedShowing!==n)return this.isDockedShowing=n,!0}return i},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-Jt.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(Zt),ee=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.wasScrolled=!1,e}return Nt(e,t),e.prototype.handleTargetScroll=function(){this.adapter.getViewportScrollY()<=0?this.wasScrolled&&(this.adapter.removeClass(Yt.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(Yt.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(te),ne=function(t){function e(e){var n=t.call(this,e)||this;return n.collapsed=!1,n.isAlwaysCollapsed=!1,n}return Nt(e,t),Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){t.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(Yt.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(Yt.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){this.isAlwaysCollapsed||(this.adapter.getViewportScrollY()<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse())},e.prototype.uncollapse=function(){this.adapter.removeClass(Yt.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(Yt.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(Zt);const ie=[];function se(e,n=t){let i;const s=new Set;function r(t){if(a(e,t)&&(e=t,i)){const t=!ie.length;for(const t of s)t[1](),ie.push(t,e);if(t){for(let t=0;t<ie.length;t+=2)ie[t][0](ie[t+1]);ie.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(o,a=t){const c=[o,a];return s.add(c),1===s.size&&(i=n(r)||t),o(e),()=>{s.delete(c),0===s.size&&(i(),i=null)}}}}function re(t){return Object.entries(t).filter((([t,e])=>""!==t&&e)).map((([t])=>t)).join(" ")}function oe(t,e,n,i={bubbles:!0},s=!1){if("undefined"!=typeof Event&&t){const r=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:n}));if(null==t||t.dispatchEvent(r),s&&e.startsWith("SMUI")){const s=new CustomEvent(e.replace(/^SMUI/g,(()=>"MDC")),Object.assign(Object.assign({},i),{detail:n}));null==t||t.dispatchEvent(s),s.defaultPrevented&&r.preventDefault()}return r}}function ae(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let s=0;s<n.length;s++){const r=n[s],o=r.indexOf("$");-1!==o&&-1!==e.indexOf(r.substring(0,o+1))||-1===e.indexOf(r)&&(i[r]=t[r])}return i}const ce=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,le=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function ue(t){let e,n=[];function i(e){Z(t,e)}return t.$on=(t,i)=>{let s=t,r=()=>{};e?r=e(s,i):n.push([s,i]);return s.match(ce)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',s),()=>{r()}},t=>{const s=[],r={};e=(e,n)=>{let o=e,a=n,c=!1;const l=o.match(ce),u=o.match(le),d=l||u;if(o.match(/^SMUI:\w+:/)){const t=o.split(":");let e="";for(let n=0;n<t.length;n++)e+=n===t.length-1?":"+t[n]:t[n].split("-").map((t=>t.slice(0,1).toUpperCase()+t.slice(1))).join("");console.warn(`The event ${o.split("$")[0]} has been renamed to ${e.split("$")[0]}.`),o=e}if(d){const t=o.split(l?":":"$");o=t[0];const e=Object.fromEntries(t.slice(1).map((t=>[t,!0])));e.passive&&(c=c||{},c.passive=!0),e.nonpassive&&(c=c||{},c.passive=!1),e.capture&&(c=c||{},c.capture=!0),e.once&&(c=c||{},c.once=!0),e.preventDefault&&(a=function(t){return function(e){return e.preventDefault(),t.call(this,e)}}(a)),e.stopPropagation&&(a=function(t){return function(e){return e.stopPropagation(),t.call(this,e)}}(a))}const h=D(t,o,a,c),p=()=>{h();const t=s.indexOf(p);t>-1&&s.splice(t,1)};return s.push(p),o in r||(r[o]=D(t,o,i)),p};for(let t=0;t<n.length;t++)e(n[t][0],n[t][1]);return{destroy:()=>{for(let t=0;t<s.length;t++)s[t]();for(let t of Object.entries(r))t[1]()}}}}function de(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let s=0;s<n.length;s++){const r=n[s];r.substring(0,e.length)===e&&(i[r.substring(e.length)]=t[r])}return i}function he(t,e){let n=[];if(e)for(let i=0;i<e.length;i++){const s=e[i],r=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?n.push(r(t,s[1])):n.push(r(t))}return{update(t){if((t&&t.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(t)for(let e=0;e<t.length;e++){const i=n[e];if(i&&i.update){const n=t[e];Array.isArray(n)&&n.length>1?i.update(n[1]):i.update()}}},destroy(){for(let t=0;t<n.length;t++){const e=n[t];e&&e.destroy&&e.destroy()}}}}const{window:pe}=Et;function fe(t){let e,i,s,a,c,l,u;const d=t[22].default,p=h(d,t,t[21],null);let y=[{class:i=re({[t[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":"short"===t[4],"mdc-top-app-bar--short-collapsed":t[0],"mdc-top-app-bar--fixed":"fixed"===t[4],"smui-top-app-bar--static":"static"===t[4],"smui-top-app-bar--color-secondary":"secondary"===t[5],"mdc-top-app-bar--prominent":t[6],"mdc-top-app-bar--dense":t[7],...t[11]})},{style:s=Object.entries(t[12]).map(me).concat([t[3]]).join(" ")},t[15]],v={};for(let t=0;t<y.length;t+=1)v=n(v,y[t]);return{c(){e=O("header"),p&&p.c(),P(e,v)},m(n,i){x(n,e,i),p&&p.m(e,null),t[25](e),c=!0,l||(u=[D(pe,"resize",t[23]),D(pe,"scroll",t[24]),$(a=he.call(null,e,t[1])),$(t[13].call(null,e)),D(e,"SMUITopAppBarIconButton:nav",t[26])],l=!0)},p(t,n){p&&p.p&&(!c||2097152&n[0])&&m(p,d,t,t[21],c?f(d,t[21],n,null):g(t[21]),null),P(e,v=Tt(y,[(!c||2293&n[0]&&i!==(i=re({[t[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":"short"===t[4],"mdc-top-app-bar--short-collapsed":t[0],"mdc-top-app-bar--fixed":"fixed"===t[4],"smui-top-app-bar--static":"static"===t[4],"smui-top-app-bar--color-secondary":"secondary"===t[5],"mdc-top-app-bar--prominent":t[6],"mdc-top-app-bar--dense":t[7],...t[11]})))&&{class:i},(!c||4104&n[0]&&s!==(s=Object.entries(t[12]).map(me).concat([t[3]]).join(" ")))&&{style:s},32768&n[0]&&t[15]])),a&&o(a.update)&&2&n[0]&&a.update.call(null,t[1])},i(t){c||(bt(p,t),c=!0)},o(t){$t(p,t),c=!1},d(n){n&&k(e),p&&p.d(n),t[25](null),l=!1,r(u)}}}const me=([t,e])=>`${t}: ${e};`;function ge(t,e,i){const s=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;const c=ue(W());let l=()=>{};function u(t){return t===l}let{use:d=[]}=e,{class:h=""}=e,{style:p=""}=e,{variant:f="standard"}=e,{color:m="primary"}=e,{collapsed:g=l}=e;const b=!u(g)&&!!g;u(g)&&(g=!1);let $,I,_,E,{prominent:w=!1}=e,{dense:T=!1}=e,{scrollTarget:S}=e,A={},C={},x=function(t,e){return{subscribe:se(t,e).subscribe}}({variant:f,prominent:w,dense:T},(t=>{i(18,_=t)})),k=f;function O(){return new({static:Zt,short:ne,fixed:ee}[f]||te)({hasClass:L,addClass:R,removeClass:N,setStyle:D,getTopAppBarHeight:()=>$.clientHeight,notifyNavigationIconClicked:()=>oe($,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>null==S?window.pageYOffset:S.scrollTop,getTotalActionItems:()=>$.querySelectorAll(".mdc-top-app-bar__action-item").length})}function L(t){return t in A?A[t]:P().classList.contains(t)}function R(t){A[t]||i(11,A[t]=!0,A)}function N(t){t in A&&!A[t]||i(11,A[t]=!1,A)}function D(t,e){C[t]!=e&&(""===e||null==e?(delete C[t],i(12,C),i(20,k),i(4,f),i(9,I)):i(12,C[t]=e,C))}function M(){I&&(I.handleTargetScroll(),"short"===f&&i(0,g="isCollapsed"in I&&I.isCollapsed))}function P(){return $}X((()=>(i(9,I=O()),I.init(),()=>{I.destroy()})));return t.$$set=t=>{e=n(n({},e),y(t)),i(15,r=v(e,s)),"use"in t&&i(1,d=t.use),"class"in t&&i(2,h=t.class),"style"in t&&i(3,p=t.style),"variant"in t&&i(4,f=t.variant),"color"in t&&i(5,m=t.color),"collapsed"in t&&i(0,g=t.collapsed),"prominent"in t&&i(6,w=t.prominent),"dense"in t&&i(7,T=t.dense),"scrollTarget"in t&&i(8,S=t.scrollTarget),"$$scope"in t&&i(21,a=t.$$scope)},t.$$.update=()=>{262352&t.$$.dirty[0]&&_&&_({variant:f,prominent:w,dense:T}),1049104&t.$$.dirty[0]&&k!==f&&I&&(i(20,k=f),I.destroy(),i(11,A={}),i(12,C={}),i(9,I=O()),I.init()),528&t.$$.dirty[0]&&I&&"short"===f&&"setAlwaysCollapsed"in I&&I.setAlwaysCollapsed(b),524544&t.$$.dirty[0]&&E!==S&&(E&&E.removeEventListener("scroll",M),S&&S.addEventListener("scroll",M),i(19,E=S))},[g,d,h,p,f,m,w,T,S,I,$,A,C,c,M,r,function(){return x},P,_,E,k,a,o,()=>"short"!==f&&"fixed"!==f&&I&&I.handleWindowResize(),()=>null==S&&M(),function(t){et[t?"unshift":"push"]((()=>{$=t,i(10,$)}))},()=>I&&I.handleNavigationClick()]}class ye extends Lt{constructor(t){super(),Ot(this,t,ge,fe,a,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function ve(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("div"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),P(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function be(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}class $e extends Lt{constructor(t){super(),Ot(this,t,be,ve,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Ie(t){let e;const n=t[10].default,i=h(n,t,t[12],null);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,s){i&&i.p&&(!e||4096&s)&&m(i,n,t,t[12],e?f(n,t[12],s,null):g(t[12]),null)},i(t){e||(bt(i,t),e=!0)},o(t){$t(i,t),e=!1},d(t){i&&i.d(t)}}}function _e(t){let e,i,s;const r=[{use:[t[7],...t[0]]},{class:re({[t[1]]:!0,[t[5]]:!0,...t[4]})},t[6],t[8]];var o=t[2];function a(t){let e={$$slots:{default:[Ie]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return o&&(e=new o(a(t)),t[11](e)),{c(){e&&Ct(e.$$.fragment),i=N()},m(t,n){e&&xt(e,t,n),x(t,i,n),s=!0},p(t,[n]){const s=499&n?Tt(r,[129&n&&{use:[t[7],...t[0]]},50&n&&{class:re({[t[1]]:!0,[t[5]]:!0,...t[4]})},64&n&&St(t[6]),256&n&&St(t[8])]):{};if(4096&n&&(s.$$scope={dirty:n,ctx:t}),o!==(o=t[2])){if(e){yt();const t=e;$t(t.$$.fragment,1,0,(()=>{kt(t,1)})),vt()}o?(e=new o(a(t)),t[11](e),Ct(e.$$.fragment),bt(e.$$.fragment,1),xt(e,i.parentNode,i)):e=null}else o&&e.$set(s)},i(t){s||(e&&bt(e.$$.fragment,t),s=!0)},o(t){e&&$t(e.$$.fragment,t),s=!1},d(n){t[11](null),n&&k(i),e&&kt(e,n)}}}const Ee={component:$e,class:"",classMap:{},contexts:{},props:{}};function we(t,e,i){const s=["use","class","component","getElement"];let r,o=v(e,s),{$$slots:a={},$$scope:c}=e,{use:l=[]}=e,{class:u=""}=e;const d=Ee.class,h={},p=[],f=Ee.contexts,m=Ee.props;let{component:g=Ee.component}=e;Object.entries(Ee.classMap).forEach((([t,e])=>{const n=Q(e);n&&"subscribe"in n&&p.push(n.subscribe((e=>{i(4,h[t]=e,h)})))}));const b=ue(W());for(let t in f)f.hasOwnProperty(t)&&J(t,f[t]);return Y((()=>{for(const t of p)t()})),t.$$set=t=>{e=n(n({},e),y(t)),i(8,o=v(e,s)),"use"in t&&i(0,l=t.use),"class"in t&&i(1,u=t.class),"component"in t&&i(2,g=t.component),"$$scope"in t&&i(12,c=t.$$scope)},[l,u,g,r,h,d,m,b,o,function(){return r.getElement()},a,function(t){et[t?"unshift":"push"]((()=>{r=t,i(3,r)}))},c]}class Te extends Lt{constructor(t){super(),Ot(this,t,we,_e,a,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const Se=Object.assign({},Ee);function Ae(t){return new Proxy(Te,{construct:function(e,n){return Object.assign(Ee,Se,t),new e(...n)},get:function(e,n){return Object.assign(Ee,Se,t),e[n]}})}function Ce(t){let e,i,s,a,c;const l=t[7].default,u=h(l,t,t[6],null);let d=[{href:t[1]},t[4]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("a"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[8](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[3].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||64&n)&&m(u,l,t,t[6],s?f(l,t[6],n,null):g(t[6]),null),P(e,p=Tt(d,[(!s||2&n)&&{href:t[1]},16&n&&t[4]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[8](null),a=!1,r(c)}}}function xe(t,e,i){const s=["use","href","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e,{href:l="javascript:void(0);"}=e;const u=ue(W());let d;return t.$$set=t=>{e=n(n({},e),y(t)),i(4,r=v(e,s)),"use"in t&&i(0,c=t.use),"href"in t&&i(1,l=t.href),"$$scope"in t&&i(6,a=t.$$scope)},[c,l,d,u,r,function(){return d},a,o,function(t){et[t?"unshift":"push"]((()=>{d=t,i(2,d)}))}]}function ke(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("button"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),e.autofocus&&e.focus(),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),P(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function Oe(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}function Le(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("h1"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),P(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function Re(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}function Ne(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("h2"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),P(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function De(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}function Me(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("h3"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),P(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function Pe(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}function Fe(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("h5"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),P(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function Ue(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}function Ve(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("h6"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),P(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function Be(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}function He(t){let e,i,s,a,c,l,u=[t[3]],d={};for(let t=0;t<u.length;t+=1)d=n(d,u[t]);const p=t[6].default,y=h(p,t,t[5],null);return{c(){e=O("hr"),s=R(),y&&y.c(),P(e,d)},m(n,r){x(n,e,r),t[7](e),x(n,s,r),y&&y.m(n,r),a=!0,c||(l=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],c=!0)},p(t,[n]){P(e,d=Tt(u,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0]),y&&y.p&&(!a||32&n)&&m(y,p,t,t[5],a?f(p,t[5],n,null):g(t[5]),null)},i(t){a||(bt(y,t),a=!0)},o(t){$t(y,t),a=!1},d(n){n&&k(e),t[7](null),n&&k(s),y&&y.d(n),c=!1,r(l)}}}function je(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}function qe(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("i"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),P(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function ze(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}class Ge extends Lt{constructor(t){super(),Ot(this,t,ze,qe,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Ke(t){let e,i,s,a,c,l,u=[{alt:t[1]},t[4]],d={};for(let t=0;t<u.length;t+=1)d=n(d,u[t]);const p=t[7].default,y=h(p,t,t[6],null);return{c(){e=O("img"),s=R(),y&&y.c(),P(e,d)},m(n,r){x(n,e,r),t[8](e),x(n,s,r),y&&y.m(n,r),a=!0,c||(l=[$(i=he.call(null,e,t[0])),$(t[3].call(null,e))],c=!0)},p(t,[n]){P(e,d=Tt(u,[(!a||2&n)&&{alt:t[1]},16&n&&t[4]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0]),y&&y.p&&(!a||64&n)&&m(y,p,t,t[6],a?f(p,t[6],n,null):g(t[6]),null)},i(t){a||(bt(y,t),a=!0)},o(t){$t(y,t),a=!1},d(n){n&&k(e),t[8](null),n&&k(s),y&&y.d(n),c=!1,r(l)}}}function We(t,e,i){const s=["use","alt","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e,{alt:l=""}=e;const u=ue(W());let d;return t.$$set=t=>{e=n(n({},e),y(t)),i(4,r=v(e,s)),"use"in t&&i(0,c=t.use),"alt"in t&&i(1,l=t.alt),"$$scope"in t&&i(6,a=t.$$scope)},[c,l,d,u,r,function(){return d},a,o,function(t){et[t?"unshift":"push"]((()=>{d=t,i(2,d)}))}]}function Xe(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("li"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),P(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function Ye(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}function Je(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("main"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),P(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function Qe(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}function Ze(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("nav"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),P(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function tn(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}function en(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("span"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),P(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function nn(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}class sn extends Lt{constructor(t){super(),Ot(this,t,nn,en,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function rn(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}("svg"),u&&u.c(),F(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),F(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function on(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}class an extends Lt{constructor(t){super(),Ot(this,t,on,rn,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function cn(t){let e,i,s,a,c;const l=t[6].default,u=h(l,t,t[5],null);let d=[t[3]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=O("ul"),u&&u.c(),P(e,p)},m(n,r){x(n,e,r),u&&u.m(e,null),t[7](e),s=!0,a||(c=[$(i=he.call(null,e,t[0])),$(t[2].call(null,e))],a=!0)},p(t,[n]){u&&u.p&&(!s||32&n)&&m(u,l,t,t[5],s?f(l,t[5],n,null):g(t[5]),null),P(e,p=Tt(d,[8&n&&t[3]])),i&&o(i.update)&&1&n&&i.update.call(null,t[0])},i(t){s||(bt(u,t),s=!0)},o(t){$t(u,t),s=!1},d(n){n&&k(e),u&&u.d(n),t[7](null),a=!1,r(c)}}}function ln(t,e,i){const s=["use","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e,{use:c=[]}=e;const l=ue(W());let u;return t.$$set=t=>{e=n(n({},e),y(t)),i(3,r=v(e,s)),"use"in t&&i(0,c=t.use),"$$scope"in t&&i(5,a=t.$$scope)},[c,u,l,r,function(){return u},a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(1,u)}))}]}const un=class extends Lt{constructor(t){super(),Ot(this,t,xe,Ce,a,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}},dn=class extends Lt{constructor(t){super(),Ot(this,t,Oe,ke,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}},hn=$e,pn=class extends Lt{constructor(t){super(),Ot(this,t,Re,Le,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}},fn=class extends Lt{constructor(t){super(),Ot(this,t,De,Ne,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}},mn=class extends Lt{constructor(t){super(),Ot(this,t,Pe,Me,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}},gn=class extends Lt{constructor(t){super(),Ot(this,t,Ue,Fe,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}},yn=class extends Lt{constructor(t){super(),Ot(this,t,Be,Ve,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}},vn=class extends Lt{constructor(t){super(),Ot(this,t,je,He,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}},bn=class extends Lt{constructor(t){super(),Ot(this,t,We,Ke,a,{use:0,alt:1,getElement:5})}get getElement(){return this.$$.ctx[5]}},$n=class extends Lt{constructor(t){super(),Ot(this,t,Ye,Xe,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}},In=class extends Lt{constructor(t){super(),Ot(this,t,Qe,Je,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}},_n=class extends Lt{constructor(t){super(),Ot(this,t,tn,Ze,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}},En=sn,wn=class extends Lt{constructor(t){super(),Ot(this,t,ln,cn,a,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}};var Tn=Ae({class:"mdc-top-app-bar__row",component:hn});function Sn(t){let e,i,s,a,c,l;const u=t[9].default,d=h(u,t,t[8],null);let p=[{class:i=re({[t[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":"start"===t[2],"mdc-top-app-bar__section--align-end":"end"===t[2]})},t[3]?{role:"toolbar"}:{},t[6]],y={};for(let t=0;t<p.length;t+=1)y=n(y,p[t]);return{c(){e=O("section"),d&&d.c(),P(e,y)},m(n,i){x(n,e,i),d&&d.m(e,null),t[10](e),a=!0,c||(l=[$(s=he.call(null,e,t[0])),$(t[5].call(null,e))],c=!0)},p(t,[n]){d&&d.p&&(!a||256&n)&&m(d,u,t,t[8],a?f(u,t[8],n,null):g(t[8]),null),P(e,y=Tt(p,[(!a||6&n&&i!==(i=re({[t[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":"start"===t[2],"mdc-top-app-bar__section--align-end":"end"===t[2]})))&&{class:i},8&n&&(t[3]?{role:"toolbar"}:{}),64&n&&t[6]])),s&&o(s.update)&&1&n&&s.update.call(null,t[0])},i(t){a||(bt(d,t),a=!0)},o(t){$t(d,t),a=!1},d(n){n&&k(e),d&&d.d(n),t[10](null),c=!1,r(l)}}}function An(t,e,i){const s=["use","class","align","toolbar","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;const c=ue(W());let l,{use:u=[]}=e,{class:d=""}=e,{align:h="start"}=e,{toolbar:p=!1}=e;return J("SMUI:icon-button:context",p?"top-app-bar:action":"top-app-bar:navigation"),J("SMUI:button:context",p?"top-app-bar:action":"top-app-bar:navigation"),t.$$set=t=>{e=n(n({},e),y(t)),i(6,r=v(e,s)),"use"in t&&i(0,u=t.use),"class"in t&&i(1,d=t.class),"align"in t&&i(2,h=t.align),"toolbar"in t&&i(3,p=t.toolbar),"$$scope"in t&&i(8,a=t.$$scope)},[u,d,h,p,l,c,r,function(){return l},a,o,function(t){et[t?"unshift":"push"]((()=>{l=t,i(4,l)}))}]}var Cn=Ae({class:"mdc-top-app-bar__title",component:En});function xn(t){let e;const n=t[11].default,i=h(n,t,t[13],null);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,s){i&&i.p&&(!e||8192&s)&&m(i,n,t,t[13],e?f(n,t[13],s,null):g(t[13]),null)},i(t){e||(bt(i,t),e=!0)},o(t){$t(i,t),e=!1},d(t){i&&i.d(t)}}}function kn(t){let e,i,s;const r=[{use:[t[6],...t[0]]},{class:re({[t[1]]:!0,[t[5]]:!0})},t[7]];var o=t[2];function a(t){let e={$$slots:{default:[xn]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return o&&(e=new o(a(t)),t[12](e)),{c(){e&&Ct(e.$$.fragment),i=N()},m(t,n){e&&xt(e,t,n),x(t,i,n),s=!0},p(t,[n]){const s=227&n?Tt(r,[65&n&&{use:[t[6],...t[0]]},34&n&&{class:re({[t[1]]:!0,[t[5]]:!0})},128&n&&St(t[7])]):{};if(8192&n&&(s.$$scope={dirty:n,ctx:t}),o!==(o=t[2])){if(e){yt();const t=e;$t(t.$$.fragment,1,0,(()=>{kt(t,1)})),vt()}o?(e=new o(a(t)),t[12](e),Ct(e.$$.fragment),bt(e.$$.fragment,1),xt(e,i.parentNode,i)):e=null}else o&&e.$set(s)},i(t){s||(e&&bt(e.$$.fragment,t),s=!0)},o(t){e&&$t(e.$$.fragment,t),s=!1},d(n){t[12](null),n&&k(i),e&&kt(e,n)}}}function On(e,i,s){let r,o;const a=["use","class","topAppBar","component","getElement"];let c,l=v(i,a),d=t;e.$$.on_destroy.push((()=>d()));let{$$slots:h={},$$scope:p}=i;const f=ue(W());let m,{use:g=[]}=i,{class:b=""}=i,{topAppBar:$}=i,{component:I=In}=i;return e.$$set=t=>{i=n(n({},i),y(t)),s(7,l=v(i,a)),"use"in t&&s(0,g=t.use),"class"in t&&s(1,b=t.class),"topAppBar"in t&&s(8,$=t.topAppBar),"component"in t&&s(2,I=t.component),"$$scope"in t&&s(13,p=t.$$scope)},e.$$.update=()=>{256&e.$$.dirty&&(s(3,r=$&&$.getPropStore()),d(),d=u(r,(t=>s(10,c=t)))),1032&e.$$.dirty&&s(5,o=r&&"static"!==c.variant?"short"===c.variant?"mdc-top-app-bar--short-fixed-adjust":c.prominent&&c.dense?"mdc-top-app-bar--dense-prominent-fixed-adjust":c.prominent?"mdc-top-app-bar--prominent-fixed-adjust":c.dense?"mdc-top-app-bar--dense-fixed-adjust":"mdc-top-app-bar--fixed-adjust":"")},[g,b,I,r,m,o,f,l,$,function(){return m.getElement()},c,h,function(t){et[t?"unshift":"push"]((()=>{m=t,s(4,m)}))},p]}const Ln=class extends Lt{constructor(t){super(),Ot(this,t,An,Sn,a,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}},Rn=class extends Lt{constructor(t){super(),Ot(this,t,On,kn,a,{use:0,class:1,topAppBar:8,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}};
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var Nn={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},Dn={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"},Mn=function(t){function e(n){var i=t.call(this,Dt(Dt({},e.defaultAdapter),n))||this;return i.hasToggledAriaLabel=!1,i}return Nt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Nn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Dn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.getAttr(Dn.DATA_ARIA_LABEL_ON),e=this.adapter.getAttr(Dn.DATA_ARIA_LABEL_OFF);if(t&&e){if(null!==this.adapter.getAttr(Dn.ARIA_PRESSED))throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(Dn.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(Nn.ICON_BUTTON_ON)},e.prototype.toggle=function(t){if(void 0===t&&(t=!this.isOn()),t?this.adapter.addClass(Nn.ICON_BUTTON_ON):this.adapter.removeClass(Nn.ICON_BUTTON_ON),this.hasToggledAriaLabel){var e=t?this.adapter.getAttr(Dn.DATA_ARIA_LABEL_ON):this.adapter.getAttr(Dn.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(Dn.ARIA_LABEL,e||"")}else this.adapter.setAttr(Dn.ARIA_PRESSED,""+t)},e}(Ft),Pn="mdc-dom-focus-sentinel",Fn=function(){function t(t,e){void 0===e&&(e={}),this.root=t,this.options=e,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var t=this.getFocusableElements(this.root);if(0===t.length)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(t,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+Pn)).forEach((function(t){t.parentElement.removeChild(t)})),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(t){var e=this,n=this.createSentinel(),i=this.createSentinel();n.addEventListener("focus",(function(){var n=e.getFocusableElements(t);n.length>0&&n[n.length-1].focus()})),i.addEventListener("focus",(function(){var n=e.getFocusableElements(t);n.length>0&&n[0].focus()})),t.insertBefore(n,t.children[0]),t.appendChild(i)},t.prototype.focusInitialElement=function(t,e){var n=0;e&&(n=Math.max(t.indexOf(e),0)),t[n].focus()},t.prototype.getFocusableElements=function(t){return[].slice.call(t.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button")).filter((function(t){var e="true"===t.getAttribute("aria-disabled")||null!=t.getAttribute("disabled")||null!=t.getAttribute("hidden")||"true"===t.getAttribute("aria-hidden"),n=t.tabIndex>=0&&t.getBoundingClientRect().width>0&&!t.classList.contains(Pn)&&!e,i=!1;if(n){var s=getComputedStyle(t);i="none"===s.display||"hidden"===s.visibility}return n&&!i}))},t.prototype.createSentinel=function(){var t=document.createElement("div");return t.setAttribute("tabindex","0"),t.setAttribute("aria-hidden","true"),t.classList.add(Pn),t},t}(),Un=Object.freeze({__proto__:null,FocusTrap:Fn}),Vn="Unknown",Bn="Backspace",Hn="Enter",jn="Spacebar",qn="PageUp",zn="PageDown",Gn="End",Kn="Home",Wn="ArrowLeft",Xn="ArrowUp",Yn="ArrowRight",Jn="ArrowDown",Qn="Delete",Zn="Escape",ti="Tab",ei=new Set;ei.add(Bn),ei.add(Hn),ei.add(jn),ei.add(qn),ei.add(zn),ei.add(Gn),ei.add(Kn),ei.add(Wn),ei.add(Xn),ei.add(Yn),ei.add(Jn),ei.add(Qn),ei.add(Zn),ei.add(ti);var ni=8,ii=13,si=32,ri=33,oi=34,ai=35,ci=36,li=37,ui=38,di=39,hi=40,pi=46,fi=27,mi=9,gi=new Map;gi.set(ni,Bn),gi.set(ii,Hn),gi.set(si,jn),gi.set(ri,qn),gi.set(oi,zn),gi.set(ai,Gn),gi.set(ci,Kn),gi.set(li,Wn),gi.set(ui,Xn),gi.set(di,Yn),gi.set(hi,Jn),gi.set(pi,Qn),gi.set(fi,Zn),gi.set(mi,ti);var yi=new Set;function vi(t){var e=t.key;if(ei.has(e))return e;var n=gi.get(t.keyCode);return n||Vn}yi.add(qn),yi.add(zn),yi.add(Gn),yi.add(Kn),yi.add(Wn),yi.add(Xn),yi.add(Yn),yi.add(Jn);const{applyPassive:bi}=Ut,{matches:$i}=Ht;function Ii(t,{ripple:e=!0,surface:n=!1,unbounded:i=!1,disabled:s=!1,color:r,active:o,rippleElement:a,eventTarget:c,activeTarget:l,addClass:u=(e=>t.classList.add(e)),removeClass:d=(e=>t.classList.remove(e)),addStyle:h=((e,n)=>t.style.setProperty(e,n)),initPromise:p=Promise.resolve()}={}){let f,m,g=Q("SMUI:addLayoutListener"),y=o,v=c,b=l;function $(){n&&(u("mdc-ripple-surface"),"primary"===r?(u("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")):"secondary"===r?(d("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary"))),f&&y!==o&&(y=o,o?f.activate():!1===o&&f.deactivate()),e&&!f?(f=new Xt({addClass:u,browserSupportsCssVars:()=>function(t,e){void 0===e&&(e=!1);var n,i=t.CSS;if("boolean"==typeof Bt&&!e)return Bt;if(!i||"function"!=typeof i.supports)return!1;var s=i.supports("--css-vars","yes"),r=i.supports("(--css-vars: yes)")&&i.supports("color","#00000000");return n=s||r,e||(Bt=n),n}(window),computeBoundingRect:()=>(a||t).getBoundingClientRect(),containsEventTarget:e=>t.contains(e),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,bi()),deregisterInteractionHandler:(e,n)=>(c||t).removeEventListener(e,n,bi()),deregisterResizeHandler:t=>window.removeEventListener("resize",t),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>null==o?$i(l||t,":active"):o,isSurfaceDisabled:()=>!!s,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,bi()),registerInteractionHandler:(e,n)=>(c||t).addEventListener(e,n,bi()),registerResizeHandler:t=>window.addEventListener("resize",t),removeClass:d,updateCssVariable:h}),p.then((()=>{f&&(f.init(),f.setUnbounded(i))}))):f&&!e&&p.then((()=>{f&&(f.destroy(),f=void 0)})),!f||v===c&&b===l||(v=c,b=l,f.destroy(),requestAnimationFrame((()=>{f&&(f.init(),f.setUnbounded(i))}))),!e&&i&&u("mdc-ripple-upgraded--unbounded")}return $(),g&&(m=g((function(){f&&f.layout()}))),{update(f){({ripple:e,surface:n,unbounded:i,disabled:s,color:r,active:o,rippleElement:a,eventTarget:c,activeTarget:l,addClass:u,removeClass:d,addStyle:h,initPromise:p}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),addStyle:(e,n)=>t.style.setProperty(e,n),initPromise:Promise.resolve()},f)),$()},destroy(){f&&(f.destroy(),f=void 0,d("mdc-ripple-surface"),d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")),m&&m()}}}function _i(t){let e;return{c(){e=O("div"),M(e,"class","mdc-icon-button__touch")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function Ei(t){let e,n,i,s;const r=t[31].default,o=h(r,t,t[35],null);let a=t[8]&&_i();return{c(){e=O("div"),n=R(),o&&o.c(),a&&a.c(),i=N(),M(e,"class","mdc-icon-button__ripple")},m(t,r){x(t,e,r),x(t,n,r),o&&o.m(t,r),a&&a.m(t,r),x(t,i,r),s=!0},p(t,e){o&&o.p&&(!s||16&e[1])&&m(o,r,t,t[35],s?f(r,t[35],e,null):g(t[35]),null),t[8]?a||(a=_i(),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i(t){s||(bt(o,t),s=!0)},o(t){$t(o,t),s=!1},d(t){t&&k(e),t&&k(n),o&&o.d(t),a&&a.d(t),t&&k(i)}}}function wi(t){let e,i,s;const r=[{use:[[Ii,{ripple:t[4],unbounded:!0,color:t[5],disabled:!!t[28].disabled,addClass:t[25],removeClass:t[26],addStyle:t[27]}],t[21],...t[1]]},{class:re({[t[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!t[22](t[0])&&t[0],"mdc-icon-button--touch":t[8],"mdc-icon-button--display-flex":t[9],"smui-icon-button--size-button":"button"===t[10],"mdc-icon-button--reduced-size":"mini"===t[10]||"button"===t[10],"mdc-card__action":"card:action"===t[23],"mdc-card__action--icon":"card:action"===t[23],"mdc-top-app-bar__navigation-icon":"top-app-bar:navigation"===t[23],"mdc-top-app-bar__action-item":"top-app-bar:action"===t[23],"mdc-snackbar__dismiss":"snackbar:actions"===t[23],"mdc-data-table__pagination-button":"data-table:pagination"===t[23],"mdc-data-table__sort-icon-button":"data-table:sortable-header-cell"===t[23],"mdc-dialog__close":"dialog:header"===t[23]&&"close"===t[12],...t[17]})},{style:Object.entries(t[18]).map(Ti).concat([t[3]]).join(" ")},{"aria-pressed":t[22](t[0])?null:t[0]?"true":"false"},{"aria-label":t[0]?t[6]:t[7]},{"data-aria-label-on":t[6]},{"data-aria-label-off":t[7]},{"aria-describedby":t[24]},{href:t[11]},t[20],t[19],t[28]];var o=t[13];function a(t){let e={$$slots:{default:[Ei]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return o&&(e=new o(a(t)),t[32](e),e.$on("click",t[33]),e.$on("click",t[34])),{c(){e&&Ct(e.$$.fragment),i=N()},m(t,n){e&&xt(e,t,n),x(t,i,n),s=!0},p(t,n){const s=536748031&n[0]?Tt(r,[505413682&n[0]&&{use:[[Ii,{ripple:t[4],unbounded:!0,color:t[5],disabled:!!t[28].disabled,addClass:t[25],removeClass:t[26],addStyle:t[27]}],t[21],...t[1]]},12719877&n[0]&&{class:re({[t[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!t[22](t[0])&&t[0],"mdc-icon-button--touch":t[8],"mdc-icon-button--display-flex":t[9],"smui-icon-button--size-button":"button"===t[10],"mdc-icon-button--reduced-size":"mini"===t[10]||"button"===t[10],"mdc-card__action":"card:action"===t[23],"mdc-card__action--icon":"card:action"===t[23],"mdc-top-app-bar__navigation-icon":"top-app-bar:navigation"===t[23],"mdc-top-app-bar__action-item":"top-app-bar:action"===t[23],"mdc-snackbar__dismiss":"snackbar:actions"===t[23],"mdc-data-table__pagination-button":"data-table:pagination"===t[23],"mdc-data-table__sort-icon-button":"data-table:sortable-header-cell"===t[23],"mdc-dialog__close":"dialog:header"===t[23]&&"close"===t[12],...t[17]})},262152&n[0]&&{style:Object.entries(t[18]).map(Ti).concat([t[3]]).join(" ")},4194305&n[0]&&{"aria-pressed":t[22](t[0])?null:t[0]?"true":"false"},193&n[0]&&{"aria-label":t[0]?t[6]:t[7]},64&n[0]&&{"data-aria-label-on":t[6]},128&n[0]&&{"data-aria-label-off":t[7]},16777216&n[0]&&{"aria-describedby":t[24]},2048&n[0]&&{href:t[11]},1048576&n[0]&&St(t[20]),524288&n[0]&&St(t[19]),268435456&n[0]&&St(t[28])]):{};if(256&n[0]|16&n[1]&&(s.$$scope={dirty:n,ctx:t}),o!==(o=t[13])){if(e){yt();const t=e;$t(t.$$.fragment,1,0,(()=>{kt(t,1)})),vt()}o?(e=new o(a(t)),t[32](e),e.$on("click",t[33]),e.$on("click",t[34]),Ct(e.$$.fragment),bt(e.$$.fragment,1),xt(e,i.parentNode,i)):e=null}else o&&e.$set(s)},i(t){s||(e&&bt(e.$$.fragment,t),s=!0)},o(t){e&&$t(e.$$.fragment,t),s=!1},d(n){t[32](null),n&&k(i),e&&kt(e,n)}}}const Ti=([t,e])=>`${t}: ${e};`;function Si(t,e,i){let s;const r=["use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","touch","displayFlex","size","href","action","component","getElement"];let o=v(e,r),{$$slots:a={},$$scope:c}=e;const l=ue(W());let u=()=>{};function d(t){return t===u}let h,p,{use:f=[]}=e,{class:m=""}=e,{style:g=""}=e,{ripple:b=!0}=e,{color:$}=e,{toggle:I=!1}=e,{pressed:_=u}=e,{ariaLabelOn:E}=e,{ariaLabelOff:w}=e,{touch:T=!1}=e,{displayFlex:S=!0}=e,{size:A="normal"}=e,{href:C}=e,{action:x}=e,k={},O={},L={},R=Q("SMUI:icon-button:context"),N=Q("SMUI:icon-button:aria-describedby"),{component:D=(null==C?dn:un)}=e;J("SMUI:icon:context","icon-button");let M=null;function P(t){return t in k?k[t]:H().classList.contains(t)}function F(t){k[t]||i(17,k[t]=!0,k)}function U(t){t in k&&!k[t]||i(17,k[t]=!1,k)}function V(t){var e;return t in L?null!==(e=L[t])&&void 0!==e?e:null:H().getAttribute(t)}function B(t,e){L[t]!==e&&i(19,L[t]=e,L)}function H(){return h.getElement()}Y((()=>{p&&p.destroy()}));return t.$$set=t=>{e=n(n({},e),y(t)),i(28,o=v(e,r)),"use"in t&&i(1,f=t.use),"class"in t&&i(2,m=t.class),"style"in t&&i(3,g=t.style),"ripple"in t&&i(4,b=t.ripple),"color"in t&&i(5,$=t.color),"toggle"in t&&i(29,I=t.toggle),"pressed"in t&&i(0,_=t.pressed),"ariaLabelOn"in t&&i(6,E=t.ariaLabelOn),"ariaLabelOff"in t&&i(7,w=t.ariaLabelOff),"touch"in t&&i(8,T=t.touch),"displayFlex"in t&&i(9,S=t.displayFlex),"size"in t&&i(10,A=t.size),"href"in t&&i(11,C=t.href),"action"in t&&i(12,x=t.action),"component"in t&&i(13,D=t.component),"$$scope"in t&&i(35,c=t.$$scope)},t.$$.update=()=>{4096&t.$$.dirty[0]&&i(20,s=(()=>{if("data-table:pagination"!==R)return"dialog:header"===R?{"data-mdc-dialog-action":x}:{action:x};switch(x){case"first-page":return{"data-first-page":"true"};case"prev-page":return{"data-prev-page":"true"};case"next-page":return{"data-next-page":"true"};case"last-page":return{"data-last-page":"true"};default:return{"data-action":"true"}}})()),1610711040&t.$$.dirty[0]&&h&&H()&&I!==M&&(I&&!p?(i(16,p=new Mn({addClass:F,hasClass:P,notifyChange:t=>{!function(t){i(0,_=t.isOn)}(t),oe(H(),"SMUIIconButtonToggle:change",t,void 0,!0)},removeClass:U,getAttr:V,setAttr:B})),p.init()):!I&&p&&(p.destroy(),i(16,p=void 0),i(17,k={}),i(19,L={})),i(30,M=I)),65537&t.$$.dirty[0]&&p&&!d(_)&&p.isOn()!==_&&p.toggle(_)},[_,f,m,g,b,$,E,w,T,S,A,C,x,D,H,h,p,k,O,L,s,l,d,R,N,F,U,function(t,e){O[t]!=e&&(""===e||null==e?(delete O[t],i(18,O)):i(18,O[t]=e,O))},o,I,M,a,function(t){et[t?"unshift":"push"]((()=>{h=t,i(15,h)}))},()=>p&&p.handleClick(),()=>"top-app-bar:navigation"===R&&oe(H(),"SMUITopAppBarIconButton:nav"),c]}class Ai extends Lt{constructor(t){super(),Ot(this,t,Si,wi,a,{use:1,class:2,style:3,ripple:4,color:5,toggle:29,pressed:0,ariaLabelOn:6,ariaLabelOff:7,touch:8,displayFlex:9,size:10,href:11,action:12,component:13,getElement:14},null,[-1,-1])}get getElement(){return this.$$.ctx[14]}}function Ci(t){let e;const n=t[9].default,i=h(n,t,t[11],null);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,s){i&&i.p&&(!e||2048&s)&&m(i,n,t,t[11],e?f(n,t[11],s,null):g(t[11]),null)},i(t){e||(bt(i,t),e=!0)},o(t){$t(i,t),e=!1},d(t){i&&i.d(t)}}}function xi(t){let e,i,s;const r=[{use:[t[4],...t[0]]},{class:re({[t[1]]:!0,"mdc-button__label":"button"===t[5],"mdc-fab__label":"fab"===t[5],"mdc-tab__text-label":"tab"===t[5],"mdc-image-list__label":"image-list"===t[5],"mdc-snackbar__label":"snackbar"===t[5],"mdc-banner__text":"banner"===t[5],"mdc-segmented-button__label":"segmented-button"===t[5],"mdc-data-table__pagination-rows-per-page-label":"data-table:pagination"===t[5],"mdc-data-table__header-cell-label":"data-table:sortable-header-cell"===t[5]})},"snackbar"===t[5]?{"aria-atomic":"false"}:{},{tabindex:t[6]},t[7]];var o=t[2];function a(t){let e={$$slots:{default:[Ci]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return o&&(e=new o(a(t)),t[10](e)),{c(){e&&Ct(e.$$.fragment),i=N()},m(t,n){e&&xt(e,t,n),x(t,i,n),s=!0},p(t,[n]){const s=243&n?Tt(r,[17&n&&{use:[t[4],...t[0]]},34&n&&{class:re({[t[1]]:!0,"mdc-button__label":"button"===t[5],"mdc-fab__label":"fab"===t[5],"mdc-tab__text-label":"tab"===t[5],"mdc-image-list__label":"image-list"===t[5],"mdc-snackbar__label":"snackbar"===t[5],"mdc-banner__text":"banner"===t[5],"mdc-segmented-button__label":"segmented-button"===t[5],"mdc-data-table__pagination-rows-per-page-label":"data-table:pagination"===t[5],"mdc-data-table__header-cell-label":"data-table:sortable-header-cell"===t[5]})},32&n&&St("snackbar"===t[5]?{"aria-atomic":"false"}:{}),64&n&&{tabindex:t[6]},128&n&&St(t[7])]):{};if(2048&n&&(s.$$scope={dirty:n,ctx:t}),o!==(o=t[2])){if(e){yt();const t=e;$t(t.$$.fragment,1,0,(()=>{kt(t,1)})),vt()}o?(e=new o(a(t)),t[10](e),Ct(e.$$.fragment),bt(e.$$.fragment,1),xt(e,i.parentNode,i)):e=null}else o&&e.$set(s)},i(t){s||(e&&bt(e.$$.fragment,t),s=!0)},o(t){e&&$t(e.$$.fragment,t),s=!1},d(n){t[10](null),n&&k(i),e&&kt(e,n)}}}function ki(t,e,i){const s=["use","class","component","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;const c=ue(W());let l,{use:u=[]}=e,{class:d=""}=e,{component:h=sn}=e;const p=Q("SMUI:label:context"),f=Q("SMUI:label:tabindex");return t.$$set=t=>{e=n(n({},e),y(t)),i(7,r=v(e,s)),"use"in t&&i(0,u=t.use),"class"in t&&i(1,d=t.class),"component"in t&&i(2,h=t.component),"$$scope"in t&&i(11,a=t.$$scope)},[u,d,h,l,c,p,f,r,function(){return l.getElement()},o,function(t){et[t?"unshift":"push"]((()=>{l=t,i(3,l)}))},a]}function Oi(t){let e;const n=t[9].default,i=h(n,t,t[11],null);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,s){i&&i.p&&(!e||2048&s)&&m(i,n,t,t[11],e?f(n,t[11],s,null):g(t[11]),null)},i(t){e||(bt(i,t),e=!0)},o(t){$t(i,t),e=!1},d(t){i&&i.d(t)}}}function Li(t){let e,i,s;const r=[{use:[t[5],...t[0]]},{class:re({[t[1]]:!0,"mdc-button__icon":"button"===t[6],"mdc-fab__icon":"fab"===t[6],"mdc-icon-button__icon":"icon-button"===t[6],"mdc-icon-button__icon--on":"icon-button"===t[6]&&t[2],"mdc-tab__icon":"tab"===t[6],"mdc-banner__icon":"banner"===t[6],"mdc-segmented-button__icon":"segmented-button"===t[6]})},{"aria-hidden":"true"},t[3]===an?{focusable:"false",tabindex:"-1"}:{},t[7]];var o=t[3];function a(t){let e={$$slots:{default:[Oi]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return o&&(e=new o(a(t)),t[10](e)),{c(){e&&Ct(e.$$.fragment),i=N()},m(t,n){e&&xt(e,t,n),x(t,i,n),s=!0},p(t,[n]){const s=239&n?Tt(r,[33&n&&{use:[t[5],...t[0]]},70&n&&{class:re({[t[1]]:!0,"mdc-button__icon":"button"===t[6],"mdc-fab__icon":"fab"===t[6],"mdc-icon-button__icon":"icon-button"===t[6],"mdc-icon-button__icon--on":"icon-button"===t[6]&&t[2],"mdc-tab__icon":"tab"===t[6],"mdc-banner__icon":"banner"===t[6],"mdc-segmented-button__icon":"segmented-button"===t[6]})},r[2],8&n&&St(t[3]===an?{focusable:"false",tabindex:"-1"}:{}),128&n&&St(t[7])]):{};if(2048&n&&(s.$$scope={dirty:n,ctx:t}),o!==(o=t[3])){if(e){yt();const t=e;$t(t.$$.fragment,1,0,(()=>{kt(t,1)})),vt()}o?(e=new o(a(t)),t[10](e),Ct(e.$$.fragment),bt(e.$$.fragment,1),xt(e,i.parentNode,i)):e=null}else o&&e.$set(s)},i(t){s||(e&&bt(e.$$.fragment,t),s=!0)},o(t){e&&$t(e.$$.fragment,t),s=!1},d(n){t[10](null),n&&k(i),e&&kt(e,n)}}}function Ri(t,e,i){const s=["use","class","on","component","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;const c=ue(W());let l,{use:u=[]}=e,{class:d=""}=e,{on:h=!1}=e,{component:p=Ge}=e;const f=Q("SMUI:icon:context");return t.$$set=t=>{e=n(n({},e),y(t)),i(7,r=v(e,s)),"use"in t&&i(0,u=t.use),"class"in t&&i(1,d=t.class),"on"in t&&i(2,h=t.on),"component"in t&&i(3,p=t.component),"$$scope"in t&&i(11,a=t.$$scope)},[u,d,h,p,l,c,f,r,function(){return l.getElement()},o,function(t){et[t?"unshift":"push"]((()=>{l=t,i(4,l)}))},a]}function Ni(t){let e;const n=t[4].default,i=h(n,t,t[3],null);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,[s]){i&&i.p&&(!e||8&s)&&m(i,n,t,t[3],e?f(n,t[3],s,null):g(t[3]),null)},i(t){e||(bt(i,t),e=!0)},o(t){$t(i,t),e=!1},d(t){i&&i.d(t)}}}function Di(t,e,n){let i,{$$slots:s={},$$scope:r}=e,{key:o}=e,{value:a}=e;const c=se(a);return d(t,c,(t=>n(5,i=t))),J(o,c),Y((()=>{c.set(void 0)})),t.$$set=t=>{"key"in t&&n(1,o=t.key),"value"in t&&n(2,a=t.value),"$$scope"in t&&n(3,r=t.$$scope)},t.$$.update=()=>{4&t.$$.dirty&&b(c,i=a,i)},[c,o,a,r,s]}class Mi extends Lt{constructor(t){super(),Ot(this,t,Di,Ni,a,{key:1,value:2})}}const Pi=class extends Lt{constructor(t){super(),Ot(this,t,ki,xi,a,{use:0,class:1,component:2,getElement:8})}get getElement(){return this.$$.ctx[8]}},Fi=class extends Lt{constructor(t){super(),Ot(this,t,Ri,Li,a,{use:0,class:1,on:2,component:3,getElement:8})}get getElement(){return this.$$.ctx[8]}};function Ui(t){let e,i,s,a,c,l;const u=t[12].default,d=h(u,t,t[11],null);let p=[{class:i=re({[t[1]]:!0,"smui-paper":!0,"smui-paper--raised":"raised"===t[2],"smui-paper--unelevated":"unelevated"===t[2],"smui-paper--outlined":"outlined"===t[2],["smui-paper--elevation-z"+t[5]]:0!==t[5]&&"raised"===t[2],"smui-paper--rounded":!t[3],["smui-paper--color-"+t[4]]:"default"!==t[4],"smui-paper-transition":t[6]})},t[9]],y={};for(let t=0;t<p.length;t+=1)y=n(y,p[t]);return{c(){e=O("div"),d&&d.c(),P(e,y)},m(n,i){x(n,e,i),d&&d.m(e,null),t[13](e),a=!0,c||(l=[$(s=he.call(null,e,t[0])),$(t[8].call(null,e))],c=!0)},p(t,[n]){d&&d.p&&(!a||2048&n)&&m(d,u,t,t[11],a?f(u,t[11],n,null):g(t[11]),null),P(e,y=Tt(p,[(!a||126&n&&i!==(i=re({[t[1]]:!0,"smui-paper":!0,"smui-paper--raised":"raised"===t[2],"smui-paper--unelevated":"unelevated"===t[2],"smui-paper--outlined":"outlined"===t[2],["smui-paper--elevation-z"+t[5]]:0!==t[5]&&"raised"===t[2],"smui-paper--rounded":!t[3],["smui-paper--color-"+t[4]]:"default"!==t[4],"smui-paper-transition":t[6]})))&&{class:i},512&n&&t[9]])),s&&o(s.update)&&1&n&&s.update.call(null,t[0])},i(t){a||(bt(d,t),a=!0)},o(t){$t(d,t),a=!1},d(n){n&&k(e),d&&d.d(n),t[13](null),c=!1,r(l)}}}function Vi(t,e,i){const s=["use","class","variant","square","color","elevation","transition","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;const c=ue(W());let l,{use:u=[]}=e,{class:d=""}=e,{variant:h="raised"}=e,{square:p=!1}=e,{color:f="default"}=e,{elevation:m=1}=e,{transition:g=!1}=e;return t.$$set=t=>{e=n(n({},e),y(t)),i(9,r=v(e,s)),"use"in t&&i(0,u=t.use),"class"in t&&i(1,d=t.class),"variant"in t&&i(2,h=t.variant),"square"in t&&i(3,p=t.square),"color"in t&&i(4,f=t.color),"elevation"in t&&i(5,m=t.elevation),"transition"in t&&i(6,g=t.transition),"$$scope"in t&&i(11,a=t.$$scope)},[u,d,h,p,f,m,g,l,c,r,function(){return l},a,o,function(t){et[t?"unshift":"push"]((()=>{l=t,i(7,l)}))}]}class Bi extends Lt{constructor(t){super(),Ot(this,t,Vi,Ui,a,{use:0,class:1,variant:2,square:3,color:4,elevation:5,transition:6,getElement:10})}get getElement(){return this.$$.ctx[10]}}Ae({class:"smui-paper__content",component:hn});var Hi=Ae({class:"smui-paper__title",component:gn}),ji=Ae({class:"smui-paper__subtitle",component:yn}),qi={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},zi=function(t){function e(n){var i=t.call(this,Dt(Dt({},e.defaultAdapter),n))||this;return i.shakeAnimationEndHandler=function(){i.handleShakeAnimationEnd()},i}return Nt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return qi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var n=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.float=function(t){var n=e.cssClasses,i=n.LABEL_FLOAT_ABOVE,s=n.LABEL_SHAKE;t?this.adapter.addClass(i):(this.adapter.removeClass(i),this.adapter.removeClass(s))},e.prototype.setRequired=function(t){var n=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleShakeAnimationEnd=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(Ft),Gi={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},Ki=function(t){function e(n){var i=t.call(this,Dt(Dt({},e.defaultAdapter),n))||this;return i.transitionEndHandler=function(t){i.handleTransitionEnd(t)},i}return Nt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Gi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(Gi.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(Gi.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(Gi.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var e=this.adapter.hasClass(Gi.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter.removeClass(Gi.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(Gi.LINE_RIPPLE_DEACTIVATING))},e}(Ft),Wi={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Xi={NOTCH_ELEMENT_PADDING:8},Yi={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},Ji=function(t){function e(n){return t.call(this,Dt(Dt({},e.defaultAdapter),n))||this}return Nt(e,t),Object.defineProperty(e,"strings",{get:function(){return Wi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Yi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Xi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(t){var n=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=Xi.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(n)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(Ft),Qi={ROOT:"mdc-text-field-character-counter"},Zi={ROOT_SELECTOR:"."+Qi.ROOT},ts=function(t){function e(n){return t.call(this,Dt(Dt({},e.defaultAdapter),n))||this}return Nt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Qi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Zi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setCounterValue=function(t,e){t=Math.min(t,e),this.adapter.setContent(t+" / "+e)},e}(Ft),es={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},ns={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},is={LABEL_SCALE:.75},ss=["pattern","min","max","required","step","minlength","maxlength"],rs=["color","date","datetime-local","month","range","time","week"],os=["mousedown","touchstart"],as=["click","keydown"],cs=function(t){function e(n,i){void 0===i&&(i={});var s=t.call(this,Dt(Dt({},e.defaultAdapter),n))||this;return s.isFocused=!1,s.receivedUserInput=!1,s.valid=!0,s.useNativeValidation=!0,s.validateOnValueChange=!0,s.helperText=i.helperText,s.characterCounter=i.characterCounter,s.leadingIcon=i.leadingIcon,s.trailingIcon=i.trailingIcon,s.inputFocusHandler=function(){s.activateFocus()},s.inputBlurHandler=function(){s.deactivateFocus()},s.inputInputHandler=function(){s.handleInput()},s.setPointerXOffset=function(t){s.setTransformOrigin(t)},s.textFieldInteractionHandler=function(){s.handleTextFieldInteraction()},s.validationAttributeChangeHandler=function(t){s.handleValidationAttributeChange(t)},s}return Nt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return ns},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return es},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return is},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return rs.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,e,n,i;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var s=Pt(os),r=s.next();!r.done;r=s.next()){var o=r.value;this.adapter.registerInputInteractionHandler(o,this.setPointerXOffset)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}try{for(var a=Pt(as),c=a.next();!c.done;c=a.next()){o=c.value;this.adapter.registerTextFieldInteractionHandler(o,this.textFieldInteractionHandler)}}catch(t){n={error:t}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,e,n,i;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var s=Pt(os),r=s.next();!r.done;r=s.next()){var o=r.value;this.adapter.deregisterInputInteractionHandler(o,this.setPointerXOffset)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}try{for(var a=Pt(as),c=a.next();!c.done;c=a.next()){o=c.value;this.adapter.deregisterTextFieldInteractionHandler(o,this.textFieldInteractionHandler)}}catch(t){n={error:t}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var e=this;t.some((function(t){return ss.indexOf(t)>-1&&(e.styleValidity(!0),e.adapter.setLabelRequired(e.getNativeInput().required),!0)})),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(this.adapter.hasOutline()&&this.adapter.hasLabel())if(t){var e=this.adapter.getLabelWidth()*is.LABEL_SCALE;this.adapter.notchOutline(e)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),!this.helperText||!this.helperText.isPersistent()&&this.helperText.isValidation()&&this.valid||this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!this.isDisabled()&&!this.adapter.hasOutline()){var e=t.touches,n=e?e[0]:t,i=n.target.getBoundingClientRect(),s=n.clientX-i.left;this.adapter.setLineRippleTransformOrigin(s)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var e=this.isValid();this.styleValidity(e)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var e=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(e)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(this.characterCounter){var e=this.getNativeInput().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,e)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var n=e.cssClasses.INVALID;if(t?this.adapter.removeClass(n):this.adapter.addClass(n),this.helperText){if(this.helperText.setValidity(t),!this.helperText.isValidation())return;var i=this.helperText.isVisible(),s=this.helperText.getId();i&&s?this.adapter.setInputAttr(es.ARIA_DESCRIBEDBY,s):this.adapter.removeInputAttr(es.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.styleDisabled=function(t){var n=e.cssClasses,i=n.DISABLED,s=n.INVALID;t?(this.adapter.addClass(i),this.adapter.removeClass(s)):this.adapter.removeClass(i),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var n=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getNativeInput=function(){return(this.adapter?this.adapter.getNativeInput():null)||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(Ft);function ls(t){let e,i,s,a,c,l,u,d;const p=t[22].default,y=h(p,t,t[21],null);let v=[{class:i=re({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1],...t[8]})},{style:s=Object.entries(t[9]).map(ps).concat([t[4]]).join(" ")},{for:a=t[5]||(t[11]?t[11].id:void 0)},t[12]],b={};for(let t=0;t<v.length;t+=1)b=n(b,v[t]);return{c(){e=O("label"),y&&y.c(),P(e,b)},m(n,i){x(n,e,i),y&&y.m(e,null),t[24](e),l=!0,u||(d=[$(c=he.call(null,e,t[2])),$(t[10].call(null,e))],u=!0)},p(t,n){y&&y.p&&(!l||2097152&n)&&m(y,p,t,t[21],l?f(p,t[21],n,null):g(t[21]),null),P(e,b=Tt(v,[(!l||267&n&&i!==(i=re({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1],...t[8]})))&&{class:i},(!l||528&n&&s!==(s=Object.entries(t[9]).map(ps).concat([t[4]]).join(" ")))&&{style:s},(!l||32&n&&a!==(a=t[5]||(t[11]?t[11].id:void 0)))&&{for:a},4096&n&&t[12]])),c&&o(c.update)&&4&n&&c.update.call(null,t[2])},i(t){l||(bt(y,t),l=!0)},o(t){$t(y,t),l=!1},d(n){n&&k(e),y&&y.d(n),t[24](null),u=!1,r(d)}}}function us(t){let e,i,s,a,c,l,u;const d=t[22].default,p=h(d,t,t[21],null);let y=[{class:i=re({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1],...t[8]})},{style:s=Object.entries(t[9]).map(hs).concat([t[4]]).join(" ")},t[12]],v={};for(let t=0;t<y.length;t+=1)v=n(v,y[t]);return{c(){e=O("span"),p&&p.c(),P(e,v)},m(n,i){x(n,e,i),p&&p.m(e,null),t[23](e),c=!0,l||(u=[$(a=he.call(null,e,t[2])),$(t[10].call(null,e))],l=!0)},p(t,n){p&&p.p&&(!c||2097152&n)&&m(p,d,t,t[21],c?f(d,t[21],n,null):g(t[21]),null),P(e,v=Tt(y,[(!c||267&n&&i!==(i=re({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1],...t[8]})))&&{class:i},(!c||528&n&&s!==(s=Object.entries(t[9]).map(hs).concat([t[4]]).join(" ")))&&{style:s},4096&n&&t[12]])),a&&o(a.update)&&4&n&&a.update.call(null,t[2])},i(t){c||(bt(p,t),c=!0)},o(t){$t(p,t),c=!1},d(n){n&&k(e),p&&p.d(n),t[23](null),l=!1,r(u)}}}function ds(t){let e,n,i,s;const r=[us,ls],o=[];function a(t,e){return t[6]?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),i=N()},m(t,n){o[e].m(t,n),x(t,i,n),s=!0},p(t,[s]){let c=e;e=a(t),e===c?o[e].p(t,s):(yt(),$t(o[c],1,1,(()=>{o[c]=null})),vt(),n=o[e],n?n.p(t,s):(n=o[e]=r[e](t),n.c()),bt(n,1),n.m(i.parentNode,i))},i(t){s||(bt(n),s=!0)},o(t){$t(n),s=!1},d(t){o[e].d(t),t&&k(i)}}}const hs=([t,e])=>`${t}: ${e};`,ps=([t,e])=>`${t}: ${e};`;function fs(t,e,i){const s=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;var c;const l=ue(W());let u,d,{use:h=[]}=e,{class:p=""}=e,{style:f=""}=e,{for:m}=e,{floatAbove:g=!1}=e,{required:b=!1}=e,{wrapped:$=!1}=e,I={},_={},E=null!==(c=Q("SMUI:generic:input:props"))&&void 0!==c?c:{},w=g,T=b;function S(t){I[t]||i(8,I[t]=!0,I)}function A(t){t in I&&!I[t]||i(8,I[t]=!1,I)}function C(t,e){_[t]!=e&&(""===e||null==e?(delete _[t],i(9,_)):i(9,_[t]=e,_))}function x(t){t in _&&(delete _[t],i(9,_))}function k(){return u}return X((()=>{i(18,d=new zi({addClass:S,removeClass:A,getWidth:()=>{var t,e;const n=k(),i=n.cloneNode(!0);null===(t=n.parentNode)||void 0===t||t.appendChild(i),i.classList.add("smui-floating-label--remove-transition"),i.classList.add("smui-floating-label--force-size"),i.classList.remove("mdc-floating-label--float-above");const s=i.scrollWidth;return null===(e=n.parentNode)||void 0===e||e.removeChild(i),s},registerInteractionHandler:(t,e)=>k().addEventListener(t,e),deregisterInteractionHandler:(t,e)=>k().removeEventListener(t,e)}));const t={get element(){return k()},addStyle:C,removeStyle:x};return oe(u,"SMUIFloatingLabel:mount",t),d.init(),()=>{oe(u,"SMUIFloatingLabel:unmount",t),d.destroy()}})),t.$$set=t=>{e=n(n({},e),y(t)),i(12,r=v(e,s)),"use"in t&&i(2,h=t.use),"class"in t&&i(3,p=t.class),"style"in t&&i(4,f=t.style),"for"in t&&i(5,m=t.for),"floatAbove"in t&&i(0,g=t.floatAbove),"required"in t&&i(1,b=t.required),"wrapped"in t&&i(6,$=t.wrapped),"$$scope"in t&&i(21,a=t.$$scope)},t.$$.update=()=>{786433&t.$$.dirty&&d&&w!==g&&(i(19,w=g),d.float(g)),1310722&t.$$.dirty&&d&&T!==b&&(i(20,T=b),d.setRequired(b))},[g,b,h,p,f,m,$,u,I,_,l,E,r,function(t){d.shake(t)},function(t){i(0,g=t)},function(t){i(1,b=t)},function(){return d.getWidth()},k,d,w,T,a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(7,u)}))},function(t){et[t?"unshift":"push"]((()=>{u=t,i(7,u)}))}]}class ms extends Lt{constructor(t){super(),Ot(this,t,fs,ds,a,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function gs(e){let i,s,a,c,l,u,d=[{class:s=re({[e[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":e[3],...e[5]})},{style:a=Object.entries(e[6]).map(ys).concat([e[2]]).join(" ")},e[8]],h={};for(let t=0;t<d.length;t+=1)h=n(h,d[t]);return{c(){i=O("div"),P(i,h)},m(t,n){x(t,i,n),e[13](i),l||(u=[$(c=he.call(null,i,e[0])),$(e[7].call(null,i))],l=!0)},p(t,[e]){P(i,h=Tt(d,[42&e&&s!==(s=re({[t[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":t[3],...t[5]}))&&{class:s},68&e&&a!==(a=Object.entries(t[6]).map(ys).concat([t[2]]).join(" "))&&{style:a},256&e&&t[8]])),c&&o(c.update)&&1&e&&c.update.call(null,t[0])},i:t,o:t,d(t){t&&k(i),e[13](null),l=!1,r(u)}}}const ys=([t,e])=>`${t}: ${e};`;function vs(t,e,i){const s=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let r=v(e,s);const o=ue(W());let a,c,{use:l=[]}=e,{class:u=""}=e,{style:d=""}=e,{active:h=!1}=e,p={},f={};function m(t){return t in p?p[t]:I().classList.contains(t)}function g(t){p[t]||i(5,p[t]=!0,p)}function b(t){t in p&&!p[t]||i(5,p[t]=!1,p)}function $(t,e){f[t]!=e&&(""===e||null==e?(delete f[t],i(6,f)):i(6,f[t]=e,f))}function I(){return a}return X((()=>(c=new Ki({addClass:g,removeClass:b,hasClass:m,setStyle:$,registerEventHandler:(t,e)=>I().addEventListener(t,e),deregisterEventHandler:(t,e)=>I().removeEventListener(t,e)}),c.init(),()=>{c.destroy()}))),t.$$set=t=>{e=n(n({},e),y(t)),i(8,r=v(e,s)),"use"in t&&i(0,l=t.use),"class"in t&&i(1,u=t.class),"style"in t&&i(2,d=t.style),"active"in t&&i(3,h=t.active)},[l,u,d,h,a,p,f,o,r,function(){c.activate()},function(){c.deactivate()},function(t){c.setRippleCenter(t)},I,function(t){et[t?"unshift":"push"]((()=>{a=t,i(4,a)}))}]}class bs extends Lt{constructor(t){super(),Ot(this,t,vs,gs,a,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function $s(t){let e,n,i;const s=t[14].default,r=h(s,t,t[13],null);return{c(){e=O("div"),r&&r.c(),M(e,"class","mdc-notched-outline__notch"),M(e,"style",n=Object.entries(t[7]).map(_s).join(" "))},m(t,n){x(t,e,n),r&&r.m(e,null),i=!0},p(t,o){r&&r.p&&(!i||8192&o)&&m(r,s,t,t[13],i?f(s,t[13],o,null):g(t[13]),null),(!i||128&o&&n!==(n=Object.entries(t[7]).map(_s).join(" ")))&&M(e,"style",n)},i(t){i||(bt(r,t),i=!0)},o(t){$t(r,t),i=!1},d(t){t&&k(e),r&&r.d(t)}}}function Is(t){let e,i,s,a,c,l,u,d,h,p,f=!t[3]&&$s(t),m=[{class:l=re({[t[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":t[2],"mdc-notched-outline--no-label":t[3],...t[6]})},t[9]],g={};for(let t=0;t<m.length;t+=1)g=n(g,m[t]);return{c(){e=O("div"),i=O("div"),s=R(),f&&f.c(),a=R(),c=O("div"),M(i,"class","mdc-notched-outline__leading"),M(c,"class","mdc-notched-outline__trailing"),P(e,g)},m(n,r){x(n,e,r),S(e,i),S(e,s),f&&f.m(e,null),S(e,a),S(e,c),t[15](e),d=!0,h||(p=[$(u=he.call(null,e,t[0])),$(t[8].call(null,e)),D(e,"SMUIFloatingLabel:mount",t[16]),D(e,"SMUIFloatingLabel:unmount",t[17])],h=!0)},p(t,[n]){t[3]?f&&(yt(),$t(f,1,1,(()=>{f=null})),vt()):f?(f.p(t,n),8&n&&bt(f,1)):(f=$s(t),f.c(),bt(f,1),f.m(e,a)),P(e,g=Tt(m,[(!d||78&n&&l!==(l=re({[t[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":t[2],"mdc-notched-outline--no-label":t[3],...t[6]})))&&{class:l},512&n&&t[9]])),u&&o(u.update)&&1&n&&u.update.call(null,t[0])},i(t){d||(bt(f),d=!0)},o(t){$t(f),d=!1},d(n){n&&k(e),f&&f.d(),t[15](null),h=!1,r(p)}}}const _s=([t,e])=>`${t}: ${e};`;function Es(t,e,i){const s=["use","class","notched","noLabel","notch","closeNotch","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;const c=ue(W());let l,u,d,{use:h=[]}=e,{class:p=""}=e,{notched:f=!1}=e,{noLabel:m=!1}=e,g={},b={};function $(t){g[t]||i(6,g[t]=!0,g)}function I(t){t in g&&!g[t]||i(6,g[t]=!1,g)}X((()=>(u=new Ji({addClass:$,removeClass:I,setNotchWidthProperty:t=>function(t,e){b[t]!=e&&(""===e||null==e?(delete b[t],i(7,b)):i(7,b[t]=e,b))}("width",t+"px"),removeNotchWidthProperty:()=>function(t){t in b&&(delete b[t],i(7,b))}("width")}),u.init(),()=>{u.destroy()})));return t.$$set=t=>{e=n(n({},e),y(t)),i(9,r=v(e,s)),"use"in t&&i(0,h=t.use),"class"in t&&i(1,p=t.class),"notched"in t&&i(2,f=t.notched),"noLabel"in t&&i(3,m=t.noLabel),"$$scope"in t&&i(13,a=t.$$scope)},t.$$.update=()=>{16&t.$$.dirty&&(d?(d.addStyle("transition-duration","0s"),$("mdc-notched-outline--upgraded"),requestAnimationFrame((()=>{d&&d.removeStyle("transition-duration")}))):I("mdc-notched-outline--upgraded"))},[h,p,f,m,d,l,g,b,c,r,function(t){u.notch(t)},function(){u.closeNotch()},function(){return l},a,o,function(t){et[t?"unshift":"push"]((()=>{l=t,i(5,l)}))},t=>i(4,d=t.detail),()=>i(4,d=void 0)]}class ws extends Lt{constructor(t){super(),Ot(this,t,Es,Is,a,{use:0,class:1,notched:2,noLabel:3,notch:10,closeNotch:11,getElement:12})}get notch(){return this.$$.ctx[10]}get closeNotch(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var Ts=Ae({class:"mdc-text-field-helper-line",component:hn}),Ss=Ae({class:"mdc-text-field__affix mdc-text-field__affix--prefix",component:En}),As=Ae({class:"mdc-text-field__affix mdc-text-field__affix--suffix",component:En});function Cs(e){let i,s,a,c,l,u=[{class:s=re({[e[1]]:!0,"mdc-text-field__input":!0})},{type:e[2]},{placeholder:e[3]},e[4],e[6],e[10]],d={};for(let t=0;t<u.length;t+=1)d=n(d,u[t]);return{c(){i=O("input"),P(i,d)},m(t,n){x(t,i,n),i.autofocus&&i.focus(),e[26](i),c||(l=[$(a=he.call(null,i,e[0])),$(e[7].call(null,i)),D(i,"input",e[27]),D(i,"change",e[9]),D(i,"blur",e[24]),D(i,"focus",e[25])],c=!0)},p(t,[e]){P(i,d=Tt(u,[2&e&&s!==(s=re({[t[1]]:!0,"mdc-text-field__input":!0}))&&{class:s},4&e&&{type:t[2]},8&e&&{placeholder:t[3]},16&e&&t[4],64&e&&t[6],1024&e&&t[10]])),a&&o(a.update)&&1&e&&a.update.call(null,t[0])},i:t,o:t,d(t){t&&k(i),e[26](null),c=!1,r(l)}}}function xs(t,e,i){const s=["use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","blur","getElement"];let r=v(e,s);const o=ue(W());let a=()=>{};let{use:c=[]}=e,{class:l=""}=e,{type:u="text"}=e,{placeholder:d=" "}=e,{value:h=a}=e;const p=function(t){return t===a}(h);p&&(h="");let{files:f=null}=e,{dirty:m=!1}=e,{invalid:g=!1}=e,{updateInvalid:b=!0}=e,{emptyValueNull:$=null===h}=e;p&&$&&(h=null);let I,{emptyValueUndefined:_=void 0===h}=e;p&&_&&(h=void 0);let E={},w={};function T(t){if("file"!==u)if(""===t.currentTarget.value&&$)i(11,h=null);else if(""===t.currentTarget.value&&_)i(11,h=void 0);else switch(u){case"number":case"range":i(11,h=function(t){if(""===t){const t=new Number(Number.NaN);return t.length=0,t}return+t}(t.currentTarget.value));break;default:i(11,h=t.currentTarget.value)}else i(12,f=t.currentTarget.files)}function S(){return I}X((()=>{b&&i(14,g=I.matches(":invalid"))}));return t.$$set=t=>{e=n(n({},e),y(t)),i(10,r=v(e,s)),"use"in t&&i(0,c=t.use),"class"in t&&i(1,l=t.class),"type"in t&&i(2,u=t.type),"placeholder"in t&&i(3,d=t.placeholder),"value"in t&&i(11,h=t.value),"files"in t&&i(12,f=t.files),"dirty"in t&&i(13,m=t.dirty),"invalid"in t&&i(14,g=t.invalid),"updateInvalid"in t&&i(15,b=t.updateInvalid),"emptyValueNull"in t&&i(16,$=t.emptyValueNull),"emptyValueUndefined"in t&&i(17,_=t.emptyValueUndefined)},t.$$.update=()=>{2068&t.$$.dirty&&("file"===u?(delete w.value,i(4,w),i(2,u),i(11,h)):i(4,w.value=null==h?"":h,w))},[c,l,u,d,w,I,E,o,T,function(t){"file"!==u&&"range"!==u||T(t),i(13,m=!0),b&&i(14,g=I.matches(":invalid"))},r,h,f,m,g,b,$,_,function(t){var e;return t in E?null!==(e=E[t])&&void 0!==e?e:null:S().getAttribute(t)},function(t,e){E[t]!==e&&i(6,E[t]=e,E)},function(t){t in E&&null==E[t]||i(6,E[t]=void 0,E)},function(){S().focus()},function(){S().blur()},S,function(e){Z.call(this,t,e)},function(e){Z.call(this,t,e)},function(t){et[t?"unshift":"push"]((()=>{I=t,i(5,I)}))},t=>"file"!==u&&T(t)]}class ks extends Lt{constructor(t){super(),Ot(this,t,xs,Cs,a,{use:0,class:1,type:2,placeholder:3,value:11,files:12,dirty:13,invalid:14,updateInvalid:15,emptyValueNull:16,emptyValueUndefined:17,getAttr:18,addAttr:19,removeAttr:20,focus:21,blur:22,getElement:23})}get getAttr(){return this.$$.ctx[18]}get addAttr(){return this.$$.ctx[19]}get removeAttr(){return this.$$.ctx[20]}get focus(){return this.$$.ctx[21]}get blur(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}function Os(e){let i,s,a,c,l,u,d=[{class:s=re({[e[2]]:!0,"mdc-text-field__input":!0})},{style:a=`${e[4]?"":"resize: none; "}${e[3]}`},e[6],e[9]],h={};for(let t=0;t<d.length;t+=1)h=n(h,d[t]);return{c(){i=O("textarea"),P(i,h)},m(t,n){x(t,i,n),i.autofocus&&i.focus(),e[21](i),V(i,e[0]),l||(u=[$(c=he.call(null,i,e[1])),$(e[7].call(null,i)),D(i,"change",e[8]),D(i,"blur",e[19]),D(i,"focus",e[20]),D(i,"input",e[22])],l=!0)},p(t,[e]){P(i,h=Tt(d,[4&e&&s!==(s=re({[t[2]]:!0,"mdc-text-field__input":!0}))&&{class:s},24&e&&a!==(a=`${t[4]?"":"resize: none; "}${t[3]}`)&&{style:a},64&e&&t[6],512&e&&t[9]])),c&&o(c.update)&&2&e&&c.update.call(null,t[1]),1&e&&V(i,t[0])},i:t,o:t,d(t){t&&k(i),e[21](null),l=!1,r(u)}}}function Ls(t,e,i){const s=["use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","blur","getElement"];let r=v(e,s);const o=ue(W());let a,{use:c=[]}=e,{class:l=""}=e,{style:u=""}=e,{value:d=""}=e,{dirty:h=!1}=e,{invalid:p=!1}=e,{updateInvalid:f=!0}=e,{resizable:m=!0}=e,g={};function b(){return a}return X((()=>{f&&i(11,p=a.matches(":invalid"))})),t.$$set=t=>{e=n(n({},e),y(t)),i(9,r=v(e,s)),"use"in t&&i(1,c=t.use),"class"in t&&i(2,l=t.class),"style"in t&&i(3,u=t.style),"value"in t&&i(0,d=t.value),"dirty"in t&&i(10,h=t.dirty),"invalid"in t&&i(11,p=t.invalid),"updateInvalid"in t&&i(12,f=t.updateInvalid),"resizable"in t&&i(4,m=t.resizable)},[d,c,l,u,m,a,g,o,function(){i(10,h=!0),f&&i(11,p=a.matches(":invalid"))},r,h,p,f,function(t){var e;return t in g?null!==(e=g[t])&&void 0!==e?e:null:b().getAttribute(t)},function(t,e){g[t]!==e&&i(6,g[t]=e,g)},function(t){t in g&&null==g[t]||i(6,g[t]=void 0,g)},function(){b().focus()},function(){b().blur()},b,function(e){Z.call(this,t,e)},function(e){Z.call(this,t,e)},function(t){et[t?"unshift":"push"]((()=>{a=t,i(5,a)}))},function(){d=this.value,i(0,d)}]}class Rs extends Lt{constructor(t){super(),Ot(this,t,Ls,Os,a,{use:1,class:2,style:3,value:0,dirty:10,invalid:11,updateInvalid:12,resizable:4,getAttr:13,addAttr:14,removeAttr:15,focus:16,blur:17,getElement:18})}get getAttr(){return this.$$.ctx[13]}get addAttr(){return this.$$.ctx[14]}get removeAttr(){return this.$$.ctx[15]}get focus(){return this.$$.ctx[16]}get blur(){return this.$$.ctx[17]}get getElement(){return this.$$.ctx[18]}}const Ns=t=>({}),Ds=t=>({}),Ms=t=>({}),Ps=t=>({}),Fs=t=>({}),Us=t=>({}),Vs=t=>({}),Bs=t=>({}),Hs=t=>({}),js=t=>({}),qs=t=>({}),zs=t=>({}),Gs=t=>({}),Ks=t=>({}),Ws=t=>({}),Xs=t=>({}),Ys=t=>({}),Js=t=>({}),Qs=t=>({}),Zs=t=>({}),tr=t=>({}),er=t=>({}),nr=t=>({}),ir=t=>({});function sr(t){let e,i,s,a,c,l,u,d,p,y,v,b,I,_;const E=t[51].label,w=h(E,t,t[90],js);s=new Mi({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[or]},$$scope:{ctx:t}}});const T=t[51].default,A=h(T,t,t[90],null);l=new Mi({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[ar]},$$scope:{ctx:t}}});const C=t[51].ripple,L=h(C,t,t[90],Ps);let N=[{class:d=re({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":"filled"===t[15],"mdc-text-field--outlined":"outlined"===t[15],"smui-text-field--standard":"standard"===t[15]&&!t[14],"mdc-text-field--no-label":t[16]||!t[42].label,"mdc-text-field--with-leading-icon":t[42].leadingIcon,"mdc-text-field--with-trailing-icon":t[42].trailingIcon,"mdc-text-field--invalid":t[1],...t[25]})},{style:p=Object.entries(t[26]).map(xr).concat([t[10]]).join(" ")},ae(t[41],["input$","label$","ripple$","outline$","helperLine$"])],M={};for(let t=0;t<N.length;t+=1)M=n(M,N[t]);return{c(){e=O("div"),w&&w.c(),i=R(),Ct(s.$$.fragment),a=R(),A&&A.c(),c=R(),Ct(l.$$.fragment),u=R(),L&&L.c(),P(e,M)},m(n,r){x(n,e,r),w&&w.m(e,null),S(e,i),xt(s,e,null),S(e,a),A&&A.m(e,null),S(e,c),xt(l,e,null),S(e,u),L&&L.m(e,null),t[80](e),b=!0,I||(_=[$(y=Ii.call(null,e,{ripple:t[11],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40]})),$(v=he.call(null,e,t[8])),$(t[34].call(null,e)),D(e,"SMUITextfieldLeadingIcon:mount",t[81]),D(e,"SMUITextfieldLeadingIcon:unmount",t[82]),D(e,"SMUITextfieldTrailingIcon:mount",t[83]),D(e,"SMUITextfieldTrailingIcon:unmount",t[84])],I=!0)},p(t,n){w&&w.p&&(!b||268435456&n[2])&&m(w,E,t,t[90],b?f(E,t[90],n,Hs):g(t[90]),js);const i={};268435456&n[2]&&(i.$$scope={dirty:n,ctx:t}),s.$set(i),A&&A.p&&(!b||268435456&n[2])&&m(A,T,t,t[90],b?f(T,t[90],n,null):g(t[90]),null);const r={};268435456&n[2]&&(r.$$scope={dirty:n,ctx:t}),l.$set(r),L&&L.p&&(!b||268435456&n[2])&&m(L,C,t,t[90],b?f(C,t[90],n,Ms):g(t[90]),Ps),P(e,M=Tt(N,[(!b||33673730&n[0]|2048&n[1]&&d!==(d=re({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":"filled"===t[15],"mdc-text-field--outlined":"outlined"===t[15],"smui-text-field--standard":"standard"===t[15]&&!t[14],"mdc-text-field--no-label":t[16]||!t[42].label,"mdc-text-field--with-leading-icon":t[42].leadingIcon,"mdc-text-field--with-trailing-icon":t[42].trailingIcon,"mdc-text-field--invalid":t[1],...t[25]})))&&{class:d},(!b||67109888&n[0]&&p!==(p=Object.entries(t[26]).map(xr).concat([t[10]]).join(" ")))&&{style:p},1024&n[1]&&ae(t[41],["input$","label$","ripple$","outline$","helperLine$"])])),y&&o(y.update)&&2048&n[0]&&y.update.call(null,{ripple:t[11],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40]}),v&&o(v.update)&&256&n[0]&&v.update.call(null,t[8])},i(t){b||(bt(w,t),bt(s.$$.fragment,t),bt(A,t),bt(l.$$.fragment,t),bt(L,t),b=!0)},o(t){$t(w,t),$t(s.$$.fragment,t),$t(A,t),$t(l.$$.fragment,t),$t(L,t),b=!1},d(n){n&&k(e),w&&w.d(n),kt(s),A&&A.d(n),kt(l),L&&L.d(n),t[80](null),I=!1,r(_)}}}function rr(t){let e,i,s,a,c,l,u,d,p,y,v,b,I,_,E,w,T,A,C=!t[14]&&"outlined"!==t[15]&&cr(t),L=(t[14]||"outlined"===t[15])&&hr(t);a=new Mi({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[gr]},$$scope:{ctx:t}}});const N=t[51].default,M=h(N,t,t[90],null),F=[vr,yr],U=[];function V(t,e){return t[14]&&"string"==typeof t[0]?0:1}u=V(t),d=U[u]=F[u](t),y=new Mi({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[Er]},$$scope:{ctx:t}}});let B=!t[14]&&"outlined"!==t[15]&&t[11]&&wr(t),H=[{class:b=re({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":"filled"===t[15],"mdc-text-field--outlined":"outlined"===t[15],"smui-text-field--standard":"standard"===t[15]&&!t[14],"mdc-text-field--no-label":t[16]||null==t[17]&&!t[42].label,"mdc-text-field--label-floating":t[28]||null!=t[0]&&""!==t[0],"mdc-text-field--with-leading-icon":t[35](t[22])?t[42].leadingIcon:t[22],"mdc-text-field--with-trailing-icon":t[35](t[23])?t[42].trailingIcon:t[23],"mdc-text-field--with-internal-counter":t[14]&&t[42].internalCounter,"mdc-text-field--invalid":t[1],...t[25]})},{style:I=Object.entries(t[26]).map(Cr).concat([t[10]]).join(" ")},{for:void 0},ae(t[41],["input$","label$","ripple$","outline$","helperLine$"])],j={};for(let t=0;t<H.length;t+=1)j=n(j,H[t]);return{c(){e=O("label"),C&&C.c(),i=R(),L&&L.c(),s=R(),Ct(a.$$.fragment),c=R(),M&&M.c(),l=R(),d.c(),p=R(),Ct(y.$$.fragment),v=R(),B&&B.c(),P(e,j)},m(n,r){x(n,e,r),C&&C.m(e,null),S(e,i),L&&L.m(e,null),S(e,s),xt(a,e,null),S(e,c),M&&M.m(e,null),S(e,l),U[u].m(e,null),S(e,p),xt(y,e,null),S(e,v),B&&B.m(e,null),t[73](e),w=!0,T||(A=[$(_=Ii.call(null,e,{ripple:!t[14]&&"filled"===t[15],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40],eventTarget:t[33],activeTarget:t[33],initPromise:t[37]})),$(E=he.call(null,e,t[8])),$(t[34].call(null,e)),D(e,"SMUITextfieldLeadingIcon:mount",t[74]),D(e,"SMUITextfieldLeadingIcon:unmount",t[75]),D(e,"SMUITextfieldTrailingIcon:mount",t[76]),D(e,"SMUITextfieldTrailingIcon:unmount",t[77]),D(e,"SMUITextfieldCharacterCounter:mount",t[78]),D(e,"SMUITextfieldCharacterCounter:unmount",t[79])],T=!0)},p(t,n){t[14]||"outlined"===t[15]?C&&(yt(),$t(C,1,1,(()=>{C=null})),vt()):C?(C.p(t,n),49152&n[0]&&bt(C,1)):(C=cr(t),C.c(),bt(C,1),C.m(e,i)),t[14]||"outlined"===t[15]?L?(L.p(t,n),49152&n[0]&&bt(L,1)):(L=hr(t),L.c(),bt(L,1),L.m(e,s)):L&&(yt(),$t(L,1,1,(()=>{L=null})),vt());const r={};268435456&n[2]&&(r.$$scope={dirty:n,ctx:t}),a.$set(r),M&&M.p&&(!w||268435456&n[2])&&m(M,N,t,t[90],w?f(N,t[90],n,null):g(t[90]),null);let c=u;u=V(t),u===c?U[u].p(t,n):(yt(),$t(U[c],1,1,(()=>{U[c]=null})),vt(),d=U[u],d?d.p(t,n):(d=U[u]=F[u](t),d.c()),bt(d,1),d.m(e,p));const l={};268435456&n[2]&&(l.$$scope={dirty:n,ctx:t}),y.$set(l),!t[14]&&"outlined"!==t[15]&&t[11]?B?(B.p(t,n),51200&n[0]&&bt(B,1)):(B=wr(t),B.c(),bt(B,1),B.m(e,null)):B&&(yt(),$t(B,1,1,(()=>{B=null})),vt()),P(e,j=Tt(H,[(!w||314823171&n[0]|2048&n[1]&&b!==(b=re({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":"filled"===t[15],"mdc-text-field--outlined":"outlined"===t[15],"smui-text-field--standard":"standard"===t[15]&&!t[14],"mdc-text-field--no-label":t[16]||null==t[17]&&!t[42].label,"mdc-text-field--label-floating":t[28]||null!=t[0]&&""!==t[0],"mdc-text-field--with-leading-icon":t[35](t[22])?t[42].leadingIcon:t[22],"mdc-text-field--with-trailing-icon":t[35](t[23])?t[42].trailingIcon:t[23],"mdc-text-field--with-internal-counter":t[14]&&t[42].internalCounter,"mdc-text-field--invalid":t[1],...t[25]})))&&{class:b},(!w||67109888&n[0]&&I!==(I=Object.entries(t[26]).map(Cr).concat([t[10]]).join(" ")))&&{style:I},{for:void 0},1024&n[1]&&ae(t[41],["input$","label$","ripple$","outline$","helperLine$"])])),_&&o(_.update)&&49152&n[0]|4&n[1]&&_.update.call(null,{ripple:!t[14]&&"filled"===t[15],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40],eventTarget:t[33],activeTarget:t[33],initPromise:t[37]}),E&&o(E.update)&&256&n[0]&&E.update.call(null,t[8])},i(t){w||(bt(C),bt(L),bt(a.$$.fragment,t),bt(M,t),bt(d),bt(y.$$.fragment,t),bt(B),w=!0)},o(t){$t(C),$t(L),$t(a.$$.fragment,t),$t(M,t),$t(d),$t(y.$$.fragment,t),$t(B),w=!1},d(n){n&&k(e),C&&C.d(),L&&L.d(),kt(a),M&&M.d(n),U[u].d(),kt(y),B&&B.d(),t[73](null),T=!1,r(A)}}}function or(t){let e;const n=t[51].leadingIcon,i=h(n,t,t[90],Bs);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,s){i&&i.p&&(!e||268435456&s[2])&&m(i,n,t,t[90],e?f(n,t[90],s,Vs):g(t[90]),Bs)},i(t){e||(bt(i,t),e=!0)},o(t){$t(i,t),e=!1},d(t){i&&i.d(t)}}}function ar(t){let e;const n=t[51].trailingIcon,i=h(n,t,t[90],Us);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,s){i&&i.p&&(!e||268435456&s[2])&&m(i,n,t,t[90],e?f(n,t[90],s,Fs):g(t[90]),Us)},i(t){e||(bt(i,t),e=!0)},o(t){$t(i,t),e=!1},d(t){i&&i.d(t)}}}function cr(t){let e,n,i,s="filled"===t[15]&&lr(),r=!t[16]&&(null!=t[17]||t[42].label)&&ur(t);return{c(){s&&s.c(),e=R(),r&&r.c(),n=N()},m(t,o){s&&s.m(t,o),x(t,e,o),r&&r.m(t,o),x(t,n,o),i=!0},p(t,i){"filled"===t[15]?s||(s=lr(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),t[16]||null==t[17]&&!t[42].label?r&&(yt(),$t(r,1,1,(()=>{r=null})),vt()):r?(r.p(t,i),196608&i[0]|2048&i[1]&&bt(r,1)):(r=ur(t),r.c(),bt(r,1),r.m(n.parentNode,n))},i(t){i||(bt(r),i=!0)},o(t){$t(r),i=!1},d(t){s&&s.d(t),t&&k(e),r&&r.d(t),t&&k(n)}}}function lr(t){let e;return{c(){e=O("span"),M(e,"class","mdc-text-field__ripple")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function ur(t){let e,i;const s=[{floatAbove:t[28]||null!=t[0]&&""!==t[0]},{required:t[13]},{wrapped:!0},de(t[41],"label$")];let r={$$slots:{default:[dr]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)r=n(r,s[t]);return e=new ms({props:r}),t[52](e),{c(){Ct(e.$$.fragment)},m(t,n){xt(e,t,n),i=!0},p(t,n){const i=268443649&n[0]|1024&n[1]?Tt(s,[268435457&n[0]&&{floatAbove:t[28]||null!=t[0]&&""!==t[0]},8192&n[0]&&{required:t[13]},s[2],1024&n[1]&&St(de(t[41],"label$"))]):{};131072&n[0]|268435456&n[2]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){i||(bt(e.$$.fragment,t),i=!0)},o(t){$t(e.$$.fragment,t),i=!1},d(n){t[52](null),kt(e,n)}}}function dr(t){let e,n,i=(null==t[17]?"":t[17])+"";const s=t[51].label,r=h(s,t,t[90],ir);return{c(){e=L(i),r&&r.c()},m(t,i){x(t,e,i),r&&r.m(t,i),n=!0},p(t,o){(!n||131072&o[0])&&i!==(i=(null==t[17]?"":t[17])+"")&&U(e,i),r&&r.p&&(!n||268435456&o[2])&&m(r,s,t,t[90],n?f(s,t[90],o,nr):g(t[90]),ir)},i(t){n||(bt(r,t),n=!0)},o(t){$t(r,t),n=!1},d(t){t&&k(e),r&&r.d(t)}}}function hr(t){let e,i;const s=[{noLabel:t[16]||null==t[17]&&!t[42].label},de(t[41],"outline$")];let r={$$slots:{default:[mr]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)r=n(r,s[t]);return e=new ws({props:r}),t[54](e),{c(){Ct(e.$$.fragment)},m(t,n){xt(e,t,n),i=!0},p(t,n){const i=196608&n[0]|3072&n[1]?Tt(s,[196608&n[0]|2048&n[1]&&{noLabel:t[16]||null==t[17]&&!t[42].label},1024&n[1]&&St(de(t[41],"outline$"))]):{};268640289&n[0]|3072&n[1]|268435456&n[2]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){i||(bt(e.$$.fragment,t),i=!0)},o(t){$t(e.$$.fragment,t),i=!1},d(n){t[54](null),kt(e,n)}}}function pr(t){let e,i;const s=[{floatAbove:t[28]||null!=t[0]&&""!==t[0]},{required:t[13]},{wrapped:!0},de(t[41],"label$")];let r={$$slots:{default:[fr]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)r=n(r,s[t]);return e=new ms({props:r}),t[53](e),{c(){Ct(e.$$.fragment)},m(t,n){xt(e,t,n),i=!0},p(t,n){const i=268443649&n[0]|1024&n[1]?Tt(s,[268435457&n[0]&&{floatAbove:t[28]||null!=t[0]&&""!==t[0]},8192&n[0]&&{required:t[13]},s[2],1024&n[1]&&St(de(t[41],"label$"))]):{};131072&n[0]|268435456&n[2]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){i||(bt(e.$$.fragment,t),i=!0)},o(t){$t(e.$$.fragment,t),i=!1},d(n){t[53](null),kt(e,n)}}}function fr(t){let e,n,i=(null==t[17]?"":t[17])+"";const s=t[51].label,r=h(s,t,t[90],er);return{c(){e=L(i),r&&r.c()},m(t,i){x(t,e,i),r&&r.m(t,i),n=!0},p(t,o){(!n||131072&o[0])&&i!==(i=(null==t[17]?"":t[17])+"")&&U(e,i),r&&r.p&&(!n||268435456&o[2])&&m(r,s,t,t[90],n?f(s,t[90],o,tr):g(t[90]),er)},i(t){n||(bt(r,t),n=!0)},o(t){$t(r,t),n=!1},d(t){t&&k(e),r&&r.d(t)}}}function mr(t){let e,n,i=!t[16]&&(null!=t[17]||t[42].label)&&pr(t);return{c(){i&&i.c(),e=N()},m(t,s){i&&i.m(t,s),x(t,e,s),n=!0},p(t,n){t[16]||null==t[17]&&!t[42].label?i&&(yt(),$t(i,1,1,(()=>{i=null})),vt()):i?(i.p(t,n),196608&n[0]|2048&n[1]&&bt(i,1)):(i=pr(t),i.c(),bt(i,1),i.m(e.parentNode,e))},i(t){n||(bt(i),n=!0)},o(t){$t(i),n=!1},d(t){i&&i.d(t),t&&k(e)}}}function gr(t){let e;const n=t[51].leadingIcon,i=h(n,t,t[90],Zs);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,s){i&&i.p&&(!e||268435456&s[2])&&m(i,n,t,t[90],e?f(n,t[90],s,Qs):g(t[90]),Zs)},i(t){e||(bt(i,t),e=!0)},o(t){$t(i,t),e=!1},d(t){i&&i.d(t)}}}function yr(t){let e,i,s,r,o,a,c,l,u,d;const p=t[51].prefix,y=h(p,t,t[90],Xs);let v=null!=t[20]&&br(t);const b=[{type:t[18]},{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},t[16]&&null!=t[17]?{placeholder:t[17]}:{},de(t[41],"input$")];function $(e){t[64](e)}function I(e){t[65](e)}function _(e){t[66](e)}function E(e){t[67](e)}let w={};for(let t=0;t<b.length;t+=1)w=n(w,b[t]);void 0!==t[0]&&(w.value=t[0]),void 0!==t[3]&&(w.files=t[3]),void 0!==t[4]&&(w.dirty=t[4]),void 0!==t[1]&&(w.invalid=t[1]),s=new ks({props:w}),t[63](s),et.push((()=>At(s,"value",$))),et.push((()=>At(s,"files",I))),et.push((()=>At(s,"dirty",_))),et.push((()=>At(s,"invalid",E))),s.$on("blur",t[68]),s.$on("focus",t[69]),s.$on("blur",t[70]),s.$on("focus",t[71]);let T=null!=t[21]&&Ir(t);const S=t[51].suffix,A=h(S,t,t[90],Ks);return{c(){y&&y.c(),e=R(),v&&v.c(),i=R(),Ct(s.$$.fragment),l=R(),T&&T.c(),u=R(),A&&A.c()},m(t,n){y&&y.m(t,n),x(t,e,n),v&&v.m(t,n),x(t,i,n),xt(s,t,n),x(t,l,n),T&&T.m(t,n),x(t,u,n),A&&A.m(t,n),d=!0},p(t,e){y&&y.p&&(!d||268435456&e[2])&&m(y,p,t,t[90],d?f(p,t[90],e,Ws):g(t[90]),Xs),null!=t[20]?v?(v.p(t,e),1048576&e[0]&&bt(v,1)):(v=br(t),v.c(),bt(v,1),v.m(i.parentNode,i)):v&&(yt(),$t(v,1,1,(()=>{v=null})),vt());const n=135213056&e[0]|1024&e[1]?Tt(b,[262144&e[0]&&{type:t[18]},4096&e[0]&&{disabled:t[12]},8192&e[0]&&{required:t[13]},524288&e[0]&&{updateInvalid:t[19]},134217728&e[0]&&{"aria-controls":t[27]},134217728&e[0]&&{"aria-describedby":t[27]},196608&e[0]&&St(t[16]&&null!=t[17]?{placeholder:t[17]}:{}),1024&e[1]&&St(de(t[41],"input$"))]):{};!r&&1&e[0]&&(r=!0,n.value=t[0],ct((()=>r=!1))),!o&&8&e[0]&&(o=!0,n.files=t[3],ct((()=>o=!1))),!a&&16&e[0]&&(a=!0,n.dirty=t[4],ct((()=>a=!1))),!c&&2&e[0]&&(c=!0,n.invalid=t[1],ct((()=>c=!1))),s.$set(n),null!=t[21]?T?(T.p(t,e),2097152&e[0]&&bt(T,1)):(T=Ir(t),T.c(),bt(T,1),T.m(u.parentNode,u)):T&&(yt(),$t(T,1,1,(()=>{T=null})),vt()),A&&A.p&&(!d||268435456&e[2])&&m(A,S,t,t[90],d?f(S,t[90],e,Gs):g(t[90]),Ks)},i(t){d||(bt(y,t),bt(v),bt(s.$$.fragment,t),bt(T),bt(A,t),d=!0)},o(t){$t(y,t),$t(v),$t(s.$$.fragment,t),$t(T),$t(A,t),d=!1},d(n){y&&y.d(n),n&&k(e),v&&v.d(n),n&&k(i),t[63](null),kt(s,n),n&&k(l),T&&T.d(n),n&&k(u),A&&A.d(n)}}}function vr(t){let e,i,s,r,o,a,c,l;const u=[{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},de(t[41],"input$")];function d(e){t[56](e)}function p(e){t[57](e)}function y(e){t[58](e)}let v={};for(let t=0;t<u.length;t+=1)v=n(v,u[t]);void 0!==t[0]&&(v.value=t[0]),void 0!==t[4]&&(v.dirty=t[4]),void 0!==t[1]&&(v.invalid=t[1]),i=new Rs({props:v}),t[55](i),et.push((()=>At(i,"value",d))),et.push((()=>At(i,"dirty",p))),et.push((()=>At(i,"invalid",y))),i.$on("blur",t[59]),i.$on("focus",t[60]),i.$on("blur",t[61]),i.$on("focus",t[62]);const b=t[51].internalCounter,$=h(b,t,t[90],Js);return{c(){e=O("span"),Ct(i.$$.fragment),a=R(),$&&$.c(),M(e,"class",c=re({"mdc-text-field__resizer":!("input$resizable"in t[41])||t[41].input$resizable}))},m(t,n){x(t,e,n),xt(i,e,null),S(e,a),$&&$.m(e,null),l=!0},p(t,n){const a=134754304&n[0]|1024&n[1]?Tt(u,[4096&n[0]&&{disabled:t[12]},8192&n[0]&&{required:t[13]},524288&n[0]&&{updateInvalid:t[19]},134217728&n[0]&&{"aria-controls":t[27]},134217728&n[0]&&{"aria-describedby":t[27]},1024&n[1]&&St(de(t[41],"input$"))]):{};!s&&1&n[0]&&(s=!0,a.value=t[0],ct((()=>s=!1))),!r&&16&n[0]&&(r=!0,a.dirty=t[4],ct((()=>r=!1))),!o&&2&n[0]&&(o=!0,a.invalid=t[1],ct((()=>o=!1))),i.$set(a),$&&$.p&&(!l||268435456&n[2])&&m($,b,t,t[90],l?f(b,t[90],n,Ys):g(t[90]),Js),(!l||1024&n[1]&&c!==(c=re({"mdc-text-field__resizer":!("input$resizable"in t[41])||t[41].input$resizable})))&&M(e,"class",c)},i(t){l||(bt(i.$$.fragment,t),bt($,t),l=!0)},o(t){$t(i.$$.fragment,t),$t($,t),l=!1},d(n){n&&k(e),t[55](null),kt(i),$&&$.d(n)}}}function br(t){let e,n;return e=new Ss({props:{$$slots:{default:[$r]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};1048576&n[0]|268435456&n[2]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function $r(t){let e;return{c(){e=L(t[20])},m(t,n){x(t,e,n)},p(t,n){1048576&n[0]&&U(e,t[20])},d(t){t&&k(e)}}}function Ir(t){let e,n;return e=new As({props:{$$slots:{default:[_r]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};2097152&n[0]|268435456&n[2]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function _r(t){let e;return{c(){e=L(t[21])},m(t,n){x(t,e,n)},p(t,n){2097152&n[0]&&U(e,t[21])},d(t){t&&k(e)}}}function Er(t){let e;const n=t[51].trailingIcon,i=h(n,t,t[90],zs);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,s){i&&i.p&&(!e||268435456&s[2])&&m(i,n,t,t[90],e?f(n,t[90],s,qs):g(t[90]),zs)},i(t){e||(bt(i,t),e=!0)},o(t){$t(i,t),e=!1},d(t){i&&i.d(t)}}}function wr(t){let e,i;const s=[de(t[41],"ripple$")];let r={};for(let t=0;t<s.length;t+=1)r=n(r,s[t]);return e=new bs({props:r}),t[72](e),{c(){Ct(e.$$.fragment)},m(t,n){xt(e,t,n),i=!0},p(t,n){const i=1024&n[1]?Tt(s,[St(de(t[41],"ripple$"))]):{};e.$set(i)},i(t){i||(bt(e.$$.fragment,t),i=!0)},o(t){$t(e.$$.fragment,t),i=!1},d(n){t[72](null),kt(e,n)}}}function Tr(t){let e,i;const s=[de(t[41],"helperLine$")];let r={$$slots:{default:[Sr]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)r=n(r,s[t]);return e=new Ts({props:r}),e.$on("SMUITextfieldHelperText:id",t[85]),e.$on("SMUITextfieldHelperText:mount",t[86]),e.$on("SMUITextfieldHelperText:unmount",t[87]),e.$on("SMUITextfieldCharacterCounter:mount",t[88]),e.$on("SMUITextfieldCharacterCounter:unmount",t[89]),{c(){Ct(e.$$.fragment)},m(t,n){xt(e,t,n),i=!0},p(t,n){const i=1024&n[1]?Tt(s,[St(de(t[41],"helperLine$"))]):{};268435456&n[2]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){i||(bt(e.$$.fragment,t),i=!0)},o(t){$t(e.$$.fragment,t),i=!1},d(t){kt(e,t)}}}function Sr(t){let e;const n=t[51].helper,i=h(n,t,t[90],Ds);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,s){i&&i.p&&(!e||268435456&s[2])&&m(i,n,t,t[90],e?f(n,t[90],s,Ns):g(t[90]),Ds)},i(t){e||(bt(i,t),e=!0)},o(t){$t(i,t),e=!1},d(t){i&&i.d(t)}}}function Ar(t){let e,n,i,s,r;const o=[rr,sr],a=[];e=function(t,e){return t[36]?0:1}(t),n=a[e]=o[e](t);let c=t[42].helper&&Tr(t);return{c(){n.c(),i=R(),c&&c.c(),s=N()},m(t,n){a[e].m(t,n),x(t,i,n),c&&c.m(t,n),x(t,s,n),r=!0},p(t,e){n.p(t,e),t[42].helper?c?(c.p(t,e),2048&e[1]&&bt(c,1)):(c=Tr(t),c.c(),bt(c,1),c.m(s.parentNode,s)):c&&(yt(),$t(c,1,1,(()=>{c=null})),vt())},i(t){r||(bt(n),bt(c),r=!0)},o(t){$t(n),$t(c),r=!1},d(t){a[e].d(t),t&&k(i),c&&c.d(t),t&&k(s)}}}const Cr=([t,e])=>`${t}: ${e};`,xr=([t,e])=>`${t}: ${e};`;function kr(t,e,i){let s;const r=["use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","blur","layout","getElement"];let o=v(e,r),{$$slots:a={},$$scope:c}=e;const l=function(t){const e={};for(const n in t)e[n]=!0;return e}(a),{applyPassive:u}=Ut,d=ue(W());let h=()=>{};function p(t){return t===h}let{use:f=[]}=e,{class:m=""}=e,{style:g=""}=e,{ripple:b=!0}=e,{disabled:$=!1}=e,{required:I=!1}=e,{textarea:_=!1}=e,{variant:E=(_?"outlined":"standard")}=e,{noLabel:w=!1}=e,{label:T}=e,{type:S="text"}=e,{value:A=(o.input$emptyValueUndefined?void 0:h)}=e,{files:C=h}=e;const x=!p(A)||!p(C);p(A)&&(A=void 0),p(C)&&(C=null);let{invalid:k=h}=e,{updateInvalid:O=p(k)}=e;p(k)&&(k=!1);let L,R,N,D,M,P,F,U,V,{dirty:B=!1}=e,{prefix:H}=e,{suffix:j}=e,{validateOnValueChange:q=O}=e,{useNativeValidation:z=O}=e,{withLeadingIcon:G=h}=e,{withTrailingIcon:K=h}=e,{input:J}=e,{floatingLabel:Z}=e,{lineRipple:tt}=e,{notchedOutline:nt}=e,it={},rt={},at=!1,ct=Q("SMUI:addLayoutListener"),lt=new Promise((t=>M=t)),ut=A;function dt(t){var e;return t in it?null!==(e=it[t])&&void 0!==e?e:null:mt().classList.contains(t)}function ht(t){it[t]||i(25,it[t]=!0,it)}function pt(t){t in it&&!it[t]||i(25,it[t]=!1,it)}function ft(){if(R){const t=R.shouldFloat;R.notchOutline(t)}}function mt(){return L}ct&&(D=ct(ft)),X((()=>{if(i(49,R=new cs({addClass:ht,removeClass:pt,hasClass:dt,registerTextFieldInteractionHandler:(t,e)=>mt().addEventListener(t,e),deregisterTextFieldInteractionHandler:(t,e)=>mt().removeEventListener(t,e),registerValidationAttributeChangeHandler:t=>{const e=new MutationObserver((e=>{z&&t((t=>t.map((t=>t.attributeName)).filter((t=>t)))(e))})),n={attributes:!0};return J&&e.observe(J.getElement(),n),e},deregisterValidationAttributeChangeHandler:t=>{t.disconnect()},getNativeInput:()=>{var t;return null!==(t=null==J?void 0:J.getElement())&&void 0!==t?t:null},setInputAttr:(t,e)=>{null==J||J.addAttr(t,e)},removeInputAttr:t=>{null==J||J.removeAttr(t)},isFocused:()=>document.activeElement===(null==J?void 0:J.getElement()),registerInputInteractionHandler:(t,e)=>{null==J||J.getElement().addEventListener(t,e,u())},deregisterInputInteractionHandler:(t,e)=>{null==J||J.getElement().removeEventListener(t,e,u())},floatLabel:t=>Z&&Z.float(t),getLabelWidth:()=>Z?Z.getWidth():0,hasLabel:()=>!!Z,shakeLabel:t=>Z&&Z.shake(t),setLabelRequired:t=>Z&&Z.setRequired(t),activateLineRipple:()=>tt&&tt.activate(),deactivateLineRipple:()=>tt&&tt.deactivate(),setLineRippleTransformOrigin:t=>tt&&tt.setRippleCenter(t),closeOutline:()=>nt&&nt.closeNotch(),hasOutline:()=>!!nt,notchOutline:t=>nt&&nt.notch(t)},{get helperText(){return U},get characterCounter(){return V},get leadingIcon(){return P},get trailingIcon(){return F}})),x){if(null==J)throw new Error("SMUI Textfield initialized without Input component.");R.init()}else(ot(),st).then((()=>{if(null==J)throw new Error("SMUI Textfield initialized without Input component.");R.init()}));return M(),()=>{R.destroy()}})),Y((()=>{D&&D()}));return t.$$set=t=>{e=n(n({},e),y(t)),i(41,o=v(e,r)),"use"in t&&i(8,f=t.use),"class"in t&&i(9,m=t.class),"style"in t&&i(10,g=t.style),"ripple"in t&&i(11,b=t.ripple),"disabled"in t&&i(12,$=t.disabled),"required"in t&&i(13,I=t.required),"textarea"in t&&i(14,_=t.textarea),"variant"in t&&i(15,E=t.variant),"noLabel"in t&&i(16,w=t.noLabel),"label"in t&&i(17,T=t.label),"type"in t&&i(18,S=t.type),"value"in t&&i(0,A=t.value),"files"in t&&i(3,C=t.files),"invalid"in t&&i(1,k=t.invalid),"updateInvalid"in t&&i(19,O=t.updateInvalid),"dirty"in t&&i(4,B=t.dirty),"prefix"in t&&i(20,H=t.prefix),"suffix"in t&&i(21,j=t.suffix),"validateOnValueChange"in t&&i(43,q=t.validateOnValueChange),"useNativeValidation"in t&&i(44,z=t.useNativeValidation),"withLeadingIcon"in t&&i(22,G=t.withLeadingIcon),"withTrailingIcon"in t&&i(23,K=t.withTrailingIcon),"input"in t&&i(2,J=t.input),"floatingLabel"in t&&i(5,Z=t.floatingLabel),"lineRipple"in t&&i(6,tt=t.lineRipple),"notchedOutline"in t&&i(7,nt=t.notchedOutline),"$$scope"in t&&i(90,c=t.$$scope)},t.$$.update=()=>{if(4&t.$$.dirty[0]&&i(33,s=J&&J.getElement()),524290&t.$$.dirty[0]|262144&t.$$.dirty[1]&&R&&R.isValid()!==!k&&(O?i(1,k=!R.isValid()):R.setValid(!k)),266240&t.$$.dirty[1]&&R&&R.getValidateOnValueChange()!==q&&R.setValidateOnValueChange(!p(q)&&q),270336&t.$$.dirty[1]&&R&&R.setUseNativeValidation(!!p(z)||z),4096&t.$$.dirty[0]|262144&t.$$.dirty[1]&&R&&R.setDisabled($),1&t.$$.dirty[0]|786432&t.$$.dirty[1]&&R&&x&&ut!==A){i(50,ut=A);const t=`${A}`;R.getValue()!==t&&R.setValue(t)}},[A,k,J,C,B,Z,tt,nt,f,m,g,b,$,I,_,E,w,T,S,O,H,j,G,K,L,it,rt,N,at,P,F,U,V,s,d,p,x,lt,ht,pt,function(t,e){rt[t]!=e&&(""===e||null==e?(delete rt[t],i(26,rt)):i(26,rt[t]=e,rt))},o,l,q,z,function(){null==J||J.focus()},function(){null==J||J.blur()},ft,mt,R,ut,a,function(t){et[t?"unshift":"push"]((()=>{Z=t,i(5,Z)}))},function(t){et[t?"unshift":"push"]((()=>{Z=t,i(5,Z)}))},function(t){et[t?"unshift":"push"]((()=>{nt=t,i(7,nt)}))},function(t){et[t?"unshift":"push"]((()=>{J=t,i(2,J)}))},function(t){A=t,i(0,A)},function(t){B=t,i(4,B)},function(t){k=t,i(1,k),i(49,R),i(19,O)},()=>i(28,at=!1),()=>i(28,at=!0),t=>oe(L,"blur",t),t=>oe(L,"focus",t),function(t){et[t?"unshift":"push"]((()=>{J=t,i(2,J)}))},function(t){A=t,i(0,A)},function(t){C=t,i(3,C)},function(t){B=t,i(4,B)},function(t){k=t,i(1,k),i(49,R),i(19,O)},()=>i(28,at=!1),()=>i(28,at=!0),t=>oe(L,"blur",t),t=>oe(L,"focus",t),function(t){et[t?"unshift":"push"]((()=>{tt=t,i(6,tt)}))},function(t){et[t?"unshift":"push"]((()=>{L=t,i(24,L)}))},t=>i(29,P=t.detail),()=>i(29,P=void 0),t=>i(30,F=t.detail),()=>i(30,F=void 0),t=>i(32,V=t.detail),()=>i(32,V=void 0),function(t){et[t?"unshift":"push"]((()=>{L=t,i(24,L)}))},t=>i(29,P=t.detail),()=>i(29,P=void 0),t=>i(30,F=t.detail),()=>i(30,F=void 0),t=>i(27,N=t.detail),t=>i(31,U=t.detail),()=>{i(27,N=void 0),i(31,U=void 0)},t=>i(32,V=t.detail),()=>i(32,V=void 0),c]}class Or extends Lt{constructor(t){super(),Ot(this,t,kr,Ar,a,{use:8,class:9,style:10,ripple:11,disabled:12,required:13,textarea:14,variant:15,noLabel:16,label:17,type:18,value:0,files:3,invalid:1,updateInvalid:19,dirty:4,prefix:20,suffix:21,validateOnValueChange:43,useNativeValidation:44,withLeadingIcon:22,withTrailingIcon:23,input:2,floatingLabel:5,lineRipple:6,notchedOutline:7,focus:45,blur:46,layout:47,getElement:48},null,[-1,-1,-1,-1])}get focus(){return this.$$.ctx[45]}get blur(){return this.$$.ctx[46]}get layout(){return this.$$.ctx[47]}get getElement(){return this.$$.ctx[48]}}const Lr=ks;
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
/**
     * @license
     * Copyright 2020 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var Rr,Nr=function(){function t(){this.rafIDs=new Map}return t.prototype.request=function(t,e){var n=this;this.cancel(t);var i=requestAnimationFrame((function(i){n.rafIDs.delete(t),e(i)}));this.rafIDs.set(t,i)},t.prototype.cancel=function(t){var e=this.rafIDs.get(t);e&&(cancelAnimationFrame(e),this.rafIDs.delete(t))},t.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach((function(e,n){t.cancel(n)}))},t.prototype.getQueue=function(){var t=[];return this.rafIDs.forEach((function(e,n){t.push(n)})),t},t}(),Dr={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},Mr={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},Pr={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */!function(t){t.POLL_SCROLL_POS="poll_scroll_position",t.POLL_LAYOUT_CHANGE="poll_layout_change"}(Rr||(Rr={}));var Fr=function(t){function e(n){var i=t.call(this,Dt(Dt({},e.defaultAdapter),n))||this;return i.dialogOpen=!1,i.isFullscreen=!1,i.animationFrame=0,i.animationTimer=0,i.escapeKeyAction=Mr.CLOSE_ACTION,i.scrimClickAction=Mr.CLOSE_ACTION,i.autoStackButtons=!0,i.areButtonsStacked=!1,i.suppressDefaultPressSelector=Mr.SUPPRESS_DEFAULT_PRESS_SELECTOR,i.animFrame=new Nr,i.contentScrollHandler=function(){i.handleScrollEvent()},i.windowResizeHandler=function(){i.layout()},i.windowOrientationChangeHandler=function(){i.layout()},i}return Nt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Dr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Mr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Pr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.hasClass(Dr.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(Dr.FULLSCREEN)},e.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},e.prototype.open=function(t){var e=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(Dr.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),t&&t.isAboveFullscreenDialog&&this.adapter.addClass(Dr.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame((function(){e.adapter.addClass(Dr.OPEN),e.adapter.addBodyClass(Dr.SCROLL_LOCK),e.layout(),e.animationTimer=setTimeout((function(){e.handleAnimationTimerEnd(),e.adapter.trapFocus(e.adapter.getInitialFocusEl()),e.adapter.notifyOpened()}),Pr.DIALOG_ANIMATION_OPEN_TIME_MS)}))},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(t),this.adapter.addClass(Dr.CLOSING),this.adapter.removeClass(Dr.OPEN),this.adapter.removeBodyClass(Dr.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout((function(){e.adapter.releaseFocus(),e.handleAnimationTimerEnd(),e.adapter.notifyClosed(t)}),Pr.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.showSurfaceScrim=function(){var t=this;this.adapter.addClass(Dr.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame((function(){t.adapter.addClass(Dr.SURFACE_SCRIM_SHOWN)}))},e.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(Dr.SURFACE_SCRIM_SHOWN),this.adapter.addClass(Dr.SURFACE_SCRIM_HIDING)},e.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(Dr.SURFACE_SCRIM_HIDING),this.adapter.removeClass(Dr.SURFACE_SCRIM_SHOWING)},e.prototype.isOpen=function(){return this.dialogOpen},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction},e.prototype.setScrimClickAction=function(t){this.scrimClickAction=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t},e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},e.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},e.prototype.layout=function(){var t=this;this.animFrame.request(Rr.POLL_LAYOUT_CHANGE,(function(){t.layoutInternal()}))},e.prototype.handleClick=function(t){if(this.adapter.eventTargetMatches(t.target,Mr.SCRIM_SELECTOR)&&""!==this.scrimClickAction)this.close(this.scrimClickAction);else{var e=this.adapter.getActionFromEvent(t);e&&this.close(e)}},e.prototype.handleKeydown=function(t){var e="Enter"===t.key||13===t.keyCode;if(e&&!this.adapter.getActionFromEvent(t)){var n=t.composedPath?t.composedPath()[0]:t.target,i=!this.suppressDefaultPressSelector||!this.adapter.eventTargetMatches(n,this.suppressDefaultPressSelector);e&&i&&this.adapter.clickDefaultButton()}},e.prototype.handleDocumentKeydown=function(t){("Escape"===t.key||27===t.keyCode)&&""!==this.escapeKeyAction&&this.close(this.escapeKeyAction)},e.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(Rr.POLL_SCROLL_POS,(function(){t.toggleScrollDividerHeader(),t.toggleScrollDividerFooter()}))},e.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(Dr.OPENING),this.adapter.removeClass(Dr.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)}))},e.prototype.detectStackedButtons=function(){this.adapter.removeClass(Dr.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(Dr.STACKED),t!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=t)},e.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(Dr.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(Dr.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},e.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(Dr.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(Dr.SCROLL_DIVIDER_HEADER):this.adapter.addClass(Dr.SCROLL_DIVIDER_HEADER)},e.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(Dr.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(Dr.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(Dr.SCROLL_DIVIDER_FOOTER)},e}(Ft);const{document:Ur,window:Vr}=Et,Br=t=>({}),Hr=t=>({});function jr(e){let n,i,s;return{c(){n=O("div"),M(n,"class","mdc-dialog__surface-scrim")},m(t,r){x(t,n,r),i||(s=D(n,"transitionend",e[31]),i=!0)},p:t,d(t){t&&k(n),i=!1,s()}}}function qr(t){let e,i,s,a,c,l,u,d,p,y,v,b,I,_,E;const w=t[27].default,T=h(w,t,t[26],null);let A=t[5]&&jr(t),C=[{class:l=re({[t[7]]:!0,"mdc-dialog__surface":!0})},{role:"alertdialog"},{"aria-modal":"true"},de(t[17],"surface$")],L={};for(let t=0;t<C.length;t+=1)L=n(L,C[t]);let N=[{class:u=re({[t[6]]:!0,"mdc-dialog__container":!0})},de(t[17],"container$")],F={};for(let t=0;t<N.length;t+=1)F=n(F,N[t]);let U=[{class:y=re({[t[2]]:!0,"mdc-dialog":!0,"mdc-dialog--stacked":!t[4],"mdc-dialog--fullscreen":t[5],"smui-dialog--selection":t[3],...t[10]})},{role:"alertdialog"},{"aria-modal":"true"},ae(t[17],["container$","surface$"])],V={};for(let t=0;t<U.length;t+=1)V=n(V,U[t]);const B=t[27].over,H=h(B,t,t[26],Hr);return{c(){e=R(),i=O("div"),s=O("div"),a=O("div"),T&&T.c(),c=R(),A&&A.c(),d=R(),p=O("div"),b=R(),H&&H.c(),P(a,L),P(s,F),M(p,"class","mdc-dialog__scrim"),P(i,V)},m(n,r){x(n,e,r),x(n,i,r),S(i,s),S(s,a),T&&T.m(a,null),S(a,c),A&&A.m(a,null),S(i,d),S(i,p),t[32](i),x(n,b,r),H&&H.m(n,r),I=!0,_||(E=[D(Vr,"resize",t[28]),D(Vr,"orientationchange",t[29]),D(Ur.body,"keydown",t[30]),$(v=he.call(null,i,t[1])),$(t[11].call(null,i)),D(i,"SMUIDialog:opening",t[14]),D(i,"SMUIDialog:opened",t[15]),D(i,"SMUIDialog:closed",t[16]),D(i,"click",t[33]),D(i,"keydown",t[34])],_=!0)},p(t,e){T&&T.p&&(!I||67108864&e[0])&&m(T,w,t,t[26],I?f(w,t[26],e,null):g(t[26]),null),t[5]?A?A.p(t,e):(A=jr(t),A.c(),A.m(a,null)):A&&(A.d(1),A=null),P(a,L=Tt(C,[(!I||128&e[0]&&l!==(l=re({[t[7]]:!0,"mdc-dialog__surface":!0})))&&{class:l},{role:"alertdialog"},{"aria-modal":"true"},131072&e[0]&&de(t[17],"surface$")])),P(s,F=Tt(N,[(!I||64&e[0]&&u!==(u=re({[t[6]]:!0,"mdc-dialog__container":!0})))&&{class:u},131072&e[0]&&de(t[17],"container$")])),P(i,V=Tt(U,[(!I||1084&e[0]&&y!==(y=re({[t[2]]:!0,"mdc-dialog":!0,"mdc-dialog--stacked":!t[4],"mdc-dialog--fullscreen":t[5],"smui-dialog--selection":t[3],...t[10]})))&&{class:y},{role:"alertdialog"},{"aria-modal":"true"},131072&e[0]&&ae(t[17],["container$","surface$"])])),v&&o(v.update)&&2&e[0]&&v.update.call(null,t[1]),H&&H.p&&(!I||67108864&e[0])&&m(H,B,t,t[26],I?f(B,t[26],e,Br):g(t[26]),Hr)},i(t){I||(bt(T,t),bt(H,t),I=!0)},o(t){$t(T,t),$t(H,t),I=!1},d(n){n&&k(e),n&&k(i),T&&T.d(n),A&&A.d(),t[32](null),n&&k(b),H&&H.d(n),_=!1,r(E)}}}function zr(t,e,i){const s=["use","class","open","selection","escapeKeyAction","scrimClickAction","autoStackButtons","fullscreen","container$class","surface$class","isOpen","setOpen","layout","getElement"];let r,o,a=v(e,s),{$$slots:c={},$$scope:l}=e;var u;const{FocusTrap:h}=Un,{closest:p,matches:f}=Ht,m=ue(W());let g,$,I,{use:_=[]}=e,{class:E=""}=e,{open:w=!1}=e,{selection:T=!1}=e,{escapeKeyAction:S="close"}=e,{scrimClickAction:A="close"}=e,{autoStackButtons:C=!0}=e,{fullscreen:x=!1}=e,{container$class:k=""}=e,{surface$class:O=""}=e,L={},R=se(!1);d(t,R,(t=>i(38,o=t)));let N=Q("SMUI:dialog:aboveFullscreen"),D=null!==(u=Q("SMUI:dialog:aboveFullscreenShown"))&&void 0!==u?u:se(!1);d(t,D,(t=>i(25,r=t)));let M,P=Q("SMUI:addLayoutListener"),F=[];J("SMUI:dialog:actions:reversed",R),J("SMUI:addLayoutListener",(t=>(F.push(t),()=>{const e=F.indexOf(t);e>=0&&F.splice(e,1)}))),J("SMUI:dialog:selection",T),J("SMUI:dialog:aboveFullscreen",N||x),J("SMUI:dialog:aboveFullscreenShown",D),P&&(M=P(z));let U=r;function V(t){return t in L?L[t]:G().classList.contains(t)}function B(t){L[t]||i(10,L[t]=!0,L)}function H(t){t in L&&!L[t]||i(10,L[t]=!1,L)}function j(){return g.querySelector(".mdc-dialog__content")}function q(){return g.querySelector("[data-mdc-dialog-initial-focus]")}function z(){return $.layout()}function G(){return g}X((()=>{var t;return I=new h(g,{initialFocusEl:null!==(t=q())&&void 0!==t?t:void 0}),i(8,$=new Fr({addBodyClass:t=>document.body.classList.add(t),addClass:B,areButtonsStacked:()=>{return t=[].slice.call(g.querySelectorAll(".mdc-dialog__button")),e=new Set,[].forEach.call(t,(function(t){return e.add(t.offsetTop)})),e.size>1;var t,e},clickDefaultButton:()=>{const t=g.querySelector("[data-mdc-dialog-button-default");t&&t.click()},eventTargetMatches:(t,e)=>!!t&&f(t,e),getActionFromEvent:t=>{if(!t.target)return"";const e=p(t.target,"[data-mdc-dialog-action]");return e&&e.getAttribute("data-mdc-dialog-action")},getInitialFocusEl:q,hasClass:V,isContentScrollable:()=>{return!!(t=j())&&t.scrollHeight>t.offsetHeight;var t},notifyClosed:t=>{i(0,w=!1),oe(G(),"SMUIDialog:closed",t?{action:t}:{},void 0,!0)},notifyClosing:t=>oe(G(),"SMUIDialog:closing",t?{action:t}:{},void 0,!0),notifyOpened:()=>oe(G(),"SMUIDialog:opened",{},void 0,!0),notifyOpening:()=>oe(G(),"SMUIDialog:opening",{},void 0,!0),releaseFocus:()=>I.releaseFocus(),removeBodyClass:t=>document.body.classList.remove(t),removeClass:H,reverseButtons:()=>{b(R,o=!0,o)},trapFocus:()=>I.trapFocus(),registerContentEventHandler:(t,e)=>{const n=j();n instanceof HTMLElement&&n.addEventListener(t,e)},deregisterContentEventHandler:(t,e)=>{const n=j();n instanceof HTMLElement&&n.removeEventListener(t,e)},isScrollableContentAtTop:()=>{return!!(t=j())&&0===t.scrollTop;var t},isScrollableContentAtBottom:()=>{return!!(t=j())&&Math.ceil(t.scrollHeight-t.scrollTop)===t.clientHeight;var t},registerWindowEventHandler:(t,e)=>{window.addEventListener(t,e)},deregisterWindowEventHandler:(t,e)=>{window.removeEventListener(t,e)}})),$.init(),()=>{$.destroy()}})),Y((()=>{M&&M()}));return t.$$set=t=>{e=n(n({},e),y(t)),i(17,a=v(e,s)),"use"in t&&i(1,_=t.use),"class"in t&&i(2,E=t.class),"open"in t&&i(0,w=t.open),"selection"in t&&i(3,T=t.selection),"escapeKeyAction"in t&&i(18,S=t.escapeKeyAction),"scrimClickAction"in t&&i(19,A=t.scrimClickAction),"autoStackButtons"in t&&i(4,C=t.autoStackButtons),"fullscreen"in t&&i(5,x=t.fullscreen),"container$class"in t&&i(6,k=t.container$class),"surface$class"in t&&i(7,O=t.surface$class),"$$scope"in t&&i(26,l=t.$$scope)},t.$$.update=()=>{262400&t.$$.dirty[0]&&$&&$.getEscapeKeyAction()!==S&&$.setEscapeKeyAction(S),524544&t.$$.dirty[0]&&$&&$.getScrimClickAction()!==A&&$.setScrimClickAction(A),272&t.$$.dirty[0]&&$&&$.getAutoStackButtons()!==C&&$.setAutoStackButtons(C),16&t.$$.dirty[0]&&(C||b(R,o=!0,o)),257&t.$$.dirty[0]&&$&&$.isOpen()!==w&&(w?$.open({isAboveFullscreenDialog:!!N}):$.close()),50331936&t.$$.dirty[0]&&x&&$&&U!==r&&(i(24,U=r),r?$.showSurfaceScrim():$.hideSurfaceScrim())},[w,_,E,T,C,x,k,O,$,g,L,m,R,D,function(){N&&b(D,r=!0,r),requestAnimationFrame((()=>{F.forEach((t=>t()))}))},function(){F.forEach((t=>t()))},function(){N&&b(D,r=!1,r)},a,S,A,function(){return w},function(t){i(0,w=t)},z,G,U,r,l,c,()=>w&&$&&$.layout(),()=>w&&$&&$.layout(),t=>w&&$&&$.handleDocumentKeydown(t),()=>$&&$.handleSurfaceScrimTransitionEnd(),function(t){et[t?"unshift":"push"]((()=>{g=t,i(9,g)}))},t=>$&&$.handleClick(t),t=>$&&$.handleKeydown(t)]}class Gr extends Lt{constructor(t){super(),Ot(this,t,zr,qr,a,{use:1,class:2,open:0,selection:3,escapeKeyAction:18,scrimClickAction:19,autoStackButtons:4,fullscreen:5,container$class:6,surface$class:7,isOpen:20,setOpen:21,layout:22,getElement:23},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get layout(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}var Kr=Ae({class:"mdc-dialog__header",component:hn,contexts:{"SMUI:icon-button:context":"dialog:header"}}),Wr=Ae({class:"mdc-dialog__title",component:fn}),Xr=Ae({class:"mdc-dialog__content",component:hn}),Yr=Ae({class:"mdc-dialog__actions",component:hn,classMap:{"smui-dialog__actions--reversed":"SMUI:dialog:actions:reversed"},contexts:{"SMUI:button:context":"dialog:action"}});function Jr(t){let e;return{c(){e=O("div"),M(e,"class","mdc-button__touch")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function Qr(t){let e,n,i,s;const r=t[26].default,o=h(r,t,t[28],null);let a=t[6]&&Jr();return{c(){e=O("div"),n=R(),o&&o.c(),a&&a.c(),i=N(),M(e,"class","mdc-button__ripple")},m(t,r){x(t,e,r),x(t,n,r),o&&o.m(t,r),a&&a.m(t,r),x(t,i,r),s=!0},p(t,e){o&&o.p&&(!s||268435456&e)&&m(o,r,t,t[28],s?f(r,t[28],e,null):g(t[28]),null),t[6]?a||(a=Jr(),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i(t){s||(bt(o,t),s=!0)},o(t){$t(o,t),s=!1},d(t){t&&k(e),t&&k(n),o&&o.d(t),a&&a.d(t),t&&k(i)}}}function Zr(t){let e,i,s;const r=[{use:[[Ii,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[22].disabled,addClass:t[18],removeClass:t[19],addStyle:t[20]}],t[16],...t[0]]},{class:re({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":"raised"===t[5],"mdc-button--unelevated":"unelevated"===t[5],"mdc-button--outlined":"outlined"===t[5],"smui-button--color-secondary":"secondary"===t[4],"mdc-button--touch":t[6],"mdc-card__action":"card:action"===t[17],"mdc-card__action--button":"card:action"===t[17],"mdc-dialog__button":"dialog:action"===t[17],"mdc-top-app-bar__navigation-icon":"top-app-bar:navigation"===t[17],"mdc-top-app-bar__action-item":"top-app-bar:action"===t[17],"mdc-snackbar__action":"snackbar:actions"===t[17],"mdc-banner__secondary-action":"banner"===t[17]&&t[8],"mdc-banner__primary-action":"banner"===t[17]&&!t[8],"mdc-tooltip__action":"tooltip:rich-actions"===t[17],...t[11]})},{style:Object.entries(t[12]).map(to).concat([t[2]]).join(" ")},t[15],t[14],t[13],{href:t[7]},t[22]];var o=t[9];function a(t){let e={$$slots:{default:[Qr]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return o&&(e=new o(a(t)),t[27](e),e.$on("click",t[21])),{c(){e&&Ct(e.$$.fragment),i=N()},m(t,n){e&&xt(e,t,n),x(t,i,n),s=!0},p(t,[n]){const s=6289919&n?Tt(r,[6094873&n&&{use:[[Ii,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[22].disabled,addClass:t[18],removeClass:t[19],addStyle:t[20]}],t[16],...t[0]]},133490&n&&{class:re({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":"raised"===t[5],"mdc-button--unelevated":"unelevated"===t[5],"mdc-button--outlined":"outlined"===t[5],"smui-button--color-secondary":"secondary"===t[4],"mdc-button--touch":t[6],"mdc-card__action":"card:action"===t[17],"mdc-card__action--button":"card:action"===t[17],"mdc-dialog__button":"dialog:action"===t[17],"mdc-top-app-bar__navigation-icon":"top-app-bar:navigation"===t[17],"mdc-top-app-bar__action-item":"top-app-bar:action"===t[17],"mdc-snackbar__action":"snackbar:actions"===t[17],"mdc-banner__secondary-action":"banner"===t[17]&&t[8],"mdc-banner__primary-action":"banner"===t[17]&&!t[8],"mdc-tooltip__action":"tooltip:rich-actions"===t[17],...t[11]})},4100&n&&{style:Object.entries(t[12]).map(to).concat([t[2]]).join(" ")},32768&n&&St(t[15]),16384&n&&St(t[14]),8192&n&&St(t[13]),128&n&&{href:t[7]},4194304&n&&St(t[22])]):{};if(268435520&n&&(s.$$scope={dirty:n,ctx:t}),o!==(o=t[9])){if(e){yt();const t=e;$t(t.$$.fragment,1,0,(()=>{kt(t,1)})),vt()}o?(e=new o(a(t)),t[27](e),e.$on("click",t[21]),Ct(e.$$.fragment),bt(e.$$.fragment,1),xt(e,i.parentNode,i)):e=null}else o&&e.$set(s)},i(t){s||(e&&bt(e.$$.fragment,t),s=!0)},o(t){e&&$t(e.$$.fragment,t),s=!1},d(n){t[27](null),n&&k(i),e&&kt(e,n)}}}const to=([t,e])=>`${t}: ${e};`;function eo(t,e,i){let s,r,o;const a=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let c=v(e,a),{$$slots:l={},$$scope:u}=e;const d=ue(W());let h,{use:p=[]}=e,{class:f=""}=e,{style:m=""}=e,{ripple:g=!0}=e,{color:b="primary"}=e,{variant:$="text"}=e,{touch:I=!1}=e,{href:_}=e,{action:E="close"}=e,{defaultAction:w=!1}=e,{secondary:T=!1}=e,S={},A={},C=Q("SMUI:button:context"),{component:x=(null==_?dn:un)}=e;function k(){return h.getElement()}return J("SMUI:label:context","button"),J("SMUI:icon:context","button"),t.$$set=t=>{i(29,e=n(n({},e),y(t))),i(22,c=v(e,a)),"use"in t&&i(0,p=t.use),"class"in t&&i(1,f=t.class),"style"in t&&i(2,m=t.style),"ripple"in t&&i(3,g=t.ripple),"color"in t&&i(4,b=t.color),"variant"in t&&i(5,$=t.variant),"touch"in t&&i(6,I=t.touch),"href"in t&&i(7,_=t.href),"action"in t&&i(23,E=t.action),"defaultAction"in t&&i(24,w=t.defaultAction),"secondary"in t&&i(8,T=t.secondary),"component"in t&&i(9,x=t.component),"$$scope"in t&&i(28,u=t.$$scope)},t.$$.update=()=>{i(15,s="dialog:action"===C&&null!=E?{"data-mdc-dialog-action":E}:{action:e.action}),i(14,r="dialog:action"===C&&w?{"data-mdc-dialog-button-default":""}:{default:e.default}),i(13,o="banner"===C?{}:{secondary:e.secondary})},e=y(e),[p,f,m,g,b,$,I,_,T,x,h,S,A,o,r,s,d,C,function(t){S[t]||i(11,S[t]=!0,S)},function(t){t in S&&!S[t]||i(11,S[t]=!1,S)},function(t,e){A[t]!=e&&(""===e||null==e?(delete A[t],i(12,A)):i(12,A[t]=e,A))},function(){"banner"===C&&oe(k(),T?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")},c,E,w,k,l,function(t){et[t?"unshift":"push"]((()=>{h=t,i(10,h)}))},u]}class no extends Lt{constructor(t){super(),Ot(this,t,eo,Zr,a,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}function io(e){let n;return{c(){n=L(e[3])},m(t,e){x(t,n,e)},p(t,e){8&e&&U(n,t[3])},i:t,o:t,d(t){t&&k(n)}}}function so(t){let e;const n=t[8].default,i=h(n,t,t[7],null);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,s){i&&i.p&&(!e||128&s)&&m(i,n,t,t[7],e?f(n,t[7],s,null):g(t[7]),null)},i(t){e||(bt(i,t),e=!0)},o(t){$t(i,t),e=!1},d(t){i&&i.d(t)}}}function ro(t){let e,i,s,a,c,l,u,d;const h=[so,io],p=[];function f(t,e){return null==t[3]?0:1}i=f(t),s=p[i]=h[i](t);let m=[{class:a=re({[t[1]]:!0,"mdc-text-field-character-counter":!0})},t[5]],g={};for(let t=0;t<m.length;t+=1)g=n(g,m[t]);return{c(){e=O("div"),s.c(),P(e,g)},m(n,s){x(n,e,s),p[i].m(e,null),t[9](e),l=!0,u||(d=[$(c=he.call(null,e,t[0])),$(t[4].call(null,e))],u=!0)},p(t,[n]){let r=i;i=f(t),i===r?p[i].p(t,n):(yt(),$t(p[r],1,1,(()=>{p[r]=null})),vt(),s=p[i],s?s.p(t,n):(s=p[i]=h[i](t),s.c()),bt(s,1),s.m(e,null)),P(e,g=Tt(m,[(!l||2&n&&a!==(a=re({[t[1]]:!0,"mdc-text-field-character-counter":!0})))&&{class:a},32&n&&t[5]])),c&&o(c.update)&&1&n&&c.update.call(null,t[0])},i(t){l||(bt(s),l=!0)},o(t){$t(s),l=!1},d(n){n&&k(e),p[i].d(),t[9](null),u=!1,r(d)}}}function oo(t,e,i){const s=["use","class","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;const c=ue(W());let l,u,d,{use:h=[]}=e,{class:p=""}=e;function f(){return l}return X((()=>(u=new ts({setContent:t=>{i(3,d=t)}}),oe(f(),"SMUITextfieldCharacterCounter:mount",u),u.init(),()=>{oe(f(),"SMUITextfieldCharacterCounter:unmount",u),u.destroy()}))),t.$$set=t=>{e=n(n({},e),y(t)),i(5,r=v(e,s)),"use"in t&&i(0,h=t.use),"class"in t&&i(1,p=t.class),"$$scope"in t&&i(7,a=t.$$scope)},[h,p,l,d,c,r,f,a,o,function(t){et[t?"unshift":"push"]((()=>{l=t,i(2,l)}))}]}class ao extends Lt{constructor(t){super(),Ot(this,t,oo,ro,a,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */var co={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},lo={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},uo={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},ho=uo.ARIA_LIVE_DELAY_MS,po=lo.ARIA_LIVE_LABEL_TEXT_ATTR;
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var fo=co.OPENING,mo=co.OPEN,go=co.CLOSING,yo=lo.REASON_ACTION,vo=lo.REASON_DISMISS,bo=function(t){function e(n){var i=t.call(this,Dt(Dt({},e.defaultAdapter),n))||this;return i.opened=!1,i.animationFrame=0,i.animationTimer=0,i.autoDismissTimer=0,i.autoDismissTimeoutMs=uo.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,i.closeOnEscape=!0,i}return Nt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return co},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return lo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return uo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(fo),this.adapter.removeClass(mo),this.adapter.removeClass(go)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(go),this.adapter.addClass(fo),this.adapter.announce(),this.runNextAnimationFrame((function(){t.adapter.addClass(mo),t.animationTimer=setTimeout((function(){var e=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),e!==uo.INDETERMINATE&&(t.autoDismissTimer=setTimeout((function(){t.close(vo)}),e))}),uo.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(co.CLOSING),this.adapter.removeClass(co.OPEN),this.adapter.removeClass(co.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout((function(){e.handleAnimationTimerEnd(),e.adapter.notifyClosed(t)}),uo.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(t){var e=uo.MIN_AUTO_DISMISS_TIMEOUT_MS,n=uo.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(t===uo.INDETERMINATE||t<=n&&t>=e))throw new Error("\n        timeoutMs must be an integer in the range "+e+"–"+n+"\n        (or "+uo.INDETERMINATE+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs=t},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},e.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(vo)},e.prototype.handleActionButtonClick=function(t){this.close(yo)},e.prototype.handleActionIconClick=function(t){this.close(vo)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(co.OPENING),this.adapter.removeClass(co.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)}))},e}(Ft);function $o(t){let e,i,s,a,c,l,u,d,p;const y=t[25].default,v=h(y,t,t[24],null);let b=[{class:s=re({[t[4]]:!0,"mdc-snackbar__surface":!0})},{role:"status"},{"aria-relevant":"additions"},de(t[12],"surface$")],I={};for(let t=0;t<b.length;t+=1)I=n(I,b[t]);let _=[{class:c=re({[t[1]]:!0,"mdc-snackbar":!0,"mdc-snackbar--stacked":"stacked"===t[2],"mdc-snackbar--leading":t[3],...t[8]})},ae(t[12],["surface$"])],E={};for(let t=0;t<_.length;t+=1)E=n(E,_[t]);return{c(){e=O("aside"),i=O("div"),v&&v.c(),P(i,I),P(e,E)},m(n,s){x(n,e,s),S(e,i),v&&v.m(i,null),t[26](e),u=!0,d||(p=[$(a=he.call(null,i,t[5])),D(i,"click",t[10]),$(l=he.call(null,e,t[0])),$(t[9].call(null,e)),D(e,"SMUISnackbar:closed",t[11]),D(e,"keydown",t[27])],d=!0)},p(t,n){v&&v.p&&(!u||16777216&n[0])&&m(v,y,t,t[24],u?f(y,t[24],n,null):g(t[24]),null),P(i,I=Tt(b,[(!u||16&n[0]&&s!==(s=re({[t[4]]:!0,"mdc-snackbar__surface":!0})))&&{class:s},{role:"status"},{"aria-relevant":"additions"},4096&n[0]&&de(t[12],"surface$")])),a&&o(a.update)&&32&n[0]&&a.update.call(null,t[5]),P(e,E=Tt(_,[(!u||270&n[0]&&c!==(c=re({[t[1]]:!0,"mdc-snackbar":!0,"mdc-snackbar--stacked":"stacked"===t[2],"mdc-snackbar--leading":t[3],...t[8]})))&&{class:c},4096&n[0]&&ae(t[12],["surface$"])])),l&&o(l.update)&&1&n[0]&&l.update.call(null,t[0])},i(t){u||(bt(v,t),u=!0)},o(t){$t(v,t),u=!1},d(n){n&&k(e),v&&v.d(n),t[26](null),d=!1,r(p)}}}let Io=Promise.resolve();function _o(t,e,i){const s=["use","class","variant","leading","timeoutMs","closeOnEscape","labelText","actionButtonText","surface$class","surface$use","open","forceOpen","close","isOpen","getLabelElement","getActionButtonElement","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;const{closest:c}=Ht,l=ue(W());let u=()=>{};function d(t){return t===u}let h,p,f,{use:m=[]}=e,{class:g=""}=e,{variant:b=""}=e,{leading:$=!1}=e,{timeoutMs:I=5e3}=e,{closeOnEscape:_=!0}=e,{labelText:E=u}=e,{actionButtonText:w=u}=e,{surface$class:T=""}=e,{surface$use:S=[]}=e,A={},C=new Promise((t=>f=t));function x(t){A[t]||i(8,A[t]=!0,A)}function k(t){t in A&&!A[t]||i(8,A[t]=!1,A)}function O(){var t;return null!==(t=R().querySelector(".mdc-snackbar__label"))&&void 0!==t?t:document.createElement("div")}function L(){var t;return null!==(t=R().querySelector(".mdc-snackbar__action"))&&void 0!==t?t:document.createElement("button")}function R(){return h}J("SMUI:label:context","snackbar"),X((()=>(i(6,p=new bo({addClass:x,announce:()=>function(t,e){void 0===e&&(e=t);var n=t.getAttribute("aria-live"),i=e.textContent.trim();i&&n&&(t.setAttribute("aria-live","off"),e.textContent="",e.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',e.setAttribute(po,i),setTimeout((function(){t.setAttribute("aria-live",n),e.removeAttribute(po),e.textContent=i}),ho))}(O()),notifyClosed:t=>oe(R(),"SMUISnackbar:closed",t?{reason:t}:{},void 0,!0),notifyClosing:t=>oe(R(),"SMUISnackbar:closing",t?{reason:t}:{},void 0,!0),notifyOpened:()=>oe(R(),"SMUISnackbar:opened",void 0,void 0,!0),notifyOpening:()=>oe(R(),"SMUISnackbar:opening",void 0,void 0,!0),removeClass:k})),p.init(),()=>{p.destroy()})));return t.$$set=t=>{e=n(n({},e),y(t)),i(12,r=v(e,s)),"use"in t&&i(0,m=t.use),"class"in t&&i(1,g=t.class),"variant"in t&&i(2,b=t.variant),"leading"in t&&i(3,$=t.leading),"timeoutMs"in t&&i(13,I=t.timeoutMs),"closeOnEscape"in t&&i(14,_=t.closeOnEscape),"labelText"in t&&i(15,E=t.labelText),"actionButtonText"in t&&i(16,w=t.actionButtonText),"surface$class"in t&&i(4,T=t.surface$class),"surface$use"in t&&i(5,S=t.surface$use),"$$scope"in t&&i(24,a=t.$$scope)},t.$$.update=()=>{8256&t.$$.dirty[0]&&p&&p.getTimeoutMs()!==I&&p.setTimeoutMs(I),16448&t.$$.dirty[0]&&p&&p.getCloseOnEscape()!==_&&p.setCloseOnEscape(_),32832&t.$$.dirty[0]&&p&&!d(E)&&O().textContent!==E&&(O().textContent=E),65600&t.$$.dirty[0]&&p&&!d(w)&&L().textContent!==w&&(L().textContent=w)},[m,g,b,$,T,S,p,h,A,l,function(t){const e=t.target;p&&(c(e,".mdc-snackbar__action")?p.handleActionButtonClick(t):c(e,".mdc-snackbar__dismiss")&&p.handleActionIconClick(t))},function(){f(),C=new Promise((t=>f=t))},r,I,_,E,w,function(){Io=Io.then((()=>(p.open(),C)))},function(){return p.open()},function(t){return p.close(t)},function(){return p.isOpen()},O,L,R,a,o,function(t){et[t?"unshift":"push"]((()=>{h=t,i(7,h)}))},t=>p&&p.handleKeyDown(t)]}class Eo extends Lt{constructor(t){super(),Ot(this,t,_o,$o,a,{use:0,class:1,variant:2,leading:3,timeoutMs:13,closeOnEscape:14,labelText:15,actionButtonText:16,surface$class:4,surface$use:5,open:17,forceOpen:18,close:19,isOpen:20,getLabelElement:21,getActionButtonElement:22,getElement:23},null,[-1,-1])}get open(){return this.$$.ctx[17]}get forceOpen(){return this.$$.ctx[18]}get close(){return this.$$.ctx[19]}get isOpen(){return this.$$.ctx[20]}get getLabelElement(){return this.$$.ctx[21]}get getActionButtonElement(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}var wo=Ae({class:"mdc-snackbar__actions",props:{"aria-atomic":"true"},contexts:{"SMUI:button:context":"snackbar:actions","SMUI:icon-button:context":"snackbar:actions","SMUI:label:context":void 0},component:hn});function To(t,e,n){const i=t.slice();return i[11]=e[n],i}function So(t){let e,i;const s=[{labelText:t[1].label},t[1]&&t[1].props||{},de(t[4],"snackbar$")];let r={$$slots:{default:[No]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)r=n(r,s[t]);return e=new Eo({props:r}),t[10](e),e.$on("SMUISnackbar:closed",t[2]),{c(){Ct(e.$$.fragment)},m(t,n){xt(e,t,n),i=!0},p(t,n){const i=18&n?Tt(s,[2&n&&{labelText:t[1].label},2&n&&St(t[1]&&t[1].props||{}),16&n&&St(de(t[4],"snackbar$"))]):{};16402&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){i||(bt(e.$$.fragment,t),i=!0)},o(t){$t(e.$$.fragment,t),i=!1},d(n){t[10](null),kt(e,n)}}}function Ao(t){let e,n;return e=new wo({props:{$$slots:{default:[Ro]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};16402&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function Co(t){let e,n,i=t[1].actions,s=[];for(let e=0;e<i.length;e+=1)s[e]=ko(To(t,i,e));const r=t=>$t(s[t],1,1,(()=>{s[t]=null}));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=N()},m(t,i){for(let e=0;e<s.length;e+=1)s[e].m(t,i);x(t,e,i),n=!0},p(t,n){if(18&n){let o;for(i=t[1].actions,o=0;o<i.length;o+=1){const r=To(t,i,o);s[o]?(s[o].p(r,n),bt(s[o],1)):(s[o]=ko(r),s[o].c(),bt(s[o],1),s[o].m(e.parentNode,e))}for(yt(),o=i.length;o<s.length;o+=1)r(o);vt()}},i(t){if(!n){for(let t=0;t<i.length;t+=1)bt(s[t]);n=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)$t(s[t]);n=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(s,t),t&&k(e)}}}function xo(t){let e,n=t[11].text+"";return{c(){e=L(n)},m(t,n){x(t,e,n)},p(t,i){2&i&&n!==(n=t[11].text+"")&&U(e,n)},d(t){t&&k(e)}}}function ko(t){let e,i;const s=[de(t[4],"action$")];let r={$$slots:{default:[xo]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)r=n(r,s[t]);return e=new no({props:r}),e.$on("click",(function(...e){return t[9](t[11],...e)})),{c(){Ct(e.$$.fragment)},m(t,n){xt(e,t,n),i=!0},p(n,i){t=n;const r=16&i?Tt(s,[St(de(t[4],"action$"))]):{};16386&i&&(r.$$scope={dirty:i,ctx:t}),e.$set(r)},i(t){i||(bt(e.$$.fragment,t),i=!0)},o(t){$t(e.$$.fragment,t),i=!1},d(t){kt(e,t)}}}function Oo(t){let e,i;const s=[{title:t[1].dismissTitle||"Dismiss"},de(t[4],"dismiss$")];let r={$$slots:{default:[Lo]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)r=n(r,s[t]);return e=new Ai({props:r}),e.$on("click",t[3]),{c(){Ct(e.$$.fragment)},m(t,n){xt(e,t,n),i=!0},p(t,n){const i=18&n?Tt(s,[2&n&&{title:t[1].dismissTitle||"Dismiss"},16&n&&St(de(t[4],"dismiss$"))]):{};16386&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){i||(bt(e.$$.fragment,t),i=!0)},o(t){$t(e.$$.fragment,t),i=!1},d(t){kt(e,t)}}}function Lo(t){let e,n=(t[1].dismissText||"close")+"";return{c(){e=L(n)},m(t,n){x(t,e,n)},p(t,i){2&i&&n!==(n=(t[1].dismissText||"close")+"")&&U(e,n)},d(t){t&&k(e)}}}function Ro(t){let e,n,i,s=t[1].actions&&Co(t),r=t[1].dismissButton&&Oo(t);return{c(){s&&s.c(),e=R(),r&&r.c(),n=N()},m(t,o){s&&s.m(t,o),x(t,e,o),r&&r.m(t,o),x(t,n,o),i=!0},p(t,i){t[1].actions?s?(s.p(t,i),2&i&&bt(s,1)):(s=Co(t),s.c(),bt(s,1),s.m(e.parentNode,e)):s&&(yt(),$t(s,1,1,(()=>{s=null})),vt()),t[1].dismissButton?r?(r.p(t,i),2&i&&bt(r,1)):(r=Oo(t),r.c(),bt(r,1),r.m(n.parentNode,n)):r&&(yt(),$t(r,1,1,(()=>{r=null})),vt())},i(t){i||(bt(s),bt(r),i=!0)},o(t){$t(s),$t(r),i=!1},d(t){s&&s.d(t),t&&k(e),r&&r.d(t),t&&k(n)}}}function No(t){let e,i,s,r;const o=[de(t[4],"label$")];let a={};for(let t=0;t<o.length;t+=1)a=n(a,o[t]);e=new Pi({props:a});let c=(t[1].actions||t[1].dismissButton)&&Ao(t);return{c(){Ct(e.$$.fragment),i=R(),c&&c.c(),s=N()},m(t,n){xt(e,t,n),x(t,i,n),c&&c.m(t,n),x(t,s,n),r=!0},p(t,n){const i=16&n?Tt(o,[St(de(t[4],"label$"))]):{};e.$set(i),t[1].actions||t[1].dismissButton?c?(c.p(t,n),2&n&&bt(c,1)):(c=Ao(t),c.c(),bt(c,1),c.m(s.parentNode,s)):c&&(yt(),$t(c,1,1,(()=>{c=null})),vt())},i(t){r||(bt(e.$$.fragment,t),bt(c),r=!0)},o(t){$t(e.$$.fragment,t),$t(c),r=!1},d(t){kt(e,t),t&&k(i),c&&c.d(t),t&&k(s)}}}function Do(t){let e,n,i=t[1]&&So(t);return{c(){i&&i.c(),e=N()},m(t,s){i&&i.m(t,s),x(t,e,s),n=!0},p(t,[n]){t[1]?i?(i.p(t,n),2&n&&bt(i,1)):(i=So(t),i.c(),bt(i,1),i.m(e.parentNode,e)):i&&(yt(),$t(i,1,1,(()=>{i=null})),vt())},i(t){n||(bt(i),n=!0)},o(t){$t(i),n=!1},d(t){i&&i.d(t),t&&k(e)}}}function Mo(t,e,i){const s=["push","getElement"];let r,o,a=v(e,s),c=[],l=!1;return t.$$set=t=>{e=n(n({},e),y(t)),i(4,a=v(e,s))},t.$$.update=()=>{130&t.$$.dirty&&c.length&&!o&&(i(1,o=c[0]),i(8,l=!0)),257&t.$$.dirty&&r&&l&&!r.isOpen()&&(r.open(),i(8,l=!1))},[r,o,function(t){(null==o?void 0:o.onClose)&&o.onClose(t),c.splice(0,1),i(7,c),i(1,o=void 0)},function(t){(null==o?void 0:o.onDismiss)&&o.onDismiss(t)},a,function(t){c.push(t),i(7,c)},function(){return r.getElement()},c,l,(t,e)=>function(t,e){t.onClick&&t.onClick(e)}(t,e),function(t){et[t?"unshift":"push"]((()=>{r=t,i(0,r)}))}]}class Po extends Lt{constructor(t){super(),Ot(this,t,Mo,Do,a,{push:5,getElement:6})}get push(){return this.$$.ctx[5]}get getElement(){return this.$$.ctx[6]}}
/**
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
     */
/**
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
     */const Fo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const s=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,l=s>>2,u=(3&s)<<4|o>>4;let d=(15&o)<<2|c>>6,h=63&c;a||(h=64,r||(d=64)),i.push(n[l],n[u],n[d],n[h])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e}(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const s=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==s||null==r||null==o||null==a)throw Error();const c=s<<2|r>>4;if(i.push(c),64!==o){const t=r<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
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
     */
class Uo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
     */function Vo(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Bo(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vo())}function Ho(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function jo(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function qo(){const t=Vo();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}class zo extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,zo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(Ko,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new zo(i,o,n)}}const Ko=/\{\$([^}]+)}/g;function Wo(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(Xo(n)&&Xo(r)){if(!Wo(n,r))return!1}else if(n!==r)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function Xo(t){return null!==t&&"object"==typeof t}
/**
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
     */function Yo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}class Jo{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=Qo),void 0===i.error&&(i.error=Qo),void 0===i.complete&&(i.complete=Qo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Qo(){}
/**
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
     */function Zo(t){return t&&t._delegate?t._delegate:t}class ta{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
     */const ea="[DEFAULT]";
/**
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
     */class na{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Uo;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:ea})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===ea?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:ea:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ia{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new na(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
     */var sa;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(sa||(sa={}));const ra={debug:sa.DEBUG,verbose:sa.VERBOSE,info:sa.INFO,warn:sa.WARN,error:sa.ERROR,silent:sa.SILENT},oa=sa.INFO,aa={[sa.DEBUG]:"log",[sa.VERBOSE]:"log",[sa.INFO]:"info",[sa.WARN]:"warn",[sa.ERROR]:"error"},ca=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=aa[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class la{constructor(t){this.name=t,this._logLevel=oa,this._logHandler=ca,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in sa))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?ra[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,sa.DEBUG,...t),this._logHandler(this,sa.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,sa.VERBOSE,...t),this._logHandler(this,sa.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,sa.INFO,...t),this._logHandler(this,sa.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,sa.WARN,...t),this._logHandler(this,sa.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,sa.ERROR,...t),this._logHandler(this,sa.ERROR,...t)}}
/**
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
     */class ua{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const da="@firebase/app",ha="0.7.14",pa=new la("@firebase/app"),fa="[DEFAULT]",ma={[da]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ga=new Map,ya=new Map;function va(t,e){try{t.container.addComponent(e)}catch(n){pa.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ba(t){const e=t.name;if(ya.has(e))return pa.debug(`There were multiple attempts to register component ${e}.`),!1;ya.set(e,t);for(const e of ga.values())va(e,t);return!0}function $a(t,e){return t.container.getProvider(e)}
/**
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
     */const Ia=new Go("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
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
     */
class _a{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ta("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ia.create("app-deleted",{appName:this._name})}}
/**
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
     */const Ea="9.6.4";function wa(t="[DEFAULT]"){const e=ga.get(t);if(!e)throw Ia.create("no-app",{appName:t});return e}function Ta(t,e,n){var i;let s=null!==(i=ma[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void pa.warn(t.join(" "))}ba(new ta(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
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
     */var Sa;Sa="",ba(new ta("platform-logger",(t=>new ua(t)),"PRIVATE")),Ta(da,ha,Sa),Ta(da,ha,"esm2017"),Ta("fire-js","");
/**
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
     */
const Aa="firebasestorage.googleapis.com";
/**
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
     */
class Ca extends zo{constructor(t,e){super(xa(t),`Firebase Storage: ${e} (${xa(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ca.prototype)}_codeEquals(t){return xa(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function xa(t){return"storage/"+t}function ka(){return new Ca("unknown","An unknown error occurred, please check the error payload for server response.")}function Oa(t){return new Ca("invalid-argument",t)}function La(){return new Ca("app-deleted","The Firebase app was deleted.")}function Ra(t,e){return new Ca("invalid-format","String does not match format '"+t+"': "+e)}function Na(t){throw new Ca("internal-error","Internal error: "+t)}
/**
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
     */class Da{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=Da.makeFromUrl(t,e)}catch(e){return new Da(t,"")}if(""===n.path)return n;throw new Ca("invalid-default-bucket","Invalid default bucket '"+t+"'.")}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+i+"(/(.*))?$","i");function r(t){t.path_=decodeURIComponent(t.path)}const o=e.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:r},{regex:new RegExp(`^https?://${e===Aa?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:r}];for(let e=0;e<a.length;e++){const i=a[e],s=i.regex.exec(t);if(s){const t=s[i.indices.bucket];let e=s[i.indices.path];e||(e=""),n=new Da(t,e),i.postModify(n);break}}if(null==n)throw function(t){return new Ca("invalid-url","Invalid URL '"+t+"'.")}(t);return n}}class Ma{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
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
     */function Pa(t){return"string"==typeof t||t instanceof String}function Fa(t){return Ua()&&t instanceof Blob}function Ua(){return"undefined"!=typeof Blob}function Va(t,e,n,i){if(i<e)throw Oa(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Oa(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
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
     */function Ba(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function Ha(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){n=n+(e(i)+"="+e(t[i]))+"&"}return n=n.slice(0,-1),n}
/**
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
     */var ja;!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(ja||(ja={}));
/**
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
     */
class qa{constructor(t,e,n,i,s,r,o,a,c,l,u){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new za(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===ja.NO_ERROR,s=n.getStatus();if(!e||this.isRetryStatusCode_(s)){const e=n.getErrorCode()===ja.ABORT;return void t(!1,new za(!1,null,e))}const r=-1!==this.successCodes_.indexOf(s);t(!0,new za(r,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,s=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(s,s.getResponse());!
/**
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
     */
function(t){return void 0!==t}(t)?n():n(t)}catch(t){i(t)}else if(null!==s){const t=ka();t.serverResponse=s.getErrorText(),this.errorCallback_?i(this.errorCallback_(s,t)):i(t)}else if(e.canceled){i(this.appDelete_?La():new Ca("canceled","User canceled the upload/download."))}else{i(new Ca("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?e(0,new za(!1,null,!0)):this.backoffId_=function(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...t){l||(l=!0,e.apply(null,t))}function d(e){s=setTimeout((()=>{s=null,t(p,c())}),e)}function h(){r&&clearTimeout(r)}function p(t,...e){if(l)return void h();if(t)return h(),void u.call(null,t,...e);if(c()||o)return h(),void u.call(null,t,...e);let n;i<64&&(i*=2),1===a?(a=2,n=0):n=1e3*(i+Math.random()),d(n)}let f=!1;function m(t){f||(f=!0,h(),l||(null!==s?(t||(a=2),clearTimeout(s),d(0)):t||(a=1)))}return d(0),r=setTimeout((()=>{o=!0,m(!0)}),n),m}(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&function(t){t(!1)}(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=-1!==[408,429].indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||n||i}}class za{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}
/**
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
     */
function Ga(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Ka(...t){const e=Ga();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(Ua())return new Blob(t);throw new Ca("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
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
     */
const Wa="raw",Xa="base64",Ya="base64url",Ja="data_url";class Qa{constructor(t,e){this.data=t,this.contentType=e||null}}function Za(t,e){switch(t){case Wa:return new Qa(tc(e));case Xa:case Ya:return new Qa(ec(t,e));case Ja:return new Qa(function(t){const e=new nc(t);return e.base64?ec(Xa,e.rest):function(t){let e;try{e=decodeURIComponent(t)}catch(t){throw Ra(Ja,"Malformed data URL.")}return tc(e)}(e.rest)}(e),new nc(e).contentType)}throw ka()}function tc(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if(55296==(64512&i)){if(n<t.length-1&&56320==(64512&t.charCodeAt(n+1))){i=65536|(1023&i)<<10|1023&t.charCodeAt(++n),e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else 56320==(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function ec(t,e){switch(t){case Xa:{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i){throw Ra(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case Ya:{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i){throw Ra(t,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(e)}catch(e){throw Ra(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let t=0;t<n.length;t++)i[t]=n.charCodeAt(t);return i}class nc{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw Ra(Ja,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=function(t,e){if(!(t.length>=e.length))return!1;return t.substring(t.length-e.length)===e}
/**
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
     */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}class ic{constructor(t,e){let n=0,i="";Fa(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(Fa(this.data_)){const n=function(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
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
     */(this.data_,t,e);return null===n?null:new ic(n)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ic(n,!0)}}static getBlob(...t){if(Ua()){const e=t.map((t=>t instanceof ic?t.data_:t));return new ic(Ka.apply(null,e))}{const e=t.map((t=>Pa(t)?Za(Wa,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const i=new Uint8Array(n);let s=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)i[s++]=t[e]})),new ic(i,!0)}}uploadData(){return this.data_}}
/**
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
     */function sc(t){let e;try{e=JSON.parse(t)}catch(t){return null}return function(t){return"object"==typeof t&&!Array.isArray(t)}(e)?e:null}
/**
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
     */function rc(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
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
     */function oc(t,e){return e}class ac{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||oc}}let cc=null;function lc(){if(cc)return cc;const t=[];t.push(new ac("bucket")),t.push(new ac("generation")),t.push(new ac("metageneration")),t.push(new ac("name","fullPath",!0));const e=new ac("name");e.xform=function(t,e){return function(t){return!Pa(t)||t.length<2?t:rc(t)}(e)},t.push(e);const n=new ac("size");return n.xform=function(t,e){return void 0!==e?Number(e):e},t.push(n),t.push(new ac("timeCreated")),t.push(new ac("updated")),t.push(new ac("md5Hash",null,!0)),t.push(new ac("cacheControl",null,!0)),t.push(new ac("contentDisposition",null,!0)),t.push(new ac("contentEncoding",null,!0)),t.push(new ac("contentLanguage",null,!0)),t.push(new ac("contentType",null,!0)),t.push(new ac("metadata","customMetadata",!0)),cc=t,cc}function uc(t,e,n){const i={type:"file"},s=n.length;for(let t=0;t<s;t++){const s=n[t];i[s.local]=s.xform(i,e[s.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){const n=t.bucket,i=t.fullPath,s=new Da(n,i);return e._makeStorageReference(s)}})}(i,t),i}function dc(t,e,n){const i=sc(e);if(null===i)return null;return uc(t,i,n)}class hc{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
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
     */function pc(t){if(!t)throw ka()}function fc(t,e){return function(n,i){const s=dc(t,i,e);return pc(null!==s),function(t,e,n,i){const s=sc(e);if(null===s)return null;if(!Pa(s.downloadTokens))return null;const r=s.downloadTokens;if(0===r.length)return null;const o=encodeURIComponent;return r.split(",").map((e=>{const s=t.bucket,r=t.fullPath;return Ba("/b/"+o(s)+"/o/"+o(r),n,i)+Ha({alt:"media",token:e})}))[0]}(s,i,t.host,t._protocol)}}function mc(t){return function(e,n){let i;var s,r;return 401===e.getStatus()?i=e.getErrorText().includes("Firebase App Check token is invalid")?new Ca("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new Ca("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(r=t.bucket,i=new Ca("quota-exceeded","Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(s=t.path,i=new Ca("unauthorized","User does not have permission to access '"+s+"'.")):i=n,i.serverResponse=n.serverResponse,i}}function gc(t){const e=mc(t);return function(n,i){let s=e(n,i);var r;return 404===n.getStatus()&&(r=t.path,s=new Ca("object-not-found","Object '"+r+"' does not exist.")),s.serverResponse=i.serverResponse,s}}function yc(t,e,n,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}();o["Content-Type"]="multipart/related; boundary="+a;const c=function(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=function(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}(null,e)),i}(e,i,s),l=function(t,e){const n={},i=e.length;for(let s=0;s<i;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}(c,n),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",d="\r\n--"+a+"--",h=ic.getBlob(u,i,d);if(null===h)throw new Ca("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.");const p={name:c.fullPath},f=Ba(r,t.host,t._protocol),m=t.maxUploadRetryTime,g=new hc(f,"POST",function(t,e){return function(n,i){const s=dc(t,i,e);return pc(null!==s),s}}(t,n),m);return g.urlParams=p,g.headers=o,g.body=h.uploadData(),g.errorHandler=mc(e),g}class vc extends class{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ja.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=ja.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=ja.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw Na("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const t in i)i.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,i[t].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Na("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Na("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw Na("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Na("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}{initXhr(){this.xhr_.responseType="text"}}function bc(){return new vc}
/**
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
     */class $c{constructor(t,e){this._service=t,this._location=e instanceof Da?e:Da.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new $c(t,e)}get root(){const t=new Da(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rc(this._location.path)}get storage(){return this._service}get parent(){const t=function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new Da(this._location.bucket,t);return new $c(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new Ca("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}function Ic(t,e,n){t._throwIfRoot("uploadBytes");const i=yc(t.storage,t._location,lc(),new ic(e,!0),n);return t.storage.makeRequestWithTokens(i,bc).then((e=>({metadata:e,ref:t})))}function _c(t){t._throwIfRoot("getDownloadURL");const e=function(t,e,n){const i=Ba(e.fullServerUrl(),t.host,t._protocol),s=t.maxOperationRetryTime,r=new hc(i,"GET",fc(t,n),s);return r.errorHandler=gc(e),r}(t.storage,t._location,lc());return t.storage.makeRequestWithTokens(e,bc).then((t=>{if(null===t)throw new Ca("no-download-url","The given file does not have any download URLs.");return t}))}function Ec(t,e){if(t instanceof Sc){const n=t;if(null==n._bucket)throw new Ca("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const i=new $c(n,n._bucket);return null!=e?Ec(i,e):i}return void 0!==e?function(t,e){const n=function(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}(t._location.path,e),i=new Da(t._location.bucket,n);return new $c(t.storage,i)}
/**
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
     */(t,e):t}function wc(t,e){if(e&&/^[A-Za-z]+:\/\//.test(e)){if(t instanceof Sc)return new $c(t,e);throw Oa("To use ref(service, url), the first argument must be a Storage instance.")}return Ec(t,e)}function Tc(t,e){const n=null==e?void 0:e.storageBucket;return null==n?null:Da.makeFromBucketSpec(n,t)}class Sc{constructor(t,e,n,i,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Aa,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?Da.makeFromBucketSpec(i,this._host):Tc(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=Da.makeFromBucketSpec(this._url,t):this._bucket=Tc(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Va("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Va("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $c(this,t)}_makeRequest(t,e,n,i){if(this._deleted)return new Ma(La());{const s=function(t,e,n,i,s,r){const o=Ha(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(c,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(c,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(c,r),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(c,i),new qa(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}(t,this._appId,n,i,e,this._firebaseVersion);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const Ac="@firebase/storage",Cc="0.9.1",xc="storage";function kc(t,e,n,i){return function(t,e,n=Wa,i){t._throwIfRoot("uploadString");const s=Za(n,e),r=Object.assign({},i);return null==r.contentType&&null!=s.contentType&&(r.contentType=s.contentType),Ic(t,s.data,r)}(t=Zo(t),e,n,i)}function Oc(t){return _c(t=Zo(t))}function Lc(t,e){return wc(t=Zo(t),e)}function Rc(t=wa(),e){return $a(t=Zo(t),xc).getImmediate({identifier:e})}function Nc(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Sc(n,i,s,e,Ea)}ba(new ta(xc,Nc,"PUBLIC").setMultipleInstances(!0)),Ta(Ac,Cc,""),Ta(Ac,Cc,"esm2017");var Dc,Mc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Pc=Pc||{},Fc=Mc||self;function Uc(){}function Vc(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Bc(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Hc="closure_uid_"+(1e9*Math.random()>>>0),jc=0;function qc(t,e,n){return t.call.apply(t.bind,arguments)}function zc(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Gc(t,e,n){return(Gc=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?qc:zc).apply(null,arguments)}function Kc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Wc(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function Xc(){this.s=this.s,this.o=this.o}var Yc={};Xc.prototype.s=!1,Xc.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,Hc)&&t[Hc]||(t[Hc]=++jc)}(this);delete Yc[t]}},Xc.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Qc=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function Zc(t){return Array.prototype.concat.apply([],arguments)}function tl(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function el(t){return/^[\s\xa0]*$/.test(t)}var nl,il=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function sl(t,e){return-1!=t.indexOf(e)}function rl(t,e){return t<e?-1:t>e?1:0}t:{var ol=Fc.navigator;if(ol){var al=ol.userAgent;if(al){nl=al;break t}}nl=""}function cl(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ll(t){const e={};for(const n in t)e[n]=t[n];return e}var ul="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dl(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<ul.length;e++)n=ul[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function hl(t){return hl[" "](t),t}hl[" "]=Uc;var pl,fl,ml=sl(nl,"Opera"),gl=sl(nl,"Trident")||sl(nl,"MSIE"),yl=sl(nl,"Edge"),vl=yl||gl,bl=sl(nl,"Gecko")&&!(sl(nl.toLowerCase(),"webkit")&&!sl(nl,"Edge"))&&!(sl(nl,"Trident")||sl(nl,"MSIE"))&&!sl(nl,"Edge"),$l=sl(nl.toLowerCase(),"webkit")&&!sl(nl,"Edge");function Il(){var t=Fc.document;return t?t.documentMode:void 0}t:{var _l="",El=(fl=nl,bl?/rv:([^\);]+)(\)|;)/.exec(fl):yl?/Edge\/([\d\.]+)/.exec(fl):gl?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(fl):$l?/WebKit\/(\S+)/.exec(fl):ml?/(?:Version)[ \/]?(\S+)/.exec(fl):void 0);if(El&&(_l=El?El[1]:""),gl){var wl=Il();if(null!=wl&&wl>parseFloat(_l)){pl=String(wl);break t}}pl=_l}var Tl,Sl={};function Al(){return function(t){var e=Sl;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=il(String(pl)).split("."),n=il("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=rl(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||rl(0==s[2].length,0==r[2].length)||rl(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(Fc.document&&gl){var Cl=Il();Tl=Cl||(parseInt(pl,10)||void 0)}else Tl=void 0;var xl=Tl,kl=function(){if(!Fc.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Fc.addEventListener("test",Uc,e),Fc.removeEventListener("test",Uc,e)}catch(t){}return t}();function Ol(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Ll(t,e){if(Ol.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(bl){t:{try{hl(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Rl[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ll.Z.h.call(this)}}Ol.prototype.h=function(){this.defaultPrevented=!0},Wc(Ll,Ol);var Rl={2:"touch",3:"pen",4:"mouse"};Ll.prototype.h=function(){Ll.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Nl="closure_listenable_"+(1e6*Math.random()|0),Dl=0;function Ml(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++Dl,this.ca=this.fa=!1}function Pl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Fl(t){this.src=t,this.g={},this.h=0}function Ul(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=Jc(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Pl(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Vl(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}Fl.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=Vl(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Ml(e,this.src,r,!!i,s)).fa=n,t.push(e)),e};var Bl="closure_lm_"+(1e6*Math.random()|0),Hl={};function jl(t,e,n,i,s){if(i&&i.once)return zl(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)jl(t,e[r],n,i,s);return null}return n=Ql(n),t&&t[Nl]?t.N(e,n,Bc(i)?!!i.capture:!!i,s):ql(t,e,n,!1,i,s)}function ql(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Bc(s)?!!s.capture:!!s,a=Yl(t);if(a||(t[Bl]=a=new Fl(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Xl;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)kl||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Wl(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function zl(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)zl(t,e[r],n,i,s);return null}return n=Ql(n),t&&t[Nl]?t.O(e,n,Bc(i)?!!i.capture:!!i,s):ql(t,e,n,!0,i,s)}function Gl(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Gl(t,e[r],n,i,s);else i=Bc(i)?!!i.capture:!!i,n=Ql(n),t&&t[Nl]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Vl(r=t.g[e],n,i,s))&&(Pl(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Yl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vl(e,n,i,s)),(n=-1<t?e[t]:null)&&Kl(n))}function Kl(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Nl])Ul(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Wl(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Yl(e))?(Ul(n,t),0==n.h&&(n.src=null,e[Bl]=null)):Pl(t)}}}function Wl(t){return t in Hl?Hl[t]:Hl[t]="on"+t}function Xl(t,e){if(t.ca)t=!0;else{e=new Ll(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Kl(t),t=n.call(i,e)}return t}function Yl(t){return(t=t[Bl])instanceof Fl?t:null}var Jl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ql(t){return"function"==typeof t?t:(t[Jl]||(t[Jl]=function(e){return t.handleEvent(e)}),t[Jl])}function Zl(){Xc.call(this),this.i=new Fl(this),this.P=this,this.I=null}function tu(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Ol(e,t);else if(e instanceof Ol)e.target=e.target||t;else{var s=e;dl(e=new Ol(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=eu(o,i,!0,e)&&s}if(s=eu(o=e.g=t,i,!0,e)&&s,s=eu(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=eu(o=e.g=n[r],i,!1,e)&&s}function eu(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ul(t.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}Wc(Zl,Xc),Zl.prototype[Nl]=!0,Zl.prototype.removeEventListener=function(t,e,n,i){Gl(this,t,e,n,i)},Zl.prototype.M=function(){if(Zl.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Pl(n[i]);delete e.g[t],e.h--}}this.I=null},Zl.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Zl.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var nu=Fc.JSON.stringify;function iu(){var t=uu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var su,ru=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new ou),(t=>t.reset()));class ou{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function au(t){Fc.setTimeout((()=>{throw t}),0)}function cu(t,e){su||function(){var t=Fc.Promise.resolve(void 0);su=function(){t.then(du)}}(),lu||(su(),lu=!0),uu.add(t,e)}var lu=!1,uu=new class{constructor(){this.h=this.g=null}add(t,e){const n=ru.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function du(){for(var t;t=iu();){try{t.h.call(t.g)}catch(t){au(t)}var e=ru;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}lu=!1}function hu(t,e){Zl.call(this),this.h=t||1,this.g=e||Fc,this.j=Gc(this.kb,this),this.l=Date.now()}function pu(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function fu(t,e,n){if("function"==typeof t)n&&(t=Gc(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Gc(t.handleEvent,t)}return 2147483647<Number(e)?-1:Fc.setTimeout(t,e||0)}function mu(t){t.g=fu((()=>{t.g=null,t.i&&(t.i=!1,mu(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Wc(hu,Zl),(Dc=hu.prototype).da=!1,Dc.S=null,Dc.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),tu(this,"tick"),this.da&&(pu(this),this.start()))}},Dc.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Dc.M=function(){hu.Z.M.call(this),pu(this),delete this.g};class gu extends Xc{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:mu(this)}M(){super.M(),this.g&&(Fc.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yu(t){Xc.call(this),this.h=t,this.g={}}Wc(yu,Xc);var vu=[];function bu(t,e,n,i){Array.isArray(n)||(n&&(vu[0]=n.toString()),n=vu);for(var s=0;s<n.length;s++){var r=jl(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function $u(t){cl(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Kl(t)}),t),t.g={}}function Iu(){this.g=!0}function _u(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return nu(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}yu.prototype.M=function(){yu.Z.M.call(this),$u(this)},yu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Iu.prototype.Aa=function(){this.g=!1},Iu.prototype.info=function(){};var Eu={},wu=null;function Tu(){return wu=wu||new Zl}function Su(t){Ol.call(this,Eu.Ma,t)}function Au(t){const e=Tu();tu(e,new Su(e,t))}function Cu(t,e){Ol.call(this,Eu.STAT_EVENT,t),this.stat=e}function xu(t){const e=Tu();tu(e,new Cu(e,t))}function ku(t,e){Ol.call(this,Eu.Na,t),this.size=e}function Ou(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Fc.setTimeout((function(){t()}),e)}Eu.Ma="serverreachability",Wc(Su,Ol),Eu.STAT_EVENT="statevent",Wc(Cu,Ol),Eu.Na="timingevent",Wc(ku,Ol);var Lu={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ru={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Nu(){}function Du(t){return t.h||(t.h=t.i())}function Mu(){}Nu.prototype.h=null;var Pu,Fu={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Uu(){Ol.call(this,"d")}function Vu(){Ol.call(this,"c")}function Bu(){}function Hu(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new yu(this),this.P=qu,t=vl?125:void 0,this.W=new hu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ju}function ju(){this.i=null,this.g="",this.h=!1}Wc(Uu,Ol),Wc(Vu,Ol),Wc(Bu,Nu),Bu.prototype.g=function(){return new XMLHttpRequest},Bu.prototype.i=function(){return{}},Pu=new Bu;var qu=45e3,zu={},Gu={};function Ku(t,e,n){t.K=1,t.v=gd(ud(e)),t.s=n,t.U=!0,Wu(t,null)}function Wu(t,e){t.F=Date.now(),Qu(t),t.A=ud(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),xd(n.h,"t",i),t.C=0,n=t.l.H,t.h=new ju,t.g=xh(t.l,n?e:null,!t.s),0<t.O&&(t.L=new gu(Gc(t.Ia,t,t.g),t.O)),bu(t.V,t.g,"readystatechange",t.gb),e=t.H?ll(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Au(1),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var d=u.split("_");o=2<=d.length&&"type"==d[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Xu(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Yu(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=Ju(t,n),i==Gu){4==e&&(t.o=4,xu(14),s=!1),_u(t.j,t.m,null,"[Incomplete Response]");break}if(i==zu){t.o=4,xu(15),_u(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}_u(t.j,t.m,i,null),id(t,i)}Xu(t)&&i!=Gu&&i!=zu&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,xu(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ih(e),e.L=!0,xu(11))):(_u(t.j,t.m,n,"[Invalid Chunked Response]"),nd(t),ed(t))}function Ju(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Gu:(n=Number(e.substring(n,i)),isNaN(n)?zu:(i+=1)+n>e.length?Gu:(e=e.substr(i,n),t.C=i+n,e))}function Qu(t){t.Y=Date.now()+t.P,Zu(t,t.P)}function Zu(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ou(Gc(t.eb,t),e)}function td(t){t.B&&(Fc.clearTimeout(t.B),t.B=null)}function ed(t){0==t.l.G||t.I||wh(t.l,t)}function nd(t){td(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,pu(t.W),$u(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function id(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Dd(n.i,t)))if(n.I=t.N,!t.J&&Dd(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Eh(n),hh(n)}$h(n),xu(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=Ou(Gc(n.ab,n),6e3));if(1>=Nd(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Sh(n,11)}else if((t.J||n.g==t)&&Eh(n),!el(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const e=l[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=l[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const t=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(sl(t,"spdy")||sl(t,"quic")||sl(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Md(r,r.h),r.h=null))}if(i.D){const t=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,md(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=Ch(i,i.H?i.la:null,i.W),o.J){Pd(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(td(a),Qu(a)),i.g=o}else bh(i);0<n.l.length&&mh(n)}else"stop"!=l[0]&&"close"!=l[0]||Sh(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Sh(n,7):dh(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}Au(4)}catch(t){}}function sd(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Vc(t)||"string"==typeof t)Qc(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Vc(t)||"string"==typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Vc(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function rd(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof rd)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function od(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];ad(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)ad(s,i=t.g[e])||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function ad(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Dc=Hu.prototype).setTimeout=function(t){this.P=t},Dc.gb=function(t){t=t.target;const e=this.L;e&&3==oh(t)?e.l():this.Ia(t)},Dc.Ia=function(t){try{if(t==this.g)t:{const u=oh(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(3!=u||vl||this.g&&(this.h.h||this.g.ga()||ah(this.g)))){this.I||4!=u||7==e||Au(8==e||0>=d?3:2),td(this);var n=this.g.ba();this.N=n;e:if(Xu(this)){var i=ah(this.g);t="";var s=i.length,r=4==oh(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){nd(this),ed(this);var o="";break e}this.h.i=new Fc.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!el(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,xu(12),nd(this),ed(this);break t}_u(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,id(this,n)}this.U?(Yu(this,u,o),vl&&this.i&&3==u&&(bu(this.V,this.W,"tick",this.fb),this.W.start())):(_u(this.j,this.m,o,null),id(this,o)),4==u&&nd(this),this.i&&!this.I&&(4==u?wh(this.l,this):(this.i=!1,Qu(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,xu(12)):(this.o=0,xu(13)),nd(this),ed(this)}}}catch(t){}},Dc.fb=function(){if(this.g){var t=oh(this.g),e=this.g.ga();this.C<e.length&&(td(this),Yu(this,t,e),this.i&&4!=t&&Qu(this))}},Dc.cancel=function(){this.I=!0,nd(this)},Dc.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Au(3),xu(17)),nd(this),this.o=2,ed(this)):Zu(this,this.Y-t)},(Dc=rd.prototype).R=function(){od(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Dc.T=function(){return od(this),this.g.concat()},Dc.get=function(t,e){return ad(this.h,t)?this.h[t]:e},Dc.set=function(t,e){ad(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Dc.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var cd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ld(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ld){this.g=void 0!==e?e:t.g,dd(this,t.j),this.s=t.s,hd(this,t.i),pd(this,t.m),this.l=t.l,e=t.h;var n=new Td;n.i=e.i,e.g&&(n.g=new rd(e.g),n.h=e.h),fd(this,n),this.o=t.o}else t&&(n=String(t).match(cd))?(this.g=!!e,dd(this,n[1]||"",!0),this.s=yd(n[2]||""),hd(this,n[3]||"",!0),pd(this,n[4]),this.l=yd(n[5]||"",!0),fd(this,n[6]||"",!0),this.o=yd(n[7]||"")):(this.g=!!e,this.h=new Td(null,this.g))}function ud(t){return new ld(t)}function dd(t,e,n){t.j=n?yd(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hd(t,e,n){t.i=n?yd(e,!0):e}function pd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fd(t,e,n){e instanceof Td?(t.h=e,function(t,e){e&&!t.j&&(Sd(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ad(this,e),xd(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=vd(e,Ed)),t.h=new Td(e,t.g))}function md(t,e,n){t.h.set(e,n)}function gd(t){return md(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yd(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vd(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,bd),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function bd(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ld.prototype.toString=function(){var t=[],e=this.j;e&&t.push(vd(e,$d,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(vd(e,$d,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(vd(n,"/"==n.charAt(0)?_d:Id,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",vd(n,wd)),t.join("")};var $d=/[#\/\?@]/g,Id=/[#\?:]/g,_d=/[#\?]/g,Ed=/[#\?@]/g,wd=/#/g;function Td(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Sd(t){t.g||(t.g=new rd,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ad(t,e){Sd(t),e=kd(t,e),ad(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,ad((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&od(t)))}function Cd(t,e){return Sd(t),e=kd(t,e),ad(t.g.h,e)}function xd(t,e,n){Ad(t,e),0<n.length&&(t.i=null,t.g.set(kd(t,e),tl(n)),t.h+=n.length)}function kd(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Dc=Td.prototype).add=function(t,e){Sd(this),this.i=null,t=kd(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Dc.forEach=function(t,e){Sd(this),this.g.forEach((function(n,i){Qc(n,(function(n){t.call(e,n,i,this)}),this)}),this)},Dc.T=function(){Sd(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},Dc.R=function(t){Sd(this);var e=[];if("string"==typeof t)Cd(this,t)&&(e=Zc(e,this.g.get(kd(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Zc(e,t[n])}return e},Dc.set=function(t,e){return Sd(this),this.i=null,Cd(this,t=kd(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Dc.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Dc.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function Od(t){this.l=t||Ld,Fc.PerformanceNavigationTiming?t=0<(t=Fc.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Fc.g&&Fc.g.Ea&&Fc.g.Ea()&&Fc.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ld=10;function Rd(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Nd(t){return t.h?1:t.g?t.g.size:0}function Dd(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Md(t,e){t.g?t.g.add(e):t.h=e}function Pd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Fd(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return tl(t.i)}function Ud(){}function Vd(){this.g=new Ud}function Bd(t,e,n){const i=n||"";try{sd(t,(function(t,n){let s=t;Bc(t)&&(s=nu(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Hd(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function jd(t){this.l=t.$b||null,this.j=t.ib||!1}function qd(t,e){Zl.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=zd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Od.prototype.cancel=function(){if(this.i=Fd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ud.prototype.stringify=function(t){return Fc.JSON.stringify(t,void 0)},Ud.prototype.parse=function(t){return Fc.JSON.parse(t,void 0)},Wc(jd,Nu),jd.prototype.g=function(){return new qd(this.l,this.j)},jd.prototype.i=function(t){return function(){return t}}({}),Wc(qd,Zl);var zd=0;function Gd(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Kd(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Wd(t)}function Wd(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Dc=qd.prototype).open=function(t,e){if(this.readyState!=zd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Wd(this)},Dc.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Fc).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Dc.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Kd(this)),this.readyState=zd},Dc.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Wd(this)),this.g&&(this.readyState=3,Wd(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Fc.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gd(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Dc.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Kd(this):Wd(this),3==this.readyState&&Gd(this)}},Dc.Ua=function(t){this.g&&(this.response=this.responseText=t,Kd(this))},Dc.Ta=function(t){this.g&&(this.response=t,Kd(this))},Dc.ha=function(){this.g&&Kd(this)},Dc.setRequestHeader=function(t,e){this.v.append(t,e)},Dc.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Dc.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(qd.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Xd=Fc.JSON.parse;function Yd(t){Zl.call(this),this.headers=new rd,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Jd,this.K=this.L=!1}Wc(Yd,Zl);var Jd="",Qd=/^https?$/i,Zd=["POST","PUT"];function th(t){return"content-type"==t.toLowerCase()}function eh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nh(t),sh(t)}function nh(t){t.D||(t.D=!0,tu(t,"complete"),tu(t,"error"))}function ih(t){if(t.h&&void 0!==Pc&&(!t.C[1]||4!=oh(t)||2!=t.ba()))if(t.v&&4==oh(t))fu(t.Fa,0,t);else if(tu(t,"readystatechange"),4==oh(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(cd)[1]||null;if(!s&&Fc.self&&Fc.self.location){var r=Fc.self.location.protocol;s=r.substr(0,r.length-1)}i=!Qd.test(s?s.toLowerCase():"")}n=i}if(n)tu(t,"complete"),tu(t,"success");else{t.m=6;try{var o=2<oh(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",nh(t)}}finally{sh(t)}}}function sh(t,e){if(t.g){rh(t);const n=t.g,i=t.C[0]?Uc:null;t.g=null,t.C=null,e||tu(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function rh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Fc.clearTimeout(t.A),t.A=null)}function oh(t){return t.g?t.g.readyState:0}function ah(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Jd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ch(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return cl(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):md(t,e,n))}function lh(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function uh(t){this.za=0,this.l=[],this.h=new Iu,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=lh("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=lh("baseRetryDelayMs",5e3,t),this.$a=lh("retryDelaySeedMs",1e4,t),this.Ya=lh("forwardChannelMaxRetries",2,t),this.ra=lh("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Od(t&&t.concurrentRequestLimit),this.Ca=new Vd,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function dh(t){if(ph(t),3==t.G){var e=t.V++,n=ud(t.F);md(n,"SID",t.J),md(n,"RID",e),md(n,"TYPE","terminate"),yh(t,n),(e=new Hu(t,t.h,e,void 0)).K=2,e.v=gd(ud(n)),n=!1,Fc.navigator&&Fc.navigator.sendBeacon&&(n=Fc.navigator.sendBeacon(e.v.toString(),"")),!n&&Fc.Image&&((new Image).src=e.v,n=!0),n||(e.g=xh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Qu(e)}Ah(t)}function hh(t){t.g&&(Ih(t),t.g.cancel(),t.g=null)}function ph(t){hh(t),t.u&&(Fc.clearTimeout(t.u),t.u=null),Eh(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Fc.clearTimeout(t.m),t.m=null)}function fh(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&mh(t)}function mh(t){Rd(t.i)||t.m||(t.m=!0,cu(t.Ha,t),t.C=0)}function gh(t,e){var n;n=e?e.m:t.V++;const i=ud(t.F);md(i,"SID",t.J),md(i,"RID",n),md(i,"AID",t.U),yh(t,i),t.o&&t.s&&ch(i,t.o,t.s),n=new Hu(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=vh(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Md(t.i,n),Ku(n,i,e)}function yh(t,e){t.j&&sd({},(function(t,n){md(e,n,t)}))}function vh(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Gc(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{Bd(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function bh(t){t.g||t.u||(t.Y=1,cu(t.Ga,t),t.A=0)}function $h(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Ou(Gc(t.Ga,t),Th(t,t.A)),t.A++,!0)}function Ih(t){null!=t.B&&(Fc.clearTimeout(t.B),t.B=null)}function _h(t){t.g=new Hu(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=ud(t.oa);md(e,"RID","rpc"),md(e,"SID",t.J),md(e,"CI",t.N?"0":"1"),md(e,"AID",t.U),yh(t,e),md(e,"TYPE","xmlhttp"),t.o&&t.s&&ch(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=gd(ud(e)),n.s=null,n.U=!0,Wu(n,t)}function Eh(t){null!=t.v&&(Fc.clearTimeout(t.v),t.v=null)}function wh(t,e){var n=null;if(t.g==e){Eh(t),Ih(t),t.g=null;var i=2}else{if(!Dd(t.i,e))return;n=e.D,Pd(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;tu(i=Tu(),new ku(i,n,e,s)),mh(t)}else bh(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==i&&function(t,e){return!(Nd(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Ou(Gc(t.Ha,t,e),Th(t,t.C)),t.C++,0)))}(t,e)||2==i&&$h(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Sh(t,5);break;case 4:Sh(t,10);break;case 3:Sh(t,6);break;default:Sh(t,2)}}function Th(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Sh(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=Gc(t.jb,t);n||(n=new ld("//www.google.com/images/cleardot.gif"),Fc.location&&"http"==Fc.location.protocol||dd(n,"https"),gd(n)),function(t,e){const n=new Iu;if(Fc.Image){const i=new Image;i.onload=Kc(Hd,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Kc(Hd,n,i,"TestLoadImage: error",!1,e),i.onabort=Kc(Hd,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Kc(Hd,n,i,"TestLoadImage: timeout",!1,e),Fc.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else xu(2);t.G=0,t.j&&t.j.va(e),Ah(t),ph(t)}function Ah(t){t.G=0,t.I=-1,t.j&&(0==Fd(t.i).length&&0==t.l.length||(t.i.i.length=0,tl(t.l),t.l.length=0),t.j.ua())}function Ch(t,e,n){let i=function(t){return t instanceof ld?ud(t):new ld(t,void 0)}(n);if(""!=i.i)e&&hd(i,e+"."+i.i),pd(i,i.m);else{const t=Fc.location;i=function(t,e,n,i){var s=new ld(null,void 0);return t&&dd(s,t),e&&hd(s,e),n&&pd(s,n),i&&(s.l=i),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&cl(t.aa,(function(t,e){md(i,e,t)})),e=t.D,n=t.sa,e&&n&&md(i,e,n),md(i,"VER",t.ma),yh(t,i),i}function xh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Yd(new jd({ib:!0})):new Yd(t.qa)).L=t.H,e}function kh(){}function Oh(){if(gl&&!(10<=Number(xl)))throw Error("Environmental error: no available transport.")}function Lh(t,e){Zl.call(this),this.g=new uh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!el(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!el(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Dh(this)}function Rh(t){Uu.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Nh(){Vu.call(this),this.status=1}function Dh(t){this.g=t}(Dc=Yd.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Pu.g(),this.C=this.u?Du(this.u):Du(Pu),this.g.onreadystatechange=Gc(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void eh(this,t)}t=n||"";const s=new rd(this.headers);i&&sd(i,(function(t,e){s.set(e,t)})),i=function(t){t:{var e=th;const n=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),n=Fc.FormData&&t instanceof Fc.FormData,!(0<=Jc(Zd,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{rh(this),0<this.B&&((this.K=function(t){return gl&&Al()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Gc(this.pa,this)):this.A=fu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){eh(this,t)}},Dc.pa=function(){void 0!==Pc&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tu(this,"timeout"),this.abort(8))},Dc.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tu(this,"complete"),tu(this,"abort"),sh(this))},Dc.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sh(this,!0)),Yd.Z.M.call(this)},Dc.Fa=function(){this.s||(this.F||this.v||this.l?ih(this):this.cb())},Dc.cb=function(){ih(this)},Dc.ba=function(){try{return 2<oh(this)?this.g.status:-1}catch(t){return-1}},Dc.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Dc.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Xd(e)}},Dc.Da=function(){return this.m},Dc.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Dc=uh.prototype).ma=8,Dc.G=1,Dc.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},Dc.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Hu(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=ll(r),dl(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=vh(this,s,e),md(n=ud(this.F),"RID",t),md(n,"CVER",22),this.D&&md(n,"X-HTTP-Session-Id",this.D),yh(this,n),this.o&&r&&ch(n,this.o,r),Md(this.i,s),this.Ra&&md(n,"TYPE","init"),this.ja?(md(n,"$req",e),md(n,"SID","null"),s.$=!0,Ku(s,n,null)):Ku(s,n,e),this.G=2}}else 3==this.G&&(t?gh(this,t):0==this.l.length||Rd(this.i)||gh(this))},Dc.Ga=function(){if(this.u=null,_h(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ou(Gc(this.bb,this),t)}},Dc.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,xu(10),hh(this),_h(this))},Dc.ab=function(){null!=this.v&&(this.v=null,hh(this),$h(this),xu(19))},Dc.jb=function(t){t?(this.h.info("Successfully pinged google.com"),xu(2)):(this.h.info("Failed to ping google.com"),xu(1))},(Dc=kh.prototype).xa=function(){},Dc.wa=function(){},Dc.va=function(){},Dc.ua=function(){},Dc.Oa=function(){},Oh.prototype.g=function(t,e){return new Lh(t,e)},Wc(Lh,Zl),Lh.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),cu(Gc(t.hb,t,e))),xu(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ch(t,null,t.W),mh(t)},Lh.prototype.close=function(){dh(this.g)},Lh.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,fh(this.g,e)}else this.v?((e={}).__data__=nu(t),fh(this.g,e)):fh(this.g,t)},Lh.prototype.M=function(){this.g.j=null,delete this.j,dh(this.g),delete this.g,Lh.Z.M.call(this)},Wc(Rh,Uu),Wc(Nh,Vu),Wc(Dh,kh),Dh.prototype.xa=function(){tu(this.g,"a")},Dh.prototype.wa=function(t){tu(this.g,new Rh(t))},Dh.prototype.va=function(t){tu(this.g,new Nh(t))},Dh.prototype.ua=function(){tu(this.g,"b")},Oh.prototype.createWebChannel=Oh.prototype.g,Lh.prototype.send=Lh.prototype.u,Lh.prototype.open=Lh.prototype.m,Lh.prototype.close=Lh.prototype.close,Lu.NO_ERROR=0,Lu.TIMEOUT=8,Lu.HTTP_ERROR=6,Ru.COMPLETE="complete",Mu.EventType=Fu,Fu.OPEN="a",Fu.CLOSE="b",Fu.ERROR="c",Fu.MESSAGE="d",Zl.prototype.listen=Zl.prototype.N,Yd.prototype.listenOnce=Yd.prototype.O,Yd.prototype.getLastError=Yd.prototype.La,Yd.prototype.getLastErrorCode=Yd.prototype.Da,Yd.prototype.getStatus=Yd.prototype.ba,Yd.prototype.getResponseJson=Yd.prototype.Qa,Yd.prototype.getResponseText=Yd.prototype.ga,Yd.prototype.send=Yd.prototype.ea;var Mh=Lu,Ph=Ru,Fh=Eu,Uh=10,Vh=11,Bh=jd,Hh=Mu,jh=Yd;const qh="@firebase/firestore";
/**
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
     */class zh{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}zh.UNAUTHENTICATED=new zh(null),zh.GOOGLE_CREDENTIALS=new zh("google-credentials-uid"),zh.FIRST_PARTY=new zh("first-party-uid"),zh.MOCK_USER=new zh("mock-user");
/**
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
     */
let Gh="9.6.3";
/**
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
     */const Kh=new la("@firebase/firestore");function Wh(){return Kh.logLevel}function Xh(t,...e){if(Kh.logLevel<=sa.DEBUG){const n=e.map(Qh);Kh.debug(`Firestore (${Gh}): ${t}`,...n)}}function Yh(t,...e){if(Kh.logLevel<=sa.ERROR){const n=e.map(Qh);Kh.error(`Firestore (${Gh}): ${t}`,...n)}}function Jh(t,...e){if(Kh.logLevel<=sa.WARN){const n=e.map(Qh);Kh.warn(`Firestore (${Gh}): ${t}`,...n)}}function Qh(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
     */var e}
/**
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
     */function Zh(t="Unexpected state"){const e=`FIRESTORE (${Gh}) INTERNAL ASSERTION FAILED: `+t;throw Yh(e),new Error(e)}function tp(t,e){t||Zh()}function ep(t,e){return t}
/**
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
     */const np={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ip extends zo{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
     */class sp{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
     */class rp{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class op{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(zh.UNAUTHENTICATED)))}shutdown(){}}class ap{constructor(t){this.t=t,this.currentUser=zh.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new sp;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new sp,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Xh("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Xh("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new sp)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Xh("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(tp("string"==typeof e.accessToken),new rp(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tp(null===t||"string"==typeof t),new zh(t)}}class cp{constructor(t,e,n){this.type="FirstParty",this.user=zh.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class lp{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new cp(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(zh.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class up{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dp{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable((()=>(t=>(null!=t.error&&Xh("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),e(t.token)))(n)))};const n=t=>{Xh("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):Xh("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(tp("string"==typeof t.token),new up(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
     */class hp{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
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
     */function pp(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
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
     */hp.I=-1;class fp{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=pp(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function mp(t,e){return t<e?-1:t>e?1:0}function gp(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
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
     */class yp{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ip(np.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ip(np.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ip(np.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ip(np.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return yp.fromMillis(Date.now())}static fromDate(t){return yp.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new yp(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?mp(this.nanoseconds,t.nanoseconds):mp(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
     */class vp{constructor(t){this.timestamp=t}static fromTimestamp(t){return new vp(t)}static min(){return new vp(new yp(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
     */function bp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $p(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ip(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
     */class _p{constructor(t,e,n){void 0===e?e=0:e>t.length&&Zh(),void 0===n?n=t.length-e:n>t.length-e&&Zh(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===_p.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof _p?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ep extends _p{construct(t,e,n){return new Ep(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ip(np.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ep(e)}static emptyPath(){return new Ep([])}}const wp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tp extends _p{construct(t,e,n){return new Tp(t,e,n)}static isValidIdentifier(t){return wp.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tp.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Tp(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new ip(np.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new ip(np.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ip(np.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new ip(np.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Tp(e)}static emptyPath(){return new Tp([])}}
/**
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
     */class Sp{constructor(t){this.fields=t,t.sort(Tp.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return gp(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
     */class Ap{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ap(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ap(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return mp(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ap.EMPTY_BYTE_STRING=new Ap("");const Cp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xp(t){if(tp(!!t),"string"==typeof t){let e=0;const n=Cp.exec(t);if(tp(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:kp(t.seconds),nanos:kp(t.nanos)}}function kp(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Op(t){return"string"==typeof t?Ap.fromBase64String(t):Ap.fromUint8Array(t)}
/**
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
     */function Lp(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Rp(t){const e=t.mapValue.fields.__previous_value__;return Lp(e)?Rp(e):e}function Np(t){const e=xp(t.mapValue.fields.__local_write_time__.timestampValue);return new yp(e.seconds,e.nanos)}
/**
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
     */function Dp(t){return null==t}function Mp(t){return 0===t&&1/t==-1/0}
/**
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
     */
class Pp{constructor(t){this.path=t}static fromPath(t){return new Pp(Ep.fromString(t))}static fromName(t){return new Pp(Ep.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Ep.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ep.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Pp(new Ep(t.slice()))}}
/**
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
     */function Fp(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lp(t)?4:10:Zh()}function Up(t,e){if(t===e)return!0;const n=Fp(t);if(n!==Fp(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Np(t).isEqual(Np(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=xp(t.timestampValue),i=xp(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Op(t.bytesValue).isEqual(Op(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return kp(t.geoPointValue.latitude)===kp(e.geoPointValue.latitude)&&kp(t.geoPointValue.longitude)===kp(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return kp(t.integerValue)===kp(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=kp(t.doubleValue),i=kp(e.doubleValue);return n===i?Mp(n)===Mp(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return gp(t.arrayValue.values||[],e.arrayValue.values||[],Up);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(bp(n)!==bp(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Up(n[t],i[t])))return!1;return!0}(t,e);default:return Zh()}}function Vp(t,e){return void 0!==(t.values||[]).find((t=>Up(t,e)))}function Bp(t,e){if(t===e)return 0;const n=Fp(t),i=Fp(e);if(n!==i)return mp(n,i);switch(n){case 0:return 0;case 1:return mp(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=kp(t.integerValue||t.doubleValue),i=kp(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Hp(t.timestampValue,e.timestampValue);case 4:return Hp(Np(t),Np(e));case 5:return mp(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Op(t),i=Op(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=mp(n[t],i[t]);if(0!==e)return e}return mp(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=mp(kp(t.latitude),kp(e.latitude));return 0!==n?n:mp(kp(t.longitude),kp(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Bp(n[t],i[t]);if(e)return e}return mp(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=mp(i[t],r[t]);if(0!==e)return e;const o=Bp(n[i[t]],s[r[t]]);if(0!==o)return o}return mp(i.length,r.length)}(t.mapValue,e.mapValue);default:throw Zh()}}function Hp(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return mp(t,e);const n=xp(t),i=xp(e),s=mp(n.seconds,i.seconds);return 0!==s?s:mp(n.nanos,i.nanos)}function jp(t){return qp(t)}function qp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=xp(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Op(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Pp.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=qp(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${qp(t.fields[s])}`;return n+"}"}(t.mapValue):Zh();var e,n}function zp(t){return!!t&&"integerValue"in t}function Gp(t){return!!t&&"arrayValue"in t}function Kp(t){return!!t&&"nullValue"in t}function Wp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xp(t){return!!t&&"mapValue"in t}function Yp(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $p(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Yp(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yp(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
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
     */class Jp{constructor(t){this.value=t}static empty(){return new Jp({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Xp(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Yp(e)}setAll(t){let e=Tp.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=Yp(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());Xp(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Up(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Xp(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){$p(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Jp(Yp(this.value))}}function Qp(t){const e=[];return $p(t.fields,((t,n)=>{const i=new Tp([t]);if(Xp(n)){const t=Qp(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Sp(e)
/**
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
     */}class Zp{constructor(t,e,n,i,s){this.key=t,this.documentType=e,this.version=n,this.data=i,this.documentState=s}static newInvalidDocument(t){return new Zp(t,0,vp.min(),Jp.empty(),0)}static newFoundDocument(t,e,n){return new Zp(t,1,e,n,0)}static newNoDocument(t,e){return new Zp(t,2,e,Jp.empty(),0)}static newUnknownDocument(t,e){return new Zp(t,3,e,Jp.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Jp.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Jp.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Zp&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Zp(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
     */class tf{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.R=null}}function ef(t,e=null,n=[],i=[],s=null,r=null,o=null){return new tf(t,e,n,i,s,r,o)}function nf(t){const e=ep(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+jp(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Dp(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=gf(e.startAt)),e.endAt&&(t+="|ub:",t+=gf(e.endAt)),e.R=t}return e.R}function sf(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vf(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Up(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$f(t.startAt,e.startAt)&&$f(t.endAt,e.endAt)}function rf(t){return Pp.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class of extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new af(t,e,n):"array-contains"===e?new df(t,n):"in"===e?new hf(t,n):"not-in"===e?new pf(t,n):"array-contains-any"===e?new ff(t,n):new of(t,e,n)}static P(t,e,n){return"in"===e?new cf(t,n):new lf(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Bp(e,this.value)):null!==e&&Fp(this.value)===Fp(e)&&this.v(Bp(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Zh()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class af extends of{constructor(t,e,n){super(t,e,n),this.key=Pp.fromName(n.referenceValue)}matches(t){const e=Pp.comparator(t.key,this.key);return this.v(e)}}class cf extends of{constructor(t,e){super(t,"in",e),this.keys=uf("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class lf extends of{constructor(t,e){super(t,"not-in",e),this.keys=uf("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function uf(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Pp.fromName(t.referenceValue)))}class df extends of{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Gp(e)&&Vp(e.arrayValue,this.value)}}class hf extends of{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Vp(this.value.arrayValue,e)}}class pf extends of{constructor(t,e){super(t,"not-in",e)}matches(t){if(Vp(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Vp(this.value.arrayValue,e)}}class ff extends of{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Gp(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Vp(this.value.arrayValue,t)))}}class mf{constructor(t,e){this.position=t,this.before=e}}function gf(t){return`${t.before?"b":"a"}:${t.position.map((t=>jp(t))).join(",")}`}class yf{constructor(t,e="asc"){this.field=t,this.dir=e}}function vf(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function bf(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Pp.comparator(Pp.fromName(o.referenceValue),n.key):Bp(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return t.before?i<=0:i<0}function $f(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Up(t.position[n],e.position[n]))return!1;return!0}
/**
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
     */class If{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function _f(t){return new If(t)}function Ef(t){return!Dp(t.limit)&&"F"===t.limitType}function wf(t){return!Dp(t.limit)&&"L"===t.limitType}function Tf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Sf(t){for(const e of t.filters)if(e.V())return e.field;return null}function Af(t){const e=ep(t);if(null===e.S){e.S=[];const t=Sf(e),n=Tf(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new yf(t)),e.S.push(new yf(Tp.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new yf(Tp.keyField(),t))}}}return e.S}function Cf(t){const e=ep(t);if(!e.D)if("F"===e.limitType)e.D=ef(e.path,e.collectionGroup,Af(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Af(e)){const e="desc"===n.dir?"asc":"desc";t.push(new yf(n.field,e))}const n=e.endAt?new mf(e.endAt.position,!e.endAt.before):null,i=e.startAt?new mf(e.startAt.position,!e.startAt.before):null;e.D=ef(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.D}function xf(t,e){return sf(Cf(t),Cf(e))&&t.limitType===e.limitType}function kf(t){return`${nf(Cf(t))}|lt:${t.limitType}`}function Of(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${jp(e.value)}`;var e})).join(", ")}]`),Dp(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+gf(t.startAt)),t.endAt&&(e+=", endAt: "+gf(t.endAt)),`Target(${e})`}(Cf(t))}; limitType=${t.limitType})`}function Lf(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Pp.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!bf(t.startAt,Af(t),e))&&(!t.endAt||!bf(t.endAt,Af(t),e))}(t,e)}function Rf(t){return(e,n)=>{let i=!1;for(const s of Af(t)){const t=Nf(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function Nf(t,e,n){const i=t.field.isKeyField()?Pp.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Bp(i,s):Zh()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Zh()}}
/**
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
     */function Df(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mp(e)?"-0":e}}function Mf(t){return{integerValue:""+t}}function Pf(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Mp(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Mf(e):Df(t,e)}
/**
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
     */class Ff{constructor(){this._=void 0}}function Uf(t,e,n){return t instanceof Hf?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof jf?qf(t,e):t instanceof zf?Gf(t,e):function(t,e){const n=Bf(t,e),i=Wf(n)+Wf(t.N);return zp(n)&&zp(t.N)?Mf(i):Df(t.k,i)}(t,e)}function Vf(t,e,n){return t instanceof jf?qf(t,e):t instanceof zf?Gf(t,e):n}function Bf(t,e){return t instanceof Kf?zp(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Hf extends Ff{}class jf extends Ff{constructor(t){super(),this.elements=t}}function qf(t,e){const n=Xf(e);for(const e of t.elements)n.some((t=>Up(t,e)))||n.push(e);return{arrayValue:{values:n}}}class zf extends Ff{constructor(t){super(),this.elements=t}}function Gf(t,e){let n=Xf(e);for(const e of t.elements)n=n.filter((t=>!Up(t,e)));return{arrayValue:{values:n}}}class Kf extends Ff{constructor(t,e){super(),this.k=t,this.N=e}}function Wf(t){return kp(t.integerValue||t.doubleValue)}function Xf(t){return Gp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Yf{constructor(t,e){this.version=t,this.transformResults=e}}class Jf{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Jf}static exists(t){return new Jf(void 0,t)}static updateTime(t){return new Jf(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Qf(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Zf{}function tm(t,e,n){t instanceof rm?function(t,e,n){const i=t.value.clone(),s=cm(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof om?function(t,e,n){if(!Qf(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=cm(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(am(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function em(t,e,n){t instanceof rm?function(t,e,n){if(!Qf(t.precondition,e))return;const i=t.value.clone(),s=lm(t.fieldTransforms,n,e);i.setAll(s),e.convertToFoundDocument(sm(e),i).setHasLocalMutations()}(t,e,n):t instanceof om?function(t,e,n){if(!Qf(t.precondition,e))return;const i=lm(t.fieldTransforms,n,e),s=e.data;s.setAll(am(t)),s.setAll(i),e.convertToFoundDocument(sm(e),s).setHasLocalMutations()}(t,e,n):function(t,e){Qf(t.precondition,e)&&e.convertToNoDocument(vp.min())}(t,e)}function nm(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=Bf(i.transform,t||null);null!=s&&(null==n&&(n=Jp.empty()),n.set(i.field,s))}return n||null}function im(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&gp(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof jf&&e instanceof jf||t instanceof zf&&e instanceof zf?gp(t.elements,e.elements,Up):t instanceof Kf&&e instanceof Kf?Up(t.N,e.N):t instanceof Hf&&e instanceof Hf}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function sm(t){return t.isFoundDocument()?t.version:vp.min()}class rm extends Zf{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class om extends Zf{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function am(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function cm(t,e,n){const i=new Map;tp(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Vf(o,a,n[s]))}return i}function lm(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,Uf(t,r,e))}return i}class um extends Zf{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class dm extends Zf{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
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
     */class hm{constructor(t){this.count=t}}
/**
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
     */var pm,fm;function mm(t){if(void 0===t)return Yh("GRPC error has no .code"),np.UNKNOWN;switch(t){case pm.OK:return np.OK;case pm.CANCELLED:return np.CANCELLED;case pm.UNKNOWN:return np.UNKNOWN;case pm.DEADLINE_EXCEEDED:return np.DEADLINE_EXCEEDED;case pm.RESOURCE_EXHAUSTED:return np.RESOURCE_EXHAUSTED;case pm.INTERNAL:return np.INTERNAL;case pm.UNAVAILABLE:return np.UNAVAILABLE;case pm.UNAUTHENTICATED:return np.UNAUTHENTICATED;case pm.INVALID_ARGUMENT:return np.INVALID_ARGUMENT;case pm.NOT_FOUND:return np.NOT_FOUND;case pm.ALREADY_EXISTS:return np.ALREADY_EXISTS;case pm.PERMISSION_DENIED:return np.PERMISSION_DENIED;case pm.FAILED_PRECONDITION:return np.FAILED_PRECONDITION;case pm.ABORTED:return np.ABORTED;case pm.OUT_OF_RANGE:return np.OUT_OF_RANGE;case pm.UNIMPLEMENTED:return np.UNIMPLEMENTED;case pm.DATA_LOSS:return np.DATA_LOSS;default:return Zh()}}(fm=pm||(pm={}))[fm.OK=0]="OK",fm[fm.CANCELLED=1]="CANCELLED",fm[fm.UNKNOWN=2]="UNKNOWN",fm[fm.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fm[fm.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fm[fm.NOT_FOUND=5]="NOT_FOUND",fm[fm.ALREADY_EXISTS=6]="ALREADY_EXISTS",fm[fm.PERMISSION_DENIED=7]="PERMISSION_DENIED",fm[fm.UNAUTHENTICATED=16]="UNAUTHENTICATED",fm[fm.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fm[fm.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fm[fm.ABORTED=10]="ABORTED",fm[fm.OUT_OF_RANGE=11]="OUT_OF_RANGE",fm[fm.UNIMPLEMENTED=12]="UNIMPLEMENTED",fm[fm.INTERNAL=13]="INTERNAL",fm[fm.UNAVAILABLE=14]="UNAVAILABLE",fm[fm.DATA_LOSS=15]="DATA_LOSS";
/**
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
     */
class gm{constructor(t,e){this.comparator=t,this.root=e||vm.EMPTY}insert(t,e){return new gm(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vm.BLACK,null,null))}remove(t){return new gm(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vm.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ym(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ym(this.root,t,this.comparator,!1)}getReverseIterator(){return new ym(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ym(this.root,t,this.comparator,!0)}}class ym{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vm{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:vm.RED,this.left=null!=i?i:vm.EMPTY,this.right=null!=s?s:vm.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new vm(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vm.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return vm.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vm.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vm.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Zh();if(this.right.isRed())throw Zh();const t=this.left.check();if(t!==this.right.check())throw Zh();return t+(this.isRed()?0:1)}}vm.EMPTY=null,vm.RED=!0,vm.BLACK=!1,vm.EMPTY=new class{constructor(){this.size=0}get key(){throw Zh()}get value(){throw Zh()}get color(){throw Zh()}get left(){throw Zh()}get right(){throw Zh()}copy(t,e,n,i,s){return this}insert(t,e,n){return new vm(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
     */
class bm{constructor(t){this.comparator=t,this.data=new gm(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $m(this.data.getIterator())}getIteratorFrom(t){return new $m(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof bm))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new bm(this.comparator);return e.data=t,e}}class $m{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
     */const Im=new gm(Pp.comparator);function _m(){return Im}const Em=new gm(Pp.comparator);function wm(){return Em}const Tm=new gm(Pp.comparator);const Sm=new bm(Pp.comparator);function Am(...t){let e=Sm;for(const n of t)e=e.add(n);return e}const Cm=new bm(mp);function xm(){return Cm}
/**
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
     */class km{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Om.createSynthesizedTargetChangeForCurrentChange(t,e)),new km(vp.min(),n,xm(),_m(),Am())}}class Om{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Om(Ap.EMPTY_BYTE_STRING,e,Am(),Am(),Am())}}
/**
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
     */class Lm{constructor(t,e,n,i){this.$=t,this.removedTargetIds=e,this.key=n,this.O=i}}class Rm{constructor(t,e){this.targetId=t,this.M=e}}class Nm{constructor(t,e,n=Ap.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Dm{constructor(){this.F=0,this.L=Fm(),this.B=Ap.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=Am(),e=Am(),n=Am();return this.L.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Zh()}})),new Om(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=Fm()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class Mm{constructor(t){this.et=t,this.nt=new Map,this.st=_m(),this.it=Pm(),this.rt=new bm(mp)}ot(t){for(const e of t.$)t.O&&t.O.isFoundDocument()?this.ct(e,t.O):this.at(e,t.key,t.O);for(const e of t.removedTargetIds)this.at(e,t.key,t.O)}ut(t){this.forEachTarget(t,(e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:Zh()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach(((t,n)=>{this.lt(n)&&e(n)}))}dt(t){const e=t.targetId,n=t.M.count,i=this.wt(e);if(i){const t=i.target;if(rf(t))if(0===n){const n=new Pp(t.path);this.at(e,n,Zp.newNoDocument(n,vp.min()))}else tp(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach(((n,i)=>{const s=this.wt(i);if(s){if(n.current&&rf(s.target)){const e=new Pp(s.target.path);null!==this.st.get(e)||this.yt(i,e)||this.at(i,e,Zp.newNoDocument(e,t))}n.j&&(e.set(i,n.G()),n.H())}}));let n=Am();this.it.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))}));const i=new km(t,e,this.rt,this.st,n);return this.st=_m(),this.it=Pm(),this.rt=new bm(mp),i}ct(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}at(t,e,n){if(!this.lt(t))return;const i=this.ht(t);this.yt(t,e)?i.J(e,1):i.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new Dm,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new bm(mp),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||Xh("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Dm),this.et.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function Pm(){return new gm(Pp.comparator)}function Fm(){return new gm(Pp.comparator)}
/**
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
     */const Um={asc:"ASCENDING",desc:"DESCENDING"},Vm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Bm{constructor(t,e){this.databaseId=t,this.C=e}}function Hm(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jm(t,e){return t.C?e.toBase64():e.toUint8Array()}function qm(t,e){return Hm(t,e.toTimestamp())}function zm(t){return tp(!!t),vp.fromTimestamp(function(t){const e=xp(t);return new yp(e.seconds,e.nanos)}(t))}function Gm(t,e){return function(t){return new Ep(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Km(t){const e=Ep.fromString(t);return tp(pg(e)),e}function Wm(t,e){return Gm(t.databaseId,e.path)}function Xm(t,e){const n=Km(e);if(n.get(1)!==t.databaseId.projectId)throw new ip(np.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ip(np.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Pp(Qm(n))}function Ym(t,e){return Gm(t.databaseId,e)}function Jm(t){return new Ep(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qm(t){return tp(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Zm(t,e,n){return{name:Wm(t,e),fields:n.value.mapValue.fields}}function tg(t,e){return{documents:[Ym(t,e.path)]}}function eg(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Ym(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ym(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Wp(t.value))return{unaryFilter:{field:cg(t.field),op:"IS_NAN"}};if(Kp(t.value))return{unaryFilter:{field:cg(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Wp(t.value))return{unaryFilter:{field:cg(t.field),op:"IS_NOT_NAN"}};if(Kp(t.value))return{unaryFilter:{field:cg(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cg(t.field),op:ag(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:cg(t.field),direction:og(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.C||Dp(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=sg(e.startAt)),e.endAt&&(n.structuredQuery.endAt=sg(e.endAt)),n}function ng(t){let e=function(t){const e=Km(t);return 4===e.length?Ep.emptyPath():Qm(e)}(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){tp(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=ig(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new yf(lg(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Dp(e)?null:e}(n.limit));let c=null;n.startAt&&(c=rg(n.startAt));let l=null;return n.endAt&&(l=rg(n.endAt)),function(t,e,n,i,s,r,o,a){return new If(t,e,n,i,s,r,o,a)}(e,s,o,r,a,"F",c,l)}function ig(t){return t?void 0!==t.unaryFilter?[dg(t)]:void 0!==t.fieldFilter?[ug(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ig(t))).reduce(((t,e)=>t.concat(e))):Zh():[]}function sg(t){return{before:t.before,values:t.position}}function rg(t){const e=!!t.before,n=t.values||[];return new mf(n,e)}function og(t){return Um[t]}function ag(t){return Vm[t]}function cg(t){return{fieldPath:t.canonicalString()}}function lg(t){return Tp.fromServerFormat(t.fieldPath)}function ug(t){return of.create(lg(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Zh()}}(t.fieldFilter.op),t.fieldFilter.value)}function dg(t){switch(t.unaryFilter.op){case"IS_NAN":const e=lg(t.unaryFilter.field);return of.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=lg(t.unaryFilter.field);return of.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=lg(t.unaryFilter.field);return of.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=lg(t.unaryFilter.field);return of.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Zh()}}function hg(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function pg(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
     */
class fg{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Zh(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new fg(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof fg?e:fg.resolve(e)}catch(t){return fg.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):fg.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):fg.reject(e)}static resolve(t){return new fg(((e,n)=>{e(t)}))}static reject(t){return new fg(((e,n)=>{n(t)}))}static waitFor(t){return new fg(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=fg.resolve(!1);for(const n of t)e=e.next((t=>t?fg.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}}function mg(t){return"IndexedDbTransactionError"===t.name}
/**
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
     */class gg{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&tm(i,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&em(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&em(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(vp.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Am())}isEqual(t){return this.batchId===t.batchId&&gp(this.mutations,t.mutations,((t,e)=>im(t,e)))&&gp(this.baseMutations,t.baseMutations,((t,e)=>im(t,e)))}}class yg{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){tp(t.mutations.length===n.length);let i=Tm;const s=t.mutations;for(let t=0;t<s.length;t++)i=i.insert(s[t].key,n[t].version);return new yg(t,e,n,i)}}
/**
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
     */class vg{constructor(t,e,n,i,s=vp.min(),r=vp.min(),o=Ap.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new vg(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new vg(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new vg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
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
     */class bg{constructor(t){this.Gt=t}}function $g(t){const e=ng({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new If(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
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
     */class Ig{constructor(){this.zt=new _g}addToCollectionParentIndex(t,e){return this.zt.add(e),fg.resolve()}getCollectionParents(t,e){return fg.resolve(this.zt.getEntries(e))}}class _g{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new bm(Ep.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new bm(Ep.comparator)).toArray()}}
/**
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
     */class Eg{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new Eg(0)}static re(){return new Eg(-1)}}
/**
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
     */async function wg(t){if(t.code!==np.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Xh("LocalStore","Unexpectedly lost primary lease")}
/**
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
     */class Tg{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),!0;return!1}forEach(t){$p(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return Ip(this.inner)}}
/**
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
     */
/**
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
     */
class Sg{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.bn(t,e,n)))}bn(t,e,n){return this.Je.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Pn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}vn(t,e){return this.Je.getEntries(t,e).next((e=>this.Vn(t,e).next((()=>e))))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Pn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Pp.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new Pp(e)).next((t=>{let e=wm();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Dn(t,e,n){const i=e.collectionGroup;let s=wm();return this.Jt.getCollectionParents(t,i).next((r=>fg.forEach(r,(r=>{const o=function(t,e){return new If(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.Cn(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}Cn(t,e,n){let i,s;return this.Je.getDocumentsMatchingQuery(t,e,n).next((n=>(i=n,this.An.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(s=e,this.Nn(t,s,i).next((t=>{i=t;for(const t of s)for(const e of t.mutations){const n=e.key;let s=i.get(n);null==s&&(s=Zp.newInvalidDocument(n),i=i.insert(n,s)),em(e,s,t.localWriteTime),s.isFoundDocument()||(i=i.remove(n))}}))))).next((()=>(i.forEach(((t,n)=>{Lf(e,n)||(i=i.remove(t))})),i)))}Nn(t,e,n){let i=Am();for(const t of e)for(const e of t.mutations)e instanceof om&&null===n.get(e.key)&&(i=i.add(e.key));let s=n;return this.Je.getEntries(t,i).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(s=s.insert(t,e))})),s)))}}
/**
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
     */class Ag{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=i}static $n(t,e){let n=Am(),i=Am();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new Ag(t,e.fromCache,n,i)}}
/**
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
     */class Cg{On(t){this.Mn=t}getDocumentsMatchingQuery(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(vp.min())?this.Fn(t,e):this.Mn.vn(t,i).next((s=>{const r=this.Ln(e,s);return(Ef(e)||wf(e))&&this.Bn(e.limitType,r,i,n)?this.Fn(t,e):(Wh()<=sa.DEBUG&&Xh("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Of(e)),this.Mn.getDocumentsMatchingQuery(t,e,n).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Ln(t,e){let n=new bm(Rf(t));return e.forEach(((e,i)=>{Lf(t,i)&&(n=n.add(i))})),n}Bn(t,e,n,i){if(n.size!==e.size)return!0;const s="F"===t?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(t,e){return Wh()<=sa.DEBUG&&Xh("QueryEngine","Using full collection scan to execute query:",Of(e)),this.Mn.getDocumentsMatchingQuery(t,e,vp.min())}}
/**
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
     */class xg{constructor(t,e,n,i){this.persistence=t,this.Un=e,this.k=i,this.qn=new gm(mp),this.Kn=new Tg((t=>nf(t)),sf),this.jn=vp.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Sg(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qn)))}}async function kg(t,e){const n=ep(t);let i=n.An,s=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.An.getAllMutationBatches(t).next((o=>(r=o,i=n.persistence.getMutationQueue(e),s=new Sg(n.Qn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(t)))).next((e=>{const n=[],i=[];let o=Am();for(const t of r){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return s.vn(t,o).next((t=>({Gn:t,removedBatchIds:n,addedBatchIds:i})))}))}));return n.An=i,n.Wn=s,n.Un.On(n.Wn),r}function Og(t){const e=ep(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.He.getLastRemoteSnapshotVersion(t)))}function Lg(t,e){const n=ep(t),i=e.snapshotVersion;let s=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Qn.newChangeBuffer({trackRemovals:!0});s=n.qn;const o=[];e.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.He.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.He.addMatchingKeys(t,r.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken(Ap.EMPTY_BYTE_STRING,vp.min()).withLastLimboFreeSnapshotVersion(vp.min()):r.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(r.resumeToken,i)),s=s.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,r)&&o.push(n.He.updateTargetData(t,l))}));let a=_m();if(e.documentUpdates.forEach(((i,s)=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(function(t,e,n,i,s){let r=Am();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=_m();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==s?void 0:s.get(n))||i;o.isNoDocument()&&o.version.isEqual(vp.min())?(e.removeEntry(n,c),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),r=r.insert(n,o)):Xh("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),r}))}(t,r,e.documentUpdates,i,void 0).next((t=>{a=t}))),!i.isEqual(vp.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next((e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return fg.waitFor(o).next((()=>r.apply(t))).next((()=>n.Wn.Vn(t,a))).next((()=>a))})).then((t=>(n.qn=s,t)))}function Rg(t,e){const n=ep(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.An.getNextMutationBatchAfterBatchId(t,e))))}async function Ng(t,e,n){const i=ep(t),s=i.qn.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!mg(t))throw t;Xh("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.qn=i.qn.remove(e),i.Kn.delete(s.target)}function Dg(t,e,n){const i=ep(t);let s=vp.min(),r=Am();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=ep(t),s=i.Kn.get(n);return void 0!==s?fg.resolve(i.qn.get(s)):i.He.getTargetData(e,n)}(i,t,Cf(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.He.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.Un.getDocumentsMatchingQuery(t,e,n?s:vp.min(),n?r:Am()))).next((t=>({documents:t,zn:r})))))}
/**
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
     */class Mg{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return fg.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:zm(n.createTime)}),fg.resolve()}getNamedQuery(t,e){return fg.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:$g(t.bundledQuery),readTime:zm(t.readTime)}}(e)),fg.resolve()}}
/**
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
     */class Pg{constructor(){this.ts=new bm(Fg.es),this.ns=new bm(Fg.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new Fg(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.os(new Fg(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new Pp(new Ep([])),n=new Fg(e,t),i=new Fg(e,t+1),s=[];return this.ns.forEachInRange([n,i],(t=>{this.os(t),s.push(t.key)})),s}hs(){this.ts.forEach((t=>this.os(t)))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new Pp(new Ep([])),n=new Fg(e,t),i=new Fg(e,t+1);let s=Am();return this.ns.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Fg(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Fg{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return Pp.comparator(t.key,e.key)||mp(t.fs,e.fs)}static ss(t,e){return mp(t.fs,e.fs)||Pp.comparator(t.key,e.key)}}
/**
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
     */class Ug{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new bm(Fg.es)}checkEmpty(t){return fg.resolve(0===this.An.length)}addMutationBatch(t,e,n,i){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const r=new gg(s,e,n,i);this.An.push(r);for(const e of i)this.ws=this.ws.add(new Fg(e.key,s)),this.Jt.addToCollectionParentIndex(t,e.key.path.popLast());return fg.resolve(r)}lookupMutationBatch(t,e){return fg.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.gs(n),s=i<0?0:i;return fg.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return fg.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return fg.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Fg(e,0),i=new Fg(e,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([n,i],(t=>{const e=this._s(t.fs);s.push(e)})),fg.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new bm(mp);return e.forEach((t=>{const e=new Fg(t,0),i=new Fg(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,i],(t=>{n=n.add(t.fs)}))})),fg.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Pp.isDocumentKey(s)||(s=s.child(""));const r=new Fg(new Pp(s),0);let o=new bm(mp);return this.ws.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.fs)),!0)}),r),fg.resolve(this.ys(o))}ys(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){tp(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return fg.forEach(e.mutations,(i=>{const s=new Fg(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.ws=n}))}ee(t){}containsKey(t,e){const n=new Fg(e,0),i=this.ws.firstAfterOrEqual(n);return fg.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.An.length,fg.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
/**
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
     */class Vg{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new gm(Pp.comparator),this.size=0}addEntry(t,e,n){const i=e.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ts(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:o,readTime:n}),this.size+=o-r,this.Jt.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return fg.resolve(n?n.document.mutableCopy():Zp.newInvalidDocument(e))}getEntries(t,e){let n=_m();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Zp.newInvalidDocument(t))})),fg.resolve(n)}getDocumentsMatchingQuery(t,e,n){let i=_m();const s=new Pp(e.path.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s,readTime:o}}=r.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Lf(e,s)&&(i=i.insert(s.key,s.mutableCopy()))}return fg.resolve(i)}Es(t,e){return fg.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Bg(this)}getSize(t){return fg.resolve(this.size)}}class Bg extends class{constructor(){this.changes=new Tg((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:vp.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Zp.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?fg.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.document.isValidDocument()?e.push(this.De.addEntry(t,i.document,this.getReadTime(n))):this.De.removeEntry(n)})),fg.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
/**
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
     */class Hg{constructor(t){this.persistence=t,this.Is=new Tg((t=>nf(t)),sf),this.lastRemoteSnapshotVersion=vp.min(),this.highestTargetId=0,this.As=0,this.Rs=new Pg,this.targetCount=0,this.bs=Eg.ie()}forEachTarget(t,e){return this.Is.forEach(((t,n)=>e(n))),fg.resolve()}getLastRemoteSnapshotVersion(t){return fg.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return fg.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),fg.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),fg.resolve()}ae(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new Eg(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,fg.resolve()}updateTargetData(t,e){return this.ae(e),fg.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,fg.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Is.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),fg.waitFor(s).next((()=>i))}getTargetCount(t){return fg.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return fg.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),fg.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),fg.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),fg.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return fg.resolve(n)}containsKey(t,e){return fg.resolve(this.Rs.containsKey(e))}}
/**
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
     */class jg{constructor(t,e){this.Ps={},this.Be=new hp(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new Hg(this),this.Jt=new Ig,this.Je=function(t,e){return new Vg(t,e)}(this.Jt,(t=>this.referenceDelegate.vs(t))),this.k=new bg(e),this.Ye=new Mg(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new Ug(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){Xh("MemoryPersistence","Starting transaction:",t);const i=new qg(this.Be.next());return this.referenceDelegate.Vs(),n(i).next((t=>this.referenceDelegate.Ss(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ds(t,e){return fg.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class qg extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class zg{constructor(t){this.persistence=t,this.Cs=new Pg,this.Ns=null}static ks(t){return new zg(t)}get xs(){if(this.Ns)return this.Ns;throw Zh()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),fg.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),fg.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),fg.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return fg.forEach(this.xs,(n=>{const i=Pp.fromPath(n);return this.$s(t,i).next((t=>{t||e.removeEntry(i)}))})).next((()=>(this.Ns=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}vs(t){return 0}$s(t,e){return fg.or([()=>fg.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}class Gg{constructor(){this.activeTargetIds=xm()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kg{constructor(){this.pi=new Gg,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Gg,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
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
     */class Wg{Ei(t){}shutdown(){}}
/**
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
     */class Xg{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){Xh("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){Xh("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
     */const Yg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
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
     */class Jg{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}
/**
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
     */class Qg extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,i,s){const r=this.Ui(t,e);Xh("RestConnection","Sending: ",r,n);const o={};return this.qi(o,i,s),this.Ki(t,r,o,n).then((t=>(Xh("RestConnection","Received: ",t),t)),(e=>{throw Jh("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ji(t,e,n,i,s){return this.Bi(t,e,n,i,s)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Gh,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Ui(t,e){const n=Yg[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,i){return new Promise(((s,r)=>{const o=new jh;o.listenOnce(Ph.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Mh.NO_ERROR:const e=o.getResponseJson();Xh("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Mh.TIMEOUT:Xh("Connection",'RPC "'+t+'" timed out'),r(new ip(np.DEADLINE_EXCEEDED,"Request time out"));break;case Mh.HTTP_ERROR:const n=o.getStatus();if(Xh("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(np).indexOf(e)>=0?e:np.UNKNOWN}(t.status);r(new ip(e,t.message))}else r(new ip(np.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new ip(np.UNAVAILABLE,"Connection failed."));break;default:Zh()}}finally{Xh("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}Qi(t,e,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new Oh,r=Tu(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Bh({})),this.qi(o.initMessageHeaders,e,n),Bo()||jo()||Vo().indexOf("Electron/")>=0||qo()||Vo().indexOf("MSAppHost/")>=0||Ho()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");Xh("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const d=new Jg({Vi:t=>{u?Xh("Connection","Not sending because WebChannel is closed:",t):(l||(Xh("Connection","Opening WebChannel transport."),c.open(),l=!0),Xh("Connection","WebChannel sending:",t),c.send(t))},Si:()=>c.close()}),h=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return h(c,Hh.EventType.OPEN,(()=>{u||Xh("Connection","WebChannel transport opened.")})),h(c,Hh.EventType.CLOSE,(()=>{u||(u=!0,Xh("Connection","WebChannel transport closed"),d.Oi())})),h(c,Hh.EventType.ERROR,(t=>{u||(u=!0,Jh("Connection","WebChannel transport errored:",t),d.Oi(new ip(np.UNAVAILABLE,"The operation could not be completed")))})),h(c,Hh.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];tp(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){Xh("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=pm[t];if(void 0!==e)return mm(e)}(t),n=s.message;void 0===e&&(e=np.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),u=!0,d.Oi(new ip(e,n)),c.close()}else Xh("Connection","WebChannel received:",n),d.Mi(n)}})),h(r,Fh.STAT_EVENT,(t=>{t.stat===Uh?Xh("Connection","Detected buffering proxy"):t.stat===Vh&&Xh("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.$i()}),0),d}}function Zg(){return"undefined"!=typeof document?document:null}
/**
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
     */function ty(t){return new Bm(t,!0)}class ey{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Me=t,this.timerId=e,this.Wi=n,this.Gi=i,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),i=Math.max(0,e-n);i>0&&Xh("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,i,(()=>(this.Yi=Date.now(),t()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
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
     */class ny{constructor(t,e,n,i,s,r,o,a){this.Me=t,this.nr=n,this.sr=i,this.ir=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new ey(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===np.RESOURCE_EXHAUSTED?(Yh(e.toString()),Yh("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===np.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.rr===e&&this.Ir(t,n)}),(e=>{t((()=>{const t=new ip(np.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)}))}))}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di((()=>{n((()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((t=>{n((()=>this.Ar(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(t){return Xh("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Me.enqueueAndForget((()=>this.rr===t?e():(Xh("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iy extends ny{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.k=s}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Zh()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.C?(tp(void 0===e||"string"==typeof e),Ap.fromBase64String(e||"")):(tp(void 0===e||e instanceof Uint8Array),Ap.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?np.UNKNOWN:mm(t.code);return new ip(e,t.message||"")}(o);n=new Nm(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Xm(t,i.document.name),r=zm(i.document.updateTime),o=new Jp({mapValue:{fields:i.document.fields}}),a=Zp.newFoundDocument(s,r,o),c=i.targetIds||[],l=i.removedTargetIds||[];n=new Lm(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Xm(t,i.document),r=i.readTime?zm(i.readTime):vp.min(),o=Zp.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Lm([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Xm(t,i.document),r=i.removedTargetIds||[];n=new Lm([],r,s,null)}else{if(!("filter"in e))return Zh();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new hm(i),r=t.targetId;n=new Rm(r,s)}}return n}(this.k,t),n=function(t){if(!("targetChange"in t))return vp.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?vp.min():e.readTime?zm(e.readTime):vp.min()}(t);return this.listener.br(e,n)}Pr(t){const e={};e.database=Jm(this.k),e.addTarget=function(t,e){let n;const i=e.target;return n=rf(i)?{documents:tg(t,i)}:{query:eg(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=jm(t,e.resumeToken):e.snapshotVersion.compareTo(vp.min())>0&&(n.readTime=Hm(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Zh()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=Jm(this.k),e.removeTarget=t,this.gr(e)}}class sy extends ny{constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,e){return this.ir.Qi("Write",t,e)}onMessage(t){if(tp(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const e=function(t,e){return t&&t.length>0?(tp(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?zm(t.updateTime):zm(e);return n.isEqual(vp.min())&&(n=zm(e)),new Yf(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=zm(t.commitTime);return this.listener.Cr(n,e)}return tp(!t.writeResults||0===t.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=Jm(this.k),this.gr(t)}Dr(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof rm)n={update:Zm(t,e.key,e.value)};else if(e instanceof um)n={delete:Wm(t,e.key)};else if(e instanceof om)n={update:Zm(t,e.key,e.data),updateMask:hg(e.fieldMask)};else{if(!(e instanceof dm))return Zh();n={verify:Wm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Hf)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof jf)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof zf)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Kf)return{fieldPath:e.field.canonicalString(),increment:n.N};throw Zh()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:qm(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Zh()}(t,e.precondition)),n}(this.k,t)))};this.gr(e)}}
/**
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
     */class ry extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=i,this.$r=!1}Or(){if(this.$r)throw new ip(np.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.ir.Bi(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===np.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ip(np.UNKNOWN,t.toString())}))}ji(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.ir.ji(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===np.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ip(np.UNKNOWN,t.toString())}))}terminate(){this.$r=!0}}class oy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Yh(e),this.Lr=!1):Xh("OnlineStateTracker",e)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
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
     */class ay{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei((t=>{n.enqueueAndForget((async()=>{gy(this)&&(Xh("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ep(t);e.Gr.add(4),await ly(e),e.Jr.set("Unknown"),e.Gr.delete(4),await cy(e)}(this))}))})),this.Jr=new oy(n,i)}}async function cy(t){if(gy(t))for(const e of t.zr)await e(!0)}async function ly(t){for(const e of t.zr)await e(!1)}function uy(t,e){const n=ep(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),my(n)?fy(n):Ly(n).lr()&&hy(n,e))}function dy(t,e){const n=ep(t),i=Ly(n);n.Wr.delete(e),i.lr()&&py(n,e),0===n.Wr.size&&(i.lr()?i._r():gy(n)&&n.Jr.set("Unknown"))}function hy(t,e){t.Yr.X(e.targetId),Ly(t).Pr(e)}function py(t,e){t.Yr.X(e),Ly(t).vr(e)}function fy(t){t.Yr=new Mm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Ly(t).start(),t.Jr.Br()}function my(t){return gy(t)&&!Ly(t).hr()&&t.Wr.size>0}function gy(t){return 0===ep(t).Gr.size}function yy(t){t.Yr=void 0}async function vy(t){t.Wr.forEach(((e,n)=>{hy(t,e)}))}async function by(t,e){yy(t),my(t)?(t.Jr.Kr(e),fy(t)):t.Jr.set("Unknown")}async function $y(t,e,n){if(t.Jr.set("Online"),e instanceof Nm&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.Wr.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.Wr.delete(i),t.Yr.removeTarget(i))}(t,e)}catch(n){Xh("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Iy(t,n)}else if(e instanceof Lm?t.Yr.ot(e):e instanceof Rm?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(vp.min()))try{const e=await Og(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.Wr.get(i);s&&t.Wr.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(Ap.EMPTY_BYTE_STRING,n.snapshotVersion)),py(t,e);const i=new vg(n.target,e,1,n.sequenceNumber);hy(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Xh("RemoteStore","Failed to raise snapshot:",e),await Iy(t,e)}}async function Iy(t,e,n){if(!mg(e))throw e;t.Gr.add(1),await ly(t),t.Jr.set("Offline"),n||(n=()=>Og(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Xh("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await cy(t)}))}function _y(t,e){return e().catch((n=>Iy(t,n,e)))}async function Ey(t){const e=ep(t),n=Ry(e);let i=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;wy(e);)try{const t=await Rg(e.localStore,i);if(null===t){0===e.Qr.length&&n._r();break}i=t.batchId,Ty(e,t)}catch(t){await Iy(e,t)}Sy(e)&&Ay(e)}function wy(t){return gy(t)&&t.Qr.length<10}function Ty(t,e){t.Qr.push(e);const n=Ry(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Sy(t){return gy(t)&&!Ry(t).hr()&&t.Qr.length>0}function Ay(t){Ry(t).start()}async function Cy(t){Ry(t).kr()}async function xy(t){const e=Ry(t);for(const n of t.Qr)e.Dr(n.mutations)}async function ky(t,e,n){const i=t.Qr.shift(),s=yg.from(i,e,n);await _y(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ey(t)}async function Oy(t,e){e&&Ry(t).Sr&&await async function(t,e){if(function(t){switch(t){default:return Zh();case np.CANCELLED:case np.UNKNOWN:case np.DEADLINE_EXCEEDED:case np.RESOURCE_EXHAUSTED:case np.INTERNAL:case np.UNAVAILABLE:case np.UNAUTHENTICATED:return!1;case np.INVALID_ARGUMENT:case np.NOT_FOUND:case np.ALREADY_EXISTS:case np.PERMISSION_DENIED:case np.FAILED_PRECONDITION:case np.ABORTED:case np.OUT_OF_RANGE:case np.UNIMPLEMENTED:case np.DATA_LOSS:return!0}}(n=e.code)&&n!==np.ABORTED){const n=t.Qr.shift();Ry(t).wr(),await _y(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ey(t)}var n}(t,e),Sy(t)&&Ay(t)}function Ly(t){return t.Xr||(t.Xr=function(t,e,n){const i=ep(t);return i.Or(),new iy(e,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)
/**
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
     */}(t.datastore,t.asyncQueue,{Di:vy.bind(null,t),Ni:by.bind(null,t),br:$y.bind(null,t)}),t.zr.push((async e=>{e?(t.Xr.wr(),my(t)?fy(t):t.Jr.set("Unknown")):(await t.Xr.stop(),yy(t))}))),t.Xr}function Ry(t){return t.Zr||(t.Zr=function(t,e,n){const i=ep(t);return i.Or(),new sy(e,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)}(t.datastore,t.asyncQueue,{Di:Cy.bind(null,t),Ni:Oy.bind(null,t),Nr:xy.bind(null,t),Cr:ky.bind(null,t)}),t.zr.push((async e=>{e?(t.Zr.wr(),await Ey(t)):(await t.Zr.stop(),t.Qr.length>0&&(Xh("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))}))),t.Zr
/**
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
     */}class Ny{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new sp,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Ny(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ip(np.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dy(t,e){if(Yh("AsyncQueue",`${e}: ${t}`),mg(t))return new ip(np.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
     */class My{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Pp.comparator(e.key,n.key):(t,e)=>Pp.comparator(t.key,e.key),this.keyedMap=wm(),this.sortedSet=new gm(this.comparator)}static emptySet(t){return new My(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof My))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new My;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
     */class Py{constructor(){this.eo=new gm(Pp.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):Zh():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Fy{constructor(t,e,n,i,s,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Fy(t,e,My.emptySet(e),s,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xf(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
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
     */class Uy{constructor(){this.so=void 0,this.listeners=[]}}class Vy{constructor(){this.queries=new Tg((t=>kf(t)),xf),this.onlineState="Unknown",this.io=new Set}}function By(t,e){const n=ep(t);let i=!1;for(const t of e){const e=t.query,s=n.queries.get(e);if(s){for(const e of s.listeners)e.oo(t)&&(i=!0);s.so=t}}i&&jy(n)}function Hy(t,e,n){const i=ep(t),s=i.queries.get(e);if(s)for(const t of s.listeners)t.onError(n);i.queries.delete(e)}function jy(t){t.io.forEach((t=>{t.next()}))}class qy{constructor(t,e,n){this.query=t,this.co=e,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Fy(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.ao?this.ho(t)&&(this.co.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.wo&&n||t.docs.isEmpty()&&"Offline"!==e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=Fy.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}
/**
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
     */class zy{constructor(t){this.key=t}}class Gy{constructor(t){this.key=t}}class Ky{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=Am(),this.mutatedKeys=Am(),this.Ao=Rf(t),this.Ro=new My(this.Ao)}get bo(){return this.To}Po(t,e){const n=e?e.vo:new Py,i=e?e.Ro:this.Ro;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a=Ef(this.query)&&i.size===this.query.limit?i.last():null,c=wf(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=Lf(this.query,e)?e:null,d=!!l&&this.mutatedKeys.has(l.key),h=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;l&&u?l.data.isEqual(u.data)?d!==h&&(n.track({type:3,doc:u}),p=!0):this.Vo(l,u)||(n.track({type:2,doc:u}),p=!0,(a&&this.Ao(u,a)>0||c&&this.Ao(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),p=!0):l&&!u&&(n.track({type:1,doc:l}),p=!0,(a||c)&&(o=!0)),p&&(u?(r=r.add(u),s=h?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),Ef(this.query)||wf(this.query))for(;r.size>this.query.limit;){const t=Ef(this.query)?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Ro:r,vo:n,Bn:o,mutatedKeys:s}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const s=t.vo.no();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Zh()}};return n(t)-n(e)}
/**
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
     */(t.type,e.type)||this.Ao(t.doc,e.doc))),this.So(n);const r=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==s.length||a?{snapshot:new Fy(this.query,t.Ro,i,s,t.mutatedKeys,0===o,a,!1),Co:r}:{Co:r}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Py,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach((t=>this.To=this.To.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.To=this.To.delete(t))),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=Am(),this.Ro.forEach((t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))}));const e=[];return t.forEach((t=>{this.Io.has(t)||e.push(new Gy(t))})),this.Io.forEach((n=>{t.has(n)||e.push(new zy(n))})),e}ko(t){this.To=t.zn,this.Io=Am();const e=this.Po(t.documents);return this.applyChanges(e,!0)}xo(){return Fy.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Wy{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Xy{constructor(t){this.key=t,this.$o=!1}}class Yy{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Oo={},this.Mo=new Tg((t=>kf(t)),xf),this.Fo=new Map,this.Lo=new Set,this.Bo=new gm(Pp.comparator),this.Uo=new Map,this.qo=new Pg,this.Ko={},this.jo=new Map,this.Qo=Eg.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Jy(t,e){const n=function(t){const e=ep(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nv.bind(null,e),e.Oo.br=By.bind(null,e.eventManager),e.Oo.zo=Hy.bind(null,e.eventManager),e}(t);let i,s;const r=n.Mo.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.xo();else{const t=await function(t,e){const n=ep(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.He.getTargetData(t,e).next((s=>s?(i=s,fg.resolve(i)):n.He.allocateTargetId(t).next((s=>(i=new vg(e,s,0,t.currentSequenceNumber),n.He.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.qn.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t}))}(n.localStore,Cf(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await async function(t,e,n,i){t.Go=(e,n,i)=>async function(t,e,n,i){let s=e.view.Po(n);s.Bn&&(s=await Dg(t.localStore,e.query,!1).then((({documents:t})=>e.view.Po(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return lv(t,e.targetId,o.Co),o.snapshot}(t,e,n,i);const s=await Dg(t.localStore,e,!0),r=new Ky(e,s.zn),o=r.Po(s.documents),a=Om.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);lv(t,n,c.Co);const l=new Wy(e,n,r);return t.Mo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}(n,e,i,"current"===r),n.isPrimaryClient&&uy(n.remoteStore,t)}return s}async function Qy(t,e){const n=ep(t),i=n.Mo.get(e),s=n.Fo.get(i.targetId);if(s.length>1)return n.Fo.set(i.targetId,s.filter((t=>!xf(t,e)))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ng(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),dy(n.remoteStore,i.targetId),av(n,i.targetId)})).catch(wg)):(av(n,i.targetId),await Ng(n.localStore,i.targetId,!0))}async function Zy(t,e,n){const i=function(t){const e=ep(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sv.bind(null,e),e}(t);try{const t=await function(t,e){const n=ep(t),i=yp.now(),s=e.reduce(((t,e)=>t.add(e.key)),Am());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Wn.vn(t,s).next((s=>{r=s;const o=[];for(const t of e){const e=nm(t,r.get(t.key));null!=e&&o.push(new om(t.key,e,Qp(e.value.mapValue),Jf.exists(!0)))}return n.An.addMutationBatch(t,i,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Ko[t.currentUser.toKey()];i||(i=new gm(mp)),i=i.insert(e,n),t.Ko[t.currentUser.toKey()]=i}(i,t.batchId,n),await hv(i,t.changes),await Ey(i.remoteStore)}catch(t){const e=Dy(t,"Failed to persist write");n.reject(e)}}async function tv(t,e){const n=ep(t);try{const t=await Lg(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.Uo.get(e);i&&(tp(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.$o=!0:t.modifiedDocuments.size>0?tp(i.$o):t.removedDocuments.size>0&&(tp(i.$o),i.$o=!1))})),await hv(n,t,e)}catch(t){await wg(t)}}function ev(t,e,n){const i=ep(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Mo.forEach(((n,i)=>{const s=i.view.ro(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=ep(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.ro(e)&&(i=!0)})),i&&jy(n)}(i.eventManager,e),t.length&&i.Oo.br(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function nv(t,e,n){const i=ep(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Uo.get(e),r=s&&s.key;if(r){let t=new gm(Pp.comparator);t=t.insert(r,Zp.newNoDocument(r,vp.min()));const n=Am().add(r),s=new km(vp.min(),new Map,new bm(mp),t,n);await tv(i,s),i.Bo=i.Bo.remove(r),i.Uo.delete(e),dv(i)}else await Ng(i.localStore,e,!1).then((()=>av(i,e,n))).catch(wg)}async function iv(t,e){const n=ep(t),i=e.batch.batchId;try{const t=await function(t,e){const n=ep(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.Qn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=fg.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);tp(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&i.addEntry(e,n.commitVersion))}))})),o.next((()=>t.An.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.An.performConsistencyCheck(t))).next((()=>n.Wn.vn(t,i)))}))}(n.localStore,e);ov(n,i,null),rv(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await hv(n,t)}catch(t){await wg(t)}}async function sv(t,e,n){const i=ep(t);try{const t=await function(t,e){const n=ep(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.An.lookupMutationBatch(t,e).next((e=>(tp(null!==e),i=e.keys(),n.An.removeMutationBatch(t,e)))).next((()=>n.An.performConsistencyCheck(t))).next((()=>n.Wn.vn(t,i)))}))}(i.localStore,e);ov(i,e,n),rv(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await hv(i,t)}catch(n){await wg(n)}}function rv(t,e){(t.jo.get(e)||[]).forEach((t=>{t.resolve()})),t.jo.delete(e)}function ov(t,e,n){const i=ep(t);let s=i.Ko[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.Ko[i.currentUser.toKey()]=s}}function av(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Fo.get(e))t.Mo.delete(i),n&&t.Oo.zo(i,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach((e=>{t.qo.containsKey(e)||cv(t,e)}))}function cv(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(dy(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),dv(t))}function lv(t,e,n){for(const i of n)i instanceof zy?(t.qo.addReference(i.key,e),uv(t,i)):i instanceof Gy?(Xh("SyncEngine","Document no longer in limbo: "+i.key),t.qo.removeReference(i.key,e),t.qo.containsKey(i.key)||cv(t,i.key)):Zh()}function uv(t,e){const n=e.key,i=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(i)||(Xh("SyncEngine","New document in limbo: "+n),t.Lo.add(i),dv(t))}function dv(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new Pp(Ep.fromString(e)),i=t.Qo.next();t.Uo.set(i,new Xy(n)),t.Bo=t.Bo.insert(n,i),uy(t.remoteStore,new vg(Cf(_f(n.path)),i,2,hp.I))}}async function hv(t,e,n){const i=ep(t),s=[],r=[],o=[];i.Mo.isEmpty()||(i.Mo.forEach(((t,a)=>{o.push(i.Go(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=Ag.$n(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.Oo.br(s),await async function(t,e){const n=ep(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>fg.forEach(e,(e=>fg.forEach(e.kn,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>fg.forEach(e.xn,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!mg(t))throw t;Xh("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qn.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.qn=n.qn.insert(e,s)}}}(i.localStore,r))}async function pv(t,e){const n=ep(t);if(!n.currentUser.isEqual(e)){Xh("SyncEngine","User change. New user:",e.toKey());const t=await kg(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach((t=>{t.forEach((t=>{t.reject(new ip(np.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.jo.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await hv(n,t.Gn)}}function fv(t,e){const n=ep(t),i=n.Uo.get(e);if(i&&i.$o)return Am().add(i.key);{let t=Am();const i=n.Fo.get(e);if(!i)return t;for(const e of i){const i=n.Mo.get(e);t=t.unionWith(i.view.bo)}return t}}class mv{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=ty(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return function(t,e,n,i){return new xg(t,e,n,i)}(this.persistence,new Cg,t.initialUser,this.k)}Yo(t){return new jg(zg.ks,this.k)}Jo(t){return new Kg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gv{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ev(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=pv.bind(null,this.syncEngine),await async function(t,e){const n=ep(t);e?(n.Gr.delete(2),await cy(n)):e||(n.Gr.add(2),await ly(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Vy}createDatastore(t){const e=ty(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Qg(i));var i;return function(t,e,n,i){return new ry(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>ev(this.syncEngine,t,0),r=Xg.Pt()?new Xg:new Wg,new ay(e,n,i,s,r);var e,n,i,s,r}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new Yy(t,e,n,i,s,r);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ep(t);Xh("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await ly(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
/**
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
     */
/**
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
     */class yv{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
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
     */class vv{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=zh.UNAUTHENTICATED,this.clientId=fp.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Xh("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ip(np.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new sp;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Dy(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function bv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(Xh("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),Xh("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await kg(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new mv)),t.offlineComponents}(t);Xh("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>async function(t,e){const n=ep(t);n.asyncQueue.verifyOperationInProgress(),Xh("RemoteStore","RemoteStore received new credentials");const i=gy(n);n.Gr.add(3),await ly(n),i&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await cy(n)}(e.remoteStore,t))),t.onlineComponents=e}async function $v(t){return t.onlineComponents||(Xh("FirestoreClient","Using default OnlineComponentProvider"),await bv(t,new gv)),t.onlineComponents}async function Iv(t){const e=await $v(t),n=e.eventManager;return n.onListen=Jy.bind(null,e.syncEngine),n.onUnlisten=Qy.bind(null,e.syncEngine),n}class _v{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ev{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ev&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
     */const wv=new Map;
/**
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
     */function Tv(t,e,n){if(!n)throw new ip(np.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Sv(t){if(!Pp.isDocumentKey(t))throw new ip(np.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Av(t){if(Pp.isDocumentKey(t))throw new ip(np.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cv(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Zh()}function xv(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ip(np.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cv(t);throw new ip(np.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
     */class kv{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ip(np.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ip(np.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new ip(np.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
     */class Ov{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kv({}),this._settingsFrozen=!1,t instanceof Ev?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ip(np.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ev(t.options.projectId)}(t))}get app(){if(!this._app)throw new ip(np.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ip(np.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kv(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new op;switch(t.type){case"gapi":const e=t.client;return tp(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new lp(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new ip(np.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=wv.get(t);e&&(Xh("ComponentProvider","Removing Datastore"),wv.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
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
     */class Lv{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nv(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Lv(this.firestore,t,this._key)}}class Rv{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Rv(this.firestore,t,this._query)}}class Nv extends Rv{constructor(t,e,n){super(t,e,_f(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Lv(this.firestore,null,new Pp(t))}withConverter(t){return new Nv(this.firestore,t,this._path)}}function Dv(t,e,...n){if(t=Zo(t),1===arguments.length&&(e=fp.A()),Tv("doc","path",e),t instanceof Ov){const i=Ep.fromString(e,...n);return Sv(i),new Lv(t,null,new Pp(i))}{if(!(t instanceof Lv||t instanceof Nv))throw new ip(np.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ep.fromString(e,...n));return Sv(i),new Lv(t.firestore,t instanceof Nv?t.converter:null,new Pp(i))}}
/**
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
     */class Mv{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new ey(this,"async_queue_retry"),this.bc=()=>{const t=Zg();t&&Xh("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Zg();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const e=Zg();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise((()=>{}));const e=new sp;return this.vc((()=>this.yc&&this.Ac?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.gc.push(t),this.Vc())))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!mg(t))throw t;Xh("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi((()=>this.Vc()))}}vc(t){const e=this.mc.then((()=>(this.Ic=!0,t().catch((t=>{this.Ec=t,this.Ic=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
     */(t);throw Yh("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ic=!1,t))))));return this.mc=e,e}enqueueAfterDelay(t,e,n){this.Pc(),this.Rc.indexOf(t)>-1&&(e=0);const i=Ny.createAndSchedule(this,t,e,n,(t=>this.Sc(t)));return this.Tc.push(i),i}Pc(){this.Ec&&Zh()}verifyOperationInProgress(){}async Dc(){let t;do{t=this.mc,await t}while(t!==this.mc)}Cc(t){for(const e of this.Tc)if(e.timerId===t)return!0;return!1}Nc(t){return this.Dc().then((()=>{this.Tc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Dc()}))}kc(t){this.Rc.push(t)}Sc(t){const e=this.Tc.indexOf(t);this.Tc.splice(e,1)}}function Pv(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
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
     */(t)}class Fv extends Ov{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Mv,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Bv(this),this._firestoreClient.terminate()}}function Uv(t=wa()){return $a(t,"firestore").getImmediate()}function Vv(t){return t._firestoreClient||Bv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Bv(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new _v(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new vv(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
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
     */
/**
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
     */class Hv{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ip(np.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tp(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
     */class jv{constructor(t){this._byteString=t}static fromBase64String(t){try{return new jv(Ap.fromBase64String(t))}catch(t){throw new ip(np.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new jv(Ap.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
     */class qv{constructor(t){this._methodName=t}}
/**
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
     */class zv{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ip(np.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ip(np.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return mp(this._lat,t._lat)||mp(this._long,t._long)}}
/**
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
     */const Gv=/^__.*__$/;class Kv{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new om(t,this.data,this.fieldMask,e,this.fieldTransforms):new rm(t,this.data,e,this.fieldTransforms)}}function Wv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Zh()}}class Xv{constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=i,void 0===s&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(t){return new Xv(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Oc({path:n,Fc:!1});return i.Lc(t),i}Bc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Oc({path:n,Fc:!1});return i.xc(),i}Uc(t){return this.Oc({path:void 0,Fc:!0})}qc(t){return ob(t,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lc(this.path.get(t))}Lc(t){if(0===t.length)throw this.qc("Document fields must not be empty");if(Wv(this.$c)&&Gv.test(t))throw this.qc('Document fields cannot begin and end with "__"')}}class Yv{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||ty(t)}Qc(t,e,n,i=!1){return new Xv({$c:t,methodName:e,jc:n,path:Tp.emptyPath(),Fc:!1,Kc:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Jv(t){const e=t._freezeSettings(),n=ty(t._databaseId);return new Yv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qv(t,e,n,i,s,r={}){const o=t.Qc(r.merge||r.mergeFields?2:0,e,n,s);nb("Data must be an object, but it was:",o,i);const a=tb(i,o);let c,l;if(r.merge)c=new Sp(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=ib(e,i,n);if(!o.contains(s))throw new ip(np.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);ab(t,s)||t.push(s)}c=new Sp(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new Kv(new Jp(a),c,l)}function Zv(t,e){if(eb(t=Zo(t)))return nb("Unsupported field value:",e,t),tb(t,e);if(t instanceof qv)return function(t,e){if(!Wv(e.$c))throw e.qc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.qc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&4!==e.$c)throw e.qc("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=Zv(s,e.Uc(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Zo(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Pf(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=yp.fromDate(t);return{timestampValue:Hm(e.k,n)}}if(t instanceof yp){const n=new yp(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Hm(e.k,n)}}if(t instanceof zv)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof jv)return{bytesValue:jm(e.k,t._byteString)};if(t instanceof Lv){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.qc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Gm(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.qc(`Unsupported field value: ${Cv(t)}`)}(t,e)}function tb(t,e){const n={};return Ip(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$p(t,((t,i)=>{const s=Zv(i,e.Mc(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function eb(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof yp||t instanceof zv||t instanceof jv||t instanceof Lv||t instanceof qv)}function nb(t,e,n){if(!eb(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Cv(n);throw"an object"===i?e.qc(t+" a custom object"):e.qc(t+" "+i)}}function ib(t,e,n){if((e=Zo(e))instanceof Hv)return e._internalPath;if("string"==typeof e)return rb(t,e);throw ob("Field path arguments must be of type string or ",t,!1,void 0,n)}const sb=new RegExp("[~\\*/\\[\\]]");function rb(t,e,n){if(e.search(sb)>=0)throw ob(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hv(...e.split("."))._internalPath}catch(i){throw ob(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ob(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new ip(np.INVALID_ARGUMENT,a+t+c)}function ab(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
     */class cb{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Lv(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new lb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ub("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class lb extends cb{data(){return super.data()}}function ub(t,e){return"string"==typeof e?rb(t,e):e instanceof Hv?e._internalPath:e._delegate._internalPath}
/**
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
     */class db{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hb extends cb{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new pb(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ub("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class pb extends hb{data(t={}){return super.data(t)}}class fb{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new db(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new pb(this._firestore,this._userDataWriter,n.key,n,new db(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ip(np.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new pb(t._firestore,t._userDataWriter,n.doc.key,n.doc,new db(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new pb(t._firestore,t._userDataWriter,e.doc.key,e.doc,new db(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:mb(e.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function mb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Zh()}}
/**
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
     */class gb extends class{}{constructor(t,e){super(),this.zc=t,this.Yc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new ip(np.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ip(np.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new yf(e,n);return function(t,e){if(null===Tf(t)){const n=Sf(t);null!==n&&function(t,e,n){if(!n.isEqual(e))throw new ip(np.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
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
     */(0,n,e.field)}}(t,i),i}(t._query,this.zc,this.Yc);return new Rv(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new If(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}class yb extends class{convertValue(t,e="none"){switch(Fp(t)){case 0:return null;case 1:return t.booleanValue;case 2:return kp(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Op(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Zh()}}convertObject(t,e){const n={};return $p(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new zv(kp(t.latitude),kp(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Rp(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Np(t));default:return null}}convertTimestamp(t){const e=xp(t);return new yp(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ep.fromString(t);tp(pg(n));const i=new Ev(n.get(1),n.get(3)),s=new Pp(n.popFirst(5));return i.isEqual(e)||Yh(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
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
     */{constructor(t){super(),this.firestore=t}convertBytes(t){return new jv(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Lv(this.firestore,null,e)}}function vb(t,...e){var n,i,s;t=Zo(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Pv(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Pv(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let c,l,u;if(t instanceof Lv)l=xv(t.firestore,Fv),u=_f(t._key.path),c={next:n=>{e[o]&&e[o](function(t,e,n){const i=n.docs.get(e._key),s=new yb(t);return new hb(t,s,e._key,i,new db(n.hasPendingWrites,n.fromCache),e.converter)}(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=xv(t,Rv);l=xv(n.firestore,Fv),u=n._query;const i=new yb(l);c={next:t=>{e[o]&&e[o](new fb(l,i,n,t))},error:e[o+1],complete:e[o+2]},function(t){if(wf(t)&&0===t.explicitOrderBy.length)throw new ip(np.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query)}return function(t,e,n,i){const s=new yv(i),r=new qy(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>async function(t,e){const n=ep(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new Uy),s)try{r.so=await n.onListen(i)}catch(t){const n=Dy(t,`Initialization of query '${Of(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.ro(n.onlineState),r.so&&e.oo(r.so)&&jy(n)}(await Iv(t),r))),()=>{s.nc(),t.asyncQueue.enqueueAndForget((async()=>async function(t,e){const n=ep(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}(await Iv(t),r)))}}(Vv(l),u,a,c)}function bb(t,e){return function(t,e){const n=new sp;return t.asyncQueue.enqueueAndForget((async()=>Zy(await function(t){return $v(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(Vv(t),e)}function $b(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(t,e=!0){Gh="9.6.4",ba(new ta("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new Fv(i,new ap(t.getProvider("auth-internal")),new dp(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),Ta(qh,"3.4.3",t),Ta(qh,"3.4.3","esm2017")}();const Ib=$b,_b=new Go("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Eb=new la("@firebase/auth");function wb(t,...e){Eb.logLevel<=sa.ERROR&&Eb.error(`Auth (9.6.4): ${t}`,...e)}
/**
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
     */function Tb(t,...e){throw Cb(t,...e)}function Sb(t,...e){return Cb(t,...e)}function Ab(t,e,n){const i=Object.assign(Object.assign({},Ib()),{[e]:n});return new Go("auth","Firebase",i).create(e,{appName:t.name})}function Cb(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return _b.create(t,...e)}function xb(t,e,...n){if(!t)throw Cb(e,...n)}function kb(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wb(e),new Error(e)}function Ob(t,e){t||kb(e)}
/**
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
     */const Lb=new Map;function Rb(t){Ob(t instanceof Function,"Expected a class definition");let e=Lb.get(t);return e?(Ob(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lb.set(t,e),e)}
/**
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
     */
/**
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
     */
function Nb(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Db(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
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
     */function Mb(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Db()&&"https:"!==Db()&&!Ho()&&!("connection"in navigator)||navigator.onLine}
/**
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
     */
class Pb{constructor(t,e){this.shortDelay=t,this.longDelay=e,Ob(e>t,"Short delay should be less than long delay!"),this.isMobile=Bo()||jo()}get(){return Mb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
     */function Fb(t,e){Ob(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
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
     */class Ub{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void kb("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void kb("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void kb("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
     */const Vb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Bb=new Pb(3e4,6e4);
/**
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
     */async function Hb(t,e,n,i,s={}){return jb(t,s,(async()=>{let s={},r={};i&&("GET"===e?r=i:s={body:JSON.stringify(i)});const o=Yo(Object.assign({key:t.config.apiKey},r)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Ub.fetch()(qb(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))}))}async function jb(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Vb),e);try{const e=new zb(t),s=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw Gb(t,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const e=s.ok?r.errorMessage:r.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Gb(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw Gb(t,"email-already-in-use",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Ab(t,a,o);Tb(t,a)}}catch(e){if(e instanceof zo)throw e;Tb(t,"network-request-failed")}}function qb(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Fb(t.config,s):`${t.config.apiScheme}://${s}`}class zb{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Sb(this.auth,"network-request-failed"))),Bb.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gb(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Sb(t,e,i);return s.customData._tokenResponse=n,s}
/**
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
     */
/**
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
     */
function Kb(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}function Wb(t){return 1e3*Number(t)}function Xb(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return wb("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return Fo.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return t?JSON.parse(t):(wb("Failed to decode base64 JWT payload"),null)}catch(t){return wb("Caught error parsing JWT payload as JSON",t),null}}
/**
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
     */
async function Yb(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof zo&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
     */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Jb{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
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
     */class Qb{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kb(this.lastLoginAt),this.creationTime=Kb(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
     */async function Zb(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Yb(t,async function(t,e){return Hb(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));xb(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?r.providerUserInfo.map((t=>{var{providerId:e}=t,n=Mt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,l=o,[...c.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var c,l;const u=t.isAnonymous,d=!(t.email&&r.passwordHash||(null==a?void 0:a.length)),h=!!u&&d,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Qb(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,p)}
/**
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
     */
class t${constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){xb(t.idToken,"internal-error"),xb(void 0!==t.idToken,"internal-error"),xb(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Xb(t);return xb(e,"internal-error"),xb(void 0!==e.exp,"internal-error"),xb(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return xb(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
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
     */
async function(t,e){const n=await jb(t,{},(async()=>{const n=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,r=qb(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ub.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:s}=e,r=new t$;return n&&(xb("string"==typeof n,"internal-error",{appName:t}),r.refreshToken=n),i&&(xb("string"==typeof i,"internal-error",{appName:t}),r.accessToken=i),s&&(xb("number"==typeof s,"internal-error",{appName:t}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new t$,this.toJSON())}_performRefresh(){return kb("not implemented")}}
/**
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
     */function e$(t,e){xb("string"==typeof t||void 0===t,"internal-error",{appName:e})}class n${constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,s=Mt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Jb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new Qb(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Yb(this,this.stsTokenManager.getToken(this.auth,t));return xb(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Zo(t),i=await n.getIdToken(e),s=Xb(i);xb(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Kb(Wb(s.auth_time)),issuedAtTime:Kb(Wb(s.iat)),expirationTime:Kb(Wb(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Zo(t);await Zb(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(xb(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new n$(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){xb(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Zb(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Yb(this,async function(t,e){return Hb(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,s,r,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,d=null!==(i=e.email)&&void 0!==i?i:void 0,h=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,p=null!==(r=e.photoURL)&&void 0!==r?r:void 0,f=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:b,isAnonymous:$,providerData:I,stsTokenManager:_}=e;xb(v&&_,t,"internal-error");const E=t$.fromJSON(this.name,_);xb("string"==typeof v,t,"internal-error"),e$(u,t.name),e$(d,t.name),xb("boolean"==typeof b,t,"internal-error"),xb("boolean"==typeof $,t,"internal-error"),e$(h,t.name),e$(p,t.name),e$(f,t.name),e$(m,t.name),e$(g,t.name),e$(y,t.name);const w=new n$({uid:v,auth:t,email:d,emailVerified:b,displayName:u,isAnonymous:$,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:E,createdAt:g,lastLoginAt:y});return I&&Array.isArray(I)&&(w.providerData=I.map((t=>Object.assign({},t)))),m&&(w._redirectEventId=m),w}static async _fromIdTokenResponse(t,e,n=!1){const i=new t$;i.updateFromServerResponse(e);const s=new n$({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Zb(s),s}}
/**
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
     */class i${constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}i$.type="NONE";const s$=i$;
/**
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
     */function r$(t,e,n){return`firebase:${t}:${e}:${n}`}class o${constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=r$(this.userKey,i.apiKey,s),this.fullPersistenceKey=r$("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?n$._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new o$(Rb(s$),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=i[0]||Rb(s$);const r=r$(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(r);if(e){const i=n$._fromJSON(t,e);n!==s&&(o=i),s=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(r)}catch(t){}}))),new o$(s,t,n)):new o$(s,t,n)}}
/**
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
     */function a$(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(d$(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(c$(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(p$(e))return"Blackberry";if(f$(e))return"Webos";if(l$(e))return"Safari";if((e.includes("chrome/")||u$(e))&&!e.includes("edge/"))return"Chrome";if(h$(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function c$(t=Vo()){return/firefox\//i.test(t)}function l$(t=Vo()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u$(t=Vo()){return/crios\//i.test(t)}function d$(t=Vo()){return/iemobile/i.test(t)}function h$(t=Vo()){return/android/i.test(t)}function p$(t=Vo()){return/blackberry/i.test(t)}function f$(t=Vo()){return/webos/i.test(t)}function m$(t=Vo()){return/iphone|ipad|ipod/i.test(t)}function g$(t=Vo()){return m$(t)||h$(t)||f$(t)||p$(t)||/windows phone/i.test(t)||d$(t)}
/**
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
     */
function y$(t,e=[]){let n;switch(t){case"Browser":n=a$(Vo());break;case"Worker":n=`${a$(Vo())}-${t}`;break;default:n=t}return`${n}/JsCore/9.6.4/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
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
     */class v${constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $$(this),this.idTokenSubscription=new $$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_b,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Rb(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await o$.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==n?void 0:n._redirectEventId,r=await this.tryRedirectSignIn(t);i&&i!==s||!(null==r?void 0:r.user)||(n=r.user)}return n?n._redirectEventId?(xb(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Zb(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Zo(t):null;return e&&xb(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&xb(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Rb(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Go("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Rb(t)||this._popupRedirectResolver;xb(e,this,"argument-error"),this.redirectPersistenceManager=await o$.create(this,[Rb(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const s="function"==typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return xb(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return xb(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=y$(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function b$(t){return Zo(t)}class $${constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t,e){const n=new Jo(t,e);return n.subscribe.bind(n)}((t=>this.observer=t))}get next(){return xb(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
     */class I${constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return kb("not implemented")}_getIdTokenResponse(t){return kb("not implemented")}_linkToIdToken(t,e){return kb("not implemented")}_getReauthenticationResolver(t){return kb("not implemented")}}
/**
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
     */async function _$(t,e){return async function(t,e,n,i,s={}){const r=await Hb(t,e,n,i,s);return"mfaPendingCredential"in r&&Tb(t,"multi-factor-auth-required",{_serverResponse:r}),r}(t,"POST","/v1/accounts:signInWithIdp",function(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}(t,e))}
/**
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
     */class E$ extends I${constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new E$(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Tb("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,s=Mt(e,["providerId","signInMethod"]);if(!n||!i)return null;const r=new E$(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(t){return _$(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,_$(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,_$(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Yo(e)}return t}}
/**
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
     */class w${constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
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
     */class T$ extends w${constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
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
     */class S$ extends T${constructor(){super("facebook.com")}static credential(t){return E$._fromParams({providerId:S$.PROVIDER_ID,signInMethod:S$.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return S$.credentialFromTaggedObject(t)}static credentialFromError(t){return S$.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return S$.credential(t.oauthAccessToken)}catch(t){return null}}}S$.FACEBOOK_SIGN_IN_METHOD="facebook.com",S$.PROVIDER_ID="facebook.com";
/**
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
     */
class A$ extends T${constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return E$._fromParams({providerId:A$.PROVIDER_ID,signInMethod:A$.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return A$.credentialFromTaggedObject(t)}static credentialFromError(t){return A$.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return A$.credential(e,n)}catch(t){return null}}}A$.GOOGLE_SIGN_IN_METHOD="google.com",A$.PROVIDER_ID="google.com";
/**
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
     */
class C$ extends T${constructor(){super("github.com")}static credential(t){return E$._fromParams({providerId:C$.PROVIDER_ID,signInMethod:C$.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return C$.credentialFromTaggedObject(t)}static credentialFromError(t){return C$.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return C$.credential(t.oauthAccessToken)}catch(t){return null}}}C$.GITHUB_SIGN_IN_METHOD="github.com",C$.PROVIDER_ID="github.com";
/**
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
     */
class x$ extends T${constructor(){super("twitter.com")}static credential(t,e){return E$._fromParams({providerId:x$.PROVIDER_ID,signInMethod:x$.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return x$.credentialFromTaggedObject(t)}static credentialFromError(t){return x$.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return x$.credential(e,n)}catch(t){return null}}}x$.TWITTER_SIGN_IN_METHOD="twitter.com",x$.PROVIDER_ID="twitter.com";
/**
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
     */
class k${constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const s=await n$._fromIdTokenResponse(t,n,i),r=O$(n);return new k$({user:s,providerId:r,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=O$(n);return new k$({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function O$(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
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
     */class L$ extends zo{constructor(t,e,n,i){var s;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,L$.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new L$(t,e,n,i)}}function R$(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw L$._fromErrorAndOperation(t,n,e,i);throw n}))}function N$(t,e,n,i){return Zo(t).onAuthStateChanged(e,n,i)}const D$="__sak";
/**
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
     */class M${constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(D$,"1"),this.storage.removeItem(D$),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
     */class P$ extends M${constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Vo();return l$(t)||m$(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=g$(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);qo()&&10===document.documentMode&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}P$.type="LOCAL";const F$=P$;
/**
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
     */class U$ extends M${constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}U$.type="SESSION";const V$=U$;
/**
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
     */
/**
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
     */
class B${constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new B$(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:s}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async t=>t(e.origin,s))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
     */
function H$(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
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
     */B$.receivers=[];class j${constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=H$("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
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
     */function q$(){return window}
/**
     * @license
     * Copyright 2020 Google LLC.
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
     */
function z$(){return void 0!==q$().WorkerGlobalScope&&"function"==typeof q$().importScripts}
/**
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
     */
const G$="firebaseLocalStorageDb",K$="firebaseLocalStorage",W$="fbase_key";class X${constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Y$(t,e){return t.transaction([K$],e?"readwrite":"readonly").objectStore(K$)}function J$(){const t=indexedDB.open(G$,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(K$,{keyPath:W$})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(K$)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(G$);return new X$(t).toPromise()}(),e(await J$()))}))}))}async function Q$(t,e,n){const i=Y$(t,!0).put({[W$]:e,value:n});return new X$(i).toPromise()}function Z$(t,e){const n=Y$(t,!0).delete(e);return new X$(n).toPromise()}class tI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await J$()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return z$()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=B$._getInstance(z$()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new j$(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&function(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await J$();return await Q$(t,D$,"1"),await Z$(t,D$),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Q$(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Y$(t,!1).get(e),i=await new X$(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Z$(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Y$(t,!1).getAll();return new X$(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:s}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}tI.type="LOCAL";const eI=tI;
/**
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
     */function nI(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=Sb("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",function(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}().appendChild(i)}))}
/**
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
     */
function iI(t,e){return e?Rb(e):(xb(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
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
     */new Pb(3e4,6e4);class sI extends I${constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return _$(t,this._buildIdpRequest())}_linkToIdToken(t,e){return _$(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return _$(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function rI(t){
/**
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
     */
return async function(t,e,n=!1){const i="signIn",s=await R$(t,i,e),r=await k$._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}(t.auth,new sI(t),t.bypassAuthState)}function oI(t){const{auth:e,user:n}=t;return xb(n,e,"internal-error"),
/**
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
     */
async function(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Yb(t,R$(i,s,e,t),n);xb(r.idToken,i,"internal-error");const o=Xb(r.idToken);xb(o,i,"internal-error");const{sub:a}=o;return xb(t.uid===a,i,"user-mismatch"),k$._forOperation(t,s,r)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Tb(i,"user-mismatch"),t}}(n,new sI(t),t.bypassAuthState)}async function aI(t){const{auth:e,user:n}=t;return xb(n,e,"internal-error"),async function(t,e,n=!1){const i=await Yb(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return k$._forOperation(t,"link",i)}(n,new sI(t),t.bypassAuthState)}
/**
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
     */class cI{constructor(t,e,n,i,s=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return rI;case"linkViaPopup":case"linkViaRedirect":return aI;case"reauthViaPopup":case"reauthViaRedirect":return oI;default:Tb(this.auth,"internal-error")}}resolve(t){Ob(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ob(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
     */const lI=new Pb(2e3,1e4);async function uI(t,e,n){const i=b$(t);!function(t,e,n){if(!(e instanceof n))throw n.name!==e.constructor.name&&Tb(t,"argument-error"),Ab(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(t,e,w$);const s=iI(i,n);return new dI(i,"signInViaPopup",e,s).executeNotNull()}class dI extends cI{constructor(t,e,n,i,s){super(t,e,i,s),this.provider=n,this.authWindow=null,this.pollId=null,dI.currentPopupAction&&dI.currentPopupAction.cancel(),dI.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return xb(t,this.auth,"internal-error"),t}async onExecution(){Ob(1===this.filter.length,"Popup operations only handle one event");const t=H$();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Sb(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Sb(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dI.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Sb(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,lI.get())};t()}}dI.currentPopupAction=null;
/**
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
     */
const hI="pendingRedirect",pI=new Map;class fI extends cI{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=pI.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=function(t){return r$(hI,t.config.apiKey,t.name)}(e),i=function(t){return Rb(t._redirectPersistence)}(t);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}pI.set(this.auth._key(),t)}return this.bypassAuthState||pI.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function mI(t,e,n=!1){const i=b$(t),s=iI(i,e),r=new fI(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}
/**
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
     */class gI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vI(t);default:return!1}}
/**
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
     */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!vI(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Sb(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(yI(t))}saveEventToCache(t){this.cachedEventUids.add(yI(t)),this.lastProcessedEventTime=Date.now()}}function yI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function vI({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
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
     */
const bI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$I=/^https?/;async function II(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Hb(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(_I(t))return}catch(t){}Tb(t,"unauthorized-domain")}function _I(t){const e=Nb(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!$I.test(n))return!1;if(bI.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
     * @license
     * Copyright 2020 Google LLC.
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
     */const EI=new Pb(3e4,6e4);function wI(){const t=q$().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}function TI(t){return new Promise(((e,n)=>{var i,s,r;function o(){wI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wI(),n(Sb(t,"network-request-failed"))},timeout:EI.get()})}if(null===(s=null===(i=q$().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=q$().gapi)||void 0===r?void 0:r.load)){const e=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return q$()[e]=()=>{gapi.load?o():n(Sb(t,"network-request-failed"))},nI(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw SI=null,t}))}let SI=null;
/**
     * @license
     * Copyright 2020 Google LLC.
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
     */
const AI=new Pb(5e3,15e3),CI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kI(t){const e=t.config;xb(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fb(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:t.name,v:Ea},s=xI.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Yo(i).slice(1)}`}async function OI(t){const e=await function(t){return SI=SI||TI(t),SI}(t),n=q$().gapi;return xb(n,t,"internal-error"),e.open({where:document.body,url:kI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CI,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const s=Sb(t,"network-request-failed"),r=q$().setTimeout((()=>{i(s)}),AI.get());function o(){q$().clearTimeout(r),n(e)}e.ping(o).then(o,(()=>{i(s)}))}))))}
/**
     * @license
     * Copyright 2020 Google LLC.
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
     */const LI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class RI{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function NI(t,e,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},LI),{width:i.toString(),height:s.toString(),top:r,left:o}),l=Vo().toLowerCase();n&&(a=u$(l)?"_blank":n),c$(l)&&(e=e||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=Vo()){var e;return m$(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
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
     */(e||"",a),new RI(null);const d=window.open(e||"",a,u);xb(d,t,"popup-blocked");try{d.focus()}catch(t){}return new RI(d)}const DI="__/auth/handler",MI="emulator/auth/handler";function PI(t,e,n,i,s,r){xb(t.config.authDomain,t,"auth-domain-config-required"),xb(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ea,eventId:s};if(e instanceof w$){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(r||{}))o[t]=e}if(e instanceof T$){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/${DI}`;return Fb(t,MI)}
/**
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
     */(t)}?${Yo(a).slice(1)}`}const FI="webStorageSupport";const UI=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=V$,this._completeRedirectFn=mI}async _openPopup(t,e,n,i){var s;Ob(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return NI(t,PI(t,e,n,Nb(),i),H$())}async _openRedirect(t,e,n,i){var s;return await this._originValidation(t),s=PI(t,e,n,Nb(),i),q$().location.href=s,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(Ob(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await OI(t),n=new gI(t);return e.register("authEvent",(e=>{xb(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(FI,{type:FI},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&e(!!s),Tb(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=II(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return g$()||l$()||m$()}};var VI,BI="@firebase/auth",HI="0.19.6";
/**
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
     */
class jI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){xb(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
     */VI="Browser",ba(new ta("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=n.options;return(t=>{xb(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),xb(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const n={apiKey:i,authDomain:s,clientPlatform:VI,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:y$(VI)},r=new v$(t,n);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Rb);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(r,e),r})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),ba(new ta("auth-internal",(t=>(t=>new jI(t))(b$(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Ta(BI,HI,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(VI)),Ta(BI,HI,"esm2017");
/**
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
     */
Ta("firebase","9.6.4","app");const qI=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:fa,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw Ia.create("bad-app-name",{appName:String(i)});const s=ga.get(i);if(s){if(Wo(t,s.options)&&Wo(n,s.config))return s;throw Ia.create("duplicate-app",{appName:i})}const r=new ia(i);for(const t of ya.values())r.addComponent(t);const o=new _a(t,n,r);return ga.set(i,o),o}({apiKey:"AIzaSyCAwBZR6IhFv_TMP2T7vDxzHVwoA1Czh0A",authDomain:"palettegrimore.firebaseapp.com",projectId:"palettegrimore",storageBucket:"palettegrimore.appspot.com",messagingSenderId:"730228515027",appId:"1:730228515027:web:f15967d41e88f5416eb426"}),zI=
/**
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
     */
function(t=wa()){const e=$a(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const n=$a(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(Wo(n.getOptions(),null!=e?e:{}))return t;Tb(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:UI,persistence:[eI,F$,V$]})}(qI),GI="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";var KI,WI,XI=0,YI=[];function JI(t){let e;return{c(){e=L("Upload Palette")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function QI(t){let e,n;return e=new Wr({props:{id:"fullscreen-title",$$slots:{default:[JI]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};524288&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function ZI(t){let e,n,i,s,r,o,a,c,u,d,h,p;function f(e){t[11](e)}let m={label:"Name",input$maxlength:32,$$slots:{helper:[e_]},$$scope:{ctx:t}};function g(e){t[12](e)}void 0!==t[3].name&&(m.value=t[3].name),s=new Or({props:m}),et.push((()=>At(s,"value",f)));let y={label:"Author",input$maxlength:32,$$slots:{helper:[i_]},$$scope:{ctx:t}};function v(e){t[13](e)}void 0!==t[3].auth&&(y.value=t[3].auth),a=new Or({props:y}),et.push((()=>At(a,"value",g)));let b={textarea:!0,label:"Description",input$maxlength:64,$$slots:{internalCounter:[r_]},$$scope:{ctx:t}};return void 0!==t[3].desc&&(b.value=t[3].desc),d=new Or({props:b}),et.push((()=>At(d,"value",v))),{c(){e=O("img"),i=R(),Ct(s.$$.fragment),o=R(),Ct(a.$$.fragment),u=R(),Ct(d.$$.fragment),M(e,"class","pal-preview svelte-1u7fbts"),l(e.src,n=t[2])||M(e,"src",n),M(e,"alt","Palette Preview")},m(t,n){x(t,e,n),x(t,i,n),xt(s,t,n),x(t,o,n),xt(a,t,n),x(t,u,n),xt(d,t,n),p=!0},p(t,i){(!p||4&i&&!l(e.src,n=t[2]))&&M(e,"src",n);const o={};524288&i&&(o.$$scope={dirty:i,ctx:t}),!r&&8&i&&(r=!0,o.value=t[3].name,ct((()=>r=!1))),s.$set(o);const u={};524288&i&&(u.$$scope={dirty:i,ctx:t}),!c&&8&i&&(c=!0,u.value=t[3].auth,ct((()=>c=!1))),a.$set(u);const f={};524288&i&&(f.$$scope={dirty:i,ctx:t}),!h&&8&i&&(h=!0,f.value=t[3].desc,ct((()=>h=!1))),d.$set(f)},i(t){p||(bt(s.$$.fragment,t),bt(a.$$.fragment,t),bt(d.$$.fragment,t),p=!0)},o(t){$t(s.$$.fragment,t),$t(a.$$.fragment,t),$t(d.$$.fragment,t),p=!1},d(t){t&&k(e),t&&k(i),kt(s,t),t&&k(o),kt(a,t),t&&k(u),kt(d,t)}}}function t_(t){let e;return{c(){e=L("0 / 32")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function e_(t){let e,n;return e=new ao({props:{slot:"helper",$$slots:{default:[t_]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};524288&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function n_(t){let e;return{c(){e=L("0 / 32")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function i_(t){let e,n;return e=new ao({props:{slot:"helper",$$slots:{default:[n_]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};524288&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function s_(t){let e;return{c(){e=L("0 / 64")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function r_(t){let e,n;return e=new ao({props:{slot:"internalCounter",$$slots:{default:[s_]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};524288&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function o_(t){let e,n,i=void 0!==t[3]&&ZI(t);return{c(){e=O("div"),i&&i.c(),M(e,"class","options-container svelte-1u7fbts")},m(t,s){x(t,e,s),i&&i.m(e,null),n=!0},p(t,n){void 0!==t[3]?i?(i.p(t,n),8&n&&bt(i,1)):(i=ZI(t),i.c(),bt(i,1),i.m(e,null)):i&&(yt(),$t(i,1,1,(()=>{i=null})),vt())},i(t){n||(bt(i),n=!0)},o(t){$t(i),n=!1},d(t){t&&k(e),i&&i.d()}}}function a_(t){let e;return{c(){e=L("Cancel")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function c_(t){let e,n;return e=new Pi({props:{$$slots:{default:[a_]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};524288&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function l_(t){let e;return{c(){e=L("publish")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function u_(t){let e;return{c(){e=L("Upload")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function d_(t){let e,n,i,s;return e=new Fi({props:{class:"material-icons",$$slots:{default:[l_]},$$scope:{ctx:t}}}),i=new Pi({props:{$$slots:{default:[u_]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment)},m(t,r){xt(e,t,r),x(t,n,r),xt(i,t,r),s=!0},p(t,n){const s={};524288&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const r={};524288&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){s||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),s=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),s=!1},d(t){kt(e,t),t&&k(n),kt(i,t)}}}function h_(t){let e,n,i,s;return e=new no({props:{action:"close",$$slots:{default:[c_]},$$scope:{ctx:t}}}),i=new no({props:{action:"upload",defaultAction:!0,$$slots:{default:[d_]},$$scope:{ctx:t}}}),i.$on("click",t[14]),{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment)},m(t,r){xt(e,t,r),x(t,n,r),xt(i,t,r),s=!0},p(t,n){const s={};524288&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const r={};524288&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){s||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),s=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),s=!1},d(t){kt(e,t),t&&k(n),kt(i,t)}}}function p_(t){let e,n,i,s,r,o;return e=new Kr({props:{$$slots:{default:[QI]},$$scope:{ctx:t}}}),i=new Xr({props:{id:"fullscreen-content",$$slots:{default:[o_]},$$scope:{ctx:t}}}),r=new Yr({props:{$$slots:{default:[h_]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment),s=R(),Ct(r.$$.fragment)},m(t,a){xt(e,t,a),x(t,n,a),xt(i,t,a),x(t,s,a),xt(r,t,a),o=!0},p(t,n){const s={};524288&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};524300&n&&(o.$$scope={dirty:n,ctx:t}),i.$set(o);const a={};524312&n&&(a.$$scope={dirty:n,ctx:t}),r.$set(a)},i(t){o||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),bt(r.$$.fragment,t),o=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),$t(r.$$.fragment,t),o=!1},d(t){kt(e,t),t&&k(n),kt(i,t),t&&k(s),kt(r,t)}}}function f_(t){let e,n,i,s,r,o,a;at(t[9]);function c(e){t[15](e)}e=new Po({props:{dismiss$class:"material-icons"}}),t[10](e);let l={fullscreen:t[6],"aria-labelledby":"fullscreen-title","aria-describedby":"fullscreen-content",$$slots:{default:[p_]},$$scope:{ctx:t}};return void 0!==t[1]&&(l.open=t[1]),i=new Gr({props:l}),et.push((()=>At(i,"open",c))),{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment)},m(s,c){xt(e,s,c),x(s,n,c),xt(i,s,c),r=!0,o||(a=D(window,"resize",t[9]),o=!0)},p(t,[n]){e.$set({});const r={};64&n&&(r.fullscreen=t[6]),524316&n&&(r.$$scope={dirty:n,ctx:t}),!s&&2&n&&(s=!0,r.open=t[1],ct((()=>s=!1))),i.$set(r)},i(t){r||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),r=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),r=!1},d(s){t[10](null),kt(e,s),s&&k(n),kt(i,s),o=!1,a()}}}function m_(t,e,n){let i,s,r,o,a,c=!1;const l=Uv();let u=null;N$(zI,(t=>{u=t||null}));const d=Rc();async function h(t,e){let n=function(){var t=(new Date).getTime(),e=t===XI;XI=t;for(var n=new Array(8),i=7;i>=0;i--)n[i]=GI.charAt(t%64),t=Math.floor(t/64);if(0!==t)throw new Error("We should have converted the entire timestamp.");var s=n.join("");if(e){for(i=11;i>=0&&63===YI[i];i--)YI[i]=0;YI[i]++}else for(i=0;i<12;i++)YI[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)s+=GI.charAt(YI[i]);if(20!=s.length)throw new Error("Length should be 20.");return s}();const i=Lc(d,`img/${n}.png`),s=Lc(d,`pal/${n}.cmpl`);try{kc(i,await e.pal.genImage(`/assets/characters/bbcf/${t.char}.png`),"data_url"),function(t,e,n){Ic(t=Zo(t),e,n)}(s,o.cmpl)}catch(t){a.push({label:`${t.message}`,dismissButton:!0})}t.img=i.fullPath,t.pal=s.fullPath,t.poster=u.uid,t.likes=0,t.createdOn=new Date(Date.now());try{await function(t,e,n){t=xv(t,Lv);const i=xv(t.firestore,Fv),s=function(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}(t.converter,e,n);return bb(i,[Qv(Jv(i),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Jf.none())])}(Dv(l,"palettes",n),t)}catch(t){a.push({label:`${t.message}`,dismissButton:!0})}}let p;return t.$$.update=()=>{1&t.$$.dirty&&n(6,i=p<900)},[p,c,s,r,o,a,i,h,async function(t){n(2,s=await t.pal.genImage(`/assets/characters/bbcf/${t.char}.png`)),n(3,r={name:t.name,auth:t.auth,desc:t.desc,char:t.char}),n(4,o=t),n(1,c=!0)},function(){n(0,p=window.innerWidth)},function(t){et[t?"unshift":"push"]((()=>{a=t,n(5,a)}))},function(e){t.$$.not_equal(r.name,e)&&(r.name=e,n(3,r))},function(e){t.$$.not_equal(r.auth,e)&&(r.auth=e,n(3,r))},function(e){t.$$.not_equal(r.desc,e)&&(r.desc=e,n(3,r))},()=>h(r,o),function(t){c=t,n(1,c)}]}class g_ extends Lt{constructor(t){super(),Ot(this,t,m_,f_,a,{openUpload:8})}get openUpload(){return this.$$.ctx[8]}}
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */var y_={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};(KI={})[""+y_.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",KI[""+y_.LIST_ITEM_CLASS]="mdc-list-item",KI[""+y_.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",KI[""+y_.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",KI[""+y_.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",KI[""+y_.ROOT]="mdc-list";var v_=((WI={})[""+y_.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",WI[""+y_.LIST_ITEM_CLASS]="mdc-deprecated-list-item",WI[""+y_.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",WI[""+y_.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",WI[""+y_.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",WI[""+y_.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",WI[""+y_.ROOT]="mdc-deprecated-list",WI),b_={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+y_.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+y_.LIST_ITEM_CLASS+" a,\n    ."+v_[y_.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+v_[y_.LIST_ITEM_CLASS]+" a\n  ",DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+y_.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+y_.LIST_ITEM_CLASS+" a,\n    ."+y_.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n    .'+y_.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled),\n    .'+v_[y_.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+v_[y_.LIST_ITEM_CLASS]+" a,\n    ."+v_[y_.LIST_ITEM_CLASS]+' input[type="radio"]:not(:disabled),\n    .'+v_[y_.LIST_ITEM_CLASS]+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},$_={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},I_=["input","button","textarea","select"],__=function(t){var e=t.target;if(e){var n=(""+e.tagName).toLowerCase();-1===I_.indexOf(n)&&t.preventDefault()}};function E_(t,e){var n,i=t.nextChar,s=t.focusItemAtIndex,r=t.sortedIndexByFirstChar,o=t.focusedItemIndex,a=t.skipFocus,c=t.isItemAtIndexDisabled;return clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout((function(){T_(e)}),$_.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+i,n=1===e.typeaheadBuffer.length?function(t,e,n,i){var s=i.typeaheadBuffer[0],r=t.get(s);if(!r)return-1;if(s===i.currentFirstChar&&r[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%r.length;var o=r[i.sortedIndexCursor].index;if(!n(o))return o}i.currentFirstChar=s;var a,c=-1;for(a=0;a<r.length;a++)if(!n(r[a].index)){c=a;break}for(;a<r.length;a++)if(r[a].index>e&&!n(r[a].index)){c=a;break}if(-1!==c)return i.sortedIndexCursor=c,r[i.sortedIndexCursor].index;return-1}(r,o,c,e):function(t,e,n){var i=n.typeaheadBuffer[0],s=t.get(i);if(!s)return-1;var r=s[n.sortedIndexCursor];if(0===r.text.lastIndexOf(n.typeaheadBuffer,0)&&!e(r.index))return r.index;var o=(n.sortedIndexCursor+1)%s.length,a=-1;for(;o!==n.sortedIndexCursor;){var c=s[o],l=0===c.text.lastIndexOf(n.typeaheadBuffer,0),u=!e(c.index);if(l&&u){a=o;break}o=(o+1)%s.length}if(-1!==a)return n.sortedIndexCursor=a,s[n.sortedIndexCursor].index;return-1}(r,c,e),-1===n||a||s(n),n}function w_(t){return t.typeaheadBuffer.length>0}function T_(t){t.typeaheadBuffer=""}function S_(t,e){var n=t.event,i=t.isTargetListItem,s=t.focusedItemIndex,r=t.focusItemAtIndex,o=t.sortedIndexByFirstChar,a=t.isItemAtIndexDisabled,c="ArrowLeft"===vi(n),l="ArrowUp"===vi(n),u="ArrowRight"===vi(n),d="ArrowDown"===vi(n),h="Home"===vi(n),p="End"===vi(n),f="Enter"===vi(n),m="Spacebar"===vi(n);return n.ctrlKey||n.metaKey||c||l||u||d||h||p||f?-1:m||1!==n.key.length?m?(i&&__(n),i&&w_(e)?E_({focusItemAtIndex:r,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a},e):-1):-1:(__(n),E_({focusItemAtIndex:r,focusedItemIndex:s,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a},e))}
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */var A_=function(t){function e(n){var i=t.call(this,Dt(Dt({},e.defaultAdapter),n))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=$_.UNSET_INDEX,i.focusedItemIndex=$_.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""},i.sortedIndexByFirstChar=new Map,i}return Nt(e,t),Object.defineProperty(e,"strings",{get:function(){return b_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return y_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return $_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){0!==this.adapter.getListItemCount()&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();t!==$_.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(t,y_.LIST_ITEM_ACTIVATED_CLASS)&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t)},e.prototype.getSelectedIndexFromDOM=function(){for(var t=$_.UNSET_INDEX,e=this.adapter.getListItemCount(),n=0;n<e;n++){var i=this.adapter.listItemAtIndexHasClass(n,y_.LIST_ITEM_SELECTED_CLASS),s=this.adapter.listItemAtIndexHasClass(n,y_.LIST_ITEM_ACTIVATED_CLASS);if(i||s){t=n;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&w_(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,e){var n=(void 0===e?{}:e).forceUpdate;this.isIndexValid(t)&&(this.isCheckboxList?this.setCheckboxAtIndex(t):this.isRadioList?this.setRadioAtIndex(t):this.setSingleSelectionAtIndex(t,{forceUpdate:n}))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var e=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout((function(){e.adapter.isFocusInsideList()||e.setTabindexToFirstSelectedOrFocusedItem()}),0)},e.prototype.handleKeydown=function(t,e,n){var i=this,s="ArrowLeft"===vi(t),r="ArrowUp"===vi(t),o="ArrowRight"===vi(t),a="ArrowDown"===vi(t),c="Home"===vi(t),l="End"===vi(t),u="Enter"===vi(t),d="Spacebar"===vi(t),h="A"===t.key||"a"===t.key;if(this.adapter.isRootFocused()){r||l?(t.preventDefault(),this.focusLastElement()):(a||c)&&(t.preventDefault(),this.focusFirstElement()),this.hasTypeahead&&S_({event:t,focusItemAtIndex:function(t){i.focusItemAtIndex(t)},focusedItemIndex:-1,isTargetListItem:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(t){return i.adapter.listItemAtIndexHasClass(t,y_.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState)}else{var p=this.adapter.getFocusedElementIndex();if(!(-1===p&&(p=n)<0)){if(this.isVertical&&a||!this.isVertical&&o)__(t),this.focusNextElement(p);else if(this.isVertical&&r||!this.isVertical&&s)__(t),this.focusPrevElement(p);else if(c)__(t),this.focusFirstElement();else if(l)__(t),this.focusLastElement();else if(h&&t.ctrlKey&&this.isCheckboxList)t.preventDefault(),this.toggleAll(this.selectedIndex===$_.UNSET_INDEX?[]:this.selectedIndex);else if((u||d)&&e){var f=t.target;if(f&&"A"===f.tagName&&u)return;if(__(t),this.adapter.listItemAtIndexHasClass(p,y_.LIST_ITEM_DISABLED_CLASS))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(p),this.adapter.notifyAction(p))}if(this.hasTypeahead)S_({event:t,focusItemAtIndex:function(t){i.focusItemAtIndex(t)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(t){return i.adapter.listItemAtIndexHasClass(t,y_.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState)}}},e.prototype.handleClick=function(t,e){t!==$_.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(t,y_.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(t,e),this.adapter.notifyAction(t)))},e.prototype.focusNextElement=function(t){var e=t+1;if(e>=this.adapter.getListItemCount()){if(!this.wrapFocus)return t;e=0}return this.focusItemAtIndex(e),e},e.prototype.focusPrevElement=function(t){var e=t-1;if(e<0){if(!this.wrapFocus)return t;e=this.adapter.getListItemCount()-1}return this.focusItemAtIndex(e),e},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var t=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(t),t},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,e){this.isIndexValid(t)&&(e?(this.adapter.removeClassForElementIndex(t,y_.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,b_.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,y_.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,b_.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,e){var n=(void 0===e?{}:e).forceUpdate;if(this.selectedIndex!==t||n){var i=y_.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(i=y_.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==$_.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,i),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==$_.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,i),this.selectedIndex=t}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===$_.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,b_.ARIA_CURRENT));var e=null!==this.ariaCurrentAttrValue,n=e?b_.ARIA_CURRENT:b_.ARIA_SELECTED;if(this.selectedIndex!==$_.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,n,"false"),t!==$_.UNSET_INDEX){var i=e?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,n,i)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?b_.ARIA_SELECTED:b_.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t){var e=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),this.selectedIndex!==$_.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,e,"false"),this.adapter.setAttributeForElementIndex(t,e,"true"),this.selectedIndex=t},e.prototype.setCheckboxAtIndex=function(t){for(var e=this.getSelectionAttribute(),n=0;n<this.adapter.getListItemCount();n++){var i=!1;t.indexOf(n)>=0&&(i=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(n,i),this.adapter.setAttributeForElementIndex(n,e,i?"true":"false")}this.selectedIndex=t},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===$_.UNSET_INDEX&&0!==t?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),this.selectedIndex instanceof Array||this.selectedIndex===t||this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==$_.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?"number"==typeof this.selectedIndex&&this.selectedIndex!==$_.UNSET_INDEX?this.selectedIndex:this.selectedIndex instanceof Array&&this.selectedIndex.length>0?this.selectedIndex.reduce((function(t,e){return Math.min(t,e)})):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(t){var e=this;if(t instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return 0===t.length||t.some((function(t){return e.isIndexInRange(t)}))}if("number"==typeof t){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===$_.UNSET_INDEX}return!1},e.prototype.isIndexInRange=function(t){var e=this.adapter.getListItemCount();return t>=0&&t<e},e.prototype.setSelectedIndexOnAction=function(t,e){void 0===e&&(e=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(t,e):this.setSelectedIndex(t)},e.prototype.toggleCheckboxAtIndex=function(t,e){var n=this.getSelectionAttribute(),i=this.adapter.isCheckboxCheckedAtIndex(t);e&&(i=!i,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,i)),this.adapter.setAttributeForElementIndex(t,n,i?"true":"false");var s=this.selectedIndex===$_.UNSET_INDEX?[]:this.selectedIndex.slice();i?s.push(t):s=s.filter((function(e){return e!==t})),this.selectedIndex=s},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.toggleAll=function(t){var e=this.adapter.getListItemCount();if(t.length===e)this.setCheckboxAtIndex([]);else{for(var n=[],i=0;i<e;i++)(!this.adapter.listItemAtIndexHasClass(i,y_.LIST_ITEM_DISABLED_CLASS)||t.indexOf(i)>-1)&&n.push(i);this.setCheckboxAtIndex(n)}},e.prototype.typeaheadMatchItem=function(t,e,n){var i=this;return void 0===n&&(n=!1),E_({focusItemAtIndex:function(t){i.focusItemAtIndex(t)},focusedItemIndex:e||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:n,isItemAtIndexDisabled:function(t){return i.adapter.listItemAtIndexHasClass(t,y_.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return function(t,e){for(var n=new Map,i=0;i<t;i++){var s=e(i).trim();if(s){var r=s[0].toLowerCase();n.has(r)||n.set(r,[]),n.get(r).push({text:s.toLowerCase(),index:i})}}return n.forEach((function(t){t.sort((function(t,e){return t.index-e.index}))})),n}(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){T_(this.typeaheadState)},e}(Ft),C_={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},x_={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"},k_=function(t){function e(n){var i=t.call(this,Dt(Dt({},e.defaultAdapter),n))||this;return i.animationFrame=0,i.animationTimer=0,i}return Nt(e,t),Object.defineProperty(e,"strings",{get:function(){return x_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return C_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(C_.OPEN),this.adapter.addClass(C_.ANIMATE),this.runNextAnimationFrame((function(){t.adapter.addClass(C_.OPENING)})),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(C_.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(C_.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(C_.OPENING)||this.adapter.hasClass(C_.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(C_.CLOSING)},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.handleTransitionEnd=function(t){var e=C_.OPENING,n=C_.CLOSING,i=C_.OPEN,s=C_.ANIMATE,r=C_.ROOT;this.isElement(t.target)&&this.adapter.elementHasClass(t.target,r)&&(this.isClosing()?(this.adapter.removeClass(i),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(s),this.adapter.removeClass(e),this.adapter.removeClass(n))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)}))},e.prototype.isElement=function(t){return Boolean(t.classList)},e}(Ft),O_=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Nt(e,t),e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(k_);
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */function L_(t){let e,i,s,a,c,l;const u=t[15].default,d=h(u,t,t[14],null);let p=[{class:i=re({[t[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":"dismissible"===t[2],"mdc-drawer--modal":"modal"===t[2],"smui-drawer__absolute":"modal"===t[2]&&!t[3],...t[6]})},t[8]],y={};for(let t=0;t<p.length;t+=1)y=n(y,p[t]);return{c(){e=O("aside"),d&&d.c(),P(e,y)},m(n,i){x(n,e,i),d&&d.m(e,null),t[16](e),a=!0,c||(l=[$(s=he.call(null,e,t[0])),$(t[7].call(null,e)),D(e,"keydown",t[17]),D(e,"transitionend",t[18])],c=!0)},p(t,[n]){d&&d.p&&(!a||16384&n)&&m(d,u,t,t[14],a?f(u,t[14],n,null):g(t[14]),null),P(e,y=Tt(p,[(!a||78&n&&i!==(i=re({[t[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":"dismissible"===t[2],"mdc-drawer--modal":"modal"===t[2],"smui-drawer__absolute":"modal"===t[2]&&!t[3],...t[6]})))&&{class:i},256&n&&t[8]])),s&&o(s.update)&&1&n&&s.update.call(null,t[0])},i(t){a||(bt(d,t),a=!0)},o(t){$t(d,t),a=!1},d(n){n&&k(e),d&&d.d(n),t[16](null),c=!1,r(l)}}}function R_(t,e,i){const s=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;const{FocusTrap:c}=Un,l=ue(W());let u,d,h,{use:p=[]}=e,{class:f=""}=e,{variant:m}=e,{open:g=!1}=e,{fixed:b=!0}=e,$={},I=null,_=!1;J("SMUI:list:nav",!0),J("SMUI:list:item:nav",!0),J("SMUI:list:wrapFocus",!0);let E=m;function w(){var t,e;_&&_.removeEventListener("SMUIDrawerScrim:click",C),"modal"===m&&(_=null!==(e=null===(t=u.parentNode)||void 0===t?void 0:t.querySelector(".mdc-drawer-scrim"))&&void 0!==e&&e,_&&_.addEventListener("SMUIDrawerScrim:click",C));const n="dismissible"===m?k_:"modal"===m?O_:void 0;return n?new n({addClass:S,removeClass:A,hasClass:T,elementHasClass:(t,e)=>t.classList.contains(e),saveFocus:()=>I=document.activeElement,restoreFocus:()=>{I&&"focus"in I&&u.contains(document.activeElement)&&I.focus()},focusActiveNavigationItem:()=>{const t=u.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");t&&t.focus()},notifyClose:()=>{i(9,g=!1),oe(u,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{i(9,g=!0),oe(u,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>h.trapFocus(),releaseFocus:()=>h.releaseFocus()}):void 0}function T(t){return t in $?$[t]:x().classList.contains(t)}function S(t){$[t]||i(6,$[t]=!0,$)}function A(t){t in $&&!$[t]||i(6,$[t]=!1,$)}function C(){d&&"handleScrimClick"in d&&d.handleScrimClick()}function x(){return u}X((()=>{h=new c(u,{skipInitialFocus:!0}),i(4,d=w()),d&&d.init()})),Y((()=>{d&&d.destroy(),_&&_.removeEventListener("SMUIDrawerScrim:click",C)}));return t.$$set=t=>{e=n(n({},e),y(t)),i(8,r=v(e,s)),"use"in t&&i(0,p=t.use),"class"in t&&i(1,f=t.class),"variant"in t&&i(2,m=t.variant),"open"in t&&i(9,g=t.open),"fixed"in t&&i(3,b=t.fixed),"$$scope"in t&&i(14,a=t.$$scope)},t.$$.update=()=>{8212&t.$$.dirty&&E!==m&&(i(13,E=m),d&&d.destroy(),i(6,$={}),i(4,d=w()),d&&d.init()),528&t.$$.dirty&&d&&d.isOpen()!==g&&(g?d.open():d.close())},[p,f,m,b,d,u,$,l,r,g,function(t){i(9,g=t)},function(){return g},x,E,a,o,function(t){et[t?"unshift":"push"]((()=>{u=t,i(5,u)}))},t=>d&&d.handleKeydown(t),t=>d&&d.handleTransitionEnd(t)]}class N_ extends Lt{constructor(t){super(),Ot(this,t,R_,L_,a,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}Ae({class:"mdc-drawer-app-content",component:hn});var D_=Ae({class:"mdc-drawer__content",component:hn}),M_=Ae({class:"mdc-drawer__header",component:hn}),P_=Ae({class:"mdc-drawer__title",component:pn}),F_=Ae({class:"mdc-drawer__subtitle",component:fn});function U_(t){let e;const n=t[8].default,i=h(n,t,t[11],null);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,s){i&&i.p&&(!e||2048&s)&&m(i,n,t,t[11],e?f(n,t[11],s,null):g(t[11]),null)},i(t){e||(bt(i,t),e=!0)},o(t){$t(i,t),e=!1},d(t){i&&i.d(t)}}}function V_(t){let e,i,s;const r=[{use:[t[6],...t[0]]},{class:re({[t[1]]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!t[2]})},t[7]];var o=t[3];function a(t){let e={$$slots:{default:[U_]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return o&&(e=new o(a(t)),t[9](e),e.$on("click",t[10])),{c(){e&&Ct(e.$$.fragment),i=N()},m(t,n){e&&xt(e,t,n),x(t,i,n),s=!0},p(t,[n]){const s=199&n?Tt(r,[65&n&&{use:[t[6],...t[0]]},6&n&&{class:re({[t[1]]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!t[2]})},128&n&&St(t[7])]):{};if(2048&n&&(s.$$scope={dirty:n,ctx:t}),o!==(o=t[3])){if(e){yt();const t=e;$t(t.$$.fragment,1,0,(()=>{kt(t,1)})),vt()}o?(e=new o(a(t)),t[9](e),e.$on("click",t[10]),Ct(e.$$.fragment),bt(e.$$.fragment,1),xt(e,i.parentNode,i)):e=null}else o&&e.$set(s)},i(t){s||(e&&bt(e.$$.fragment,t),s=!0)},o(t){e&&$t(e.$$.fragment,t),s=!1},d(n){t[9](null),n&&k(i),e&&kt(e,n)}}}function B_(t,e,i){const s=["use","class","fixed","component","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;const c=ue(W());let l,{use:u=[]}=e,{class:d=""}=e,{fixed:h=!0}=e,{component:p=hn}=e;function f(){return l.getElement()}return t.$$set=t=>{e=n(n({},e),y(t)),i(7,r=v(e,s)),"use"in t&&i(0,u=t.use),"class"in t&&i(1,d=t.class),"fixed"in t&&i(2,h=t.fixed),"component"in t&&i(3,p=t.component),"$$scope"in t&&i(11,a=t.$$scope)},[u,d,h,p,f,l,c,r,o,function(t){et[t?"unshift":"push"]((()=>{l=t,i(5,l)}))},t=>oe(f(),"SMUIDrawerScrim:click",t),a]}const H_=class extends Lt{constructor(t){super(),Ot(this,t,B_,V_,a,{use:0,class:1,fixed:2,component:3,getElement:4})}get getElement(){return this.$$.ctx[4]}};function j_(t){let e;const n=t[37].default,i=h(n,t,t[43],null);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,s){i&&i.p&&(!e||4096&s[1])&&m(i,n,t,t[43],e?f(n,t[43],s,null):g(t[43]),null)},i(t){e||(bt(i,t),e=!0)},o(t){$t(i,t),e=!1},d(t){i&&i.d(t)}}}function q_(t){let e,i,s;const r=[{use:[t[17],...t[0]]},{class:re({[t[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":t[2],"mdc-deprecated-list--dense":t[3],"mdc-deprecated-list--textual-list":t[4],"mdc-deprecated-list--avatar-list":t[5]||t[18],"mdc-deprecated-list--icon-list":t[6],"mdc-deprecated-list--image-list":t[7],"mdc-deprecated-list--thumbnail-list":t[8],"mdc-deprecated-list--video-list":t[9],"mdc-deprecated-list--two-line":t[10],"smui-list--three-line":t[11]&&!t[10]})},{role:t[15]},t[23]];var o=t[12];function a(t){let e={$$slots:{default:[j_]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return o&&(e=new o(a(t)),t[38](e),e.$on("keydown",t[39]),e.$on("focusin",t[40]),e.$on("focusout",t[41]),e.$on("click",t[42]),e.$on("SMUIListItem:mount",t[19]),e.$on("SMUIListItem:unmount",t[20]),e.$on("SMUI:action",t[21])),{c(){e&&Ct(e.$$.fragment),i=N()},m(t,n){e&&xt(e,t,n),x(t,i,n),s=!0},p(t,n){const s=8818687&n[0]?Tt(r,[131073&n[0]&&{use:[t[17],...t[0]]},266238&n[0]&&{class:re({[t[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":t[2],"mdc-deprecated-list--dense":t[3],"mdc-deprecated-list--textual-list":t[4],"mdc-deprecated-list--avatar-list":t[5]||t[18],"mdc-deprecated-list--icon-list":t[6],"mdc-deprecated-list--image-list":t[7],"mdc-deprecated-list--thumbnail-list":t[8],"mdc-deprecated-list--video-list":t[9],"mdc-deprecated-list--two-line":t[10],"smui-list--three-line":t[11]&&!t[10]})},32768&n[0]&&{role:t[15]},8388608&n[0]&&St(t[23])]):{};if(4096&n[1]&&(s.$$scope={dirty:n,ctx:t}),o!==(o=t[12])){if(e){yt();const t=e;$t(t.$$.fragment,1,0,(()=>{kt(t,1)})),vt()}o?(e=new o(a(t)),t[38](e),e.$on("keydown",t[39]),e.$on("focusin",t[40]),e.$on("focusout",t[41]),e.$on("click",t[42]),e.$on("SMUIListItem:mount",t[19]),e.$on("SMUIListItem:unmount",t[20]),e.$on("SMUI:action",t[21]),Ct(e.$$.fragment),bt(e.$$.fragment,1),xt(e,i.parentNode,i)):e=null}else o&&e.$set(s)},i(t){s||(e&&bt(e.$$.fragment,t),s=!0)},o(t){e&&$t(e.$$.fragment,t),s=!1},d(n){t[38](null),n&&k(i),e&&kt(e,n)}}}function z_(t,e,i){const s=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;var c;const{closest:l,matches:u}=Ht,d=ue(W());let h,p,{use:f=[]}=e,{class:m=""}=e,{nonInteractive:g=!1}=e,{dense:b=!1}=e,{textualList:$=!1}=e,{avatarList:I=!1}=e,{iconList:_=!1}=e,{imageList:E=!1}=e,{thumbnailList:w=!1}=e,{videoList:T=!1}=e,{twoLine:S=!1}=e,{threeLine:A=!1}=e,{vertical:C=!0}=e,{wrapFocus:x=null!==(c=Q("SMUI:list:wrapFocus"))&&void 0!==c&&c}=e,{singleSelection:k=!1}=e,{selectedIndex:O=-1}=e,{radioList:L=!1}=e,{checkList:R=!1}=e,{hasTypeahead:N=!1}=e,D=[],M=Q("SMUI:list:role"),P=Q("SMUI:list:nav");const F=new WeakMap;let U,V=Q("SMUI:dialog:selection"),B=Q("SMUI:addLayoutListener"),{component:H=(P?_n:wn)}=e;function j(){return null==h?[]:[...at().children].map((t=>F.get(t))).filter((t=>t&&t._smui_list_item_accessor))}function q(t){const e=j()[t];e&&"focus"in e.element&&e.element.focus()}function z(t,e){var n;const i=j()[t];return null!==(n=i&&i.hasClass(e))&&void 0!==n&&n}function G(t,e){const n=j()[t];n&&n.addClass(e)}function K(t,e){const n=j()[t];n&&n.removeClass(e)}function Z(t,e,n){const i=j()[t];i&&i.addAttr(e,n)}function tt(t,e){const n=j()[t];n&&n.removeAttr(e)}function nt(t,e){const n=j()[t];return n?n.getAttr(e):null}function it(t){var e;const n=j()[t];return null!==(e=n&&n.getPrimaryText())&&void 0!==e?e:""}function st(t){const e=l(t,".mdc-deprecated-list-item, .mdc-deprecated-list");return e&&u(e,".mdc-deprecated-list-item")?j().map((t=>null==t?void 0:t.element)).indexOf(e):-1}function rt(){return p.layout()}function ot(){return p.getSelectedIndex()}function at(){return h.getElement()}J("SMUI:list:nonInteractive",g),J("SMUI:separator:context","list"),M||(k?(M="listbox",J("SMUI:list:item:role","option")):L?(M="radiogroup",J("SMUI:list:item:role","radio")):R?(M="group",J("SMUI:list:item:role","checkbox")):(M="list",J("SMUI:list:item:role",void 0))),B&&(U=B(rt)),X((()=>{i(13,p=new A_({addClassForElementIndex:G,focusItemAtIndex:q,getAttributeForElementIndex:(t,e)=>{var n,i;return null!==(i=null===(n=j()[t])||void 0===n?void 0:n.getAttr(e))&&void 0!==i?i:null},getFocusedElementIndex:()=>document.activeElement?j().map((t=>t.element)).indexOf(document.activeElement):-1,getListItemCount:()=>D.length,getPrimaryTextAtIndex:it,hasCheckboxAtIndex:t=>{var e,n;return null!==(n=null===(e=j()[t])||void 0===e?void 0:e.hasCheckbox)&&void 0!==n&&n},hasRadioAtIndex:t=>{var e,n;return null!==(n=null===(e=j()[t])||void 0===e?void 0:e.hasRadio)&&void 0!==n&&n},isCheckboxCheckedAtIndex:t=>{var e;const n=j()[t];return null!==(e=(null==n?void 0:n.hasCheckbox)&&n.checked)&&void 0!==e&&e},isFocusInsideList:()=>null!=h&&at()!==document.activeElement&&at().contains(document.activeElement),isRootFocused:()=>null!=h&&document.activeElement===at(),listItemAtIndexHasClass:z,notifyAction:t=>{i(24,O=t),null!=h&&oe(at(),"SMUIList:action",{index:t},void 0,!0)},removeClassForElementIndex:K,setAttributeForElementIndex:Z,setCheckedCheckboxOrRadioAtIndex:(t,e)=>{j()[t].checked=e},setTabIndexForListItemChildren:(t,e)=>{const n=j()[t];Array.prototype.forEach.call(n.element.querySelectorAll("button:not(:disabled), a"),(t=>{t.setAttribute("tabindex",e)}))}}));const t={get element(){return at()},get items(){return D},get typeaheadInProgress(){return p.isTypeaheadInProgress()},typeaheadMatchItem:(t,e)=>p.typeaheadMatchItem(t,e,!0),getOrderedList:j,focusItemAtIndex:q,addClassForElementIndex:G,removeClassForElementIndex:K,setAttributeForElementIndex:Z,removeAttributeForElementIndex:tt,getAttributeFromElementIndex:nt,getPrimaryTextAtIndex:it};return oe(at(),"SMUIList:mount",t),p.init(),()=>{p.destroy()}})),Y((()=>{U&&U()}));return t.$$set=t=>{e=n(n({},e),y(t)),i(23,r=v(e,s)),"use"in t&&i(0,f=t.use),"class"in t&&i(1,m=t.class),"nonInteractive"in t&&i(2,g=t.nonInteractive),"dense"in t&&i(3,b=t.dense),"textualList"in t&&i(4,$=t.textualList),"avatarList"in t&&i(5,I=t.avatarList),"iconList"in t&&i(6,_=t.iconList),"imageList"in t&&i(7,E=t.imageList),"thumbnailList"in t&&i(8,w=t.thumbnailList),"videoList"in t&&i(9,T=t.videoList),"twoLine"in t&&i(10,S=t.twoLine),"threeLine"in t&&i(11,A=t.threeLine),"vertical"in t&&i(25,C=t.vertical),"wrapFocus"in t&&i(26,x=t.wrapFocus),"singleSelection"in t&&i(27,k=t.singleSelection),"selectedIndex"in t&&i(24,O=t.selectedIndex),"radioList"in t&&i(28,L=t.radioList),"checkList"in t&&i(29,R=t.checkList),"hasTypeahead"in t&&i(30,N=t.hasTypeahead),"component"in t&&i(12,H=t.component),"$$scope"in t&&i(43,a=t.$$scope)},t.$$.update=()=>{33562624&t.$$.dirty[0]&&p&&p.setVerticalOrientation(C),67117056&t.$$.dirty[0]&&p&&p.setWrapFocus(x),1073750016&t.$$.dirty[0]&&p&&p.setHasTypeahead(N),134225920&t.$$.dirty[0]&&p&&p.setSingleSelection(k),151003136&t.$$.dirty[0]&&p&&k&&ot()!==O&&p.setSelectedIndex(O)},[f,m,g,b,$,I,_,E,w,T,S,A,H,p,h,M,u,d,V,function(t){D.push(t.detail),F.set(t.detail.element,t.detail),k&&t.detail.selected&&i(24,O=st(t.detail.element)),t.stopPropagation()},function(t){var e;const n=null!==(e=t.detail&&D.indexOf(t.detail))&&void 0!==e?e:-1;-1!==n&&(D.splice(n,1),D=D,F.delete(t.detail.element)),t.stopPropagation()},function(t){if(L||R){const e=st(t.target);if(-1!==e){const t=j()[e];t&&(L&&!t.checked||R)&&(t.checked=!t.checked,t.activateRipple(),window.requestAnimationFrame((()=>{t.deactivateRipple()})))}}},st,r,O,C,x,k,L,R,N,rt,function(t,e){return p.setEnabled(t,e)},function(){return p.isTypeaheadInProgress()},ot,function(){return p.getFocusedItemIndex()},at,o,function(t){et[t?"unshift":"push"]((()=>{h=t,i(14,h)}))},t=>p&&p.handleKeydown(t,t.target.classList.contains("mdc-deprecated-list-item"),st(t.target)),t=>p&&p.handleFocusIn(st(t.target)),t=>p&&p.handleFocusOut(st(t.target)),t=>p&&p.handleClick(st(t.target),!u(t.target,'input[type="checkbox"], input[type="radio"]')),a]}class G_ extends Lt{constructor(t){super(),Ot(this,t,z_,q_,a,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}function K_(t){let e;return{c(){e=O("span"),M(e,"class","mdc-deprecated-list-item__ripple")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function W_(t){let e,n,i=t[7]&&K_();const s=t[32].default,r=h(s,t,t[35],null);return{c(){i&&i.c(),e=N(),r&&r.c()},m(t,s){i&&i.m(t,s),x(t,e,s),r&&r.m(t,s),n=!0},p(t,o){t[7]?i||(i=K_(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),r&&r.p&&(!n||16&o[1])&&m(r,s,t,t[35],n?f(s,t[35],o,null):g(t[35]),null)},i(t){n||(bt(r,t),n=!0)},o(t){$t(r,t),n=!1},d(t){i&&i.d(t),t&&k(e),r&&r.d(t)}}}function X_(t){let e,i,s;const r=[{use:[...t[6]?[]:[[Ii,{ripple:!t[14],unbounded:!1,color:(t[1]||t[0])&&null==t[5]?"primary":t[5],disabled:t[9],addClass:t[22],removeClass:t[23],addStyle:t[24]}]],t[20],...t[2]]},{class:re({[t[3]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":t[1],"mdc-deprecated-list-item--selected":t[0],"mdc-deprecated-list-item--disabled":t[9],"mdc-menu-item--selected":!t[21]&&"menuitem"===t[8]&&t[0],"smui-menu-item--non-interactive":t[6],...t[16]})},{style:Object.entries(t[17]).map(J_).concat([t[4]]).join(" ")},t[21]&&t[1]?{"aria-current":"page"}:{},t[21]?{}:{role:t[8]},t[21]||"option"!==t[8]?{}:{"aria-selected":t[0]?"true":"false"},t[21]||"radio"!==t[8]&&"checkbox"!==t[8]?{}:{"aria-checked":t[14]&&t[14].checked?"true":"false"},t[21]?{}:{"aria-disabled":t[9]?"true":"false"},{"data-menu-item-skip-restore-focus":t[10]||void 0},{tabindex:t[19]},{href:t[11]},t[18],t[27]];var o=t[12];function a(t){let e={$$slots:{default:[W_]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return o&&(e=new o(a(t)),t[33](e),e.$on("click",t[13]),e.$on("keydown",t[25]),e.$on("SMUIGenericInput:mount",t[26]),e.$on("SMUIGenericInput:unmount",t[34])),{c(){e&&Ct(e.$$.fragment),i=N()},m(t,n){e&&xt(e,t,n),x(t,i,n),s=!0},p(t,n){const s=167726975&n[0]?Tt(r,[30425703&n[0]&&{use:[...t[6]?[]:[[Ii,{ripple:!t[14],unbounded:!1,color:(t[1]||t[0])&&null==t[5]?"primary":t[5],disabled:t[9],addClass:t[22],removeClass:t[23],addStyle:t[24]}]],t[20],...t[2]]},2163531&n[0]&&{class:re({[t[3]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":t[1],"mdc-deprecated-list-item--selected":t[0],"mdc-deprecated-list-item--disabled":t[9],"mdc-menu-item--selected":!t[21]&&"menuitem"===t[8]&&t[0],"smui-menu-item--non-interactive":t[6],...t[16]})},131088&n[0]&&{style:Object.entries(t[17]).map(J_).concat([t[4]]).join(" ")},2097154&n[0]&&St(t[21]&&t[1]?{"aria-current":"page"}:{}),2097408&n[0]&&St(t[21]?{}:{role:t[8]}),2097409&n[0]&&St(t[21]||"option"!==t[8]?{}:{"aria-selected":t[0]?"true":"false"}),2113792&n[0]&&St(t[21]||"radio"!==t[8]&&"checkbox"!==t[8]?{}:{"aria-checked":t[14]&&t[14].checked?"true":"false"}),2097664&n[0]&&St(t[21]?{}:{"aria-disabled":t[9]?"true":"false"}),1024&n[0]&&{"data-menu-item-skip-restore-focus":t[10]||void 0},524288&n[0]&&{tabindex:t[19]},2048&n[0]&&{href:t[11]},262144&n[0]&&St(t[18]),134217728&n[0]&&St(t[27])]):{};if(128&n[0]|16&n[1]&&(s.$$scope={dirty:n,ctx:t}),o!==(o=t[12])){if(e){yt();const t=e;$t(t.$$.fragment,1,0,(()=>{kt(t,1)})),vt()}o?(e=new o(a(t)),t[33](e),e.$on("click",t[13]),e.$on("keydown",t[25]),e.$on("SMUIGenericInput:mount",t[26]),e.$on("SMUIGenericInput:unmount",t[34]),Ct(e.$$.fragment),bt(e.$$.fragment,1),xt(e,i.parentNode,i)):e=null}else o&&e.$set(s)},i(t){s||(e&&bt(e.$$.fragment,t),s=!0)},o(t){e&&$t(e.$$.fragment,t),s=!1},d(n){t[33](null),n&&k(i),e&&kt(e,n)}}}let Y_=0;const J_=([t,e])=>`${t}: ${e};`;function Q_(t,e,i){let s;const r=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","action","getPrimaryText","getElement"];let o=v(e,r),{$$slots:a={},$$scope:c}=e;var l;const u=ue(W());let d=()=>{};let{use:h=[]}=e,{class:p=""}=e,{style:f=""}=e,{color:m}=e,{nonInteractive:g=null!==(l=Q("SMUI:list:nonInteractive"))&&void 0!==l&&l}=e;J("SMUI:list:nonInteractive",void 0);let{ripple:b=!g}=e,{activated:$=!1}=e,{role:I=Q("SMUI:list:item:role")}=e;J("SMUI:list:item:role",void 0);let _,E,w,{selected:T=!1}=e,{disabled:S=!1}=e,{skipRestoreFocus:A=!1}=e,{tabindex:C=d}=e,{inputId:x="SMUI-form-field-list-"+Y_++}=e,{href:k}=e,O={},L={},R={},N=Q("SMUI:list:item:nav"),{component:D=(N?k?un:En:$n)}=e;function M(t){return t in O?O[t]:z().classList.contains(t)}function P(t){O[t]||i(16,O[t]=!0,O)}function F(t){t in O&&!O[t]||i(16,O[t]=!1,O)}function U(t){var e;return t in R?null!==(e=R[t])&&void 0!==e?e:null:z().getAttribute(t)}function V(t,e){R[t]!==e&&i(18,R[t]=e,R)}function B(t){t in R&&null==R[t]||i(18,R[t]=void 0,R)}function H(){let t=!0,e=_.getElement();for(;e.nextElementSibling;)if(e=e.nextElementSibling,1===e.nodeType&&e.classList.contains("mdc-deprecated-list-item")){const n=e.attributes.getNamedItem("tabindex");if(n&&"0"===n.value){t=!1;break}}t&&i(19,s=0)}function j(t){S||oe(z(),"SMUI:action",t)}function q(){var t,e,n;const i=z(),s=i.querySelector(".mdc-deprecated-list-item__primary-text");if(s)return null!==(t=s.textContent)&&void 0!==t?t:"";const r=i.querySelector(".mdc-deprecated-list-item__text");return r?null!==(e=r.textContent)&&void 0!==e?e:"":null!==(n=i.textContent)&&void 0!==n?n:""}function z(){return _.getElement()}J("SMUI:generic:input:props",{id:x}),J("SMUI:separator:context",void 0),X((()=>{if(!T&&!g){let t=!0,e=_;for(;e.previousSibling;)if(e=e.previousSibling,1===e.nodeType&&e.classList.contains("mdc-deprecated-list-item")&&!e.classList.contains("mdc-deprecated-list-item--disabled")){t=!1;break}t&&(w=window.requestAnimationFrame(H))}const t={_smui_list_item_accessor:!0,get element(){return z()},get selected(){return T},set selected(t){i(0,T=t)},hasClass:M,addClass:P,removeClass:F,getAttr:U,addAttr:V,removeAttr:B,getPrimaryText:q,get checked(){var t;return null!==(t=E&&E.checked)&&void 0!==t&&t},set checked(t){E&&i(14,E.checked=!!t,E)},get hasCheckbox(){return!(!E||!("_smui_checkbox_accessor"in E))},get hasRadio(){return!(!E||!("_smui_radio_accessor"in E))},activateRipple(){E&&E.activateRipple()},deactivateRipple(){E&&E.deactivateRipple()},getValue:()=>o.value,action:j,get tabindex(){return s},set tabindex(t){i(28,C=t)},get disabled(){return S},get activated(){return $},set activated(t){i(1,$=t)}};return oe(z(),"SMUIListItem:mount",t),()=>{oe(z(),"SMUIListItem:unmount",t)}})),Y((()=>{w&&window.cancelAnimationFrame(w)}));return t.$$set=t=>{e=n(n({},e),y(t)),i(27,o=v(e,r)),"use"in t&&i(2,h=t.use),"class"in t&&i(3,p=t.class),"style"in t&&i(4,f=t.style),"color"in t&&i(5,m=t.color),"nonInteractive"in t&&i(6,g=t.nonInteractive),"ripple"in t&&i(7,b=t.ripple),"activated"in t&&i(1,$=t.activated),"role"in t&&i(8,I=t.role),"selected"in t&&i(0,T=t.selected),"disabled"in t&&i(9,S=t.disabled),"skipRestoreFocus"in t&&i(10,A=t.skipRestoreFocus),"tabindex"in t&&i(28,C=t.tabindex),"inputId"in t&&i(29,x=t.inputId),"href"in t&&i(11,k=t.href),"component"in t&&i(12,D=t.component),"$$scope"in t&&i(35,c=t.$$scope)},t.$$.update=()=>{268452417&t.$$.dirty[0]&&i(19,s=C===d?g||S||!(T||E&&E.checked)?-1:0:C)},[T,$,h,p,f,m,g,b,I,S,A,k,D,j,E,_,O,L,R,s,u,N,P,F,function(t,e){L[t]!=e&&(""===e||null==e?(delete L[t],i(17,L)):i(17,L[t]=e,L))},function(t){const e="Enter"===t.key,n="Space"===t.key;(e||n)&&j(t)},function(t){("_smui_checkbox_accessor"in t.detail||"_smui_radio_accessor"in t.detail)&&i(14,E=t.detail)},o,C,x,q,z,a,function(t){et[t?"unshift":"push"]((()=>{_=t,i(15,_)}))},()=>i(14,E=void 0),c]}var Z_=Ae({class:"mdc-deprecated-list-item__text",component:En});function tE(t){let e,i,s,a,c,l;const u=t[8].default,d=h(u,t,t[7],null);let p=[{class:i=re({[t[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":t[4]})},t[5]],y={};for(let t=0;t<p.length;t+=1)y=n(y,p[t]);return{c(){e=O("span"),d&&d.c(),P(e,y)},m(n,i){x(n,e,i),d&&d.m(e,null),t[9](e),a=!0,c||(l=[$(s=he.call(null,e,t[0])),$(t[3].call(null,e))],c=!0)},p(t,[n]){d&&d.p&&(!a||128&n)&&m(d,u,t,t[7],a?f(u,t[7],n,null):g(t[7]),null),P(e,y=Tt(p,[(!a||2&n&&i!==(i=re({[t[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":t[4]})))&&{class:i},32&n&&t[5]])),s&&o(s.update)&&1&n&&s.update.call(null,t[0])},i(t){a||(bt(d,t),a=!0)},o(t){$t(d,t),a=!1},d(n){n&&k(e),d&&d.d(n),t[9](null),c=!1,r(l)}}}function eE(t,e,i){const s=["use","class","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;const c=ue(W());let l,{use:u=[]}=e,{class:d=""}=e,h=Q("SMUI:list:graphic:menu-selection-group");return t.$$set=t=>{e=n(n({},e),y(t)),i(5,r=v(e,s)),"use"in t&&i(0,u=t.use),"class"in t&&i(1,d=t.class),"$$scope"in t&&i(7,a=t.$$scope)},[u,d,l,c,h,r,function(){return l},a,o,function(t){et[t?"unshift":"push"]((()=>{l=t,i(2,l)}))}]}Ae({class:"mdc-deprecated-list-item__primary-text",component:En}),Ae({class:"mdc-deprecated-list-item__secondary-text",component:En});function nE(t){let e,i,s;const r=[{use:[t[9],...t[0]]},{class:re({[t[1]]:!0,"mdc-deprecated-list-divider":!0,"mdc-deprecated-list-divider--padded":t[2],"mdc-deprecated-list-divider--inset":t[3],"mdc-deprecated-list-divider--inset-leading":t[4],"mdc-deprecated-list-divider--inset-trailing":t[5],"mdc-deprecated-list-divider--inset-padding":t[6]})},{role:"separator"},t[10]];var o=t[7];function a(t){let e={};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return o&&(e=new o(a()),t[12](e)),{c(){e&&Ct(e.$$.fragment),i=N()},m(t,n){e&&xt(e,t,n),x(t,i,n),s=!0},p(t,[n]){const s=1663&n?Tt(r,[513&n&&{use:[t[9],...t[0]]},126&n&&{class:re({[t[1]]:!0,"mdc-deprecated-list-divider":!0,"mdc-deprecated-list-divider--padded":t[2],"mdc-deprecated-list-divider--inset":t[3],"mdc-deprecated-list-divider--inset-leading":t[4],"mdc-deprecated-list-divider--inset-trailing":t[5],"mdc-deprecated-list-divider--inset-padding":t[6]})},r[2],1024&n&&St(t[10])]):{};if(o!==(o=t[7])){if(e){yt();const t=e;$t(t.$$.fragment,1,0,(()=>{kt(t,1)})),vt()}o?(e=new o(a()),t[12](e),Ct(e.$$.fragment),bt(e.$$.fragment,1),xt(e,i.parentNode,i)):e=null}else o&&e.$set(s)},i(t){s||(e&&bt(e.$$.fragment,t),s=!0)},o(t){e&&$t(e.$$.fragment,t),s=!1},d(n){t[12](null),n&&k(i),e&&kt(e,n)}}}function iE(t,e,i){const s=["use","class","padded","inset","insetLeading","insetTrailing","insetPadding","component","getElement"];let r=v(e,s);const o=ue(W());let a,{use:c=[]}=e,{class:l=""}=e,{padded:u=!1}=e,{inset:d=!1}=e,{insetLeading:h=!1}=e,{insetTrailing:p=!1}=e,{insetPadding:f=!1}=e,m=Q("SMUI:list:item:nav"),g=Q("SMUI:separator:context"),{component:b=(m||"list"!==g?vn:$n)}=e;return t.$$set=t=>{e=n(n({},e),y(t)),i(10,r=v(e,s)),"use"in t&&i(0,c=t.use),"class"in t&&i(1,l=t.class),"padded"in t&&i(2,u=t.padded),"inset"in t&&i(3,d=t.inset),"insetLeading"in t&&i(4,h=t.insetLeading),"insetTrailing"in t&&i(5,p=t.insetTrailing),"insetPadding"in t&&i(6,f=t.insetPadding),"component"in t&&i(7,b=t.component)},[c,l,u,d,h,p,f,b,a,o,r,function(){return a.getElement()},function(t){et[t?"unshift":"push"]((()=>{a=t,i(8,a)}))}]}Ae({class:"mdc-deprecated-list-item__meta",component:En}),Ae({class:"mdc-deprecated-list-group",component:hn}),Ae({class:"mdc-deprecated-list-group__subheader",component:mn});const sE=class extends Lt{constructor(t){super(),Ot(this,t,Q_,X_,a,{use:2,class:3,style:4,color:5,nonInteractive:6,ripple:7,activated:1,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,action:13,getPrimaryText:30,getElement:31},null,[-1,-1])}get action(){return this.$$.ctx[13]}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}},rE=class extends Lt{constructor(t){super(),Ot(this,t,eE,tE,a,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}},oE=class extends Lt{constructor(t){super(),Ot(this,t,iE,nE,a,{use:0,class:1,padded:2,inset:3,insetLeading:4,insetTrailing:5,insetPadding:6,component:7,getElement:11})}get getElement(){return this.$$.ctx[11]}};class aE{constructor(t,e,n,i){this.value=new Uint8Array(4);try{this.value[0]=t,this.value[1]=e,this.value[2]=n,this.value[3]=i}catch(t){throw t}}}class cE{constructor(t){if(t.length>256)throw"Array exceeds the 256 color limit.";this.colors=t}genImage(t){return new Promise(((e,n)=>{let i=new Image;i.onload=()=>{let t=document.createElement("canvas");t.height=i.height,t.width=i.width;let s=t.getContext("2d");s.drawImage(i,0,0);let r=s.getImageData(0,0,t.width,t.height);const o=r.data;for(let t=0;t<o.length;t+=4){if(0===o[t+3])continue;let e=o[t];void 0===this.colors[e]&&n(new Error(`Palette does not have a color in ${e}.`)),o[t]=this.colors[e].value[0],o[t+1]=this.colors[e].value[1],o[t+2]=this.colors[e].value[2]}s.putImageData(r,0,0),e(t.toDataURL())},i.src=t}))}}function lE(t){let e,n;return e=new M_({props:{$$slots:{default:[hE]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};16400&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function uE(t){let e,n=t[4].displayName+"";return{c(){e=L(n)},m(t,n){x(t,e,n)},p(t,i){16&i&&n!==(n=t[4].displayName+"")&&U(e,n)},d(t){t&&k(e)}}}function dE(t){let e,n=t[4].email+"";return{c(){e=L(n)},m(t,n){x(t,e,n)},p(t,i){16&i&&n!==(n=t[4].email+"")&&U(e,n)},d(t){t&&k(e)}}}function hE(t){let e,n,i,s;return e=new P_({props:{$$slots:{default:[uE]},$$scope:{ctx:t}}}),i=new F_({props:{$$slots:{default:[dE]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment)},m(t,r){xt(e,t,r),x(t,n,r),xt(i,t,r),s=!0},p(t,n){const s={};16400&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const r={};16400&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){s||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),s=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),s=!1},d(t){kt(e,t),t&&k(n),kt(i,t)}}}function pE(t){let e,n,i,s;return e=new sE({props:{$$slots:{default:[yE]},$$scope:{ctx:t}}}),e.$on("SMUI:action",t[11]),i=new sE({props:{$$slots:{default:[$E]},$$scope:{ctx:t}}}),i.$on("SMUI:action",t[8]),{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment)},m(t,r){xt(e,t,r),x(t,n,r),xt(i,t,r),s=!0},p(t,n){const s={};16384&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const r={};16384&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){s||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),s=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),s=!1},d(t){kt(e,t),t&&k(n),kt(i,t)}}}function fE(t){let e,n;return e=new sE({props:{$$slots:{default:[EE]},$$scope:{ctx:t}}}),e.$on("SMUI:action",t[7]),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};16384&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function mE(t){let e;return{c(){e=L("publish")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function gE(t){let e;return{c(){e=L("Upload Palette")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function yE(t){let e,n,i,s;return e=new rE({props:{class:"material-icons",$$slots:{default:[mE]},$$scope:{ctx:t}}}),i=new Z_({props:{$$slots:{default:[gE]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment)},m(t,r){xt(e,t,r),x(t,n,r),xt(i,t,r),s=!0},p(t,n){const s={};16384&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const r={};16384&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){s||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),s=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),s=!1},d(t){kt(e,t),t&&k(n),kt(i,t)}}}function vE(t){let e;return{c(){e=L("logout")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function bE(t){let e;return{c(){e=L("Sign Out")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function $E(t){let e,n,i,s;return e=new rE({props:{class:"material-icons",$$slots:{default:[vE]},$$scope:{ctx:t}}}),i=new Z_({props:{$$slots:{default:[bE]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment)},m(t,r){xt(e,t,r),x(t,n,r),xt(i,t,r),s=!0},p(t,n){const s={};16384&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const r={};16384&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){s||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),s=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),s=!1},d(t){kt(e,t),t&&k(n),kt(i,t)}}}function IE(t){let e;return{c(){e=L("account_circle")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function _E(t){let e;return{c(){e=L("Sign in with Google")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function EE(t){let e,n,i,s;return e=new rE({props:{class:"material-icons",$$slots:{default:[IE]},$$scope:{ctx:t}}}),i=new Z_({props:{$$slots:{default:[_E]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment)},m(t,r){xt(e,t,r),x(t,n,r),xt(i,t,r),s=!0},p(t,n){const s={};16384&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const r={};16384&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){s||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),s=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),s=!1},d(t){kt(e,t),t&&k(n),kt(i,t)}}}function wE(t){let e;return{c(){e=L("collections")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function TE(t){let e;return{c(){e=L("Palette Collection")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function SE(t){let e,n,i,s;return e=new rE({props:{class:"material-icons",$$slots:{default:[wE]},$$scope:{ctx:t}}}),i=new Z_({props:{$$slots:{default:[TE]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment)},m(t,r){xt(e,t,r),x(t,n,r),xt(i,t,r),s=!0},p(t,n){const s={};16384&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const r={};16384&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){s||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),s=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),s=!1},d(t){kt(e,t),t&&k(n),kt(i,t)}}}function AE(t){let e,n,i,s,r,o,a;const c=[fE,pE],l=[];function u(t,e){return null==t[4]?0:1}return e=u(t),n=l[e]=c[e](t),s=new oE({}),o=new sE({props:{selected:0==t[1],$$slots:{default:[SE]},$$scope:{ctx:t}}}),o.$on("SMUI:action",t[12]),{c(){n.c(),i=R(),Ct(s.$$.fragment),r=R(),Ct(o.$$.fragment)},m(t,n){l[e].m(t,n),x(t,i,n),xt(s,t,n),x(t,r,n),xt(o,t,n),a=!0},p(t,s){let r=e;e=u(t),e===r?l[e].p(t,s):(yt(),$t(l[r],1,1,(()=>{l[r]=null})),vt(),n=l[e],n?n.p(t,s):(n=l[e]=c[e](t),n.c()),bt(n,1),n.m(i.parentNode,i));const a={};2&s&&(a.selected=0==t[1]),16384&s&&(a.$$scope={dirty:s,ctx:t}),o.$set(a)},i(t){a||(bt(n),bt(s.$$.fragment,t),bt(o.$$.fragment,t),a=!0)},o(t){$t(n),$t(s.$$.fragment,t),$t(o.$$.fragment,t),a=!1},d(t){l[e].d(t),t&&k(i),kt(s,t),t&&k(r),kt(o,t)}}}function CE(t){let e,n;return e=new G_({props:{singleSelection:!0,$$slots:{default:[AE]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};16434&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function xE(t){let e,n,i,s=null!=t[4]&&lE(t);return n=new D_({props:{$$slots:{default:[CE]},$$scope:{ctx:t}}}),{c(){s&&s.c(),e=R(),Ct(n.$$.fragment)},m(t,r){s&&s.m(t,r),x(t,e,r),xt(n,t,r),i=!0},p(t,i){null!=t[4]?s?(s.p(t,i),16&i&&bt(s,1)):(s=lE(t),s.c(),bt(s,1),s.m(e.parentNode,e)):s&&(yt(),$t(s,1,1,(()=>{s=null})),vt());const r={};16434&i&&(r.$$scope={dirty:i,ctx:t}),n.$set(r)},i(t){i||(bt(s),bt(n.$$.fragment,t),i=!0)},o(t){$t(s),$t(n.$$.fragment,t),i=!1},d(t){s&&s.d(t),t&&k(e),kt(n,t)}}}function kE(t){let e,n,i,s,r,o,a,c,l,u;e=new Po({props:{dismiss$class:"material-icons"}}),t[9](e);function d(e){t[13](e)}i=new g_({props:{}}),t[10](i);let h={variant:t[2]?"modal":void 0,$$slots:{default:[xE]},$$scope:{ctx:t}};return void 0!==t[0]&&(h.open=t[0]),o=new N_({props:h}),et.push((()=>At(o,"open",d))),l=new H_({}),{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment),s=R(),r=O("div"),Ct(o.$$.fragment),c=R(),Ct(l.$$.fragment),M(r,"class","svelte-bc1tbi"),H(r,"fullHeight",!t[2])},m(t,a){xt(e,t,a),x(t,n,a),xt(i,t,a),x(t,s,a),x(t,r,a),xt(o,r,null),S(r,c),xt(l,r,null),u=!0},p(t,[n]){e.$set({});i.$set({});const s={};4&n&&(s.variant=t[2]?"modal":void 0),16434&n&&(s.$$scope={dirty:n,ctx:t}),!a&&1&n&&(a=!0,s.open=t[0],ct((()=>a=!1))),o.$set(s),4&n&&H(r,"fullHeight",!t[2])},i(t){u||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),bt(o.$$.fragment,t),bt(l.$$.fragment,t),u=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),$t(o.$$.fragment,t),$t(l.$$.fragment,t),u=!1},d(a){t[9](null),kt(e,a),a&&k(n),t[10](null),kt(i,a),a&&k(s),a&&k(r),kt(o),kt(l)}}}function OE(t,e,n){let i,{smallScreen:s=!1}=e,{drawerOpen:r=!0}=e,{active:o}=e,a=null;N$(zI,(t=>{n(4,a=t||null)}));let c,l=document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept",".cfpl"),l.addEventListener("change",(async()=>{if(0==l.files.length)return;const t=await l.files[0].arrayBuffer();try{const e=function(t){const e=new TextDecoder,n=new Uint8Array(t);if(8344!=n.length)throw`Incorrect file size! Needs to be 8344B, is ${n.length}B.`;if("IMPLCF\0\0"!=e.decode(n.subarray(0,8)))throw"Incorrect header!";let i=[];for(let t=148;t<1172;t+=4)i.push(new aE(n[t+3],n[t+2],n[t+1],n[t]));let s=e.decode(n.subarray(20,52)).replaceAll("\0",""),r=e.decode(n.subarray(52,84)).replaceAll("\0",""),o=e.decode(n.subarray(84,148)).replaceAll("\0","");return{pal:new cE(i),name:s,auth:r,desc:o,char:n[16],cmpl:t}}(t);c.openUpload(e)}catch(t){i.push({label:`${t}`,dismissButton:!0})}finally{n(5,l.value="",l)}}));return t.$$set=t=>{"smallScreen"in t&&n(2,s=t.smallScreen),"drawerOpen"in t&&n(0,r=t.drawerOpen),"active"in t&&n(1,o=t.active)},[r,o,s,i,a,l,c,function(){return new Promise(((t,e)=>{const n=new A$;uI(zI,n).then((e=>{i.push({label:`Signed in as ${e.user.displayName}.`,dismissButton:!0}),t()})).catch((t=>{i.push({label:`${t.message}`,dismissButton:!0}),e(t)}))}))},function(){return new Promise(((t,e)=>{(function(t){return Zo(t).signOut()})(zI).then((()=>{i.push({label:"Signed out.",dismissButton:!0}),t()})).catch((t=>{i.push({label:`${t.message}`,dismissButton:!0}),e(t)}))}))},function(t){et[t?"unshift":"push"]((()=>{i=t,n(3,i)}))},function(t){et[t?"unshift":"push"]((()=>{c=t,n(6,c)}))},()=>{l.click()},()=>{n(1,o=0)},function(t){r=t,n(0,r)}]}class LE extends Lt{constructor(t){super(),Ot(this,t,OE,kE,a,{smallScreen:2,drawerOpen:0,active:1})}}function RE(t){let e,i,s,a,c,l;const u=t[9].default,d=h(u,t,t[8],null);let p=[{class:i=re({[t[1]]:!0,"mdc-image-list":!0,"mdc-image-list--masonry":t[2],"mdc-image-list--with-text-protection":t[3]})},t[6]],y={};for(let t=0;t<p.length;t+=1)y=n(y,p[t]);return{c(){e=O("ul"),d&&d.c(),P(e,y)},m(n,i){x(n,e,i),d&&d.m(e,null),t[10](e),a=!0,c||(l=[$(s=he.call(null,e,t[0])),$(t[5].call(null,e))],c=!0)},p(t,[n]){d&&d.p&&(!a||256&n)&&m(d,u,t,t[8],a?f(u,t[8],n,null):g(t[8]),null),P(e,y=Tt(p,[(!a||14&n&&i!==(i=re({[t[1]]:!0,"mdc-image-list":!0,"mdc-image-list--masonry":t[2],"mdc-image-list--with-text-protection":t[3]})))&&{class:i},64&n&&t[6]])),s&&o(s.update)&&1&n&&s.update.call(null,t[0])},i(t){a||(bt(d,t),a=!0)},o(t){$t(d,t),a=!1},d(n){n&&k(e),d&&d.d(n),t[10](null),c=!1,r(l)}}}function NE(t,e,i){const s=["use","class","masonry","withTextProtection","getElement"];let r=v(e,s),{$$slots:o={},$$scope:a}=e;const c=ue(W());let l,{use:u=[]}=e,{class:d=""}=e,{masonry:h=!1}=e,{withTextProtection:p=!1}=e;return J("SMUI:label:context","image-list"),t.$$set=t=>{e=n(n({},e),y(t)),i(6,r=v(e,s)),"use"in t&&i(0,u=t.use),"class"in t&&i(1,d=t.class),"masonry"in t&&i(2,h=t.masonry),"withTextProtection"in t&&i(3,p=t.withTextProtection),"$$scope"in t&&i(8,a=t.$$scope)},[u,d,h,p,l,c,r,function(){return l},a,o,function(t){et[t?"unshift":"push"]((()=>{l=t,i(4,l)}))}]}class DE extends Lt{constructor(t){super(),Ot(this,t,NE,RE,a,{use:0,class:1,masonry:2,withTextProtection:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}var ME=Ae({class:"mdc-image-list__item",component:$n});Ae({class:"mdc-image-list__image-aspect-container",component:hn});var PE=Ae({class:"mdc-image-list__image",component:bn});function FE(t){const e=t-1;return e*e*e+1}function UE(t,{delay:e=0,duration:n=400,easing:i=FE,x:s=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),c=+a.opacity,l="none"===a.transform?"":a.transform,u=c*(1-o);return{delay:e,duration:n,easing:i,css:(t,e)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*s}px, ${(1-t)*r}px);\n\t\t\topacity: ${c-u*e}`}}function VE(t,e,n){const i=t.slice();return i[13]=e[n],i[14]=e,i[15]=n,i}function BE(t){let e,n,i,s,r,o=t[13].data.name+"",a=t[13].data.auth+"";return{c(){e=L(o),n=R(),i=O("span"),s=L("- "),r=L(a),B(i,"margin","0"),B(i,"color","#888")},m(t,o){x(t,e,o),x(t,n,o),x(t,i,o),S(i,s),S(i,r)},p(t,n){2&n&&o!==(o=t[13].data.name+"")&&U(e,o),2&n&&a!==(a=t[13].data.auth+"")&&U(r,a)},d(t){t&&k(e),t&&k(n),t&&k(i)}}}function HE(t){let e,n=t[13].data.desc+"";return{c(){e=L(n)},m(t,n){x(t,e,n)},p(t,i){2&i&&n!==(n=t[13].data.desc+"")&&U(e,n)},d(t){t&&k(e)}}}function jE(t){let e;return{c(){e=L("file_download")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function qE(t){let e,n;return e=new Ai({props:{class:"material-icons",$$slots:{default:[zE]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[5](t[13])})),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(n,i){t=n;const s={};65536&i&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function zE(t){let e;return{c(){e=L("delete")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function GE(t){let e,n,i,s,r,o,a,c,u,d,h,p;e=new Hi({props:{$$slots:{default:[BE]},$$scope:{ctx:t}}}),i=new ji({props:{$$slots:{default:[HE]},$$scope:{ctx:t}}}),d=new Ai({props:{class:"material-icons",$$slots:{default:[jE]},$$scope:{ctx:t}}});let f=null!==t[0]&&t[0].uid===t[13].data.poster&&qE(t);return{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment),s=R(),r=O("div"),o=O("img"),c=R(),u=O("div"),Ct(d.$$.fragment),h=R(),f&&f.c(),M(o,"class","game-icon svelte-r4ussl"),l(o.src,a="/assets/bbcf_icon.png")||M(o,"src","/assets/bbcf_icon.png"),M(o,"alt","BBCF"),M(u,"class","buttons svelte-r4ussl"),M(r,"class","bottom-bar svelte-r4ussl")},m(t,a){xt(e,t,a),x(t,n,a),xt(i,t,a),x(t,s,a),x(t,r,a),S(r,o),S(r,c),S(r,u),xt(d,u,null),S(u,h),f&&f.m(u,null),p=!0},p(t,n){const s={};65538&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const r={};65538&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r);const o={};65536&n&&(o.$$scope={dirty:n,ctx:t}),d.$set(o),null!==t[0]&&t[0].uid===t[13].data.poster?f?(f.p(t,n),3&n&&bt(f,1)):(f=qE(t),f.c(),bt(f,1),f.m(u,null)):f&&(yt(),$t(f,1,1,(()=>{f=null})),vt())},i(t){p||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),bt(d.$$.fragment,t),bt(f),p=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),$t(d.$$.fragment,t),$t(f),p=!1},d(t){kt(e,t),t&&k(n),kt(i,t),t&&k(s),t&&k(r),kt(d),f&&f.d()}}}function KE(t){let e,n,i,s,o,a,c,l,u;function d(){return t[6](t[13],t[14],t[15])}function h(){return t[7](t[13],t[14],t[15])}return n=new PE({props:{src:t[13].data.img}}),s=new Bi({props:{class:"image-overlay "+(t[13].hovering?"active":""),variant:"unelevated",$$slots:{default:[GE]},$$scope:{ctx:t}}}),{c(){e=O("div"),Ct(n.$$.fragment),i=R(),Ct(s.$$.fragment),a=R(),M(e,"class","pal-image svelte-r4ussl")},m(t,r){x(t,e,r),xt(n,e,null),S(e,i),xt(s,e,null),x(t,a,r),c=!0,l||(u=[D(e,"mouseenter",d),D(e,"mouseleave",h)],l=!0)},p(e,i){t=e;const r={};2&i&&(r.src=t[13].data.img),n.$set(r);const o={};2&i&&(o.class="image-overlay "+(t[13].hovering?"active":"")),65539&i&&(o.$$scope={dirty:i,ctx:t}),s.$set(o)},i(t){c||(bt(n.$$.fragment,t),bt(s.$$.fragment,t),o||at((()=>{o=_t(e,UE,{y:20}),o.start()})),c=!0)},o(t){$t(n.$$.fragment,t),$t(s.$$.fragment,t),c=!1},d(t){t&&k(e),kt(n),kt(s),t&&k(a),l=!1,r(u)}}}function WE(t,e){let n,i,s;return i=new ME({props:{$$slots:{default:[KE]},$$scope:{ctx:e}}}),{key:t,first:null,c(){n=N(),Ct(i.$$.fragment),this.first=n},m(t,e){x(t,n,e),xt(i,t,e),s=!0},p(t,n){e=t;const s={};65539&n&&(s.$$scope={dirty:n,ctx:e}),i.$set(s)},i(t){s||(bt(i.$$.fragment,t),s=!0)},o(t){$t(i.$$.fragment,t),s=!1},d(t){t&&k(n),kt(i,t)}}}function XE(t){let e,n,i=[],s=new Map,r=t[1];const o=t=>t[13].id;for(let e=0;e<r.length;e+=1){let n=VE(t,r,e),a=o(n);s.set(a,i[e]=WE(a,n))}return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=N()},m(t,s){for(let e=0;e<i.length;e+=1)i[e].m(t,s);x(t,e,s),n=!0},p(t,n){7&n&&(r=t[1],yt(),i=function(t,e,n,i,s,r,o,a,c,l,u,d){let h=t.length,p=r.length,f=h;const m={};for(;f--;)m[t[f].key]=f;const g=[],y=new Map,v=new Map;for(f=p;f--;){const t=d(s,r,f),a=n(t);let c=o.get(a);c?i&&c.p(t,e):(c=l(a,t),c.c()),y.set(a,g[f]=c),a in m&&v.set(a,Math.abs(f-m[a]))}const b=new Set,$=new Set;function I(t){bt(t,1),t.m(a,u),o.set(t.key,t),u=t.first,p--}for(;h&&p;){const e=g[p-1],n=t[h-1],i=e.key,s=n.key;e===n?(u=e.first,h--,p--):y.has(s)?!o.has(i)||b.has(i)?I(e):$.has(s)?h--:v.get(i)>v.get(s)?($.add(i),I(e)):(b.add(s),h--):(c(n,o),h--)}for(;h--;){const e=t[h];y.has(e.key)||c(e,o)}for(;p;)I(g[p-1]);return g}(i,n,o,1,t,r,s,e.parentNode,wt,WE,e,VE),vt())},i(t){if(!n){for(let t=0;t<r.length;t+=1)bt(i[t]);n=!0}},o(t){for(let t=0;t<i.length;t+=1)$t(i[t]);n=!1},d(t){for(let e=0;e<i.length;e+=1)i[e].d(t);t&&k(e)}}}function YE(t){let e,n,i;return n=new DE({props:{class:"pal-gallery",masonry:!0,$$slots:{default:[XE]},$$scope:{ctx:t}}}),{c(){e=O("div"),Ct(n.$$.fragment),M(e,"class","pal-gallery-container svelte-r4ussl")},m(t,s){x(t,e,s),xt(n,e,null),i=!0},p(t,[e]){const i={};65539&e&&(i.$$scope={dirty:e,ctx:t}),n.$set(i)},i(t){i||(bt(n.$$.fragment,t),i=!0)},o(t){$t(n.$$.fragment,t),i=!1},d(t){t&&k(e),kt(n)}}}function JE(t,e,n){let i=null;N$(zI,(async t=>{n(0,i=t||null)}));let{filter:s=""}=e,r=[],o=[];function a(){n(1,o=r.filter((t=>t.data.name.toLowerCase().includes(s.toLowerCase()))))}const c=Uv(),l=Rc(),u=function(t,e,...n){if(t=Zo(t),Tv("collection","path",e),t instanceof Ov){const i=Ep.fromString(e,...n);return Av(i),new Nv(t,null,i)}{if(!(t instanceof Lv||t instanceof Nv))throw new ip(np.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ep.fromString(e,...n));return Av(i),new Nv(t.firestore,null,i)}}(c,"palettes"),d=function(t,...e){for(const n of e)t=n._apply(t);return t}(u,function(t,e="asc"){const n=e,i=ub("orderBy",t);return new gb(i,n)}("createdOn"));async function h(t){await function(t){return bb(xv(t.firestore,Fv),[new um(t._key,Jf.none())])}(Dv(c,"palettes",t))}vb(d,(async t=>{async function e(t,n){let i={img:"",pal:""};try{i.img=await Oc(Lc(l,t)),i.pal=await Oc(Lc(l,n))}catch(s){i=await e(t,n)}finally{return i}}t.docChanges().forEach((t=>{if("added"===t.type){let e=t.doc.data();r.unshift({id:t.doc.id,data:{img:e.img,pal:e.pal,name:e.name,auth:e.auth,desc:e.desc,char:e.char,poster:e.poster,likes:e.likes,createdOn:e.createdOn},hovering:!1})}else if("removed"===t.type){let e=r.findIndex((e=>e.id===t.doc.id));r.splice(e,1)}}));for(let t=0;t<r.length;t++){let n=await e(r[t].data.img,r[t].data.pal);r[t].data.img=n.img,r[t].data.pal=n.pal}a()}));return t.$$set=t=>{"filter"in t&&n(3,s=t.filter)},[i,o,h,s,a,t=>{h(t.id)},(t,e,i)=>{n(1,e[i].hovering=!0,o)},(t,e,i)=>{n(1,e[i].hovering=!1,o)}]}Ae({class:"mdc-image-list__supporting",component:hn});class QE extends Lt{constructor(t){super(),Ot(this,t,JE,YE,a,{filter:3,applyFilter:4})}get applyFilter(){return this.$$.ctx[4]}}function ZE(t){let e,n,i,s;function r(e){t[10](e)}function o(e){t[11](e)}let a={smallScreen:!0};return void 0!==t[2]&&(a.drawerOpen=t[2]),void 0!==t[6]&&(a.active=t[6]),e=new LE({props:a}),et.push((()=>At(e,"drawerOpen",r))),et.push((()=>At(e,"active",o))),{c(){Ct(e.$$.fragment)},m(t,n){xt(e,t,n),s=!0},p(t,s){const r={};!n&&4&s&&(n=!0,r.drawerOpen=t[2],ct((()=>n=!1))),!i&&64&s&&(i=!0,r.active=t[6],ct((()=>i=!1))),e.$set(r)},i(t){s||(bt(e.$$.fragment,t),s=!0)},o(t){$t(e.$$.fragment,t),s=!1},d(t){kt(e,t)}}}function tw(t){let e,n;return e=new Ai({props:{class:"material-icons",$$slots:{default:[ew]},$$scope:{ctx:t}}}),e.$on("click",t[12]),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};1048576&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function ew(t){let e;return{c(){e=L("menu")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function nw(t){let e,n;return e=new Cn({props:{$$slots:{default:[iw]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function iw(t){let e;return{c(){e=L("Palette Grimore")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function sw(t){let e,n,i,s=t[7]&&tw(t),r=(!t[4]||!t[7])&&nw(t);return{c(){s&&s.c(),e=R(),r&&r.c(),n=N()},m(t,o){s&&s.m(t,o),x(t,e,o),r&&r.m(t,o),x(t,n,o),i=!0},p(t,i){t[7]?s?(s.p(t,i),128&i&&bt(s,1)):(s=tw(t),s.c(),bt(s,1),s.m(e.parentNode,e)):s&&(yt(),$t(s,1,1,(()=>{s=null})),vt()),t[4]&&t[7]?r&&(yt(),$t(r,1,1,(()=>{r=null})),vt()):r?144&i&&bt(r,1):(r=nw(t),r.c(),bt(r,1),r.m(n.parentNode,n))},i(t){i||(bt(s),bt(r),i=!0)},o(t){$t(s),$t(r),i=!1},d(t){s&&s.d(t),t&&k(e),r&&r.d(t),t&&k(n)}}}function rw(t){let e,n;return e=new Ai({props:{class:"material-icons",$$slots:{default:[aw]},$$scope:{ctx:t}}}),e.$on("click",t[15]),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};1048576&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function ow(t){let e,n,i,s,r;n=new Bi({props:{class:"solo-paper",elevation:6,$$slots:{default:[lw]},$$scope:{ctx:t}}});let o=t[7]&&uw(t);return{c(){e=O("div"),Ct(n.$$.fragment),i=R(),o&&o.c(),s=N(),M(e,"class","textfield-container svelte-1gd82md"),H(e,"full-width",t[7])},m(t,a){x(t,e,a),xt(n,e,null),x(t,i,a),o&&o.m(t,a),x(t,s,a),r=!0},p(t,i){const r={};1048608&i&&(r.$$scope={dirty:i,ctx:t}),n.$set(r),128&i&&H(e,"full-width",t[7]),t[7]?o?(o.p(t,i),128&i&&bt(o,1)):(o=uw(t),o.c(),bt(o,1),o.m(s.parentNode,s)):o&&(yt(),$t(o,1,1,(()=>{o=null})),vt())},i(t){r||(bt(n.$$.fragment,t),bt(o),r=!0)},o(t){$t(n.$$.fragment,t),$t(o),r=!1},d(t){t&&k(e),kt(n),t&&k(i),o&&o.d(t),t&&k(s)}}}function aw(t){let e;return{c(){e=L("search")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function cw(t){let e;return{c(){e=L("filter_alt")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function lw(t){let e,n,i,s,r;function o(e){t[13](e)}e=new Fi({props:{class:"material-icons",$$slots:{default:[cw]},$$scope:{ctx:t}}});let a={placeholder:"Filter",class:"solo-input"};return void 0!==t[5]&&(a.value=t[5]),i=new Lr({props:a}),et.push((()=>At(i,"value",o))),i.$on("keydown",t[8]),{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment)},m(t,s){xt(e,t,s),x(t,n,s),xt(i,t,s),r=!0},p(t,n){const r={};1048576&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const o={};!s&&32&n&&(s=!0,o.value=t[5],ct((()=>s=!1))),i.$set(o)},i(t){r||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),r=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),r=!1},d(t){kt(e,t),t&&k(n),kt(i,t)}}}function uw(t){let e,n;return e=new Ai({props:{class:"material-icons",$$slots:{default:[dw]},$$scope:{ctx:t}}}),e.$on("click",t[14]),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};1048576&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function dw(t){let e;return{c(){e=L("cancel")},m(t,n){x(t,e,n)},d(t){t&&k(e)}}}function hw(t){let e,n,i,s;const r=[ow,rw],o=[];function a(t,e){return!t[7]||t[4]?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),i=N()},m(t,n){o[e].m(t,n),x(t,i,n),s=!0},p(t,s){let c=e;e=a(t),e===c?o[e].p(t,s):(yt(),$t(o[c],1,1,(()=>{o[c]=null})),vt(),n=o[e],n?n.p(t,s):(n=o[e]=r[e](t),n.c()),bt(n,1),n.m(i.parentNode,i))},i(t){s||(bt(n),s=!0)},o(t){$t(n),s=!1},d(t){o[e].d(t),t&&k(i)}}}function pw(t){let e,n,i,s;return e=new Ln({props:{$$slots:{default:[sw]},$$scope:{ctx:t}}}),i=new Ln({props:{align:"end",toolbar:!0,$$slots:{default:[hw]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment),n=R(),Ct(i.$$.fragment)},m(t,r){xt(e,t,r),x(t,n,r),xt(i,t,r),s=!0},p(t,n){const s={};1048724&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const r={};1048752&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){s||(bt(e.$$.fragment,t),bt(i.$$.fragment,t),s=!0)},o(t){$t(e.$$.fragment,t),$t(i.$$.fragment,t),s=!1},d(t){kt(e,t),t&&k(n),kt(i,t)}}}function fw(t){let e,n;return e=new Tn({props:{$$slots:{default:[pw]},$$scope:{ctx:t}}}),{c(){Ct(e.$$.fragment)},m(t,i){xt(e,t,i),n=!0},p(t,n){const i={};1048756&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(bt(e.$$.fragment,t),n=!0)},o(t){$t(e.$$.fragment,t),n=!1},d(t){kt(e,t)}}}function mw(t){let e,n,i;function s(e){t[17](e)}let r={};return void 0!==t[6]&&(r.active=t[6]),e=new LE({props:r}),et.push((()=>At(e,"active",s))),{c(){Ct(e.$$.fragment)},m(t,n){xt(e,t,n),i=!0},p(t,i){const s={};!n&&64&i&&(n=!0,s.active=t[6],ct((()=>n=!1))),e.$set(s)},i(t){i||(bt(e.$$.fragment,t),i=!0)},o(t){$t(e.$$.fragment,t),i=!1},d(t){kt(e,t)}}}function gw(t){let e,n,i;function s(e){t[18](e)}let r={};return void 0!==t[5]&&(r.filter=t[5]),e=new QE({props:r}),et.push((()=>At(e,"filter",s))),t[19](e),{c(){Ct(e.$$.fragment)},m(t,n){xt(e,t,n),i=!0},p(t,i){const s={};!n&&32&i&&(n=!0,s.filter=t[5],ct((()=>n=!1))),e.$set(s)},i(t){i||(bt(e.$$.fragment,t),i=!0)},o(t){$t(e.$$.fragment,t),i=!1},d(n){t[19](null),kt(e,n)}}}function yw(t){let e,n,i,s=!t[7]&&mw(t),r=0==t[6]&&gw(t);return{c(){s&&s.c(),e=R(),n=O("div"),r&&r.c(),M(n,"class","svelte-1gd82md"),H(n,"app-content-drawer",!t[7])},m(t,o){s&&s.m(t,o),x(t,e,o),x(t,n,o),r&&r.m(n,null),i=!0},p(t,i){t[7]?s&&(yt(),$t(s,1,1,(()=>{s=null})),vt()):s?(s.p(t,i),128&i&&bt(s,1)):(s=mw(t),s.c(),bt(s,1),s.m(e.parentNode,e)),0==t[6]?r?(r.p(t,i),64&i&&bt(r,1)):(r=gw(t),r.c(),bt(r,1),r.m(n,null)):r&&(yt(),$t(r,1,1,(()=>{r=null})),vt()),128&i&&H(n,"app-content-drawer",!t[7])},i(t){i||(bt(s),bt(r),i=!0)},o(t){$t(s),$t(r),i=!1},d(t){s&&s.d(t),t&&k(e),t&&k(n),r&&r.d()}}}function vw(t){let e,n,i,s,r,o,a;at(t[9]);let c=t[7]&&ZE(t);return n=new ye({props:{variant:"standard",color:"background",dense:!0,$$slots:{default:[fw]},$$scope:{ctx:t}}}),t[16](n),s=new Rn({props:{topAppBar:t[1],$$slots:{default:[yw]},$$scope:{ctx:t}}}),{c(){c&&c.c(),e=R(),Ct(n.$$.fragment),i=R(),Ct(s.$$.fragment)},m(l,u){c&&c.m(l,u),x(l,e,u),xt(n,l,u),x(l,i,u),xt(s,l,u),r=!0,o||(a=D(window,"resize",t[9]),o=!0)},p(t,[i]){t[7]?c?(c.p(t,i),128&i&&bt(c,1)):(c=ZE(t),c.c(),bt(c,1),c.m(e.parentNode,e)):c&&(yt(),$t(c,1,1,(()=>{c=null})),vt());const r={};1048756&i&&(r.$$scope={dirty:i,ctx:t}),n.$set(r);const o={};2&i&&(o.topAppBar=t[1]),1048808&i&&(o.$$scope={dirty:i,ctx:t}),s.$set(o)},i(t){r||(bt(c),bt(n.$$.fragment,t),bt(s.$$.fragment,t),r=!0)},o(t){$t(c),$t(n.$$.fragment,t),$t(s.$$.fragment,t),r=!1},d(r){c&&c.d(r),r&&k(e),t[16](null),kt(n,r),r&&k(i),kt(s,r),o=!1,a()}}}function bw(t,e,n){let i,s,r,o,a=!1,c=!1,l="";let u=0;return t.$$.update=()=>{1&t.$$.dirty&&n(7,i=o<900)},[o,s,a,r,c,l,u,i,function(t){"Enter"===(t=t).key&&r.applyFilter()},function(){n(0,o=window.innerWidth)},function(t){a=t,n(2,a)},function(t){u=t,n(6,u)},()=>n(2,a=!a),function(t){l=t,n(5,l)},()=>n(4,c=!c),()=>n(4,c=!c),function(t){et[t?"unshift":"push"]((()=>{s=t,n(1,s)}))},function(t){u=t,n(6,u)},function(t){l=t,n(5,l)},function(t){et[t?"unshift":"push"]((()=>{r=t,n(3,r)}))}]}return new class extends Lt{constructor(t){super(),Ot(this,t,bw,vw,a,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
