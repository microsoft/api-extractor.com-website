"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[7373],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(9122),r=n(2501),l=(n(6393),n(158)),o=["components"],i={title:"@defaultValue"},s=void 0,u={unversionedId:"pages/tsdoc/tag_defaultvalue",id:"pages/tsdoc/tag_defaultvalue",title:"@defaultValue",description:"Tag type: block tag",source:"@site/docs/pages/tsdoc/tag_defaultvalue.md",sourceDirName:"pages/tsdoc",slug:"/pages/tsdoc/tag_defaultvalue",permalink:"/pages/tsdoc/tag_defaultvalue",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/tsdoc/tag_defaultvalue.md",tags:[],version:"current",frontMatter:{title:"@defaultValue"},sidebar:"docsSidebar",previous:{title:"@beta",permalink:"/pages/tsdoc/tag_beta"},next:{title:"@deprecated",permalink:"/pages/tsdoc/tag_deprecated"}},c={},p=[{value:"See also",id:"see-also",level:2}],d={toc:p},m="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tag type:")," block tag"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TSDoc standardization:")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/tsdoc/blob/master/tsdoc/src/details/Standardization.ts"},"extended")),(0,l.kt)("p",null,"This tag is used to document the default value for a field or property, if a value is not assigned explicitly.\nThis tag should only be used with fields or properties that are members of a class or interface."),(0,l.kt)("p",null,"Being a block tag, ",(0,l.kt)("inlineCode",{parentName:"p"},"@defaultValue"),' introduces a TSDoc section that contains all comment text up until the\nnext block tag. This content is called the "',(0,l.kt)("strong",{parentName:"p"},"value text"),'". The value text can have various forms, for example:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A literal value, for example: ",(0,l.kt)("inlineCode",{parentName:"li"},"@defaultValue 3")),(0,l.kt)("li",{parentName:"ul"},"A code span, for example: ",(0,l.kt)("code",null,"@defaultValue ",(0,l.kt)("inlineCode",{parentName:"li"},"true"))),(0,l.kt)("li",{parentName:"ul"},"Arbitrary rich text potentially spanning multiple lines,\nfor example: ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"li"},"@defaultValue An instance of the {@link Widget} object"))),(0,l.kt)("p",null,"Thus, documentation templates should not assume that the value text will consist entirely of code."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export enum WarningStyle {\n  DialogBox,\n  StatusMessage,\n  LogOnly\n}\n\nexport interface IWarningOptions {\n  /**\n   * Determines how the warning will be displayed.\n   *\n   * @remarks\n   * See {@link WarningStyle| the WarningStyle enum} for more details.\n   *\n   * @defaultValue `WarningStyle.DialogBox`\n   */\n  warningStyle: WarningStyle;\n\n  /**\n   * Whether the warning can interrupt a user's current activity.\n   *\n   * @defaultValue\n   * The default is `true` unless {@link WarningStyle.StatusMessage}\n   * was requested.\n   */\n  cancellable?: boolean;\n\n  message: string;\n}\n")),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/tsdoc/issues/27"},"TSDoc RFC #27"))))}f.isMDXComponent=!0}}]);