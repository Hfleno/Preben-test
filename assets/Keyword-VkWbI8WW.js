import{_ as A,q as D,i as E,f as G,g as J,r as f,b as L,s as M,e,o as r,j as k,w as o,v as c,d as s,V as g,k as m,l as w,t as d,m as V,c as _,x as K,y as N,z as O,a as j,n as H,F as P}from"./index-nAv4R95r.js";import{V as Q}from"./VContainer-rpoecnuI.js";const W={key:0},X={key:1,class:"keyword-name"},Y=["onClick"],Z={class:"val"},ee={__name:"Keyword",props:{id:{type:String,required:!0},viewtype:{type:String,required:!0}},setup(B){const{t:p}=D({useScope:"global"}),q=E(),x=G(),i=J(),C=B;let h=f(!1),l=f(null),v=f(""),u=f(!0),y=f("");L(async()=>{let a={type:"get",service:"getkeyword",id:C.id};if(console.log(C.id),C.id==="new"){l.value={name:"",values:[],type:"hotlist"},h.value=!0,u.value=!1;return}try{l.value=await useBackend(a),console.log(l.value.values),h.value=!0}catch(t){console.log(t)}}),M(y,a=>{l.value.name=a});const F=()=>{},I=()=>{l.value.name=y},R=()=>{history.back()},$=()=>{u.value=!u.value},T=async()=>{const a={type:"post",service:"savekeyword",data:JSON.stringify(l.value)};console.log("save");let t=await useBackend(a);console.log(t),q.addKeyword(t),x.push({name:"hotlists",params:{viewtype:"hotlists",blabla:p}})},S=()=>{l.value.values.push(v.value),v.value=""},U=()=>{l.value.values.sort()},z=a=>{let t=l.value.values[a];const n=l.value.values.filter(b=>b!==t);console.log(n),l.value.values=n};return(a,t)=>e(h)?(r(),k(Q,{key:0},{default:o(()=>[s(V,null,{default:o(()=>[s(g,null,{default:o(()=>[s(m,{onClick:R,color:e(i).globalColors.colorBackground,class:"btn"},{default:o(()=>[w(d(a.$t("common.close")),1)]),_:1},8,["color"]),e(u)?(r(),k(m,{key:0,onClick:$,color:e(i).globalColors.colorBackground,class:"btn"},{default:o(()=>[w(d(a.$t("common.edit")),1)]),_:1},8,["color"])):c("",!0),e(u)?(r(),k(m,{key:1,onClick:F,color:e(i).globalColors.colorBackground,class:"btn"},{default:o(()=>[w(d(a.$t("common.delete")),1)]),_:1},8,["color"])):c("",!0),e(u)?c("",!0):(r(),k(m,{key:2,id:"save",onClick:T,color:e(i).globalColors.colorBackground,class:"btn"},{default:o(()=>[w(d(a.$t("common.save")),1)]),_:1},8,["color"]))]),_:1})]),_:1}),s(V,null,{default:o(()=>[s(g,{cols:"3"},{default:o(()=>[B.id==="new"&&!e(u)?(r(),_("div",W,[s(K,{modelValue:e(y),"onUpdate:modelValue":t[0]||(t[0]=n=>N(y)?y.value=n:y=n),id:"newkeyword",blur:I,placeholder:e(p)("keywords.keyword")},null,8,["modelValue","placeholder"])])):(r(),_("div",X,d(e(l).name),1))]),_:1})]),_:1}),e(u)?c("",!0):(r(),k(V,{key:0},{default:o(()=>[s(g,{cols:"3"},{default:o(()=>[s(K,{modelValue:e(v),"onUpdate:modelValue":t[1]||(t[1]=n=>N(v)?v.value=n:v=n),id:"newvalue",onKeydown:O(S,["enter"]),placeholder:e(p)("keywords.new-value")},null,8,["modelValue","placeholder"])]),_:1}),s(g,{cols:"1"},{default:o(()=>[s(m,{id:"btnaddnewvalue",onClick:S,color:e(i).globalColors.colorBackground},{default:o(()=>[w(d(e(p)("keywords.add")),1)]),_:1},8,["color"])]),_:1})]),_:1})),s(V,null,{default:o(()=>[s(g,{cols:"3"},{default:o(()=>[!e(u)&&e(l).values.length!==0?(r(),k(m,{key:0,id:"sortvalues",onClick:U,class:"mb-4",color:e(i).globalColors.colorBackground},{default:o(()=>[w(d(e(p)("keywords.sort")),1)]),_:1},8,["color"])):c("",!0),j("ul",null,[(r(!0),_(P,null,H(e(l).values,(n,b)=>(r(),_("li",{key:b},[e(u)?c("",!0):(r(),_("span",{key:0,class:"delete",onClick:oe=>z(b)},"x",8,Y)),j("span",Z,d(n),1)]))),128))])]),_:1})]),_:1})]),_:1})):c("",!0)}},se=A(ee,[["__scopeId","data-v-56978d09"]]);export{se as default};
