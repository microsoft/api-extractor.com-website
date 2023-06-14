"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[8246],{158:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(6393);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3607:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=a(9122),n=a(2501),o=(a(6393),a(158)),i=["components"],s={title:"What's new"},l=void 0,c={unversionedId:"pages/news",id:"pages/news",title:"What's new",description:"To find out what's changed in the latest release, please see the package changelogs:",source:"@site/docs/pages/news.md",sourceDirName:"pages",slug:"/pages/news",permalink:"/pages/news",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/news.md",tags:[],version:"current",frontMatter:{title:"What's new"}},p={},u=[{value:"Important Updates",id:"important-updates",level:2},{value:"API Extractor 7 is out! \ud83c\udf89",id:"api-extractor-7-is-out-",level:3},{value:"Big changes in Version 7",id:"big-changes-in-version-7",level:3},{value:"Upgrading from API Extractor 6",id:"upgrading-from-api-extractor-6",level:3}],m={toc:u},d="wrapper";function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To find out what's changed in the latest release, please see the package changelogs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/api-extractor/CHANGELOG.md"},"@microsoft/api-extractor changelog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/api-documenter/CHANGELOG.md"},"@microsoft/api-documenter changelog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/libraries/api-extractor-model/CHANGELOG.md"},"@microsoft/api-extractor-model changelog"),".")),(0,o.kt)("p",null,"API Extractor is maintained by the Rush Stack developer community. For roadmaps and updates from the team,\nplease visit the ",(0,o.kt)("a",{parentName:"p",href:"https://rushstack.io/pages/news/"},"Rush Stack News")," page."),(0,o.kt)("p",null,"There's also a ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/rushstack"},"@rushstack")," Twitter feed."),(0,o.kt)("h2",{id:"important-updates"},"Important Updates"),(0,o.kt)("h3",{id:"api-extractor-7-is-out-"},"API Extractor 7 is out! \ud83c\udf89"),(0,o.kt)("p",null,"After nearly 6 months of \"beta\" releases, we're excited to announce that API Extractor 7\nis finally ready for general usage! Since the beta releases used the 7.0.x version numbers,\nwe're using 7.1.0 for the first stable release."),(0,o.kt)("h3",{id:"big-changes-in-version-7"},"Big changes in Version 7"),(0,o.kt)("p",null,"Version 7 represents a major overhaul of the analysis engine: In the past, API Extractor used a relatively\nsimple analyzer that required special parsers/writers to be coded for each supported declaration type\n(classes, enums, interfaces, etc). This worked because of an assumption that your code base restricted itself\nto a small set of recommended TypeScript language features. When we introduced the .d.ts rollup feature, it suddenly\nbecame important to perfectly handle all sorts of expressions, since otherwise the generated .d.ts rollup\nwould not compile. To address this, a new, much more flexible analyzer was designed. In API Extractor 6,\nthis new analyzer is not used for API reports or documentation. It had trouble with a lot of projects, but that\nwasn't a big deal, since you could simply disable the .d.ts rollup feature for those projects. Starting with\nAPI Extractor 7, the new analyzer is used for everything. This is a big architectural improvement, but now\nthere's no fallback if it can't handle certain projects. Thus, version 7 was in \"beta\" for several months while\nwe ironed out every last bugs and edge case until several major real world monorepos could finally build successfully."),(0,o.kt)("p",null,"In addition to this, API Extractor brings a bunch of other cool enhancements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Each warning, error, and console message has been assigned a "message ID"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Each message ID can be can individually suppressed or configured")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"api-extractor.json")," config file format has been improved, and is now self-documenting")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The API for invoking API Extractor programmatically has been greatly improved, and now includes a general\ncallback for intercepting all messages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The .api.json file format was completely redesigned, and we now provide a high-level library\n",(0,o.kt)("strong",{parentName:"p"},"@microsoft/api-extractor-model")," for loading, saving, and querying it")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Support for TypeScript 3.4 in all its glory!"))),(0,o.kt)("h3",{id:"upgrading-from-api-extractor-6"},"Upgrading from API Extractor 6"),(0,o.kt)("p",null,"The new config file schema is the most conspicuous breaking change. Fortunately, the overall concepts and operation\nmostly the same in Version 7, so upgrading ",(0,o.kt)("strong",{parentName:"p"},"api-extractor.json")," is a straightforward 1:1 mapping. Note that\nthe interpretation of relative file paths has changed somewhat, though. Also, certain sections such as ",(0,o.kt)("inlineCode",{parentName:"p"},'"policies"'),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},'"validationRules"')," are no longer needed. If you invoke API Extractor programmatically, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Extractor")," class\nhas significant breaking changes, but it's well documented."))}h.isMDXComponent=!0}}]);