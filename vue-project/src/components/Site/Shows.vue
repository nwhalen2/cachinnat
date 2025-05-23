<template>
  <div class="text-center">
    <h5 class="title my-4">full show schedule</h5>
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
      <Show v-for="(show, i) in upcomingShows"
      :show="show"
      :key="i"
      class="m-4 col-12 col-md-10 col-xl-8" />
    </div>
    <div v-else class="d-flex flex-column align-items-center">
      <Show v-for="(show, i) in pastShows"
      :show="show"
      :key="i"
      class="m-4 col-12 col-md-10 col-xl-8 opacity-50" />
    </div>
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
      allShows: [
        {
          title: `<b>blackout diaries</b><br/>at lincoln lodge`,
          extra: `oh the tales to tell!`,
          url: `https://www.eventbrite.com/e/blackout-diaries-tickets-169891531143`,
          date: `07/18/2025`,
          time: `10:00pm`
        },
        {
          title: `<b>red room</b> comedy showcase`,
          url: `https://www.redroomcomedyclub.com/`,
          extra: `guest spot`,
          date: `07/15/2025`,
          time: `7:00pm`
        },
        {
          title: `<b>crafted laughs</b><br/>in <b>lake geneva</b>, wisconsin`,
          extra: `<i>every 2nd & 4th friday!</i>`,
          free: true,
          url: `https://www.instagram.com/crafted.laughs/`,
          date: `07/11/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>chi lights</b> (comedy you deserve)<br/>at <b>the den theatre</b>`,
          extra: `more details to come`,
          date: `07/15/2025`,
          time: `7:00pm`
        },
        {
          title: `<b>crafted laughs</b><br/>in <b>lake geneva</b>, wisconsin`,
          extra: `<i>every 2nd & 4th friday!</i>`,
          free: true,
          url: `https://www.instagram.com/crafted.laughs/`,
          date: `06/27/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>laughs over nelson</b><br/>a lakeview moishe house`,
          extra: `(honorary jew for the night)`,
          date: `06/21/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>crafted laughs</b><br/>in <b>lake geneva</b>, wisconsin`,
          extra: `debut show.<br/>!! PLEASE COME !!`,
          free: true,
          url: `https://www.instagram.com/crafted.laughs/`,
          date: `06/13/2025`,
          time: `8:00pm`
        },
        {
          title: `the <b>love below</b> comedy show<br/>at <b>beermiscuous</b>`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `06/19/2025`,
          time: `8:00pm`
        },
        {
          title: `standup comedy show<br/>in <b>festus, missouri</b>`,
          extra: `<i>on the road!</i>`,
          url: `https://stlcomedystudio.square.site/product/june-7th-general-admission/40?cs=true&cst=custom`,
          date: `06/07/2025`,
          time: `6:00pm`
        },
        {
          title: `stand-up showcase<br/>at <b>comedy clubhouse</b>`,
          url: `https://www.ticketsource.com/whats-on/il/the-comedy-clubhouse/main-stage-stand-up-showcase/e-xjzjmg`,
          date: `05/31/2025`,
          time: `9:30pm`
        },
        {
          title: `<b>techxhausted</b><br/>at cafe mustache`,
          url: `https://www.eventbrite.com/e/comedy-night-techxhausted-6-tickets-1350590786399?aff=oddtdtcreator&fbclid=PAZXh0bgNhZW0CMTEAAadqtuw2rYWCPy1A1CPQ_e-C_kQQsB7_2CPgVHT5ZVaF85nNZ_8uAmYqJyg78A_aem_PHkiJIug6hA-sFqqCPlnzg`,
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
          title: `<b>don't tell comedy</b><br/>in madison, wisconsin`,
          extra: `<i>secret location!</i>`,
          url: `https://www.donttellcomedy.com/shows/madison-05-16-25/`,
          date: `05/16/2025`,
          time: `7:00pm`
        },
        {
          title: `the <b>love below</b> comedy show<br/>at <b>beermiscuous</b>`,
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
          title: `the <b>love below</b> comedy show<br/>at <b>beermiscuous</b>`,
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
          title: `the <b>love below</b> comedy show<br/>at <b>beermiscuous</b>`,
          extra: `hosting!`,
          free: true,
          url: `https://www.instagram.com/p/DHLs-PlA-mu/`,
          date: `03/20/2025`,
          time: `8:00pm`
        },
        {
          title: `the <b>love below</b> comedy show<br/>at <b>beermiscuous</b>`,
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
