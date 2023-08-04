"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[65469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),s=a(86010),o=a(12466),i=a(16550),l=a(91980),p=a(67392),c=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=u(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,p]=m({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),k=(()=>{const e=l??d;return h({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),b(e)}),[p,b,s]),tabValues:s}}var k=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==i&&(d(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:u},o,{className:(0,s.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=b(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",y.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},15619:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),s=a(74866),o=a(85162);const i={title:"Create a privacy enabled network using the Quickstart",sidebar_position:1,description:"Configure Hyperledger Besu privacy",tags:["private networks"]},l="Create a privacy-enabled network",p={unversionedId:"private-networks/tutorials/privacy/index",id:"version-23.4.1/private-networks/tutorials/privacy/index",title:"Create a privacy enabled network using the Quickstart",description:"Configure Hyperledger Besu privacy",source:"@site/versioned_docs/version-23.4.1/private-networks/tutorials/privacy/index.md",sourceDirName:"private-networks/tutorials/privacy",slug:"/private-networks/tutorials/privacy/",permalink:"/stable/private-networks/tutorials/privacy/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/tutorials/privacy/index.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1691170824,formattedLastUpdatedAt:"Aug 4, 2023",sidebarPosition:1,frontMatter:{title:"Create a privacy enabled network using the Quickstart",sidebar_position:1,description:"Configure Hyperledger Besu privacy",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create an Ethash network",permalink:"/stable/private-networks/tutorials/ethash"},next:{title:"Create a multi-tenant network",permalink:"/stable/private-networks/tutorials/privacy/multi-tenancy"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Create Tessera directories",id:"1-create-tessera-directories",level:2},{value:"2. Generate Tessera keys",id:"2-generate-tessera-keys",level:2},{value:"3. Create Tessera configuration files",id:"3-create-tessera-configuration-files",level:2},{value:"4. Start the Tessera nodes",id:"4-start-the-tessera-nodes",level:2},{value:"5. Start Besu Node-1",id:"5-start-besu-node-1",level:2},{value:"6. Start Besu Node-2",id:"6-start-besu-node-2",level:2},{value:"7. Start Besu Node-3",id:"7-start-besu-node-3",level:2},{value:"8. Start Besu Node-4",id:"8-start-besu-node-4",level:2}],u={toc:d},h="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-privacy-enabled-network"},"Create a privacy-enabled network"),(0,r.kt)("p",null,"Configuring a network that supports private transactions requires starting a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/"},"Tessera")," node for each Hyperledger Besu node. Besu command line options associate the Besu node with the Tessera node."),(0,r.kt)("p",null,"This tutorial assumes you have completed setting up an IBFT 2.0 network to the point where you have ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/tutorials/ibft/#5-copy-the-node-private-keys-to-the-node-directories"},"created the genesis file and copied the private keys"),". If not, complete steps 1 to 5 of the ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/tutorials/ibft/"},"Create an IBFT 2.0")," tutorial before continuing."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"To support privacy, ensure your genesis file includes at least the ",(0,r.kt)("inlineCode",{parentName:"p"},"byzantium")," milestone."),(0,r.kt)("p",{parentName:"admonition"},"This tutorial configures a private network using IBFT 2.0 for educational purposes only. IBFT 2.0 requires 4 validators to be Byzantine fault tolerant.")),(0,r.kt)("p",null,"In this tutorial we start Tessera nodes for the four Besu nodes and associate each Besu node with a Tessera node."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.tessera.consensys.net/category/install"},"Install Tessera"),".")),(0,r.kt)("h2",{id:"1-create-tessera-directories"},"1. Create Tessera directories"),(0,r.kt)("p",null,"Inside each ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-*")," directory, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tessera")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"IBFT-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u251c\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n    \u251c\u2500\u2500 Tessera\n")),(0,r.kt)("h2",{id:"2-generate-tessera-keys"},"2. Generate Tessera keys"),(0,r.kt)("p",null,"This example creates an unlocked private key, meaning you do not need a password to decrypt the private key file."),(0,r.kt)("p",null,"In each ",(0,r.kt)("inlineCode",{parentName:"p"},"Tessera")," directory, generate a public/private key pair for the Tessera node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tessera -keygen -filename nodeKey\n")),(0,r.kt)("p",null,"At the prompt, press ",(0,r.kt)("strong",{parentName:"p"},"Enter")," to create an unlocked key."),(0,r.kt)("p",null,"Tessera generates the public/private key pair and saves the keys in the ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeKey.pub")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeKey.key")," files."),(0,r.kt)("h2",{id:"3-create-tessera-configuration-files"},"3. Create Tessera configuration files"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tessera")," directory for each node, create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"tessera.conf"),", with the following configuration:"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"In production environments, only specify ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/HowTo/Configure/TLS/"},(0,r.kt)("inlineCode",{parentName:"a"},"tls"))," as ",(0,r.kt)("inlineCode",{parentName:"p"},"OFF")," if another transport security mechanism, such as WireGuard, is in place.")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Node-1",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9101",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9102",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9103",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9303"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'))),(0,r.kt)(o.Z,{label:"Node-2",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9201",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9202",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9203",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9103"\n    },\n    {\n      "url": "http://localhost:9303"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'))),(0,r.kt)(o.Z,{label:"Node-3",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9301",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9302",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9303",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9103"\n    },\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'))),(0,r.kt)(o.Z,{label:"Node-4",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9401",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9402",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9403",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9103"\n    },\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9303"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n')))),(0,r.kt)("p",null,"In the configuration file, specify:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Different port numbers for the various servers in the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.tessera.consensys.net/HowTo/Configure/TesseraAPI/"},(0,r.kt)("inlineCode",{parentName:"a"},"serverConfigs"))," section."),(0,r.kt)("li",{parentName:"ul"},"The address of the Tessera nodes to discover, in the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.tessera.consensys.net/HowTo/Configure/Peer-discovery/#specify-peers"},(0,r.kt)("inlineCode",{parentName:"a"},"peer"))," section."),(0,r.kt)("li",{parentName:"ul"},"The location of the public/private key pair.")),(0,r.kt)("h2",{id:"4-start-the-tessera-nodes"},"4. Start the Tessera nodes"),(0,r.kt)("p",null,"In each ",(0,r.kt)("inlineCode",{parentName:"p"},"Tessera")," directory, start Tessera specifying the ",(0,r.kt)("a",{parentName:"p",href:"#3-create-tessera-configuration-files"},"configuration file")," created in the previous step:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tessera -configfile tessera.conf\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After starting the first Tessera node and before starting the other nodes, the log message ",(0,r.kt)("inlineCode",{parentName:"p"},"failed to connect to node")," displays. This is normal behavior. Until you start the other peer nodes, your node is not connected and displays this warning. You can continue to start the other nodes.")),(0,r.kt)("h2",{id:"5-start-besu-node-1"},"5. Start Besu Node-1"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-1")," directory, start Besu Node-1:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --privacy-enabled --privacy-url=http://127.0.0.1:9102 --privacy-public-key-file=Tessera/nodeKey.pub --min-gas-price=0\n'))),(0,r.kt)(o.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --privacy-enabled --privacy-url=http://127.0.0.1:9102 --privacy-public-key-file=Tessera\\nodeKey.pub --min-gas-price=0\n')))),(0,r.kt)("p",null,"The command line specifies privacy options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/private-networks/reference/cli/options#privacy-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-enabled"))," enables privacy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/private-networks/reference/cli/options#privacy-url"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-url"))," specifies the Q2T server address of the Tessera node (",(0,r.kt)("inlineCode",{parentName:"li"},"Q2T")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"tessera.conf"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/private-networks/reference/cli/options#privacy-public-key-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-public-key-file"))," specifies the file containing Tessera node public key (created in ",(0,r.kt)("a",{parentName:"li",href:"#2-generate-tessera-keys"},"3. Generate Tessera Keys"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#rpc-http-api"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," includes ",(0,r.kt)("inlineCode",{parentName:"li"},"EEA")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"PRIV")," in the list of JSON-RPC APIs to enable privacy JSON-RPC API methods."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#min-gas-price"},(0,r.kt)("inlineCode",{parentName:"a"},"--min-gas-price"))," is 0 for a ",(0,r.kt)("a",{parentName:"li",href:"/stable/private-networks/how-to/configure/free-gas"},"free gas network"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-marker-transaction-signing-key-file"))," command line option to sign ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transactions")," using a supplied key. The command line option is mandatory in privacy-enabled paid gas networks.")),(0,r.kt)("p",null,"When the node starts, the ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/concepts/node-keys#enode-url"},"enode URL")," displays. Copy the enode URL to specify Node-1 as the bootnode in the following steps."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Node 1 Enode URL",src:a(57198).Z,width:"988",height:"126"})),(0,r.kt)("h2",{id:"6-start-besu-node-2"},"6. Start Besu Node-2"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-2")," directory, start Besu Node-2 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546 --privacy-enabled --privacy-url=http://127.0.0.1:9202 --privacy-public-key-file=Tessera/nodeKey.pub --min-gas-price=0\n'))),(0,r.kt)(o.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546 --privacy-enabled --privacy-url=http://127.0.0.1:9202 --privacy-public-key-file=Tessera\\nodeKey.pub --min-gas-price=0\n')))),(0,r.kt)("p",null,"The command line specifies the same options as for Node-1 with different ports and Tessera node URL. The ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#bootnodes"},(0,r.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," option specifies the enode URL of Node-1."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When running Besu from the ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/get-started/install/run-docker-image"},"Docker image"),", ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/get-started/install/run-docker-image#expose-ports"},"expose ports"),".")),(0,r.kt)("h2",{id:"7-start-besu-node-3"},"7. Start Besu Node-3"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-3")," directory, start Besu Node-3 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547 --privacy-enabled --privacy-url=http://127.0.0.1:9302 --privacy-public-key-file=Tessera/nodeKey.pub --min-gas-price=0\n'))),(0,r.kt)(o.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547 --privacy-enabled --privacy-url=http://127.0.0.1:9302 --privacy-public-key-file=Tessera\\nodeKey.pub --min-gas-price=0\n')))),(0,r.kt)("p",null,"The command line specifies the same options as for Node-1 with different ports and Tessera node URL. The ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#bootnodes"},(0,r.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," option specifies the enode URL of Node-1."),(0,r.kt)("h2",{id:"8-start-besu-node-4"},"8. Start Besu Node-4"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-4")," directory, start Besu Node-4 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548 --privacy-enabled --privacy-url=http://127.0.0.1:9402 --privacy-public-key-file=Tessera/nodeKey.pub --min-gas-price=0\n'))),(0,r.kt)(o.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548 --privacy-enabled --privacy-url=http://127.0.0.1:9402 --privacy-public-key-file=Tessera\\nodeKey.pub --min-gas-price=0\n')))),(0,r.kt)("p",null,"The command line specifies the same options as for Node-1 with different ports and Tessera node URL. The ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#bootnodes"},(0,r.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," option specifies the enode URL of Node-1."))}m.isMDXComponent=!0},57198:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"}}]);