"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57108],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(n),h=r,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,l(l({ref:e},u),{},{components:n})):a.createElement(m,l({ref:e},u))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98190:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l={title:"openid-connect"},o=void 0,p={unversionedId:"plugins/openid-connect",id:"version-2.5/plugins/openid-connect",isDocsHomePage:!1,title:"openid-connect",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.5/plugins/openid-connect.md",sourceDirName:"plugins",slug:"/plugins/openid-connect",permalink:"/docs/apisix/2.5/plugins/openid-connect",editUrl:null,tags:[],version:"2.5",frontMatter:{title:"openid-connect"},sidebar:"version-2.5/docs",previous:{title:"wolf-rbac",permalink:"/docs/apisix/2.5/plugins/wolf-rbac"},next:{title:"hmac-auth",permalink:"/docs/apisix/2.5/plugins/hmac-auth"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Modes of operation",id:"modes-of-operation",children:[{value:"Token Introspection",id:"token-introspection",children:[]},{value:"Introspecting with public key",id:"introspecting-with-public-key",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],u={toc:s};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},(0,i.kt)("strong",{parentName:"a"},"Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},(0,i.kt)("strong",{parentName:"a"},"Attributes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#modes-of-operation"},(0,i.kt)("strong",{parentName:"a"},"Modes of operation")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#token-introspection"},(0,i.kt)("strong",{parentName:"a"},"Token Introspection"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#introspecting-with-public-key"},(0,i.kt)("strong",{parentName:"a"},"Introspecting with public key"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#troubleshooting"},(0,i.kt)("strong",{parentName:"a"},"Troubleshooting")))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,"The OAuth 2 / Open ID Connect(OIDC) plugin provides authentication and introspection capability to APISIX."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_id"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"OAuth client ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_secret"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"OAuth client secret")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"discovery"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the discovery endpoint of the identity server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scope"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"openid"'),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Scope used for the authentication")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"realm"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"apisix"'),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Realm used for the authentication")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bearer_only"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Setting this ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," will check for the authorization header in the request with a bearer token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"logout_path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"/logout"'),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"ngx.var.request_uri"'),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"Timeout in seconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"introspection_endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the token verification endpoint of the identity server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"introspection_endpoint_auth_method"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"client_secret_basic"'),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Authentication method name for token introspection")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"public_key"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The public key to verify the token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"token_signing_alg_values_expected"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Algorithm used to sign the token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"set_access_token_header"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ensure the access token is set in a request header.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"access_token_in_authorization_header"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"If set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", ensure that the access token is set in the ",(0,i.kt)("inlineCode",{parentName:"td"},"Authorization")," header, otherwise use the ",(0,i.kt)("inlineCode",{parentName:"td"},"X-Access-Token")," header.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"set_id_token_header"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ensure the ID token, if available, is set in the ",(0,i.kt)("inlineCode",{parentName:"td"},"X-ID-Token")," request header.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"set_userinfo_header"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ensure the UserInfo object, if available, is set in the ",(0,i.kt)("inlineCode",{parentName:"td"},"X-Userinfo")," request header.")))),(0,i.kt)("h2",{id:"modes-of-operation"},"Modes of operation"),(0,i.kt)("p",null,"The plugin supports different modes of operation."),(0,i.kt)("p",null,"1) It can be configured to just validate an access token that is expected to be present in a request header.\nIn this case, requests without a token or where the token is invalid are always rejected. This requires\n",(0,i.kt)("inlineCode",{parentName:"p"},"bearer_only")," be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and that either an introspection endpoint has been configured through\n",(0,i.kt)("inlineCode",{parentName:"p"},"introspection_endpoint"),", or that a public key has been configured through ",(0,i.kt)("inlineCode",{parentName:"p"},"public_key"),". See the relevant\nsections below."),(0,i.kt)("p",null,"2) Alternatively, the plugin can also be configured to authenticate a request without a valid token against\nan identity provider by going through the OIDC Authorization Code flow. The plugin then acts as an OIDC Relying Party.\nIn this scenario, when the requesting user has authenticated successfully, the plugin will obtain and manage\nan access token and further user claims on behalf of the user in a session cookie. Subsequent requests that\ncontain the cookie will use the access token stored in the cookie. In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"bearer_only")," must be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"The first option is typically appropriate for service-to-service communication where the requesting side can\nbe reasonably expected to obtain and manage a valid access token by itself. The second option is convenient\nto support web browser interaction with endpoints through a human user that may still need to be authenticated\nwhen accessing for the first time."),(0,i.kt)("p",null,"The plugin can also be configured to support both scenarios by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"bearer_only")," to false, but still configuring\neither an introspection endpoint or a public key. In this case, introspection of an existing token from a request\nheader takes precedence over the Relying Party flow. That is, if a request contains an invalid token, the request\nwill be rejected without redirecting to the ID provider to obtain a valid token."),(0,i.kt)("p",null,"The method used to authenticate a request also affects the headers that can be enforced on the request before\nsending it to upstream. The headers that can be enforced are mentioned below in each relevant section."),(0,i.kt)("h3",{id:"token-introspection"},"Token Introspection"),(0,i.kt)("p",null,"Token introspection helps to validate a request by verifying the token against an Oauth 2 authorization server.\nAs prerequisite, you should create a trusted client in the identity server and generate a valid token(JWT) for introspection.\nThe following image shows an example(successful) flow of the token introspection via the gateway."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.5/docs/assets/images/plugin/oauth-1.png",alt:"token introspection"})),(0,i.kt)("p",null,"The following is the curl command to enable the plugin to an external service.\nThis route will protect ",(0,i.kt)("inlineCode",{parentName:"p"},"https://httpbin.org/get"),"(echo service) by introspecting the token provided in the header of the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n    "proxy-rewrite": {\n      "scheme": "https"\n    },\n    "openid-connect": {\n      "client_id": "api_six_client_id",\n      "client_secret": "client_secret_code",\n      "discovery": "full_URL_of_the_discovery_endpoint",\n      "introspection_endpoint": "full_URL_of_introspection_endpoint",\n      "bearer_only": true,\n      "realm": "master",\n      "introspection_endpoint_auth_method": "client_secret_basic"\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:443": 1\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"The following command can be used to access the new route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET http://127.0.0.1:9080/get -H "Host: httpbin.org" -H "Authorization: Bearer {replace_jwt_token}"\n')),(0,i.kt)("p",null,"In this case, the plugin can enforce that the access token and the UserInfo object get set in respective configured request headers."),(0,i.kt)("h3",{id:"introspecting-with-public-key"},"Introspecting with public key"),(0,i.kt)("p",null,"You can also provide the public key of the JWT token to verify the token. In case if you have provided a public key and\na token introspection endpoint, the public key workflow will be executed instead of verifying with the identity server.\nThis method can be used if you want to reduce additional network calls and to speedup the process."),(0,i.kt)("p",null,"The following configurations shows how to add a public key introspection to a route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n    "proxy-rewrite": {\n      "scheme": "https"\n    },\n    "openid-connect": {\n      "client_id": "api_six_client_id",\n      "client_secret": "client_secret_code",\n      "discovery": "full_URL_of_the_discovery_endpoint",\n      "bearer_only": true,\n      "realm": "master",\n      "token_signing_alg_values_expected": "RS256",\n      "public_key" : "-----BEGIN CERTIFICATE-----\n        {public_key}\n        -----END CERTIFICATE-----"\n}\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:443": 1\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"In this case, the plugin can only enforce that the access token gets set in the configured request headers."),(0,i.kt)("h4",{id:"authentication-through-oidc-relying-party-flow"},"Authentication through OIDC Relying Party flow"),(0,i.kt)("p",null,"When an incoming request does not contain an access token in a header, nor in an appropriate session cookie,\nthe plugin can act as an OIDC Relying Party and redirect to the authorization endpoint of the identity provider\nto go through the OIDC Authorization Code flow; see ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth"},"https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth"),".\nOnce the user has authenticated against the identity provider, the plugin will obtain and manage an access token\nand further information from the identity provider on behalf of the user. The information is currently stored\nin a session cookie that the user agent can submit on subsequent requests. The plugin will recognize the cookie\nand use the information therein to avoid having to go through the flow again."),(0,i.kt)("p",null,"The following command adds this mode of operation to a route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n    "proxy-rewrite": {\n      "scheme": "https"\n    },\n    "openid-connect": {\n      "client_id": "api_six_client_id",\n      "client_secret": "client_secret_code",\n      "discovery": "full_URL_of_the_discovery_endpoint",\n      "bearer_only": false,\n      "realm": "master"\n}\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:443": 1\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"In this case, the plugin can enforce that the access token, the ID token, and the UserInfo object get set in respective configured request headers."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"Check/modify the DNS settings (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),") if APISIX cannot resolve/connect to the identity provider."))}d.isMDXComponent=!0}}]);