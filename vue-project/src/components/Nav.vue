<script setup>

import { RouterLink, RouterView } from 'vue-router'

defineProps({
  msg: {
    type: String,
  },
})

const intro1 = 'hey friends! i\'m a standup comic in chicago.<br/>i run two regular shows every month and perform around chicago & beyond.'
const intro2 = 'come see me tell jokes <33<br/>'
const chirp = '(also i DJ for chirp radio 107.1FM 6-9am every monday morning!!)'
</script>

<template>
    <div>
        <div class="d-flex">
            <div class="d-none d-md-block col-md-1 col-lg-3"></div>
            <div class="col-12 col-md-6 col-lg-4 border border border-warning p-4 text-center" v-html="intro1"></div>
        </div>
        <div class="d-flex justify-content-center">
            <div class="col-4 d-md-none"></div>            
            <div class="col-6 col-md-4 border border-3 border-warning p-4 text-center" v-html="intro2"></div>
        </div>
        <!--div class="d-flex justify-content-center justify-content-md-end">
            <div class="w-75 w-md-100 float-end border border-warning p-2" v-html="chirp"></div>
        </div-->
        <RouterView />
    </div>
</template>

<style scoped>
.bg-nav {
    background-color: lightgrey;
}
.navitem {
    text-decoration: none;
    color: black;
}
.navlink:hover {
    font-weight: bold;
}
</style>
