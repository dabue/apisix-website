"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67435],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,h=m["".concat(u,".").concat(c)]||m[c]||s[c]||l;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58499:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i={title:"limit-req"},o=void 0,u={unversionedId:"plugins/limit-req",id:"version-2.10/plugins/limit-req",isDocsHomePage:!1,title:"limit-req",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10/plugins/limit-req.md",sourceDirName:"plugins",slug:"/plugins/limit-req",permalink:"/docs/apisix/2.10/plugins/limit-req",editUrl:null,tags:[],version:"2.10",frontMatter:{title:"limit-req"},sidebar:"version-2.10/docs",previous:{title:"consumer-restriction",permalink:"/docs/apisix/2.10/plugins/consumer-restriction"},next:{title:"limit-conn",permalink:"/docs/apisix/2.10/plugins/limit-conn"}},p=[{value:"Summary",id:"summary",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Example",id:"example",children:[{value:"How to enable on the <code>route</code> or <code>service</code>",id:"how-to-enable-on-the-route-or-service",children:[]},{value:"How to enable on the <code>consumer</code>",id:"how-to-enable-on-the-consumer",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],d={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},"Attributes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example"},"Example"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#how-to-enable-on-the-route-or-service"},"How to enable on the ",(0,l.kt)("inlineCode",{parentName:"a"},"route")," or ",(0,l.kt)("inlineCode",{parentName:"a"},"service"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#how-to-enable-on-the-consumer"},"How to enable on the ",(0,l.kt)("inlineCode",{parentName:"a"},"consumer"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-plugin"},"Disable Plugin"))),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,'limit request rate using the "leaky bucket" method.'),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rate"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"rate > 0"),(0,l.kt)("td",{parentName:"tr",align:null},"the specified request rate (number per second) threshold. Requests exceeding this rate (and below ",(0,l.kt)("inlineCode",{parentName:"td"},"burst"),") will get delayed to conform to the rate.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"burst"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"burst >= 0"),(0,l.kt)("td",{parentName:"tr",align:null},"the number of excessive requests per second allowed to be delayed. Requests exceeding this hard limit will get rejected immediately.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'["remote_addr", "server_addr", "http_x_real_ip", "http_x_forwarded_for", "consumer_name"]'),(0,l.kt)("td",{parentName:"tr",align:null},'the user specified key to limit the rate, now accept those as key: "remote_addr"(client\'s IP), "server_addr"(server\'s IP), "X-Forwarded-For/X-Real-IP" in request header, "consumer_name"(consumer\'s username).')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"503"),(0,l.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,l.kt)("td",{parentName:"tr",align:null},"The HTTP status code returned when the request exceeds the threshold is rejected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"non-empty"),(0,l.kt)("td",{parentName:"tr",align:null},"The response body returned when the request exceeds the threshold is rejected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodelay"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"If nodelay flag is true, bursted requests will not get delayed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable plugin degradation when the limit-req function is temporarily unavailable. Allow requests to continue when the value is set to true, default false.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Key can be customized by the user, only need to modify a line of code of the plug-in to complete.  It is a security consideration that is not open in the plugin.")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"how-to-enable-on-the-route-or-service"},"How to enable on the ",(0,l.kt)("inlineCode",{parentName:"h3"},"route")," or ",(0,l.kt)("inlineCode",{parentName:"h3"},"service")),(0,l.kt)("p",null,"Take ",(0,l.kt)("inlineCode",{parentName:"p"},"route")," as an example (the use of ",(0,l.kt)("inlineCode",{parentName:"p"},"service")," is the same method), enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"limit-req")," plugin on the specified route."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-req": {\n            "rate": 1,\n            "burst": 2,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"You also can complete the above operation through the web interface, first add a route, then add limit-req plugin:\n",(0,l.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.10/docs/assets/images/plugin/limit-req-1.png",alt:"add plugin"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Test Plugin")),(0,l.kt)("p",null,"The above configuration limits the request rate to 1 per second. If it is greater than 1 and less than 3, the delay will be added. If the rate exceeds 3, it will be rejected:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,l.kt)("p",null,"When you exceed, you will receive a response header with a 503 return code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,l.kt)("p",null,"At the same time, you set the property ",(0,l.kt)("inlineCode",{parentName:"p"},"rejected_msg")," to ",(0,l.kt)("inlineCode",{parentName:"p"},'"Requests are too frequent, please try again later."')," , when you exceed, you will receive a response body like below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n{"error_msg":"Requests are too frequent, please try again later."}\n')),(0,l.kt)("p",null,"This means that the limit req plugin is in effect."),(0,l.kt)("h3",{id:"how-to-enable-on-the-consumer"},"How to enable on the ",(0,l.kt)("inlineCode",{parentName:"h3"},"consumer")),(0,l.kt)("p",null,"To enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"limit-req")," plugin on the consumer, it needs to be used together with the authorization plugin. Here, the key-auth authorization plugin is taken as an example."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Bind the ",(0,l.kt)("inlineCode",{parentName:"li"},"limit-req")," plugin to the consumer")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "consumer_jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        },\n        "limit-req": {\n            "rate": 1,\n            "burst": 1,\n            "rejected_code": 403,\n            "key": "consumer_name"\n        }\n    }\n}\'\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("inlineCode",{parentName:"li"},"route")," and enable the ",(0,l.kt)("inlineCode",{parentName:"li"},"key-auth")," plugin")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Test Plugin")),(0,l.kt)("p",null,"The value of ",(0,l.kt)("inlineCode",{parentName:"p"},"rate + burst")," is not exceeded."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html -H 'apikey: auth-jack'\nHTTP/1.1 200 OK\n......\n")),(0,l.kt)("p",null,"When the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"rate + burst")," is exceeded."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html -H 'apikey: auth-jack'\nHTTP/1.1 403 Forbidden\n.....\n<html>\n<head><title>403 Forbidden</title></head>\n<body>\n<center><h1>403 Forbidden</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,l.kt)("p",null,"Explains that the ",(0,l.kt)("inlineCode",{parentName:"p"},"limit-req")," plugin tied to ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," has taken effect."),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"When you want to disable the limit req plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"Remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"limit-req")," plugin on ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "consumer_jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"The limit req plugin has been disabled now. It works for other plugins."))}s.isMDXComponent=!0}}]);