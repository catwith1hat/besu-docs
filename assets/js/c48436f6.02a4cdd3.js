"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[90338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={description:"Migrate to Besu from a different Ethereum execution client.",tags:["public networks"]},c="Migrate to Besu",a={unversionedId:"public-networks/get-started/migrate-to-besu",id:"public-networks/get-started/migrate-to-besu",title:"Migrate to Besu",description:"Migrate to Besu from a different Ethereum execution client.",source:"@site/docs/public-networks/get-started/migrate-to-besu.md",sourceDirName:"public-networks/get-started",slug:"/public-networks/get-started/migrate-to-besu",permalink:"/development/public-networks/get-started/migrate-to-besu",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/get-started/migrate-to-besu.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"}],version:"current",lastUpdatedAt:1700169422,formattedLastUpdatedAt:"Nov 16, 2023",frontMatter:{description:"Migrate to Besu from a different Ethereum execution client.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Connect to a testnet",permalink:"/development/public-networks/get-started/connect/testnet"},next:{title:"How to",permalink:"/development/public-networks/how-to"}},s={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrate-to-besu"},"Migrate to Besu"),(0,o.kt)("p",null,"Migrate from a different Ethereum ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/the-merge#execution-clients"},"execution client")," to Besu to contribute to ",(0,o.kt)("a",{parentName:"p",href:"https://clientdiversity.org/"},"client diversity"),"."),(0,o.kt)("p",null,"To migrate from a different client, ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/connect/mainnet#2-start-besu"},"configure Besu as an execution client")," and connect your ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/the-merge#consensus-clients"},"consensus client")," to Besu instead of your original execution client."),(0,o.kt)("p",null,"To minimize downtime while ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/connect/sync-node"},"Besu syncs")," and avoid downtime penalties, you can sync Besu with a new consensus layer instance. Once Besu has fully synced you can connect it to your existing consensus client."),(0,o.kt)("p",null,"Find guides to switch from specific clients on the ",(0,o.kt)("a",{parentName:"p",href:"https://clientdiversity.org/#switch"},"client diversity website"),"."))}d.isMDXComponent=!0}}]);