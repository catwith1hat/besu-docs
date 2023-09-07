"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[18639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(67294),o=n(86010),s=n(12466),l=n(16550),i=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=m({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=i??p;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var f=n(72389);const b="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},s,{className:(0,o.Z)("tabs__item",g,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},63611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),s=n(85162);const l={title:"Run Besu and Teku on a testnet",sidebar_position:2,Description:"How to run Besu and Teku on a testnet"},i="Run Besu and Teku on a testnet",u={unversionedId:"public-networks/tutorials/besu-teku-testnet",id:"version-23.4.0/public-networks/tutorials/besu-teku-testnet",title:"Run Besu and Teku on a testnet",description:"Run Besu as an execution client and Teku as a consensus client on the Goerli and Sepolia Ethereum testnets.",source:"@site/versioned_docs/version-23.4.0/public-networks/tutorials/besu-teku-testnet.md",sourceDirName:"public-networks/tutorials",slug:"/public-networks/tutorials/besu-teku-testnet",permalink:"/23.4.0/public-networks/tutorials/besu-teku-testnet",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/tutorials/besu-teku-testnet.md",tags:[],version:"23.4.0",lastUpdatedAt:1694055692,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:2,frontMatter:{title:"Run Besu and Teku on a testnet",sidebar_position:2,Description:"How to run Besu and Teku on a testnet"},sidebar:"publicDocSidebar",previous:{title:"Run Besu and Teku on Mainnet",permalink:"/23.4.0/public-networks/tutorials/besu-teku-mainnet"},next:{title:"Options",permalink:"/23.4.0/public-networks/reference/cli/options"}},c={},p=[{value:"1. Install Besu and Teku",id:"1-install-besu-and-teku",level:2},{value:"2. Generate the shared secret",id:"2-generate-the-shared-secret",level:2},{value:"3. Generate validator keys",id:"3-generate-validator-keys",level:2},{value:"4. Start Besu",id:"4-start-besu",level:2},{value:"5. Start Teku",id:"5-start-teku",level:2},{value:"Beacon node only",id:"beacon-node-only",level:3},{value:"Beacon node and validator client",id:"beacon-node-and-validator-client",level:3},{value:"6. Wait for Besu and Teku to sync",id:"6-wait-for-besu-and-teku-to-sync",level:2},{value:"7. Stake ETH",id:"7-stake-eth",level:2}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-besu-and-teku-on-a-testnet"},"Run Besu and Teku on a testnet"),(0,r.kt)("p",null,"Run Besu as an ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/the-merge#execution-clients"},"execution client")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/"},"Teku")," as a ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/the-merge#consensus-clients"},"consensus client")," on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eth-clients/goerli"},"Goerli")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eth-clients/sepolia"},"Sepolia")," Ethereum testnets."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Sepolia is a permissioned network and you can't run a validator client on it without ",(0,r.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg"},"requesting to become a validator")," first. You can connect your consensus client using the beacon node only, without any validator duties.")),(0,r.kt)("h2",{id:"1-install-besu-and-teku"},"1. Install Besu and Teku"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/get-started/install/binary-distribution"},"Besu")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/HowTo/Get-Started/Installation-Options/Install-Binaries/"},"Teku"),"."),(0,r.kt)("p",null,"Ensure you meet the prerequisites for the installation option you use. For example, you must have Java 17+ if using the Besu and Teku binary distributions."),(0,r.kt)("p",null,"Ensure you meet the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/get-started/system-requirements"},"system requirements for Besu on public networks"),"."),(0,r.kt)("h2",{id:"2-generate-the-shared-secret"},"2. Generate the shared secret"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openssl rand -hex 32 | tr -d "\\n" > jwtsecret.hex\n')),(0,r.kt)("p",null,"You will specify ",(0,r.kt)("inlineCode",{parentName:"p"},"jwtsecret.hex")," when starting Besu and Teku. This is a shared JWT secret the clients use to authenticate each other when using the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/use-engine-api"},"Engine API"),"."),(0,r.kt)("h2",{id:"3-generate-validator-keys"},"3. Generate validator keys"),(0,r.kt)("p",null,"If you're running Teku as a beacon node only, skip to the ",(0,r.kt)("a",{parentName:"p",href:"#4-start-besu"},"next step"),"."),(0,r.kt)("p",null,"If you're also running Teku as a validator client, create a test Ethereum address (you can do this in ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360015289452-How-to-create-an-additional-account-in-your-wallet"},"MetaMask"),"). Fund this address with testnet ETH (32 ETH and gas fees for each validator) using a faucet. See the list of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eth-clients/goerli#meta-data-g%C3%B6rli"},"Goerli faucets")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eth-clients/sepolia#meta-data-sepolia"},"Sepolia faucets"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you can't get ETH using the faucet, you can ask for help on the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.io/ethstaker"},"EthStaker Discord"),".")),(0,r.kt)("p",null,"Generate validator keys for one or more validators using the ",(0,r.kt)("a",{parentName:"p",href:"https://goerli.launchpad.ethereum.org/"},"Goerli Staking Launchpad")," (or ",(0,r.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg"},"request to become validator on Sepolia"),")."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Save the password you use to generate each key pair in a ",(0,r.kt)("inlineCode",{parentName:"p"},".txt")," file. You should also have a ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file for each validator key pair.")),(0,r.kt)("h2",{id:"4-start-besu"},"4. Start Besu"),(0,r.kt)("p",null,"Run the following command or specify the options in a ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/configuration-file"},"configuration file"),":"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Goerli",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu \\\n  --network=goerli            \\\n  --rpc-http-enabled=true     \\\n  --rpc-http-host=0.0.0.0     \\\n  --rpc-http-cors-origins="*" \\\n  --rpc-ws-enabled=true       \\\n  --rpc-ws-host=0.0.0.0       \\\n  --host-allowlist="*"        \\\n  --engine-host-allowlist="*" \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n'))),(0,r.kt)(s.Z,{label:"Sepolia",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu \\\n  --network=sepolia           \\\n  --rpc-http-enabled=true     \\\n  --rpc-http-host=0.0.0.0     \\\n  --rpc-http-cors-origins="*" \\\n  --rpc-ws-enabled=true       \\\n  --rpc-ws-host=0.0.0.0       \\\n  --host-allowlist="*"        \\\n  --engine-host-allowlist="*" \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n')))),(0,r.kt)("p",null,"Specify the path to the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwtsecret.hex")," file generated in ",(0,r.kt)("a",{parentName:"p",href:"#2-generate-the-shared-secret"},"step 2")," using the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#engine-jwt-secret"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-jwt-secret"))," option."),(0,r.kt)("p",null,"You can modify the option values and add other ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options"},"command line options")," as needed."),(0,r.kt)("h2",{id:"5-start-teku"},"5. Start Teku"),(0,r.kt)("p",null,"Open a new terminal window."),(0,r.kt)("h3",{id:"beacon-node-only"},"Beacon node only"),(0,r.kt)("p",null,"To run Teku as a beacon node only (without validator duties), run the following command or specify the options in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/HowTo/Configure/Use-Configuration-File/"},"Teku configuration file"),":"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Goerli",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"teku \\\n  --network=goerli                             \\\n  --ee-endpoint=http://localhost:8551          \\\n  --ee-jwt-secret-file=<path to jwtsecret.hex> \\\n  --metrics-enabled=true                       \\\n  --rest-api-enabled=true\n"))),(0,r.kt)(s.Z,{label:"Sepolia",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"teku \\\n  --network=sepolia                            \\\n  --ee-endpoint=http://localhost:8551          \\\n  --ee-jwt-secret-file=<path to jwtsecret.hex> \\\n  --metrics-enabled=true                       \\\n  --rest-api-enabled=true\n")))),(0,r.kt)("p",null,"Specify the path to the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwtsecret.hex")," file generated in ",(0,r.kt)("a",{parentName:"p",href:"#2-generate-the-shared-secret"},"step 2")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#ee-jwt-secret-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--ee-jwt-secret-file"))," option."),(0,r.kt)("p",null,"You can modify the option values and add other ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/"},"Teku command line options")," as needed."),(0,r.kt)("h3",{id:"beacon-node-and-validator-client"},"Beacon node and validator client"),(0,r.kt)("p",null,"To run Teku as a beacon node and validator in a single process, run the following command or specify the options in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/HowTo/Configure/Use-Configuration-File/"},"Teku configuration file"),":"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Goerli",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"teku \\\n  --network=goerli                                          \\\n  --ee-endpoint=http://localhost:8551                       \\\n  --ee-jwt-secret-file=<path to jwtsecret.hex>              \\\n  --metrics-enabled=true                                    \\\n  --rest-api-enabled=true                                   \\\n  --validators-proposer-default-fee-recipient=<ETH address> \\\n  --validator-keys=<path to key file>:<path to password file>[,<path to key file>:<path to password file>,...]\n"))),(0,r.kt)(s.Z,{label:"Sepolia",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"Sepolia is a permissioned network and you can't run a validator client on it without ",(0,r.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg"},"requesting to become a validator")," first."))),(0,r.kt)("p",null,"Specify:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The path to the ",(0,r.kt)("inlineCode",{parentName:"li"},"jwtsecret.hex")," file generated in ",(0,r.kt)("a",{parentName:"li",href:"#2-generate-the-shared-secret"},"step 2")," using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#ee-jwt-secret-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--ee-jwt-secret-file"))," option."),(0,r.kt)("li",{parentName:"ul"},"The test Ethereum address created in ",(0,r.kt)("a",{parentName:"li",href:"#3-generate-validator-keys"},"step 3")," as the default fee recipient using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#validators-proposer-default-fee-recipient"},(0,r.kt)("inlineCode",{parentName:"a"},"--validators-proposer-default-fee-recipient"))," option."),(0,r.kt)("li",{parentName:"ul"},"The paths to the keystore ",(0,r.kt)("inlineCode",{parentName:"li"},".json")," file and password ",(0,r.kt)("inlineCode",{parentName:"li"},".txt")," file created in ",(0,r.kt)("a",{parentName:"li",href:"#3-generate-validator-keys"},"step 3")," for each validator using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#validator-keys"},(0,r.kt)("inlineCode",{parentName:"a"},"--validator-keys"))," option. Separate the ",(0,r.kt)("inlineCode",{parentName:"li"},".json")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".txt")," files with a colon, and separate entries for multiple validators with commas.")),(0,r.kt)("p",null,"You can modify the option values and add other ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/"},"Teku command line options")," as needed."),(0,r.kt)("h2",{id:"6-wait-for-besu-and-teku-to-sync"},"6. Wait for Besu and Teku to sync"),(0,r.kt)("p",null,"After starting Besu and Teku, your node starts syncing and connecting to peers."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Besu logs",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"@timestamp":"2023-02-03T04:43:49,555","level":"INFO","thread":"main","class":"DefaultSynchronizer","message":"Starting synchronizer.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,556","level":"INFO","thread":"main","class":"FastSyncDownloader","message":"Starting sync","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,559","level":"INFO","thread":"main","class":"Runner","message":"Ethereum main loop is up.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:53,106","level":"INFO","thread":"Timer-0","class":"DNSResolver","message":"Resolved 2409 nodes","throwable":""}\n{"@timestamp":"2023-02-03T04:45:04,803","level":"INFO","thread":"nioEventLoopGroup-3-10","class":"SnapWorldStateDownloader","message":"Downloading world state from peers for pivot block 16545859 (0x616ae3c4cf85f95a9bce2814a7282d75dc2eac36\ncb9f0fcc6f16386df70da3c5). State root 0xa7114541f42c62a72c8b6bb9901c2ccf4b424cd7f76570a67b82a183b02f25dc pending requests 0","throwable":""}\n{"@timestamp":"2023-02-03T04:46:04,834","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.08%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:48:01,840","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.23%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:49:09,931","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.41%, Peer count: 11","throwable":""}\n{"@timestamp":"2023-02-03T04:50:12,466","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.61%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:20,977","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.75%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:28,985","level":"INFO","thread":"EthScheduler-Services-29 (importBlock)","class":"FastImportBlocksStep","message":"Block import progress: 180400 of 16545859 (1%)","throwable":""}\n'))),(0,r.kt)(s.Z,{label:"Teku logs",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"2022-03-21 20:43:24.355 INFO  - Syncing     *** Target slot: 76092, Head slot: 2680, Remaining slots: 73412, Connected peers: 8\n2022-03-21 20:43:36.363 INFO  - Syncing     *** Target slot: 76093, Head slot: 2879, Remaining slots: 73214, Connected peers: 10\n2022-03-21 20:43:48.327 INFO  - Syncing     *** Target slot: 76094, Head slot: 3080, Remaining slots: 73014, Connected peers: 8\n2022-03-21 20:44:00.339 INFO  - Syncing     *** Target slot: 76095, Head slot: 3317, Remaining slots: 72778, Connected peers: 6\n2022-03-21 20:44:12.353 INFO  - Syncing     *** Target slot: 76096, Head slot: 3519, Remaining slots: 72577, Connected peers: 9\n")))),(0,r.kt)("p",null,"If you're running Teku as a beacon node only, you're all set. If you're also running Teku as a validator client, ensure Besu and Teku are fully synced before submitting your staking deposit in the next step. Syncing Besu can take several days."),(0,r.kt)("h2",{id:"7-stake-eth"},"7. Stake ETH"),(0,r.kt)("p",null,"Stake your testnet ETH for one or more validators using the ",(0,r.kt)("a",{parentName:"p",href:"https://goerli.launchpad.ethereum.org/"},"Goerli Staking Launchpad"),"."),(0,r.kt)("p",null,"You can check your validator status by searching your Ethereum address on the ",(0,r.kt)("a",{parentName:"p",href:"https://goerli.beaconcha.in/"},"Goerli Beacon Chain explorer"),". It may take up to multiple days for your validator to be activated and start proposing blocks."))}h.isMDXComponent=!0}}]);