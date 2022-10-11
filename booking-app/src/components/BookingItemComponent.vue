<template>
  <div >
      <v-row v-for="(booking, index) in bookings" :key="booking" class="d-flex justify-center align-center row-underline">
          <v-col cols="2" >
            <p class="p-black" > {{index+1}} </p>
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
            <router-link :to="'/view/' + booking.id" class="me-3"> View </router-link>
            <router-link :to="'/edit/' + booking.id" class="me-3"> Edit </router-link>
            <router-link to="/delete/1"> Delete </router-link>

          </v-col>
      </v-row>
      
  </div>

</template>

<script setup>
import { onMounted } from 'vue'
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

a{
  color: $primary-color;
  text-decoration: none;
}


</style>