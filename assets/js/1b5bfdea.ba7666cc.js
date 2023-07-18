"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[96790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,p(p({ref:t},c),{},{components:n})):o.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={description:"Hyperledger Besu API",tags:["public networks","private networks"]},p="Access the Hyperledger Besu API",i={unversionedId:"public-networks/how-to/use-besu-api/index",id:"public-networks/how-to/use-besu-api/index",title:"Access the Hyperledger Besu API",description:"Hyperledger Besu API",source:"@site/docs/public-networks/how-to/use-besu-api/index.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/",permalink:"/development/public-networks/how-to/use-besu-api/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/use-besu-api/index.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1689691910,formattedLastUpdatedAt:"Jul 18, 2023",frontMatter:{description:"Hyperledger Besu API",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"How to",permalink:"/development/public-networks/how-to"},next:{title:"Use JSON-RPC over HTTP, WS, and IPC",permalink:"/development/public-networks/how-to/use-besu-api/json-rpc"}},s={},l=[{value:"Enable API access",id:"enable-api-access",level:2},{value:"Service hosts",id:"service-hosts",level:2},{value:"Service ports",id:"service-ports",level:2},{value:"Socket path",id:"socket-path",level:2},{value:"Host allowlist",id:"host-allowlist",level:2},{value:"Not supported by Besu",id:"not-supported-by-besu",level:2},{value:"Account management",id:"account-management",level:3},{value:"Protocols",id:"protocols",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"access-the-hyperledger-besu-api"},"Access the Hyperledger Besu API"),(0,r.kt)("p",null,"Access the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/api/"},"Hyperledger Besu API")," using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/json-rpc"},"JSON-RPC over HTTP, WebSocket, or IPC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/rpc-pubsub"},"RPC Pub/Sub over WebSockets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/graphql"},"GraphQL over HTTP"),".")),(0,r.kt)("p",null,"The following sections provide information about JSON-RPC, RPC Pub/Sub, and GraphQL."),(0,r.kt)("h2",{id:"enable-api-access"},"Enable API access"),(0,r.kt)("p",null,"To enable API access, use the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled")),", ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-ws-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--ws-http-enabled")),", ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#graphql-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--graphql-http-enabled")),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"--Xrpc-ipc-enabled")," options."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"--Xrpc-ipc-enabled")," is an early access option.")),(0,r.kt)("h2",{id:"service-hosts"},"Service hosts"),(0,r.kt)("p",null,"To specify the host the API service listens on, use the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-http-host"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-host")),", ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-ws-host"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-host")),", and ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#graphql-http-host"},(0,r.kt)("inlineCode",{parentName:"a"},"--graphql-http-host"))," options. The default host is ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,r.kt)("p",null,"To allow remote connections, set the host to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Setting the host to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," exposes the API service connection on your node to any remote connection. In a production environment, ensure you use a firewall to avoid exposing your node to the internet.")),(0,r.kt)("h2",{id:"service-ports"},"Service ports"),(0,r.kt)("p",null,"To specify the port the API service listens on, use the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-http-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-port")),", ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-ws-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-port")),", and ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#graphql-http-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--graphql-http-port"))," options."),(0,r.kt)("p",null,"The default ports are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8545 for JSON-RPC over HTTP."),(0,r.kt)("li",{parentName:"ul"},"8546 for JSON-RPC over WebSocket."),(0,r.kt)("li",{parentName:"ul"},"8547 for GraphQL over HTTP.")),(0,r.kt)("p",null,"Ports must be ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/connect/configure-ports"},"exposed appropriately"),"."),(0,r.kt)("h2",{id:"socket-path"},"Socket path"),(0,r.kt)("p",null,"To specify the socket path for the IPC socket, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--Xrpc-ipc-path")," option. The default path is ",(0,r.kt)("inlineCode",{parentName:"p"},"besu.ipc")," in the Besu data directory."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"--Xrpc-ipc-path")," is an early access option.")),(0,r.kt)("h2",{id:"host-allowlist"},"Host allowlist"),(0,r.kt)("p",null,"To prevent DNS rebinding attacks, Besu checks incoming HTTP request host headers, WebSocket connections, and GraphQL requests. Besu accepts requests only when hostnames specified using the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#host-allowlist"},(0,r.kt)("inlineCode",{parentName:"a"},"--host-allowlist"))," option matches the request host headers. By default, Besu accepts requests and connections from ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This isn't a permissioning feature. To restrict access to the API, we recommend using the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/use-besu-api/authenticate"},"Besu authentication mechanism")," with username and password authentication or JWT public key authentication.")),(0,r.kt)("p",null,"If your application publishes RPC ports, specify the hostnames when starting Besu."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --host-allowlist=example.com\n")),(0,r.kt)("p",null,"Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"--host-allowlist")," to effectively disable host protection."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"--host-allowlist")," is not recommended for production code.")),(0,r.kt)("h2",{id:"not-supported-by-besu"},"Not supported by Besu"),(0,r.kt)("h3",{id:"account-management"},"Account management"),(0,r.kt)("p",null,"Account management relies on private key management in the client, which is not supported by Besu."),(0,r.kt)("p",null,"To send signed transactions, use ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/api/#eth_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendRawTransaction")),". ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," is not implemented."),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/send-transactions#use-wallets-for-key-management"},"account management"),", use third-party wallets."),(0,r.kt)("h3",{id:"protocols"},"Protocols"),(0,r.kt)("p",null,"Besu does not support the Whisper and Swarm protocols."))}d.isMDXComponent=!0}}]);