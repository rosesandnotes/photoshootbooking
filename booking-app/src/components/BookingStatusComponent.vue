<template>
   <div class="booking-status-container d-flex">
        <!-- <div class="booking-status all-bookings-container btn-rounded btn-rounded-greyish me-9 btn-rounded-active">
          <p  @click="getFilteredBookings('All')" class="p-black-bold ">All Bookings</p>
        </div>
        <div @click="getFilteredBookings('Pending')" class="booking-status pending-container btn-rounded btn-rounded-greyish me-9">
          <p class="p-black-bold">Pending</p>
        </div>
        <div @click="getFilteredBookings('Confirmed')" class="booking-status confirmed-container btn-rounded btn-rounded-greyish me-9">
          <p class="p-black-bold">Confirmed</p>
        </div> -->


        <!-- <div @click="getBookingsStatus('Done')" class="booking-status done-container btn-rounded btn-rounded-greyish me-9">
          <p class="p-black-bold">Done</p>
        </div> -->


        <!-- <div @click="getFilteredBookings('Cancelled')" class="booking-status canceled-container btn-rounded btn-rounded-greyish">
          <p class="p-black-bold">Canceled</p>
        </div> -->

        <div class="booking-status all-bookings-container btn-rounded btn-rounded-greyish me-9" :class="isAll">
          <router-link to="/bookings"> <p  class="p-black-bold ">All Bookings</p> </router-link>
        </div>
        
        <div class="booking-status pending-bookings-container btn-rounded btn-rounded-greyish me-9" :class="isPending">
          <router-link to="/bookings/Pending"> <p class="p-black-bold">Pending</p> </router-link>
          
        </div>
        <div 
         class="booking-status confirmed-container btn-rounded btn-rounded-greyish me-9">
          <p class="p-black-bold">Confirmed</p>
        </div>
        <div
         class="booking-status canceled-container btn-rounded btn-rounded-greyish">
          <p class="p-black-bold">Canceled</p>
        </div>
      </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute();

let isAll = ref(false);
let isPending = ref(false);


switch(route.params.status)
{
  case 'Pending':
    isPending.value = 'btn-rounded-active'
    break;
  // case 'Confirmed':
  //   status.value = 'booking-status btn-rounded btn-rounded-greyish me-9 btn-rounded-active'
  //   break;
  // case 'Cancelled':
  //   status.value = 'booking-status btn-rounded btn-rounded-greyish btn-rounded-active'
  //   break;
  default:
    isAll.value = 'btn-rounded-active'
    break;
}

</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include p;
@include btn;

.booking-status{
  cursor: pointer;
}

</style>