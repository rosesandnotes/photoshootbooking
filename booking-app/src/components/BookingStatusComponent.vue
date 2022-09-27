<template>
   <div class="booking-status-container d-flex flex-wrap">
        <div class="booking-status all-bookings-container me-9 active">
          <p class="p-black-bold ">All Bookings</p>
        </div>
        <div class="booking-status pending-container me-9">
          <p class="p-black-bold">Pending</p>
        </div>
        <div class="booking-status confirmed-container me-9">
          <p class="p-black-bold">Confirmed</p>
        </div>
        <div class="booking-status done-container me-9">
          <p class="p-black-bold">Done</p>
        </div>
        <div class="booking-status canceled-container">
          <p class="p-black-bold">Canceled</p>
        </div>
      </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include p;

.booking-status{
  background-color: $greyish-color-opacity40;
  color: $greyish-color-opacity40;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  &:hover{
    background-color: $greyish-color-opacity80;
    color: $primary-color;
  } 
}

.active{
    border: 1px solid $primary-color;
  }
</style>