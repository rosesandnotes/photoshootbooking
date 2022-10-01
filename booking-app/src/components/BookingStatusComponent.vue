<template>
   <div class="booking-status-container d-flex">
        <div class="booking-status all-bookings-container btn-rounded btn-rounded-greyish me-9 btn-rounded-active">
          <p class="p-black-bold ">All Bookings</p>
        </div>
        <div class="booking-status pending-container btn-rounded btn-rounded-greyish me-9">
          <p class="p-black-bold">Pending</p>
        </div>
        <div class="booking-status confirmed-container btn-rounded btn-rounded-greyish me-9">
          <p class="p-black-bold">Confirmed</p>
        </div>
        <div class="booking-status done-container btn-rounded btn-rounded-greyish me-9">
          <p class="p-black-bold">Done</p>
        </div>
        <div class="booking-status canceled-container btn-rounded btn-rounded-greyish">
          <p class="p-black-bold">Canceled</p>
        </div>
      </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include p;
@include btn;

.booking-status{
  cursor: pointer;
}

</style>