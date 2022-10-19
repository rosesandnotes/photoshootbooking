<template>
  <div class="login-container d-flex justify-center align-center ">
    <v-container class="d-flex justify-center align-center flex-column flex-wrap">
      <h4 class="h4-primary mb-8">
      Roses and Notes Photography <br> Booking System
     </h4>
     <form >
          <v-text-field
            v-model="email"
            
            label="E-mail"
            required
           
          ></v-text-field>
          <v-text-field
            v-model="password"
            
            label="Password"
            required
           
          ></v-text-field>
          <p v-if="errMsg" class="errorMessage mb-4"> {{errMsg}} </p>
          <v-btn
            class="mr-4 btn primary-btn"
            @click.prevent="login()"
          >
            Login
          </v-btn>
         
        </form>
    </v-container>
    
  </div>
</template>

<script setup>

import { ref,onMounted} from 'vue';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import useUsers from '@/modules/useUsers';

// const {logout} = useUsers();
const isLoggedIn = ref(false);

onMounted(() => {
  console.log("inside login view")
  isLoggedinTest()
  const auth = getAuth();
  console.log("auth: ",auth)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
    console.log("isLoggedIn: ",isLoggedIn.value)
  });
  
}); 

const { login, 
        email, 
        password,
        errMsg,
        isLoggedinTest
      } = useUsers()

</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include h4;
@include btn;

.login-container{
  min-height: 90vh;
  width: 100vw;
}

form {
  width: 50%;
}

h4{
  text-align: center;
}

.errorMessage{
  color: red;
  font-size: 12px;
}

</style>