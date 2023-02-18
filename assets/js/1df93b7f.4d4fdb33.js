"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[3237],{2246:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(6393),r=a(9594),l=a(194);const o=function(e){return n.createElement(r.Z,null,n.createElement("header",{style:{marginLeft:"auto",marginRight:"auto",paddingTop:"40px"}},n.createElement("img",{height:"189px",alt:"API Extractor Logo",width:"533px",src:"/images/site/api-extractor-title.png"})),n.createElement("div",{style:{maxWidth:"50rem",marginLeft:"auto",marginRight:"auto",paddingLeft:"15px",paddingRight:"15px"}},n.createElement("p",null,n.createElement("strong",null,"API Extractor")," helps you build better"," ",n.createElement("a",{href:"https://www.typescriptlang.org/"},"TypeScript")," library packages. Suppose for example that your company has published an NPM package called \u201c",n.createElement("strong",null,"awesome-widgets"),"\u201d that exports many classes and interfaces. As developers start to depend on your library, you may encounter issues such as\u2026"),n.createElement("ul",null,n.createElement("li",null,n.createElement("p",null,n.createElement("strong",null,"Accidental breaks:")," People keep reporting that their code won\u2019t compile after a supposedly \u201cminor\u201d update. To address this, you boldly propose that every"," ",n.createElement("strong",null,"awesome-widgets")," pull request must be approved by an experienced developer from your team. But that proves unrealistic -- nobody has time to look at every single PR! What you really need is a way to detect PRs that change API contracts, and flag them for review. That would focus attention in the right place\u2026 but how to do that?")),n.createElement("li",null,n.createElement("p",null,n.createElement("strong",null,"Missing exports:")," Suppose the ",n.createElement("strong",null,"awesome-widgets")," package exports an API function ",n.createElement("code",{className:"highlighter-rouge"},"AwesomeButton.draw()")," that requires a parameter of type ",n.createElement("code",{className:"highlighter-rouge"},"DrawStyle"),", but you forgot to export this enum. Things seem fine at first, but when a developer tries to call that function, they discover that there\u2019s no way to specify the"," ",n.createElement("code",{className:"highlighter-rouge"},"DrawStyle"),". How to avoid these oversights?")),n.createElement("li",null,n.createElement("p",null,n.createElement("strong",null,"Accidental exports:")," You meant for your"," ",n.createElement("code",{className:"highlighter-rouge"},"DrawHelper")," class to be kept internal, but one day you realize it\u2019s being exported. When you try to remove it, consumers complain that they\u2019re using it. How do we avoid this in the future?")),n.createElement("li",null,n.createElement("p",null,n.createElement("strong",null,"Alpha/Beta graduation:")," You want to release previews of new APIs that are not ready for prime time yet. But if you did a major SemVer bump every time these definitions evolve, the villagers would be after you with torches and pitchforks! A better approach is to designate certain classes/members as ",n.createElement("strong",null,"alpha")," quality, then promote them to"," ",n.createElement("strong",null,"beta")," and finally to ",n.createElement("strong",null,"public")," as they mature. But how to indicate this to your consumers? (And how to detect scoping mistakes? A ",n.createElement("strong",null,"public")," function should never return a ",n.createElement("strong",null,"beta")," result.)")),n.createElement("li",null,n.createElement("p",null,n.createElement("strong",null,"*.d.ts rollup:")," You webpacked your library into a nice ",n.createElement("strong",null,"*.js")," ","bundle file \u2013 so why ship your typings as a messy tree of ",n.createElement("strong",null,"lib/*.d.ts")," ","files full of private definitions? Can\u2019t we consolidate them into a tidy"," ",n.createElement("strong",null,"*.d.ts")," rollup file? And if you publish internal/beta/public releases, each release type should get its own ",n.createElement("strong",null,"*.d.ts")," file with appropriate trimming. Developers building a production project don\u2019t want to see a bunch of"," ",n.createElement("strong",null,"internal")," and ",n.createElement("strong",null,"beta")," members in their VS Code IntelliSense!")),n.createElement("li",null,n.createElement("p",null,n.createElement("strong",null,"Online documentation:")," You have faithfully annotated each TypeScript member with nice ",n.createElement("a",{href:"https://github.com/microsoft/tsdoc"},"TSDoc")," descriptions. Now that your library has shipped, it\u2019s time to set up"," ",n.createElement("a",{href:"https://docs.microsoft.com/en-us/javascript/api/sp-http"},"a nicely formatted")," API reference. What tool to use?"))),n.createElement("p",null,n.createElement("strong",null,"API Extractor")," provides an integrated, professional-quality solution for all these problems. It is invoked at build time by your toolchain and leverages the TypeScript compiler engine to:"),n.createElement("ul",null,n.createElement("li",null,"Detect a project\u2019s exported API surface"),n.createElement("li",null,"Capture the contracts in a concise report designed to facilitate review"),n.createElement("li",null,"Warn about common mistakes (e.g. missing exports, inconsistent visibility, etc.)"),n.createElement("li",null,"Generate *.d.ts rollups with trimming according to release type"),n.createElement("li",null,"Output API documentation in a portable format that\u2019s easy to integrate with your content pipeline")),n.createElement("p",null,"Best of all, ",n.createElement("strong",null,"API Extractor")," is free and open source. Join the community and create a pull request!"),n.createElement("div",{className:"row",style:{paddingTop:"1rem",paddingBottom:"4rem"}},n.createElement(l.Z,{className:"button button--secondary",to:"pages/overview/intro",style:{paddingLeft:"3rem",paddingRight:"3rem",fontSize:"20px",fontWeight:"normal",color:"#ffffff",marginLeft:"auto",marginRight:"5px"}},"Learn More"),n.createElement(l.Z,{className:"button button--primary",to:"pages/setup/invoking",style:{paddingLeft:"3rem",paddingRight:"3rem",fontSize:"20px",fontWeight:"normal",color:"#ffffff",marginRight:"auto",marginLeft:"5px"}},"Get Started!"))))}}}]);