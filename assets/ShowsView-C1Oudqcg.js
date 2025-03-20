import{_ as f,c as o,a as l,t as u,b as d,n as h,o as a,F as b,r as _,d as y,e as m}from"./index-ComIuvEY.js";const p={name:"Show",props:{show:{type:Object,required:!0},past:Boolean},methods:{showDate(t){const[s,e,i]=t.split("/"),r=new Date(i,s-1,e),n={weekday:"short",month:"short",day:"numeric"};return r.toLocaleDateString("en-US",n)}},created(){console.log("Show:",this.show)}},k={class:"text-center"},x=["innerHTML"],v={key:1},S={key:2},D={key:3},P={key:4},B=["href"],C={class:"border border-dark rounded mt-2"};function L(t,s,e,i,r,n){return a(),o("div",k,[e.show.title?(a(),o("div",{key:0,innerHTML:e.show.title,class:"lg:fs-5 title"},null,8,x)):l("",!0),e.show.extra?(a(),o("div",v,"("+u(e.show.extra)+")",1)):l("",!0),e.show.date?(a(),o("div",S,"date: "+u(n.showDate(e.show.date)),1)):l("",!0),e.show.time?(a(),o("div",D,"time: "+u(e.show.time),1)):l("",!0),e.show.free?(a(),o("div",P,"free!")):l("",!0),e.show.url?(a(),o("a",{key:5,href:e.show.url,target:"_blank"},[d("div",C,[e.show.free?(a(),o("div",{key:0,class:h(["p-2",e.past?"bg-pink-25":"bg-orange-25"])},"more info",2)):(a(),o("div",{key:1,class:h(["p-2",e.past?"bg-pink":"bg-orange"])},"tickets",2))])],8,B)):l("",!0)])}const A=f(p,[["render",L],["__scopeId","data-v-74893a1e"]]),V={name:"Shows",components:{Show:A},data(){return{showPast:!1,allShows:[{title:"<b>comedy show & latin dance party</b><br/>at latin dance technique studio",extra:"byob!",free:!1,url:"https://www.eventbrite.com/e/salsa-bachata-cumbia-dance-social-tickets-1263091674199?utm_experiment=test_share_listing&aff=ebdsshios&fbclid=PAZXh0bgNhZW0CMTEAAaakIbDAogwdQQIwd9peKbJFxUu9mxot0kFV_-4T3VxJQeQ3j1mT3n1z3pI_aem_gQ5Wd0UsN09L9ZZYmep12g",date:"03/22/2025",time:"6:45pm"},{title:"<b>wow, you're actually funny!</b><br/>at surge billiards",extra:"",free:!1,url:"https://www.eventbrite.com/e/wow-youre-actually-funny-tickets-1246778591329?utm_experiment=test_share_listing&aff=ebdsshios",date:"03/29/2025",time:"8:00pm"},{title:"<b>love below comedy show</b><br/>at beermiscuous",extra:"hosting!",free:!0,url:"https://www.instagram.com/p/DHLs-PlA-mu/",date:"03/20/2025",time:"8:00pm"},{title:"<b>love below comedy show</b><br/>at beermiscuous",extra:"hosting!",free:!0,url:"https://www.instagram.com/p/DFqdfblSCIj/",date:"02/20/2025",time:"8:30pm"},{title:"<b>what could go wrong?</b><br/>at laugh factory",free:!1,url:"https://www.tixr.com/groups/laughfactorychicago/events/what-could-go-wrong-comedy-show-123912",date:"02/13/2025",time:"9:00pm"},{title:"late nite mic<br/>at <b>comedy bar</b>",extra:"guest spot",free:!1,url:"https://www.eventbrite.com/e/monday-february-17-late-nite-mic-with-vik-pandya-tickets-1119346498509?aff=erellivmlt",date:"02/17/2025",time:"7:30pm"},{title:"<b>shaker's on clark</b>",extra:"",free:!0,url:"",date:"02/03/2025",time:"8:30pm"}]}},computed:{upcomingShows(){return this.sortByDate(this.allShows.filter(t=>!this.isPast(t.date)),"asc")},pastShows(){return this.sortByDate(this.allShows.filter(t=>this.isPast(t.date)),"desc")}},methods:{sortByDate(t,s="asc"){return t.sort((e,i)=>{const r=new Date(e.date),n=new Date(i.date);return s==="asc"?r-n:n-r})},isPast(t){const s=new Date;return t=new Date(t),console.log("today:",s),console.log("show date:",t),console.log("today > show date ?",s>t),s<t&&(this.split=!0),s>t},showDate(t){const[s,e,i]=t.split("/"),r=new Date(i,s-1,e),n={weekday:"short",month:"short",day:"numeric"};return r.toLocaleDateString("en-US",n)}}},F={class:"text-center"},I={class:"flex justify-center align-items-center my-4"},N={key:0},Q={class:"m-4 my-5 w-md-50 d-flex flex-column align-items-center"},T={key:1},j={class:"opacity-50 m-4 my-5 w-md-50 d-flex flex-column align-items-center"};function U(t,s,e,i,r,n){const w=y("Show");return a(),o("div",F,[s[2]||(s[2]=d("small",{class:"mt-3",style:{color:"orange"}},"(don't refresh this page)",-1)),d("div",I,[d("button",{class:h(["p-2 me-4 border border-dark rounded text-uppercase",r.showPast?"bg-orange-25":"bg-orange"]),onClick:s[0]||(s[0]=c=>r.showPast=!1)},"upcoming",2),d("button",{class:h(["p-2 border border-dark rounded text-uppercase",r.showPast?"bg-pink":"bg-pink-25"]),onClick:s[1]||(s[1]=c=>r.showPast=!0)},"past",2)]),r.showPast?(a(),o("div",T,[(a(!0),o(b,null,_(n.pastShows,(c,g)=>(a(),o("div",j,[m(w,{show:c,past:!0,class:"border rounded border-pink p-4"},null,8,["show"])]))),256))])):(a(),o("div",N,[(a(!0),o(b,null,_(n.upcomingShows,(c,g)=>(a(),o("div",Q,[m(w,{show:c,class:"border rounded border-orange p-4"},null,8,["show"])]))),256))]))])}const Z=f(V,[["render",U]]),H={__name:"ShowsView",setup(t){return(s,e)=>(a(),o("main",null,[m(Z)]))}};export{H as default};
