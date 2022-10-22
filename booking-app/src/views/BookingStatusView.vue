<template>
  <div class="bookings-container ">
    <v-container>
      <v-snackbar
        v-model="snackbar_value"
        :multi-line="multiLine"
      >
        {{ snackbarText }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="red"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <div class="btn-container d-flex justify-end mb-8">
        <router-link to="/add">
          <v-btn class="btn primary-btn">
            Add New Booking
            </v-btn>
        </router-link>
         
      </div>
     <BookingNumberComponent class="mb-16"/>
     <BookingStatusComponent class="mb-8"/>
      <BookingItemTitleComponent class="mb-3"/>
      <v-row v-for="(booking, index) in filteredBookings" :key="booking" class="d-flex justify-center align-center row-underline">
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
            <a class="delete-button" @click="firebaseDeleteSingleItem(booking.id)"> Delete </a>

          </v-col> 
      </v-row>

    </v-container>
   
  </div>
</template>

<script setup>
import BookingNumberComponent from '../components/BookingNumberComponent.vue';
import BookingStatusComponent from '../components/BookingStatusComponent.vue';
import BookingItemTitleComponent from '../components/BookingItemTitleComponent.vue';
import { watch } from 'vue'

import {useRoute} from 'vue-router'
import useBookings from '../modules/useBookings'

const {
  snackbar,
  snackbarText,
  multiLine,
  filteredBookings,
  firebaseDeleteSingleItem,
  getFilteredBookings
} = useBookings()

const route = useRoute();


watch (route, () => {
  getFilteredBookings(route.params.status)
}, {immediate: true})



</script>

<style lang="scss" scoped>

@import "../assets/shared";
@include btn;
@include p;
@include h4;
@include row-underline;

a{
  color: $primary-color;
  text-decoration: none;
}

.delete-button:hover{
    cursor: pointer;
  }

.bookings-container{
  overflow: scroll;
}
</style>