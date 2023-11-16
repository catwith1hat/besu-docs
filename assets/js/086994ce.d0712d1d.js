"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[77511],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return a?r.createElement(k,o(o({ref:t},u),{},{components:a})):r.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91587:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={title:"Create a cluster",sidebar_position:2,description:"Create a cluster for deployment",tags:["private networks"]},o="Create a cluster",i={unversionedId:"private-networks/tutorials/kubernetes/cluster",id:"version-23.4.1/private-networks/tutorials/kubernetes/cluster",title:"Create a cluster",description:"Create a cluster for deployment",source:"@site/versioned_docs/version-23.4.1/private-networks/tutorials/kubernetes/cluster.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/cluster",permalink:"/23.4.1/private-networks/tutorials/kubernetes/cluster",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/tutorials/kubernetes/cluster.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1700169422,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:2,frontMatter:{title:"Create a cluster",sidebar_position:2,description:"Create a cluster for deployment",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Local playground",permalink:"/23.4.1/private-networks/tutorials/kubernetes/playground"},next:{title:"Deploying Charts",permalink:"/23.4.1/private-networks/tutorials/kubernetes/charts"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Local Clusters",id:"local-clusters",level:2},{value:"Minikube",id:"minikube",level:3},{value:"kind",id:"kind",level:3},{value:"Rancher",id:"rancher",level:3},{value:"Cloud clusters",id:"cloud-clusters",level:2},{value:"AWS EKS",id:"aws-eks",level:3},{value:"Azure Kubernetes Service",id:"azure-kubernetes-service",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-cluster"},"Create a cluster"),(0,n.kt)("p",null,"You can create a ",(0,n.kt)("a",{parentName:"p",href:"#local-clusters"},"local")," or ",(0,n.kt)("a",{parentName:"p",href:"#cloud-clusters"},"cloud")," cluster to deploy a Besu network using Kubernetes."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clone the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/quorum-kubernetes"},"Quorum-Kubernetes")," repository"),(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubectl")),(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm3")),(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},"AWS CLI")," and ",(0,n.kt)("a",{parentName:"li",href:"https://eksctl.io/"},(0,n.kt)("inlineCode",{parentName:"a"},"eksctl"))," for AWS EKS clusters"),(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"},"Azure CLI")," for Azure AKS clusters"),(0,n.kt)("li",{parentName:"ul"},"Install the cloud-specific CLI")),(0,n.kt)("h2",{id:"local-clusters"},"Local Clusters"),(0,n.kt)("p",null,"Use one of several options to create a local cluster. Select one listed below, or another that you're comfortable with."),(0,n.kt)("h3",{id:"minikube"},"Minikube"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")," is one of the most popular options to spin up a local Kubernetes cluster for development. You can ",(0,n.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"install a version")," based on your architecture."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We recommend at least 2 CPUs and 16GB of RAM.")),(0,n.kt)("p",null,"To start the cluster, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --cpus 2 --memory 16384 --cni auto\n")),(0,n.kt)("h3",{id:"kind"},"kind"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io"},"kind (Kubernetes in Docker)")," is a lightweight tool for running local Kubernetes clusters. The ",(0,n.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start#installation"},"installation")," is similar to ",(0,n.kt)("a",{parentName:"p",href:"#minikube"},"Minikube"),"."),(0,n.kt)("p",null,"To start the cluster, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster\n")),(0,n.kt)("h3",{id:"rancher"},"Rancher"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/"},"Rancher")," is a lightweight open source desktop application for Mac, Windows, and Linux. It provides Kubernetes and container management, and allows you to choose the version of Kubernetes to run."),(0,n.kt)("p",null,"It can build, push, pull, and run container images. Built container images can be run without needing a registry."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The official Docker-CLI is not supported but rather uses ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/containerd/nerdctl"},"nerdctl")," which is a Docker-CLI compatible tool for containerd, and is automatically installed with Rancher Desktop.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For Windows, you must ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"install Windows Subsystem for Linux (WSL)")," to install Rancher Desktop."),(0,n.kt)("p",{parentName:"admonition"},"Refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rancherdesktop.io/"},"official Rancher Desktop documentation")," for system requirements and installation instructions.")),(0,n.kt)("h2",{id:"cloud-clusters"},"Cloud clusters"),(0,n.kt)("h3",{id:"aws-eks"},"AWS EKS"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/eks/"},"AWS Elastic Kubernetes Service (AWS EKS)")," is one of the most popular platforms to deploy Hyperledger Besu."),(0,n.kt)("p",null,"To create a cluster in AWS, you must install the ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cli/"},"AWS CLI")," and ",(0,n.kt)("a",{parentName:"p",href:"https://eksctl.io/"},(0,n.kt)("inlineCode",{parentName:"a"},"eksctl")),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/aws"},"template")," comprises the base infrastructure used to build the cluster and other resources in AWS. We also use some native services with the cluster for performance and best practices, these include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/aws/amazon-eks-pod-identity-webhook"},"Pod identities"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html"},"Secrets Store CSI drivers"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Dynamic storage classes backed by AWS EBS. The ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims"},"volume claims")," are fixed sizes and can be updated as you grow via helm updates, and won't need to re-provision the underlying storage class.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/pod-networking.html"},"CNI")," networking mode for EKS. By default, EKS clusters use ",(0,n.kt)("inlineCode",{parentName:"p"},"kubenet"),' to create a virtual network and subnet. Nodes get an IP address from a virtual network subnet. Network address translation (NAT) is then configured on the nodes, and pods receive an IP address "hidden" behind the node IP.'),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This approach reduces the number of IP addresses that you must reserve in your network space for pods, but constrains what can connect to the nodes from outside the cluster (for example, on-premise nodes or those on another cloud provider).")))),(0,n.kt)("p",null,"AWS Container Networking Interface (CNI) provides each pod with an IP address from the subnet, and can be accessed directly. The IP addresses must be unique across your network space, and must be planned in advance. Each node has a configuration parameter for the maximum number of pods that it supports. The equivalent number of IP addresses per node are then reserved up front for that node. This approach requires more planning, and can lead to IP address exhaustion as your application demands grow, however makes it easier for external nodes to connect to your cluster."),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"EKS clusters must not use 169.254.0.0/16, 172.30.0.0/16, 172.31.0.0/16, or 192.0.2.0/24 for the Kubernetes service address range.")),(0,n.kt)("p",null,"To provision the cluster:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/aws/templates/cluster.yml"},"cluster.yml"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Deploy the template:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"eksctl create cluster -f ./templates/cluster.yml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Your ",(0,n.kt)("inlineCode",{parentName:"p"},".kube/config")," should be connected to the cluster automatically, but if not, run the commands below and replace ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS_REGION")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with details that are specific to your deployment."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"aws sts get-caller-identity\naws eks --region AWS_REGION update-kubeconfig --name CLUSTER_NAME\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After the deployment completes, provision the EBS drivers for the volumes. While it is possible to use the in-tree ",(0,n.kt)("inlineCode",{parentName:"p"},"aws-ebs")," driver that's natively supported by Kubernetes, it is no longer being updated and does not support newer EBS features such as the ",(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/68359043/whats-the-difference-between-ebs-csi-aws-com-vs-kubernetes-io-aws-ebs-for-provi"},"cheaper and better gp3 volumes"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster.yml")," file (from the steps above) that is included in this folder automatically deploys the cluster with the EBS IAM policies, but you need to install the EBS CSI drivers. This can be done through the AWS Management Console for simplicity, or via a CLI command as below. Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS_REGION")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS_ACCOUNT")," with details that are specific to your deployment."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"eksctl create iamserviceaccount --name ebs-csi-controller-sa --namespace kube-system --cluster CLUSTER_NAME --region AWS_REGION --attach-policy-arn arn:aws:iam::aws:policy/service-role/AmazonEBSCSIDriverPolicy --approve --role-only --role-name AmazonEKS_EBS_CSI_DriverRole\n\neksctl create addon --name aws-ebs-csi-driver --cluster CLUSTER_NAME --region AWS_REGION --service-account-role-arn arn:aws:iam::AWS_ACCOUNT:role/AmazonEKS_EBS_CSI_DriverRole --force\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once the deployment is completed, provision the Secrets Manager IAM and CSI driver. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"besu")," (or equivalent) for ",(0,n.kt)("inlineCode",{parentName:"p"},"NAMESPACE")," and replace ",(0,n.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS_REGION")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS_ACCOUNT")," with details that are specific to your deployment."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'helm repo add secrets-store-csi-driver https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts\nhelm install --namespace kube-system --create-namespace csi-secrets-store secrets-store-csi-driver/secrets-store-csi-driver\nkubectl apply -f https://raw.githubusercontent.com/aws/secrets-store-csi-driver-provider-aws/main/deployment/aws-provider-installer.yaml\n\nPOLICY_ARN=$(aws --region AWS_REGION --query Policy.Arn --output text iam create-policy --policy-name quorum-node-secrets-mgr-policy --policy-document \'{\n    "Version": "2012-10-17",\n    "Statement": [ {\n        "Effect": "Allow",\n        "Action": ["secretsmanager:CreateSecret","secretsmanager:UpdateSecret","secretsmanager:DescribeSecret","secretsmanager:GetSecretValue","secretsmanager:PutSecretValue","secretsmanager:ReplicateSecretToRegions","secretsmanager:TagResource"],\n        "Resource": ["arn:aws:secretsmanager:AWS_REGION:AWS_ACCOUNT:secret:besu-node-*"]\n    } ]\n}\')\n\n# If you have deployed the above policy before, you can acquire its ARN:\nPOLICY_ARN=$(aws iam list-policies --scope Local \\\n--query \'Policies[?PolicyName==`quorum-node-secrets-mgr-policy`].Arn\' \\\n--output text)\n\neksctl create iamserviceaccount --name quorum-node-secrets-sa --namespace NAMESPACE --region=AWS_REGION --cluster CLUSTER_NAME --attach-policy-arn "$POLICY_ARN" --approve --override-existing-serviceaccounts\n')),(0,n.kt)("admonition",{parentName:"li",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"The above command creates a service account called ",(0,n.kt)("inlineCode",{parentName:"p"},"quorum-node-secrets-sa")," and is preconfigured in the helm charts override ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yml")," files, for ease of use."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Optionally, deploy the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/aws/templates/k8s-dashboard"},"kubernetes dashboard"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can now use your cluster and you can deploy ",(0,n.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/tutorials/kubernetes/charts"},"Helm charts")," to it."))),(0,n.kt)("h3",{id:"azure-kubernetes-service"},"Azure Kubernetes Service"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/kubernetes-service/"},"Azure Kubernetes Service (AKS)")," is another popular cloud platform that you can use to deploy Besu. To create a cluster in Azure, you must install the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"},"Azure CLI")," and have admin rights on your Azure subscription to enable some preview features on AKS."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/azure"},"template")," comprises the base infrastructure used to build the cluster and other resources in Azure. We also make use Azure native services and features after the cluster is created. These include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/use-azure-ad-pod-identity"},"AAD pod identities"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/key-vault/general/key-vault-integrate-kubernetes"},"Secrets Store CSI drivers"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Dynamic storage classes backed by Azure Files. The ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/azure-disks-dynamic-pv"},"volume claims")," are fixed sizes and can be updated as you grow via helm updates, and won't need to re-provision the underlying storage class.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/configure-azure-cni"},"CNI")," networking mode for AKS. By default, AKS clusters use ",(0,n.kt)("inlineCode",{parentName:"p"},"kubenet"),', to create a virtual network and subnet. Nodes get an IP address from a virtual network subnet. Network address translation (NAT) is then configured on the nodes, and pods receive an IP address "hidden" behind the node IP.'),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This approach reduces the number of IP addresses you must reserve in your network space for pods to use, but constrains what can connect to the nodes from outside the cluster (for example, on-premise nodes or other cloud providers).")))),(0,n.kt)("p",null,"AKS Container Networking Interface (CNI) provides each pod with an IP address from the subnet, and can be accessed directly. These IP addresses must be unique across your network space, and must be planned in advance. Each node has a configuration parameter for the maximum number of pods that it supports. The equivalent number of IP addresses per node are then reserved up front for that node. This approach requires more planning, and can leads to IP address exhaustion as your application demands grow, however makes it easier for external nodes to connect to your cluster."),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Please do not create more than one AKS cluster in the same subnet. AKS clusters may not use ",(0,n.kt)("inlineCode",{parentName:"p"},"169.254.0.0/16"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"172.30.0.0/16"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"172.31.0.0/16"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"192.0.2.0/24")," for the Kubernetes service address range.")),(0,n.kt)("p",null,"To provision the cluster:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the preview features that allow you to use AKS with CNI, and a managed identity to authenticate and run cluster operations with other services. We also enable ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/use-azure-ad-pod-identity"},"AAD pod identities")," which use the managed identity. This is in preview, so you must enable this feature by registering the ",(0,n.kt)("inlineCode",{parentName:"p"},"EnablePodIdentityPreview")," feature:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"az feature register --name EnablePodIdentityPreview --namespace Microsoft.ContainerService\n")),(0,n.kt)("p",{parentName:"li"},"This takes a little while and you can check on progress by running:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"az feature list --namespace Microsoft.ContainerService -o table\n")),(0,n.kt)("p",{parentName:"li"},"Install or update your local Azure CLI with preview features:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"az extension add --name aks-preview\naz extension update --name aks-preview\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a resource group if you don't already have one:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'az group create --name BesuGroup --location "East US"\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Deploy the template:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Navigate to the ",(0,n.kt)("a",{parentName:"li",href:"https://portal.azure.com"},"Azure portal"),", select ",(0,n.kt)("strong",{parentName:"li"},"+ Create a resource")," in the upper left corner."),(0,n.kt)("li",{parentName:"ol"},"Search for ",(0,n.kt)("inlineCode",{parentName:"li"},"Template deployment (deploy using custom templates)")," and select ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Build your own template in the editor"),"."),(0,n.kt)("li",{parentName:"ol"},"Remove the contents (JSON) in the editor and paste in the contents of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/azure/arm/azuredeploy.json"},(0,n.kt)("inlineCode",{parentName:"a"},"azuredeploy.json"))),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Save"),"."),(0,n.kt)("li",{parentName:"ol"},"Input provisioning parameters in the displayed user interface."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Provision the drivers:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/azure/scripts/bootstrap.sh"},"bootstrap")," script.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"besu")," for ",(0,n.kt)("inlineCode",{parentName:"p"},"AKS_NAMESPACE"),", and update ",(0,n.kt)("inlineCode",{parentName:"p"},"AKS_RESOURCE_GROUP"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"AKS_CLUSTER_NAME"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"AKS_MANAGED_IDENTITY")," in the commands below to match your settings and deployed resources from step 3."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'./scripts/bootstrap.sh "AKS_RESOURCE_GROUP" "AKS_CLUSTER_NAME" "AKS_MANAGED_IDENTITY" "AKS_NAMESPACE"\n'))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can now use your cluster and you can deploy ",(0,n.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/tutorials/kubernetes/charts"},"Helm charts")," to it."))))}m.isMDXComponent=!0}}]);