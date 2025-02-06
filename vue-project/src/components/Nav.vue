<script setup>
defineProps({
  msg: {
    type: String,
  },
})
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style scoped>

</style>
