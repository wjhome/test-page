import{s as v,a as k}from"./tabpanel.esm-DnIsDOiK.js";import{a as g}from"./axios-B3Hj9eMr.js";import{I as w,q as s,G as C,c as r,j as b,v as l,o as t,F as i,d as u,e as d,a as y}from"./index-CgDrHoTr.js";import{_ as T}from"./Article-MqzqZRmN.js";import"./index.esm-DcCstQvY.js";import"./baseicon.esm-BHSX61lm.js";import"./ripple.esm-C7OxY8p-.js";const $={class:"card"},B={class:"grid grid-cols-3 gap-1"},G={__name:"ArticlesPage",setup(V){w();const p=s(),_=s([{title:"排行榜系列",content:"Tab 1 Content"},{title:"最強整合",content:"Tab 2 Content"},{title:"牌費須知",content:"Tab 3 Content"}]),n=s(),m=async e=>{const a=await g.get("https://www.buycar.hk/car/api/articles/1");p.value=a.data.results,n.value=a.data.results};return C(async()=>{await m()}),(e,a)=>{const f=k,h=v;return t(),r("div",$,[b(h,null,{default:l(()=>[(t(!0),r(i,null,u(_.value,o=>(t(),d(f,{key:o.title,header:o.title},{default:l(()=>[y("div",B,[(t(!0),r(i,null,u(n.value,c=>(t(),d(T,{key:e.car,data:c,onClick:x=>e.$router.push(`/article/${c.id}`)},null,8,["data","onClick"]))),128))])]),_:2},1032,["header"]))),128))]),_:1})])}}};export{G as default};