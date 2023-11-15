"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[78066],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,b=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={title:"Maintenance",sidebar_position:5,description:"Maintenance for Besu on a Kubernetes cluster",tags:["private networks"]},o="Maintenance",i={unversionedId:"private-networks/tutorials/kubernetes/maintenance",id:"version-23.7.3/private-networks/tutorials/kubernetes/maintenance",title:"Maintenance",description:"Maintenance for Besu on a Kubernetes cluster",source:"@site/versioned_docs/version-23.7.3/private-networks/tutorials/kubernetes/maintenance.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/maintenance",permalink:"/23.7.3/private-networks/tutorials/kubernetes/maintenance",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/tutorials/kubernetes/maintenance.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1700080085,formattedLastUpdatedAt:"Nov 15, 2023",sidebarPosition:5,frontMatter:{title:"Maintenance",sidebar_position:5,description:"Maintenance for Besu on a Kubernetes cluster",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Using the Quorum Explorer",permalink:"/23.7.3/private-networks/tutorials/kubernetes/quorum-explorer"},next:{title:"Production",permalink:"/23.7.3/private-networks/tutorials/kubernetes/production"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Update a persistent volume claim size",id:"update-a-persistent-volume-claim-size",level:2},{value:"Update Besu versions",id:"update-besu-versions",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"maintenance"},"Maintenance"),(0,r.kt)("p",null,"You can perform maintenance for Besu on a Kubernetes cluster."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clone the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/quorum-kubernetes"},"Quorum-Kubernetes")," repository"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/23.7.3/private-networks/tutorials/kubernetes/cluster"},"running Kubernetes cluster")," with a ",(0,r.kt)("a",{parentName:"li",href:"/23.7.3/private-networks/tutorials/kubernetes/charts"},"network")),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubectl")),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm3"))),(0,r.kt)("h2",{id:"update-a-persistent-volume-claim-size"},"Update a persistent volume claim size"),(0,r.kt)("p",null,"Over time, as the chain grows, so will the amount of space used by the persistent volume claim (PVC). As of Kubernetes v1.11, ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/#allow-volume-expansion"},"certain types of Storage Classes")," allow volume resizing. Production charts for Azure use Azure Files, and on AWS use EBS Block Store which allow for volume expansion."),(0,r.kt)("p",null,"To update the volume size, you must update the override values file. For example, to increase the size on the transaction nodes volumes, add the following snippet to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/values/txnode.yml"},(0,r.kt)("inlineCode",{parentName:"a"},"txnode values.yml"))," file, with the new size limit (the following example uses 50Gi)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'storage:\n  sizeLimit: "50Gi"\n  pvcSizeLimit: "50Gi"\n')),(0,r.kt)("p",null,"Once complete, update the node via helm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade tx-1 ./charts/besu-node --namespace besu --values ./values/txnode.yml\n")),(0,r.kt)("h2",{id:"update-besu-versions"},"Update Besu versions"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"When updating Besu nodes across a cluster, perform the updates as a rolling update and not all at once, especially for the validator pool. If all the validators are taken offline, the chain halts, and you must wait for round changes to expire before blocks are created again.")),(0,r.kt)("p",null,"Updates for Besu can be done via Helm in exactly the same manner as other applications. Alternatively, this can be done via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),". This example updates a node called ",(0,r.kt)("inlineCode",{parentName:"p"},"besu-validator-3"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the update policy to use rolling updates (if not done already):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch statefulset besu-validator-3 --namespace besu -p \'{"spec":{"updateStrategy":{"type":"RollingUpdate"}}}\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the Besu version via Helm:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade bootnode-1 ./charts/besu-node --namespace besu --values ./values/bootnode.yml --set image.besu.tag=21.10.0\n")),(0,r.kt)("p",{parentName:"li"},"Or via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch statefulset besu-validator-3 --namespace besu --type=\'json\' -p=\'[{"op": "replace", "path": "/spec/template/spec/containers/0/image", "value":"hyperledger/besu:21.10.0"}]\'\n')))))}c.isMDXComponent=!0}}]);