<script lang="ts">
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <div id="app">
    <AppHeader />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 4em;
  text-align: center;
}
</style>
