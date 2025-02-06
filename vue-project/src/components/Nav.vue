<script setup>

import { RouterLink, RouterView } from 'vue-router'

defineProps({
  msg: {
    type: String,
  },
})
</script>

<template>
    <div class="bg-nav">
        <nav class="d-flex justify-content-center">
            <RouterLink class="navitem p-2" to="/">home</RouterLink>
            <RouterLink class="navitem p-2" to="/shows">shows</RouterLink>
        </nav>
    </div>
    <RouterView />
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
