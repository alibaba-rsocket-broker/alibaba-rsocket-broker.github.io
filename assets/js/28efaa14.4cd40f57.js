(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{111:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return k}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=n.a.createContext({}),u=function(e){var r=n.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.a.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},m=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,k=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return t?n.a.createElement(k,l(l({ref:r},i),{},{components:t})):n.a.createElement(k,l({ref:r},i))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var l={};for(var b in r)hasOwnProperty.call(r,b)&&(l[b]=r[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return b})),t.d(r,"default",(function(){return u}));var a=t(3),n=t(7),o=(t(0),t(111)),c={title:"Alibaba RSocket Broker Helm Chart\u53d1\u5e03",author:"linux_china",author_title:"RSocket Broker\u4f5c\u8005",author_url:"https://github.com/linux_china",author_image_url:"https://avatars.githubusercontent.com/u/46711?s=96&v=4",tags:["broker","helm","kubernetes"]},l={permalink:"/blog/2021/04/25/helm-chart",source:"@site/blog/2021-04-25-helm-chart.md",title:"Alibaba RSocket Broker Helm Chart\u53d1\u5e03",description:"Alibaba RSocket Broker 1.1.0\u7248\u672c\u589e\u52a0\u4e86Kubernetes\u7684\u652f\u6301\uff0c \u90e8\u7f72\u4e5f\u4e0d\u662f\u7279\u522b\u9ebb\u70e6\uff0c\u5c31\u662f\u5927\u5bb6\u90fd\u61c2\u7684kubectl apply -f deployment.yaml\uff0c \u8003\u8651\u5230K8S\u793e\u533a\u8fd8\u662f\u57fa\u4e8eHelm\u90e8\u7f72\u4e3a\u4e3b\uff0c\u6240\u4ee5\u6211\u4eec\u6dfb\u52a0\u4e86RSocket Broker Helm Chart\uff0c\u501f\u52a9Helm\u66f4\u65b9\u4fbf\u5730\u7ba1\u7406RSocket Broker\u90e8\u7f72\u3002",date:"2021-04-25T00:00:00.000Z",formattedDate:"2021\u5e744\u670824\u65e5",tags:[{label:"broker",permalink:"/blog/tags/broker"},{label:"helm",permalink:"/blog/tags/helm"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:.27,truncated:!1,prevItem:{title:"Alibaba RSocket Broker free for testing",permalink:"/blog/2021/04/28/free-rsocket-broker"},nextItem:{title:"Alibaba RSocket Broker 1.1.0\u53d1\u5e03",permalink:"/blog/2021/04/24/broker-1.1.0-released"}},b=[],i={toc:b};function u(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Alibaba RSocket Broker 1.1.0\u7248\u672c\u589e\u52a0\u4e86Kubernetes\u7684\u652f\u6301\uff0c \u90e8\u7f72\u4e5f\u4e0d\u662f\u7279\u522b\u9ebb\u70e6\uff0c\u5c31\u662f\u5927\u5bb6\u90fd\u61c2\u7684",Object(o.b)("inlineCode",{parentName:"p"},"kubectl apply -f deployment.yaml"),"\uff0c \u8003\u8651\u5230K8S\u793e\u533a\u8fd8\u662f\u57fa\u4e8eHelm\u90e8\u7f72\u4e3a\u4e3b\uff0c\u6240\u4ee5\u6211\u4eec\u6dfb\u52a0\u4e86RSocket Broker Helm Chart\uff0c\u501f\u52a9Helm\u66f4\u65b9\u4fbf\u5730\u7ba1\u7406RSocket Broker\u90e8\u7f72\u3002\n\u8be6\u7ec6\u7684\u4fe1\u606f\u8bf7\u53c2\u8003\uff1a ",Object(o.b)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/alibaba-rsocket-broker/alibaba-rsocket-broker"},"https://artifacthub.io/packages/helm/alibaba-rsocket-broker/alibaba-rsocket-broker")),Object(o.b)("p",null,"RSocket Broker\u7684Helm\u5b89\u88c5\u6b65\u9aa4\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"helm repo add alibaba-rsocket-broker https://alibaba-rsocket-broker.github.io/helm/charts/\nhelm install rsocket-broker alibaba-rsocket-broker/alibaba-rsocket-broker\n")),Object(o.b)("p",null,"\u5728\u4f7f\u7528Helm\u5b89\u88c5RSocket Broker\u5b8c\u6bd5\u540e\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528rsocket-box\u6765\u9a8c\u8bc1RSocket Broker\u662f\u5426\u6b63\u5e38\u5de5\u4f5c\uff0c\u547d\u4ee4\u884c\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl run -i --rm --tty rsocket-box --image=linuxchina/rsocket-box --restart=Never --image-pull-policy=Always\n")),Object(o.b)("p",null,"\u7136\u540e\u8c03\u7528alirsc\u5bf9rsocket broker\u7684\u96c6\u7fa4\u8fdb\u884c\u670d\u52a1\u6d4b\u8bd5\uff0c\u5982\u67e5\u770bBroker\u96c6\u7fa4\u7684\u62d3\u6251\u7ed3\u6784\uff1a "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ alirsc tcp://rsocket-broker.rsocket.svc.cluster.local:9999 --request --route com.alibaba.user.UserService.findById -d '[1]'\n")))}u.isMDXComponent=!0}}]);