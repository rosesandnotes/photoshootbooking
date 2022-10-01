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
            <p class="p1 p1-black item-label">Fullname</p>
            <p class="p-black">Grace Santos</p>
          </v-col>
        </v-row>
        <v-row class="mb-3">
          <v-col cols="12" md="6">
            <p class="p1 p1-black item-label">Address</p>
            <p class="p-black">Skrænten 48, 6870 Ølgod, Denmark</p>
          </v-col>
        </v-row>
        <v-row class="mb-3">
          <v-col cols="12" md="6">
            <p class="p1 p1-black item-label">Contact Number</p>
            <p class="p-black">+4512345678</p>
          </v-col>
        </v-row>
        <v-row class="mb-3">
          <v-col cols="12" md="6">
            <p class="p1 p1-black item-label">Email</p>
            <p class="p-black">grace@yahoo.com</p>
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