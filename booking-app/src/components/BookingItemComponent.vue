<template>
  <div>
      <v-row class="d-flex justify-center align-center flex-wrap">
          <v-col class="d-flex">
            <p class="p-black-bold me-4">28</p>
          </v-col>
          <v-col>
            <p class="p1-black-bold">Confirmed</p> 
          </v-col>
          <v-col>
            <p class="p1-black-bold">Event</p> 
          </v-col>
          <v-col>
            <p class="p1-black-bold">Grace Santos</p> 
          </v-col>
          <v-col class="d-flex me-4">
            <p class="p1-black-bold ">October 21, 2022</p> 
          </v-col>
          <v-col>
            <router-link to="/view/1" class="me-3"> View </router-link>
            <router-link to="/edit/1" class="me-3"> Edit </router-link>
            <router-link to="/delete/1"> Delete </router-link>
          </v-col>
      </v-row>
      <v-row class="d-flex justify-center align-center flex-wrap">
          <v-col class="d-flex">
            <p class="p-black-bold me-4">27</p>
          </v-col>
          <v-col>
            <p class="p1-black-bold">Pending</p> 
          </v-col>
          <v-col>
            <p class="p1-black-bold">Outdoor</p> 
          </v-col>
          <v-col>
            <p class="p1-black-bold">Grace Santos</p> 
          </v-col>
          <v-col class="d-flex me-4">
            <p class="p1-black-bold ">October 21, 2022</p> 
          </v-col>
          <v-col>
            <router-link to="/view/1" class="me-3"> View </router-link>
            <router-link to="/edit/1" class="me-3"> Edit </router-link>
            <router-link to="/delete/1"> Delete </router-link>
          </v-col>
      </v-row>
      <v-row class="d-flex justify-center align-center flex-wrap">
          <v-col class="d-flex">
            <p class="p-black-bold me-4">26</p>
          </v-col>
          <v-col>
            <p class="p1-black-bold">Done</p> 
          </v-col>
          <v-col>
            <p class="p1-black-bold">Holiday</p> 
          </v-col>
          <v-col>
            <p class="p1-black-bold">Grace Santos</p> 
          </v-col>
          <v-col class="d-flex me-4">
            <p class="p1-black-bold ">October 21, 2022</p> 
          </v-col>
          <v-col>
            <router-link to="/view/1" class="me-3"> View </router-link>
            <router-link to="/edit/1" class="me-3"> Edit </router-link>
            <router-link to="/delete/1"> Delete </router-link>
          </v-col>
      </v-row>
  </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include p;

.v-row{
  border-bottom: 1px solid $greyish-color;
  padding-bottom: 0.1rem;
  margin-bottom: 1rem;
}

a{
  color: $primary-color;
  text-decoration: none;
}
</style>