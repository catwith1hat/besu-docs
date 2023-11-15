"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[15145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),o=n(86010);const a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(87462),o=n(67294),a=n(86010),s=n(12466),l=n(16550),u=n(91980),i=n(67392),c=n(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function f(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=f(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,i]=m({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),h=(()=>{const e=u??p;return d({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),b(e)}),[i,b,a]),tabValues:a}}var h=n(72389);const v="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),f=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==l&&(p(t),u(r))},d=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:f},s,{className:(0,a.Z)("tabs__item",g,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",v)},o.createElement(k,(0,r.Z)({},e,t)),o.createElement(w,(0,r.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return o.createElement(y,(0,r.Z)({key:String(t)},e))}},16239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(74866),s=n(85162);const l={title:"Consensus protocols",description:"Besu consensus protocols",sidebar_position:1,tags:["private networks"]},u="Consensus protocols",i={unversionedId:"private-networks/how-to/configure/consensus/index",id:"version-23.7.3/private-networks/how-to/configure/consensus/index",title:"Consensus protocols",description:"Besu consensus protocols",source:"@site/versioned_docs/version-23.7.3/private-networks/how-to/configure/consensus/index.md",sourceDirName:"private-networks/how-to/configure/consensus",slug:"/private-networks/how-to/configure/consensus/",permalink:"/23.7.3/private-networks/how-to/configure/consensus/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/how-to/configure/consensus/index.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1700080085,formattedLastUpdatedAt:"Nov 15, 2023",sidebarPosition:1,frontMatter:{title:"Consensus protocols",description:"Besu consensus protocols",sidebar_position:1,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"How to",permalink:"/23.7.3/private-networks/how-to/"},next:{title:"QBFT",permalink:"/23.7.3/private-networks/how-to/configure/consensus/qbft"}},c={},p=[],f={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consensus-protocols"},"Consensus protocols"),(0,o.kt)("p",null,"Besu supports the following consensus protocols:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.3/private-networks/how-to/configure/consensus/qbft"},"QBFT")," (proof of authority) - The recommended enterprise-grade consensus protocol for private networks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.3/private-networks/how-to/configure/consensus/ibft"},"IBFT 2.0")," (proof of authority) - Supported for existing private networks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.3/private-networks/how-to/configure/consensus/clique"},"Clique")," (proof of authority) - Not recommended for production use."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.3/public-networks/concepts/proof-of-stake/"},"Proof of stake")," - Used on Ethereum Mainnet and public testnets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/"},"Ethash")," (proof of work) - Can be used in ",(0,o.kt)("a",{parentName:"li",href:"/23.7.3/private-networks/tutorials/ethash"},"small development networks"),".")),(0,o.kt)("p",null,"See a ",(0,o.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/concepts/poa"},"comparison of the proof of authority consensus protocols"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," property in the genesis file specifies the consensus protocol for a chain."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{label:"Ethash",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n  ...\n    "ethash": {\n    ...\n    }\n  },\n  ...\n}\n'))),(0,o.kt)(s.Z,{label:"Clique",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    ...\n    "clique": {\n    ...\n    }\n  },\n  ...\n}\n'))),(0,o.kt)(s.Z,{label:"IBFT 2.0",value:"tab3",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    ...\n    "ibft2": {\n      ...\n    }\n  },\n  ...\n}\n'))),(0,o.kt)(s.Z,{label:"QBFT",value:"tab4",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    ...\n    "qbft": {\n      ...\n    }\n  },\n  ...\n}\n')))))}d.isMDXComponent=!0}}]);