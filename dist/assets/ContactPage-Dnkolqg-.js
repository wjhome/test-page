import{B as p,s as f}from"./basecomponent.esm-CXFjE1Mm.js";import{o as d,c as u,m as h,a as n,j as i,u as s,v as m,r as b,y as v}from"./index-F0oJbrd5.js";import{s as x}from"./button.esm-D51QrmNn.js";import"./index.esm-CJwiPGGM.js";import"./baseicon.esm-CHcMqPbT.js";var g=function(t){var e=t.dt;return`
.p-inputtextarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("textarea.color"),`;
    background: `).concat(e("textarea.background"),`;
    padding: 0.5rem 0.75rem;
    border: 1px solid `).concat(e("textarea.border.color"),`;
    transition: background-color `).concat(e("transition.duration"),", color ").concat(e("transition.duration"),", border-color ").concat(e("transition.duration"),", outline-color ").concat(e("transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("textarea.box.shadow"),`;
}

.p-inputtextarea:enabled:hover {
    border-color: `).concat(e("textarea.hover.border.color"),`;
}

.p-inputtextarea:enabled:focus {
    border-color: `).concat(e("textarea.focus.border.color"),`;
    outline: 0 none;
}

.p-inputtextarea.p-invalid {
    border-color: `).concat(e("textarea.invalid.border.color"),`;
}

.p-inputtextarea.p-variant-filled {
    background-color: `).concat(e("textarea.filled.background"),`;
}

.p-inputtextarea.p-variant-filled:enabled:focus {
    background-color: `).concat(e("textarea.filled.focus.background"),`;
}

.p-inputtextarea:disabled {
    opacity: 1;
    background: `).concat(e("textarea.disabled.background"),`;
    color: `).concat(e("textarea.disabled.color"),`;
}

.p-inputtextarea::placeholder {
    color: `).concat(e("textarea.placeholder.color"),`;
}

.p-fluid .p-inputtextarea {
    width: 100%;
}

.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}
`)},$={root:function(t){var e=t.instance,o=t.props;return["p-inputtextarea p-component",{"p-filled":e.filled,"p-inputtextarea-resizable ":o.autoResize,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":e.$primevue.config.inputStyle==="filled"}]}},k=p.extend({name:"textarea",theme:g,classes:$}),y={name:"BaseTextarea",extends:f,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null}},style:k,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},c={name:"Textarea",extends:y,inheritAttrs:!1,emits:["update:modelValue"],mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(t){this.autoResize&&this.resize(),this.$emit("update:modelValue",t.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}}}},V=["value","aria-invalid"];function _(a,t,e,o,l,r){return d(),u("textarea",h({class:a.cx("root"),value:a.modelValue,"aria-invalid":a.invalid||void 0,onInput:t[0]||(t[0]=function(){return r.onInput&&r.onInput.apply(r,arguments)})},a.ptmi("root",r.ptmParams)),null,16,V)}c.render=_;const z={class:"card p-fluid flex flex-col gap-5"},w=n("img",{src:"https://www.buycar.hk/dist/static/contact-us-ads-desktop.df173b77.png",alt:""},null,-1),B={class:"p-fluid flex flex-wrap gap-3"},I={class:"flex-auto"},P=n("label",{for:"ssn",class:"font-bold block mb-2 text-left"},"稱呼",-1),R={class:"flex-auto"},S=n("label",{for:"phone",class:"font-bold block mb-2 text-left"},"WhatsApp 電話",-1),T={class:"p-fluid"},C=n("label",{for:"content",class:"font-bold block mb-2 text-left"},"留言",-1),H={class:"p-fluid"},j={__name:"ContactPage",setup(a){return(t,e)=>{const o=b("InputMask");return d(),u("div",z,[w,n("div",B,[n("div",I,[P,i(o,{id:"ssn",modelValue:t.value1,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value1=l),mask:"999-99-9999",placeholder:"請輸入姓名"},null,8,["modelValue"])]),n("div",R,[S,i(o,{id:"phone",modelValue:t.value2,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value2=l),mask:"9999-9999",placeholder:"9999-9999"},null,8,["modelValue"])])]),n("div",T,[C,i(s(c),{id:"content",modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value=l),rows:"5",cols:"30"},null,8,["modelValue"])]),n("div",H,[i(s(x),{class:"w-full"},{default:m(()=>[v("發送")]),_:1})])])}}};export{j as default};
