"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[8248],{158:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||s;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(9122),r=n(2501),s=(n(6393),n(158)),o=["components"],i={title:"ae-internal-mixed-release-tag"},l=void 0,c={unversionedId:"pages/messages/ae-internal-mixed-release-tag",id:"pages/messages/ae-internal-mixed-release-tag",title:"ae-internal-mixed-release-tag",description:'"Mixed release tags are not allowed for \\\\\\ because one of its declarations is marked as @internal."_',source:"@site/docs/pages/messages/ae-internal-mixed-release-tag.md",sourceDirName:"pages/messages",slug:"/pages/messages/ae-internal-mixed-release-tag",permalink:"/pages/messages/ae-internal-mixed-release-tag",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/messages/ae-internal-mixed-release-tag.md",tags:[],version:"current",frontMatter:{title:"ae-internal-mixed-release-tag"},sidebar:"docsSidebar",previous:{title:"ae-internal-missing-underscore",permalink:"/pages/messages/ae-internal-missing-underscore"},next:{title:"ae-misplaced-package-tag",permalink:"/pages/messages/ae-misplaced-package-tag"}},p={},m=[{value:"Remarks",id:"remarks",level:2},{value:"How to fix",id:"how-to-fix",level:2},{value:"See also",id:"see-also",level:2}],u={toc:m},g="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},'"Mixed release tags are not allowed for ',"_","_","_",' because one of its declarations is marked as @internal."')),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"For a function that has multiple overloads, you can specify different release tags for each overload.\nFor example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * Combines two values, by adding the numbers.\n * @public\n */\nexport function combine(x: number, y: number): number;\n\n/**\n * Combines two values, by appending the strings.\n * @beta\n */\nexport function combine(x: string, y: string): string;\n\nexport function combine(x: number | string, y: number | string): number | string {\n  return x + y;\n}\n")),(0,s.kt)("p",null,"However, this is not allowed if one of the overloads is marked as ",(0,s.kt)("inlineCode",{parentName:"p"},"@internal"),"."),(0,s.kt)("h2",{id:"how-to-fix"},"How to fix"),(0,s.kt)("p",null,"Create a separate function for the internal API."),(0,s.kt)("p",null,"Alternatively, you can disable the ",(0,s.kt)("inlineCode",{parentName:"p"},"ae-internal-mixed-release-tag"),"\nvalidation by adding a section like this to your ",(0,s.kt)("strong",{parentName:"p"},"api-extractor.json")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'  "messages": {\n    "extractorMessageReporting": {\n      "ae-internal-mixed-release-tag": {\n        "logLevel": "none"\n      }\n    }\n  }\n')),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/pages/configs/api-extractor_json#message-reporting-section"},"api-extractor.json config file")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/pages/tsdoc/doc_comment_syntax#release-tags"},"Doc comment syntax: Release tags"))))}d.isMDXComponent=!0}}]);