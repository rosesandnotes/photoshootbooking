<template>
  <div class="hero-container d-flex justify-center align-center flex-column flex-wrap">
    <h1> Welcome </h1>
    <h5 class="my-5"> Roses and Notes Photography Booking System </h5>
    <div class="button-container">
      <v-btn
          elevation="1"
          large
          tile
        class="primary-btn btn mr-5"> 
        Login
      </v-btn>

      <v-btn
        class="secondary-btn btn"
        elevation="1"
        large
        outlined
        tile
      >View Bookings</v-btn>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include h1-primary;
@include h5-secondary;

.hero-container{
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/images/hero.jpg");
  background-size: cover;
  background-position: center ;
  background-repeat: no-repeat;
}

.btn{
  width: 175px;
  height: 42px;
  border-radius: 0;
}

.primary-btn{
  background-color: $primary-color;
  color: $white-color;
}

.secondary-btn{
  background-color: transparent;
  color: $primary-color;
  border: thin solid $primary-color;
  transition: 0.3s;
  &:hover{
    background-color: $primary-color;
    opacity: 0.5;
    color: $white-color;
  }
}

h5{
  text-align: center;
}

</style>