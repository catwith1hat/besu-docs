"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[13553],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(a),h=r,k=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},90525:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={title:"Create a multi-tenant network",sidebar_position:2,description:"Configure multi-tenancy",tags:["private networks"]},o="Configure a multi-tenant node",s={unversionedId:"private-networks/tutorials/privacy/multi-tenancy",id:"version-23.4.1/private-networks/tutorials/privacy/multi-tenancy",title:"Create a multi-tenant network",description:"Configure multi-tenancy",source:"@site/versioned_docs/version-23.4.1/private-networks/tutorials/privacy/multi-tenancy.md",sourceDirName:"private-networks/tutorials/privacy",slug:"/private-networks/tutorials/privacy/multi-tenancy",permalink:"/stable/private-networks/tutorials/privacy/multi-tenancy",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/tutorials/privacy/multi-tenancy.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1691170824,formattedLastUpdatedAt:"Aug 4, 2023",sidebarPosition:2,frontMatter:{title:"Create a multi-tenant network",sidebar_position:2,description:"Configure multi-tenancy",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a privacy enabled network using the Quickstart",permalink:"/stable/private-networks/tutorials/privacy/"},next:{title:"Use the web3js-quorum multi-node example",permalink:"/stable/private-networks/tutorials/privacy/web3js-quorum"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Generate a private and public key pair",id:"1-generate-a-private-and-public-key-pair",level:2},{value:"2. Generate Tessera keys",id:"2-generate-tessera-keys",level:2},{value:"3. Update the Tessera configuration file",id:"3-update-the-tessera-configuration-file",level:2},{value:"4. Start Tessera",id:"4-start-tessera",level:2},{value:"5. Start Besu Node-1",id:"5-start-besu-node-1",level:2},{value:"6. Generate the tenant JWTs",id:"6-generate-the-tenant-jwts",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-a-multi-tenant-node"},"Configure a multi-tenant node"),(0,r.kt)("p",null,"You can configure Besu and associated Tessera node in a privacy-enabled network to host ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/concepts/privacy/multi-tenancy"},"multiple tenants"),"."),(0,r.kt)("p",null,"In this tutorial we'll add tenants to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-1")," Besu and Tessera node in a ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/tutorials/privacy/"},"privacy-enabled network"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"IBFT-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u251c\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n    \u251c\u2500\u2500 Tessera\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This tutorial uses ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/use-besu-api/authenticate#jwt-public-key-authentication"},"JWT public key authentication")," to create the tenant's JWT, but you can also use ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/use-besu-api/authenticate#username-and-password-authentication"},"username and password authentication"),".")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/stable/private-networks/tutorials/privacy/"},"Privacy-enabled network"),".")),(0,r.kt)("h2",{id:"1-generate-a-private-and-public-key-pair"},"1. Generate a private and public key pair"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-1")," directory, ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/use-besu-api/authenticate#1-generate-a-private-and-public-key-pair"},"generate the private and public key pair"),". The key pair, which must be in ",(0,r.kt)("inlineCode",{parentName:"p"},".pem")," format, belongs to the operator who uses the key pair to authenticate the ",(0,r.kt)("a",{parentName:"p",href:"#6-generate-the-tenant-jwts"},"tenant JWTs"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This step is not required when using ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/use-besu-api/authenticate#username-and-password-authentication"},"username and password authentication")," to create the required JWTs.")),(0,r.kt)("h2",{id:"2-generate-tessera-keys"},"2. Generate Tessera keys"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-1/Tessera")," directory, ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/tutorials/privacy/#2-generate-tessera-keys"},"generate a public/private key pair for each tenant"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The instructions creates an unlocked private key, meaning you do not need a password to decrypt the private key file.")),(0,r.kt)("p",null,"Name the key pair ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeKey2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeKey3"),"."),(0,r.kt)("h2",{id:"3-update-the-tessera-configuration-file"},"3. Update the Tessera configuration file"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-1/Tessera")," directory, update the ",(0,r.kt)("inlineCode",{parentName:"p"},"tessera.conf")," file by adding the new key pairs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9101",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9102",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9103",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9303"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      },\n      {\n        "privateKeyPath": "nodeKey2.key",\n        "publicKeyPath": "nodeKey2.pub"\n      },\n      {\n        "privateKeyPath": "nodeKey3.key",\n        "publicKeyPath": "nodeKey3.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Besu requires ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/HowTo/Configure/Orion-Mode"},(0,r.kt)("inlineCode",{parentName:"a"},"orion")," mode"),". Add the line ",(0,r.kt)("inlineCode",{parentName:"p"},'"mode": "orion",')," to the Tessera configuration file.")),(0,r.kt)("h2",{id:"4-start-tessera"},"4. Start Tessera"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/tutorials/privacy/#4-start-the-tessera-nodes"},"Start the Tessera nodes")," and specify the configuration file."),(0,r.kt)("h2",{id:"5-start-besu-node-1"},"5. Start Besu Node-1"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-1")," directory, start Besu Node-1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --rpc-http-authentication-enabled --rpc-http-authentication-jwt-public-key-file=publicKey.pem --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --privacy-enabled --privacy-url=http://127.0.0.1:9102 --privacy-multi-tenancy-enabled --min-gas-price=0\n')),(0,r.kt)("p",null,"The command line specifies privacy options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#rpc-http-authentication-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-authentication-enabled"))," enables authentication for JSON-RPC APIs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#rpc-http-authentication-jwt-public-key-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-authentication-jwt-public-key-file"))," specifies the Operator's ",(0,r.kt)("a",{parentName:"li",href:"#1-generate-a-private-and-public-key-pair"},"public key file"),". Used to authenticate the ",(0,r.kt)("a",{parentName:"li",href:"#6-generate-the-tenant-jwts"},"tenant JWTs"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/private-networks/reference/cli/options#privacy-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-enabled"))," enables privacy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/private-networks/reference/cli/options#privacy-url"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-url"))," specifies the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.tessera.consensys.net/Reference/TesseraAPI"},"Quorum to Tessera (Q2T)")," server address of the Tessera node (",(0,r.kt)("inlineCode",{parentName:"li"},"Q2T")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"tessera.conf"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/private-networks/reference/cli/options#privacy-multi-tenancy-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-multi-tenancy-enabled"))," enables multi-tenancy.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#rpc-http-authentication-jwt-public-key-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-authentication-jwt-public-key-file"))," is only required when using ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/use-besu-api/authenticate#jwt-public-key-authentication"},"JWT public key authentication"),". If using ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/use-besu-api/authenticate#username-and-password-authentication"},"username and password authentication"),", use ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#rpc-http-authentication-credentials-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-authentication-credentials-file"))," instead.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/tutorials/privacy/#6-start-besu-node-2"},"Start the remaining Besu nodes"),"."),(0,r.kt)("h2",{id:"6-generate-the-tenant-jwts"},"6. Generate the tenant JWTs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/use-besu-api/authenticate#2-create-the-jwt"},"Generate the JWT")," for each tenant and specify the ",(0,r.kt)("a",{parentName:"p",href:"#2-generate-tessera-keys"},"tenant's Tessera public key")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"privacyPublicKey")," field."),(0,r.kt)("p",null,"Ensure you apply the appropriate ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/use-besu-api/authenticate#json-rpc-permissions"},"JSON-RPC API permissions")," to the token. For example, ensure you enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIV")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EEA")," APIs for privacy."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This step is not required when using ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/use-besu-api/authenticate#username-and-password-authentication"},"username and password authentication")," to create the required JWTs.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/use-besu-api/authenticate#using-an-authentication-token-to-make-requests"},"Use the authentication token to make requests"),"."),(0,r.kt)("p",null,"*","[JWT]",": JSON Web Token"))}d.isMDXComponent=!0}}]);