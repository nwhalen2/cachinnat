<template>
    <div class="text-center p-4" style="border-style: dotted; border-color: pink">
        <div class="d-md-flex justify-content-between align-items-center">
            <div v-if="show.date" class="order-md-2 col-12 col-md-2 px-2">{{ showDate(show.date) }}</div>
            <div v-if="show.title" v-html="show.title" class="order-md-1 col-12 col-md-4 px-2 lg:fs-5 title"></div>

            <div v-if="show.extra" v-html="show.extra" class="order-3 col-12 col-md-2 px-2"></div>
            <div v-if="show.time" class="order-4 col-12 col-md-2 px-2">{{ show.time }}</div>
            <!--div v-if="show.free" class="order-5 col-12 col-md-2 px-2">*free*</div-->
        </div>
            
        <a v-if="show.url" :href="show.url" target="_blank">
            <div class="border border-dark rounded mt-2 p-2" :class="backgroundColor">
                {{ urlText }}
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
    computed: {
      backgroundColor() {
        if (this.show.free) {
          return 'bg-pink-25';
        } else {
          return 'bg-pink';
        }
      },
      urlText() {
        if (this.show.free) {
          return '*free*';
        } else if (this.show.ambiguous) {
          return 'details';
        } else {
          return 'tickets';
        }
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
    },
  }
  </script>
  
  <style scoped>
  a {
    text-decoration: none;
    color: black
  }
  .border-pink {
    border-color: pink
    }
  </style>
  