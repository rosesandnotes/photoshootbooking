<template>
  <div>
    <v-row class="row-underline pb-2">
          <h6 class="h6-bold">
            Photoshoot Details
          </h6>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-row class="mb-3">
          <v-col cols="12" md="6">
            <p class="p1 p1-black item-label">Type</p>
            <p class="p-black" v-if="props.bookingdetails">{{props.bookingdetails.type}} </p>
          </v-col>
        </v-row>
        <v-row class="mb-3">
          <v-col cols="12" md="6">
            <p class="p1 p1-black item-label">Package</p>
            <p class="p-black" v-if="props.bookingdetails">{{props.bookingdetails.package}} </p>
          </v-col>
        </v-row>
        <v-row class="mb-3">
          <v-col cols="12" md="6">
            <p class="p1 p1-black item-label" >Date & Time</p>
            <p class="p-black" v-if="props.bookingdetails">{{props.bookingdetails.datetime.toDate()}} </p>
          </v-col>
        </v-row>
        <v-row class="mb-3">
          <v-col cols="12" md="6">
            <p class="p1 p1-black item-label">Location</p>
            <p class="p-black" v-if="props.bookingdetails">{{props.bookingdetails.location}}</p>
          </v-col>
        </v-row>
      </v-col>  
  </v-row>
  </div>
</template>

<script setup>

const props = defineProps({
  bookingdetails: Object
});

</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include h5;
@include btn;
@include p;
@include h6;
@include row-underline;

.item-label{
  text-transform: uppercase;
  opacity: 50%;
}
</style>