import{_ as F}from"./Article-MqzqZRmN.js";import{s as H}from"./divider.esm-C_15MuFl.js";import{s as T,a as q}from"./axios-B3Hj9eMr.js";import{m as i,o as a,c as l,e as b,n as P,f as O,g as p,t as v,r as w,a as o,F as k,d as A,i as z,j as y,I as G,J,q as f,G as K,v as L,u as M}from"./index-CgDrHoTr.js";import{B as Q,a as R}from"./baseicon.esm-BHSX61lm.js";var W=function(n){var t=n.dt;return`
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
`)},X={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",item:function(n){var t=n.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",icon:"p-breadcrumb-item-icon",label:"p-breadcrumb-item-label"},Y=Q.extend({name:"breadcrumb",theme:W,classes:X}),Z={name:"BaseBreadcrumb",extends:R,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:Y,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},N={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:R,props:{item:null,templates:null,index:null},methods:{onClick:function(n){this.item.command&&this.item.command({originalEvent:n,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var n=this.item,t=n.to,c=n.url,u=typeof window<"u"?window.location.pathname:"";return t===u||c===u?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var n=this;return{action:i({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(c){return n.onClick(c)}},this.ptm("itemLink",this.ptmOptions)),icon:i({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:i({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},$=["href","target","aria-current"];function ee(e,n,t,c,u,r){return r.visible()?(a(),l("li",i({key:0,class:[e.cx("item"),t.item.class]},e.ptm("item",r.ptmOptions)),[t.templates.item?(a(),b(O(t.templates.item),{key:1,item:t.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(a(),l("a",i({key:0,href:t.item.url||"#",class:e.cx("itemLink"),target:t.item.target,"aria-current":r.isCurrentUrl(),onClick:n[0]||(n[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("itemLink",r.ptmOptions)),[t.templates&&t.templates.itemicon?(a(),b(O(t.templates.itemicon),{key:0,item:t.item,class:P(e.cx("icon",r.ptmOptions))},null,8,["item","class"])):t.item.icon?(a(),l("span",i({key:1,class:[e.cx("icon"),t.item.icon]},e.ptm("icon",r.ptmOptions)),null,16)):p("",!0),t.item.label?(a(),l("span",i({key:2,class:e.cx("label")},e.ptm("label",r.ptmOptions)),v(r.label()),17)):p("",!0)],16,$))],16)):p("",!0)}N.render=ee;var S={name:"Breadcrumb",extends:Z,inheritAttrs:!1,components:{BreadcrumbItem:N,ChevronRightIcon:T}};function te(e,n,t,c,u,r){var d=w("BreadcrumbItem"),g=w("ChevronRightIcon");return a(),l("nav",i({class:e.cx("root")},e.ptmi("root")),[o("ol",i({class:e.cx("list")},e.ptm("list")),[e.home?(a(),b(d,i({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):p("",!0),(a(!0),l(k,null,A(e.model,function(h,m){return a(),l(k,{key:h.label+"_"+m},[e.home||m!==0?(a(),l("li",i({key:0,class:e.cx("separator")},e.ptm("separator")),[z(e.$slots,"separator",{},function(){return[y(g,i({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):p("",!0),y(d,{item:h,index:m,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}S.render=te;const ne={class:"card flex justify-content-center"},re=["href","onClick"],ae={class:"text-primary font-semibold"},ie=["href","target"],oe={class:"text-color"},se={class:"card"},le=["innerHTML"],ce={class:"card"},me=o("p",{class:"text-2xl"},"熱門文章",-1),ue={class:"grid grid-cols-3 gap-1"},ve={__name:"ArticlePage",setup(e){const n=G(),t=J(),c=f({}),u=f(""),r=async m=>{await d(m),n.push(`/article/${m}`),window.scroll({top:0,left:0,behavior:"smooth"})},d=async m=>{const C=await q.get(`https://www.buycar.hk/car/api/article/${m}`);c.value=C.data,u.value=C.data.title},g=f({icon:"pi pi-book",route:"/articles"});let h=f([{label:"熱門文章"},{label:"排行榜系列"},{label:u}]);return K(async()=>{await d(t.params.id)}),(m,C)=>{var I,B,x;const U=w("router-link"),V=H,j=F;return a(),l(k,null,[o("div",ne,[y(M(S),{home:g.value,model:M(h)},{item:L(({item:s,props:_})=>[s.route?(a(),b(U,{key:0,to:s.route,custom:""},{default:L(({href:D,navigate:E})=>[o("a",i({href:D},_.action,{onClick:E}),[o("span",{class:P([s.icon,"text-color"])},null,2),o("span",ae,v(s.label),1)],16,re)]),_:2},1032,["to"])):(a(),l("a",i({key:1,href:s.url,target:s.target},_.action),[o("span",oe,v(s.label),1)],16,ie))]),_:1},8,["home","model"])]),o("div",se,[o("h1",null,v((I=c.value)==null?void 0:I.title),1),o("div",{class:"card",innerHTML:(B=c.value)==null?void 0:B.content},null,8,le)]),o("div",ce,[me,y(V),o("div",ue,[(a(!0),l(k,null,A((x=c.value)==null?void 0:x.hit_articles,s=>(a(),b(j,{key:s,data:s,onClick:_=>r(s.id)},null,8,["data","onClick"]))),128))])])],64)}}};export{ve as default};
