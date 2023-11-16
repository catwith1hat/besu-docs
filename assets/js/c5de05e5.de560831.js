"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[61725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>w});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),v=a,w=d["".concat(c,".").concat(v)]||d[v]||u[v]||o;return n?r.createElement(w,s(s({ref:t},l),{},{components:n})):r.createElement(w,s({ref:t},l))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},21118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Create and send transactions",description:"private networks send transactions overview",tags:["private networks"]},s="Create and send transactions",i={unversionedId:"private-networks/how-to/send-transactions/index",id:"version-23.4.1/private-networks/how-to/send-transactions/index",title:"Create and send transactions",description:"private networks send transactions overview",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/send-transactions/index.md",sourceDirName:"private-networks/how-to/send-transactions",slug:"/private-networks/how-to/send-transactions/",permalink:"/23.4.1/private-networks/how-to/send-transactions/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/send-transactions/index.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1700169422,formattedLastUpdatedAt:"Nov 16, 2023",frontMatter:{title:"Create and send transactions",description:"private networks send transactions overview",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Alternative elliptic curves",permalink:"/23.4.1/private-networks/how-to/configure/curves"},next:{title:"Create and send private transactions",permalink:"/23.4.1/private-networks/how-to/send-transactions/private-transactions"}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-and-send-transactions"},"Create and send transactions"),(0,a.kt)("p",null,"In private networks, you can create and ",(0,a.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/how-to/send-transactions"},"send regular transactions")," as in public networks."),(0,a.kt)("p",null,"You can also:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.4.1/private-networks/how-to/send-transactions/private-transactions"},"Send private transactions"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.4.1/private-networks/how-to/send-transactions/concurrent-private-transactions"},"Send concurrent private transactions"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.4.1/private-networks/how-to/send-transactions/revert-reason"},"Include revert reason in transactions"),".")))}u.isMDXComponent=!0}}]);