<template>
  <div class="text-center">
    <small class="mt-3" style="color:orange">(don't refresh this page)</small>
    <div class="flex justify-center align-items-center my-4">
      <button 
      class="p-2 me-4 border border-dark rounded text-uppercase text-dark"
      :class="showPast ? 'bg-orange-25' : 'bg-orange'"
      @click="showPast = false">upcoming</button>
      <button 
      class="p-2 border border-dark rounded text-uppercase text-dark"
      :class="showPast ? 'bg-pink' : 'bg-pink-25'"
      @click="showPast = true">past</button>
    </div>
    
    <div v-if="!showPast">
      <div v-for="(show, i) in upcomingShows" class="m-4 my-5 w-md-50 d-flex flex-column align-items-center">
        <Show :show="show"  class="border rounded border-orange p-4"/>
      </div>
    </div>
    <div v-else>
      <div v-for="(show, i) in pastShows" class="opacity-50 m-4 my-5 w-md-50 d-flex flex-column align-items-center">
        <Show :show="show" :past="true" class="border rounded border-pink p-4"/>
      </div>
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
          title: `<b>chi lights</b> (comedy you deserve)<br/>at <b>the den theatre</b>`,
          extra: `more details to come`,
          //free: false,
          //url: `https://www.eventbrite.com/e/monday-february-17-late-nite-mic-with-vik-pandya-tickets-1119346498509?aff=erellivmlt`,
          date: `07/15/2025`,
          time: `7:00pm`
        },
        {
          title: `<b>laughs over nelson</b><br/>a lakeview moishe house`,
          extra: `(honorary jew for the night)`,
          date: `06/21/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>love below comedy show</b><br/>at beermiscuous`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `06/19/2025`,
          time: `8:00pm`
        },
        {
          title: `standup comedy show<br/>in <b>festus, missouri</b>`,
          extra: `<i>on the road!</i>`,
          date: `06/06/2025`,
          time: `at night`
        },
        {
          title: `<b>love below comedy show</b><br/>at beermiscuous`,
          extra: `<i>every third thursday!</i>`,
          free: true,
          url: `https://www.instagram.com/thelovebelowcomedyshow/`,
          date: `05/15/2025`,
          time: `8:00pm`
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
          title: `<b>talk yo sh*t</b><br/>at chicago theater works`,
          extra: `free for moms!`,
          free: false,
          url: `https://www.instagram.com/p/DH4iIF8PUfI/`,
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
          extra: `more details to come`,
          //free: true,
          url: `https://www.brit-design.com/shows?fbclid=PAZXh0bgNhZW0CMTEAAafv0YoigeXoMeK1r0NY-sKHCbHgVg4tXEIDG_6ZvXWjS2rAWtwQoBVVFVTxwQ_aem_HY-0ZLfBaEwxRAGi6Rwolg`,
          date: `05/02/2025`,
          time: `8:00pm`
        },
        {
          title: `(private) <b>apartment show</b>`,
          date: `04/24/2025`,
          time: `7:00pm`
        },
        {
          title: `<b>love below comedy show</b><br/>at beermiscuous`,
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
          title: `<b>love below comedy show</b><br/>at beermiscuous`,
          extra: `hosting!`,
          free: true,
          url: `https://www.instagram.com/p/DHLs-PlA-mu/`,
          date: `03/20/2025`,
          time: `8:00pm`
        },
        {
          title: `<b>love below comedy show</b><br/>at beermiscuous`,
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
.bg-orange {
  background-color: orange
}
.bg-orange-25 {
  background-color: rgba(255, 165, 0, 0.25);
}
.bg-orange-25:hover {
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
