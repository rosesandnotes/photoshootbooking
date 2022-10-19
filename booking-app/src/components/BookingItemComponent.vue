<template>
  <div >
    <v-snackbar
        v-model="snackbar"
        :multi-line="multiLine"
      
      >
      Booking item deleted successfully.

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
            <a class="delete-button" @click="firebaseDeleteSingleItem(booking.id)"> Delete </a>

          </v-col>
      </v-row>
      
  </div>

</template>

<script setup>
import { onMounted,ref } from 'vue'
import useBookings from '../modules/useBookings'

const multiLine = ref(true)

const { bookings, 
        getBookingsData,
    firebaseDeleteSingleItem,
    snackbar
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

.delete-button:hover{
    cursor: pointer;
  }



</style>