import{_,c as e,a as c,F as u,r as p,o as t,b as a,t as l,d as f}from"./index-BjoE97GE.js";const b={data(){return{shows:[{title:"late nite mic<br/>at <b>comedy bar</b>",extra:"guest spot",free:!1,url:"https://www.eventbrite.com/e/monday-february-17-late-nite-mic-with-vik-pandya-tickets-1119346498509?aff=erellivmlt",date:"02/17/2025",time:"7:30pm"},{title:"<b>love below comedy show</b><br/>at beermiscuous",extra:"hosting!",free:!0,url:"https://www.instagram.com/p/DFqdfblSCIj/",date:"02/20/2025",time:"8:30pm"}]}},methods:{showDate(n){const[r,o,m]=n.split("/"),i=new Date(m,r-1,o),d={weekday:"short",month:"short",day:"numeric"};return i.toLocaleDateString("en-US",d)}}},y={class:"text-center"},h={class:"m-4 w-md-50 d-flex flex-column align-items-center"},k=["innerHTML"],v={key:1},g={key:2},x={key:3},w={key:4},D={key:5,target:"_blank"},S={class:"border border-dark rounded mt-2"},L={key:0,class:"bg-orange p-2"},V={key:1,class:"bg-pink p-2"};function B(n,r,o,m,i,d){return t(),e("div",y,[r[1]||(r[1]=c("div",{class:"m-4 text-center title"},"upcoming shows",-1)),(t(!0),e(u,null,p(i.shows,s=>(t(),e("div",h,[r[0]||(r[0]=c("hr",{class:"w-50"},null,-1)),s.title?(t(),e("div",{key:0,innerHTML:s.title,class:"fs-5 title"},null,8,k)):a("",!0),s.extra?(t(),e("div",v,"("+l(s.extra)+")",1)):a("",!0),s.date?(t(),e("div",g,"date: "+l(d.showDate(s.date)),1)):a("",!0),s.time?(t(),e("div",x,"time: "+l(s.time),1)):a("",!0),s.free?(t(),e("div",w,"free!")):a("",!0),s.url?(t(),e("a",D,[c("div",S,[s.free?(t(),e("div",L,"more info")):(t(),e("div",V,"tickets"))])])):a("",!0)]))),256))])}const F=_(b,[["render",B],["__scopeId","data-v-94a5eca7"]]),$={__name:"ShowsView",setup(n){return(r,o)=>(t(),e("main",null,[f(F)]))}};export{$ as default};
