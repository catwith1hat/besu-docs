"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[45050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=u(r),y=o,b=c["".concat(p,".").concat(y)]||c[y]||d[y]||i;return r?n.createElement(b,s(s({ref:t},l),{},{components:r})):n.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=y;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},10824:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:3,title:"Use Kubernetes",description:"Deploying Hyperledger Besu with Kubernetes"},s="Deploy Besu with Kubernetes",a={unversionedId:"private-networks/how-to/deploy/kubernetes",id:"version-23.4.0/private-networks/how-to/deploy/kubernetes",title:"Use Kubernetes",description:"Deploying Hyperledger Besu with Kubernetes",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/deploy/kubernetes.md",sourceDirName:"private-networks/how-to/deploy",slug:"/private-networks/how-to/deploy/kubernetes",permalink:"/23.4.0/private-networks/how-to/deploy/kubernetes",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/deploy/kubernetes.md",tags:[],version:"23.4.0",lastUpdatedAt:1694121010,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Use Kubernetes",description:"Deploying Hyperledger Besu with Kubernetes"},sidebar:"privateDocSidebar",previous:{title:"Use Ansible",permalink:"/23.4.0/private-networks/how-to/deploy/ansible"},next:{title:"Use Ethstats network monitor",permalink:"/23.4.0/private-networks/how-to/deploy/ethstats"}},p={},u=[],l={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-besu-with-kubernetes"},"Deploy Besu with Kubernetes"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes"},"reference implementations")," to install private networks using Kubernetes (K8s). The repository has full support for cloud providers like AWS, Azure, GCP, and IBM, and has production setups that use of identities and cloud-native secret storage services like Azure KeyVault and AWS Secrets Manager."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/tutorials/kubernetes/"},"tutorial")," and familiarize yourself with the reference implementations, and customize them to your requirements."))}c.isMDXComponent=!0}}]);