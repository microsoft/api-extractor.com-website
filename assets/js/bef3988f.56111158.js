"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[6005],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var r=n(9122),a=n(2501),o=(n(6393),n(158)),i=["components"],p={title:"@sealed"},l=void 0,s={unversionedId:"pages/tsdoc/tag_sealed",id:"pages/tsdoc/tag_sealed",title:"@sealed",description:"Tag type: modifier",source:"@site/docs/pages/tsdoc/tag_sealed.md",sourceDirName:"pages/tsdoc",slug:"/pages/tsdoc/tag_sealed",permalink:"/pages/tsdoc/tag_sealed",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/tsdoc/tag_sealed.md",tags:[],version:"current",frontMatter:{title:"@sealed"},sidebar:"docsSidebar",previous:{title:"@returns",permalink:"/pages/tsdoc/tag_returns"},next:{title:"@typeParam",permalink:"/pages/tsdoc/tag_typeparam"}},c={},d=[{value:"See also",id:"see-also",level:2}],m={toc:d},u="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tag type:")," modifier"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TSDoc standardization:")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/tsdoc/blob/master/tsdoc/src/details/Standardization.ts"},"extended")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@sealed")," modifier has similar semantics to the ",(0,o.kt)("inlineCode",{parentName:"p"},"sealed")," keyword in C# or ",(0,o.kt)("inlineCode",{parentName:"p"},"final")," keyword in Java.\nIt should only be applied to a class or a member of a class."),(0,o.kt)("p",null,"When applied to an entire class, the ",(0,o.kt)("inlineCode",{parentName:"p"},"@sealed")," modifier indicates that the class must NOT be extended by a child class."),(0,o.kt)("p",null,"When applied to a member, the ",(0,o.kt)("inlineCode",{parentName:"p"},"@sealed")," modifier indicates that the member must NOT be overridden (i.e. redefined)\nby a corresponding member of a child class. Whenever ",(0,o.kt)("inlineCode",{parentName:"p"},"@sealed")," is applied to a member, the ",(0,o.kt)("inlineCode",{parentName:"p"},"@override")," modifier must\nbe used as well."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@sealed")," modifier will be displayed in the generated documentation."),(0,o.kt)("p",null,"API Extractor does not currently validate whether the ",(0,o.kt)("inlineCode",{parentName:"p"},"@sealed")," modifier is used correctly. (This may be implemented\nin the future.)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage example:")),(0,o.kt)("p",null,"In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"@sealed")," is applied to the entire ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"\n/** @public */\nexport class Component {\n  . . .\n}\n\n/** @public @sealed */\nexport class Button extends Component {\n  . . .\n}\n\n/** @public */\nexport class FancyButton extends Button { // <-- NOT ALLOWED: THE CLASS IS SEALED\n  . . .\n}\n")),(0,o.kt)("p",null,"In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"@sealed")," is applied to the member ",(0,o.kt)("inlineCode",{parentName:"p"},"Button.componentType"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/** @public */\nexport enum ComponentType {\n  Control,\n  Service\n}\n\n/** @public */\nexport abstract class Component {\n  /** The type of component */\n  public abstract get componentType(): ComponentType;\n\n  /**\n   * Draws the control on the screen\n   * @virtual\n   */\n  public render(): void {\n    . . .\n  }\n}\n\n/** @public */\nexport class Button extends Component {\n  /**\n   * {@inheritDoc Component.componentType}\n   * @override @sealed\n   */\n  public get componentType(): ComponentType {\n    return ComponentType.Control;\n  }\n\n  /**\n   * {@inheritDoc Control.render}\n   * @override\n   */\n  public render(): void {\n    . . .\n  }\n}\n\n/** @public */\nexport class FancyButton extends Button {\n  /** @override */\n  public get componentType(): ComponentType {  // <-- NOT ALLOWED: THE MEMBER IS SEALED\n    return ComponentType.Service;\n  }\n\n  /**\n   * {@inheritDoc Button.render}\n   * @override\n   */\n  public render(): void {  // <-- OKAY\n    . . .\n  }\n}\n")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pages/tsdoc/tag_override"},"@override modifier")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pages/tsdoc/tag_virtual"},"@virtual modifier")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sealed"},'C# "sealed" keyword')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Final_(Java)"},'Java "final" keyword'))))}f.isMDXComponent=!0}}]);