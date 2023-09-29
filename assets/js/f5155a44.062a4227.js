"use strict";(self.webpackChunkapi_extractor_com=self.webpackChunkapi_extractor_com||[]).push([[8246],{5630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>N,default:()=>F,frontMatter:()=>v,metadata:()=>w,toc:()=>x});var n=a(9122),r=a(2501),s=a(6393),o=a(158),c=a(9175),l=a(5582),i=a(4618),m=a.n(i),u=a(3746),d=a.n(u);const p={feed:"feed_myUw",feedHeader:"feedHeader_PlNg",statusPrepend:"statusPrepend_LAmj",status:"status_Vu9Q",status_info:"status_info_Glg2",status_relativeTime:"status_relativeTime_i9dd",status_displayName:"status_displayName_kFQD",displayName_html:"displayName_html_RZ__",displayName_account:"displayName_account_uBal",status_avatar:"status_avatar_in70",status_content:"status_content_ZQIV",media_gallery:"media_gallery_r_eK",mastodonIcon_boost:"mastodonIcon_boost_D_XV",feedFooter:"feedFooter_Qpap",feedFooterLink:"feedFooterLink_nsqJ"};function h(e){return f.apply(this,arguments)}function f(){return(f=(0,l.Z)((0,c.Z)().mark((function e(t){var a,n,r,s,o,i,m,u,d;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=new URL(t.userUrl),null==(a=t.mastodonUserId)){e.next=5;break}e.t0=a,e.next=8;break;case 5:return e.next=7,(0,l.Z)((0,c.Z)().mark((function e(){var t,a,n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=/@(\w+)$/.exec(s.pathname)){e.next=3;break}throw Error("not a Mastodon user URL");case 3:return a=t[1],n=Object.assign(new URL(s),{pathname:"/api/v1/accounts/lookup",search:"?acct="+a}),e.next=7,fetch(n);case 7:return e.next=9,e.sent.json();case 9:return e.abrupt("return",e.sent.id);case 10:case"end":return e.stop()}}),e)})))();case 7:e.t0=e.sent;case 8:return o=e.t0,i=null!=(n=t.maxFeedItems)?n:5,m=null!=(r=t.includeReplies)&&r,u=Object.assign(new URL(s),{pathname:"/api/v1/accounts/"+o+"/statuses",search:"?limit="+i+"&exclude_replies="+!m}),e.next=14,fetch(u);case 14:return e.next=16,e.sent.json();case 16:return d=e.sent,e.abrupt("return",d);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){var t=e.post,a=t;t.reblog&&(a=t.reblog);var n,r=e.userUrl+"/"+t.id,o=m()(),c=m()(new Date(t.created_at)),l=o.diff(c,"hour");n=l<24?l+"h":o.isSame(c,"year")?c.format("MMM D"):c.format("MMM D, YYYY");var i=a.media_attachments.filter((function(e){return"image"===e.type})),u=d().sanitize(a.content),h=t.reblog?s.createElement("div",{className:p.statusPrepend},s.createElement("div",{className:p.mastodonIcon_boost}),s.createElement("div",null,s.createElement("a",{className:[p.displayName_account,"no-external-link-icon"].join(" "),target:"_blank",rel:"noopener noreferrer",href:t.account.url},t.account.display_name)," ","boosted")):void 0;return s.createElement("div",{className:p.status,onClick:function(e){e.target.closest("a")||window.open(r,"_blank")}},h,s.createElement("div",{className:p.status_info},s.createElement("a",{className:[p.status_displayName,"no-external-link-icon"].join(" "),target:"_blank",rel:"noopener noreferrer",href:a.account.url},s.createElement("img",{className:p.status_avatar,width:46,height:46,src:a.account.avatar}),s.createElement("div",null,s.createElement("div",{className:p.displayName_html},a.account.display_name),s.createElement("div",{className:p.displayName_account},"@",a.account.username))),s.createElement("a",{className:[p.status_relativeTime,"no-external-link-icon"].join(" "),target:"_blank",rel:"noopener noreferrer",href:r},s.createElement("time",{dateTime:t.created_at},n))),s.createElement("div",{className:p.status_content,dangerouslySetInnerHTML:{__html:u}}),i.map((function(e){return s.createElement("a",{className:"no-external-link-icon",href:e.url,target:"_blank",rel:"noopener noreferrer"},s.createElement("img",{className:p.media_gallery,src:e.preview_url,alt:e.description}))})))}function k(e){var t,a,n=(0,s.useState)(void 0),r=n[0],o=n[1],i=e.mastodonUserFullName.split("@"),m=null!=(t=i[1])?t:"",u=null!=(a=i[2])?a:"";if(!m||!u)throw Error("Invalid mastodonUserFullName");var d="https://"+u+"/@"+m;(0,s.useEffect)((function(){(0,l.Z)((0,c.Z)().mark((function t(){var a;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h({userUrl:d,includeReplies:e.includeReplies,mastodonUserId:e.mastodonUserId,maxFeedItems:e.maxFeedItems});case 3:a=t.sent,o({state:"loaded",posts:a}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),o({state:"error",error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}),[e.mastodonUserFullName,e.includeReplies,e.maxFeedItems,e.mastodonUserId]);var f,k=[];return void 0===r?f=". . .":"error"===r.state?f="Error: "+r.error.message:(k.push.apply(k,r.posts),0===k.length&&(f="(The feed is empty.)")),s.createElement("div",{className:[p.feed,"no-external-link-icon"].join(" ")},s.createElement("div",{className:p.feedHeader},"Mastodon feed for"," ",s.createElement("a",{className:"no-external-link-icon",target:"_blank",rel:"noopener noreferrer",href:d},e.mastodonUserFullName)),f?s.createElement("div",{className:p.status},f):void 0,k.map((function(e,t){return s.createElement(_,{key:t,post:e,userUrl:d})})),s.createElement("a",{className:[p.feedFooterLink,"no-external-link-icon"].join(" "),target:"_blank",rel:"noopener noreferrer",href:d},s.createElement("div",{className:p.feedFooter}," \u2022 \xa0 \u2022 \xa0 \u2022 ")))}var g=["components"],v={title:"What's new"},N=void 0,w={unversionedId:"pages/news",id:"pages/news",title:"What's new",description:"To find out what's changed in the latest release, please see the package changelogs:",source:"@site/docs/pages/news.md",sourceDirName:"pages",slug:"/pages/news",permalink:"/pages/news",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/api-extractor.com/docs/pages/news.md",tags:[],version:"current",frontMatter:{title:"What's new"}},b={},x=[{value:"Announcements",id:"announcements",level:2}],E={toc:x},y="wrapper";function F(e){var t=e.components,a=(0,r.Z)(e,g);return(0,o.kt)(y,(0,n.Z)({},E,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To find out what's changed in the latest release, please see the package changelogs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/api-extractor/CHANGELOG.md"},"@microsoft/api-extractor changelog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/api-documenter/CHANGELOG.md"},"@microsoft/api-documenter changelog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/libraries/api-extractor-model/CHANGELOG.md"},"@microsoft/api-extractor-model changelog"),".")),(0,o.kt)("p",null,"API Extractor is maintained by the Rush Stack developer community. For roadmaps and updates from the team,\nplease visit the ",(0,o.kt)("a",{parentName:"p",href:"https://rushstack.io/pages/news/"},"Rush Stack News")," page."),(0,o.kt)("h2",{id:"announcements"},"Announcements"),(0,o.kt)("p",null,"Follow us on ",(0,o.kt)("a",{parentName:"p",href:"https://fosstodon.org/@rushstack"},"Mastodon (@rushstack@fosstodon.org)")," or ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/rushstack"},"Twitter (@rushstack)"),"."),(0,o.kt)(k,{mastodonUserFullName:"@rushstack@fosstodon.org",mastodonUserId:"109525862248474026",maxFeedItems:"6",mdxType:"MastodonFeed"}))}F.isMDXComponent=!0}}]);