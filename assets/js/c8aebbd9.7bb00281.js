"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[90981],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,y=u["".concat(s,".").concat(d)]||u[d]||v[d]||i;return r?a.createElement(y,p(p({ref:t},l),{},{components:r})):a.createElement(y,p({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,p[1]=o;for(var c=2;c<i;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"Privacy groups",sidebar_position:2,description:"Privacy groups"},p="Privacy groups",o={unversionedId:"private-networks/concepts/privacy/privacy-groups",id:"version-23.7.1/private-networks/concepts/privacy/privacy-groups",title:"Privacy groups",description:"Privacy groups",source:"@site/versioned_docs/version-23.7.1/private-networks/concepts/privacy/privacy-groups.md",sourceDirName:"private-networks/concepts/privacy",slug:"/private-networks/concepts/privacy/privacy-groups",permalink:"/23.7.1/private-networks/concepts/privacy/privacy-groups",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/private-networks/concepts/privacy/privacy-groups.md",tags:[],version:"23.7.1",lastUpdatedAt:1700080085,formattedLastUpdatedAt:"Nov 15, 2023",sidebarPosition:2,frontMatter:{title:"Privacy groups",sidebar_position:2,description:"Privacy groups"},sidebar:"privateDocSidebar",previous:{title:"Private transaction processing",permalink:"/23.7.1/private-networks/concepts/privacy/private-transactions/processing"},next:{title:"Flexible privacy groups",permalink:"/23.7.1/private-networks/concepts/privacy/flexible-privacy"}},s={},c=[{value:"Privacy types",id:"privacy-types",level:2},{value:"Access between states",id:"access-between-states",level:3},{value:"Enterprise Ethereum Alliance privacy",id:"enterprise-ethereum-alliance-privacy",level:3},{value:"Besu-extended privacy",id:"besu-extended-privacy",level:3},{value:"Multi-tenancy",id:"multi-tenancy",level:2}],l={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"privacy-groups"},"Privacy groups"),(0,n.kt)("p",null,"A privacy group is a group of nodes identified by a unique privacy group ID by Tessera. Tessera stores each private transaction with the privacy group ID."),(0,n.kt)("p",null,"The Besu nodes maintain the public world state for the blockchain and a private state for each privacy group. The private states contain data that is not shared in the globally replicated world state."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The privacy group implementations described below are offchain privacy groups and cannot have their group membership updated."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/concepts/privacy/flexible-privacy"},"Flexible privacy groups are an early access feature"),".")),(0,n.kt)("h2",{id:"privacy-types"},"Privacy types"),(0,n.kt)("p",null,"Besu implements two types of privacy:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enterprise Ethereum Alliance (EEA) privacy, where private transactions include ",(0,n.kt)("inlineCode",{parentName:"li"},"privateFor")," as the recipient."),(0,n.kt)("li",{parentName:"ul"},"Besu-extended privacy, where private transactions include ",(0,n.kt)("inlineCode",{parentName:"li"},"privacyGroupId")," as the recipient.")),(0,n.kt)("p",null,"Both privacy types create privacy groups and store private transactions with their privacy group in Tessera."),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Privacy Groups",src:r(43443).Z,width:"631",height:"638"}))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For clarity, the Tessera nodes are not shown in the previous diagram. To send private transactions, each Besu node must have an associated Tessera node.")),(0,n.kt)("h3",{id:"access-between-states"},"Access between states"),(0,n.kt)("p",null,"A contract in a privacy group:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Can read or write to a contract in the same privacy group."),(0,n.kt)("li",{parentName:"ul"},"Can read from the public state including public contracts."),(0,n.kt)("li",{parentName:"ul"},"Cannot access contracts from a different privacy group.")),(0,n.kt)("p",null,"A public contract cannot access a private contract."),(0,n.kt)("h3",{id:"enterprise-ethereum-alliance-privacy"},"Enterprise Ethereum Alliance privacy"),(0,n.kt)("p",null,"In the privacy implementation complying with the ",(0,n.kt)("a",{parentName:"p",href:"https://entethalliance.org/technical-documents/"},"EEA Client Specification")," the group of nodes specified by ",(0,n.kt)("inlineCode",{parentName:"p"},"privateFrom")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"privateFor")," form a privacy group with a unique privacy group ID provided by Tessera."),(0,n.kt)("p",null,"The previous diagram illustrates two privacy groups enabling:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A, B, and C to send transactions that are private from D."),(0,n.kt)("li",{parentName:"ul"},"A, C, and D to send transactions that are private from B.")),(0,n.kt)("p",null,"Using EEA-compliant privacy, to send private transactions between A, B, and C, A initializes a contract in a private transaction with B and C specified as the ",(0,n.kt)("inlineCode",{parentName:"p"},"privateFor")," and A specified as the ",(0,n.kt)("inlineCode",{parentName:"p"},"privateFrom"),". Initializing the contract creates a privacy group consisting of A, B, and C. For the ABC private state to remain consistent, A, B, and C must be included on transactions (as either ",(0,n.kt)("inlineCode",{parentName:"p"},"privateFrom")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"privateFor"),") even if they are between only two of the three parties."),(0,n.kt)("p",null,"To send private transactions between A, C, and D, C initializes a different contract in a private transaction with A and D specified as the ",(0,n.kt)("inlineCode",{parentName:"p"},"privateFor")," and C specified as the ",(0,n.kt)("inlineCode",{parentName:"p"},"privateFrom"),". Initializing the contract creates a privacy group consisting of A, C, and D. For the ACD private state to remain consistent, A, C, and D must be included on transactions (as either ",(0,n.kt)("inlineCode",{parentName:"p"},"privateFrom")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"privateFor"),") even if they are between only two of the three parties."),(0,n.kt)("h3",{id:"besu-extended-privacy"},"Besu-extended privacy"),(0,n.kt)("p",null,"The Besu-extended privacy implementation creates a privacy group using ",(0,n.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/reference/api/#priv_createprivacygroup"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_createPrivacyGroup"))," with private transactions sent to the privacy group ID."),(0,n.kt)("p",null,"Using the same privacy groups as in the previous example."),(0,n.kt)("p",null,"Using Besu-extended privacy, to send private transactions between A, B, and C, A creates a privacy group consisting of A, B, and C. The privacy group ID is specified when sending private transactions and A, B, and C are recipients of all private transactions sent to the privacy group."),(0,n.kt)("p",null,"To send private transactions between A, C, and D, A creates a privacy group consisting of A, C, and D. The privacy group ID of this group is specified when sending private transactions with A, C, and D as recipients."),(0,n.kt)("h2",{id:"multi-tenancy"},"Multi-tenancy"),(0,n.kt)("p",null,"When using ",(0,n.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/concepts/privacy/multi-tenancy"},"multi-tenancy")," with privacy groups, each user provides a JSON Web Token (JWT) which allows Besu to check that the user has access to functionality and data associated with a privacy group."))}u.isMDXComponent=!0},43443:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/PrivacyGroups-f8b035c1df4b611ec108a113587611dc.png"}}]);