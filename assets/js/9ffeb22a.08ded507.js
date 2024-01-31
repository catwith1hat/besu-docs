"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[93431],{70730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(85893),o=t(11151),s=t(74866),a=t(85162);const l={title:"Consensus protocols",description:"Besu consensus protocols",sidebar_position:1,tags:["private networks"]},i="Consensus protocols",u={id:"private-networks/how-to/configure/consensus/index",title:"Consensus protocols",description:"Besu consensus protocols",source:"@site/docs/private-networks/how-to/configure/consensus/index.md",sourceDirName:"private-networks/how-to/configure/consensus",slug:"/private-networks/how-to/configure/consensus/",permalink:"/development/private-networks/how-to/configure/consensus/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/configure/consensus/index.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1706708195,formattedLastUpdatedAt:"Jan 31, 2024",sidebarPosition:1,frontMatter:{title:"Consensus protocols",description:"Besu consensus protocols",sidebar_position:1,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"How to",permalink:"/development/private-networks/how-to/"},next:{title:"QBFT",permalink:"/development/private-networks/how-to/configure/consensus/qbft"}},c={},d=[];function p(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"consensus-protocols",children:"Consensus protocols"}),"\n",(0,r.jsx)(n.p,{children:"Besu supports the following consensus protocols:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/qbft",children:"QBFT"})," (proof of authority) - The recommended enterprise-grade consensus protocol for private networks."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0"})," (proof of authority) - Supported for existing private networks."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/clique",children:"Clique"})," (proof of authority) - Not recommended for production use."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/development/public-networks/concepts/proof-of-stake/",children:"Proof of stake"})," - Used on Ethereum Mainnet and public testnets."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/",children:"Ethash"})," (proof of work) - Can be used in ",(0,r.jsx)(n.a,{href:"/development/private-networks/tutorials/ethash",children:"small development networks"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See a ",(0,r.jsx)(n.a,{href:"/development/private-networks/concepts/poa",children:"comparison of the proof of authority consensus protocols"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"config"})," property in the genesis file specifies the consensus protocol for a chain."]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(a.Z,{value:"Ethash",label:"Ethash",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n  ...\n    "ethash": {\n    ...\n    }\n  },\n  ...\n}\n'})})}),(0,r.jsx)(a.Z,{value:"Clique",label:"Clique",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    ...\n    "clique": {\n    ...\n    }\n  },\n  ...\n}\n'})})}),(0,r.jsx)(a.Z,{value:"IBFT 2.0",label:"IBFT 2.0",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    ...\n    "ibft2": {\n      ...\n    }\n  },\n  ...\n}\n'})})}),(0,r.jsx)(a.Z,{value:"QBFT",label:"QBFT",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    ...\n    "qbft": {\n      ...\n    }\n  },\n  ...\n}\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var r=t(36905);const o={tabItem:"tabItem_Ymn6"};var s=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),o=t(36905),s=t(12466),a=t(16550),l=t(20469),i=t(91980),u=t(67392),c=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=p(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=f({queryString:t,groupId:o}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,c.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),v=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function w(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),o=l[t].value;o!==r&&(u(n),a(o))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,o.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(w,{...e,...n}),(0,g.jsx)(x,{...e,...n})]})}function k(e){const n=(0,b.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(67294);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);