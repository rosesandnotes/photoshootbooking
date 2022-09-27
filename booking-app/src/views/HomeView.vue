<template>
  <div class="hero-container d-flex justify-center align-center flex-column flex-wrap">
    <h1 class="h1-primary"> Welcome </h1>
    <h5 class="h5-secondary mt-5 mb-8"> Roses and Notes Photography <br> Booking System </h5>
    <div class="button-container">
      <router-link to="/login">
        <v-btn
          elevation="1"
          large
          tile
        class="primary-btn btn mr-5"> 
        Login
      </v-btn>
      </router-link>
      <router-link to="/bookings">
        <v-btn
          class="secondary-btn btn"
          elevation="1"
          large
          outlined
          tile
        >View Bookings</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include h1;
@include h5;
@include btn;

.hero-container{
  height: 90vh;
  width: 100vw;
  background-image: url("../assets/images/hero.jpg");
  background-size: cover;
  background-position: center ;
  background-repeat: no-repeat;
}

h5{
  text-align: center;
}

</style>