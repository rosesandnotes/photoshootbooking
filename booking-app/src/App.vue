<template>
  <v-app>
    <v-main>
      <NavComponent></NavComponent>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>

import NavComponent from './components/NavComponent.vue';



</script>
 
<style lang="scss">
* {
  font-family: 'Lato', sans-serif;
}

.v-main {
  min-height: 90vh;
  min-width: 100vw;

  overflow: scroll;
}
</style>