"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38274],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=i,m=f["".concat(u,".").concat(d)]||f[d]||c[d]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75230:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o={title:"The internal of apisix java plugin runner"},l=void 0,u={unversionedId:"the-internal-of-apisix-java-plugin-runner",id:"version-0.2.0/the-internal-of-apisix-java-plugin-runner",isDocsHomePage:!1,title:"The internal of apisix java plugin runner",description:"\x3c!--",source:"@site/docs-apisix-java-plugin-runner_versioned_docs/version-0.2.0/the-internal-of-apisix-java-plugin-runner.md",sourceDirName:".",slug:"/the-internal-of-apisix-java-plugin-runner",permalink:"/zh/docs/java-plugin-runner/the-internal-of-apisix-java-plugin-runner",editUrl:null,tags:[],version:"0.2.0",frontMatter:{title:"The internal of apisix java plugin runner"},sidebar:"version-0.2.0/docs",previous:{title:"How it works",permalink:"/zh/docs/java-plugin-runner/how-it-works"}},p=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Communication",id:"communication",children:[]},{value:"Serialization",id:"serialization",children:[]},{value:"Codec",id:"codec",children:[]}],s={toc:p};function c(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article explains the internal design of apisix-java-plugin-runner."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#communication"},"Communication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#serialization"},"Serialization")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#codec"},"Codec"))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The apisix-java-plugin-runner designed as a TCP server built using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/netty/netty"},"netty"),",\nit provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"PluginFilter")," interface for users to implement."),(0,a.kt)("p",null,"Users only need to focus on their business logic, not on the details of how the apisix java plugin runner communicates with APISIX."),(0,a.kt)("p",null,"The inter-process communication between them is depicted by the following diagram."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix-java-plugin-runner@release/0.2.0/docs/assets/images/the-internal-of-apisix-java-plugin-runner.png",alt:"the-internal-of-apisix-java-plugin-runner"})),(0,a.kt)("h2",{id:"communication"},"Communication"),(0,a.kt)("p",null,"apisix-java-plugin-runner and APISIX use the Unix Domain Socket for inter-process communication,\nso they need to be deployed in the same instance."),(0,a.kt)("p",null,"apisix-java-plugin-runner is managed by APISIX. APISIX starts the apisix-java-plugin-runner when it starts and ends it when it\nends. if the apisix-java-plugin-runner quits in the middle, APISIX will restart it automatically."),(0,a.kt)("h2",{id:"serialization"},"Serialization"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/flatbuffers"},"flatbuffers")),(0,a.kt)("p",null,"FlatBuffers is a cross platform serialization library architected for maximum memory efficiency.\nIt allows you to directly access serialized data without parsing/unpacking it first, while still having great forward/backward compatibility."),(0,a.kt)("p",null,"You can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/ext-plugin-proto/blob/main/ext-plugin.fbs"},"ext-plugin.fbs"),"\nschema file to see how Lua and Java layout the serialized objects."),(0,a.kt)("h2",{id:"codec"},"Codec"),(0,a.kt)("p",null,"apisix-java-plugin-runner and APISIX use a private binary protocol for coding and decoding.\nThe protocol format is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1 byte of type + 3 bytes of length + data\n")),(0,a.kt)("p",null,"The type can be 0 ~ 7, and the length can be [0, 8M). The length of data is determined by length."),(0,a.kt)("p",null,"The current type takes the following values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 means error"),(0,a.kt)("li",{parentName:"ul"},"1 means prepare_conf"),(0,a.kt)("li",{parentName:"ul"},"2 means http_req_call")),(0,a.kt)("p",null,"The binary data generated by the flatbuffer serialization is placed in the data segment."))}c.isMDXComponent=!0}}]);