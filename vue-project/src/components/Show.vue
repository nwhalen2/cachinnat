<template>
    <div class="text-center">

      <div v-if="show.title" v-html="show.title" class=" lg:fs-5  title"></div>
        <div v-if="show.extra" v-html="show.extra"></div>
    
        <div v-if="show.date">{{ showDate(show.date) }}</div>
        <div v-if="show.time">{{ show.time }}</div>
        <div v-if="show.free">free!</div>
    
        <a v-if="show.url" :href="show.url" target="_blank">
          <div class="border border-dark rounded mt-2">
            <div v-if="show.free" class="p-2" :class="past ? 'bg-pink-25' : 'bg-orange-25'">more info</div>
            <div v-else-if="show.ambiguous" class="p-2" :class="past ? 'bg-pink-25' : 'bg-orange-25'">details</div>
            <div v-else class="p-2" :class="past ? 'bg-pink' : 'bg-orange'">tickets</div>
          </div>
        </a>

    </div>
  </template>
  
  <script>
  export default {
    name: 'Show',
    props: {
      show: {
        type: Object,
        required: true
      },
      past: Boolean
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
    },
    created() {
      console.log('Show:',this.show);
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
  