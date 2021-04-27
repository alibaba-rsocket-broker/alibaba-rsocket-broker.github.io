(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{108:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,d=u["".concat(a,".").concat(m)]||u[m]||b[m]||c;return t?o.a.createElement(d,i(i({ref:r},s),{},{components:t})):o.a.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),c=(t(0),t(108)),a={sidebar_position:2},i={unversionedId:"deployment/gossip",id:"deployment/gossip",isDocsHomePage:!1,title:"Gossip\u5e7f\u64ad\u96c6\u7fa4\u90e8\u7f72",description:"\u5728\u65e5\u5e38\u6d4b\u8bd5\u548c\u4ea7\u54c1\u73af\u5883\u4e0b\uff0cRSocket Broker\u4f1a\u6d89\u53ca\u5230\u591a\u53f0\u670d\u52a1\u5668\uff0c\u867d\u7136\u5355\u53f0Broker\u53ef\u80fd\u6027\u80fd\u5df2\u7ecf\u80fd\u591f\u6ee1\u8db3\u5566\uff0c\u4f46\u662f\u8003\u8651\u5230RSocket Broker\u8fd8\u6d89\u53ca\u5230\u53d1\u5e03\u7b49\uff0c",source:"@site/docs/deployment/gossip.md",sourceDirName:"deployment",slug:"/deployment/gossip",permalink:"/docs/deployment/gossip",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"\u5f00\u53d1\u73af\u5883\u90e8\u7f72",permalink:"/docs/deployment/development"},next:{title:"Kubernetes\u90e8\u7f72",permalink:"/docs/deployment/kubernetes"}},p=[],s={toc:p};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5728\u65e5\u5e38\u6d4b\u8bd5\u548c\u4ea7\u54c1\u73af\u5883\u4e0b\uff0cRSocket Broker\u4f1a\u6d89\u53ca\u5230\u591a\u53f0\u670d\u52a1\u5668\uff0c\u867d\u7136\u5355\u53f0Broker\u53ef\u80fd\u6027\u80fd\u5df2\u7ecf\u80fd\u591f\u6ee1\u8db3\u5566\uff0c\u4f46\u662f\u8003\u8651\u5230RSocket Broker\u8fd8\u6d89\u53ca\u5230\u53d1\u5e03\u7b49\uff0c\n\u6240\u4ee5\u6700\u5c11\u9700\u89812\u53f0\u53ca\u4ee5\u4e0aRSocket Broker\u5b9e\u4f8b\u7ec4\u6210\u4e00\u4e2a\u96c6\u7fa4\u3002 \u8fd9\u4e2a\u65f6\u5019\u4f60\u53ef\u4ee5\u9009\u62e9\u57fa\u4e8eGossip\u5e7f\u64ad\u8fdb\u884c\u96c6\u7fa4\u642d\u5efa\uff0c\u8fd9\u79cd\u65b9\u5f0f\u7684\u597d\u5904\u5728\u4e8e\u4e0d\u9700\u8981\u5bf9\u7f51\u7edc\u8fdb\u884c\u4efb\u4f55\u8c03\u6574\uff0c\n\u53ea\u9700\u8981\u4ea7\u54c1\u73af\u5883\u5305\u542b\u5bf9\u5e94\u7684\u670d\u52a1\u5668\u5c31\u53ef\u4ee5\u3002"),Object(c.b)("p",null,"Gossip\u5e7f\u64ad\u9700\u8981\u79cd\u5b50\u8282\u70b9(seed nodes)\uff0c\u6240\u4ee5\u4f60\u9700\u8981\u7ed9RSocket Broker\u5b9e\u4f8b\u7684\u79cd\u5b50\u8282\u70b9\u5206\u914d\u56fa\u5b9a\u7684IP\uff0c\u800c\u5176\u4ed6\u7684RSocket Broker\u7684worker\u8282\u70b9\u968f\u673aIP\u5c31\u53ef\u4ee5\uff0c\n\u7136\u540e\u5c06RSocket Broker\u7684\u79cd\u5b50\u8282\u70b9\u7684IP\u5730\u5740\u5217\u8868\u6dfb\u52a0\u5230application.properties\u914d\u7f6e\u9879\u4e2d\uff0c\u5982\u4e0b\uff1a "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-properties",metastring:'title="/src/main/resources/application.properties"',title:'"/src/main/resources/application.properties"'},"rsocket.broker.topology=gossip\nrsocket.broker.seeds=192.168.1.2,192.168.1.3,192.168.1.4\n")),Object(c.b)("p",null,"\u8fd9\u6837RSocket Broker\u5b9e\u4f8b\u542f\u52a8\u540e\uff0c\u5c31\u4f1a\u6839\u636e\u79cd\u5b50\u8282\u70b9\u7684\u4fe1\u606f\uff0c\u81ea\u52a8\u52a0\u5165\u5230RSocket Broker\u96c6\u7fa4\u4e2d\uff0c\u5e76\u80fd\u81ea\u52a8\u54cd\u5e94\u96c6\u7fa4\u7684\u62d3\u6251\u53d8\u66f4Gossip\u901a\u77e5\u3002 "),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u6ce8\u610f"),": Gossip\u5e7f\u64ad\u8bbe\u7f6e\u548c\u76d1\u542c\u7aef\u53e3\u53f742254\uff0c\u5bf9\u5e94\u7684Gossip\u5f00\u53d1\u5305\u4e3a ",Object(c.b)("a",{parentName:"p",href:"https://github.com/scalecube/scalecube-cluster"},"https://github.com/scalecube/scalecube-cluster")),Object(c.b)("p",null,"\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",Object(c.b)("a",{parentName:"p",href:"https://github.com/alibaba/alibaba-rsocket-broker/tree/master/alibaba-broker-server"},"RSocket Broker README")))}l.isMDXComponent=!0}}]);