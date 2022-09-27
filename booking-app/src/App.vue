<template>
  <v-app>
    <v-main>
      <NavComponent></NavComponent>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavComponent from './components/NavComponent.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { NavComponent }
}
</script>

<style lang="scss">
* {
  font-family: 'Lato', sans-serif;
}

.v-main {
  min-height: 90vh;
  width: 100vw;
}
</style>