<script setup>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Header />
    <Nav />
    <Footer />
  </div>
</template>

<style>
  * {
    font-family: 'american typewriter', serif;
  }
  .title {
    letter-spacing: .2rem;
    text-transform: uppercase;
    font-weight: semi-bold;
  }
  .cursive {
    font-family: 'italiana', cursive;
  }
</style>