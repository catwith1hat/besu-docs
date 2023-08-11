"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[87012],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},52074:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Production",sidebar_position:6,description:"Deploying Besu Helm Charts for production on a Kubernetes cluster",tags:["private networks"]},i="Deploy for production",s={unversionedId:"private-networks/tutorials/kubernetes/production",id:"version-23.4.1/private-networks/tutorials/kubernetes/production",title:"Production",description:"Deploying Besu Helm Charts for production on a Kubernetes cluster",source:"@site/versioned_docs/version-23.4.1/private-networks/tutorials/kubernetes/production.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/production",permalink:"/private-networks/tutorials/kubernetes/production",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/tutorials/kubernetes/production.md",tags:[{label:"private networks",permalink:"/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1691790731,formattedLastUpdatedAt:"Aug 11, 2023",sidebarPosition:6,frontMatter:{title:"Production",sidebar_position:6,description:"Deploying Besu Helm Charts for production on a Kubernetes cluster",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Maintenance",permalink:"/private-networks/tutorials/kubernetes/maintenance"},next:{title:"Configure Kubernetes mode in NAT manager",permalink:"/private-networks/tutorials/kubernetes/nat-manager"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Check that you can connect to the cluster with <code>kubectl</code>",id:"check-that-you-can-connect-to-the-cluster-with-kubectl",level:3},{value:"Deploy the network",id:"deploy-the-network",level:3},{value:"Best practices",id:"best-practices",level:2},{value:"Multi-cluster support",id:"multi-cluster-support",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-for-production"},"Deploy for production"),(0,o.kt)("p",null,"You can deploy Besu for production on a Kubernetes cluster."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clone the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/quorum-kubernetes"},"Quorum-Kubernetes")," repository"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/private-networks/tutorials/kubernetes/cluster"},"running Kubernetes cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubectl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm3"))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"To get things production-ready, we'll use the same charts, and set a few of the values in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster")," map as in the ",(0,o.kt)("a",{parentName:"p",href:"#deploy-the-network"},"Deploy")," section."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The following tutorial ONLY supports AWS and Azure currently. Other cloud providers will be added in time.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"We recommend using AWS RDS or Azure PostgreSQL in High Availability mode for any Tessera nodes that you use. The templates don't include that functionality. They can be provisioned with CloudFormation or Azure Resource Manager, respectively. Once created, please specify the connection details to the ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yml"),".")),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("h3",{id:"check-that-you-can-connect-to-the-cluster-with-kubectl"},"Check that you can connect to the cluster with ",(0,o.kt)("inlineCode",{parentName:"h3"},"kubectl")),(0,o.kt)("p",null,"Once you have a ",(0,o.kt)("a",{parentName:"p",href:"/private-networks/tutorials/kubernetes/cluster"},"cluster running"),", verify ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," is connected to cluster with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl version\nClient Version: version.Info{Major:"1", Minor:"23", GitVersion:"v1.23.1", GitCommit:"86ec240af8cbd1b60bcc4c03c20da9b98005b92e", GitTreeState:"clean", BuildDate:"2021-12-16T11:41:01Z", GoVersion:"go1.17.5", Compiler:"gc", Platform:"linux/amd64"}\nServer Version: version.Info{Major:"1", Minor:"22", GitVersion:"v1.22.3", GitCommit:"c92036820499fedefec0f847e2054d824aea6cd1", GitTreeState:"clean", BuildDate:"2021-10-27T18:35:25Z", GoVersion:"go1.16.9", Compiler:"gc", Platform:"linux/amd64"}\n')),(0,o.kt)("h3",{id:"deploy-the-network"},"Deploy the network"),(0,o.kt)("p",null,"For the rest of this tutorial we use Helm charts. After you have cloned the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes"},"Quorum-Kubernetes")," repository, change the directory to ",(0,o.kt)("inlineCode",{parentName:"p"},"helm")," for the rest of this tutorial."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd helm\n")),(0,o.kt)("p",null,"Each helm chart has the following keys that must be set."),(0,o.kt)("p",null,"Specify either ",(0,o.kt)("inlineCode",{parentName:"p"},"aws")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"azure")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.provider"),". Additionally, set ",(0,o.kt)("inlineCode",{parentName:"p"},"cloudNativeServices: true")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"reclaimPolicy: Retain")," so that it looks like the following for AWS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cluster:\n  provider: aws  # choose from: aws | azure\n  cloudNativeServices: true # set to true to use Cloud Native Services (SecretsManager and IAM for AWS; KeyVault & Managed Identities for Azure)\n  reclaimPolicy: Retain # set to either Retain or Delete; note that PVCs and PVs will still exist after a 'helm delete'. Setting to Retain will keep volumes even if PVCs/PVs are deleted in kubernetes. Setting to Delete will remove volumes from EC2 EBS when PVC is deleted\n")),(0,o.kt)("p",null,"Follow the steps outlined in the ",(0,o.kt)("a",{parentName:"p",href:"/private-networks/tutorials/kubernetes/charts"},"deploy charts")," tutorial to deploy the network."),(0,o.kt)("h2",{id:"best-practices"},"Best practices"),(0,o.kt)("p",null,"The most important thing is to plan your network out on paper first and then test it in a Dev cluster to make sure connectivity works with your applications and you get the required throughput in transactions per second (TPS). We also recommend you test the entire process, from provisioning infrastructure to updating nodes on a Dev cluster, prior to launching your production network."),(0,o.kt)("p",null,"By default, the cloud Kubernetes clusters take care of availability and do multi-zones within a region. The scheduler also ensures that deployments are spread out across zones. Where possible, we recommend you use multiple bootnodes and static nodes to speed up peering."),(0,o.kt)("p",null,"You can connect to APIs and services outside the cluster normally, but connecting into your network (such as adding an on-premise node to the network) might require more configuration. Please check the ",(0,o.kt)("a",{parentName:"p",href:"/private-networks/tutorials/kubernetes/#limitations"},"limitations")," and use CNI where possible. To connect an external node to your cluster, the easiest way is to use a VPN as seen in the following ",(0,o.kt)("a",{parentName:"p",href:"#multi-cluster-support"},"multi-cluster")," setup."),(0,o.kt)("p",null,"Finally, we recommend setting up monitoring and alerting from the beginning, so you can get early warnings of issues rather than after failure. We have a monitoring chart which uses Grafana and you can use it with Alertmanager to create alerts or alternatively alert via Cloudwatch or Azure Monitoring."),(0,o.kt)("h2",{id:"multi-cluster-support"},"Multi-cluster support"),(0,o.kt)("p",null,"When CNI is used, multi-cluster support is simple, but you have to cater for cross-cluster DNS names. Ideally, you want to create two separate VPCs (or VNets) and make sure they have different base CIDR blocks so that IP addresses don't conflict. Once done, peer the VPCs together and update the subnet route table, so they are effectively a giant single network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"multi-cluster",src:r(32400).Z,width:"1151",height:"591"})),(0,o.kt)("p",null,"When you ",(0,o.kt)("a",{parentName:"p",href:"/private-networks/tutorials/kubernetes/cluster"},"spin up clusters"),", use ",(0,o.kt)("a",{parentName:"p",href:"/private-networks/tutorials/kubernetes/#limitations"},"CNI")," and CIDR blocks to match the subnet's CIDR settings. Then deploy the genesis chart on one cluster and copy across the genesis file and static nodes config maps. Depending on your DNS settings, they might be fine as is, or they might need to be actual IP addresses. That is, you can provision cluster B only after cluster A has Besu nodes up and running."),(0,o.kt)("p",null,"Deploy the network on cluster A, and then on cluster B. Besu nodes on cluster A should work as expected, and Besu nodes on cluster B should use the list of peers provided to communicate with the nodes on cluster A."),(0,o.kt)("p",null,"Keeping the list of peers on the clusters live and up to date can be challenging, so we recommend using the cloud service provider's DNS service such as Route 53 or Azure DNS and adapting the charts to create entries for each node when it comes up."))}d.isMDXComponent=!0},32400:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-3-eb071f2ad027b1e11e96e3c4f68a745a.png"}}]);