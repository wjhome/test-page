import{B as i,s as p}from"./basecomponent.esm-D9myDStk.js";import{o as r,c as o,m as t,i as n,g as a,a as l}from"./index-CXaaNgNc.js";var c=function(d){var s=d.dt;return`
.p-card {
    background: `.concat(s("card.background"),`;
    color: `).concat(s("card.color"),`;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.p-card-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.p-card-title {
    font-size: 1.25rem;
    font-weight: 600;
}

.p-card-subtitle {
    font-weight: 400;
    color: `).concat(s("card.subtitle.color"),`;
}
`)},m={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},u=i.extend({name:"card",theme:c,classes:m}),f={name:"BaseCard",extends:p,style:u,provide:function(){return{$pcCard:this,$parentInstance:this}}},b={name:"Card",extends:f,inheritAttrs:!1};function $(e,d,s,h,v,y){return r(),o("div",t({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(r(),o("div",t({key:0,class:e.cx("header")},e.ptm("header")),[n(e.$slots,"header")],16)):a("",!0),l("div",t({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(r(),o("div",t({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(r(),o("div",t({key:0,class:e.cx("title")},e.ptm("title")),[n(e.$slots,"title")],16)):a("",!0),e.$slots.subtitle?(r(),o("div",t({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[n(e.$slots,"subtitle")],16)):a("",!0)],16)):a("",!0),l("div",t({class:e.cx("content")},e.ptm("content")),[n(e.$slots,"content")],16),e.$slots.footer?(r(),o("div",t({key:1,class:e.cx("footer")},e.ptm("footer")),[n(e.$slots,"footer")],16)):a("",!0)],16)],16)}b.render=$;export{b as s};
