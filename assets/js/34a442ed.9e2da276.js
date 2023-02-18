"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[2219],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(9122),a=n(2501),o=(n(6393),n(158)),i=["components"],s={title:"ae-wrong-input-file-type"},l=void 0,p={unversionedId:"pages/messages/ae-wrong-input-file-type",id:"pages/messages/ae-wrong-input-file-type",title:"ae-wrong-input-file-type",description:'"Incorrect file type; API Extractor expects to analyze compiler outputs with the .d.ts file extension."',source:"@site/docs/pages/messages/ae-wrong-input-file-type.md",sourceDirName:"pages/messages",slug:"/pages/messages/ae-wrong-input-file-type",permalink:"/pages/messages/ae-wrong-input-file-type",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/messages/ae-wrong-input-file-type.md",tags:[],version:"current",frontMatter:{title:"ae-wrong-input-file-type"},sidebar:"docsSidebar",previous:{title:"ae-unresolved-link",permalink:"/pages/messages/ae-unresolved-link"},next:{title:"api-extractor init",permalink:"/pages/commands/api-extractor_init"}},c={},u=[{value:"Remarks",id:"remarks",level:2},{value:"How to fix",id:"how-to-fix",level:2},{value:"See also",id:"see-also",level:2}],m={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'"Incorrect file type; API Extractor expects to analyze compiler outputs with the .d.ts file extension."')),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Unlike some other tools, API Extractor does not process TypeScript source files directly. Instead, it is\ndesigned to analyze the .d.ts files that are emitted by the compiler and exported by your NPM package.\nThis design choice ensures that API Extractor sees your library the same way that an external consumer\nwill see it. It also ensures that the .d.ts rollup preserves the particular syntax choices of\nyour toolchain, compiler version, and manually authored inputs."),(0,o.kt)("p",null,"As a result, your ",(0,o.kt)("inlineCode",{parentName:"p"},"mainEntryPointFilePath")," must have the .d.ts file extension, and so must all of\nthe imported modules. An ",(0,o.kt)("inlineCode",{parentName:"p"},"ae-wrong-input-file-type")," error is reported if any incorrect file extensions\nare encountered."),(0,o.kt)("h2",{id:"how-to-fix"},"How to fix"),(0,o.kt)("p",null,"To reduce log noise, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ae-wrong-input-file-type")," error is reported at most once. To see the full list\nof imported paths, invoke API Extractor with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--diagnostics")," parameter, then look for any file paths\nthat have a problematic file extension such as ",(0,o.kt)("inlineCode",{parentName:"p"},".ts")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".tsx"),". Try to determine why that file is being\nimported instead of the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},".d.ts")," file."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip")),(0,o.kt)("p",{parentName:"blockquote"},"If you're having trouble determining why a particular file is being imported, it can be helpful\nto invoke the compiler with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--traceResolution")," parameter:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tsc --traceResolution > trace.log\n")),(0,o.kt)("p",{parentName:"blockquote"},"Although this reports the dependency graph of the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"source files"))," (and not the ",(0,o.kt)("inlineCode",{parentName:"p"},"mainEntryPointFilePath"),"\nview), it can still be informative. For an accurate trace, you could invoke the compiler on\na secondary project that imports your project as an NPM dependency.")),(0,o.kt)("p",null,"Common issues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Are you invoking API Extractor before the compiler has produced any .d.ts outputs?\nEnsure that your toolchain writes .d.ts files before API Extractor is invoked.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Is your compiler writing ",(0,o.kt)("inlineCode",{parentName:"p"},"example.d.ts")," into the same file folder as ",(0,o.kt)("inlineCode",{parentName:"p"},"example.ts"),"? This is a poor practice.\nConsider separating input and output files, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"src/{*.ts,*.tsx}")," versus ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/{*.js,*.d.ts}"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Is an NPM package dependency exporting TypeScript source files instead of .d.ts declaration files?\nAsk the package maintainer to follow standard practice of distributing prebuilt outputs,\nnot source code."))),(0,o.kt)("p",null,"As a temporary mitigation, you can disable the ",(0,o.kt)("inlineCode",{parentName:"p"},"ae-wrong-input-file-type")," validation by adding a section\nlike this to your ",(0,o.kt)("strong",{parentName:"p"},"api-extractor.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  "messages": {\n    "extractorMessageReporting": {\n      // Disable this validation at your own risk:  Processing an incorrect file type\n      // may lead to other errors.  Function bodies may incorrectly get emitted in the\n      // .d.ts rollup.\n      "ae-wrong-input-file-type": {\n        "logLevel": "none"\n      }\n    }\n  }\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pages/setup/invoking"},"Invoking API Extractor"))))}f.isMDXComponent=!0}}]);