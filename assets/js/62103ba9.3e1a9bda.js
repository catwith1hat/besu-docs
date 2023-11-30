"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[67710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"The Merge",sidebar_position:1,description:"Learn about The Merge, and execution and consensus clients.",tags:["public networks"]},s="The Merge",i={unversionedId:"public-networks/concepts/the-merge",id:"version-23.7.2/public-networks/concepts/the-merge",title:"The Merge",description:"Learn about The Merge, and execution and consensus clients.",source:"@site/versioned_docs/version-23.7.2/public-networks/concepts/the-merge.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/the-merge",permalink:"/23.7.2/public-networks/concepts/the-merge",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/public-networks/concepts/the-merge.md",tags:[{label:"public networks",permalink:"/23.7.2/tags/public-networks"}],version:"23.7.2",lastUpdatedAt:1701377911,formattedLastUpdatedAt:"Nov 30, 2023",sidebarPosition:1,frontMatter:{title:"The Merge",sidebar_position:1,description:"Learn about The Merge, and execution and consensus clients.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Concepts",permalink:"/23.7.2/public-networks/concepts"},next:{title:"Proof of stake consensus",permalink:"/23.7.2/public-networks/concepts/proof-of-stake/"}},c={},l=[{value:"Execution and consensus clients",id:"execution-and-consensus-clients",level:2},{value:"Execution clients",id:"execution-clients",level:3},{value:"Consensus clients",id:"consensus-clients",level:3},{value:"What happened during The Merge",id:"what-happened-during-the-merge",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-merge"},"The Merge"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The Merge was executed on ",(0,a.kt)("strong",{parentName:"p"},"September 15, 2022"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/upgrades/merge/"},"The Merge")," was an Ethereum upgrade that merged the\n",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/upgrades/beacon-chain/"},"Beacon Chain")," into Ethereum Mainnet, turning Mainnet into a combination of an ",(0,a.kt)("a",{parentName:"p",href:"#execution-and-consensus-clients"},"execution layer and\nconsensus layer"),".\nThe Merge transitioned Mainnet from proof of work to ",(0,a.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/concepts/proof-of-stake/"},"proof of stake consensus"),"."),(0,a.kt)("p",null,"You can run Besu as an execution client with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/get-started/connect/mainnet"},"Any consensus client on Mainnet"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/get-started/connect/testnet"},"Any consensus client on a testnet"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/tutorials/besu-teku-mainnet"},"Teku on Mainnet"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/tutorials/besu-teku-testnet"},"Teku on a testnet"),".")),(0,a.kt)("h2",{id:"execution-and-consensus-clients"},"Execution and consensus clients"),(0,a.kt)("p",null,"After The Merge, a full Ethereum Mainnet node is a combination of an execution client (previously\ncalled an ",(0,a.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/"},"Ethereum 1.0")," client) and\na consensus client (previously called an ",(0,a.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/"},"Ethereum\n2.0")," client)."),(0,a.kt)("p",null,"Execution and consensus clients communicate with each other using the ",(0,a.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/how-to/use-engine-api"},"Engine API"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ethereum Merge node",src:n(76719).Z,width:"1512",height:"1164"})),(0,a.kt)("h3",{id:"execution-clients"},"Execution clients"),(0,a.kt)("p",null,"Execution clients, such as Besu, manage the execution layer, including executing transactions and\nupdating the world state.\nExecution clients serve ",(0,a.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/reference/engine-api/"},"JSON-RPC API")," requests and communicate\nwith each other in a peer-to-peer network."),(0,a.kt)("h3",{id:"consensus-clients"},"Consensus clients"),(0,a.kt)("p",null,"Consensus clients, such as ",(0,a.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/en/stable/"},"Teku"),", contain beacon node and validator client implementations.\nThe beacon node is the primary link to the ",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/upgrades/beacon-chain/"},"Beacon Chain")," (consensus layer).\nThe validator client performs ",(0,a.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/concepts/proof-of-stake/"},"validator duties")," on the consensus layer.\nConsensus clients serve ",(0,a.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/reference/rest"},"REST API")," requests and\ncommunicate with each other in a peer-to-peer network."),(0,a.kt)("h2",{id:"what-happened-during-the-merge"},"What happened during The Merge"),(0,a.kt)("p",null,"Before The Merge, the execution and consensus clients' configurations were updated to listen for a\ncertain total terminal difficulty (TTD) to be reached."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The TTD is a specific value for the total difficulty, which is the sum of the proof-of-work mining\ndifficulty for all blocks up to some point in the blockchain.")),(0,a.kt)("p",null,"The consensus layer enabled the Merge configuration (Bellatrix) before reaching the TTD.\nOnce the execution layer blocks reached the TTD, the Beacon Chain merged into Ethereum Mainnet, and\nEthereum transitioned to a proof of stake network."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"After The Merge, a Mainnet node operator must run both an execution client and a beacon node at the\nsame time.\nTo become a validator, you must also run a validator client (either ",(0,a.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/get-started/start-teku#start-the-clients-in-a-single-process"},"in the same process as the\nbeacon node"),"\nor ",(0,a.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/get-started/start-teku#run-the-clients-separately"},"separately"),".")),(0,a.kt)("p",null,"After The Merge, validators earn ",(0,a.kt)("a",{parentName:"p",href:"https://www.blocknative.com/ethereum-staking-calculator"},"rewards"),"\nfor performing ",(0,a.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/concepts/proof-of-stake/"},"validator duties"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/reference/cli#validators-proposer-default-fee-recipient"},"fee\nrecipients"),"\nalso earn rewards for the inclusion of execution layer transactions."))}h.isMDXComponent=!0},76719:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Execution-Consensus-Clients-fb025b4b0cea4f3e3efef43657540e27.png"}}]);