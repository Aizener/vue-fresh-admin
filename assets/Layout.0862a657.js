import{d as C,r as w,E as z,a as K,o as _,c as f,b as F,F as V,e as x,w as o,f as e,g as A,h as r,t as T,i as S,u as I,j as L,k as b,l as H,s as M,m as $,n as P,p as y,_ as k,q as D,v as R,x as N,y as G,z as j,A as q,T as J,B as O,C as Q,D as W,G as X,H as Y,I as B,J as Z,K as ee,L as te,M as oe,N as ne}from"./index.dc253901.js";import"./el-tooltip.89296c46.js";/* empty css                  *//* empty css                *//* empty css                   *//* empty css                  *//* empty css                 */const se=C({__name:"AsideMenu",props:{menu:null},setup(u){return(a,h)=>{const l=S,d=w("AsideMenu",!0),i=z,p=K;return _(!0),f(V,null,F(u.menu,(t,n)=>{var s;return _(),f(V,null,[(s=t.children)!=null&&s.length?(_(),x(i,{key:0,index:t.index},{title:o(()=>[e(l,null,{default:o(()=>[(_(),x(A(t.icon)))]),_:2},1024),r("span",null,T(t.title),1)]),default:o(()=>[e(d,{menu:t.children},null,8,["menu"])]),_:2},1032,["index"])):(_(),x(p,{key:1,index:t.index},{default:o(()=>[e(l,null,{default:o(()=>[(_(),x(A(t.icon)))]),_:2},1024),r("span",null,T(t.title),1)]),_:2},1032,["index"]))],64)}),256)}}}),ae={class:"aside"},le=C({__name:"Aside",setup(u){var s;I();const l=(s=L().getRoutes().find(m=>m.name==="Layout"))==null?void 0:s.children,d=b(),i=H(),{currentRoute:p}=M(i),t=m=>m.map(c=>{var v,g;return{index:c.path,title:(v=c.meta)==null?void 0:v.title,path:c.path,icon:(g=c.meta)==null?void 0:g.icon,children:c.children?t(c.children):[]}}),n=$(l?t(l):[]);return(m,c)=>{const v=P;return _(),f("div",ae,[e(v,{"text-color":"#666","active-text-color":"var(--co-primary-color)",router:!0,"default-active":y(p).path,collapse:y(d).collapse},{default:o(()=>[e(se,{menu:n.value},null,8,["menu"])]),_:1},8,["default-active","collapse"])])}}});const ce=k(le,[["__scopeId","data-v-6a83d788"]]),_e=u=>(N("data-v-0a1f4113"),u=u(),G(),u),ue={class:"header"},re={class:"header-right"},de={class:"info"},ie={class:"avatar"},pe=_e(()=>r("span",null,"\u7BA1\u7406\u5458",-1)),me=C({__name:"Header",setup(u){const a=b(),h=()=>{a.updateValue("collapse",!a.collapse)},l=()=>{a.updateValue("showDrawer",!0)};return(d,i)=>{const p=w("Fold"),t=w("Expand"),n=S,s=w("User"),m=w("Grid");return _(),f("div",ue,[e(n,{size:"24px",class:"header-left",onClick:h},{default:o(()=>[D(e(p,{color:"#333"},null,512),[[R,!y(a).collapse]]),D(e(t,{color:"#333"},null,512),[[R,y(a).collapse]])]),_:1}),r("div",re,[r("div",de,[r("div",ie,[e(n,null,{default:o(()=>[e(s)]),_:1})]),pe]),r("div",{class:"info",onClick:l},[e(n,null,{default:o(()=>[e(m)]),_:1})])])])}}});const he=k(me,[["__scopeId","data-v-0a1f4113"]]),ve={class:"router-tab"},fe=["onClick"],we=C({__name:"TabRouter",setup(u){const a=L(),h=I(),l=H(),{routes:d}=M(l),i=t=>{a.replace(t.path)},p=(t,n)=>{const s=[...l.routes];s.splice(n,1),l.updateValue("routes",s),s.length===n&&a.go(-1)};return(t,n)=>{const s=w("CircleClose"),m=S;return _(),f("div",ve,[e(J,{name:"move"},{default:o(()=>[(_(!0),f(V,null,F(y(d),(c,v)=>(_(),f("div",{class:j(["router-tab--item",{active:y(h).path===c.path}]),key:c.path,onClick:g=>i(c)},[r("span",null,T(c.name),1),e(m,{onClick:q(g=>p(c,v),["stop"])},{default:o(()=>[e(s)]),_:2},1032,["onClick"])],10,fe))),128))]),_:1})])}}});const xe=k(we,[["__scopeId","data-v-3d6c9d9f"]]);const U=u=>(N("data-v-d7678acc"),u=u(),G(),u),ye={class:"row view"},ge=U(()=>r("span",{class:"theme-title"},"\u663E\u793A\u6A21\u5F0F",-1)),Ce={class:"row theme"},Ee=U(()=>r("span",{class:"theme-title"},"\u4E3B\u9898\u8272",-1)),ke={class:"row-content"},Ve=C({__name:"Drawer",setup(u){const a=b(),{showDrawer:h}=M(a),l=n=>{n()},d=$(a.viewType),i=$(a.theme),p=n=>{a.updateValue("viewType",n),n==="dark"?document.getElementsByTagName("html")[0].classList.add("dark"):document.getElementsByTagName("html")[0].classList.remove("dark")},t=n=>{a.updateValue("theme",n)};return(n,s)=>{const m=O,c=Q,v=W,g=X;return _(),x(g,{modelValue:y(h),"onUpdate:modelValue":s[2]||(s[2]=E=>Y(h)?h.value=E:null),title:"\u8BBE\u7F6E",direction:"rtl","before-close":l},{default:o(()=>[r("div",ye,[ge,e(c,{class:"row-content",modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=E=>d.value=E),onChange:p},{default:o(()=>[e(m,{label:"default",border:""},{default:o(()=>[B("\u9ED8\u8BA4\u6A21\u5F0F")]),_:1}),e(m,{label:"dark",border:""},{default:o(()=>[B("\u6DF1\u8272\u6A21\u5F0F")]),_:1})]),_:1},8,["modelValue"])]),r("div",Ce,[Ee,r("div",ke,[e(v,{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=E=>i.value=E),onChange:t},null,8,["modelValue"])])])]),_:1},8,["modelValue"])}}});const Ae=k(Ve,[["__scopeId","data-v-d7678acc"]]),Te={id:"main"},$e=C({__name:"Layout",setup(u){return(a,h)=>{const l=Z,d=ee,i=w("router-view"),p=te,t=oe;return _(),f(V,null,[e(t,null,{default:o(()=>[e(l,{id:"aside"},{default:o(()=>[e(ce)]),_:1}),e(t,null,{default:o(()=>[e(d,{id:"header"},{default:o(()=>[e(he)]),_:1}),e(p,null,{default:o(()=>[e(xe,{id:"tab-router"}),r("div",Te,[e(i,null,{default:o(({Component:n})=>[(_(),x(ne,null,[(_(),x(A(n)))],1024))]),_:1})])]),_:1})]),_:1})]),_:1}),e(Ae)],64)}}});const Ie=k($e,[["__scopeId","data-v-a30fe6dc"]]);export{Ie as default};
