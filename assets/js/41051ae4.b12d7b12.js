"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[38989],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>v});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(v,p(p({ref:r},l),{},{components:t})):n.createElement(v,p({ref:r},l))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54442:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={title:"Use EEA-compliant privacy",description:"Hyperledger Besu JSON-RPC methods to use for EEA-compliant privacy",sidebar_position:1},p="Use EEA-compliant privacy",i={unversionedId:"private-networks/how-to/use-privacy/eea-compliant",id:"version-23.4.0/private-networks/how-to/use-privacy/eea-compliant",title:"Use EEA-compliant privacy",description:"Hyperledger Besu JSON-RPC methods to use for EEA-compliant privacy",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/use-privacy/eea-compliant.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/eea-compliant",permalink:"/23.4.0/private-networks/how-to/use-privacy/eea-compliant",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/use-privacy/eea-compliant.md",tags:[],version:"23.4.0",lastUpdatedAt:1687918532,formattedLastUpdatedAt:"Jun 28, 2023",sidebarPosition:1,frontMatter:{title:"Use EEA-compliant privacy",description:"Hyperledger Besu JSON-RPC methods to use for EEA-compliant privacy",sidebar_position:1},sidebar:"privateDocSidebar",previous:{title:"Use Sirato Explorer",permalink:"/23.4.0/private-networks/how-to/monitor/sirato-explorer"},next:{title:"Use Besu-extended privacy",permalink:"/23.4.0/private-networks/how-to/use-privacy/besu-extended"}},c={},s=[{value:"Privacy group type",id:"privacy-group-type",level:2}],l={toc:s},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-eea-compliant-privacy"},"Use EEA-compliant privacy"),(0,a.kt)("p",null,"When using Hyperledger Besu ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/privacy-groups"},"EEA-compliant privacy"),", the group of nodes specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"privateFrom")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"privateFor")," form a privacy group, to which Tessera assigns a unique privacy group ID."),(0,a.kt)("p",null,"To enable the ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#eea-methods"},(0,a.kt)("inlineCode",{parentName:"a"},"EEA")," API methods"),", use the ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-http-api"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," or ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-ws-api"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-ws-api"))," command line options."),(0,a.kt)("p",null,"To create an EEA-compliant private transaction, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"privateFor")," when creating the signed transaction passed as an input parameter to ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#eea_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),"."),(0,a.kt)("h2",{id:"privacy-group-type"},"Privacy group type"),(0,a.kt)("p",null,"Privacy groups created when specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"privateFrom")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"privateFor")," have a ",(0,a.kt)("inlineCode",{parentName:"p"},"LEGACY")," privacy group type when returned by ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#priv_findprivacygroup"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_findPrivacyGroup")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    {\n      "privacyGroupId": "68/Cq0mVjB8FbXDLE1tbDRAvD/srluIok137uFOaClM=",\n      "name": "legacy",\n      "description": "Privacy groups to support the creation of groups by privateFor and privateFrom",\n      "type": "LEGACY",\n      "members": [\n        "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw=",\n        "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="\n      ]\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);