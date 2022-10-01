<template>
  <div>
    <v-row class="row-underline pb-2">
          <h6 class="h6-bold">
            Client Details
          </h6>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-row class="mb-3">
                <v-col cols="12" md="6">
                  <p class="p1 p1-black item-label">Type</p>
                  <p class="p-black">Event</p>
                </v-col>
              </v-row>
              <v-row class="mb-3">
                <v-col cols="12" md="6">
                  <p class="p1 p1-black item-label">Package</p>
                  <p class="p-black">Budget</p>
                </v-col>
              </v-row>
              <v-row class="mb-3">
                <v-col cols="12" md="6">
                  <p class="p1 p1-black item-label">Photoshoot Location</p>
                  <p class="p-black">Ølgod, Denmark</p>
                </v-col>
              </v-row>
              <v-row class="mb-3">
                <v-col cols="12" md="6">
                  <p class="p1 p1-black item-label">Photoshoot Time</p>
                  <p class="p-black">7:00 AM</p>
                </v-col>
              </v-row>
            </v-col>  
        </v-row>
  </div>
</template>

<script setup>

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