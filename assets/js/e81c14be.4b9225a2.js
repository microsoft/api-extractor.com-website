"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[4602],{158:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(9122),r=n(2501),i=(n(6393),n(158)),o=["components"],l={title:"{@inheritDoc}"},c=void 0,p={unversionedId:"pages/tsdoc/tag_inheritdoc",id:"pages/tsdoc/tag_inheritdoc",title:"{@inheritDoc}",description:"Tag type: inline tag",source:"@site/docs/pages/tsdoc/tag_inheritdoc.md",sourceDirName:"pages/tsdoc",slug:"/pages/tsdoc/tag_inheritdoc",permalink:"/pages/tsdoc/tag_inheritdoc",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/tsdoc/tag_inheritdoc.md",tags:[],version:"current",frontMatter:{title:"{@inheritDoc}"},sidebar:"docsSidebar",previous:{title:"@example",permalink:"/pages/tsdoc/tag_example"},next:{title:"@internal",permalink:"/pages/tsdoc/tag_internal"}},s={},d=[{value:"What gets copied",id:"what-gets-copied",level:2},{value:"See also",id:"see-also",level:2}],m={toc:d},u="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tag type:")," inline tag"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TSDoc standardization:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/tsdoc/blob/master/tsdoc/src/details/Standardization.ts"},"extended")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{@inheritDoc DECLARATION_REFERENCE}"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@inheritDoc")," tag automatically copies documentation content from another declaration. This avoids duplication\nwhen two declarations have the same behavior, and thus should have identical documentation."),(0,i.kt)("p",null,"The inline tag content is a ",(0,i.kt)("a",{parentName:"p",href:"/pages/tsdoc/declaration_references"},"TSDoc declaration reference"),',\nwhich specifies the "',(0,i.kt)("strong",{parentName:"p"},"target declaration"),'" to be copied from. The target can be any arbitrary declaration;\nit does not need to be from a base class or implemented interface. The target declaration is not optional;\nan ',(0,i.kt)("a",{parentName:"p",href:"/pages/messages/ae-unresolved-inheritdoc-base"},"ae-unresolved-inheritdoc-base")," error\nwill be reported if it is omitted. The target declaration may itself contain another\n",(0,i.kt)("inlineCode",{parentName:"p"},"@inheritDoc")," tag; however, if the links form a cycle, then the\n",(0,i.kt)("a",{parentName:"p",href:"/pages/messages/ae-cyclic-inherit-doc"},"ae-cyclic-inherit-doc")," error will be reported."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Serializer } from 'example-library';\n\n/**\n * An interface describing a widget.\n * @public\n */\nexport interface IWidget {\n  /**\n   * Draws the widget on the display surface.\n   * @param x - the X position of the widget\n   * @param y - the Y position of the widget\n   */\n  public draw(x: number, y: number): void;\n}\n\n/** @public */\nexport class Button implements IWidget {\n  /** {@inheritDoc IWidget.draw} */\n  public draw(x: number, y: number): void {\n    . . .\n  }\n\n  /**\n   * {@inheritDoc example-library#Serializer.writeFile}\n   * @deprecated Use {@link example-library#Serializer.writeFile} instead.\n   */\n  public save(): void {\n    . . .\n  }\n}\n")),(0,i.kt)("p",null,"In the above example, ",(0,i.kt)("inlineCode",{parentName:"p"},"Button.draw()")," implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"IWidget.draw()")," interface contract, so we can use\n",(0,i.kt)("inlineCode",{parentName:"p"},"{@inheritDoc IWidget.draw}")," to avoid copy+pasting the entire comment block. Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"Button.save()"),"\ninherits its documentation from ",(0,i.kt)("inlineCode",{parentName:"p"},"Serializer.writeFile()"),' which has a different name and is imported from a different\npackage; although there is no "inheritance" relationship, we can still copy documentation from that declaration.'),(0,i.kt)("h2",{id:"what-gets-copied"},"What gets copied"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@inheritDoc")," tag does not copy the entire comment body. Only the following components are copied:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"summary section"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@remarks")," block"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@params")," blocks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@typeParam")," blocks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@returns")," block")),(0,i.kt)("p",null,"Other tags such as ",(0,i.kt)("inlineCode",{parentName:"p"},"@defaultValue")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@example")," are not copied, and need to be explicitly included after\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"@inheritDoc")," tag."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/tsdoc/declaration_references"},"Declaration references")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/messages/ae-cyclic-inherit-doc"},"ae-cyclic-inherit-doc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/messages/ae-unresolved-inheritdoc-base"},"ae-unresolved-inheritdoc-base")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/messages/ae-unresolved-inheritdoc-reference"},"ae-unresolved-inheritdoc-reference"))))}h.isMDXComponent=!0}}]);