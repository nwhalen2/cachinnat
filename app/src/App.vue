<template>
  <div class="text-dark p-4">
    <div class="m-4">
      <Shows />
    </div>
  </div>
</template>

<script>
import Shows from './components/Shows.vue';
import './assets/global.css';
import './assets/custom-bootstrap.scss';

export default {
  name: 'App',
  components: {
    Shows,
  }
}
</script>