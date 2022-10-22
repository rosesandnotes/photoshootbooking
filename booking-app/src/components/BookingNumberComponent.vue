<template>
   <div class="booking-count-container d-flex">
   
      <div class="total-bookings-container me-9 d-flex flex-column justify-center align-center">
          <p class="p-black">Total Bookings</p>
          <h4 class="h4-black">{{counter}} </h4>
        </div>
        <div class="event-bookings-container me-9 d-flex flex-column justify-center align-center">
          <p class="p-black">Event</p>
          <h4 class="h4-black">{{eventCtr}}</h4>
        </div>
        <div class="outdoor-bookings-container me-9 d-flex flex-column justify-center align-center">
          <p class="p-black">Outdoor Portrait</p>
          <h4 class="h4-black">{{outdoorCtr}}</h4>
        </div>
        <div class="holiday-bookings-container d-flex flex-column justify-center align-center">
          <p class="p-black">Holiday</p>
          <h4 class="h4-black">{{holidayCtr}}</h4>
        </div>
        
      </div>
</template>

<script setup>

import {  onMounted } from "vue";
import useBookings from '@/modules/useBookings';

const {
  counter,
  countBookingsData,
  eventCtr,
  outdoorCtr,
  holidayCtr,
  getBookingsData
} = useBookings()

onMounted(() => {
  countBookingsData(),
  getBookingsData()
});

</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include p;
@include h4;


</style>