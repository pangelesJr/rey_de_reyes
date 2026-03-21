////////////////////////////////////////////
// BEGIN ASSET BooksDesignSystemWebBuzzAssets@BaseAssets-1.0.5623.0
/////////////////////////
// BEGIN FILE bds-hns-integration.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
window.BDS = window.BDS || {};
window.BDS.enableHNSIntegration = false;
/////////////////////////
// END FILE bds-hns-integration.js
/////////////////////////
/////////////////////////
// BEGIN FILE bds-qv-sf-experiment.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
window.BDS = window.BDS || {};
window.BDS.isBDSStarRatingEnabledOnStorefront = false;
/////////////////////////
// END FILE bds-qv-sf-experiment.js
/////////////////////////
/////////////////////////
// BEGIN FILE bds-qv-typ-experiment.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
window.BDS = window.BDS || {};
window.BDS.isBDSStarRatingEnabledOnTYP = false;
/////////////////////////
// END FILE bds-qv-typ-experiment.js
/////////////////////////
/////////////////////////
// BEGIN FILE bds-qv-cc-experiment.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
window.BDS = window.BDS || {};
window.BDS.isBDSStarRatingEnabledOnYourBooks = false;
/////////////////////////
// END FILE bds-qv-cc-experiment.js
/////////////////////////
/////////////////////////
// BEGIN FILE bds-base-assets.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
!function(e){function t(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}function i(e,t,i,o){return new(i||(i=Promise))((function(a,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function n(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,n)}l((o=o.apply(e,t||[])).next())}))}function o(e,t,i,o,a,r,s){try{var n=e[r](s),l=n.value}catch(e){return void i(e)}n.done?t(l):Promise.resolve(l).then(o,a)}function a(e){return function(){var t=this,i=arguments;return new Promise((function(a,r){var s=e.apply(t,i);function n(e){o(s,a,r,n,l,"next",e)}function l(e){o(s,a,r,n,l,"throw",e)}n(void 0)}))}}function r(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}"function"==typeof SuppressedError&&SuppressedError;var l=window,d=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),u=new WeakMap;class b{constructor(e,t,i){if(this._$cssResult$=!0,i!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){var e=this.o,t=this.t;if(d&&void 0===e){var i=void 0!==t&&1===t.length;i&&(e=u.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&u.set(t,e))}return e}toString(){return this.cssText}}var h,g,p=e=>new b("string"==typeof e?e:e+"",void 0,c),v=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];var a=1===e.length?e[0]:i.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new b(a,e,c)},m=d?e=>e:e=>e instanceof CSSStyleSheet?(e=>{var t="";for(var i of e.cssRules)t+=i.cssText;return p(t)})(e):e
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,f=window,_=f.trustedTypes,y=_?_.emptyScript:"",x=f.reactiveElementPolyfillSupport,w={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){var i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},k=(e,t)=>t!==e&&(t==t||e==e),C={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:k},S="finalized";class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();var e=[];return this.elementProperties.forEach(((t,i)=>{var o=this._$Ep(i,t);void 0!==o&&(this._$Ev.set(o,i),e.push(o))})),e}static createProperty(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C;if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var i="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){var a=this[e];this[t]=o,this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||C}static finalize(){if(this.hasOwnProperty(S))return!1;this[S]=!0;var e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){var t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(var o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){var t=[];if(Array.isArray(e)){var i=new Set(e.flat(1/0).reverse());for(var o of i)t.unshift(m(o))}else void 0!==e&&t.push(m(e));return t}static _$Ep(e,t){var i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e,t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{d?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{var i=document.createElement("style"),o=l.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C,a=this.constructor._$Ep(e,o);if(void 0!==a&&!0===o.reflect){var r=(void 0!==(null===(i=o.converter)||void 0===i?void 0:i.toAttribute)?o.converter:w).toAttribute(t,o.type);this._$El=e,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$El=null}}_$AK(e,t){var i,o=this.constructor,a=o._$Ev.get(e);if(void 0!==a&&this._$El!==a){var r=o.getPropertyOptions(a),s="function"==typeof r.converter?{fromAttribute:r.converter}:void 0!==(null===(i=r.converter)||void 0===i?void 0:i.fromAttribute)?r.converter:w;this._$El=a,this[a]=s.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,i){var o=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||k)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}_$Ej(){var e=this;return a((function*(){e.isUpdatePending=!0;try{yield e._$E_}catch(t){Promise.reject(t)}var t=e.scheduleUpdate();return null!=t&&(yield t),!e.isUpdatePending}))()}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(this.isUpdatePending){this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);var t=!1,i=this._$AL;try{(t=this.shouldUpdate(i))?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}$[S]=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==x||x({ReactiveElement:$}),(null!==(h=f.reactiveElementVersions)&&void 0!==h?h:f.reactiveElementVersions=[]).push("1.6.3");var B=window,z=B.trustedTypes,T=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,P="$lit$",I="lit$".concat((Math.random()+"").slice(9),"$"),A="?"+I,L="<".concat(A,">"),O=document,R=()=>O.createComment(""),F=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,E="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,U=/>/g,N=RegExp(">|".concat(E,"(?:([^\\s\"'>=/]+)(").concat(E,"*=").concat(E,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),j=/'/g,V=/"/g,W=/^(?:script|style|textarea|title)$/i,G=(e=>function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];return{_$litType$:e,strings:t,values:o}})(1),q=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),K=new WeakMap,X=O.createTreeWalker(O,129,null,!1);function Y(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(t):t}var J=(e,t)=>{for(var i,o=e.length-1,a=[],r=2===t?"<svg>":"",s=M,n=0;n<o;n++){for(var l=e[n],d=void 0,c=void 0,u=-1,b=0;b<l.length&&(s.lastIndex=b,null!==(c=s.exec(l)));)b=s.lastIndex,s===M?"!--"===c[1]?s=H:void 0!==c[1]?s=U:void 0!==c[2]?(W.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=N):void 0!==c[3]&&(s=N):s===N?">"===c[0]?(s=null!=i?i:M,u=-1):void 0===c[1]?u=-2:(u=s.lastIndex-c[2].length,d=c[1],s=void 0===c[3]?N:'"'===c[3]?V:j):s===V||s===j?s=N:s===H||s===U?s=M:(s=N,i=void 0);var h=s===N&&e[n+1].startsWith("/>")?" ":"";r+=s===M?l+L:u>=0?(a.push(d),l.slice(0,u)+P+l.slice(u)+I+h):l+I+(-2===u?(a.push(void 0),n):h)}return[Y(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),a]};class Z{constructor(e,t){var i,{strings:o,_$litType$:a}=e;this.parts=[];var r=0,s=0,n=o.length-1,l=this.parts,[d,c]=J(o,a);if(this.el=Z.createElement(d,t),X.currentNode=this.el.content,2===a){var u=this.el.content,b=u.firstChild;b.remove(),u.append(...b.childNodes)}for(;null!==(i=X.nextNode())&&l.length<n;){if(1===i.nodeType){if(i.hasAttributes()){var h=[];for(var g of i.getAttributeNames())if(g.endsWith(P)||g.startsWith(I)){var p=c[s++];if(h.push(g),void 0!==p){var v=i.getAttribute(p.toLowerCase()+P).split(I),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:m[2],strings:v,ctor:"."===m[1]?ae:"?"===m[1]?se:"@"===m[1]?ne:oe})}else l.push({type:6,index:r})}for(var f of h)i.removeAttribute(f)}if(W.test(i.tagName)){var _=i.textContent.split(I),y=_.length-1;if(y>0){i.textContent=z?z.emptyScript:"";for(var x=0;x<y;x++)i.append(_[x],R()),X.nextNode(),l.push({type:2,index:++r});i.append(_[y],R())}}}else if(8===i.nodeType)if(i.data===A)l.push({type:2,index:r});else for(var w=-1;-1!==(w=i.data.indexOf(I,w+1));)l.push({type:7,index:r}),w+=I.length-1;r++}}static createElement(e,t){var i=O.createElement("template");return i.innerHTML=e,i}}function ee(e,t){var i,o,a,r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,n=arguments.length>3?arguments[3]:void 0;if(t===q)return t;var l=void 0!==n?null===(i=s._$Co)||void 0===i?void 0:i[n]:s._$Cl,d=F(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(e))._$AT(e,s,n),void 0!==n?(null!==(a=(r=s)._$Co)&&void 0!==a?a:r._$Co=[])[n]=l:s._$Cl=l),void 0!==l&&(t=ee(e,l._$AS(e,t.values),l,n)),t}class te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t,{el:{content:i},parts:o}=this._$AD,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:O).importNode(i,!0);X.currentNode=a;for(var r=X.nextNode(),s=0,n=0,l=o[0];void 0!==l;){if(s===l.index){var d=void 0;2===l.type?d=new ie(r,r.nextSibling,this,e):1===l.type?d=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(d=new le(r,this,e)),this._$AV.push(d),l=o[++n]}s!==(null==l?void 0:l.index)&&(r=X.nextNode(),s++)}return X.currentNode=O,a}v(e){var t=0;for(var i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ie{constructor(e,t,i,o){var a;this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cp=null===(a=null==o?void 0:o.isConnected)||void 0===a||a}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){var e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e){e=ee(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),F(e)?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>D(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Q&&F(this._$AH)?this._$AA.nextSibling.data=e:this.$(O.createTextNode(e)),this._$AH=e}g(e){var t,{values:i,_$litType$:o}=e,a="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Z.createElement(Y(o.h,o.h[0]),this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===a)this._$AH.v(i);else{var r=new te(a,this),s=r.u(this.options);r.v(i),this.$(s),this._$AH=r}}_$AC(e){var t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Z(e)),t}T(e){D(this._$AH)||(this._$AH=[],this._$AR());var t,i=this._$AH,o=0;for(var a of e)o===i.length?i.push(t=new ie(this.k(R()),this.k(R()),this,this.options)):t=i[o],t._$AI(a),o++;o<i.length&&(this._$AR(t&&t._$AB.nextSibling,o),i.length=o)}_$AR(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){var o=t.nextSibling;t.remove(),t=o}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class oe{constructor(e,t,i,o,a){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,a=this.strings,r=!1;if(void 0===a)e=ee(this,e,t,0),(r=!F(e)||e!==this._$AH&&e!==q)&&(this._$AH=e);else{var s,n,l=e;for(e=a[0],s=0;s<a.length-1;s++)(n=ee(this,l[i+s],t,s))===q&&(n=this._$AH[s]),r||(r=!F(n)||n!==this._$AH[s]),n===Q?e=Q:e!==Q&&(e+=(null!=n?n:"")+a[s+1]),this._$AH[s]=n}r&&!o&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class ae extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}var re=z?z.emptyScript:"";class se extends oe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Q?this.element.setAttribute(this.name,re):this.element.removeAttribute(this.name)}}class ne extends oe{constructor(e,t,i,o,a){super(e,t,i,o,a),this.type=5}_$AI(e){var t;if((e=null!==(t=ee(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:Q)!==q){var i=this._$AH,o=e===Q&&i!==Q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==Q&&(i===Q||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class le{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}var de=B.litHtmlPolyfillSupport;null==de||de(Z,ie),(null!==(g=B.litHtmlVersions)&&void 0!==g?g:B.litHtmlVersions=[]).push("2.8.0");var ce,ue;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class be extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t,i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){var t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var o,a,r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:t,s=r._$litPart$;if(void 0===s){var n=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:null;r._$litPart$=s=new ie(t.insertBefore(R(),n),n,void 0,null!=i?i:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return q}}be.finalized=!0,be._$litElement$=!0,null===(ce=globalThis.litElementHydrateSupport)||void 0===ce||ce.call(globalThis,{LitElement:be});var he=globalThis.litElementPolyfillSupport;null==he||he({LitElement:be}),(null!==(ue=globalThis.litElementVersions)&&void 0!==ue?ue:globalThis.litElementVersions=[]).push("3.3.3");
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class ge extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class pe{constructor(e,t,i,o){var a;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context){var r=t;this.context=r.context,this.callback=r.callback,this.subscribe=null!==(a=r.subscribe)&&void 0!==a&&a}else this.context=t,this.callback=i,this.subscribe=null!=o&&o;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new ge(this.context,this.t,this.subscribe))}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class ve{constructor(e){this.disposers=new Map,this.updateObservers=()=>{for(var[e,t]of this.disposers)e(this.o,t)},void 0!==e&&(this.value=e)}get value(){return this.o}set value(e){this.setValue(e)}setValue(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]||!Object.is(e,this.o);this.o=e,t&&this.updateObservers()}addCallback(e,t){if(t){this.disposers.has(e)||this.disposers.set(e,(()=>{this.disposers.delete(e)}));var i=this.disposers.get(e);e(this.value,i)}else e(this.value)}clearCallbacks(){this.disposers.clear()}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class me extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class fe extends ve{constructor(e,t,i){super(void 0!==t.context?t.initialValue:i),this.onContextRequest=e=>{e.context===this.context&&e.composedPath()[0]!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,e.subscribe))},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new me(this.context))}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var _e=e=>{var{finisher:t,descriptor:i}=e;return(e,o)=>{var a;if(void 0===o){var r=null!==(a=e.originalKey)&&void 0!==a?a:e.key,s=null!=i?{kind:"method",placement:"prototype",key:r,descriptor:i(e.key)}:n(n({},e),{},{key:r});return null!=t&&(s.finisher=function(e){t(e,r)}),s}var l=e.constructor;void 0!==i&&Object.defineProperty(e,o,i(o)),null==t||t(l,o)}};
/**
     * @license
     * Copyright 2022 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function ye(e){var{context:t,subscribe:i}=e;return _e({finisher:(e,o)=>{e.addInitializer((e=>{new pe(e,{context:t,callback:t=>{e[o]=t},subscribe:i})}))}})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var xe,we=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?n(n({},t),{},{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function ke(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):we(e,t)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Ce(e){return ke(n(n({},e),{},{state:!0}))}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Se(e,t){return _e({descriptor:i=>{var o={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){var a="symbol"==typeof i?Symbol():"__"+i;o.get=function(){var t,i;return void 0===this[a]&&(this[a]=null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null),this[a]}}return o}})}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */null===(xe=window.HTMLSlotElement)||void 0===xe||xe.prototype.assignedElements;const $e="render-context",Be="asin-metadata-context",ze=e=>customElements.get(e)?(console.warn(`BDS Custom Element '${e}' already defined, will not re-define`),()=>{}):(e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{var{kind:i,elements:o}=t;return{kind:i,elements:o,finisher(t){customElements.define(e,t)}}})(e,t))(e);function Te(){return function(){const e=document.documentElement;return e.classList.contains("a-mobile")||e.classList.contains("a-tablet")}()&&!("UICTFontTextStyleBody"===window.getComputedStyle(document.documentElement).getPropertyValue("font-family"))}var Pe;e.RenderContextProvider=Pe=class extends be{constructor(){super(...arguments),this.marketplace="default",this.devicetype="default",this.operatingsystem="default",this.hostapplication="default",this.pagetype="default",this.theme="light",this.locale="en-US",this.renderContext=new fe(this,{context:$e,initialValue:{marketplace:this.marketplace,devicetype:this.devicetype,operatingsystem:this.operatingsystem,hostapplication:this.hostapplication,pagetype:this.pagetype,theme:this.theme,locale:this.locale,widgetid:this.widgetid}}),this.asinMetadataContext=new fe(this,{context:Be,initialValue:{asinMetadataCallbacks:[],asinList:this.asinList}})}willUpdate(){this.renderContext.setValue({marketplace:this.marketplace,devicetype:this.devicetype,operatingsystem:this.operatingsystem,hostapplication:this.hostapplication,pagetype:this.pagetype,theme:this.theme,locale:this.locale,widgetid:this.widgetid}),this.asinMetadataContext.setValue({asinMetadataCallbacks:this.asinMetadataContext.value.asinMetadataCallbacks,asinList:this.asinList})}render(){return Te()?this.classList.add(Pe.AUIMobileTabletRootFontSizeClass):this.classList.remove(Pe.AUIMobileTabletRootFontSizeClass),G`<slot></slot>`}},e.RenderContextProvider.AUIMobileTabletRootFontSizeClass="aui-mobile-tablet-root-font-size",t([ke({type:String,reflect:!0})],e.RenderContextProvider.prototype,"marketplace",void 0),t([ke({type:String,reflect:!0})],e.RenderContextProvider.prototype,"devicetype",void 0),t([ke({type:String,reflect:!0})],e.RenderContextProvider.prototype,"operatingsystem",void 0),t([ke({type:String,reflect:!0})],e.RenderContextProvider.prototype,"hostapplication",void 0),t([ke({type:String,reflect:!0})],e.RenderContextProvider.prototype,"pagetype",void 0),t([ke({type:String,reflect:!0})],e.RenderContextProvider.prototype,"theme",void 0),t([ke({type:String,reflect:!0})],e.RenderContextProvider.prototype,"locale",void 0),t([ke({type:String,reflect:!0})],e.RenderContextProvider.prototype,"widgetid",void 0),t([ke({type:Array})],e.RenderContextProvider.prototype,"asinList",void 0),e.RenderContextProvider=Pe=t([ze("bds-render-context-provider")],e.RenderContextProvider);const Ie="skeleton-loading-metadata-context",Ae="books_ui",Le="bds-";var Oe;!function(e){e.FATAL="FATAL",e.ERROR="ERROR",e.WARN="WARN"}(Oe||(Oe={}));class Re{static logCountMetric(...e){var t;const i=this.getMetricName(e);null===(t=window.ue)||void 0===t||t.count(i,1)}static getMetricName(e){return Le.concat(e.join("-"))}static logJSErrorMetric(e,t,i,o){var a;const r={logLevel:t,attribution:Le.concat(i),message:o};null===(a=window.ue)||void 0===a||a.ueLogError(e,r)}}const Fe="csaAttributes",De="layout",Ee="NULL";function Me(e,t){return e in t}function He(e){var t;const i=null===(t=e.prototype)||void 0===t?void 0:t.connectedCallback;function o(e){if("renderContext"in e){const t=e.renderContext;e.setAttribute("data-csa-c-device-type",(null==t?void 0:t.devicetype)||Ee),e.setAttribute("data-csa-c-os",(null==t?void 0:t.operatingsystem)||Ee),e.setAttribute("data-csa-c-host-application",(null==t?void 0:t.hostapplication)||Ee),e.setAttribute("data-csa-c-locale",(null==t?void 0:t.locale)||Ee),e.setAttribute("data-csa-c-theme",(null==t?void 0:t.theme)||Ee),e.setAttribute("data-csa-c-marketplace",(null==t?void 0:t.marketplace)||Ee),e.setAttribute("data-csa-c-page-type",(null==t?void 0:t.pagetype)||Ee),e.setAttribute("data-csa-c-widget-id",(null==t?void 0:t.widgetid)||Ee)}}i&&(e.prototype.connectedCallback=function(){var e;null==i||i.call(this),null===(e=window.csa)||void 0===e||e.call(window,"Content",{element:this});const t=this.firstUpdated;this.firstUpdated=function(e){null==t||t.call(this,e),o(this),this.setAttribute("data-csa-c-source",Ae),this.setAttribute("data-csa-c-type","item"),this.setAttribute("data-csa-c-component",this.tagName||Ee),this.setAttribute("data-csa-c-pathname",window.location.pathname);const i=this.constructor.elementProperties;var a,r,s,n;(null==i?void 0:i.has(Fe))&&Me(Fe,this)&&this[Fe]&&Object.entries(this[Fe]).forEach((([e,t])=>{this.setAttribute(e,String(t))})),a=this,r=De,s="data-csa-c-layout",n=this.getAttribute(De)||Ee,a.hasAttribute(r)&&Me(r,a)&&a.setAttribute(s,n)};const a=this.updated;this.updated=function(e){null==a||a.call(this,e),o(this)}})}e.SkeletalLoadingContextProvider=class extends be{constructor(){super(...arguments),this.asinList=[],this.metadataContext=new fe(this,{context:Ie,initialValue:{latentDataMap:new Map,asinList:this.asinList,metadataToLazyLoad:this.metadataToLazyLoad}})}willUpdate(){var e,t;this.metadataContext.setValue({metadataToLazyLoad:(null===(e=this.metadataToLazyLoad)||void 0===e?void 0:e.slice(0,null!==(t=this.maxSkeletons)&&void 0!==t?t:this.metadataToLazyLoad.length))||[],latentDataMap:this.metadataContext.value.latentDataMap,asinList:this.asinList})}firstUpdated(){return i(this,void 0,void 0,(function*(){if(0===this.metadataToLazyLoad.length)return;yield this.updateComplete;const e=yield this.fetchLatentDataCallback(this.asinList);if(e)if(Array.isArray(e)){const t=new Map(e.map((e=>[e.asin,e])));this.metadataContext.setValue(Object.assign(Object.assign({},this.metadataContext.value),{latentDataMap:t}))}else Re.logCountMetric("sll_invalid_ajax_response_format");else Re.logCountMetric("sll_ajax_call_failure");this.metadataToLazyLoad=[]}))}render(){return G`<slot></slot>`}},t([ke({type:Object})],e.SkeletalLoadingContextProvider.prototype,"fetchLatentDataCallback",void 0),t([ke({type:Array})],e.SkeletalLoadingContextProvider.prototype,"metadataToLazyLoad",void 0),t([ke({type:Array})],e.SkeletalLoadingContextProvider.prototype,"asinList",void 0),t([ke({type:Number})],e.SkeletalLoadingContextProvider.prototype,"maxSkeletons",void 0),e.SkeletalLoadingContextProvider=t([ze("bds-skeleton-loading-context-provider")],e.SkeletalLoadingContextProvider),e.AsinMetadataContextProvider=class extends be{constructor(){super(...arguments),this.asinMetadataContext=new fe(this,{context:Be,initialValue:{asinMetadataCallbacks:[],asinList:this.asinList}})}updated(){this.asinMetadataContext.setValue({asinMetadataCallbacks:this.asinMetadataContext.value.asinMetadataCallbacks,asinList:this.asinList})}render(){return G`<slot></slot>`}},t([ke({type:Array})],e.AsinMetadataContextProvider.prototype,"asinList",void 0),e.AsinMetadataContextProvider=t([ze("bds-asin-metadata-context-provider")],e.AsinMetadataContextProvider);const Ue="toggle-button-group";class Ne extends be{}t([ye({context:$e,subscribe:!0})],Ne.prototype,"renderContext",void 0),e.ToggleButtonGroupContextProvider=class extends Ne{constructor(){super(...arguments),this.multipleSelect=!1,this.selectedButtonIds=[],this.toggleButtonGroupContext=new fe(this,{context:Ue,initialValue:{selectedButtonIds:[],multipleSelect:!0,groupName:void 0,onButtonToggle:this.handleButtonToggle.bind(this)}})}handleButtonToggle(e){var t;let i;if(this.selectedButtonIds.includes(e)){if(!this.multipleSelect&&1===this.selectedButtonIds.length)return;i=this.selectedButtonIds.filter((t=>t!==e))}else i=this.multipleSelect?[...this.selectedButtonIds,e]:[e];this.selectedButtonIds=i,null===(t=this.onButtonToggle)||void 0===t||t.call(this,e)}updated(){this.toggleButtonGroupContext.setValue({selectedButtonIds:[...this.selectedButtonIds],multipleSelect:this.multipleSelect,groupName:this.groupName,onButtonToggle:this.handleButtonToggle.bind(this)})}render(){return G`
            <div class="bds-toggle-button-group" role="group">
                <slot></slot>
            </div>
        `}},t([ke({type:Boolean,reflect:!0})],e.ToggleButtonGroupContextProvider.prototype,"multipleSelect",void 0),t([ke({type:Array,reflect:!0})],e.ToggleButtonGroupContextProvider.prototype,"selectedButtonIds",void 0),t([ke({type:String,reflect:!0})],e.ToggleButtonGroupContextProvider.prototype,"groupName",void 0),t([ke({type:Object,reflect:!0})],e.ToggleButtonGroupContextProvider.prototype,"onButtonToggle",void 0),e.ToggleButtonGroupContextProvider=t([ze("bds-toggle-button-group-context-provider")],e.ToggleButtonGroupContextProvider);
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var je=1,Ve=2,We=e=>function(){for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return{_$litDirective$:e,values:i}};class Ge{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var qe="important",Qe=" !"+qe,Ke=We(class extends Ge{constructor(e){var t;if(super(e),e.type!==je||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{var o=e[i];return null==o?t:t+"".concat(i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase(),":").concat(o,";")}),"")}update(e,t){var[i]=t,{style:o}=e.element;if(void 0===this.ht){for(var a in this.ht=new Set,i)this.ht.add(a);return this.render(i)}for(var r in this.ht.forEach((e=>{null==i[e]&&(this.ht.delete(e),e.includes("-")?o.removeProperty(e):o[e]="")})),i){var s=i[r];if(null!=s){this.ht.add(r);var n="string"==typeof s&&s.endsWith(Qe);r.includes("-")||n?o.setProperty(r,n?s.slice(0,-11):s,n?qe:""):o[r]=s}}return q}}),Xe=We(class extends Ge{constructor(e){var t;if(super(e),e.type!==je||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){var i,o,[a]=t;if(void 0===this.it){for(var r in this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e)))),a)a[r]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(r))&&this.it.add(r);return this.render(a)}var s=e.element.classList;for(var n in this.it.forEach((e=>{e in a||(s.remove(e),this.it.delete(e))})),a){var l=!!a[n];l===this.it.has(n)||(null===(o=this.nt)||void 0===o?void 0:o.has(n))||(l?(s.add(n),this.it.add(n)):(s.remove(n),this.it.delete(n)))}return q}}),Ye=v`
    .alert-container-inline {
        display: flex;
        align-items: center;
        gap: var(--bds-size-utils-padding-10);
    }

    .alert-container-page-level {
        display: flex;
        align-items: flex-start;
        gap: var(--bds-size-spacing-x-small);
        background: var(--bds-color-functional-neutral-surface);
        border-radius: var(--bds-size-radius-small);
        padding: var(--bds-size-spacing-medium) var(--bds-size-spacing-medium)
            var(--bds-size-spacing-medium) var(--bds-size-spacing-x-large);
        position: relative;
    }

    .alert-container-page-level-with-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--bds-size-utils-padding-10);
        background: var(--bds-color-functional-neutral-surface);
        border-radius: var(--bds-size-radius-small);
        padding: var(--bds-size-spacing-medium) var(--bds-size-spacing-medium)
            var(--bds-size-spacing-medium) var(--bds-size-spacing-x-large);
        position: relative;
    }

    .alert-border-overlay {
        position: absolute;
        inset: 0;
        border: var(--bds-size-line-weight-medium) solid;
        border-left: var(--bds-alert-size-line-weight-accent) solid;
        border-radius: var(--bds-size-radius-small);
        pointer-events: none;
    }

    .alert-text-base {
        font-family: var(--bds-font-family-functional-body);
        font-weight: var(--bds-font-weight-functional-body);
        word-wrap: break-word;
    }

    .alert-header-container {
        display: flex;
        align-items: center;
        gap: var(--bds-size-spacing-x-small);
        align-self: stretch;
    }

    .alert-title {
        font-family: var(--bds-font-family-functional-title);
        font-weight: var(--bds-font-weight-functional-title);
        flex: 1;
        min-height: 1px;
        min-width: 1px;
    }
`;
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const Je=["layout","theme","pagetype","devicetype","operatingsystem","hostapplication","locale","marketplace"];function Ze(e,t,i){if(!t||!i)return e;let o=Object.assign({},e);return t.filter((e=>function(e,t){return Object.keys(e).every((i=>e[i]===t[i]))}(e.targeting,i))).sort(((e,t)=>function(e,t){const i=Object.keys(e.targeting).length-Object.keys(t.targeting).length;if(0!==i)return i;let o=0,a=0,r=0;const s=Object.keys(e.targeting),n=Object.keys(t.targeting);for(let e=0;e<s.length;e++){const t=Je.indexOf(s[e]),i=Je.indexOf(n[e]);o+=t-i,a=t>a?t:a,r=i>r?i:r}return 0===o?a-r:o}(e,t))).forEach((e=>{o=Object.assign(Object.assign({},o),e.overrides)})),o}class et extends be{getRenderConfiguration(e){return Ze(this.getDefaultConfiguration(),this.getConfigurationOverrides(),e?Object.assign(Object.assign({},this.renderContext),{layout:e}):this.renderContext)}}t([ye({context:$e,subscribe:!0})],et.prototype,"renderContext",void 0);var tt=v`
    :host {
        display: inline-block;
    }
`;const it="books-design-system-web",ot="https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem",at=`${ot}/icons`,rt=`${ot}/book-placeholder-light.svg`,st=`${ot}/book-placeholder-dark.svg`,nt=new Set(["heart.svg","heart-filled.svg"]),lt="_CBTAG_";var dt,ct;function ut(e,t,i,o="jpg",a,r,s=dt.HEIGHT,n=500){if(!e||"01RmK+J4pJL"===e)return"dark"===i?st:rt;return[1,1.5,2,3,4].filter(((e,i)=>e*t<=n||0===i)).map((i=>function(e,t,i="jpg",o,a,r=dt.HEIGHT){return o?`https://m.media-amazon.com/images/I/${e}.${o}_U${r}${t}${a?`_FM${a}_`:""}.${i}?aicid=${it}`:`https://m.media-amazon.com/images/I/${e}._U${r}${t}${a?`_FM${a}_`:""}.${i}?aicid=${it}`}(e,t*i,o,a,r,s)+` ${i}x`)).join(", ")}function bt(e){let t=e;return nt.has(e)&&(t=function(e){if(!e||"string"!=typeof e)return e;const t=e.lastIndexOf(".");if(-1===t)return e;const i=e.substring(0,t),o=e.substring(t+1);return[i,lt,o].join(".")}(e)),`${at}/${t}`}!function(e){e.HEIGHT="Y",e.WIDTH="X"}(dt||(dt={})),e.Icon=class extends be{constructor(){super(...arguments),this.iconColor="var(--bds-color-functional-neutral-outline-bright)",this.iconSize="24px"}render(){return G`
            <div
                style="
                    width: ${this.iconSize};
                    height: ${this.iconSize};
                    mask: url(${bt(this.iconName)}) no-repeat center;
                    mask-size: 100%;
                    background-color: ${this.iconColor}
                "></div>
        `}},e.Icon.styles=tt,t([ke({type:String})],e.Icon.prototype,"iconName",void 0),t([ke({type:String})],e.Icon.prototype,"iconColor",void 0),t([ke({type:String})],e.Icon.prototype,"iconSize",void 0),e.Icon=t([ze("bds-icon")],e.Icon),e.Alert=ct=class extends et{constructor(){super(...arguments),this.variant="info",this.type="inline",this.message="",this.title=""}willUpdate(e){var t,i;if(super.willUpdate(e),e.has("message")&&(this.message=null!==(t=this.message)&&void 0!==t?t:""),e.has("title")&&(this.title=null!==(i=this.title)&&void 0!==i?i:""),e.has("variant")){["success","error","info","warning"].includes(this.variant)||(this.variant="info")}if(e.has("type")){["inline","page-level","page-level-with-title"].includes(this.type)||(this.type="inline")}}getDefaultConfiguration(){return{inlineBodyFontSize:"var(--bds-size-font-functional-label-small)",inlineBodyLineHeight:"var(--bds-size-line-height-functional-label-medium)",pageVariantFontSize:"var(--bds-size-font-functional-label-medium)",pageVariantLineHeight:"var(--bds-size-line-height-functional-label-medium)",headerFontSize:"var(--bds-size-font-functional-title-large)",headerLineHeight:"var(--bds-size-line-height-functional-title-large)",isMobile:!1}}getConfigurationOverrides(){return[{targeting:{devicetype:"mobile"},overrides:{inlineBodyFontSize:"var(--bds-size-font-functional-label-medium)",inlineBodyLineHeight:"var(--bds-size-line-height-functional-label-medium)",pageVariantFontSize:"var(--bds-size-font-functional-label-medium)",pageVariantLineHeight:"var(--bds-size-line-height-functional-label-medium)",headerFontSize:"var(--bds-size-font-functional-title-medium)",headerLineHeight:"var(--bds-size-line-height-functional-title-medium)",isMobile:!0}}]}getIconName(){return ct.VARIANT_CONFIG[this.variant].icon}getAlertColor(){return ct.VARIANT_CONFIG[this.variant].color}getTextColor(){const e=ct.VARIANT_CONFIG[this.variant];return"inline"===this.type?e.textColorInline:e.textColorPageLevel}render(){const e=this.getRenderConfiguration(),t=["inline","page-level","page-level-with-title"].includes(this.type)?"page-level-with-title"!==this.type||this.title?this.type:"page-level":"inline",i=!e.isMobile||"inline"===t,o={fontSize:e.headerFontSize,lineHeight:e.headerLineHeight,color:"var(--bds-color-functional-neutral-on-surface)"},a={fontSize:"inline"!==t?e.pageVariantFontSize:e.inlineBodyFontSize,lineHeight:"inline"!==t?e.pageVariantLineHeight:e.inlineBodyLineHeight,color:this.getTextColor()};return G`
            <div
                class=${Xe({"alert-container-inline":"inline"===t,"alert-container-page-level":"page-level"===t,"alert-container-page-level-with-title":"page-level-with-title"===t})}
                aria-live="polite">
                ${"page-level-with-title"===this.type&&this.title?G`
                          <div class="alert-header-container">
                              ${i?G`
                                        <bds-icon
                                            iconName="${this.getIconName()}"
                                            iconColor="${this.getAlertColor()}"
                                            iconSize="18px">
                                        </bds-icon>
                                    `:""}
                              <div class="alert-title" style=${Ke(o)}>
                                  ${this.title}
                              </div>
                          </div>
                      `:""}
                ${i&&"page-level-with-title"!==t?G`
                          <bds-icon
                              iconName="${this.getIconName()}"
                              iconColor="${this.getAlertColor()}"
                              iconSize="18px">
                          </bds-icon>
                      `:""}
                <div class="alert-text-base" style=${Ke(a)}>${this.message}</div>
                ${"inline"!==t?G`
                          <div
                              class="alert-border-overlay"
                              style="border-color: ${this.getAlertColor()}"></div>
                      `:""}
            </div>
        `}},e.Alert.styles=Ye,e.Alert.VARIANT_CONFIG={success:{icon:"checkmark-circle-filled.svg",color:"var(--bds-color-functional-supplemental-alert-success)",textColorInline:"var(--bds-color-functional-supplemental-alert-success)",textColorPageLevel:"var(--bds-color-functional-neutral-on-surface)"},error:{icon:"error-filled.svg",color:"var(--bds-color-functional-supplemental-alert-error)",textColorInline:"var(--bds-color-functional-supplemental-alert-error)",textColorPageLevel:"var(--bds-color-functional-neutral-on-surface)"},info:{icon:"info-filled.svg",color:"var(--bds-color-functional-supplemental-alert-information)",textColorInline:"var(--bds-color-functional-neutral-on-surface)",textColorPageLevel:"var(--bds-color-functional-neutral-on-surface)"},warning:{icon:"warning-filled.svg",color:"var(--bds-color-functional-supplemental-alert-warning)",textColorInline:"var(--bds-color-functional-neutral-on-surface)",textColorPageLevel:"var(--bds-color-functional-neutral-on-surface)"}},t([ke({type:String})],e.Alert.prototype,"variant",void 0),t([ke({type:String})],e.Alert.prototype,"type",void 0),t([ke({type:String})],e.Alert.prototype,"message",void 0),t([ke({type:String})],e.Alert.prototype,"title",void 0),e.Alert=ct=t([ze("bds-alert")],e.Alert);var ht=v`
    .coverImageWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: var(--bds-size-spacing-2x-small);
        position: relative;
    }

    .programBadge {
        max-width: 100%;
    }

    .coverImage {
        display: block;
    }

    .coverImageWrapper.contained .coverImage,
    .coverImageWrapper.containedBaseline .coverImage {
        max-width: 100%;
        object-fit: contain;
    }

    .coverImageWrapper.blurredBackdrop {
        margin: 0;
    }

    .coverImageWrapper.blurredBackdrop .coverImageWithBackdrop {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .coverImageWrapper.blurredBackdrop .blurredCoverImageWrapper {
        overflow: hidden;
        background: var(--bds-color-expressive-brand-white);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
        position: relative;
    }

    .coverImageWrapper.blurredBackdrop.dark .blurredCoverImageWrapper::after {
        opacity: 0.2;
    }

    .coverImageWrapper.blurredBackdrop .blurredCoverImageWrapper picture {
        width: 113%;
        height: 113%;
        min-width: 113%;
        min-height: 113%;
        display: flex;
        background: rgba(0, 0, 0, 3%);
    }

    .coverImageWrapper.blurredBackdrop.dark .blurredCoverImageWrapper picture {
        background: rgba(0, 0, 0, 20%);
    }

    .coverImageWrapper.blurredBackdrop .blurredCoverImage {
        filter: blur(7px);
        min-width: 100%;
        min-height: 100%;
        opacity: 0.6;
        object-fit: cover;
    }

    .coverImageWrapper.blurredBackdrop .coverImage {
        position: absolute;
        max-width: calc(100% - 2 * var(--bds-size-spacing-small));
        object-fit: contain;
        left: 50%;
        transform: translateX(-50%);
    }

    .coverImageWrapper.blurredBackdrop bds-program-badge {
        position: absolute;
        display: flex;
        justify-content: center;
        max-width: calc(100% - 2 * var(--bds-size-spacing-small));
        object-fit: contain;
        top: var(--bds-size-spacing-x-small);
        left: 50%;
        transform: translateX(-50%);
    }

    .grid.coverImageWrapper .coverImageContainer {
        border-radius: 0 0 var(--bds-size-radius-small) var(--bds-size-radius-small);
        overflow: hidden;
        padding: var(--bds-size-spacing-none) var(--bds-size-spacing-x-small)
            var(--bds-size-spacing-x-small) var(--bds-size-spacing-x-small);
        position: relative;
    }

    .grid.coverImageWrapper .coverImageContainer::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 3%);
        pointer-events: none;
    }

    .responsive.coverImageWrapper img {
        display: flex;
        justify-content: center;
        object-fit: contain;
        align-items: center;
        margin: auto;
        width: 100%;
    }

    .grid.coverImageWrapper img {
        aspect-ratio: 1 / 1.25;
    }

    .responsive.coverImageWrapper {
        display: block;
    }

    .deepstack {
        position: relative;
        width: 100%;
        height: 15px;
        display: block;
    }

    .domino {
        position: relative;
        height: 100%;
        display: inline-block;
        align-self: stretch;
        margin-left: 2px;
        margin-right: 10px;
    }

    .domino:dir(rtl) {
        margin-left: 10px;
        margin-right: 2px;
    }

    .coverImageWrapper > picture:has(bds-domino) {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        max-width: 100%;
    }

    .grid.coverImageWrapper .coverImageContainer bds-deepstack {
        width: calc(100% - 4 * var(--bds-size-spacing-x-small)); /* Adjust for padding */
        margin: 0 auto;
    }

    .grid.coverImageWrapper .coverImageContainer > picture:has(bds-domino) {
        display: flex;
        flex-direction: row;
        gap: 4px;
        align-items: flex-start;
    }

    .grid.coverImageWrapper .coverImageContainer picture:has(bds-domino) img {
        width: calc(100% - 24px); /* Adjust for domino width + gap */
    }

    .grid.coverImageWrapper .coverImageContainer .domino {
        width: 20px;
        height: 80%;
        flex-shrink: 0;
    }

    /* Class-based styling for aspect ratio constraints */
    .coverImageWrapper.fixedHeight {
        /* stylelint-disable-next-line csstools/value-no-unknown-custom-properties */
        min-width: calc(var(--image-height) * 0.6 - 2 * var(--bds-size-spacing-2x-small));
    }

    .coverImageWrapper.fixedHeight picture img {
        object-fit: contain;
        /* stylelint-disable-next-line csstools/value-no-unknown-custom-properties */
        max-width: calc(var(--image-height) * 1.3);
    }

    .shouldNormalize.coverImageWrapper.fixedHeight::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 3%);
        border-radius: var(--bds-size-radius-x-small);
        pointer-events: none;
    }

    .shouldNormalize.coverImageWrapper.fixedHeight {
        padding: var(--bds-size-spacing-2x-small);
        /* stylelint-disable-next-line csstools/value-no-unknown-custom-properties */
        max-width: calc(var(--image-height) * 1.3 - 2 * var(--bds-size-spacing-2x-small));
    }

    .shouldNormalize.coverImageWrapper.fixedHeight picture img {
        /* stylelint-disable-next-line csstools/value-no-unknown-custom-properties */
        max-width: calc(var(--image-height) * 1.3 - 2 * var(--bds-size-spacing-2x-small));
    }

`
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,gt=(e,t,i)=>{for(var o of t)if(o[0]===e)return(0,o[1])();return null==i?void 0:i()},pt=(e,t)=>{var i,o,a=e._$AN;if(void 0===a)return!1;for(var r of a)null===(o=(i=r)._$AO)||void 0===o||o.call(i,t,!1),pt(r,t);return!0},vt=e=>{var t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===(null==i?void 0:i.size))},mt=e=>{for(var t;t=e._$AM;e=t){var i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),yt(t)}};function ft(e){void 0!==this._$AN?(vt(this),this._$AM=e,mt(this)):this._$AM=e}function _t(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(t)if(Array.isArray(o))for(var r=i;r<o.length;r++)pt(o[r],!1),vt(o[r]);else null!=o&&(pt(o,!1),vt(o));else pt(this,e)}var yt=e=>{var t,i,o,a;e.type==Ve&&(null!==(t=(o=e)._$AP)&&void 0!==t||(o._$AP=_t),null!==(i=(a=e)._$AQ)&&void 0!==i||(a._$AQ=ft))};class xt extends Ge{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),mt(this),this.isConnected=e._$AU}_$AO(e){var t,i,o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?null===(t=this.reconnected)||void 0===t||t.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),o&&(pt(this,e),vt(this))}setValue(e){if((e=>void 0===e.strings)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */(this._$Ct))this._$Ct._$AI(e,this);else{var t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var wt=()=>new kt;class kt{}var Ct=new WeakMap,St=We(class extends xt{render(e){return Q}update(e,t){var i,[o]=t,a=o!==this.G;return a&&void 0!==this.G&&this.ot(void 0),(a||this.rt!==this.lt)&&(this.G=o,this.dt=null===(i=e.options)||void 0===i?void 0:i.host,this.ot(this.lt=e.element)),Q}ot(e){var t;if("function"==typeof this.G){var i=null!==(t=this.dt)&&void 0!==t?t:globalThis,o=Ct.get(i);void 0===o&&(o=new WeakMap,Ct.set(i,o)),void 0!==o.get(this.G)&&this.G.call(this.dt,void 0),o.set(this.G,e),void 0!==e&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,i;return"function"==typeof this.G?null===(t=Ct.get(null!==(e=this.dt)&&void 0!==e?e:globalThis))||void 0===t?void 0:t.get(this.G):null===(i=this.G)||void 0===i?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),$t=e=>null!=e?e:Q,Bt=v`
    :host {
        line-height: 0;
    }

    .programBadge {
        max-width: 50vw;
    }
`
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function zt(e,t,i){return e?t():null==i?void 0:i()}function Tt(e){var t;if("object"==typeof e)return e;const i=(t=class extends e{constructor(){super(...arguments),this.isLoading=!1,this.skeletonType="metadata"}connectedCallback(){super.connectedCallback(),new pe(this,{context:Ie,callback:e=>{this.context=e},subscribe:!0})}shouldShowSkeleton(){var e;if(this.isLoading)return!0;if(!(null===(e=this.context)||void 0===e?void 0:e.metadataToLazyLoad))return!1;const t=this.constructor.elementProperties;if(!t)return!1;const i=new Set(t.keys()),o=this.context.metadataToLazyLoad.filter((e=>i.has(e)));if(!o.length)return!1;return!o.some((e=>{const t=this[e];return t&&(!Array.isArray(t)||t.length>0)}))}render(){return zt(this.shouldShowSkeleton(),(()=>G`<bds-skeleton-loader
                    type="${this.skeletonType}"
                    .width=${this.skeletonWidth}
                    .widthPx=${this.skeletonWidthPx}
                    .heightPx=${this.skeletonHeightPx}></bds-skeleton-loader>`),(()=>super.render()))}},function(e,t,i){"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:i?"".concat(i," ",t):t})}(t,"enhanced"),t.properties=Object.assign(Object.assign({},e.properties||{}),{isLoading:{type:Boolean},skeletonType:{type:String},skeletonWidth:{type:Number},skeletonWidthPx:{type:Number},skeletonHeightPx:{type:Number}}),t);return i}var Pt=v`
    @keyframes wave {
        0% {
            background-position: 150% 0;
        }

        80% {
            background-position: 0% 0;
        }
    }

    @keyframes fade {
        0%,
        100% {
            opacity: 1;
        }

        50% {
            opacity: 0.2;
        }
    }

    .placeholder {
        background: linear-gradient(
            90deg,
            var(--bds-color-expressive-gradients-skeleton-loader-stop-1) 10%,
            var(--bds-color-expressive-gradients-skeleton-loader-stop-2) 50%,
            var(--bds-color-expressive-gradients-skeleton-loader-stop-1) 90%
        );
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: 300% 100%;
        margin: var(--bds-size-utils-padding-1) 0;
        animation: wave 2000ms infinite 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media (prefers-reduced-motion: reduce) {
        .placeholder {
            animation: fade 2000ms infinite 500ms ease-in-out;
        }
    }

    .header {
        width: var(--skeleton-width, var(--bds-size-tap-target-minimum));
        height: var(--skeleton-height, var(--bds-size-line-height-functional-body-small));
    }

    .metadata {
        width: var(--skeleton-width, var(--bds-size-tap-target-minimum));
        height: var(--skeleton-height, var(--bds-size-line-height-functional-body-small));
    }

    .text {
        width: var(--skeleton-width, var(--bds-size-tap-target-minimum));
        height: var(--skeleton-height, var(--bds-size-line-height-functional-body-small));
        border-radius: var(--bds-size-radius-small);
    }

    .image {
        width: var(--skeleton-width, calc(var(--bds-size-tap-target-minimum) * 4));
        height: var(--skeleton-height, calc(var(--bds-size-tap-target-minimum) * 6));
        border-radius: var(--bds-size-radius-small);
    }

    .button {
        width: var(--skeleton-width, calc(var(--bds-size-tap-target-minimum) * 2.5));
        height: var(--skeleton-height, var(--bds-size-tap-target-minimum));
        border-radius: var(--bds-size-radius-circle);
    }

    .button.small {
        width: var(--skeleton-width, calc(var(--bds-size-tap-target-minimum) * 2));
        height: var(--skeleton-height, var(--bds-size-line-height-functional-body-small));
    }
`;const It={metadata:{widthPx:90,heightPx:20},header:{widthGridUnits:6,heightPx:20},text:{widthPx:200,heightPx:20},image:{widthPx:178,heightPx:266},button:{widthPx:115,heightPx:31},"button-small":{widthPx:91,heightPx:22}};var At;e.SkeletonLoader=class extends Ne{constructor(){super(...arguments),this.type="metadata",this.size="base"}getSkeletonStyles(){const e={};if(void 0!==this.widthPx)e["--skeleton-width"]=`${this.widthPx}px`;else if(void 0!==this.width&&("image"===this.type||"text"===this.type||"button"===this.type||"header"===this.type||"metadata"===this.type)){const t=this.width/12*100;e["--skeleton-width"]=`${t}%`}return void 0!==this.heightPx&&(e["--skeleton-height"]=`${this.heightPx}px`),e}render(){var e,t;const i=this.getSkeletonStyles();return G`<div
            class="placeholder ${this.type} ${this.size} ${null!==(t=null===(e=this.renderContext)||void 0===e?void 0:e.theme)&&void 0!==t?t:""}"
            style=${Ke(i)}
            aria-busy="true"
            role="status"
            aria-live="polite"></div>`}},e.SkeletonLoader.styles=Pt,t([ke({type:String})],e.SkeletonLoader.prototype,"type",void 0),t([ke({type:String})],e.SkeletonLoader.prototype,"size",void 0),t([ke({type:Number})],e.SkeletonLoader.prototype,"width",void 0),t([ke({type:Number})],e.SkeletonLoader.prototype,"widthPx",void 0),t([ke({type:Number})],e.SkeletonLoader.prototype,"heightPx",void 0),t([ye({context:$e,subscribe:!0})],e.SkeletonLoader.prototype,"renderContext",void 0),e.SkeletonLoader=t([ze("bds-skeleton-loader"),He],e.SkeletonLoader),e.ProgramBadge=At=class extends Ne{constructor(){super(...arguments),this.skeletonType="metadata",this.skeletonWidthPx=It.metadata.widthPx,this.skeletonHeightPx=It.metadata.heightPx,this.badgeExtension=At.DEFAULT_BADGE_EXTENSION,this.badgeImageHeightPx=14}shouldRenderBadge(){return!!this.badgePhysicalId}firstUpdated(){this.badgeAltText&&this.setAttribute("data-csa-c-badge-alt-text",this.badgeAltText)}renderBadge(){var e,t,i;return this.badgePhysicalId?G`<img
            style="height: ${this.badgeImageHeightPx}px;"
            class="programBadge"
            alt="${null!==(e=this.badgeAltText)&&void 0!==e?e:""}"
            src="${t=this.badgePhysicalId,i=this.badgeExtension||At.DEFAULT_BADGE_EXTENSION,`https://m.media-amazon.com/images/I/${t}.${i}?aicid=${it}`}" />`:Q}render(){return zt(this.shouldRenderBadge(),(()=>this.renderBadge()))}},e.ProgramBadge.styles=Bt,e.ProgramBadge.DEFAULT_BADGE_EXTENSION="svg",t([ke({type:String})],e.ProgramBadge.prototype,"badgePhysicalId",void 0),t([ke({type:String})],e.ProgramBadge.prototype,"badgeAltText",void 0),t([ke({type:String})],e.ProgramBadge.prototype,"badgeExtension",void 0),t([ke({type:Number})],e.ProgramBadge.prototype,"badgeImageHeightPx",void 0),e.ProgramBadge=At=t([ze("bds-program-badge"),He,Tt],e.ProgramBadge);const Lt=(e,t=!1)=>p(`\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: ${t?"-webkit-inline-box":"-webkit-box"};\n        -webkit-line-clamp: ${e};\n        -webkit-box-orient: vertical;\n    `),Ot=e=>{try{return e/parseInt(getComputedStyle(document.documentElement).fontSize)}catch(t){return e/16}};var Rt=v`
    #deepstack {
        height: 100%;
        position: relative;
    }

    #deepstack-bar-1 {
        height: 4px;
        width: 80%;
        background-color: #949185;
        position: absolute;
        top: 0;
        left: 10%;
    }

    #deepstack-bar-2 {
        height: 4px;
        position: absolute;
        top: 50%;
        left: 5%;
        width: 90%;
        background-color: #949185;
    }
`;e.DeepStack=class extends be{constructor(){super(...arguments),this.shouldShowDeepstack=!1}render(){return G` <div id="deepstack">
            <div id="deepstack-bar-1"></div>
            <div id="deepstack-bar-2"></div>
        </div>`}},e.DeepStack.styles=Rt,t([ke({type:Boolean})],e.DeepStack.prototype,"shouldShowDeepstack",void 0),e.DeepStack=t([ze("bds-deepstack")],e.DeepStack);var Ft=v`
    #domino {
        height: 100%;
        width: 100%;
        position: relative;
    }

    #domino-bar-1 {
        height: 90%;
        width: 4px;
        background-color: #949185;
        position: absolute;
        top: 5%;
        left: 2px;
        border-radius: 0 2px 2px 0;
    }

    #domino-bar-1:dir(rtl) {
        left: auto;
        right: 2px;
    }

    #domino-bar-2 {
        height: 80%;
        width: 4px;
        background-color: #949185;
        position: absolute;
        top: 10%;
        left: 10px;
        border-radius: 0 2px 2px 0;
    }

    #domino-bar-2:dir(rtl) {
        left: auto;
        right: 10px;
    }
`;e.Domino=class extends be{render(){return G`
            <div id="domino">
                <div id="domino-bar-1"></div>
                <div id="domino-bar-2"></div>
            </div>
        `}},e.Domino.styles=Ft,e.Domino=t([ze("bds-domino")],e.Domino);const Dt="Program",Et="LimitedTimeFree",Mt="WaitForFree",Ht=new Set(["responsiveToContainer","grid"]),Ut={coverImageHeightPx:266,coverImageWidthPx:void 0,wrapperHeight:266,wrapperWidth:void 0,badgeImageHeightPx:14,freeProgramBadgeHeightPx:18,badgeMarginSizePx:4,disableProgramBadge:!1},Nt=[{targeting:{layout:"contained"},overrides:{coverImageHeightPx:180,wrapperHeight:180,wrapperWidth:150}},{targeting:{layout:"containedBaseline"},overrides:{coverImageHeightPx:200,wrapperHeight:200,wrapperWidth:194}},{targeting:{layout:"blurredBackdrop"},overrides:{coverImageHeightPx:170,wrapperHeight:190,wrapperWidth:Ot(150)}},{targeting:{layout:"grid"},overrides:{coverImageHeightPx:247.5,wrapperHeight:void 0,wrapperWidth:void 0,disableProgramBadge:!0}},{targeting:{layout:"responsiveToContainer"},overrides:{coverImageHeightPx:247.5,wrapperHeight:void 0,wrapperWidth:void 0,disableProgramBadge:!0}},{targeting:{devicetype:"mobile"},overrides:{badgeImageHeightPx:10,freeProgramBadgeHeightPx:24}},{targeting:{pagetype:"kindleHome"},overrides:{badgeImageHeightPx:11}},{targeting:{layout:"fixedHeight",devicetype:"tablet"},overrides:{coverImageHeightPx:210,wrapperHeight:210}},{targeting:{layout:"fixedHeight",devicetype:"mobile"},overrides:{coverImageHeightPx:210,wrapperHeight:210}},{targeting:{layout:"fixedHeight",pagetype:"kindleHome"},overrides:{coverImageHeightPx:210,wrapperHeight:210}},{targeting:{layout:"fixedHeight",pagetype:"eBooksTYPMessage",devicetype:"mobile"},overrides:{coverImageHeightPx:180,wrapperHeight:180}},{targeting:{layout:"fixedHeight",pagetype:"eBooksTYPMessage",devicetype:"tablet"},overrides:{coverImageHeightPx:210,wrapperHeight:210}},{targeting:{layout:"fixedHeight",pagetype:"eBooksTYPMessage",devicetype:"desktop"},overrides:{coverImageHeightPx:210,wrapperHeight:210}},{targeting:{layout:"fixedHeight",pagetype:"detailPage"},overrides:{disableProgramBadge:!0,coverImageHeightPx:160,wrapperHeight:160}},{targeting:{layout:"fixedHeight",pagetype:"detailPage",devicetype:"mobile"},overrides:{coverImageHeightPx:160,wrapperHeight:160}},{targeting:{layout:"fixedHeight",pagetype:"detailPage",devicetype:"tablet"},overrides:{coverImageHeightPx:160,wrapperHeight:160}},{targeting:{layout:"fixedHeight",pagetype:"detailPage",devicetype:"desktop"},overrides:{coverImageHeightPx:160,wrapperHeight:160}},{targeting:{layout:"contained",pagetype:"kindleHome"},overrides:{wrapperWidth:130}},{targeting:{layout:"containedBaseline",pagetype:"kindleHome"},overrides:{wrapperWidth:130}},{targeting:{layout:"list"},overrides:{coverImageWidthPx:100,wrapperWidth:100,wrapperHeight:180,coverImageHeightPx:180,disableProgramBadge:!0}}];e.BookCoverImage=class extends et{constructor(){super(...arguments),this.imageRef=wt(),this.blurredImageRef=wt(),this.wrapperRef=wt(),this.layout="fixedHeight",this.coverImageExtension="jpg",this.badgeExtension=e.ProgramBadge.DEFAULT_BADGE_EXTENSION,this.useNoMetadataLayout=!1,this.shouldRenderDeepStack=!1,this.shouldRenderDomino=!1,this.enableFocusSpacing=!1}getImageSource(){var e;return null===(e=this.imageRef.value)||void 0===e?void 0:e.currentSrc}getDefaultConfiguration(){return Ut}getConfigurationOverrides(){return Nt}getBadgeHeightWithMargin(e){const t=this.whichBadgeToRender(e);return t===Dt?e.badgeImageHeightPx+e.badgeMarginSizePx:t===Et||t===Mt?e.freeProgramBadgeHeightPx+e.badgeMarginSizePx:0}getImageRenderHeight(e){const t=e.coverImageHeightPx,i=this.getBadgeHeightWithMargin(e);return this.shouldRenderDeepStack?t-i-15:t-i}getResponsiveImageCssClass(){return Ht.has(this.layout)?"responsive":void 0}whichBadgeToRender(e){if(!e.disableProgramBadge)return this.badgePhysicalId?Dt:this.limitedTimeFreeBadge?Et:this.waitForFreeBadge&&this.waitForFreeBadge.badgeLabel&&this.waitForFreeBadge.status?Mt:void 0}renderProgramBadge(e){return gt(this.whichBadgeToRender(e),[[Dt,()=>G` <bds-program-badge
                    badgePhysicalId=${$t(this.badgePhysicalId)}
                    badgeAltText=${$t(this.badgeAltText)}
                    badgeExtension=${this.badgeExtension}
                    badgeImageHeightPx=${e.badgeImageHeightPx}
                    style="margin-bottom: ${e.badgeMarginSizePx}px">
                </bds-program-badge>`],[Et,()=>G`<bds-limited-time-free-badge
                    badgeLabel=${$t(this.limitedTimeFreeBadge)}
                    style="margin-bottom: ${e.badgeMarginSizePx}px">
                </bds-limited-time-free-badge>`],[Mt,()=>G`<bds-wait-for-free-badge
                    badgeLabel=${this.waitForFreeBadge.badgeLabel}
                    status=${this.waitForFreeBadge.status}
                    style="margin-bottom: ${e.badgeMarginSizePx}px">
                </bds-wait-for-free-badge>`]])}renderCoverImageWithBlurredBackdrop(e){var t,i,o,a,r;const s=ut(this.coverImagePhysicalId,e.coverImageHeightPx,null!==(i=null===(t=this.renderContext)||void 0===t?void 0:t.theme)&&void 0!==i?i:"light",this.coverImageExtension,this.imageStyleCode,"webp"),n=ut(this.coverImagePhysicalId,e.coverImageHeightPx,null!==(a=null===(o=this.renderContext)||void 0===o?void 0:o.theme)&&void 0!==a?a:"light",this.coverImageExtension,this.imageStyleCode),l=this.useNoMetadataLayout?this.renderProgramBadge(e):"",d=l?`(${e.badgeImageHeightPx}px + var(--bds-size-utils-padding-6))`:"0px",c=l?"var(--bds-size-spacing-x-small)":"var(--bds-size-spacing-small)",u=this.useNoMetadataLayout?"var(--bds-size-spacing-small)":"var(--bds-size-spacing-x-small)",b=`calc(100% - ${c} - ${d} - ${u})`,h=`calc(${c} + ${d})`,g="var(--bds-size-spacing-x-small)",p=l?`(${c} + ${d} + ${g})`:"0px",v=`calc(100% - ${p} - ${this.useNoMetadataLayout?"0px":`(${u} + ${g})`})`;return G`
            <div
                class="coverImageWithBackdrop"
                style="${this.useNoMetadataLayout?"align-content: end;":""}">
                ${l}
                <div
                    class="blurredCoverImageWrapper"
                    aria-hidden="true"
                    style="height: ${v}; margin-top: calc(${p})">
                    <picture>
                        <source srcset="${s}" type="image/webp" />
                        <source srcset="${n}" type="image/jpeg" />
                        <img
                            ${St(this.blurredImageRef)}
                            class="blurredCoverImage"
                            alt=""
                            @error="${this.handleBlurredImageLoadError}" />
                    </picture>
                </div>
                <picture>
                    <source srcset="${s}" type="image/webp" />
                    <source srcset="${n}" type="image/jpeg" />
                    <img
                        ${St(this.imageRef)}
                        class="coverImage"
                        style="height: ${b}; top: ${h};"
                        alt="${null!==(r=this.coverImageAltText)&&void 0!==r?r:""}"
                        @error="${this.handleCoverImageLoadError}" />
                </picture>
            </div>
        `}getCoverImageStyle(e){switch(this.layout){case"grid":return`min-height: ${e/2}px;`;case"list":return`max-height: ${e}px; width: auto; max-width: 25vw;`;case"containedBaseline":return`max-height: ${e}px; min-height: ${e/2}px; box-shadow: 0px 4px 12px 0px #0f111140;`;default:return`max-height: ${e}px; min-height: ${e/2}px;`}}handleImageLoadError(e){var t,i;const o=e.value;o&&!o.src&&(null===(t=o.parentElement)||void 0===t||t.querySelectorAll("source").forEach((e=>e.srcset="")),o.src="dark"===(null===(i=this.renderContext)||void 0===i?void 0:i.theme)?st:rt)}handleCoverImageLoadError(){this.handleImageLoadError(this.imageRef)}handleBlurredImageLoadError(){this.handleImageLoadError(this.blurredImageRef)}shouldNormalize(){return!(!this.aspectRatio||!(this.aspectRatio<.6||this.aspectRatio>1.3)||"fixedHeight"!==this.layout)}handleImageLoad(e){if("fixedHeight"!==this.layout)return;const t=this.imageRef.value;if((null==t?void 0:t.clientWidth)&&(null==t?void 0:t.clientHeight)&&(this.aspectRatio=(null==t?void 0:t.clientWidth)/(null==t?void 0:t.clientHeight)),this.shouldNormalize()){const i=this.wrapperRef.value;if(i){i.classList.add("shouldNormalize");const t=this.getRenderConfiguration(this.layout),o=e+this.getBadgeHeightWithMargin(t);i.style.height=`calc(${o}px - 2 * var(--bds-size-spacing-2x-small))`}t&&(t.style.height=`calc(${e}px - 2 * var(--bds-size-spacing-2x-small))`)}}renderCoverImage(e,t){var i,o,a,r,s;const n="list"==this.layout&&t,l=n?t:e,d=n?dt.WIDTH:dt.HEIGHT,c=this.shouldRenderDomino?l-25:l;return G`<picture class="${this.layout}">
            ${zt(this.shouldRenderDeepStack,(()=>this.renderDeepStack()))}
            <source
                srcset="
                    ${ut(this.coverImagePhysicalId,c,null!==(o=null===(i=this.renderContext)||void 0===i?void 0:i.theme)&&void 0!==o?o:"light",this.coverImageExtension,this.imageStyleCode,"webp",d)}
                "
                type="image/webp" />
            <source
                srcset="
                    ${ut(this.coverImagePhysicalId,c,null!==(r=null===(a=this.renderContext)||void 0===a?void 0:a.theme)&&void 0!==r?r:"light",this.coverImageExtension,this.imageStyleCode,void 0,d)}
                "
                type="image/jpeg" />
            <img
                ${St(this.imageRef)}
                style="${this.getCoverImageStyle(e)}"
                height="${$t("fixedHeight"==this.layout?e:void 0)}"
                class="coverImage ${this.getResponsiveImageCssClass()}"
                alt="${null!==(s=this.coverImageAltText)&&void 0!==s?s:""}"
                @error="${this.handleCoverImageLoadError}"
                @load="${()=>this.handleImageLoad(e)}" />
            ${zt(this.shouldRenderDomino,(()=>this.renderDomino(e)))}
        </picture>`}renderDefaultCoverImage(e){return G`
            ${this.renderProgramBadge(e)}
            ${this.renderCoverImage(this.getImageRenderHeight(e),e.coverImageWidthPx)}
        `}renderDeepStack(){return G` <bds-deepstack class="deepstack"> </bds-deepstack> `}renderDomino(e){let t;return"grid"===this.layout?t=`height:${e-.2*e}px`:("responsiveToContainer"===this.layout||"list"===this.layout)&&(t="height: inherit"),G` <bds-domino style=${$t(t)} class="domino"> </bds-domino> `}renderGridCoverImage(e){return G`
            <div class="coverImageBlock">
                <div class="coverImageContainer">
                    ${this.renderCoverImage(e.coverImageHeightPx)}
                </div>
            </div>
        `}getCoverImageWrapperStyles(e){const t=this.enableFocusSpacing?"padding: 4px; margin: -4px;":"",i="fixedHeight"===this.layout?`--image-height: ${this.getImageRenderHeight(e)}px;`:"";switch(this.layout){case"contained":return`\n                    height: ${e.wrapperHeight}px;\n                    width: ${e.wrapperWidth}px;\n                    align-items: ${this.useNoMetadataLayout?"center":"flex-start"};\n                    ${t}\n                `;case"containedBaseline":return`\n                    height: ${e.wrapperHeight}px;\n                    width: ${e.wrapperWidth}px;\n                    align-items: center;\n                    justify-content: flex-end;\n                    ${t}\n                `;case"blurredBackdrop":return`\n                    height: ${e.wrapperHeight}px;\n                    width: ${e.wrapperWidth}rem;\n                    min-width: 100%;\n                    ${t}\n                `;case"grid":case"responsiveToContainer":return t||void 0;case"list":return`\n                    width: ${e.wrapperWidth}px;\n                    max-width: 25vw;\n                    max-height: ${e.wrapperHeight}px;\n                    align-items: center;\n                    justify-content: flex-start;\n                    ${t}\n                `;default:return`height: ${e.wrapperHeight}px; ${t} ${i}`}}applyDimensionOverrides(e){const t=Object.assign({},e);return this.height&&(t.wrapperHeight=this.height,"blurredBackdrop"===this.layout?t.coverImageHeightPx=this.height-20:t.coverImageHeightPx=this.height),this.width&&"fixedHeight"!==this.layout&&(t.coverImageWidthPx=this.width,t.wrapperWidth="blurredBackdrop"===this.layout?Ot(this.width):this.width),t}getRenderConfiguration(e){const t=super.getRenderConfiguration(e);return this.applyDimensionOverrides(t)}render(){var e;const t=this.getRenderConfiguration(this.layout);return G` <div
            ${St(this.wrapperRef)}
            class="coverImageWrapper ${this.layout} ${null===(e=this.renderContext)||void 0===e?void 0:e.theme} ${this.getResponsiveImageCssClass()}"
            style="${$t(this.getCoverImageWrapperStyles(t))}">
            ${gt(this.layout,[["blurredBackdrop",()=>this.renderCoverImageWithBlurredBackdrop(t)],["grid",()=>this.renderGridCoverImage(t)],["list",()=>this.renderDefaultCoverImage(t)]],(()=>this.renderDefaultCoverImage(t)))}
        </div>`}},e.BookCoverImage.styles=ht,t([ke({type:String})],e.BookCoverImage.prototype,"layout",void 0),t([ke({type:Number})],e.BookCoverImage.prototype,"height",void 0),t([ke({type:Number})],e.BookCoverImage.prototype,"width",void 0),t([ke({type:String})],e.BookCoverImage.prototype,"coverImagePhysicalId",void 0),t([ke({type:String})],e.BookCoverImage.prototype,"coverImageExtension",void 0),t([ke({type:String})],e.BookCoverImage.prototype,"coverImageAltText",void 0),t([ke({type:String})],e.BookCoverImage.prototype,"badgePhysicalId",void 0),t([ke({type:String})],e.BookCoverImage.prototype,"badgeAltText",void 0),t([ke({type:String})],e.BookCoverImage.prototype,"badgeExtension",void 0),t([ke({type:Object})],e.BookCoverImage.prototype,"waitForFreeBadge",void 0),t([ke({type:String})],e.BookCoverImage.prototype,"limitedTimeFreeBadge",void 0),t([ke({type:Boolean})],e.BookCoverImage.prototype,"useNoMetadataLayout",void 0),t([ke({type:Boolean})],e.BookCoverImage.prototype,"shouldRenderDeepStack",void 0),t([ke({type:Boolean})],e.BookCoverImage.prototype,"shouldRenderDomino",void 0),t([ke({type:Boolean})],e.BookCoverImage.prototype,"enableFocusSpacing",void 0),t([ke({type:Number})],e.BookCoverImage.prototype,"aspectRatio",void 0),t([ke({type:String})],e.BookCoverImage.prototype,"imageStyleCode",void 0),e.BookCoverImage=t([ze("bds-book-cover-image"),He],e.BookCoverImage);var jt=v`
    :host {
        display: flex;
        font-family: var(--bds-font-family-functional-label);
        /* TODO: add in a max-width for badge label for extreme cases */
    }

    .badge-label {
        color: var(--bds-color-functional-neutral-on-surface-inverse-fixed, #fff);
        border-radius: var(--bds-size-radius-x-small);
        background-color: var(
            --bds-color-functional-supplemental-discount,
            #cc0c39
        ); /* Remove fallback once token is available */
        padding: var(--bds-size-spacing-2x-small) var(--bds-size-utils-padding-6);
        align-items: flex-start;
        text-align: center;
        font-size: var(--bds-size-font-functional-label-small);
        font-style: normal;
        font-weight: 700;
        line-height: var(--bds-size-line-height-functional-label-small);
        text-wrap: nowrap;
        overflow: hidden;
    }
`;class Vt{constructor(e){this.data={},this.transpose(e)}set(e,t){var i;if(!e||""===e)return;const o=e.match(/[\w]+|\[\]|([^[[\w]\]]|["'](.*?)['"])/g);let a,r=this.data,s=null,n=null;if(!o)return;const l=function(e,t,i){"[]"===t?e.push(i):e[t]=i};for(;o.length>0;)a=null===(i=o.shift())||void 0===i?void 0:i.replace(/["']/g,""),a&&(isNaN(+a)&&"[]"!==a?"string"==typeof a&&("object"==typeof r&&null!==r||(r={},s&&n&&l(s,n,r))):Array.isArray(r)||(r=[],s&&n&&l(s,n,r)),s=r,n=a,r=r[a]);return s&&n&&l(s,n,t),this}transpose(e){if(e)for(const t in e)this.set(t,e[t])}getData(){return this.data}}function Wt(e){return!e||0===Object.keys(e).length}function Gt(e){return"object"==typeof e&&null!==e&&(void 0!==e.text||void 0!==e.fragments||void 0!==e.semanticContent||void 0!==e.headingContent||void 0!==e.paragraph||void 0!==e.link||void 0!==e.countdownTimer)}const qt=()=>v`
        .offscreen {
            position: absolute;
            left: 0;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    `;var Qt=[v`
    :host {
        font-family: var(--bds-font-family-functional-label);
    }

    :host > bds-rich-content {
        color: var(--bds-color-functional-neutral-on-surface);
    }

    .rich-content-link {
        display: inline-block; /* Setting display to inline-block to remove trailing underline that goes beyond link */
        color: #2162a1;
    }

    /* To-Do: Update hexcode to bds token: https://issues.amazon.com/issues/BDS-1026 */
    a {
        color: #2162a1; /* setting links to have color as that of aui link, bds-tokens are missing this color */
    }
`,qt()];
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class Kt extends Ge{constructor(e){if(super(e),this.et=Q,e.type!==Ve)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Q||null==e)return this.ft=void 0,this.et=e;if(e===q)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;var t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Kt.directiveName="unsafeHTML",Kt.resultType=1;var Xt=We(Kt),Yt=v`
    :host {
        font-family: var(--bds-font-family-functional-label);
        display: inline-block;
    }

    .countdown-container {
        display: flex;
        flex-direction: column;
        gap: var(--bds-size-spacing-x-small);
    }

    .timer-section {
        display: flex;
        align-items: center;
        gap: var(--bds-size-spacing-2x-small);
    }

    /* Promotional styling */
    .time.promotional,
    .ended.promotional {
        color: var(--bds-color-functional-supplemental-discount);
    }
`,Jt=v`
    :host {
        display: block;
        width: 100%;
    }

    .progress-container {
        position: relative;
        width: 100%;
        height: 10px;
    }

    .progress-fill {
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .progress-fill.animated {
        transition: width 1s ease-out;
    }

    .progress-image {
        position: absolute;
        top: 50%;
        transform: translate(50%, -50%);
    }

    /* Progress bar types */
    .progress-container.default {
        border: var(--bds-size-line-weight-small) solid var(--bds-color-functional-core-primary);
    }

    .progress-fill.default {
        background-color: var(--bds-color-functional-core-primary);
    }

    .progress-container.promotional {
        border: 1px solid var(--bds-color-functional-supplemental-discount);
    }

    .progress-fill.promotional {
        background-color: var(--bds-color-functional-supplemental-discount);
    }
`;e.ProgressBar=class extends Ne{constructor(){super(...arguments),this.percentage=0,this.type="default",this.animated=!0}get clampedPercentage(){return Math.max(0,Math.min(100,this.percentage))}render(){const e={"progress-container":!0,[this.type]:!0},t={"progress-fill":!0,[this.type]:!0,animated:this.animated};return G`
            <div class="${Xe(e)}">
                <div class="${Xe(t)}" style="width: ${this.clampedPercentage}%">
                    ${zt(this.imageUrl,(()=>G`
                            <img class="progress-image" src="${$t(this.imageUrl)}" alt="" />
                        `))}
                </div>
            </div>
        `}},e.ProgressBar.styles=Jt,t([ke({type:Number})],e.ProgressBar.prototype,"percentage",void 0),t([ke({type:String})],e.ProgressBar.prototype,"type",void 0),t([ke({type:String})],e.ProgressBar.prototype,"imageUrl",void 0),t([ke({type:Boolean})],e.ProgressBar.prototype,"animated",void 0),e.ProgressBar=t([ze("bds-progress-bar"),He],e.ProgressBar);const Zt="00:00";e.CountdownTimer=class extends Ne{constructor(){super(...arguments),this.targetTime="",this.endedText=Zt,this.showProgressBar=!1,this.type="default",this.remaining=0,this.ended=!1,this.totalDuration=0,this.progressPercentage=0}connectedCallback(){super.connectedCallback(),this.start()}disconnectedCallback(){super.disconnectedCallback(),this.clearTimer()}updated(e){e.has("targetTime")&&this.start()}clearTimer(){this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=void 0)}start(){this.clearTimer(),this.ended=!1;const e=new Date(this.targetTime).getTime(),t=Date.now();this.totalDuration=Math.max(0,e-t),this.tick(e),this.intervalId=window.setInterval((()=>this.tick(e)),1e3)}tick(e){const t=e-Date.now();t<=0?(this.remaining=0,this.ended=!0,this.progressPercentage=0,this.clearTimer()):(this.remaining=t,this.progressPercentage=this.totalDuration>0?t/this.totalDuration*100:0)}format(e){const t=Math.floor(e/1e3),i=Math.floor(t/3600),o=Math.floor(t%3600/60),a=t%60;let r="";return i>0&&(r+=`${String(i).padStart(2,"0")}:`),o>0&&(r+=`${String(o).padStart(2,"0")}:`),r+=`${String(a).padStart(2,"0")}`,r}render(){const e=this.ended?G`<span class="ended ${this.type}">${this.endedText}</span>`:G`<span class="time ${this.type}">${this.format(this.remaining)}</span>`;return G`
            <div class="countdown-container">
                <div class="timer-section">
                    ${zt(this.prefixText,(()=>G`<span class="prefix-text">${this.prefixText}</span>`))}
                    ${e}
                </div>
                ${zt(this.showProgressBar,(()=>G`
                        <bds-progress-bar
                            percentage="${this.progressPercentage}"
                            type="${this.type}"
                            imageUrl="${$t(this.progressBarImage)}"
                            animated></bds-progress-bar>
                    `))}
            </div>
        `}},e.CountdownTimer.styles=Yt,t([ke({type:String})],e.CountdownTimer.prototype,"targetTime",void 0),t([ke({type:String})],e.CountdownTimer.prototype,"endedText",void 0),t([ke({type:String})],e.CountdownTimer.prototype,"prefixText",void 0),t([ke({type:Boolean})],e.CountdownTimer.prototype,"showProgressBar",void 0),t([ke({type:String})],e.CountdownTimer.prototype,"progressBarImage",void 0),t([ke({type:String})],e.CountdownTimer.prototype,"type",void 0),t([Ce()],e.CountdownTimer.prototype,"remaining",void 0),t([Ce()],e.CountdownTimer.prototype,"ended",void 0),t([Ce()],e.CountdownTimer.prototype,"totalDuration",void 0),t([Ce()],e.CountdownTimer.prototype,"progressPercentage",void 0),e.CountdownTimer=t([ze("bds-countdown-timer"),He],e.CountdownTimer);e.RichContent=class extends Ne{constructor(){super(...arguments),this.dynamicAriaLabel="",this.hasTimer=!1}getTimerAriaLabel(e){if(!e)return"";const t=new Date(e).getTime()-Date.now();if(t<=0)return Zt;const i=Math.floor(t/1e3),o=Math.floor(i/3600),a=Math.floor(i%3600/60),r=i%60;let s="";return o>0&&(s+=`${o} hour${1!==o?"s":""} `),(a>0||o>0)&&(s+=`${a} minute${1!==a?"s":""} `),r>0&&0===o&&0===a&&(s+=`${r} second${1!==r?"s":""} `),`${s.trim()}`}getRichContentAriaLabel(){const e=this.content;if(!e)return"";this.hasTimer=!1;const t=e=>e.replace(/<[^>]*>/g,""),i=e=>{var o;return"string"==typeof e?t(e):e.text?t(e.text):e.content?i(e.content):e.fragments?e.fragments.map(i).join(" "):e.link?i(e.link):e.semanticContent?i(e.semanticContent):e.paragraph?i(e.paragraph):e.headingContent?i(e.headingContent):e.countdownTimer?(this.hasTimer=!0,this.getTimerAriaLabel(null===(o=e.countdownTimer)||void 0===o?void 0:o.targetTime)):""};return i(e)}connectedCallback(){super.connectedCallback(),this.dynamicAriaLabel=this.getRichContentAriaLabel(),this.hasTimer&&(this.timerIntervalId=window.setInterval((()=>{this.dynamicAriaLabel=this.getRichContentAriaLabel()}),1e3))}disconnectedCallback(){super.disconnectedCallback(),this.timerIntervalId&&(window.clearInterval(this.timerIntervalId),this.timerIntervalId=void 0)}renderContent(e){var t;return e.text?G`${Xt(e.text)}`:e.fragments&&e.fragments.length>0?G`${e.fragments.map((e=>this.renderContent(e)))}`:(null===(t=e.semanticContent)||void 0===t?void 0:t.content)?((e,t)=>{const i=e.semanticContent;if(!i)return Q;const o=!!i.strong,a=!!i.emphasized,r=!!i.underlined,s=!!i.quoted,n=i.content.text;let l=n?G`${n}`:t(i.content);return o&&(l=G`<b>${l}</b>`),a&&(l=G`<i>${l}</i>`),r&&(l=G`<u>${l}</u>`),s&&(l=G`<q>${l}</q>`),l})(e,this.renderContent.bind(this)):e.headingContent?((e,t)=>{const i=e.headingContent;if(!i)return Q;const o=i.content.text;let a=i.level;a<1&&(a=1),a>6&&(a=6);const r=o?G`${i.content.text}`:t(i.content);switch(a){case 1:return G`<h1>${r}</h1>`;case 2:return G`<h2>${r}</h2>`;case 3:default:return G`<h3>${r}</h3>`;case 4:return G`<h4>${r}</h4>`;case 5:return G`<h5>${r}</h5>`;case 6:return G`<h6>${r}</h6>`}})(e,this.renderContent.bind(this)):e.paragraph?((e,t)=>{const i=e.paragraph;return i?G` <p>${t(i)}</p> `:Q})(e,this.renderContent.bind(this)):e.link?((e,t)=>{const i=e.link;return i&&i.url&&i.content?G`<a href=${i.url} class="rich-content-link">${t(i.content)}</a>`:Q})(e,this.renderContent.bind(this)):e.countdownTimer?(e=>{var t;const i=null===(t=e.countdownTimer)||void 0===t?void 0:t.targetTime;return i?G`<bds-countdown-timer targetTime=${i}></bds-countdown-timer>`:Q})(e):Q}render(){const{content:e}=this;if(!e)return Q;const t=this.hasTimer?this.dynamicAriaLabel:this.getRichContentAriaLabel();return G`<div style="position: relative">
            ${zt(!!t&&!!this.hasTimer,(()=>G`
                    <span class="offscreen">${t}</span>
                    <span aria-hidden="true">${this.renderContent(e)}</span>
                `),(()=>this.renderContent(e)))}
        </div>`}},e.RichContent.styles=Qt,t([ke({type:Object})],e.RichContent.prototype,"content",void 0),t([Ce()],e.RichContent.prototype,"dynamicAriaLabel",void 0),e.RichContent=t([ze("bds-rich-content"),He],e.RichContent),e.BookDealBadge=class extends Ne{constructor(){super(...arguments),this.skeletonType="metadata",this.skeletonWidthPx=It.metadata.widthPx,this.skeletonHeightPx=It.metadata.heightPx}isFragmentsEmpty(e){return!Wt(e.fragments)&&!(e.fragments&&e.fragments.length>0&&""!==e.fragments[0].text)}getContentToRender(){var e,t,i,o;if(!this.dealBadge)return;const a=null===(t=null===(e=this.dealBadge)||void 0===e?void 0:e.messaging)||void 0===t?void 0:t.content,r=null===(o=null===(i=this.dealBadge)||void 0===i?void 0:i.label)||void 0===o?void 0:o.content;return Wt(a)||this.isFragmentsEmpty(a)?Wt(r)||this.isFragmentsEmpty(r)?void 0:r:a}firstUpdated(){var e,t;(null===(t=null===(e=this.dealBadge)||void 0===e?void 0:e.instrumentationMetadata)||void 0===t?void 0:t.lucidInstrumentationAci)&&this.setAttribute("data-csa-c-item-id",this.dealBadge.instrumentationMetadata.lucidInstrumentationAci)}render(){var e;if(this.dealBadge){const e=this.getContentToRender();return e?G`
                <div class="badge-label">
                    <bds-rich-content .content=${e}></bds-rich-content>
                </div>
            `:Q}return this.kindlePromotionTags?G`<div class="badge-label">${null===(e=this.kindlePromotionTags)||void 0===e?void 0:e.badgeContent}</div> `:this.dealRichContent?G`<div class="badge-label">
                <bds-rich-content .content=${this.dealRichContent}></bds-rich-content>
            </div>`:Q}},e.BookDealBadge.styles=jt,t([ke({type:Object})],e.BookDealBadge.prototype,"dealBadge",void 0),t([ke({type:Object})],e.BookDealBadge.prototype,"kindlePromotionTags",void 0),t([ke({type:Object})],e.BookDealBadge.prototype,"dealRichContent",void 0),e.BookDealBadge=t([ze("bds-book-deal-badge"),He,Tt],e.BookDealBadge);
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class ei{constructor(e,t){var{target:i,config:o,callback:a,skipInitial:r}=t;this.t=new Set,this.o=!1,this.i=!1,this.h=e,null!==i&&this.t.add(null!=i?i:e),this.o=null!=r?r:this.o,this.callback=a,window.IntersectionObserver?(this.u=new IntersectionObserver((e=>{var t=this.i;this.i=!1,this.o&&t||(this.handleChanges(e),this.h.requestUpdate())}),o),e.addController(this)):console.warn("IntersectionController error: browser does not support IntersectionObserver.")}handleChanges(e){var t;this.value=null===(t=this.callback)||void 0===t?void 0:t.call(this,e,this.u)}hostConnected(){for(var e of this.t)this.observe(e)}hostDisconnected(){this.disconnect()}hostUpdated(){var e=this;return a((function*(){var t=e.u.takeRecords();t.length&&e.handleChanges(t)}))()}observe(e){this.t.add(e),this.u.observe(e),this.i=!0}unobserve(e){this.t.delete(e),this.u.unobserve(e)}disconnect(){this.u.disconnect()}}var ti=[v`
    :host {
        color: var(--bds-color-functional-neutral-on-surface);
        font-size: var(--bds-size-font-functional-body-medium);
        font-weight: var(--bds-font-weight-functional-body);
        line-height: var(--bds-size-line-height-functional-body-small);
        max-width: 100%;
    }

    .unified-book-faceout {
        width: min-content;
        min-width: 160px;
        display: flex;
        flex-direction: row;
    }

    .unified-book-faceout a {
        text-decoration: none;
        cursor: pointer;
    }

    .ubf-book-info {
        position: relative;
        z-index: 0;
    }

    .ubf-color-block,
    .ubf-color-block-bottom {
        padding: var(--bds-size-utils-padding-10);
    }

    .ubf-color-block-bottom {
        display: flex;
        flex-direction: column;
        gap: var(--bds-size-utils-padding-10);
    }

    .series-overlay {
        margin-bottom: 4px;
    }

    .star-rating {
        margin: var(--bds-size-spacing-2x-small) 0;
    }

    /* stylelint-disable selector-class-pattern */
    .unified-book-faceout.blurred-backdrop {
        border-radius: 4px;
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 25%);
        overflow: hidden;
        background: var(--bds-color-functional-neutral-surface);
        height: 100%;
    }

    .unified-book-faceout.blurred-backdrop.dark {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 75%);
    }

    .unified-book-faceout.blurred-backdrop.no-metadata-layout {
        height: auto;
        background: var(--bds-color-functional-neutral-surface);
    }

    .unified-book-faceout.blurred-backdrop.dark.no-metadata-layout {
        background: #232323;
    }

    .unified-book-faceout.blurred-backdrop .ubf-book-info a {
        outline-offset: -2px;
    }

    .unified-book-faceout.list {
        width: 100%;
    }

    /* TODO remove fallbacks when token v2 migration is complete */
    .unified-book-faceout.list .ubf-metadata {
        padding-left: min(var(--bds-size-spacing-x-small), 2vw);
    }

    .unified-book-faceout.blurred-backdrop .ubf-metadata {
        padding: 0 var(--bds-size-spacing-x-small) var(--bds-size-spacing-x-small);
    }

    .unified-book-faceout.metadata-only {
        width: auto;
    }

    .grid .star-rating,
    .standardV2 .star-rating {
        margin: 0;
    }

    .grid.unified-book-faceout,
    .standardV2.unified-book-faceout {
        flex-direction: column;
    }

    .grid.unified-book-faceout {
        width: 100%;
    }

    .metadata-badge-slot {
        height: 28px;
    }

    .metadata-badge-slot.hidden {
        visibility: hidden;
    }

    .grid .metadata-badge-slot {
        background: rgba(0, 0, 0, 3%);
        border-radius: var(--bds-size-spacing-x-small) var(--bds-size-spacing-x-small) 0 0;
        overflow: hidden;
    }

    .program-badge-wrapper {
        height: 20px;
        display: flex;
        align-items: center;
    }

    /**
     * The WFF badge using primary badge specs is slightly bigger than a program badge.  When its
     * used in a StandardV2 fliptoon faceout, the bottom of the badge slightly overflows the
     * container.  Adding a small margin ensures the badge is not cutoff.
     *
     * Should be cleaned up with: https://sim.amazon.com/issues/BOOKSUI-270
     */
    .wff-badge-wrapper {
        margin-bottom: 2px;
    }

    /* stylelint-enable selector-class-pattern */
`,qt()],ii=v`
    :host {
        font-family: var(--bds-font-family-functional-body);
    }

    .sponsored {
        color: var(--bds-color-functional-neutral-on-surface-variant);
        font-size: var(--bds-size-font-functional-body-small);
        line-height: var(--bds-size-line-height-functional-body-small);
    }

    .info-icon {
        margin-left: var(--bds-size-spacing-2x-small);
    }

    .mobile .info-icon,
    .tablet .info-icon {
        display: none;
    }
`;e.BookSponsored=class extends Ne{constructor(){super(...arguments),this.isSponsored=!1}render(){return zt(this.isSponsored,(()=>{var e;return G`<div class="sponsored ${null===(e=this.renderContext)||void 0===e?void 0:e.devicetype}">
                Sponsored
                <img
                    class="info-icon"
                    alt=""
                    src="https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/info.svg" />
            </div>`}))}},e.BookSponsored.styles=ii,t([ke({type:Boolean})],e.BookSponsored.prototype,"isSponsored",void 0),t([ye({context:$e,subscribe:!0})],e.BookSponsored.prototype,"renderContext",void 0),e.BookSponsored=t([ze("bds-book-sponsored"),He],e.BookSponsored);var oi=[v`
    :host {
        font-family: var(--bds-font-family-functional-body);
    }

    .bookTitleContent {
        min-width: min(140px, 100%);
    }

    a {
        text-decoration: none;
    }

    .primaryText,
    .primaryText a {
        color: var(--bds-color-functional-neutral-on-surface);
    }

    .primaryText {
        font-size: var(--bds-size-font-functional-title-small);
        line-height: var(--bds-size-line-height-functional-title-small);
        font-weight: var(--bds-font-weight-functional-title);
        font-style: normal;

        ${Lt(2)};
    }

    .secondaryText,
    .tertiaryText {
        color: var(--bds-color-functional-neutral-on-surface-variant);
        font-size: var(--bds-size-font-functional-body-small);
        line-height: var(--bds-size-line-height-functional-body-small);

        ${Lt(2)};
    }

    .secondaryText a,
    .tertiaryText a {
        text-decoration: underline;
        color: var(--bds-link-color-text-active);
    }

    .secondaryText a:hover,
    .tertiaryText a:hover {
        color: var(--bds-link-color-text-hover);
    }

    /* TODO remove fallbacks when token v2 migration is complete */
    .compact.primaryText,
    .compact.secondaryText {
        font-size: var(--bds-size-font-functional-body-small);

        ${Lt(1)};
    }

    .compact.primaryText {
        font-weight: bold;
        color: var(--bds-color-functional-neutral-on-surface);
    }

    .compact.secondaryText {
        color: var(--bds-color-functional-neutral-on-surface-variant);
    }

    .compact.primaryText.primaryTextOnly {
        ${Lt(2)};
    }

    .boldText {
        font-weight: bold;
    }

    :is(h1, h2, h3, h4, h5, h6) {
        all: inherit;
        position: relative;
    }
`,qt()];e.BookTitleContent=class extends Ne{constructor(){super(...arguments),this.suppressPrimaryAria=!1,this.suppressSecondaryAria=!1,this.suppressTertiaryAria=!1,this.layout="regular"}renderTitleSlot(e,t,i=!1){if(!this.hasValidTitleContent(t))return Q;const o=t.map(((e,o)=>{const a=o<(null==t?void 0:t.length)-1?", ":"";return this.getTitleContentWrapper(e,a,i,e.headingLevel)}));return G`<div class="${e} ${this.layout}">${o}</div>`}getTitleContentWrapper(e,t,i,o){const a=G`${e.displayText}${zt(e.appendedInlineContent,(()=>G`${e.appendedInlineContent}`))}${t}`,r=e.language,s=e.enableLink&&e.url,n=e.isBold?"boldText":void 0;let l;switch(o){case 1:l=G`<h1
                    class=${$t(n)}
                    lang=${$t(r)}
                    aria-hidden=${i}>
                    ${a}
                </h1>`;break;case 2:l=G`<h2
                    class=${$t(n)}
                    lang=${$t(r)}
                    aria-hidden=${i}>
                    ${a}
                </h2>`;break;case 3:l=G`<h3
                    class=${$t(n)}
                    lang=${$t(r)}
                    aria-hidden=${i}>
                    ${a}
                </h3>`;break;case 4:l=G`<h4
                    class=${$t(n)}
                    lang=${$t(r)}
                    aria-hidden=${i}>
                    ${a}
                </h4>`;break;case 5:l=G`<h5
                    class=${$t(n)}
                    lang=${$t(r)}
                    aria-hidden=${i}>
                    ${a}
                </h5>`;break;case 6:l=G`<h6
                    class=${$t(n)}
                    lang=${$t(r)}
                    aria-hidden=${i}>
                    ${a}
                </h6>`;break;default:l=G`<span
                    class=${$t(n)}
                    lang=${$t(r)}
                    aria-hidden="${i}"
                    @click=${e.handleClick}
                    >${a}</span
                >`}return zt(e.displayText,(()=>s?G`<a
                      @click=${e.handleClick}
                      href="${e.url}"
                      aria-hidden="${i}"
                      tabindex="${i?-1:0}">
                      ${l}</a
                  >`:l))}hasValidTitleContent(e){return!(!Array.isArray(e)||!e.length)}getPrimaryTextCssClass(){let e="primaryText";return"compact"!==this.layout||this.hasValidTitleContent(this.secondaryTitleContent)||(e+=" primaryTextOnly"),e}render(){var e;return this.primaryTitleContent||this.secondaryTitleContent||this.tertiaryTitleContent?G`<div class="bookTitleContent ${$t(null===(e=this.renderContext)||void 0===e?void 0:e.devicetype)}">
                ${this.renderTitleSlot(this.getPrimaryTextCssClass(),this.primaryTitleContent,this.suppressPrimaryAria)}
                ${this.renderTitleSlot("secondaryText",this.secondaryTitleContent,this.suppressSecondaryAria)}
                ${this.renderTitleSlot("tertiaryText",this.tertiaryTitleContent,this.suppressTertiaryAria)}
            </div> `:Q}},e.BookTitleContent.styles=oi,t([ke({type:Array})],e.BookTitleContent.prototype,"primaryTitleContent",void 0),t([ke({type:Array})],e.BookTitleContent.prototype,"secondaryTitleContent",void 0),t([ke({type:Array})],e.BookTitleContent.prototype,"tertiaryTitleContent",void 0),t([ke({type:Boolean})],e.BookTitleContent.prototype,"suppressPrimaryAria",void 0),t([ke({type:Boolean})],e.BookTitleContent.prototype,"suppressSecondaryAria",void 0),t([ke({type:Boolean})],e.BookTitleContent.prototype,"suppressTertiaryAria",void 0),t([ke({type:String})],e.BookTitleContent.prototype,"layout",void 0),t([ye({context:$e,subscribe:!0})],e.BookTitleContent.prototype,"renderContext",void 0),e.BookTitleContent=t([ze("bds-book-title-content"),He],e.BookTitleContent);var ai=v`
    :host {
        font-family: var(--bds-font-family-functional-body);
    }

    /* Adding config based wrap for a11y compliance */
    .allowWrap {
        flex-wrap: wrap; // To wrap star ratings when scaled/ratings go out of view.
        max-width: 50vw; // Placeholder width to prevent star ratings from going out of view when scaled.
    }

    .stars-container {
        display: flex;
        align-items: center;
        white-space: nowrap;
    }

    .rating {
        color: var(--bds-color-functional-neutral-on-surface);
    }

    .stars {
        align-items: center;
        display: flex;
        flex-shrink: 0;
    }

    .starRatingLinkDisabled,
    .starRatingLink {
        text-decoration: none;
        align-items: center;
        display: flex;
    }

    .halfStar:dir(rtl) {
        transform: scaleX(-1);
    }

    .numberOfReviews {
        color: var(--bds-color-functional-neutral-on-surface-variant);
    }

    .starRatingLink .numberOfReviews {
        text-decoration: none;
        color: var(--bds-link-color-text-active);
    }

    .starRatingLink .numberOfReviews:hover {
        color: var(--bds-link-color-text-hover);
    }
`,ri={resources:{bds_audible_sample_button_label:"Audible Sample",bds_author_follow_label:"✓ Following",bds_author_unfollow_label:"+ Follow",bds_download_sample_label:"Download Sample",bds_blurb_read_full_article_label:"Read Full Article",bds_ubf_book_single_other_format_label:"Other format:",bds_ubf_book_other_formats_label:"Other formats:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} more",bds_collection_text_in_series_alt_text_prefix:{value:"in series"},sample_text:"Sample text here",sample_button:"Click sample {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} reviews"},bds_add_to_list_button_common_label:{value:"Add to list"},bds_add_to_library_button_common_label:{value:"Add to list"},bds_see_details_button_common_label:{value:"see all details"},bds_read_now_button_label:{value:"Read now"},bds_discover_new_stories_button_rare_label:{value:"Discover new stories"},bds_shuffle_button_rare_label:{value:"shuffle"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"with {savingsPercentage} savings"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title} by {authors}"},bds_previous_set_of_slides:{value:"Previous set of slides"},bds_next_set_of_slides:{value:"Next set of slides"},bds_this_title_release_date_text:{value:"This title will be released on {releaseDate}"},bds_spinner_loading_label:{value:"Loading..."},bds_dropdown_choose_label:{value:"Choose..."},bds_this_title_release_date_short_text:{value:"Releases {releaseDate}"}}},si={resources:{bds_audible_sample_button_label:"Ejemplo de Audible",bds_author_follow_label:"✓ Siguiendo",bds_author_unfollow_label:"+ Seguir",bds_download_sample_label:"Descargar fragmento",bds_blurb_read_full_article_label:"Leer artículo completo",bds_ubf_book_single_other_format_label:"Otro formato:",bds_ubf_book_other_formats_label:"Otros formatos:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} más",bds_collection_text_in_series_alt_text_prefix:{value:"de la serie"},sample_text:"Fragmento aquí",sample_button:"Haz clic en el fragmento {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} reseñas"},bds_add_to_list_button_common_label:{value:"Añadir a la lista"},bds_add_to_library_button_common_label:{value:"Añadir a la lista"},bds_see_details_button_common_label:{value:"ver todos los detalles"},bds_read_now_button_label:{value:"Leer ahora"},bds_discover_new_stories_button_rare_label:{value:"Descubrir nuevas historias"},bds_shuffle_button_rare_label:{value:"modo aleatorio"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"con un ahorro del {savingsPercentage}"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title} de {authors}"},bds_previous_set_of_slides:{value:"Anterior grupo de portadas"},bds_next_set_of_slides:{value:"Siguiente grupo de portadas"},bds_this_title_release_date_text:{value:"El lanzamiento de este libro se producirá el {releaseDate}"},bds_this_title_release_date_short_text:{value:"Lanzamiento: {releaseDate}"}}},ni={resources:{bds_audible_sample_button_label:"Extrait du livre audio Audible",bds_author_follow_label:"✓ Suivi",bds_author_unfollow_label:"+ Suivre",bds_download_sample_label:"Télécharger l’extrait",bds_blurb_read_full_article_label:"Lire l'article dans son intégralité",bds_ubf_book_single_other_format_label:"Autre format :",bds_ubf_book_other_formats_label:"Autres formats :",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} supplémentaires",bds_collection_text_in_series_alt_text_prefix:{value:"dans la série"},sample_text:"Vous trouverez ici un extrait",sample_button:"Cliquez sur un extrait {stringText}{numberValue}{stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} évaluations"},bds_add_to_list_button_common_label:{value:"Ajouter à la liste"},bds_add_to_library_button_common_label:{value:"Ajouter à la liste"},bds_see_details_button_common_label:{value:"afficher toutes les informations"},bds_read_now_button_label:{value:"Commencez dès maintenant votre lecture"},bds_discover_new_stories_button_rare_label:{value:"Découvrez de nouveaux récits"},bds_shuffle_button_rare_label:{value:"résultats aléatoires"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"avec des réductions de l’ordre de {savingsPercentage}"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title} de {authors}"},bds_previous_set_of_slides:{value:"Série de diapositives précédente"},bds_next_set_of_slides:{value:"Prochaine série de diapositives"},bds_this_title_release_date_text:{value:"Cet ouvrage paraîtra le {releaseDate}"},bds_this_title_release_date_short_text:{value:"Parution le {releaseDate}."}}},li={resources:{bds_audible_sample_button_label:"Amostra do Audible",bds_author_follow_label:"✓ Seguindo",bds_author_unfollow_label:"+ Seguir",bds_download_sample_label:"Fazer download da amostra",bds_blurb_read_full_article_label:"Leia o artigo completo",bds_ubf_book_single_other_format_label:"Outro formato:",bds_ubf_book_other_formats_label:"Outros formatos:",bds_ubf_book_other_formats_more_text:"+ outros {numberOfFormats} formatos",bds_collection_text_in_series_alt_text_prefix:{value:"em série"},sample_text:"Texto da amostra aqui",sample_button:"Clique na amostra {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} avaliações"},bds_add_to_list_button_common_label:{value:"Adicionar à lista"},bds_add_to_library_button_common_label:{value:"Adicionar à lista"},bds_see_details_button_common_label:{value:"ver todos os detalhes"},bds_read_now_button_label:{value:"Ler agora"},bds_discover_new_stories_button_rare_label:{value:"Descobrir novas histórias"},bds_shuffle_button_rare_label:{value:"ordem aleatória"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"com economia de {savingsPercentage}"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title} por {authors}"},bds_previous_set_of_slides:{value:"Conjunto de slides anterior"},bds_next_set_of_slides:{value:"Próximo conjunto de slides"},bds_this_title_release_date_text:{value:"Este livro será lançado em {releaseDate}"},bds_this_title_release_date_short_text:{value:"Lançamentos {releaseDate}"}}};const di={"ar-AE":{resources:{bds_audible_sample_button_label:"عيّنة Audible",bds_author_follow_label:"✓ جارية المتابعة",bds_author_unfollow_label:"+ متابعة",bds_download_sample_label:"تنزيل العيّنة",bds_blurb_read_full_article_label:"اقرأ المقال كاملاً",bds_ubf_book_single_other_format_label:"تنسيق آخر:",bds_ubf_book_other_formats_label:"تنسيقات أخرى:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} من التنسيقات الإضافية",bds_collection_text_in_series_alt_text_prefix:{value:"في السلسلة"},sample_text:"العيّنة النصية هنا",sample_button:"انقر فوق العيّنة {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}، {numberOfReviews} من المراجعات"},bds_add_to_list_button_common_label:{value:"الإضافة إلى القائمة"},bds_add_to_library_button_common_label:{value:"الإضافة إلى القائمة"},bds_see_details_button_common_label:{value:"اطلع على كل التفاصيل"},bds_read_now_button_label:{value:"اقرأ الآن"},bds_discover_new_stories_button_rare_label:{value:"اكتشف قصصًا جديدة"},bds_shuffle_button_rare_label:{value:"خلط"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"مع {savingsPercentage} من التوفيرات"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title} من {authors}"},bds_previous_set_of_slides:{value:"المجموعة السابقة من الشرائح"},bds_next_set_of_slides:{value:"المجموعة التالية من الشرائح"},bds_this_title_release_date_text:{value:"سيتم إصدار هذا العنوان في {releaseDate}"},bds_this_title_release_date_short_text:{value:"سيتم الإصدار في {releaseDate}"}}},"bn-IN":{resources:{bds_audible_sample_button_label:"Audible নমুনা",bds_author_follow_label:"✓ অনুসরণ করছেন",bds_author_unfollow_label:"+ অনুসরণ করুন",bds_download_sample_label:"নমুনা ডাউনলোড করুন",bds_blurb_read_full_article_label:"সম্পূর্ণ নিবন্ধ পড়ুন",bds_ubf_book_single_other_format_label:"অন্যান্য ফর্ম্যাট:",bds_ubf_book_other_formats_label:"অন্যান্য ফর্ম্যাট:",bds_ubf_book_other_formats_more_text:"+ আরও {numberOfFormats}",bds_collection_text_in_series_alt_text_prefix:{value:"সিরিজে"},sample_text:"এখানে নমুনা সংক্রান্ত পাঠ্য",sample_button:"নমুনা {stringText}{numberValue}{stringText} এ ক্লিক করুন",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} রিভিউ"},bds_add_to_list_button_common_label:{value:"তালিকায় যোগ করুন"},bds_add_to_library_button_common_label:{value:"তালিকায় যোগ করুন"},bds_see_details_button_common_label:{value:"সমস্ত বিবরণ দেখুন"},bds_read_now_button_label:{value:"এখনই পড়ুন"},bds_discover_new_stories_button_rare_label:{value:"নতুন গল্প খুঁজে পান"},bds_shuffle_button_rare_label:{value:"অদলবদল করুন"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay}{savingsPercentage}{audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} সাশ্রয় সহ"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{authors}-এর লেখা {title}"},bds_previous_set_of_slides:{value:"স্লাইডগুলির পূর্ববর্তী সেট"},bds_next_set_of_slides:{value:"স্লাইডগুলির পরবর্তী সেট"},bds_this_title_release_date_text:{value:"এই বইটি {releaseDate}-এ রিলিজ হবে"},bds_this_title_release_date_short_text:{value:"রিলিজ {releaseDate}"}}},"cs-CZ":{resources:{bds_audible_sample_button_label:"Ukázka Audible",bds_author_follow_label:"✓ Sledovaný",bds_author_unfollow_label:"+ Sledovat",bds_download_sample_label:"Stáhnout ukázku",bds_blurb_read_full_article_label:"Přečíst celý článek",bds_ubf_book_single_other_format_label:"Jiný formát:",bds_ubf_book_other_formats_label:"Jiné formáty:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} další",bds_collection_text_in_series_alt_text_prefix:{value:"v sérii"},sample_text:"Ukázkový text zde",sample_button:"Ukázka ke kliknutí {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, počet recenzí:{numberOfReviews}"},bds_add_to_list_button_common_label:{value:"Přidat do seznamu"},bds_add_to_library_button_common_label:{value:"Přidat do seznamu"},bds_see_details_button_common_label:{value:"Zobrazit všechny podrobnosti"},bds_read_now_button_label:{value:"Přečíst hned"},bds_discover_new_stories_button_rare_label:{value:"Prozkoumat nové příběhy"},bds_shuffle_button_rare_label:{value:"Náhodný výběr"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"s úsporami ve výši {savingsPercentage}"},bds_savings_percentage_text:{value:"−{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title} od {authors}"},bds_previous_set_of_slides:{value:"Předchozí sada snímků"},bds_next_set_of_slides:{value:"Další sada snímků"},bds_this_title_release_date_text:{value:"Tento titul bude vydán dne {releaseDate}"},bds_this_title_release_date_short_text:{value:"Vydání {releaseDate}"}}},"de-DE":{resources:{bds_audible_sample_button_label:"Audible-Hörprobe",bds_author_follow_label:"✓ Abonniert",bds_author_unfollow_label:"+ Abonnieren",bds_download_sample_label:"Leseprobe herunterladen",bds_blurb_read_full_article_label:"Vollständigen Artikel lesen",bds_ubf_book_single_other_format_label:"Anderes Format:",bds_ubf_book_other_formats_label:"Andere Formate:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} weitere",bds_collection_text_in_series_alt_text_prefix:{value:"in der Serie"},sample_text:"Beispieltext hier",sample_button:"Leseprobe anklicken{stringText}{numberValue}{stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} Rezensionen"},bds_add_to_list_button_common_label:{value:"Zur Liste hinzufügen"},bds_add_to_library_button_common_label:{value:"Zur Liste hinzufügen"},bds_see_details_button_common_label:{value:"Alle Details anzeigen"},bds_read_now_button_label:{value:"Jetzt lesen"},bds_discover_new_stories_button_rare_label:{value:"Neue Geschichten entdecken"},bds_shuffle_button_rare_label:{value:"Zufällig anordnen"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"mit {savingsPercentage} Ermäßigung"},bds_savings_percentage_text:{value:"−{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title} von {authors}"},bds_previous_set_of_slides:{value:"Vorherige Auswahl an Büchern"},bds_next_set_of_slides:{value:"Nächste Auswahl an Büchern"},bds_this_title_release_date_text:{value:"Dieser Titel wird am {releaseDate} veröffentlicht"},bds_this_title_release_date_short_text:{value:"Erscheint am {releaseDate}"}}},"en-AE":ri,"en-AU":ri,"en-CA":ri,"en-GB":ri,"en-IN":ri,"en-NG":ri,"en-SG":ri,"en-US":ri,"en-ZA":ri,"es-ES":si,"es-MX":si,"es-US":si,"fr-BE":ni,"fr-CA":ni,"fr-FR":ni,"he-IL":{resources:{bds_audible_sample_button_label:"דוגמית של Audible",bds_author_follow_label:"✓ עוקבים",bds_author_unfollow_label:"+ מעקב",bds_download_sample_label:"הורדת דוגמית",bds_blurb_read_full_article_label:"קרא את המאמר המלא",bds_ubf_book_single_other_format_label:"פורמט אחר:",bds_ubf_book_other_formats_label:"פורמטים אחרים:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} נוספים",bds_collection_text_in_series_alt_text_prefix:{value:"בסדרה"},sample_text:"טקסט לדוגמה כאן",sample_button:"יש ללחוץ על דוגמית {stringText}{numberValue}{stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} ביקורות"},bds_add_to_list_button_common_label:{value:"הוספה לרשימה"},bds_add_to_library_button_common_label:{value:"הוספה לרשימה"},bds_see_details_button_common_label:{value:"ראה את כל הפרטים"},bds_read_now_button_label:{value:"לקרוא עכשיו"},bds_discover_new_stories_button_rare_label:{value:"גלה סיפורים חדשים"},bds_shuffle_button_rare_label:{value:"ערבוב"},bds_basis_price_text:{value:"{label}{basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"עם {savingsPercentage} חיסכון"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title} מאת {authors}"},bds_previous_set_of_slides:{value:"סט השקופיות הקודם"},bds_next_set_of_slides:{value:"סט השקופיות הבא"},bds_this_title_release_date_text:{value:"כותר זה יצא לאור בתאריך {releaseDate}"},bds_this_title_release_date_short_text:{value:"שחרורים {releaseDate}"}}},"hi-IN":{resources:{bds_audible_sample_button_label:"ऑडिबल सैम्पल",bds_author_follow_label:"फ़ॉलो कर रहे हैं",bds_author_unfollow_label:"+ फॉलो करें",bds_download_sample_label:"नमूना डाउनलोड करें",bds_blurb_read_full_article_label:"पूरा लेख पढ़ें",bds_ubf_book_single_other_format_label:"अन्य फ़ॉर्मेट:",bds_ubf_book_other_formats_label:"अन्य प्रारूप:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} अधिक",bds_collection_text_in_series_alt_text_prefix:{value:"सीरिज़ में"},sample_text:"सैम्पल टेक्स्ट यहां",sample_button:"सैम्पल {stringText} {numberValue} {stringText}पर क्लिक करें",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} समीक्षाएं"},bds_add_to_list_button_common_label:{value:"सूची में जोड़ें"},bds_add_to_library_button_common_label:{value:"सूची में जोड़ें"},bds_see_details_button_common_label:{value:"सभी जानकारी देखें"},bds_read_now_button_label:{value:"अभी पढ़ें"},bds_discover_new_stories_button_rare_label:{value:"नई कहानियां ढूंढें"},bds_shuffle_button_rare_label:{value:"शफ़ल करें"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} बचत के साथ"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title}द्वारा लिखी हुई {authors}"},bds_previous_set_of_slides:{value:"स्लाइड का पिछला सेट"},bds_next_set_of_slides:{value:"स्लाइड का अगला सेट"},bds_this_title_release_date_text:{value:"यह टाइटल {releaseDate} को रिलीज़ किया जाएगा"},bds_this_title_release_date_short_text:{value:"रिलीज़ {releaseDate}"}}},"it-IT":{resources:{bds_audible_sample_button_label:"Estratto Audible",bds_author_follow_label:"✓ Storie seguite",bds_author_unfollow_label:"+ Segui",bds_download_sample_label:"Scarica estratto",bds_blurb_read_full_article_label:"Leggi l'articolo completo",bds_ubf_book_single_other_format_label:"Altro formato:",bds_ubf_book_other_formats_label:"Altri formati:",bds_ubf_book_other_formats_more_text:"+ altri {numberOfFormats}",bds_collection_text_in_series_alt_text_prefix:{value:"nella serie"},sample_text:"Testo dell'estratto qui",sample_button:"Fai clic su un estratto {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} recensioni"},bds_add_to_list_button_common_label:{value:"Aggiungi all’elenco"},bds_add_to_library_button_common_label:{value:"Aggiungi all’elenco"},bds_see_details_button_common_label:{value:"visualizza tutti i dettagli"},bds_read_now_button_label:{value:"Leggi ora"},bds_discover_new_stories_button_rare_label:{value:"Scopri nuove storie"},bds_shuffle_button_rare_label:{value:"ordine casuale"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"con un risparmio del {savingsPercentage}"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title} di {authors}"},bds_previous_set_of_slides:{value:"Serie di diapositive precedente"},bds_next_set_of_slides:{value:"Serie di diapositive successiva"},bds_this_title_release_date_text:{value:"Questo titolo verrà rilasciato il giorno {releaseDate}"},bds_this_title_release_date_short_text:{value:"Data di rilascio: {releaseDate}"}}},"ja-JP":{resources:{bds_audible_sample_button_label:"Audible サンプル",bds_author_follow_label:"✓ フォロー",bds_author_unfollow_label:"+ フォロー",bds_download_sample_label:"サンプルのダウンロード",bds_blurb_read_full_article_label:"記事の全文を読む",bds_ubf_book_single_other_format_label:"その他のフォーマット:",bds_ubf_book_other_formats_label:"その他のフォーマット:",bds_ubf_book_other_formats_more_text:"{numberOfFormats} 以上",bds_collection_text_in_series_alt_text_prefix:{value:"シリーズ:"},sample_text:"サンプル テキストはこちら",sample_button:"サンプル {stringText} {numberValue} {stringText} をクリック",bds_star_rating_review_count_summary:{value:"{ratingSummary} ({numberOfReviews} 件のレビュー)"},bds_add_to_list_button_common_label:{value:"リストに追加"},bds_add_to_library_button_common_label:{value:"リストに追加"},bds_see_details_button_common_label:{value:"すべての詳細を表示"},bds_read_now_button_label:{value:"今すぐ読む"},bds_discover_new_stories_button_rare_label:{value:"新しいストーリーを見つける"},bds_shuffle_button_rare_label:{value:"シャッフル"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} 割引"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"『{title}』({authors} 著)"},bds_previous_set_of_slides:{value:"前のスライド セット"},bds_next_set_of_slides:{value:"次のスライド セット"},bds_this_title_release_date_text:{value:"この本の配信予定日: {releaseDate}"},bds_this_title_release_date_short_text:{value:"リリース {releaseDate}"}}},"kn-IN":{resources:{bds_audible_sample_button_label:"Audible ಮಾದರಿ",bds_author_follow_label:"✓ ಈ ಕೆಳಗಿನ",bds_author_unfollow_label:"+ ಅನುಸರಿಸಿ",bds_download_sample_label:"ಮಾದರಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",bds_blurb_read_full_article_label:"ಪೂರ್ಣ ಲೇಖನವನ್ನು ಓದಿ",bds_ubf_book_single_other_format_label:"ಇತರ ಫಾರ್ಮ್ಯಾಟ್:",bds_ubf_book_other_formats_label:"ಇತರ ಫಾರ್ಮ್ಯಾಟ್‌ಗಳು:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} ಇನ್ನಷ್ಟು",bds_collection_text_in_series_alt_text_prefix:{value:"ಸರಣಿಯಲ್ಲಿ"},sample_text:"ಮಾದರಿ ಪಠ್ಯ ಇಲ್ಲಿದೆ",sample_button:"ಮಾದರಿಯನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} ವಿಮರ್ಶೆಗಳು"},bds_add_to_list_button_common_label:{value:"ಪಟ್ಟಿಗೆ ಸೇರಿಸಿ"},bds_add_to_library_button_common_label:{value:"ಪಟ್ಟಿಗೆ ಸೇರಿಸಿ"},bds_see_details_button_common_label:{value:"ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ನೋಡಿ"},bds_read_now_button_label:{value:"ಈಗಲೇ ಓದಿ"},bds_discover_new_stories_button_rare_label:{value:"ಹೊಸ ಕಥೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ"},bds_shuffle_button_rare_label:{value:"ಷಫಲ್ ಮಾಡಿ"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} ಉಳಿತಾಯಗಳೊಂದಿಗೆ"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{authors} ಅವರಿಂದ {title}"},bds_previous_set_of_slides:{value:"ಹಿಂದಿನ ಸ್ಲೈಡ್‌ಗಳ ಸೆಟ್"},bds_next_set_of_slides:{value:"ಮುಂದಿನ ಸ್ಲೈಡ್‌ಗಳ ಸೆಟ್"},bds_this_title_release_date_text:{value:"ಈ ಶೀರ್ಷಿಕೆಯನ್ನು {releaseDate} ರಂದು ಬಿಡುಗಡೆ ಮಾಡಲಾಗುತ್ತದೆ"},bds_this_title_release_date_short_text:{value:"{releaseDate} ಬಿಡುಗಡೆಗಳು"}}},"ko-KR":{resources:{bds_audible_sample_button_label:"Audible 샘플",bds_author_follow_label:"✓ 팔로우하는 중",bds_author_unfollow_label:"+ 팔로우",bds_download_sample_label:"샘플 다운로드",bds_blurb_read_full_article_label:"전체 기사 읽기",bds_ubf_book_single_other_format_label:"기타 형식:",bds_ubf_book_other_formats_label:"기타 형식:",bds_ubf_book_other_formats_more_text:"+{numberOfFormats}개 더 보기",bds_collection_text_in_series_alt_text_prefix:{value:"시리즈"},sample_text:"샘플 텍스트 위치",sample_button:"샘플 클릭 {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews}개의 리뷰"},bds_add_to_list_button_common_label:{value:"목록에 추가"},bds_add_to_library_button_common_label:{value:"목록에 추가"},bds_see_details_button_common_label:{value:"세부 정보 모두 보기"},bds_read_now_button_label:{value:"지금 읽기"},bds_discover_new_stories_button_rare_label:{value:"새 스토리 검색"},bds_shuffle_button_rare_label:{value:"셔플"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} 할인 적용"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title}(저자: {authors})"},bds_previous_set_of_slides:{value:"이전 슬라이드 세트"},bds_next_set_of_slides:{value:"다음 슬라이드 세트"},bds_this_title_release_date_text:{value:"이 타이틀은 {releaseDate}에 출간될 예정임"},bds_this_title_release_date_short_text:{value:"릴리즈 {releaseDate}"}}},"ml-IN":{resources:{bds_audible_sample_button_label:"Audible സാമ്പിൾ",bds_author_follow_label:"✓ പിന്തുടരുന്നു",bds_author_unfollow_label:"+ പിന്തുടരുക",bds_download_sample_label:"സാമ്പിൾ ഡൗൺലോഡുചെയ്യുക",bds_blurb_read_full_article_label:"മുഴുവൻ ലേഖനവും വായിക്കുക",bds_ubf_book_single_other_format_label:"മറ്റ് ഫോർമാറ്റ്:",bds_ubf_book_other_formats_label:"മറ്റ് ഫോർമാറ്റുകൾ:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} കൂടുതൽ",bds_collection_text_in_series_alt_text_prefix:{value:"പരമ്പരയിൽ"},sample_text:"സാമ്പിൾ ടെക്‌സ്‌റ്റ് ഇവിടെ നൽകുക",sample_button:"സാമ്പിൾ ക്ലിക്ക് ചെയ്യുക {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} അവലോകനങ്ങൾ"},bds_add_to_list_button_common_label:{value:"ലിസ്റ്റിൽ ചേർക്കുക"},bds_add_to_library_button_common_label:{value:"ലിസ്റ്റിൽ ചേർക്കുക"},bds_see_details_button_common_label:{value:"എല്ലാ വിശദാംശങ്ങളും കാണുക"},bds_read_now_button_label:{value:"ഇപ്പോൾ വായിക്കുക"},bds_discover_new_stories_button_rare_label:{value:"പുതിയ കഥകൾ കണ്ടെത്തൂ"},bds_shuffle_button_rare_label:{value:"ഷഫിൾ ചെയ്യൂ"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} ലാഭത്തോടെ"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{authors} രചിച്ച {title}"},bds_previous_set_of_slides:{value:"മുമ്പത്തെ സ്ലൈഡുകളുടെ സെറ്റ്"},bds_next_set_of_slides:{value:"അടുത്ത സ്ലൈഡുകളുടെ സെറ്റ്"},bds_this_title_release_date_text:{value:"ഈ ടൈറ്റിൽ {releaseDate}-ന് റിലീസ് ചെയ്യും"},bds_this_title_release_date_short_text:{value:"{releaseDate} റിലീസ് ചെയ്യുന്നു"}}},"mr-IN":{resources:{bds_audible_sample_button_label:"Audible नमुना",bds_author_follow_label:"✓ खालील",bds_author_unfollow_label:"+ फॉलो करा",bds_download_sample_label:"नमुना डाउनलोड करा",bds_blurb_read_full_article_label:"संपूर्ण लेख वाचा",bds_ubf_book_single_other_format_label:"इतर स्वरूप:",bds_ubf_book_other_formats_label:"इतर स्वरूपने:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} अधिक",bds_collection_text_in_series_alt_text_prefix:{value:"सिरीझमधील"},sample_text:"येथे नमुना मजकूर",sample_button:"{stringText} {numberValue} {stringText} नमुना क्लिक करा",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} पुनरावलोकने"},bds_add_to_list_button_common_label:{value:"यादीमध्ये जोडा"},bds_add_to_library_button_common_label:{value:"यादीमध्ये जोडा"},bds_see_details_button_common_label:{value:"सर्व तपशील पहा"},bds_read_now_button_label:{value:"आता वाचा"},bds_discover_new_stories_button_rare_label:{value:"नवीन कथा शोधा"},bds_shuffle_button_rare_label:{value:"शफल"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} बचतीसह"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{authors} यांचे {title}"},bds_previous_set_of_slides:{value:"स्लाइड्सचा मागील संच"},bds_next_set_of_slides:{value:"स्लाइड्सचा पुढील संच"},bds_this_title_release_date_text:{value:"हे शीर्षक {releaseDate} रोजी रिलिझ होईल"},bds_this_title_release_date_short_text:{value:"{releaseDate} रिलिझ करा"}}},"nl-NL":{resources:{bds_audible_sample_button_label:"Audible-fragment",bds_author_follow_label:"✓ Volgend",bds_author_unfollow_label:"+ Volgen",bds_download_sample_label:"Fragment downloaden",bds_blurb_read_full_article_label:"Het volledige artikel lezen",bds_ubf_book_single_other_format_label:"Andere indeling:",bds_ubf_book_other_formats_label:"Andere uitvoeringen:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} meer",bds_collection_text_in_series_alt_text_prefix:{value:"in serie"},sample_text:"Tekst van fragment hier",sample_button:"Klik op fragment {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} recensies"},bds_add_to_list_button_common_label:{value:"Toevoegen aan lijst"},bds_add_to_library_button_common_label:{value:"Toevoegen aan lijst"},bds_see_details_button_common_label:{value:"alle details bekijken"},bds_read_now_button_label:{value:"Nu lezen"},bds_discover_new_stories_button_rare_label:{value:"Nieuwe verhalen ontdekken"},bds_shuffle_button_rare_label:{value:"shuffle"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay}{savingsPercentage}{audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"met korting van {savingsPercentage}"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title} door {authors}"},bds_previous_set_of_slides:{value:"Vorige set slides"},bds_next_set_of_slides:{value:"Volgende set slides"},bds_this_title_release_date_text:{value:"Dit boek wordt uitgebracht op {releaseDate}"},bds_this_title_release_date_short_text:{value:"Uitgaven {releaseDate}"}}},"pl-PL":{resources:{bds_audible_sample_button_label:"Fragment z Audible",bds_author_follow_label:"✓ Obserwujesz",bds_author_unfollow_label:"+ Obserwuj",bds_download_sample_label:"Pobierz fragment",bds_blurb_read_full_article_label:"Przeczytaj cały artykuł",bds_ubf_book_single_other_format_label:"Inny format:",bds_ubf_book_other_formats_label:"Inne formaty:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} więcej",bds_collection_text_in_series_alt_text_prefix:{value:"w serii"},sample_text:"Fragment tekstu tutaj",sample_button:"Kliknij fragment {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} recenzje"},bds_add_to_list_button_common_label:{value:"Dodaj do listy"},bds_add_to_library_button_common_label:{value:"Dodaj do listy"},bds_see_details_button_common_label:{value:"zobacz wszystkie szczegóły"},bds_read_now_button_label:{value:"Czytaj teraz"},bds_discover_new_stories_button_rare_label:{value:"Poznaj nowe historie"},bds_shuffle_button_rare_label:{value:"przemieszaj"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay}{savingsPercentage}{audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay}{savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay}{audibleMessage}"},bds_savings_percentage_aria_text:{value:"oszczędzasz {savingsPercentage}"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title} autorstwa {authors}"},bds_previous_set_of_slides:{value:"Poprzedni zestaw slajdów"},bds_next_set_of_slides:{value:"Następny zestaw slajdów"},bds_this_title_release_date_text:{value:"Ten tytuł zostanie wydany {releaseDate}"},bds_this_title_release_date_short_text:{value:"Data wydania: {releaseDate}"}}},"pt-BR":li,"pt-PT":li,"sv-SE":{resources:{bds_audible_sample_button_label:"Hörbart prov",bds_author_follow_label:"Följer",bds_author_unfollow_label:"+ Följ",bds_download_sample_label:"Ladda ned prov",bds_blurb_read_full_article_label:"Läs hela artikeln",bds_ubf_book_single_other_format_label:"Annat format:",bds_ubf_book_other_formats_label:"Andra format:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} till",bds_collection_text_in_series_alt_text_prefix:{value:"i serien"},sample_text:"Textprov här",sample_button:"Klicka på prov{stringText}{numberValue}{stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} recensioner"},bds_add_to_list_button_common_label:{value:"Lägg till i lista"},bds_add_to_library_button_common_label:{value:"Lägg till i lista"},bds_see_details_button_common_label:{value:"se all information"},bds_read_now_button_label:{value:"Läs nu"},bds_discover_new_stories_button_rare_label:{value:"Upptäck nya berättelser"},bds_shuffle_button_rare_label:{value:"blanda"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"med en besparing på {savingsPercentage}"},bds_savings_percentage_text:{value:"–{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title} av {authors}"},bds_previous_set_of_slides:{value:"Föregående uppsättning bilder"},bds_next_set_of_slides:{value:"Nästa uppsättning bilder"},bds_this_title_release_date_text:{value:"Denna titel släpps den {releaseDate}"},bds_this_title_release_date_short_text:{value:"Utgåvor {releaseDate}"}}},"ta-IN":{resources:{bds_audible_sample_button_label:"கேட்கக்கூடிய மாதிரி",bds_author_follow_label:"✓ பின்பற்றுதல்",bds_author_unfollow_label:"+ பின்பற்றவும்",bds_download_sample_label:"மாடலை பதிவிறக்குக",bds_blurb_read_full_article_label:"முழு கட்டுரையைப் படிக்கவும்",bds_ubf_book_single_other_format_label:"பிற வடிவம்:",bds_ubf_book_other_formats_label:"பிற வடிவங்கள்:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} மேலும்",bds_collection_text_in_series_alt_text_prefix:{value:"தொடரில்"},sample_text:"மாடல் உரை இங்கே உள்ளது",sample_button:"{stringText} {numberValue} {stringText}மாதிரியைக் கிளிக் செய்க",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} மதிப்புரைகள்"},bds_add_to_list_button_common_label:{value:"பட்டியலில் சேர்க்கவும்"},bds_add_to_library_button_common_label:{value:"பட்டியலில் சேர்க்கவும்"},bds_see_details_button_common_label:{value:"அனைத்து விவரங்களையும் காண்க"},bds_read_now_button_label:{value:"இப்போதே படிக்கவும்"},bds_discover_new_stories_button_rare_label:{value:"புதிய கதைகளைக் கண்டறியவும்"},bds_shuffle_button_rare_label:{value:"மாற்றி வைத்தல்"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} சேமிப்புடன்"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{authors}-இன் அடிப்படையிலான {title}"},bds_previous_set_of_slides:{value:"முந்தைய ஸ்லைடுகளின் தொகுப்பு"},bds_next_set_of_slides:{value:"அடுத்த ஸ்லைடுகளின் தொகுப்பு"},bds_this_title_release_date_text:{value:"இந்தத் தலைப்பு {releaseDate} அன்று வெளியிடப்படும்"},bds_this_title_release_date_short_text:{value:"{releaseDate} அன்று வெளியிடப்படுகிறது"}}},"te-IN":{resources:{bds_audible_sample_button_label:"వినదగిన నమూనా",bds_author_follow_label:"✓ అనుసరిస్తున్నారు",bds_author_unfollow_label:"+ అనుసరించండి",bds_download_sample_label:"నమూనాను డౌన్‌లోడ్ చేయండి",bds_blurb_read_full_article_label:"పూర్తి కథనాన్ని చదవండి",bds_ubf_book_single_other_format_label:"మరో ఫార్మాట్:",bds_ubf_book_other_formats_label:"ఇతర ఫార్మాట్‌లలో:",bds_ubf_book_other_formats_more_text:"మరో + {numberOfFormats}",bds_collection_text_in_series_alt_text_prefix:{value:"సిరీస్‌లో"},sample_text:"నమూనా టెక్స్ట్ ఇక్కడ ఉంది",sample_button:"నమూనాని క్లిక్ చేయండి {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} సమీక్షలు"},bds_add_to_list_button_common_label:{value:"జాబితాకు జోడించండి"},bds_add_to_library_button_common_label:{value:"జాబితాకు జోడించండి"},bds_see_details_button_common_label:{value:"అన్ని వివరాలను చూడండి"},bds_read_now_button_label:{value:"ఇప్పుడు చదవండి"},bds_discover_new_stories_button_rare_label:{value:"కొత్త కథలను కనుగొనండి"},bds_shuffle_button_rare_label:{value:"షఫుల్ చేయి"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} పొదుపుతో"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{authors} ద్వారా {title}"},bds_previous_set_of_slides:{value:"మునుపటి స్లయిడ్‌ల సెట్"},bds_next_set_of_slides:{value:"తదుపరి స్లయిడ్‌ల సెట్"},bds_this_title_release_date_text:{value:"ఈ శీర్షిక {releaseDate}న విడుదల చేయబడుతుంది"},bds_this_title_release_date_short_text:{value:"విడుదలలు {releaseDate}"}}},"tr-TR":{resources:{bds_audible_sample_button_label:"Audible Örneği",bds_author_follow_label:"✓ Takip ediliyor",bds_author_unfollow_label:"+ Takip et",bds_download_sample_label:"Örnek Parça İndir",bds_blurb_read_full_article_label:"Makalenin Tamamını Oku",bds_ubf_book_single_other_format_label:"Diğer biçim:",bds_ubf_book_other_formats_label:"Diğer biçimler:",bds_ubf_book_other_formats_more_text:"+ {numberOfFormats} daha",bds_collection_text_in_series_alt_text_prefix:{value:"seri halinde"},sample_text:"Örnek metin buraya gelecek",sample_button:"Örneğe tıklayın {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}, {numberOfReviews} değerlendirme"},bds_add_to_list_button_common_label:{value:"Listeye ekle"},bds_add_to_library_button_common_label:{value:"Listeye ekle"},bds_see_details_button_common_label:{value:"tüm ayrıntıları görün"},bds_read_now_button_label:{value:"Şimdi okuyun"},bds_discover_new_stories_button_rare_label:{value:"Yeni hikayeleri keşfedin"},bds_shuffle_button_rare_label:{value:"karıştır"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"{savingsPercentage} tasarrufla"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title} - {authors}"},bds_previous_set_of_slides:{value:"Önceki slayt seti"},bds_next_set_of_slides:{value:"Sonraki slayt seti"},bds_this_title_release_date_text:{value:"Bu kitap, {releaseDate} tarihinde yayımlanacak"},bds_this_title_release_date_short_text:{value:"Yayınlanma Tarihleri {releaseDate}"}}},"zh-CN":{resources:{bds_audible_sample_button_label:"Audible 样章",bds_author_follow_label:"✓ 已关注",bds_author_unfollow_label:"+ 关注",bds_download_sample_label:"下载样章",bds_blurb_read_full_article_label:"阅读全文",bds_ubf_book_single_other_format_label:"其他格式：",bds_ubf_book_other_formats_label:"其他格式：",bds_ubf_book_other_formats_more_text:"更多 {numberOfFormats} 个格式",bds_collection_text_in_series_alt_text_prefix:{value:"在丛书中"},sample_text:"此处为样章文本",sample_button:"单击样章 {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}，{numberOfReviews} 条评论"},bds_add_to_list_button_common_label:{value:"添加至列表"},bds_add_to_library_button_common_label:{value:"添加至列表"},bds_see_details_button_common_label:{value:"查看所有详细信息"},bds_read_now_button_label:{value:"立即阅读"},bds_discover_new_stories_button_rare_label:{value:"发现新故事"},bds_shuffle_button_rare_label:{value:"随机推荐"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"节省 {savingsPercentage}"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title}，作者：{authors}"},bds_previous_set_of_slides:{value:"上一组幻灯片"},bds_next_set_of_slides:{value:"下一组幻灯片"},bds_this_title_release_date_text:{value:"本电子书将于 {releaseDate} 发售"},bds_this_title_release_date_short_text:{value:"发售 {releaseDate}"}}},"zh-TW":{resources:{bds_audible_sample_button_label:"Audible 試讀本",bds_author_follow_label:"✓ 正在關注",bds_author_unfollow_label:"+ 關注",bds_download_sample_label:"下載試讀本",bds_blurb_read_full_article_label:"閱讀完整文章",bds_ubf_book_single_other_format_label:"其他格式：",bds_ubf_book_other_formats_label:"其他格式：",bds_ubf_book_other_formats_more_text:"+ 多 {numberOfFormats} 個",bds_collection_text_in_series_alt_text_prefix:{value:"在系列中"},sample_text:"試讀本文字於此",sample_button:"按一下試讀本 {stringText} {numberValue} {stringText}",bds_star_rating_review_count_summary:{value:"{ratingSummary}，{numberOfReviews} 則評論"},bds_add_to_list_button_common_label:{value:"加入清單"},bds_add_to_library_button_common_label:{value:"加入清單"},bds_see_details_button_common_label:{value:"查看所有詳細資料"},bds_read_now_button_label:{value:"立即閱讀"},bds_discover_new_stories_button_rare_label:{value:"探索新故事"},bds_shuffle_button_rare_label:{value:"隨機排列"},bds_basis_price_text:{value:"{label} {basisPrice}"},bds_price_amount_with_savings_percentage_with_audible_message_aria_text:{value:"{priceToPay} {savingsPercentage} {audibleMessage}"},bds_price_amount_with_savings_percentage_aria_text:{value:"{priceToPay} {savingsPercentage}"},bds_price_amount_with_audible_message_aria_text:{value:"{priceToPay} {audibleMessage}"},bds_savings_percentage_aria_text:{value:"省下 {savingsPercentage}"},bds_savings_percentage_text:{value:"-{savingsPercentage}"},bds_book_name_by_author_text:{value:"{title}，作者：{authors}"},bds_previous_set_of_slides:{value:"上一組投影片"},bds_next_set_of_slides:{value:"下一組投影片"},bds_this_title_release_date_text:{value:"本書將於 {releaseDate} 發行"},bds_this_title_release_date_short_text:{value:"發行 {releaseDate}"}}}},ci="en-US";function ui(e,t,i){var o,a,r;const s=(null===(a=null===(o=di[null!=t?t:ci])||void 0===o?void 0:o.resources)||void 0===a?void 0:a[e])||(null===(r=di[ci].resources)||void 0===r?void 0:r[e])||"";return void 0===i?bi(s):function(e,t){for(const i in t){const o=new RegExp("{"+i+"}","g");e=e.replace(o,t[i])}return e}(bi(s),i)}function bi(e){return"object"==typeof e?e.value:e}function hi(){return"rtl"===window.document.dir}var gi;e.StarRating=gi=class extends et{constructor(){super(...arguments),this.skeletonType="metadata",this.skeletonWidthPx=It.metadata.widthPx,this.skeletonHeightPx=It.metadata.heightPx,this.condenseNumberOfReviews=!1,this.hideEmptyStars=!1,this.layout="small",this.onClick=e=>{this.handleClick&&(e.preventDefault(),this.handleClick())}}getDefaultConfiguration(){return{starIconHeight:16,starIconWidth:15,starFullIconUrl:bt("starFullSmall.svg"),starHalfIconUrl:bt("starHalfSmall.svg"),starEmptyIconUrl:bt("starEmptySmall.svg"),fontSizeToken:"var(--bds-size-font-functional-body-small)",lineHeightToken:"var(--bds-size-line-height-functional-body-small)",paddingStartToken:"2px",paddingEndToken:"4px",paddingBottomToken:"1px"}}getConfigurationOverrides(){return[{targeting:{layout:"small",theme:"dark"},overrides:{starFullIconUrl:bt("starFullSmallDark.svg"),starHalfIconUrl:bt("starHalfSmallDark.svg"),starEmptyIconUrl:bt("starEmptySmallDark.svg")}},{targeting:{layout:"small",devicetype:"desktop"},overrides:{fontSizeToken:"var(--bds-size-font-functional-body-small)"}},{targeting:{layout:"mini"},overrides:{starIconHeight:11,starIconWidth:12,starFullIconUrl:bt("starFullMini.svg"),starHalfIconUrl:bt("starHalfMini.svg"),starEmptyIconUrl:bt("starEmptyMini.svg"),fontSizeToken:"var(--bds-size-font-functional-label-small)",lineHeightToken:"var(--bds-size-line-height-functional-label-small)",paddingBottomToken:"0"}},{targeting:{layout:"mini",theme:"dark"},overrides:{starFullIconUrl:bt("starFullMiniDark.svg"),starHalfIconUrl:bt("starHalfMiniDark.svg"),starEmptyIconUrl:bt("starEmptyMiniDark.svg")}},{targeting:{layout:"medium"},overrides:{starIconHeight:19,starIconWidth:18,starFullIconUrl:bt("starFullMedium.svg"),starHalfIconUrl:bt("starHalfMedium.svg"),starEmptyIconUrl:bt("starEmptyMedium.svg")}},{targeting:{layout:"medium",theme:"dark"},overrides:{starFullIconUrl:bt("starFullMediumDark.svg"),starHalfIconUrl:bt("starHalfMediumDark.svg"),starEmptyIconUrl:bt("starEmptyMediumDark.svg")}},{targeting:{layout:"medium",devicetype:"desktop"},overrides:{fontSizeToken:"var(--bds-size-font-functional-body-small)"}},{targeting:{layout:"standardV2"},overrides:{fontSizeToken:"var(--bds-size-font-functional-body-small)",lineHeightToken:"var(--bds-size-line-height-functional-body-small)"}}]}getLocaleForCondensedReviewCount(){var e;return(null===(e=this.renderContext)||void 0===e?void 0:e.locale)?"ar-AE"===this.renderContext.locale?"en":new Intl.Locale(this.renderContext.locale):"en"}parenthesizeReviewCount(e){return"("+e+")"}getNumberofReviewsDisplayString(){var e,t;if(this.numberOfReviews&&this.condenseNumberOfReviews){const e=1e3;if(this.numberOfReviews<e)return this.parenthesizeReviewCount(this.numberOfReviews.toString());const t=new Intl.NumberFormat(this.getLocaleForCondensedReviewCount(),{notation:"compact",compactDisplay:"short",maximumFractionDigits:1,roundingMode:"trunc",numberingSystem:"latn"}).format(this.numberOfReviews);return this.parenthesizeReviewCount(t)}return this.numberOfReviewsDisplayString?this.numberOfReviewsDisplayString:null===(e=this.numberOfReviews)||void 0===e?void 0:e.toLocaleString(null===(t=this.renderContext)||void 0===t?void 0:t.locale)}getAriaLabel(){var e;const t=this.getNumberofReviewsDisplayString();return this.altText&&t?ui("bds_star_rating_review_count_summary",null===(e=this.renderContext)||void 0===e?void 0:e.locale,{ratingSummary:this.altText,numberOfReviews:t})||`${this.altText}, ${t}`:this.altText?this.altText:t||""}renderReviewStarAndCount(){const e=this.getRenderConfiguration(this.layout),t=[];for(let i=0;i<this.numberOfStars;i++)t.push(G`<img
                    class="fullStar"
                    alt=""
                    src="${e.starFullIconUrl}"
                    width="${e.starIconWidth}"
                    height="${e.starIconHeight}" />`);if(this.hasHalfStar&&t.push(G`<img
                    class="halfStar"
                    alt=""
                    src="${e.starHalfIconUrl}"
                    width="${e.starIconWidth}"
                    height="${e.starIconHeight}" />`),!this.hideEmptyStars){const i=gi.MAX_REVIEW_STARS-this.numberOfStars-(this.hasHalfStar?1:0);for(let o=0;o<i;o++)t.push(G`<img
                        class="emptyStar"
                        alt=""
                        src="${e.starEmptyIconUrl}"
                        width="${e.starIconWidth}"
                        height="${e.starIconHeight}" />`)}return G`
            <span
                class="stars-container ${this.allowWrap?"allowWrap":""}"
                style="font-size: ${e.fontSizeToken}; line-height: ${e.lineHeightToken}">
                ${zt(this.shortDisplayString,(()=>G`
                        <span class="rating" aria-hidden="true"> ${this.shortDisplayString} </span>
                    `))}
                <span
                    class="stars"
                    style="padding: 0 ${e.paddingEndToken} ${e.paddingBottomToken} ${this.shortDisplayString?e.paddingStartToken:"0"}">
                    ${t}
                </span>
                ${zt(this.numberOfReviewsDisplayString||this.numberOfReviews&&this.numberOfReviews>0,(()=>G`
                        <span class="numberOfReviews" aria-hidden="true">
                            ${this.getNumberofReviewsDisplayString()}
                        </span>
                    `))}
            </span>
        `}render(){return G`<div class="starRating">
            ${this.reviewUrl&&this.enableReviewsLink||this.handleClick?G`
                      <a
                          href="${$t(this.reviewUrl&&this.enableReviewsLink?this.reviewUrl:void 0)}"
                          @click=${this.onClick}
                          class="starRatingLink"
                          role="${this.handleClick?"button":"link"}"
                          aria-label=${$t(this.getAriaLabel())}>
                          ${this.renderReviewStarAndCount()}
                      </a>
                  `:G`
                      <span
                          class="starRatingLinkDisabled"
                          aria-label=${$t(this.getAriaLabel())}
                          role="text">
                          ${this.renderReviewStarAndCount()}
                      </span>
                  `}
        </div>`}},e.StarRating.MAX_REVIEW_STARS=5,e.StarRating.styles=ai,t([ke({type:Number})],e.StarRating.prototype,"numberOfStars",void 0),t([ke({type:Boolean})],e.StarRating.prototype,"hasHalfStar",void 0),t([ke({type:String})],e.StarRating.prototype,"numberOfReviewsDisplayString",void 0),t([ke({type:Number})],e.StarRating.prototype,"numberOfReviews",void 0),t([ke({type:Boolean})],e.StarRating.prototype,"condenseNumberOfReviews",void 0),t([ke({type:String})],e.StarRating.prototype,"reviewUrl",void 0),t([ke({type:Boolean})],e.StarRating.prototype,"enableReviewsLink",void 0),t([ke({type:Boolean})],e.StarRating.prototype,"allowWrap",void 0),t([ke({type:Boolean})],e.StarRating.prototype,"hideEmptyStars",void 0),t([ke({type:String})],e.StarRating.prototype,"layout",void 0),t([ke({type:String})],e.StarRating.prototype,"altText",void 0),t([ke({type:String})],e.StarRating.prototype,"shortDisplayString",void 0),t([ke()],e.StarRating.prototype,"handleClick",void 0),t([ye({context:$e,subscribe:!0})],e.StarRating.prototype,"renderContext",void 0),e.StarRating=gi=t([ze("bds-star-rating"),He,Tt],e.StarRating);var pi=v`
    :host {
        font-family: var(--bds-font-family-functional-label);
    }

    .badge-container {
        white-space: nowrap;
        position: relative;
        top: var(--bds-size-utils-padding-1);
        left: var(--bds-size-utils-padding-1);
        vertical-align: top;
        line-height: 0;
    }

    .badge {
        background-color: var(--bds-badge-primary-color-container-background-personal-activity);
        color: var(--bds-color-functional-neutral-on-surface-inverse);
        border-width: var(--bds-size-line-weight-small);
        border-radius: var(--bds-size-radius-x-small);
        font-family: var(--bds-font-family-functional-label);
        font-size: var(--bds-size-font-functional-label-small);
        font-weight: var(--bds-font-weight-functional-label);
        font-style: normal;
        line-height: var(--bds-size-line-height-functional-label-small);

        /**
         * This max-width is to prevent the badge from overflowing the container in grid UBF
         * Calculation details:
         * 100% (parent container) - 10px (badge padding) - 9px (stylized-edge width) - 8px (border radius of grid badge container)
         */
        max-width: calc(100% - 10px - 9px - 8px);
        padding: var(--bds-badge-size-container-padding-vertical)
            var(--bds-badge-size-container-padding-horizontal);
        outline: none;

        ${Lt(1,!0)};
        display: inline-block;
    }

    .badge.interactive {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: var(--bds-size-spacing-3x-small);
        position: relative;
    }

    .badge.interactive:focus-visible {
        outline: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-utils-focus-indicator);
        outline-offset: var(--bds-size-utils-padding-2);
    }

    .badge-text {
        ${Lt(1,!0)};
    }

    .info-icon {
        opacity: 0.55; /* BDS token not found - value from Figma design spec */
        flex-shrink: 0;
    }

    .secondary-text {
        color: var(--bds-color-functional-neutral-on-surface);
        font-family: var(--bds-font-family-functional-label);
        font-size: var(--bds-size-font-functional-label-small);
        font-weight: var(--bds-font-weight-functional-label);
        font-style: normal;
        line-height: var(--bds-size-line-height-functional-label-small);
        vertical-align: top;
        padding: var(--bds-badge-size-container-padding-vertical) 0;
        display: inline-block;
    }
`,vi=v`
    .badge.performance {
        background-color: var(--bds-badge-primary-color-container-background-best-seller);
        border-color: var(--bds-badge-primary-color-container-background-best-seller);
        color: var(--bds-badge-primary-color-text-label-best-seller);
        border-style: solid;

    }
`,mi=v`
    .badge.accolades {
        background-color: var(--bds-badge-primary-color-container-background-accolades);
        border-color: var(--bds-badge-primary-color-container-background-accolades);
        color: var(--bds-badge-primary-color-text-label-accolades);
        border-style: solid;
    }
`,fi=v`
    .badge.personal-activity {
        background-color: var(--bds-badge-primary-color-container-background-personal-activity);
        border-color: var(--bds-badge-primary-color-container-background-personal-activity);
        color: var(--bds-badge-primary-color-text-label-personal-activity);
        border-style: solid;
    }
`,_i=v`
    .badge.information {
        background-color: var(--bds-badge-primary-color-container-background-other);
        border-color: var(--bds-color-functional-neutral-on-surface);
        color: var(--bds-badge-primary-color-text-label-other);
        border-style: solid;
    }
`,yi=v`
    .TOP_SELLER .badge {
        background-color: #d14900;
        border: none;
    }

    .BONUS_OFFER .badge {
        background-color: var(--bds-color-functional-supplemental-discount);
        color: var(--bds-color-functional-neutral-on-surface-inverse-fixed);
        border: none;
    }

    .UNKNOWN .badge {
        background-color: var(--bds-color-functional-neutral-surface);
        color: var(--bds-color-functional-neutral-on-surface);
        border: var(--bds-size-radius-3x-small) solid var(--bds-color-functional-neutral-on-surface);
    }
`,xi=v`
    .wff-charged .badge {
        background-color: var(--bds-badge-wff-color-container-background-charged);
        color: var(--bds-badge-wff-color-text-label-charged);
        max-width: 100%; // This overrides the max-width calculation done for metadata badges in list view
    }

    .wff-charging .badge {
        background-color: var(--bds-badge-wff-color-container-background-charging);
        color: var(--bds-badge-wff-color-text-label-charging);
        max-width: 100%; // This overrides the max-width calculation done for metadata badges in list view
    }
`,wi=v`
    .ltf .badge {
        background-color: var(--bds-color-functional-supplemental-discount);
        color: var(--bds-color-functional-neutral-on-surface-inverse-fixed);
        max-width: 100%; // This overrides the max-width calculation done for metadata badges in list view
    }
`;e.PrimaryBadge=class extends Ne{static get styles(){return[pi,vi,mi,fi,_i,yi,xi,wi]}getEffectiveCategory(){if(this.badgeType)return;return this.category&&["performance","accolades","personal-activity","information"].includes(this.category)?this.category:"personal-activity"}getIconColor(){return"information"===this.getEffectiveCategory()?"var(--bds-anno-icon-color-default-fill)":"var(--bds-color-functional-core-on-primary)"}handleInteractiveClick(){var e;null===(e=this.handleBadgeClick)||void 0===e||e.call(this)}handleKeyDown(e){var t;"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),null===(t=this.handleBadgeClick)||void 0===t||t.call(this))}render(){const e={"badge-container":!0,[this.badgeType||""]:!!this.badgeType},t=this.getEffectiveCategory(),i={badge:!0,[t||""]:!!t,interactive:!!this.handleBadgeClick,[this.badgeType||""]:!!this.badgeType};return zt(this.badgeLabel,(()=>G`<div class=${Xe(e)}>
                ${this.handleBadgeClick?G`<button
                          type="button"
                          class=${Xe(i)}
                          @click=${this.handleInteractiveClick}
                          @keydown=${this.handleKeyDown}>
                          <span class="badge-text">${this.badgeLabel}</span>
                          <bds-icon
                              iconName="info-filled.svg"
                              iconSize="12px"
                              iconColor="${this.getIconColor()}"
                              class="info-icon"></bds-icon>
                      </button>`:G`<span class=${Xe(i)}> ${this.badgeLabel} </span>`}
                ${zt(this.secondaryText,(()=>G`<span class="secondary-text">${this.secondaryText}</span>`))}
            </div>`),(()=>Q))}},t([ke({type:String})],e.PrimaryBadge.prototype,"badgeLabel",void 0),t([ke({type:String})],e.PrimaryBadge.prototype,"secondaryText",void 0),t([ke({type:String})],e.PrimaryBadge.prototype,"category",void 0),t([ke({type:String})],e.PrimaryBadge.prototype,"badgeType",void 0),t([ke({type:Object})],e.PrimaryBadge.prototype,"handleBadgeClick",void 0),e.PrimaryBadge=t([ze("bds-primary-badge"),He],e.PrimaryBadge),e.BookMetadataBadge=class extends Ne{constructor(){super(...arguments),this.skeletonType="metadata",this.skeletonWidthPx=It.metadata.widthPx,this.skeletonHeightPx=It.metadata.heightPx}render(){return zt(this.giftGuideBadgeLabel,(()=>G`<bds-primary-badge
                badgeLabel=${$t(this.giftGuideBadgeLabel)}
                secondaryText=${$t(this.secondaryText)}
                badgeType=${$t(this.badgeType)}>
            </bds-primary-badge>`))}},t([ke({type:String})],e.BookMetadataBadge.prototype,"giftGuideBadgeLabel",void 0),t([ke({type:String})],e.BookMetadataBadge.prototype,"secondaryText",void 0),t([ke({type:String})],e.BookMetadataBadge.prototype,"badgeType",void 0),e.BookMetadataBadge=t([ze("bds-book-metadata-badge"),He,Tt],e.BookMetadataBadge);var ki=v`
    :host {
        font-family: var(--bds-font-family-functional-body);
    }

    .format {
        color: var(--bds-color-functional-neutral-on-surface-variant);
        font-size: var(--bds-size-font-functional-body-medium);
        font-weight: var(--bds-font-weight-functional-body);
        line-height: var(--bds-size-line-height-functional-body-small);
        ${Lt(1)};
    }

    .format-container {
        display: flex;
        align-items: center;
        gap: var(--bds-size-spacing-2x-small);
        margin-bottom: var(--bds-size-spacing-2x-small);
    }

    .secondary-compact .format {
        font-size: var(
            --bds-size-font-functional-body-small
        );
        color: var(
            --bds-color-functional-neutral-on-surface-variant
        );
    }

    .secondary-compact.format-container,
    .primary.format-container {
        margin-bottom: 0;
    }

    .primary .format {
        color: var(--bds-color-functional-neutral-on-surface);
    }
`;e.BookFormat=class extends Ne{constructor(){super(...arguments),this.skeletonType="metadata",this.skeletonWidthPx=It.metadata.widthPx,this.skeletonHeightPx=It.metadata.heightPx,this.layout="secondary"}render(){return zt(this.format,(()=>{var e;return G`
                <div class="format-container ${this.layout}">
                    ${this.secondaryBadge&&Ci(this.secondaryBadge)}
                    <div class="format ${null===(e=this.renderContext)||void 0===e?void 0:e.devicetype}">${this.format}</div>
                </div>
            `}))}},e.BookFormat.styles=ki,t([ke({type:String})],e.BookFormat.prototype,"format",void 0),t([ke({type:Object})],e.BookFormat.prototype,"secondaryBadge",void 0),t([ke({type:String})],e.BookFormat.prototype,"layout",void 0),t([ye({context:$e,subscribe:!0})],e.BookFormat.prototype,"renderContext",void 0),e.BookFormat=t([ze("bds-book-format"),He,Tt],e.BookFormat);const Ci=e=>G`
        <bds-program-badge
            badgePhysicalId=${$t(e.badgePhysicalId)}
            badgeAltText=${$t(e.badgeAltText)}
            badgeExtension=${$t(e.badgeExtension)}
            badgeImageHeightPx=${$t(e.badgeImageHeightPx)}>
        </bds-program-badge>
    `;var Si=[v`
    :host {
        font-family: var(--bds-font-family-functional-body);
    }

    .price {
        color: var(--bds-color-functional-neutral-on-surface);
        display: inline-block;
        margin-bottom: var(--bds-size-spacing-2x-small);
        font-size: var(--bds-size-font-functional-body-large);
        line-height: var(--bds-size-line-height-functional-body-small);
        position: relative;
    }

    .price.you-pay .promotion-message {
        color: var(--bds-color-functional-neutral-on-surface-variant);
        margin-bottom: var(--bds-size-spacing-2x-small);
        font-size: var(--bds-size-font-functional-body-small);
        line-height: var(--bds-size-line-height-functional-title-small);
    }

    .price-field {
        display: inline-block;
    }

    /* stylelint-disable-next-line selector-class-pattern
    */
    .currencySymbol {
        font-size: var(--bds-price-block-item-price-size-font-superscript);
        line-height: var(--bds-price-block-item-price-size-line-height-superscript);
        vertical-align: 20%;
    }

    .membership-message {
        color: var(--bds-color-functional-neutral-on-surface);
        margin-bottom: var(--bds-size-spacing-2x-small);
        font-size: var(--bds-size-font-functional-body-small);
        line-height: var(--bds-size-line-height-functional-title-small);
    }

    .basis-price {
        color: var(--bds-color-functional-neutral-on-surface-variant);
        font-size: var(--bds-size-font-functional-body-small);
        line-height: var(--bds-size-line-height-functional-title-small);
    }

    .basis-price .basis-price-display-string {
        text-decoration: line-through;
    }

    .price.inline {
        display: flex;
        column-gap: 24px;
        align-items: baseline;
        flex-flow: row wrap;
    }

    .price-format-parts-wrapper {
        display: inline;
    }

    /* TODO remove fallbacks below once tokenv2 migration is completed */
    .rio.price,
    .price.inline {
        margin-bottom: 0;
    }

    .price .deal-percentage {
        color: var(--bds-color-functional-supplemental-discount);
        font-family: var(--bds-price-block-discount-percent-font-family);
        font-size: var(--bds-price-block-discount-percent-size-font);
        font-weight: var(--bds-price-block-discount-percent-font-weight);
        line-height: var(--bds-price-block-discount-percent-size-line-height);
    }

    .price .price-to-pay-message {
        font-size: var(--bds-size-font-functional-body-small);
        color: var(--bds-color-functional-neutral-on-surface-variant);
    }

    .rio-format.price-field.currencySymbol,
    .rio-format.price-field.fractionalValue,
    .rio-format.price-field.integerValue {
        font-family: var(--bds-price-block-item-price-font-family);
        font-weight: var(--bds-price-block-item-price-font-weight);
    }

    .rio-format.price-field.currencySymbol,
    .rio-format.price-field.fractionalValue {
        font-size: var(--bds-price-block-item-price-size-font-superscript);
        line-height: var(--bds-price-block-item-price-size-line-height-superscript);
        vertical-align: text-top;
    }

    .rio-format.price-field.integerValue {
        font-size: var(--bds-price-block-item-price-size-font-main);
        line-height: var(--bds-price-block-item-price-size-line-height-main);
    }

    .rio-format.price-field.decimalSeparator {
        display: none;
    }
`,qt()];e.BookPrice=class extends Ne{constructor(){super(...arguments),this.skeletonType="metadata",this.skeletonWidthPx=It.metadata.widthPx,this.skeletonHeightPx=It.metadata.heightPx,this.layout="multiline"}isValidPriceFormatParts(e){var t,i;return!!((null==e?void 0:e.displayString)&&(null==e?void 0:e.displayFieldOrder)&&(null===(t=null==e?void 0:e.displayFields)||void 0===t?void 0:t.currencySymbol)&&(null===(i=null==e?void 0:e.displayFields)||void 0===i?void 0:i.integerValue))}renderPriceFormatParts(e,t,i){var o,a;let r=[...e.displayFieldOrder];hi()&&(null==e?void 0:e.displayFieldOrder)&&(null===(a=null===(o=this.priceFormatParts)||void 0===o?void 0:o.displayFields)||void 0===a?void 0:a.currencySymbol)&&(r=[...e.displayFieldOrder].filter((e=>"currencySymbol"!==e)),r.unshift("currencySymbol"));const s=r.filter((t=>{var i;return!!(null===(i=null==e?void 0:e.displayFields)||void 0===i?void 0:i[t])})).map((t=>{const o="currencySymbol"===t&&hi()?"rtl":void 0;return G`<div
                    class="price-field ${t} ${this.layout} ${i}"
                    aria-hidden="true"
                    dir="${$t(o)}">
                    ${null==e?void 0:e.displayFields[t]}
                </div>`}));return G`
            ${zt(s,(()=>G`<div class="price-format-parts-wrapper" dir="ltr">${s}</div>`))}
            ${zt(t&&(null==e?void 0:e.displayString),(()=>G`<span class="offscreen">${null==e?void 0:e.displayString}</span>`))}
        `}getPriceAmountAriaLabel(e){var t,i,o;const a=this.savingsPercentageDisplayString&&ui("bds_savings_percentage_aria_text",null===(t=this.renderContext)||void 0===t?void 0:t.locale,{savingsPercentage:this.savingsPercentageDisplayString})||"",r=(null===(i=this.audiblePromotion)||void 0===i?void 0:i.audibleMemberMessage)||"";if(!e||!a&&!r)return;let s;return s=a&&r?"bds_price_amount_with_savings_percentage_with_audible_message_aria_text":a?"bds_price_amount_with_savings_percentage_aria_text":"bds_price_amount_with_audible_message_aria_text",ui(s,null===(o=this.renderContext)||void 0===o?void 0:o.locale,{priceToPay:e,audibleMessage:r,savingsPercentage:a})}render(){var e,t,i,o;const a="inline"===this.layout||"rio"===this.layout?"rio-format":void 0;if(this.youPayPromotion&&this.youPayPromotion.youPayAmount&&this.youPayPromotion.basePrice&&this.youPayPromotion.promotionMessage)return G`
                <div class="price you-pay">
                    ${zt("string"==typeof this.youPayPromotion.youPayAmount,(()=>{var e;return G`<div class="amount">
                                ${null===(e=this.youPayPromotion)||void 0===e?void 0:e.youPayAmount}
                            </div>`}),(()=>{var e;return this.renderPriceFormatParts(null===(e=this.youPayPromotion)||void 0===e?void 0:e.youPayAmount,!0,a)}))}
                    <div class="promotion-message">
                        ${zt("string"==typeof this.youPayPromotion.basePrice,(()=>{var e;return G`${null===(e=this.youPayPromotion)||void 0===e?void 0:e.basePrice}`}),(()=>{var e;return this.renderPriceFormatParts(null===(e=this.youPayPromotion)||void 0===e?void 0:e.basePrice,!0,a)}))}
                        ${this.youPayPromotion.promotionMessage}
                    </div>
                </div>
            `;const r=null!==(t=null===(e=this.priceFormatParts)||void 0===e?void 0:e.displayString)&&void 0!==t?t:this.unstylizedPrice,s=this.getPriceAmountAriaLabel(r||"");return G`
            <div class="price ${this.layout} ${a}">
                <div class="amount">
                    ${zt(this.savingsPercentageDisplayString&&this.basisPriceDisplayString,(()=>{var e;const t=this.savingsPercentageDisplayString&&ui("bds_savings_percentage_text",null===(e=this.renderContext)||void 0===e?void 0:e.locale,{savingsPercentage:this.savingsPercentageDisplayString});return zt(!!t,(()=>G`<span class="deal-percentage" aria-hidden="true">
                                    ${t}
                                </span>`))}))}
                    ${zt(this.isValidPriceFormatParts(this.priceFormatParts),(()=>this.renderPriceFormatParts(this.priceFormatParts,!s,a)),(()=>zt(!!r,(()=>G`<span aria-hidden=${!!s}
                                        >${r}</span
                                    >`))))}
                    ${zt("inline"!==this.layout&&(null===(i=this.audiblePromotion)||void 0===i?void 0:i.audibleMemberMessage),(()=>{var e;return G`
                            <span class="membership-message" aria-hidden="true">
                                ${null===(e=this.audiblePromotion)||void 0===e?void 0:e.audibleMemberMessage}
                            </span>
                        `}))}
                    ${zt(!!s,(()=>G`<span class="offscreen"> ${s} </span>`))}
                </div>

                ${zt(this.basisPriceDisplayString,(()=>G` <div class="basis-price" aria-hidden="true">
                        ${zt(this.basisPriceLabel&&"inline"!==this.layout,(()=>G`<span class="basis-price-label" aria-hidden="true">
                                    ${this.basisPriceLabel}
                                </span>`))}
                        ${zt(this.basisPriceDisplayString,(()=>G`<span class="basis-price-display-string" aria-hidden="true">
                                    ${this.basisPriceDisplayString}
                                </span>`))}
                    </div>`))}
                ${zt(this.basisPriceDisplayString,(()=>{var e;const t=!(!this.basisPriceDisplayString||!this.basisPriceLabel)&&ui("bds_basis_price_text",null===(e=this.renderContext)||void 0===e?void 0:e.locale,{label:this.basisPriceLabel,basisPrice:this.basisPriceDisplayString});return zt(!!t,(()=>G`<span class="offscreen"> ${t} </span>`))}))}
                ${zt("inline"===this.layout&&(null===(o=this.audiblePromotion)||void 0===o?void 0:o.audibleMemberMessage),(()=>{var e;return G`
                        <span class="membership-message" aria-hidden="true">
                            ${null===(e=this.audiblePromotion)||void 0===e?void 0:e.audibleMemberMessage}
                        </span>
                    `}))}
                ${zt(this.priceToPayMessage,(()=>G`<div class="price-to-pay-message">${this.priceToPayMessage}</div>`))}
            </div>
        `}},e.BookPrice.styles=Si,t([ye({context:$e,subscribe:!0})],e.BookPrice.prototype,"renderContext",void 0),t([ke({type:String})],e.BookPrice.prototype,"unstylizedPrice",void 0),t([ke({type:Object})],e.BookPrice.prototype,"priceFormatParts",void 0),t([ke({type:Object})],e.BookPrice.prototype,"youPayPromotion",void 0),t([ke({type:Object})],e.BookPrice.prototype,"audiblePromotion",void 0),t([ke({type:String})],e.BookPrice.prototype,"basisPriceDisplayString",void 0),t([ke({type:String})],e.BookPrice.prototype,"basisPriceLabel",void 0),t([ke({type:String})],e.BookPrice.prototype,"layout",void 0),t([ke({type:String})],e.BookPrice.prototype,"savingsPercentageDisplayString",void 0),t([ke({type:String})],e.BookPrice.prototype,"priceToPayMessage",void 0),e.BookPrice=t([ze("bds-book-price"),He,Tt],e.BookPrice);var $i=v`
    :host {
        font-family: var(--bds-font-family-functional-body);
    }

    .points {
        color: var(--bds-color-functional-neutral-on-surface-variant);
        font-size: var(--bds-size-font-functional-body-small);
        font-weight: var(--bds-font-weight-functional-body);
        line-height: var(--bds-size-line-height-functional-body-small);
        margin-bottom: var(--bds-size-spacing-2x-small);

        ${Lt(1)};
    }
`;e.BookPoints=class extends Ne{constructor(){super(...arguments),this.skeletonType="metadata",this.skeletonWidthPx=It.metadata.widthPx,this.skeletonHeightPx=It.metadata.heightPx}getPointsDisplay(){var e;return(null===(e=this.pointsV2)||void 0===e?void 0:e.displayString)?this.pointsV2.displayString:this.points?this.points:""}render(){var e;return this.points||this.pointsV2?G`<div class="points ${null===(e=this.renderContext)||void 0===e?void 0:e.devicetype}">
                ${this.getPointsDisplay()}
            </div>`:Q}},e.BookPoints.styles=$i,t([ke({type:String})],e.BookPoints.prototype,"points",void 0),t([ke({type:Object})],e.BookPoints.prototype,"pointsV2",void 0),t([ye({context:$e,subscribe:!0})],e.BookPoints.prototype,"renderContext",void 0),e.BookPoints=t([ze("bds-book-points"),He,Tt],e.BookPoints);var Bi=v`
    :host {
        font-family: var(--bds-font-family-functional-body);
    }

    .formats {
        color: var(--bds-color-functional-neutral-on-surface-variant);
        font-weight: var(--bds-font-weight-functional-body);
        margin-bottom: var(--bds-size-spacing-2x-small);
        line-height: var(--bds-size-line-height-functional-body-small);
        font-size: var(--bds-size-font-functional-body-medium);
    }

    .formats.larger-text {
        font-size: var(--bds-size-font-functional-body-large);
        line-height: var(--bds-size-line-height-functional-body-large);
    }

    .formats a {
        color: var(--bds-color-functional-neutral-on-surface-variant);
        font-weight: var(--bds-font-weight-functional-body);
        margin-bottom: var(--bds-size-spacing-2x-small);
        line-height: var(--bds-size-line-height-functional-body-small);
        font-size: var(--bds-size-font-functional-body-medium);
    }

    .formats.larger-text a {
        font-size: var(--bds-size-font-functional-body-large);
        line-height: var(--bds-size-line-height-functional-body-large);
    }
`;e.BookOtherFormats=class extends et{getDefaultConfiguration(){return{enableLargerText:!1,disableIndividualFormatLinks:!1}}getConfigurationOverrides(){return[{targeting:{devicetype:"mobile"},overrides:{disableIndividualFormatLinks:!0}},{targeting:{devicetype:"tablet"},overrides:{disableIndividualFormatLinks:!0}},{targeting:{devicetype:"desktop"},overrides:{enableLargerText:!0}}]}render(){var e,t;const i=this.getRenderConfiguration();if(!Array.isArray(this.allFormats)||!this.allFormats.length)return Q;let o=[];const a=Math.min(this.allFormats.length,void 0!==this.numFormatsToShow?this.numFormatsToShow:3);if(o=[...this.allFormats].splice(0,a).map((e=>i.disableIndividualFormatLinks?e.displayString:G`<a href="${e.detailUrl}"> ${e.displayString} </a>`)),this.allFormats.length>a){const t=this.allFormats.length-a,r=ui("bds_ubf_book_other_formats_more_text",null===(e=this.renderContext)||void 0===e?void 0:e.locale,{numberOfFormats:t});!i.disableIndividualFormatLinks&&this.detailPage?o.push(G`<a href="${this.detailPage}"> ${r} </a>`):o.push(G`${r}`)}const r=
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function*(e,t){var i="function"==typeof t;if(void 0!==e){var o=-1;for(var a of e)o>-1&&(yield i?t(o):t),o++,yield a}}(o,G`<span aria-hidden="true">, </span>`),s=ui(1===a?"bds_ubf_book_single_other_format_label":"bds_ubf_book_other_formats_label",null===(t=this.renderContext)||void 0===t?void 0:t.locale);return G`<div class="formats ${i.enableLargerText?"larger-text":""}">
            ${s}
            ${i.disableIndividualFormatLinks&&this.detailPage?G`<a href="${this.detailPage}"> ${r} </a>`:r}
        </div>`}},e.BookOtherFormats.styles=Bi,t([ke({type:String})],e.BookOtherFormats.prototype,"detailPage",void 0),t([ke({type:Number})],e.BookOtherFormats.prototype,"numFormatsToShow",void 0),t([ke({type:Array})],e.BookOtherFormats.prototype,"allFormats",void 0),e.BookOtherFormats=t([ze("bds-book-other-formats"),He],e.BookOtherFormats);var zi=v`
    .blurb-wrapper {
        min-height: 295px;
        min-width: 231px;
        width: min-content;
        display: grid;
        grid-template-columns: 11px auto;
        box-sizing: border-box;
        word-wrap: break-word;
        word-break: break-word;
        font-family: var(--bds-font-family-functional-body);
        color: var(--bds-color-functional-neutral-on-surface);
        padding-left: var(--bds-size-spacing-2x-small);
    }

    .blurb-wrapper.compact {
        min-height: 295px;
        min-width: 160px;
    }

    .blurb-container {
        display: flex;
        flex-direction: column;
        position: relative;
        border-style: solid;
        padding: var(--bds-size-utils-padding-10);
        line-height: var(--bds-size-line-height-functional-body-small);
        border-width: var(--bds-size-line-weight-small);
        border-color: var(--bds-color-functional-neutral-outline);
        border-left-width: var(--bds-size-line-weight-x-large);
        border-left-color: #28a7dd;
    }

    .compact .blurb-container {
        padding: var(--bds-size-utils-padding-6);
        line-height: var(--bds-size-line-height-functional-title-small);
    }

    .pointer-arrow {
        clip-path: polygon(
            0px 105px,
            10px 114px,
            10px 100%,
            11px 100%,
            11px 96px,
            11px 0%,
            10px 0%,
            10px 96px,
            0px 105px
        );
        background: #28a7dd;
    }

    a.blurb-container-link {
        color: unset;
        text-decoration: none;
        height: 100%;
    }

    .blurb-quote {
        display: block;
        align-self: flex-start;
        border: 0;
        height: 35px;
    }

    .compact .blurb-quote {
        height: 23px;
    }

    .blurb-text-container {
        margin-bottom: var(--bds-size-utils-padding-6);
    }

    .blurb-text {
        position: relative;
        font-size: var(--bds-size-font-functional-body-medium);
        padding-top: var(--bds-size-spacing-2x-small);
        margin-top: 0;
    }

    .blurb-text::after {
        content: '';
        position: absolute;
        pointer-events: none;
        height: var(--bds-size-utils-padding-20);
        background: linear-gradient(
            to bottom,
            transparent,
            var(--bds-color-functional-neutral-surface)
        );
        visibility: var(--fade-out-overlay-visibility, hidden);
        left: 0;
        bottom: 0;
        width: 100%;
    }

    a.read-full-article-link {
        text-decoration: underline;
        cursor: pointer;
        display: block;
        color: var(--bds-link-color-text-active);
    }

    a.read-full-article-link:hover {
        color: var(--bds-link-color-text-hover);
    }

    .blurb-author-bottom-align {
        margin-top: auto;
    }

    .blurb-card-line {
        height: 5px;
        width: 45px;
        background-color: #28a7dd;
    }

    .compact .blurb-card-line {
        width: 35px;
    }

    .blurb-contributor-container {
        display: flex;
        padding-block: var(--bds-size-spacing-x-small);
        font-size: var(--bds-size-font-functional-body-large);
        min-height: 45px;
    }

    .compact .blurb-contributor-container {
        display: block;
        padding-block: var(--bds-size-utils-padding-6);
    }

    .blurb-contributor-details {
        padding-left: var(--bds-size-spacing-x-small);
    }

    .compact .blurb-contributor-details {
        padding-left: 0;
    }

    .blurb-contributor-image {
        position: relative;
        vertical-align: top;
        height: 45px;
        width: 45px;
        border-radius: 50%;
    }

    .compact .blurb-contributor-image {
        vertical-align: top;
        height: 34px;
        width: 34px;
    }

    .blurb-contributor-head {
        color: var(--bds-color-functional-neutral-on-surface-variant);
    }

    a.blurb-contributor-subhead {
        text-decoration: underline;
        font-weight: var(--bds-font-weight-functional-display);
        color: var(--bds-link-color-text-active);
    }

    a.blurb-contributor-subhead:hover {
        color: var(--bds-link-color-text-hover);
    }
`;let Ti=class extends et{getDefaultConfiguration(){return{displayMode:"default"}}getConfigurationOverrides(){return[{targeting:{devicetype:"mobile"},overrides:{displayMode:"compact"}}]}firstUpdated(){this.updateBlurbContextOnOverflow()}updated(e){e.has("blurbMetadata")&&this.updateBlurbContextOnOverflow()}updateBlurbContextOnOverflow(){const e=this.renderRoot.querySelector(".blurb-text");e instanceof HTMLElement&&(e.scrollHeight>e.clientHeight?e.style.setProperty("--fade-out-overlay-visibility","visible"):e.style.setProperty("--fade-out-overlay-visibility","hidden"))}shouldRenderBlurb(){var e,t;const i=!!(null===(e=this.blurbMetadata)||void 0===e?void 0:e.blurbText);return!!(null===(t=this.blurbMetadata)||void 0===t?void 0:t.blurbRefUrl)&&i}renderBlurbTextContainer(){var e,t;const i=function(e){if("string"!=typeof e)return!1;try{return new URL(e).protocol.startsWith("http")}catch(e){return!1}}(null===(e=this.blurbMetadata)||void 0===e?void 0:e.articleRefUrl);return G` <div class="blurb-text-container">
            <div class="blurb-text" .style="${zt(i,(()=>Lt(7)))}">
                ${null===(t=this.blurbMetadata)||void 0===t?void 0:t.blurbText}
            </div>
            ${zt(i,(()=>{var e,t;return G`<a
                    href="${$t(null===(e=this.blurbMetadata)||void 0===e?void 0:e.articleRefUrl)}"
                    class="read-full-article-link"
                    >${ui("bds_blurb_read_full_article_label",null===(t=this.renderContext)||void 0===t?void 0:t.locale)}</a
                >`}))}
        </div>`}renderContributorContainer(){var e,t,i;const o=!!(null===(e=this.blurbMetadata)||void 0===e?void 0:e.contributorImageUrl),a=!!(null===(t=this.blurbMetadata)||void 0===t?void 0:t.contributorSubHeading);return zt(!!(null===(i=this.blurbMetadata)||void 0===i?void 0:i.contributorHeading),(()=>{var e;return G` <div class="blurb-contributor-container">
                ${zt(o,(()=>{var e;return G` <div aria-hidden="true" class="blurb-contributor-image-container">
                        <img
                            alt=""
                            src="${$t(null===(e=this.blurbMetadata)||void 0===e?void 0:e.contributorImageUrl)}"
                            class="blurb-contributor-image" />
                    </div>`}))}
                <div class="blurb-contributor-details">
                    <div>
                        <span class="blurb-contributor-head"
                            >${null===(e=this.blurbMetadata)||void 0===e?void 0:e.contributorHeading}</span
                        >
                    </div>
                    ${zt(a,(()=>{var e,t;return G` <div>
                            <a
                                class="blurb-contributor-subhead"
                                href="${$t(null===(e=this.blurbMetadata)||void 0===e?void 0:e.contributorRefUrl)}">
                                ${null===(t=this.blurbMetadata)||void 0===t?void 0:t.contributorSubHeading}</a
                            >
                        </div>`}))}
                </div>
            </div>`}))}render(){const e=this.getRenderConfiguration();return G` ${zt(this.shouldRenderBlurb(),(()=>{var t;return G` <div class="blurb-wrapper ${e.displayMode}">
                <div class="pointer-arrow"></div>
                <div class="blurb-container">
                    <img
                        alt=""
                        class="blurb-quote"
                        src="https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/blurbQuote.svg"
                        aria-hidden="true" />
                    <a
                        class="blurb-container-link"
                        href="${$t(null===(t=this.blurbMetadata)||void 0===t?void 0:t.blurbRefUrl)}">
                        ${this.renderBlurbTextContainer()}
                    </a>
                    <div class="blurb-author-bottom-align">
                        <div class="blurb-card-line"></div>
                        ${this.renderContributorContainer()}
                    </div>
                </div>
            </div>`}))}`}};Ti.styles=zi,t([ke({type:Object})],Ti.prototype,"blurbMetadata",void 0),Ti=t([ze("bds-book-blurb")],Ti);var Pi=v`
    :host {
        font-family: var(--bds-font-family-functional-body);
    }

    .delivery-badge {
        display: flex;
        align-items: center;
    }

    .delivery-message {
        font-size: var(--bds-size-font-functional-label-small);
        font-weight: var(--bds-font-weight-functional-label);
        line-height: var(--bds-size-line-height-functional-label-small);
    }

    .delivery-fragment-strong {
        font-weight: var(--bds-font-weight-functional-display);
    }

    .delivery-fragment-nowrap {
        white-space: nowrap;
    }

    .delivery-promise-wrapper.spaced {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;e.DeliveryPromise=class extends Ne{constructor(){super(...arguments),this.skeletonType="metadata",this.skeletonWidthPx=It.metadata.widthPx,this.skeletonHeightPx=It.metadata.heightPx}render(){var e,t,i;return zt((null===(e=this.deliveryInfo)||void 0===e?void 0:e.deliveryBadge)&&(null===(i=null===(t=this.deliveryInfo)||void 0===t?void 0:t.deliveryMessageFragmentList)||void 0===i?void 0:i.length),(()=>{var e,t,i,o;return G`
                <div class="delivery-promise-wrapper ${this.layout}">
                    <div class="delivery-badge ${null===(e=this.renderContext)||void 0===e?void 0:e.devicetype}">
                        ${(null===(t=this.deliveryInfo)||void 0===t?void 0:t.deliveryBadge)&&Ii(this.deliveryInfo.deliveryBadge)}
                    </div>
                    ${zt(null===(o=null===(i=this.deliveryInfo)||void 0===i?void 0:i.deliveryMessageFragmentList)||void 0===o?void 0:o.length,(()=>{var e;return G`<div class="delivery-message">
                            ${Ai(null===(e=this.deliveryInfo)||void 0===e?void 0:e.deliveryMessageFragmentList)}
                        </div>`}))}
                </div>
            `}))}},e.DeliveryPromise.styles=Pi,t([ke({type:Object})],e.DeliveryPromise.prototype,"deliveryInfo",void 0),t([ye({context:$e,subscribe:!0})],e.DeliveryPromise.prototype,"renderContext",void 0),t([ke({type:String})],e.DeliveryPromise.prototype,"layout",void 0),e.DeliveryPromise=t([ze("bds-delivery-promise"),He,Tt],e.DeliveryPromise);const Ii=e=>G`
        <bds-program-badge
            badgePhysicalId=${$t(e.badgePhysicalId)}
            badgeAltText=${$t(e.badgeAltText)}
            badgeExtension=${$t(e.badgeExtension)}
            badgeImageHeightPx=${$t(e.badgeImageHeightPx)}>
        </bds-program-badge>
    `,Ai=e=>void 0===e?Q:e.map((e=>{var t,i;return e.text?G`
            <span
                class="${(null===(t=e.style)||void 0===t?void 0:t.strong)?"delivery-fragment-strong":""} ${(null===(i=e.style)||void 0===i?void 0:i.noWrap)?"delivery-fragment-nowrap":""}">
                ${e.text}
            </span>
        `:Q}));var Li=v`
    .overlay-container {
        border: 1px solid;
        height: 23px;
        line-height: 23px;
        font-size: var(--bds-size-font-functional-body-medium);
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        display: flex;
        background: white;
        width: max-content;
        padding: 1px 5px;
        margin-right: 2px;
        margin-top: 1px;
        color: black;
        box-shadow: 0.5px 0.5px;
    }
`;e.SeriesOverlay=class extends et{getDefaultConfiguration(){return{textLineHeight:"--bds-size-line-height-functional-title-small",fontSize:"--bds-size-font-functional-body-small"}}getConfigurationOverrides(){return[{targeting:{devicetype:"mobile",marketplace:"A1VC38T7YXB528"},overrides:{textLineHeight:"--bds-size-line-height-functional-title-small",fontSize:"--bds-size-font-functional-body-small"}},{targeting:{devicetype:"tablet",marketplace:"A1VC38T7YXB528"},overrides:{textLineHeight:"--bds-size-line-height-functional-title-small",fontSize:"--bds-size-font-functional-body-small"}}]}render(){const e=this.getRenderConfiguration();return G`<div
            class="overlay-container"
            style="line-height: var(${e.textLineHeight}); font-size: var(${e.fontSize});">
            <p>${this.label}</p>
        </div>`}},e.SeriesOverlay.styles=Li,t([ke({type:String})],e.SeriesOverlay.prototype,"label",void 0),e.SeriesOverlay=t([ze("bds-series-overlay"),He],e.SeriesOverlay);var Oi=v`
    :host {
        font-family: var(--bds-font-family-functional-body);
    }

    .book-release-date {
        color: var(--bds-color-functional-neutral-on-surface-variant);
        font-size: var(--bds-size-font-functional-body-small);
        font-weight: var(--bds-font-weight-functional-body);
        line-height: var(--bds-size-line-height-functional-body-small);
    }
`;let Ri=class extends Ne{constructor(){super(...arguments),this.isShortFormat=!1}getReleaseDateString(e){var t;return ui(this.isShortFormat?"bds_this_title_release_date_short_text":"bds_this_title_release_date_text",null===(t=this.renderContext)||void 0===t?void 0:t.locale,{releaseDate:e})}getReleaseDate(){var e,t,i;const o=(null===(e=this.releaseDate)||void 0===e?void 0:e.date)?new Date(this.releaseDate.date):void 0,a={year:"numeric",month:this.isShortFormat?"short":"long",day:"numeric"},r=null==o?void 0:o.toLocaleDateString(null===(t=this.renderContext)||void 0===t?void 0:t.locale,a);return this.isShortFormat?r:(null===(i=this.releaseDate)||void 0===i?void 0:i.displayString)||r}render(){const e=this.getReleaseDate(),t=e?this.getReleaseDateString(e):void 0;return G`
            ${zt(t,(()=>G` <div class="book-release-date">${t}</div>`))}
        `}};Ri.styles=Oi,t([ke({type:Object})],Ri.prototype,"releaseDate",void 0),t([ke({type:Boolean})],Ri.prototype,"isShortFormat",void 0),t([ye({context:$e,subscribe:!0})],Ri.prototype,"renderContext",void 0),Ri=t([ze("bds-book-release-date"),He],Ri);var Fi=v`
    :host {
        font-family: var(--bds-font-family-functional-body);
    }

    .likes-container {
        display: flex;
        align-items: center;
        gap: var(--bds-size-spacing-2x-small);
    }

    .likes-count {
        font-size: var(--bds-size-font-functional-body-small);
        line-height: var(--bds-size-line-height-functional-body-small);
        color: var(--bds-color-functional-neutral-on-surface-variant);
        font-weight: var(--bds-font-weight-functional-body);
    }
`;e.Likes=class extends be{render(){return G` <div class="likes-container">
            <bds-icon
                iconName="heart.svg"
                iconSize="16px"
                iconColor="var(--bds-color-functional-neutral-on-surface-variant)">
            </bds-icon>
            <span class="likes-count">${this.displayString}</span>
        </div>`}},e.Likes.styles=Fi,t([ke({type:String})],e.Likes.prototype,"displayString",void 0),e.Likes=t([ze("bds-likes"),He,Tt],e.Likes),e.WaitForFreeBadge=class extends Ne{render(){return G`<bds-primary-badge
            .badgeLabel=${this.badgeLabel}
            .badgeType=${`wff-${this.status.toLowerCase()}`}>
        </bds-primary-badge>`}},t([ke({type:String})],e.WaitForFreeBadge.prototype,"badgeLabel",void 0),t([ke({type:String})],e.WaitForFreeBadge.prototype,"status",void 0),e.WaitForFreeBadge=t([ze("bds-wait-for-free-badge"),He,Tt],e.WaitForFreeBadge),e.LimitedTimeFreeBadge=class extends Ne{render(){return G`<bds-primary-badge .badgeLabel=${this.badgeLabel} badgeType="ltf">
        </bds-primary-badge>`}},t([ke({type:String})],e.LimitedTimeFreeBadge.prototype,"badgeLabel",void 0),e.LimitedTimeFreeBadge=t([ze("bds-limited-time-free-badge"),He,Tt],e.LimitedTimeFreeBadge);const Di=[{targeting:{pagetype:"storefront"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!0,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0},bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},enableBookPoints:!0,bookMetadataBadgeConfiguration:{enableBookMetadataBadge:!0},enableProgramBadge:!0,enableBookFormat:!0,enableDeliveryPromise:!0}},{targeting:{pagetype:"storefront",devicetype:"mobile"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"storefront",devicetype:"tablet"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"storefront",operatingsystem:"iOS",hostapplication:"kindle"},overrides:{bookPriceConfiguration:{enableBookPrice:!1,enableQuickView:!1},enableBookPoints:!1}},{targeting:{pagetype:"storefront",operatingsystem:"iOS",hostapplication:"mShop"},overrides:{bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},enableBookPoints:!0}},{targeting:{pagetype:"storefront",operatingsystem:"iOS",marketplace:"ATVPDKIKX0DER"},overrides:{bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},enableBookPoints:!0}}],Ei=[{targeting:{pagetype:"eBooksTYP"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:"author",enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0},bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},enableBookPoints:!0,enableProgramBadge:!0,enableBookFormat:!0}},{targeting:{pagetype:"eBooksTYP",devicetype:"mobile"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"eBooksTYP",devicetype:"tablet"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"eBooksTYP",operatingsystem:"iOS",hostapplication:"kindle"},overrides:{bookPriceConfiguration:{enableBookPrice:!1,enableQuickView:!1},enableBookPoints:!1}},{targeting:{pagetype:"eBooksTYP",operatingsystem:"iOS",hostapplication:"mShop"},overrides:{bookPriceConfiguration:{enableBookPrice:!1,enableQuickView:!1},enableBookPoints:!1}},{targeting:{pagetype:"eBooksTYP",operatingsystem:"iOS",marketplace:"ATVPDKIKX0DER"},overrides:{bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},enableBookPoints:!0}}],Mi={bookTitleContentConfiguration:{primaryText:"headline",enablePrimaryLink:!0,suppressPrimaryAria:!1,secondaryText:void 0,enableSecondaryLink:!1,suppressSecondaryAria:!0,tertiaryText:void 0,enableTertiaryLink:!0,suppressTertiaryAria:!1,enableQuickView:!1},bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0},enableBookPoints:!1,bookMetadataBadgeConfiguration:{enableBookMetadataBadge:!0,enableBookMetadataBadgeTopSlot:!0}},Hi=[{targeting:{pagetype:"limber",devicetype:"desktop"},overrides:Mi},{targeting:{pagetype:"limber",devicetype:"mobile"},overrides:Mi},{targeting:{pagetype:"limber",devicetype:"tablet"},overrides:Mi},{targeting:{pagetype:"limber",devicetype:"default"},overrides:Mi}],Ui={layoutConfiguration:{bookCoverImageLayout:"fixedHeight",bookTitleContentLayout:"compact",priceLayout:"rio",bookFormatLayout:"secondary-compact",starRatingLayout:"standardV2"},bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0},bookTitleContentConfiguration:{primaryText:void 0,enablePrimaryLink:!0,suppressPrimaryAria:!1,secondaryText:void 0,enableSecondaryLink:!0,suppressSecondaryAria:!1,tertiaryText:void 0,enableTertiaryLink:!1,suppressTertiaryAria:!0,enableQuickView:!0,secondaryShouldLinkToPrimaryTapTarget:!1},enableProgramBadgeInMetadataBlock:!0,enableProgramBadge:!0,enableDeliveryPromise:!0,enableBookFormat:!0,enableBookPoints:!0,bookReleaseDateConfiguration:{enableReleaseDate:!0,enableShortFormat:!0},bookTapTargetConfiguration:{enableStarRatingPrimaryTapAction:!1,enablePriceTapAction:!0,enableFormatTapAction:!0,enableProgramBadgeTapAction:!0,enableDeliveryPromiseTapAction:!0},bookMetadataBadgeConfiguration:{enableBookMetadataBadge:!0,enableBookMetadataBadgeTopSlot:!1}},Ni={bookTapTargetConfiguration:Object.assign(Object.assign({},Ui.bookTapTargetConfiguration),{enableStarRatingPrimaryTapAction:!0}),starRatingConfiguration:Object.assign(Object.assign({},Ui.starRatingConfiguration),{enableReviewsLink:!1}),bookTitleContentConfiguration:Object.assign(Object.assign({},Ui.bookTitleContentConfiguration),{enableSecondaryLink:!1,secondaryShouldLinkToPrimaryTapTarget:!0})},ji={bookTapTargetConfiguration:Object.assign(Object.assign({},Ui.bookTapTargetConfiguration),{enableStarRatingPrimaryTapAction:!0}),starRatingConfiguration:Object.assign(Object.assign({},Ui.starRatingConfiguration),{enableReviewsLink:!1}),bookTitleContentConfiguration:Object.assign(Object.assign({},Ui.bookTitleContentConfiguration),{enableSecondaryLink:!1,secondaryShouldLinkToPrimaryTapTarget:!0})},Vi=[{targeting:{layout:"metadata-only"},overrides:{bookCoverImageConfiguration:{disableBookCoverImage:!0,enableQuickView:!1},enableProgramBadgeInMetadataBlock:!0}},{targeting:{layout:"blurred-backdrop"},overrides:{layoutConfiguration:{bookCoverImageLayout:"blurredBackdrop",starRatingLayout:"mini"},enableProgramBadgeInMetadataBlock:!0}},{targeting:{layout:"contained"},overrides:{layoutConfiguration:{bookCoverImageLayout:"contained",starRatingLayout:void 0}}},{targeting:{layout:"containedBaseline"},overrides:{layoutConfiguration:{bookCoverImageLayout:"containedBaseline",starRatingLayout:void 0}}},{targeting:{layout:"grid"},overrides:Object.assign(Object.assign({},Ui),{layoutConfiguration:Object.assign(Object.assign({},Ui.layoutConfiguration),{bookCoverImageLayout:"grid"}),bookMetadataBadgeConfiguration:Object.assign(Object.assign({},Ui.bookMetadataBadgeConfiguration),{enableBookMetadataBadgeTopSlot:!0}),bookTitleContentConfiguration:Object.assign(Object.assign({},Ui.bookTitleContentConfiguration),{enableSecondaryLink:!1}),enableBookPoints:!1})},{targeting:{layout:"grid",devicetype:"mobile"},overrides:Object.assign({},ji)},{targeting:{layout:"grid",devicetype:"tablet"},overrides:Object.assign({},Ni)},{targeting:{layout:"list"},overrides:{layoutConfiguration:{bookCoverImageLayout:"list",starRatingLayout:void 0,bookTitleContentLayout:"regular",priceLayout:"rio",bookFormatLayout:"secondary-compact"},bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0,enableStarRatingsWrap:!0},bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,enablePrimaryTextBold:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:"author",enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},enableProgramBadgeInMetadataBlock:!0,enableProgramBadge:!0,enableBookFormat:!0,enableBookPoints:!0,bookReleaseDateConfiguration:{enableReleaseDate:!0,enableShortFormat:!1},bookTapTargetConfiguration:{enableStarRatingPrimaryTapAction:!0,enablePriceTapAction:!0,enableFormatTapAction:!0},bookMetadataBadgeConfiguration:{enableBookMetadataBadge:!1}}},{targeting:{layout:"standardV2"},overrides:Object.assign({},Ui)},{targeting:{layout:"standardV2",marketplace:"ATVPDKIKX0DER"},overrides:{bookTitleContentConfiguration:Object.assign(Object.assign({},Ui.bookTitleContentConfiguration),{secondaryText:"seriesBullet"})}},{targeting:{layout:"standardV2",marketplace:"A1VC38T7YXB528"},overrides:Object.assign(Object.assign({},Ui),{bookMetadataBadgeConfiguration:Object.assign(Object.assign({},Ui.bookMetadataBadgeConfiguration),{enableBookMetadataBadgeTopSlot:!0}),bookTitleContentConfiguration:Object.assign(Object.assign({},Ui.bookTitleContentConfiguration),{secondaryText:"seriesBullet"})})},{targeting:{layout:"standardV2",marketplace:"A1VC38T7YXB528",devicetype:"tablet"},overrides:Object.assign(Object.assign({},Ni),{bookTitleContentConfiguration:Object.assign(Object.assign({},Ni.bookTitleContentConfiguration),{secondaryText:"seriesBullet"})})},{targeting:{layout:"standardV2",marketplace:"A1VC38T7YXB528",devicetype:"mobile"},overrides:Object.assign(Object.assign({},ji),{bookTitleContentConfiguration:Object.assign(Object.assign({},ji.bookTitleContentConfiguration),{secondaryText:"seriesBullet"})})},{targeting:{layout:"standardV2",devicetype:"tablet"},overrides:Object.assign({},Ni)},{targeting:{layout:"standardV2",devicetype:"mobile"},overrides:Object.assign({},ji)}],Wi=[{targeting:{pagetype:"kuSignUp"},overrides:{bookTitleContentConfiguration:void 0,starRatingConfiguration:void 0,bookPriceConfiguration:void 0,bookReleaseDateConfiguration:{enableReleaseDate:!1,enableShortFormat:!1},enableBookPoints:!1,bookMetadataBadgeConfiguration:{enableBookMetadataBadge:!1},enableProgramBadge:!1,enableBookFormat:!1,bookTapTargetConfiguration:{enableStarRatingPrimaryTapAction:!1,enablePriceTapAction:!1,enableFormatTapAction:!1}}}],Gi=[{targeting:{devicetype:"mobile"},overrides:{seriesOverlayConfiguration:{topOffsetPx:18}}},{targeting:{marketplace:"A1VC38T7YXB528"},overrides:{enableBookPoints:!0}},{targeting:{hostapplication:"kindle"},overrides:{enableLimitedTimeFreeBadge:!1}},{targeting:{hostapplication:"mShop"},overrides:{enableLimitedTimeFreeBadge:!1}}].concat(Di).concat(Ei).concat([{targeting:{pagetype:"detailPage"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!0,suppressSecondaryAria:!1,tertiaryText:"author",enableTertiaryLink:!0,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!0},bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},enableBookPoints:!0,enableBookFormat:!0,enableBookFormats:!1,enableDeliveryPromise:!0,enableProgramBadge:!0,enableProgramBadgeInMetadataBlock:!0,layoutConfiguration:{priceLayout:"rio"}}},{targeting:{pagetype:"detailPage",devicetype:"mobile"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:"author",enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"detailPage",devicetype:"tablet"},overrides:{bookTitleContentConfiguration:{primaryText:"title",enablePrimaryLink:!0,suppressPrimaryAria:!0,secondaryText:"seriesBullet",enableSecondaryLink:!1,suppressSecondaryAria:!1,tertiaryText:"author",enableTertiaryLink:!1,suppressTertiaryAria:!1,enableQuickView:!1},starRatingConfiguration:{enableReviewsLink:!1}}},{targeting:{pagetype:"detailPage",operatingsystem:"iOS",hostapplication:"kindle"},overrides:{bookPriceConfiguration:{enableBookPrice:!1,enableQuickView:!1},enableBookPoints:!1}},{targeting:{pagetype:"detailPage",operatingsystem:"iOS",hostapplication:"kindle",marketplace:"ATVPDKIKX0DER"},overrides:{bookPriceConfiguration:{enableBookPrice:!0,enableQuickView:!1},enableBookPoints:!0}}]).concat([{targeting:{pagetype:"kindleHome"},overrides:{enableMetadataBlock:!1}}]).concat(Hi).concat(Vi).concat(Wi);const qi=()=>window.WebViewWidget,Qi=()=>{var e;return null===(e=window.webkit)||void 0===e?void 0:e.messageHandlers},Ki={openWebPage:(e,t,i,o=!1)=>{var a,r,s,n;if(qi()){const n=(e=>{try{return new URL(e),!0}catch(e){return!1}})(e)?e:new URL(e,"localhost"===window.location.hostname?"https://www.amazon.com":window.location.origin).href;(null===(a=qi())||void 0===a?void 0:a.openWebUrl)?null===(r=qi())||void 0===r||r.openWebUrl(n,t||void 0,i||"",o):null===(s=qi())||void 0===s||s.openWebPage(n,t||void 0,i||"")}else if(Qi()){const o={url:e};t&&(o.viewTitle=t),i&&(o.reftag=i),null===(n=Qi())||void 0===n||n.openWebPage.postMessage(o)}},isOpenWebPageAvailable:()=>{var e,t,i;return!!((null===(e=qi())||void 0===e?void 0:e.openWebPage)||(null===(t=qi())||void 0===t?void 0:t.openWebUrl)||(null===(i=Qi())||void 0===i?void 0:i.openWebPage))},isNativeBridgeAvailable:()=>!(!qi()&&!Qi()),reportActionMetric:(e,t)=>{var i,o,a,r;(null===(i=qi())||void 0===i?void 0:i.reportActionMetric)?null===(o=qi())||void 0===o||o.reportActionMetric(e,t):(null===(a=Qi())||void 0===a?void 0:a.reportActionMetric)&&(null===(r=Qi())||void 0===r||r.reportActionMetric.postMessage({action:e,actionType:t}))},isLaunchQuickViewAvailable:()=>{var e,t,i;return!!((null===(e=qi())||void 0===e?void 0:e.launchQuickViewIfEnabledAsync)||(null===(t=qi())||void 0===t?void 0:t.launchQuickViewIfEnabled)||(null===(i=Qi())||void 0===i?void 0:i.launchQuickViewIfEnabled))},launchQuickViewIfEnabled:(e,t,i=void 0,o=void 0)=>{var a,r,s,n,l,d;Ki.reportActionMetric("tap","QUICKVIEW"),(null===(a=qi())||void 0===a?void 0:a.launchQuickViewIfEnabledAsync)?null===(r=qi())||void 0===r||r.launchQuickViewIfEnabledAsync(e,JSON.stringify(t),i,o):(null===(s=qi())||void 0===s?void 0:s.launchQuickViewIfEnabled)?null===(n=qi())||void 0===n||n.launchQuickViewIfEnabled(e,JSON.stringify(t),i,o):(null===(l=Qi())||void 0===l?void 0:l.launchQuickViewIfEnabled)&&(null===(d=Qi())||void 0===d||d.launchQuickViewIfEnabled.postMessage({initialIndex:e,asins:t,title:i,reftag:o}))}},Xi={openWebPage:e=>{Ki.isNativeBridgeAvailable()&&Ki.isOpenWebPageAvailable()?Ki.openWebPage(e):window.location.assign(e)},isQuickViewEnabled:()=>{var e,t,i;if(Ki.isNativeBridgeAvailable()&&Ki.isLaunchQuickViewAvailable())return!0;return"true"===(null!==(t=null===(e=document.querySelector("meta[name='x-feature-quickview-enabled']"))||void 0===e?void 0:e.getAttribute("content"))&&void 0!==t?t:void 0)&&!!(null===(i=window.qv)||void 0===i?void 0:i.launchQuickView)},getMergedAsinMetadata(e,t){if(!t||0===t.length)return e;const i=new Map;return e.forEach((e=>{e.asin&&i.set(e.asin,e)})),t.map((e=>{var t;return null!==(t=i.get(e))&&void 0!==t?t:{asin:e}}))},openQuickView:(e=0,t,i,o,a)=>{const r=t.asinMetadataCallbacks.map((e=>e())),s=Xi.getMergedAsinMetadata(r,t.asinList);if(e<0||0===r.length&&(!t.asinList||0===t.asinList.length)||e>=s.length||!Xi.isQuickViewEnabled())return Re.logCountMetric("quickview-error"),void Xi.openWebPage(i);Re.logCountMetric("quickview-launched");const n=JSON.stringify({qvPageClient:"ubf-page",widgetName:o||"ubf"});Xi.launchQuickView(e,s,a,n)},launchQuickView(e,t,i,o){var a,r;Ki.isNativeBridgeAvailable()&&Ki.isLaunchQuickViewAvailable()?Ki.launchQuickViewIfEnabled(e,t,i,o):null===(r=null===(a=window.qv)||void 0===a?void 0:a.launchQuickView)||void 0===r||r.call(a,{initialIndex:e,asins:t,title:i,csaContext:o})}},Yi=new Set(["kindle_edition","kindle_edition_av","kindle_single","kindle_edition_active"]),Ji=new Set(["digital_audiobook","audible_audiobook","audio_download"]);function Zi(e,t){if("ATVPDKIKX0DER"===(null==t?void 0:t.marketplace))return!0;const i="iOS"===(null==t?void 0:t.operatingsystem)&&"kindle"===(null==t?void 0:t.hostapplication),o="iOS"===(null==t?void 0:t.operatingsystem)&&"mShop"===(null==t?void 0:t.hostapplication);return!(function(e){return!e||Yi.has(e)||Ji.has(e)}(e)&&(o||i))}const eo={deliveryInfo:"deliveryInfo",pointsV2:"pointsV2",badgePhysicalId:"badgePhysicalId",priceFormatParts:"priceFormatParts",format:"format",numberOfReviews:"numberOfReviews",dealBadge:"dealBadge",kindlePromotionTags:"kindlePromotionTags",dealRichContent:"dealRichContent",likes:"likes",waitForFreeBadge:"waitForFreeBadge",limitedTimeFreeBadge:"limitedTimeFreeBadge",giftGuideBadgeLabel:"badgeLabel"},to="item",io="asin";e.UnifiedBookFaceout=class extends et{getDefaultConfiguration(){return{enableBookFormat:!1,enableProgramBadge:!1,enableProgramBadgeInMetadataBlock:!1,enableBookPoints:!1,enableBookSponsored:!1,enableBookFormats:!1,enableBookBlurb:!1,enableMetadataBlock:!0,bookReleaseDateConfiguration:{enableReleaseDate:!1,enableShortFormat:!1},bookTapTargetConfiguration:{enableStarRatingPrimaryTapAction:!1,enableFormatTapAction:!1,enablePriceTapAction:!1},bookTitleContentConfiguration:void 0,bookMetadataBadgeConfiguration:{enableBookMetadataBadge:!1,enableBookMetadataBadgeTopSlot:!1},starRatingConfiguration:void 0,bookCoverImageConfiguration:void 0,bookPriceConfiguration:void 0,fontFamilyCSSVariable:"--bds-font-family-functional-body",seriesOverlayConfiguration:{topOffsetPx:this.shouldRenderBadge()?22:7},enableDeliveryPromise:!1,layoutConfiguration:{bookFormatLayout:"secondary"},enableLimitedTimeFreeBadge:!0}}constructor(){var e;super(),this.asinIndex=0,this.bookImageRef=wt(),this.intersectionController=new ei(this,{config:{threshold:.5},callback:e=>{if(void 0===this.elementVisibleStartTime)return this.elementVisibleStartTime=Date.now(),e[0].isIntersecting;return((e,t,i,...o)=>Date.now()-e>t&&(i(...o),!0))(this.elementVisibleStartTime,1e3,this.handleCsaCustomEvent,"impressed","UBF")||(this.elementVisibleStartTime=void 0),e[0].isIntersecting}}),this.elementVisibleStartTime=void 0,this.metricsEmitted=new Set,this.position=0,this.isSponsored=!1,this.hasHalfStar=!1,this.condenseNumberOfReviews=!1,this.ffoIsEnabled=!1,this.shouldShowDeepStack=!1,this.shouldShowDomino=!1,this.handleClick=(e,t)=>{var i,o;this.handleCsaCustomEvent("click",t),null===(i=this.handleNavigation)||void 0===i||i.call(this,this.asin);const a=e;a.altKey||a.ctrlKey||a.shiftKey||a.metaKey||(e.preventDefault(),this.shouldEnableQuickView()&&this.asinContext&&this.detailPageUrl?Xi.openQuickView(this.asinIndex,this.asinContext,this.detailPageUrl,null===(o=this.renderContext)||void 0===o?void 0:o.widgetid):this.detailPageUrl&&Xi.openWebPage(this.detailPageUrl))},this.getCsaEventDetails=(e,t)=>{var i,o,a,r,s,n,l,d;return{schemaId:"BEE.BDSWebClientSideEvent.3",asin:this.asin||"NULL",preFFOAsin:this.preFFOAsin||"NULL",eventType:e,eventValue:t,widgetId:(null===(i=this.metricsMetadata)||void 0===i?void 0:i.widgetId)||"NULL",widgetGroup:(null===(o=this.metricsMetadata)||void 0===o?void 0:o.widgetGroup)||"NULL",strategyId:(null===(a=this.metricsMetadata)||void 0===a?void 0:a.strategyId)||"NULL",creativeId:(null===(r=this.metricsMetadata)||void 0===r?void 0:r.creativeId)||"NULL",binding:this.format||"NULL",deviceType:(null===(s=this.renderContext)||void 0===s?void 0:s.devicetype)||"NULL",operatingSystem:(null===(n=this.renderContext)||void 0===n?void 0:n.operatingsystem)||"NULL",hostApplication:(null===(l=this.renderContext)||void 0===l?void 0:l.hostapplication)||"NULL",locale:(null===(d=this.renderContext)||void 0===d?void 0:d.locale)||"NULL"}},this.handleCsaCustomEvent=(e,t,i={ent:"all"})=>{var o;this.metricsEmitted.has(e)||(null===(o=this.csaEventInstance)||void 0===o||o.call(this,"log",this.getCsaEventDetails(e,t),i),this.metricsEmitted.add(e))},this.csaEventInstance=null===(e=window.csa)||void 0===e?void 0:e.call(window,"Events",{producerId:"bee"})}getConfigurationOverrides(){const e=Gi;return e.forEach((e=>{"mobile"===e.targeting.devicetype&&e.overrides.seriesOverlayConfiguration&&(this.shouldRenderBadge()?e.overrides.seriesOverlayConfiguration.topOffsetPx=18:e.overrides.seriesOverlayConfiguration.topOffsetPx=7)})),e}shouldRenderBadge(){return!!this.badgePhysicalId||!!this.limitedTimeFreeBadge||!!this.waitForFreeBadge}addCSAAttributes(){var e,t,i,o,a,r,s,n,l,d,c,u,b,h;this.setAttribute("data-csa-c-type",to),this.setAttribute("data-csa-c-item-type",io),this.setAttribute("data-csa-c-component",this.tagName),this.setAttribute("data-csa-c-item-id",null!==(e=this.asin)&&void 0!==e?e:"NULL"),this.setAttribute("data-csa-c-source",Ae),this.setAttribute("data-csa-c-widget-id",(null===(t=this.metricsMetadata)||void 0===t?void 0:t.widgetId)||(null===(i=this.renderContext)||void 0===i?void 0:i.widgetid)||"NULL"),this.setAttribute("data-csa-c-asin-index",this.asinIndex.toString()),this.setAttribute("data-csa-c-widget-group-id",(null===(o=this.metricsMetadata)||void 0===o?void 0:o.widgetGroup)||"NULL"),this.setAttribute("data-csa-c-strategy-id",(null===(a=this.metricsMetadata)||void 0===a?void 0:a.strategyId)||"NULL"),this.setAttribute("data-csa-c-creative-id",(null===(r=this.metricsMetadata)||void 0===r?void 0:r.creativeId)||"NULL"),this.setAttribute("data-csa-c-binding",this.format||"NULL"),this.setAttribute("data-csa-c-device-type",(null===(s=this.renderContext)||void 0===s?void 0:s.devicetype)||"NULL"),this.setAttribute("data-csa-c-os",(null===(n=this.renderContext)||void 0===n?void 0:n.operatingsystem)||"NULL"),this.setAttribute("data-csa-c-host-application",(null===(l=this.renderContext)||void 0===l?void 0:l.hostapplication)||"NULL"),this.setAttribute("data-csa-c-locale",(null===(d=this.renderContext)||void 0===d?void 0:d.locale)||"NULL"),this.setAttribute("data-csa-c-theme",(null===(c=this.renderContext)||void 0===c?void 0:c.theme)||"NULL"),this.setAttribute("data-csa-c-marketplace",(null===(u=this.renderContext)||void 0===u?void 0:u.marketplace)||"NULL"),this.setAttribute("data-csa-c-page-type",(null===(b=this.renderContext)||void 0===b?void 0:b.pagetype)||"NULL");for(const e in this.csaAttributes)this.setAttribute("data-csa-c-"+e,this.csaAttributes[e]);null===(h=window.csa)||void 0===h||h.call(window,"Content",{element:this})}firstUpdated(){var e,t;this.setAsinContextForQuickView(),this.setSLLContext(),this.ffoIsEnabled&&this.handleCsaCustomEvent("widgetIsFFOEnabled","UBF"),null===(e=this.csaEventInstance)||void 0===e||e.call(this,"setEntity",{ubf:Object.assign({asinIndex:this.asinIndex.toString()},this.csaAttributes)}),this.addCSAAttributes(),Re.logCountMetric("ubf-displayed"),Re.logCountMetric("ubf-displayed",`${null===(t=this.renderContext)||void 0===t?void 0:t.pagetype}`)}disconnectedCallback(){if(super.disconnectedCallback(),this.elementVisibleStartTime){Date.now()-this.elementVisibleStartTime>1e3&&this.handleCsaCustomEvent("impressed","UBF")}}get badgeLabel(){return this.giftGuideBadgeLabel}set badgeLabel(e){this.giftGuideBadgeLabel=e}getTitleContentForSlot(e,t,i,o){var a,r,s,n,l,d,c,u,b,h,g,p;switch(e){case"title":if(this.bookTitle)return[{displayText:this.bookTitle,language:this.bookTitleLanguage,url:this.detailPageUrl,enableLink:t,appendedInlineContent:this.getAppendedInlineTitleContent(),isBold:i,headingLevel:this.getPrimaryTextHeadingLevel(),handleClick:e=>this.handleClick(e,"title")}];break;case"headline":if(this.bookHeadline)return[{displayText:this.bookHeadline,language:this.bookHeadlineLanguage,url:this.detailPageUrl,enableLink:t}];break;case"author":{const e=o?e=>this.handleClick(e,"author"):void 0,i=this.byLineV2?(h=this.byLineV2,g=null!=t&&t,p=e,h.contributors.map((e=>{var t;return{displayText:e.name,url:null===(t=e.links.find((e=>"authorPageUrl"===e.rel)))||void 0===t?void 0:t.url,enableLink:g,handleClick:p}}))):void 0;if(null===(a=null==i?void 0:i[0])||void 0===a?void 0:a.displayText)return i;if(this.bookAuthor)return[{displayText:this.bookAuthor,url:null!==(r=this.bookAuthorLinkUrl)&&void 0!==r?r:this.detailPageUrl,enableLink:t,handleClick:e}];break}case"seriesBullet":{let e;if(e="mobile"===(null===(s=this.renderContext)||void 0===s?void 0:s.devicetype)&&"list"!==this.layout?null===(l=null===(n=this.seriesBullet)||void 0===n?void 0:n.message)||void 0===l?void 0:l.shortMessage:null===(c=null===(d=this.seriesBullet)||void 0===d?void 0:d.message)||void 0===c?void 0:c.longMessage,e)return[{displayText:e,language:this.seriesBulletLanguage,url:null===(b=null===(u=this.seriesBullet)||void 0===u?void 0:u.link)||void 0===b?void 0:b.url,enableLink:t}];break}}}useUBFStandardV2CX(){return"grid"===this.layout||"standardV2"===this.layout}getAppendedInlineTitleContent(){return zt(this.useUBFStandardV2CX()&&this.giftGuideBadgeLabel,(()=>G`<span class="offscreen">${this.giftGuideBadgeLabel}</span>`))}getPrimaryTextHeadingLevel(){var e;return this.useUBFStandardV2CX()?null!==(e=this.primaryTextHeadingLevel)&&void 0!==e?e:3:void 0}getTitleContentConfiguration(e){var t,i,o,a,r,s,n,l;return{primaryTitleContent:this.getTitleContentForSlot(null===(t=e.bookTitleContentConfiguration)||void 0===t?void 0:t.primaryText,null===(i=e.bookTitleContentConfiguration)||void 0===i?void 0:i.enablePrimaryLink,null===(o=e.bookTitleContentConfiguration)||void 0===o?void 0:o.enablePrimaryTextBold),secondaryTitleContent:this.getTitleContentForSlot(null===(a=e.bookTitleContentConfiguration)||void 0===a?void 0:a.secondaryText,null===(r=e.bookTitleContentConfiguration)||void 0===r?void 0:r.enableSecondaryLink,!1,null===(s=e.bookTitleContentConfiguration)||void 0===s?void 0:s.secondaryShouldLinkToPrimaryTapTarget),tertiaryTitleContent:this.getTitleContentForSlot(null===(n=e.bookTitleContentConfiguration)||void 0===n?void 0:n.tertiaryText,null===(l=e.bookTitleContentConfiguration)||void 0===l?void 0:l.enableTertiaryLink)}}getBookCoverImageAriaLabel(e){var t,i;if(!this.coverImageAltText)return"";let o=this.coverImageAltText;if(!this.isAuthorShown(e)&&this.getBookAuthors()&&(o=ui("bds_book_name_by_author_text",null===(t=this.renderContext)||void 0===t?void 0:t.locale,{title:this.coverImageAltText,authors:this.getBookAuthors()})),this.badgePhysicalId&&this.badgeAltText&&(o=this.badgeAltText+", "+o),this.seriesCollectionText){const e=ui("bds_collection_text_in_series_alt_text_prefix",null===(i=this.renderContext)||void 0===i?void 0:i.locale);o=this.seriesCollectionText+" "+e+", "+o}return o}getSeriesOverlay(e){var t;const i=`top: ${null===(t=e.seriesOverlayConfiguration)||void 0===t?void 0:t.topOffsetPx}px`;return G`<div class="series-overlay" style="${i}">
            <bds-series-overlay label=${$t(this.seriesCollectionText)}></bds-series-overlay>
        </div>`}renderBookCoverImage(e){const t=this.useUBFStandardV2CX()?void 0:this.badgePhysicalId,i=this.useUBFStandardV2CX()?void 0:this.badgeAltText,o=this.useUBFStandardV2CX()?void 0:this.badgeExtension,a=!this.useUBFStandardV2CX()&&e.enableLimitedTimeFreeBadge?this.limitedTimeFreeBadge:void 0,r=this.useUBFStandardV2CX()?void 0:this.waitForFreeBadge;return G`
            <bds-book-cover-image
                coverImagePhysicalId=${this.coverImagePhysicalId}
                coverImageExtension=${$t(this.coverImageExtension)}
                imageStyleCode=${$t(this.imageStyleCodes)}
                coverImageAltText=${this.coverImageAltText}
                layout=${$t(e.layoutConfiguration.bookCoverImageLayout)}
                badgePhysicalId=${$t(t)}
                badgeAltText=${$t(i)}
                badgeExtension=${$t(o)}
                limitedTimeFreeBadge=${$t(a)}
                .waitForFreeBadge=${r}
                ?useNoMetadataLayout=${!e.enableMetadataBlock}
                ?shouldRenderDeepStack=${this.shouldShowDeepStack}
                ?shouldRenderDomino=${this.shouldShowDomino}
                ${St(this.bookImageRef)}>
            </bds-book-cover-image>
        `}setAsinContextForQuickView(){var e;this.asin&&(null===(e=this.asinContext)||void 0===e?void 0:e.asinMetadataCallbacks)&&(this.asinIndex=this.asinContext.asinMetadataCallbacks.length,this.asinContext.asinMetadataCallbacks.push(this.getQuickViewMetadata.bind(this)))}willUpdate(){var e,t;if(this.asin&&(null===(t=null===(e=this.skeletonLoadingContext)||void 0===e?void 0:e.latentDataMap)||void 0===t?void 0:t.has(this.asin))){const e=this.skeletonLoadingContext.latentDataMap.get(this.asin);e&&Object.keys(e).forEach((t=>{t in this&&e[t]&&(this[t]=e[t])}))}}setSLLContext(){var e,t,i;this.asin&&(null===(e=this.skeletonLoadingContext)||void 0===e?void 0:e.metadataToLazyLoad)&&(null===(t=this.skeletonLoadingContext)||void 0===t?void 0:t.metadataToLazyLoad.length)>0&&(null===(i=this.skeletonLoadingContext.asinList)||void 0===i||i.push(this.asin))}getQuickViewMetadata(){var e;const t=this.getBookAuthors();return{asin:this.asin||"",physicalId:this.coverImagePhysicalId,title:this.bookTitle,imageUrl:null===(e=this.bookImageRef.value)||void 0===e?void 0:e.getImageSource(),authors:t||"",detailPageLink:this.detailPageUrl,binding:this.format,reviewStars:this.numberOfStars,reviewCount:this.numberOfReviews}}getBookAuthors(){var e;return(null===(e=this.byLineV2)||void 0===e?void 0:e.contributors)?this.byLineV2.contributors.map((e=>e.name)).join(", "):this.bookAuthor}isAuthorShown(e){const t=e.bookTitleContentConfiguration;return[null==t?void 0:t.primaryText,null==t?void 0:t.secondaryText,null==t?void 0:t.tertiaryText].includes("author")}shouldEnableQuickView(){var e,t;return(!(null===(e=this.renderContext)||void 0===e?void 0:e.widgetid)||!["PopularSeriesByAuthorsYouFollow"].some((e=>{var t,i;return null===(i=null===(t=this.renderContext)||void 0===t?void 0:t.widgetid)||void 0===i?void 0:i.includes(e)})))&&!!(Xi.isQuickViewEnabled()&&(null===(t=this.asinContext)||void 0===t?void 0:t.asinMetadataCallbacks)&&this.detailPageUrl)}renderMetadataBlock(e){return G` <div class="ubf-metadata">
            ${zt(e.enableBookSponsored,(()=>G`
                    <bds-book-sponsored ?isSponsored=${this.isSponsored}></bds-book-sponsored>
                `))}
            ${zt(e.bookTitleContentConfiguration,(()=>this.renderBookTitleContentBlock(e)))}
            ${this.renderStarRating(e)} ${this.renderLikes()}
            ${zt(!this.useUBFStandardV2CX(),(()=>this.renderBookMetadataBadge(e)))}
            ${this.renderProgramBadge(e)} ${this.renderBookFormat(e)}
            ${this.renderBookPrice(e)} ${this.renderBookReleaseDate(e)}
            ${this.renderDeliveryPromise(e)} ${this.renderBookPoints(e)}
            ${zt(e.enableBookFormats,(()=>G` <bds-book-other-formats
                    .allFormats=${this.formats}
                    detailPage=${$t(this.detailPageUrl)}
                    numFormatsToShow=${$t(this.numFormatsToShow)}></bds-book-other-formats>`))}
        </div>`}renderBookTitleContentBlock(e){const t=this.getTitleContentConfiguration(e),i=Object.values(t).some((e=>!!e));return zt(i,(()=>{var i,o,a;return G` <bds-book-title-content
                layout=${$t(e.layoutConfiguration.bookTitleContentLayout)}
                .primaryTitleContent=${t.primaryTitleContent}
                ?suppressPrimaryAria=${!this.useUBFStandardV2CX()&&(null===(i=e.bookTitleContentConfiguration)||void 0===i?void 0:i.suppressPrimaryAria)}
                .secondaryTitleContent=${t.secondaryTitleContent}
                ?suppressSecondaryAria=${null===(o=e.bookTitleContentConfiguration)||void 0===o?void 0:o.suppressSecondaryAria}
                .tertiaryTitleContent=${t.tertiaryTitleContent}
                ?suppressTertiaryAria=${null===(a=e.bookTitleContentConfiguration)||void 0===a?void 0:a.suppressTertiaryAria}></bds-book-title-content>`}))}renderCoverImageBlock(e){var t;return zt(!(null===(t=e.bookCoverImageConfiguration)||void 0===t?void 0:t.disableBookCoverImage),(()=>this.detailPageUrl?G`<a
                      href=${this.detailPageUrl}
                      role=${this.shouldEnableQuickView()?"button":"link"}
                      @click=${e=>this.handleClick(e,"coverimage")}
                      aria-label=${this.getBookCoverImageAriaLabel(e)}>
                      ${zt(this.seriesCollectionText,(()=>this.getSeriesOverlay(e)))}
                      ${this.renderBookCoverImage(e)}
                  </a>`:G`<div aria-label=${this.getBookCoverImageAriaLabel(e)}>
                      ${this.renderBookCoverImage(e)}
                  </div>`))}renderProgramBadge(e){var t,i,o,a,r,s,n,l,d;if(!e.enableProgramBadge||!e.enableProgramBadgeInMetadataBlock)return Q;const c=(null===(t=e.bookTapTargetConfiguration)||void 0===t?void 0:t.enableProgramBadgeTapAction)?e=>this.handleClick(e,"programbadge"):void 0;return zt(this.badgePhysicalId||(null===(o=null===(i=this.skeletonLoadingContext)||void 0===i?void 0:i.metadataToLazyLoad)||void 0===o?void 0:o.includes(eo.badgePhysicalId)),(()=>{const e=this.useUBFStandardV2CX()?13:void 0,t=G`
                        <bds-program-badge
                            badgePhysicalId=${$t(this.badgePhysicalId)}
                            badgeAltText=${$t(this.badgeAltText)}
                            badgeExtension=${$t(this.badgeExtension)}
                            badgeImageHeightPx=${$t(e)}
                            @click=${c}>
                        </bds-program-badge>
                    `;return this.useUBFStandardV2CX()?G`<div class="program-badge-wrapper">${t}</div>`:t}))||zt(!(null===(r=null===(a=this.skeletonLoadingContext)||void 0===a?void 0:a.metadataToLazyLoad)||void 0===r?void 0:r.includes(eo.badgePhysicalId)),(()=>this.renderLimitedTimeFreeBadge(e)))||zt(!(null===(n=null===(s=this.skeletonLoadingContext)||void 0===s?void 0:s.metadataToLazyLoad)||void 0===n?void 0:n.includes(eo.badgePhysicalId))&&!(null===(d=null===(l=this.skeletonLoadingContext)||void 0===l?void 0:l.metadataToLazyLoad)||void 0===d?void 0:d.includes(eo.limitedTimeFreeBadge)),(()=>this.renderWaitForFreeBadge()))}renderBookMetadataBadge(e){var t,i,o;return zt((null===(t=null==e?void 0:e.bookMetadataBadgeConfiguration)||void 0===t?void 0:t.enableBookMetadataBadge)&&(this.giftGuideBadgeLabel||(null===(o=null===(i=this.skeletonLoadingContext)||void 0===i?void 0:i.metadataToLazyLoad)||void 0===o?void 0:o.includes(eo.giftGuideBadgeLabel))),(()=>G`
                <div class="book-metadata-badge">
                    <bds-book-metadata-badge
                        giftGuideBadgeLabel=${$t(this.giftGuideBadgeLabel)}
                        badgeType=${$t(this.metadataBadgeType)}>
                    </bds-book-metadata-badge>
                </div>
            `))}renderBookFormat(e){var t;const i=(null===(t=e.bookTapTargetConfiguration)||void 0===t?void 0:t.enableFormatTapAction)?e=>this.handleClick(e,"format"):void 0;return zt(e.enableBookFormat,(()=>G`
                <div class="book-format">
                    <bds-book-format
                        layout=${$t(e.layoutConfiguration.bookFormatLayout)}
                        format=${$t(this.format)}
                        .secondaryBadge=${this.secondaryBadge}
                        @click=${i}>
                    </bds-book-format>
                </div>
            `))}renderBookPrice(e){var t,i,o,a;const r=(null===(t=e.bookTapTargetConfiguration)||void 0===t?void 0:t.enablePriceTapAction)?e=>this.handleClick(e,"price"):void 0,s=[!!this.unstylizedPrice,!!this.priceFormatParts,!!this.youPayPromotion,!!this.audiblePromotion,!!this.basisPriceDisplayString,!!this.priceToPayMessage].filter((e=>!!e)).length>0;return zt((null===(i=e.bookPriceConfiguration)||void 0===i?void 0:i.enableBookPrice)&&Zi(this.bindingSymbol,this.renderContext)&&(s||(null===(a=null===(o=this.skeletonLoadingContext)||void 0===o?void 0:o.metadataToLazyLoad)||void 0===a?void 0:a.includes(eo.priceFormatParts))),(()=>{var t,i;return G`
                ${zt(this.dealBadge||this.kindlePromotionTags||this.dealRichContent||(null===(i=null===(t=this.skeletonLoadingContext)||void 0===t?void 0:t.metadataToLazyLoad)||void 0===i?void 0:i.some((e=>[eo.dealBadge,eo.kindlePromotionTags,eo.dealRichContent].includes(e)))),(()=>G`<bds-book-deal-badge
                        .dealBadge=${this.dealBadge}
                        .kindlePromotionTags=${this.kindlePromotionTags}
                        .dealRichContent=${this.dealRichContent}>
                    </bds-book-deal-badge>`))}
                <bds-book-price
                    unstylizedPrice=${$t(this.unstylizedPrice)}
                    .priceFormatParts=${this.priceFormatParts}
                    .youPayPromotion=${this.youPayPromotion}
                    .audiblePromotion=${this.audiblePromotion}
                    layout=${$t(e.layoutConfiguration.priceLayout)}
                    basisPriceDisplayString=${$t(this.basisPriceDisplayString)}
                    basisPriceLabel=${$t(this.basisPriceLabel)}
                    savingsPercentageDisplayString=${$t(this.savingsPercentageDisplayString)}
                    priceToPayMessage=${$t(this.priceToPayMessage)}
                    @click=${r}>
                </bds-book-price>
            `}))}renderBookReleaseDate(e){var t;const i=!!(null===(t=e.bookReleaseDateConfiguration)||void 0===t?void 0:t.enableShortFormat);return zt(this.shouldRenderBookReleaseDate(e),(()=>G` <bds-book-release-date
                .releaseDate=${this.releaseDate}
                .isShortFormat=${i}>
            </bds-book-release-date>`))}shouldRenderBookReleaseDate(e){var t,i,o,a,r;return!!(null===(t=e.bookReleaseDateConfiguration)||void 0===t?void 0:t.enableReleaseDate)&&((null===(i=e.bookReleaseDateConfiguration)||void 0===i?void 0:i.enableShortFormat)?!!(null===(o=this.releaseDate)||void 0===o?void 0:o.date):!!(null===(a=this.releaseDate)||void 0===a?void 0:a.displayString)||!!(null===(r=this.releaseDate)||void 0===r?void 0:r.date))}renderDeliveryPromise(e){var t,i,o,a,r,s,n;const l=(null===(t=e.bookTapTargetConfiguration)||void 0===t?void 0:t.enablePriceTapAction)?e=>this.handleClick(e,"deliverypromise"):void 0;return zt(e.enableDeliveryPromise&&((null===(o=null===(i=this.deliveryInfo)||void 0===i?void 0:i.deliveryBadge)||void 0===o?void 0:o.badgePhysicalId)&&(null===(r=null===(a=this.deliveryInfo)||void 0===a?void 0:a.deliveryMessageFragmentList)||void 0===r?void 0:r.length)||(null===(n=null===(s=this.skeletonLoadingContext)||void 0===s?void 0:s.metadataToLazyLoad)||void 0===n?void 0:n.includes(eo.deliveryInfo))),(()=>G` <bds-delivery-promise
                    .deliveryInfo=${this.deliveryInfo}
                    @click=${l}>
                </bds-delivery-promise>`),(()=>Q))}renderStarRating(e){var t,i,o;const a=(null===(t=e.bookTapTargetConfiguration)||void 0===t?void 0:t.enableStarRatingPrimaryTapAction)?e=>this.handleClick(e,"reviewstars"):void 0;return zt(e.starRatingConfiguration&&(this.numberOfReviews&&this.numberOfReviews>0||(null===(o=null===(i=this.skeletonLoadingContext)||void 0===i?void 0:i.metadataToLazyLoad)||void 0===o?void 0:o.includes(eo.numberOfReviews))),(()=>{var t,i;return G`
                <div class="star-rating">
                    <bds-star-rating
                        numberOfStars=${$t(this.numberOfStars)}
                        ?hasHalfStar=${this.hasHalfStar}
                        numberOfReviews=${$t(this.numberOfReviews)}
                        reviewUrl=${$t(this.reviewUrl)}
                        ?enableReviewsLink=${null===(t=e.starRatingConfiguration)||void 0===t?void 0:t.enableReviewsLink}
                        ?allowWrap=${null===(i=e.starRatingConfiguration)||void 0===i?void 0:i.enableStarRatingsWrap}
                        altText=${$t(this.starRatingAltText)}
                        shortDisplayString=${$t(this.starRatingShortDisplayString)}
                        layout="${$t(this.starRatingLayout||e.layoutConfiguration.starRatingLayout)}"
                        ?condenseNumberOfReviews=${this.condenseNumberOfReviews}
                        @click=${a}>
                    </bds-star-rating>
                </div>
            `}))}renderBookPoints(e){var t,i;return zt(e.enableBookPoints&&function(e,t){return!e||!Ji.has(e)&&Zi(e,t)}(this.bindingSymbol,this.renderContext)&&(this.points||this.pointsV2||(null===(i=null===(t=this.skeletonLoadingContext)||void 0===t?void 0:t.metadataToLazyLoad)||void 0===i?void 0:i.includes(eo.pointsV2))),(()=>G`
                <bds-book-points points=${$t(this.points)} .pointsV2=${this.pointsV2}>
                </bds-book-points>
            `))}renderWaitForFreeBadge(){var e,t,i,o;return zt((null===(e=this.waitForFreeBadge)||void 0===e?void 0:e.badgeLabel)&&(null===(t=this.waitForFreeBadge)||void 0===t?void 0:t.status)||(null===(o=null===(i=this.skeletonLoadingContext)||void 0===i?void 0:i.metadataToLazyLoad)||void 0===o?void 0:o.includes(eo.waitForFreeBadge)),(()=>{const e=G`<bds-wait-for-free-badge
                    badgeLabel=${this.waitForFreeBadge.badgeLabel}
                    status=${this.waitForFreeBadge.status}></bds-wait-for-free-badge>`;return this.useUBFStandardV2CX()?G`<div class="wff-badge-wrapper">${e}</div>`:e}))}renderLimitedTimeFreeBadge(e){var t,i;return zt(e.enableLimitedTimeFreeBadge&&this.limitedTimeFreeBadge||(null===(i=null===(t=this.skeletonLoadingContext)||void 0===t?void 0:t.metadataToLazyLoad)||void 0===i?void 0:i.includes(eo.limitedTimeFreeBadge)),(()=>G`<bds-limited-time-free-badge
                badgeLabel=${$t(this.limitedTimeFreeBadge)}>
            </bds-limited-time-free-badge>`))}renderLikes(){var e,t;return zt(this.likes||(null===(t=null===(e=this.skeletonLoadingContext)||void 0===e?void 0:e.metadataToLazyLoad)||void 0===t?void 0:t.includes(eo.likes)),(()=>G`<bds-likes displayString=${$t(this.likes)}></bds-likes>`))}renderStandardV2Block(e){var t;return G`
            ${zt(!!this.giftGuideBadgeLabel||(null===(t=e.bookMetadataBadgeConfiguration)||void 0===t?void 0:t.enableBookMetadataBadgeTopSlot),(()=>{var t,i;return zt(null===(i=null===(t=this.skeletonLoadingContext)||void 0===t?void 0:t.metadataToLazyLoad)||void 0===i?void 0:i.includes(eo.giftGuideBadgeLabel),(()=>G`
                            <div class="metadata-badge-slot">
                                <bds-skeleton-loader
                                    type="metadata"
                                    width="6"></bds-skeleton-loader>
                            </div>
                        `),(()=>G` <div
                            class="metadata-badge-slot ${Xe({hidden:"Hidden"===this.giftGuideBadgeLabel})}"
                            aria-hidden="true">
                            ${this.renderBookMetadataBadge(e)}
                        </div>`))}))}
            ${this.renderCoverImageBlock(e)} ${this.renderMetadataBlock(e)}
        `}renderListBlock(e){return G` ${this.renderCoverImageBlock(e)} ${this.renderMetadataBlock(e)} `}renderDefaultBlock(e){return G`<div class="ubf-book-info">
                ${this.renderCoverImageBlock(e)}
                ${zt(e.enableMetadataBlock,(()=>this.renderMetadataBlock(e)))}
            </div>
            ${zt(e.enableBookBlurb,(()=>G` <bds-book-blurb .blurbMetadata=${this.blurbMetadata}></bds-book-blurb>`))}`}render(){var e;this.intersectionController.value||void 0===this.elementVisibleStartTime||this.metricsEmitted.has("impressed")||(this.elementVisibleStartTime=void 0),Re.logCountMetric("ubf-rendered");const t=this.getRenderConfiguration(this.layout);return G`
            <div
                class="unified-book-faceout ${this.layout} ${null===(e=this.renderContext)||void 0===e?void 0:e.theme}
                    ${t.enableMetadataBlock?"":"no-metadata-layout"}"
                style="font-family: var(${t.fontFamilyCSSVariable})"
                data-csa-c-type="${to}"
                data-csa-c-item-type="${io}"
                data-csa-c-item-id="${$t(this.asin)}">
                ${gt(this.layout,[["grid",()=>this.renderStandardV2Block(t)],["list",()=>this.renderListBlock(t)],["standardV2",()=>this.renderStandardV2Block(t)]],(()=>this.renderDefaultBlock(t)))}
            </div>
        `}},e.UnifiedBookFaceout.styles=ti,t([ye({context:Be,subscribe:!0})],e.UnifiedBookFaceout.prototype,"asinContext",void 0),t([ye({context:Ie,subscribe:!0})],e.UnifiedBookFaceout.prototype,"skeletonLoadingContext",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"detailPageUrl",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"asin",void 0),t([ke({type:Number})],e.UnifiedBookFaceout.prototype,"position",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"coverImagePhysicalId",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"coverImageExtension",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"coverImageAltText",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"layout",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"badgePhysicalId",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"badgeAltText",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"badgeExtension",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"secondaryBadge",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"bookTitle",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"bookTitleLanguage",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"bookHeadline",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"bookHeadlineLanguage",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"bookAuthor",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"bookAuthorLinkUrl",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"byLineV2",void 0),t([ke({type:Boolean})],e.UnifiedBookFaceout.prototype,"isSponsored",void 0),t([ke({type:Number})],e.UnifiedBookFaceout.prototype,"numberOfStars",void 0),t([ke({type:Boolean})],e.UnifiedBookFaceout.prototype,"hasHalfStar",void 0),t([ke({type:Number})],e.UnifiedBookFaceout.prototype,"numberOfReviews",void 0),t([ke({type:Boolean})],e.UnifiedBookFaceout.prototype,"condenseNumberOfReviews",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"starRatingAltText",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"starRatingShortDisplayString",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"starRatingLayout",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"reviewUrl",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"giftGuideBadgeLabel",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"unstylizedPrice",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"priceFormatParts",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"basisPriceDisplayString",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"basisPriceLabel",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"savingsPercentageDisplayString",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"priceToPayMessage",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"metadataBadgeType",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"youPayPromotion",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"points",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"pointsV2",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"format",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"bindingSymbol",void 0),t([ke({type:String,reflect:!0})],e.UnifiedBookFaceout.prototype,"cel_widget_id",void 0),t([ke({type:String,reflect:!0})],e.UnifiedBookFaceout.prototype,"class",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"blurbMetadata",void 0),t([ke({type:Array})],e.UnifiedBookFaceout.prototype,"formats",void 0),t([ke({type:Number})],e.UnifiedBookFaceout.prototype,"numFormatsToShow",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"seriesBullet",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"seriesBulletLanguage",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"backgroundColor",void 0),t([ke()],e.UnifiedBookFaceout.prototype,"handleNavigation",void 0),t([ke()],e.UnifiedBookFaceout.prototype,"badgeLabel",null),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"metricsMetadata",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"preFFOAsin",void 0),t([ke({type:Boolean})],e.UnifiedBookFaceout.prototype,"ffoIsEnabled",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"audiblePromotion",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"seriesCollectionText",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"imageStyleCodes",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"deliveryInfo",void 0),t([ke({type:Number})],e.UnifiedBookFaceout.prototype,"primaryTextHeadingLevel",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"csaAttributes",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"releaseDate",void 0),t([ke({type:Boolean})],e.UnifiedBookFaceout.prototype,"shouldShowDeepStack",void 0),t([ke({type:Boolean})],e.UnifiedBookFaceout.prototype,"shouldShowDomino",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"dealBadge",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"kindlePromotionTags",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"dealRichContent",void 0),t([ke({type:Object})],e.UnifiedBookFaceout.prototype,"waitForFreeBadge",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"limitedTimeFreeBadge",void 0),t([ke({type:String})],e.UnifiedBookFaceout.prototype,"likes",void 0),e.UnifiedBookFaceout=t([ze("bds-unified-book-faceout")],e.UnifiedBookFaceout),e.PerformanceBadge=class extends Ne{render(){return zt(this.badgeLabel,(()=>G` <bds-primary-badge
                badgeLabel=${$t(this.badgeLabel)}
                secondaryText=${$t(this.secondaryText)}
                category="performance"
                .handleBadgeClick=${this.handleBadgeClick}>
            </bds-primary-badge>`),(()=>Q))}},t([ke({type:String})],e.PerformanceBadge.prototype,"badgeLabel",void 0),t([ke({type:String})],e.PerformanceBadge.prototype,"secondaryText",void 0),t([ke({type:Object})],e.PerformanceBadge.prototype,"handleBadgeClick",void 0),e.PerformanceBadge=t([ze("bds-performance-badge")],e.PerformanceBadge),e.AccoladesBadge=class extends Ne{render(){return zt(this.badgeLabel,(()=>G` <bds-primary-badge
                badgeLabel=${$t(this.badgeLabel)}
                secondaryText=${$t(this.secondaryText)}
                category="accolades"
                .handleBadgeClick=${this.handleBadgeClick}>
            </bds-primary-badge>`),(()=>Q))}},t([ke({type:String})],e.AccoladesBadge.prototype,"badgeLabel",void 0),t([ke({type:String})],e.AccoladesBadge.prototype,"secondaryText",void 0),t([ke({type:Object})],e.AccoladesBadge.prototype,"handleBadgeClick",void 0),e.AccoladesBadge=t([ze("bds-accolades-badge")],e.AccoladesBadge),e.PersonalActivityBadge=class extends Ne{render(){return zt(this.badgeLabel,(()=>G` <bds-primary-badge
                badgeLabel=${$t(this.badgeLabel)}
                secondaryText=${$t(this.secondaryText)}
                category="personal-activity"
                .handleBadgeClick=${this.handleBadgeClick}>
            </bds-primary-badge>`),(()=>Q))}},t([ke({type:String})],e.PersonalActivityBadge.prototype,"badgeLabel",void 0),t([ke({type:String})],e.PersonalActivityBadge.prototype,"secondaryText",void 0),t([ke({type:Object})],e.PersonalActivityBadge.prototype,"handleBadgeClick",void 0),e.PersonalActivityBadge=t([ze("bds-personal-activity-badge")],e.PersonalActivityBadge),e.InformationBadge=class extends Ne{render(){return zt(this.badgeLabel,(()=>G` <bds-primary-badge
                badgeLabel=${$t(this.badgeLabel)}
                secondaryText=${$t(this.secondaryText)}
                category="information"
                .handleBadgeClick=${this.handleBadgeClick}>
            </bds-primary-badge>`),(()=>Q))}},t([ke({type:String})],e.InformationBadge.prototype,"badgeLabel",void 0),t([ke({type:String})],e.InformationBadge.prototype,"secondaryText",void 0),t([ke({type:Object})],e.InformationBadge.prototype,"handleBadgeClick",void 0),e.InformationBadge=t([ze("bds-information-badge")],e.InformationBadge);var oo=v`
    :host {
        position: relative;
        display: contents;
    }

    .bottom-sheet-scrim {
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        background-color: var(--bds-color-functional-supplemental-scrim);
        opacity: 0;
        transition: opacity 300ms ease-out;
    }

    .bottom-sheet-scrim.open {
        opacity: 1;
    }

    .bottom-sheet-container {
        background-color: var(--bds-color-functional-neutral-surface);
        color: var(--bds-color-functional-neutral-on-surface);
        border-radius: var(--bds-size-radius-large) var(--bds-size-radius-large) 0 0;
        width: 100%;
        min-height: 25vh;
        max-height: 80vh;
        display: flex;
        flex-direction: column;
        outline: none;
        overflow: hidden;
        overflow-x: hidden;
        position: relative;
        transform: translateY(100%);
        transition: transform 300ms ease-out;
        box-shadow: 0 -8px 32px rgba(15, 17, 17, 20%); /* Replace with BDS token */
    }

    .bottom-sheet-container.open {
        transform: translateY(0);
    }

    .bottom-sheet-handle-wrapper {
        padding-top: var(--bds-size-spacing-x-small);
        padding-bottom: var(--bds-size-spacing-medium);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }

    .bottom-sheet-handle {
        width: 2.75rem;
        height: 0.25rem;
        border-radius: var(--bds-size-radius-2x-small);
        background-color: var(--bds-color-functional-neutral-outline);
    }

    .bottom-sheet-header {
        padding: var(--bds-size-spacing-none) var(--bds-size-spacing-medium)
            var(--bds-size-spacing-2x-small) var(--bds-size-spacing-medium);
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
    }

    .bottom-sheet-title {
        flex: 1;
        font-family: var(--bds-font-family-functional-title);
        font-size: var(--bds-size-font-functional-title-large);
        line-height: var(--bds-size-line-height-functional-title-large);
        font-weight: var(--bds-font-weight-functional-title);
    }

    .bottom-sheet-close-button {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: var(--bds-size-spacing-2x-small);
        border-radius: var(--bds-size-radius-small);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        margin-left: auto;
        flex-shrink: 0;
    }

    .bottom-sheet-close-button:hover {
        background-color: var(--bds-color-functional-utils-overlay-alpha-1);
    }

    .bottom-sheet-content {
        padding: var(--bds-size-spacing-none) var(--bds-size-spacing-medium)
            var(--bds-size-spacing-large) var(--bds-size-spacing-medium);
        font-family: var(--bds-font-family-functional-label);
        font-size: var(--bds-size-font-functional-label-medium);
        line-height: var(--bds-size-line-height-functional-label-medium);
        font-weight: var(--bds-font-weight-functional-label);
        overflow: hidden auto;
        flex-grow: 1;
        min-height: 0;
    }
`
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,ao=Symbol.for(""),ro=e=>{if((null==e?void 0:e.r)===ao)return null==e?void 0:e._$litStatic$},so=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return{_$litStatic$:i.reduce(((t,i,o)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error("Value passed to 'literal' function must be a 'literal' result: ".concat(e,". Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security."))})(i)+e[o+1]),e[0]),r:ao}},no=new Map,lo=(e=>function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];for(var r,s,n,l=o.length,d=[],c=[],u=0,b=!1;u<l;){for(n=t[u];u<l&&void 0!==(s=o[u],r=ro(s));)n+=r+t[++u],b=!0;u!==l&&c.push(s),d.push(n),u++}if(u===l&&d.push(t[l]),b){var h=d.join("$$lit$$");void 0===(t=no.get(h))&&(d.raw=d,no.set(h,t=d)),o=c}return e(t,...o)})(G);var co=[v`
    .card-header {
        /* Allow natural word wrapping */
        overflow-wrap: break-word;
    }

    .standard .card-title {
        color: var(--bds-color-functional-neutral-on-surface);
        font-family: var(--bds-font-family-functional-title);
        font-size: var(--bds-size-font-functional-title-large);
        font-style: normal;
        font-weight: 600;
        line-height: var(--bds-size-line-height-functional-title-large);
    }

    .standard .card-why-line {
        color: var(--bds-color-functional-neutral-on-surface);
        font-family: var(--bds-font-family-functional-title);
        font-size: var(--bds-size-font-functional-title-small);
        font-style: normal;
        font-weight: var(--bds-card-font-weight-subheading);
        line-height: var(--bds-size-line-height-functional-title-small);
    }

    .headerWithCTA {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: var(--bds-size-spacing-small);
        align-self: stretch;
    }

    .headerWithCTA .card-title {
        flex: 1 0 0;
        color: var(--bds-color-functional-neutral-on-surface);
        font-family: var(--bds-font-family-functional-headline);
        font-size: var(--bds-size-font-functional-headline-small);
        font-style: normal;
        font-weight: var(--bds-font-weight-functional-headline);
        line-height: var(--bds-size-line-height-functional-headline-small);
    }

    .headerWithCTA .card-why-line {
        flex: 1 0 0;
        color: var(--bds-color-functional-neutral-on-surface-variant);
        font-family: var(--bds-font-family-functional-body);
        font-size: var(--bds-size-font-functional-body-small);
        font-style: normal;
        font-weight: var(--bds-card-font-weight-subheading);
        line-height: var(--bds-size-line-height-functional-body-small);
    }

    .card-header-cta {
        display: flex;
        align-items: center;
        gap: var(--bds-size-spacing-2x-small);
        text-decoration: none;
    }

    .card-header-cta-text {
        color: var(--bds-color-functional-core-primary-interactive);
        font-family: var(--bds-font-family-functional-body);
        font-size: var(--bds-size-font-functional-body-small);
        font-style: normal;
        font-weight: var(
            --bds-card-font-weight-footer
        ); /** cta in desktop shoveler is basically footer in mobile **/
        line-height: var(--bds-size-line-height-functional-body-small);
        vertical-align: bottom;
    }

    .card-header-cta-icon {
        display: flex;
        width: 12px;
        height: 12px;
        padding: 2px 3px 2px 4px;
        justify-content: center;
        align-items: center;
        color: var(--bds-color-functional-core-primary-interactive);
    }

    :is(h1, h2, h3, h4, h5, h6) {
        all: inherit;
    }

    /* Shared layout styles for standardV2, zone, and feature variants */
    .standardV2,
    .zone,
    .feature {
        display: block;
        color: var(--bds-color-functional-neutral-on-surface);
    }

    .standardV2 .header-container,
    .zone .header-container,
    .feature .header-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        gap: var(--bds-size-spacing-small);
        padding-left: var(--bds-size-spacing-none);
        padding-right: var(--bds-size-spacing-none);
    }

    .standardV2 .header-text-wrapper,
    .zone .header-text-wrapper,
    .feature .header-text-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1 0 0;
    }

    .standardV2 .header-text,
    .zone .header-text,
    .feature .header-text {
        margin: var(--bds-size-spacing-none);
        color: currentcolor;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .standardV2 .whyline-text,
    .zone .whyline-text,
    .feature .whyline-text {
        color: var(--bds-color-functional-neutral-on-surface-variant);
        font-family: var(--bds-font-family-functional-body);
        font-size: var(--bds-size-font-functional-body-small);
        font-style: normal;
        font-weight: var(--bds-card-font-weight-subheading);
        line-height: var(--bds-size-line-height-functional-body-small);
        margin-top: var(--bds-size-spacing-2x-small);
    }
`,qt()],uo=v`
    :host {
        display: block;
        margin: 0;
    }

    .divider {
        border-bottom-style: solid;
        border-bottom-color: var(--bds-color-functional-neutral-outline-variant);
        box-sizing: border-box;
        margin: 0;
    }

    .divider.small {
        border-bottom-width: var(--bds-size-line-weight-small);
    }

    .divider.medium {
        border-bottom-width: var(--bds-size-line-weight-medium);
    }

    .divider-container {
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        margin: 0;
    }

    .divider-line {
        flex: 1;
        border-bottom-style: solid;
        border-bottom-color: var(--bds-color-functional-neutral-outline-variant);
        box-sizing: border-box;
    }

    .divider-container.small .divider-line {
        border-bottom-width: var(--bds-size-line-weight-small);
    }

    .divider-container.medium .divider-line {
        border-bottom-width: var(--bds-size-line-weight-medium);
    }

    .divider-text {
        padding: 0 var(--bds-size-spacing-medium);
        color: var(--bds-color-functional-neutral-on-surface);
        font-size: var(--bds-size-font-functional-label-medium);
        line-height: var(--bds-size-line-height-functional-label-medium);
        white-space: nowrap;
        flex-shrink: 0;
    }
`;e.Divider=class extends Ne{constructor(){super(...arguments),this.size="small"}render(){const e={"margin-top":this.spacingTop,"margin-bottom":this.spacingBottom};return this.text?this.renderWithText(e):this.renderSimple(e)}renderWithText(e){const t=`divider-container ${this.size}`;return G`
            <div class="${t}" style=${Ke(e)}>
                <div class="divider-line"></div>
                <span class="divider-text">${this.text}</span>
                <div class="divider-line"></div>
            </div>
        `}renderSimple(e){const t=`divider ${this.size}`;return G`<div class="${t}" style=${Ke(e)}></div>`}},e.Divider.styles=uo,t([ke({type:String})],e.Divider.prototype,"size",void 0),t([ke({type:String,converter:{fromAttribute:e=>{if(null==e)return;const t=e.trim();return""===t?void 0:t}}})],e.Divider.prototype,"text",void 0),t([ke({type:String})],e.Divider.prototype,"spacingTop",void 0),t([ke({type:String})],e.Divider.prototype,"spacingBottom",void 0),e.Divider=t([ze("bds-divider"),He],e.Divider);const bo=[1,2,3,4,5,6],ho="default",go={fontFamily:"var(--bds-font-family-functional-headline)",fontSize:"var(--bds-size-font-functional-headline-small)",lineHeight:"var(--bds-size-line-height-functional-headline-small)",fontWeight:"var(--bds-font-weight-functional-headline)",paddingTop:"var(--bds-size-utils-padding-1)",paddingBottom:"var(--bds-size-utils-padding-1)"},po={fontFamily:"var(--bds-font-family-functional-title)",fontSize:"var(--bds-size-font-functional-title-large)",lineHeight:"var(--bds-size-line-height-functional-title-large)",fontWeight:"var(--bds-font-weight-functional-title)",paddingTop:"var(--bds-size-spacing-none)",paddingBottom:"var(--bds-size-spacing-none)"},vo={fontFamily:"var(--bds-font-family-functional-title)",fontSize:"var(--bds-size-font-functional-title-medium)",lineHeight:"var(--bds-size-line-height-functional-title-medium)",fontWeight:"var(--bds-font-weight-functional-title)",paddingTop:"var(--bds-size-spacing-none)",paddingBottom:"var(--bds-size-spacing-none)"},mo={1:{fontFamily:"var(--bds-font-family-functional-headline)",fontSize:"var(--bds-size-font-functional-headline-medium)",lineHeight:"var(--bds-size-line-height-functional-headline-medium)",fontWeight:"var(--bds-font-weight-functional-headline)",paddingTop:"var(--bds-size-utils-padding-1)",paddingBottom:"var(--bds-size-utils-padding-1)"},2:go,3:po,4:po,5:{fontFamily:"var(--bds-font-family-functional-title)",fontSize:"var(--bds-size-font-functional-title-small)",lineHeight:"var(--bds-size-line-height-functional-title-small)",fontWeight:"var(--bds-font-weight-functional-title)",paddingTop:"var(--bds-size-utils-padding-1)",paddingBottom:"var(--bds-size-utils-padding-1)"},6:{fontFamily:"var(--bds-font-family-functional-label)",fontSize:"var(--bds-size-font-functional-label-small)",lineHeight:"var(--bds-size-line-height-functional-label-small)",fontWeight:"var(--bds-font-weight-functional-headline)",paddingTop:"var(--bds-size-spacing-none)",paddingBottom:"var(--bds-size-spacing-none)"}},fo={1:go,2:po,3:po,4:vo,5:vo,6:{fontFamily:"var(--bds-font-family-functional-title)",fontSize:"var(--bds-size-font-functional-title-small)",lineHeight:"var(--bds-size-line-height-functional-title-small)",fontWeight:"var(--bds-font-weight-functional-title)",paddingTop:"var(--bds-size-spacing-none)",paddingBottom:"var(--bds-size-spacing-none)"}},_o={fontFamily:"var(--bds-font-family-functional-title)",fontSize:"var(--bds-size-font-functional-title-x-large)",lineHeight:"var(--bds-size-line-height-functional-title-x-large)",fontWeight:"var(--bds-font-weight-functional-title)",paddingTop:"var(--bds-size-utils-padding-10)",paddingBottom:"var(--bds-size-utils-padding-10)",showDivider:!0,dividerSize:"medium"},yo={fontFamily:"var(--bds-font-family-functional-headline)",fontSize:"var(--bds-size-font-functional-headline-small)",lineHeight:"var(--bds-size-line-height-functional-headline-small)",fontWeight:"var(--bds-font-weight-functional-headline)",paddingTop:"var(--bds-size-utils-padding-20)",paddingBottom:"var(--bds-size-utils-padding-1)",showDivider:!1,dividerSize:"medium"},xo={mobile:_o,tablet:_o,desktop:yo,default:yo},wo={fontFamily:"var(--bds-font-family-functional-title)",fontSize:"var(--bds-size-font-functional-title-large)",lineHeight:"var(--bds-size-line-height-functional-title-large)",fontWeight:"var(--bds-font-weight-functional-title)",paddingTop:"var(--bds-size-utils-padding-6)",paddingBottom:"var(--bds-size-spacing-x-small)",showDivider:!0,dividerSize:"small"},ko={fontFamily:"var(--bds-font-family-functional-title)",fontSize:"var(--bds-size-font-functional-title-x-large)",lineHeight:"var(--bds-size-line-height-functional-title-x-large)",fontWeight:"var(--bds-font-weight-functional-title)",paddingTop:"var(--bds-size-spacing-small)",paddingBottom:"var(--bds-size-spacing-small)",showDivider:!0,dividerSize:"small"},Co={mobile:wo,tablet:wo,desktop:ko,default:ko};e.CardHeader=class extends et{constructor(){super(...arguments),this.titleTextHeadingLevel=2,this.layout="standard"}getDefaultConfiguration(){return{fontFamily:"var(--bds-font-family-functional-headline)",fontSize:"var(--bds-size-font-functional-headline-small)",lineHeight:"var(--bds-size-line-height-functional-headline-small)",fontWeight:"var(--bds-font-weight-functional-headline)",paddingTop:"var(--bds-size-utils-padding-1)",paddingBottom:"var(--bds-size-utils-padding-1)"}}getConfigurationOverrides(){return[]}getDeviceType(){var e;return(null===(e=this.renderContext)||void 0===e?void 0:e.devicetype)||ho}getRole(e){return bo.includes(e)?"heading":"text"}getCTAAriaLabel(){const e=this.titleText||this.whyLineText||"";return e?`${this.ctaText} ${e}`:this.ctaText||""}getLevelStyles(){var e,t;const i=bo.includes(this.titleTextHeadingLevel)?this.titleTextHeadingLevel:2,o="mobile"===this.getDeviceType()?fo:mo;return null!==(t=null!==(e=o[i])&&void 0!==e?e:o[2])&&void 0!==t?t:mo[2]}getTagLiteral(e){if(bo.includes(e)){switch(e){case 1:return so`h1`;case 2:return so`h2`;case 3:return so`h3`;case 4:return so`h4`;case 5:return so`h5`;case 6:return so`h6`}}return so`span`}renderHeadingText(e,t,i){const o=this.getTagLiteral(i),a=this.getRole(i);return lo`
            <${o} class=${$t(t)} role="${a}">
                ${e}
            </${o}>
        `}renderStyledHeadingText(e,t,i,o){const a=this.getTagLiteral(i);return lo`
            <${a}
                class="${t}"
                role="${this.getRole(i)}"
                aria-level="${i||2}"
                style="
                font-family: ${o.fontFamily};
                font-size: ${o.fontSize};
                line-height: ${o.lineHeight};
                font-weight: ${o.fontWeight};
            ">
                ${e}
            </${a}>
        `}renderWhyline(){return zt(this.whyLineText,(()=>lo`
                <div class="whyline-text">
                    ${this.whyLineText}
                </div>
            `))}renderCTA(){return zt(this.ctaText&&this.ctaUrl,(()=>lo`
                <a
                    href="${this.ctaUrl}"
                    class="card-header-cta"
                    role="link"
                    aria-label="${this.getCTAAriaLabel()}">
                    <span class="card-header-cta-text">${this.ctaText}</span>
                    <bds-icon
                        class="card-header-cta-icon"
                        iconName="${hi()?"chevron-left.svg":"chevron-right.svg"}"
                        iconSize="14px"
                        iconColor="var(--bds-color-functional-core-primary-interactive)">
                    </bds-icon>
                </a>
            `))}renderCardHeaderWithCTA(){return G`
            <div>${this.returnStandardHeader()}</div>
            ${this.renderCTA()}
        `}returnStandardHeader(){return G` ${zt(this.titleText,(()=>this.renderHeadingText(this.titleText,"card-title",this.titleTextHeadingLevel)))}
        ${zt(this.whyLineText,(()=>this.renderHeadingText(this.whyLineText,"card-why-line",this.whyLineTextHeadingLevel)))}`}headerContainerWithWhylineAndCTA(e){return G`
            <div
                class="header-container"
                style="
                padding-top: ${e.paddingTop};
                padding-bottom: ${e.paddingBottom};
            ">
                <div class="header-text-wrapper">
                    ${this.renderStyledHeadingText(this.titleText,"header-text",this.titleTextHeadingLevel||2,e)}
                    ${this.renderWhyline()}
                </div>
                ${this.renderCTA()}
            </div>
        `}renderStandardV2Header(){const e=this.getRenderConfiguration(),t=this.getLevelStyles(),i=Object.assign(Object.assign({},e),t);return this.headerContainerWithWhylineAndCTA(i)}renderHeaderWithDivider(e){const t=this.getRenderConfiguration(),i=Object.assign(Object.assign({},t),e);return lo`
            ${zt(i.showDivider,(()=>G`<bds-divider size="${i.dividerSize||"small"}"></bds-divider>`))}
            ${this.headerContainerWithWhylineAndCTA(i)}
        `}renderZoneHeader(){var e;const t=this.getDeviceType(),i=null!==(e=xo[t])&&void 0!==e?e:xo[ho];return this.renderHeaderWithDivider(i)}renderFeatureHeader(){var e;const t=this.getDeviceType(),i=null!==(e=Co[t])&&void 0!==e?e:Co[ho];return this.renderHeaderWithDivider(i)}isLegacyLayout(){return!("standardV2"===this.layout||"zone"===this.layout||"feature"===this.layout)}render(){return(this.isLegacyLayout()||this.titleText)&&(this.titleText||this.whyLineText)?G`
            <div class="card-header ${this.layout}">
                ${gt(this.layout,[["standard",()=>this.returnStandardHeader()],["headerWithCTA",()=>this.renderCardHeaderWithCTA()],["standardV2",()=>this.renderStandardV2Header()],["zone",()=>this.renderZoneHeader()],["feature",()=>this.renderFeatureHeader()]],(()=>this.returnStandardHeader()))}
            </div>
        `:Q}},e.CardHeader.styles=co,t([ke({type:String})],e.CardHeader.prototype,"titleText",void 0),t([ke({type:Number})],e.CardHeader.prototype,"titleTextHeadingLevel",void 0),t([ke({type:String})],e.CardHeader.prototype,"whyLineText",void 0),t([ke({type:Number})],e.CardHeader.prototype,"whyLineTextHeadingLevel",void 0),t([ke({type:String})],e.CardHeader.prototype,"ctaText",void 0),t([ke({type:String})],e.CardHeader.prototype,"ctaUrl",void 0),t([ke({type:String})],e.CardHeader.prototype,"layout",void 0),e.CardHeader=t([ze("bds-card-header"),He],e.CardHeader),e.BottomSheet=class extends Ne{constructor(){super(...arguments),this.isOpen=!1,this.previousActiveElement=null,this.disableScrimClose=!1,this.ariaLabel="",this.handleOpenRequest=()=>{this.isOpen=!0,this.requestUpdate()},this.handleScrimClick=e=>{this.disableScrimClose||this.handleClose(e)},this.handleKeyDown=e=>{"Escape"===e.key&&(e.preventDefault(),this.handleClose(e))},this.handleStartSentinelFocus=()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".focus-sentinel-end"),i=this.getLastFocusableElement();i?i.focus():t&&t.focus()},this.handleEndSentinelFocus=()=>{var e,t;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".bottom-sheet-close-button"),o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".focus-sentinel-start");i?i.focus():o&&o.focus()}}static get styles(){return[oo]}connectedCallback(){super.connectedCallback(),this.addEventListener("bottom-sheet-open-request",this.handleOpenRequest),this.addEventListener("modal-open-request",this.handleOpenRequest)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("bottom-sheet-open-request",this.handleOpenRequest),this.removeEventListener("modal-open-request",this.handleOpenRequest),this.isOpen&&(document.body.style.overflow="")}toggleOpen(e){this.isOpen?this.handleClose(e):this.dispatchEvent(new CustomEvent("bottom-sheet-open-request",{bubbles:!0,composed:!0}))}handleOpen(){this.isOpen&&(this.previousActiveElement=document.activeElement,document.body.style.overflow="hidden",requestAnimationFrame((()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".bottom-sheet-container");t instanceof HTMLElement&&t.focus()})))}handleClose(e){var t;this.isOpen&&(this.isOpen=!1,null===(t=this.onClose)||void 0===t||t.call(this,e))}getLastFocusableElement(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".bottom-sheet-close-button")}updated(e){if(super.updated(e),e.has("isOpen"))if(this.isOpen)this.handleOpen();else{if(document.body.style.overflow="",this.previousActiveElement instanceof HTMLElement&&document.body.contains(this.previousActiveElement)){const e=this.previousActiveElement;requestAnimationFrame((()=>{e.focus()}))}this.previousActiveElement=null}}renderCloseButton(){return G`
            <button class="bottom-sheet-close-button" aria-label="Close" @click=${this.handleClose}>
                <bds-icon
                    iconName="close.svg"
                    iconSize="16px"
                    iconColor="var(--bds-color-functional-neutral-on-surface)">
                </bds-icon>
            </button>
        `}renderHeader(){return G`
            <div class="bottom-sheet-header">
                ${this.headerTitle?G`<h2 id="bottom-sheet-title" class="bottom-sheet-title">
                          ${this.headerTitle}
                      </h2>`:Q}
                ${this.renderCloseButton()}
            </div>
        `}renderContent(){const e=this.content?"string"==typeof this.content?Xt(this.content):Gt(this.content)&&!Wt(this.content)?G`<bds-rich-content
                      .content=${this.content}></bds-rich-content>`:Q:Q;return G`<div class="bottom-sheet-content">
            ${e}
            <slot name="content"></slot>
        </div>`}render(){var e,t;const i=null===(e=this.renderContext)||void 0===e?void 0:e.devicetype;if("mobile"!==i&&"tablet"!==i)return Q;const o={"bottom-sheet-scrim":!0,open:this.isOpen},a=Object.assign({"bottom-sheet-container":!0,open:this.isOpen},(null===(t=this.renderContext)||void 0===t?void 0:t.theme)&&{[this.renderContext.theme]:!0});return G`
            <slot name="trigger"></slot>
            ${this.isOpen?G`
                      <div class=${Xe(o)} @click=${this.handleScrimClick}>
                          <div
                              class=${Xe(a)}
                              role="dialog"
                              aria-modal="true"
                              aria-labelledby=${$t(this.headerTitle?"bottom-sheet-title":void 0)}
                              aria-label=${$t(this.ariaLabel||void 0)}
                              tabindex="-1"
                              @click=${e=>e.stopPropagation()}
                              @keydown=${this.handleKeyDown}>
                              <div
                                  class="focus-sentinel-start"
                                  tabindex="0"
                                  @focus=${this.handleStartSentinelFocus}
                                  aria-hidden="true"></div>
                              <div class="bottom-sheet-handle-wrapper">
                                  <div class="bottom-sheet-handle"></div>
                              </div>
                              ${this.renderHeader()} ${this.renderContent()}
                              <div
                                  class="focus-sentinel-end"
                                  tabindex="0"
                                  @focus=${this.handleEndSentinelFocus}
                                  aria-hidden="true"></div>
                          </div>
                      </div>
                  `:Q}
        `}},t([Ce()],e.BottomSheet.prototype,"isOpen",void 0),t([ke({type:String})],e.BottomSheet.prototype,"headerTitle",void 0),t([ke({type:Object})],e.BottomSheet.prototype,"content",void 0),t([ke({type:Boolean})],e.BottomSheet.prototype,"disableScrimClose",void 0),t([ke({type:String})],e.BottomSheet.prototype,"ariaLabel",void 0),t([ke()],e.BottomSheet.prototype,"onClose",void 0),t([ye({context:$e,subscribe:!0})],e.BottomSheet.prototype,"renderContext",void 0),e.BottomSheet=t([ze("bds-bottom-sheet"),He],e.BottomSheet);var So=v`
    :host {
        display: block;
        margin-top: var(--box-margin-top, 0);
        margin-bottom: var(--box-margin-bottom, 0);
    }

    .bds-box {
        display: block;
        position: relative;
        box-sizing: border-box;
    }

    /* Base box styling - matches Figma specifications */
    .bds-box-inner {
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border-radius: var(--box-border-top-left-radius, var(--bds-size-radius-small))
            var(--box-border-top-right-radius, var(--bds-size-radius-small))
            var(--box-border-bottom-right-radius, var(--bds-size-radius-small))
            var(--box-border-bottom-left-radius, var(--bds-size-radius-small));
        font-family: var(--bds-font-family-functional-label);
        font-size: var(--bds-size-font-functional-label-medium);
        line-height: var(--bds-size-line-height-functional-label-medium);
        color: var(--bds-color-functional-neutral-on-surface);
        overflow: hidden;
    }

    /* Default background color styling - uses CSS custom properties with fallbacks */
    .variant-box-base .bds-box-inner {
        background-color: var(--box-background-color, var(--bds-color-functional-neutral-surface));
        border-top: var(
            --box-border-top,
            var(--bds-size-line-weight-small) solid
                var(--box-border-color, var(--bds-color-functional-neutral-outline-variant))
        );
        border-bottom: var(
            --box-border-bottom,
            var(--bds-size-line-weight-small) solid
                var(--box-border-color, var(--bds-color-functional-neutral-outline-variant))
        );
        border-left: var(
            --box-border-left,
            var(--bds-size-line-weight-small) solid
                var(--box-border-color, var(--bds-color-functional-neutral-outline-variant))
        );
        border-right: var(
            --box-border-right,
            var(--bds-size-line-weight-small) solid
                var(--box-border-color, var(--bds-color-functional-neutral-outline-variant))
        );
    }

    /* Alternate background color styling - uses CSS custom properties with fallbacks */
    .variant-box-alternate .bds-box-inner {
        background-color: var(
            --box-background-color,
            var(--bds-color-functional-neutral-surface-container)
        );
        border-top: var(
            --box-border-top,
            var(--bds-size-line-weight-small) solid
                var(--box-border-color, var(--bds-color-functional-neutral-surface-container))
        );
        border-bottom: var(
            --box-border-bottom,
            var(--bds-size-line-weight-small) solid
                var(--box-border-color, var(--bds-color-functional-neutral-surface-container))
        );
        border-left: var(
            --box-border-left,
            var(--bds-size-line-weight-small) solid
                var(--box-border-color, var(--bds-color-functional-neutral-surface-container))
        );
        border-right: var(
            --box-border-right,
            var(--bds-size-line-weight-small) solid
                var(--box-border-color, var(--bds-color-functional-neutral-surface-container))
        );
    }

    /* Text alignment */
    .textAlign-left .bds-box-inner {
        text-align: left;
    }

    .textAlign-center .bds-box-inner {
        text-align: center;
    }

    .textAlign-right .bds-box-inner {
        text-align: right;
    }

    .textAlign-justify .bds-box-inner {
        text-align: justify;
    }

    /* Focus states for accessibility */
    .bds-box:focus-visible {
        outline: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-utils-focus-indicator);
        outline-offset: var(--bds-size-utils-padding-2);
    }
`;e.Box=class extends Ne{constructor(){super(...arguments),this.variant="box-base",this.padding="medium",this.spacingBelow="none",this.spacingTop="none",this.textAlign="left"}static get styles(){return[So]}getClasses(){var e;return Object.assign({"bds-box":!0,[`variant-${this.variant.toLowerCase()}`]:!0,[`textAlign-${this.textAlign}`]:!0},(null===(e=this.renderContext)||void 0===e?void 0:e.theme)&&{[this.renderContext.theme]:!0})}getStyles(){return Object.assign(Object.assign({},this.widthCss&&{width:this.widthCss}),this.heightCss&&{height:this.heightCss})}getInnerBoxStyles(){return{padding:`var(--bds-size-spacing-${this.padding})`,"margin-bottom":`var(--bds-size-spacing-${this.spacingBelow})`,"margin-top":`var(--bds-size-spacing-${this.spacingTop})`}}render(){const e=this.getClasses(),t=this.getStyles(),i=this.getInnerBoxStyles();return G`
            <div
                class="${Xe(e)}"
                style="${Ke(t)}"
                aria-label="${$t(this.accessibilityLabel)}">
                <div class="bds-box-inner" style="${Ke(i)}">
                    <slot></slot>
                </div>
            </div>
        `}},t([ke({type:String})],e.Box.prototype,"variant",void 0),t([ke({type:String})],e.Box.prototype,"padding",void 0),t([ke({type:String})],e.Box.prototype,"spacingBelow",void 0),t([ke({type:String})],e.Box.prototype,"spacingTop",void 0),t([ke({type:String})],e.Box.prototype,"textAlign",void 0),t([ke({type:String})],e.Box.prototype,"widthCss",void 0),t([ke({type:String})],e.Box.prototype,"heightCss",void 0),t([ke({type:String})],e.Box.prototype,"accessibilityLabel",void 0),t([ye({context:$e,subscribe:!0})],e.Box.prototype,"renderContext",void 0),e.Box=t([ze("bds-box"),He],e.Box);var $o=v`
    :host {
        display: block;
    }

    .bds-box-group {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    /* Base styling for all slotted boxes within the group */
    .bds-box-group ::slotted(bds-box) {
        margin: 0; /* Remove any existing margins to ensure seamless connection */
    }

    /* Regular variant - ensures child boxes use default background */
    .variant-box-base ::slotted(bds-box) {
        --box-background-color: var(--bds-color-functional-neutral-surface);
        --box-border-color: var(--bds-color-functional-neutral-outline-variant);
    }

    /* Alternate variant - ensures child boxes use alternate background */
    .variant-box-alternate ::slotted(bds-box) {
        --box-background-color: var(--bds-color-functional-neutral-surface-container);
        --box-border-color: var(--bds-color-functional-neutral-surface-container);
    }

    /* REGULAR VARIANT - COMBINED BORDER AND BORDER-RADIUS STYLING */

    /* Regular variant - First child: rounded top corners, square bottom corners, top/left/right borders, NO bottom border */
    .variant-box-base ::slotted(bds-box:first-child) {
        --box-border-top-left-radius: var(--bds-size-radius-small);
        --box-border-top-right-radius: var(--bds-size-radius-small);
        --box-border-bottom-left-radius: 0;
        --box-border-bottom-right-radius: 0;
        --box-border-top: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-left: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-right: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-bottom: none;
    }

    /* Regular variant - Middle children: square corners, all 4 borders */
    .variant-box-base ::slotted(bds-box:not(:first-child, :last-child)) {
        --box-border-top-left-radius: 0;
        --box-border-top-right-radius: 0;
        --box-border-bottom-left-radius: 0;
        --box-border-bottom-right-radius: 0;
        --box-border-top: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-bottom: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-left: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-right: var(--bds-size-line-weight-small) solid var(--box-border-color);
    }

    /* Regular variant - Last child: rounded bottom corners, square top corners, bottom/left/right borders, NO top border */
    .variant-box-base ::slotted(bds-box:last-child) {
        --box-border-top-left-radius: 0;
        --box-border-top-right-radius: 0;
        --box-border-bottom-left-radius: var(--bds-size-radius-small);
        --box-border-bottom-right-radius: var(--bds-size-radius-small);
        --box-border-bottom: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-left: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-right: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-top: none;
    }

    /* Regular variant - Special case: Second box when there are exactly 2 boxes (2nd child that is also last child) */
    .variant-box-base ::slotted(bds-box:nth-child(2):last-child) {
        --box-border-top: var(--bds-size-line-weight-small) solid var(--box-border-color);
    }

    /* Regular variant - Only child: all corners rounded, all 4 borders */
    .variant-box-base ::slotted(bds-box:only-child) {
        --box-border-top-left-radius: var(--bds-size-radius-small);
        --box-border-top-right-radius: var(--bds-size-radius-small);
        --box-border-bottom-left-radius: var(--bds-size-radius-small);
        --box-border-bottom-right-radius: var(--bds-size-radius-small);
        --box-border-top: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-bottom: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-left: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-right: var(--bds-size-line-weight-small) solid var(--box-border-color);
    }

    /* Alternate variant - First child: rounded top corners, square bottom corners, top/left/right borders, NO bottom border */
    .variant-box-alternate ::slotted(bds-box:first-child) {
        --box-border-top-left-radius: var(--bds-size-radius-small);
        --box-border-top-right-radius: var(--bds-size-radius-small);
        --box-border-bottom-left-radius: 0;
        --box-border-bottom-right-radius: 0;
        --box-border-top: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-left: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-right: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-bottom: none;
    }

    /* Alternate variant - Middle children: square corners, left and right borders only, NO top and NO bottom borders */
    .variant-box-alternate ::slotted(bds-box:not(:first-child, :last-child)) {
        --box-border-top-left-radius: 0;
        --box-border-top-right-radius: 0;
        --box-border-bottom-left-radius: 0;
        --box-border-bottom-right-radius: 0;
        --box-border-left: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-right: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-top: none;
        --box-border-bottom: none;
    }

    /* Alternate variant - Last child: rounded bottom corners, square top corners, bottom/left/right borders, NO top border */
    .variant-box-alternate ::slotted(bds-box:last-child) {
        --box-border-top-left-radius: 0;
        --box-border-top-right-radius: 0;
        --box-border-bottom-left-radius: var(--bds-size-radius-small);
        --box-border-bottom-right-radius: var(--bds-size-radius-small);
        --box-border-bottom: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-left: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-right: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-top: none;
    }

    /* Alternate variant - Only child: all corners rounded, all 4 borders */
    .variant-box-alternate ::slotted(bds-box:only-child) {
        --box-border-top-left-radius: var(--bds-size-radius-small);
        --box-border-top-right-radius: var(--bds-size-radius-small);
        --box-border-bottom-left-radius: var(--bds-size-radius-small);
        --box-border-bottom-right-radius: var(--bds-size-radius-small);
        --box-border-top: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-bottom: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-left: var(--bds-size-line-weight-small) solid var(--box-border-color);
        --box-border-right: var(--bds-size-line-weight-small) solid var(--box-border-color);
    }

    /* Focus management - ensure focus states work properly in grouped context */
    .bds-box-group ::slotted(bds-box:focus-visible) {
        outline: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-utils-focus-indicator);
        outline-offset: var(--bds-size-utils-padding-2);
        z-index: 1; /* Ensure focused box appears above siblings */
        position: relative;
    }
`;e.BoxGroup=class extends Ne{constructor(){super(...arguments),this.variant="box-base",this.spacingBottom="none",this.spacingTop="none",this.gap="none"}static get styles(){return[$o]}getClasses(){var e;return Object.assign(Object.assign({"bds-box-group":!0,[`variant-${this.variant}`]:!0},this.cssClassString&&{[this.cssClassString]:!0}),(null===(e=this.renderContext)||void 0===e?void 0:e.theme)&&{[this.renderContext.theme]:!0})}getStyles(){return{"margin-bottom":`var(--bds-size-spacing-${this.spacingBottom})`,"margin-top":`var(--bds-size-spacing-${this.spacingTop})`,gap:`var(--bds-size-spacing-${this.gap})`}}render(){const e=this.getClasses(),t=this.getStyles();return G`
            <div class="${Xe(e)}" style="${Ke(t)}">
                <slot></slot>
            </div>
        `}},t([ke({type:String})],e.BoxGroup.prototype,"variant",void 0),t([ke({type:String})],e.BoxGroup.prototype,"spacingBottom",void 0),t([ke({type:String})],e.BoxGroup.prototype,"spacingTop",void 0),t([ke({type:String})],e.BoxGroup.prototype,"gap",void 0),t([ke({type:String})],e.BoxGroup.prototype,"cssClassString",void 0),e.BoxGroup=t([ze("bds-box-group"),He],e.BoxGroup);var Bo=v`
    .buy.filled {
        color: var(--bds-color-functional-supplemental-rio-primary);
        background: var(--bds-color-functional-supplemental-rio-buy-now);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-rio-color-orange-palette-600-blaze, #ff8f00);
        outline: none;
    }

    .buy.filled:active {
        background: var(--bds-rio-color-orange-palette-300-ignition, #eb7b13);
    }

    .buy.filled:focus {
        border: var(--bds-size-line-weight-small) solid
            var(--bds-rio-color-blue-palette-400-pacific, #007185);
        box-shadow: 0 0 0 0.1875rem #fff inset, 0 0 0 0.1875rem #c8f3fa,
            0 0.125rem 0.3125rem 0 rgba(213, 217, 217, 0.5);
    }

    .buy.filled:disabled {
        color: var(--bds-color-functional-utils-on-surface-inactive);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-rio-color-orange-palette-1200-vent, #ffd894);
        background: var(--bds-rio-color-orange-palette-1500-spark, #fff8e5);
    }

    .buy.filled:hover {
        border: var(--bds-size-line-weight-small) solid
            var(--bds-rio-color-orange-palette-400-vulcan, #f78307);
        background: var(--bds-rio-color-orange-palette-500-molten, #fa8900);
    }
`,zo=v`
    .order.filled {
        color: var(--bds-color-functional-supplemental-rio-primary);
        background: var(--bds-color-functional-supplemental-rio-add-to-cart);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-rio-color-yellow-800-solar, #fcd200);
        outline: none;
    }

    .order.filled:active {
        background: var(--bds-rio-color-yellow-500-supergiant, #f0b800);
    }

    .order.filled:focus {
        border: var(--bds-size-line-weight-small) solid
            var(--bds-rio-color-blue-palette-400-pacific, #007185);
        box-shadow: 0 0 0 0.1875rem #fff inset, 0 0 0 0.1875rem #c8f3fa,
            0 0.125rem 0.3125rem 0 rgba(213, 217, 217, 0.5);
    }

    .order.filled:disabled {
        color: var(--bds-color-functional-utils-on-surface-inactive);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-rio-color-yellow-1200-sirius, #ffed94);
        background: var(--bds-rio-color-yellow-palette-1500-Luna, #fffae0);
    }

    .order.filled:hover {
        border: var(--bds-size-line-weight-small) solid
            var(--bds-rio-color-yellow-600-arcturus, #f2c200);
        background: var(--bds-rio-color-yellow-700-venus, #f7ca00);
    }
`,To=v`
    .common.filled {
        background: var(--bds-color-functional-core-secondary);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-core-secondary);
    }

    .common.outlined {
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-neutral-outline);
    }
`,Po=v`
    .rare.filled {
        background: var(
            --bds-color-functional-gradients-electric-unicorn,
            linear-gradient(226deg, #0274e6 -0.01%, #5e5cd1 41.89%, #cc0285 97.94%)
        );
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-utils-transparent);
    }

    .rare.outlined {
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-gradients-electric-unicorn, #0274e6);
    }
`,Io=v`
    .reading.filled {
        background: var(--bds-color-functional-core-primary-fixed);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-core-primary-fixed);
    }

    .reading.outlined {
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-core-primary-fixed);
    }
`,Ao=v`
    :host > button,
    :host > a {
        position: relative;
        font-family: var(--bds-font-family-functional-body);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--bds-size-radius-circle);
        font-style: normal;
        font-weight: 400;
        min-width: var(--bds-size-tap-target-minimum);
        min-height: var(--bds-size-tap-target-minimum);
    }

    :host > a {
        text-decoration: none;
        display: inline-flex;
        box-sizing: border-box;
    }

    button:disabled,
    a[aria-disabled='true'] {
        cursor: default;
    }

    :hover {
        cursor: pointer;
    }

    .full-width {
        width: 100%;
        max-width: 400px; /* max width for button for large screens and tablet view */
    }

    .common.filled {
        color: var(--bds-color-functional-core-on-secondary);
    }

    .rare.filled {
        color: var(--bds-color-functional-core-on-electric-unicorn);
    }

    .reading.filled {
        color: var(--bds-color-functional-core-on-primary-fixed);
    }

    .common.outlined,
    .rare.outlined,
    .reading.outlined {
        color: var(--bds-color-functional-neutral-on-surface);
        background: none;
    }

    .common:focus,
    .rare:focus,
    .reading:focus {
        box-shadow: 0 0 0 0.1875rem #fff inset, 0 0 0 0.1875rem #c8f3fa,
            0 0.125rem 0.3125rem 0 rgba(213, 217, 217, 50%);
    }

    .common.filled:disabled,
    .rare.filled:disabled,
    .reading.filled:disabled {
        color: var(--bds-color-functional-utils-on-surface-inactive);
        background: var(--bds-color-functional-utils-surface-inactive);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-utils-outline-inactive);
    }

    .common.outlined:disabled,
    .rare.outlined:disabled,
    .reading.outlined:disabled {
        color: var(--bds-color-functional-utils-on-surface-inactive);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-neutral-outline-variant);
    }

    .common.filled:hover:after,
    .rare.filled:hover:after,
    .reading.filled:hover:after {
        background: var(--bds-color-functional-utils-overlay-alpha-2-inverse);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-utils-overlay-alpha-2-inverse);
    }

    .common.filled:active:after,
    .rare.filled:active:after,
    .reading.filled:active:after {
        background: var(--bds-color-functional-utils-overlay-alpha-1-inverse);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-utils-overlay-alpha-1-inverse);
    }

    .common.outlined:hover:after,
    .rare.outlined:hover:after,
    .reading.outlined:hover:after {
        background: var(--bds-color-functional-utils-overlay-alpha-2);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-utils-overlay-alpha-2);
    }

    .common.outlined:active:after,
    .rare.outlined:active:after,
    .reading.outlined:active:after {
        background: var(--bds-color-functional-utils-overlay-alpha-1);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-utils-overlay-alpha-1);
    }

    .common:hover:after,
    .rare:hover:after,
    .reading:hover:after,
    .common:active:after,
    .rare:active:after,
    .reading:active:after {
        border-radius: var(--bds-size-radius-circle);
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .base {
        padding: 6px var(--bds-size-utils-padding-20);
        font-size: var(--bds-size-font-functional-label-medium);
        line-height: var(--bds-size-line-height-functional-label-medium); /* 142.857% */
    }

    .small {
        padding: 2px var(--bds-size-spacing-small);
        font-size: var(--bds-size-font-functional-label-small);
        line-height: var(--bds-size-line-height-functional-label-small); /* 133.333% */
    }

    .inner-border {
        position: absolute;
        inset: 0;
        border-radius: var(--bds-size-radius-circle);
        display: none;
    }
`;e.Button=class extends Ne{constructor(){super(...arguments),this.size="base",this.fullWidth=!1,this.isInactive=!1,this.onClickHandler=e=>{var t;Re.logCountMetric(`bds-button-clicked-${this.category}-${this.emphasis}`),null===(t=this.handleClick)||void 0===t||t.call(this,e)}}static get styles(){return[Ao,Bo,To,zo,Po,Io]}render(){var e,t,i,o;return this.url?G` <a
                href=${this.url}
                aria-label=${$t(this.accessibilityLabel)}
                aria-disabled=${this.isInactive?"true":"false"}
                class="${this.category} ${this.emphasis} ${this.size} ${null!==(t=null===(e=this.renderContext)||void 0===e?void 0:e.theme)&&void 0!==t?t:""} ${this.fullWidth?"full-width":""}"
                ?disabled=${this.isInactive}>
                ${Xt(this.content)}
            </a>`:G` <button
            aria-label=${$t(this.accessibilityLabel)}
            @click=${this.onClickHandler}
            class="${this.category} ${this.emphasis} ${this.size} ${null!==(o=null===(i=this.renderContext)||void 0===i?void 0:i.theme)&&void 0!==o?o:""} ${this.fullWidth?"full-width":""}"
            ?disabled=${this.isInactive}>
            ${Xt(this.content)}
        </button>`}},t([ke({type:String})],e.Button.prototype,"accessibilityLabel",void 0),t([ke({type:String})],e.Button.prototype,"category",void 0),t([ke({type:String})],e.Button.prototype,"content",void 0),t([ke({type:String})],e.Button.prototype,"emphasis",void 0),t([ke({type:String})],e.Button.prototype,"size",void 0),t([ke({type:Boolean})],e.Button.prototype,"fullWidth",void 0),t([ke()],e.Button.prototype,"handleClick",void 0),t([ke({type:Boolean})],e.Button.prototype,"isInactive",void 0),t([ke({type:String})],e.Button.prototype,"url",void 0),t([ye({context:$e,subscribe:!0})],e.Button.prototype,"renderContext",void 0),e.Button=t([ze("bds-button"),He],e.Button),e.RareButton=class extends Ne{constructor(){super(...arguments),this.size="base",this.fullWidth=!1,this.isInactive=!1}render(){return G` <bds-button
            accessibilityLabel=${$t(this.accessibilityLabel)}
            content=${this.content}
            category="rare"
            emphasis=${this.emphasis}
            size=${$t(this.size)}
            .handleClick=${this.handleClick}
            ?fullWidth=${this.fullWidth}
            ?isInactive=${this.isInactive}>
        </bds-button>`}},t([ke({type:String})],e.RareButton.prototype,"accessibilityLabel",void 0),t([ke({type:String})],e.RareButton.prototype,"content",void 0),t([ke({type:String})],e.RareButton.prototype,"emphasis",void 0),t([ke({type:String})],e.RareButton.prototype,"size",void 0),t([ke({type:Boolean})],e.RareButton.prototype,"fullWidth",void 0),t([ke()],e.RareButton.prototype,"handleClick",void 0),t([ke({type:Boolean})],e.RareButton.prototype,"isInactive",void 0),e.RareButton=t([ze("bds-rare-button")],e.RareButton),e.ReadingButton=class extends Ne{constructor(){super(...arguments),this.size="base",this.fullWidth=!1,this.isInactive=!1,this.onClickReadHandler=e=>{var t;this.handleClick?this.handleClick():this.callToAction?(null==e||e.preventDefault(),Xi.openWebPage(null===(t=this.callToAction)||void 0===t?void 0:t.url)):Re.logCountMetric("bds-reading-button-onclick-error")}}render(){var e,t;const i=this.handleClick||Ki.isNativeBridgeAvailable()&&Ki.isOpenWebPageAvailable();return G` <bds-button
            accessibilityLabel=${$t(this.accessibilityLabel)}
            content=${ui("bds_read_now_button_label",null===(e=this.renderContext)||void 0===e?void 0:e.locale)}
            category="reading"
            emphasis=${this.emphasis}
            size=${$t(this.size)}
            url=${$t(i||null===(t=this.callToAction)||void 0===t?void 0:t.url)}
            .handleClick=${this.onClickReadHandler}
            ?fullWidth=${this.fullWidth}
            ?isInactive=${this.isInactive}>
        </bds-button>`}},t([ke({type:String})],e.ReadingButton.prototype,"accessibilityLabel",void 0),t([ke({type:String})],e.ReadingButton.prototype,"emphasis",void 0),t([ke({type:String})],e.ReadingButton.prototype,"size",void 0),t([ke({type:Boolean})],e.ReadingButton.prototype,"fullWidth",void 0),t([ke()],e.ReadingButton.prototype,"handleClick",void 0),t([ke({type:Object})],e.ReadingButton.prototype,"callToAction",void 0),t([ke({type:Boolean})],e.ReadingButton.prototype,"isInactive",void 0),t([ye({context:$e,subscribe:!0})],e.ReadingButton.prototype,"renderContext",void 0),e.ReadingButton=t([ze("bds-reading-button")],e.ReadingButton),e.CommonButton=class extends Ne{constructor(){super(...arguments),this.size="base",this.fullWidth=!1,this.isInactive=!1,this.onClickReadHandler=e=>{this.handleClick?this.handleClick():this.url?(null==e||e.preventDefault(),Xi.openWebPage(this.url)):Re.logCountMetric("bds-common-button-onclick-error")}}render(){const e=this.handleClick||Ki.isNativeBridgeAvailable()&&Ki.isOpenWebPageAvailable();return G` <bds-button
            accessibilityLabel=${$t(this.accessibilityLabel)}
            content=${this.content}
            category="common"
            emphasis=${this.emphasis}
            size=${$t(this.size)}
            url=${$t(e||null==this?void 0:this.url)}
            .handleClick=${this.onClickReadHandler}
            ?fullWidth=${this.fullWidth}
            ?isInactive=${this.isInactive}>
        </bds-button>`}},t([ke({type:String})],e.CommonButton.prototype,"accessibilityLabel",void 0),t([ke({type:String})],e.CommonButton.prototype,"content",void 0),t([ke({type:String})],e.CommonButton.prototype,"emphasis",void 0),t([ke({type:String})],e.CommonButton.prototype,"size",void 0),t([ke({type:Boolean})],e.CommonButton.prototype,"fullWidth",void 0),t([ke()],e.CommonButton.prototype,"handleClick",void 0),t([ke({type:String})],e.CommonButton.prototype,"url",void 0),t([ke({type:Boolean})],e.CommonButton.prototype,"isInactive",void 0),e.CommonButton=t([ze("bds-common-button")],e.CommonButton);const Lo={KINDLE_UNLIMITED:"KU",COMICS_UNLIMITED:"CU",PrimeReading:"PRIME"},Oo={"content-type":"application/x-www-form-urlencoded"};function Ro(e){e&&e.ok&&(e.redirected?Xi.openWebPage(e.url):e.json().then((e=>{var t,i,o;try{const a=null===(o=null===(i=null===(t=null==e?void 0:e.resources)||void 0===t?void 0:t[0].states)||void 0===i?void 0:i[0].links)||void 0===o?void 0:o[0].url;a&&Xi.openWebPage(a)}catch(e){throw Re.logCountMetric("bds-fetchresponse-handler-error"),new Error(`Error in getting redirect url from fetchResponse: ${e}`)}})))}function Fo(e,t){if(!t)return e;const[i,o]=e.split("?"),a=new URLSearchParams(o);Object.entries(t).forEach((([e,t])=>{a.append(e,t)}));const r=new URL(i,"https://www.amazon.com");return r.search=a.toString(),r.pathname+r.search}const Do=e=>{const t={};if(!e)return t;for(const i of e)(null==i?void 0:i.name)&&(null==i?void 0:i.value)&&(t[i.name]=i.value);return t};function Eo(e,t){var i;const{url:o,data:a}=e,r=Fo(o,t),s=(e=>{var t,i,o,a,r,s,n,l,d;const c=Do(e);return{programCode:null!==(i=null!==(t=null==c?void 0:c.programCode)&&void 0!==t?t:null==c?void 0:c.program)&&void 0!==i?i:"KINDLE_UNLIMITED",channelCode:null!==(a=null!==(o=null==c?void 0:c.programChannel)&&void 0!==o?o:null==c?void 0:c.channel)&&void 0!==a?a:"ALL_YOU_CAN_READ",programName:null!==(n=null!==(r=null==c?void 0:c.programName)&&void 0!==r?r:Lo[null!==(s=c.programCode)&&void 0!==s?s:""])&&void 0!==n?n:"KU",actionType:null!==(l=null==c?void 0:c.actionType)&&void 0!==l?l:"Borrow",asin:null!==(d=null==c?void 0:c.asin)&&void 0!==d?d:""}})(null==a?void 0:a.parameters),n={csrf:null!==(i=null==t?void 0:t.csrf)&&void 0!==i?i:"",items:[{action:{asin:s.asin,actionType:s.actionType,program:{programCode:s.programCode,name:s.programName,channelCode:s.channelCode}}}]};return fetch(r,{method:"POST",headers:Oo,body:new URLSearchParams(Mo(n))}).then((e=>Ro(e)))}function Mo(e,t=""){const i=[];for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=Array.isArray(e),r=t?a?`${t}[${o}]`:`${t}.${o}`:o,s=a?e[Number(o)]:e[o];null!==s&&"object"==typeof s?i.push(Mo(s,r)):i.push(`${encodeURIComponent(r)}=${encodeURIComponent(s)}`)}return i.join("&")}e.BuyButton=class extends Ne{constructor(){super(...arguments),this.category="buy",this.size="base",this.fullWidth=!1,this.isInactive=!1,this.onClickBuyHandler=()=>{if(this.handleClick)this.handleClick();else if(this.callToAction)try{this.isInactive=!0,function(e,t){var i;const o="data"in e?Do(null===(i=e.data)||void 0===i?void 0:i.parameters):{},a=new Vt(o).getData();a.csrf=null==t?void 0:t.csrf;const r=Fo(e.url,t);return fetch(r,{method:"POST",headers:Oo,body:new URLSearchParams(Mo(a))}).then((e=>Ro(e)))}(this.callToAction,this.biFrostRequestParams).finally((()=>{this.isInactive=!1}))}catch(e){Re.logCountMetric(`bds-buy-button-onclick-error-${this.category}-${this.emphasis}`)}}}render(){return G` <bds-button
            accessibilityLabel=${$t(this.accessibilityLabel)}
            content=${this.content}
            category=${$t(this.category)}
            emphasis=${this.emphasis}
            size=${$t(this.size)}
            .handleClick=${this.onClickBuyHandler}
            ?fullWidth=${this.fullWidth}
            ?isInactive=${this.isInactive}>
        </bds-button>`}},t([ke({type:String})],e.BuyButton.prototype,"accessibilityLabel",void 0),t([ke({type:String})],e.BuyButton.prototype,"category",void 0),t([ke({type:String})],e.BuyButton.prototype,"content",void 0),t([ke({type:String})],e.BuyButton.prototype,"emphasis",void 0),t([ke({type:String})],e.BuyButton.prototype,"size",void 0),t([ke({type:Boolean})],e.BuyButton.prototype,"fullWidth",void 0),t([ke()],e.BuyButton.prototype,"handleClick",void 0),t([ke({type:Object})],e.BuyButton.prototype,"callToAction",void 0),t([ke({type:Object})],e.BuyButton.prototype,"biFrostRequestParams",void 0),t([ke({type:Boolean})],e.BuyButton.prototype,"isInactive",void 0),e.BuyButton=t([ze("bds-buy-button")],e.BuyButton),e.BorrowButton=class extends Ne{constructor(){super(...arguments),this.size="base",this.fullWidth=!1,this.isInactive=!1,this.onClickBuyHandler=()=>{if(this.handleClick)this.handleClick();else if(this.isInactive=!0,this.callToAction)try{"data"in this.callToAction&&Eo(this.callToAction,this.biFrostRequestParams).finally((()=>{this.isInactive=!1}))}catch(e){Re.logCountMetric("bds-borrow-button-borrow-onclick-error")}else if(this.ebookSample)try{(function(e,t){var i;const o=Fo(e.endpoint.url,t);return fetch(o,{method:"POST",headers:Oo,body:new URLSearchParams({csrf:null!==(i=null==t?void 0:t.csrf)&&void 0!==i?i:""})}).then((e=>Ro(e)))})(this.ebookSample,this.biFrostRequestParams).finally((()=>{this.isInactive=!1}))}catch(e){Re.logCountMetric("bds-borrow-button-ebookSample-onclick-error")}}}render(){return G` <bds-button
            accessibilityLabel=${$t(this.accessibilityLabel)}
            content=${this.content}
            category=${"order"}
            emphasis=${"filled"}
            size=${$t(this.size)}
            .handleClick=${this.onClickBuyHandler}
            ?fullWidth=${this.fullWidth}
            ?isInactive=${this.isInactive}>
        </bds-button>`}},t([ke({type:String})],e.BorrowButton.prototype,"accessibilityLabel",void 0),t([ke({type:String})],e.BorrowButton.prototype,"content",void 0),t([ke({type:String})],e.BorrowButton.prototype,"size",void 0),t([ke({type:Boolean})],e.BorrowButton.prototype,"fullWidth",void 0),t([ke()],e.BorrowButton.prototype,"handleClick",void 0),t([ke({type:Object})],e.BorrowButton.prototype,"callToAction",void 0),t([ke({type:Object})],e.BorrowButton.prototype,"biFrostRequestParams",void 0),t([ke({type:Object})],e.BorrowButton.prototype,"ebookSample",void 0),t([ke({type:Boolean})],e.BorrowButton.prototype,"isInactive",void 0),e.BorrowButton=t([ze("bds-borrow-button")],e.BorrowButton);var Ho=v`
    :host {
        display: inline-block;
        position: relative;
    }

    .dropdown-button-group {
        display: flex;
        position: relative;
        width: 100%;
    }

    /* Button Base Styles */
    .dropdown-button,
    .dropdown-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-neutral-outline-variant);
        border-radius: var(--bds-size-radius-small);
        background-color: var(--bds-color-functional-neutral-surface-container);
        color: var(--bds-color-functional-neutral-on-surface);
        font-family: var(--bds-font-family-functional-label);
        font-weight: var(--bds-font-weight-functional-label);
        cursor: pointer;
        transition: all 0.2s ease;
        box-sizing: border-box;
        position: relative;
    }

    .dropdown-button.size-base,
    .dropdown-toggle.size-base {
        font-size: var(--bds-size-font-functional-label-medium);
        line-height: var(--bds-size-line-height-functional-label-medium);
        padding: var(--bds-size-utils-padding-6) var(--bds-size-spacing-x-small)
            var(--bds-size-utils-padding-6) var(--bds-size-spacing-small);
    }

    .dropdown-button.size-small,
    .dropdown-toggle.size-small {
        font-size: var(--bds-size-font-functional-label-small);
        line-height: var(--bds-size-line-height-functional-label-small);
        padding: var(--bds-size-utils-padding-6) var(--bds-size-spacing-x-small);
    }

    /* Split Button Specific */
    .is-split .dropdown-button {
        background-color: var(--bds-color-functional-neutral-surface-container-lowest);
        border-top-right-radius: var(--bds-size-radius-none);
        border-bottom-right-radius: var(--bds-size-radius-none);
        border-right-width: calc(var(--bds-size-line-weight-small) / 2);
        flex: 1;
        min-width: 0;
        z-index: 1;
    }

    .dropdown-toggle {
        background-color: var(--bds-color-functional-neutral-surface-container-lowest);
        border-top-left-radius: var(--bds-size-radius-none);
        border-bottom-left-radius: var(--bds-size-radius-none);
        border-left-width: calc(var(--bds-size-line-weight-small) / 2);
        flex: none;
        width: auto;
    }

    .button-text {
        flex: 1;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: var(--bds-size-spacing-x-small);
    }

    .split-main .button-text {
        margin-right: var(--bds-size-spacing-none);
    }

    .dropdown-arrow {
        flex-shrink: 0;
        transition: transform 0.2s ease;
    }

    .dropdown-button:hover,
    .dropdown-toggle:hover {
        background-color: var(--bds-color-functional-utils-overlay-alpha-2);
        border-color: var(--bds-color-functional-utils-overlay-alpha-2);
    }

    .dropdown-button:focus,
    .dropdown-toggle:focus {
        outline: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-utils-focus-indicator);
        outline-offset: var(--bds-size-line-weight-medium);
        z-index: 2;
    }

    .dropdown-button.is-open,
    .dropdown-toggle.is-open {
        background-color: var(
            --bds-color-functional-supplemental-interaction-surface-container-selected
        );
        border-color: var(--bds-color-functional-utils-chip-outline-selected);
    }

    .dropdown-button:disabled,
    .dropdown-toggle:disabled {
        color: var(--bds-color-functional-utils-on-surface-inactive);
        background-color: var(--bds-color-functional-utils-surface-inactive);
        border-color: var(--bds-color-functional-neutral-outline-variant);
        cursor: not-allowed;
        pointer-events: none;
    }

    .dropdown-button.has-error,
    .dropdown-toggle.has-error {
        border-color: var(--bds-color-functional-supplemental-alert-error);
        border-width: var(--bds-size-line-weight-medium);
    }

    .is-split .dropdown-button.has-error {
        border-right-width: calc(var(--bds-size-line-weight-medium) / 2);
    }

    .dropdown-toggle.has-error {
        border-left-width: calc(var(--bds-size-line-weight-medium) / 2);
    }

    .dropdown-button.has-error:focus,
    .dropdown-toggle.has-error:focus {
        outline-color: var(--bds-color-functional-utils-focus-indicator);
    }

    .dropdown-button.has-error:focus-visible,
    .dropdown-toggle.has-error:focus-visible {
        outline-color: var(--bds-color-functional-utils-focus-indicator);
    }

    .dropdown-error-message {
        margin-top: var(--bds-size-spacing-2x-small);
        padding: var(--bds-size-spacing-2x-small);
        font-family: var(--bds-font-family-functional-label);
        font-size: var(--bds-size-font-functional-label-small);
        line-height: var(--bds-size-line-height-functional-label-small);
        color: var(--bds-color-functional-supplemental-alert-error);
        background-color: transparent;
    }

    .dropdown-scrim {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--bds-color-functional-supplemental-scrim);
        z-index: 999;
        cursor: pointer;
    }

    .dropdown-menu {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
        min-width: 100%;
        background-color: var(--bds-color-functional-neutral-surface-container-lowest);
        border-radius: var(--bds-size-radius-small);
        box-shadow: 0 2px 5px 0 rgba(15, 17, 17, 15%); /* TODO: replace with BDS token */
        overflow: hidden;
    }

    .dropdown-mobile-header {
        background-color: var(--bds-color-functional-neutral-surface-container);
        border-top-left-radius: var(--bds-size-radius-small);
        border-top-right-radius: var(--bds-size-radius-small);
        border-bottom: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-neutral-outline);
    }

    .mobile-header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--bds-size-spacing-none) var(--bds-size-spacing-medium);
        box-sizing: border-box;
    }

    .mobile-header-title {
        font-family: var(--bds-font-family-functional-title);
        font-weight: var(--bds-font-weight-functional-title);
        font-size: var(--bds-size-font-functional-title-medium);
        line-height: var(--bds-size-line-height-functional-title-medium);
        color: var(--bds-color-functional-neutral-on-surface);
        flex: 1;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .mobile-header-close {
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        cursor: pointer;
        padding: var(--bds-size-spacing-2x-small);
        border-radius: var(--bds-size-radius-x-small);
        transition: background-color 0.2s ease;
        flex-shrink: 0;
        min-width: 2rem;
        min-height: 2rem;
    }

    .mobile-header-close:hover {
        background-color: var(--bds-color-functional-utils-overlay-alpha-2);
    }

    .mobile-header-close:focus {
        outline: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-utils-focus-indicator);
        outline-offset: var(--bds-size-line-weight-medium);
    }

    .mobile-header-close:focus-visible {
        outline: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-utils-focus-indicator);
        outline-offset: var(--bds-size-line-weight-medium);
    }

    .mobile-header-close:focus:not(:focus-visible) {
        outline: none;
    }

    /* Dropdown Options Container */
    .dropdown-options {
        overflow: auto;
        max-height: inherit;
    }

    /* Menu Options */
    .dropdown-option {
        display: flex;
        align-items: center;
        padding: var(--bds-size-spacing-2x-small);
        cursor: pointer;
        font-family: var(--bds-font-family-functional-label);
        font-weight: var(--bds-font-weight-functional-label);
        line-height: var(--bds-size-line-height-functional-label-small);
        background-color: var(--bds-color-functional-neutral-surface-container-lowest);
        color: var(--bds-color-functional-neutral-on-surface);
        transition: background-color 0.2s ease;
    }

    .dropdown-options .dropdown-option:last-child {
        border-bottom-left-radius: var(--bds-size-radius-small);
        border-bottom-right-radius: var(--bds-size-radius-small);
    }

    /* When no mobile header, first option gets top radius */
    .dropdown-menu:not(.has-mobile-header) .dropdown-option:first-child,
    .dropdown-menu .dropdown-options:only-child .dropdown-option:first-child {
        border-top-left-radius: var(--bds-size-radius-small);
        border-top-right-radius: var(--bds-size-radius-small);
    }

    /* When mobile header is present, force first option to have square top corners */
    .dropdown-menu.has-mobile-header .dropdown-options .dropdown-option:first-child,
    .dropdown-menu.has-mobile-header .dropdown-options .dropdown-option:first-child.is-selected,
    .dropdown-menu.has-mobile-header .dropdown-options .dropdown-option:first-child.is-focused,
    .dropdown-menu.has-mobile-header .dropdown-options .dropdown-option:first-child:hover {
        border-top-left-radius: var(--bds-size-radius-none);
        border-top-right-radius: var(--bds-size-radius-none);
    }

    .dropdown-option:hover,
    .dropdown-option.is-focused {
        background-color: var(--bds-color-functional-neutral-surface-container);
    }

    .dropdown-option.is-selected {
        background-color: var(--bds-filter-color-container-background-selected);
    }

    .dropdown-option.has-image {
        padding: var(--bds-size-spacing-x-small);
    }

    .option-image {
        /* Default dimensions - can be overridden by inline styles */
        width: 3rem;
        height: 3rem;
        object-fit: cover;
        border-radius: var(--bds-size-radius-x-small);
        margin-right: var(--bds-size-spacing-small);
        flex-shrink: 0;
    }

    .option-text {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .selected-indicator {
        margin-left: var(--bds-size-spacing-x-small);
        flex-shrink: 0;
    }

    .no-options {
        padding: var(--bds-size-spacing-small);
        color: var(--bds-color-functional-neutral-on-surface-variant);
        font-style: italic;
        text-align: center;
    }

    /* High Contrast Mode Support */
    @media (prefers-contrast: high) {
        .dropdown-button,
        .dropdown-toggle {
            border-width: var(--bds-size-line-weight-medium);
        }

        .dropdown-menu {
            border-width: var(--bds-size-line-weight-medium);
        }

        .dropdown-option {
            border-bottom-width: var(--bds-size-line-weight-medium);
        }
    }

    /* Reduced Motion Support */
    @media (prefers-reduced-motion: reduce) {
        .dropdown-button,
        .dropdown-toggle,
        .dropdown-arrow,
        .dropdown-option {
            transition: none;
        }
    }

    /* Focus Visible Support */
    .dropdown-button:focus-visible,
    .dropdown-toggle:focus-visible {
        outline: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-utils-focus-indicator);
        outline-offset: var(--bds-size-line-weight-medium);
        z-index: 2;
    }

    .dropdown-button:focus:not(:focus-visible),
    .dropdown-toggle:focus:not(:focus-visible) {
        outline: none;
    }

    /* Size Variants for Dropdown Options */
    .dropdown-option.size-small {
        padding: var(--bds-size-spacing-2x-small) var(--bds-size-spacing-x-small);
        font-size: var(--bds-size-font-functional-label-small);
        line-height: var(--bds-size-line-height-functional-label-small);
    }

    .dropdown-option.size-small.has-image {
        padding: var(--bds-size-spacing-x-small);
    }

    .no-options.size-small {
        padding: var(--bds-size-spacing-x-small);
        font-size: var(--bds-size-font-functional-label-small);
    }
`;e.Dropdown=class extends et{constructor(){super(...arguments),this.buttonSize="base",this.dropdownMaxHeight="300px",this.hasImages=!1,this.optionImageWidth="50px",this.optionImageHeight="50px",this.labelText="Select an option",this.selectedOption="",this.isSplit=!1,this.options=[],this.hasError=!1,this.isOpen=!1,this.focusedIndex=-1,this.handleButtonClick=()=>{var e;this.isSplit?(null===(e=this.onButtonClick)||void 0===e||e.call(this),this.dispatchEvent(new CustomEvent("bds-dropdown-button-click",{bubbles:!0,detail:{selectedOption:this.selectedOption}}))):this.toggleDropdown()},this.handleDropdownToggle=()=>{this.toggleDropdown()},this.toggleDropdown=()=>{this.isOpen=!this.isOpen,this.isOpen?(this.focusedIndex=-1,this.scrollToFocusedOption()):this.focusedIndex=-1},this.handleOptionClick=(e,t)=>{this.selectOption(e,t),this.isOpen=!1},this.selectOption=(e,t)=>{var i;try{if(!Array.isArray(this.options))return console.log("Options array is not valid, initializing empty array"),void(this.options=[]);this.options=this.options.map(((e,i)=>Object.assign(Object.assign({},e),{selected:i===t}))),this.selectedOption=e.labelText,this.clearError(),null===(i=this.handleOptionSelect)||void 0===i||i.call(this,e,t),this.dispatchEvent(new CustomEvent("bds-dropdown-option-select",{bubbles:!0,detail:{option:e,index:t,selectedOption:e.labelText}}))}catch(e){this.handleError(e,"Failed to select option")}},this.handleKeyDown=e=>{if(this.isOpen){if(Array.isArray(this.options)&&0!==this.options.length)switch(e.key){case"Escape":e.preventDefault(),this.isOpen=!1,this.focusedIndex=-1;break;case"ArrowDown":e.preventDefault(),-1===this.focusedIndex?this.focusedIndex=0:this.focusedIndex=Math.min(this.focusedIndex+1,this.options.length-1),this.scrollToFocusedOption();break;case"ArrowUp":e.preventDefault(),-1===this.focusedIndex?this.focusedIndex=this.options.length-1:this.focusedIndex=Math.max(this.focusedIndex-1,0),this.scrollToFocusedOption();break;case"Enter":case" ":e.preventDefault(),this.focusedIndex>=0&&this.focusedIndex<this.options.length&&(this.selectOption(this.options[this.focusedIndex],this.focusedIndex),this.isOpen=!1);break;case"Home":e.preventDefault(),this.focusedIndex=0,this.scrollToFocusedOption();break;case"End":e.preventDefault(),this.focusedIndex=this.options.length-1,this.scrollToFocusedOption()}}else"Enter"!==e.key&&" "!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),this.isOpen=!0,this.focusedIndex=-1,this.scrollToFocusedOption())},this.handleClickOutside=e=>{if(this.isOpen){e.composedPath().includes(this)||(this.isOpen=!1,this.focusedIndex=-1)}},this.handleScrimClick=()=>{this.isOpen=!1,this.focusedIndex=-1},this.handleOptionHover=e=>{this.focusedIndex=e},this.handleMobileHeaderClose=()=>{this.isOpen=!1,this.focusedIndex=-1}}getDefaultConfiguration(){return{optionFontSize:"var(--bds-size-font-functional-label-medium)",optionBorderStyle:"var(--bds-size-line-weight-none)",selectedOptionLeftBorderWidth:"var(--bds-size-line-weight-small)",selectedOptionBorderColor:"var(--bds-color-functional-supplemental-rio-selection)",showMobileScrim:!1,mobileScrimOpacity:"0",showMobileHeader:!1}}getConfigurationOverrides(){return[{targeting:{devicetype:"mobile"},overrides:{optionFontSize:"var(--bds-size-font-functional-label-large)",optionBorderStyle:"var(--bds-size-line-weight-small) solid var(--bds-color-functional-neutral-outline-variant)",selectedOptionLeftBorderWidth:"var(--bds-size-line-weight-large)",selectedOptionBorderColor:"var(--bds-color-functional-supplemental-rio-selection)",showMobileScrim:!0,mobileScrimOpacity:"0.6",showMobileHeader:!0}}]}get displayText(){if(!this.selectedOption&&Array.isArray(this.options)&&this.options.length>0){const e=this.options.find((e=>e.selected));if(e)return e.labelText}return this.selectedOption||this.labelText}clearError(){this.hasError=!1,this.errorMessage=void 0}setError(e){this.hasError=!0,this.errorMessage=e}handleError(e,t){var i;this.hasError=!0,this.errorMessage=e.message||t;try{null===(i=this.onError)||void 0===i||i.call(this,e)}catch(e){console.error("Error in onError callback:",e)}this.dispatchEvent(new CustomEvent("bds-dropdown-error",{bubbles:!0,detail:{error:e,message:this.errorMessage}}))}scrollToFocusedOption(){this.updateComplete.then((()=>{var e;if(!Array.isArray(this.options)||0===this.options.length)return;let t=this.focusedIndex;if(-1===t&&(t=this.options.findIndex((e=>e.selected)),-1===t&&this.selectedOption&&(t=this.options.findIndex((e=>e.labelText===this.selectedOption)))),t>=0){const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`[data-option-index="${t}"]`);null==i||i.scrollIntoView({block:"nearest"})}}))}connectedCallback(){var e;null===(e=super.connectedCallback)||void 0===e||e.call(this),document.addEventListener("click",this.handleClickOutside)}disconnectedCallback(){var e;null===(e=super.disconnectedCallback)||void 0===e||e.call(this),document.removeEventListener("click",this.handleClickOutside)}renderButton(e){const t={"dropdown-button":!0,"split-main":this.isSplit,[e]:!0,"is-open":this.isOpen,"has-error":this.hasError};return G`
            <button
                class=${Xe(t)}
                style=${Ke({})}
                @click=${this.handleButtonClick}
                @keydown=${this.handleKeyDown}
                aria-label=${$t(this.accessibilityLabel)}
                aria-expanded=${this.isOpen}
                aria-haspopup="listbox"
                aria-controls="dropdown-menu"
                ?disabled=${!Array.isArray(this.options)||0===this.options.length}
                tabindex="0">
                <span class="button-text">${this.displayText}</span>
                ${this.isSplit?Q:G`
                          <bds-icon
                              iconName=${this.isOpen?"chevron-up.svg":"chevron-down.svg"}
                              iconSize=${"small"===this.buttonSize?"14px":"18px"}
                              iconColor=${0===this.options.length?"var(--bds-color-functional-utils-on-surface-inactive)":"var(--bds-color-functional-neutral-outline-bright)"}
                              class="dropdown-arrow"></bds-icon>
                      `}
            </button>
        `}renderSplitToggle(e){if(!this.isSplit)return Q;const t={"dropdown-toggle":!0,[e]:!0,"is-open":this.isOpen,"has-error":this.hasError};return G`
            <button
                class=${Xe(t)}
                @click=${this.handleDropdownToggle}
                @keydown=${this.handleKeyDown}
                aria-label="Open dropdown menu"
                aria-expanded=${this.isOpen}
                aria-haspopup="listbox"
                aria-controls="dropdown-menu"
                ?disabled=${!Array.isArray(this.options)||0===this.options.length}
                tabindex="0">
                <bds-icon
                    iconName=${this.isOpen?"chevron-up.svg":"chevron-down.svg"}
                    iconSize=${"small"===this.buttonSize?"14px":"18px"}
                    iconColor=${0===this.options.length?"var(--bds-color-functional-utils-on-surface-inactive)":"var(--bds-color-functional-neutral-outline-bright)"}
                    class="dropdown-arrow"></bds-icon>
            </button>
        `}renderOption(e,t,i){const o=this.getRenderConfiguration(),a={"dropdown-option":!0,"has-image":this.hasImages&&!!e.imageSource,"is-selected":e.selected,"is-focused":this.focusedIndex===t,[i]:!0},r={"font-size":o.optionFontSize,border:o.optionBorderStyle,"border-left-width":e.selected?o.selectedOptionLeftBorderWidth:void 0,"border-color":e.selected?o.selectedOptionBorderColor:void 0};return G`
            <div
                id="dropdown-option-${t}"
                class=${Xe(a)}
                style=${Ke(r)}
                data-option-index=${t}
                @click=${()=>this.handleOptionClick(e,t)}
                @mouseenter=${()=>this.handleOptionHover(t)}
                role="option"
                aria-selected=${e.selected}
                tabindex="-1">
                ${this.hasImages&&e.imageSource?G`
                          <img
                              src=${e.imageSource}
                              alt=""
                              class="option-image"
                              style=${Ke({width:this.optionImageWidth,height:this.optionImageHeight})}
                              loading="lazy" />
                      `:Q}
                <span class="option-text">${e.labelText}</span>
            </div>
        `}renderMobileHeader(){var e;const t=this.getRenderConfiguration();if(!this.isOpen||!t.showMobileHeader)return Q;const i=ui("bds_dropdown_choose_label",null===(e=this.renderContext)||void 0===e?void 0:e.locale),o=this.mobileHeaderTitle||i;return G`
            <div class="dropdown-mobile-header">
                <div class="mobile-header-content">
                    <span class="mobile-header-title">${o}</span>
                    <button
                        class="mobile-header-close"
                        @click=${this.handleMobileHeaderClose}
                        aria-label="Close dropdown"
                        tabindex="0">
                        <bds-icon
                            iconName="close.svg"
                            iconSize="16px"
                            iconColor="var(--bds-color-functional-neutral-on-surface)"
                            class="close-icon"></bds-icon>
                    </button>
                </div>
            </div>
        `}renderScrim(){const e=this.getRenderConfiguration();if(!this.isOpen||!e.showMobileScrim)return Q;const t={opacity:e.mobileScrimOpacity};return G`
            <div
                class="dropdown-scrim"
                style=${Ke(t)}
                @click=${this.handleScrimClick}
                aria-hidden="true"></div>
        `}renderDropdownMenu(e){if(!this.isOpen)return Q;if(!Array.isArray(this.options))return Q;const t={"dropdown-menu":!0,"has-mobile-header":this.getRenderConfiguration().showMobileHeader,[e]:!0},i={"max-height":this.dropdownMaxHeight};return G`
            <div
                class=${Xe(t)}
                id="dropdown-menu"
                style=${Ke(i)}
                role="listbox"
                aria-label=${this.accessibilityLabel||"Dropdown options"}
                aria-activedescendant=${this.focusedIndex>=0?`dropdown-option-${this.focusedIndex}`:Q}>
                ${this.renderMobileHeader()}
                <div class="dropdown-options">
                    ${this.options.map(((t,i)=>this.renderOption(t,i,e)))}
                </div>
            </div>
        `}render(){const e="small"===this.buttonSize?"size-small":"size-base",t={"dropdown-container":!0,"is-split":this.isSplit,"is-open":this.isOpen,"has-images":this.hasImages};return G`
            <div class=${Xe(t)}>
                <div class="dropdown-button-group" style=${Ke({})}>
                    ${this.renderButton(e)} ${this.renderSplitToggle(e)}
                </div>
                ${this.hasError&&this.errorMessage?G`
                          <div class="dropdown-error-message" role="alert" aria-live="polite">
                              ${this.errorMessage}
                          </div>
                      `:Q}
                ${this.renderScrim()} ${this.renderDropdownMenu(e)}
            </div>
        `}},e.Dropdown.styles=Ho,t([ye({context:$e,subscribe:!0})],e.Dropdown.prototype,"renderContext",void 0),t([ke({type:String})],e.Dropdown.prototype,"buttonSize",void 0),t([ke({type:String})],e.Dropdown.prototype,"dropdownMaxHeight",void 0),t([ke({type:Boolean})],e.Dropdown.prototype,"hasImages",void 0),t([ke({type:String})],e.Dropdown.prototype,"optionImageWidth",void 0),t([ke({type:String})],e.Dropdown.prototype,"optionImageHeight",void 0),t([ke({type:String})],e.Dropdown.prototype,"labelText",void 0),t([ke({type:String})],e.Dropdown.prototype,"selectedOption",void 0),t([ke({type:Boolean})],e.Dropdown.prototype,"isSplit",void 0),t([ke({type:Array})],e.Dropdown.prototype,"options",void 0),t([ke({type:String})],e.Dropdown.prototype,"accessibilityLabel",void 0),t([ke({type:String})],e.Dropdown.prototype,"mobileHeaderTitle",void 0),t([ke()],e.Dropdown.prototype,"handleOptionSelect",void 0),t([ke()],e.Dropdown.prototype,"onButtonClick",void 0),t([ke({type:Boolean})],e.Dropdown.prototype,"hasError",void 0),t([ke({type:String})],e.Dropdown.prototype,"errorMessage",void 0),t([ke()],e.Dropdown.prototype,"onError",void 0),t([Ce()],e.Dropdown.prototype,"isOpen",void 0),t([Ce()],e.Dropdown.prototype,"focusedIndex",void 0),e.Dropdown=t([ze("bds-dropdown"),He],e.Dropdown);var Uo=v`
    .savings-percentage-overlay {
        background-color: var(--bds-mosaic-faceout-color-deal-percent-background);
        border: 1px solid var(--bds-mosaic-faceout-color-deal-percent-border);
        border-radius: var(--bds-mosaic-faceout-size-deal-percent-border-radius);
        color: var(--bds-mosaic-faceout-color-deal-percent-text);
        font-family: var(--bds-mosaic-faceout-font-family-deal-percent-text);
        font-size: var(--bds-mosaic-faceout-size-deal-percent-text);
        font-weight: var(--bds-mosaic-faceout-font-weight-deal-percent-text);
        line-height: var(--bds-mosaic-faceout-size-deal-percent-line-height);
        padding: 1px 8px;
        text-decoration: var(--bds-mosaic-faceout-font-decoration-deal-percent-text);
    }
`;e.SavingsPercentageOverlay=class extends be{render(){return G`<span class="savings-percentage-overlay">
            ${this.savingsPercentageDisplayString}
        </span>`}},e.SavingsPercentageOverlay.styles=Uo,t([ke({type:String})],e.SavingsPercentageOverlay.prototype,"savingsPercentageDisplayString",void 0),e.SavingsPercentageOverlay=t([ze("bds-savings-percentage-overlay"),He],e.SavingsPercentageOverlay);var No=[v`
    .card-footer.standard {
        color: var(--bds-color-functional-neutral-on-surface);
        font-family: var(--bds-font-family-functional-body);
        font-size: var(--bds-size-font-functional-body-small);
        font-style: normal;
        font-weight: var(--bds-card-font-weight-footer);
        line-height: var(--bds-size-line-height-functional-body-small);
        text-decoration: none;

        ${Lt(1)};
    }

    /** underline the anchor only when it is standard layout **/
    a.card-footer.standard {
        color: var(--bds-link-color-text-active);
        text-decoration: underline;
    }

    a.card-footer.standard:hover {
        color: var(--bds-link-color-text-hover);
    }

    .card-footer.fullWidth {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        color: var(--bds-link-color-text-active);
        font-family: var(--bds-font-family-functional-body);
        font-size: var(--bds-size-font-functional-body-medium);
        font-style: normal;
        font-weight: var(--bds-card-font-weight-footer);
        line-height: var(--bds-size-line-height-functional-body-medium);
        text-decoration: none;
    }

    .card-footer-icon {
        display: flex;
        height: 18px;
        padding: 9px 0;
        align-items: center;
        gap: 10px;
    }
`,qt()];e.CardFooter=class extends Ne{constructor(){super(...arguments),this.layout="standard"}render(){return this.label?this.linkUrl?G` <div>
                <a
                    href="${$t(this.linkUrl)}"
                    class="card-footer ${this.layout}"
                    role="link"
                    aria-label=${$t(this.label)}>
                    ${this.label}
                    ${zt("fullWidth"===this.layout,(()=>G`
                            <bds-icon
                                class="card-footer-icon"
                                iconName="${hi()?"chevron-left.svg":"chevron-right.svg"}"
                                iconSize="14px"
                                iconColor="var(--bds-color-functional-core-primary-interactive)">
                            </bds-icon>
                        `))}
                </a>
            </div>`:G` <div
                class="card-footer ${this.layout}"
                role="text"
                aria-label="${this.label}">
                ${this.label}
            </div>`:Q}},e.CardFooter.styles=No,t([ke({type:String})],e.CardFooter.prototype,"label",void 0),t([ke({type:String})],e.CardFooter.prototype,"linkUrl",void 0),t([ke({type:String})],e.CardFooter.prototype,"layout",void 0),e.CardFooter=t([ze("bds-card-footer"),He],e.CardFooter);const jo=v`
    /** Carousel Container styles **/

    #carousel-container {
        position: relative;
    }

    .pagination-control-offset {
        padding: 0 var(--bds-size-spacing-small);
    }

    /* Carousel Scroller styles */

    #carousel-list {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
        overflow: scroll;
        scrollbar-width: none;
        list-style-type: none;
    }

    #carousel-list.fade-left-edge {
        mask-image: linear-gradient(to right, transparent, black 80px);
    }

    #carousel-list.fade-right-edge {
        mask-image: linear-gradient(to left, transparent, black 80px);
    }

    #carousel-list.fade-left-edge.fade-right-edge {
        mask-image: linear-gradient(to right, transparent, black 80px),
            linear-gradient(to left, transparent, black 80px);
        mask-composite: intersect; /* Ensures both gradients below work together */
    }

    @media (prefers-reduced-motion) {
        #carousel-list {
            scroll-behavior: auto;
        }
    }

    #carousel-list::-webkit-scrollbar {
        display: none;
    }

    .carousel-item {
        height: 100%;
    }
    
    /* Carousel Pagination Control Button styles */

    #pagination-button-left {
        left: 0;
    }

    #pagination-button-right {
        right: 0;
    }

    .pagination-button {
        background-color: var(--bds-color-functional-neutral-surface);
        border-color: var(--bds-color-functional-neutral-outline);
        border-width: var(--bds-size-line-weight-small);
        border-radius: var(--bds-size-radius-small);
        position: absolute;
        z-index: 2;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(15, 17, 17, 25%); /* TODO Create design token for elevation in BDS */
    }

    .pagination-button-icon {
        vertical-align: middle;
    }

    .hide-pagination-button {
        opacity: 0;
        pointer-events: none;
    }

    .pagination-button-animation {
        transition: opacity 400ms ease-in-out;
    }

    @media (prefers-reduced-motion) {
        .pagination-button-animation {
            transition: none;
        }
    }
`;e.Carousel=class extends et{getDefaultConfiguration(){return{defaultShouldShowPaginationButtons:!0,paginationButtonSize:44,shouldEdgesFade:!1,carouselItemsGap:"20px",enableFullBleedScrolling:!1}}getConfigurationOverrides(){return[{targeting:{layout:"standard-carousel"},overrides:{defaultShouldShowPaginationButtons:!1,paginationButtonSize:44,shouldEdgesFade:!1,carouselItemsGap:"20px"}},{targeting:{layout:"standard-carousel",devicetype:"default"},overrides:{defaultShouldShowPaginationButtons:!0}},{targeting:{layout:"standard-carousel",devicetype:"desktop"},overrides:{defaultShouldShowPaginationButtons:!0}},{targeting:{layout:"standard-carousel",devicetype:"tablet",operatingsystem:"iOS",hostapplication:"default"},overrides:{defaultShouldShowPaginationButtons:!0}},{targeting:{layout:"small-carousel"},overrides:{paginationButtonSize:30,shouldEdgesFade:!0,carouselItemsGap:"8px"}},{targeting:{layout:"small-carousel",devicetype:"mobile"},overrides:{defaultShouldShowPaginationButtons:!1,shouldEdgesFade:!1}},{targeting:{devicetype:"mobile"},overrides:{enableFullBleedScrolling:!0}}]}constructor(){super(),this.scrollingContainerRef=wt(),this.listType="unordered",this.overridePaginationButtonVisibility="default",this.disablePaginationControlOffset=!1,this.alwaysFadeEdges=!1,this.saveScrollDistance=!1,this.appliedPadding=0,this.hidePrevPageButton=!0,this.hideNextPageButton=!0,this.layout="standard-carousel",this.ancestorAppliedPadding=0,this.carouselItems=[],this.paginationControlAndItemGap=8,this.fadeEdgeWidth=80,this.enablePaginationAnimation=!1,this.leftIntersectItems=new Set,this.rightIntersectItems=new Set,this.carouselResizeObserver=new ResizeObserver((()=>{this.ancestorAppliedPadding=this.getBoundingClientRect().left})),this.carouselListResizeObserver=new ResizeObserver((()=>{this.layout=this.carouselList.clientHeight<=80?"small-carousel":"standard-carousel",this.attachIntersectionObserversToPaginationOverlapArea()}))}render(){const e=this.getRenderConfiguration(this.layout),t=this.shouldShowPaginationButtons(e.defaultShouldShowPaginationButtons),i=this.alwaysFadeEdges||e.shouldEdgesFade,o=zt(t,(()=>G`${this.buildPaginationButton("left",hi()?"next":"previous")}`)),a=zt(t,(()=>G`${this.buildPaginationButton("right",hi()?"previous":"next")}`)),r={"pagination-control-offset":this.shouldShowPaginationButtons(e.defaultShouldShowPaginationButtons)&&!this.disablePaginationControlOffset},s=Object.assign({gap:this.itemsGap||e.carouselItemsGap},e.enableFullBleedScrolling&&(this.appliedPadding?{"padding-left":`${this.appliedPadding}px`,"padding-right":`${this.appliedPadding}px`}:{"padding-left":`${this.ancestorAppliedPadding}px`,"padding-right":`${this.ancestorAppliedPadding}px`,"margin-left":-this.ancestorAppliedPadding+"px","margin-right":-this.ancestorAppliedPadding+"px"})),n={"fade-left-edge":i&&(hi()?!this.hideNextPageButton:!this.hidePrevPageButton),"fade-right-edge":i&&(hi()?!this.hidePrevPageButton:!this.hideNextPageButton)},l="ordered"===this.listType?so`ol`:so`ul`;return lo`
            <div id="carousel-container" class="${Xe(r)}">
                ${o}
                <${l} id="carousel-list"
                    role="list"
                    ${St(this.scrollingContainerRef)}
                    style=${Ke(s)}
                    class=${Xe(n)}
                    aria-label="${this.carouselAriaLabel}"
                    @scroll=${this.handleScroll}
                    @scrollend=${this.handleScrollEnd}
                    @keyboardfocus=${this.handleKeyboardFocus}>
                    <slot @slotchange=${this.initializeCarousel}></slot>
                </${l}>
                ${a}
            </div>`}shouldShowPaginationButtons(e){return"default"===this.overridePaginationButtonVisibility?e:"alwaysHide"!==this.overridePaginationButtonVisibility&&("alwaysShow"===this.overridePaginationButtonVisibility||e)}handleKeyboardFocus(t){if(t.target instanceof e.CarouselItem){const e=t.target;this.leftIntersectItems.has(e)?this.handleLeftNav():this.rightIntersectItems.has(e)&&this.handleRightNav()}}handleScroll(){this.enablePaginationAnimation=!0,this.handleScrollCallback&&this.handleScrollCallback()}handleScrollEnd(){if(this.saveScrollDistance){const e=this.carouselList.scrollLeft;this.setAttribute("data-scroll-distance",e.toString())}}firstUpdated(){this.initializeCarousel()}initializeCarousel(){var e;const t=this.getAttribute("data-scroll-distance");this.saveScrollDistance&&t&&this.restoreScrollPosition(t),this.carouselItems=Array.from(this.querySelectorAll("bds-carousel-item")),(null===(e=this.carouselItems)||void 0===e?void 0:e.length)&&(this.disconnectAllObservers(),this.shouldShowPaginationButtons(this.getRenderConfiguration(this.layout).defaultShouldShowPaginationButtons)&&(this.attachIntersectionObserversToFirstAndLastItem(),this.attachIntersectionObserversToPaginationOverlapArea()),this.carouselResizeObserver.observe(this),this.carouselListResizeObserver.observe(this.carouselList))}restoreScrollPosition(e){return i(this,void 0,void 0,(function*(){if(!e)return;const t=parseFloat(e);t&&(yield this.updateComplete,this.carouselList.scrollLeft=t)}))}buildPaginationButton(e,t){var i,o;const a="left"===e?"chevron-left.svg":"chevron-right.svg",r=this.getRenderConfiguration(this.layout).paginationButtonSize,s="previous"===t?ui("bds_previous_set_of_slides",null===(i=this.renderContext)||void 0===i?void 0:i.locale):ui("bds_next_set_of_slides",null===(o=this.renderContext)||void 0===o?void 0:o.locale),n="previous"===t?this.hidePrevPageButton:this.hideNextPageButton,l={"hide-pagination-button":n,"pagination-button-animation":this.enablePaginationAnimation};return G`
            <button
                id="pagination-button-${e}"
                style="${Ke({width:`${r}px`,height:`${r}px`,top:`calc(50% - ${r/2}px)`})}"
                class="pagination-button ${Xe(l)}"
                aria-hidden="${n}"
                ?disabled="${n}"
                tabindex="-1"
                aria-label="${s}"
                @click=${"left"===e?this.handleLeftNav:this.handleRightNav}>
                <bds-icon
                    aria-hidden="true"
                    role="presentation"
                    class="pagination-button-icon"
                    iconName="${a}"
                    iconSize="15px"
                    iconColor="var(--bds-color-functional-neutral-on-surface-variant)">
                </bds-icon>
            </button>
        `}handleLeftNav(){var e;const t=this.getPrecedingOrFollowingElement(this.leftIntersectItems,hi()?"preceding":"following");let i;i=this.getRenderConfiguration(this.layout).shouldEdgesFade?this.carouselList.getBoundingClientRect().right-this.fadeEdgeWidth:(null===(e=this.rightPaginationButton)||void 0===e?void 0:e.getBoundingClientRect().left)-this.paginationControlAndItemGap;const o=t.getBoundingClientRect().right-i;this.scrollCarousel(o)}handleRightNav(){var e;const t=this.getPrecedingOrFollowingElement(this.rightIntersectItems,hi()?"following":"preceding");let i;i=this.getRenderConfiguration(this.layout).shouldEdgesFade?this.carouselList.getBoundingClientRect().left+this.fadeEdgeWidth:(null===(e=this.leftPaginationButton)||void 0===e?void 0:e.getBoundingClientRect().right)+this.paginationControlAndItemGap;const o=t.getBoundingClientRect().left-i;this.scrollCarousel(o)}scrollCarousel(e){window.matchMedia("(prefers-reduced-motion: reduce)").matches?this.carouselList.scrollBy(e,0):this.easeInOutScroll(e)}easeInOutScroll(e){const t=this.carouselList.scrollLeft,i=performance.now(),o=a=>{const r=a-i,s=Math.min(r/400,1),n=(e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1)(s);this.carouselList.scrollLeft=t+e*n,s<1&&requestAnimationFrame(o)};requestAnimationFrame(o)}getPrecedingOrFollowingElement(e,t){const i=[...e];return"preceding"===t?2===i.length&&i[0].compareDocumentPosition(i[1])===Node.DOCUMENT_POSITION_PRECEDING?i[1]:i[0]:2===i.length&&i[0].compareDocumentPosition(i[1])===Node.DOCUMENT_POSITION_FOLLOWING?i[1]:i[0]}attachIntersectionObserversToFirstAndLastItem(){const e={root:this.carouselList,threshold:1,rootMargin:"0px 1px 0px 1px"};this.firstCarouselItemIntersectionObserver=new IntersectionObserver((e=>{this.hidePrevPageButton=1===e[0].intersectionRatio}),e),this.firstCarouselItemIntersectionObserver.observe(this.carouselItems[0]),this.lastCarouselItemIntersectionObserver=new IntersectionObserver((e=>{this.hideNextPageButton=1===e[0].intersectionRatio}),e),this.lastCarouselItemIntersectionObserver.observe(this.carouselItems[this.carouselItems.length-1])}attachIntersectionObserversToPaginationOverlapArea(){var e,t;null===(e=this.leftOverlapIntersectionObserver)||void 0===e||e.disconnect(),null===(t=this.rightOverlapIntersectionObserver)||void 0===t||t.disconnect();const i=this.getRenderConfiguration(this.layout),o={root:this.carouselList,threshold:.001},a=parseInt(getComputedStyle(this).getPropertyValue("--bds-size-spacing-small")),r=i.shouldEdgesFade?this.fadeEdgeWidth:i.paginationButtonSize-a,s=-(this.carouselList.clientWidth-r),n=Object.assign(Object.assign({},o),{rootMargin:`0px ${s}px 0px 0px`}),l=Object.assign(Object.assign({},o),{rootMargin:`0px 0px 0px ${s}px`}),d=(e,t)=>{e.forEach((e=>{const i=e.target;t.delete(i),e.isIntersecting&&t.add(i)}))},c=new IntersectionObserver((e=>d(e,this.leftIntersectItems)),n);this.leftOverlapIntersectionObserver=c,this.carouselItems.forEach((e=>c.observe(e)));const u=new IntersectionObserver((e=>d(e,this.rightIntersectItems)),l);this.rightOverlapIntersectionObserver=u,this.carouselItems.forEach((e=>u.observe(e)))}disconnectAllObservers(){var e,t,i,o;this.carouselResizeObserver.disconnect(),this.carouselListResizeObserver.disconnect(),null===(e=this.firstCarouselItemIntersectionObserver)||void 0===e||e.disconnect(),null===(t=this.lastCarouselItemIntersectionObserver)||void 0===t||t.disconnect(),null===(i=this.leftOverlapIntersectionObserver)||void 0===i||i.disconnect(),null===(o=this.rightOverlapIntersectionObserver)||void 0===o||o.disconnect()}disconnectedCallback(){super.disconnectedCallback(),this.disconnectAllObservers()}},e.Carousel.styles=jo,t([ke({type:String})],e.Carousel.prototype,"listType",void 0),t([ke({type:String})],e.Carousel.prototype,"overridePaginationButtonVisibility",void 0),t([ke({type:Boolean})],e.Carousel.prototype,"disablePaginationControlOffset",void 0),t([ke({type:String})],e.Carousel.prototype,"itemsGap",void 0),t([ke({type:String})],e.Carousel.prototype,"carouselAriaLabel",void 0),t([ke({type:Boolean})],e.Carousel.prototype,"alwaysFadeEdges",void 0),t([ke({type:Object})],e.Carousel.prototype,"csaAttributes",void 0),t([ke({type:Object})],e.Carousel.prototype,"handleScrollCallback",void 0),t([ke({type:Boolean})],e.Carousel.prototype,"saveScrollDistance",void 0),t([ke({type:Number})],e.Carousel.prototype,"appliedPadding",void 0),t([Ce()],e.Carousel.prototype,"hidePrevPageButton",void 0),t([Ce()],e.Carousel.prototype,"hideNextPageButton",void 0),t([Ce()],e.Carousel.prototype,"layout",void 0),t([Ce()],e.Carousel.prototype,"ancestorAppliedPadding",void 0),t([Se("#carousel-list")],e.Carousel.prototype,"carouselList",void 0),t([Se("#pagination-button-left")],e.Carousel.prototype,"leftPaginationButton",void 0),t([Se("#pagination-button-right")],e.Carousel.prototype,"rightPaginationButton",void 0),e.Carousel=t([ze("bds-carousel"),He],e.Carousel),e.CarouselItem=class extends be{constructor(){super(...arguments),this.isMouseDown=!1}handleMouseDown(){this.isMouseDown=!0}handleMouseUp(){this.isMouseDown=!1}handleFocusIn(){this.isMouseDown||this.dispatchEvent(new CustomEvent("keyboardfocus",{bubbles:!0,composed:!0}))}render(){return G`
            <li
                class="carousel-item"
                @mousedown=${this.handleMouseDown}
                @mouseup=${this.handleMouseUp}
                @focusin=${this.handleFocusIn}>
                <slot></slot>
            </li>
        `}},e.CarouselItem.styles=jo,e.CarouselItem=t([ze("bds-carousel-item")],e.CarouselItem);var Vo=[v`
    .spinner-container {
        position: relative;
    }

    .spinner-icon {
        animation: bds-spinner-rotate 1s linear infinite;
        display: block;
    }

    @keyframes bds-spinner-rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    /* CSS fallback spinner when image fails to load */
    .spinner-container.spinner-fallback .spinner-icon {
        opacity: 0;
    }

    .spinner-container.spinner-fallback::before {
        content: '';
        position: absolute;
        width: inherit;
        height: inherit;
        border: var(--bds-size-spacing-x-small) solid
            var(--bds-color-functional-neutral-outline-variant);
        border-top: var(--bds-size-spacing-x-small) solid
            var(--bds-color-functional-core-primary-interactive);
        border-radius: var(--bds-size-radius-circle);
        opacity: 1;
        animation: bds-spinner-rotate 1s linear infinite;
        box-sizing: border-box;
    }

    /* Small spinner fallback */
    .spinner-container[data-size='small'].spinner-fallback::before {
        border-width: var(--bds-size-spacing-2x-small);
    }

    /* Large spinner fallback */
    .spinner-container[data-size='large'].spinner-fallback::before {
        border-width: var(--bds-size-spacing-small);
    }

    /* Respect user preference for reduced motion */
    @media (prefers-reduced-motion: reduce) {
        .spinner-icon {
            animation: none;
        }

        .spinner-container.spinner-fallback::before {
            animation: none;
        }
    }
`,qt()];const Wo={small:"small",medium:"medium",large:"large"},Go={inline:"inline",block:"block"};e.Spinner=class extends be{constructor(){super(...arguments),this.sizeConfig={[Wo.small]:{icon:"spinner-small.svg",dimension:"16px"},[Wo.medium]:{icon:"spinner-medium.svg",dimension:"32px"},[Wo.large]:{icon:"spinner-large.svg",dimension:"64px"}},this.size=Wo.medium,this.ariaRole="status",this.display=Go.inline,this.hasImageError=!1}getValidatedSize(){return this.size in this.sizeConfig?this.size:Wo.medium}getValidatedDisplay(){return this.display in Go?this.display:Go.inline}getValidatedAriaRole(){return this.ariaRole&&["status","progressbar","img"].includes(this.ariaRole)?this.ariaRole:"status"}getIconName(){const e=this.getValidatedSize();return this.sizeConfig[e].icon}getDimensions(){const e=this.getValidatedSize();return this.sizeConfig[e].dimension}get displayStyles(){return"block"===this.getValidatedDisplay()?{display:"flex",alignItems:"center",justifyContent:"center"}:{display:"inline-block",verticalAlign:"middle"}}connectedCallback(){super.connectedCallback(),Object.assign(this.style,this.displayStyles)}willUpdate(e){e.has("display")&&Object.assign(this.style,this.displayStyles)}handleImageError(){this.hasImageError=!0}render(){var e;const t=this.getIconName(),i=this.getDimensions(),o=ui("bds_spinner_loading_label",null===(e=this.renderContext)||void 0===e?void 0:e.locale);return G`
            <div
                class="spinner-container ${this.hasImageError?"spinner-fallback":""}"
                role="${this.getValidatedAriaRole()}"
                aria-live="polite"
                data-size="${this.getValidatedSize()}"
                style="width: ${i}; height: ${i};">
                <img
                    class="spinner-icon"
                    src="${bt(t)}"
                    aria-hidden="true"
                    @error="${this.handleImageError}" />
                <span class="offscreen">${o}</span>
            </div>
        `}},e.Spinner.styles=Vo,t([ye({context:$e,subscribe:!0})],e.Spinner.prototype,"renderContext",void 0),t([ke({type:String})],e.Spinner.prototype,"size",void 0),t([ke({type:String})],e.Spinner.prototype,"ariaRole",void 0),t([ke({type:String,reflect:!0})],e.Spinner.prototype,"display",void 0),t([ke({type:Boolean})],e.Spinner.prototype,"hasImageError",void 0),e.Spinner=t([ze("bds-spinner")],e.Spinner);var qo=v`
    ${qt()}

    :host {
        position: relative;
        display: contents;
    }

    .modal-scrim {
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--bds-size-spacing-large);
        box-sizing: border-box;
    }

    .modal-scrim.translucent {
        background-color: var(--bds-color-functional-supplemental-scrim);
    }

    .modal-container {
        background-color: var(--bds-color-functional-neutral-surface);
        border-radius: var(--bds-size-radius-small);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-neutral-outline-variant);
        width: auto;
        min-width: 30vw;
        min-height: 30vh;
        max-width: 90vw;
        max-height: 90vh;
        box-shadow: 0 8px 32px rgba(15, 17, 17, 20%); /* Replace with BDS token */
        font-family: var(--bds-font-family-functional-body);
        color: var(--bds-color-functional-neutral-on-surface);
        display: flex;
        flex-direction: column;
        outline: none;
        overflow: hidden;
        position: relative;
    }

    .focus-sentinel-start,
    .focus-sentinel-end {
        position: absolute;
        width: 0;
        height: 0;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
    }

    .focus-sentinel-start {
        top: 0;
        left: 0;
    }

    .focus-sentinel-end {
        bottom: 0;
        right: 0;
    }

    .modal-header {
        background-color: var(--bds-color-functional-neutral-surface-container);
        padding: var(--bds-size-utils-padding-10) var(--bds-size-utils-padding-20);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-neutral-outline-variant);
        flex-shrink: 0;
    }

    .modal-title {
        font-size: var(--bds-size-font-functional-title-medium);
        font-weight: var(--bds-font-weight-functional-title);
        line-height: var(--bds-size-line-height-functional-title-medium);
        margin: var(--bds-size-spacing-none);
        padding: var(--bds-size-spacing-none);
        color: var(--bds-color-functional-neutral-on-surface);
    }

    .modal-close-button {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: var(--bds-size-spacing-2x-small);
        border-radius: var(--bds-size-radius-small);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        margin-left: auto;
    }

    .modal-close-button:hover {
        background-color: var(--bds-color-functional-utils-overlay-alpha-1);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-utils-overlay-alpha-1);
    }

    .modal-close-button:focus {
        outline: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-utils-focus-indicator);
        outline-offset: var(--bds-size-spacing-2x-small);
    }

    .modal-content {
        padding: var(--bds-size-utils-padding-10) var(--bds-size-utils-padding-20);
        font-size: var(--bds-size-font-functional-body-small);
        line-height: var(--bds-size-line-height-functional-body-small);
        font-weight: var(--bds-font-weight-functional-body);
        color: var(--bds-color-functional-neutral-on-surface);
        overflow-y: auto;
        flex-grow: 1;
    }

    .modal-footer {
        padding: var(--bds-size-spacing-none) var(--bds-size-utils-padding-20)
            var(--bds-size-utils-padding-20) var(--bds-size-utils-padding-20);
        display: flex;
        gap: var(--bds-size-spacing-x-small);
        justify-content: flex-end;
        flex-shrink: 0;
    }

    /* Responsive adjustments for smaller screens */
    @media (max-width: 480px) {
        .modal-scrim {
            padding: var(--bds-size-spacing-medium);
        }

        .modal-container {
            min-width: unset;
            width: 100%;
            max-height: 95vh;
        }

        .modal-header {
            padding: var(--bds-size-spacing-small) var(--bds-size-spacing-medium);
        }

        .modal-content {
            padding: var(--bds-size-spacing-small) var(--bds-size-spacing-medium)
                var(--bds-size-spacing-medium) var(--bds-size-spacing-medium);
        }

        .modal-footer {
            padding: var(--bds-size-spacing-none) var(--bds-size-spacing-medium)
                var(--bds-size-spacing-medium) var(--bds-size-spacing-medium);
            flex-direction: column;
            gap: var(--bds-size-spacing-small);
        }
    }
`;e.Modal=class extends Ne{constructor(){super(...arguments),this.isOpen=!1,this.closeButton=!0,this.disableScrimClose=!1,this.ariaLabel="",this.previousActiveElement=null,this.handleOpenRequest=()=>{this.isOpen=!0,this.requestUpdate()},this.handleScrimClick=e=>{this.disableScrimClose||this.handleClose(e)},this.handleKeyDown=e=>{"Escape"===e.key&&(e.preventDefault(),this.handleClose(e))},this.handleStartSentinelFocus=()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".focus-sentinel-end"),i=this.getLastFocusableElement();i?i.focus():t&&t.focus()},this.handleEndSentinelFocus=()=>{var e,t;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".modal-close-button"),o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".focus-sentinel-start");i?i.focus():o&&o.focus()}}static get styles(){return[qo]}connectedCallback(){super.connectedCallback(),this.addEventListener("modal-open-request",this.handleOpenRequest)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("modal-open-request",this.handleOpenRequest),this.isOpen&&(document.body.style.overflow="")}handleOpen(){this.isOpen&&(this.previousActiveElement=document.activeElement,document.body.style.overflow="hidden",requestAnimationFrame((()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".modal-container");t instanceof HTMLElement&&t.focus()})))}handleClose(e){var t;this.isOpen&&(this.isOpen=!1,null===(t=this.onClose)||void 0===t||t.call(this,e))}getLastFocusableElement(){var e,t,i;const o=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("bds-borrow-button"),a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("bds-common-button");return o||(a||(null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".modal-close-button")))}updated(e){if(super.updated(e),e.has("isOpen"))if(this.isOpen)this.handleOpen();else{if(document.body.style.overflow="",this.previousActiveElement instanceof HTMLElement&&document.body.contains(this.previousActiveElement)){const e=this.previousActiveElement;requestAnimationFrame((()=>{e.focus()}))}this.previousActiveElement=null}}renderCloseButton(){return G`
            <button class="modal-close-button" aria-label="Close modal" @click=${this.handleClose}>
                <bds-icon
                    iconName="close.svg"
                    iconSize="16px"
                    iconColor="var(--bds-color-functional-neutral-on-surface)">
                </bds-icon>
            </button>
        `}renderHeader(){const e=!1!==this.closeButton;return this.headerTitle||e?G`
            <div class="modal-header">
                ${this.headerTitle?G` <h2 id="modal-title" class="modal-title">${this.headerTitle}</h2> `:Q}
                ${e?this.renderCloseButton():Q}
            </div>
        `:Q}renderContent(){return this.content?"string"==typeof this.content?G`<div class="modal-content">${Xt(this.content)}</div>`:Gt(this.content)?Wt(this.content)?Q:G`<div class="modal-content">
                <bds-rich-content .content=${this.content}></bds-rich-content>
            </div>`:Q:Q}renderFooter(){return this.primaryButtonText||this.secondaryButtonText?G`
            <div class="modal-footer">
                ${this.secondaryButtonText?G`
                          <bds-common-button
                              content=${this.secondaryButtonText}
                              emphasis="outlined"
                              .handleClick=${()=>{var e;return null===(e=this.onSecondaryClick)||void 0===e?void 0:e.call(this)}}>
                          </bds-common-button>
                      `:Q}
                ${this.primaryButtonText?G`
                          <bds-borrow-button
                              content=${this.primaryButtonText}
                              .handleClick=${()=>{var e;return null===(e=this.onPrimaryClick)||void 0===e?void 0:e.call(this)}}>
                          </bds-borrow-button>
                      `:Q}
            </div>
        `:Q}render(){var e,t;return this.isOpen?G`
            <slot></slot>
            <div class="modal-scrim translucent" @click=${this.handleScrimClick}>
                <div
                    class="modal-container ${null!==(t=null===(e=this.renderContext)||void 0===e?void 0:e.theme)&&void 0!==t?t:""}"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby=${$t(this.headerTitle?"modal-title":void 0)}
                    aria-label=${$t(this.ariaLabel)}
                    tabindex="-1"
                    @click=${e=>e.stopPropagation()}
                    @keydown=${this.handleKeyDown}>
                    <div
                        class="focus-sentinel-start"
                        tabindex="0"
                        @focus=${this.handleStartSentinelFocus}
                        aria-hidden="true"></div>
                    ${this.renderHeader()} ${this.renderContent()} ${this.renderFooter()}
                    <div
                        class="focus-sentinel-end"
                        tabindex="0"
                        @focus=${this.handleEndSentinelFocus}
                        aria-hidden="true"></div>
                </div>
            </div>
        `:G`<slot></slot>`}},t([ke({type:Boolean})],e.Modal.prototype,"isOpen",void 0),t([ke({type:String})],e.Modal.prototype,"headerTitle",void 0),t([ke({type:Object})],e.Modal.prototype,"content",void 0),t([ke({type:String})],e.Modal.prototype,"primaryButtonText",void 0),t([ke({type:String})],e.Modal.prototype,"secondaryButtonText",void 0),t([ke({type:Boolean})],e.Modal.prototype,"closeButton",void 0),t([ke({type:Boolean})],e.Modal.prototype,"disableScrimClose",void 0),t([ke({type:String})],e.Modal.prototype,"ariaLabel",void 0),t([ke()],e.Modal.prototype,"onPrimaryClick",void 0),t([ke()],e.Modal.prototype,"onSecondaryClick",void 0),t([ke()],e.Modal.prototype,"onClose",void 0),t([ye({context:$e,subscribe:!0})],e.Modal.prototype,"renderContext",void 0),e.Modal=t([ze("bds-modal"),He],e.Modal),e.ModalTrigger=class extends Ne{constructor(){super(...arguments),this.triggerEvent="click",this.openModal=e=>{this.dispatchEvent(new CustomEvent("modal-open-request",{bubbles:!0,composed:!0,detail:{triggerEvent:e}}))},this.handleMouseEnter=e=>{"hover"===this.triggerEvent&&this.openModal(e)},this.handleClick=e=>{"click"===this.triggerEvent&&this.openModal(e)},this.handleKeyDown=e=>{"click"!==this.triggerEvent||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.openModal(e))}}firstUpdated(e){super.firstUpdated(e),this.setAttribute("tabindex","0"),this.setAttribute("role","button"),this.setupEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClick),this.removeEventListener("mouseenter",this.handleMouseEnter),this.removeEventListener("keydown",this.handleKeyDown)}setupEventListeners(){this.addEventListener("click",this.handleClick),this.addEventListener("mouseenter",this.handleMouseEnter),this.addEventListener("keydown",this.handleKeyDown)}render(){return G`
            <slot> </slot>
            ${this.triggerIcon?G`
                      <bds-icon
                          iconName=${this.triggerIcon}
                          iconSize="16px"
                          iconColor="var(--bds-color-functional-neutral-on-surface)">
                      </bds-icon>
                  `:Q}
        `}},e.ModalTrigger.styles=v`
        :host {
            display: inline-flex;
            align-items: center;
            gap: var(--bds-size-spacing-2x-small);
            cursor: pointer;
        }

        :host(:focus-visible) {
            outline: var(--bds-chip-size-container-outline-on) solid
                var(--bds-color-functional-utils-focus-indicator);
            outline-offset: var(--bds-chip-size-container-outline-on);
            border-radius: var(--bds-size-radius-x-small);
        }
    `,t([ke({type:String})],e.ModalTrigger.prototype,"triggerEvent",void 0),t([ke({type:String})],e.ModalTrigger.prototype,"triggerIcon",void 0),e.ModalTrigger=t([ze("bds-modal-trigger"),He],e.ModalTrigger);const Qo=v`
    :host {
        display: block;

        /* Computed values values for border and padding are related
        * If any of these tokens are updated, update across all of static and calculated values
        */
        --tab-border-offset-small: calc(-1 * var(--bds-size-line-weight-small));
        --tab-border-offset-medium: calc(-1 * var(--bds-size-line-weight-medium));
        --tab-border-offset-large: calc(-1 * var(--bds-size-line-weight-large));
        --tab-padding-medium: calc(
            var(--bds-size-spacing-small) -
                (var(--bds-size-line-weight-medium) - var(--bds-size-line-weight-small))
        );
        --tab-padding-large: calc(
            var(--bds-size-spacing-small) -
                (var(--bds-size-line-weight-large) - var(--bds-size-line-weight-small))
        );
        --tab-transform-medium: calc(
            var(--bds-size-line-weight-small) - var(--bds-size-line-weight-medium)
        );
        --tab-transform-large: calc(
            var(--bds-size-line-weight-small) - var(--bds-size-line-weight-large)
        );
    }

    .tabs-container {
        display: flex;
        gap: 0;
    }

    /* === BASE TAB STYLES === */
    .tab {
        /* Layout & Reset */
        background: none;
        border: none;
        cursor: pointer;
        margin: 0;
        outline: none;
        white-space: nowrap;
        position: relative;

        /* Typography - Default */
        font-family: var(--bds-font-family-functional-label);
        line-height: var(--bds-size-line-height-functional-label-medium);
        font-weight: var(--bds-font-weight-functional-label);
        color: var(--bds-color-functional-neutral-on-surface);

        /* Spacing */
        padding-block: var(--bds-size-spacing-small);
        padding-inline: var(--bds-size-spacing-medium);

        /* Border - Default (thinnest) */
        border-bottom: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-neutral-outline);
        margin-bottom: var(--tab-border-offset-small);

        /* Transitions */
        transition: color 0.1s ease, border-color 0.1s ease, border-width 0.1s ease,
            padding-block 0.1s ease, transform 0.1s ease;
    }

    .tab.medium {
        font-size: var(--bds-size-font-functional-label-medium);
    }

    .tab.large {
        font-size: var(--bds-size-font-functional-label-large);
    }

    /* === INTERACTION STATES (Unselected) === */
    .tab:not(.selected, .disabled):hover:not(:focus-visible) {
        color: var(--bds-color-functional-supplemental-rio-interaction-tertiary);
        border-bottom-color: var(--bds-color-functional-supplemental-rio-interaction-tertiary);
        border-bottom-width: var(--bds-size-line-weight-medium);
        margin-bottom: var(--tab-border-offset-medium);
        padding-block: var(--tab-padding-medium);
        transform: translateY(var(--tab-transform-medium));
    }

    .tab:not(.selected, .disabled):active:not(:focus-visible) {
        color: var(--bds-color-functional-supplemental-rio-interaction-tertiary);
        border-bottom-color: var(--bds-color-functional-supplemental-rio-interaction-tertiary);
        border-bottom-width: var(--bds-size-line-weight-medium);
        margin-bottom: var(--tab-border-offset-medium);
        padding-block: var(--tab-padding-medium);
        transform: translateY(var(--tab-transform-medium));
    }

    /* === FOCUS STATE === */
    /* Using pseudo-element instead of outline to keep tab borders sharp while focus indicator is rounded */
    .tab:focus-visible {
        z-index: 2;
    }

    .tab:focus-visible::before {
        content: '';
        position: absolute;
        inset: calc(-1 * var(--bds-size-utils-padding-6));
        border: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-utils-focus-indicator);
        border-radius: var(--bds-size-radius-small);
        pointer-events: none;
    }

    /* === SELECTED STATE === */
    .tab.selected {
        color: var(--bds-color-functional-core-primary-interactive);
        font-weight: var(--bds-font-weight-functional-headline);
        border-bottom-color: var(--bds-color-functional-core-primary-interactive);
        border-bottom-width: var(--bds-size-line-weight-large);
        margin-bottom: var(--tab-border-offset-large);
        padding-block: var(--tab-padding-large);
        transform: translateY(var(--tab-transform-large));
    }

    .tab.selected:hover {
        cursor: default;
    }

    /* === DISABLED STATE === */
    .tab.disabled {
        cursor: not-allowed;
        pointer-events: none;
        color: var(--bds-color-functional-utils-on-surface-inactive);
    }
`;e.Tabs=class extends et{constructor(){super(...arguments),this._tabs=[],this.selectedTabId=""}get tabs(){return this._tabs}set tabs(e){var t;const i=this._tabs;this._tabs=null!==(t=null==e?void 0:e.filter((e=>null!=e&&"string"==typeof e.id&&e.id.length>0&&"string"==typeof e.label&&e.label.length>0)))&&void 0!==t?t:[],this.requestUpdate("tabs",i)}getDefaultConfiguration(){return{fontSize:"medium"}}getConfigurationOverrides(){return[{targeting:{devicetype:"mobile"},overrides:{fontSize:"large"}}]}validateSelectedTab(){if(!this.tabs||0===this.tabs.length||!this.selectedTabId)return void(this.selectedTabId="");const e=this.tabs.find((e=>e.id===this.selectedTabId));e&&!e.disabled||(this.selectedTabId="")}willUpdate(e){super.willUpdate(e),(e.has("tabs")||e.has("selectedTabId"))&&this.validateSelectedTab()}handleTabClick(e,t){t||this.tabs&&this.tabs.some((t=>t.id===e))&&this.selectedTabId!==e&&(this.selectedTabId=e,this.dispatchEvent(new CustomEvent("tab-change",{detail:e,bubbles:!0,composed:!0})))}getTabIndex(e,t){if(!this.tabs)return-1;if(this.selectedTabId)return this.selectedTabId===e.id?0:-1;const i=this.tabs.findIndex((e=>e&&!e.disabled));return-1!==i?t===i?0:-1:0===t?0:-1}getNextTabIndex(e,t){var i,o;if(!(null===(i=this.tabs)||void 0===i?void 0:i.length))return e;let a=e;switch(t){case"ArrowLeft":a=e>0?e-1:this.tabs.length-1;break;case"ArrowRight":a=e<this.tabs.length-1?e+1:0;break;case"Home":a=0;break;case"End":a=this.tabs.length-1;break;default:return e}for(;(null===(o=this.tabs[a])||void 0===o?void 0:o.disabled)&&a!==e;)a="ArrowLeft"===t||"Home"===t?a>0?a-1:this.tabs.length-1:a<this.tabs.length-1?a+1:0;return a}focusTabAtIndex(e){var t,i;if(!this.shadowRoot||e<0||e>=(null!==(i=null===(t=this.tabs)||void 0===t?void 0:t.length)&&void 0!==i?i:0))return;const o=this.shadowRoot.querySelectorAll(".tab")[e];o instanceof HTMLElement&&o.focus()}handleKeyDown(e,t){var i,o;if(!(null===(i=this.tabs)||void 0===i?void 0:i.length))return;if(t<0||t>=this.tabs.length)return;const{key:a}=e;if("Enter"===a||" "===a)return e.preventDefault(),void this.handleTabClick(this.tabs[t].id,this.tabs[t].disabled);if(!["ArrowLeft","ArrowRight","Home","End"].includes(a))return;e.preventDefault();const r=this.getNextTabIndex(t,a);(null===(o=this.tabs[r])||void 0===o?void 0:o.disabled)||this.focusTabAtIndex(r)}render(){if(!this.tabs||0===this.tabs.length)return Q;const e=this.getRenderConfiguration().fontSize;return G`
            <div class="tabs-container" role="tablist">
                ${this.tabs.map(((t,i)=>{var o;const a=this.selectedTabId===t.id,r=null!==(o=t.disabled)&&void 0!==o&&o;return G`
                        <button
                            class=${Xe({tab:!0,[e]:!0,selected:a,disabled:r})}
                            role="tab"
                            aria-selected="${a}"
                            aria-disabled="${r}"
                            tabindex="${this.getTabIndex(t,i)}"
                            @click="${()=>this.handleTabClick(t.id,r)}"
                            @keydown="${e=>this.handleKeyDown(e,i)}">
                            ${t.label}
                        </button>
                    `}))}
            </div>
        `}},e.Tabs.styles=Qo,t([ke({type:Array})],e.Tabs.prototype,"tabs",null),t([ke({type:String})],e.Tabs.prototype,"selectedTabId",void 0),e.Tabs=t([ze("bds-tabs"),He],e.Tabs);var Ko=v`
    :host {
        display: inline-block;
        position: relative;
    }

    .bds-popover {
        position: relative;
        display: inline-block;
        font-weight: var(--bds-font-weight-functional-body);
        line-height: var(--bds-size-line-height-functional-label-medium);
        font-size: var(--bds-size-font-functional-label-medium);
        font-family: var(--bds-font-family-functional-body);
    }

    /* Trigger Styles */
    .popover-trigger {
        display: flex;
        align-items: center;
        gap: var(--bds-size-utils-padding-2);
        padding: var(--bds-size-utils-padding-2) 0;
        border: none;
        background: none;
        cursor: pointer;
        border-radius: var(--bds-size-radius-x-small);
        outline: none;
    }

    .popover-trigger:hover {
        color: var(--bds-color-functional-supplemental-interaction-hover);
    }

    .popover-trigger:focus {
        outline: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-utils-focus-indicator);
        outline-offset: var(--bds-size-utils-padding-2);
    }

    .popover-trigger-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: var(--bds-font-weight-functional-body);
        line-height: var(--bds-size-line-height-functional-label-medium);
        font-size: var(--bds-size-font-functional-label-medium);
        font-family: var(--bds-font-family-functional-body);
        color: var(--bds-link-color-text-active);
        text-decoration: none;
    }

    /* Popover Container Styles */
    .popover-container {
        position: absolute;

        /* z-index: 1000 - Matches Modal and Dropdown overlay components.
           BDS overlay z-index hierarchy: Dropdown (999-1000), Modal (1000), Popover (1000-1001).
           If multiple overlays appear simultaneously, last-rendered wins at same level.
           Coordinate with Modal/Dropdown components if conflicts occur. */
        z-index: 1000;
        left: 0;
        font-family: var(--bds-font-family-functional-label);
        font-size: var(--bds-size-font-functional-label-medium);
    }

    /* Vertical positions */
    .popover-container.trigger-top {
        bottom: 100%;
        margin-bottom: var(--bds-size-utils-padding-1);
    }

    .popover-container.trigger-bottom {
        top: 100%;
        margin-top: var(--bds-size-utils-padding-1);
    }

    /* Horizontal positions */
    .popover-container.trigger-left {
        left: auto;
        right: 100%;
        margin-right: var(--bds-size-spacing-small);
    }

    .popover-container.trigger-right {
        left: 100%;
        margin-left: var(--bds-size-spacing-small);
    }

    /* Horizontal positions - expanding down (offset to center caret on trigger) */
    .popover-container.trigger-left.expanding-down,
    .popover-container.trigger-right.expanding-down {
        top: calc(-1 * var(--bds-size-spacing-small));
    }

    /* Horizontal positions - expanding up (offset to center caret on trigger) */
    .popover-container.trigger-left.expanding-up,
    .popover-container.trigger-right.expanding-up {
        bottom: calc(-1 * var(--bds-size-spacing-small));
    }

    .popover-content-wrapper {
        box-sizing: border-box;
        position: relative;
        min-width: 300px;
        max-width: 400px;
        background: var(--bds-color-functional-neutral-surface);
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-neutral-outline-variant);
        border-radius: var(--bds-size-radius-small);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 10%);
        padding: var(--bds-size-spacing-small) var(--bds-size-spacing-2x-large)
            var(--bds-size-spacing-small) var(--bds-size-spacing-medium);
    }

    .popover-header {
        font-weight: var(--bds-font-weight-functional-title);
        font-size: var(--bds-size-font-functional-title-medium);
        line-height: var(--bds-size-line-height-functional-title-medium);
        color: var(--bds-color-functional-neutral-on-surface);
        margin-bottom: var(--bds-size-spacing-x-small);
    }

    .popover-content {
        font-weight: var(--bds-font-weight-functional-body);
        line-height: var(--bds-size-line-height-functional-label-medium);
        font-size: var(--bds-size-font-functional-label-medium);
        color: var(--bds-color-functional-neutral-on-surface);
        margin: 0;
    }

    .popover-close {
        position: absolute;
        top: var(--bds-size-utils-padding-6);
        right: var(--bds-size-utils-padding-6);
        width: var(--bds-size-radius-3x-large);
        height: var(--bds-size-radius-3x-large);
        border: none;
        background: none;
        cursor: pointer;
        border-radius: var(--bds-size-radius-x-small);
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
    }

    .popover-close:hover {
        background: var(--bds-color-functional-utils-overlay-alpha-1);
    }

    .popover-close:focus {
        outline: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-utils-focus-indicator);
        outline-offset: var(--bds-size-utils-padding-1);
    }

    /* Trigger Icon Alignment */
    .popover-trigger bds-icon {
        display: inline-flex;
        align-items: center;
        line-height: inherit;
        vertical-align: middle;
    }

    /* Caret Styles */
    .popover-caret-container {
        position: relative;
        display: flex;
        justify-content: flex-start;
        padding-left: var(--bds-size-spacing-x-large);
        height: 10px;
        z-index: 1001;
        overflow: hidden;
    }

    /* Position caret container based on popover position */

    /* Vertical caret containers */
    .popover-container.trigger-bottom .popover-caret-container {
        /* Caret at top when popover is below trigger - points up toward trigger */
        margin-bottom: calc(-1 * var(--bds-size-line-weight-small));
    }

    .popover-container.trigger-top .popover-caret-container {
        /* Caret at bottom when popover is above trigger - points down toward trigger */
        margin-top: calc(-1 * var(--bds-size-line-weight-small));
    }

    /* Horizontal caret containers - base styles (less specific first) */
    .popover-container.trigger-right .popover-caret-container,
    .popover-container.trigger-left .popover-caret-container {
        /* Horizontal carets need different layout */
        position: absolute;
        width: 10px;
        height: auto;
        padding: 0;
        z-index: 1001;
    }

    .popover-container.trigger-right .popover-caret-container {
        position: absolute;
        left: -9px; /* Positions 10px-wide container to overlap 1px with popover border */
        top: var(--bds-size-spacing-small); /* Centers caret on trigger text */
        width: 10px;
        height: 20px;
    }

    .popover-container.trigger-left .popover-caret-container {
        position: absolute;
        right: -9px; /* Positions 10px-wide container to overlap 1px with popover border */
        top: var(--bds-size-spacing-small); /* Centers caret on trigger text */
        width: 10px;
        height: 20px;
    }

    /* Horizontal carets - position at bottom when expanding up (more specific) */
    .popover-container.trigger-right.expanding-up .popover-caret-container,
    .popover-container.trigger-left.expanding-up .popover-caret-container {
        top: auto;
        bottom: var(--bds-size-spacing-small);
    }

    /*
        Border triangle (outer, creates border effect)

    */
    .popover-caret-border {
        position: relative;
        width: 0;
        height: 0;
        border-left: 11px solid transparent;
        border-right: 11px solid transparent;
    }

    /* Fill triangle (inner, creates fill effect) */
    .popover-caret-fill {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        left: -10px; /* center within border triangle */
    }

    /* Vertical carets */

    /* Caret pointing up (when popover is below trigger) */
    .popover-container.trigger-bottom .popover-caret-border {
        border-bottom: 10px solid var(--bds-color-functional-neutral-outline-variant);
        border-top: none;
    }

    .popover-container.trigger-bottom .popover-caret-fill {
        border-bottom: 9px solid var(--bds-color-functional-neutral-surface);
        border-top: none;
        top: 1px; /* Offsets fill to overlap border triangle by 1px, hiding border edge */
    }

    /* Caret pointing down (when popover is above trigger) */
    .popover-container.trigger-top .popover-caret-border {
        border-top: 10px solid var(--bds-color-functional-neutral-outline-variant);
        border-bottom: none;
    }

    .popover-container.trigger-top .popover-caret-fill {
        border-top: 9px solid var(--bds-color-functional-neutral-surface);
        border-bottom: none;
        top: -10px; /* Centers fill vertically within 20px border triangle height */
    }

    /* Horizontal carets */

    /* Caret pointing left (when popover is to the right) */
    .popover-container.trigger-right .popover-caret-border {
        border-right: 10px solid var(--bds-color-functional-neutral-outline-variant);
        border-left: none;
        border-top: 11px solid transparent;
        border-bottom: 11px solid transparent;
    }

    .popover-container.trigger-right .popover-caret-fill {
        border-right: 9px solid var(--bds-color-functional-neutral-surface);
        border-left: none;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        left: 1px; /* Offsets fill to overlap border triangle by 1px, hiding border edge */
        top: -10px; /* Centers fill vertically within 20px border triangle height */
    }

    /* Caret pointing right (when popover is to the left) */
    .popover-container.trigger-left .popover-caret-border {
        border-left: 10px solid var(--bds-color-functional-neutral-outline-variant);
        border-right: none;
        border-top: 11px solid transparent;
        border-bottom: 11px solid transparent;
    }

    .popover-container.trigger-left .popover-caret-fill {
        border-left: 10px solid var(--bds-color-functional-neutral-surface);
        border-right: none;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        left: -11px; /* Offsets fill to overlap border triangle by 1px on opposite side */
        top: -10px; /* Centers fill vertically within 20px border triangle height */
    }
`;e.Popover=class extends Ne{constructor(){super(...arguments),this.position="trigger-bottom",this.triggerIconName="chevron-down.svg",this.isOpen=!1,this.verticalPlacement="down",this.resolvedPosition="trigger-bottom",this.handleTriggerClick=e=>{e.preventDefault(),this.togglePopoverState()},this.handleCloseClick=e=>{var t;e.preventDefault(),this.closePopover();const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".popover-trigger");null==i||i.focus()},this.handleClickOutside=e=>{if(!this.isOpen)return;const t=e.target;this.contains(t)||this.closePopover()},this.handleKeyDown=e=>{var t;if("Escape"===e.key&&this.isOpen){this.closePopover();const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".popover-trigger");null==e||e.focus()}}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.handleClickOutside),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.handleClickOutside),document.removeEventListener("keydown",this.handleKeyDown)}togglePopoverState(){this.isOpen=!this.isOpen,this.isOpen&&("trigger-horizontal"===this.position?this.resolvedPosition=this.calculateHorizontalPosition():"trigger-vertical"===this.position?this.resolvedPosition=this.calculateVerticalPosition():this.resolvedPosition=this.position,"trigger-left"!==this.resolvedPosition&&"trigger-right"!==this.resolvedPosition||(this.verticalPlacement=this.calculateVerticalPlacement()),this.updateComplete.then((()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".popover-close");null==t||t.focus({preventScroll:!0})})))}closePopover(){this.isOpen=!1}calculateVerticalPlacement(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".popover-trigger");if(!t)return"down";const i=t.getBoundingClientRect(),o=i.top;return window.innerHeight-i.bottom>=o?"down":"up"}calculateHorizontalPosition(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".popover-trigger");if(!t)return"trigger-right";const i=t.getBoundingClientRect(),o=i.left;return window.innerWidth-i.right>=o?"trigger-right":"trigger-left"}calculateVerticalPosition(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".popover-trigger");if(!t)return"trigger-bottom";const i=t.getBoundingClientRect(),o=i.top;return window.innerHeight-i.bottom>=o?"trigger-bottom":"trigger-top"}renderTriggerIcon(){return this.triggerIconName?G`
            <bds-icon
                iconName=${this.triggerIconName}
                iconSize="16px"
                iconColor="var(--bds-color-functional-neutral-on-surface)">
            </bds-icon>
        `:Q}renderPopoverHeader(){return this.header?G` <div class="popover-header">${this.header}</div> `:Q}renderCaret(){return G`
            <div class="popover-caret-container">
                <div class="popover-caret-border">
                    <div class="popover-caret-fill"></div>
                </div>
            </div>
        `}getContentWrapperStyles(){const e=[];return this.width&&(e.push(`width: ${this.width}`),e.push("min-width: unset"),e.push("max-width: unset")),this.height&&e.push(`height: ${this.height}`),e.length>0?e.join("; "):void 0}renderPopover(){if(!this.isOpen)return Q;const e="trigger-bottom"===this.resolvedPosition||"trigger-right"===this.resolvedPosition,t="trigger-top"===this.resolvedPosition||"trigger-left"===this.resolvedPosition,i=this.resolvedPosition,o="trigger-left"===this.resolvedPosition||"trigger-right"===this.resolvedPosition?`expanding-${this.verticalPlacement}`:"",a=this.getContentWrapperStyles();return G`
            <div
                class="popover-container ${i} ${o}"
                role="dialog"
                aria-label=${$t(this.accessibilityLabel||this.header||this.triggerText)}>
                ${zt(e,(()=>this.renderCaret()))}

                <div class="popover-content-wrapper" style=${$t(a)}>
                    ${this.renderPopoverHeader()}

                    <div class="popover-content">${this.content}</div>

                    <button
                        class="popover-close"
                        @click=${this.handleCloseClick}
                        aria-label="Close popover"
                        type="button">
                        <bds-icon
                            iconName="close.svg"
                            iconSize="var(--bds-size-radius-large)"
                            iconColor="var(--bds-color-functional-neutral-on-surface)">
                        </bds-icon>
                    </button>
                </div>

                ${zt(t,(()=>this.renderCaret()))}
            </div>
        `}render(){return G`
            <div class="bds-popover">
                <button
                    class="popover-trigger"
                    @click=${this.handleTriggerClick}
                    aria-expanded=${this.isOpen?"true":"false"}
                    aria-haspopup="dialog"
                    aria-label=${$t(this.accessibilityLabel)}
                    type="button">
                    <span class="popover-trigger-text">${this.triggerText}</span>
                    ${this.renderTriggerIcon()}
                </button>

                ${this.renderPopover()}
            </div>
        `}},e.Popover.styles=Ko,t([ke({type:String})],e.Popover.prototype,"triggerText",void 0),t([ke({type:String})],e.Popover.prototype,"content",void 0),t([ke({type:String})],e.Popover.prototype,"header",void 0),t([ke({type:String})],e.Popover.prototype,"position",void 0),t([ke({type:String})],e.Popover.prototype,"triggerIconName",void 0),t([ke({type:String})],e.Popover.prototype,"accessibilityLabel",void 0),t([ke({type:String})],e.Popover.prototype,"width",void 0),t([ke({type:String})],e.Popover.prototype,"height",void 0),t([Ce()],e.Popover.prototype,"isOpen",void 0),t([Ce()],e.Popover.prototype,"verticalPlacement",void 0),t([Ce()],e.Popover.prototype,"resolvedPosition",void 0),e.Popover=t([ze("bds-popover"),He],e.Popover);var Xo=v`
    :host {
        display: block;
    }

    .textarea-container {
        display: flex;
        flex-direction: column;
        gap: var(--bds-size-spacing-2x-small);
    }

    .textarea-label {
        font-family: var(--bds-font-family-functional-title);
        font-size: var(--bds-size-font-functional-title-large);
        line-height: var(--bds-size-line-height-functional-title-large);
        font-weight: var(--bds-font-weight-functional-title);
        color: var(--bds-color-functional-neutral-on-surface);
    }

    .textarea-wrapper {
        position: relative;
        display: flex;
        width: 100%;
        height: fit-content;
        border: var(--bds-size-line-weight-small) solid var(--bds-color-functional-neutral-outline);
        background: var(--bds-color-functional-neutral-surface);
        overflow: hidden;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;

        /* Ensure outline is not clipped */
        margin: var(--bds-size-utils-padding-2);
    }

    .textarea-input {
        display: block;
        width: 100%;
        min-width: 150px;
        height: 100%;
        border: none;
        background: transparent;
        color: var(--bds-color-functional-neutral-on-surface);
        resize: vertical;
        box-sizing: border-box;
        outline: none;
        margin: var(--bds-size-spacing-none);
    }

    .textarea-input::placeholder {
        color: var(--bds-color-functional-neutral-on-surface-variant);
    }

    .textarea-wrapper:focus-within {
        border: var(--bds-size-line-weight-small) solid
            var(--bds-color-functional-core-primary-interactive);
        outline: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-utils-focus-indicator);
        outline-offset: var(--bds-size-line-weight-medium);
    }

    .textarea-wrapper.error {
        border: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-supplemental-alert-error);
    }

    .textarea-wrapper.error:focus-within {
        border: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-supplemental-alert-error);
        outline: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-utils-focus-indicator);
        outline-offset: var(--bds-size-line-weight-medium);
    }

    .textarea-wrapper.warning {
        border: var(--bds-size-line-weight-medium) solid
            var(--bds-color-functional-supplemental-alert-warning);
    }

    .textarea-wrapper.disabled {
        background: var(--bds-color-functional-utils-surface-inactive);
        border: var(--bds-size-line-weight-medium) solid var(--bds-color-functional-neutral-outline);
        cursor: not-allowed;
    }

    .textarea-wrapper.disabled .textarea-input {
        color: var(--bds-color-functional-utils-on-surface-inactive);
        cursor: not-allowed;
        resize: none;
    }

    .textarea-wrapper.disabled .textarea-input::placeholder {
        color: var(--bds-color-functional-utils-on-surface-inactive);
    }
`;function Yo(e){return null!=e&&""!==e.trim()}e.TextArea=class extends et{constructor(){super(...arguments),this.value="",this.disabled=!1,this.validationState="default",this.rows=3,this.onInputHandler=e=>{var t;if(this.disabled)return;const i=e.target;this.value=i.value,null===(t=this.handleChange)||void 0===t||t.call(this,this.value,e)},this.onFocusHandler=e=>{var t;null===(t=this.handleFocus)||void 0===t||t.call(this,e)},this.onBlurHandler=e=>{var t;null===(t=this.handleBlur)||void 0===t||t.call(this,e)}}getDefaultConfiguration(){return{borderRadius:"var(--bds-size-radius-x-small)",horizontalPadding:"var(--bds-size-spacing-small)",verticalPadding:"var(--bds-size-spacing-2x-small)",fontSize:"var(--bds-size-font-functional-label-medium)",lineHeight:"var(--bds-size-line-height-functional-label-medium)",fontWeight:"var(--bds-font-weight-functional-label)",fontFamily:"var(--bds-font-family-functional-label)"}}getConfigurationOverrides(){return[{targeting:{devicetype:"mobile"},overrides:{borderRadius:"var(--bds-size-radius-x-small)",horizontalPadding:"var(--bds-size-spacing-medium)",verticalPadding:"var(--bds-size-spacing-small)",fontSize:"var(--bds-size-font-functional-label-large)",lineHeight:"var(--bds-size-line-height-functional-label-large)",fontWeight:"var(--bds-font-weight-functional-label)",fontFamily:"var(--bds-font-family-functional-label)"}}]}renderLabel(){return this.label?G`<label class="textarea-label">${this.label}</label>`:Q}renderTextArea(){const e=this.getRenderConfiguration(),t=this.accessibilityLabel||this.label,i={padding:`${e.verticalPadding} ${e.horizontalPadding}`,"border-radius":e.borderRadius,"font-size":e.fontSize,"line-height":e.lineHeight,"font-weight":e.fontWeight,"font-family":e.fontFamily};return G`
            <textarea
                class="textarea-input"
                style=${Ke(i)}
                .value=${this.value}
                placeholder=${$t(this.placeholder)}
                ?disabled=${this.disabled}
                rows=${this.rows}
                maxlength=${$t(this.maxLength)}
                aria-label=${$t(t)}
                aria-invalid=${"error"===this.validationState?"true":"false"}
                @input=${this.onInputHandler}
                @focus=${this.onFocusHandler}
                @blur=${this.onBlurHandler}>
            </textarea>
        `}render(){var e;const t=Object.assign({"textarea-container":!0},(null===(e=this.renderContext)||void 0===e?void 0:e.theme)&&{[this.renderContext.theme]:!0}),i=this.getRenderConfiguration(),o={"textarea-wrapper":!0,[this.validationState]:!0,disabled:this.disabled},a={"border-radius":i.borderRadius};return G`
            <div class=${Xe(t)}>
                ${this.renderLabel()}
                <div class=${Xe(o)} style=${Ke(a)}>
                    ${this.renderTextArea()}
                </div>
            </div>
        `}},e.TextArea.styles=Xo,t([ke({type:String})],e.TextArea.prototype,"label",void 0),t([ke({type:String})],e.TextArea.prototype,"placeholder",void 0),t([ke({type:String})],e.TextArea.prototype,"value",void 0),t([ke({type:Boolean})],e.TextArea.prototype,"disabled",void 0),t([ke({type:String,converter:{fromAttribute:e=>e&&["default","error","warning"].includes(e)?e:(e&&console.warn(`Invalid validationState: "${e}". Using "default".`),"default")}})],e.TextArea.prototype,"validationState",void 0),t([ke({type:String})],e.TextArea.prototype,"accessibilityLabel",void 0),t([ke({type:Number,converter:{fromAttribute:e=>{const t=e?Number(e):NaN;return!isNaN(t)&&t>0?Math.max(1,Math.floor(t)):(null!==e&&console.warn(`Invalid rows: "${e}". Using 3.`),3)}}})],e.TextArea.prototype,"rows",void 0),t([ke({type:Number,converter:{fromAttribute:e=>{if(!e)return;const t=Number(e);if(!isNaN(t)&&t>0)return Math.floor(t);console.warn(`Invalid maxLength: "${e}". Using undefined.`)}}})],e.TextArea.prototype,"maxLength",void 0),t([ke()],e.TextArea.prototype,"handleChange",void 0),t([ke()],e.TextArea.prototype,"handleFocus",void 0),t([ke()],e.TextArea.prototype,"handleBlur",void 0),t([ye({context:$e,subscribe:!0})],e.TextArea.prototype,"renderContext",void 0),e.TextArea=t([ze("bds-textarea")],e.TextArea);class Jo{constructor(e,t,i,o,a,r,s,n,l={}){var d,c,u;this.getShadowRoot=e,this.getContainer=t,this.getFirstFocusable=i,this.getLastFocusable=o,this.getIsOpen=a,this.setIsOpen=r,this.getDisableScrimClose=s,this.getOnClose=n,this.previousActiveElement=null,this.didApplyScrollLock=!1,this.handleClose=e=>{if(!this.getIsOpen())return;this.setIsOpen(!1);const t=this.getOnClose();null==t||t(e)},this.toggleOpen=e=>{this.getIsOpen()?this.handleClose(e):this.setIsOpen(!0)},this.handleScrimClick=e=>{this.getDisableScrimClose()||this.handleClose(e)},this.handleKeyDown=e=>{"Escape"===e.key&&(e.preventDefault(),this.handleClose(e))},this.handleStartSentinelFocus=()=>{var e;const t=this.getLastFocusable();if(t)t.focus();else{const t=null===(e=this.getShadowRoot())||void 0===e?void 0:e.querySelector(".focus-sentinel-end");null==t||t.focus()}},this.handleEndSentinelFocus=()=>{var e;const t=this.getFirstFocusable();if(t)t.focus();else{const t=null===(e=this.getShadowRoot())||void 0===e?void 0:e.querySelector(".focus-sentinel-start");null==t||t.focus()}},this.lockBodyScroll=null!==(d=l.lockBodyScroll)&&void 0!==d&&d,this.overlaySelector=null!==(c=l.overlaySelector)&&void 0!==c?c:"",this.openContainerSelector=null!==(u=l.openContainerSelector)&&void 0!==u?u:"",this.lockBodyScroll&&(this.overlaySelector&&this.openContainerSelector||(console.warn("OverlayHelper: When lockBodyScroll is true, both overlaySelector and openContainerSelector must be provided. Setting lockBodyScroll to false.",{lockBodyScroll:this.lockBodyScroll,overlaySelector:this.overlaySelector,openContainerSelector:this.openContainerSelector}),this.lockBodyScroll=!1))}handleIsOpenChange(e){e?this.handleOpen():this.handleCloseInternal()}getDeepActiveElement(){var e;let t=document.activeElement;for(;null===(e=null==t?void 0:t.shadowRoot)||void 0===e?void 0:e.activeElement;)t=t.shadowRoot.activeElement;return t}handleOpen(){this.previousActiveElement=this.getDeepActiveElement(),this.lockBodyScroll&&"hidden"!==document.body.style.overflow&&(document.body.style.overflow="hidden",this.didApplyScrollLock=!0);const e=this.getFirstFocusable();if(e)requestAnimationFrame((()=>{e.focus()}));else{const e=this.getContainer();e&&requestAnimationFrame((()=>{e.focus()}))}}hasOtherOpenOverlays(){if(!this.lockBodyScroll||!this.overlaySelector||!this.openContainerSelector)return!1;const e=document.querySelectorAll(this.overlaySelector),t=this.getContainer();return Array.from(e).some((e=>{var i;const o=null===(i=e.shadowRoot)||void 0===i?void 0:i.querySelector(this.openContainerSelector);return o&&o!==t}))}handleCloseInternal(){var e;if(this.didApplyScrollLock&&!this.hasOtherOpenOverlays()&&(document.body.style.overflow="",this.didApplyScrollLock=!1),this.previousActiveElement instanceof HTMLElement){const t=document.body.contains(this.previousActiveElement),i=this.previousActiveElement.getRootNode()instanceof ShadowRoot,o=i&&(null===(e=this.previousActiveElement.getRootNode().host)||void 0===e?void 0:e.isConnected);if(t||i&&o){const e=this.previousActiveElement;requestAnimationFrame((()=>{e.focus()}))}}this.previousActiveElement=null}cleanup(e){e&&this.didApplyScrollLock&&!this.hasOtherOpenOverlays()&&(document.body.style.overflow="",this.didApplyScrollLock=!1)}renderFocusSentinels(){return{start:G`
                <div
                    class="focus-sentinel-start"
                    tabindex="0"
                    @focus=${this.handleStartSentinelFocus}
                    aria-hidden="true"></div>
            `,end:G`
                <div
                    class="focus-sentinel-end"
                    tabindex="0"
                    @focus=${this.handleEndSentinelFocus}
                    aria-hidden="true"></div>
            `}}queryFocusableElements(e,t=[]){if(!e)return[];const i=Array.from(e.querySelectorAll(Jo.FOCUSABLE_SELECTORS));return 0===t.length?i:i.filter((e=>!t.some((t=>t.startsWith(".")?e.classList.contains(t.slice(1)):e.matches(t)))))}}Jo.focusSentinelStyles=v`
        .focus-sentinel-start,
        .focus-sentinel-end {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    `,Jo.FOCUSABLE_SELECTORS=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])','bds-card-header[tabindex]:not([tabindex="-1"])',"bds-borrow-button","bds-common-button",'.side-sheet-content[tabindex]:not([tabindex="-1"])','.modal-content[tabindex]:not([tabindex="-1"])','.bottom-sheet-content[tabindex]:not([tabindex="-1"])','[role="document"][tabindex]:not([tabindex="-1"])','[role="article"][tabindex]:not([tabindex="-1"])'].join(",");var Zo=v`
    ${Jo.focusSentinelStyles}

    :host {
        position: relative;
        display: contents;
    }

    .side-sheet-scrim {
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: var(--bds-color-functional-supplemental-scrim);
        opacity: 0;
        transition: opacity 300ms ease-out;
    }

    .side-sheet-scrim.open {
        opacity: 1;
    }

    .side-sheet-container {
        background-color: var(--bds-color-functional-neutral-surface);
        color: var(--bds-color-functional-neutral-on-surface);
        width: 100%;
        min-width: 280px;
        max-width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        outline: none;
        overflow: hidden;
        position: relative;
        transform: translateX(100%);
        transition: transform 300ms ease-out;
        box-shadow: -8px 0 32px rgba(15, 17, 17, 0.2);
    }

    .side-sheet-container.open {
        transform: translateX(0);
    }

    .side-sheet-header-wrapper {
        padding: var(--bds-size-spacing-medium);
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-start;
        gap: var(--bds-size-spacing-small);
        flex-shrink: 0;
    }

    .side-sheet-header-text {
        display: flex;
        flex-direction: column;
        gap: var(--bds-size-spacing-x-small);
        flex: 1 1 auto;
        min-width: 0;
    }

    .side-sheet-close-button {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: var(--bds-size-spacing-2x-small);
        border-radius: var(--bds-size-radius-small);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        flex-shrink: 0;
        margin-left: auto;
    }

    .side-sheet-close-button:hover {
        background-color: var(--bds-color-functional-utils-overlay-alpha-1);
    }

    .side-sheet-content {
        padding: var(--bds-size-spacing-none) var(--bds-size-spacing-medium)
            var(--bds-size-spacing-large) var(--bds-size-spacing-medium);
        font-family: var(--bds-font-family-functional-label);
        font-size: var(--bds-size-font-functional-label-medium);
        line-height: var(--bds-size-line-height-functional-label-medium);
        font-weight: var(--bds-font-weight-functional-label);
        overflow: hidden auto;
        flex-grow: 1;
        min-height: 0;
        scroll-behavior: smooth;
    }

    .side-sheet-content:focus {
        outline: var(--bds-size-spacing-3x-small) solid
            var(--bds-color-functional-utils-chip-outline-selected);
        outline-offset: var(--bds-size-spacing-3x-small);
    }

    .side-sheet-content:focus-visible {
        outline: var(--bds-size-spacing-3x-small) solid
            var(--bds-color-functional-utils-chip-outline-selected);
        outline-offset: var(--bds-size-spacing-3x-small);
    }

    .side-sheet-content:focus:not(:focus-visible) {
        outline: none;
    }

    /* Desktop: min-width 320px, max-width 50% viewport */
    @media (min-width: 768px) {
        .side-sheet-container {
            min-width: 320px;
            max-width: 50vw;
        }
    }
`;e.SideSheet=class extends Ne{static get styles(){return[Zo]}constructor(){super(),this.isOpen=!1,this.disableScrimClose=!1,this.ariaLabel="",this.handleOpenRequest=e=>{e.target===this&&(this.isOpen=!0,this.requestUpdate())},this.overlayHelper=new Jo((()=>this.shadowRoot),(()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".side-sheet-container")}),(()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".side-sheet-container");if(!t)return null;return this.overlayHelper.queryFocusableElements(t,[".focus-sentinel-start",".focus-sentinel-end"])[0]||null}),(()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".side-sheet-container");if(!t)return null;const i=this.overlayHelper.queryFocusableElements(t,[".focus-sentinel-start",".focus-sentinel-end"]);return i[i.length-1]||null}),(()=>this.isOpen),(e=>{this.isOpen=e}),(()=>this.disableScrimClose),(()=>this.onClose),{lockBodyScroll:!0,overlaySelector:"bds-side-sheet",openContainerSelector:".side-sheet-container.open"})}connectedCallback(){super.connectedCallback(),this.addEventListener("side-sheet-open-request",this.handleOpenRequest)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("side-sheet-open-request",this.handleOpenRequest),this.overlayHelper.cleanup(this.isOpen)}updated(e){super.updated(e),e.has("isOpen")&&this.overlayHelper.handleIsOpenChange(this.isOpen)}toggleOpen(e){this.isOpen?this.overlayHelper.handleClose(e):this.dispatchEvent(new CustomEvent("side-sheet-open-request",{bubbles:!0,composed:!0}))}renderCloseButton(){return G`
            <button
                class="side-sheet-close-button"
                aria-label="Close"
                @click=${this.overlayHelper.handleClose}>
                <bds-icon
                    iconName="close.svg"
                    iconSize="24px"
                    iconColor="var(--bds-color-functional-neutral-on-surface)">
                </bds-icon>
            </button>
        `}renderHeaderWrapper(){const e=Yo(this.header)||Yo(this.subheader);return G`
            <div class="side-sheet-header-wrapper">
                ${e?G`<div class="side-sheet-header-text">
                          ${Yo(this.header)?G`<bds-card-header
                                    id="side-sheet-title"
                                    tabindex="0"
                                    .titleText=${this.header}
                                    .titleTextHeadingLevel=${2}
                                    layout="standardV2">
                                </bds-card-header>`:Q}
                          ${Yo(this.subheader)?G`<bds-card-header
                                    tabindex="0"
                                    .titleText=${this.subheader}
                                    .titleTextHeadingLevel=${4}
                                    layout="standardV2">
                                </bds-card-header>`:Q}
                      </div>`:Q}
                ${this.renderCloseButton()}
            </div>
        `}renderContent(){return G`<div
            class="side-sheet-content"
            tabindex="0"
            role="document">
            <slot></slot>
        </div>`}render(){var e;const t={"side-sheet-scrim":!0,open:this.isOpen},i=Object.assign({"side-sheet-container":!0,open:this.isOpen},(null===(e=this.renderContext)||void 0===e?void 0:e.theme)&&{[this.renderContext.theme]:!0});return G`
            <slot name="trigger"></slot>
            ${this.isOpen?G`
                      <div class=${Xe(t)} @click=${this.overlayHelper.handleScrimClick}>
                          <div
                              class=${Xe(i)}
                              role="dialog"
                              aria-modal="true"
                              aria-labelledby=${$t(Yo(this.header)?"side-sheet-title":void 0)}
                              aria-label=${$t(!Yo(this.header)&&this.ariaLabel?this.ariaLabel:void 0)}
                              tabindex="-1"
                              @click=${e=>e.stopPropagation()}
                              @keydown=${this.overlayHelper.handleKeyDown}>
                              ${this.overlayHelper.renderFocusSentinels().start}
                              ${this.renderHeaderWrapper()}
                              ${this.renderContent()}
                              ${this.overlayHelper.renderFocusSentinels().end}
                          </div>
                      </div>
                  `:Q}
        `}},t([Ce()],e.SideSheet.prototype,"isOpen",void 0),t([ke({type:String})],e.SideSheet.prototype,"header",void 0),t([ke({type:String})],e.SideSheet.prototype,"subheader",void 0),t([ke({type:Boolean})],e.SideSheet.prototype,"disableScrimClose",void 0),t([ke({type:String})],e.SideSheet.prototype,"ariaLabel",void 0),t([ke()],e.SideSheet.prototype,"onClose",void 0),e.SideSheet=t([ze("bds-side-sheet"),He],e.SideSheet);var ea=v`
    .tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: var(--bds-size-line-weight-small) solid;
        font-size: var(--bds-size-font-functional-body-small);
        font-family: var(--bds-font-family-functional-body);
        white-space: nowrap;
        height: 36px;
        border-radius: 36px;
        padding: var(--bds-size-utils-padding-6) var(--bds-size-spacing-medium);
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        /* A quick fix for a strange display issue on iOS web browsers https://sim.amazon.com/issues/BSX-Storefront-611 */
        margin-bottom: 1px;
    }

    .tag.circular {
        width: 36px;
        border-radius: 50%;
    }

    .selectedIconContainer {
        max-width: 0;
        display: inline-flex;
        align-items: center;
    }

    .selectedIconContainer img {
        max-width: inherit;
        height: 14px;
    }

    .selectedIconContainer.visible {
        max-width: 16px;
        margin-right: var(--bds-size-spacing-x-small);
    }

    .selectedIconContainer,
    .selectedIconContainer.visible {
        transition: max-width, margin-right;
        transition-duration: 200ms;
    }

    @media screen and (prefers-reduced-motion) {
        .selectedIconContainer,
        .selectedIconContainer.visible {
            transition: max-width, margin-right;
            transition-duration: 0;
        }
    }

    .endIconContainer {
        margin-bottom: var(--bds-size-utils-padding-2);
        margin-left: var(--bds-size-utils-padding-10);
    }

    .endIconContainer.dropdown {
        margin-bottom: var(--bds-size-spacing-2x-small);
    }

    .tagContent {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: var(--bds-size-spacing-x-small);
    }

    /* Per UX team: offset the text by 1px to make it look more centered */
    .tagText {
        padding-bottom: var(--bds-size-utils-padding-1);
    }

    .programLogo {
        height: 14px;
    }

    .endIcon {
        width: 8px;
    }

    /* Light mode styling */
    .tag.light {
        border-color: #a2a6a6;
        background-color: #fff;
        color: #0f1111;
    }

    /* Prevent hover effects from showing up on touch devices after tag deselection */
    @media (hover: hover) {
        .tag.light:hover {
            border-color: #0f1111;
            box-shadow: var(--bds-size-line-weight-medium) var(--bds-size-line-weight-medium)
                var(--bds-size-line-weight-x-large) rgba(86, 86, 86, 0.2);
        }
    }

    .tag.light:focus-visible {
        outline: none;
        border: var(--bds-size-line-weight-large) solid #0f1111;
        box-shadow: var(--bds-size-line-weight-medium) var(--bds-size-line-weight-medium)
            var(--bds-size-line-weight-x-large) rgba(86, 86, 86, 0.2);
    }

    .tag.light.selected {
        border: var(--bds-size-line-weight-large) solid #007185;
        box-shadow: inset 0 var(--bds-size-line-weight-small) var(--bds-size-line-weight-medium)
            var(--bds-size-line-weight-small) rgba(1, 67, 79, 0.1);
        font-weight: var(--bds-font-weight-functional-display);
    }

    .tag.light.selected:focus-visible {
        border-color: #0f1111;
    }

    .tag.light.selected.textBased {
        background-color: #edfdff;
    }

    .tag.light.inactive,
    .tag.light.inactive.textBased {
        border: var(--bds-size-line-weight-small) solid #bbbfbf;
        background-color: #f0f2f2;
        box-shadow: none;
        color: #565959;
        font-weight: var(--bds-font-weight-functional-body);
    }

    /* Dark mode styling */
    .tag.dark {
        border-color: #d5d9d9;
        background-color: #0f1111;
        color: #fff;
    }

    /* Prevent hover effects from showing up on touch devices after tag deselection */
    @media (hover: hover) {
        .tag.dark:hover {
            border-color: #f7feff;
            box-shadow: var(--bds-size-line-weight-medium) var(--bds-size-line-weight-medium)
                var(--bds-size-line-weight-x-large) rgba(86, 86, 86, 0.2);
        }
    }

    .tag.dark:focus-visible {
        outline: none;
        border: var(--bds-size-line-weight-large) solid #f7feff;
        box-shadow: var(--bds-size-line-weight-medium) var(--bds-size-line-weight-medium)
            var(--bds-size-line-weight-x-large) rgba(86, 86, 86, 0.2);
    }

    .tag.dark.selected {
        border: var(--bds-size-line-weight-large) solid #c8f3fa;
        box-shadow: inset 0 var(--bds-size-line-weight-small) var(--bds-size-line-weight-medium)
            var(--bds-size-line-weight-small) rgba(1, 67, 79, 0.1);
        font-weight: var(--bds-font-weight-functional-display);
    }

    .tag.dark.selected:focus-visible {
        border-color: #f7feff;
    }

    .tag.dark.selected.textBased {
        background-color: #054b59;
    }

    .tag.dark.inactive,
    .tag.dark.inactive.textBased {
        border: var(--bds-size-line-weight-small) solid #888c8c;
        background-color: #303333;
        box-shadow: 0 0 var(--bds-size-line-weight-medium) var(--bds-size-line-weight-small)
            rgba(86, 86, 86, 0.1);
        color: #bbbfbf;
        font-weight: var(--bds-font-weight-functional-body);
    }

    /* Custom displays */
    .starRatingDisplay {
        display: flex;
        align-items: center;
        gap: var(--bds-size-spacing-x-small);
        line-height: 100%;
    }
`;e.TagPill=class extends be{constructor(){super(...arguments),this.tagId="",this.tagName="",this.selectionMode="multi",this.ariaLabel="",this.darkMode=!1,this.selected=!1,this.inactive=!1,this.circular=!1,this.noSelectionChange=!1,this.visibilityThreshold=-1,this.prefixIcons=[],this.suffixIcons=[],this.renderByDisplayParams=(e,t)=>{if("star_rating"===e.displayId&&e.numberOfStars)return G`
                <span role="group" aria-label=${t} class="starRatingDisplay">
                    <span aria-hidden="true">
                        <bds-star-rating
                            numberOfStars=${e.numberOfStars}
                            ?hasHalfStar=${e.hasHalfStar}>
                        </bds-star-rating>
                    </span>
                    ${zt(e.additionalText,(()=>G` <span aria-hidden="true"> ${e.additionalText} </span> `))}
                </span>
            `}}get onVisibilityChange(){return this.handleVisibilityChange}set onVisibilityChange(e){this.handleVisibilityChange=e}get onClick(){return this.handleClick}set onClick(e){this.handleClick=e}updated(e){var t;if(e.has("visibilityThreshold")&&this.visibilityThreshold>=0){const e=this.renderRoot.querySelector("button");if(!e)return;null===(t=this.visibilityObserver)||void 0===t||t.unobserve(e),this.visibilityObserver=new IntersectionObserver((e=>{e.forEach((e=>{var t;null===(t=this.handleVisibilityChange)||void 0===t||t.call(this,e.target.id,e.isIntersecting&&"hidden"!==window.getComputedStyle(e.target).visibility)}))}),{threshold:this.visibilityThreshold}),this.visibilityObserver.observe(e)}}onClickHandler(){var e;this.noSelectionChange||(this.selected=!this.selected);const t={tagId:this.tagId,selected:this.selected};null===(e=this.handleClick)||void 0===e||e.call(this,t)}renderIcons(e){return null==e?void 0:e.map((e=>G`<img
                src=${e.src}
                alt=${$t(e.altText)}
                aria-hidden=${!e.altText}
                class=${$t(e.class)}
                draggable="false" />`))}render(){const e="multi"===this.selectionMode&&this.selected&&!this.inactive,t={src:this.darkMode?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/selected-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/selected-light.svg"},i=((e,t,i)=>{switch(e){case"Kindle Unlimited":case"Kindle Unlimited Eligible":return i?t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-dark-inactive.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-light-inactive.svg":t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-light.svg";case"Kindle Unlimited Audio":return i?t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-audio-dark-inactive.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-audio-light-inactive.svg":t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-audio-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/ku-audio-light.svg";case"Prime Reading":return t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/PRR_Dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/PRR_Light.svg";case"Prime Eligible":return i?t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/prime-dark-inactive.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/prime-light-inactive.svg":t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/prime-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/prime-light.svg";case"Comixology":return i?t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/comixology-dark-inactive.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/comixology-light-inactive.svg":t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/comixology-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/comixology-light.svg";case"Kids+":return t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/amazonkidsplusdark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/amazonkidsplus.svg";case"Audible Plus":return"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/audible-plus-light.png"}return""})(this.programType,this.darkMode,this.inactive),o=((e,t)=>{switch(e){case"deselect":return t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/deselect-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/deselect-light.svg";case"dropdown":return t?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/dropdown-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/dropdown-light.svg"}return""})(this.endIconType,this.darkMode),a=this.ariaRole||("multi"===this.selectionMode?"checkbox":"radio"),r="checkbox"===a||"radio"===a?this.selected:void 0;let s;return i?s=this.renderIcons([{src:i,altText:this.tagName,class:"programLogo"}]):this.displayParameters?s=this.renderByDisplayParams(this.displayParameters,this.tagName):this.tagName&&(s=G`<span class="tagText">${this.tagName}</span>`),G`
            <button
                id=${this.tagId}
                name=${this.tagName}
                aria-label=${this.ariaLabel||this.tagName}
                ?disabled=${this.inactive}
                role=${a}
                aria-checked=${$t(r)}
                class=${Xe({tag:!0,light:!this.darkMode,dark:this.darkMode,textBased:!this.programType,selected:this.selected,inactive:this.inactive,circular:this.circular})}
                @click=${this.onClickHandler}>
                <div
                    class=${Xe({selectedIconContainer:!0,visible:e})}>
                    ${this.renderIcons([t])}
                </div>
                <div class="tagContent">
                    ${this.renderIcons(this.prefixIcons)} ${s}
                    ${this.renderIcons(this.suffixIcons)}
                </div>
                ${zt(this.endIconType,(()=>G`
                            <div
                                class=${Xe({endIconContainer:!0,dropdown:"dropdown"===this.endIconType})}>
                                ${this.renderIcons([{src:o,class:"endIcon"}])}
                            </div>
                        `))}
            </button>
        `}},e.TagPill.styles=ea,t([ke()],e.TagPill.prototype,"tagId",void 0),t([ke()],e.TagPill.prototype,"tagName",void 0),t([ke()],e.TagPill.prototype,"programType",void 0),t([ke()],e.TagPill.prototype,"selectionMode",void 0),t([ke()],e.TagPill.prototype,"ariaRole",void 0),t([ke()],e.TagPill.prototype,"ariaLabel",void 0),t([ke({type:Boolean})],e.TagPill.prototype,"darkMode",void 0),t([ke({type:Boolean})],e.TagPill.prototype,"selected",void 0),t([ke({type:Boolean})],e.TagPill.prototype,"inactive",void 0),t([ke({type:Boolean})],e.TagPill.prototype,"circular",void 0),t([ke()],e.TagPill.prototype,"handleClick",void 0),t([ke({type:Boolean})],e.TagPill.prototype,"noSelectionChange",void 0),t([ke({type:Number})],e.TagPill.prototype,"visibilityThreshold",void 0),t([ke()],e.TagPill.prototype,"handleVisibilityChange",void 0),t([ke({type:Array})],e.TagPill.prototype,"prefixIcons",void 0),t([ke({type:Array})],e.TagPill.prototype,"suffixIcons",void 0),t([ke()],e.TagPill.prototype,"endIconType",void 0),t([ke({type:Object})],e.TagPill.prototype,"displayParameters",void 0),t([ke()],e.TagPill.prototype,"onVisibilityChange",null),t([ke()],e.TagPill.prototype,"onClick",null),e.TagPill=t([ze("tag-pill")],e.TagPill);var ta=v`
    .tagsRows {
        display: grid;
        flex-direction: column;
        padding: 0;
        row-gap: var(--bds-size-spacing-small);
        overflow-x: scroll;

        /* Hide scroll bar */
        -ms-overflow-style: none; /* Edge */
        scrollbar-width: none; /* Firefox */
    }

    /* Chrome & Safari */
    .tagsRows::-webkit-scrollbar {
        display: none;
    }

    .tagsRow {
        all: unset;
        display: flex;
        align-items: center;
        gap: var(--bds-size-spacing-x-small);
    }

    /* Used to add a fake padding that will disappear on scroll at the beginning of the tag rows */
    .tagsRow.addPseudoPadding::before,
    .tagsRow.addPseudoPadding::after {
        content: '';
        display: inline-block;
        min-width: var(--bds-size-spacing-medium);
    }

    .tagsRow.addPseudoPaddingRight::after {
        content: '';
        display: inline-block;
        min-width: var(--bds-size-spacing-medium);
    }
`;class ia extends be{constructor(){super(...arguments),this.tags=[],this.selectionMode="multi",this.noSelectionChange=!1,this.darkMode=!1,this.ariaLabel=""}renderTag(e){return G`
            <li style="all: unset" role="listitem">
                <tag-pill
                    tagId=${e.id}
                    tagName=${e.name}
                    programType=${$t(e.programType)}
                    selectionMode=${this.selectionMode}
                    ariaLabel=${$t(e.ariaLabel)}
                    ?darkMode=${this.darkMode}
                    ?noSelectionChange=${e.noSelectionChange||this.noSelectionChange}
                    ?selected=${e.selected}
                    ?inactive=${e.inactive}
                    visibilityThreshold=${$t(this.tagVisibilityThreshold)}
                    .handleClick=${e=>this.onTagClickCallback(e)}
                    .handleVisibilityChange=${this.handleTagVisibilityChange}
                    .prefixIcons=${e.prefixIcons}
                    .suffixIcons=${e.suffixIcons}
                    .endIconType=${e.endIconType}
                    .displayParameters=${e.displayParameters}>
                </tag-pill>
            </li>
        `}renderTags(){var e,t;return null!==(t=null===(e=this.tags)||void 0===e?void 0:e.map((e=>this.renderTag(e))))&&void 0!==t?t:Q}onTagClickCallback(e){var t;"single"===this.selectionMode&&(this.tags=this.tags.map((t=>Object.assign(Object.assign({},t),{selected:t.id===e.tagId&&e.selected})))),null===(t=this.handleTagClick)||void 0===t||t.call(this,e)}get onTagClick(){return this.handleTagClick}set onTagClick(e){this.handleTagClick=e}get onTagVisibilityChange(){return this.handleTagVisibilityChange}set onTagVisibilityChange(e){this.handleTagVisibilityChange=e}}t([ke({type:Array})],ia.prototype,"tags",void 0),t([ke()],ia.prototype,"selectionMode",void 0),t([ke({type:Boolean})],ia.prototype,"noSelectionChange",void 0),t([ke({type:Boolean})],ia.prototype,"darkMode",void 0),t([ke()],ia.prototype,"ariaLabel",void 0),t([ke()],ia.prototype,"handleTagClick",void 0),t([ke({type:Number})],ia.prototype,"tagVisibilityThreshold",void 0),t([ke()],ia.prototype,"handleTagVisibilityChange",void 0),t([ke()],ia.prototype,"onTagClick",null),t([ke()],ia.prototype,"onTagVisibilityChange",null),e.TagsRows=class extends ia{constructor(){super(...arguments),this.scrollingContentRef=wt(),this.numRows=1,this.addPseudoPadding=!1,this.addPseudoPaddingRight=!1,this.renderTagsRows=e=>{const t=[];for(let i=0;i<this.numRows;i+=1){const o=e.filter(((e,t)=>t%this.numRows===i)).map((e=>this.renderTag(e)));t.push(G`
                <ul
                    aria-label=${this.ariaLabel}
                    tabindex="0"
                    role="list"
                    class=${Xe({tagsRow:!0,addPseudoPadding:this.addPseudoPadding,addPseudoPaddingRight:this.addPseudoPaddingRight})}>
                    ${o}
                </ul>
            `)}return t}}scrollContentTo(e){var t;null===(t=this.scrollingContentRef.value)||void 0===t||t.scrollTo({left:e,behavior:"smooth"})}render(){return G`
            <div class="tagsRows" ${St(this.scrollingContentRef)}>
                ${this.renderTagsRows(this.tags)}
            </div>
        `}},e.TagsRows.styles=ta,t([ke({type:Number})],e.TagsRows.prototype,"numRows",void 0),t([ke({type:Boolean})],e.TagsRows.prototype,"addPseudoPadding",void 0),t([ke({type:Boolean})],e.TagsRows.prototype,"addPseudoPaddingRight",void 0),e.TagsRows=t([ze("tags-rows")],e.TagsRows);var oa=v`
    .tagsScroller {
        display: flex;
        align-items: center;
        position: relative;
    }

    .tagsContainer {
        all: unset;
        display: inline-flex;
        align-items: center;
        gap: var(--bds-size-spacing-x-small);
        padding: 0 44px;
    }

    .scrollingContent {
        width: 100%;
        border-radius: var(--bds-size-radius-small);
        overflow: scroll;

        /* Hide scroll bar */
        -ms-overflow-style: none; /* Edge */
        scrollbar-width: none; /* Firefox */
    }

    /* Chrome & Safari */
    .scrollingContent::-webkit-scrollbar {
        display: none;
    }

    .navArrowContainer {
        height: 36px;
        width: 36px;
        border-radius: var(--bds-size-radius-small);
        position: absolute;
        display: inline-flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border: var(--bds-size-line-weight-small) solid #d5d9d9;
        background-color: #fff;
        box-shadow: 0 var(--bds-size-line-weight-medium) 6px rgba(0, 0, 0, 15%);
        cursor: pointer;
        user-select: none;
    }

    .navArrowContainer.left {
        left: 0;
    }

    .navArrowContainer.right {
        right: 0;
    }

    .navArrowContainer.dark {
        border-color: #d5d9d9;
        background-color: #0f1111;
    }

    .navArrowContainer.inactive {
        box-shadow: none;
        cursor: default;
    }

    .navArrowContainer:not(.inactive):hover {
        background-color: #f8f8f8;
    }

    .navArrowContainer.dark:not(.inactive):hover {
        background-color: #262828;
    }
`;e.TagsScroller=class extends ia{constructor(){super(...arguments),this.scrollingContentRef=wt(),this.BUFFER_WIDTH=1,this.DURATION_FOR_TAG_UPDATE_MS=360,this.scrollPercentage=.75,this.showLeftArrow=!1,this.showRightArrow=!1}updateNavArrows(){const e=this.scrollingContentRef.value;e&&(this.showLeftArrow=e.scrollLeft>0,this.showRightArrow=Math.abs(e.scrollWidth-e.clientWidth-e.scrollLeft)>=this.BUFFER_WIDTH)}firstUpdated(){if(this.updateNavArrows(),this.scrollingContentRef.value){new ResizeObserver((()=>this.updateNavArrows())).observe(this.scrollingContentRef.value)}}scrollContent(e){const t=this.scrollingContentRef.value;if(!t)return;const i=Math.round(t.clientWidth*this.scrollPercentage);if("left"===e){const e=hi()?t.scrollLeft-i:Math.max(0,t.scrollLeft-i);t.scrollTo({left:e,behavior:"smooth"})}"right"===e&&t.scrollTo({left:Math.min(t.scrollLeft+i,t.scrollWidth-t.clientWidth+this.BUFFER_WIDTH),behavior:"smooth"})}scrollContentTo(e){var t;null===(t=this.scrollingContentRef.value)||void 0===t||t.scrollTo({left:e,behavior:"smooth"})}onTagClickCallback(e){super.onTagClickCallback(e),setTimeout((()=>{this.updateNavArrows()}),this.DURATION_FOR_TAG_UPDATE_MS)}render(){return G`
            <div class="tagsScroller">
                <div
                    class=${Xe({navArrowContainer:!0,left:!0,inactive:!this.showLeftArrow,dark:this.darkMode})}
                    @click=${()=>this.scrollContent("left")}
                    aria-hidden="true">
                    <img
                        src=${this.darkMode?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/left-arrow-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/left-arrow-light.svg"}
                        role="presentation" />
                </div>
                <div
                    class="scrollingContent"
                    @scroll=${this.updateNavArrows}
                    ${St(this.scrollingContentRef)}>
                    <ul class="tagsContainer" tabindex="0" aria-label=${this.ariaLabel} role="list">
                        ${this.renderTags()}
                    </ul>
                </div>
                <div
                    class=${Xe({navArrowContainer:!0,right:!0,inactive:!this.showRightArrow,dark:this.darkMode})}
                    @click=${()=>this.scrollContent("right")}
                    aria-hidden="true">
                    <img
                        src=${this.darkMode?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/right-arrow-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/right-arrow-light.svg"}
                        role="presentation" />
                </div>
            </div>
        `}},e.TagsScroller.styles=oa,t([ke({type:Number})],e.TagsScroller.prototype,"scrollPercentage",void 0),t([Ce()],e.TagsScroller.prototype,"showLeftArrow",void 0),t([Ce()],e.TagsScroller.prototype,"showRightArrow",void 0),e.TagsScroller=t([ze("tags-scroller")],e.TagsScroller);var aa=v`
    :host {
        box-sizing: border-box;
    }

    .tagFiltersSection {
        display: flex;
        flex-direction: column;
        gap: var(--bds-size-spacing-small);
        font-family: var(--bds-font-family-functional-body);
        color: #0f1111;
    }

    .header {
        all: unset;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-left: var(--bds-size-spacing-2x-small);
        font-weight: var(--bds-font-weight-functional-display);
        color: var(--bds-color-functional-neutral-on-surface);
    }

    .header.main {
        font-size: var(--bds-size-font-functional-display-small);
        line-height: var(--bds-size-line-height-functional-body-large);
    }

    .header.secondary {
        font-size: var(--bds-size-font-functional-body-x-large);
        line-height: var(--bds-size-line-height-functional-title-small);
    }

    .header.expandable {
        cursor: pointer;
    }

    .header.expandable:focus {
        outline: revert;
    }

    .tagsContainer {
        all: unset;
        display: inline-flex;
        flex-wrap: wrap;
        gap: var(--bds-size-spacing-small) var(--bds-size-spacing-x-small);
    }
`;e.TagFiltersSection=class extends ia{constructor(){super(...arguments),this.header="",this.headerSize="main",this.expandable=!1,this.expanded=!1}renderExpanderIcon(e){const t=this.darkMode?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/chevron-down-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/chevron-down-light.svg",i=this.darkMode?"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/chevron-up-dark.svg":"https://m.media-amazon.com/images/G/01/Books/BooksDesignSystem/chevron-up-light.svg";return G`<img src=${e?i:t} aria-hidden="true" />`}renderHeader(){return this.expandable?G`
                <button
                    class=${Xe({header:!0,main:"main"===this.headerSize,secondary:"secondary"===this.headerSize,expandable:!0})}
                    aria-expanded=${this.expanded}
                    @click=${this.onHeaderClick}>
                    <span>${this.header}</span>
                    ${this.renderExpanderIcon(this.expanded)}
                </button>
            `:G`
            <div
                class=${Xe({header:!0,main:"main"===this.headerSize,secondary:"secondary"===this.headerSize,expandable:!1})}
                role="heading"
                aria-level="3">
                ${this.header}
            </div>
        `}onHeaderClick(){this.expanded=!this.expanded}render(){if(this.tags.length)return G`
            <div class="tagFiltersSection">
                ${zt(this.header&&this.headerSize,(()=>this.renderHeader()))}
                ${zt(!this.expandable||this.expanded,(()=>G`
                        <ul
                            class="tagsContainer"
                            aria-label=${this.ariaLabel}
                            tabindex="0"
                            role="list">
                            ${this.renderTags()}
                        </ul>
                    `))}
            </div>
        `}},e.TagFiltersSection.styles=aa,t([ke()],e.TagFiltersSection.prototype,"header",void 0),t([ke()],e.TagFiltersSection.prototype,"headerSize",void 0),t([ke({type:Boolean})],e.TagFiltersSection.prototype,"expandable",void 0),t([ke({type:Boolean})],e.TagFiltersSection.prototype,"expanded",void 0),e.TagFiltersSection=t([ze("tag-filters-section")],e.TagFiltersSection);var ra=v`
    .tagLabels,
    .tagLabelContainer {
        all: unset;
        display: inline-flex;
        align-items: center;
        font-family: var(--bds-font-family-functional-body);
        line-height: var(--bds-size-line-height-functional-body-small);
    }

    .tagLabels {
        flex-wrap: wrap;
    }

    .tagLabels.navigational {
        row-gap: var(--bds-size-spacing-2x-small);
    }

    .tagLabel {
        font-size: var(--bds-size-font-functional-body-small);
        color: var(--bds-color-functional-neutral-on-surface);
        white-space: nowrap;
    }

    .tagLabel.navigational {
        color: var(--bds-link-color-text-active);
        font-weight: bold;
        text-decoration: underline;
    }

    .tagLabel.navigational:hover {
        color: var(--bds-link-color-text-hover);
    }

    .tagLabelIcon {
        margin-right: var(--bds-size-utils-padding-6);
    }

    .dividerDot {
        font-size: var(--bds-size-font-functional-body-small);
        margin: 0 var(--bds-size-spacing-x-small);
    }

    .dividerDot.light {
        color: #1196ab;
    }

    .dividerDot.dark {
        color: #c8f3fa;
    }

    .dividerDot.navigational.light {
        color: #888c8c;
    }

    .dividerDot.navigational.dark {
        color: #d5d9d9;
    }
`;e.TagLabels=class extends be{constructor(){super(...arguments),this.tags=[],this.darkMode=!1,this.ariaLabel=""}renderTagLabel(e,t){const i=!!e.link,o=i?G`
                <a
                    href=${$t(e.link)}
                    target="_blank"
                    aria-label=${$t(e.ariaLabel)}
                    class=${Xe({tagLabel:!0,navigational:!0,light:!this.darkMode,dark:this.darkMode})}>
                    ${e.displayText}
                </a>
            `:G`
                <span
                    aria-label=${$t(e.ariaLabel)}
                    class=${Xe({tagLabel:!0,navigational:!1,light:!this.darkMode,dark:this.darkMode})}>
                    ${e.displayText}
                </span>
            `;return G`
            <li class="tagLabelContainer" role="listitem">
                ${this.renderIcons(e.prefixIcons)}
                ${o}
                ${zt(t,(()=>G`
                            <span
                                aria-hidden="true"
                                class=${Xe({dividerDot:!0,navigational:i,light:!this.darkMode,dark:this.darkMode})}>
                                •
                            </span>
                        `))}
            </li>
        `}renderIcons(e){return null==e?void 0:e.map((e=>G`
                <span class="tagLabelIcon">
                    <img
                        src=${e.src}
                        alt=${$t(e.altText)}
                        aria-hidden=${!e.altText}
                        class=${$t(e.class)}
                        draggable="false" />
                </span>
            `))}render(){var e,t;return G`
            <ul
                class=${Xe({tagLabels:!0,navigational:this.tags.some((e=>e.link))})}
                aria-label=${$t(this.ariaLabel)}
            >
                ${null!==(t=null===(e=this.tags)||void 0===e?void 0:e.map(((e,t)=>this.renderTagLabel(e,t!==this.tags.length-1))))&&void 0!==t?t:Q}
            </ul>
        `}},e.TagLabels.styles=ra,t([ke({type:Array})],e.TagLabels.prototype,"tags",void 0),t([ke({type:Boolean})],e.TagLabels.prototype,"darkMode",void 0),t([ke()],e.TagLabels.prototype,"ariaLabel",void 0),e.TagLabels=t([ze("tag-labels")],e.TagLabels);var sa=v`
    :host {
        display: inline;
    }

    .bds-link {
        display: inline-flex;
        align-items: center;
        gap: var(--bds-size-spacing-2x-small);
        text-decoration: underline;
        cursor: pointer;
        border: none;
        background: none;
        margin: 0;
        font-family: var(--bds-font-family-functional-label);
        font-weight: var(--bds-font-weight-functional-label);
        color: var(--bds-link-color-text-active);
    }

    .bds-link.base {
        font-size: var(--bds-size-font-functional-label-medium);
        line-height: var(--bds-size-line-height-functional-label-medium);
    }

    .bds-link.small {
        font-size: var(--bds-size-font-functional-label-small);
        line-height: var(--bds-size-line-height-functional-label-small);
    }

    .bds-link:hover {
        color: var(--bds-link-color-text-hover);
    }

    .bds-link__icon {
        width: 16px;
        height: 16px;
        background-color: var(--bds-link-color-icon-active);
    }

    .bds-link__icon:dir(rtl) {
        transform: scaleX(-1);
    }
`;e.Link=class extends be{constructor(){super(...arguments),this.layout="base"}renderIcon(){return this.iconName?G`
            <div
                class="bds-link__icon"
                style="
                    mask: url(${bt(this.iconName)}) no-repeat center;
                    mask-size: 100%;
                "></div>
        `:Q}render(){return G`
            <a
                href=${$t(this.href)}
                class="bds-link ${this.layout}"
                aria-label=${$t(this.accessibilityLabel)}>
                ${this.label} ${zt(this.iconName,(()=>this.renderIcon()))}
            </a>
        `}},e.Link.styles=sa,t([ke({type:String})],e.Link.prototype,"href",void 0),t([ke({type:String})],e.Link.prototype,"label",void 0),t([ke({type:String})],e.Link.prototype,"layout",void 0),t([ke({type:String})],e.Link.prototype,"iconName",void 0),t([ke({type:String})],e.Link.prototype,"accessibilityLabel",void 0),e.Link=t([ze("bds-link")],e.Link);var na=v`
    :host {
        font-family: var(--bds-font-family-functional-body);
        display: block;
    }

    .banner-container {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: stretch;
    }

    .banner-text {
        font-size: var(--bds-size-font-functional-headline-small);
        font-weight: var(--bds-font-weight-functional-headline);
        line-height: var(--bds-size-line-height-functional-headline-small);
        padding: var(--bds-size-spacing-medium);
    }

    .with-adornment {
        padding-left: 0;
    }

    /* Default styling */
    .default {
        background-color: var(--bds-color-functional-core-primary);
        color: var(--bds-color-functional-core-on-primary);
    }

    /* Promotional styling */
    .promotional {
        background: linear-gradient(
            270deg,
            var(--bds-color-expressive-extended-red-queen) 0%,
            var(--bds-color-expressive-extended-ruby-slippers) 100%
        );
        color: var(--bds-color-functional-neutral-on-surface-inverse);
    }
`;e.HeaderBanner=class extends be{renderImage(){return this.adornmentImageUrl&&this.adornmentImageAltText?G`
            <div>
                <img src="${this.adornmentImageUrl}" alt="${this.adornmentImageAltText}" />
            </div>
        `:Q}renderAdornment(){return"image"===this.adornmentType?this.renderImage():Q}render(){const e=this.adornmentType?this.renderAdornment():null,t=!!e&&e!==Q;return G`
            <div class="banner-container ${this.bannerType}">
                ${zt(t,(()=>e))}
                <div
                    class=${Xe({"banner-text":!0,[this.bannerType]:!0,"with-adornment":t})}>
                    ${this.bannerText}
                </div>
            </div>
        `}},e.HeaderBanner.styles=na,t([ke({type:String})],e.HeaderBanner.prototype,"bannerType",void 0),t([ke({type:String})],e.HeaderBanner.prototype,"bannerText",void 0),t([ke({type:String})],e.HeaderBanner.prototype,"adornmentType",void 0),t([ke({type:String})],e.HeaderBanner.prototype,"adornmentImageUrl",void 0),t([ke({type:String})],e.HeaderBanner.prototype,"adornmentImageAltText",void 0),e.HeaderBanner=t([ze("bds-header-banner"),He],e.HeaderBanner);var la=v`
    :host {
        display: inline-block;
        font-family: var(--bds-font-family-functional-body);
    }

    :host(.in-button-group) {
        display: inline-flex;
        margin-right: var(--bds-size-spacing-medium);
        flex: 1;
        max-width: none;
    }

    :host(.in-button-group:last-child) {
        margin-right: 0;
    }

    button {
        min-width: var(--bds-size-tap-target-minimum, 130px);
        min-height: var(--bds-size-tap-target-minimum); /* Minimum touch target size for mobile */
        width: auto;
        padding: var(--bds-size-spacing-medium);
        border: var(--bds-size-line-weight-small) solid;
        border-radius: var(--bds-size-radius-small);
        display: flex;
        flex-direction: column;
        gap: var(--bds-size-spacing-small);
        position: relative;
        transition: transform 0.1s ease;

        /* Button reset styles */
        background: none;
        font: inherit;
        cursor: pointer;
        text-align: left;
        margin: 0;
        appearance: none;

        /* Ensure text doesn't overflow on small screens */
        word-wrap: break-word;
        overflow-wrap: break-word;

        /* Center content for toggle button use case */
        justify-content: center;
        align-items: center;
    }

    button.selected {
        border-color: var(--bds-color-functional-neutral-outline-variant);
        background: var(--bds-chip-color-container-background-on);
        color: var(--bds-color-functional-neutral-on-surface);
        box-shadow: inset 0 0 0 2px var(--bds-chip-color-container-outline-on-focus);
    }

    button.unselected {
        border-color: var(--bds-color-functional-neutral-outline-variant);
        background: var(--bds-chip-color-container-background-off);
        color: var(--bds-color-functional-neutral-on-surface);
    }

    /* Touch feedback for mobile devices */
    button:active {
        transform: scale(0.98);
    }

    button:disabled {
        cursor: default;
    }

    /* Base size styling */
    .base {
        padding: var(--bds-size-spacing-medium);
        font-size: var(--bds-size-font-functional-body-large);
        line-height: var(--bds-size-line-height-functional-body-large);
        font-weight: var(--bds-font-weight-functional-display);
    }

    /* Small size styling */
    .small {
        padding: var(--bds-size-spacing-small);
        font-size: var(--bds-size-font-functional-body-small);
        line-height: var(--bds-size-line-height-functional-body-small);
    }

    /* Disabled states */
    button.unselected:disabled {
        color: var(--bds-color-functional-utils-on-surface-inactive);
        background: var(--bds-color-functional-neutral-surface);
        border-color: var(--bds-color-functional-utils-outline-inactive);
    }

    button.selected:disabled {
        color: var(--bds-color-functional-utils-on-surface-inactive);
        background: var(--bds-color-functional-utils-surface-inactive);
        border-color: var(--bds-color-functional-utils-outline-inactive);
    }
`;class da{constructor(e,t,i){this.button=e,this.getState=t,this.setState=i}get isSelected(){return this.getState()}select(){var e,t;this.isSelected||(this.setState(!0),null===(t=(e=this.button).handleToggle)||void 0===t||t.call(e))}deselect(){var e,t;this.isSelected&&this.canDeselect()&&(this.setState(!1),null===(t=(e=this.button).handleToggle)||void 0===t||t.call(e))}canDeselect(){return!this.button.preventDeselect}}class ca{constructor(e,t){this.button=e,this.context=t}get isSelected(){return this.context.selectedButtonIds.includes(this.button.buttonId)}select(){var e,t,i,o;this.isSelected||(null===(t=(e=this.context).onButtonToggle)||void 0===t||t.call(e,this.button.buttonId),null===(o=(i=this.button).handleToggle)||void 0===o||o.call(i))}deselect(){var e,t,i,o;this.isSelected&&(null===(t=(e=this.context).onButtonToggle)||void 0===t||t.call(e,this.button.buttonId),null===(o=(i=this.button).handleToggle)||void 0===o||o.call(i))}canDeselect(){return!0}}e.ToggleButton=class extends Ne{constructor(){super(...arguments),this._isSelected=!1,this.size="base",this.isInactive=!1,this.isAvailable=!0,this.preventDeselect=!1,this.onToggleHandler=()=>{if(this.isInactive)return;const e=this.isSelected;Re.logCountMetric("toggle-button-clicked-"+(e?"selected":"unselected")),this.toggle()}}static get styles(){return[la]}get selectionBehavior(){return this.groupContext&&this.buttonId?new ca(this,this.groupContext):new da(this,(()=>this._isSelected),(e=>{this._isSelected=e}))}get isSelected(){return this.selectionBehavior.isSelected}set isSelected(e){e?this.select():this.deselect()}get name(){return this.buttonId}set name(e){this.buttonId=e}select(){this.selectionBehavior.select()}deselect(){this.selectionBehavior.deselect()}toggle(){this.isSelected?this.deselect():this.select()}enable(){return this.isInactive=!1,this}disable(){return this.isInactive=!0,this}setAvailable(){return this.isAvailable=!0,this}setUnavailable(){return this.isAvailable=!1,this}setSelected(){return this.select(),this}setUnselected(){return this.deselect(),this}isEnabled(){return!this.isInactive}getIsSelected(){return this.isSelected}getIsAvailable(){return this.isAvailable}getButtonClasses(){const e=this.isSelected;return{selected:e,unselected:!e,base:"base"===this.size,small:"small"===this.size}}render(){return G`
            <button
                aria-label=${$t(this.accessibilityLabel)}
                aria-pressed=${this.isSelected}
                @click=${this.onToggleHandler}
                class="${Xe(this.getButtonClasses())}"
                ?disabled=${this.isInactive||!this.isAvailable}
                ?hidden=${!this.isAvailable}>
                <slot></slot>
            </button>
        `}},t([ke({type:String})],e.ToggleButton.prototype,"accessibilityLabel",void 0),t([ke({type:Boolean})],e.ToggleButton.prototype,"_isSelected",void 0),t([ke({type:String})],e.ToggleButton.prototype,"size",void 0),t([ke({type:Boolean})],e.ToggleButton.prototype,"isInactive",void 0),t([ke({type:Boolean})],e.ToggleButton.prototype,"isAvailable",void 0),t([ke({type:Boolean})],e.ToggleButton.prototype,"preventDeselect",void 0),t([ke()],e.ToggleButton.prototype,"handleToggle",void 0),t([ke({type:String})],e.ToggleButton.prototype,"buttonId",void 0),t([ye({context:$e,subscribe:!0})],e.ToggleButton.prototype,"renderContext",void 0),t([ye({context:Ue,subscribe:!0})],e.ToggleButton.prototype,"groupContext",void 0),e.ToggleButton=t([ze("bds-toggle-button"),He],e.ToggleButton);var ua=v`
    :host {
        font-family: var(--bds-font-family-functional-body);
        display: block;
    }

    .promo-buy-box {
        display: grid;
        grid-template-rows: auto auto auto auto auto auto;
        gap: var(--bds-size-spacing-small);
        width: 100%;
    }

    .price-section {
        display: flex;
        flex-direction: column;
        gap: var(--bds-size-spacing-2x-small);
    }

    .price-row {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .price-label {
        font-size: var(--bds-size-font-functional-body-small);
        font-weight: var(--bds-font-weight-functional-body);
        line-height: var(--bds-size-line-height-functional-body-small);
        color: var(--bds-color-functional-neutral-on-surface);
    }

    .price-amount {
        font-size: var(--bds-size-font-functional-title-large);
        font-weight: var(--bds-font-weight-functional-headline);
        line-height: var(--bds-size-line-height-functional-title-large);
        color: var(--bds-color-functional-neutral-on-surface);
    }

    .price-subtext {
        font-size: var(--bds-size-font-functional-body-small);
        font-weight: var(--bds-font-weight-functional-body);
        line-height: var(--bds-size-line-height-functional-body-small);
        color: var(--bds-color-functional-neutral-on-surface-variant);
        text-align: right;
    }

    .points-section {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .points-label {
        font-size: var(--bds-size-font-functional-body-small);
        font-weight: var(--bds-font-weight-functional-body);
        line-height: var(--bds-size-line-height-functional-body-small);
        color: var(--bds-color-functional-neutral-on-surface);
    }

    .points-amount {
        font-size: var(--bds-size-font-functional-body-small);
        font-weight: var(--bds-font-weight-functional-headline);
        line-height: var(--bds-size-line-height-functional-body-small);
        color: var(--bds-color-functional-neutral-on-surface);
    }

    .slot-container {
        width: 100%;
    }

    .button-section {
        margin-top: var(--bds-size-spacing-x-small);
        display: flex;
        justify-content: center;
    }

    .button-section bds-buy-button {
        width: 100%;
        max-width: 400px;
    }

    .charge-notice {
        font-size: var(--bds-size-font-functional-body-small);
        font-weight: var(--bds-font-weight-functional-body);
        line-height: var(--bds-size-line-height-functional-body-small);
        color: var(--bds-color-functional-neutral-on-surface-variant);
        text-align: center;
        margin-top: var(--bds-size-spacing-2x-small);
    }

    .legal-text {
        font-size: var(--bds-size-font-functional-body-small);
        font-weight: var(--bds-font-weight-functional-body);
        line-height: var(--bds-size-line-height-functional-body-small);
        color: var(--bds-color-functional-neutral-on-surface-variant);
        text-align: center;
        margin-top: var(--bds-size-spacing-x-small);
    }
`;e.PromoBuyBox=class extends be{constructor(){super(...arguments),this.buttonCategory="buy",this.buttonEmphasis="filled",this.buttonSize="base",this.isButtonInactive=!1}render(){return G`
            <div class="promo-buy-box">
                <div class="price-section">
                    <div class="price-row">
                        <div class="price-label">${this.priceLabel}</div>
                        <div class="price-amount">${this.price}</div>
                    </div>
                    ${zt(this.taxIncluded&&this.taxIncludedUrl,(()=>G`<div class="price-subtext">
                            <bds-link
                                href=${$t(this.taxIncludedUrl)}
                                label=${$t(this.taxIncluded)}
                                layout="small"></bds-link>
                        </div>`))}
                </div>

                ${zt(this.pointsLabel&&this.points,(()=>G`<div class="points-section">
                        <div class="points-label">${this.pointsLabel}</div>
                        <div class="points-amount">${this.points}</div>
                    </div>`))}

                <div class="slot-container">
                    <slot></slot>
                </div>

                <div class="button-section">
                    <bds-buy-button
                        content=${this.buttonText}
                        category=${$t(this.buttonCategory)}
                        emphasis=${$t(this.buttonEmphasis)}
                        size=${$t(this.buttonSize)}
                        accessibilityLabel=${$t(this.accessibilityLabel)}
                        .handleClick=${this.handleButtonClick}
                        .callToAction=${this.callToAction}
                        .biFrostRequestParams=${this.biFrostRequestParams}
                        ?isInactive=${this.isButtonInactive}
                        ?fullWidth=${!0}>
                    </bds-buy-button>
                </div>

                ${zt(this.chargeNotice,(()=>G`<div class="charge-notice">${this.chargeNotice}</div>`))}
                ${zt(this.legalRichContent,(()=>G`<div class="legal-text">
                        <bds-rich-content .content=${this.legalRichContent}></bds-rich-content>
                    </div>`))}
            </div>
        `}},e.PromoBuyBox.styles=ua,t([ke({type:String})],e.PromoBuyBox.prototype,"priceLabel",void 0),t([ke({type:String})],e.PromoBuyBox.prototype,"price",void 0),t([ke({type:String})],e.PromoBuyBox.prototype,"taxIncluded",void 0),t([ke({type:String})],e.PromoBuyBox.prototype,"taxIncludedUrl",void 0),t([ke({type:String})],e.PromoBuyBox.prototype,"pointsLabel",void 0),t([ke({type:String})],e.PromoBuyBox.prototype,"points",void 0),t([ke({type:String})],e.PromoBuyBox.prototype,"buttonText",void 0),t([ke({type:Object})],e.PromoBuyBox.prototype,"legalRichContent",void 0),t([ke({type:String})],e.PromoBuyBox.prototype,"chargeNotice",void 0),t([ke({type:String})],e.PromoBuyBox.prototype,"accessibilityLabel",void 0),t([ke({type:String})],e.PromoBuyBox.prototype,"buttonCategory",void 0),t([ke({type:String})],e.PromoBuyBox.prototype,"buttonEmphasis",void 0),t([ke({type:String})],e.PromoBuyBox.prototype,"buttonSize",void 0),t([ke()],e.PromoBuyBox.prototype,"handleButtonClick",void 0),t([ke({type:Object})],e.PromoBuyBox.prototype,"callToAction",void 0),t([ke({type:Object})],e.PromoBuyBox.prototype,"biFrostRequestParams",void 0),t([ke({type:Boolean})],e.PromoBuyBox.prototype,"isButtonInactive",void 0),e.PromoBuyBox=t([ze("bds-promo-buy-box")],e.PromoBuyBox);var ba=v`
    :host {
        display: inline-block;
        font-family: var(--bds-font-family-functional-body);
    }

    .offer-content {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        justify-content: flex-start;
        text-overflow: ellipsis;
    }

    .title {
        color: var(--bds-color-functional-neutral-on-surface);
        font-size: var(--bds-size-font-functional-body-large);
        line-height: var(--bds-size-line-height-functional-body-large);
        font-weight: var(--bds-font-weight-functional-display);
        padding-bottom: var(--bds-size-spacing-2x-small);
    }

    .subtitle {
        font-size: var(--bds-size-font-functional-body-medium);
        line-height: var(--bds-size-line-height-functional-body-small);
        color: var(--bds-color-functional-neutral-on-surface);
        font-weight: var(--bds-font-weight-functional-body);
        padding-bottom: var(--bds-size-spacing-2x-small);
    }

    .selected {
        font-weight: var(--bds-font-weight-expressive-display);
    }

    .selectedlight {
        color: var(--bds-color-functional-supplemental-discount);
    }
`;e.OfferBox=class extends Ne{get isSelected(){return this.groupContext.selectedButtonIds.includes(this.buttonId)}renderBookDealBadge(){return zt(this.dealBadge,(()=>G`
                <div class="book-deal-badge">
                    <bds-book-deal-badge .dealBadge=${this.dealBadge}></bds-book-deal-badge>
                </div>
            `))}render(){var e;const t={subtitle:!0,selected:this.isSelected,selectedlight:this.isSelected&&"light"===(null===(e=this.renderContext)||void 0===e?void 0:e.theme)};return this.groupContext?G`
                  <bds-toggle-button
                      buttonId=${this.buttonId}
                      ?preventDeselect=${!0}
                      accessibilityLabel=${$t(this.accessibilityLabel)}
                      .handleToggle=${this.onOfferBoxClick}>
                      <div class="offer-content">
                          <div class="title">${this.title}</div>
                          ${zt(this.subTitle,(()=>G`<div class=${Xe(t)}>
                                      ${this.subTitle}
                                  </div>`))}
                          ${zt(this.secondarySubTitle,(()=>G`<div class="${Xe(t)}">
                                      ${this.secondarySubTitle}
                                  </div>`))}
                          ${this.renderBookDealBadge()}
                      </div>
                  </bds-toggle-button>
              `:G``}},e.OfferBox.styles=ba,t([ke({type:String})],e.OfferBox.prototype,"title",void 0),t([ke({type:String})],e.OfferBox.prototype,"buttonId",void 0),t([ye({context:Ue,subscribe:!0})],e.OfferBox.prototype,"groupContext",void 0),t([ke({type:String})],e.OfferBox.prototype,"subTitle",void 0),t([ke({type:String})],e.OfferBox.prototype,"secondarySubTitle",void 0),t([ke({type:Object})],e.OfferBox.prototype,"dealBadge",void 0),t([ke({type:String})],e.OfferBox.prototype,"accessibilityLabel",void 0),t([ke({attribute:!1})],e.OfferBox.prototype,"onOfferBoxClick",void 0),e.OfferBox=t([ze("bds-offer-box")],e.OfferBox),e.SKELETON_BACKWARD_COMPAT_DIMENSIONS=It,e.SPINNER_DISPLAYS=Go,e.SPINNER_SIZES=Wo,e.defaultTimerEndedText=Zt,Object.defineProperty(e,"__esModule",{value:!0})}({});
/////////////////////////
// END FILE bds-base-assets.js
/////////////////////////
/////////////////////////
// BEGIN FILE bds-global-config.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
// Custom event to signal when BDS Global Config is available
window.dispatchEvent(new Event('BooksDesignSystemGlobalsUpdated'));
/////////////////////////
// END FILE bds-global-config.js
/////////////////////////

// END ASSET BooksDesignSystemWebBuzzAssets@BaseAssets-1.0.5623.0
////////////////////////////////////////////