!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){"use strict";function e(t,e){var n,r,o,i,u=E;for(i=arguments.length;i-- >2;)T.push(arguments[i]);for(e&&null!=e.children&&(T.length||T.push(e.children),delete e.children);T.length;)if((r=T.pop())&&void 0!==r.pop)for(i=r.length;i--;)T.push(r[i]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof t)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(o=!1)),o&&n?u[u.length-1]+=r:u===E?u=[r]:u.push(r),n=o;var l=new S;return l.nodeName=t,l.children=u,l.attributes=null==e?void 0:e,l.key=null==e?void 0:e.key,void 0!==P.vnode&&P.vnode(l),l}function n(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){null!=t&&("function"==typeof t?t(e):t.current=e)}function i(t){!t.__d&&(t.__d=!0)&&1==I.push(t)&&(P.debounceRendering||B)(u)}function u(){for(var t;t=I.pop();)t.__d&&w(t)}function l(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&a(t,e.nodeName):n||t._componentConstructor===e.nodeName}function a(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function c(t){var e=n({},t.attributes);e.children=t.children;var r=t.nodeName.defaultProps;if(void 0!==r)for(var o in r)void 0===e[o]&&(e[o]=r[o]);return e}function s(t){var e=t.parentNode;e&&e.removeChild(t)}function f(t,e,n,i,u){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)o(n,null),o(i,t);else if("class"!==e||u)if("style"===e){if(i&&"string"!=typeof i&&"string"!=typeof n||(t.style.cssText=i||""),i&&"object"==r(i)){if("string"!=typeof n)for(var l in n)l in i||(t.style[l]="");for(var l in i)t.style[l]="number"==typeof i[l]&&!1===N.test(l)?i[l]+"px":i[l]}}else if("dangerouslySetInnerHTML"===e)i&&(t.innerHTML=i.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),i?n||t.addEventListener(e,p,a):t.removeEventListener(e,p,a),(t.__l||(t.__l={}))[e]=i}else if("list"!==e&&"type"!==e&&!u&&e in t){try{t[e]=null==i?"":i}catch(t){}null!=i&&!1!==i||"spellcheck"==e||t.removeAttribute(e)}else{var c=u&&e!==(e=e.replace(/^xlink:?/,""));null==i||!1===i?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof i&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),i):t.setAttribute(e,i))}else t.className=i||""}function p(t){return this.__l[t.type](P.event&&P.event(t)||t)}function h(){for(var t;t=H.shift();)P.afterMount&&P.afterMount(t),t.componentDidMount&&t.componentDidMount()}function y(t,e,n,r,o,i){U++||(M=null!=o&&void 0!==o.ownerSVGElement,A=null!=t&&!("__preactattr_"in t));var u=d(t,e,n,r,i);return o&&u.parentNode!==o&&o.appendChild(u),--U||(A=!1,i||h()),u}function d(t,e,n,r,o){var i=t,u=M;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),v(t,!0))),i.__preactattr_=!0,i;var l=e.nodeName;if("function"==typeof l)return k(t,e,n,r);if(M="svg"===l||"foreignObject"!==l&&M,l+="",(!t||!a(t,l))&&(i=function(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}(l,M),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),v(t,!0)}var c=i.firstChild,s=i.__preactattr_,f=e.children;if(null==s){s=i.__preactattr_={};for(var p=i.attributes,h=p.length;h--;)s[p[h].name]=p[h].value}return!A&&f&&1===f.length&&"string"==typeof f[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=f[0]&&(c.nodeValue=f[0]):(f&&f.length||null!=c)&&b(i,f,n,r,A||null!=s.dangerouslySetInnerHTML),m(i,e.attributes,s),M=u,i}function b(t,e,n,r,o){var i,u,a,c,f,p=t.childNodes,h=[],y={},b=0,g=0,m=p.length,_=0,O=e?e.length:0;if(0!==m)for(var j=0;j<m;j++){var w=p[j],k=w.__preactattr_;null!=(C=O&&k?w._component?w._component.__k:k.key:null)?(b++,y[C]=w):(k||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(h[_++]=w)}if(0!==O)for(j=0;j<O;j++){var C;if(f=null,null!=(C=(c=e[j]).key))b&&void 0!==y[C]&&(f=y[C],y[C]=void 0,b--);else if(g<_)for(i=g;i<_;i++)if(void 0!==h[i]&&l(u=h[i],c,o)){f=u,h[i]=void 0,i===_-1&&_--,i===g&&g++;break}f=d(f,c,n,r),a=p[j],f&&f!==t&&f!==a&&(null==a?t.appendChild(f):f===a.nextSibling?s(a):t.insertBefore(f,a))}if(b)for(var j in y)void 0!==y[j]&&v(y[j],!1);for(;g<=_;)void 0!==(f=h[_--])&&v(f,!1)}function v(t,e){var n=t._component;n?C(n):(null!=t.__preactattr_&&o(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||s(t),g(t))}function g(t){for(t=t.lastChild;t;){var e=t.previousSibling;v(t,!0),t=e}}function m(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||f(t,r,n[r],n[r]=void 0,M);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||f(t,r,n[r],n[r]=e[r],M)}function _(t,e,n){var r,o=D.length;for(t.prototype&&t.prototype.render?(r=new t(e,n),x.call(r,e,n)):((r=new x(e,n)).constructor=t,r.render=O);o--;)if(D[o].constructor===t)return r.__b=D[o].__b,D.splice(o,1),r;return r}function O(t,e,n){return this.constructor(t,n)}function j(t,e,n,r,u){t.__x||(t.__x=!0,t.__r=e.ref,t.__k=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||u?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r)),r&&r!==t.context&&(t.__c||(t.__c=t.context),t.context=r),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===P.syncComponentUpdates&&t.base?i(t):w(t,1,u)),o(t.__r,t))}function w(t,e,r,o){if(!t.__x){var i,u,l,a=t.props,s=t.state,f=t.context,p=t.__p||a,d=t.__s||s,b=t.__c||f,g=t.base,m=t.__b,O=g||m,k=t._component,x=!1,S=b;if(t.constructor.getDerivedStateFromProps&&(s=n(n({},s),t.constructor.getDerivedStateFromProps(a,s)),t.state=s),g&&(t.props=p,t.state=d,t.context=b,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(a,s,f)?x=!0:t.componentWillUpdate&&t.componentWillUpdate(a,s,f),t.props=a,t.state=s,t.context=f),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!x){i=t.render(a,s,f),t.getChildContext&&(f=n(n({},f),t.getChildContext())),g&&t.getSnapshotBeforeUpdate&&(S=t.getSnapshotBeforeUpdate(p,d));var T,E,B=i&&i.nodeName;if("function"==typeof B){var N=c(i);(u=k)&&u.constructor===B&&N.key==u.__k?j(u,N,1,f,!1):(T=u,t._component=u=_(B,N,f),u.__b=u.__b||m,u.__u=t,j(u,N,0,f,!1),w(u,1,r,!0)),E=u.base}else l=O,(T=k)&&(l=t._component=null),(O||1===e)&&(l&&(l._component=null),E=y(l,i,f,r||!g,O&&O.parentNode,!0));if(O&&E!==O&&u!==k){var I=O.parentNode;I&&E!==I&&(I.replaceChild(E,O),T||(O._component=null,v(O,!1)))}if(T&&C(T),t.base=E,E&&!o){for(var M=t,A=t;A=A.__u;)(M=A).base=E;E._component=M,E._componentConstructor=M.constructor}}for(!g||r?H.push(t):x||(t.componentDidUpdate&&t.componentDidUpdate(p,d,S),P.afterUpdate&&P.afterUpdate(t));t.__h.length;)t.__h.pop().call(t);U||o||h()}}function k(t,e,n,r){for(var o=t&&t._component,i=o,u=t,l=o&&t._componentConstructor===e.nodeName,a=l,s=c(e);o&&!a&&(o=o.__u);)a=o.constructor===e.nodeName;return o&&a&&(!r||o._component)?(j(o,s,3,n,r),t=o.base):(i&&!l&&(C(i),t=u=null),o=_(e.nodeName,s,n),t&&!o.__b&&(o.__b=t,u=null),j(o,s,1,n,r),t=o.base,u&&t!==u&&(u._component=null,v(u,!1))),t}function C(t){P.beforeUnmount&&P.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?C(n):e&&(null!=e.__preactattr_&&o(e.__preactattr_.ref,null),t.__b=e,s(e),D.push(t),g(e)),o(t.__r,null)}function x(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{},this.__h=[]}var S=function(){},P={},T=[],E=[],B="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,N=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,I=[],H=[],U=0,M=!1,A=!1,D=[];n(x.prototype,{setState:function(t,e){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this.__h.push(e),i(this)},forceUpdate:function(t){t&&this.__h.push(t),w(this,2)},render:function(){}});var F={h:e,createElement:e,cloneElement:function(t,r){return e(t.nodeName,n(n({},t.attributes),r),arguments.length>2?[].slice.call(arguments,2):t.children)},createRef:function(){return{}},Component:x,render:function(t,e,n){return y(n,t,{},!1,e,!1)},rerender:u,options:P};t.exports=F}()},function(t,e,n){var r=n(2).readFileSync,o=n(3),i=["·","×","—","‘","’","“","”","…","、","。","《","》","『","』","【","】","！","（","）","，","：","；","？"];e.loadFile=function(t){return e.load(r(t,"utf-8"))},e.load=function(t){var e=new o;function n(t){return i.includes(t)||e.get(t).length>0}return e.load(t),function(t){t=Array.from(t);for(var r=[],o=0,i=function(t){var n=e.get(t);r.push({text:t,traditional:n[0]?n[0].traditional:t,simplified:n[0]?n[0].simplified:t,matches:n.map(function(t){return{pinyin:t.pinyin,pinyinPretty:t.pinyinPretty,english:t.english}})})},u=function(t){r.push({text:t,traditional:t,simplified:t,matches:[]})};o<t.length;){if(o!==t.length-1){var l=t.slice(o,o+2).join(""),a=e.getPrefix(l),c=!1,s=null;a.sort(function(t,e){return e.traditional.length-t.traditional.length});var f=!0,p=!1,h=void 0;try{for(var y,d=a[Symbol.iterator]();!(f=(y=d.next()).done);f=!0){var b=y.value,v=t.slice(o,o+b.traditional.length).join("");if([b.traditional,b.simplified].includes(v)){i(v),c=!0,s=v;break}}}catch(t){p=!0,h=t}finally{try{f||null==d.return||d.return()}finally{if(p)throw h}}if(c){o+=s.length;continue}}var g=t[o];if(n(g))i(g),o++;else if(null==g.match(/\s/)){for(var m=o+1;m<t.length&&(null==t[m].match(/\s/)&&!n(t[m]));m++);u(t.slice(o,m).join("")),o=m}else u(g),o++}return r}}},function(t,e){t.exports={}},function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=n(4).prettify,u=n(5);function l(t){var e=t.match(/^(\S+)\s(\S+)\s\[([^\]]+)\]\s\/(.+)\//);if(null!=e){var n=o(e,5),r=n[1],u=n[2],l=n[3],a=n[4];return{traditional:r,simplified:u,pinyin:l=l.replace(/u:/g,"ü"),pinyinPretty:i(l),english:a}}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,(n=[{key:"load",value:function(t){this.trie=new u;var e=t.split("\n"),n=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var c=i.value;if(""!==c.trim()&&"#"!==c[0]){var s=l(c);null!=s&&(this.trie.push(s.simplified,s),this.trie.push(s.traditional,s))}}}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}},{key:"get",value:function(t){return this.trie.get(t)}},{key:"getPrefix",value:function(t){return this.trie.getPrefix(t)}}])&&r(e.prototype,n),o&&r(e,o),t}();t.exports=a},function(t,e){var n={a:["ā","á","ǎ","à"],e:["ē","é","ě","è"],u:["ū","ú","ǔ","ù"],i:["ī","í","ǐ","ì"],o:["ō","ó","ǒ","ò"],"ü":["ǖ","ǘ","ǚ","ǜ"]},r=["i","u","ü"];t.exports.prettify=function(t){for(var e=(t=t.replace("v","ü")).split(" "),o=0;o<e.length;o++){var i=e[o],u=parseInt(i[i.length-1]);if(u<=0||u>5)console.error("invalid tone number:",u,"in",i);else if(5===u)e[o]=i.slice(0,i.length-1);else for(var l=0;l<i.length;l++){var a=i[l],c=i[l+1];if(n[a]){var s,f;f=n[c]&&r.indexOf(a)>=0?c:a,s=i.replace(f,n[f][u-1]),e[o]=s.slice(0,s.length-1);break}}}return e.join(" ")}},function(t,e){function n(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.content={}}var e,o,i;return e=t,(o=[{key:"getKeyObject",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=""===(t=t.toString())?[t]:Array.from(t),r=this.content,o=!0,i=!1,u=void 0;try{for(var l,a=n[Symbol.iterator]();!(o=(l=a.next()).done);o=!0){var c=l.value;if(null==r[c]){if(!e)return{};r[c]={}}r=r[c]}}catch(t){i=!0,u=t}finally{try{o||null==a.return||a.return()}finally{if(i)throw u}}return r}},{key:"get",value:function(t){return this.getKeyObject(t).values||[]}},{key:"getPrefix",value:function(t){var e=this;return function t(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null==o&&(o=e.getKeyObject(r));var i=o.values?n(o.values):[];for(var u in o)"values"!==u&&null!=o[u]&&i.push.apply(i,n(t(r+u,o[u])));return i}(t)}},{key:"push",value:function(t,e){var n=this.getKeyObject(t,!0);return null==n.values&&(n.values=[]),n.values.includes(e)||n.values.push(e),this}}])&&r(e.prototype,o),i&&r(e,i),t}();t.exports=o},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(1),i=n.n(o),u=100,l={loading:0,cedictData:null,tokenize:null,input:"",type:"simplified",highlightHistory:[],highlightIndex:0};function a(t,e){if(null!=e&&null!=t.highlightHistory[t.highlightIndex]&&e.traditional===t.highlightHistory[t.highlightIndex].traditional)return{};var n=t.highlightHistory.slice(0,t.highlightIndex+1);return null!=e&&(n.length>=u&&n.shift(),n.push(e)),{highlightHistory:n,highlightIndex:null!=e?n.length-1:n.length}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,p(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,r["Component"]),n=e,(o=[{key:"render",value:function(){var t=Math.round(100*this.props.progress);return Object(r.h)("section",{id:"load-screen"},Object(r.h)("div",{class:"throbber"}),Object(r.h)("p",{class:"progress"},t,"%"),Object(r.h)("p",{class:"text"},"Loading dictionary…"))}}])&&s(n.prototype,o),i&&s(n,i),e}();function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var _=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,g(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,r["Component"]),n=e,(o=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return Object(r.h)("section",{id:"introduction"},Object(r.h)("h1",null,"Chinese Tokenizer"),Object(r.h)("p",null,["This is a tool that can tokenize Chinese texts into words using ",Object(r.h)("a",{href:"https://github.com/yishn/chinese-tokenizer"},"chinese-tokenizer")," and ",Object(r.h)("a",{href:"https://cc-cedict.org/"},"CC-CEDICT"),"."]),Object(r.h)("p",null,"Just paste your text down below:"))}}])&&b(n.prototype,o),i&&b(n,i),e}();function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var x=function(t){function e(){var t,n,r,o,i,u,l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return r=this,o=(t=w(e)).call.apply(t,[this].concat(c)),n=!o||"object"!==O(o)&&"function"!=typeof o?k(r):o,i=k(n),l=function(t){var e=n.props.onChange;(void 0===e?function(){}:e)({value:t.currentTarget.value})},(u="handleInput")in i?Object.defineProperty(i,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[u]=l,n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(e,r["Component"]),n=e,(o=[{key:"shouldComponentUpdate",value:function(t){return t.value!==this.props.value||t.onChange!==this.props.onChange}},{key:"render",value:function(){return Object(r.h)("section",{id:"text-input"},Object(r.h)("textarea",{autofocus:!0,value:this.props.value,onInput:this.handleInput}))}}])&&j(n.prototype,o),i&&j(n,i),e}();function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var N=function(t){function e(){var t,n,r,o,i,u,l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return r=this,o=(t=T(e)).call.apply(t,[this].concat(c)),n=!o||"object"!==S(o)&&"function"!=typeof o?E(r):o,i=E(n),l=function(t){t.preventDefault();var e=t.currentTarget.parentNode.dataset.value,r=n.props.onChange;(void 0===r?function(){}:r)({value:e})},(u="handleClick")in i?Object.defineProperty(i,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[u]=l,n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(e,r["Component"]),n=e,(o=[{key:"shouldComponentUpdate",value:function(t){return t.value!==this.props.value||t.onChange!==this.props.onChange}},{key:"render",value:function(){return Object(r.h)("section",{id:"type-chooser"},Object(r.h)("ul",null,Object(r.h)("li",{"data-value":"simplified",class:"simplified"===this.props.value?"current":""},Object(r.h)("a",{href:"#",onClick:this.handleClick},"Simplified")),Object(r.h)("li",{"data-value":"traditional",class:"traditional"===this.props.value?"current":""},Object(r.h)("a",{href:"#",onClick:this.handleClick},"Traditional"))))}}])&&P(n.prototype,o),i&&P(n,i),e}();function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function M(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var D=function(t){function e(){var t,n,r,o,i,u,l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return r=this,o=(t=U(e)).call.apply(t,[this].concat(c)),n=!o||"object"!==I(o)&&"function"!=typeof o?M(r):o,i=M(n),l=function(t){t.stopPropagation();var e=n.props,r=e.text,o=e.traditional,i=e.simplified,u=e.matches,l=e.type,a=e.onClick;(void 0===a?function(){}:a)({text:r,traditional:o,simplified:i,matches:u,type:l})},(u="handleClick")in i?Object.defineProperty(i,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[u]=l,n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(e,r["Component"]),n=e,(o=[{key:"shouldComponentUpdate",value:function(t){return t.traditional!==this.props.traditional||t.prefix!==this.props.prefix||t.suffix!==this.props.suffix||t.highlight!==this.props.highlight||t.type!==this.props.type}},{key:"render",value:function(){var t=Object(r.h)("span",{class:["word",this.props.highlight?"highlight":""].join(" ").trim(),"data-pinyin":this.props.matches.map(function(t){return t.pinyinPretty}).sort().filter(function(t,e,n){return 0===e||n[e-1]!==t}).join("/"),onClick:this.handleClick},this.props[this.props.type]);return""===this.props.prefix&&""===this.props.suffix?t:Object(r.h)("span",{class:"word-wrapper"},this.props.prefix,t,this.props.suffix)}}])&&H(n.prototype,o),i&&H(n,i),e}();function F(t){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(){return(L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function R(t,e){return!e||"object"!==F(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function $(t){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function W(t,e){return(W=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var G=["‘","“","《","『","【","（"],V=["’","”","》","』","】","）","、","，","…","。","：","；","！","？"],K=function(t,e){return null==t||null==e?t==e:t.text===e.text},q=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=R(this,$(e).call(this,t))).cache=[null,null],n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&W(t,e)}(e,r["Component"]),n=e,(o=[{key:"shouldComponentUpdate",value:function(t){return!K(t.highlight,this.props.highlight)||t.value!==this.props.value||t.type!==this.props.type||t.onClick!==this.props.onClick||t.onTokenClick!==this.props.onTokenClick}},{key:"getTokens",value:function(){if(this.cache[0]===this.props.value)return this.cache[1];var t=this.props.tokenize(this.props.value);return this.cache=[this.props.value,t],t}},{key:"render",value:function(){var t=this,e=this.getTokens();return Object(r.h)("section",{id:"text-output",onClick:this.props.onClick},e.map(function(n,o){if(!G.includes(n.text)&&!V.includes(n.text)){for(var i="",u="",l=1;o+l<e.length&&V.includes(e[o+l].text);l++)u+=e[o+l].text;for(var a=1;o-a>=0&&G.includes(e[o-a].text);a++)i=e[o-a].text+i;return n.matches.length>0?Object(r.h)(D,L({},n,{highlight:K(n,t.props.highlight),type:t.props.type,prefix:i,suffix:u,onClick:t.props.onTokenClick})):"\n"===n.text?Object(r.h)("br",null):n.text}}))}}])&&z(n.prototype,o),i&&z(n,i),e}();function J(t){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function X(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Z(t,e){return(Z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var et=function(t){function e(){var t,n,r,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l];return r=this,o=(t=Q(e)).call.apply(t,[this].concat(u)),n=!o||"object"!==J(o)&&"function"!=typeof o?Y(r):o,tt(Y(n),"handleCloseClick",function(t){t.preventDefault();var e=n.props.onCloseClick;(void 0===e?function(){}:e)()}),tt(Y(n),"handleBackButtonClick",function(t){t.preventDefault();var e=n.props.onBackButtonClick;(void 0===e?function(){}:e)()}),tt(Y(n),"handleForwardButtonClick",function(t){t.preventDefault();var e=n.props.onForwardButtonClick;(void 0===e?function(){}:e)()}),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Z(t,e)}(e,r["Component"]),n=e,(o=[{key:"shouldComponentUpdate",value:function(t){return e=t.data,n=this.props.data,!(null==e||null==n?e==n:e.traditional===n.traditional)||t.type!==this.props.type||t.enableBackButton!==this.props.enableBackButton||t.enableForwardButton!==this.props.enableForwardButton;var e,n}},{key:"createTokenHandler",value:function(t){var e=this;return function(n){n.preventDefault();var r=e.props.onTokenClick;(void 0===r?function(){}:r)(t)}}},{key:"render",value:function(){var t=this;if(null!=this.props.data){var e=this.props,n=e.tokenize,o=e.enableBackButton,i=e.enableForwardButton;return Object(r.h)("section",{id:"dictionary",class:"show"},Object(r.h)("h1",null,this.props.data[this.props.type]),Object(r.h)("ul",{class:"descriptions"},this.props.data.matches.map(function(e){return Object(r.h)("li",null,Object(r.h)("span",{class:"pinyin"},e.pinyinPretty)," ",n((o=e.english.replace(/\//g,", "),o.replace(/\.{3}/g,"…").replace(/(\S)('|´)/g,"$1’").replace(/(\S)"/g,"$1”").replace(/('|`)(\S)/g,"‘$2").replace(/"(\S)/g,"“$1").replace(/(\s)-(\s)/g,"$1–$2"))).map(function(e){return e.matches.length>0&&null==e.text.match(/^[a-z]$/i)?Object(r.h)("a",{href:"#",onClick:t.createTokenHandler(e)},e.text):e.text}));var o})),Object(r.h)("ul",{class:"actions"},Object(r.h)("li",null,Object(r.h)("a",{class:o?"":"disabled",href:"#",onClick:this.handleBackButtonClick},"Back")),Object(r.h)("li",null,Object(r.h)("a",{class:i?"":"disabled",href:"#",onClick:this.handleForwardButtonClick},"Forward")),Object(r.h)("li",null,Object(r.h)("a",{href:"#",onClick:this.handleCloseClick},"Close"))))}}}])&&X(n.prototype,o),i&&X(n,i),e}();function nt(t){return(nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function rt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ot(t){return(ot=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function it(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ut(t,e){return(ut=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function lt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var at=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,r=ot(e).call(this),t=!r||"object"!==nt(r)&&"function"!=typeof r?it(n):r,lt(it(t),"handleInputChange",function(e){t.setState(function(t){return function(t,e){return e===t.input?{}:{input:e}}(t,e.value)})}),lt(it(t),"handleTypeChooserChange",function(e){t.setState(function(t){return function(t,e){return e===t.type?{}:{type:e}}(t,e.value)})}),lt(it(t),"handleTokenClick",function(e){t.setState(function(t){return a(t,e)})}),lt(it(t),"handleGoBackHighlight",function(e){t.setState(function(t){return function(t){return{highlightIndex:Math.max(t.highlightIndex-1,0)}}(t)})}),lt(it(t),"handleGoForwardHighlight",function(e){t.setState(function(t){return function(t){return{highlightIndex:Math.min(t.highlightIndex+1,t.highlightHistory.length-1)}}(t)})}),lt(it(t),"handleClearHighlight",function(e){t.setState(function(t){return function(t){return a(t,null)}(t)})}),t.state=l,t}var n,o,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ut(t,e)}(e,r["Component"]),n=e,(o=[{key:"componentDidMount",value:function(){var t=this,e=new XMLHttpRequest;e.addEventListener("progress",function(e){if(e.lengthComputable){var n=e.loaded/e.total;t.setState(function(t){return function(t,e){return e===t.loading?{}:{loading:e}}(t,n)})}}),e.addEventListener("load",function(e){var n=e.currentTarget.responseText;t.setState(function(t){return{loading:1/0,cedictData:e=n,tokenize:i.a.load(e)};var e})}),e.open("GET","./data/cedict_ts.u8"),e.send()}},{key:"render",value:function(){return Object(r.h)("section",{id:"root"},this.state.loading<=1&&Object(r.h)(y,{progress:this.state.loading}),this.state.loading>1&&Object(r.h)("main",null,Object(r.h)("div",{id:"input"},Object(r.h)(_,null),Object(r.h)(x,{value:this.state.input,onChange:this.handleInputChange})),Object(r.h)("div",{id:"output"},Object(r.h)(N,{value:this.state.type,onChange:this.handleTypeChooserChange}),Object(r.h)(q,{tokenize:this.state.tokenize,value:this.state.input,type:this.state.type,highlight:this.state.highlightHistory[this.state.highlightIndex],onClick:this.handleClearHighlight,onTokenClick:this.handleTokenClick}),Object(r.h)(et,{tokenize:this.state.tokenize,enableBackButton:this.state.highlightIndex>0,enableForwardButton:this.state.highlightIndex<this.state.highlightHistory.length-1,data:this.state.highlightHistory[this.state.highlightIndex],type:this.state.type,onTokenClick:this.handleTokenClick,onBackButtonClick:this.handleGoBackHighlight,onForwardButtonClick:this.handleGoForwardHighlight,onCloseClick:this.handleClearHighlight}))))}}])&&rt(n.prototype,o),u&&rt(n,u),e}();Object(r.render)(Object(r.h)(at,null),document.body)}]);