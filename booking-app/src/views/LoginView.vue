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
            type="password"
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

import useUsers from '../modules/useUsers';

const {login, email, password, errMsg } = useUsers();

// const show1 = false;


// const rules = {
//   required: (value) => !!value || 'Required.',
//   min: (v) => v.length >= 8 || 'Min 8 characters',
// };
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