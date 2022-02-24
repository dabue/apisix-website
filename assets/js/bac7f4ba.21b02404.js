"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42643],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22638:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l={title:"response-rewrite"},o=void 0,p={unversionedId:"plugins/response-rewrite",id:"version-2.7/plugins/response-rewrite",isDocsHomePage:!1,title:"response-rewrite",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.7/plugins/response-rewrite.md",sourceDirName:"plugins",slug:"/plugins/response-rewrite",permalink:"/docs/apisix/2.7/plugins/response-rewrite",editUrl:null,tags:[],version:"2.7",frontMatter:{title:"response-rewrite"},sidebar:"version-2.7/docs",previous:{title:"ext-plugin-post-req",permalink:"/docs/apisix/2.7/plugins/ext-plugin-post-req"},next:{title:"proxy-rewrite",permalink:"/docs/apisix/2.7/plugins/proxy-rewrite"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]},{value:"Attention",id:"attention",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},(0,i.kt)("strong",{parentName:"a"},"Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},(0,i.kt)("strong",{parentName:"a"},"Attributes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,i.kt)("strong",{parentName:"a"},"How To Enable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-plugin"},(0,i.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,i.kt)("strong",{parentName:"a"},"Disable Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attention"},(0,i.kt)("strong",{parentName:"a"},"Attention")))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,"response rewrite plugin, rewrite the content returned by the upstream as well as Apache APISIX itself."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"scenario"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"can set ",(0,i.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-*")," series field to support CORS(Cross-origin Resource Sharing)."),(0,i.kt)("li",{parentName:"ol"},"we can set customized ",(0,i.kt)("inlineCode",{parentName:"li"},"status_code")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Location")," field in header to achieve redirect, you can also use ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/2.7/plugins/redirect"},"redirect")," plugin if you just want a redirection.")),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"status_code"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"[200, 598]"),(0,i.kt)("td",{parentName:"tr",align:null},"New ",(0,i.kt)("inlineCode",{parentName:"td"},"status code")," to client, keep the original response code by default.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"body"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"New ",(0,i.kt)("inlineCode",{parentName:"td"},"body")," to client, and the content-length will be reset too.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"body_base64"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Identify if ",(0,i.kt)("inlineCode",{parentName:"td"},"body")," in configuration need base64 decoded before rewrite to client.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"headers"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Set the new ",(0,i.kt)("inlineCode",{parentName:"td"},"headers")," for client, can set up multiple. If it exists already from upstream, will rewrite the header, otherwise will add the header. You can set the corresponding value to an empty string to remove a header. The value can contain Nginx variables in ",(0,i.kt)("inlineCode",{parentName:"td"},"$var")," format, like ",(0,i.kt)("inlineCode",{parentName:"td"},"$remote_addr $balancer_ip"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"vars"),(0,i.kt)("td",{parentName:"tr",align:null},"array[]"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"A DSL to evaluate with the given ngx.var. See ",(0,i.kt)("inlineCode",{parentName:"td"},"vars")," ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr#operator-list"},"lua-resty-expr"),". if the ",(0,i.kt)("inlineCode",{parentName:"td"},"vars")," is empty, then all rewrite operations will be executed unconditionally")))),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("p",null,"Here's an example, enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"response-rewrite")," plugin on the specified route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "plugins": {\n        "response-rewrite": {\n            "body": "{\\"code\\":\\"ok\\",\\"message\\":\\"new json body\\"}",\n            "headers": {\n                "X-Server-id": 3,\n                "X-Server-status": "on",\n                "X-Server-balancer_addr": "$balancer_ip:$balancer_port"\n            },\n            "vars":[\n                [ "status","==","200" ]\n            ]\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("p",null,"Testing based on the above examples :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET -i  http://127.0.0.1:9080/test/index.html\n")),(0,i.kt)("p",null,"It will output like below,no matter what kind of content from upstream, the ",(0,i.kt)("inlineCode",{parentName:"p"},"vars")," will make sure that only rewrite response that http status is ",(0,i.kt)("inlineCode",{parentName:"p"},"200"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nHTTP/1.1 200 OK\nDate: Sat, 16 Nov 2019 09:15:12 GMT\nTransfer-Encoding: chunked\nConnection: keep-alive\nX-Server-id: 3\nX-Server-status: on\nX-Server-balancer_addr: 127.0.0.1:80\n\n{"code":"ok","message":"new json body"}\n')),(0,i.kt)("p",null,"This means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"response-rewrite")," plugin is in effect."),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"When you want to disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"response-rewrite")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"response-rewrite")," plugin has been disabled now. It works for other plugins."),(0,i.kt)("h2",{id:"attention"},"Attention"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ngx.exit")," will interrupt the execution of the current request and return status code to Nginx."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Miss-you/img/picgo/20201113010623.png",alt:null})),(0,i.kt)("p",null,"However, if you execute ",(0,i.kt)("inlineCode",{parentName:"p"},"ngx.exit")," during the access phase, it only interrupts the request processing phase, and the response phase will still process it, i.e. if you configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"response-rewrite")," plugin, it will force overwriting of your response information (e.g. response status code)."))}d.isMDXComponent=!0}}]);