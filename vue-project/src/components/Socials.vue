<template>
    <div class="mt-2 d-flex justify-content-center">
        <a v-for="social in socials" :href="social.url" target="_blank">
            <font-awesome-icon :icon="['fab', social.icon]" class="px-2 pt-1" :class="social.name" size="2x"/>
        </a>
    </div>
</template>

<script>

export default {
    data() {
        return {
            socials: [
                {
                    name: `instagram-icon`,
                    icon: `instagram`,
                    url: `https://www.instagram.com/wwhalenn/`,
                },
                {
                    name: `youtube-icon`,
                    icon: `youtube`,
                    url: `https://www.youtube.com/@natatouille2000/videos`,
                },
                {
                    name: `linkedin-icon`,
                    icon: `linkedin`,
                    url: `https://www.linkedin.com/in/natalie-n-whalen/`,
                }
            ]
        }
    },
    /* TODO: feature to send email */
}
</script>

<style>
.instagram-icon, .linkedin-icon {
    color: orange

}
.youtube-icon {
    color: pink
}
</style>