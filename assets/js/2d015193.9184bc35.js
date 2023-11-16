"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[45243],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||v[d]||i;return r?a.createElement(m,s(s({ref:t},l),{},{components:r})):a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Access private and privacy marker transactions",description:"Methods for accessing and managing private transactions and privacy groups in Hyperledger Besu",sidebar_position:6,tags:["private networks"]},s="Access private and privacy marker transactions",o={unversionedId:"private-networks/how-to/use-privacy/access-private-transactions",id:"version-23.7.2/private-networks/how-to/use-privacy/access-private-transactions",title:"Access private and privacy marker transactions",description:"Methods for accessing and managing private transactions and privacy groups in Hyperledger Besu",source:"@site/versioned_docs/version-23.7.2/private-networks/how-to/use-privacy/access-private-transactions.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/access-private-transactions",permalink:"/23.7.2/private-networks/how-to/use-privacy/access-private-transactions",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/private-networks/how-to/use-privacy/access-private-transactions.md",tags:[{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1700169422,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:6,frontMatter:{title:"Access private and privacy marker transactions",description:"Methods for accessing and managing private transactions and privacy groups in Hyperledger Besu",sidebar_position:6,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use flexible privacy groups",permalink:"/23.7.2/private-networks/how-to/use-privacy/flexible"},next:{title:"Sign privacy marker transactions",permalink:"/23.7.2/private-networks/how-to/use-privacy/sign-pmts"}},c={},p=[{value:"Transaction receipts",id:"transaction-receipts",level:2},{value:"Transactions",id:"transactions",level:2}],l={toc:p},u="wrapper";function v(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"access-private-and-privacy-marker-transactions"},"Access private and privacy marker transactions"),(0,n.kt)("p",null,"A Hyperledger Besu private transaction creates a ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transaction")," and the private transaction itself."),(0,n.kt)("h2",{id:"transaction-receipts"},"Transaction receipts"),(0,n.kt)("p",null,"With the transaction hash returned when submitting the private transaction, to get the transaction receipt for the:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Private transaction, use ",(0,n.kt)("a",{parentName:"li",href:"/23.7.2/private-networks/reference/api/#priv_gettransactionreceipt"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_getTransactionReceipt")),"."),(0,n.kt)("li",{parentName:"ul"},"Privacy marker transaction, use ",(0,n.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/api/#eth_gettransactionreceipt"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_getTransactionReceipt")),".")),(0,n.kt)("p",null,"The transaction receipt includes a ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," indicating if the transaction failed (",(0,n.kt)("inlineCode",{parentName:"p"},"0x0"),"), succeeded (",(0,n.kt)("inlineCode",{parentName:"p"},"0x1"),"), or was invalid (",(0,n.kt)("inlineCode",{parentName:"p"},"0x2"),")."),(0,n.kt)("admonition",{title:"Private transaction failure example",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To deploy a private contract, you submit a transaction using ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/how-to/send-transactions/private-transactions"},(0,n.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),". If contract deployment fails because of insufficient gas, the privacy marker transaction receipt has a status of success and the private transaction receipt has a status of failure.")),(0,n.kt)("h2",{id:"transactions"},"Transactions"),(0,n.kt)("p",null,"With the transaction hash returned when submitting the private transaction, to get the:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Private transaction, use ",(0,n.kt)("a",{parentName:"li",href:"/23.7.2/private-networks/reference/api/#priv_getprivatetransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_getPrivateTransaction")),"."),(0,n.kt)("li",{parentName:"ul"},"Privacy marker transaction, use ",(0,n.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/api/#eth_gettransactionbyhash"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_getTransactionByHash")),".")))}v.isMDXComponent=!0}}]);