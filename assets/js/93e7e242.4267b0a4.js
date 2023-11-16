"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[68551],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},v="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),v=s(t),d=n,y=v["".concat(c,".").concat(d)]||v[d]||l[d]||i;return t?a.createElement(y,p(p({ref:r},u),{},{components:t})):a.createElement(y,p({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[v]="string"==typeof e?e:n,p[1]=o;for(var s=2;s<i;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54715:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const i={title:"Create and manage privacy groups",description:"Create and manage privacy groups with Hyperledger Besu",sidebar_position:4,tags:["private networks"]},p="Create and manage privacy groups",o={unversionedId:"private-networks/how-to/use-privacy/privacy-groups",id:"version-23.4.1/private-networks/how-to/use-privacy/privacy-groups",title:"Create and manage privacy groups",description:"Create and manage privacy groups with Hyperledger Besu",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/privacy-groups.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/privacy-groups",permalink:"/23.4.1/private-networks/how-to/use-privacy/privacy-groups",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/privacy-groups.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1700169422,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:4,frontMatter:{title:"Create and manage privacy groups",description:"Create and manage privacy groups with Hyperledger Besu",sidebar_position:4,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Run Tessera with Besu",permalink:"/23.4.1/private-networks/how-to/use-privacy/tessera"},next:{title:"Use flexible privacy groups",permalink:"/23.4.1/private-networks/how-to/use-privacy/flexible"}},c={},s=[],u={toc:s},v="wrapper";function l(e){let{components:r,...t}=e;return(0,n.kt)(v,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-and-manage-privacy-groups"},"Create and manage privacy groups"),(0,n.kt)("p",null,"Hyperledger Besu-extended privacy provides JSON-RPC API methods for creating and managing privacy groups:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/23.4.1/private-networks/reference/api/#priv_createprivacygroup"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_createPrivacyGroup"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/23.4.1/private-networks/reference/api/#priv_findprivacygroup"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_findPrivacyGroup"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/23.4.1/private-networks/reference/api/#priv_deleteprivacygroup"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_deletePrivacyGroup")),".")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can find and delete ",(0,n.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/concepts/privacy/privacy-groups"},"EEA-compliant privacy groups")," using ",(0,n.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/reference/api/#priv_findprivacygroup"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_findPrivacyGroup"))," and ",(0,n.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/reference/api/#priv_deleteprivacygroup"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_deletePrivacyGroup")),".")))}l.isMDXComponent=!0}}]);