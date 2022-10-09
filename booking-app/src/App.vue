<template>
  <v-app>
    <v-main>
      <NavComponent></NavComponent>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
//import {ref, onMounted} from 'vue';
//import {getAuth, onAuthStateChanged} from 'firebase/auth';
// import useUsers from '@/modules/useUsers';
import NavComponent from './components/NavComponent.vue';

// const {logout} = useUsers();
//const isLoggedIn = ref(false);
/* 
onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
}); */

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