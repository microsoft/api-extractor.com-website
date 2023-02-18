"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[3481],{158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(6393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(g,p(p({ref:t},c),{},{components:r})):a.createElement(g,p({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=r(9122),n=r(2501),o=(r(6393),r(158)),p=["components"],i={title:"@preapproved"},s=void 0,l={unversionedId:"pages/tsdoc/tag_preapproved",id:"pages/tsdoc/tag_preapproved",title:"@preapproved",description:"Tag type: modifier",source:"@site/docs/pages/tsdoc/tag_preapproved.md",sourceDirName:"pages/tsdoc",slug:"/pages/tsdoc/tag_preapproved",permalink:"/pages/tsdoc/tag_preapproved",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/tsdoc/tag_preapproved.md",tags:[],version:"current",frontMatter:{title:"@preapproved"},sidebar:"docsSidebar",previous:{title:"@param",permalink:"/pages/tsdoc/tag_param"},next:{title:"@privateRemarks",permalink:"/pages/tsdoc/tag_privateremarks"}},c={},m=[{value:"See also",id:"see-also",level:2}],u={toc:m},d="wrapper";function g(e){var t=e.components,r=(0,n.Z)(e,p);return(0,o.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tag type:")," modifier"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TSDoc standardization:")," ",(0,o.kt)("em",{parentName:"p"},"none; this tag is proprietary to API Extractor")),(0,o.kt)("p",null,"Even though an API is marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"@internal"),", its signature will still be tracked in the API report\nfile (","*",".api.md file) because an API review process is often interested in internal APIs. We may ask\nquestions such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},'"Will this change cause a break for other internal packages?"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},'"Should we consider making this a ',(0,o.kt)("inlineCode",{parentName:"em"},"@public"),' API instead?"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},'"Why do we keep adding more stuff to that huge "',(0,o.kt)("inlineCode",{parentName:"em"},"InternalUtilities"),'" class?"'))),(0,o.kt)("p",null,"However, if it is not useful to review a certain API, it can be marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"@preapproved"),". This prevents it from\nbeing emitted in the API file, and thus exempts it from any review policies."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@preapproved")," tag is only supported for declarations marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"@internal"),", and only for the following\ndeclaration types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"classes"),(0,o.kt)("li",{parentName:"ul"},"enums"),(0,o.kt)("li",{parentName:"ul"},"interfaces"),(0,o.kt)("li",{parentName:"ul"},"namespaces")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * Identifiers for various log messages.\n *\n * @privateRemarks\n * These tokens are generated by the tooling system, so there is no reason\n * to review them.\n *\n * @internal @preapproved\n */\nexport enum _LoggingIds {\n  ...\n}\n")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pages/messages/ae-preapproved-unsupported-type"},"ae-preapproved-unsupported-type")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pages/tsdoc/tag_internal"},"@internal tag"))))}g.isMDXComponent=!0}}]);