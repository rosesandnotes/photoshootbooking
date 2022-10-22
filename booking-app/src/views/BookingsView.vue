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
      <BookingItemComponent class="mb-8"/>

    </v-container>
   
  </div>
</template>

<script setup>
import BookingNumberComponent from '../components/BookingNumberComponent.vue';
import BookingStatusComponent from '../components/BookingStatusComponent.vue';
import BookingItemTitleComponent from '../components/BookingItemTitleComponent.vue';
import BookingItemComponent from '../components/BookingItemComponent.vue';

import useBookings from '../modules/useBookings'

const {
  snackbar,
  snackbarText,
  multiLine,
} = useBookings()

console.log("snackbar: ", snackbar.value)


</script>

<style lang="scss" scoped>

@import "../assets/shared";
@include btn;
@include p;
@include h4;

.bookings-container{
  overflow: scroll;
}
</style>