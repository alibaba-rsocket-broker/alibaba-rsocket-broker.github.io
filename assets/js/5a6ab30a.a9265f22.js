(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{86:function(e,o,n){"use strict";n.r(o),n.d(o,"frontMatter",(function(){return i})),n.d(o,"metadata",(function(){return p})),n.d(o,"toc",(function(){return s})),n.d(o,"default",(function(){return d}));var t=n(3),r=n(7),c=(n(0),n(109)),i={sidebar_position:1},p={unversionedId:"deployment/development",id:"deployment/development",isDocsHomePage:!1,title:"\u5f00\u53d1\u73af\u5883\u90e8\u7f72",description:"\u4e3a\u4e86\u4fbf\u4e8e\u9879\u76ee\u5f00\u53d1\u548c\u65e5\u5e38\u73af\u5883\u6d4b\u8bd5\uff0c\u6700\u4fbf\u6377\u7684\u505a\u6cd5\u5c31\u662f\u4f7f\u7528Docker Compose\u6765\u542f\u52a8RSocket Broker\u3002",source:"@site/docs/deployment/development.md",sourceDirName:"deployment",slug:"/deployment/development",permalink:"/docs/deployment/development",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/docs/intro"},next:{title:"Gossip\u5e7f\u64ad\u96c6\u7fa4\u90e8\u7f72",permalink:"/docs/deployment/gossip"}},s=[],a={toc:s};function d(e){var o=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},a,n,{components:o,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u9879\u76ee\u5f00\u53d1\u548c\u65e5\u5e38\u73af\u5883\u6d4b\u8bd5\uff0c\u6700\u4fbf\u6377\u7684\u505a\u6cd5\u5c31\u662f\u4f7f\u7528Docker Compose\u6765\u542f\u52a8RSocket Broker\u3002"),Object(c.b)("p",null,"docker-compose.yml\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  alibaba-rsocket-broker:\n    image: linuxchina/alibaba-rsocket-broker:1.1.0\n    ports:\n      - "9997:9997"\n      - "9998:9998"\n      - "9999:9999"\n')),Object(c.b)("p",null,"\u7136\u540e\u6267\u884c ",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose up -d")," \u542f\u52a8RSocket Broker\uff0c\u5bf9\u5e94\u7684Web\u63a7\u5236\u53f0\u4e3a http://localhost:9998/"))}d.isMDXComponent=!0}}]);