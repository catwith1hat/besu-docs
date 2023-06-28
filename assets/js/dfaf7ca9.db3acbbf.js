"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[25033],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73334:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={description:"Monitoring using metrics and logging"},a="Monitoring",p={unversionedId:"private-networks/how-to/monitor/index",id:"version-23.4.0/private-networks/how-to/monitor/index",title:"Monitoring",description:"Monitoring using metrics and logging",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/monitor/index.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/",permalink:"/23.4.0/private-networks/how-to/monitor/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/monitor/index.md",tags:[],version:"23.4.0",lastUpdatedAt:1687918532,formattedLastUpdatedAt:"Jun 28, 2023",frontMatter:{description:"Monitoring using metrics and logging"},sidebar:"privateDocSidebar",previous:{title:"Include revert reason",permalink:"/23.4.0/private-networks/how-to/send-transactions/revert-reason"},next:{title:"Use Grafana Loki",permalink:"/23.4.0/private-networks/how-to/monitor/loki"}},l={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring"},"Monitoring"),(0,o.kt)("p",null,"Use monitoring to identify node and network issues. In private networks, you can ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/monitor/"},"configure metrics and logging")," as in public networks."),(0,o.kt)("p",null,"You can also use the following monitoring tools in private networks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/how-to/monitor/loki"},"Loki")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/how-to/monitor/elastic-stack"},"Elastic Stack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/how-to/monitor/quorum-hibernate"},"Quorum Hibernate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/how-to/monitor/splunk"},"Splunk")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/how-to/monitor/opentelemetry"},"OpenTelemetry")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/how-to/monitor/sirato-explorer"},"Sirato Explorer"))),(0,o.kt)("p",null,"For an overview of monitoring Hyperledger Besu, view ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7BuutRe0I28&feature=youtu.be"},"this recording"),"."))}m.isMDXComponent=!0}}]);