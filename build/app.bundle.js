webpackJsonp([0],[,,function(t,exports){t.exports=function(t,e,n,r,o){var i,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r);var s;if(o?(s=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=s):n&&(s=n),s){var f=c.functional,p=f?c.render:c.beforeCreate;f?c.render=function(t,e){return s.call(e),p(t,e)}:c.beforeCreate=p?[].concat(p,s):[s]}return{esModule:i,exports:a,options:c}}},function(t,exports,e){"use strict";(function($){function t(t){return t&&t.__esModule?t:{default:t}}var n=e(1),r=t(n),o=e(5),i=t(o),a=e(6),u=t(a),c=e(8),s=t(c);e(11),r.default.use(i.default);var f=new i.default({routes:[{path:"/index",component:s.default},{path:"*",redirect:"/index"}]});$(document).ready(function(){return console.log("jQuery加载了")});new r.default({el:"#app",router:f,render:function(t){return t(u.default)}})}).call(exports,e(0))},,function(t,e,n){"use strict";function r(t,e){}function o(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function i(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function a(t,e,n){void 0===e&&(e={});var r,o=n||u;try{r=o(t||"")}catch(t){r={}}for(var i in e){var a=e[i];r[i]=Array.isArray(a)?a.slice():a}return r}function u(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=Ut(n.shift()),o=n.length>0?Ut(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function c(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return Lt(e);if(Array.isArray(n)){var r=[];return n.forEach(function(t){void 0!==t&&(null===t?r.push(Lt(e)):r.push(Lt(e)+"="+Lt(t)))}),r.join("&")}return Lt(e)+"="+Lt(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function s(t,e,n,r){var o=r&&r.options.stringifyQuery,i={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:e.query||{},params:e.params||{},fullPath:p(e,o),matched:t?f(t):[]};return n&&(i.redirectedFrom=p(n,o)),Object.freeze(i)}function f(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function p(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var o=t.hash;void 0===o&&(o="");var i=e||c;return(n||"/")+i(r)+o}function h(t,e){return e===Vt?t===e:!!e&&(t.path&&e.path?t.path.replace(Mt,"")===e.path.replace(Mt,"")&&t.hash===e.hash&&l(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&l(t.query,e.query)&&l(t.params,e.params)))}function l(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){var r=t[n],o=e[n];return"object"==typeof r&&"object"==typeof o?l(r,o):String(r)===String(o)})}function d(t,e){return 0===t.path.replace(Mt,"/").indexOf(e.path.replace(Mt,"/"))&&(!e.hash||t.hash===e.hash)&&v(t.query,e.query)}function v(t,e){for(var n in e)if(!(n in t))return!1;return!0}function y(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){if(/\b_blank\b/i.test(t.currentTarget.getAttribute("target")))return}return t.preventDefault&&t.preventDefault(),!0}}function m(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=m(e.children)))return e}}function g(t){if(!g.installed){g.installed=!0,Tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",$t),t.component("router-link",Ft);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}function b(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var o=e.split("/");n&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function w(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function x(t){return t.replace(/\/\//g,"/")}function _(t,e){for(var n,r=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(n=Qt.exec(t));){var c=n[0],s=n[1],f=n.index;if(a+=t.slice(i,f),i=f+c.length,s)a+=s[1];else{var p=t[i],h=n[2],l=n[3],d=n[4],v=n[5],y=n[6],m=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=p&&p!==h,b="+"===y||"*"===y,w="?"===y||"*"===y,x=n[2]||u,_=d||v;r.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:_?j(_):m?".*":"[^"+O(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function k(t,e){return C(_(t,e))}function R(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function E(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function C(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},u=a.pretty?R:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var f,p=i[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(Bt(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!e[c].test(f))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===h?s.prefix:s.delimiter)+f}}else{if(f=s.asterisk?E(p):u(p),!e[c].test(f))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+f+'"');o+=s.prefix+f}}else o+=s}return o}}function O(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function j(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function A(t,e){return t.keys=e,t}function T(t){return t.sensitive?"":"i"}function S(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return A(t,e)}function P(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(U(t[o],e,n).source);return A(new RegExp("(?:"+r.join("|")+")",T(n)),e)}function q(t,e,n){return L(_(t,n),e,n)}function L(t,e,n){Bt(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=O(u);else{var c=O(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")",i+=s}}var f=O(n.delimiter||"/"),p=i.slice(-f.length)===f;return r||(i=(p?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),i+=o?"$":r&&p?"":"(?="+f+"|$)",A(new RegExp("^"+i,T(n)),e)}function U(t,e,n){return Bt(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?S(t,e):Bt(t)?P(t,e,n):q(t,e,n)}function M(t,e,n){try{return(Yt[t]||(Yt[t]=Dt.compile(t)))(e||{},{pretty:!0})}catch(t){return""}}function V(t,e,n,r){var o=e||[],i=n||Object.create(null),a=r||Object.create(null);t.forEach(function(t){H(o,i,a,t)});for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:i,nameMap:a}}function H(t,e,n,r,o,i){var a=r.path,u=r.name,c=F(a,o),s=r.pathToRegexpOptions||{};"boolean"==typeof r.caseSensitive&&(s.sensitive=r.caseSensitive);var f={path:c,regex:I(c,s),components:r.components||{default:r.component},instances:{},name:u,parent:o,matchAs:i,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach(function(r){var o=i?x(i+"/"+r.path):void 0;H(t,e,n,r,f,o)}),void 0!==r.alias){(Array.isArray(r.alias)?r.alias:[r.alias]).forEach(function(i){var a={path:i,children:r.children};H(t,e,n,a,o,f.path||"/")})}e[f.path]||(t.push(f.path),e[f.path]=f),u&&(n[u]||(n[u]=f))}function I(t,e){var n=Dt(t,[],e);return n}function F(t,e){return t=t.replace(/\/$/,""),"/"===t[0]?t:null==e?t:x(e.path+"/"+t)}function z(t,e,n,r){var o="string"==typeof t?{path:t}:t;if(o.name||o._normalized)return o;if(!o.path&&o.params&&e){o=B({},o),o._normalized=!0;var i=B(B({},e.params),o.params);if(e.name)o.name=e.name,o.params=i;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;o.path=M(u,i,"path "+e.path)}return o}var c=w(o.path||""),s=e&&e.path||"/",f=c.path?b(c.path,s,n||o.append):s,p=a(c.query,o.query,r&&r.options.parseQuery),h=o.hash||c.hash;return h&&"#"!==h.charAt(0)&&(h="#"+h),{_normalized:!0,path:f,query:p,hash:h}}function B(t,e){for(var n in e)t[n]=e[n];return t}function D(t,e){function n(t){V(t,c,f,p)}function r(t,n,r){var o=z(t,n,!1,e),i=o.name;if(i){var u=p[i];if(!u)return a(null,o);var s=u.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof o.params&&(o.params={}),n&&"object"==typeof n.params)for(var h in n.params)!(h in o.params)&&s.indexOf(h)>-1&&(o.params[h]=n.params[h]);if(u)return o.path=M(u.path,o.params,'named route "'+i+'"'),a(u,o,r)}else if(o.path){o.params={};for(var l=0;l<c.length;l++){var d=c[l],v=f[d];if(K(v.regex,o.path,o.params))return a(v,o,r)}}return a(null,o)}function o(t,n){var o=t.redirect,i="function"==typeof o?o(s(t,n,null,e)):o;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return a(null,n);var u=i,c=u.name,f=u.path,h=n.query,l=n.hash,d=n.params;if(h=u.hasOwnProperty("query")?u.query:h,l=u.hasOwnProperty("hash")?u.hash:l,d=u.hasOwnProperty("params")?u.params:d,c){p[c];return r({_normalized:!0,name:c,query:h,hash:l,params:d},void 0,n)}if(f){var v=N(f,t);return r({_normalized:!0,path:M(v,d,'redirect route with path "'+v+'"'),query:h,hash:l},void 0,n)}return a(null,n)}function i(t,e,n){var o=M(n,e.params,'aliased route with path "'+n+'"'),i=r({_normalized:!0,path:o});if(i){var u=i.matched,c=u[u.length-1];return e.params=i.params,a(c,e)}return a(null,e)}function a(t,n,r){return t&&t.redirect?o(t,r||n):t&&t.matchAs?i(t,n,t.matchAs):s(t,n,r,e)}var u=V(t),c=u.pathList,f=u.pathMap,p=u.nameMap;return{match:r,addRoutes:n}}function K(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var o=1,i=r.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof r[o]?decodeURIComponent(r[o]):r[o];a&&(n[a.name]=u)}return!0}function N(t,e){return b(t,e.parent?e.parent.path:"/",!0)}function X(){window.addEventListener("popstate",function(t){Q(),t.state&&t.state.key&&ot(t.state.key)})}function J(t,e,n,r){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var t=Y(),i=o(e,n,r?t:null);if(i){var a="object"==typeof i;if(a&&"string"==typeof i.selector){var u=document.querySelector(i.selector);if(u){var c=i.offset&&"object"==typeof i.offset?i.offset:{};c=tt(c),t=W(u,c)}else G(i)&&(t=Z(i))}else a&&G(i)&&(t=Z(i));t&&window.scrollTo(t.x,t.y)}})}}function Q(){var t=rt();t&&(Wt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Y(){var t=rt();if(t)return Wt[t]}function W(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-r.left-e.x,y:o.top-r.top-e.y}}function G(t){return et(t.x)||et(t.y)}function Z(t){return{x:et(t.x)?t.x:window.pageXOffset,y:et(t.y)?t.y:window.pageYOffset}}function tt(t){return{x:et(t.x)?t.x:0,y:et(t.y)?t.y:0}}function et(t){return"number"==typeof t}function nt(){return Zt.now().toFixed(3)}function rt(){return te}function ot(t){te=t}function it(t,e){Q();var n=window.history;try{e?n.replaceState({key:te},"",t):(te=nt(),n.pushState({key:te},"",t))}catch(n){window.location[e?"replace":"assign"](t)}}function at(t){it(t,!0)}function ut(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function ct(t){return function(e,n,r){var i=!1,a=0,u=null;st(t,function(t,e,n,c){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var s,f=pt(function(e){e.__esModule&&e.default&&(e=e.default),t.resolved="function"==typeof e?e:Tt.extend(e),n.components[c]=e,--a<=0&&r()}),p=pt(function(t){var e="Failed to resolve async component "+c+": "+t;u||(u=o(t)?t:new Error(e),r(u))});try{s=t(f,p)}catch(t){p(t)}if(s)if("function"==typeof s.then)s.then(f,p);else{var h=s.component;h&&"function"==typeof h.then&&h.then(f,p)}}}),i||r()}}function st(t,e){return ft(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function ft(t){return Array.prototype.concat.apply([],t)}function pt(t){var e=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}function ht(t){if(!t)if(zt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function lt(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function dt(t,e,n,r){var o=st(t,function(t,r,o,i){var a=vt(t,e);if(a)return Array.isArray(a)?a.map(function(t){return n(t,r,o,i)}):n(a,r,o,i)});return ft(r?o.reverse():o)}function vt(t,e){return"function"!=typeof t&&(t=Tt.extend(t)),t.options[e]}function yt(t){return dt(t,"beforeRouteLeave",gt,!0)}function mt(t){return dt(t,"beforeRouteUpdate",gt)}function gt(t,e){if(e)return function(){return t.apply(e,arguments)}}function bt(t,e,n){return dt(t,"beforeRouteEnter",function(t,r,o,i){return wt(t,o,i,e,n)})}function wt(t,e,n,r,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&r.push(function(){xt(t,e.instances,n,o)})})}}function xt(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){xt(t,e,n,r)},16)}function _t(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function kt(t){var e=_t(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}function Rt(){var t=Et();return"/"===t.charAt(0)||(Ot("/"+t),!1)}function Et(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function Ct(t){window.location.hash=t}function Ot(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;window.location.replace(r+"#"+t)}function jt(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function At(t,e,n){var r="hash"===n?"#"+e:e;return t?x(t+"/"+r):r}Object.defineProperty(e,"__esModule",{value:!0});var Tt,$t={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,a=e.data;a.routerView=!0;for(var u=o.$createElement,c=n.name,s=o.$route,f=o._routerViewCache||(o._routerViewCache={}),p=0,h=!1;o&&o._routerRoot!==o;)o.$vnode&&o.$vnode.data.routerView&&p++,o._inactive&&(h=!0),o=o.$parent;if(a.routerViewDepth=p,h)return u(f[c],a,r);var l=s.matched[p];if(!l)return f[c]=null,u();var d=f[c]=l.components[c];return a.registerRouteInstance=function(t,e){var n=l.instances[c];(e&&n!==t||!e&&n===t)&&(l.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){l.instances[c]=e.componentInstance},a.props=i(s,l.props&&l.props[c]),u(d,a,r)}},St=/[!'()*]/g,Pt=function(t){return"%"+t.charCodeAt(0).toString(16)},qt=/%2C/g,Lt=function(t){return encodeURIComponent(t).replace(St,Pt).replace(qt,",")},Ut=decodeURIComponent,Mt=/\/?$/,Vt=s(null,{path:"/"}),Ht=[String,Object],It=[String,Array],Ft={name:"router-link",props:{to:{type:Ht,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:It,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),i=o.location,a=o.route,u=o.href,c={},f=n.options.linkActiveClass,p=n.options.linkExactActiveClass,l=null==f?"router-link-active":f,v=null==p?"router-link-exact-active":p,g=null==this.activeClass?l:this.activeClass,b=null==this.exactActiveClass?v:this.exactActiveClass,w=i.path?s(null,i,null,n):a;c[b]=h(r,w),c[g]=this.exact?c[b]:d(r,w);var x=function(t){y(t)&&(e.replace?n.replace(i):n.push(i))},_={click:y};Array.isArray(this.event)?this.event.forEach(function(t){_[t]=x}):_[this.event]=x;var k={class:c};if("a"===this.tag)k.on=_,k.attrs={href:u};else{var R=m(this.$slots.default);if(R){R.isStatic=!1;var E=Tt.util.extend;(R.data=E({},R.data)).on=_;(R.data.attrs=E({},R.data.attrs)).href=u}else k.on=_}return t(this.tag,k,this.$slots.default)}},zt="undefined"!=typeof window,Bt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Dt=U,Kt=_,Nt=k,Xt=C,Jt=L,Qt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Dt.parse=Kt,Dt.compile=Nt,Dt.tokensToFunction=Xt,Dt.tokensToRegExp=Jt;var Yt=Object.create(null),Wt=Object.create(null),Gt=zt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),Zt=zt&&window.performance&&window.performance.now?window.performance:Date,te=nt(),ee=function(t,e){this.router=t,this.base=ht(e),this.current=Vt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};ee.prototype.listen=function(t){this.cb=t},ee.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ee.prototype.onError=function(t){this.errorCbs.push(t)},ee.prototype.transitionTo=function(t,e,n){var r=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){r.updateRoute(o),e&&e(o),r.ensureURL(),r.ready||(r.ready=!0,r.readyCbs.forEach(function(t){t(o)}))},function(t){n&&n(t),t&&!r.ready&&(r.ready=!0,r.readyErrorCbs.forEach(function(e){e(t)}))})},ee.prototype.confirmTransition=function(t,e,n){var i=this,a=this.current,u=function(t){o(t)&&(i.errorCbs.length?i.errorCbs.forEach(function(e){e(t)}):(r(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)};if(h(t,a)&&t.matched.length===a.matched.length)return this.ensureURL(),u();var c=lt(this.current.matched,t.matched),s=c.updated,f=c.deactivated,p=c.activated,l=[].concat(yt(f),this.router.beforeHooks,mt(s),p.map(function(t){return t.beforeEnter}),ct(p));this.pending=t;var d=function(e,n){if(i.pending!==t)return u();try{e(t,a,function(t){!1===t||o(t)?(i.ensureURL(!0),u(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(u(),"object"==typeof t&&t.replace?i.replace(t):i.push(t)):n(t)})}catch(t){u(t)}};ut(l,d,function(){var n=[];ut(bt(p,n,function(){return i.current===t}).concat(i.router.resolveHooks),d,function(){if(i.pending!==t)return u();i.pending=null,e(t),i.router.app&&i.router.app.$nextTick(function(){n.forEach(function(t){t()})})})})},ee.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var ne=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior;o&&X(),window.addEventListener("popstate",function(t){var n=r.current;r.transitionTo(_t(r.base),function(t){o&&J(e,t,n,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){it(x(r.base+t.fullPath)),J(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){at(x(r.base+t.fullPath)),J(r.router,t,i,!1),e&&e(t)},n)},e.prototype.ensureURL=function(t){if(_t(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?it(e):at(e)}},e.prototype.getCurrentLocation=function(){return _t(this.base)},e}(ee),re=function(t){function e(e,n,r){t.call(this,e,n),r&&kt(this.base)||Rt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;window.addEventListener("hashchange",function(){Rt()&&t.transitionTo(Et(),function(t){Ot(t.fullPath)})})},e.prototype.push=function(t,e,n){this.transitionTo(t,function(t){Ct(t.fullPath),e&&e(t)},n)},e.prototype.replace=function(t,e,n){this.transitionTo(t,function(t){Ot(t.fullPath),e&&e(t)},n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Et()!==e&&(t?Ct(e):Ot(e))},e.prototype.getCurrentLocation=function(){return Et()},e}(ee),oe=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)},n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ee),ie=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=D(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Gt&&!1!==t.fallback,this.fallback&&(e="hash"),zt||(e="abstract"),this.mode=e,e){case"history":this.history=new ne(this,t.base);break;case"hash":this.history=new re(this,t.base,this.fallback);break;case"abstract":this.history=new oe(this,t.base)}},ae={currentRoute:{}};ie.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},ae.currentRoute.get=function(){return this.history&&this.history.current},ie.prototype.init=function(t){var e=this;if(this.apps.push(t),!this.app){this.app=t;var n=this.history;if(n instanceof ne)n.transitionTo(n.getCurrentLocation());else if(n instanceof re){var r=function(){n.setupListeners()};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},ie.prototype.beforeEach=function(t){return jt(this.beforeHooks,t)},ie.prototype.beforeResolve=function(t){return jt(this.resolveHooks,t)},ie.prototype.afterEach=function(t){return jt(this.afterHooks,t)},ie.prototype.onReady=function(t,e){this.history.onReady(t,e)},ie.prototype.onError=function(t){this.history.onError(t)},ie.prototype.push=function(t,e,n){this.history.push(t,e,n)},ie.prototype.replace=function(t,e,n){this.history.replace(t,e,n)},ie.prototype.go=function(t){this.history.go(t)},ie.prototype.back=function(){this.go(-1)},ie.prototype.forward=function(){this.go(1)},ie.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},ie.prototype.resolve=function(t,e,n){var r=z(t,e||this.history.current,n,this),o=this.match(r,e),i=o.redirectedFrom||o.fullPath;return{location:r,route:o,href:At(this.history.base,i,this.mode),normalizedTo:r,resolved:o}},ie.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==Vt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(ie.prototype,ae),ie.install=g,ie.version="2.7.0",zt&&window.Vue&&window.Vue.use(ie),e.default=ie},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),o=n(2),i=o(null,r.a,null,null,null);e.default=i.exports},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-view-wrapper"}},[n("header"),t._v(" "),n("router-view")],1)},o=[];e.a={render:r,staticRenderFns:o}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=n.n(r),i=n(10),a=n(2),u=a(o.a,i.a,null,null,null);e.default=u.exports},function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={data:function(){return{welcome:"Hello,Vue!!"}}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v(t._s(t.welcome))])},o=[];e.a={render:r,staticRenderFns:o}},function(t,exports){}],[3]);