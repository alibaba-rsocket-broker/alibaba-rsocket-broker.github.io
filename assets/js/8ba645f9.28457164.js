(self.webpackChunkalibaba_rsocket_broker_website=self.webpackChunkalibaba_rsocket_broker_website||[]).push([[170],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return k},kt:function(){return f}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),u=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},k=function(e){var r=u(e.components);return o.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},s=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,k=c(e,["components","mdxType","originalType","parentName"]),s=u(t),f=n,b=s["".concat(l,".").concat(f)]||s[f]||p[f]||a;return t?o.createElement(b,i(i({ref:r},k),{},{components:t})):o.createElement(b,i({ref:r},k))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6899:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return k}});var o=t(2122),n=t(9756),a=(t(7294),t(3905)),i={sidebar_position:2},c={unversionedId:"rsocket-broker/how-it-works",id:"rsocket-broker/how-it-works",isDocsHomePage:!1,title:"RSocket Broker\u5de5\u4f5c\u539f\u7406",description:"RSocket\u9664\u4e86\u652f\u6301\u591a\u79cd\u901a\u8baf\u6a21\u578b\uff0c\u6b64\u5916\u8fd8\u652f\u6301\u5bf9\u7b49(Peer to Peer)\u901a\u8baf\uff0c\u4e5f\u5c31\u662f\u901a\u8baf\u7684\u53cc\u65b9\u65e2\u53ef\u4ee5\u662f\u5ba2\u6237\u7aef\u4e5f\u53ef\u4ee5\u662f\u670d\u52a1\u7aef\u3002\u8ba9\u6211\u4eec\u770b\u4e00\u4e0bRSocket Broker\u7684\u67b6\u6784\uff1a",source:"@site/docs/rsocket-broker/how-it-works.md",sourceDirName:"rsocket-broker",slug:"/rsocket-broker/how-it-works",permalink:"/docs/rsocket-broker/how-it-works",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Alibaba RSocket Broker\u7279\u6027",permalink:"/docs/rsocket-broker/broker-features"},next:{title:"\u5f00\u53d1\u73af\u5883\u90e8\u7f72",permalink:"/docs/deployment/development"}},l=[],u={toc:l};function k(e){var r=e.components,i=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"RSocket\u9664\u4e86\u652f\u6301\u591a\u79cd\u901a\u8baf\u6a21\u578b\uff0c\u6b64\u5916\u8fd8\u652f\u6301\u5bf9\u7b49(Peer to Peer)\u901a\u8baf\uff0c\u4e5f\u5c31\u662f\u901a\u8baf\u7684\u53cc\u65b9\u65e2\u53ef\u4ee5\u662f\u5ba2\u6237\u7aef\u4e5f\u53ef\u4ee5\u662f\u670d\u52a1\u7aef\u3002\u8ba9\u6211\u4eec\u770b\u4e00\u4e0bRSocket Broker\u7684\u67b6\u6784\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"RSocket Broker Network",src:t(3409).Z})),(0,a.kt)("p",null,"\u5728\u4e0a\u56fe\u4e2d\uff0cRSocket Broker\u542f\u52a8\u540e\uff0c\u76d1\u542c\u7279\u5b9a\u7684\u7aef\u53e3\uff0c\u5982Alibaba RSocket Broker\u7684RSocket\u76d1\u542c\u7aef\u53e3\u4e3a9999\u3002 "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u4e00\u4e2a\u670d\u52a1\u63d0\u4f9b\u8005\u5e94\u7528\u542f\u52a8\u540e\uff0c\u4e3b\u52a8\u548cBroker\u521b\u5efa\u4e00\u4e2aTCP\u957f\u8fde\u63a5\uff0c\u7136\u540e\u544a\u8bc9Broker\u81ea\u5df1\u80fd\u63d0\u4f9b\u7684\u670d\u52a1\u5217\u8868\u3002 "),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u4e00\u4e2a\u670d\u52a1\u6d88\u8d39\u8005\u5e94\u7528\u542f\u52a8\u540e\uff0c\u4e5f\u4e3b\u52a8\u548cBroker\u521b\u5efa\u4e00\u4e2aTCP\u957f\u8fde\u63a5\uff0c\u5f53\u6d88\u8d39\u8005\u5e94\u7528\u8981\u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u65f6\uff0c"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u6d88\u8d39\u8005\u4f1a\u5c06\u670d\u52a1\u8c03\u7528\u8bf7\u6c42\u5c01\u88c5\u4e3a\u6d88\u606f(\u6d88\u606fID\u552f\u4e00)\u53d1\u7ed9Broker\uff0cBroker\u5728\u6536\u5230\u6d88\u606f\u540e\uff0c\u6839\u636e\u6d88\u606f\u7684\u5143\u4fe1\u606f\u89e3\u6790\u51fa\u8981\u8c03\u7528\u7684\u670d\u52a1\uff0c\u7136\u540e\u5728\u5185\u90e8\u7684\u670d\u52a1\u8def\u7531\u8868\u4e2d\u67e5\u627e\u51fa\u80fd\u591f\u63d0\u4f9b\u8fd9\u4e00\u670d\u52a1\u7684\u670d\u52a1\u63d0\u4f9b\u8005\uff0c \u7136\u540e\u5c06\u8be5\u8bf7\u6c42\u901a\u8fc7\u670d\u52a1\u63d0\u4f9b\u8005\u548cBroker\u5df2\u7ecf\u5efa\u7acb\u7684\u957f\u8fde\u63a5\u53d1\u9001\u7ed9\u670d\u52a1\u63d0\u4f9b\u8005\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u63d0\u4f9b\u8005\u5728\u5904\u7406\u5b8c\u8bf7\u6c42\u540e\uff0c\u5c06\u5904\u7406\u7ed3\u679c\u518d\u6b21\u5c01\u88c5\u4e3a\u6d88\u606f(\u5173\u8054\u4e4b\u524d\u7684\u6d88\u606fID)\uff0c\u56de\u53d1\u9001\u7ed9Broker "),(0,a.kt)("li",{parentName:"ul"},"Broker\u6839\u636e\u6d88\u606fID\u5339\u914d\uff0c\u5c06\u8fd4\u56de\u7684\u6d88\u606f\u518d\u8f6c\u53d1\u670d\u52a1\u8c03\u7528\u65b9"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u8c03\u7528\u65b9\u6536\u5230\u54cd\u5e94\u7684\u6d88\u606f\uff0c\u8fdb\u884c\u5bf9\u5e94\u7684\u4e1a\u52a1\u5904\u7406")),(0,a.kt)("p",null,"\u8fd9\u79cd\u57fa\u4e8eBroker\u7684\u6d88\u606f\u901a\u8baf\u65b9\u5f0f\uff0c\u4f1a\u6709\u4ee5\u4e0b\u4e00\u4e9b\u4f18\u70b9\uff1a "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65e0\u7aef\u53e3\u76d1\u542c: \u670d\u52a1\u63d0\u4f9b\u65b9\u4e0d\u518d\u76d1\u542c\u7aef\u53e3\uff0c\u8fd9\u4e2a\u548cHTTP REST API\u548cgRPC\u662f\u5b8c\u5168\u4e0d\u540c\u7684\uff0c\u8fd9\u6837\u66f4\u5b89\u5168"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8baf\u900f\u660e\uff1a \u8c03\u7528\u65b9\u548c\u670d\u52a1\u63d0\u4f9b\u8005\u5b8c\u5168\u900f\u660e\uff0c\u4e0d\u7528\u611f\u77e5\u5bf9\u65b9\u7684\u5b58\u5728"),(0,a.kt)("li",{parentName:"ul"},"\u6d41\u63a7\uff1a \u5982\u679c\u670d\u52a1\u63d0\u4f9b\u8005\u538b\u529b\u8fc7\u5927\uff0c\u5219Broker\u6839\u636e\u53cd\u9988\u81ea\u52a8\u5c06\u6d88\u606f\u8f6c\u53d1\u7ed9\u5176\u4ed6\u670d\u52a1\u63d0\u4f9b\u8005\uff0c\u6216\u8005\u76f4\u63a5\u7194\u65ad\uff0c\u5feb\u901f\u5931\u8d25\u540e\u8fd4\u56de\u7ed9\u670d\u52a1\u8c03\u7528\u65b9"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\uff1a \u4e0d\u9700\u8981\u4f20\u7edf\u7684\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u57fa\u7840\u8bbe\u65bd\uff0c\u5982Eureka, Consul, ZooKeeper\u7b49\uff0c\u51cf\u5c11\u57fa\u7840\u8bbe\u65bd\u4f9d\u8d56\u6210\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u5168\uff1a Broker\u4f1a\u5bf9\u670d\u52a1\u63d0\u4f9b\u65b9\u548c\u670d\u52a1\u6d88\u8d39\u8005\u8fdb\u884c\u63a5\u5165\u6743\u9650\u9a8c\u8bc1\uff0c\u540c\u65f6\u53ea\u9700\u8981Broker\u90e8\u7f72TLS\u652f\u6301\u5c31\u53ef\u4ee5\u4fdd\u8bc1\u901a\u8baf\u901a\u9053\u5b89\u5168"),(0,a.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u63a5\u5165\u4fbf\u6377\uff1a \u7531\u4e8e\u662f\u901a\u8baf\u53cc\u65b9\u90fd\u8981\u63a5\u5165\u5230Broker\u4e0a\uff0c\u6240\u4ee5\u5bf9\u7f51\u7edc\u65e0\u4efb\u4f55\u8981\u6c42\uff0c\u5982\u529e\u516c\u7f51\u6216\u79c1\u6709\u4e91\uff0c\u4e5f\u80fd\u4e3a\u4e91\u4e0a\u5e94\u7528\u63d0\u4f9b\u670d\u52a1\u652f\u6301")),(0,a.kt)("p",null,"\u5f53\u7136Broker\u4e5f\u6709\u4e00\u4e9b\u7f3a\u70b9\uff0c\u7531\u4e8e\u4e0d\u662f\u901a\u8baf\u53cc\u65b9\u4e4b\u95f4\u901a\u8baf\uff0c\u591a\u4e86Broker\u7684\u8f6c\u53d1\uff0c\u6240\u4ee5\u6027\u80fd\u6709\u4e00\u70b9\u4e0b\u964d\u3002\n\u6b64\u5916\u6240\u6709\u7684\u901a\u8baf\u6d41\u91cf\u90fd\u6709\u7ecf\u8fc7Broker\u8f6c\u53d1\uff0c\u6240\u4ee5\u5b58\u5728\u7f51\u7edc\u7684\u4e00\u4e2a\u74f6\u9888\uff0c\u4f46\u662f\u8fd9\u4e2a\u53ef\u4ee5\u901a\u8fc7\u96c6\u7fa4\u548cBroker\u7684\u9ad8\u53ef\u9760\u6027\u8fdb\u884c\u4fdd\u8bc1\u3002"))}k.isMDXComponent=!0},3409:function(e,r,t){"use strict";r.Z=t.p+"assets/images/rsocket-broker-network-0a294d2a5ea6cafe7ca4d842bdf4c453.png"}}]);