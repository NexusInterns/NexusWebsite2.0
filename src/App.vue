<template>
  <ion-app>
    <Header></Header>
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>

<script lang="ts">
  import { IonApp, IonRouterOutlet } from '@ionic/vue';
  import Header from './layouts/Header.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
    components: { IonApp, IonRouterOutlet, Header}
  });
</script>

<style scoped>
</style>
