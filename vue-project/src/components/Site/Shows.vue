<template>
  <div class="text-center">
    <h5 class="title my-4">full schedule</h5>
    <div class="flex justify-center align-items-center">
      <button 
      class="p-2 me-4 border border-dark rounded text-uppercase text-dark"
      :class="showPast ? 'bg-pink-25' : 'bg-pink'"
      @click="showPast = false">upcoming</button>
      <button 
      class="p-2 border border-dark rounded text-uppercase text-dark"
      :class="showPast ? 'bg-pink' : 'bg-pink-25'"
      @click="showPast = true">past</button>
    </div>
    
    <div v-if="!showPast" class="d-flex flex-column align-items-center">
      <Show v-for="(show, i) in upcomingShows.slice(0, numShown)"
      :show="show"
      :key="i"
      class="m-4 col-12 col-md-10 col-xl-8" />
    </div>
    <div v-else class="d-flex flex-column align-items-center">
      <Show v-for="(show, i) in pastShows.slice(0, numShown)"
      :show="show"
      :key="i"
      class="m-4 col-12 col-md-10 col-xl-8 opacity-50" />
    </div>
	<button 
	v-if="(!showPast && numShown < upcomingShows.length) || (showPast && numShown < pastShows.length)"
	class="mt-4 p-2 border border-dark rounded text-uppercase text-dark bg-pink-25"
	@click="numShown += 6">
		show more
	</button>
  </div>
</template>

<script>
import Show from './Show.vue';
export default {
  name: 'Shows',
  components: {
    Show
  },
  data() {
    return {
      showPast: false,
		numShown: 6,
      allShows: [
		  {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `04/16/2026`,
          time: `8:00pm`
        },
		  {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `03/19/2026`,
          time: `8:00pm`
        },
		  {
          title: `<b>still not friday</b> at two brothers roundhouse`,
			url: `https://linktr.ee/snfcomedy?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnPaamdb9yGeE4nWmH0buNj0gfZfMcYaFL2KIoagEq3pf6AYKSkpXSKun4OEM_aem_PScRAzBHWmn-R82_ObcqSQ`,
          free: true,
          date: `02/26/2026`,
          time: `8:00pm`
        },
		  {
          title: `<b>buckets</b> at burton place`,
			url: `https://www.instagram.com/bigmackcomedy/`,
          free: true,
          date: `02/23/2026`,
          time: `7:00pm`
        },
		  {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `02/19/2026`,
          time: `8:00pm`
        },
		  {
          title: `<b>roast bingo</b> at uptown taproom`,
		extra: `natalie vs. bronwyn - who you got!??`,
          free: true,
          url: `https://www.instagram.com/roastbingo?igsh=MTA1eXQ4MTg1Ym4x`,
          date: `02/06/2026`,
          time: `8:00pm`
        },
		  {
          title: `<b>one liner madness</b> at x-ray arcade (milwaukee, wi)`,
          url: `https://xrayarcade.com/calendar/2026/01/31/onelinermadness`,
          date: `01/31/2026`,
          time: `7:00pm`
        },
		  {
          title: `<b>roast battle</b> at zanies chicago`,
			  extra: `natalie whalen vs. brooke whitehead: who will prevail!?`,
          date: `01/29/2026`,
          time: `9:30pm`,
          url: `https://www.etix.com/ticket/p/37967183/roast-battle-chicago-chicago-zanies-chicago?partner_id=100&_gl=1*15eai2c*_ga*OTk1NDk1NzAuMTc2NDc4NjIxMQ..*_ga_LQB756CETN*czE3NjcyMTE1MDAkbzMkZzEkdDE3NjcyMTE1MDgkajUyJGwwJGgxMjk5MDg3OTI2`
        },
		  {
          title: `<b>tight ship</b> comedy at half sour`,
          free: true,
          date: `01/22/2026`,
          time: `7:30pm`,
          url: `https://www.instagram.com/tightshipcomedy/?hl=en`
        },
		  {
          title: `<b>roast of milo mack</b> at burton place`,
          free: true,
		extra: `come out to celebrate milo's bday! (& make him cry)`,
          date: `01/08/2026`,
          time: `8:00pm`
        },
		  {
          	title: `<b>blind wolf comedy</b> at trader todd's speakeasy`,
          	url: `https://www.instagram.com/blindwolfcomedy?igsh=MXR3d2JyazdhcXcyMA==`,
          	free: true,
			date: `01/28/2026`,
          	time: `8:30pm`
        },
		  {
          	title: `the last laugh in <b>houston, tx</b>`,
			  extra: `ticket comes with drink & a fun pint glass :)`,
          	url: `https://www.eventbrite.com/e/the-last-laugh-with-shane-tucker-trip-truman-tickets-1978787302088?aff=odwdwdspacecraft`,
			date: `01/11/2026`,
          	time: `7:00pm`
        },
		  {
          title: `<b>hair of the dog</b> open mic at burton place`,
			  extra: `hosting!!`,
			url: `https://www.instagram.com/bigmackcomedy/`,
          free: true,
          date: `01/04/2026`,
          time: `3:00pm`
        },
		  {
          title: `<b>highQ hangout</b> variety show at the lincoln lodge`,
          url: `https://www.eventbrite.com/e/highq-hangout-cabaret-comedy-and-storytelling-tickets-1979418862101?aff=oddtdtcreator`,
          date: `01/04/2026`,
          time: `6:00pm`
        },
		{
          	title: `<b>hammered herstory</b> at the lincoln lodge`,
			url: `https://www.eventbrite.com/e/hammered-herstory-chicagos-funniest-drunk-comedy-storytelling-tickets-804226231307`,
          	date: `01/04/2026`,
          	time: `8:00pm`,
        },
		  {
          title: `<b>power hour</b> drinker`,
          extra: `come hang while i drink 10 beers & heckle 50 open mic comedians`,
          free: true,
          url: `https://www.instagram.com/powerhouropenmic?igsh=aGY1dHFpd240NXI4`,
          date: `01/16/2026`,
          time: `8:00pm`
        },
		  {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `01/15/2026`,
          time: `8:00pm`
        },
		  {
          title: `<b>red room</b> comedy showcase`,
          url: `https://www.redroomcomedyclub.com/events/red-room-comedy-2025-12-20-20-00`,
          date: `12/20/2025`,
          time: `8:00pm`
        },
		  {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `12/18/2025`,
          time: `8:00pm`
        },
		{
          	title: `<b>blind wolf comedy</b> at trader todd's speakeasy`,
          	url: `https://www.instagram.com/blindwolfcomedy?igsh=MXR3d2JyazdhcXcyMA==`,
          	free: true,
			date: `12/10/2025`,
          	time: `8:30pm`
        },
		{
          title: `comedy at <b>reggie's</b> rock club`,
          free: true,
          date: `12/15/2025`,
          time: `7:00pm`,
          url: `https://www.reggieslive.com/show/blake-burkharts-comedy-zacks-open-mic-109/`
        },
		{
			title: `<b>chi lights</b> (comedy you deserve)<br/>at <b>the den theatre</b>`,
          	url: `https://tickets.thedentheatre.com/event/comedy-you-deserve-chi-lights-cc38qz?_gl=1*1h1s0e8*_ga*MjA1NDU0NzU3OC4xNzY0ODY0MzYy*_ga_KKZ24883X0*czE3NjQ4OTc2NzEkbzIkZzAkdDE3NjQ4OTc2NzEkajYwJGwwJGg4NDQ1NTM2MDU.*_ga_T6SEPL0V6M*czE3NjQ4OTc2NzEkbzIkZzAkdDE3NjQ4OTc2NzEkajYwJGwwJGgw`,
          	date: `12/19/2025`,
          	time: `7:00pm`
		},
		{
          title: `<b>crafted laughs</b><br/>in <b>lake geneva</b>, wi`,
          extra: `<i>winter show!</i>`,
          free: true,
          url: `https://www.instagram.com/crafted.laughs/`,
          date: `12/13/2025`,
          time: `6:00pm`
        },
		{
          	title: `<b>wow! you're actually funny</b> at surge billiards`,
			url: `https://www.eventbrite.com/e/wow-youre-actually-funny-tickets-1975346063250`,
          	date: `12/12/2025`,
          	time: `7:00pm`
        },
		{
          title: `<b>please like me</b> comedy showcase at <b>uptown taproom</b>`,
          url: `https://www.eventbrite.com/e/please-like-me-comedy-showcase-tickets-1732660978629?aff=erelpanelorg`,
          date: `02/13/2026`,
          time: `8:00pm`
        },
		  {
          title: `<b>throwdown the gauntlet finals</b> at o'donnell's`,
          extra: `come vote for me, winner gets $ & a club spot!`,
          free: true,
          url: `https://www.eventbrite.com/e/free-stand-up-comedy-at-odonnells-throw-down-the-gauntlet-qualifiers-tickets-1847663253529?aff=erelexpmlt`,
          date: `11/28/2025`,
          time: `7:30pm`
        },
		  {
			title: `<b>best night ever</b> at the lincoln lodge`,
			  url: `https://www.eventbrite.com/e/best-night-ever-tickets-255500337387`,
          	date: `11/25/2025`,
          	time: `8:00pm`
		},
		{
			title: `<b>open mic contest</b> at burton place bar & grill`,
			extra: `<i>come with your best stuff for a chance to get booked!</i>`,
			free: true,
          	date: `11/24/2025`,
          	time: `7:00pm`
		},
		{
			title: `<b>one liner madness</b><br/>at iO theater`,
          	url: `https://ci.ovationtix.com/36725/production/1255992?performanceId=11714271`,
          	date: `11/22/2025`,
          	time: `8:00pm`
		},
        {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `11/20/2025`,
          time: `8:00pm`
        },
		  {
          title: `what could go wrong? at <b>laugh factory</b>`,
          extra: `<i>helping with some ~pranks~</i>`,
          url: `https://laughfactorychicago.standuptix.com/events/what-could-go-wrong-4`,
          date: `11/13/2025`,
          time: `9:00pm`
        },
		{
          title: `fall show shuffle<br/>at <b>second city</b>`,
          extra: `<i>guess which comedians perform each other's 3 minute sets</i>`,
          url: `https://secondcityus.my.salesforce-sites.com/ticket/#/instances/a0FTP000004KXAP2A4`,
          date: `11/23/2025`,
          time: `9:00pm`
        },
		  {
          title: `<b>kawaii comedy</b> at konbini & kanpai wrigleyville`,
          url: `https://www.eventbrite.com/e/kawaii-comedy-tickets-1964384466820`,
          date: `11/16/2025`,
          time: `5:00pm`,
        },
		{
          title: `fall show shuffle<br/>at <b>second city</b>`,
          extra: `<i>guess which comedians perform each other's 3 minute sets</i>`,
          url: `https://secondcityus.my.salesforce-sites.com/ticket/#/instances/a0FTP000004KX8n2AG`,
          date: `11/16/2025`,
          time: `9:00pm`
        },
		{
          title: `fall show shuffle<br/>at <b>second city</b>`,
          extra: `<i>guess which comedians perform each other's 3 minute sets</i>`,
          url: `https://secondcityus.my.salesforce-sites.com/ticket/#/instances/a0FTP000004KX5Z2AW`,
          date: `11/09/2025`,
          time: `9:00pm`
        },
		  {
          title: `<b>wake & bakery</b> comedy show`,
          free: true,
          date: `11/08/2025`,
          time: `7:00pm`,
          url: `https://www.instagram.com/wakenbakery_logan?igsh=MTk5cDF0bWprcHZ3NQ==`
        },
		{
          title: `super six at <b>zanies</b>`,
          url: `https://www.etix.com/ticket/p/45486398/super-six-showcase-chicago-zanies-chicago?partner_id=100&_gl=1*1lsfve1*_ga*MzkxMzkwMzguMTc2MTg0MjkwNA..*_ga_LQB756CETN*czE3NjE4NDI5MDMkbzEkZzEkdDE3NjE4NDI5MTUkajQ4JGwwJGgxNjMzNDQ1NTY.`,
          date: `11/02/2025`,
          time: `7:00pm`
        },
		{
          title: `fall show shuffle<br/>at <b>second city</b>`,
          extra: `<i>guess which comedians perform each other's 3 minute sets</i>`,
          url: `https://secondcityus.my.salesforce-sites.com/ticket/#/instances/a0FTP000004KX3x2AG`,
          date: `11/02/2025`,
          time: `9:00pm`
        },
		{
			title: `<b>trauma dumping</b><br/>at the <b>lincoln lodge</b>`,
			url: `https://www.eventbrite.com/e/trauma-dumping-a-hilarious-comedy-show-tickets-1677104176739`,
			date: `10/31/2025`,
	        time: `7:30pm`
		},
        {
          title: `<b>oxymorons</b> sketch comedy show at <b>second city</b>`,
          url: `https://www.secondcity.com/shows/chicago/oxymorons-wickedly-wacky-chi/`,
          date: `10/19/2025`,
          time: `7:30pm`
        },
        {
          title: `<b>oxymorons</b> sketch comedy show at <b>second city</b>`,
          url: `https://www.secondcity.com/shows/chicago/oxymorons-wickedly-wacky-chi/`,
          date: `10/26/2025`,
          time: `7:30pm`
        },
		{
          title: `fall show shuffle<br/>at <b>second city</b>`,
          extra: `<i>guess which comedians perform each other's 3 minute sets</i>`,
          url: `https://secondcityus.my.salesforce-sites.com/ticket/#/instances/a0FTP000004KWsf2AG`,
          date: `10/26/2025`,
          time: `9:00pm`
        },
		{
          title: `pimp daddy's six sided circus<br/>at the <b>lincoln lodge</b>`,
          extra: `<i>watch a giant die decide a comic's fate</i>`,
          free: true,
          url: `https://www.eventbrite.com/e/pimp-daddys-six-sided-circus-tickets-1703905520279`,
          date: `10/17/2025`,
          time: `09:00pm`
        },
		{
          title: `thursday night laughs with wildcat comedy in <b>lexington, ky</b>`,
          free: true,
          url: `https://www.wildcatcomedy.co/`,
          date: `10/16/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>oxymorons</b> sketch comedy show at <b>second city</b>`,
          url: `https://www.secondcity.com/shows/chicago/oxymorons-wickedly-wacky-chi/`,
          date: `10/05/2025`,
          time: `7:30pm`
        },
		{
          title: `<b>roast battle fall tournament (sweet sixteen)</b> at zanies rosemont`,
          url: `https://www.etix.com/ticket/p/51106870/roast-battle-tournament-rosemont-zanies-rosemont`,
          date: `10/14/2025`,
          time: `7:00pm`
        },
		{
			title: `what could go wrong?<br/>at <b>the laugh factory</b>`,
			url: `https://laughfactorychicago.standuptix.com/events/what-could-go-wrong-3`,
			date: `10/09/2025`,
        	time: `9:00pm`
		},
        {
          	title: `<b>blind wolf comedy</b> at trader todd's speakeasy`,
          	extra: `free!`,
          	free: true,
			date: `10/08/2025`,
          	time: `10:00pm`
        },
        {
          title: `<b>roast battle fall tournament (prelims)</b> at zanies rosemont`,
          url: `https://roastbattlechicago.com/comedyshowtickets/roastbattlechicago-e6dbr-yc8jw-hh8g5-bwyel-nrgh5-dm2yf-3892h-5grls-r5pdl-jnrf7-5l8h4-mweee-jjsxa-c6lah`,
          date: `10/07/2025`,
          time: `7:00pm`
        },
        {
          title: `<s>the love below comedy show</s><br/>guest host: marcos cirino`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `10/16/2025`,
          time: `8:00pm`
        },
		{
			title: `headlining!<br/>at <b>the drop comedy club</b>`,
			url: `https://www.eventbrite.com/e/the-drop-presents-shhhhhh-its-a-surprise-comedy-show-tickets-1753155578529?aff=oddtdtcreator&fbclid=PAVERFWANKgXBleHRuA2FlbQIxMAABp072vds_CUbNoUXhW0bcOMoQ8vVXlA-7-7qe7fvLiYBnMrF7Kze7HVVurDqL_aem_q2YhxqAu5ofg4etLkq56dA`,
			date: `10/04/2025`,
        	time: `8:00pm`
		},
        {
          title: `where the green line ends at <b>comedy plex</b>`,
          url: `https://www.comedyplex.com/event/where-the-green-line-ends-614/register`,
          date: `10/03/2025`,
          time: `10:00pm`,
        },
        {
          title: `<b>roast battle chicago</b> at <b>zanies</b>`,
          extra: `zanies chicago debut :D`,
          url: `https://www.etix.com/ticket/p/70533661/roast-battle-chicago-chicago-zanies-chicago?language=en&amp;country=US&amp;searchType=venue`,
          date: `10/02/2025`,
          time: `9:15pm`
        },
        {
          title: `<b>let's get randy</b> at randall's in edgewater`,
          extra: `<b>6341 n clark st</b>`,
          url: `https://www.instagram.com/randalls_pub/?hl=en`,
          free: true,
          date: `10/01/2025`,
          time: `8:00pm`
        },
        {
          title: `comedy at <b>reggie's</b> rock club`,
          free: true,
          date: `09/29/2025`,
          time: `7:00pm`,
          url: `https://www.reggieslive.com/show/blake-burkharts-comedy-zacks-open-mic-99/`
        },
        /*{
          title: `<b>taco bout it tuesday</b> at the crib`,
          extra: `taco trucks & comedy at a new comedy club located at 2715 w madison st`,
          date: `09/30/2025`,
          time: `7:00pm`
        },*/
        {
          title: `<b>crafted laughs</b><br/>in <b>lake geneva</b>, wi`,
          extra: `<i>last show of the summer!</i>`,
          free: true,
          url: `https://www.instagram.com/crafted.laughs/`,
          date: `09/26/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>buckets</b> at burton place`,
          free: true,
          date: `09/15/2025`,
          time: `7:00pm`
        },
        {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `09/18/2025`,
          time: `8:00pm`
        },
        {
          title: `late night mic<br/>at <b>the comedy bar</b>`,
          url: `https://www.eventbrite.com/e/monday-september-22-late-nite-mic-with-vik-pandya-tickets-1448283186999?aff=odcleoeventsincollection`,
          date: `09/22/2025`,
          time: `7:30pm`
        },
        {
          title: `<b>crafted laughs</b><br/>in <b>lake geneva</b>, wi`,
          extra: `<i>every 2nd & 4th friday!</i>`,
          free: true,
          url: `https://www.instagram.com/crafted.laughs/`,
          date: `09/12/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>SIT. STAY. STANDUP.</b> at the john david mooney foundation`,
          extra: `<b>! my big birthday show !</b>`,
          free: true,
          url: `https://docs.google.com/forms/d/e/1FAIpQLSdInk0sQd354PK79f2g1cJIuS8PHkh7Pcr0sbMFiAqCXBW7fA/viewform`,
          date: `09/04/2025`,
          time: `6:30pm`
        },
        {
          title: `<b>chirp radio</b> comedy panel & showcase`,
          url: `https://chirpradio.org/cid`,
          date: `08/24/2025`,
          time: `3 - 4:30pm`
        },
        {
          title: `<b>midsummer cash bash</b> at surge billiards`,
          extra: `you could win $100!`,
          url: `https://www.eventbrite.com/e/midsummer-cash-bash-tickets-1563703702869?fbclid=PAZXh0bgNhZW0CMTEAAac6OiezVElanrN8rCEenR73uhRz5KoA3FSK8VQdhyyqOf-hMjUcTKSWy60PuQ_aem_GPj6ADBX-d_BOnCwFUQY9A`,
          date: `08/23/2025`,
          time: `8:00pm`
        },
        /*{
          title: `comedy show<br/>in <b>valley park, mo</b>`,
          extra: `STL comedy studio. <i>details to come.</i>`,
          date: `08/23/2025`,
        },*/
       /* {
          title: `comedy show<br/>at "a Cafe off 47th and Ashland"`,
          extra: `(i get two comps)`,
          date: `08/21/2025`,
          time: `7:30pm`
        },*/
        {
          title: `<b>the bridge is up</b><br/>at small world bar & grill on 106th st`,
          url: `https://www.instagram.com/justaguyproductions/`,
          free: true,
          date: `08/20/2025`,
          time: `9:00pm`
        },
        {
          title: `<b>crafted laughs</b><br/>in <b>lake geneva</b>, wi`,
          extra: `<i>every 2nd & 4th friday!</i>`,
          free: true,
          url: `https://www.instagram.com/crafted.laughs/`,
          date: `08/22/2025`,
          time: `8:00pm`
        },
        {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `08/21/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>cannabesties</b> at the <b>salt shed</b>`,
          url: `https://www.ticketleap.events/tickets/cannabesties/the-cannabesties-comedy-show-967402560?fbclid=PAZXh0bgNhZW0CMTEAAaecK9kfUzZvrHb6msMt1G3FCZnfS48vqZmmjvdYhC1FUcBrExJWOVLj0E3dJA_aem_jjURZPZvj9iJuv84K7yIiA`,
          date: `08/17/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>rolling with the punchlines</b> at kaiser tiger`,
          extra: `showcase + open mic`,
          free: true,
          url: `https://www.eventbrite.com/e/rolling-with-the-punchlines-comedy-show-open-mic-tickets-1474950830639?aff=oddtdtcreator`,
          date: `08/16/2025`,
          time: `4:30pm`
        },
        {
          title: `comedy show at an apartment in river north`,
          date: `08/14/2025`,
          time: `6:00pm`
        },
        {
          title: `<b>comic court</b> at the <b>lincoln lodge</b>`,
          url: `https://www.eventbrite.com/e/comic-court-chicagos-1-comedy-court-show-tickets-1442149872089`,
          date: `08/12/2025`,
          time: `9:00pm`
        },
        {
          title: `<b>crafted laughs</b><br/>in <b>lake geneva</b>, wi`,
          extra: `<i>every 2nd & 4th friday!</i>`,
          free: true,
          url: `https://www.instagram.com/crafted.laughs/`,
          date: `08/08/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>roast battle new york</b> at grove 34`,
          extra: `<b>nyc!</b>`,
          url: `https://www.grove34.com/event-details/roast-battle-league-ny-9`,
          date: `08/06/2025`,
          time: `8:30pm`
        },
        {
          title: `<b>times square</b> comedy at <b> comedy village</b>`,
          extra: `<b>nyc!</b>`,
          url: `https://comedyvillage.com/event/times-square-comedy-riess-temple-tue-aug-5th-930-pm/`,
          date: `08/05/2025`,
          time: `9:30pm`
        },
        {
          title: `<b>the comedy shop</b> in greenwich village`,
          free: true,
          extra: `<b>nyc!</b>`,
          url: `https://comedyshopnyc.com/event-details/?id=5d58fcde-86b1-48c9-834a-a4b20afa2f97&date=1754280000`,
          date: `08/04/2025`,
          time: `8:00pm`
        },
        {
          title: `yakety katz comedy show at <b>the whiskey cellar</b>`,
          extra: `<b>nyc!</b>`,
          url: `https://www.eventbrite.com/e/yakety-katz-comedy-aug-3-430-tickets-1553326323849?aff=oddtdtcreator`,
          date: `08/03/2025`,
          time: `4:30pm`
        },
        {
          title: `laughing buddha at <b>new york comedy club</b>`,
          extra: `<b>nyc!</b>`,
          url: `https://newyorkcomedyclub.com/events/laughing-buddha-comedy-ft-michael-fleming-daryn-passarello-chris-miceli-allie-feete-danny-palmer-tanner-simon`,
          date: `08/03/2025`,
          time: `6:00pm`
        },
        {
          title: `<b>hush hush</b> comedy hour at the<b> lincoln lodge</b>`,
          extra: `<i>guest spot</i>`,
          url: `https://www.eventbrite.com/e/hush-hush-comedy-hour-tickets-734175036297?utm_experiment=test_share_listing&aff=ebdsshios&fbclid=PAZXh0bgNhZW0CMTEAAadVHQHppwtwbZ5sUBNV8kN2e__-BLdazyN8phUQMY1XJ2FOzQZIb2u62Zi9Lw_aem_uDH2Ivd6yN0z94WIe3YJbw`,
          date: `07/30/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>crafted laughs</b><br/>in <b>lake geneva</b>, wi`,
          extra: `<i>every 2nd & 4th friday!</i>`,
          free: true,
          url: `https://www.instagram.com/crafted.laughs/`,
          date: `07/25/2025`,
          time: `8:00pm`
        },
       /* {
          title: `<b>laughing buddha comedy show</b><br/>at <b>eastville</b>`,
          extra: `<b>nyc!</b>`,
          free: true,
          url: `https://www.eventbrite.com/e/ug-comedy-show-the-secret-pour-tickets-791620627607`,
          date: `08/06/2025`,
          time: `8:00pm`
        },*/
        {
          title: `<b>ug comedy</b><br/>at <b>secret pour</b>`,
          extra: `<b>nyc!</b>`,
          url: `https://www.eventbrite.com/e/ug-comedy-show-the-secret-pour-tickets-791620627607`,
          date: `08/03/2025`,
          time: `9:00pm`
        },
        {
          title: `laughing buddha <br/>at <b>st. mark's comedy club</b>`,
          extra: `<b>nyc!</b>`,
          url: `https://www.tickettailor.com/events/laughingbuddhacomedy/1774260`,
          date: `08/05/2025`,
          time: `7:30pm`
        },
        {
          title: `<b>comedy clubhouse</b>`,
          url: `https://www.ticketsource.com/thecomedyclubhouse?_gl=1%2Aa0wei7%2A_ga%2AMTg0OTY5MDM2LjE3MzQ4MDczMTg.%2A_ga_PWC2N31NS8%2AMTczNDgwNzMxNy4xLjAuMTczNDgwNzMxNy42MC4wLjA&fbclid=IwY2xjawLoydJleHRuA2FlbQIxMABicmlkETFuVEVhVEtBbzdxcU5wdnBUAR6xTSESXZTUixqb3DP5YdctM9MGogiQ4TG8xxzIzg9Cfy1VtoiEb9v00EOTYg_aem_V9HRX88mPApfPAPMujxYOw`,
          date: `07/19/2025`,
          time: `9:30pm`
        },
        {
          title: `<b>red room</b> comedy showcase`,
          url: `https://www.redroomcomedyclub.com/`,
          extra: `<i>hosting!</i>`,
          date: `07/19/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>blackout diaries</b><br/>at lincoln lodge`,
          extra: `oh the tales to tell!`,
          url: `https://www.eventbrite.com/e/blackout-diaries-tickets-169891531143`,
          date: `07/18/2025`,
          time: `10:00pm`
        },
        {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `07/17/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>red room</b> comedy showcase`,
          url: `https://www.redroomcomedyclub.com/`,
          extra: `guest spot`,
          date: `07/12/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>crafted laughs</b><br/>in <b>lake geneva</b>, wi`,
          extra: `<i>every 2nd & 4th friday!</i>`,
          free: true,
          url: `https://www.instagram.com/crafted.laughs/`,
          date: `07/11/2025`,
          time: `8:00pm`
        },
        {
          title: `live comedy<br/>at <b>o'callaghans</b>`,
          free: true,
          url: `https://www.instagram.com/p/DKR6oN3tPkc/?img_index=1`,
          date: `06/22/2025`,
          time: `6:00pm`
        },
        {
          title: `<b>crafted laughs</b><br/>in <b>lake geneva</b>, wi`,
          extra: `<i>every 2nd & 4th friday!</i>`,
          free: true,
          url: `https://www.instagram.com/crafted.laughs/`,
          date: `06/27/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>comedy clubhouse</b>`,
          url: `https://www.ticketsource.com/whats-on/il/the-comedy-clubhouse`,
          date: `06/21/2025`,
          time: `9:30pm`
        },
        {
          title: `<b>laughs over nelson</b><br/>a lakeview moishe house`,
          extra: `(honorary jew for the night)`,
          date: `06/21/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>crafted laughs</b><br/>in <b>lake geneva</b>, wi`,
          extra: `debut show.<br/>!! PLEASE COME !!`,
          free: true,
          url: `https://www.instagram.com/crafted.laughs/`,
          date: `06/13/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>what could go wrong?</b><br/>at laugh factory`,
          url: `https://www.laughfactory.com/chicago`,
          date: `06/12/2025`,
          time: `9:00pm`
        },
        {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `06/19/2025`,
          time: `8:00pm`
        },
        {
          title: `comedy show<br/>in <b>crystal city, mo</b>`,
          extra: `<i>on the road!</i>`,
          url: `https://stlcomedystudio.square.site/product/june-7th-general-admission/40?cs=true&cst=custom`,
          date: `06/07/2025`,
          time: `6:00pm`
        },
        {
          title: `<b>comedy clubhouse</b>`,
          url: `https://www.ticketsource.com/whats-on/il/the-comedy-clubhouse/main-stage-stand-up-showcase/e-xjzjmg`,
          date: `05/31/2025`,
          time: `9:30pm`
        },
        {
          title: `<b>techxhausted</b><br/>at cafe mustache`,
          url: `https://www.eventbrite.com/e/comedy-night-techxhausted-6-tickets-1350590786399?aff=oddtdtcreator&fbclid=PAZXh0bgNhZW0CMTEAAadqtuw2rYWCPy1A1CPQ_e-C_kQQsB7_2CPgVHT5ZVaF85nNZ_8uAmYqJyg78A_aem_PHkiJIug6hA-sFqqCPlnzg`,
          free: true,
          date: `05/30/2025`,
          extra: `come do a pitch & get roasted`,
          time: `7:00pm`
        },
        {
          title: `<b>the bridge is up</b><br/>at small world bar & grill on 106th st`,
          url: `https://www.instagram.com/p/DKAFJRAAcjl/`,
          extra: `<i>15 minute set!</i>`,
          free: true,
          date: `05/28/2025`,
          time: `9:00pm`
        },
        {
          title: `<b>chicago roast battle</b><br/>at zanie's rosemont`,
          extra: `<i>vs. devin glass</i>`,
          url: `https://www.etix.com/ticket/p/60742315/roast-battle-rosemont-zanies-rosemont?partner_id=100&_gl=1*4c3yot*_ga*OTM5NTE2MTk4LjE3NDY0ODY2MjQ.*_ga_DBEL6KZ540*czE3NDY1NjIxMzIkbzIkZzEkdDE3NDY1NjIzMTEkajAkbDAkaDA.`,
          date: `05/25/2025`,
          time: `7:00pm`
        },
        {
          title: `<b>oxymorons: </b>alternative facts!<br/>at io theater`,
          extra: `sketch comedy w a special standup guest ;)`,
          url: `https://ci.ovationtix.com/36725/production/1215947?performanceId=11633569`,
          date: `05/17/2025`,
          time: `10:45pm`
        },
        {
          title: `<b>don't tell comedy</b><br/>in madison, wi`,
          extra: `<i>secret location!</i>`,
          url: `https://www.donttellcomedy.com/shows/madison-05-16-25/`,
          date: `05/16/2025`,
          time: `7:00pm`
        },
        {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `05/15/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>chirp dj night</b><br/>at the native`,
          extra: `dog friendly. cash only. not comedy, but come vibe!!`,
          free: true,
          url: `https://chirpradio.org/events/chirp-dj-night-at-the-native-with-dj-natalie-whalen`,
          date: `05/13/2025`,
          time: `9:00pm`
        },
        {
          title: `<b>talk yo sh*t</b><br/>at chicago theater works`,
          extra: `free for moms!`,
          free: false,
          url: `https://www.eventbrite.com/e/talk-yo-sht-mothers-day-edition-comedy-show-tickets-1317049463399?fbclid=PAZXh0bgNhZW0CMTEAAadWO2MQKRwLBs3VSUhG9rcwP3S0MyiHGk42VV9kgzYPuhKj-G5Xvys4pcDgWg_aem_nJccWBoAAriybQlfmGNiwA`,
          date: `05/11/2025`,
          time: `6:30pm`
        },
        {
          title: `'the killing joke' mode<br/> in <b>miami!!</b>`,
          free: true,
          url: `https://www.eventbrite.com/e/the-killing-joke-mode-miami-stand-up-comedy-show-thursday-registration-1325875813249?aff=instagram&utm_campaign=thursdays+%27the+killing+joke%27+mode+miami+comedy+night&utm_medium=social&utm_source=linktree`,
          date: `05/08/2025`,
          time: `9:00pm EST`
        },
        {
          title: `<b>dinner party comedy</b><br/>3419 w fullerton`,
          url: `https://www.brit-design.com/shows`,
          date: `05/02/2025`,
          time: `8:00pm`
        },
        {
          title: `(private) <b>apartment show</b>`,
          date: `04/24/2025`,
          time: `7:00pm`
        },
        {
          title: `live comedy!!<br/>at <b>the bottle shop</b>`,
          extra: `(guest spot)`,
          free: false,
          url: `https://thebottleshoplakegeneva.com/calendar/`,
          date: `04/19/2025`,
          time: `7:00pm`
        },
        {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `04/17/2025`,
          time: `8:00pm`
        },
        {
          title: `comedy show<br/>at <b>mustang's</b>`,
          extra: `<i>on the road, baby!</i>`,
          date: `04/16/2025`,
          time: `8:00pm`,
          ambiguous: true,
          url: `https://www.mustangsbargrill.com/happenings`
        },
        {
          title: `<b>fresh faces</b><br/>at laugh factory`,
          free: false,
          url: `https://www.tixr.com/groups/laughfactorychicago/events/what-could-go-wrong-comedy-show-135416`,
          date: `04/01/2025`,
          time: `7:30pm`
        },
        {
          title: `<b>take a shot</b><br/>at my buddy's`,
          extra: `judge & performer`,
          free: true,
          url: `https://www.instagram.com/takeashotopenmic/`,
          date: `03/23/2025`,
          time: `9:00pm`
        },
        {
          title: `<b>take a shot</b><br/>at my buddy's`,
          extra: `judge & performer`,
          free: true,
          url: `https://www.instagram.com/takeashotopenmic/`,
          date: `04/20/2025`,
          time: `9:00pm`
        },
        {
          title: `<b>comedy show & latin dance party</b><br/>at latin dance technique studio`,
          extra: `byob!`,
          free: false,
          url: `https://www.eventbrite.com/e/salsa-bachata-cumbia-dance-social-tickets-1263091674199?utm_experiment=test_share_listing&aff=ebdsshios&fbclid=PAZXh0bgNhZW0CMTEAAaakIbDAogwdQQIwd9peKbJFxUu9mxot0kFV_-4T3VxJQeQ3j1mT3n1z3pI_aem_gQ5Wd0UsN09L9ZZYmep12g`,
          date: `03/22/2025`,
          time: `6:45pm`
        },
        {
          title: `<b>wow, you're actually funny!</b><br/>at surge billiards`,
          extra: ``,
          free: false,
          url: `https://www.eventbrite.com/e/wow-youre-actually-funny-tickets-1246778591329?utm_experiment=test_share_listing&aff=ebdsshios`,
          date: `03/29/2025`,
          time: `8:00pm`
        },
        {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `hosting!`,
          free: true,
          url: `https://www.instagram.com/p/DHLs-PlA-mu/`,
          date: `03/20/2025`,
          time: `8:00pm`
        },
        {
          title: `the <b>love below</b> comedy show at <b>beermiscuous</b>`,
          extra: `hosting!`,
          free: true,
          url: `https://www.instagram.com/p/DFqdfblSCIj/`,
          date: `02/20/2025`,
          time: `8:30pm`
        },
        {
          title: `<b>what could go wrong?</b><br/>at laugh factory`,
          free: false,
          url: `https://www.tixr.com/groups/laughfactorychicago/events/what-could-go-wrong-comedy-show-123912`,
          date: `02/13/2025`,
          time: `9:00pm`
        },
        {
          title: `late nite mic<br/>at <b>comedy bar</b>`,
          extra: `guest spot`,
          free: false,
          url: `https://www.eventbrite.com/e/monday-february-17-late-nite-mic-with-vik-pandya-tickets-1119346498509?aff=erellivmlt`,
          date: `02/17/2025`,
          time: `7:30pm`
        },
        {
          title: `<b>shaker's on clark</b>`,
          extra: `feature`,
          free: true,
          url: ``,
          date: `02/03/2025`,
          time: `8:30pm`
        },
      ]
    }
  },
  computed: {
    upcomingShows() {
      return this.sortByDate(this.allShows.filter(show => !this.isPast(show.date)), 'asc');
    },
    pastShows() {
      return this.sortByDate(this.allShows.filter(show => this.isPast(show.date)), 'desc');
    }
  },
  methods: {
    sortByDate(shows, order = 'asc') {
      return shows.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return order === 'asc' ? dateA - dateB : dateB - dateA;
      });
    },
    isPast(showDate) {
      const today = new Date();
      today.setDate(today.getDate())
      showDate = new Date(showDate)
      showDate.setHours(23)
      return today > showDate;
    }, 
    showDate(dateString) {
      const [month, day, year] = dateString.split('/');
      const date = new Date(year, month - 1, day);

      const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
      };

      return date.toLocaleDateString("en-US", options);
    } 
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: black
}
.orange {
  color: orange
}
.border-orange {
  border-color: orange
}
.border-pink {
  border-color: pink
}
.bg-orange {
  background-color: orange
}
.bg-orange-25 {
  background-color: rgba(255, 165, 0, 0.25);
}
.bg-orange-25:hover {
  background-color: rgba(255, 165, 0, 0.5);
}
.bg-orange-75 {
  background-color: rgba(255, 165, 0, 0.75);
}
.bg-orange-75:hover {
  background-color: rgba(255, 165, 0, 0.5);
}
.bg-lightgreen {
  background-color: lightgreen;
}
.pink {
  color: pink
}
.border-pink {
  border-color: pink
}
.bg-pink {
  background-color: pink;
}
.bg-pink-25 {
  background-color: rgba(255, 192, 203, 0.25);
}
.bg-pink-25:hover {
  background-color: pink;
}
</style>
