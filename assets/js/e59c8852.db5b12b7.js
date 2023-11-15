"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[62871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),s=n(12466),l=n(16550),i=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,c]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var k=n(72389);const b="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",g,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},62729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),s=n(85162);const l={title:"Connect to Mainnet",sidebar_position:2,description:"How to connect to Mainnet",tags:["public networks"]},i="Connect to Mainnet",c={unversionedId:"public-networks/get-started/connect/mainnet",id:"version-23.7.2/public-networks/get-started/connect/mainnet",title:"Connect to Mainnet",description:"How to connect to Mainnet",source:"@site/versioned_docs/version-23.7.2/public-networks/get-started/connect/mainnet.md",sourceDirName:"public-networks/get-started/connect",slug:"/public-networks/get-started/connect/mainnet",permalink:"/23.7.2/public-networks/get-started/connect/mainnet",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/public-networks/get-started/connect/mainnet.md",tags:[{label:"public networks",permalink:"/23.7.2/tags/public-networks"}],version:"23.7.2",lastUpdatedAt:1700080085,formattedLastUpdatedAt:"Nov 15, 2023",sidebarPosition:2,frontMatter:{title:"Connect to Mainnet",sidebar_position:2,description:"How to connect to Mainnet",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Sync Besu",permalink:"/23.7.2/public-networks/get-started/connect/sync-node"},next:{title:"Connect to a testnet",permalink:"/23.7.2/public-networks/get-started/connect/testnet"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Generate the shared secret",id:"1-generate-the-shared-secret",level:3},{value:"2. Generate validator keys",id:"2-generate-validator-keys",level:3},{value:"3. Start Besu",id:"3-start-besu",level:3},{value:"4. Start the consensus client",id:"4-start-the-consensus-client",level:3},{value:"5. Wait for the clients to sync",id:"5-wait-for-the-clients-to-sync",level:3},{value:"6. Stake ETH",id:"6-stake-eth",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-to-mainnet"},"Connect to Mainnet"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/concepts/the-merge"},"The Merge")," was executed on ",(0,r.kt)("strong",{parentName:"p"},"September 15, 2022"),". Ethereum is now a ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/concepts/proof-of-stake/"},"proof of stake")," network, and a full Ethereum node requires both ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/concepts/the-merge#execution-and-consensus-clients"},"an execution client and a consensus client"),".")),(0,r.kt)("p",null,"Run Besu as an ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/concepts/the-merge#execution-clients"},"execution client")," with any consensus client on Ethereum Mainnet."),(0,r.kt)("p",null,"If you're using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/en/stable/"},"Teku")," as a consensus client, you can follow the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/tutorials/besu-teku-mainnet"},"Besu and Teku Mainnet tutorial"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/get-started/install/binary-distribution"},"Besu installed"),"."),(0,r.kt)("li",{parentName:"ul"},"A consensus client installed. For example, ",(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/en/latest/"},"Teku"),".")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-generate-the-shared-secret"},"1. Generate the shared secret"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openssl rand -hex 32 | tr -d "\\n" > jwtsecret.hex\n')),(0,r.kt)("p",null,"You will specify ",(0,r.kt)("inlineCode",{parentName:"p"},"jwtsecret.hex")," when starting Besu and the consensus client. This is a shared JWT secret the clients use to authenticate each other when using the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/how-to/use-engine-api"},"Engine API"),"."),(0,r.kt)("h3",{id:"2-generate-validator-keys"},"2. Generate validator keys"),(0,r.kt)("p",null,"If you're running the consensus client as a beacon node only, skip to the ",(0,r.kt)("a",{parentName:"p",href:"#3-start-besu"},"next step"),"."),(0,r.kt)("p",null,"If you're also running the consensus client as a validator client, have a funded Ethereum address ready (32 ETH and gas fees for each validator)."),(0,r.kt)("p",null,"Generate validator keys for one or more validators using the ",(0,r.kt)("a",{parentName:"p",href:"https://launchpad.ethereum.org/en/"},"Staking Launchpad"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Save the password you use to generate each key pair in a ",(0,r.kt)("inlineCode",{parentName:"p"},".txt")," file. You should also have a ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file for each validator key pair.")),(0,r.kt)("h3",{id:"3-start-besu"},"3. Start Besu"),(0,r.kt)("p",null,"Run the following command or specify the options in a ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/how-to/configuration-file"},"configuration file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu \\\n  --sync-mode=X_SNAP           \\\n  --data-storage-format=BONSAI \\\n  --rpc-http-enabled=true      \\\n  --rpc-http-host=0.0.0.0      \\\n  --rpc-ws-enabled=true        \\\n  --rpc-ws-host=0.0.0.0        \\\n  --host-allowlist=<IP of Besu node>,127.0.0.1,localhost        \\\n  --engine-host-allowlist=<IP of Besu node>,127.0.0.1,localhost \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n")),(0,r.kt)("p",null,"Specify:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The path to the ",(0,r.kt)("inlineCode",{parentName:"li"},"jwtsecret.hex")," file generated in ",(0,r.kt)("a",{parentName:"li",href:"#1-generate-the-shared-secret"},"step 1")," using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#engine-jwt-secret"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-jwt-secret"))," option."),(0,r.kt)("li",{parentName:"ul"},"The IP address of your Besu node using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#host-allowlist"},(0,r.kt)("inlineCode",{parentName:"a"},"--host-allowlist"))," and ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#engine-host-allowlist"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-host-allowlist"))," options.")),(0,r.kt)("p",null,"Also, in the command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#sync-mode"},(0,r.kt)("inlineCode",{parentName:"a"},"--sync-mode"))," specifies using ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/get-started/connect/sync-node#snap-synchronization"},"snap sync"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#data-storage-format"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-storage-format"))," specifies using ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/concepts/data-storage-formats#bonsai-tries"},"Bonsai Tries"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#rpc-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled"))," enables the HTTP JSON-RPC service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#rpc-http-host"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-host"))," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0")," to allow remote RPC connections."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#rpc-ws-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-enabled"))," enables the WebSocket JSON-RPC service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#rpc-ws-host"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-host"))," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0")," to allow remote RPC connections."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#engine-rpc-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-rpc-enabled"))," enables the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/engine-api/"},"Engine API"),".")),(0,r.kt)("p",null,"You can modify the option values and add other ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/reference/cli/options"},"command line options")," as needed."),(0,r.kt)("h3",{id:"4-start-the-consensus-client"},"4. Start the consensus client"),(0,r.kt)("p",null,"Refer to your consensus client documentation to configure and start the consensus client."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you're running a validator client, make sure you set a fee recipient address.")),(0,r.kt)("p",null,"If you're using Teku, follow the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/tutorials/besu-teku-mainnet#5-start-teku"},"Besu and Teku Mainnet tutorial"),"."),(0,r.kt)("h3",{id:"5-wait-for-the-clients-to-sync"},"5. Wait for the clients to sync"),(0,r.kt)("p",null,"After starting Besu and the consensus client, your node starts syncing and connecting to peers."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Besu logs",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{"@timestamp":"2023-02-03T04:43:49,555","level":"INFO","thread":"main","class":"DefaultSynchronizer","message":"Starting synchronizer.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,556","level":"INFO","thread":"main","class":"FastSyncDownloader","message":"Starting sync","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,559","level":"INFO","thread":"main","class":"Runner","message":"Ethereum main loop is up.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:53,106","level":"INFO","thread":"Timer-0","class":"DNSResolver","message":"Resolved 2409 nodes","throwable":""}\n{"@timestamp":"2023-02-03T04:45:04,803","level":"INFO","thread":"nioEventLoopGroup-3-10","class":"SnapWorldStateDownloader","message":"Downloading world state from peers for pivot block 16545859 (0x616ae3c4cf85f95a9bce2814a7282d75dc2eac36\ncb9f0fcc6f16386df70da3c5). State root 0xa7114541f42c62a72c8b6bb9901c2ccf4b424cd7f76570a67b82a183b02f25dc pending requests 0","throwable":""}\n{"@timestamp":"2023-02-03T04:46:04,834","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.08%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:48:01,840","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.23%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:49:09,931","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.41%, Peer count: 11","throwable":""}\n{"@timestamp":"2023-02-03T04:50:12,466","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.61%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:20,977","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.75%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:28,985","level":"INFO","thread":"EthScheduler-Services-29 (importBlock)","class":"FastImportBlocksStep","message":"Block import progress: 180400 of 16545859 (1%)","throwable":""}\n'))),(0,r.kt)(s.Z,{label:"Teku logs",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"2022-03-21 20:43:24.355 INFO  - Syncing     *** Target slot: 76092, Head slot: 2680, Remaining slots: 73412, Connected peers: 8\n2022-03-21 20:43:36.363 INFO  - Syncing     *** Target slot: 76093, Head slot: 2879, Remaining slots: 73214, Connected peers: 10\n2022-03-21 20:43:48.327 INFO  - Syncing     *** Target slot: 76094, Head slot: 3080, Remaining slots: 73014, Connected peers: 8\n2022-03-21 20:44:00.339 INFO  - Syncing     *** Target slot: 76095, Head slot: 3317, Remaining slots: 72778, Connected peers: 6\n2022-03-21 20:44:12.353 INFO  - Syncing     *** Target slot: 76096, Head slot: 3519, Remaining slots: 72577, Connected peers: 9\n")))),(0,r.kt)("p",null,"If you're running the consensus client as a beacon node only, you're all set. If you're also running the consensus client as a validator client, ensure your clients are fully synced before submitting your staking deposit in the next step. Syncing Besu can take several days."),(0,r.kt)("h3",{id:"6-stake-eth"},"6. Stake ETH"),(0,r.kt)("p",null,"Stake your ETH for one or more validators using the ",(0,r.kt)("a",{parentName:"p",href:"https://launchpad.ethereum.org/en/"},"Staking Launchpad"),"."),(0,r.kt)("p",null,"You can check your validator status by searching your Ethereum address on the ",(0,r.kt)("a",{parentName:"p",href:"https://beaconcha.in/"},"Beacon Chain explorer"),". It may take up to multiple days for your validator to be activated and start proposing blocks."))}m.isMDXComponent=!0}}]);