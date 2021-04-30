(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),c=(r(0),r(111)),o={sidebar_position:2},i={unversionedId:"rsocket",id:"rsocket",isDocsHomePage:!1,title:"RSocket\u4ecb\u7ecd",description:"RSocket\u662f\u4e00\u4e2a\u57fa\u4e8eReactive\u8bed\u4e49\u7684\u5f02\u6b65\u5316\u7684\u3001\u4e8c\u8fdb\u5236\u3001\u6d88\u606f\u901a\u8baf\u534f\u8bae\uff0c\u5b83\u5c5e\u4e8e\u5e94\u7528\u5c42\u534f\u8bae\u3002",source:"@site/docs/rsocket.md",sourceDirName:".",slug:"/rsocket",permalink:"/docs/rsocket",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/docs/intro"},next:{title:"Alibaba RSocket Broker\u7279\u6027",permalink:"/docs/rsocket-broker/broker-features"}},u=[{value:"RSocket\u56db\u79cd\u901a\u8baf\u6a21\u578b",id:"rsocket\u56db\u79cd\u901a\u8baf\u6a21\u578b",children:[]},{value:"MetadataPush: \u5143\u6570\u636e/\u4e8b\u4ef6\u5e7f\u64ad",id:"metadatapush-\u5143\u6570\u636e\u4e8b\u4ef6\u5e7f\u64ad",children:[]},{value:"\u70b9\u5bf9\u70b9\u901a\u8baf",id:"\u70b9\u5bf9\u70b9\u901a\u8baf",children:[]},{value:"\u5176\u4ed6\u7279\u6027: BackPress\uff0cLease\u548cResume",id:"\u5176\u4ed6\u7279\u6027-backpress\uff0clease\u548cresume",children:[]}],l={toc:u};function s(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"RSocket\u662f\u4e00\u4e2a\u57fa\u4e8eReactive\u8bed\u4e49\u7684\u5f02\u6b65\u5316\u7684\u3001\u4e8c\u8fdb\u5236\u3001\u6d88\u606f\u901a\u8baf\u534f\u8bae\uff0c\u5b83\u5c5e\u4e8e\u5e94\u7528\u5c42\u534f\u8bae\u3002"),Object(c.b)("h3",{id:"rsocket\u56db\u79cd\u901a\u8baf\u6a21\u578b"},"RSocket\u56db\u79cd\u901a\u8baf\u6a21\u578b"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Request/Response: \u8fd9\u4e2a\u4e3b\u8981\u662f\u89e3\u51b3RPC\u901a\u8baf\u7684\u573a\u666f\uff0c\u4e5f\u5c31\u662f\u5e38\u8bf4\u7684\u8bf7\u6c42/\u54cd\u5e94\u6a21\u5f0f"),Object(c.b)("li",{parentName:"ul"},"Request/Stream: \u8be5\u6a21\u578b\u7c7b\u4f3c\u4e8ePub/Sub(\u53d1\u5e03/\u8ba2\u9605)\u6a21\u5f0f\uff0c\u53ef\u4ee5\u8bf7\u6c42\u6d41\u5f0f\u6570\u636e"),Object(c.b)("li",{parentName:"ul"},"Fire and Forget: \u65e0\u9700\u56de\u6267\u786e\u8ba4\u7684\u6570\u636e\u53d1\u9001\uff0c\u5982\u65e5\u5fd7\u4f20\u8f93\u3001Metrics\u91c7\u96c6\u7b49\uff0c\u6570\u636e\u53d1\u51fa\u53bb\u540e\u4e0d\u9700\u8981\u56de\u6267\u786e\u8ba4\uff0c\u5728\u4e00\u4e9b\u975e\u5173\u952e\u6570\u636e\u573a\u666f\u4e2d\u4f7f\u7528\uff0c\u6027\u80fd\u6700\u9ad8"),Object(c.b)("li",{parentName:"ul"},"Channel: \u53cc\u5411\u6d41\u5f0f\u901a\u8baf\uff0c\u7c7b\u4f3c\u4e8eWebSocket\uff0c\u901a\u8baf\u7684\u53cc\u65b9\u521b\u5efa\u4e00\u4e2a\u865a\u62df\u7684\u901a\u8baf\u901a\u9053\uff0c\u7136\u540e\u5728\u6b64\u901a\u9053\u4e2d\u76f8\u4e92\u4f20\u8f93\u6570\u636e\uff0c\u5982\u804a\u5929\u3001\u5b9e\u65f6\u53cd\u9988\u7cfb\u7edf\u7b49\u3002")),Object(c.b)("h3",{id:"metadatapush-\u5143\u6570\u636e\u4e8b\u4ef6\u5e7f\u64ad"},"MetadataPush: \u5143\u6570\u636e/\u4e8b\u4ef6\u5e7f\u64ad"),Object(c.b)("p",null,"\u8003\u8651\u8fd0\u7ef4\u7ef4\u62a4\u7684\u9700\u8981\uff0cRSocket\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2ametadataPush\u7684\u901a\u8baf\u6a21\u578b\uff0c\u867d\u7136\u548cFire and Forget\u6a21\u578b\u7c7b\u4f3c\uff0c\u4f46\u662f\u51fa\u53d1\u70b9\u4e3b\u8981\u662f\u89e3\u51b3\u901a\u8baf\u53cc\u65b9\u4e4b\u95f4\u7684\u5143\u4fe1\u606f\u63a8\u9001\uff1a "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"metadataPush\uff1a\u901a\u8baf\u7684\u53cc\u65b9\u8fdb\u884c\u5143\u4fe1\u606f\u63a8\u9001\u6216\u4e8b\u4ef6\u5e7f\u64ad\uff0c\u5982Broker\u67b6\u6784\u8bbe\u8ba1\u4e2d\u96c6\u7fa4\u53d8\u66f4\u901a\u77e5\u3001\u5e94\u7528\u4e0a\u4e0b\u7ebf\u901a\u77e5\u3001\u914d\u7f6e\u63a8\u9001\u7b49\u573a\u666f"),Object(c.b)("li",{parentName:"ul"},"CloudEvents: CloudEvents\u662f\u4e8b\u4ef6\u63cf\u8ff0\u7684\u89c4\u8303\uff0c\u5efa\u8bae\u5728\u4f7f\u7528medataPush\u63a8\u9001\u4fe1\u606f\u65f6\u91c7\u7528CloudEvents\u6807\u51c6\u89c4\u8303 ",Object(c.b)("a",{parentName:"li",href:"https://cloudevents.io/"},"https://cloudevents.io/"))),Object(c.b)("h3",{id:"\u70b9\u5bf9\u70b9\u901a\u8baf"},"\u70b9\u5bf9\u70b9\u901a\u8baf"),Object(c.b)("p",null,"Rsocket\u540c\u65f6\u8fd8\u652f\u6301P2P(Peer to Peer)\u901a\u8baf\u6a21\u578b\uff0c\u4e5f\u5c31\u662f\u901a\u8baf\u7684\u53cc\u65b9\u4e92\u4e3aClient/Server\uff0c\u8fd9\u4e2a\u4e5f\u662fRSocket Broker\u8bbe\u8ba1\u7684\u57fa\u7840\uff0c\u53ef\u4ee5\u505a\u5230\u65e0\u7aef\u53e3\u76d1\u542c\u53d1\u5e03\u670d\u52a1\u3002 "),Object(c.b)("h3",{id:"\u5176\u4ed6\u7279\u6027-backpress\uff0clease\u548cresume"},"\u5176\u4ed6\u7279\u6027: BackPress\uff0cLease\u548cResume"),Object(c.b)("p",null,"\u6b64\u5916RSocket\u8fd8\u652f\u6301\u4ee5\u4e0b\u7279\u6027\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"BackPressure\u80cc\u538b\u652f\u6301\uff1a\u53ef\u4ee5\u9632\u6b62\u7a81\u53d1\u6d41\u91cf\u4e0b\u5bf9\u6d88\u606f\u5904\u7406\u9020\u6210\u5de8\u5927\u538b\u529b\uff0c\u5bfc\u81f4\u670d\u52a1\u4e0d\u80fd\u54cd\u5e94"),Object(c.b)("li",{parentName:"ul"},"Lease\u652f\u6301: \u57fa\u4e8e\u79df\u671f\u5408\u7ea6\u7684\u901a\u8baf\u6a21\u578b\uff0c\u53ef\u4ee5\u6839\u636e\u6d88\u606f\u6570\u91cf\u548c\u65f6\u95f4\u6bb5\u4e24\u4e2a\u7ef4\u5ea6\u5236\u5b9a\u79df\u7ea6\uff0c\u80fd\u5f88\u597d\u7684\u5305\u542b\u7cfb\u7edf\u548c\u7ec6\u7c92\u5ea6\u7684\u5b89\u5168\u63a7\u5236"),Object(c.b)("li",{parentName:"ul"},"Resume\u652f\u6301\uff1a\u65ad\u70b9\u7eed\u4f20\uff0c\u901a\u8baf\u4e2d\u65ad\u56de\u590d\u540e\uff0c\u53ef\u4ee5\u5c06\u6b64\u9636\u6bb5\u7684\u6d88\u606f\u518d\u6b21\u53d1\u9001\u7ed9\u8bf7\u6c42\u65b9")),Object(c.b)("h1",{id:"\u591a\u8bed\u8a00sdk"},"\u591a\u8bed\u8a00SDK"),Object(c.b)("p",null,"RSocket\u662f\u6807\u51c6\u7684\u901a\u8baf\u534f\u8bae\uff0c\u652f\u6301\u591a\u4e2a\u4e3b\u6d41\u8bed\u8a00\u63a5\u5165\uff0c\u5bf9\u5e94\u7684SDK\u548c\u6280\u672f\u6808\u5982\u4e0b\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{alt:"RSocket Stack",src:r(163).default})),Object(c.b)("p",null,"\u66f4\u591a\u5173\u4e8eRSocket\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u8003: ",Object(c.b)("a",{parentName:"p",href:"https://rsocketbyexample.info/"},"https://rsocketbyexample.info/")))}s.isMDXComponent=!0},111:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||c;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},163:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/rsocket-stack-03c240fc9e0720f06d438e89925d2696.png"}}]);