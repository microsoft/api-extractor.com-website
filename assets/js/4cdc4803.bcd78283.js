"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[1380],{158:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(6393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(9122),a=r(2501),o=(r(6393),r(158)),i=["components"],s={title:"@public"},c=void 0,p={unversionedId:"pages/tsdoc/tag_public",id:"pages/tsdoc/tag_public",title:"@public",description:"Tag type: modifier",source:"@site/docs/pages/tsdoc/tag_public.md",sourceDirName:"pages/tsdoc",slug:"/pages/tsdoc/tag_public",permalink:"/pages/tsdoc/tag_public",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/tsdoc/tag_public.md",tags:[],version:"current",frontMatter:{title:"@public"},sidebar:"docsSidebar",previous:{title:"@privateRemarks",permalink:"/pages/tsdoc/tag_privateremarks"},next:{title:"@readonly",permalink:"/pages/tsdoc/tag_readonly"}},l={},u=[{value:"See also",id:"see-also",level:2}],m={toc:u},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tag type:")," modifier"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TSDoc standardization:")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/tsdoc/blob/master/tsdoc/src/details/Standardization.ts"},"discretionary")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@public")," modifier is one of the four ",(0,o.kt)("strong",{parentName:"p"},"release tags"),". It indicates that an API item has been officially\nreleased, and is now part of the supported contract for a package. If the ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"SemVer")," versioning\nscheme is used, then the API signature cannot be changed without a MAJOR version increment."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * This is some example documentation.\n * @public\n */\nexport function doSomething(): void {}\n")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pages/tsdoc/doc_comment_syntax#release-tags"},"Doc comment syntax: Release tags")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pages/overview/demo_rollup"},"The .d.ts rollup"))))}f.isMDXComponent=!0}}]);