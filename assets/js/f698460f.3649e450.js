"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[88292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Start Besu",description:"Start Besu on a private Ethereum network.",sidebar_position:3,tags:["private networks"]},i="Start Besu",s={unversionedId:"private-networks/get-started/start-node",id:"version-23.4.1/private-networks/get-started/start-node",title:"Start Besu",description:"Start Besu on a private Ethereum network.",source:"@site/versioned_docs/version-23.4.1/private-networks/get-started/start-node.md",sourceDirName:"private-networks/get-started",slug:"/private-networks/get-started/start-node",permalink:"/stable/private-networks/get-started/start-node",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/get-started/start-node.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1691170824,formattedLastUpdatedAt:"Aug 4, 2023",sidebarPosition:3,frontMatter:{title:"Start Besu",description:"Start Besu on a private Ethereum network.",sidebar_position:3,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Install binary distribution",permalink:"/stable/private-networks/get-started/install/binary-distribution"},next:{title:"How to",permalink:"/stable/private-networks/how-to/"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Local block data",id:"local-block-data",level:2},{value:"Genesis configuration",id:"genesis-configuration",level:2},{value:"Confirm node is running",id:"confirm-node-is-running",level:2},{value:"Run a node for testing",id:"run-a-node-for-testing",level:2},{value:"Run a node on a private network",id:"run-a-node-on-a-private-network",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"start-besu"},"Start Besu"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/reference/cli/options"},(0,r.kt)("inlineCode",{parentName:"a"},"besu"))," command with the required command line options to start a node."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/get-started/install/binary-distribution"},"Besu installed")),(0,r.kt)("h2",{id:"local-block-data"},"Local block data"),(0,r.kt)("p",null,"When connecting to a network other than the network previously connected to, you must either delete the local block data or use the ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))," option to specify a different data directory."),(0,r.kt)("p",null,"To delete the local block data, delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," directory in the ",(0,r.kt)("inlineCode",{parentName:"p"},"besu/build/distribution/besu-<version>")," directory."),(0,r.kt)("h2",{id:"genesis-configuration"},"Genesis configuration"),(0,r.kt)("p",null,"To define a genesis configuration, create a ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/concepts/genesis-file"},"genesis file")," (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json"),") and specify the file using the ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#genesis-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--genesis-file"))," option."),(0,r.kt)("p",null,"When you specify ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#network"},(0,r.kt)("inlineCode",{parentName:"a"},"--network=dev")),", Besu uses the development mode genesis configuration with a fixed low difficulty. A node started with ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#network"},(0,r.kt)("inlineCode",{parentName:"a"},"--network=dev"))," has an empty bootnodes list by default."),(0,r.kt)("p",null,"Predefined genesis configurations for named networks are in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/besu/tree/master/config/src/main/resources"},"Besu source files"),"."),(0,r.kt)("h2",{id:"confirm-node-is-running"},"Confirm node is running"),(0,r.kt)("p",null,"If you started Besu with the ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#rpc-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled"))," option, use ",(0,r.kt)("a",{parentName:"p",href:"https://curl.haxx.se/"},"cURL")," to call ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/reference/api/"},"JSON-RPC API methods")," to confirm the node is running."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"eth_chainId")," returns the chain ID of the network."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}\' localhost:8545\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"eth_syncing")," returns the starting, current, and highest block."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}\' localhost:8545\n')),(0,r.kt)("p",{parentName:"li"},"For example, after connecting to Mainnet, ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_syncing")," will return something similar to:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "startingBlock": "0x0",\n    "currentBlock": "0x2d0",\n    "highestBlock": "0x66c0"\n  }\n}\n')))),(0,r.kt)("h2",{id:"run-a-node-for-testing"},"Run a node for testing"),(0,r.kt)("p",null,"To run a node that mines blocks at a rate suitable for testing purposes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --network=dev --miner-enabled --miner-coinbase=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins="all" --host-allowlist="*" --rpc-ws-enabled --rpc-http-enabled --data-path=/tmp/tmpDatdir\n')),(0,r.kt)("p",null,"You can also use the following ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/configuration-file"},"configuration file")," on the command line to start a node with the same options as above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'network="dev"\nminer-enabled=true\nminer-coinbase="0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"\nrpc-http-cors-origins=["all"]\nhost-allowlist=["*"]\nrpc-ws-enabled=true\nrpc-http-enabled=true\ndata-path="/tmp/tmpdata-path"\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The following settings are a security risk in production environments:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Enabling the HTTP JSON-RPC service (",(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#rpc-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled")),") and setting ",(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#rpc-http-host"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-host"))," to 0.0.0.0 exposes the RPC connection on your node to any remote connection."),(0,r.kt)("li",{parentName:"ul"},"Setting ",(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#host-allowlist"},(0,r.kt)("inlineCode",{parentName:"a"},"--host-allowlist"))," to ",(0,r.kt)("inlineCode",{parentName:"li"},'"*"')," allows JSON-RPC API access from any host."),(0,r.kt)("li",{parentName:"ul"},"Setting ",(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#rpc-http-cors-origins"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-cors-origins"))," to ",(0,r.kt)("inlineCode",{parentName:"li"},'"all"')," or ",(0,r.kt)("inlineCode",{parentName:"li"},'"*"')," allows cross-origin resource sharing (CORS) access from any domain."))),(0,r.kt)("h2",{id:"run-a-node-on-a-private-network"},"Run a node on a private network"),(0,r.kt)("p",null,"To run a node on your private network specifying a genesis file and data directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --genesis-file=<path>/genesis.json --data-path=<data-path> --rpc-http-enabled --bootnodes=<bootnodes>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<data-path>")," is the path to the directory to save the chain data to. Ensure you configure a peer discovery method, such as ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/how-to/configure/bootnodes"},"bootnodes"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You might need to set ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#tx-pool-limit-by-account-percentage"},(0,r.kt)("inlineCode",{parentName:"a"},"--tx-pool-limit-by-account-percentage"))," to 1. The default value is suitable for Mainnet, but may cause issues on private networks.")))}u.isMDXComponent=!0}}]);