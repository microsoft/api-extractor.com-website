"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[2721],{158:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>d});var a=r(6393);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=a.createContext({}),p=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):n(n({},e),t)),r},l=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=p(r),h=o,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||i;return r?a.createElement(d,n(n({ref:e},l),{},{components:r})):a.createElement(d,n({ref:e},l))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,n=new Array(i);n[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[u]="string"==typeof t?t:o,n[1]=s;for(var p=2;p<i;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2138:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=r(9122),o=r(2501),i=(r(6393),r(158)),n=["components"],s={title:"Building the code"},c=void 0,p={unversionedId:"pages/contributing/building",id:"pages/contributing/building",title:"Building the code",description:"API Extractor is developed in the monorepo for the Rush Stack family of projects:",source:"@site/docs/pages/contributing/building.md",sourceDirName:"pages/contributing",slug:"/pages/contributing/building",permalink:"/pages/contributing/building",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/contributing/building.md",tags:[],version:"current",frontMatter:{title:"Building the code"},sidebar:"docsSidebar",previous:{title:"API packages",permalink:"/pages/developer/api"},next:{title:"Debugging",permalink:"/pages/contributing/debugging"}},l={},u=[],m={toc:u},h="wrapper";function d(t){var e=t.components,r=(0,o.Z)(t,n);return(0,i.kt)(h,(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API Extractor is developed in the monorepo for the ",(0,i.kt)("a",{parentName:"p",href:"https://rushstack.io/"},"Rush Stack")," family of projects:"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack"},"https://github.com/microsoft/rushstack")),(0,i.kt)("p",null,"Related GitHub repos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The API Extractor website and documentation: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/api-extractor.com-website"},"https://github.com/microsoft/api-extractor.com-website")),(0,i.kt)("li",{parentName:"ul"},"The TSDoc parser for doc comments: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/tsdoc"},"https://github.com/Microsoft/tsdoc"))),(0,i.kt)("p",null,"For general instructions on building API Extractor and guidelines for submitting PRs, please read the\n",(0,i.kt)("a",{parentName:"p",href:"https://rushstack.io/pages/contributing/get_started/"},"Contributing")," documentation for the Rush Stack\nmonorepo."),(0,i.kt)("p",null,"The specific project folders that you will be interested in are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/apps/api-extractor"},"apps/api-extractor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/apps/api-documenter"},"apps/api-documenter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/libraries/api-extractor-model"},"libraries/api-extractor-model"))),(0,i.kt)("p",null,"After you've built the above 3 projects, there are a number of test projects in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/tree/main/build-tests"},"build-tests")," folder that will be symlinked to\nyour built executables. These \"test\" projects don't use a test runner. Instead, they are modeled realistic\nNodeJS library projects whose interesting outputs are tracked by Git. Thus, when the output changes, you need\nto remember to commit the updated output files to Git. (Eventually we'll add a build task that validates this\nsimilar to a Jest snapshot.)"),(0,i.kt)("p",null,"These test projects impact the overall monorepo build time, so most of the newer tests have been moved into\na monolithic project called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/tree/main/build-tests/api-extractor-scenarios"},"api-extractor-scenarios"),".\nIt contains a number of small entry points that get compiled via a single invocation of the TypeScript compiler.\nThen the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/build-tests/api-extractor-scenarios/src/runScenarios.ts"},"runScenarios.ts"),"\ndriver invokes API Extractor on each output, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"CompilerState")," object to reuse the semantic analysis.\nThis is an order of magnitude faster than building each project individually."),(0,i.kt)("p",null,"Some of the ",(0,i.kt)("strong",{parentName:"p"},"api-extractor-scenarios")," tests need to import declarations from an external package.\nThese projects are used for that purpose (and no other purpose):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/build-tests/api-extractor-lib1-test"},"api-extractor-lib1-test")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/build-tests/api-extractor-lib2-test"},"api-extractor-lib2-test")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/build-tests/api-extractor-lib3-test"},"api-extractor-lib3-test"))))}d.isMDXComponent=!0}}]);