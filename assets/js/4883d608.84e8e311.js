"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[6332],{158:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(6393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(r),u=o,d=g["".concat(l,".").concat(u)]||g[u]||m[u]||a;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[g]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5341:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var n=r(9122),o=r(2501),a=(r(6393),r(158)),s=["components"],i={title:"A sample project"},l=void 0,c={unversionedId:"pages/overview/demo_project",id:"pages/overview/demo_project",title:"A sample project",description:'This article continues the tutorial from the "What is API Extractor?" page. It\'s recommended to start there.',source:"@site/docs/pages/overview/demo_project.md",sourceDirName:"pages/overview",slug:"/pages/overview/demo_project",permalink:"/pages/overview/demo_project",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/overview/demo_project.md",tags:[],version:"current",frontMatter:{title:"A sample project"},sidebar:"docsSidebar",previous:{title:"What is API Extractor?",permalink:"/pages/overview/intro"},next:{title:"The API report",permalink:"/pages/overview/demo_api_report"}},p={},g=[],m={toc:g},u="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'This article continues the tutorial from the "',(0,a.kt)("a",{parentName:"em",href:"/pages/overview/intro"},"What is API Extractor?"),"\" page. It's recommended to start there.")),(0,a.kt)("p",null,"For this tutorial, we'll consider a hypothetical TypeScript library project. The declarations are taken from\na real-world NPM package ",(0,a.kt)("strong",{parentName:"p"},"@microsoft/sp-core-library"),". Its main entry point is ",(0,a.kt)("strong",{parentName:"p"},"src/index.ts"),", which contains\nexport statements like this:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/index.ts"),(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export { default as Log } from './log/Log';\nexport { default as ILogHandler } from './log/ILogHandler';\n")),(0,a.kt)("p",null,"These definitions come from three other source files (excerpted here for brevity):"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/log/Log.ts"),(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import DefaultLogHandler from './DefaultLogHandler';\nimport ILogHandler from './ILogHandler';\n\n/**\n * The Log class provides static methods for logging messages at different levels (verbose,\n * info, warning, error) and with context information. Context information helps identify\n * which component generated the messages and makes the messages useful and filterable.\n * @public\n */\nexport default class Log {\n  private static _logHandler: ILogHandler = new DefaultLogHandler();\n\n  /**\n   * Configures the logger with a different target.\n   * @beta\n   */\n  public static initialize(logHandler: ILogHandler): void {\n    Log._logHandler = logHandler;\n  }\n\n  /**\n   * Logs a verbose message\n   * @param   source - the source from where the message is logged, e.g., the class name.\n   *          The source provides context information for the logged message.\n   *          If the source's length is more than 20, only the first 20 characters are kept.\n   * @param   message - the message to be logged\n   *          If the message's length is more than 100, only the first 100 characters are kept.\n   */\n  public static verbose(source: string, message: string): void {\n    this._logHandler.verbose(source, message);\n  }\n\n  . . .\n  public static info(source: string, message: string): void {\n    this._logHandler.info(source, message);\n  }\n\n  . . .\n  public static warn(source: string, message: string): void {\n    this._logHandler.warn(source, message);\n  }\n\n  . . .\n  public static error(source: string, error: Error): void {\n    this._logHandler.error(source, error);\n  }\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/log/ILogHandler.ts"),(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * The redirectable implementation for the Log class.\n * @beta\n */\nexport interface ILogHandler {\n  verbose(source: string, message: string): void;\n  info(source: string, message: string): void;\n  warn(source: string, message: string): void;\n  error(source: string, error: Error): void;\n}\n\nexport default ILogHandler;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"src/log/DefaultLogHandler.ts"),(0,a.kt)("br",null)),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"(private in this example, so its implementation is unimportant and left to your imagination)"))),(0,a.kt)("p",null,"Let's examine how API Extractor processes these inputs to produce the API report, d.ts rollup, and API documentation\noutputs..."))}d.isMDXComponent=!0}}]);