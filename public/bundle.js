/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const r=this.t;if(e&&void 0===t){const e=void 0!==r&&1===r.length;e&&(t=o.get(r)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(r,t))}return t}toString(){return this.cssText}}const i=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new n(o,t,r)},a=(r,o)=>{if(e)r.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,r.appendChild(o)}},s=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,f=globalThis,m=f.trustedTypes,v=m?m.emptyScript:"",_=f.reactiveElementPolyfillSupport,g=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},b=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:n}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const i=o?.call(this);n.call(this,e),this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...u(t),...h(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(void 0!==o&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:y).toAttribute(e,r.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){const r=this.constructor,o=r._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=r.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=o,this[o]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??b)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[g("elementProperties")]=new Map,x[g("finalized")]=new Map,_?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.0.4");const A=globalThis,P=A.trustedTypes,E=P?P.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+S,k=`<${O}>`,T=document,N=()=>T.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,z="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,$=/>/g,D=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,B=/"/g,F=/^(?:script|style|textarea|title)$/i,H=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),V=H(1),U=(H(2),H(3),Symbol.for("lit-noChange")),q=Symbol.for("lit-nothing"),Y=new WeakMap,G=T.createTreeWalker(T,129);function W(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const r=t.length-1,o=[];let n,i=2===e?"<svg>":3===e?"<math>":"",a=R;for(let e=0;e<r;e++){const r=t[e];let s,l,c=-1,d=0;for(;d<r.length&&(a.lastIndex=d,l=a.exec(r),null!==l);)d=a.lastIndex,a===R?"!--"===l[1]?a=j:void 0!==l[1]?a=$:void 0!==l[2]?(F.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=D):void 0!==l[3]&&(a=D):a===D?">"===l[0]?(a=n??R,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?D:'"'===l[3]?B:M):a===B||a===M?a=D:a===j||a===$?a=R:(a=D,n=void 0);const u=a===D&&t[e+1].startsWith("/>")?" ":"";i+=a===R?r+k:c>=0?(o.push(s),r.slice(0,c)+C+r.slice(c)+S+u):r+S+(-2===c?e:u)}return[W(t,i+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class X{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let n=0,i=0;const a=t.length-1,s=this.parts,[l,c]=J(t,e);if(this.el=X.createElement(l,r),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=G.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(C)){const e=c[i++],r=o.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);s.push({type:1,index:n,name:a[2],strings:r,ctor:"."===a[1]?et:"?"===a[1]?rt:"@"===a[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(S)&&(s.push({type:6,index:n}),o.removeAttribute(t));if(F.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=P?P.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],N()),G.nextNode(),s.push({type:2,index:++n});o.append(t[e],N())}}}else if(8===o.nodeType)if(o.data===O)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)s.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const r=T.createElement("template");return r.innerHTML=t,r}}function K(t,e,r=t,o){if(e===U)return e;let n=void 0!==o?r._$Co?.[o]:r._$Cl;const i=I(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),void 0===i?n=void 0:(n=new i(t),n._$AT(t,r,o)),void 0!==o?(r._$Co??=[])[o]=n:r._$Cl=n),void 0!==n&&(e=K(t,n._$AS(t,e.values),n,o)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??T).importNode(e,!0);G.currentNode=o;let n=G.nextNode(),i=0,a=0,s=r[0];for(;void 0!==s;){if(i===s.index){let e;2===s.type?e=new Q(n,n.nextSibling,this,t):1===s.type?e=new s.ctor(n,s.name,s.strings,this,t):6===s.type&&(e=new nt(n,this,t)),this._$AV.push(e),s=r[++a]}i!==s?.index&&(n=G.nextNode(),i++)}return G.currentNode=T,o}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),I(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=X.createElement(W(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Z(o,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new X(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const n of t)o===e.length?e.push(r=new Q(this.O(N()),this.O(N()),this,this.options)):r=e[o],r._$AI(n),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=q}_$AI(t,e=this,r,o){const n=this.strings;let i=!1;if(void 0===n)t=K(this,t,e,0),i=!I(t)||t!==this._$AH&&t!==U,i&&(this._$AH=t);else{const o=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=K(this,o[r+a],e,a),s===U&&(s=this._$AH[a]),i||=!I(s)||s!==this._$AH[a],s===q?t=q:t!==q&&(t+=(s??"")+n[a+1]),this._$AH[a]=s}i&&!o&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class rt extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class ot extends tt{constructor(t,e,r,o,n){super(t,e,r,o,n),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??q)===U)return;const r=this._$AH,o=t===q&&r!==q||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==q&&(r===q||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const it=A.litHtmlPolyfillSupport;it?.(X,Q),(A.litHtmlVersions??=[]).push("3.2.1");class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const o=r?.renderBefore??e;let n=o._$litPart$;if(void 0===n){const t=r?.renderBefore??null;o._$litPart$=n=new Q(e.insertBefore(N(),t),t,void 0,r??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const st=globalThis.litElementPolyfillSupport;st?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.1.1"),window.Vaadin||={},window.Vaadin.featureFlags||={};const lt={};function ct(t,e="24.6.4"){if(Object.defineProperty(t,"version",{get:()=>e}),t.experimental){const e="string"==typeof t.experimental?t.experimental:`${r=t.is.split("-").slice(1).join("-"),r.replace(/-[a-z]/gu,(t=>t[1].toUpperCase()))}Component`;if(!window.Vaadin.featureFlags[e]&&!lt[e])return lt[e]=new Set,lt[e].add(t),void Object.defineProperty(window.Vaadin.featureFlags,e,{get:()=>0===lt[e].size,set(t){t&&lt[e].size>0&&(lt[e].forEach((t=>{customElements.define(t.is,t)})),lt[e].clear())}});if(lt[e])return void lt[e].add(t)}var r;const o=customElements.get(t.is);if(o){const e=o.version;e&&t.version&&e===t.version?console.warn(`The component ${t.is} has been loaded twice`):console.error(`Tried to define ${t.is} version ${t.version} when version ${o.version} is already in use. Something will probably break.`)}else customElements.define(t.is,t)}class dt extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}ct(dt);const ut=t=>class extends t{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),"theme"===t&&this._set_theme(r)}},ht=[],pt=new Set,ft=new Set;function mt(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}function vt(t,e){return(t||"").split(" ").some((t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(e)))}function _t(t){return t.map((t=>t.cssText)).join("\n")}const gt="vaadin-themable-mixin-style";function yt(t){t.prototype instanceof at?t.elementStyles=t.finalizeStyles(t.styles):t.prototype._template.content.getElementById(gt).textContent=_t(t.getStylesForThis()),ft.forEach((e=>{const r=customElements.get(e);r!==t&&r.prototype instanceof t&&yt(r)}))}function bt(t,e,r={}){e=function(t=[]){return[t].flat(1/0).filter((t=>t instanceof n||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1)))}(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,r):ht.push({themeFor:t,styles:e,include:r.include,moduleId:r.moduleId}),t&&ft.forEach((r=>{if(vt(t,r)&&function(t){return mt(customElements.get(t))}(r)){const t=customElements.get(r);!function(t,e){const r=t.__themes;return!(!r||!e)&&r.some((t=>t.styles.some((t=>e.some((e=>e.cssText===t.cssText))))))}(t,e)?window.Vaadin&&window.Vaadin.suppressPostFinalizeStylesWarning||console.warn(`The custom element definition for "${r}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`):console.warn(`Registering styles that already exist for ${r}`),yt(t),function(t){pt.forEach((e=>{const r=e.deref();r instanceof t?function(t){if(!t.shadowRoot)return;const e=t.constructor;if(t instanceof at)[...t.shadowRoot.querySelectorAll("style")].forEach((t=>t.remove())),a(t.shadowRoot,e.elementStyles);else{const r=t.shadowRoot.getElementById(gt),o=e.prototype._template;r.textContent=o.content.getElementById(gt).textContent}}(r):r||pt.delete(e)}))}(t)}}))}function wt(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():ht}function xt(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function At(t){const e=[];return t.include&&[].concat(t.include).forEach((t=>{const r=wt().find((e=>e.moduleId===t));r?e.push(...At(r),...r.styles):console.warn(`Included moduleId ${t} not found in style registry`)}),t.styles),e}function Pt(t){const e=`${t}-default-theme`,r=wt().filter((r=>r.moduleId!==e&&vt(r.themeFor,t))).map((t=>({...t,styles:[...At(t),...t.styles],includePriority:xt(t.moduleId)}))).sort(((t,e)=>e.includePriority-t.includePriority));return r.length>0?r:wt().filter((t=>t.moduleId===e))}const Et=t=>class extends(ut(t)){constructor(){super(),pt.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&ft.add(this.is),this.elementStyles)return;const t=this.prototype._template;t&&!mt(this)&&function(t,e){const r=document.createElement("style");r.id=gt,r.textContent=_t(t),e.content.appendChild(r)}(this.getStylesForThis(),t)}static finalizeStyles(t){const e=this.getStylesForThis();return t?[...[t].flat(1/0),...e]:e}static getStylesForThis(){const e=t.__themes||[],r=Object.getPrototypeOf(this.prototype),o=(r?r.constructor.__themes:[])||[];this.__themes=[...e,...o,...Pt(this.is)];const n=this.__themes.flatMap((t=>t.styles));return n.filter(((t,e)=>e===n.lastIndexOf(t)))}},Ct=(t,...e)=>{((t,...e)=>{const r=document.createElement("style");r.id=t,r.textContent=e.map((t=>t.toString())).join("\n").replace(":host","html"),document.head.insertAdjacentElement("afterbegin",r)})(`lumo-${t}`,e)};Ct("color-props",i`
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
`),bt("",i`
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
`,{moduleId:"lumo-color"}),Ct("sizing-props",i`
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
`),Ct("spacing-props",i`
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
`),i`
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
`,Ct("style-props",i`
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
`);const St=i`
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
`;bt("",i`
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
`,{moduleId:"lumo-typography"}),Ct("typography-props",St);const Ot=i`
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
`;bt("vaadin-button",Ot,{moduleId:"lumo-button"}),window.JSCompiler_renameProperty=function(t,e){return t};let kt,Tt,Nt=/(url\()([^)]*)(\))/g,It=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function Lt(t,e){if(t&&It.test(t))return t;if("//"===t)return t;if(void 0===kt){kt=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",kt="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),kt)try{return new URL(t,e).href}catch(e){return t}return Tt||(Tt=document.implementation.createHTMLDocument("temp"),Tt.base=Tt.createElement("base"),Tt.head.appendChild(Tt.base),Tt.anchor=Tt.createElement("a"),Tt.body.appendChild(Tt.anchor)),Tt.base.href=e,Tt.anchor.href=t,Tt.anchor.href||t}function zt(t,e){return t.replace(Nt,(function(t,r,o,n){return r+"'"+Lt(o.replace(/["']/g,""),e)+"'"+n}))}function Rt(t){return t.substring(0,t.lastIndexOf("/")+1)}const jt=!window.ShadyDOM||!window.ShadyDOM.inUse,$t=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,jt&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})());let Dt=window.Polymer&&window.Polymer.rootPath||Rt(document.baseURI||window.location.href),Mt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Bt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Ft=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Ht=window.Polymer&&window.Polymer.legacyOptimizations||!1,Vt=window.Polymer&&window.Polymer.legacyWarnings||!1,Ut=window.Polymer&&window.Polymer.syncInitialRender||!1,qt=window.Polymer&&window.Polymer.legacyUndefined||!1,Yt=window.Polymer&&window.Polymer.orderedComputed||!1,Gt=!0,Wt=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Jt=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Xt=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,Kt=0;function Zt(){}Zt.prototype.__mixinApplications,Zt.prototype.__mixinSet;const Qt=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let r=Kt++;return function(o){let n=o.__mixinSet;if(n&&n[r])return o;let i=e,a=i.get(o);if(!a){a=t(o),i.set(o,a);let e=Object.create(a.__mixinSet||n||null);e[r]=!0,a.__mixinSet=e}return a}};let te={},ee={};function re(t,e){te[t]=ee[t.toLowerCase()]=e}function oe(t){return te[t]||ee[t.toLowerCase()]}class ne extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let r=oe(t);return r&&e?r.querySelector(e):r}return null}attributeChangedCallback(t,e,r,o){e!==r&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Lt(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Rt(e)}return this.__assetpath}register(t){if(t=t||this.id){if(Bt&&void 0!==oe(t))throw re(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,re(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}ne.prototype.modules=te,customElements.define("dom-module",ne);const ie="shady-unscoped";function ae(t){return ne.import(t)}function se(t){const e=zt((t.body?t.body:t).textContent,t.baseURI),r=document.createElement("style");return r.textContent=e,r}function le(t){const e=t.trim().split(/\s+/),r=[];for(let t=0;t<e.length;t++)r.push(...ce(e[t]));return r}function ce(t){const e=ae(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...ue(e));const r=e.querySelector("template");r&&t.push(...de(r,e.assetpath)),e._styles=t}return e._styles}function de(t,e){if(!t._styles){const r=[],o=t.content.querySelectorAll("style");for(let t=0;t<o.length;t++){let n=o[t],i=n.getAttribute("include");i&&r.push(...le(i).filter((function(t,e,r){return r.indexOf(t)===e}))),e&&(n.textContent=zt(n.textContent,e)),r.push(n)}t._styles=r}return t._styles}function ue(t){const e=[],r=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<r.length;t++){let o=r[t];if(o.import){const t=o.import,r=o.hasAttribute(ie);if(r&&!t._unscopedStyle){const e=se(t);e.setAttribute(ie,""),t._unscopedStyle=e}else t._style||(t._style=se(t));e.push(r?t._unscopedStyle:t._style)}}return e}const he=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;function pe(t){return t.indexOf(".")>=0}function fe(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function me(t,e){return 0===e.indexOf(t+".")}function ve(t,e,r){return e+r.slice(t.length)}function _e(t){if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let o=t[r].toString().split(".");for(let t=0;t<o.length;t++)e.push(o[t])}return e.join(".")}return t}function ge(t){return Array.isArray(t)?_e(t).split("."):t.toString().split(".")}function ye(t,e,r){let o=t,n=ge(e);for(let t=0;t<n.length;t++){if(!o)return;o=o[n[t]]}return r&&(r.path=n.join(".")),o}function be(t,e,r){let o=t,n=ge(e),i=n[n.length-1];if(n.length>1){for(let t=0;t<n.length-1;t++)if(o=o[n[t]],!o)return;o[i]=r}else o[e]=r;return n.join(".")}const we={},xe=/-[a-z]/g,Ae=/([A-Z])/g;function Pe(t){return we[t]||(we[t]=t.indexOf("-")<0?t:t.replace(xe,(t=>t[1].toUpperCase())))}function Ee(t){return we[t]||(we[t]=t.replace(Ae,"-$1").toLowerCase())}let Ce=0,Se=0,Oe=[],ke=0,Te=!1,Ne=document.createTextNode("");new window.MutationObserver((function(){Te=!1;const t=Oe.length;for(let e=0;e<t;e++){let t=Oe[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}Oe.splice(0,t),Se+=t})).observe(Ne,{characterData:!0});const Ie={run:t=>(Te||(Te=!0,Ne.textContent=ke++),Oe.push(t),Ce++),cancel(t){const e=t-Se;if(e>=0){if(!Oe[e])throw new Error("invalid async handle: "+t);Oe[e]=null}}},Le=Qt((t=>class extends t{static createProperties(t){const e=this.prototype;for(let r in t)r in e||e._createPropertyAccessor(r)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,r){let o=this.__data[t],n=this._shouldPropertyChange(t,e,o);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=o),this.__data[t]=e,this.__dataPending[t]=e),n}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Ie.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(t,e,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,r)),this.__dataCounter--}_shouldPropertiesChange(t,e,r){return Boolean(e)}_propertiesChanged(t,e,r){}_shouldPropertyChange(t,e,r){return r!==e&&(r==r||e==e)}attributeChangedCallback(t,e,r,o){e!==r&&this._attributeToProperty(t,r),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,r,o)}_attributeToProperty(t,e,r){if(!this.__serializing){const o=this.__dataAttributes,n=o&&o[t]||t;this[n]=this._deserializeValue(e,r||this.constructor.typeForProperty(n))}}_propertyToAttribute(t,e,r){this.__serializing=!0,r=arguments.length<3?this[t]:r,this._valueToNodeAttribute(this,r,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,r){const o=this._serializeValue(e);"class"!==r&&"name"!==r&&"slot"!==r||(t=he(t)),void 0===o?t.removeAttribute(r):t.setAttribute(r,""===o&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(t){return"boolean"==typeof t?t?"":void 0:null!=t?t.toString():void 0}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})),ze={};let Re=HTMLElement.prototype;for(;Re;){let t=Object.getOwnPropertyNames(Re);for(let e=0;e<t.length;e++)ze[t[e]]=!0;Re=Object.getPrototypeOf(Re)}const je=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1,$e=Qt((t=>{const e=Le(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Pe(t[e]))}static attributeNameForProperty(t){return Ee(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){this.hasAttribute(t)||this._valueToNodeAttribute(this,e,t)}_serializeValue(t){if("object"==typeof t){if(t instanceof Date)return t.toString();if(t){if(je(t))return t;try{return JSON.stringify(t)}catch(t){return""}}}return super._serializeValue(t)}_deserializeValue(t,e){let r;switch(e){case Object:try{r=JSON.parse(t)}catch(e){r=t}break;case Array:try{r=JSON.parse(t)}catch(e){r=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:r=isNaN(t)?String(t):Number(t),r=new Date(r);break;default:r=super._deserializeValue(t,e)}return r}_definePropertyAccessor(t,e){!function(t,e){if(!ze[e]){let r=t[e];void 0!==r&&(t.__data?t._setPendingProperty(e,r):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=r))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})),De={"dom-if":!0,"dom-repeat":!0};let Me=!1,Be=!1;const Fe=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(e,r,o)=>{const n=r.getAttribute(o);t&&o.startsWith("on-")?e.setAttribute(o,t.createScript(n,o)):e.setAttribute(o,n)}})();function He(t){let e=t.getAttribute("is");if(e&&De[e]){let r=t;for(r.removeAttribute("is"),t=r.ownerDocument.createElement(e),r.parentNode.replaceChild(t,r),t.appendChild(r);r.attributes.length;){const{name:e}=r.attributes[0];Fe(t,r,e),r.removeAttribute(e)}}return t}function Ve(t,e){let r=e.parentInfo&&Ve(t,e.parentInfo);if(!r)return t;for(let t=r.firstChild,o=0;t;t=t.nextSibling)if(e.parentIndex===o++)return t}function Ue(t,e,r,o){o.id&&(e[o.id]=r)}function qe(t,e,r){if(r.events&&r.events.length)for(let o,n=0,i=r.events;n<i.length&&(o=i[n]);n++)t._addMethodEventListenerToNode(e,o.name,o.value,t)}function Ye(t,e,r,o){r.templateInfo&&(e._templateInfo=r.templateInfo,e._parentTemplateInfo=o)}const Ge=Qt((t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let r=t._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=Boolean(e),r.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute&&t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,r,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,r){return this._parseTemplateNode(t.content,e,r)}static _parseTemplateNode(t,e,r){let o=!1,n=t;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(e.hasInsertionPoint=!0):o=this._parseTemplateNestedTemplate(n,e,r)||o,function(t){(function(){if(!Me){Me=!0;const t=document.createElement("textarea");t.placeholder="a",Be=t.placeholder===t.textContent}return Be})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}(n),n.firstChild&&this._parseTemplateChildNodes(n,e,r),n.hasAttributes&&n.hasAttributes()&&(o=this._parseTemplateNodeAttributes(n,e,r)||o),o||r.noted}static _parseTemplateChildNodes(t,e,r){if("script"!==t.localName&&"style"!==t.localName)for(let o,n=t.firstChild,i=0;n;n=o){if("template"==n.localName&&(n=He(n)),o=n.nextSibling,n.nodeType===Node.TEXT_NODE){let r=o;for(;r&&r.nodeType===Node.TEXT_NODE;)n.textContent+=r.textContent,o=r.nextSibling,t.removeChild(r),r=o;if(e.stripWhiteSpace&&!n.textContent.trim()){t.removeChild(n);continue}}let a={parentIndex:i,parentInfo:r};this._parseTemplateNode(n,e,a)&&(a.infoIndex=e.nodeInfoList.push(a)-1),n.parentNode&&i++}}static _parseTemplateNestedTemplate(t,e,r){let o=t,n=this._parseTemplate(o,e);return(n.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=n,!0}static _parseTemplateNodeAttributes(t,e,r){let o=!1,n=Array.from(t.attributes);for(let i,a=n.length-1;i=n[a];a--)o=this._parseTemplateNodeAttribute(t,e,r,i.name,i.value)||o;return o}static _parseTemplateNodeAttribute(t,e,r,o,n){return"on-"===o.slice(0,3)?(t.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:n}),!0):"id"===o&&(r.id=n,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let r=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,o=e.content||t.content,n=document.importNode(o,!0);n.__noInsertionPoint=!e.hasInsertionPoint;let i=n.nodeList=new Array(r.length);n.$={};for(let t,o=0,a=r.length;o<a&&(t=r[o]);o++){let r=i[o]=Ve(n,t);Ue(0,n.$,r,t),Ye(0,r,t,e),qe(this,r,t)}return n}_addMethodEventListenerToNode(t,e,r,o){let n=function(t,e,r){return t=t._methodHost||t,function(e){t[r]?t[r](e,e.detail):console.warn("listener method `"+r+"` not defined")}}(o=o||t,0,r);return this._addEventListenerToNode(t,e,n),n}_addEventListenerToNode(t,e,r){t.addEventListener(e,r)}_removeEventListenerFromNode(t,e,r){t.removeEventListener(e,r)}}));let We=0;const Je=[],Xe={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ke="__computeInfo",Ze=/[A-Z]/;function Qe(t,e,r){let o=t[e];if(o){if(!t.hasOwnProperty(e)&&(o=t[e]=Object.create(t[e]),r))for(let t in o){let e=o[t],r=o[t]=Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]}}else o=t[e]={};return o}function tr(t,e,r,o,n,i){if(e){let a=!1;const s=We++;for(let l in r){let c=e[n?fe(l):l];if(c)for(let e,d=0,u=c.length;d<u&&(e=c[d]);d++)e.info&&e.info.lastRun===s||n&&!rr(l,e.trigger)||(e.info&&(e.info.lastRun=s),e.fn(t,l,r,o,e.info,n,i),a=!0)}return a}return!1}function er(t,e,r,o,n,i,a,s){let l=!1,c=e[a?fe(o):o];if(c)for(let e,d=0,u=c.length;d<u&&(e=c[d]);d++)e.info&&e.info.lastRun===r||a&&!rr(o,e.trigger)||(e.info&&(e.info.lastRun=r),e.fn(t,o,n,i,e.info,a,s),l=!0);return l}function rr(t,e){if(e){let r=e.name;return r==t||!(!e.structured||!function(t,e){return 0===t.indexOf(e+".")}(r,t))||!(!e.wildcard||!me(r,t))}return!0}function or(t,e,r,o,n){let i="string"==typeof n.method?t[n.method]:n.method,a=n.property;i?i.call(t,t.__data[a],o[a]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function nr(t,e,r){let o=fe(e);return o!==e&&(ir(t,Ee(o)+"-changed",r[e],e),!0)}function ir(t,e,r,o){let n={value:r,queueProperty:!0};o&&(n.path=o),he(t).dispatchEvent(new CustomEvent(e,{detail:n}))}function ar(t,e,r,o,n,i){let a=(i?fe(e):e)!=e?e:null,s=a?ye(t,a):t.__data[e];a&&void 0===s&&(s=r[e]),ir(t,n.eventName,s,a)}function sr(t,e,r,o,n){let i=t.__data[e];Mt&&(i=Mt(i,n.attrName,"attribute",t)),t._propertyToAttribute(e,n.attrName,i)}const lr=(t,e,r)=>{let o=0,n=e.length-1,i=-1;for(;o<=n;){const a=o+n>>1,s=r.get(e[a].methodInfo)-r.get(t.methodInfo);if(s<0)o=a+1;else{if(!(s>0)){i=a;break}n=a-1}}i<0&&(i=n+1),e.splice(i,0,t)},cr=(t,e,r,o,n)=>{const i=e[n?fe(t):t];if(i)for(let e=0;e<i.length;e++){const a=i[e];a.info.lastRun===We||n&&!rr(t,a.trigger)||(a.info.lastRun=We,lr(a.info,r,o))}};function dr(t,e,r,o,n){let i=_r(t,e,r,0,n);if(i===Je)return!1;let a=n.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[a]?t._setPendingProperty(a,i,!0):(t[a]=i,!1)}function ur(t,e,r,o,n,i,a){r.bindings=r.bindings||[];let s={kind:o,target:n,parts:i,literal:a,isCompound:1!==i.length};if(r.bindings.push(s),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(s)){let{event:t,negate:e}=s.parts[0];s.listenerEvent=t||Ee(n)+"-changed",s.listenerNegate=e}let l=e.nodeInfoList.length;for(let r=0;r<s.parts.length;r++){let o=s.parts[r];o.compoundIndex=r,hr(t,e,s,o,l)}}function hr(t,e,r,o,n){if(!o.literal)if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let i=o.dependencies,a={index:n,binding:r,part:o,evaluator:t};for(let r=0;r<i.length;r++){let o=i[r];"string"==typeof o&&(o=Pr(o),o.wildcard=!0),t._addTemplatePropertyEffect(e,o.rootProperty,{fn:pr,info:a,trigger:o})}}}function pr(t,e,r,o,n,i,a){let s=a[n.index],l=n.binding,c=n.part;if(i&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[l.target]){let o=r[e];e=ve(c.source,l.target,e),s._setPendingPropertyOrPath(e,o,!1,!0)&&t._enqueueClient(s)}else{let a=n.evaluator._evaluateBinding(t,c,e,r,o,i);a!==Je&&function(t,e,r,o,n){if(n=function(t,e,r,o){if(r.isCompound){let n=t.__dataCompoundStorage[r.target];n[o.compoundIndex]=e,e=n.join("")}return"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e)),e}(e,n,r,o),Mt&&(n=Mt(n,r.target,r.kind,e)),"attribute"==r.kind)t._valueToNodeAttribute(e,n,r.target);else{let o=r.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[o]?e[Xe.READ_ONLY]&&e[Xe.READ_ONLY][o]||e._setPendingProperty(o,n)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,o,n)}}(t,s,l,c,a)}}function fr(t,e){if(e.isCompound){let r=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),o=e.parts,n=new Array(o.length);for(let t=0;t<o.length;t++)n[t]=o[t].literal;let i=e.target;r[i]=n,e.literal&&"property"==e.kind&&("className"===i&&(t=he(t)),t[i]=e.literal)}}function mr(t,e,r){if(r.listenerEvent){let o=r.parts[0];t.addEventListener(r.listenerEvent,(function(t){!function(t,e,r,o,n){let i,a=t.detail,s=a&&a.path;s?(o=ve(r,o,s),i=a&&a.value):i=t.currentTarget[r],i=n?!i:i,e[Xe.READ_ONLY]&&e[Xe.READ_ONLY][o]||!e._setPendingPropertyOrPath(o,i,!0,Boolean(s))||a&&a.queueProperty||e._invalidateProperties()}(t,e,r.target,o.source,o.negate)}))}}function vr(t,e,r,o,n,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let a={methodName:e.methodName,args:e.args,methodInfo:n,dynamicFn:i};for(let n,i=0;i<e.args.length&&(n=e.args[i]);i++)n.literal||t._addPropertyEffect(n.rootProperty,r,{fn:o,info:a,trigger:n});return i&&t._addPropertyEffect(e.methodName,r,{fn:o,info:a}),a}function _r(t,e,r,o,n){let i=t._methodHost||t,a=i[n.methodName];if(a){let o=t._marshalArgs(n.args,e,r);return o===Je?Je:a.apply(i,o)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const gr=[],yr="(?:[a-zA-Z_$][\\w.:$\\-*]*)",br="(?:("+yr+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",wr=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?("+yr+"\\s*(?:\\(\\s*(?:(?:"+br+"(?:,\\s*"+br+")*)?)\\)\\s*)?)(?:]]|}})","g");function xr(t){let e="";for(let r=0;r<t.length;r++)e+=t[r].literal||"";return e}function Ar(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:gr};return e[2].trim()?function(t,e){return e.args=t.map((function(t){let r=Pr(t);return r.literal||(e.static=!1),r}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t):t}return null}function Pr(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:e,value:"",literal:!1},o=e[0];switch("-"===o&&(o=e[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':r.value=e.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(e),r.literal=!0}return r.literal||(r.rootProperty=fe(e),r.structured=pe(e),r.structured&&(r.wildcard=".*"==e.slice(-2),r.wildcard&&(r.name=e.slice(0,-2)))),r}function Er(t,e,r){let o=ye(t,r);return void 0===o&&(o=e[r]),o}function Cr(t,e,r,o){const n={indexSplices:o};qt&&!t._overrideLegacyUndefined&&(e.splices=n),t.notifyPath(r+".splices",n),t.notifyPath(r+".length",e.length),qt&&!t._overrideLegacyUndefined&&(n.indexSplices=[])}function Sr(t,e,r,o,n,i){Cr(t,e,r,[{index:o,addedCount:n,removed:i,object:e,type:"splice"}])}const Or=Qt((t=>{const e=Ge($e(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Xe}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(kr.length){let t=kr[kr.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[Xe.READ_ONLY];for(let r in t)e&&e[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=t[r])}_addPropertyEffect(t,e,r){this._createPropertyAccessor(t,e==Xe.READ_ONLY);let o=Qe(this,e,!0)[t];o||(o=this[e][t]=[]),o.push(r)}_removePropertyEffect(t,e,r){let o=Qe(this,e,!0)[t],n=o.indexOf(r);n>=0&&o.splice(n,1)}_hasPropertyEffect(t,e){let r=this[e];return Boolean(r&&r[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,Xe.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,Xe.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,Xe.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,Xe.COMPUTE)}_setPendingPropertyOrPath(t,e,r,o){if(o||fe(Array.isArray(t)?t[0]:t)!==t){if(!o){let r=ye(this,t);if(!(t=be(this,t,e))||!super._shouldPropertyChange(t,e,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,r))return function(t,e,r){let o=t.__dataLinkedPaths;if(o){let n;for(let i in o){let a=o[i];me(i,e)?(n=ve(i,a,e),t._setPendingPropertyOrPath(n,r,!0,!0)):me(a,e)&&(n=ve(a,i,e),t._setPendingPropertyOrPath(n,r,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,r);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,r){r===t[e]&&"object"!=typeof r||("className"===e&&(t=he(t)),t[e]=r)}_setPendingProperty(t,e,r){let o=this.__dataHasPaths&&pe(t),n=o?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,n[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),o?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(o||this[Xe.NOTIFY]&&this[Xe.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=r),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let r=t[e];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let r in t)!e&&this[Xe.READ_ONLY]&&this[Xe.READ_ONLY][r]||this._setPendingPropertyOrPath(r,t[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,r){let o,n=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,r,o){let n=t[Xe.COMPUTE];if(n)if(Yt){We++;const i=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const r=t[Xe.COMPUTE];let o,{counts:n,ready:i,total:a}=function(t){const e=t[Ke],r={},o=t[Xe.COMPUTE],n=[];let i=0;for(let t in e){const o=e[t];i+=r[t]=o.args.filter((t=>!t.literal)).length+(o.dynamicFn?1:0)}for(let t in o)e[t]||n.push(t);return{counts:r,ready:n,total:i}}(t);for(;o=i.shift();){e.set(o,e.size);const t=r[o];t&&t.forEach((t=>{const e=t.info.methodInfo;--a,0==--n[e]&&i.push(e)}))}if(0!==a){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),a=[];for(let t in e)cr(t,n,a,i,o);let s;for(;s=a.shift();)dr(t,"",e,0,s)&&cr(s.methodInfo,n,a,i,o);Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let i=e;for(;tr(t,n,i,r,o);)Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}(this,e,r,n),o=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,r,n),this._flushClients(),tr(this,this[Xe.REFLECT],e,r,n),tr(this,this[Xe.OBSERVE],e,r,n),o&&function(t,e,r,o,n){let i,a,s=t[Xe.NOTIFY],l=We++;for(let a in e)e[a]&&(s&&er(t,s,l,a,r,o,n)||n&&nr(t,a,r))&&(i=!0);i&&(a=t.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}(this,o,e,r,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,r){this[Xe.PROPAGATE]&&tr(this,this[Xe.PROPAGATE],t,e,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,r)}_runEffectsForTemplate(t,e,r,o){const n=(e,o)=>{tr(this,t.propertyEffects,e,r,o,t.nodeList);for(let n=t.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,e,r,o)};t.runEffects?t.runEffects(n,e,o):n(e,o)}linkPaths(t,e){t=_e(t),e=_e(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=_e(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let r={path:""};Cr(this,ye(this,t,r),r.path,e)}get(t,e){return ye(e||this,t)}set(t,e,r){r?be(r,t,e):this[Xe.READ_ONLY]&&this[Xe.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let r={path:""},o=ye(this,t,r),n=o.length,i=o.push(...e);return e.length&&Sr(this,o,r.path,n,e.length,[]),i}pop(t){let e={path:""},r=ye(this,t,e),o=Boolean(r.length),n=r.pop();return o&&Sr(this,r,e.path,r.length,0,[n]),n}splice(t,e,r,...o){let n,i={path:""},a=ye(this,t,i);return e<0?e=a.length-Math.floor(-e):e&&(e=Math.floor(e)),n=2===arguments.length?a.splice(e):a.splice(e,r,...o),(o.length||n.length)&&Sr(this,a,i.path,e,o.length,n),n}shift(t){let e={path:""},r=ye(this,t,e),o=Boolean(r.length),n=r.shift();return o&&Sr(this,r,e.path,0,0,[n]),n}unshift(t,...e){let r={path:""},o=ye(this,t,r),n=o.unshift(...e);return e.length&&Sr(this,o,r.path,0,e.length,[]),n}notifyPath(t,e){let r;if(1==arguments.length){let o={path:""};e=ye(this,t,o),r=o.path}else r=Array.isArray(t)?_e(t):t;this._setPendingPropertyOrPath(r,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var r;this._addPropertyEffect(t,Xe.READ_ONLY),e&&(this["_set"+(r=t,r[0].toUpperCase()+r.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,r){let o={property:t,method:e,dynamicFn:Boolean(r)};this._addPropertyEffect(t,Xe.OBSERVE,{fn:or,info:o,trigger:{name:t}}),r&&this._addPropertyEffect(e,Xe.OBSERVE,{fn:or,info:o,trigger:{name:e}})}_createMethodObserver(t,e){let r=Ar(t);if(!r)throw new Error("Malformed observer expression '"+t+"'");vr(this,r,Xe.OBSERVE,_r,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,Xe.NOTIFY,{fn:ar,info:{eventName:Ee(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,Xe.REFLECT,{fn:sr,info:{attrName:e}})}_createComputedProperty(t,e,r){let o=Ar(e);if(!o)throw new Error("Malformed computed expression '"+e+"'");const n=vr(this,o,Xe.COMPUTE,dr,t,r);Qe(this,Ke)[t]=n}_marshalArgs(t,e,r){const o=this.__data,n=[];for(let i=0,a=t.length;i<a;i++){let{name:a,structured:s,wildcard:l,value:c,literal:d}=t[i];if(!d)if(l){const t=me(a,e),n=Er(o,r,t?e:a);c={path:t?e:a,value:n,base:t?ye(o,a):n}}else c=s?Er(o,r,a):o[a];if(qt&&!this._overrideLegacyUndefined&&void 0===c&&t.length>1)return Je;n[i]=c}return n}static addPropertyEffect(t,e,r){this.prototype._addPropertyEffect(t,e,r)}static createPropertyObserver(t,e,r){this.prototype._createPropertyObserver(t,e,r)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,r){this.prototype._createComputedProperty(t,e,r)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let r=this.constructor._parseTemplate(t),o=this.__preBoundTemplateInfo==r;if(!o)for(let t in r.propertyEffects)this._createPropertyAccessor(t);if(e)if(r=Object.create(r),r.wasPreBound=o,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,o=e.lastChild;r.parent=e,e.lastChild=r,r.previousSibling=o,o?o.nextSibling=r:e.firstChild=r}else this.__templateInfo=r;else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(t,e,r){(t.hostProps=t.hostProps||{})[e]=!0;let o=t.propertyEffects=t.propertyEffects||{};(o[e]=o[e]||[]).push(r)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),kr.push(this);let r=super._stampTemplate(t,e);if(kr.pop(),e.nodeList=r.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=r.firstChild;e;e=e.nextSibling)t.push(e)}return r.templateInfo=e,function(t,e){let{nodeList:r,nodeInfoList:o}=e;if(o.length)for(let e=0;e<o.length;e++){let n=o[e],i=r[e],a=n.bindings;if(a)for(let e=0;e<a.length;e++){let r=a[e];fr(i,r),mr(i,t,r)}i.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:r,nextSibling:o,parent:n}=e;r?r.nextSibling=o:n&&(n.firstChild=o),o?o.previousSibling=r:n&&(n.lastChild=r),e.nextSibling=e.previousSibling=null;let i=e.childNodes;for(let t=0;t<i.length;t++){let e=i[t];he(he(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,r,o){let n=e._parseTemplateNode.call(this,t,r,o);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,r);e&&(t.textContent=xr(e)||" ",ur(this,r,o,"text","textContent",e),n=!0)}return n}static _parseTemplateNodeAttribute(t,r,o,n,i){let a=this._parseBindings(i,r);if(a){let e=n,i="property";Ze.test(n)?i="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),i="attribute");let s=xr(a);return s&&"attribute"==i&&("class"==n&&t.hasAttribute("class")&&(s+=" "+t.getAttribute(n)),t.setAttribute(n,s)),"attribute"==i&&"disable-upgrade$"==e&&t.setAttribute(n,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===i&&(n=Pe(n)),ur(this,r,o,i,n,a,s),!0}return e._parseTemplateNodeAttribute.call(this,t,r,o,n,i)}static _parseTemplateNestedTemplate(t,r,o){let n=e._parseTemplateNestedTemplate.call(this,t,r,o);const i=t.parentNode,a=o.templateInfo,s="dom-if"===i.localName,l="dom-repeat"===i.localName;Wt&&(s||l)&&(i.removeChild(t),(o=o.parentInfo).templateInfo=a,o.noted=!0,n=!1);let c=a.hostProps;if(Jt&&s)c&&(r.hostProps=Object.assign(r.hostProps||{},c),Wt||(o.parentInfo.noted=!0));else{let t="{";for(let e in c)ur(this,r,o,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}return n}static _parseBindings(t,e){let r,o=[],n=0;for(;null!==(r=wr.exec(t));){r.index>n&&o.push({literal:t.slice(n,r.index)});let i=r[1][0],a=Boolean(r[2]),s=r[3].trim(),l=!1,c="",d=-1;"{"==i&&(d=s.indexOf("::"))>0&&(c=s.substring(d+2),s=s.substring(0,d),l=!0);let u=Ar(s),h=[];if(u){let{args:t,methodName:r}=u;for(let e=0;e<t.length;e++){let r=t[e];r.literal||h.push(r)}let o=e.dynamicFns;(o&&o[r]||u.static)&&(h.push(r),u.dynamicFn=!0)}else h.push(s);o.push({source:s,mode:i,negate:a,customEvent:l,signature:u,dependencies:h,event:c}),n=wr.lastIndex}if(n&&n<t.length){let e=t.substring(n);e&&o.push({literal:e})}return o.length?o:null}static _evaluateBinding(t,e,r,o,n,i){let a;return a=e.signature?_r(t,r,o,0,e.signature):r!=e.source?ye(t,e.source):i&&pe(r)?ye(t,r):t.__data[r],e.negate&&(a=!a),a}}})),kr=[],Tr=[],Nr=Qt((t=>{const e=Le(t);function r(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof n?e:null}function o(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const r=t.properties;r&&(e=function(t){const e={};for(let r in t){const o=t[r];e[r]="function"==typeof o?{type:o}:o}return e}(r))}t.__ownProperties=e}return t.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){t=this.prototype,Tr.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((t=>this.prototype._addPropertyToAttributeMap(t))):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=r(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=o(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=r(this);this.__properties=Object.assign({},t&&t._properties,o(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n})),Ir=window.ShadyCSS&&window.ShadyCSS.cssBuild,Lr=Qt((t=>{const e=Nr(Or(t));function r(t,e,r,o){r.computed&&(r.readOnly=!0),r.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,r.computed,o)),r.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!r.computed):!1===r.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),r.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===r.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),r.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===r.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),r.observer&&t._createPropertyObserver(e,r.observer,o[r.observer]),t._addPropertyToAttributeMap(e)}return class extends e{static get polymerElementVersion(){return"3.5.2"}static _finalizeClass(){e._finalizeClass.call(this);const t=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):Ht||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)r(this.prototype,e,t[e],t)}static createObservers(t,e){const r=this.prototype;for(let o=0;o<t.length;o++)r._createMethodObserver(t[o],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof t&&(t=t()),this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!Bt||Ft)&&(e=ne.import(t,"template"),Bt&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Rt(t.url);else{const t=ne.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Dt,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let r in e){let o=e[r];"value"in o&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[r]=o)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let r=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return zt(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const r=this.importPath;(function(t,e,r,o){if(!Ir){const n=e.content.querySelectorAll("style"),i=de(e),a=function(t){let e=ae(t);return e?ue(e):[]}(r),s=e.content.firstElementChild;for(let r=0;r<a.length;r++){let n=a[r];n.textContent=t._processStyleText(n.textContent,o),e.content.insertBefore(n,s)}let l=0;for(let e=0;e<i.length;e++){let r=i[e],a=n[l];a!==r?(r=r.cloneNode(!0),a.parentNode.insertBefore(r,a)):l++,r.textContent=t._processStyleText(r.textContent,o)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,r),Xt&&Ir&&$t){const r=e.content.querySelectorAll("style");if(r){let e="";Array.from(r).forEach((t=>{e+=t.textContent,t.parentNode.removeChild(t)})),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}})(this,e,t,r?Lt(r):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=he(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Ut&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Lt(this.importPath)),Lt(t,e)}static _parseTemplateContent(t,r,o){return r.dynamicFns=r.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,r,o)}static _addTemplatePropertyEffect(t,r,o){return!Vt||r in this._properties||o.info.part.signature&&o.info.part.signature.static||o.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,r,o)}}})),zr=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class Rr{constructor(t,e){Dr(t,e);const r=e.reduce(((e,r,o)=>e+jr(r)+t[o+1]),t[0]);this.value=r.toString()}toString(){return this.value}}function jr(t){if(t instanceof Rr)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const $r=function(t,...e){Dr(t,e);const r=document.createElement("template");let o=e.reduce(((e,r,o)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof Rr)return jr(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(r)+t[o+1]),t[0]);return zr&&(o=zr.createHTML(o)),r.innerHTML=o,r},Dr=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")},Mr=Lr(HTMLElement),Br=Qt((t=>"function"==typeof t.prototype.addController?t:class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach((t=>{t.hostConnected&&t.hostConnected()}))}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach((t=>{t.hostDisconnected&&t.hostDisconnected()}))}addController(t){this.__controllers.add(t),void 0!==this.$&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}})),Fr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Hr=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Vr(t,e){if("function"!=typeof t)return;const r=Fr.exec(t.toString());if(r)try{t=new Function(r[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};function Ur(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Hr?!(Hr&&Object.keys(Hr).map((t=>Hr[t])).filter((t=>t.productionMode)).length>0):!Vr((function(){return!0})))}catch(t){return!1}}());let qr=0,Yr=0;const Gr=[];let Wr=!1;const Jr={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},Xr={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},Kr={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},Zr={run(t){Wr||(Wr=!0,queueMicrotask((()=>function(){Wr=!1;const t=Gr.length;for(let e=0;e<t;e++){const t=Gr[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}Gr.splice(0,t),Yr+=t}()))),Gr.push(t);const e=qr;return qr+=1,e},cancel(t){const e=t-Yr;if(e>=0){if(!Gr[e])throw new Error(`invalid async handle: ${t}`);Gr[e]=null}}},Qr=new Set;class to{static debounce(t,e,r){return t instanceof to?t._cancelAsync():t=new to,t.setConfig(e,r),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run((()=>{this._timer=null,Qr.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Qr.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}const eo=[];function ro(t,e,r=t.getAttribute("dir")){e?t.setAttribute("dir",e):null!=r&&t.removeAttribute("dir")}function oo(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const t=oo();eo.forEach((e=>{ro(e,t)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const no=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>""===t?null:t}}}}get __isRTL(){return"rtl"===this.getAttribute("dir")}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")&&!this.__restoreSubscription||(this.__subscribe(),ro(this,oo(),null))}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),"dir"!==t)return;const o=oo(),n=r===o&&-1===eo.indexOf(this),i=!r&&e&&-1===eo.indexOf(this),a=r!==o&&e===o;n||i?(this.__subscribe(),ro(this,o,r)):a&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=eo.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,r){("dir"!==r||""!==e||t.hasAttribute("dir"))&&super._valueToNodeAttribute(t,e,r)}_attributeToProperty(t,e,r){"dir"!==t||e?super._attributeToProperty(t,e,r):this.dir=""}__subscribe(){eo.includes(this)||eo.push(this)}__unsubscribe(){eo.includes(this)&&eo.splice(eo.indexOf(this),1)}};let io;Gt=!1,window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations||(window.Vaadin.registrations=[]),window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={}),window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){!function(t,e){if(window.Vaadin.developmentMode)Vr(t,e)}(Ur)};const ao=new Set,so=t=>class extends(no(t)){static finalize(){super.finalize();const{is:t}=this;var e;t&&!ao.has(t)&&(window.Vaadin.registrations.push(this),ao.add(t),window.Vaadin.developmentModeCallback&&(io=to.debounce(io,Kr,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),e=io,Qr.add(e)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};function lo(t){return t?new Set(t.split(" ")):new Set}function co(t){return t?[...t].join(" "):""}function uo(t,e,r){const o=lo(t.getAttribute(e));o.add(r),t.setAttribute(e,co(o))}class ho{constructor(t,e){this.slot=t,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask((()=>{this.flush()})))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const t=this.slot.assignedNodes({flatten:!0});let e=[];const r=[],o=[];t.length&&(e=t.filter((t=>!this._storedNodes.includes(t)))),this._storedNodes.length&&this._storedNodes.forEach(((e,n)=>{const i=t.indexOf(e);-1===i?r.push(e):i!==n&&o.push(e)})),(e.length||r.length||o.length)&&this.callback({addedNodes:e,currentNodes:t,movedNodes:o,removedNodes:r}),this._storedNodes=t}}let po=0;class fo extends EventTarget{static generateId(t,e="default"){return`${e}-${t.localName}-${po++}`}constructor(t,e,r,o={}){super();const{initializer:n,multiple:i,observe:a,useUniqueId:s,uniqueIdPrefix:l}=o;this.host=t,this.slotName=e,this.tagName=r,this.observe="boolean"!=typeof a||a,this.multiple="boolean"==typeof i&&i,this.slotInitializer=n,i&&(this.nodes=[]),s&&(this.defaultId=this.constructor.generateId(t,l||e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(0===t.length){const t=this.attachDefaultNode();t&&(this.nodes=[t],this.initNode(t))}else this.nodes=t,t.forEach((t=>{this.initAddedNode(t)}))}attachDefaultNode(){const{host:t,slotName:e,tagName:r}=this;let o=this.defaultNode;return!o&&r&&(o=document.createElement(r),o instanceof Element&&(""!==e&&o.setAttribute("slot",e),this.defaultNode=o)),o&&(this.node=o,t.appendChild(o)),o}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter((e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&""===t))}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:e}=this;e&&e(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,e=""===t?"slot:not([name])":`slot[name=${t}]`,r=this.host.shadowRoot.querySelector(e);this.__slotObserver=new ho(r,(({addedNodes:t,removedNodes:e})=>{const r=this.multiple?this.nodes:[this.node],o=t.filter((t=>!function(t){return t.nodeType===Node.TEXT_NODE&&""===t.textContent.trim()}(t)&&!r.includes(t)));e.length&&(this.nodes=r.filter((t=>!e.includes(t))),e.forEach((t=>{this.teardownNode(t)}))),o&&o.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...r,...o].filter((t=>t!==this.defaultNode)),o.forEach((t=>{this.initAddedNode(t)}))):(this.node&&this.node.remove(),this.node=o[0],this.initAddedNode(this.node)))}))}}class mo extends fo{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,void 0!==this.ariaTarget&&(t.ariaTarget=this.ariaTarget),void 0!==this.context&&(t.context=this.context),void 0!==this.manual&&(t.manual=this.manual),void 0!==this.opened&&(t.opened=this.opened),void 0!==this.position&&(t._position=this.position),void 0!==this.shouldShow&&(t.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(t){this.ariaTarget=t;const e=this.node;e&&(e.ariaTarget=t)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}const vo=i`
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
`,_o="string"==typeof document.head.style.touchAction,go="__polymerGestures",yo="__polymerGesturesHandled",bo="__polymerGesturesTouchAction",wo=["mousedown","mousemove","mouseup","click"],xo=[0,1,4,2],Ao=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function Po(t){return wo.indexOf(t)>-1}let Eo=!1;!function(){try{const t=Object.defineProperty({},"passive",{get(){Eo=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();const Co=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),So={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Oo(t){const e=t.type;if(!Po(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!Ao&&(e=xo[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}const ko={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function To(t,e,r){t.movefn=e,t.upfn=r,document.addEventListener("mousemove",e),document.addEventListener("mouseup",r)}function No(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const Io=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Lo={},zo=[];function Ro(t){const e=Io(t);return e.length>0?e[0]:t.target}function jo(t){const e=t.type,r=t.currentTarget[go];if(!r)return;const o=r[e];if(!o)return;if(!t[yo]&&(t[yo]={},e.startsWith("touch"))){const r=t.changedTouches[0];if("touchstart"===e&&1===t.touches.length&&(ko.touch.id=r.identifier),ko.touch.id!==r.identifier)return;_o||"touchstart"!==e&&"touchmove"!==e||function(t){const e=t.changedTouches[0],r=t.type;if("touchstart"===r)ko.touch.x=e.clientX,ko.touch.y=e.clientY,ko.touch.scrollDecided=!1;else if("touchmove"===r){if(ko.touch.scrollDecided)return;ko.touch.scrollDecided=!0;const r=function(t){let e="auto";const r=Io(t);for(let t,o=0;o<r.length;o++)if(t=r[o],t[bo]){e=t[bo];break}return e}(t);let o=!1;const n=Math.abs(ko.touch.x-e.clientX),i=Math.abs(ko.touch.y-e.clientY);t.cancelable&&("none"===r?o=!0:"pan-x"===r?o=i>n:"pan-y"===r&&(o=n>i)),o?t.preventDefault():Bo("track")}}(t)}const n=t[yo];if(!n.skip){for(let e,r=0;r<zo.length;r++)e=zo[r],o[e.name]&&!n[e.name]&&e.flow&&e.flow.start.indexOf(t.type)>-1&&e.reset&&e.reset();for(let r,i=0;i<zo.length;i++)r=zo[i],o[r.name]&&!n[r.name]&&(n[r.name]=!0,r[e](t))}}function $o(t,e,r){return!!Lo[e]&&(function(t,e,r){const o=Lo[e],n=o.deps,i=o.name;let a=t[go];a||(t[go]=a={});for(let e,r,o=0;o<n.length;o++)e=n[o],Co&&Po(e)&&"click"!==e||(r=a[e],r||(a[e]=r={_count:0}),0===r._count&&t.addEventListener(e,jo,void Po(e)),r[i]=(r[i]||0)+1,r._count=(r._count||0)+1);t.addEventListener(e,r),o.touchAction&&function(t,e){_o&&t instanceof HTMLElement&&Zr.run((()=>{t.style.touchAction=e})),t[bo]=e}(t,o.touchAction)}(t,e,r),!0)}function Do(t){zo.push(t),t.emits.forEach((e=>{Lo[e]=t}))}function Mo(t,e,r){const o=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=r,t.dispatchEvent(o),o.defaultPrevented){const t=r.preventer||r.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function Bo(t){const e=function(t){for(let e,r=0;r<zo.length;r++){e=zo[r];for(let r,o=0;o<e.emits.length;o++)if(r=e.emits[o],r===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function Fo(t,e,r,o){e&&Mo(e,t,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:o,prevent:t=>Bo(t)})}function Ho(t,e,r){if(t.prevent)return!1;if(t.started)return!0;const o=Math.abs(t.x-e),n=Math.abs(t.y-r);return o>=5||n>=5}function Vo(t,e,r){if(!e)return;const o=t.moves[t.moves.length-2],n=t.moves[t.moves.length-1],i=n.x-t.x,a=n.y-t.y;let s,l=0;o&&(s=n.x-o.x,l=n.y-o.y),Mo(e,"track",{state:t.state,x:r.clientX,y:r.clientY,dx:i,dy:a,ddx:s,ddy:l,sourceEvent:r,hover:()=>function(t,e){let r=document.elementFromPoint(t,e),o=r;for(;o&&o.shadowRoot&&!window.ShadyDOM;){const n=o;if(o=o.shadowRoot.elementFromPoint(t,e),n===o)break;o&&(r=o)}return r}(r.clientX,r.clientY)})}function Uo(t,e,r){const o=Math.abs(e.clientX-t.x),n=Math.abs(e.clientY-t.y),i=Ro(r||e);!i||So[i.localName]&&i.hasAttribute("disabled")||(isNaN(o)||isNaN(n)||o<=25&&n<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;const e=Ro(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const r=e.getBoundingClientRect(),o=t.pageX,n=t.pageY;return!(o>=r.left&&o<=r.right&&n>=r.top&&n<=r.bottom)}return!1}(e))&&(t.prevent||Mo(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r}))}Do({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){No(this.info)},mousedown(t){if(!Oo(t))return;const e=Ro(t),r=this;To(this.info,(t=>{Oo(t)||(Fo("up",e,t),No(r.info))}),(t=>{Oo(t)&&Fo("up",e,t),No(r.info)})),Fo("down",e,t)},touchstart(t){Fo("down",Ro(t),t.changedTouches[0],t)},touchend(t){Fo("up",Ro(t),t.changedTouches[0],t)}}),Do({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,No(this.info)},mousedown(t){if(!Oo(t))return;const e=Ro(t),r=this,o=t=>{const o=t.clientX,n=t.clientY;Ho(r.info,o,n)&&(r.info.state=r.info.started?"mouseup"===t.type?"end":"track":"start","start"===r.info.state&&Bo("tap"),r.info.addMove({x:o,y:n}),Oo(t)||(r.info.state="end",No(r.info)),e&&Vo(r.info,e,t),r.info.started=!0)};To(this.info,o,(t=>{r.info.started&&o(t),No(r.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(t){const e=Ro(t),r=t.changedTouches[0],o=r.clientX,n=r.clientY;Ho(this.info,o,n)&&("start"===this.info.state&&Bo("tap"),this.info.addMove({x:o,y:n}),Vo(this.info,e,r),this.info.state="track",this.info.started=!0)},touchend(t){const e=Ro(t),r=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),Vo(this.info,e,r))}}),Do({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(t){Oo(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click(t){Oo(t)&&Uo(this.info,t)},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(t){Uo(this.info,t.changedTouches[0],t)}});const qo=Qt((t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})),Yo=Qt((t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",(t=>{this._onKeyDown(t)})),this.addEventListener("keyup",(t=>{this._onKeyUp(t)}))}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t)}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}})),Go=t=>class extends(qo(Yo(t))){get _activeKeys(){return[" "]}ready(){super.ready(),$o(this,"down",(t=>{this._shouldSetActive(t)&&this._setActive(!0)})),$o(this,"up",(()=>{this._setActive(!1)}))}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",(t=>{this._activeKeys.includes(t.key)&&this._setActive(!1)}),{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}};let Wo=!1;window.addEventListener("keydown",(()=>{Wo=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{Wo=!1}),{capture:!0});const Jo=Qt((t=>class extends t{get _keyboardActive(){return Wo}ready(){this.addEventListener("focusin",(t=>{this._shouldSetFocus(t)&&this._setFocused(!0)})),this.addEventListener("focusout",(t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)})),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}})),Xo=t=>class extends(qo(t)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,e){super._disabledChanged(t,e),t?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):e&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&-1!==t&&(this._lastTabIndex=t,this.tabindex=-1)}},Ko=t=>class extends(Go(Xo(Jo(t)))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(t){super._onKeyDown(t),t.altKey||t.shiftKey||t.ctrlKey||t.metaKey||this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}};bt("vaadin-button",vo,{moduleId:"vaadin-button-styles"});class Zo extends(Ko(so(Et(Br(Mr))))){static get is(){return"vaadin-button"}static get template(){return(t=>t`
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
`)($r)}ready(){super.ready(),this._tooltipController=new mo(this),this.addController(this._tooltipController)}}ct(Zo),bt("vaadin-input-container",i`
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
  `,{moduleId:"lumo-input-container"}),Ct("font-icons",i`
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
`);const Qo=i`
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
`;bt("",Qo,{moduleId:"lumo-field-button"});const tn=i`
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
`,en=i`
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
`;bt("",en,{moduleId:"lumo-required-field"});const rn=[en,Qo,tn,i`
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
`];bt("",rn,{moduleId:"lumo-input-field-shared-styles"}),bt("vaadin-text-field",rn,{moduleId:"lumo-text-field-styles"});const on=t=>class extends t{static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",(t=>{t.target===this&&t.preventDefault()})),this.addEventListener("click",(t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach((t=>t.focus&&t.focus()))}))}};bt("vaadin-input-container",i`
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
`,{moduleId:"vaadin-input-container-styles"});class nn extends(on(Et(no(Mr)))){static get is(){return"vaadin-input-container"}static get template(){return $r`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}}ct(nn);const an=[i`
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
`,i`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`,i`
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
`];class sn extends fo{constructor(t,e,r={}){const{uniqueIdPrefix:o}=r;super(t,"input","input",{initializer:(t,r)=>{r.value&&(t.value=r.value),r.type&&t.setAttribute("type",r.type),t.id=this.defaultId,"function"==typeof e&&e(t)},useUniqueId:!0,uniqueIdPrefix:o})}}const ln=Qt((t=>class extends(Jo(Xo(t))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame((()=>{this.focus(),this.setAttribute("focus-ring","")}))}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,e){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):e&&this._removeFocusListeners(e)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_shouldRemoveFocus(t){return t.target===this.focusElement}_disabledChanged(t,e){super._disabledChanged(t,e),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){void 0!==t&&this.focusElement&&(this.focusElement.tabIndex=t,-1!==t&&(this.tabindex=void 0)),this.disabled&&t&&(-1!==t&&(this._lastTabIndex=t),this.tabindex=void 0)}})),cn=new WeakMap,dn=Qt((t=>class extends t{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),e=function(t){return cn.has(t)||cn.set(t,new Set),cn.get(t)}(t);this.slotStyles.forEach((r=>{e.has(r)||(function(t,e){const r=document.createElement("style");r.textContent=t,e===document?document.head.appendChild(r):e.insertBefore(r,e.firstChild)}(r,t),e.add(r))}))}})),un=t=>t.test(navigator.userAgent),hn=t=>t.test(navigator.platform);un(/Android/u),un(/Chrome/u)&&/Google Inc/u.test(navigator.vendor),un(/Firefox/u),hn(/^iPad/u)||hn(/^Mac/u)&&navigator.maxTouchPoints,hn(/^iPhone/u),un(/^((?!chrome|android).)*safari/iu);const pn=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}})(),fn=(window.ShadowRoot&&"adoptedStyleSheets"in Document.prototype&&CSSStyleSheet.prototype,Qt((t=>class extends t{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return null!=this.value&&""!==this.value}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(t){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=t),this._hasInputValue=t&&t.length>0}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this._inputElementValue=null!=t?t:"")}_inputElementChanged(t,e){t?this._addInputListeners(t):e&&this._removeInputListeners(e)}_hasInputValueChanged(t,e){(t||e)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(t){this._setHasInputValue(t),this._onInput(t)}_onInput(t){const e=t.composedPath()[0];this.__userInput=t.isTrusted,this.value=e.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,e){this._toggleHasValue(this._hasValue),""===t&&void 0===e||this.__userInput||this._forwardInputValue(t)}_setHasInputValue(t){const e=t.composedPath()[0];this._hasInputValue=e.value.length>0}}))),mn=t=>class extends(fn(Yo(t))){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",(t=>this._onClearButtonMouseDown(t))),this.clearElement.addEventListener("click",(t=>this._onClearButtonClick(t))))}_onClearButtonClick(t){t.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(t){t.preventDefault(),pn||this.inputElement.focus()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&this.value&&!this.readonly&&(t.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}},vn=new Map;function _n(t){return vn.has(t)||vn.set(t,new WeakMap),vn.get(t)}function gn(t,e){t&&t.removeAttribute(e)}function yn(t,e){if(!t||!e)return;const r=_n(e);if(r.has(t))return;const o=lo(t.getAttribute(e));r.set(t,new Set(o))}function bn(t,e,r={newId:null,oldId:null,fromUser:!1}){if(!t||!e)return;const{newId:o,oldId:n,fromUser:i}=r,a=_n(e),s=a.get(t);if(!i&&s)return n&&s.delete(n),void(o&&s.add(o));i&&(s?o||a.delete(t):yn(t,e),gn(t,e)),function(t,e,r){const o=lo(t.getAttribute(e));o.delete(r),0!==o.size?t.setAttribute(e,co(o)):t.removeAttribute(e)}(t,e,n);const l=o||co(s);l&&uo(t,e,l)}class wn{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),null!=this.__labelIdFromUser&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setAriaLabel(t){this.__setAriaLabelToAttribute(t),this.__label=t}setLabelId(t,e=!1){const r=e?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(t,r,e),e?this.__labelIdFromUser=t:this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}__setAriaLabelToAttribute(t){var e;this.__target&&(t?(yn(e=this.__target,"aria-labelledby"),gn(e,"aria-labelledby"),this.__target.setAttribute("aria-label",t)):this.__label&&(function(t,e){if(!t)return;const r=_n(e),o=r.get(t);o&&0!==o.size?uo(t,e,co(o)):t.removeAttribute(e),r.delete(t)}(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(t,e,r){bn(this.__target,"aria-labelledby",{newId:t,oldId:e,fromUser:r})}__setErrorIdToAriaAttribute(t,e){bn(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setHelperIdToAriaAttribute(t,e){bn(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}const xn=document.createElement("div");let An;xn.style.position="fixed",xn.style.clip="rect(0px, 0px, 0px, 0px)",xn.setAttribute("aria-live","polite"),document.body.appendChild(xn);class Pn extends fo{constructor(t,e,r,o={}){super(t,e,r,{...o,useUniqueId:!0})}initCustomNode(t){this.__updateNodeId(t),this.__notifyChange(t)}teardownNode(t){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const t=super.attachDefaultNode();return t&&this.__updateNodeId(t),t}restoreDefaultNode(){}updateDefaultNode(t){this.__notifyChange(t)}observeNode(t){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver((t=>{t.forEach((t=>{const e=t.target,r=e===this.node;"attributes"===t.type?r&&this.__updateNodeId(e):(r||e.parentElement===this.node)&&this.__notifyChange(this.node)}))})),this.__nodeObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(t){return!!t&&(t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent&&""!==t.textContent.trim())}__notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(t),node:t}}))}__updateNodeId(t){const e=!this.nodes||t===this.nodes[0];t.nodeType!==Node.ELEMENT_NODE||this.multiple&&!e||t.id||(t.id=this.defaultId)}}class En extends Pn{constructor(t){super(t,"error-message","div")}setErrorMessage(t){this.errorMessage=t,this.updateDefaultNode(this.node)}setInvalid(t){this.invalid=t,this.updateDefaultNode(this.node)}initAddedNode(t){t!==this.defaultNode&&this.initCustomNode(t)}initNode(t){this.updateDefaultNode(t)}initCustomNode(t){t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),super.initCustomNode(t)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(t){const{errorMessage:e,invalid:r}=this,o=Boolean(r&&e&&""!==e.trim());t&&(t.textContent=o?e:"",t.hidden=!o,o&&function(t,e={}){const r=e.mode||"polite",o=void 0===e.timeout?150:e.timeout;"alert"===r?(xn.removeAttribute("aria-live"),xn.removeAttribute("role"),An=to.debounce(An,Xr,(()=>{xn.setAttribute("role","alert")}))):(An&&An.cancel(),xn.removeAttribute("role"),xn.setAttribute("aria-live",r)),xn.textContent="",setTimeout((()=>{xn.textContent=t}),o)}(e,{mode:"assertive"})),super.updateDefaultNode(t)}}class Cn extends Pn{constructor(t){super(t,"helper",null)}setHelperText(t){this.helperText=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:t}=this;if(t&&""!==t.trim()){this.tagName="div";const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(t){t&&(t.textContent=this.helperText),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}class Sn extends Pn{constructor(t){super(t,"label","label")}setLabel(t){this.label=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:t}=this;if(t&&""!==t.trim()){const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(t){t&&(t.textContent=this.label),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}const On=Qt((t=>class extends(Br(t)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new Sn(this),this._labelController.addEventListener("slot-content-changed",(t=>{this.toggleAttribute("has-label",t.detail.hasContent)}))}get _labelId(){const t=this._labelNode;return t&&t.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}})),kn=Qt((t=>class extends t{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},manualValidation:{type:Boolean,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const t=this.checkValidity();return this._setInvalid(!t),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:t}})),t}checkValidity(){return!this.required||!!this.value}_setInvalid(t){this._shouldSetInvalid(t)&&(this.invalid=t)}_shouldSetInvalid(t){return!0}_requestValidation(){this.manualValidation||this.validate()}})),Tn=t=>class extends(kn(On(Br(t)))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new wn(this),this._helperController=new Cn(this),this._errorController=new En(this),this._errorController.addEventListener("slot-content-changed",(t=>{this.toggleAttribute("has-error-message",t.detail.hasContent)})),this._labelController.addEventListener("slot-content-changed",(t=>{const{hasContent:e,node:r}=t.detail;this.__labelChanged(e,r)})),this._helperController.addEventListener("slot-content-changed",(t=>{const{hasContent:e,node:r}=t.detail;this.toggleAttribute("has-helper",e),this.__helperChanged(e,r)}))}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(t,e){t?this._fieldAriaController.setHelperId(e.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(t){this._fieldAriaController.setAriaLabel(t)}_accessibleNameRefChanged(t){this._fieldAriaController.setLabelId(t,!0)}__labelChanged(t,e){t?this._fieldAriaController.setLabelId(e.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout((()=>{if(t){const t=this._errorNode;this._fieldAriaController.setErrorId(t&&t.id)}else this._fieldAriaController.setErrorId(null)}))}},Nn=Qt((t=>class extends t{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach((t=>{this._delegateAttribute(t,this[t])}))}_ensurePropsDelegated(){this.constructor.delegateProps.forEach((t=>{this._delegateProperty(t,this[t])}))}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach(((e,r)=>{this._delegateAttribute(e,t[r])}))}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach(((e,r)=>{this._delegateProperty(e,t[r])}))}_delegateAttribute(t,e){this.stateTarget&&("invalid"===t&&this._delegateAttribute("aria-invalid",!!e&&"true"),"boolean"==typeof e?this.stateTarget.toggleAttribute(t,e):e?this.stateTarget.setAttribute(t,e):this.stateTarget.removeAttribute(t))}_delegateProperty(t,e){this.stateTarget&&(this.stateTarget[t]=e)}})),In=Qt((t=>class extends(Nn(kn(fn(t)))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map((t=>this[t])))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some((t=>this.__isValidConstraint(t)))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(t,...e){if(!t)return;const r=this._hasValidConstraints(e),o=this.__previousHasConstraints&&!r;(this._hasValue||this.invalid)&&r?this._requestValidation():o&&!this.manualValidation&&this._setInvalid(!1),this.__previousHasConstraints=r}_onChange(t){t.stopPropagation(),this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return Boolean(t)||0===t}})),Ln=t=>class extends(dn(ln(In(Tn(mn(Yo(t))))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return["\n          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {\n            font: inherit;\n            color: inherit;\n          }\n        "]}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){super._onKeyDown(t),this.allowedCharPattern&&!this.__shouldAcceptKey(t)&&t.target===this.inputElement&&(t.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=to.debounce(this._preventInputDebouncer,Jr.after(200),(()=>{this.removeAttribute("input-prevented")}))}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||1!==t.key.length||this.__allowedCharRegExp.test(t.key)}_onPaste(t){if(this.allowedCharPattern){const e=t.clipboardData.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onDrop(t){if(this.allowedCharPattern){const e=t.dataTransfer.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onBeforeInput(t){this.allowedCharPattern&&t.data&&!this.__allowedTextRegExp.test(t.data)&&(t.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(t){if(t)try{this.__allowedCharRegExp=new RegExp(`^${t}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${t}*$`,"u")}catch(t){console.error(t)}}},zn=t=>class extends(Ln(t)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}_setFocused(t){super._setFocused(t),!t&&document.hasFocus()&&this._requestValidation()}_onInput(t){super._onInput(t),this.invalid&&this._requestValidation()}_valueChanged(t,e){super._valueChanged(t,e),void 0!==e&&this.invalid&&this._requestValidation()}};class Rn{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",(t=>{this.__initLabel(t.detail.node)})),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}const jn=t=>class extends(zn(t)){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new sn(this,(t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}))),this.addController(new Rn(this.inputElement,this._labelController))}};bt("vaadin-text-field",an,{moduleId:"vaadin-text-field-styles"});class $n extends(jn(Et(so(Mr)))){static get is(){return"vaadin-text-field"}static get template(){return $r`
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
    `}ready(){super.ready(),this._tooltipController=new mo(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}ct($n),bt("vaadin-password-field-button",[Ot,i`
  :host {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: auto;
    background: transparent;
    outline: none;
  }
`],{moduleId:"lumo-password-field-button"}),bt("vaadin-password-field",[rn,i`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`],{moduleId:"lumo-password-field"}),bt("vaadin-password-field-button",vo,{moduleId:"vaadin-password-field-button-styles"});class Dn extends(Ko(no(Et(Mr)))){static get is(){return"vaadin-password-field-button"}static get template(){return $r``}}ct(Dn);const Mn=t=>class extends(dn(qo(Jo(fn(t))))){static get properties(){return{revealButtonHidden:{type:Boolean,observer:"_revealButtonHiddenChanged",value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChanged",readOnly:!0},i18n:{type:Object,value:()=>({reveal:"Show password"})}}}static get observers(){return["__i18nChanged(i18n)"]}constructor(){super(),this._setType("password"),this.__boundRevealButtonClick=this._onRevealButtonClick.bind(this),this.__boundRevealButtonMouseDown=this._onRevealButtonMouseDown.bind(this),this.__lastChange=""}get slotStyles(){const t=this.localName;return[...super.slotStyles,`\n          ${t} [slot="input"]::-ms-reveal {\n            display: none;\n          }\n        `]}get _revealNode(){return this._revealButtonController&&this._revealButtonController.node}ready(){super.ready(),this._revealPart=this.shadowRoot.querySelector('[part="reveal-button"]'),this._revealButtonController=new fo(this,"reveal","vaadin-password-field-button",{initializer:t=>{t.disabled=this.disabled,t.addEventListener("click",this.__boundRevealButtonClick),t.addEventListener("mousedown",this.__boundRevealButtonMouseDown)}}),this.addController(this._revealButtonController),this.__updateAriaLabel(this.i18n),this._updateToggleState(!1),this._toggleRevealHidden(this.revealButtonHidden),this.inputElement&&(this.inputElement.autocapitalize="off")}_onChange(t){super._onChange(t),this.__lastChange=this.inputElement.value}_shouldSetFocus(t){return t.target===this.inputElement||t.target===this._revealNode}_shouldRemoveFocus(t){return!(t.relatedTarget===this._revealNode||t.relatedTarget===this.inputElement&&t.target===this._revealNode)}_setFocused(t){if(super._setFocused(t),t){const t=this.getRootNode().activeElement===this._revealNode;this.toggleAttribute("focus-ring",this._keyboardActive&&!t)}else this._setPasswordVisible(!1),this.__lastChange!==this.inputElement.value&&(this.__lastChange=this.inputElement.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})))}__updateAriaLabel(t){t&&t.reveal&&this._revealNode&&this._revealNode.setAttribute("aria-label",t.reveal)}__i18nChanged(t){this.__updateAriaLabel(t)}_revealButtonHiddenChanged(t){this._toggleRevealHidden(t)}_togglePasswordVisibility(){this._setPasswordVisible(!this.passwordVisible)}_onRevealButtonClick(){this._togglePasswordVisibility()}_onRevealButtonMouseDown(t){t.preventDefault(),this.inputElement.focus()}_toggleRevealHidden(t){this._revealNode&&(t?(this._revealPart.setAttribute("hidden",""),this._revealNode.setAttribute("tabindex","-1"),this._revealNode.setAttribute("aria-hidden","true")):(this._revealPart.removeAttribute("hidden"),this._revealNode.setAttribute("tabindex","0"),this._revealNode.removeAttribute("aria-hidden")))}_updateToggleState(t){this._revealNode&&this._revealNode.setAttribute("aria-pressed",t?"true":"false")}_passwordVisibleChanged(t){this._setType(t?"text":"password"),this._updateToggleState(t)}_disabledChanged(t,e){super._disabledChanged(t,e),this._revealNode&&(this._revealNode.disabled=t)}},Bn=$r`
  <div part="reveal-button" slot="suffix">
    <slot name="reveal"></slot>
  </div>
`;let Fn;class Hn extends(Mn($n)){static get is(){return"vaadin-password-field"}static get template(){if(!Fn){Fn=super.template.cloneNode(!0);const t=Bn.content.querySelector('[part="reveal-button"]');Fn.content.querySelector('[part="input-field"]').appendChild(t)}return Fn}}function Vn(t){return Vn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vn(t)}function Un(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,qn(o.key),o)}}function qn(t){var e=function(t){if("object"!=Vn(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=Vn(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==Vn(e)?e:e+""}ct(Hn);var Yn,Gn,Wn=function(){return function(t,e,r){return r&&Un(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}),0,[{key:"init",value:function(){var t=this;this.loadPage(),window.addEventListener("popstate",(function(){return t.loadPage()}))}},{key:"navigate",value:function(t){window.history.pushState({},"",t),this.loadPage()}},{key:"loadPage",value:function(){var t=window.location.pathname;document.querySelector("main-content").dispatchEvent(new CustomEvent("page-change",{detail:{path:t}}))}}])}();function Jn(t){return Jn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jn(t)}function Xn(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function Kn(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,ei(o.key),o)}}function Zn(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Zn=function(){return!!t})()}function Qn(t){return Qn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Qn(t)}function ti(t,e){return ti=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},ti(t,e)}function ei(t){var e=function(t){if("object"!=Jn(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=Jn(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==Jn(e)?e:e+""}var ri,oi,ni=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e,r){return e=Qn(e),function(t,e){if(e&&("object"==Jn(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Zn()?Reflect.construct(e,r||[],Qn(t).constructor):e.apply(t,r))}(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ti(t,e)}(e,t),function(t,e){return e&&Kn(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(e,[{key:"render",value:function(){return V(Yn||(Yn=Xn(['\n            <div class="topbar">\n                <div class="logo" @click=','>Craft Sphere</div>\n                <vaadin-button \n                    theme="primary" \n                    class="sign-in-button" \n                    @click=',"\n                >\n                    Sign In\n                </vaadin-button>\n            </div>\n        "])),(function(){return Wn.navigate("/")}),(function(){return Wn.navigate("/login")}))}}])}(at);function ii(t){return ii="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ii(t)}function ai(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function si(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,ui(o.key),o)}}function li(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(li=function(){return!!t})()}function ci(t){return ci=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ci(t)}function di(t,e){return di=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},di(t,e)}function ui(t){var e=function(t){if("object"!=ii(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=ii(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==ii(e)?e:e+""}!function(t,e,r){(e=ei(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(ni,"styles",i(Gn||(Gn=Xn(["\n        .topbar {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            width: 100vw;\n            height: 48px;\n            padding: 0 1rem;\n            background-color: #333;\n            color: white;\n            position: fixed;\n            top: 0;\n            left: 0;\n            z-index: 1000;\n        }\n        .logo {\n            font-size: 1.5rem;\n            cursor: pointer;\n        }\n        .sign-in-button {\n            margin-left: auto;\n        }\n    "])))),customElements.define("topbar-component",ni);var hi,pi=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e,r){return e=ci(e),function(t,e){if(e&&("object"==ii(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,li()?Reflect.construct(e,r||[],ci(t).constructor):e.apply(t,r))}(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&di(t,e)}(e,t),function(t,e){return e&&si(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(e,[{key:"createRenderRoot",value:function(){return this}},{key:"render",value:function(){return V(ri||(ri=ai(['\n            <section>\n                <h2>Welcome</h2>\n                <p>Share your creative projects and connect with others.</p>\n                <vaadin-text-field label="This is cooler"></vaadin-text-field>\n                <vaadin-button theme="primary">Submit</vaadin-button>\n            </section>\n        '])))}}])}(at);function fi(t){return fi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fi(t)}function mi(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,vi(o.key),o)}}function vi(t){var e=function(t){if("object"!=fi(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=fi(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==fi(e)?e:e+""}function _i(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_i=function(){return!!t})()}function gi(t){return gi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},gi(t)}function yi(t,e){return yi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},yi(t,e)}!function(t,e,r){(e=ui(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(pi,"styles",i(oi||(oi=ai(["\n        section {\n            padding: 1rem;\n        }\n    "])))),customElements.define("community-component",pi);var bi,wi,xi=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e,r){return e=gi(e),function(t,e){if(e&&("object"==fi(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,_i()?Reflect.construct(e,r||[],gi(t).constructor):e.apply(t,r))}(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&yi(t,e)}(e,t),function(t,e){return e&&mi(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(e,[{key:"createRenderRoot",value:function(){return this}},{key:"render",value:function(){return V(hi||(hi=function(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['\n            <div class="home-page">\n                <community-component></community-component>\n            </div>\n        '])))}}])}(at);function Ai(t){return Ai="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ai(t)}function Pi(){Pi=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function d(t,e,r,o){var i=e&&e.prototype instanceof _?e:_,a=Object.create(i.prototype),s=new T(o||[]);return n(a,"_invoke",{value:C(t,r,s)}),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",p="suspendedYield",f="executing",m="completed",v={};function _(){}function g(){}function y(){}var b={};c(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(N([])));x&&x!==r&&o.call(x,a)&&(b=x);var A=y.prototype=_.prototype=Object.create(b);function P(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(n,i,a,s){var l=u(t[n],t,i);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==Ai(d)&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(d).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,s)}))}s(l.arg)}var i;n(this,"_invoke",{value:function(t,o){function n(){return new e((function(e,n){r(t,o,e,n)}))}return i=i?i.then(n,n):n()}})}function C(e,r,o){var n=h;return function(i,a){if(n===f)throw Error("Generator is already running");if(n===m){if("throw"===i)throw a;return{value:t,done:!0}}for(o.method=i,o.arg=a;;){var s=o.delegate;if(s){var l=S(s,o);if(l){if(l===v)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===h)throw n=m,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=f;var c=u(e,r,o);if("normal"===c.type){if(n=o.done?m:p,c.arg===v)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(n=m,o.method="throw",o.arg=c.arg)}}}function S(e,r){var o=r.method,n=e.iterator[o];if(n===t)return r.delegate=null,"throw"===o&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),v;var i=u(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(Ai(e)+" is not iterable")}return g.prototype=y,n(A,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:g,configurable:!0}),g.displayName=c(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,l,"GeneratorFunction")),t.prototype=Object.create(A),t},e.awrap=function(t){return{__await:t}},P(E.prototype),c(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,o,n,i){void 0===i&&(i=Promise);var a=new E(d(t,r,o,n),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(A),c(A,l,"Generator"),c(A,a,(function(){return this})),c(A,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=N,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(o,n){return s.type="throw",s.arg=e,r.next=o,n&&(r.method="next",r.arg=t),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;k(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:N(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),v}},e}function Ei(t,e,r,o,n,i,a){try{var s=t[i](a),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(o,n)}function Ci(t){return Si.apply(this,arguments)}function Si(){return Si=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,n){var i=t.apply(e,r);function a(t){Ei(i,o,n,a,s,"next",t)}function s(t){Ei(i,o,n,a,s,"throw",t)}a(void 0)}))}}(Pi().mark((function t(e){var r,o,n,i=arguments;return Pi().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},t.prev=1,t.next=4,fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:r})});case 4:return o=t.sent,t.next=7,o.json();case 7:if(!(n=t.sent).errors){t.next=10;break}throw new Error(n.errors[0].message);case 10:return t.abrupt("return",n.data);case 13:throw t.prev=13,t.t0=t.catch(1),console.error("GraphQL Error:",t.t0),t.t0;case 17:case"end":return t.stop()}}),t,null,[[1,13]])}))),Si.apply(this,arguments)}function Oi(t){return Oi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oi(t)}function ki(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function Ti(){Ti=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function d(t,e,r,o){var i=e&&e.prototype instanceof _?e:_,a=Object.create(i.prototype),s=new T(o||[]);return n(a,"_invoke",{value:C(t,r,s)}),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",p="suspendedYield",f="executing",m="completed",v={};function _(){}function g(){}function y(){}var b={};c(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(N([])));x&&x!==r&&o.call(x,a)&&(b=x);var A=y.prototype=_.prototype=Object.create(b);function P(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(n,i,a,s){var l=u(t[n],t,i);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==Oi(d)&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(d).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,s)}))}s(l.arg)}var i;n(this,"_invoke",{value:function(t,o){function n(){return new e((function(e,n){r(t,o,e,n)}))}return i=i?i.then(n,n):n()}})}function C(e,r,o){var n=h;return function(i,a){if(n===f)throw Error("Generator is already running");if(n===m){if("throw"===i)throw a;return{value:t,done:!0}}for(o.method=i,o.arg=a;;){var s=o.delegate;if(s){var l=S(s,o);if(l){if(l===v)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===h)throw n=m,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=f;var c=u(e,r,o);if("normal"===c.type){if(n=o.done?m:p,c.arg===v)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(n=m,o.method="throw",o.arg=c.arg)}}}function S(e,r){var o=r.method,n=e.iterator[o];if(n===t)return r.delegate=null,"throw"===o&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),v;var i=u(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(Oi(e)+" is not iterable")}return g.prototype=y,n(A,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:g,configurable:!0}),g.displayName=c(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,l,"GeneratorFunction")),t.prototype=Object.create(A),t},e.awrap=function(t){return{__await:t}},P(E.prototype),c(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,o,n,i){void 0===i&&(i=Promise);var a=new E(d(t,r,o,n),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(A),c(A,l,"Generator"),c(A,a,(function(){return this})),c(A,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=N,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(o,n){return s.type="throw",s.arg=e,r.next=o,n&&(r.method="next",r.arg=t),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;k(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:N(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),v}},e}function Ni(t,e,r,o,n,i,a){try{var s=t[i](a),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(o,n)}function Ii(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,ji(o.key),o)}}function Li(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Li=function(){return!!t})()}function zi(t){return zi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},zi(t)}function Ri(t,e){return Ri=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ri(t,e)}function ji(t){var e=function(t){if("object"!=Oi(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=Oi(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==Oi(e)?e:e+""}customElements.define("home-page",xi);var $i,Di=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=function(t,e,r){return e=zi(e),function(t,e){if(e&&("object"==Oi(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Li()?Reflect.construct(e,r||[],zi(t).constructor):e.apply(t,r))}(this,e)).showLogin=!0,t.clearErrors(),t.registrationError="",t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ri(t,e)}(e,t),function(t,e){return e&&Ii(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(e,[{key:"clearErrors",value:function(){this.emailError="",this.usernameError="",this.passwordError="",this.confirmPasswordError=""}},{key:"createRenderRoot",value:function(){return this}},{key:"validateEmail",value:function(t){return t?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?"":"Please enter a valid email address":"Email is required"}},{key:"validateUsername",value:function(t){return t?/^[a-zA-Z0-9]+$/.test(t)?"":"Username can only contain letters and numbers":"Username is required"}},{key:"validatePasswords",value:function(t,e){return t?void 0!==e&&t!==e?"Passwords do not match":"":"Password is required"}},{key:"validateField",value:function(t){var e,r,o=t.value;switch(t.id){case"loginEmail":case"registerEmail":this.emailError=this.validateEmail(o);break;case"registerUsername":this.usernameError=this.validateUsername(o);break;case"loginPassword":this.passwordError=this.validatePasswords(o);break;case"registerPassword":var n=null===(e=this.querySelector("#confirmPassword"))||void 0===e?void 0:e.value;this.passwordError=this.validatePasswords(o),n&&(this.confirmPasswordError=this.validatePasswords(o,n));break;case"confirmPassword":var i=null===(r=this.querySelector("#registerPassword"))||void 0===r?void 0:r.value;i&&(this.confirmPasswordError=this.validatePasswords(i,o))}this.requestUpdate()}},{key:"toggleForm",value:function(){this.showLogin=!this.showLogin,this.clearErrors()}},{key:"handleLogin",value:function(t){var e=this.querySelector("#loginEmail").value,r=this.querySelector("#loginPassword").value;this.emailError=this.validateEmail(e),this.passwordError=this.validatePasswords(r),this.emailError||this.passwordError||console.log("Login validation passed")}},{key:"handleRegister",value:(r=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,n){var i=t.apply(e,r);function a(t){Ni(i,o,n,a,s,"next",t)}function s(t){Ni(i,o,n,a,s,"throw",t)}a(void 0)}))}}(Ti().mark((function t(e){var r,o,n,i,a;return Ti().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.querySelector("#registerUsername").value,o=this.querySelector("#registerEmail").value,n=this.querySelector("#registerPassword").value,i=this.querySelector("#confirmPassword").value,this.usernameError=this.validateUsername(r),this.emailError=this.validateEmail(o),this.passwordError=this.validatePasswords(n),this.confirmPasswordError=this.validatePasswords(n,i),this.usernameError||this.emailError||this.passwordError||this.confirmPasswordError){t.next=19;break}return t.prev=9,t.next=12,Ci("\n    mutation RegisterUser($username: String!, $email: String!, $password: String!) {\n        register(input: {\n            username: $username,\n            email: $email,\n            password: $password\n        }) {\n            token\n            user {\n                id\n                username\n                email\n            }\n        }\n    }\n",{username:r,email:o,password:n});case 12:(a=t.sent).register&&(localStorage.setItem("authToken",a.register.token),this.clearForm(),window.location.href="/"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(9),this.registrationError=t.t0.message;case 19:case"end":return t.stop()}}),t,this,[[9,16]])}))),function(t){return r.apply(this,arguments)})},{key:"clearForm",value:function(){this.querySelector("#registerUsername").value="",this.querySelector("#registerEmail").value="",this.querySelector("#registerPassword").value="",this.querySelector("#confirmPassword").value="",this.clearErrors()}},{key:"render",value:function(){var t=this;return V(bi||(bi=ki(['\n            <div class="login-container">\n                <div id="loginForm" style="display: ','">\n                    <h2>Sign In</h2>\n                    <div class="login-form">\n                        <vaadin-text-field \n                            id="loginEmail"\n                            label="Email" \n                            theme="medium"\n                            @input=',"\n                            @change=","\n                            .errorMessage=","\n                            .invalid=",'\n                        ></vaadin-text-field>\n                        <vaadin-password-field \n                            id="loginPassword"\n                            label="Password" \n                            theme="medium"\n                            @input=',"\n                            @change=","\n                            .errorMessage=","\n                            .invalid=",'\n                        ></vaadin-password-field>\n                        <vaadin-button \n                            theme="primary" \n                            @click=','\n                        >Sign In</vaadin-button>\n                    </div>\n                    <div class="toggle-message">\n                        <span>Don\'t have an account?</span>\n                        <vaadin-button theme="tertiary" @click=','>Register</vaadin-button>\n                    </div>\n                </div>\n\n                <div id="registerForm" style="display: ','">\n                    <h2>Register</h2>\n                    ','\n                    <div class="login-form">\n                        <vaadin-text-field \n                            id="registerUsername"\n                            label="Username" \n                            theme="medium"\n                            @input=',"\n                            @change=","\n                            .errorMessage=","\n                            .invalid=",'\n                        ></vaadin-text-field>\n                        <vaadin-text-field \n                            id="registerEmail"\n                            label="Email" \n                            theme="medium"\n                            @input=',"\n                            @change=","\n                            .errorMessage=","\n                            .invalid=",'\n                        ></vaadin-text-field>\n                        <vaadin-password-field \n                            id="registerPassword"\n                            label="Password" \n                            theme="medium"\n                            @input=',"\n                            @change=","\n                            .errorMessage=","\n                            .invalid=",'\n                        ></vaadin-password-field>\n                        <vaadin-password-field \n                            id="confirmPassword"\n                            label="Confirm Password" \n                            theme="medium"\n                            @input=',"\n                            @change=","\n                            .errorMessage=","\n                            .invalid=",'\n                        ></vaadin-password-field>\n                        <vaadin-button \n                            theme="primary" \n                            @click=','\n                        >Register</vaadin-button>\n                    </div>\n                    <div class="toggle-message">\n                        <span>Already have an account?</span>\n                        <vaadin-button theme="tertiary" @click=',">Login</vaadin-button>\n                    </div>\n                </div>\n            </div>\n        "])),this.showLogin?"block":"none",(function(e){return t.validateField(e.target)}),(function(e){return t.validateField(e.target)}),this.emailError,Boolean(this.emailError),(function(e){return t.validateField(e.target)}),(function(e){return t.validateField(e.target)}),this.passwordError,Boolean(this.passwordError),this.handleLogin,this.toggleForm,this.showLogin?"none":"block",this.registrationError?V(wi||(wi=ki(['\n                        <div class="error-message">\n                            ',"\n                        </div>\n                    "])),this.registrationError):"",(function(e){return t.validateField(e.target)}),(function(e){return t.validateField(e.target)}),this.usernameError,Boolean(this.usernameError),(function(e){return t.validateField(e.target)}),(function(e){return t.validateField(e.target)}),this.emailError,Boolean(this.emailError),(function(e){return t.validateField(e.target)}),(function(e){return t.validateField(e.target)}),this.passwordError,Boolean(this.passwordError),(function(e){return t.validateField(e.target)}),(function(e){return t.validateField(e.target)}),this.confirmPasswordError,Boolean(this.confirmPasswordError),this.handleRegister,this.toggleForm)}}]);var r}(at);function Mi(t){return Mi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mi(t)}function Bi(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Fi(o.key),o)}}function Fi(t){var e=function(t){if("object"!=Mi(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=Mi(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==Mi(e)?e:e+""}function Hi(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Hi=function(){return!!t})()}function Vi(t){return Vi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Vi(t)}function Ui(t,e){return Ui=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ui(t,e)}!function(t,e,r){(e=ji(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(Di,"properties",{showLogin:{type:Boolean,reflect:!0},emailError:{type:String,state:!0},usernameError:{type:String,state:!0},passwordError:{type:String,state:!0},confirmPasswordError:{type:String,state:!0},registrationError:{type:String,state:!0}}),customElements.define("login-page",Di);var qi=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=function(t,e,r){return e=Vi(e),function(t,e){if(e&&("object"==Mi(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Hi()?Reflect.construct(e,r||[],Vi(t).constructor):e.apply(t,r))}(this,e)).currentPage="/",t.addEventListener("page-change",(function(e){t.currentPage=e.detail.path,t.requestUpdate()})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ui(t,e)}(e,t),function(t,e){return e&&Bi(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(e,[{key:"createRenderRoot",value:function(){return this}},{key:"render",value:function(){return V($i||($i=function(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['\n            <home-page style="display: ','"></home-page>\n            <login-page style="display: ','"></login-page>\n        '])),"/"===this.currentPage?"block":"none","/login"===this.currentPage?"block":"none")}}])}(at);customElements.define("main-content",qi),Wn.init()})();