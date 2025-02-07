<script setup>
import Socials from "./Socials.vue";

</script>

<template>
    <div class="p-4 mt-2 mb-1 text-center">
        <h2 class="title">natalie whalen</h2>

        <div class="d-md-none cursive" v-html="cachinnat"></div>
        <div class="d-none d-md-block cursive fs-5" v-html="cachinnat"></div>

        <Socials />
    </div>
</template>

<script>
export default {
    data() {
        return {
            cachinnat: `cachin<b><span class="cursive fw-bolder">nat</span></b>e: to laugh loudly`
        }
    }
}
</script>

<style scoped>
</style>
