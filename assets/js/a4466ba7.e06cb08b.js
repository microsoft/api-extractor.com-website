"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[4064],{158:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(6393);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>f});var n=r(9122),i=r(2501),a=(r(6393),r(158)),o=["components"],c={title:"ae-cyclic-inherit-doc"},l=void 0,s={unversionedId:"pages/messages/ae-cyclic-inherit-doc",id:"pages/messages/ae-cyclic-inherit-doc",title:"ae-cyclic-inherit-doc",description:'"The @inheritDoc tag for \\\\\\ refers to its own declaration"._',source:"@site/docs/pages/messages/ae-cyclic-inherit-doc.md",sourceDirName:"pages/messages",slug:"/pages/messages/ae-cyclic-inherit-doc",permalink:"/pages/messages/ae-cyclic-inherit-doc",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/messages/ae-cyclic-inherit-doc.md",tags:[],version:"current",frontMatter:{title:"ae-cyclic-inherit-doc"},sidebar:"docsSidebar",previous:{title:"@virtual",permalink:"/pages/tsdoc/tag_virtual"},next:{title:"ae-different-release-tags",permalink:"/pages/messages/ae-different-release-tags"}},p={},f=[{value:"Remarks",id:"remarks",level:2},{value:"How to fix",id:"how-to-fix",level:2},{value:"See also",id:"see-also",level:2}],u={toc:f},d="wrapper";function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'"The ',(0,a.kt)("inlineCode",{parentName:"em"},"@inheritDoc")," tag for ","_","_","_",' refers to its own declaration".')),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@inheritDoc")," tag saves typing by copying documentation content from another declaration. The other declaration\nis specified using a TSDoc declaration reference. But if the other reference refers back to the original declaration,\nthen an ",(0,a.kt)("inlineCode",{parentName:"p"},"ae-cyclic-inherit-doc")," error is reported."),(0,a.kt)("p",null,"The self-reference can be simple:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * {@inheritDoc f1}\n * @public\n */\nexport function f1(): void {}\n\n// Warning: The "@inheritDoc" tag for "f1" refers to its own declaration.\n')),(0,a.kt)("p",null,"Or it can be indirect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * {@inheritDoc f2}\n * @public\n */\nexport function f1(): void {}\n\n/**\n * {@inheritDoc f3}\n * @public\n */\nexport function f2(): void {}\n\n/**\n * {@inheritDoc f1}\n * @public\n */\nexport function f3(): void {}\n\n// Warning: The "@inheritDoc" tag for "f1" refers to its own declaration.\n')),(0,a.kt)("h2",{id:"how-to-fix"},"How to fix"),(0,a.kt)("p",null,"Remove or change one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"@inheritDoc")," tags to eliminate the cycle."),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pages/tsdoc/tag_inheritdoc"},"@inheritDoc tag"))))}m.isMDXComponent=!0}}]);