import{_,c as e,a as c,F as u,r as p,o as t,b as n,t as l,d as f}from"./index-Dw7F6un5.js";const y={data(){return{shows:[{title:"late nite mic<br/>at <b>comedy bar</b>",extra:"guest spot",free:!1,url:"https://www.eventbrite.com/e/monday-february-17-late-nite-mic-with-vik-pandya-tickets-1119346498509?aff=erellivmlt",date:"02/17/2025",time:"7:30pm"},{title:"<b>love below comedy show</b><br/>at beermiscuous",extra:"hosting!",free:!0,url:"https://www.instagram.com/p/DFqdfblSCIj/",date:"02/20/2025",time:"8:30pm"}]}},methods:{showDate(o){const[r,a,m]=o.split("/"),i=new Date(m,r-1,a),d={weekday:"short",month:"short",day:"numeric"};return i.toLocaleDateString("en-US",d)}}},h={class:"text-center"},b={class:"m-4 w-md-50 d-flex flex-column align-items-center"},k=["innerHTML"],v={key:1},x={key:2},w={key:3},g={key:4},D={key:5,target:"_blank"},S={class:"border rounded mt-2 p-2"},L={key:0},V={key:1};function B(o,r,a,m,i,d){return t(),e("div",h,[r[1]||(r[1]=c("div",{class:"m-4 text-center title"},"upcoming shows",-1)),(t(!0),e(u,null,p(i.shows,s=>(t(),e("div",b,[r[0]||(r[0]=c("hr",{class:"w-50"},null,-1)),s.title?(t(),e("div",{key:0,innerHTML:s.title,class:"fs-5 title"},null,8,k)):n("",!0),s.extra?(t(),e("div",v,"("+l(s.extra)+")",1)):n("",!0),s.date?(t(),e("div",x,"date: "+l(d.showDate(s.date)),1)):n("",!0),s.time?(t(),e("div",w,"time: "+l(s.time),1)):n("",!0),s.free?(t(),e("div",g,"free!")):n("",!0),s.url?(t(),e("a",D,[c("div",S,[s.free?(t(),e("div",L,"more info")):(t(),e("div",V,"tickets"))])])):n("",!0)]))),256))])}const F=_(y,[["render",B]]),$={__name:"ShowsView",setup(o){return(r,a)=>(t(),e("main",null,[f(F)]))}};export{$ as default};
