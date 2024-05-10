import{a as F}from"./axios-B6xwUs71.js";import{m as a,o as i,c as l,e as h,n as M,f as O,g as p,t as k,r as b,a as o,F as y,d as P,i as H,j as g,I as T,J as q,q as v,G as z,v as L,u as A}from"./index-CXaaNgNc.js";import{s as G}from"./index.esm-DnnhmMvr.js";import{B as J,s as R}from"./basecomponent.esm-D9myDStk.js";import"./baseicon.esm-D7UKAGUx.js";var K=function(n){var t=n.dt;return`
.p-breadcrumb {
    background: `.concat(t("breadcrumb.background"),`;
    border: 0 none;
    border-radius: `).concat(t("rounded.base"),`;
    padding: 1rem;
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    margin: 0 0.5rem 0 0.5rem;
    color: `).concat(t("breadcrumb.separator.color"),`;
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: background-color `).concat(t("transition.duration"),", color ").concat(t("transition.duration"),", outline-color ").concat(t("transition.duration"),`;
    border-radius: `).concat(t("rounded.base"),`;
    outline-color: transparent;
}

.p-breadcrumb-item-link:focus-visible {
    outline: `).concat(t("focus.ring.width")," ").concat(t("focus.ring.style")," ").concat(t("focus.ring.color"),`;
    outline-offset: `).concat(t("focus.ring.offset"),`;
}

.p-breadcrumb-item-link {
    color: `).concat(t("breadcrumb.item.color"),`;
    transition: background-color `).concat(t("transition.duration"),", color ").concat(t("transition.duration"),", outline-color ").concat(t("transition.duration"),`;
    line-height: 1;
}

.p-breadcrumb-item-label:hover {
    color: `).concat(t("breadcrumb.item.hover.color"),`;
    line-height: 1;
}

.p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.color"),`;
}
`)},Q={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",item:function(n){var t=n.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",icon:"p-breadcrumb-item-icon",label:"p-breadcrumb-item-label"},W=J.extend({name:"breadcrumb",theme:K,classes:Q}),X={name:"BaseBreadcrumb",extends:R,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:W,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},N={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:R,props:{item:null,templates:null,index:null},methods:{onClick:function(n){this.item.command&&this.item.command({originalEvent:n,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var n=this.item,t=n.to,c=n.url,u=typeof window<"u"?window.location.pathname:"";return t===u||c===u?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var n=this;return{action:a({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(c){return n.onClick(c)}},this.ptm("itemLink",this.ptmOptions)),icon:a({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:a({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},Y=["href","target","aria-current"];function Z(e,n,t,c,u,r){return r.visible()?(i(),l("li",a({key:0,class:[e.cx("item"),t.item.class]},e.ptm("item",r.ptmOptions)),[t.templates.item?(i(),h(O(t.templates.item),{key:1,item:t.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(i(),l("a",a({key:0,href:t.item.url||"#",class:e.cx("itemLink"),target:t.item.target,"aria-current":r.isCurrentUrl(),onClick:n[0]||(n[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("itemLink",r.ptmOptions)),[t.templates&&t.templates.itemicon?(i(),h(O(t.templates.itemicon),{key:0,item:t.item,class:M(e.cx("icon",r.ptmOptions))},null,8,["item","class"])):t.item.icon?(i(),l("span",a({key:1,class:[e.cx("icon"),t.item.icon]},e.ptm("icon",r.ptmOptions)),null,16)):p("",!0),t.item.label?(i(),l("span",a({key:2,class:e.cx("label")},e.ptm("label",r.ptmOptions)),k(r.label()),17)):p("",!0)],16,Y))],16)):p("",!0)}N.render=Z;var S={name:"Breadcrumb",extends:X,inheritAttrs:!1,components:{BreadcrumbItem:N,ChevronRightIcon:G}};function $(e,n,t,c,u,r){var d=b("BreadcrumbItem"),C=b("ChevronRightIcon");return i(),l("nav",a({class:e.cx("root")},e.ptmi("root")),[o("ol",a({class:e.cx("list")},e.ptm("list")),[e.home?(i(),h(d,a({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):p("",!0),(i(!0),l(y,null,P(e.model,function(f,m){return i(),l(y,{key:f.label+"_"+m},[e.home||m!==0?(i(),l("li",a({key:0,class:e.cx("separator")},e.ptm("separator")),[H(e.$slots,"separator",{},function(){return[g(C,a({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):p("",!0),g(d,{item:f,index:m,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}S.render=$;const ee={class:"card flex justify-content-center"},te=["href","onClick"],ne={class:"text-primary font-semibold"},re=["href","target"],ie={class:"text-color"},ae={class:"card"},oe=["innerHTML"],se={class:"card"},le=o("p",{class:"text-2xl"},"熱門文章",-1),ce={class:"grid grid-cols-3 gap-1"},he={__name:"ArticlePage",setup(e){const n=T(),t=q(),c=v({}),u=v(""),r=async m=>{await d(m),n.push(`/article/${m}`),window.scroll({top:0,left:0,behavior:"smooth"})},d=async m=>{const _=await F.get(`https://www.buycar.hk/car/api/article/${m}`);c.value=_.data,u.value=_.data.title},C=v({icon:"pi pi-book",route:"/articles"});let f=v([{label:"熱門文章"},{label:"排行榜系列"},{label:u}]);return z(async()=>{await d(t.params.id)}),(m,_)=>{var I,B,x;const U=b("router-link"),V=b("divider"),j=b("Article");return i(),l(y,null,[o("div",ee,[g(A(S),{home:C.value,model:A(f)},{item:L(({item:s,props:w})=>[s.route?(i(),h(U,{key:0,to:s.route,custom:""},{default:L(({href:D,navigate:E})=>[o("a",a({href:D},w.action,{onClick:E}),[o("span",{class:M([s.icon,"text-color"])},null,2),o("span",ne,k(s.label),1)],16,te)]),_:2},1032,["to"])):(i(),l("a",a({key:1,href:s.url,target:s.target},w.action),[o("span",ie,k(s.label),1)],16,re))]),_:1},8,["home","model"])]),o("div",ae,[o("h1",null,k((I=c.value)==null?void 0:I.title),1),o("div",{class:"card",innerHTML:(B=c.value)==null?void 0:B.content},null,8,oe)]),o("div",se,[le,g(V),o("div",ce,[(i(!0),l(y,null,P((x=c.value)==null?void 0:x.hit_articles,s=>(i(),h(j,{key:s,data:s,onClick:w=>r(s.id)},null,8,["data","onClick"]))),128))])])],64)}}};export{he as default};
