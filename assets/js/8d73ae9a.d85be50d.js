"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[9153],{158:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(6393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=r(9122),o=r(2501),a=(r(6393),r(158)),i=["components"],c={title:"api-extractor run"},s=void 0,p={unversionedId:"pages/commands/api-extractor_run",id:"pages/commands/api-extractor_run",title:"api-extractor run",description:"&nbsp;",source:"@site/docs/pages/commands/api-extractor_run.md",sourceDirName:"pages/commands",slug:"/pages/commands/api-extractor_run",permalink:"/pages/commands/api-extractor_run",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/commands/api-extractor_run.md",tags:[],version:"current",frontMatter:{title:"api-extractor run"},sidebar:"docsSidebar",previous:{title:"api-extractor init",permalink:"/pages/commands/api-extractor_init"},next:{title:"api-documenter markdown",permalink:"/pages/commands/api-documenter_markdown"}},l={},u=[],m={toc:u},d="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'usage: api-extractor run [-h] [-c FILE] [-l] [-v] [--diagnostics]\n                         [--typescript-compiler-folder PATH]\n\n\nInvoke API Extractor on a project\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -c FILE, --config FILE\n                        Use the specified api-extractor.json file path,\n                        rather than guessing its location\n  -l, --local           Indicates that API Extractor is running as part of a\n                        local build, e.g. on a developer\'s machine. This\n                        disables certain validation that would normally be\n                        performed for a ship/production build. For example,\n                        the *.api.md report file is automatically copied in a\n                        local build.\n  -v, --verbose         Show additional informational messages in the output.\n  --diagnostics         Show diagnostic messages used for troubleshooting\n                        problems with API Extractor. This flag also enables\n                        the "--verbose" flag.\n  --typescript-compiler-folder PATH\n                        By default API Extractor uses its own TypeScript\n                        compiler version to analyze your project. This can\n                        often cause compiler errors due to incompatibilities\n                        between different TS versions. Use\n                        "--typescript-compiler-folder" to specify the folder\n                        path for your compiler version.\n')))}f.isMDXComponent=!0}}]);