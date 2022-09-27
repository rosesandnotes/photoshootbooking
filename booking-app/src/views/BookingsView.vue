<template>
  <div class="bookings-container ">
    <v-container>
      <div class="btn-container d-flex justify-end mb-8">
          <v-btn class="btn primary-btn">
            Add New Booking
            </v-btn>
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

</script>

<style lang="scss" scoped>

@import "../assets/shared";
@include btn;
@include p;
@include h4;

.bookings-container{
  // min-height: 90vh;
  // min-width: 50vw;
  overflow: scroll;
}
</style>