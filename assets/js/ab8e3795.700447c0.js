"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[6339],{158:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(6393);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||l[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var r=n(9122),o=n(2501),a=(n(6393),n(158)),i=["components"],c={title:"api-documenter markdown"},p=void 0,m={unversionedId:"pages/commands/api-documenter_markdown",id:"pages/commands/api-documenter_markdown",title:"api-documenter markdown",description:"&nbsp;",source:"@site/docs/pages/commands/api-documenter_markdown.md",sourceDirName:"pages/commands",slug:"/pages/commands/api-documenter_markdown",permalink:"/pages/commands/api-documenter_markdown",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/commands/api-documenter_markdown.md",tags:[],version:"current",frontMatter:{title:"api-documenter markdown"},sidebar:"docsSidebar",previous:{title:"api-extractor run",permalink:"/pages/commands/api-extractor_run"},next:{title:"api-documenter yaml",permalink:"/pages/commands/api-documenter_yaml"}},s={},u=[],l={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'usage: api-documenter markdown [-h] [-i FOLDER1] [-o FOLDER2]\n\nGenerates API documentation as a collection of files in Markdown format,\nsuitable for example for publishing on a GitHub site.\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -i FOLDER1, --input-folder FOLDER1\n                        Specifies the input folder containing the *.api.json\n                        files to be processed. If omitted, the default is ".\n                        /input"\n  -o FOLDER2, --output-folder FOLDER2\n                        Specifies the output folder where the documentation\n                        will be written. ANY EXISTING CONTENTS WILL BE\n                        DELETED! If omitted, the default is "./markdown"\n')))}f.isMDXComponent=!0}}]);