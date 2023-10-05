"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[19510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(h,l(l({ref:t},c),{},{components:r})):o.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(67294),n=r(86010);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(a,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>E});var o=r(87462),n=r(67294),a=r(86010),l=r(12466),i=r(16550),s=r(91980),u=r(67392),c=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:o,default:n}}=e;return{value:t,label:r,attributes:o,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const o=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,a=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[s,u]=h({queryString:r,groupId:o}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Nk)(r);return[o,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:o}),f=(()=>{const e=s??p;return m({value:e,tabValues:a})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var f=r(72389);const v="tabList__CuJ",k="tabItem_LNqP";function g(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),o=u[r].value;o!==i&&(p(t),s(o))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,a.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",v)},n.createElement(g,(0,o.Z)({},e,t)),n.createElement(y,(0,o.Z)({},e,t)))}function E(e){const t=(0,f.Z)();return n.createElement(w,(0,o.Z)({key:String(t)},e))}},74250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=r(87462),n=(r(67294),r(3905)),a=r(74866),l=r(85162);const i={title:"Use EVM tool",sidebar_position:1,description:"Hyperledger Besu EVM tool",tags:["public networks","private networks"]},s="Use the EVM tool",u={unversionedId:"public-networks/how-to/troubleshoot/evm-tool",id:"version-23.7.2/public-networks/how-to/troubleshoot/evm-tool",title:"Use EVM tool",description:"Hyperledger Besu EVM tool",source:"@site/versioned_docs/version-23.7.2/public-networks/how-to/troubleshoot/evm-tool.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/evm-tool",permalink:"/23.7.2/public-networks/how-to/troubleshoot/evm-tool",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/public-networks/how-to/troubleshoot/evm-tool.md",tags:[{label:"public networks",permalink:"/23.7.2/tags/public-networks"},{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1696539159,formattedLastUpdatedAt:"Oct 5, 2023",sidebarPosition:1,frontMatter:{title:"Use EVM tool",sidebar_position:1,description:"Hyperledger Besu EVM tool",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Upgrade Besu",permalink:"/23.7.2/public-networks/how-to/upgrade-node"},next:{title:"Trace transactions",permalink:"/23.7.2/public-networks/how-to/troubleshoot/trace-transactions"}},c={},p=[{value:"Get the EVM tool",id:"get-the-evm-tool",level:2},{value:"Build from source",id:"build-from-source",level:3},{value:"Execute with Docker",id:"execute-with-docker",level:3},{value:"EVM tool run options",id:"evm-tool-run-options",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-the-evm-tool"},"Use the EVM tool"),(0,n.kt)("p",null,"The Besu EVM tool is a CLI program that executes arbitrary EVM programs and Ethereum State Tests outside the context of an operating node. Use the EVM tool for benchmarking and fuzz testing."),(0,n.kt)("h2",{id:"get-the-evm-tool"},"Get the EVM tool"),(0,n.kt)("p",null,"The Besu EVM tool does not have a standard zip file distribution. To use, you need to either build from the source repository or use a pre-published docker image."),(0,n.kt)("h3",{id:"build-from-source"},"Build from source"),(0,n.kt)("p",null,"To build from source, run the following from the root of the Besu repository:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew :ethereum:evmTool:installDist\n")),(0,n.kt)("p",null,"An extractable archive files is created in ",(0,n.kt)("inlineCode",{parentName:"p"},"ethereum/evmtool/build/distributions")," and an executable installation in ",(0,n.kt)("inlineCode",{parentName:"p"},"ethereum/evmtool/build/install/evmtool"),"."),(0,n.kt)("p",null,"Execute the EVM tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ethereum/evmtool/build/install/evmtool/bin/evm <evmtool options>\n")),(0,n.kt)("h3",{id:"execute-with-docker"},"Execute with Docker"),(0,n.kt)("p",null,"To run the Besu EVM tool in a container:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -rm <docker options> hyperledger/besu-evmtool:develop <evmtool options>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Because no data is stored in local directories we recommended using the ",(0,n.kt)("inlineCode",{parentName:"li"},"-rm")," docker option. The ",(0,n.kt)("inlineCode",{parentName:"li"},"-rm")," option deletes the container at the end of execution."),(0,n.kt)("li",{parentName:"ul"},"If you use an option that requires input from standard in, use the ",(0,n.kt)("inlineCode",{parentName:"li"},"-i")," docker option. The ",(0,n.kt)("inlineCode",{parentName:"li"},"-i")," option pipes standard input to the EVM tool."),(0,n.kt)("li",{parentName:"ul"},"If you need to reference files we recommend using a docker file binding, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"-v ${PWD}:/opt/data"),", which maps the current directory to the ",(0,n.kt)("inlineCode",{parentName:"li"},"/opt/data")," directory in the container.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," tag is the latest released version of Besu, starting with 1.5.3. The ",(0,n.kt)("inlineCode",{parentName:"p"},"develop")," tag is the current main branch code that will go into a future release version of Besu.")),(0,n.kt)("h2",{id:"evm-tool-run-options"},"EVM tool run options"),(0,n.kt)("p",null,"The first mode of the EVM tool runs an arbitrary EVM and is invoked without an extra command. ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/reference/evm-tool"},"Command line options")," specify the code and other contextual information."),(0,n.kt)("p",null,"The EVM tool also has a ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/reference/evm-tool#state-test-options"},(0,n.kt)("inlineCode",{parentName:"a"},"state-test")," subcommand")," that allows ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ethereum/tests/tree/develop/GeneralStateTests"},"Ethereum state tests")," to be evaluated, and a ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/reference/evm-tool#eof-code-validation"},(0,n.kt)("inlineCode",{parentName:"a"},"code-validate")," subcommand")," that allows ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-3540"},"Ethereum object formatted (EOF)")," code to be validated. Most of the options from EVM execution don't apply."),(0,n.kt)(a.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{label:"state-test",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"evm state-test <state-test> --nomemory\n"))),(0,n.kt)(l.Z,{label:"code-validate",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"evm code-validate --file <file>\n")))),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/reference/evm-tool"},"EVM tool reference")," provides more information on these modes."))}m.isMDXComponent=!0}}]);