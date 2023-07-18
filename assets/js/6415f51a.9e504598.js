"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[29773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(r),b=o,d=c["".concat(u,".").concat(b)]||c[b]||m[b]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},28538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"Use Quorum Hibernate",sidebar_position:4,description:"Use Quorum Hibernate with Hyperledger Besu",tags:["private networks"]},a="Use Quorum Hibernate",s={unversionedId:"private-networks/how-to/monitor/quorum-hibernate",id:"version-23.4.1/private-networks/how-to/monitor/quorum-hibernate",title:"Use Quorum Hibernate",description:"Use Quorum Hibernate with Hyperledger Besu",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/monitor/quorum-hibernate.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/quorum-hibernate",permalink:"/stable/private-networks/how-to/monitor/quorum-hibernate",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/monitor/quorum-hibernate.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1689691910,formattedLastUpdatedAt:"Jul 18, 2023",sidebarPosition:4,frontMatter:{title:"Use Quorum Hibernate",sidebar_position:4,description:"Use Quorum Hibernate with Hyperledger Besu",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Elastic Stack",permalink:"/stable/private-networks/how-to/monitor/elastic-stack"},next:{title:"Use Splunk",permalink:"/stable/private-networks/how-to/monitor/splunk"}},u={},p=[],l={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-quorum-hibernate"},"Use Quorum Hibernate"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-hibernate"},"Quorum Hibernate")," is a proxy that monitors a node's API traffic and hibernates the node when inactive. This reduces infrastructure costs by ensuring only nodes receiving API requests or nodes required to establish consensus are running."),(0,o.kt)("p",null,"Quorum Hibernate wakes up hibernating nodes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When a new transaction or API request is received."),(0,o.kt)("li",{parentName:"ul"},"To allow it to periodically sync with the network.")))}m.isMDXComponent=!0}}]);