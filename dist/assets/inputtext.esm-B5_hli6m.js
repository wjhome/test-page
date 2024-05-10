import{B as r,a}from"./baseicon.esm-BHSX61lm.js";import{o as l,c as p,m as u}from"./index-CgDrHoTr.js";var d=function(n){var t=n.dt;return`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(t("inputtext.color"),`;
    background: `).concat(t("inputtext.background"),`;
    padding: 0.5rem 0.75rem;
    border: 1px solid `).concat(t("inputtext.border.color"),`;
    transition: background-color `).concat(t("transition.duration"),", color ").concat(t("transition.duration"),", border-color ").concat(t("transition.duration"),", outline-color ").concat(t("transition.duration"),`;
    appearance: none;
    border-radius: `).concat(t("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("inputtext.box.shadow"),`;
}

.p-inputtext:enabled:hover {
    border-color: `).concat(t("inputtext.hover.border.color"),`;
}

.p-inputtext:enabled:focus {
    border-color: `).concat(t("inputtext.focus.border.color"),`;
    outline: 0 none;
}

.p-inputtext.p-invalid {
    border-color: `).concat(t("inputtext.invalid.border.color"),`;
}

.p-inputtext.p-variant-filled {
    background: `).concat(t("inputtext.filled.background"),`;
}

.p-inputtext.p-variant-filled:enabled:focus {
    background-color: `).concat(t("inputtext.filled.focus.background"),`;
}

.p-inputtext:disabled {
    opacity: 1;
    background: `).concat(t("inputtext.disabled.background"),`;
    color: `).concat(t("inputtext.disabled.color"),`;
}

.p-inputtext::placeholder {
    color: `).concat(t("inputtext.placeholder.color"),`;
}

.p-fluid .p-inputtext {
    width: 100%;
}
`)},c={root:function(n){var t=n.instance,o=n.props;return["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":o.size==="small","p-inputtext-lg":o.size==="large","p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":t.$primevue.config.inputStyle==="filled"}]}},s=r.extend({name:"inputtext",theme:d,classes:c}),f={name:"BaseInputText",extends:a,props:{modelValue:null,size:{type:String,default:null},invalid:{type:Boolean,default:!1},variant:{type:String,default:null}},style:s,provide:function(){return{$pcInputText:this,$parentInstance:this}}},x={name:"InputText",extends:f,inheritAttrs:!1,emits:["update:modelValue"],methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(n){this.$emit("update:modelValue",n.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0}}},m=["value","aria-invalid"];function b(e,n,t,o,v,i){return l(),p("input",u({type:"text",class:e.cx("root"),value:e.modelValue,"aria-invalid":e.invalid||void 0,onInput:n[0]||(n[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.getPTOptions("root")),null,16,m)}x.render=b;export{x as s};
