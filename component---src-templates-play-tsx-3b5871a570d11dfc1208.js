/*! For license information please see component---src-templates-play-tsx-3b5871a570d11dfc1208.js.LICENSE.txt */
(self.webpackChunktypescriptlang_org=self.webpackChunktypescriptlang_org||[]).push([[556],{9521:function(e,t,n){var r,o=n(6108);!function(e){!function(t){var r="object"==typeof n.g?n.g:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),a=i(e);function i(e,t){return function(n,r){"function"!=typeof e[n]&&Object.defineProperty(e,n,{configurable:!0,writable:!0,value:r}),t&&t(n,r)}}void 0===r.Reflect?r.Reflect=e:a=i(r.Reflect,a),function(e){var t=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,r=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",a=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",i="function"==typeof Object.create,l={__proto__:[]}instanceof Array,s=!i&&!l,c={create:i?function(){return oe(Object.create(null))}:l?function(){return oe({__proto__:null})}:function(){return oe({})},has:s?function(e,n){return t.call(e,n)}:function(e,t){return t in e},get:s?function(e,n){return t.call(e,n)?e[n]:void 0}:function(e,t){return e[t]}},u=Object.getPrototypeOf(Function),p="object"==typeof o&&{}&&"true"==={}.REFLECT_METADATA_USE_MAP_POLYFILL,d=p||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?te():Map,f=p||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?ne():Set,y=new(p||"function"!=typeof WeakMap?re():WeakMap);function m(e,t,n,r){if(R(n)){if(!Z(e))throw new TypeError;if(!q(t))throw new TypeError;return T(e,t)}if(!Z(e))throw new TypeError;if(!z(t))throw new TypeError;if(!z(r)&&!R(r)&&!L(r))throw new TypeError;return L(r)&&(r=void 0),C(e,t,n=U(n),r)}function h(e,t){function n(n,r){if(!z(n))throw new TypeError;if(!R(r)&&!V(r))throw new TypeError;I(e,t,n,r)}return n}function g(e,t,n,r){if(!z(n))throw new TypeError;return R(r)||(r=U(r)),I(e,t,n,r)}function v(e,t,n){if(!z(t))throw new TypeError;return R(n)||(n=U(n)),S(e,t,n)}function _(e,t,n){if(!z(t))throw new TypeError;return R(n)||(n=U(n)),j(e,t,n)}function b(e,t,n){if(!z(t))throw new TypeError;return R(n)||(n=U(n)),O(e,t,n)}function w(e,t,n){if(!z(t))throw new TypeError;return R(n)||(n=U(n)),P(e,t,n)}function E(e,t){if(!z(e))throw new TypeError;return R(t)||(t=U(t)),A(e,t)}function x(e,t){if(!z(e))throw new TypeError;return R(t)||(t=U(t)),M(e,t)}function k(e,t,n){if(!z(t))throw new TypeError;R(n)||(n=U(n));var r=N(t,n,!1);if(R(r))return!1;if(!r.delete(e))return!1;if(r.size>0)return!0;var o=y.get(t);return o.delete(n),o.size>0||y.delete(t),!0}function T(e,t){for(var n=e.length-1;n>=0;--n){var r=(0,e[n])(t);if(!R(r)&&!L(r)){if(!q(r))throw new TypeError;t=r}}return t}function C(e,t,n,r){for(var o=e.length-1;o>=0;--o){var a=(0,e[o])(t,n,r);if(!R(a)&&!L(a)){if(!z(a))throw new TypeError;r=a}}return r}function N(e,t,n){var r=y.get(e);if(R(r)){if(!n)return;r=new d,y.set(e,r)}var o=r.get(t);if(R(o)){if(!n)return;o=new d,r.set(t,o)}return o}function S(e,t,n){if(j(e,t,n))return!0;var r=ee(t);return!L(r)&&S(e,r,n)}function j(e,t,n){var r=N(t,n,!1);return!R(r)&&K(r.has(e))}function O(e,t,n){if(j(e,t,n))return P(e,t,n);var r=ee(t);return L(r)?void 0:O(e,r,n)}function P(e,t,n){var r=N(t,n,!1);if(!R(r))return r.get(e)}function I(e,t,n,r){N(n,r,!0).set(e,t)}function A(e,t){var n=M(e,t),r=ee(e);if(null===r)return n;var o=A(r,t);if(o.length<=0)return n;if(n.length<=0)return o;for(var a=new f,i=[],l=0,s=n;l<s.length;l++){var c=s[l];a.has(c)||(a.add(c),i.push(c))}for(var u=0,p=o;u<p.length;u++){c=p[u];a.has(c)||(a.add(c),i.push(c))}return i}function M(e,t){var n=[],r=N(e,t,!1);if(R(r))return n;for(var o=G(r.keys()),a=0;;){var i=X(o);if(!i)return n.length=a,n;var l=Q(i);try{n[a]=l}catch(s){try{$(o)}finally{throw s}}a++}}function B(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function R(e){return void 0===e}function L(e){return null===e}function W(e){return"symbol"==typeof e}function z(e){return"object"==typeof e?null!==e:"function"==typeof e}function D(e,t){switch(B(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var n=3===t?"string":5===t?"number":"default",o=Y(e,r);if(void 0!==o){var a=o.call(e,n);if(z(a))throw new TypeError;return a}return F(e,"default"===n?"number":n)}function F(e,t){if("string"===t){var n=e.toString;if(J(n))if(!z(o=n.call(e)))return o;if(J(r=e.valueOf))if(!z(o=r.call(e)))return o}else{var r;if(J(r=e.valueOf))if(!z(o=r.call(e)))return o;var o,a=e.toString;if(J(a))if(!z(o=a.call(e)))return o}throw new TypeError}function K(e){return!!e}function H(e){return""+e}function U(e){var t=D(e,3);return W(t)?t:H(t)}function Z(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function J(e){return"function"==typeof e}function q(e){return"function"==typeof e}function V(e){switch(B(e)){case 3:case 4:return!0;default:return!1}}function Y(e,t){var n=e[t];if(null!=n){if(!J(n))throw new TypeError;return n}}function G(e){var t=Y(e,a);if(!J(t))throw new TypeError;var n=t.call(e);if(!z(n))throw new TypeError;return n}function Q(e){return e.value}function X(e){var t=e.next();return!t.done&&t}function $(e){var t=e.return;t&&t.call(e)}function ee(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===u)return t;if(t!==u)return t;var n=e.prototype,r=n&&Object.getPrototypeOf(n);if(null==r||r===Object.prototype)return t;var o=r.constructor;return"function"!=typeof o||o===e?t:o}function te(){var e={},t=[],n=function(){function e(e,t,n){this._index=0,this._keys=e,this._values=t,this._selector=n}return e.prototype["@@iterator"]=function(){return this},e.prototype[a]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var n=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:n,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var n=this._find(e,!0);return this._values[n]=t,this},t.prototype.delete=function(t){var n=this._find(t,!1);if(n>=0){for(var r=this._keys.length,o=n+1;o<r;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new n(this._keys,this._values,r)},t.prototype.values=function(){return new n(this._keys,this._values,o)},t.prototype.entries=function(){return new n(this._keys,this._values,i)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[a]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function r(e,t){return e}function o(e,t){return t}function i(e,t){return[e,t]}}function ne(){return function(){function e(){this._map=new d}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[a]=function(){return this.keys()},e}()}function re(){var e=16,n=c.create(),r=o();return function(){function e(){this._key=o()}return e.prototype.has=function(e){var t=a(e,!1);return void 0!==t&&c.has(t,this._key)},e.prototype.get=function(e){var t=a(e,!1);return void 0!==t?c.get(t,this._key):void 0},e.prototype.set=function(e,t){return a(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=a(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=o()},e}();function o(){var e;do{e="@@WeakMap@@"+s()}while(c.has(n,e));return n[e]=!0,e}function a(e,n){if(!t.call(e,r)){if(!n)return;Object.defineProperty(e,r,{value:c.create()})}return e[r]}function i(e,t){for(var n=0;n<t;++n)e[n]=255*Math.random()|0;return e}function l(e){return"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(e)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(e)):i(new Uint8Array(e),e):i(new Array(e),e)}function s(){var t=l(e);t[6]=79&t[6]|64,t[8]=191&t[8]|128;for(var n="",r=0;r<e;++r){var o=t[r];4!==r&&6!==r&&8!==r||(n+="-"),o<16&&(n+="0"),n+=o.toString(16).toLowerCase()}return n}}function oe(e){return e.__=void 0,delete e.__,e}e("decorate",m),e("metadata",h),e("defineMetadata",g),e("hasMetadata",v),e("hasOwnMetadata",_),e("getMetadata",b),e("getOwnMetadata",w),e("getMetadataKeys",E),e("getOwnMetadataKeys",x),e("deleteMetadata",k)}(a)}()}(r||(r={}))},8639:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});var r=n(8447),o=function(){return{sandboxRoot:(0,r.withPrefix)("/js/6059bba/sandbox"),playgroundRoot:(0,r.withPrefix)("/js/6059bba/playground"),playgroundWorker:(0,r.withPrefix)("/js/6059bba/playground-worker/index.js")}}},5549:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(660),o=n(7575),a=n(7183),i=n.n(a),l=n(2784),s=n(8316),c=n(7480),u=n(8447),p=n(6303),d=n(876),f=n(357),y=n(2283),m=n(4345),h=(n(9521),JSON.parse('{"d":["4.7.4","4.7.3","4.7.2","4.6.4","4.6.2","4.5.5","4.5.4","4.5.3","4.5.2","4.4.4","4.4.3","4.4.2","4.3.5","4.3.4","4.3.3","4.3.2","4.2.3","4.2.2","4.1.5","4.1.3","4.1.2","4.0.5","4.0.3","4.0.2","3.9.7","3.9.2","3.8.3","3.8.2","3.7.5","3.6.3","3.5.1","3.3.3","3.1.6","3.0.1","2.8.1","2.7.2","2.4.1"]}')),g=n(8639),v=n(2332),_=function(e){var t=(0,f.D)((0,d.Z)());return(0,l.useEffect)((function(){if(document.getElementById("monaco-editor-embed")){if(document.getElementById("monaco-editor-embed").childElementCount>0)return v.log("Playground already loaded");var a=!1;if(window.addEventListener("popstate",(function(e){var t=document.location.pathname.endsWith("/play/")||document.location.pathname.endsWith("/play");a&&t?document.location.reload():a||t||(a=!0)})),y.e){window.playgroundHandbookTOC=e.pageContext.playgroundHandbookTOC,window.optionsSummary=e.pageContext.optionsSummary,window.react=l,window.reactDOM=s,window.i=t;var c=document.createElement("script");c.src=(0,u.withPrefix)("/js/vs.loader.js"),c.async=!0,c.onload=(0,o.Z)(i().mark((function a(){var s,c,p,d,f,y,m,_,b,w,E,x,k,T;return i().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s=new URLSearchParams(location.search),!((c=s.get("ts"))&&"Nightly"===c||"next"===c)){a.next=10;break}return a.next=5,fetch("https://tswebinfra.blob.core.windows.net/indexes/next.json",{cache:"no-cache"});case 5:return p=a.sent,a.next=8,p.json();case 8:d=a.sent,c=d.version;case 10:return c&&c.includes("-insiders.")&&(c=c.replace("-insiders.","-dev.")),f=(0,r.Z)(h.d).sort().pop(),m="dev"===(y=c||f),_=["pr","dev"].find((function(e){return y.includes(e)}))?"dev":"min",b=m?"http://localhost:5615/dev/vs":"https://typescript.azureedge.net/cdn/"+y+"/monaco/"+_+"/vs",a.next=19,fetch(b+"/editor/editor.main.js",{method:"HEAD"});case 19:if(a.sent.ok){a.next=24;break}return document.querySelectorAll(".lds-grid div").forEach((function(e){e.style.backgroundColor="red",e.style.animation="",e.style.webkitAnimation=""})),document.getElementById("loading-message").innerHTML="This version of TypeScript <em>("+(null==y?void 0:y.replace("<","-"))+")</em><br/>has not been prepared for the Playground<br/><br/>Try <a href='/play?ts="+f+document.location.hash+"'>"+f+'</a> or <a href="/play?ts=next'+document.location.hash+'">Nightly</a>',a.abrupt("return");case 24:w=(0,g.o)(),E=w.sandboxRoot,x=w.playgroundRoot,k=w.playgroundWorker,(T=n.g.require).config({paths:{vs:b,"typescript-sandbox":E,"typescript-playground":x,unpkg:"https://unpkg.com",local:"http://localhost:5000"},ignoreDuplicateModules:["vs/editor/editor.main"],catchError:!0,onError:function(e){document.getElementById("loading-message")?(document.getElementById("loading-message").innerText="Cannot load the Playground in this browser",v.error("Error setting up monaco/sandbox/playground from the JS, this is likely that you're using a browser which monaco doesn't support.")):v.error("Caught an error which is likely happening during initializing a playground plugin:"),v.error(e)}}),T(["vs/editor/editor.main","vs/language/typescript/tsWorker","typescript-sandbox/index","typescript-playground/index"],function(){var r=(0,o.Z)(i().mark((function r(o,a,c,p){var d,f,y,m,h,g,_,b;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(d=n.g.ts||a.typescript,!(o&&d&&c&&p)){r.next=6;break}null===(f=document.getElementById("loader").parentNode)||void 0===f||f.removeChild(document.getElementById("loader")),r.next=10;break;case 6:return v.error("Error setting up all the 4 key dependencies"),v.error("main",!!o,"ts",!!d,"sandbox",!!c,"playground",!!p),document.getElementById("loading-message").innerText="Cannot load the Playground in this browser, see logs in console.",r.abrupt("return");case 10:return(y=document.getElementById("playground-container")).style.display="flex",m=Math.max(window.innerHeight,600),y.style.height=m-Math.round(y.getClientRects()[0].top)-18+"px",h=s.get("useJavaScript")?"js":s.get("filetype")||"ts",g=s.get("multiFile")?document.location.origin+k+"?filetype="+h:void 0,r.next=18,c.createTypeScriptSandbox({text:localStorage.getItem("sandbox-history")||t("play_default_code_sample"),compilerOptions:{},domID:"monaco-editor-embed",filetype:h,acquireTypes:!localStorage.getItem("disable-ata"),supportTwoslashCompilerOptions:!0,customTypeScriptWorkerPath:g,monacoSettings:{fontFamily:"var(--code-font)",fontLigatures:!0}},o,d);case 18:_=r.sent,b={lang:e.pageContext.lang,prefix:(0,u.withPrefix)("/"),supportCustomPlugins:!0},p.setupPlayground(_,o,b,t,l),document.documentElement.classList.contains("dark-theme")&&_.monaco.editor.setTheme("sandbox-dark"),_.editor.focus(),_.editor.layout();case 25:case"end":return r.stop()}}),r)})));return function(e,t,n,o){return r.apply(this,arguments)}}());case 28:case"end":return a.stop()}}),a)}))),document.body.appendChild(c)}else document.getElementById("loading-message").innerText="Cannot load the Playground with storage disabled in your browser"}}),[]),l.createElement(c.A,{title:t("head_playground_title"),description:t("head_playground_description"),lang:e.pageContext.lang},l.createElement("nav",{className:"navbar-sub"},l.createElement("ul",{className:"nav"},l.createElement("li",{className:"name hide-small"},l.createElement("span",null,"Playground")),l.createElement("li",{className:"dropdown"},l.createElement("a",{id:"compiler-options-button",href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"menu","aria-expanded":"false","aria-controls":"compiler-options-dropdown"},t("play_subnav_config")," ",l.createElement("span",{className:"caret"})),l.createElement("div",{id:"compiler-options-dropdown",className:"dropdown-dialog","aria-labelledby":"compiler-options-button"},l.createElement("h3",null,t("play_subnav_config")),l.createElement("div",{className:"info",id:"config-container"},l.createElement("button",{className:"examples-close"},t("play_subnav_examples_close")),l.createElement("div",{id:"compiler-dropdowns"},l.createElement("label",{className:"select"},l.createElement("span",{className:"select-label"},"Lang"),l.createElement("select",{id:"language-selector"},l.createElement("option",null,"TypeScript"),l.createElement("option",null,"TypeScript Definitions"),l.createElement("option",null,"JavaScript")),l.createElement("span",{className:"compiler-flag-blurb"},t("play_config_language_blurb"))))))),l.createElement("li",{className:"dropdown"},l.createElement("a",{href:"#",id:"examples-button",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"menu","aria-expanded":"false","aria-controls":"examples"},t("play_subnav_examples")," ",l.createElement("span",{className:"caret"})),l.createElement("div",{className:"dropdown-dialog",id:"examples","aria-labelledby":"examples-button"},l.createElement("button",{className:"examples-close","aria-label":"Close dropdown",role:"button"},t("play_subnav_examples_close")),l.createElement(p.Z,{defaultSection:"TypeScript",sections:["JavaScript","TypeScript"],examples:e.pageContext.examplesTOC,locale:e.pageContext.lang}))),l.createElement("li",{className:"dropdown"},l.createElement("a",{href:"#",id:"whatisnew-button",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"menu","aria-expanded":"false","aria-controls":"whatisnew"},t("play_subnav_whatsnew")," ",l.createElement("span",{className:"caret"})),l.createElement("div",{className:"dropdown-dialog",id:"whatisnew","aria-labelledby":"whatisnew-button"},l.createElement("button",{role:"button","aria-label":"Close dropdown",className:"examples-close"},t("play_subnav_examples_close")),l.createElement(p.Z,{defaultSection:"4.4",sections:["4.4","4.3","4.2","4.1","4.0","3.8","3.7","Playground"],examples:e.pageContext.examplesTOC,locale:e.pageContext.lang}))),l.createElement("li",{className:"dropdown"},l.createElement("a",{href:"#",id:"handbook-button",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"menu","aria-expanded":"false","aria-controls":"examples"},t("play_subnav_handbook")," ",l.createElement("span",{className:"caret"})))),l.createElement("ul",{className:"nav navbar-nav navbar-right hidden-xs"},l.createElement("li",null,l.createElement("a",{href:"#",id:"playground-settings",role:"button"},"Settings")))),l.createElement("div",{className:"raised",style:{paddingTop:"0",marginTop:"0",marginBottom:"3rem",paddingBottom:"1.5rem"}},l.createElement("div",{id:"loader"},l.createElement("div",{className:"lds-grid"},l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null)),l.createElement("p",{id:"loading-message",role:"status"},t("play_downloading_typescript"))),l.createElement("div",{id:"playground-container",style:{display:"none"}},l.createElement("div",{id:"editor-container"},l.createElement("div",{id:"story-container",style:{display:"none"}}),l.createElement("div",{id:"editor-toolbar",className:"navbar-sub"},l.createElement("ul",null,l.createElement("li",{id:"versions",className:"dropdown"},l.createElement("a",{href:"#","data-toggle":"dropdown",role:"button","aria-haspopup":"menu","aria-expanded":"false","aria-controls":"versions-dropdown",id:"versions-button"},t("play_downloading_version"),"... ",l.createElement("span",{className:"caret"})),l.createElement("ul",{className:"dropdown-menu versions",id:"versions-dropdown","aria-labelledby":"versions-button"})),l.createElement("li",null,l.createElement("a",{id:"run-button",href:"#",role:"button"},t("play_toolbar_run"))),l.createElement("li",{className:"dropdown"},l.createElement("a",{href:"#",id:"exports-dropdown",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false","aria-controls":"export-dropdown-menu"},t("play_toolbar_export")," ",l.createElement("span",{className:"caret"})),l.createElement("ul",{className:"dropdown-menu",id:"export-dropdown-menu","aria-labelledby":"whatisnew-button"},l.createElement("li",null,l.createElement("a",{href:"#",onClick:function(){return playground.exporter.exportAsTweet()},"aria-label":t("play_export_tweet_md")},t("play_export_tweet_md"))),l.createElement("li",{role:"separator",className:"divider"}),l.createElement("li",null,l.createElement("a",{href:"#",onClick:function(e){return playground.exporter.copyAsMarkdownIssue(e)},"aria-label":t("play_export_copy_md")},t("play_export_copy_md"))),l.createElement("li",null,l.createElement("a",{href:"#",onClick:function(e){return playground.exporter.copyForChat(e)},"aria-label":t("play_export_copy_link")},t("play_export_copy_link"))),l.createElement("li",null," ",l.createElement("a",{href:"#",onClick:function(e){return playground.exporter.copyForChatWithPreview(e)},"aria-label":t("play_export_copy_link_preview")},t("play_export_copy_link_preview"))),l.createElement("li",{role:"separator",className:"divider"}),l.createElement("li",null,l.createElement("a",{href:"#",onClick:function(){return playground.exporter.openInTSAST()},"aria-label":t("play_export_tsast")},t("play_export_tsast"))),l.createElement("li",null,l.createElement("a",{href:"#",onClick:function(){return playground.exporter.openInBugWorkbench()},"aria-label":t("play_export_bugworkbench")},t("play_export_bugworkbench"))),l.createElement("li",null,l.createElement("a",{href:"#",onClick:function(){return playground.exporter.openInVSCodeDev()},"aria-label":t("play_export_vscode_dev_play")},t("play_export_vscode_dev_play"))),l.createElement("li",{role:"separator",className:"divider"}),l.createElement("li",null,l.createElement("a",{href:"#",onClick:function(){return playground.exporter.openProjectInCodeSandbox()},"aria-label":t("play_export_sandbox")},t("play_export_sandbox"))),l.createElement("li",null,l.createElement("a",{href:"#",onClick:function(){return playground.exporter.openProjectInStackBlitz()},"aria-label":t("play_export_stackblitz")},t("play_export_stackblitz"))))),l.createElement("li",null,l.createElement("a",{id:"share-button",href:"#",role:"button"},t("play_toolbar_share")))),l.createElement("ul",{className:"right"},l.createElement("li",null,l.createElement("a",{id:"sidebar-toggle","aria-label":"Hide Sidebar",href:"#"},"⇥")))),l.createElement("div",{id:"monaco-editor-embed"})))))},b=function(e){return l.createElement(m.R,{locale:e.pageContext.lang},l.createElement(_,e))}}}]);
//# sourceMappingURL=component---src-templates-play-tsx-3b5871a570d11dfc1208.js.map