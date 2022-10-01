<template>
  <div class="bookingdetailsview-container my-9 ">
    <v-container>
      <v-row class="btn-container d-flex align-center mb-16">
          <a href="" class="me-9">
              <v-icon class="left-arrow"> mdi-arrow-left</v-icon> 
            </a>
            <h5 class="me-9">
              Booking #28
            </h5>
            <div class="booking-status btn-rounded btn-rounded-black ">
            <p class="p-black-boldld ">Confirmed</p>
          </div>
      </v-row>
      
     <ClientDetailsComponent class="mb-9"/>
     <PhotoshootDetailsComponent class="mb-9"/>

     <v-row class="mb-9">
        <v-col
          cols="12"
          md="6"
        >
            <h6 class="h6-bold pb-4">
              Additional Notes
          </h6>
          <textarea name="" id="" cols="100" rows="10" disabled>
            This is an example note

          </textarea>
        </v-col>
     </v-row>

     <v-row>
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
     </v-row>

    </v-container>
  </div>
</template>

<script setup>
import ClientDetailsComponent from "../components/ClientDetailsComponent.vue";
import PhotoshootDetailsComponent from "../components/PhotoshootDetailsComponent.vue";
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
}

.v-icon, .v-btn{
  color: $primary-color;
}




</style>