<script setup>
import Shows from '../components/Site/Shows.vue'
import Monthlies from '../components/Site/Monthlies.vue'
</script>

<template>
  <main>
    <hr class="border-5 border-pink" />
    <Monthlies class="my-4" />
    <hr class="border-5 border-pink" />
    <Shows class="my-4" />
  </main>
</template>

<style scoped>
.border-pink {
    border-color: pink
}    
</style>