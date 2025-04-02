import{_ as p,c as o,a as l,t as h,b as d,n as m,o as a,F as b,r as f,d as _,e as u}from"./index-CqmaBQgp.js";const y={name:"Show",props:{show:{type:Object,required:!0},past:Boolean},methods:{showDate(s){const[t,e,i]=s.split("/"),r=new Date(i,t-1,e),n={weekday:"short",month:"short",day:"numeric"};return r.toLocaleDateString("en-US",n)}},created(){console.log("Show:",this.show)}},k={class:"text-center"},x=["innerHTML"],v={key:1},S={key:2},D={key:3},P={key:4},B=["href"],C={class:"border border-dark rounded mt-2"};function I(s,t,e,i,r,n){return a(),o("div",k,[e.show.title?(a(),o("div",{key:0,innerHTML:e.show.title,class:"lg:fs-5 title"},null,8,x)):l("",!0),e.show.extra?(a(),o("div",v,"("+h(e.show.extra)+")",1)):l("",!0),e.show.date?(a(),o("div",S,"date: "+h(n.showDate(e.show.date)),1)):l("",!0),e.show.time?(a(),o("div",D,"time: "+h(e.show.time),1)):l("",!0),e.show.free?(a(),o("div",P,"free!")):l("",!0),e.show.url?(a(),o("a",{key:5,href:e.show.url,target:"_blank"},[d("div",C,[e.show.free?(a(),o("div",{key:0,class:m(["p-2",e.past?"bg-pink-25":"bg-orange-25"])},"more info",2)):(a(),o("div",{key:1,class:m(["p-2",e.past?"bg-pink":"bg-orange"])},"tickets",2))])],8,B)):l("",!0)])}const L=p(y,[["render",I],["__scopeId","data-v-74893a1e"]]),A={name:"Shows",components:{Show:L},data(){return{showPast:!1,allShows:[{title:"<b>talk yo sh*t</b><br/>at chicago theater works",extra:"free for moms!",free:!1,url:"https://www.instagram.com/p/DH4iIF8PUfI/",date:"05/11/2025",time:"6:30pm"},{title:"<b>dinner party comedy</b><br/>at 3419 w fullerton",extra:"more details to come",date:"05/02/2025",time:"8:00pm"},{title:"<b>love below comedy show</b><br/>at beermiscuous",extra:"",free:!0,url:"https://www.instagram.com/thelovebelowcomedyshow/",date:"04/17/2025",time:"8:00pm"},{title:"<b>fresh faces</b><br/>at laugh factory",free:!1,url:"https://www.tixr.com/groups/laughfactorychicago/events/what-could-go-wrong-comedy-show-135416",date:"04/01/2025",time:"7:30pm"},{title:"<b>take a shot</b><br/>at my buddy's",extra:"judge & performer",free:!0,url:"https://www.instagram.com/takeashotopenmic/",date:"03/23/2025",time:"9:00pm"},{title:"<b>comedy show & latin dance party</b><br/>at latin dance technique studio",extra:"byob!",free:!1,url:"https://www.eventbrite.com/e/salsa-bachata-cumbia-dance-social-tickets-1263091674199?utm_experiment=test_share_listing&aff=ebdsshios&fbclid=PAZXh0bgNhZW0CMTEAAaakIbDAogwdQQIwd9peKbJFxUu9mxot0kFV_-4T3VxJQeQ3j1mT3n1z3pI_aem_gQ5Wd0UsN09L9ZZYmep12g",date:"03/22/2025",time:"6:45pm"},{title:"<b>wow, you're actually funny!</b><br/>at surge billiards",extra:"",free:!1,url:"https://www.eventbrite.com/e/wow-youre-actually-funny-tickets-1246778591329?utm_experiment=test_share_listing&aff=ebdsshios",date:"03/29/2025",time:"8:00pm"},{title:"<b>love below comedy show</b><br/>at beermiscuous",extra:"hosting!",free:!0,url:"https://www.instagram.com/p/DHLs-PlA-mu/",date:"03/20/2025",time:"8:00pm"},{title:"<b>love below comedy show</b><br/>at beermiscuous",extra:"hosting!",free:!0,url:"https://www.instagram.com/p/DFqdfblSCIj/",date:"02/20/2025",time:"8:30pm"},{title:"<b>what could go wrong?</b><br/>at laugh factory",free:!1,url:"https://www.tixr.com/groups/laughfactorychicago/events/what-could-go-wrong-comedy-show-123912",date:"02/13/2025",time:"9:00pm"},{title:"late nite mic<br/>at <b>comedy bar</b>",extra:"guest spot",free:!1,url:"https://www.eventbrite.com/e/monday-february-17-late-nite-mic-with-vik-pandya-tickets-1119346498509?aff=erellivmlt",date:"02/17/2025",time:"7:30pm"},{title:"<b>shaker's on clark</b>",extra:"feature",free:!0,url:"",date:"02/03/2025",time:"8:30pm"}]}},computed:{upcomingShows(){return this.sortByDate(this.allShows.filter(s=>!this.isPast(s.date)),"asc")},pastShows(){return this.sortByDate(this.allShows.filter(s=>this.isPast(s.date)),"desc")}},methods:{sortByDate(s,t="asc"){return s.sort((e,i)=>{const r=new Date(e.date),n=new Date(i.date);return t==="asc"?r-n:n-r})},isPast(s){const t=new Date;return t.setDate(t.getDate()),s=new Date(s),s.setHours(23),t>s},showDate(s){const[t,e,i]=s.split("/"),r=new Date(i,t-1,e),n={weekday:"short",month:"short",day:"numeric"};return r.toLocaleDateString("en-US",n)}}},F={class:"text-center"},V={class:"flex justify-center align-items-center my-4"},j={key:0},H={class:"m-4 my-5 w-md-50 d-flex flex-column align-items-center"},N={key:1},Q={class:"opacity-50 m-4 my-5 w-md-50 d-flex flex-column align-items-center"};function T(s,t,e,i,r,n){const w=_("Show");return a(),o("div",F,[t[2]||(t[2]=d("small",{class:"mt-3",style:{color:"orange"}},"(don't refresh this page)",-1)),d("div",V,[d("button",{class:m(["p-2 me-4 border border-dark rounded text-uppercase text-dark",r.showPast?"bg-orange-25":"bg-orange"]),onClick:t[0]||(t[0]=c=>r.showPast=!1)},"upcoming",2),d("button",{class:m(["p-2 border border-dark rounded text-uppercase text-dark",r.showPast?"bg-pink":"bg-pink-25"]),onClick:t[1]||(t[1]=c=>r.showPast=!0)},"past",2)]),r.showPast?(a(),o("div",N,[(a(!0),o(b,null,f(n.pastShows,(c,g)=>(a(),o("div",Q,[u(w,{show:c,past:!0,class:"border rounded border-pink p-4"},null,8,["show"])]))),256))])):(a(),o("div",j,[(a(!0),o(b,null,f(n.upcomingShows,(c,g)=>(a(),o("div",H,[u(w,{show:c,class:"border rounded border-orange p-4"},null,8,["show"])]))),256))]))])}const U=p(A,[["render",T]]),q={__name:"ShowsView",setup(s){return(t,e)=>(a(),o("main",null,[u(U)]))}};export{q as default};
