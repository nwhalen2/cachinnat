<template>
  <div class="text-center">
    <small class="mt-3" style="color:orange">(don't refresh this page)</small>
    <div class="m-4 text-center title">upcoming shows</div>
    <div v-for="show in shows" class="m-4 w-md-50 d-flex flex-column align-items-center">
      <hr class="w-50" />

      <div v-if="show.title" v-html="show.title" class="fs-5 title"></div>
      <div v-if="show.extra">({{  show.extra }})</div>

      <div v-if="show.date">date: {{ showDate(show.date) }}</div>
      <div v-if="show.time">time: {{ show.time }}</div>
      <div v-if="show.free">free!</div>

      <a v-if="show.url" :href="show.url" target="_blank">
        <div class="border border-dark rounded mt-2">
          <div v-if="show.free" class="bg-orange p-2">more info</div>
          <div v-else class="bg-pink p-2">tickets</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shows: [
        {
          title: `late nite mic<br/>at <b>comedy bar</b>`,
          extra: `guest spot`,
          free: false,
          url: `https://www.eventbrite.com/e/monday-february-17-late-nite-mic-with-vik-pandya-tickets-1119346498509?aff=erellivmlt`,
          date: `02/17/2025`,
          time: `7:30pm`
        },
        {
          title: `<b>love below comedy show</b><br/>at beermiscuous`,
          extra: `hosting!`,
          free: true,
          url: `https://www.instagram.com/p/DFqdfblSCIj/`,
          date: `02/20/2025`,
          time: `8:30pm`
        }
      ]
    }
  },
  methods: {
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

<style scoped>
a {
  text-decoration: none;
  color: black
}
.bg-orange {
  background-color: orange
}
.bg-lightgreen {
  background-color: lightgreen;
}
.bg-pink {
  background-color: pink;
}
</style>
