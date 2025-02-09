/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";window.Vaadin||={},window.Vaadin.featureFlags||={};const t={};function e(e,o="24.6.4"){if(Object.defineProperty(e,"version",{get:()=>o}),e.experimental){const o="string"==typeof e.experimental?e.experimental:`${r=e.is.split("-").slice(1).join("-"),r.replace(/-[a-z]/gu,(t=>t[1].toUpperCase()))}Component`;if(!window.Vaadin.featureFlags[o]&&!t[o])return t[o]=new Set,t[o].add(e),void Object.defineProperty(window.Vaadin.featureFlags,o,{get:()=>0===t[o].size,set(e){e&&t[o].size>0&&(t[o].forEach((t=>{customElements.define(t.is,t)})),t[o].clear())}});if(t[o])return void t[o].add(e)}var r;const i=customElements.get(e.is);if(i){const t=i.version;t&&e.version&&t===e.version?console.warn(`The component ${e.is} has been loaded twice`):console.error(`Tried to define ${e.is} version ${e.version} when version ${i.version} is already in use. Something will probably break.`)}else customElements.define(e.is,e)}class o extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}e(o);const r=globalThis,i=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;class a{constructor(t,e,o){if(this._$cssResult$=!0,o!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&s.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new a(o,t,n)},d=(t,e)=>{if(i)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const o of e){const e=document.createElement("style"),i=r.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=o.cssText,t.appendChild(e)}},c=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:u,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:m,getOwnPropertySymbols:f,getPrototypeOf:_}=Object,v=globalThis,g=v.trustedTypes,b=g?g.emptyScript:"",y=v.reactiveElementPolyfillSupport,w=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},A=(t,e)=>!u(t,e),P={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=P){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,e);void 0!==r&&h(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){const{get:r,set:i}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const n=r?.call(this);i.call(this,e),this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??P}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,e=[...m(t),...f(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(void 0!==r&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:x).toAttribute(e,o.type);this._$Em=t,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){const o=this.constructor,r=o._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=o.getPropertyOptions(r),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=r,this[r]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??A)(this[t],e))return;this.P(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t)!0!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[w("elementProperties")]=new Map,C[w("finalized")]=new Map,y?.({ReactiveElement:C}),(v.reactiveElementVersions??=[]).push("2.0.4");const E=globalThis,S=E.trustedTypes,T=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+N,I=`<${O}>`,z=document,L=()=>z.createComment(""),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,D="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,B=/>/g,F=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,U=/"/g,j=/^(?:script|style|textarea|title)$/i,Y=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),q=(Y(1),Y(2),Y(3),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),W=new WeakMap,J=z.createTreeWalker(z,129);function X(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(e):e}const K=(t,e)=>{const o=t.length-1,r=[];let i,n=2===e?"<svg>":3===e?"<math>":"",s=M;for(let e=0;e<o;e++){const o=t[e];let a,l,d=-1,c=0;for(;c<o.length&&(s.lastIndex=c,l=s.exec(o),null!==l);)c=s.lastIndex,s===M?"!--"===l[1]?s=H:void 0!==l[1]?s=B:void 0!==l[2]?(j.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=F):void 0!==l[3]&&(s=F):s===F?">"===l[0]?(s=i??M,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?F:'"'===l[3]?U:V):s===U||s===V?s=F:s===H||s===B?s=M:(s=F,i=void 0);const u=s===F&&t[e+1].startsWith("/>")?" ":"";n+=s===M?o+I:d>=0?(r.push(a),o.slice(0,d)+k+o.slice(d)+N+u):o+N+(-2===d?e:u)}return[X(t,n+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class Z{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,n=0;const s=t.length-1,a=this.parts,[l,d]=K(t,e);if(this.el=Z.createElement(l,o),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=J.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(k)){const e=d[n++],o=r.getAttribute(t).split(N),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:s[2],strings:o,ctor:"."===s[1]?rt:"?"===s[1]?it:"@"===s[1]?nt:ot}),r.removeAttribute(t)}else t.startsWith(N)&&(a.push({type:6,index:i}),r.removeAttribute(t));if(j.test(r.tagName)){const t=r.textContent.split(N),e=t.length-1;if(e>0){r.textContent=S?S.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],L()),J.nextNode(),a.push({type:2,index:++i});r.append(t[e],L())}}}else if(8===r.nodeType)if(r.data===O)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(N,t+1));)a.push({type:7,index:i}),t+=N.length-1}i++}}static createElement(t,e){const o=z.createElement("template");return o.innerHTML=t,o}}function Q(t,e,o=t,r){if(e===q)return e;let i=void 0!==r?o._$Co?.[r]:o._$Cl;const n=$(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(t),i._$AT(t,o,r)),void 0!==r?(o._$Co??=[])[r]=i:o._$Cl=i),void 0!==i&&(e=Q(t,i._$AS(t,e.values),i,r)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=(t?.creationScope??z).importNode(e,!0);J.currentNode=r;let i=J.nextNode(),n=0,s=0,a=o[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new et(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new st(i,this,t)),this._$AV.push(e),a=o[++s]}n!==a?.index&&(i=J.nextNode(),n++)}return J.currentNode=z,r}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),$(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&$(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Z.createElement(X(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new tt(r,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Z(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const i of t)r===e.length?e.push(o=new et(this.O(L()),this.O(L()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,i){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=G}_$AI(t,e=this,o,r){const i=this.strings;let n=!1;if(void 0===i)t=Q(this,t,e,0),n=!$(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const r=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=Q(this,r[o+s],e,s),a===q&&(a=this._$AH[s]),n||=!$(a)||a!==this._$AH[s],a===G?t=G:t!==G&&(t+=(a??"")+i[s+1]),this._$AH[s]=a}n&&!r&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class it extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class nt extends ot{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??G)===q)return;const o=this._$AH,r=t===G&&o!==G||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==G&&(o===G||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const at=E.litHtmlPolyfillSupport;at?.(Z,et),(E.litHtmlVersions??=[]).push("3.2.1");class lt extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const r=o?.renderBefore??e;let i=r._$litPart$;if(void 0===i){const t=o?.renderBefore??null;r._$litPart$=i=new et(e.insertBefore(L(),t),t,void 0,o??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}lt._$litElement$=!0,lt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lt});const dt=globalThis.litElementPolyfillSupport;dt?.({LitElement:lt}),(globalThis.litElementVersions??=[]).push("4.1.1");const ct=t=>class extends t{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),"theme"===t&&this._set_theme(o)}},ut=[],ht=new Set,pt=new Set;function mt(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}function ft(t,e){return(t||"").split(" ").some((t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(e)))}function _t(t){return t.map((t=>t.cssText)).join("\n")}const vt="vaadin-themable-mixin-style";function gt(t){t.prototype instanceof lt?t.elementStyles=t.finalizeStyles(t.styles):t.prototype._template.content.getElementById(vt).textContent=_t(t.getStylesForThis()),pt.forEach((e=>{const o=customElements.get(e);o!==t&&o.prototype instanceof t&&gt(o)}))}function bt(t,e,o={}){e=function(t=[]){return[t].flat(1/0).filter((t=>t instanceof a||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1)))}(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,o):ut.push({themeFor:t,styles:e,include:o.include,moduleId:o.moduleId}),t&&pt.forEach((o=>{if(ft(t,o)&&function(t){return mt(customElements.get(t))}(o)){const t=customElements.get(o);!function(t,e){const o=t.__themes;return!(!o||!e)&&o.some((t=>t.styles.some((t=>e.some((e=>e.cssText===t.cssText))))))}(t,e)?window.Vaadin&&window.Vaadin.suppressPostFinalizeStylesWarning||console.warn(`The custom element definition for "${o}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`):console.warn(`Registering styles that already exist for ${o}`),gt(t),function(t){ht.forEach((e=>{const o=e.deref();o instanceof t?function(t){if(!t.shadowRoot)return;const e=t.constructor;if(t instanceof lt)[...t.shadowRoot.querySelectorAll("style")].forEach((t=>t.remove())),d(t.shadowRoot,e.elementStyles);else{const o=t.shadowRoot.getElementById(vt),r=e.prototype._template;o.textContent=r.content.getElementById(vt).textContent}}(o):o||ht.delete(e)}))}(t)}}))}function yt(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():ut}function wt(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function xt(t){const e=[];return t.include&&[].concat(t.include).forEach((t=>{const o=yt().find((e=>e.moduleId===t));o?e.push(...xt(o),...o.styles):console.warn(`Included moduleId ${t} not found in style registry`)}),t.styles),e}function At(t){const e=`${t}-default-theme`,o=yt().filter((o=>o.moduleId!==e&&ft(o.themeFor,t))).map((t=>({...t,styles:[...xt(t),...t.styles],includePriority:wt(t.moduleId)}))).sort(((t,e)=>e.includePriority-t.includePriority));return o.length>0?o:yt().filter((t=>t.moduleId===e))}const Pt=t=>class extends(ct(t)){constructor(){super(),ht.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&pt.add(this.is),this.elementStyles)return;const t=this.prototype._template;t&&!mt(this)&&function(t,e){const o=document.createElement("style");o.id=vt,o.textContent=_t(t),e.content.appendChild(o)}(this.getStylesForThis(),t)}static finalizeStyles(t){const e=this.getStylesForThis();return t?[...[t].flat(1/0),...e]:e}static getStylesForThis(){const e=t.__themes||[],o=Object.getPrototypeOf(this.prototype),r=(o?o.constructor.__themes:[])||[];this.__themes=[...e,...r,...At(this.is)];const i=this.__themes.flatMap((t=>t.styles));return i.filter(((t,e)=>e===i.lastIndexOf(t)))}},Ct=(t,...e)=>{((t,...e)=>{const o=document.createElement("style");o.id=t,o.textContent=e.map((t=>t.toString())).join("\n").replace(":host","html"),document.head.insertAdjacentElement("afterbegin",o)})(`lumo-${t}`,e)};Ct("color-props",l`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`),bt("",l`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`,{moduleId:"lumo-color"}),Ct("sizing-props",l`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`),Ct("spacing-props",l`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`),l`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-checkbox-disabled-checkmark-color: var(--lumo-contrast-30pct);
    --vaadin-checkbox-disabled-background: var(--lumo-contrast-10pct);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-disabled-background: var(--lumo-contrast-10pct);
    --vaadin-radio-button-disabled-dot-color: var(--lumo-contrast-30pct);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-disabled-background: var(--lumo-contrast-5pct);
    --vaadin-input-field-disabled-value-color: var(--lumo-disabled-text-color);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 500;
  }
`,Ct("style-props",l`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`);const Et=l`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`;bt("",l`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`,{moduleId:"lumo-typography"}),Ct("typography-props",Et),bt("vaadin-button",l`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: var(--vaadin-button-min-width, calc(var(--_button-size) * 2));
    height: var(--_button-size);
    padding: var(--vaadin-button-padding, 0 calc(var(--_button-size) / 3 + var(--lumo-border-radius-m) / 2));
    margin: var(--vaadin-button-margin, var(--lumo-space-xs) 0);
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--vaadin-button-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--_lumo-button-text-color);
    background: var(--_lumo-button-background);
    border: var(--vaadin-button-border, none);
    border-radius: var(--vaadin-button-border-radius, var(--lumo-border-radius-m));
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
    --_button-size: var(--vaadin-button-height, var(--lumo-button-size));
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    /* Used by notification */
    --_lumo-button-background: var(--vaadin-button-background, var(--lumo-contrast-5pct));
    --_lumo-button-text-color: var(--vaadin-button-text-color, var(--lumo-primary-text-color));
    --_lumo-button-primary-background: var(--vaadin-button-primary-background, var(--lumo-primary-color));
    --_lumo-button-primary-text-color: var(--vaadin-button-primary-text-color, var(--lumo-primary-contrast-color));
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    inset: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition:
      opacity 1.4s,
      transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow:
      0 0 0 calc(1px * var(--_focus-ring-gap-on, 0)) var(--_focus-ring-gap-color, var(--lumo-base-color)),
      0 0 0 calc(var(--_focus-ring-width) + 1px * var(--_focus-ring-gap-on, 0)) var(--_focus-ring-color);
  }

  :host([theme~='primary'][focus-ring]) {
    --_focus-ring-gap-on: 1;
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    --_background: transparent !important;
    background: var(--vaadin-button-tertiary-background, var(--_background));
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    border: var(--vaadin-button-tertiary-border, none);
    color: var(--vaadin-button-tertiary-text-color, var(--lumo-primary-text-color));
    font-weight: var(--vaadin-button-tertiary-font-weight, 500);
    padding: var(--vaadin-button-tertiary-padding, 0 calc(var(--_button-size) / 6));
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background: var(--_lumo-button-primary-background);
    border: var(--vaadin-button-primary-border, none);
    color: var(--_lumo-button-primary-text-color);
    font-weight: var(--vaadin-button-primary-font-weight, 600);
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, warning, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='warning']) {
    color: var(--lumo-warning-text-color);
  }

  :host([theme~='warning'][theme~='primary']) {
    background-color: var(--lumo-warning-color);
    color: var(--lumo-warning-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`,{moduleId:"lumo-button"}),window.JSCompiler_renameProperty=function(t,e){return t};let St,Tt,kt=/(url\()([^)]*)(\))/g,Nt=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function Ot(t,e){if(t&&Nt.test(t))return t;if("//"===t)return t;if(void 0===St){St=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",St="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),St)try{return new URL(t,e).href}catch(e){return t}return Tt||(Tt=document.implementation.createHTMLDocument("temp"),Tt.base=Tt.createElement("base"),Tt.head.appendChild(Tt.base),Tt.anchor=Tt.createElement("a"),Tt.body.appendChild(Tt.anchor)),Tt.base.href=e,Tt.anchor.href=t,Tt.anchor.href||t}function It(t,e){return t.replace(kt,(function(t,o,r,i){return o+"'"+Ot(r.replace(/["']/g,""),e)+"'"+i}))}function zt(t){return t.substring(0,t.lastIndexOf("/")+1)}const Lt=!window.ShadyDOM||!window.ShadyDOM.inUse,$t=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,Lt&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})());let Rt=window.Polymer&&window.Polymer.rootPath||zt(document.baseURI||window.location.href),Dt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Mt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Ht=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Bt=window.Polymer&&window.Polymer.legacyOptimizations||!1,Ft=window.Polymer&&window.Polymer.legacyWarnings||!1,Vt=window.Polymer&&window.Polymer.syncInitialRender||!1,Ut=window.Polymer&&window.Polymer.legacyUndefined||!1,jt=window.Polymer&&window.Polymer.orderedComputed||!1,Yt=!0,qt=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Gt=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Wt=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,Jt=0;function Xt(){}Xt.prototype.__mixinApplications,Xt.prototype.__mixinSet;const Kt=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let o=Jt++;return function(r){let i=r.__mixinSet;if(i&&i[o])return r;let n=e,s=n.get(r);if(!s){s=t(r),n.set(r,s);let e=Object.create(s.__mixinSet||i||null);e[o]=!0,s.__mixinSet=e}return s}};let Zt={},Qt={};function te(t,e){Zt[t]=Qt[t.toLowerCase()]=e}function ee(t){return Zt[t]||Qt[t.toLowerCase()]}class oe extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let o=ee(t);return o&&e?o.querySelector(e):o}return null}attributeChangedCallback(t,e,o,r){e!==o&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Ot(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=zt(e)}return this.__assetpath}register(t){if(t=t||this.id){if(Mt&&void 0!==ee(t))throw te(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,te(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}oe.prototype.modules=Zt,customElements.define("dom-module",oe);const re="shady-unscoped";function ie(t){return oe.import(t)}function ne(t){const e=It((t.body?t.body:t).textContent,t.baseURI),o=document.createElement("style");return o.textContent=e,o}function se(t){const e=t.trim().split(/\s+/),o=[];for(let t=0;t<e.length;t++)o.push(...ae(e[t]));return o}function ae(t){const e=ie(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...de(e));const o=e.querySelector("template");o&&t.push(...le(o,e.assetpath)),e._styles=t}return e._styles}function le(t,e){if(!t._styles){const o=[],r=t.content.querySelectorAll("style");for(let t=0;t<r.length;t++){let i=r[t],n=i.getAttribute("include");n&&o.push(...se(n).filter((function(t,e,o){return o.indexOf(t)===e}))),e&&(i.textContent=It(i.textContent,e)),o.push(i)}t._styles=o}return t._styles}function de(t){const e=[],o=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<o.length;t++){let r=o[t];if(r.import){const t=r.import,o=r.hasAttribute(re);if(o&&!t._unscopedStyle){const e=ne(t);e.setAttribute(re,""),t._unscopedStyle=e}else t._style||(t._style=ne(t));e.push(o?t._unscopedStyle:t._style)}}return e}const ce=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;function ue(t){return t.indexOf(".")>=0}function he(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function pe(t,e){return 0===e.indexOf(t+".")}function me(t,e,o){return e+o.slice(t.length)}function fe(t){if(Array.isArray(t)){let e=[];for(let o=0;o<t.length;o++){let r=t[o].toString().split(".");for(let t=0;t<r.length;t++)e.push(r[t])}return e.join(".")}return t}function _e(t){return Array.isArray(t)?fe(t).split("."):t.toString().split(".")}function ve(t,e,o){let r=t,i=_e(e);for(let t=0;t<i.length;t++){if(!r)return;r=r[i[t]]}return o&&(o.path=i.join(".")),r}function ge(t,e,o){let r=t,i=_e(e),n=i[i.length-1];if(i.length>1){for(let t=0;t<i.length-1;t++)if(r=r[i[t]],!r)return;r[n]=o}else r[e]=o;return i.join(".")}const be={},ye=/-[a-z]/g,we=/([A-Z])/g;function xe(t){return be[t]||(be[t]=t.indexOf("-")<0?t:t.replace(ye,(t=>t[1].toUpperCase())))}function Ae(t){return be[t]||(be[t]=t.replace(we,"-$1").toLowerCase())}let Pe=0,Ce=0,Ee=[],Se=0,Te=!1,ke=document.createTextNode("");new window.MutationObserver((function(){Te=!1;const t=Ee.length;for(let e=0;e<t;e++){let t=Ee[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}Ee.splice(0,t),Ce+=t})).observe(ke,{characterData:!0});const Ne={run:t=>(Te||(Te=!0,ke.textContent=Se++),Ee.push(t),Pe++),cancel(t){const e=t-Ce;if(e>=0){if(!Ee[e])throw new Error("invalid async handle: "+t);Ee[e]=null}}},Oe=Kt((t=>class extends t{static createProperties(t){const e=this.prototype;for(let o in t)o in e||e._createPropertyAccessor(o)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,o){let r=this.__data[t],i=this._shouldPropertyChange(t,e,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=r),this.__data[t]=e,this.__dataPending[t]=e),i}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Ne.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(t,e,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,o)),this.__dataCounter--}_shouldPropertiesChange(t,e,o){return Boolean(e)}_propertiesChanged(t,e,o){}_shouldPropertyChange(t,e,o){return o!==e&&(o==o||e==e)}attributeChangedCallback(t,e,o,r){e!==o&&this._attributeToProperty(t,o),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,o,r)}_attributeToProperty(t,e,o){if(!this.__serializing){const r=this.__dataAttributes,i=r&&r[t]||t;this[i]=this._deserializeValue(e,o||this.constructor.typeForProperty(i))}}_propertyToAttribute(t,e,o){this.__serializing=!0,o=arguments.length<3?this[t]:o,this._valueToNodeAttribute(this,o,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,o){const r=this._serializeValue(e);"class"!==o&&"name"!==o&&"slot"!==o||(t=ce(t)),void 0===r?t.removeAttribute(o):t.setAttribute(o,""===r&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(t){return"boolean"==typeof t?t?"":void 0:null!=t?t.toString():void 0}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})),Ie={};let ze=HTMLElement.prototype;for(;ze;){let t=Object.getOwnPropertyNames(ze);for(let e=0;e<t.length;e++)Ie[t[e]]=!0;ze=Object.getPrototypeOf(ze)}const Le=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1,$e=Kt((t=>{const e=Oe(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(xe(t[e]))}static attributeNameForProperty(t){return Ae(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){this.hasAttribute(t)||this._valueToNodeAttribute(this,e,t)}_serializeValue(t){if("object"==typeof t){if(t instanceof Date)return t.toString();if(t){if(Le(t))return t;try{return JSON.stringify(t)}catch(t){return""}}}return super._serializeValue(t)}_deserializeValue(t,e){let o;switch(e){case Object:try{o=JSON.parse(t)}catch(e){o=t}break;case Array:try{o=JSON.parse(t)}catch(e){o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:o=isNaN(t)?String(t):Number(t),o=new Date(o);break;default:o=super._deserializeValue(t,e)}return o}_definePropertyAccessor(t,e){!function(t,e){if(!Ie[e]){let o=t[e];void 0!==o&&(t.__data?t._setPendingProperty(e,o):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=o))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})),Re={"dom-if":!0,"dom-repeat":!0};let De=!1,Me=!1;const He=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(e,o,r)=>{const i=o.getAttribute(r);t&&r.startsWith("on-")?e.setAttribute(r,t.createScript(i,r)):e.setAttribute(r,i)}})();function Be(t){let e=t.getAttribute("is");if(e&&Re[e]){let o=t;for(o.removeAttribute("is"),t=o.ownerDocument.createElement(e),o.parentNode.replaceChild(t,o),t.appendChild(o);o.attributes.length;){const{name:e}=o.attributes[0];He(t,o,e),o.removeAttribute(e)}}return t}function Fe(t,e){let o=e.parentInfo&&Fe(t,e.parentInfo);if(!o)return t;for(let t=o.firstChild,r=0;t;t=t.nextSibling)if(e.parentIndex===r++)return t}function Ve(t,e,o,r){r.id&&(e[r.id]=o)}function Ue(t,e,o){if(o.events&&o.events.length)for(let r,i=0,n=o.events;i<n.length&&(r=n[i]);i++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function je(t,e,o,r){o.templateInfo&&(e._templateInfo=o.templateInfo,e._parentTemplateInfo=r)}const Ye=Kt((t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let o=t._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=Boolean(e),o.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute&&t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,o,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,o){return this._parseTemplateNode(t.content,e,o)}static _parseTemplateNode(t,e,o){let r=!1,i=t;return"template"!=i.localName||i.hasAttribute("preserve-content")?"slot"===i.localName&&(e.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(i,e,o)||r,function(t){(function(){if(!De){De=!0;const t=document.createElement("textarea");t.placeholder="a",Me=t.placeholder===t.textContent}return Me})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}(i),i.firstChild&&this._parseTemplateChildNodes(i,e,o),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,e,o)||r),r||o.noted}static _parseTemplateChildNodes(t,e,o){if("script"!==t.localName&&"style"!==t.localName)for(let r,i=t.firstChild,n=0;i;i=r){if("template"==i.localName&&(i=Be(i)),r=i.nextSibling,i.nodeType===Node.TEXT_NODE){let o=r;for(;o&&o.nodeType===Node.TEXT_NODE;)i.textContent+=o.textContent,r=o.nextSibling,t.removeChild(o),o=r;if(e.stripWhiteSpace&&!i.textContent.trim()){t.removeChild(i);continue}}let s={parentIndex:n,parentInfo:o};this._parseTemplateNode(i,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),i.parentNode&&n++}}static _parseTemplateNestedTemplate(t,e,o){let r=t,i=this._parseTemplate(r,e);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),o.templateInfo=i,!0}static _parseTemplateNodeAttributes(t,e,o){let r=!1,i=Array.from(t.attributes);for(let n,s=i.length-1;n=i[s];s--)r=this._parseTemplateNodeAttribute(t,e,o,n.name,n.value)||r;return r}static _parseTemplateNodeAttribute(t,e,o,r,i){return"on-"===r.slice(0,3)?(t.removeAttribute(r),o.events=o.events||[],o.events.push({name:r.slice(3),value:i}),!0):"id"===r&&(o.id=i,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let o=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,r=e.content||t.content,i=document.importNode(r,!0);i.__noInsertionPoint=!e.hasInsertionPoint;let n=i.nodeList=new Array(o.length);i.$={};for(let t,r=0,s=o.length;r<s&&(t=o[r]);r++){let o=n[r]=Fe(i,t);Ve(0,i.$,o,t),je(0,o,t,e),Ue(this,o,t)}return i}_addMethodEventListenerToNode(t,e,o,r){let i=function(t,e,o){return t=t._methodHost||t,function(e){t[o]?t[o](e,e.detail):console.warn("listener method `"+o+"` not defined")}}(r=r||t,0,o);return this._addEventListenerToNode(t,e,i),i}_addEventListenerToNode(t,e,o){t.addEventListener(e,o)}_removeEventListenerFromNode(t,e,o){t.removeEventListener(e,o)}}));let qe=0;const Ge=[],We={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Je="__computeInfo",Xe=/[A-Z]/;function Ke(t,e,o){let r=t[e];if(r){if(!t.hasOwnProperty(e)&&(r=t[e]=Object.create(t[e]),o))for(let t in r){let e=r[t],o=r[t]=Array(e.length);for(let t=0;t<e.length;t++)o[t]=e[t]}}else r=t[e]={};return r}function Ze(t,e,o,r,i,n){if(e){let s=!1;const a=qe++;for(let l in o){let d=e[i?he(l):l];if(d)for(let e,c=0,u=d.length;c<u&&(e=d[c]);c++)e.info&&e.info.lastRun===a||i&&!to(l,e.trigger)||(e.info&&(e.info.lastRun=a),e.fn(t,l,o,r,e.info,i,n),s=!0)}return s}return!1}function Qe(t,e,o,r,i,n,s,a){let l=!1,d=e[s?he(r):r];if(d)for(let e,c=0,u=d.length;c<u&&(e=d[c]);c++)e.info&&e.info.lastRun===o||s&&!to(r,e.trigger)||(e.info&&(e.info.lastRun=o),e.fn(t,r,i,n,e.info,s,a),l=!0);return l}function to(t,e){if(e){let o=e.name;return o==t||!(!e.structured||!function(t,e){return 0===t.indexOf(e+".")}(o,t))||!(!e.wildcard||!pe(o,t))}return!0}function eo(t,e,o,r,i){let n="string"==typeof i.method?t[i.method]:i.method,s=i.property;n?n.call(t,t.__data[s],r[s]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function oo(t,e,o){let r=he(e);return r!==e&&(ro(t,Ae(r)+"-changed",o[e],e),!0)}function ro(t,e,o,r){let i={value:o,queueProperty:!0};r&&(i.path=r),ce(t).dispatchEvent(new CustomEvent(e,{detail:i}))}function io(t,e,o,r,i,n){let s=(n?he(e):e)!=e?e:null,a=s?ve(t,s):t.__data[e];s&&void 0===a&&(a=o[e]),ro(t,i.eventName,a,s)}function no(t,e,o,r,i){let n=t.__data[e];Dt&&(n=Dt(n,i.attrName,"attribute",t)),t._propertyToAttribute(e,i.attrName,n)}const so=(t,e,o)=>{let r=0,i=e.length-1,n=-1;for(;r<=i;){const s=r+i>>1,a=o.get(e[s].methodInfo)-o.get(t.methodInfo);if(a<0)r=s+1;else{if(!(a>0)){n=s;break}i=s-1}}n<0&&(n=i+1),e.splice(n,0,t)},ao=(t,e,o,r,i)=>{const n=e[i?he(t):t];if(n)for(let e=0;e<n.length;e++){const s=n[e];s.info.lastRun===qe||i&&!to(t,s.trigger)||(s.info.lastRun=qe,so(s.info,o,r))}};function lo(t,e,o,r,i){let n=_o(t,e,o,0,i);if(n===Ge)return!1;let s=i.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,n,!0):(t[s]=n,!1)}function co(t,e,o,r,i,n,s){o.bindings=o.bindings||[];let a={kind:r,target:i,parts:n,literal:s,isCompound:1!==n.length};if(o.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||Ae(i)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let o=0;o<a.parts.length;o++){let r=a.parts[o];r.compoundIndex=o,uo(t,e,a,r,l)}}function uo(t,e,o,r,i){if(!r.literal)if("attribute"===o.kind&&"-"===o.target[0])console.warn("Cannot set attribute "+o.target+' because "-" is not a valid attribute starting character');else{let n=r.dependencies,s={index:i,binding:o,part:r,evaluator:t};for(let o=0;o<n.length;o++){let r=n[o];"string"==typeof r&&(r=Ao(r),r.wildcard=!0),t._addTemplatePropertyEffect(e,r.rootProperty,{fn:ho,info:s,trigger:r})}}}function ho(t,e,o,r,i,n,s){let a=s[i.index],l=i.binding,d=i.part;if(n&&d.source&&e.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let r=o[e];e=me(d.source,l.target,e),a._setPendingPropertyOrPath(e,r,!1,!0)&&t._enqueueClient(a)}else{let s=i.evaluator._evaluateBinding(t,d,e,o,r,n);s!==Ge&&function(t,e,o,r,i){if(i=function(t,e,o,r){if(o.isCompound){let i=t.__dataCompoundStorage[o.target];i[r.compoundIndex]=e,e=i.join("")}return"attribute"!==o.kind&&("textContent"!==o.target&&("value"!==o.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e)),e}(e,i,o,r),Dt&&(i=Dt(i,o.target,o.kind,e)),"attribute"==o.kind)t._valueToNodeAttribute(e,i,o.target);else{let r=o.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?e[We.READ_ONLY]&&e[We.READ_ONLY][r]||e._setPendingProperty(r,i)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,i)}}(t,a,l,d,s)}}function po(t,e){if(e.isCompound){let o=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),r=e.parts,i=new Array(r.length);for(let t=0;t<r.length;t++)i[t]=r[t].literal;let n=e.target;o[n]=i,e.literal&&"property"==e.kind&&("className"===n&&(t=ce(t)),t[n]=e.literal)}}function mo(t,e,o){if(o.listenerEvent){let r=o.parts[0];t.addEventListener(o.listenerEvent,(function(t){!function(t,e,o,r,i){let n,s=t.detail,a=s&&s.path;a?(r=me(o,r,a),n=s&&s.value):n=t.currentTarget[o],n=i?!n:n,e[We.READ_ONLY]&&e[We.READ_ONLY][r]||!e._setPendingPropertyOrPath(r,n,!0,Boolean(a))||s&&s.queueProperty||e._invalidateProperties()}(t,e,o.target,r.source,r.negate)}))}}function fo(t,e,o,r,i,n){n=e.static||n&&("object"!=typeof n||n[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:i,dynamicFn:n};for(let i,n=0;n<e.args.length&&(i=e.args[n]);n++)i.literal||t._addPropertyEffect(i.rootProperty,o,{fn:r,info:s,trigger:i});return n&&t._addPropertyEffect(e.methodName,o,{fn:r,info:s}),s}function _o(t,e,o,r,i){let n=t._methodHost||t,s=n[i.methodName];if(s){let r=t._marshalArgs(i.args,e,o);return r===Ge?Ge:s.apply(n,r)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const vo=[],go="(?:[a-zA-Z_$][\\w.:$\\-*]*)",bo="(?:("+go+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",yo=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?("+go+"\\s*(?:\\(\\s*(?:(?:"+bo+"(?:,\\s*"+bo+")*)?)\\)\\s*)?)(?:]]|}})","g");function wo(t){let e="";for(let o=0;o<t.length;o++)e+=t[o].literal||"";return e}function xo(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:vo};return e[2].trim()?function(t,e){return e.args=t.map((function(t){let o=Ao(t);return o.literal||(e.static=!1),o}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t):t}return null}function Ao(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),o={name:e,value:"",literal:!1},r=e[0];switch("-"===r&&(r=e[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':o.value=e.slice(1,-1),o.literal=!0;break;case"#":o.value=Number(e),o.literal=!0}return o.literal||(o.rootProperty=he(e),o.structured=ue(e),o.structured&&(o.wildcard=".*"==e.slice(-2),o.wildcard&&(o.name=e.slice(0,-2)))),o}function Po(t,e,o){let r=ve(t,o);return void 0===r&&(r=e[o]),r}function Co(t,e,o,r){const i={indexSplices:r};Ut&&!t._overrideLegacyUndefined&&(e.splices=i),t.notifyPath(o+".splices",i),t.notifyPath(o+".length",e.length),Ut&&!t._overrideLegacyUndefined&&(i.indexSplices=[])}function Eo(t,e,o,r,i,n){Co(t,e,o,[{index:r,addedCount:i,removed:n,object:e,type:"splice"}])}const So=Kt((t=>{const e=Ye($e(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return We}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(To.length){let t=To[To.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[We.READ_ONLY];for(let o in t)e&&e[o]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=t[o])}_addPropertyEffect(t,e,o){this._createPropertyAccessor(t,e==We.READ_ONLY);let r=Ke(this,e,!0)[t];r||(r=this[e][t]=[]),r.push(o)}_removePropertyEffect(t,e,o){let r=Ke(this,e,!0)[t],i=r.indexOf(o);i>=0&&r.splice(i,1)}_hasPropertyEffect(t,e){let o=this[e];return Boolean(o&&o[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,We.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,We.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,We.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,We.COMPUTE)}_setPendingPropertyOrPath(t,e,o,r){if(r||he(Array.isArray(t)?t[0]:t)!==t){if(!r){let o=ve(this,t);if(!(t=ge(this,t,e))||!super._shouldPropertyChange(t,e,o))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,o))return function(t,e,o){let r=t.__dataLinkedPaths;if(r){let i;for(let n in r){let s=r[n];pe(n,e)?(i=me(n,s,e),t._setPendingPropertyOrPath(i,o,!0,!0)):pe(s,e)&&(i=me(s,n,e),t._setPendingPropertyOrPath(i,o,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,o);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,o){o===t[e]&&"object"!=typeof o||("className"===e&&(t=ce(t)),t[e]=o)}_setPendingProperty(t,e,o){let r=this.__dataHasPaths&&ue(t),i=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,i[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),r?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(r||this[We.NOTIFY]&&this[We.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=o),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let o=t[e];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let o in t)!e&&this[We.READ_ONLY]&&this[We.READ_ONLY][o]||this._setPendingPropertyOrPath(o,t[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,o){let r,i=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,o,r){let i=t[We.COMPUTE];if(i)if(jt){qe++;const n=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const o=t[We.COMPUTE];let r,{counts:i,ready:n,total:s}=function(t){const e=t[Je],o={},r=t[We.COMPUTE],i=[];let n=0;for(let t in e){const r=e[t];n+=o[t]=r.args.filter((t=>!t.literal)).length+(r.dynamicFn?1:0)}for(let t in r)e[t]||i.push(t);return{counts:o,ready:i,total:n}}(t);for(;r=n.shift();){e.set(r,e.size);const t=o[r];t&&t.forEach((t=>{const e=t.info.methodInfo;--s,0==--i[e]&&n.push(e)}))}if(0!==s){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),s=[];for(let t in e)ao(t,i,s,n,r);let a;for(;a=s.shift();)lo(t,"",e,0,a)&&ao(a.methodInfo,i,s,n,r);Object.assign(o,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let n=e;for(;Ze(t,i,n,o,r);)Object.assign(o,t.__dataOld),Object.assign(e,t.__dataPending),n=t.__dataPending,t.__dataPending=null}}(this,e,o,i),r=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,o,i),this._flushClients(),Ze(this,this[We.REFLECT],e,o,i),Ze(this,this[We.OBSERVE],e,o,i),r&&function(t,e,o,r,i){let n,s,a=t[We.NOTIFY],l=qe++;for(let s in e)e[s]&&(a&&Qe(t,a,l,s,o,r,i)||i&&oo(t,s,o))&&(n=!0);n&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,r,e,o,i),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,o){this[We.PROPAGATE]&&Ze(this,this[We.PROPAGATE],t,e,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,o)}_runEffectsForTemplate(t,e,o,r){const i=(e,r)=>{Ze(this,t.propertyEffects,e,o,r,t.nodeList);for(let i=t.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,e,o,r)};t.runEffects?t.runEffects(i,e,r):i(e,r)}linkPaths(t,e){t=fe(t),e=fe(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=fe(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let o={path:""};Co(this,ve(this,t,o),o.path,e)}get(t,e){return ve(e||this,t)}set(t,e,o){o?ge(o,t,e):this[We.READ_ONLY]&&this[We.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let o={path:""},r=ve(this,t,o),i=r.length,n=r.push(...e);return e.length&&Eo(this,r,o.path,i,e.length,[]),n}pop(t){let e={path:""},o=ve(this,t,e),r=Boolean(o.length),i=o.pop();return r&&Eo(this,o,e.path,o.length,0,[i]),i}splice(t,e,o,...r){let i,n={path:""},s=ve(this,t,n);return e<0?e=s.length-Math.floor(-e):e&&(e=Math.floor(e)),i=2===arguments.length?s.splice(e):s.splice(e,o,...r),(r.length||i.length)&&Eo(this,s,n.path,e,r.length,i),i}shift(t){let e={path:""},o=ve(this,t,e),r=Boolean(o.length),i=o.shift();return r&&Eo(this,o,e.path,0,0,[i]),i}unshift(t,...e){let o={path:""},r=ve(this,t,o),i=r.unshift(...e);return e.length&&Eo(this,r,o.path,0,e.length,[]),i}notifyPath(t,e){let o;if(1==arguments.length){let r={path:""};e=ve(this,t,r),o=r.path}else o=Array.isArray(t)?fe(t):t;this._setPendingPropertyOrPath(o,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var o;this._addPropertyEffect(t,We.READ_ONLY),e&&(this["_set"+(o=t,o[0].toUpperCase()+o.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,o){let r={property:t,method:e,dynamicFn:Boolean(o)};this._addPropertyEffect(t,We.OBSERVE,{fn:eo,info:r,trigger:{name:t}}),o&&this._addPropertyEffect(e,We.OBSERVE,{fn:eo,info:r,trigger:{name:e}})}_createMethodObserver(t,e){let o=xo(t);if(!o)throw new Error("Malformed observer expression '"+t+"'");fo(this,o,We.OBSERVE,_o,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,We.NOTIFY,{fn:io,info:{eventName:Ae(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,We.REFLECT,{fn:no,info:{attrName:e}})}_createComputedProperty(t,e,o){let r=xo(e);if(!r)throw new Error("Malformed computed expression '"+e+"'");const i=fo(this,r,We.COMPUTE,lo,t,o);Ke(this,Je)[t]=i}_marshalArgs(t,e,o){const r=this.__data,i=[];for(let n=0,s=t.length;n<s;n++){let{name:s,structured:a,wildcard:l,value:d,literal:c}=t[n];if(!c)if(l){const t=pe(s,e),i=Po(r,o,t?e:s);d={path:t?e:s,value:i,base:t?ve(r,s):i}}else d=a?Po(r,o,s):r[s];if(Ut&&!this._overrideLegacyUndefined&&void 0===d&&t.length>1)return Ge;i[n]=d}return i}static addPropertyEffect(t,e,o){this.prototype._addPropertyEffect(t,e,o)}static createPropertyObserver(t,e,o){this.prototype._createPropertyObserver(t,e,o)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,o){this.prototype._createComputedProperty(t,e,o)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let o=this.constructor._parseTemplate(t),r=this.__preBoundTemplateInfo==o;if(!r)for(let t in o.propertyEffects)this._createPropertyAccessor(t);if(e)if(o=Object.create(o),o.wasPreBound=r,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,r=e.lastChild;o.parent=e,e.lastChild=o,o.previousSibling=r,r?r.nextSibling=o:e.firstChild=o}else this.__templateInfo=o;else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(t,e,o){(t.hostProps=t.hostProps||{})[e]=!0;let r=t.propertyEffects=t.propertyEffects||{};(r[e]=r[e]||[]).push(o)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),To.push(this);let o=super._stampTemplate(t,e);if(To.pop(),e.nodeList=o.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=o.firstChild;e;e=e.nextSibling)t.push(e)}return o.templateInfo=e,function(t,e){let{nodeList:o,nodeInfoList:r}=e;if(r.length)for(let e=0;e<r.length;e++){let i=r[e],n=o[e],s=i.bindings;if(s)for(let e=0;e<s.length;e++){let o=s[e];po(n,o),mo(n,t,o)}n.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:o,nextSibling:r,parent:i}=e;o?o.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=o:i&&(i.lastChild=o),e.nextSibling=e.previousSibling=null;let n=e.childNodes;for(let t=0;t<n.length;t++){let e=n[t];ce(ce(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,o,r){let i=e._parseTemplateNode.call(this,t,o,r);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,o);e&&(t.textContent=wo(e)||" ",co(this,o,r,"text","textContent",e),i=!0)}return i}static _parseTemplateNodeAttribute(t,o,r,i,n){let s=this._parseBindings(n,o);if(s){let e=i,n="property";Xe.test(i)?n="attribute":"$"==i[i.length-1]&&(i=i.slice(0,-1),n="attribute");let a=wo(s);return a&&"attribute"==n&&("class"==i&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(i)),t.setAttribute(i,a)),"attribute"==n&&"disable-upgrade$"==e&&t.setAttribute(i,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===n&&(i=xe(i)),co(this,o,r,n,i,s,a),!0}return e._parseTemplateNodeAttribute.call(this,t,o,r,i,n)}static _parseTemplateNestedTemplate(t,o,r){let i=e._parseTemplateNestedTemplate.call(this,t,o,r);const n=t.parentNode,s=r.templateInfo,a="dom-if"===n.localName,l="dom-repeat"===n.localName;qt&&(a||l)&&(n.removeChild(t),(r=r.parentInfo).templateInfo=s,r.noted=!0,i=!1);let d=s.hostProps;if(Gt&&a)d&&(o.hostProps=Object.assign(o.hostProps||{},d),qt||(r.parentInfo.noted=!0));else{let t="{";for(let e in d)co(this,o,r,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}return i}static _parseBindings(t,e){let o,r=[],i=0;for(;null!==(o=yo.exec(t));){o.index>i&&r.push({literal:t.slice(i,o.index)});let n=o[1][0],s=Boolean(o[2]),a=o[3].trim(),l=!1,d="",c=-1;"{"==n&&(c=a.indexOf("::"))>0&&(d=a.substring(c+2),a=a.substring(0,c),l=!0);let u=xo(a),h=[];if(u){let{args:t,methodName:o}=u;for(let e=0;e<t.length;e++){let o=t[e];o.literal||h.push(o)}let r=e.dynamicFns;(r&&r[o]||u.static)&&(h.push(o),u.dynamicFn=!0)}else h.push(a);r.push({source:a,mode:n,negate:s,customEvent:l,signature:u,dependencies:h,event:d}),i=yo.lastIndex}if(i&&i<t.length){let e=t.substring(i);e&&r.push({literal:e})}return r.length?r:null}static _evaluateBinding(t,e,o,r,i,n){let s;return s=e.signature?_o(t,o,r,0,e.signature):o!=e.source?ve(t,e.source):n&&ue(o)?ve(t,o):t.__data[o],e.negate&&(s=!s),s}}})),To=[],ko=[],No=Kt((t=>{const e=Oe(t);function o(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof i?e:null}function r(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const o=t.properties;o&&(e=function(t){const e={};for(let o in t){const r=t[o];e[o]="function"==typeof r?{type:r}:r}return e}(o))}t.__ownProperties=e}return t.__ownProperties}class i extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){t=this.prototype,ko.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((t=>this.prototype._addPropertyToAttributeMap(t))):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=o(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=r(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=o(this);this.__properties=Object.assign({},t&&t._properties,r(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})),Oo=window.ShadyCSS&&window.ShadyCSS.cssBuild,Io=Kt((t=>{const e=No(So(t));function o(t,e,o,r){o.computed&&(o.readOnly=!0),o.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,o.computed,r)),o.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!o.computed):!1===o.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),o.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===o.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),o.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===o.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),o.observer&&t._createPropertyObserver(e,o.observer,r[o.observer]),t._addPropertyToAttributeMap(e)}return class extends e{static get polymerElementVersion(){return"3.5.2"}static _finalizeClass(){e._finalizeClass.call(this);const t=((o=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",o))||(o.__ownObservers=o.hasOwnProperty(JSCompiler_renameProperty("observers",o))?o.observers:null),o.__ownObservers);var o;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):Bt||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)o(this.prototype,e,t[e],t)}static createObservers(t,e){const o=this.prototype;for(let r=0;r<t.length;r++)o._createMethodObserver(t[r],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof t&&(t=t()),this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!Mt||Ht)&&(e=oe.import(t,"template"),Mt&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=zt(t.url);else{const t=oe.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Rt,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let o in e){let r=e[o];"value"in r&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[o]=r)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let o=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof o.value?o.value.call(this):o.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return It(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const o=this.importPath;(function(t,e,o,r){if(!Oo){const i=e.content.querySelectorAll("style"),n=le(e),s=function(t){let e=ie(t);return e?de(e):[]}(o),a=e.content.firstElementChild;for(let o=0;o<s.length;o++){let i=s[o];i.textContent=t._processStyleText(i.textContent,r),e.content.insertBefore(i,a)}let l=0;for(let e=0;e<n.length;e++){let o=n[e],s=i[l];s!==o?(o=o.cloneNode(!0),s.parentNode.insertBefore(o,s)):l++,o.textContent=t._processStyleText(o.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,o),Wt&&Oo&&$t){const o=e.content.querySelectorAll("style");if(o){let e="";Array.from(o).forEach((t=>{e+=t.textContent,t.parentNode.removeChild(t)})),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}})(this,e,t,o?Ot(o):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=ce(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Vt&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Ot(this.importPath)),Ot(t,e)}static _parseTemplateContent(t,o,r){return o.dynamicFns=o.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,o,r)}static _addTemplatePropertyEffect(t,o,r){return!Ft||o in this._properties||r.info.part.signature&&r.info.part.signature.static||r.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,o,r)}}})),zo=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class Lo{constructor(t,e){Do(t,e);const o=e.reduce(((e,o,r)=>e+$o(o)+t[r+1]),t[0]);this.value=o.toString()}toString(){return this.value}}function $o(t){if(t instanceof Lo)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const Ro=function(t,...e){Do(t,e);const o=document.createElement("template");let r=e.reduce(((e,o,r)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof Lo)return $o(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(o)+t[r+1]),t[0]);return zo&&(r=zo.createHTML(r)),o.innerHTML=r,o},Do=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")},Mo=Io(HTMLElement),Ho=Kt((t=>"function"==typeof t.prototype.addController?t:class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach((t=>{t.hostConnected&&t.hostConnected()}))}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach((t=>{t.hostDisconnected&&t.hostDisconnected()}))}addController(t){this.__controllers.add(t),void 0!==this.$&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}})),Bo=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Fo=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Vo(t,e){if("function"!=typeof t)return;const o=Bo.exec(t.toString());if(o)try{t=new Function(o[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};function Uo(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Fo?!(Fo&&Object.keys(Fo).map((t=>Fo[t])).filter((t=>t.productionMode)).length>0):!Vo((function(){return!0})))}catch(t){return!1}}());let jo=0,Yo=0;const qo=[];let Go=!1;const Wo={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},Jo={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},Xo={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},Ko={run(t){Go||(Go=!0,queueMicrotask((()=>function(){Go=!1;const t=qo.length;for(let e=0;e<t;e++){const t=qo[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}qo.splice(0,t),Yo+=t}()))),qo.push(t);const e=jo;return jo+=1,e},cancel(t){const e=t-Yo;if(e>=0){if(!qo[e])throw new Error(`invalid async handle: ${t}`);qo[e]=null}}},Zo=new Set;class Qo{static debounce(t,e,o){return t instanceof Qo?t._cancelAsync():t=new Qo,t.setConfig(e,o),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run((()=>{this._timer=null,Zo.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Zo.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}const tr=[];function er(t,e,o=t.getAttribute("dir")){e?t.setAttribute("dir",e):null!=o&&t.removeAttribute("dir")}function or(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const t=or();tr.forEach((e=>{er(e,t)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const rr=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>""===t?null:t}}}}get __isRTL(){return"rtl"===this.getAttribute("dir")}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")&&!this.__restoreSubscription||(this.__subscribe(),er(this,or(),null))}attributeChangedCallback(t,e,o){if(super.attributeChangedCallback(t,e,o),"dir"!==t)return;const r=or(),i=o===r&&-1===tr.indexOf(this),n=!o&&e&&-1===tr.indexOf(this),s=o!==r&&e===r;i||n?(this.__subscribe(),er(this,r,o)):s&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=tr.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,o){("dir"!==o||""!==e||t.hasAttribute("dir"))&&super._valueToNodeAttribute(t,e,o)}_attributeToProperty(t,e,o){"dir"!==t||e?super._attributeToProperty(t,e,o):this.dir=""}__subscribe(){tr.includes(this)||tr.push(this)}__unsubscribe(){tr.includes(this)&&tr.splice(tr.indexOf(this),1)}};let ir;Yt=!1,window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations||(window.Vaadin.registrations=[]),window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={}),window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){!function(t,e){if(window.Vaadin.developmentMode)Vo(t,e)}(Uo)};const nr=new Set,sr=t=>class extends(rr(t)){static finalize(){super.finalize();const{is:t}=this;var e;t&&!nr.has(t)&&(window.Vaadin.registrations.push(this),nr.add(t),window.Vaadin.developmentModeCallback&&(ir=Qo.debounce(ir,Xo,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),e=ir,Zo.add(e)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};function ar(t){return t?new Set(t.split(" ")):new Set}function lr(t){return t?[...t].join(" "):""}function dr(t,e,o){const r=ar(t.getAttribute(e));r.add(o),t.setAttribute(e,lr(r))}class cr{constructor(t,e){this.slot=t,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask((()=>{this.flush()})))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const t=this.slot.assignedNodes({flatten:!0});let e=[];const o=[],r=[];t.length&&(e=t.filter((t=>!this._storedNodes.includes(t)))),this._storedNodes.length&&this._storedNodes.forEach(((e,i)=>{const n=t.indexOf(e);-1===n?o.push(e):n!==i&&r.push(e)})),(e.length||o.length||r.length)&&this.callback({addedNodes:e,currentNodes:t,movedNodes:r,removedNodes:o}),this._storedNodes=t}}let ur=0;class hr extends EventTarget{static generateId(t,e="default"){return`${e}-${t.localName}-${ur++}`}constructor(t,e,o,r={}){super();const{initializer:i,multiple:n,observe:s,useUniqueId:a,uniqueIdPrefix:l}=r;this.host=t,this.slotName=e,this.tagName=o,this.observe="boolean"!=typeof s||s,this.multiple="boolean"==typeof n&&n,this.slotInitializer=i,n&&(this.nodes=[]),a&&(this.defaultId=this.constructor.generateId(t,l||e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(0===t.length){const t=this.attachDefaultNode();t&&(this.nodes=[t],this.initNode(t))}else this.nodes=t,t.forEach((t=>{this.initAddedNode(t)}))}attachDefaultNode(){const{host:t,slotName:e,tagName:o}=this;let r=this.defaultNode;return!r&&o&&(r=document.createElement(o),r instanceof Element&&(""!==e&&r.setAttribute("slot",e),this.defaultNode=r)),r&&(this.node=r,t.appendChild(r)),r}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter((e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&""===t))}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:e}=this;e&&e(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,e=""===t?"slot:not([name])":`slot[name=${t}]`,o=this.host.shadowRoot.querySelector(e);this.__slotObserver=new cr(o,(({addedNodes:t,removedNodes:e})=>{const o=this.multiple?this.nodes:[this.node],r=t.filter((t=>!function(t){return t.nodeType===Node.TEXT_NODE&&""===t.textContent.trim()}(t)&&!o.includes(t)));e.length&&(this.nodes=o.filter((t=>!e.includes(t))),e.forEach((t=>{this.teardownNode(t)}))),r&&r.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...o,...r].filter((t=>t!==this.defaultNode)),r.forEach((t=>{this.initAddedNode(t)}))):(this.node&&this.node.remove(),this.node=r[0],this.initAddedNode(this.node)))}))}}class pr extends hr{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,void 0!==this.ariaTarget&&(t.ariaTarget=this.ariaTarget),void 0!==this.context&&(t.context=this.context),void 0!==this.manual&&(t.manual=this.manual),void 0!==this.opened&&(t.opened=this.opened),void 0!==this.position&&(t._position=this.position),void 0!==this.shouldShow&&(t.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(t){this.ariaTarget=t;const e=this.node;e&&(e.ariaTarget=t)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}const mr=l`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,fr="string"==typeof document.head.style.touchAction,_r="__polymerGestures",vr="__polymerGesturesHandled",gr="__polymerGesturesTouchAction",br=["mousedown","mousemove","mouseup","click"],yr=[0,1,4,2],wr=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function xr(t){return br.indexOf(t)>-1}let Ar=!1;!function(){try{const t=Object.defineProperty({},"passive",{get(){Ar=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();const Pr=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),Cr={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Er(t){const e=t.type;if(!xr(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!wr&&(e=yr[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}const Sr={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Tr(t,e,o){t.movefn=e,t.upfn=o,document.addEventListener("mousemove",e),document.addEventListener("mouseup",o)}function kr(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const Nr=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Or={},Ir=[];function zr(t){const e=Nr(t);return e.length>0?e[0]:t.target}function Lr(t){const e=t.type,o=t.currentTarget[_r];if(!o)return;const r=o[e];if(!r)return;if(!t[vr]&&(t[vr]={},e.startsWith("touch"))){const o=t.changedTouches[0];if("touchstart"===e&&1===t.touches.length&&(Sr.touch.id=o.identifier),Sr.touch.id!==o.identifier)return;fr||"touchstart"!==e&&"touchmove"!==e||function(t){const e=t.changedTouches[0],o=t.type;if("touchstart"===o)Sr.touch.x=e.clientX,Sr.touch.y=e.clientY,Sr.touch.scrollDecided=!1;else if("touchmove"===o){if(Sr.touch.scrollDecided)return;Sr.touch.scrollDecided=!0;const o=function(t){let e="auto";const o=Nr(t);for(let t,r=0;r<o.length;r++)if(t=o[r],t[gr]){e=t[gr];break}return e}(t);let r=!1;const i=Math.abs(Sr.touch.x-e.clientX),n=Math.abs(Sr.touch.y-e.clientY);t.cancelable&&("none"===o?r=!0:"pan-x"===o?r=n>i:"pan-y"===o&&(r=i>n)),r?t.preventDefault():Mr("track")}}(t)}const i=t[vr];if(!i.skip){for(let e,o=0;o<Ir.length;o++)e=Ir[o],r[e.name]&&!i[e.name]&&e.flow&&e.flow.start.indexOf(t.type)>-1&&e.reset&&e.reset();for(let o,n=0;n<Ir.length;n++)o=Ir[n],r[o.name]&&!i[o.name]&&(i[o.name]=!0,o[e](t))}}function $r(t,e,o){return!!Or[e]&&(function(t,e,o){const r=Or[e],i=r.deps,n=r.name;let s=t[_r];s||(t[_r]=s={});for(let e,o,r=0;r<i.length;r++)e=i[r],Pr&&xr(e)&&"click"!==e||(o=s[e],o||(s[e]=o={_count:0}),0===o._count&&t.addEventListener(e,Lr,void xr(e)),o[n]=(o[n]||0)+1,o._count=(o._count||0)+1);t.addEventListener(e,o),r.touchAction&&function(t,e){fr&&t instanceof HTMLElement&&Ko.run((()=>{t.style.touchAction=e})),t[gr]=e}(t,r.touchAction)}(t,e,o),!0)}function Rr(t){Ir.push(t),t.emits.forEach((e=>{Or[e]=t}))}function Dr(t,e,o){const r=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=o,t.dispatchEvent(r),r.defaultPrevented){const t=o.preventer||o.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function Mr(t){const e=function(t){for(let e,o=0;o<Ir.length;o++){e=Ir[o];for(let o,r=0;r<e.emits.length;r++)if(o=e.emits[r],o===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function Hr(t,e,o,r){e&&Dr(e,t,{x:o.clientX,y:o.clientY,sourceEvent:o,preventer:r,prevent:t=>Mr(t)})}function Br(t,e,o){if(t.prevent)return!1;if(t.started)return!0;const r=Math.abs(t.x-e),i=Math.abs(t.y-o);return r>=5||i>=5}function Fr(t,e,o){if(!e)return;const r=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],n=i.x-t.x,s=i.y-t.y;let a,l=0;r&&(a=i.x-r.x,l=i.y-r.y),Dr(e,"track",{state:t.state,x:o.clientX,y:o.clientY,dx:n,dy:s,ddx:a,ddy:l,sourceEvent:o,hover:()=>function(t,e){let o=document.elementFromPoint(t,e),r=o;for(;r&&r.shadowRoot&&!window.ShadyDOM;){const i=r;if(r=r.shadowRoot.elementFromPoint(t,e),i===r)break;r&&(o=r)}return o}(o.clientX,o.clientY)})}function Vr(t,e,o){const r=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y),n=zr(o||e);!n||Cr[n.localName]&&n.hasAttribute("disabled")||(isNaN(r)||isNaN(i)||r<=25&&i<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;const e=zr(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const o=e.getBoundingClientRect(),r=t.pageX,i=t.pageY;return!(r>=o.left&&r<=o.right&&i>=o.top&&i<=o.bottom)}return!1}(e))&&(t.prevent||Dr(n,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:o}))}Rr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){kr(this.info)},mousedown(t){if(!Er(t))return;const e=zr(t),o=this;Tr(this.info,(t=>{Er(t)||(Hr("up",e,t),kr(o.info))}),(t=>{Er(t)&&Hr("up",e,t),kr(o.info)})),Hr("down",e,t)},touchstart(t){Hr("down",zr(t),t.changedTouches[0],t)},touchend(t){Hr("up",zr(t),t.changedTouches[0],t)}}),Rr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,kr(this.info)},mousedown(t){if(!Er(t))return;const e=zr(t),o=this,r=t=>{const r=t.clientX,i=t.clientY;Br(o.info,r,i)&&(o.info.state=o.info.started?"mouseup"===t.type?"end":"track":"start","start"===o.info.state&&Mr("tap"),o.info.addMove({x:r,y:i}),Er(t)||(o.info.state="end",kr(o.info)),e&&Fr(o.info,e,t),o.info.started=!0)};Tr(this.info,r,(t=>{o.info.started&&r(t),kr(o.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(t){const e=zr(t),o=t.changedTouches[0],r=o.clientX,i=o.clientY;Br(this.info,r,i)&&("start"===this.info.state&&Mr("tap"),this.info.addMove({x:r,y:i}),Fr(this.info,e,o),this.info.state="track",this.info.started=!0)},touchend(t){const e=zr(t),o=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:o.clientX,y:o.clientY}),Fr(this.info,e,o))}}),Rr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(t){Er(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click(t){Er(t)&&Vr(this.info,t)},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(t){Vr(this.info,t.changedTouches[0],t)}});const Ur=Kt((t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})),jr=Kt((t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",(t=>{this._onKeyDown(t)})),this.addEventListener("keyup",(t=>{this._onKeyUp(t)}))}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t)}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}})),Yr=t=>class extends(Ur(jr(t))){get _activeKeys(){return[" "]}ready(){super.ready(),$r(this,"down",(t=>{this._shouldSetActive(t)&&this._setActive(!0)})),$r(this,"up",(()=>{this._setActive(!1)}))}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",(t=>{this._activeKeys.includes(t.key)&&this._setActive(!1)}),{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}};let qr=!1;window.addEventListener("keydown",(()=>{qr=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{qr=!1}),{capture:!0});const Gr=Kt((t=>class extends t{get _keyboardActive(){return qr}ready(){this.addEventListener("focusin",(t=>{this._shouldSetFocus(t)&&this._setFocused(!0)})),this.addEventListener("focusout",(t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)})),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}})),Wr=t=>class extends(Ur(t)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,e){super._disabledChanged(t,e),t?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):e&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&-1!==t&&(this._lastTabIndex=t,this.tabindex=-1)}},Jr=t=>class extends(Yr(Wr(Gr(t)))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(t){super._onKeyDown(t),t.altKey||t.shiftKey||t.ctrlKey||t.metaKey||this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}};bt("vaadin-button",mr,{moduleId:"vaadin-button-styles"});class Xr extends(Jr(sr(Pt(Ho(Mo))))){static get is(){return"vaadin-button"}static get template(){return(t=>t`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`)(Ro)}ready(){super.ready(),this._tooltipController=new pr(this),this.addController(this._tooltipController)}}e(Xr),bt("vaadin-input-container",l`
    :host {
      background: var(--_background);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: var(--vaadin-input-field-value-font-weight, 500);
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      --_input-height: var(--lumo-text-field-size, var(--lumo-size-m));
      /* Default values */
      --_background: var(--vaadin-input-field-background, var(--lumo-contrast-10pct));
      --_hover-highlight: var(--vaadin-input-field-hover-highlight, var(--lumo-contrast-50pct));
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
      --_icon-color: var(--vaadin-input-field-icon-color, var(--lumo-contrast-60pct));
      --_icon-size: var(--vaadin-input-field-icon-size, var(--lumo-icon-size-m));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_invalid-hover-highlight: var(--vaadin-input-field-invalid-hover-highlight, var(--lumo-error-color-50pct));
      --_disabled-background: var(--vaadin-input-field-disabled-background, var(--lumo-contrast-5pct));
      --_disabled-value-color: var(--vaadin-input-field-disabled-value-color, var(--lumo-disabled-text-color));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background: var(--_hover-highlight);
      opacity: 0;
      transition:
        transform 0.15s,
        opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--vaadin-input-field-height, var(--_input-height));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-30pct));
    }

    /* Disabled */
    :host([disabled]) {
      background: var(--_disabled-background);
    }

    :host([disabled]) ::slotted(:not([slot$='fix'])) {
      -webkit-text-fill-color: var(--_disabled-value-color);
      color: var(--_disabled-value-color);
    }

    /* Invalid */
    :host([invalid]) {
      background: var(--_invalid-background);
    }

    :host([invalid]:not([readonly]))::after {
      background: var(--_invalid-hover-highlight);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--_icon-color);
      width: var(--_icon-size);
      height: var(--_icon-size);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"}),Ct("font-icons",l`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABHAAAsAAAAAI6AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuNY21hcAAAAYgAAAD+AAADymne8hxnbHlmAAACiAAAC+gAABioIzlOlWhlYWQAAA5wAAAAMAAAADZa/6SsaGhlYQAADqAAAAAdAAAAJAbpA4BobXR4AAAOwAAAABAAAAC0q+AAAGxvY2EAAA7QAAAAXAAAAFyF7o1GbWF4cAAADywAAAAfAAAAIAFMAXBuYW1lAAAPTAAAATEAAAIuUUJZCHBvc3QAABCAAAABPQAAAgfdkltveJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+xDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mEO+p/FEMUcxDANKMwIkgMABvgMMAB4nO3SV26EMABF0UsZpjG9d6Y3FpgF5StLYxMTP16WEUvHV1gGIQzQAJKgDFKIfojQ+A6rUb2e0KnXU77qPanWq/LzCXOkOVyn9RyHvWl4YkaTFu1wX5ecHn0GDBkxZsKUGXMWLFmxZsOWHXsOFBw5cebClRt3Hjx58dZ7RRn/I9cUF39Xpb691acRG2piOtUqNZ1P1TCdeJUZatNQW4baNtSO6U+ouoaam96u6hlq31AHhjo01JGhjg11YqhTQ50Z6txQF4a6NNSVoa4NdWOoW0PdGereUA+GWhjq0VBPhno21IuhXg31Zqh3Q30Y6tNQX4b6NtTSKH8BOIRpQQAAeJy1WH1sW9UVv+fG9vPz+7Bf/N6zHcd2/J04jbP6s0lap4kDpB9JWzUUCqxNgaHxpTI6hNhUNLVr17HSISb2D2iAJrWb6FTWahNQdQxRvmHamAR0qibE1E18CG3QaVNFvJ17n+3YIf1AiMQ679x77j3v3HPPPed3H7ER/OsYpw8TmQRIiuQJ8RZK+WjO1B3xaCzla21orY10a+OQ6aHTHtP0zB31mBs1GZ6RNU2uXc7oPL+xdRS9R9X1oK4fVfijdsBqvqF6vd1eLzPrYrYZ57WteF7bPDIc5+ZcJnta+S9i2Vfhs4MaMwZNQmO0Vv7gF/MZcNsCcJp4sJFSwYyAmRuFCmTBDRBUkwGqnlViyjmVBpLqaXhNpt0J5V1JOqMkuqn8WkMHvZX+iOlImiqkBiFVYDrCqINulmkwKb8ry2fkZBBn7FcTlk4ZdfpRZ9MOesLSAakKt0N3g4p2jAL8eIEOOqom/U0lgQRXUl8LtXM7HFkojUIpF0ErVBhcZC1vtyjtpsqr83a8RVcSH+ool8LgcIMjNohmVCACuDs506BdO6WIQeXjUsh1XKZGRNpp9piv3+Givoh00OU6KEV81HUHTLtN093Q+YGlE3wLHWRtMNy9XWqdLm2HKbaNsGzhu+41eswFOjE6WKSk2/1Wpt+qHeM6phbohmVmj3GvpdcVkiy9zbXfzHVqKuDB0IR2P6ZpF+D7dy6YC/9svGmBE5hKB9+X2+hh4iYRMkhGyTqyFc9APmeGQHf043tWQKHkizmwaY5AroTNVJzJDc2SFzUu92kOLsdmKu77vByb8/IjtxmhkMFISRBFISO4XMLJlj4XgGuRXtaHw2FLyHifdSOpisIhJjgkiPBAyJh7lfXTkhEadwk1mUngrOC6MazX7mASeEAPV1FyjEumBOaEDu4DP/ogRDKkiLEV1woVyMeLLKJCEM+FwdCwL4XLcRgdbfkhbzS8BNvXDKzNQiAWgOzagTXF1Eyq+Ci6/TPm/JrNY/59p1epKN4jQFGe0fx+LTMwNVCrAU2VSqnaKYzIiGmWe2Rvp9KDJhncrjLaFce8VCUbyQ1kB9lNfkJ+To6R58mfyd/Ip9ABXohDHqqwEW7A2Mij1ehntLu+h8xMtocjUJcYwoLdtYafv/1Vjy8vjLaLtBfOt3/B931Rexa24e5zstgnyqvZHs69zuhq3vFgRpQVJyN7FuE++RLSeW4xMi+t6Zeo5sIK6S5dlGVRD2hWnGoB3j7OV3lesvNLic8tOnLRSRfRdOna63VJp/1WbYs5dFZjy1AqpGICQEWKmNI+CZNoVTJ7pNop+IZkRrBHgnEmqr3TrEsfw1Gi8LqE+S1aV0SNNwXVVVvuUoU3ld6TLwmditIpvKTU50zSzWwO1h0rL8awnulwTXMYrGDT4aQ1fb4GPkyv5vMEh5Vec6yw0AMXnfcx1l/rfVZaKLDi0W4j/HfeyGZuHOf1IUGW1udizU2leXY0OmLpVDpVKJfKpZzPRKHgEBzpXAUKWYipoIeBdl3JfLZVBizEqWun1i4ZGFiyduq3DebayXsmJ+95gBG4+Urm1a2SdpKV57lP2wZyZqI+FAlfUtO+NCmgdWhMOS1gDY+jHWnBhwjBQLMEXxmLbx6t9JXTWDLtsSxgisfErqvQMbbBoywZmeyLeWe8OWNydFDxzMx4lMGRtX0xN3YFJkeW+O0bascGNwwObtjCCOzrzAVWjSwN2K9cpyn9o5cZOXMmkAuM85EbNHnJyHhfLLCnPhxJYw9eoIMkyC3l+4ZuY5ig7lW2oYUynDgg+Xrk+++Xe3zSgRYetnyuy+KbfjiB+GAAtZ8HHXmtijZfFFgrujhmOs2qkXvuSV6WqA1WLYqhPHOfsa26rklKFqbAGL2dOIlGurB6LWFVFd/KoBBaYTFYVBs93hZRFlrG5Ex4NVFIJguJVvqnBW2kNNvFGx90YUcSEvyZSMDeZjc0xYlEYy8+hHcWx9YrZOaPPyCGepP5Q34aXnGBr8d1QhSf4yjtiebZqNJfEYl4SY6dDRb8WSguLZW9ZQtBpoW4hX0QMyB2KmsYcOh8HMQxBn288oZ6BXV0GOq/ClKsC6T8g9X3OFKZNkJrYkOx2lEk+KNDy953+wGHXuGGzhGZ+uLK8FVrQkbtKBv+9EztU2sgTCNpvXMdJjqJ4tkdw+x00dPKkZ1QR254x7GQoFmvfakSnL3gCc5nREly2mN2pyTLMacMipNT7YInGU7JzlN2p9N+yinXTirOKEvPUafSWMNDmCf9pIQYaG19DSxKGqvAQ+xg60iabEm5MheUU2n+HxO4TDDbjnw6xxK8QzfhbHXq8pWVqanKysun9s6ztdt7sivGqruqYyuyPS6Hw9XehGt6q+l0dT0jvaFMZjiTuTHo7+vdtHJTb58/2ML+IxHt9/n9vv5owiWKrrbWD+sakKxhKoYzxF5f7y9INxki42QNuYrVFDPfvqxyY83xWNMV+ZxPSMWb62W+wPSCJwkDDl1WZOGW84nAEo4A7HjB/uWmOdayRFnKjazi668u/ajJlUd87aPk048Crlu4j1Oh9gxdL3Z1inNPIt2xvKNlsU4hn54Z5Y6YbTDu9hHOvkcFAb35fU6hNovKOrtQmcvbNV9/Ntfv5xf4atDWOOTX6CSHZ08xujhPs51+f9zvf1YLIGoPPKvxVh0TSLAXzzUBFiXs7GJVB7vH5/PAXznd4+vx4a95h3qI/oYIpIdMkA1kC7kVLS3GhWI5bwj1fIaVKG/Ei5gXWOjhtcJbzFthaMQrwIcIRj0ppvO6yV95icu9j/YPDNySWp7w+kOr95R1RfGpfVlDVhS/2geJ5Umv2mn0rkxBvzvgdisndJXaVF1X5z5jdHGe2n/QnYo8+b2uaMivhowgjYcLnVqnrEpQezsieyVZ6ooETbdJO6ip+cORLpes6BL82/qg8VHbo45B/vch/YQeJX28QvEANR3sQhxh+TcMCEd4l8BKF7uID7KM05tRYlIHHXY63YIi2fXQyj5XSBbcMeewKLpttkJ2Syz33YJfDdJdSYkqHbYb3VHRJgTV8c0TAy67YHeK7htwOKWax5co7Do8Pfh1tKdx1g5j9o6TZeQyMo27FuW3vbYsbY/Op3AG06DMKionRlpgHzCEeMmLU5opRrCyS670RzppZeW5p/iT3jL3lB4O63QS6dzzh8SAtOqwGJK3bv+lGJTWbr++471wsVKMRJCEK5H+cLg/Qp+IDsdqs7HhKD7hMXyyrD/Li8RjRqimHhI7HP2vSDZn9brplySb0L9dgpURSwmSiBFhilrwB8OA9gZ29NkRO/669parW9e7XZDxwvgRu+SE7zgl+xG5p/HtRqJ3cdwSZwsbwTA1WT3jEdyPN0sWxvDGy+xovIzHosnwc9LePf9tywun0fMkWaFYZbB4oovRq8VyKYUBkMVXqVhBHSylQ0wanvla3+rQ1XbR8ZzstYOo2Mf7vjk8ftcGDWxdSdXx0cAVveHg1TZFtEOn8ntBBFs11V++vuLUQ5qz+U6d/oUjpGIdNjOQhJXNqn5YCS1Yy5PofLGEs6Js2yOKe2yyOLxtaGjbt7cNIURCEDdWfaQ6lurtRYbePCuItv1iUNxvE4Vdw2zQ0LZhdv2fxjHp5uAmdlBpopHXoJGU8e6BRc0yi+PztkaHTRRrW1m2hcfFLlEUzzD+DGczjEVCg9jEQZhFcdAL2DjD+DPiSWQzjM2I89g5RXdxfECS+CIWy1hTGmFs6EIbkv/pbtkfU3aPrZ+4c2Lizn07qufym/L5TTdtyuU2/We3HPeDsjtb3bGPSSfW31aX3LQpX/d9sL7fWYpRJPBbCJavYjrFjj0rT2GWCZjf6Ytffr8beXl/HYeyGwJiIK8FLDHbfo65xGz7YCSRqCQSkbbHI5eUU5X4sjj+zrU9aHnRlEnrd7YGptd0x2Jf/RbH9PAiovadckSnEsJ661OgPFuH9B4O6e202vIN0h9xHXSJh1wRP5Vqv1uI6Wn9Gxmrwzqrii1gqhEscJanuAlGas+s2/uzvetgS72NpHZ6aHbZstmh/wPq1seEeJxjYGRgYADi31ySEvH8Nl8ZuJlfAEUYalQ3NCLo/6+ZpzLdAnI5GJhAogAiBgraeJxjYGRgYA76nwUkXzAAAfNUBkYGVKALAFb4A3EAAAB4nGNgYGBgfjG0MAAMzihlAAAAAABOAJoA6AEKASwBTgFwAZoBxAHuAhoCnALoBJoEvATWBPIFDgUqBXoF0AX+BkQGlga4BwgHagfiCGoIpAi8CVAJmAoQCiwKVgqQCtYLGAtOC4gL6AwuDFR4nGNgZGBg0GVMYRBlAAEmIOYCQgaG/2A+AwAYygG+AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjuduwzAMhH2NnTqOk+6993TfSZFY24giGZTVon36eiRFf5SAiO/A05HBWtBXEvxfGdYwQIgIQ6wjxggJxkgxwRQb2MQWtrGDXexhHwc4xBGOcYJTnOEcF7jEFa5xg1vc4R4PeMQTnvGCV2R4C1Khy9xkkkxNnPRC03s97pHLvKgTYXJNmbKfZom9o8POEffsq0Qw28+ltcPe2uHS2rGvRjPBmSwE1+GMtI6l0GSU4JEsSM4XgudpQx9sTRf3K9rAyUr0962UryKprZwPpM0jyda5uP2qrVBjxSLPCmGUplixrdpBSKqsI2oO4gF9Udq8TJVOzDSpcEHGR4vSeJdaVsSkMl26OqoKa6jttQ0rLb6a5l3YjO2QqV01YXLlNy2XDR0JlkXojbJTb/5GDX3V+kPviIPgB9AUks0AAAA=)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-drag-handle: '\\ea18';
    --lumo-icons-dropdown: '\\ea19';
    --lumo-icons-edit: '\\ea1a';
    --lumo-icons-error: '\\ea1b';
    --lumo-icons-eye: '\\ea1c';
    --lumo-icons-eye-disabled: '\\ea1d';
    --lumo-icons-menu: '\\ea1e';
    --lumo-icons-minus: '\\ea1f';
    --lumo-icons-ordered-list: '\\ea20';
    --lumo-icons-phone: '\\ea21';
    --lumo-icons-photo: '\\ea22';
    --lumo-icons-play: '\\ea23';
    --lumo-icons-plus: '\\ea24';
    --lumo-icons-redo: '\\ea25';
    --lumo-icons-reload: '\\ea26';
    --lumo-icons-resize-handle: '\\ea27';
    --lumo-icons-search: '\\ea28';
    --lumo-icons-undo: '\\ea29';
    --lumo-icons-unordered-list: '\\ea2a';
    --lumo-icons-upload: '\\ea2b';
    --lumo-icons-user: '\\ea2c';
  }
`);const Kr=l`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;bt("",Kr,{moduleId:"lumo-field-button"});const Zr=l`
  :host {
    --_helper-spacing: var(--vaadin-input-field-helper-spacing, 0.4em);
  }

  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  [part='helper-text'] {
    display: block;
    color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
    font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-helper-font-weight, 400);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`,Qr=l`
  [part='label'] {
    align-self: flex-start;
    color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    font-size: var(--vaadin-input-field-label-font-size, var(--lumo-font-size-s));
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--vaadin-input-field-focused-label-color, var(--lumo-primary-text-color));
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--vaadin-input-field-hovered-label-color, var(--lumo-body-text-color));
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    }
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;bt("",Qr,{moduleId:"lumo-required-field"});const ti=[Qr,Kr,Zr,l`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
    font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_input-height: var(--vaadin-input-field-height, var(--lumo-text-field-size));
    --_disabled-value-color: var(--vaadin-input-field-disabled-value-color, var(--lumo-disabled-text-color));
  }

  :host::before {
    height: var(--_input-height);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: var(--vaadin-input-field-hover-highlight-opacity, 0.1);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted([slot$='fix']) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([disabled]) [part='input-field'] ::slotted(:not([slot$='fix'])) {
    color: var(--_disabled-value-color);
    -webkit-text-fill-color: var(--_disabled-value-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
  }

  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`];bt("",ti,{moduleId:"lumo-input-field-shared-styles"}),bt("vaadin-text-field",ti,{moduleId:"lumo-text-field-styles"});const ei=t=>class extends t{static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",(t=>{t.target===this&&t.preventDefault()})),this.addEventListener("click",(t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach((t=>t.focus&&t.focus()))}))}};bt("vaadin-input-container",l`
  :host {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
      var(--vaadin-input-field-top-start-radius, var(--__border-radius))
      var(--vaadin-input-field-top-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
    --_border-radius: var(--vaadin-input-field-border-radius, 0);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  :host([dir='rtl']) {
    border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
      var(--vaadin-input-field-top-end-radius, var(--_border-radius))
      var(--vaadin-input-field-top-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Reset the native input styles */
  ::slotted(input) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  ::slotted(*) {
    flex: none;
  }

  ::slotted(:is(input, textarea))::placeholder {
    /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
    /* because ::slotted(...)::placeholder does not work in Safari. */
    font: inherit;
    color: inherit;
    /* Override default opacity in Firefox */
    opacity: 1;
  }
`,{moduleId:"vaadin-input-container-styles"});class oi extends(ei(Pt(rr(Mo)))){static get is(){return"vaadin-input-container"}static get template(){return Ro`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}}e(oi);const ri=[l`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }

  @media (forced-colors: active) {
    :host(:not([readonly])) [part='input-field'] {
      outline: 1px solid;
      outline-offset: -1px;
    }
    :host([focused]) [part='input-field'] {
      outline-width: 2px;
    }
    :host([disabled]) [part='input-field'] {
      outline-color: GrayText;
    }
  }
`,l`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`,l`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`];class ii extends hr{constructor(t,e,o={}){const{uniqueIdPrefix:r}=o;super(t,"input","input",{initializer:(t,o)=>{o.value&&(t.value=o.value),o.type&&t.setAttribute("type",o.type),t.id=this.defaultId,"function"==typeof e&&e(t)},useUniqueId:!0,uniqueIdPrefix:r})}}const ni=Kt((t=>class extends(Gr(Wr(t))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame((()=>{this.focus(),this.setAttribute("focus-ring","")}))}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,e){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):e&&this._removeFocusListeners(e)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_shouldRemoveFocus(t){return t.target===this.focusElement}_disabledChanged(t,e){super._disabledChanged(t,e),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){void 0!==t&&this.focusElement&&(this.focusElement.tabIndex=t,-1!==t&&(this.tabindex=void 0)),this.disabled&&t&&(-1!==t&&(this._lastTabIndex=t),this.tabindex=void 0)}})),si=new WeakMap,ai=Kt((t=>class extends t{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),e=function(t){return si.has(t)||si.set(t,new Set),si.get(t)}(t);this.slotStyles.forEach((o=>{e.has(o)||(function(t,e){const o=document.createElement("style");o.textContent=t,e===document?document.head.appendChild(o):e.insertBefore(o,e.firstChild)}(o,t),e.add(o))}))}})),li=t=>t.test(navigator.userAgent),di=t=>t.test(navigator.platform);li(/Android/u),li(/Chrome/u)&&/Google Inc/u.test(navigator.vendor),li(/Firefox/u),di(/^iPad/u)||di(/^Mac/u)&&navigator.maxTouchPoints,di(/^iPhone/u),li(/^((?!chrome|android).)*safari/iu);const ci=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}})(),ui=(window.ShadowRoot&&"adoptedStyleSheets"in Document.prototype&&CSSStyleSheet.prototype,Kt((t=>class extends t{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return null!=this.value&&""!==this.value}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(t){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=t),this._hasInputValue=t&&t.length>0}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this._inputElementValue=null!=t?t:"")}_inputElementChanged(t,e){t?this._addInputListeners(t):e&&this._removeInputListeners(e)}_hasInputValueChanged(t,e){(t||e)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(t){this._setHasInputValue(t),this._onInput(t)}_onInput(t){const e=t.composedPath()[0];this.__userInput=t.isTrusted,this.value=e.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,e){this._toggleHasValue(this._hasValue),""===t&&void 0===e||this.__userInput||this._forwardInputValue(t)}_setHasInputValue(t){const e=t.composedPath()[0];this._hasInputValue=e.value.length>0}}))),hi=t=>class extends(ui(jr(t))){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",(t=>this._onClearButtonMouseDown(t))),this.clearElement.addEventListener("click",(t=>this._onClearButtonClick(t))))}_onClearButtonClick(t){t.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(t){t.preventDefault(),ci||this.inputElement.focus()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&this.value&&!this.readonly&&(t.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}},pi=new Map;function mi(t){return pi.has(t)||pi.set(t,new WeakMap),pi.get(t)}function fi(t,e){t&&t.removeAttribute(e)}function _i(t,e){if(!t||!e)return;const o=mi(e);if(o.has(t))return;const r=ar(t.getAttribute(e));o.set(t,new Set(r))}function vi(t,e,o={newId:null,oldId:null,fromUser:!1}){if(!t||!e)return;const{newId:r,oldId:i,fromUser:n}=o,s=mi(e),a=s.get(t);if(!n&&a)return i&&a.delete(i),void(r&&a.add(r));n&&(a?r||s.delete(t):_i(t,e),fi(t,e)),function(t,e,o){const r=ar(t.getAttribute(e));r.delete(o),0!==r.size?t.setAttribute(e,lr(r)):t.removeAttribute(e)}(t,e,i);const l=r||lr(a);l&&dr(t,e,l)}class gi{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),null!=this.__labelIdFromUser&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setAriaLabel(t){this.__setAriaLabelToAttribute(t),this.__label=t}setLabelId(t,e=!1){const o=e?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(t,o,e),e?this.__labelIdFromUser=t:this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}__setAriaLabelToAttribute(t){var e;this.__target&&(t?(_i(e=this.__target,"aria-labelledby"),fi(e,"aria-labelledby"),this.__target.setAttribute("aria-label",t)):this.__label&&(function(t,e){if(!t)return;const o=mi(e),r=o.get(t);r&&0!==r.size?dr(t,e,lr(r)):t.removeAttribute(e),o.delete(t)}(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(t,e,o){vi(this.__target,"aria-labelledby",{newId:t,oldId:e,fromUser:o})}__setErrorIdToAriaAttribute(t,e){vi(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setHelperIdToAriaAttribute(t,e){vi(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}const bi=document.createElement("div");let yi;bi.style.position="fixed",bi.style.clip="rect(0px, 0px, 0px, 0px)",bi.setAttribute("aria-live","polite"),document.body.appendChild(bi);class wi extends hr{constructor(t,e,o,r={}){super(t,e,o,{...r,useUniqueId:!0})}initCustomNode(t){this.__updateNodeId(t),this.__notifyChange(t)}teardownNode(t){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const t=super.attachDefaultNode();return t&&this.__updateNodeId(t),t}restoreDefaultNode(){}updateDefaultNode(t){this.__notifyChange(t)}observeNode(t){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver((t=>{t.forEach((t=>{const e=t.target,o=e===this.node;"attributes"===t.type?o&&this.__updateNodeId(e):(o||e.parentElement===this.node)&&this.__notifyChange(this.node)}))})),this.__nodeObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(t){return!!t&&(t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent&&""!==t.textContent.trim())}__notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(t),node:t}}))}__updateNodeId(t){const e=!this.nodes||t===this.nodes[0];t.nodeType!==Node.ELEMENT_NODE||this.multiple&&!e||t.id||(t.id=this.defaultId)}}class xi extends wi{constructor(t){super(t,"error-message","div")}setErrorMessage(t){this.errorMessage=t,this.updateDefaultNode(this.node)}setInvalid(t){this.invalid=t,this.updateDefaultNode(this.node)}initAddedNode(t){t!==this.defaultNode&&this.initCustomNode(t)}initNode(t){this.updateDefaultNode(t)}initCustomNode(t){t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),super.initCustomNode(t)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(t){const{errorMessage:e,invalid:o}=this,r=Boolean(o&&e&&""!==e.trim());t&&(t.textContent=r?e:"",t.hidden=!r,r&&function(t,e={}){const o=e.mode||"polite",r=void 0===e.timeout?150:e.timeout;"alert"===o?(bi.removeAttribute("aria-live"),bi.removeAttribute("role"),yi=Qo.debounce(yi,Jo,(()=>{bi.setAttribute("role","alert")}))):(yi&&yi.cancel(),bi.removeAttribute("role"),bi.setAttribute("aria-live",o)),bi.textContent="",setTimeout((()=>{bi.textContent=t}),r)}(e,{mode:"assertive"})),super.updateDefaultNode(t)}}class Ai extends wi{constructor(t){super(t,"helper",null)}setHelperText(t){this.helperText=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:t}=this;if(t&&""!==t.trim()){this.tagName="div";const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(t){t&&(t.textContent=this.helperText),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}class Pi extends wi{constructor(t){super(t,"label","label")}setLabel(t){this.label=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:t}=this;if(t&&""!==t.trim()){const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(t){t&&(t.textContent=this.label),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}const Ci=Kt((t=>class extends(Ho(t)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new Pi(this),this._labelController.addEventListener("slot-content-changed",(t=>{this.toggleAttribute("has-label",t.detail.hasContent)}))}get _labelId(){const t=this._labelNode;return t&&t.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}})),Ei=Kt((t=>class extends t{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},manualValidation:{type:Boolean,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const t=this.checkValidity();return this._setInvalid(!t),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:t}})),t}checkValidity(){return!this.required||!!this.value}_setInvalid(t){this._shouldSetInvalid(t)&&(this.invalid=t)}_shouldSetInvalid(t){return!0}_requestValidation(){this.manualValidation||this.validate()}})),Si=t=>class extends(Ei(Ci(Ho(t)))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new gi(this),this._helperController=new Ai(this),this._errorController=new xi(this),this._errorController.addEventListener("slot-content-changed",(t=>{this.toggleAttribute("has-error-message",t.detail.hasContent)})),this._labelController.addEventListener("slot-content-changed",(t=>{const{hasContent:e,node:o}=t.detail;this.__labelChanged(e,o)})),this._helperController.addEventListener("slot-content-changed",(t=>{const{hasContent:e,node:o}=t.detail;this.toggleAttribute("has-helper",e),this.__helperChanged(e,o)}))}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(t,e){t?this._fieldAriaController.setHelperId(e.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(t){this._fieldAriaController.setAriaLabel(t)}_accessibleNameRefChanged(t){this._fieldAriaController.setLabelId(t,!0)}__labelChanged(t,e){t?this._fieldAriaController.setLabelId(e.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout((()=>{if(t){const t=this._errorNode;this._fieldAriaController.setErrorId(t&&t.id)}else this._fieldAriaController.setErrorId(null)}))}},Ti=Kt((t=>class extends t{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach((t=>{this._delegateAttribute(t,this[t])}))}_ensurePropsDelegated(){this.constructor.delegateProps.forEach((t=>{this._delegateProperty(t,this[t])}))}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach(((e,o)=>{this._delegateAttribute(e,t[o])}))}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach(((e,o)=>{this._delegateProperty(e,t[o])}))}_delegateAttribute(t,e){this.stateTarget&&("invalid"===t&&this._delegateAttribute("aria-invalid",!!e&&"true"),"boolean"==typeof e?this.stateTarget.toggleAttribute(t,e):e?this.stateTarget.setAttribute(t,e):this.stateTarget.removeAttribute(t))}_delegateProperty(t,e){this.stateTarget&&(this.stateTarget[t]=e)}})),ki=Kt((t=>class extends(Ti(Ei(ui(t)))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map((t=>this[t])))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some((t=>this.__isValidConstraint(t)))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(t,...e){if(!t)return;const o=this._hasValidConstraints(e),r=this.__previousHasConstraints&&!o;(this._hasValue||this.invalid)&&o?this._requestValidation():r&&!this.manualValidation&&this._setInvalid(!1),this.__previousHasConstraints=o}_onChange(t){t.stopPropagation(),this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return Boolean(t)||0===t}})),Ni=t=>class extends(ai(ni(ki(Si(hi(jr(t))))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return["\n          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {\n            font: inherit;\n            color: inherit;\n          }\n        "]}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){super._onKeyDown(t),this.allowedCharPattern&&!this.__shouldAcceptKey(t)&&t.target===this.inputElement&&(t.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=Qo.debounce(this._preventInputDebouncer,Wo.after(200),(()=>{this.removeAttribute("input-prevented")}))}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||1!==t.key.length||this.__allowedCharRegExp.test(t.key)}_onPaste(t){if(this.allowedCharPattern){const e=t.clipboardData.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onDrop(t){if(this.allowedCharPattern){const e=t.dataTransfer.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onBeforeInput(t){this.allowedCharPattern&&t.data&&!this.__allowedTextRegExp.test(t.data)&&(t.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(t){if(t)try{this.__allowedCharRegExp=new RegExp(`^${t}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${t}*$`,"u")}catch(t){console.error(t)}}},Oi=t=>class extends(Ni(t)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}_setFocused(t){super._setFocused(t),!t&&document.hasFocus()&&this._requestValidation()}_onInput(t){super._onInput(t),this.invalid&&this._requestValidation()}_valueChanged(t,e){super._valueChanged(t,e),void 0!==e&&this.invalid&&this._requestValidation()}};class Ii{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",(t=>{this.__initLabel(t.detail.node)})),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}const zi=t=>class extends(Oi(t)){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new ii(this,(t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}))),this.addController(new Ii(this.inputElement,this._labelController))}};bt("vaadin-text-field",ri,{moduleId:"vaadin-text-field-styles"});class Li extends(zi(Pt(sr(Mo)))){static get is(){return"vaadin-text-field"}static get template(){return Ro`
      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new pr(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}function $i(t){return $i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$i(t)}function Ri(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Di(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Hi(r.key),r)}}function Mi(t,e,o){return e&&Di(t.prototype,e),o&&Di(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function Hi(t){var e=function(t){if("object"!=$i(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!=$i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==$i(e)?e:e+""}function Bi(t,e,o){return e=Yi(e),function(t,e){if(e&&("object"==$i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Ui()?Reflect.construct(e,o||[],Yi(t).constructor):e.apply(t,o))}function Fi(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ji(t,e)}function Vi(t){var e="function"==typeof Map?new Map:void 0;return Vi=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return function(t,e,o){if(Ui())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var i=new(t.bind.apply(t,r));return o&&ji(i,o.prototype),i}(t,arguments,Yi(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),ji(o,t)},Vi(t)}function Ui(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Ui=function(){return!!t})()}function ji(t,e){return ji=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},ji(t,e)}function Yi(t){return Yi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Yi(t)}e(Li);var qi=function(t){function e(){return Ri(this,e),Bi(this,e,arguments)}return Fi(e,t),Mi(e,[{key:"connectedCallback",value:function(){this.innerHTML="\n            <header>\n                <h1>Craft Sphere</h1>\n            </header>\n        "}}])}(Vi(HTMLElement)),Gi=function(t){function e(){return Ri(this,e),Bi(this,e,arguments)}return Fi(e,t),Mi(e,[{key:"connectedCallback",value:function(){this.innerHTML='\n            <section>\n                <h2>Welcome to the Craft Sphere Community</h2>\n                <p>Share your creative projects and connect with others.</p>\n                <vaadin-text-field label="Your Name"></vaadin-text-field>\n                <vaadin-button theme="primary">Submit</vaadin-button>\n            </section>\n        '}}])}(Vi(HTMLElement)),Wi=function(t){function e(){return Ri(this,e),Bi(this,e,arguments)}return Fi(e,t),Mi(e,[{key:"connectedCallback",value:function(){this.innerHTML='\n            <div class="topbar">\n                <div class="logo">Craft Sphere</div>\n                <vaadin-button theme="primary" class="sign-in-button">Sign In</vaadin-button>\n            </div>\n        '}}])}(Vi(HTMLElement));customElements.define("header-component",qi),customElements.define("community-component",Gi),customElements.define("topbar-component",Wi)})();