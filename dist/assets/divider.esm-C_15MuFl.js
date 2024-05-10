import{B as d,a as l}from"./baseicon.esm-BHSX61lm.js";import{o as i,c as r,m as o,i as a,g as p}from"./index-CgDrHoTr.js";var s=function(t){var e=t.dt;return`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: 1rem 0;
    padding: 0 1rem;
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
    border-top: 1px solid `.concat(e("divider.border.color"),`;
}

.p-divider-horizontal .p-divider-content {
    padding: 0 0.5rem;
}

.p-divider-vertical {
    min-height: 100%;
    margin: 0 1rem;
    display: flex;
    position: relative;
    justify-content: center;
    margin: 0 1rem;
    padding: 1rem 0;
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: "";
    border-left: 1px solid `).concat(e("divider.border.color"),`;
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: 0.5rem 0;
}

.p-divider-content {
    z-index: 1;
    background: `).concat(e("divider.content.background"),`;
    color: `).concat(e("divider.content.color"),`;
}

.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-top-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-left-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-top-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-left-style: dotted;
}
`)},v={root:function(t){var e=t.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},c={root:function(t){var e=t.props;return["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}]},content:"p-divider-content"},u=d.extend({name:"divider",theme:s,classes:c,inlineStyles:v}),f={name:"BaseDivider",extends:l,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:u,provide:function(){return{$pcDivider:this,$parentInstance:this}}},g={name:"Divider",extends:f,inheritAttrs:!1},y=["aria-orientation"];function m(n,t,e,h,b,z){return i(),r("div",o({class:n.cx("root"),style:n.sx("root"),role:"separator","aria-orientation":n.layout},n.ptmi("root")),[n.$slots.default?(i(),r("div",o({key:0,class:n.cx("content")},n.ptm("content")),[a(n.$slots,"default")],16)):p("",!0)],16,y)}g.render=m;export{g as s};
