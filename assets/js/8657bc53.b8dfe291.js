"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27657],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=l(a),m=r,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||i;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},88748:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return l},toc:function(){return u},default:function(){return h}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o={title:"Biweekly Report\uff5c12.1-12.15 Feature Highlights Update in Progress",keywords:["Apache APISIX","Weekly Report","Contributor","APISIX","API Gateway","Apache"],description:"The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.",tags:["Events"]},p=void 0,s={permalink:"/blog/2021/12/20/weekly-report-1215",source:"@site/blog/2021/12/20/weekly-report-1215.md",title:"Biweekly Report\uff5c12.1-12.15 Feature Highlights Update in Progress",description:"The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.",date:"2021-12-20T00:00:00.000Z",formattedDate:"December 20, 2021",tags:[{label:"Events",permalink:"/blog/tags/events"}],readingTime:3.72,truncated:!0,authors:[],prevItem:{title:"Apache APISIX Integrates with Google Cloud Logging to Improve Log Processing",permalink:"/blog/2021/12/22/google-logging"},nextItem:{title:"Secure Exposure of Istio Services with APISIX Ingress",permalink:"/blog/2021/12/17/exposure-istio-with-apisix-ingress"}},l={authorsImageUrls:[]},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Contributor Statistics",id:"contributor-statistics",children:[]},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #5795",id:"issue-5795",children:[]},{value:"Issue #5756",id:"issue-5756",children:[]},{value:"Issue #5634",id:"issue-5634",children:[]}]},{value:"Highlights of Recent Features",id:"highlights-of-recent-features",children:[]},{value:"Recent Blog Recommendations",id:"recent-blog-recommendations",children:[]}],c={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"From 12.1 to 12.15, 38 contributors submitted 114 commits for Apache APISIX. Thank you all for your contributions to Apache APISIX. It is your selfless contribution to make the Apache APISIX project better!")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Apache APISIX has grown as a community from the first day of open source and has quickly become the most active open source API gateway project in the world. These achievements cannot be achieved without the joint efforts of our community partners."),(0,i.kt)("p",null,'"If you want to go fast, go alone.If you want to go far, go together." The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.'),(0,i.kt)("p",null,"We have also compiled some issues suitable for newcomers to the community to participate in! If you are interested, don't miss it!"),(0,i.kt)("h2",{id:"contributor-statistics"},"Contributor Statistics"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639981796665-784d48cd-76ad-4a21-974b-23c5a0dcf1dd.png",alt:"Contributors List"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639981796682-ab41c626-8674-4503-b642-a9714189e51f.png",alt:"New Contributors"})),(0,i.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,i.kt)("h3",{id:"issue-5795"},"Issue #5795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5795"},"https://github.com/apache/apisix/issues/5795")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,i.kt)("p",null,"Sometimes, we just need install etcd, ref here. But install_dependencies.sh not support this feature, it will install all dependencies of APISIX. Should we support install etcd separately in install_dependencies.sh ?"),(0,i.kt)("p",null,"example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Nginx"},"bash install_dependencies.sh etcd\n")),(0,i.kt)("h3",{id:"issue-5756"},"Issue #5756"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5756"},"https://github.com/apache/apisix/issues/5756")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,i.kt)("p",null,"The current openwhisk plugin will take the response from Apache OpenWhisk and return it directly without parsing. This request may contain complex data that rewrites the status code, response headers, and response body. We need to parse it and change the APISIX response."),(0,i.kt)("p",null,"The complex data like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "statusCode": 401,\n  "headers": {\n    "addition-header": "a-header"\n  },\n  "body": "xxx" | {"xxx":"xxx"}\n}\n')),(0,i.kt)("p",null,"We need to determine if the OpenWhisk response contains them, and if they are present, write them to the APISIX response."),(0,i.kt)("h3",{id:"issue-5634"},"Issue #5634"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5634"},"https://github.com/apache/apisix/issues/5634")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,i.kt)("p",null,"Now, I see we had support ",(0,i.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"var_combination")," in apisix limit-* plugins yet."),(0,i.kt)("p",null,"I think we can support a type like ",(0,i.kt)("inlineCode",{parentName:"p"},"function")," so that we can write some logic as a function in the key."),(0,i.kt)("p",null,"Then we can get the key from the function."),(0,i.kt)("h2",{id:"highlights-of-recent-features"},"Highlights of Recent Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5666"},"mqtt-proxy plugin supports using route's upstream"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5675"},"APISIX Supports resolve default value when environment not set"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kevinw66"},"kevinw66"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5653"},"New rocketmq-logger plugin, which send log to rocketmq"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yuz10"},"yuz10"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5695"},"APISIX wasm allows running in the rewrite phase"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5740"},"Add http_server_location_configuration_snippet configuration"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zlhgo"},"zlhgo"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5768"},"APISIX stream subsystem supports logging"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bisakhmondal"},"bisakhmondal"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5734"},"Add OPA plugin to support API access control using OPA services"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bzp2010"},"bzp2010"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5745"},"Integrates HashiCorp Vault with APISIX jwt-auth authentication plugin"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bisakhmondal"},"bisakhmondal"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/pull/2231"},"Dashboard supports configuring the use of POST form data as an advanced match condition"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bzp2010"},"bzp2010"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/794"},"Panic caused by ApisixUpstream resources without spec fields can be avoided in Apache APISIX Ingresss"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Brhetty"},"Brhetty"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/779"},"Add regular matching support for Ingress resources in Apache APISIX Ingress"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lxm"},"lxm"),"\uff09"))),(0,i.kt)("p",null,"The Apache APISIX project website and the Github issue have accumulated a wealth of documentation and experience, so if you encounter problems, you can read the documentation, search the issue with keywords, or participate in the discussion on the issue to put forward your own ideas and practical experience."),(0,i.kt)("h2",{id:"recent-blog-recommendations"},"Recent Blog Recommendations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/17/exposure-istio-with-apisix-ingress"},"Secure Exposure of Istio Services with APISIX Ingress"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"This article shows you step by step how to use Istio Service Mesh and Apache APISIX, to expose services in a Service Mesh-enabled Kubernetes cluster to the outside of the cluster through very detailed steps.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/15/deploy-apisix-in-kubernetes"},"How to Easily Deploy Apache APISIX in Kubernetes"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"Apache APISIX currently supports multiple ways to install and deploy. This article focuses on how to deploy Apach APISIX and APISIX-Dashboard in a Kubernetes environment.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/13/monitor-apisix-ingress-controller-with-prometheus"},"Monitoring APISIX Ingress Controller with Prometheus"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"This article introduces the relevant steps of how to use Prometheus to monitor APISIX Ingress Controller and the display effect of some indicators.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/10/integrate-keycloak-auth-in-apisix"},"How to Integrate Keycloak for Authentication with Apache APISIX"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"This article shows you how to use OpenID-Connect protocol and Keycloak for identity authentication in Apache APISIX through detailed steps.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/08/apisix-integrate-rocketmq-logger-plugin"},"Apache APISIX & RocketMQ Helps User API Log Monitoring Capabilities"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"This article will introduce the latest integration of Apache APISIX and Apache RocketMQ rocketmq-logger plug-in features and use. With this plug-in, you can connect to the RocketMQ cluster more easily when using Apache APISIX.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/07/apisix-integrate-skywalking-plugin"},"Apache APISIX Integrates with SkyWalking to Create a Full Range of Log Processing"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"This paper mainly introduces two Apache APISIX integrated SkyWalking log plug-ins to provide a more convenient operation and environment for log processing in Apache APISIX."))))}h.isMDXComponent=!0}}]);