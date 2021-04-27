(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{108:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=t,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,i(i({ref:r},l),{},{components:n})):o.a.createElement(m,i({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return p}));var t=n(3),o=n(7),a=(n(0),n(108)),c={sidebar_position:1},i={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"\u5feb\u901f\u5165\u95e8",description:"\u8fd9\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684RSocket Broker\u53c2\u8003\u6837\u4f8b\uff1a \u670d\u52a1\u8c03\u7528\u65b9(requester)\u5411Broker\u53d1\u8d77\u670d\u52a1\u8c03\u7528\u8bf7\u6c42\uff0cBroker\u5c06\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u670d\u52a1\u63d0\u4f9b\u8005(Responder)\uff0c \u6700\u540eBroker\u5c06Responder\u7684\u5904\u7406\u7ed3\u679c\u518d\u8fd4\u56de\u7ed9requester\u3002",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"RSocket\u4ecb\u7ecd",permalink:"/docs/rsocket"}},s=[],l={toc:s};function p(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684RSocket Broker\u53c2\u8003\u6837\u4f8b\uff1a \u670d\u52a1\u8c03\u7528\u65b9(requester)\u5411Broker\u53d1\u8d77\u670d\u52a1\u8c03\u7528\u8bf7\u6c42\uff0cBroker\u5c06\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u670d\u52a1\u63d0\u4f9b\u8005(Responder)\uff0c \u6700\u540eBroker\u5c06Responder\u7684\u5904\u7406\u7ed3\u679c\u518d\u8fd4\u56de\u7ed9requester\u3002"),Object(a.b)("p",null,"\u672c\u6587\u7684\u4ee3\u7801\u6837\u4f8b\u5728\uff1a ",Object(a.b)("a",{parentName:"p",href:"https://github.com/alibaba-rsocket-broker/rsocket-broker-simple-example"},"https://github.com/alibaba-rsocket-broker/rsocket-broker-simple-example")," \u4f60\u53ef\u4ee5\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"Use this template"),"\u521b\u5efa\u4f60\u81ea\u5df1\u7684\u5e94\u7528\u3002"),Object(a.b)("h1",{id:"\u670d\u52a1\u63a5\u53e3\u8bbe\u8ba1"},"\u670d\u52a1\u63a5\u53e3\u8bbe\u8ba1"),Object(a.b)("p",null,"RSocket\u7684\u670d\u52a1\u63a5\u53e3\u662f\u57fa\u4e8eReactive\u8bed\u4e49\u7684\uff0c\u4f60\u53ea\u9700\u8981\u5c06API\u7684\u8fd4\u56de\u503c\u8bbe\u7f6e\u4e3aMono\u548cFlux\u5c31\u53ef\u4ee5\u3002 \u5173\u4e8eMono\u548cFlux\u7684\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u8003 ",Object(a.b)("a",{parentName:"p",href:"https://projectreactor.io/docs/core/release/reference/"},"Reactor Core Reference")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"public interface UserService {\n\n    Mono<User> findById(Integer id);\n    \n    Flux<User> findVipUser();\n\n}\n")),Object(a.b)("h1",{id:"\u670d\u52a1\u63a5\u53e3\u5b9e\u73b0"},"\u670d\u52a1\u63a5\u53e3\u5b9e\u73b0"),Object(a.b)("p",null,"\u670d\u52a1\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\u5c31\u662f\u4e00\u4e2a\u7b80\u5355\u7684Spring Bean\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6dfb\u52a0\u5bf9\u5e94\u7684@RSocketService Annotation\u6807\u660e\u8be5\u670d\u52a1\u4e3aRSocket\u670d\u52a1\u5373\u53ef\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"@Service\n@RSocketService(serviceInterface = UserService.class)\npublic class UserServiceImpl implements UserService {\n    private final Faker faker = new Faker();\n\n    @Override\n    public Mono<User> findById(Integer id) {\n        return Mono.just(randomUser(id));\n    }\n\n    private User randomUser(@Nullable Integer id) {\n        User user = new User();\n        user.setId(id == null ? new Random().nextInt() : id);\n        user.setNick(faker.name().name());\n        user.setPhone(faker.phoneNumber().cellPhone());\n        user.setEmail(faker.internet().emailAddress());\n        return user;\n    }\n\n}\n")),Object(a.b)("h1",{id:"user-service-spring-boot-starter"},"user-service-spring-boot-starter"),Object(a.b)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u5176\u4ed6Spring Boot\u5e94\u7528\u8c03\u7528RSocket\u670d\u52a1\uff0c\u6211\u4eec\u8fd9\u91cc\u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u5bf9\u5e94\u7684Spring Boot Starter\u3002 \u521b\u5efa\u4e00\u4e2aSpring Configuration\uff0c\u6765\u751f\u6210UserService\u8c03\u7528\u7684\u4ee3\u7406Bean\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"@Configuration(proxyBeanMethods = false)\npublic class UserServicesAutoConfiguration {\n    @Bean\n    public UserService userService(UpstreamManager upstreamManager) {\n        return RSocketRemoteServiceBuilder\n                .client(UserService.class)\n                .upstreamManager(upstreamManager)\n                .build();\n    }\n}\n")),Object(a.b)("h1",{id:"rsocket\u670d\u52a1\u8fdc\u7a0b\u8c03\u7528"},"RSocket\u670d\u52a1\u8fdc\u7a0b\u8c03\u7528"),Object(a.b)("p",null,"\u5728\u670d\u52a1\u6d88\u8d39\u8005\u65b9\uff0c\u53ea\u9700\u8981\u5f15\u5165",Object(a.b)("inlineCode",{parentName:"p"},"user-service-spring-boot-starter"),"\u4f9d\u8d56\uff0c\u7136\u540e\u5728Controller\u6216\u8005\u5176\u4ed6Bean\u4e2d\u76f4\u63a5UserService\u5bf9\u5e94\u7684\u4ee3\u7406bean\u5373\u53ef\uff0c\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/user")\npublic class UserController {\n    @Autowired\n    private UserService userService;\n\n    @GetMapping("/{id}")\n    public Mono<User> user(@PathVariable Integer id) {\n        return userService.findById(id);\n    }\n\n}\n')),Object(a.b)("h1",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(a.b)("p",null,"\u6700\u540e\u6211\u4eec\u53ea\u9700\u8981\u5728\u5e94\u7528\u6d88\u8d39\u8005\u7aef\u53d1\u8d77\u5bf9\u5e94\u7684\u8bf7\u6c42\u5c31\u53ef\u4ee5\uff0c\u5982\u901a\u8fc7\u4e00\u4e2aHTTP\u8bf7\u6c42\u6765\u89e6\u53d1\u5bf9\u540e\u7aefRSocket\u7684\u670d\u52a1\u8c03\u7528\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8181/user/1\n")))}p.isMDXComponent=!0}}]);