!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){"use strict";function e(t,e){var n,r,o,i,u=E;for(i=arguments.length;i-- >2;)T.push(arguments[i]);for(e&&null!=e.children&&(T.length||T.push(e.children),delete e.children);T.length;)if((r=T.pop())&&void 0!==r.pop)for(i=r.length;i--;)T.push(r[i]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof t)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(o=!1)),o&&n?u[u.length-1]+=r:u===E?u=[r]:u.push(r),n=o;var l=new P;return l.nodeName=t,l.children=u,l.attributes=null==e?void 0:e,l.key=null==e?void 0:e.key,void 0!==x.vnode&&x.vnode(l),l}function n(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){null!=t&&("function"==typeof t?t(e):t.current=e)}function i(t){!t.__d&&(t.__d=!0)&&1==A.push(t)&&(x.debounceRendering||N)(u)}function u(){for(var t;t=A.pop();)t.__d&&w(t)}function l(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&a(t,e.nodeName):n||t._componentConstructor===e.nodeName}function a(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function c(t){var e=n({},t.attributes);e.children=t.children;var r=t.nodeName.defaultProps;if(void 0!==r)for(var o in r)void 0===e[o]&&(e[o]=r[o]);return e}function f(t){var e=t.parentNode;e&&e.removeChild(t)}function p(t,e,n,i,u){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)o(n,null),o(i,t);else if("class"!==e||u)if("style"===e){if(i&&"string"!=typeof i&&"string"!=typeof n||(t.style.cssText=i||""),i&&"object"==r(i)){if("string"!=typeof n)for(var l in n)l in i||(t.style[l]="");for(var l in i)t.style[l]="number"==typeof i[l]&&!1===U.test(l)?i[l]+"px":i[l]}}else if("dangerouslySetInnerHTML"===e)i&&(t.innerHTML=i.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),i?n||t.addEventListener(e,s,a):t.removeEventListener(e,s,a),(t.__l||(t.__l={}))[e]=i}else if("list"!==e&&"type"!==e&&!u&&e in t){try{t[e]=null==i?"":i}catch(t){}null!=i&&!1!==i||"spellcheck"==e||t.removeAttribute(e)}else{var c=u&&e!==(e=e.replace(/^xlink:?/,""));null==i||!1===i?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof i&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),i):t.setAttribute(e,i))}else t.className=i||""}function s(t){return this.__l[t.type](x.event&&x.event(t)||t)}function h(){for(var t;t=M.shift();)x.afterMount&&x.afterMount(t),t.componentDidMount&&t.componentDidMount()}function y(t,e,n,r,o,i){L++||(D=null!=o&&void 0!==o.ownerSVGElement,R=null!=t&&!("__preactattr_"in t));var u=b(t,e,n,r,i);return o&&u.parentNode!==o&&o.appendChild(u),--L||(R=!1,i||h()),u}function b(t,e,n,r,o){var i=t,u=D;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),v(t,!0))),i.__preactattr_=!0,i;var l=e.nodeName;if("function"==typeof l)return C(t,e,n,r);if(D="svg"===l||"foreignObject"!==l&&D,l+="",(!t||!a(t,l))&&(i=function(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}(l,D),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),v(t,!0)}var c=i.firstChild,f=i.__preactattr_,p=e.children;if(null==f){f=i.__preactattr_={};for(var s=i.attributes,h=s.length;h--;)f[s[h].name]=s[h].value}return!R&&p&&1===p.length&&"string"==typeof p[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=p[0]&&(c.nodeValue=p[0]):(p&&p.length||null!=c)&&d(i,p,n,r,R||null!=f.dangerouslySetInnerHTML),_(i,e.attributes,f),D=u,i}function d(t,e,n,r,o){var i,u,a,c,p,s=t.childNodes,h=[],y={},d=0,m=0,_=s.length,g=0,O=e?e.length:0;if(0!==_)for(var j=0;j<_;j++){var w=s[j],C=w.__preactattr_;null!=(k=O&&C?w._component?w._component.__k:C.key:null)?(d++,y[k]=w):(C||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(h[g++]=w)}if(0!==O)for(j=0;j<O;j++){var k;if(p=null,null!=(k=(c=e[j]).key))d&&void 0!==y[k]&&(p=y[k],y[k]=void 0,d--);else if(m<g)for(i=m;i<g;i++)if(void 0!==h[i]&&l(u=h[i],c,o)){p=u,h[i]=void 0,i===g-1&&g--,i===m&&m++;break}p=b(p,c,n,r),a=s[j],p&&p!==t&&p!==a&&(null==a?t.appendChild(p):p===a.nextSibling?f(a):t.insertBefore(p,a))}if(d)for(var j in y)void 0!==y[j]&&v(y[j],!1);for(;m<=g;)void 0!==(p=h[g--])&&v(p,!1)}function v(t,e){var n=t._component;n?k(n):(null!=t.__preactattr_&&o(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||f(t),m(t))}function m(t){for(t=t.lastChild;t;){var e=t.previousSibling;v(t,!0),t=e}}function _(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||p(t,r,n[r],n[r]=void 0,D);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||p(t,r,n[r],n[r]=e[r],D)}function g(t,e,n){var r,o=I.length;for(t.prototype&&t.prototype.render?(r=new t(e,n),S.call(r,e,n)):((r=new S(e,n)).constructor=t,r.render=O);o--;)if(I[o].constructor===t)return r.__b=I[o].__b,I.splice(o,1),r;return r}function O(t,e,n){return this.constructor(t,n)}function j(t,e,n,r,u){t.__x||(t.__x=!0,t.__r=e.ref,t.__k=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||u?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r)),r&&r!==t.context&&(t.__c||(t.__c=t.context),t.context=r),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===x.syncComponentUpdates&&t.base?i(t):w(t,1,u)),o(t.__r,t))}function w(t,e,r,o){if(!t.__x){var i,u,l,a=t.props,f=t.state,p=t.context,s=t.__p||a,b=t.__s||f,d=t.__c||p,m=t.base,_=t.__b,O=m||_,C=t._component,S=!1,P=d;if(t.constructor.getDerivedStateFromProps&&(f=n(n({},f),t.constructor.getDerivedStateFromProps(a,f)),t.state=f),m&&(t.props=s,t.state=b,t.context=d,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(a,f,p)?S=!0:t.componentWillUpdate&&t.componentWillUpdate(a,f,p),t.props=a,t.state=f,t.context=p),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!S){i=t.render(a,f,p),t.getChildContext&&(p=n(n({},p),t.getChildContext())),m&&t.getSnapshotBeforeUpdate&&(P=t.getSnapshotBeforeUpdate(s,b));var T,E,N=i&&i.nodeName;if("function"==typeof N){var U=c(i);(u=C)&&u.constructor===N&&U.key==u.__k?j(u,U,1,p,!1):(T=u,t._component=u=g(N,U,p),u.__b=u.__b||_,u.__u=t,j(u,U,0,p,!1),w(u,1,r,!0)),E=u.base}else l=O,(T=C)&&(l=t._component=null),(O||1===e)&&(l&&(l._component=null),E=y(l,i,p,r||!m,O&&O.parentNode,!0));if(O&&E!==O&&u!==C){var A=O.parentNode;A&&E!==A&&(A.replaceChild(E,O),T||(O._component=null,v(O,!1)))}if(T&&k(T),t.base=E,E&&!o){for(var D=t,R=t;R=R.__u;)(D=R).base=E;E._component=D,E._componentConstructor=D.constructor}}for(!m||r?M.push(t):S||(t.componentDidUpdate&&t.componentDidUpdate(s,b,P),x.afterUpdate&&x.afterUpdate(t));t.__h.length;)t.__h.pop().call(t);L||o||h()}}function C(t,e,n,r){for(var o=t&&t._component,i=o,u=t,l=o&&t._componentConstructor===e.nodeName,a=l,f=c(e);o&&!a&&(o=o.__u);)a=o.constructor===e.nodeName;return o&&a&&(!r||o._component)?(j(o,f,3,n,r),t=o.base):(i&&!l&&(k(i),t=u=null),o=g(e.nodeName,f,n),t&&!o.__b&&(o.__b=t,u=null),j(o,f,1,n,r),t=o.base,u&&t!==u&&(u._component=null,v(u,!1))),t}function k(t){x.beforeUnmount&&x.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?k(n):e&&(null!=e.__preactattr_&&o(e.__preactattr_.ref,null),t.__b=e,f(e),I.push(t),m(e)),o(t.__r,null)}function S(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{},this.__h=[]}var P=function(){},x={},T=[],E=[],N="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,U=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,A=[],M=[],L=0,D=!1,R=!1,I=[];n(S.prototype,{setState:function(t,e){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this.__h.push(e),i(this)},forceUpdate:function(t){t&&this.__h.push(t),w(this,2)},render:function(){}});var H={h:e,createElement:e,cloneElement:function(t,r){return e(t.nodeName,n(n({},t.attributes),r),arguments.length>2?[].slice.call(arguments,2):t.children)},createRef:function(){return{}},Component:S,render:function(t,e,n){return y(n,t,{},!1,e,!1)},rerender:u,options:x};t.exports=H}()},function(t,e,n){var r=n(2).readFileSync,o=n(3),i=["·","×","—","‘","’","“","”","…","、","。","《","》","『","』","【","】","！","（","）","，","：","；","？"];e.loadFile=function(t){return e.load(r(t,"utf-8"))},e.load=function(t){var e=new o;function n(t){return i.includes(t)||e.get(t).length>0}return e.load(t),function(t){t=Array.from(t);for(var r=[],o=0,i=function(t){var n=e.get(t);r.push({text:t,traditional:n[0]?n[0].traditional:t,simplified:n[0]?n[0].simplified:t,matches:n.map(function(t){return{pinyin:t.pinyin,pinyinPretty:t.pinyinPretty,english:t.english}})})},u=function(t){r.push({text:t,traditional:null,simplified:null,matches:[]})};o<t.length;){if(o!==t.length-1){var l=t.slice(o,o+2).join(""),a=e.getPrefix(l),c=!1,f=null;a.sort(function(t,e){return e.traditional.length-t.traditional.length});var p=!0,s=!1,h=void 0;try{for(var y,b=a[Symbol.iterator]();!(p=(y=b.next()).done);p=!0){var d=y.value,v=t.slice(o,o+d.traditional.length).join("");if([d.traditional,d.simplified].includes(v)){i(v),c=!0,f=v;break}}}catch(t){s=!0,h=t}finally{try{p||null==b.return||b.return()}finally{if(s)throw h}}if(c){o+=f.length;continue}}var m=t[o];if(n(m))i(m),o++;else if(null==m.match(/\s/)){for(var _=o+1;_<t.length&&(null==t[_].match(/\s/)&&!n(t[_]));_++);u(t.slice(o,_).join("")),o=_}else o++}return r}}},function(t,e){t.exports={}},function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=n(4).prettify,u=n(5);function l(t){var e=t.match(/^(\S+)\s(\S+)\s\[([^\]]+)\]\s\/(.+)\//);if(null!=e){var n=o(e,5),r=n[1],u=n[2],l=n[3],a=n[4];return{traditional:r,simplified:u,pinyin:l=l.replace(/u:/g,"ü"),pinyinPretty:i(l),english:a}}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,(n=[{key:"load",value:function(t){this.trie=new u;var e=t.split("\n"),n=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var c=i.value;if(""!==c.trim()&&"#"!==c[0]){var f=l(c);null!=f&&(this.trie.push(f.simplified,f),this.trie.push(f.traditional,f))}}}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}},{key:"get",value:function(t){return this.trie.get(t)}},{key:"getPrefix",value:function(t){return this.trie.getPrefix(t)}}])&&r(e.prototype,n),o&&r(e,o),t}();t.exports=a},function(t,e){var n={a:["ā","á","ǎ","à"],e:["ē","é","ě","è"],u:["ū","ú","ǔ","ù"],i:["ī","í","ǐ","ì"],o:["ō","ó","ǒ","ò"],"ü":["ǖ","ǘ","ǚ","ǜ"]},r=["i","u","ü"];t.exports.prettify=function(t){for(var e=(t=t.replace("v","ü")).split(" "),o=0;o<e.length;o++){var i=e[o],u=parseInt(i[i.length-1]);if(u<=0||u>5)console.error("invalid tone number:",u,"in",i);else if(5===u)e[o]=i.slice(0,i.length-1);else for(var l=0;l<i.length;l++){var a=i[l],c=i[l+1];if(n[a]){var f,p;p=n[c]&&r.indexOf(a)>=0?c:a,f=i.replace(p,n[p][u-1]),e[o]=f.slice(0,f.length-1);break}}}return e.join(" ")}},function(t,e){function n(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.content={}}var e,o,i;return e=t,(o=[{key:"getKeyObject",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=""===(t=t.toString())?[t]:Array.from(t),r=this.content,o=!0,i=!1,u=void 0;try{for(var l,a=n[Symbol.iterator]();!(o=(l=a.next()).done);o=!0){var c=l.value;if(null==r[c]){if(!e)return{};r[c]={}}r=r[c]}}catch(t){i=!0,u=t}finally{try{o||null==a.return||a.return()}finally{if(i)throw u}}return r}},{key:"get",value:function(t){return this.getKeyObject(t).values||[]}},{key:"getPrefix",value:function(t){var e=this;return function t(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null==o&&(o=e.getKeyObject(r));var i=o.values?n(o.values):[];for(var u in o)"values"!==u&&null!=o[u]&&i.push.apply(i,n(t(r+u,o[u])));return i}(t)}},{key:"push",value:function(t,e){var n=this.getKeyObject(t,!0);return null==n.values&&(n.values=[]),n.values.includes(e)||n.values.push(e),this}}])&&r(e.prototype,o),i&&r(e,i),t}();t.exports=o},function(t,e,n){"use strict";n.r(e);var r=n(0),o={loading:0,cedictData:null,input:"",type:"simplified",highlight:null};function i(t,e){return{highlight:e}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,c(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,r["Component"]),n=e,(o=[{key:"render",value:function(){var t=Math.round(100*this.props.progress);return Object(r.h)("section",{id:"load-screen"},Object(r.h)("div",{class:"throbber"}),Object(r.h)("p",{class:"progress"},t,"%"),Object(r.h)("p",{class:"text"},"Loading dictionary…"))}}])&&l(n.prototype,o),i&&l(n,i),e}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,b(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,r["Component"]),n=e,(o=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return Object(r.h)("section",{id:"introduction"},Object(r.h)("h1",null,"Chinese Tokenizer"),Object(r.h)("p",null,["This is a tool that can tokenize Chinese texts into words using ",Object(r.h)("a",{href:"https://github.com/yishn/chinese-tokenizer"},"chinese-tokenizer")," and ",Object(r.h)("a",{href:"https://cc-cedict.org/"},"CC-CEDICT"),"."]),Object(r.h)("p",null,"Just paste your text down below:"))}}])&&h(n.prototype,o),i&&h(n,i),e}();function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=function(t){function e(){var t,n,r,o,i,u,l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,c=new Array(a),f=0;f<a;f++)c[f]=arguments[f];return r=this,o=(t=g(e)).call.apply(t,[this].concat(c)),n=!o||"object"!==m(o)&&"function"!=typeof o?O(r):o,i=O(n),l=function(t){var e=n.props.onChange;(void 0===e?function(){}:e)({value:t.currentTarget.value})},(u="handleInput")in i?Object.defineProperty(i,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[u]=l,n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,r["Component"]),n=e,(o=[{key:"shouldComponentUpdate",value:function(t){return t.value!==this.props.value||t.onChange!==this.props.onChange}},{key:"render",value:function(){return Object(r.h)("section",{id:"text-input"},Object(r.h)("textarea",{autofocus:!0,value:this.props.value,onInput:this.handleInput}))}}])&&_(n.prototype,o),i&&_(n,i),e}();function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var T=function(t){function e(){var t,n,r,o,i,u,l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,c=new Array(a),f=0;f<a;f++)c[f]=arguments[f];return r=this,o=(t=S(e)).call.apply(t,[this].concat(c)),n=!o||"object"!==C(o)&&"function"!=typeof o?P(r):o,i=P(n),l=function(t){t.preventDefault();var e=t.currentTarget.parentNode.dataset.value,r=n.props.onChange;(void 0===r?function(){}:r)({value:e})},(u="handleClick")in i?Object.defineProperty(i,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[u]=l,n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(e,r["Component"]),n=e,(o=[{key:"shouldComponentUpdate",value:function(t){return t.value!==this.props.value||t.onChange!==this.props.onChange}},{key:"render",value:function(){return Object(r.h)("section",{id:"type-chooser"},Object(r.h)("ul",null,Object(r.h)("li",{"data-value":"simplified",class:"simplified"===this.props.value?"current":""},Object(r.h)("a",{href:"#",onClick:this.handleClick},"Simplified")),Object(r.h)("li",{"data-value":"traditional",class:"traditional"===this.props.value?"current":""},Object(r.h)("a",{href:"#",onClick:this.handleClick},"Traditional"))))}}])&&k(n.prototype,o),i&&k(n,i),e}(),E=n(1),N=n.n(E);function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var R=function(t){function e(){var t,n,r,o,i,u,l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,c=new Array(a),f=0;f<a;f++)c[f]=arguments[f];return r=this,o=(t=M(e)).call.apply(t,[this].concat(c)),n=!o||"object"!==U(o)&&"function"!=typeof o?L(r):o,i=L(n),l=function(t){t.stopPropagation();var e=n.props,r=e.traditional,o=e.simplified,i=e.matches,u=e.type,l=e.onClick;(void 0===l?function(){}:l)({traditional:r,simplified:o,matches:i,type:u})},(u="handleClick")in i?Object.defineProperty(i,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[u]=l,n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(e,r["Component"]),n=e,(o=[{key:"shouldComponentUpdate",value:function(t){return t.traditional!==this.props.traditional||t.highlight!==this.props.highlight||t.type!==this.props.type||t.onClick!==this.props.onClick}},{key:"render",value:function(){return Object(r.h)("span",{class:["word",this.props.highlight?"highlight":""].join(" ").trim(),"data-pinyin":this.props.matches.map(function(t){return t.pinyinPretty}).sort().filter(function(t,e,n){return 0===e||n[e-1]!==t}).join("/"),onClick:this.handleClick},this.props[this.props.type])}}])&&A(n.prototype,o),i&&A(n,i),e}();function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function H(){return(H=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $(t,e){return!e||"object"!==I(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var F=function(t,e){return null==t||null==e?t==e:t.traditional===e.traditional},K=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=$(this,z(e).call(this,t))).cache=[null,null],n.tokenize=N.a.load(t.dictionary),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(e,r["Component"]),n=e,(o=[{key:"shouldComponentUpdate",value:function(t){return!F(t.highlight,this.props.highlight)||t.value!==this.props.value||t.type!==this.props.type||t.onClick!==this.props.onClick||t.onTokenClick!==this.props.onTokenClick}},{key:"getTokens",value:function(){if(this.cache[0]===this.props.value)return this.cache[1];var t=this.tokenize(this.props.value);return this.cache=[this.props.value,t],t}},{key:"render",value:function(){var t=this,e=this.getTokens();return Object(r.h)("section",{id:"text-output",onClick:this.props.onClick},e.map(function(e){return e.matches.length>0?Object(r.h)(R,H({},e,{highlight:F(e,t.props.highlight),type:t.props.type,onClick:t.props.onTokenClick})):"\n"===e[t.props.type]?Object(r.h)("br",null):e[t.props.type]}))}}])&&W(n.prototype,o),i&&W(n,i),e}();function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function J(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Q=function(t){function e(){var t,n,r,o,i,u,l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,c=new Array(a),f=0;f<a;f++)c[f]=arguments[f];return r=this,o=(t=q(e)).call.apply(t,[this].concat(c)),n=!o||"object"!==B(o)&&"function"!=typeof o?J(r):o,i=J(n),l=function(t){t.preventDefault();var e=n.props.onCloseClick;(void 0===e?function(){}:e)()},(u="handleCloseClick")in i?Object.defineProperty(i,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[u]=l,n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(e,r["Component"]),n=e,(o=[{key:"shouldComponentUpdate",value:function(t){return e=t.data,n=this.props.data,!(null==e||null==n?e==n:e.traditional===n.traditional)||t.type!==this.props.type||t.onCloseClick!==this.props.onCloseClick;var e,n}},{key:"render",value:function(){if(null!=this.props.data)return Object(r.h)("section",{id:"dictionary",class:"show"},Object(r.h)("h1",null,this.props.data[this.props.type]),Object(r.h)("ul",null,this.props.data.matches.map(function(t){return Object(r.h)("li",null,Object(r.h)("span",{class:"pinyin"},t.pinyinPretty)," ",t.english.replace(/\//g,", ").replace(/\.{3}/g,"…").replace(/(\S)('|´)/g,"$1’").replace(/(\S)"/g,"$1”").replace(/('|`)(\S)/g,"‘$2").replace(/"(\S)/g,"“$1").replace(/(\s)-(\s)/g,"$1–$2"))})),Object(r.h)("a",{class:"close",href:"#",onClick:this.handleCloseClick},"Close"))}}])&&G(n.prototype,o),i&&G(n,i),e}();function Y(t){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function tt(t){return(tt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function et(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function nt(t,e){return(nt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ot=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,r=tt(e).call(this),t=!r||"object"!==Y(r)&&"function"!=typeof r?et(n):r,rt(et(t),"handleInputChange",function(e){t.setState(function(t){return function(t,e){return e===t.input?{}:{input:e}}(t,e.value)})}),rt(et(t),"handleTypeChooserChange",function(e){t.setState(function(t){return function(t,e){return e===t.type?{}:{type:e}}(t,e.value)})}),rt(et(t),"handleTokenClick",function(e){t.setState(function(t){return i(0,e)})}),rt(et(t),"handleClearHighlight",function(e){t.setState(function(t){return i(0,null)})}),t.state=o,t}var n,u,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&nt(t,e)}(e,r["Component"]),n=e,(u=[{key:"componentDidMount",value:function(){var t=this,e=new XMLHttpRequest;e.addEventListener("progress",function(e){if(e.lengthComputable){var n=e.loaded/e.total;t.setState(function(t){return function(t,e){return e===t.loading?{}:{loading:e}}(t,n)})}}),e.addEventListener("load",function(e){var n=e.currentTarget.responseText;t.setState(function(t){return{loading:1/0,cedictData:n}})}),e.open("GET","./data/cedict_ts.u8"),e.send()}},{key:"render",value:function(){return Object(r.h)("section",{id:"root"},this.state.loading<=1&&Object(r.h)(p,{progress:this.state.loading}),this.state.loading>1&&Object(r.h)("main",null,Object(r.h)("div",{id:"input"},Object(r.h)(v,null),Object(r.h)(w,{value:this.state.input,onChange:this.handleInputChange})),Object(r.h)("div",{id:"output"},Object(r.h)(T,{value:this.state.type,onChange:this.handleTypeChooserChange}),Object(r.h)(K,{dictionary:this.state.cedictData,value:this.state.input,type:this.state.type,highlight:this.state.highlight,onClick:this.handleClearHighlight,onTokenClick:this.handleTokenClick}),Object(r.h)(Q,{data:this.state.highlight,type:this.state.type,onCloseClick:this.handleClearHighlight}))))}}])&&Z(n.prototype,u),l&&Z(n,l),e}();Object(r.render)(Object(r.h)(ot,null),document.body)}]);