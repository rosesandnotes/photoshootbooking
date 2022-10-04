<template>
  <div class="login-container d-flex justify-center align-center ">
    <v-container class="d-flex justify-center align-center flex-column flex-wrap">
      <h4 class="h4-primary mb-8">
      Roses and Notes Photography <br> Booking System
     </h4>
     <form >
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :error-messages="passwordErrors"
            label="Password"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"  
          ></v-text-field>
          <v-btn
            class="mr-4 btn primary-btn"
            @click.prevent="submit"
          >
            Login
          </v-btn>
         
        </form>
    </v-container>
    
  </div>
</template>

<script setup>


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


</style>