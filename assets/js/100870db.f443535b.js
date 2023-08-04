"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[30917],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(f,s(s({ref:t},l),{},{components:a})):n.createElement(f,s({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Transaction types",sidebar_position:1,description:"Description of the different transaction types",tags:["public networks","private networks"]},s="Transaction types",o={unversionedId:"public-networks/concepts/transactions/types",id:"version-23.4.1/public-networks/concepts/transactions/types",title:"Transaction types",description:"Description of the different transaction types",source:"@site/versioned_docs/version-23.4.1/public-networks/concepts/transactions/types.md",sourceDirName:"public-networks/concepts/transactions",slug:"/public-networks/concepts/transactions/types",permalink:"/stable/public-networks/concepts/transactions/types",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/concepts/transactions/types.md",tags:[{label:"public networks",permalink:"/stable/tags/public-networks"},{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1691170824,formattedLastUpdatedAt:"Aug 4, 2023",sidebarPosition:1,frontMatter:{title:"Transaction types",sidebar_position:1,description:"Description of the different transaction types",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Data storage formats",permalink:"/stable/public-networks/concepts/data-storage-formats"},next:{title:"Transaction pool",permalink:"/stable/public-networks/concepts/transactions/pool"}},p={},c=[{value:"<code>FRONTIER</code> transactions",id:"frontier-transactions",level:2},{value:"<code>ACCESS_LIST</code> transactions",id:"access_list-transactions",level:2},{value:"<code>EIP1559</code> transactions",id:"eip1559-transactions",level:2}],l={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction-types"},"Transaction types"),(0,r.kt)("p",null,"You can interact with the Hyperledger Besu JSON-RPC API using different transaction types (specified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionType")," parameter)."),(0,r.kt)("p",null,"The following API objects use a unique format for each ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionType"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/objects#pending-transaction-object"},"Pending transaction object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/objects#transaction-object"},"Transaction object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/objects#transaction-call-object"},"Transaction call object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/objects#transaction-receipt-object"},"Transaction receipt object"))),(0,r.kt)("h2",{id:"frontier-transactions"},(0,r.kt)("inlineCode",{parentName:"h2"},"FRONTIER")," transactions"),(0,r.kt)("p",null,"Transactions with type ",(0,r.kt)("inlineCode",{parentName:"p"},"FRONTIER")," are ",(0,r.kt)("em",{parentName:"p"},"legacy transactions")," that use the transaction format existing before typed transactions were introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2718"},"EIP-2718"),". They contain the parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gasPrice"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gasLimit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"v"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"r"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),". Legacy transactions don't use ",(0,r.kt)("a",{parentName:"p",href:"#access_list-transactions"},"access lists")," or incorporate ",(0,r.kt)("a",{parentName:"p",href:"#eip1559-transactions"},"EIP-1559 fee market changes"),"."),(0,r.kt)("h2",{id:"access_list-transactions"},(0,r.kt)("inlineCode",{parentName:"h2"},"ACCESS_LIST")," transactions"),(0,r.kt)("p",null,"Transactions with type ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCESS_LIST")," are transactions introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2930"},"EIP-2930"),". They contain, along with the ",(0,r.kt)("a",{parentName:"p",href:"#frontier-transactions"},"legacy parameters"),", an ",(0,r.kt)("inlineCode",{parentName:"p"},"accessList")," parameter, which specifies an array of addresses and storage keys that the transaction plans to access (an ",(0,r.kt)("em",{parentName:"p"},"access list"),"). ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCESS_LIST")," transactions must specify an access list, and they don't incorporate ",(0,r.kt)("a",{parentName:"p",href:"#eip1559-transactions"},"EIP-1559 fee market changes"),"."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_createaccesslist"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_createAccessList"))," API to simulate a transaction which returns the addresses and storage keys that may be used to send the real transaction, and the approximate gas cost."),(0,r.kt)("h2",{id:"eip1559-transactions"},(0,r.kt)("inlineCode",{parentName:"h2"},"EIP1559")," transactions"),(0,r.kt)("p",null,"Transactions with type ",(0,r.kt)("inlineCode",{parentName:"p"},"EIP1559")," are transactions introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md"},"EIP-1559"),". EIP-1559 addresses the network congestion and overpricing of transaction fees caused by the historical fee market, in which users send transactions specifying a gas price bid using the ",(0,r.kt)("inlineCode",{parentName:"p"},"gasPrice")," parameter, and miners choose transactions with the highest bids."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EIP1559")," transactions don't specify ",(0,r.kt)("inlineCode",{parentName:"p"},"gasPrice"),", and instead use an in-protocol, dynamically changing ",(0,r.kt)("em",{parentName:"p"},"base fee")," per gas. At each block, the base fee per gas is adjusted to address network congestion as measured by a gas target."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EIP1559")," transactions contain, along with the ",(0,r.kt)("a",{parentName:"p",href:"#access_list-transactions"},(0,r.kt)("inlineCode",{parentName:"a"},"accessList"))," parameter and ",(0,r.kt)("a",{parentName:"p",href:"#frontier-transactions"},"legacy parameters")," except for ",(0,r.kt)("inlineCode",{parentName:"p"},"gasPrice"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"maxPriorityFeePerGas")," parameter, which specifies the maximum fee the sender is willing to pay per gas above the base fee (the maximum ",(0,r.kt)("em",{parentName:"p"},"priority fee")," per gas), and a ",(0,r.kt)("inlineCode",{parentName:"p"},"maxFeePerGas")," parameter, which specifies the maximum total fee (base fee + priority fee) the sender is willing to pay per gas."),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"EIP1559")," transaction always pays the base fee of the block it's included in, and it pays a priority fee as priced by ",(0,r.kt)("inlineCode",{parentName:"p"},"maxPriorityFeePerGas")," or, if the base fee per gas + ",(0,r.kt)("inlineCode",{parentName:"p"},"maxPriorityFeePerGas")," exceeds ",(0,r.kt)("inlineCode",{parentName:"p"},"maxFeePerGas"),", it pays a priority fee as priced by ",(0,r.kt)("inlineCode",{parentName:"p"},"maxFeePerGas")," minus the base fee per gas. The base fee is burned, and the priority fee is paid to the miner that included the transaction. A transaction's priority fee per gas incentivizes miners to include the transaction over other transactions with lower priority fees per gas."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EIP1559")," transactions must specify both ",(0,r.kt)("inlineCode",{parentName:"p"},"maxPriorityFeePerGas")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"maxFeePerGas"),". They must not specify ",(0,r.kt)("inlineCode",{parentName:"p"},"gasPrice"),"."))}m.isMDXComponent=!0}}]);