<template>
  <div class="bookingdetailsview-container my-16 ">
    <v-container>
      <v-row class="btn-container d-flex align-center mb-16">
        
          <a @click="$router.go(-1)" class="me-9">
              <v-icon class="left-arrow"> mdi-arrow-left</v-icon> 
            </a>
            <h5 class="me-9">
              Booking ID: {{ $route.params.id }}
              <!-- Booking #: {{ bookingNumber }} -->
            </h5>
            <div class="booking-status btn-rounded btn-rounded-black ">
            <p class="p-black-boldld "> {{bookingItem.status}} </p>
          </div>
      </v-row>

      <ClientDetailsComponent :clientdetails="bookingItem.clientdetails" class="mb-9"/>
     <PhotoshootDetailsComponent :bookingdetails="bookingItem.bookingdetails" class="mb-9"/>

     <v-row class="mb-9">
        <v-col
          cols="12"
          md="6"
        >
            <h6 class="h6-bold pb-4">
              Additional Notes
          </h6>
       
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            v-if="bookingItem.bookingdetails"
            :value="bookingItem.bookingdetails.notes"
            disabled

          ></textarea>


        </v-col>
     </v-row>

     <!-- <v-row>
        <v-col
          cols="12"
          md="6"
        >
            <h6 class="h6-bold pb-4">
              Attachment
          </h6>
          <v-btn 
            class="ma-2 btn-border-primary"  
            outlined 
            href="file.pdf"
            download>
            <v-icon class="me-2">
             mdi-file-pdf
            </v-icon>
                Download Invoice
          </v-btn>
        </v-col>
     </v-row> -->

    </v-container>
  </div>
</template>

<script setup>
import ClientDetailsComponent from "../components/ClientDetailsComponent.vue";
import PhotoshootDetailsComponent from "../components/PhotoshootDetailsComponent.vue";

import { onMounted } from "vue";
import { useRoute } from "vue-router";
import useBookings from '@/modules/useBookings';

const {
  getBookingItem,
  bookingItem,
} = useBookings()

// const bookingNumber = useRoute().params.id.split("/")[1];

const route = useRoute();


onMounted(() => {
  console.log("route params id: ",route.params.id);
  getBookingItem(route.params.id);
  console.log("BookingDetails View - bookingItem: ",bookingItem)
});



</script>

<style lang="scss" scoped>


@import "../assets/shared";
@include h5;
@include btn;
@include p;
@include h6;
@include row-underline;

.booking-status{
  opacity: 50%;
}

textarea{
  background-color: $greyish-color-opacity40;
  border: 1px solid $greyish-color;
  resize: none;
  min-height: 200px;
  min-width: 100%;
  padding: 20px;
}

.v-icon, .v-btn{
  color: $primary-color;
}




</style>