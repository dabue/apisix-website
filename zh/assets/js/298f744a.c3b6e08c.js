"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50471],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,c(c({ref:t},o),{},{components:n})):r.createElement(h,c({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44488:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),c={title:"\u538b\u529b\u6d4b\u8bd5"},p=void 0,s={unversionedId:"benchmark",id:"version-2.11/benchmark",isDocsHomePage:!1,title:"\u538b\u529b\u6d4b\u8bd5",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.11/benchmark.md",sourceDirName:".",slug:"/benchmark",permalink:"/zh/docs/apisix/2.11/benchmark",editUrl:null,tags:[],version:"2.11",frontMatter:{title:"\u538b\u529b\u6d4b\u8bd5"},sidebar:"version-2.11/docs",previous:{title:"\u6279\u5904\u7406\u5668",permalink:"/zh/docs/apisix/2.11/batch-processor"},next:{title:"\u5b89\u88c5\u4f9d\u8d56",permalink:"/zh/docs/apisix/2.11/install-dependencies"}},l=[{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",children:[]},{value:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406",id:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406",children:[]},{value:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406\uff0c\u5f00\u542f 2 \u4e2a\u63d2\u4ef6",id:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406\uff0c\u5f00\u542f-2-\u4e2a\u63d2\u4ef6",children:[]}],o={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u6d4b\u8bd5\u73af\u5883"},"\u6d4b\u8bd5\u73af\u5883"),(0,i.kt)("p",null,"\u4f7f\u7528\u8c37\u6b4c\u4e91\u7684\u670d\u52a1\u5668\u8fdb\u884c\u6d4b\u8bd5\uff0c\u578b\u53f7\u4e3a n1-highcpu-8 (8 vCPUs, 7.2 GB memory)"),(0,i.kt)("p",null,"\u6211\u4eec\u6700\u591a\u53ea\u4f7f\u7528 4 \u6838\u53bb\u8fd0\u884c APISIX, \u5269\u4e0b\u7684 4 \u6838\u7528\u4e8e\u7cfb\u7edf\u548c\u538b\u529b\u6d4b\u8bd5\u5de5\u5177 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wg/wrk"},"wrk"),"\u3002"),(0,i.kt)("h3",{id:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406"},"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406"),(0,i.kt)("p",null,"\u6211\u4eec\u628a APISIX \u5f53\u505a\u53cd\u5411\u4ee3\u7406\u6765\u4f7f\u7528\uff0c\u4e0d\u5f00\u542f\u4efb\u4f55\u63d2\u4ef6\uff0c\u54cd\u5e94\u4f53\u7684\u5927\u5c0f\u4e3a 1KB\u3002"),(0,i.kt)("h4",{id:"qps"},"QPS"),(0,i.kt)("p",null,"\u4e0b\u56fe\u4e2d x \u8f74\u4e3a CPU \u7684\u4f7f\u7528\u4e2a\u6570\uff0cy \u8f74\u4e3a\u6bcf\u79d2\u5904\u7406\u7684\u8bf7\u6c42\u6570\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.11/docs/assets/images/benchmark-1.jpg",alt:"benchmark-1"})),(0,i.kt)("h4",{id:"\u5ef6\u65f6"},"\u5ef6\u65f6"),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f y \u8f74\u5ef6\u65f6\u7684\u5355\u4f4d\u662f",(0,i.kt)("strong",{parentName:"p"},"\u5fae\u79d2(\u03bcs)"),"\uff0c\u800c\u4e0d\u662f\u6beb\u79d2\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.11/docs/assets/images/latency-1.jpg",alt:"latency-1"})),(0,i.kt)("h4",{id:"\u706b\u7130\u56fe"},"\u706b\u7130\u56fe"),(0,i.kt)("p",null,"\u706b\u7130\u56fe\u7684\u91c7\u6837\u7ed3\u679c:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.11/docs/assets/images/flamegraph-1.jpg",alt:"flamegraph-1"})),(0,i.kt)("h3",{id:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406\uff0c\u5f00\u542f-2-\u4e2a\u63d2\u4ef6"},"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406\uff0c\u5f00\u542f 2 \u4e2a\u63d2\u4ef6"),(0,i.kt)("p",null,"\u6211\u4eec\u628a APISIX \u5f53\u505a\u53cd\u5411\u4ee3\u7406\u6765\u4f7f\u7528\uff0c\u5f00\u542f\u9650\u901f\u548c prometheus \u63d2\u4ef6\uff0c\u54cd\u5e94\u4f53\u7684\u5927\u5c0f\u4e3a 1KB\u3002"),(0,i.kt)("h4",{id:"qps-1"},"QPS"),(0,i.kt)("p",null,"\u4e0b\u56fe\u4e2d x \u8f74\u4e3a CPU \u7684\u4f7f\u7528\u4e2a\u6570\uff0cy \u8f74\u4e3a\u6bcf\u79d2\u5904\u7406\u7684\u8bf7\u6c42\u6570\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.11/docs/assets/images/benchmark-2.jpg",alt:"benchmark-2"})),(0,i.kt)("h4",{id:"latency"},"Latency"),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f y \u8f74\u5ef6\u65f6\u7684\u5355\u4f4d\u662f",(0,i.kt)("strong",{parentName:"p"},"\u5fae\u79d2(\u03bcs)"),"\uff0c\u800c\u4e0d\u662f\u6beb\u79d2\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.11/docs/assets/images/latency-2.jpg",alt:"latency-2"})),(0,i.kt)("h4",{id:"\u706b\u7130\u56fe-1"},"\u706b\u7130\u56fe"),(0,i.kt)("p",null,"\u706b\u7130\u56fe\u7684\u91c7\u6837\u7ed3\u679c:\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.11/docs/assets/images/flamegraph-2.jpg",alt:"\u706b\u7130\u56fe\u91c7\u6837\u7ed3\u679c"})))}u.isMDXComponent=!0}}]);