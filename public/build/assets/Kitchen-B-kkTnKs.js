import{_ as v,k as b,o as l,f as r,a as u,w as p,u as y,q as w,F as d,Z as k,l as h,b as c,t as m,s as _,x as C,y as S}from"./app-C2IC8kHz.js";const $=n=>(C("data-v-9b32e039"),n=n(),S(),n),D=$(()=>c("title",null,`
            Kitchen
        `,-1)),F={class:"text-xs"},I={class:"flex justify-between"},L=["onClick"],O=["onClick"],B=Object.assign({layout:null},{__name:"Kitchen",props:{orders:Object},setup(n){const s=b(n.orders);Echo.channel("public").listen("OrderPlaced",e=>{s.value?s.value.push(e.order):s.value=[e.order]});const f=(e,o)=>{s.value.splice(e,1),_.delete(route("order.cancel",o)).then(t=>console.log(t.data))},g=(e,o)=>{s.value.splice(e,1),_.delete(route("order.done",o)).then(t=>console.log(t.data))},x=e=>{const{marginLeft:o,marginTop:t,width:i,height:a}=window.getComputedStyle(e);e.style.left=`${e.offsetLeft-parseFloat(o,10)}px`,e.style.top=`${e.offsetTop-parseFloat(t,10)}px`,e.style.width=i,e.style.height=a};return(e,o)=>(l(),r(d,null,[u(y(k),null,{default:p(()=>[D]),_:1}),u(w,{tag:"div",name:"list",onBeforeLeave:x,class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 m-4"},{default:p(()=>[(l(!0),r(d,null,h(s.value,(t,i)=>(l(),r("div",{key:t.id,class:"bg-white rounded-md p-4 border ease-in-out duration-200 transition-all"},[c("p",F,m(Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}).format(new Date(t.created_at))),1),(l(!0),r(d,null,h(t.items,a=>(l(),r("p",null,m(`${a.item.name} x${a.quantity}`),1))),256)),c("div",I,[c("button",{onClick:a=>f(i,t),class:"p-2 bg-red-500 text-white text-xs"},"Cancel",8,L),c("button",{onClick:a=>g(i,t),class:"p-2 bg-blue-500 text-white text-xs"},"Done",8,O)])]))),128))]),_:1})],64))}}),K=v(B,[["__scopeId","data-v-9b32e039"]]);export{K as default};