<template>
   <div class="booking-status-container d-flex">
  
          <router-link to="/bookings" class="booking-status all-bookings-container btn-rounded btn-rounded-greyish me-9" :class="isAll"> <p class="p-black-bold ">All Bookings</p> </router-link>
        
          <router-link to="/bookings/Pending" class="booking-status pending-bookings-container btn-rounded btn-rounded-greyish me-9" :class="isPending"> <p class="p-black-bold">Pending</p> </router-link>
  
         <router-link to="/bookings/Confirmed"  class="booking-status confirmed-container btn-rounded btn-rounded-greyish me-9" :class="isConfirmed">  <p class="p-black-bold">Confirmed</p> </router-link>

         <router-link to="/bookings/Cancelled" class="booking-status canceled-container btn-rounded btn-rounded-greyish" :class="isCancelled">  <p class="p-black-bold">Canceled</p> </router-link>
      </div>
</template>

<script setup>
// import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {computed } from 'vue'


const route = useRoute();

console.log("-----route.params.status", route.params.status)


// let isAll = ref(false);
// let isPending = ref(false);
// let isConfirmed = ref(false);
// let isCancelled = ref(false);


// switch(filterStatus)
// {
//   case 'Pending':
//     isPending.value = 'btn-rounded-active'
//     break;
//   case 'Confirmed':
//     isConfirmed.value = 'btn-rounded-active'
//     break;
//   case 'Cancelled':
//     isCancelled.value = 'btn-rounded-active'
//     break;
//   default:
//     isAll.value = 'btn-rounded-active'
//     break;
// }

const isPending = computed(() => {
  return route.params.status == 'Pending' ? 'btn-rounded-active' : ' '
})

const isConfirmed = computed(() => {
  return route.params.status == 'Confirmed' ? 'btn-rounded-active' : ' '
})

const isCancelled = computed(() => {
  return route.params.status == 'Cancelled' ? 'btn-rounded-active' : ' '
})

const isAll = computed(() => {
  return route.params.status == undefined ? 'btn-rounded-active' : ' '
})

</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include p;
@include btn;

router-link{
  :hover{
    cursor: pointer;
  }
}

</style>