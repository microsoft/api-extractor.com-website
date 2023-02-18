"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[2902],{158:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(6393);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(9122),o=n(2501),a=(n(6393),n(158)),i=["components"],l={title:"ae-unresolved-link"},s=void 0,c={unversionedId:"pages/messages/ae-unresolved-link",id:"pages/messages/ae-unresolved-link",title:"ae-unresolved-link",description:'"The @link reference could not be resolved."',source:"@site/docs/pages/messages/ae-unresolved-link.md",sourceDirName:"pages/messages",slug:"/pages/messages/ae-unresolved-link",permalink:"/pages/messages/ae-unresolved-link",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/messages/ae-unresolved-link.md",tags:[],version:"current",frontMatter:{title:"ae-unresolved-link"},sidebar:"docsSidebar",previous:{title:"ae-unresolved-inheritdoc-reference",permalink:"/pages/messages/ae-unresolved-inheritdoc-reference"},next:{title:"ae-wrong-input-file-type",permalink:"/pages/messages/ae-wrong-input-file-type"}},p={},u=[{value:"Remarks",id:"remarks",level:2},{value:"How to fix",id:"how-to-fix",level:2},{value:"See also",id:"see-also",level:2}],f={toc:u},m="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'"The @link reference could not be resolved."')),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"This occurs when the TSDoc declaration reference cannot be resolved."),(0,a.kt)("p",null,"For example, suppose that we mistyped ",(0,a.kt)("inlineCode",{parentName:"p"},"f1")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"g1")," in this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * Some documentation that we want to inherit\n */\nexport function f1(): void {}\n\n/**\n * For more info, see {@link g2 | the f1 function}.\n */\nexport function f2(): void {}\n\n// Warning: The @link reference could not be resolved: The package does not have an export "g2"\n')),(0,a.kt)("h2",{id:"how-to-fix"},"How to fix"),(0,a.kt)("p",null,"Correct the reference. In the above example, we would fix ",(0,a.kt)("inlineCode",{parentName:"p"},"f2()"),"'s comment to reference ",(0,a.kt)("inlineCode",{parentName:"p"},"f1")," like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * For more info, see {@link f1 | the f1 function}.\n */\nexport function f2(): void {}\n")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pages/tsdoc/tag_link"},"@link tag"))))}d.isMDXComponent=!0}}]);