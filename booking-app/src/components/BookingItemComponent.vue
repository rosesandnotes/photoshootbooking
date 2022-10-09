<template>
  <div >

      <v-row v-for="booking in bookings" :key="booking" class="d-flex justify-center align-center row-underline">
          <v-col cols="2" >
            <p class="p-black" > {{booking.id}} </p>
          </v-col>
          <v-col cols="2">
            <p class="p-black"> {{booking.status}}</p> 
          </v-col>
          <v-col cols="2">
            <p class="p-black" > {{booking.bookingdetails.type}}</p> 
          </v-col>
          <v-col cols="2">
            <p class="p-black" > {{booking.clientdetails.firstname}} {{booking.clientdetails.lastname}} </p> 
          </v-col>
          <v-col cols="2">
            <p class="p-black me-4 "> {{booking.bookingdetails.datetime.toDate().toDateString()}} </p> 
          </v-col>
          <v-col cols="2">
            <router-link to="/view/1" class="me-3"> View </router-link>
            <router-link to="/edit/1" class="me-3"> Edit </router-link>
            <router-link to="/delete/1"> Delete </router-link>
          </v-col>
      </v-row>
      
     <!-- <v-row class="d-flex justify-center align-center row-underline">
          <v-col cols="2">
            <p class="p-black" >28</p>
          </v-col>
          <v-col cols="2">
            <p class="p-black">Confirmed</p> 
          </v-col>
          <v-col cols="2">
            <p class="p-black" >Event</p> 
          </v-col>
          <v-col cols="2">
            <p class="p-black" >Grace Santos</p> 
          </v-col>
          <v-col cols="2">
            <p class="p-black me-4 ">October 21, 2022</p> 
          </v-col>
          <v-col cols="2">
            <router-link to="/view/1" class="me-3"> View </router-link>
            <router-link to="/edit/1" class="me-3"> Edit </router-link>
            <router-link to="/delete/1"> Delete </router-link>
          </v-col>
      </v-row> -->
  </div>

</template>

<script setup>
import {onMounted} from 'vue'
import useBookings from '../modules/useBookings'

const { bookings, 
        getBookingsData
      } = useBookings()

onMounted(() => {
  getBookingsData()
})
</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include p;
@include row-underline;

// .v-row{
//   border-bottom: 1px solid $greyish-color;
//   padding-bottom: 0.1rem;
//   margin-bottom: 1rem;
// }

a{
  color: $primary-color;
  text-decoration: none;
}


</style>