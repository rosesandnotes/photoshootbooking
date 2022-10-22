<template>
  <v-app>
    <v-main>
      <NavComponent></NavComponent>
      <router-view v-slot="{Component}">
        <transition name="route" mode="out-in">
         <component :is="Component"></component>
        </transition>  
      </router-view>
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

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-out;
}

</style>