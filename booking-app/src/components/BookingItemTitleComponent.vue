<template>
  <v-row class="d-flex justify-center align-center flex-wrap">
      <v-col class="d-flex align-center">
        <p class="p1-black-bold  me-2">booking #</p>
        <v-icon>mdi-sort</v-icon>
      </v-col>
      <v-col>
        <p class="p1-black-bold">status</p> 
      </v-col>
      <v-col>
        <p class="p1-black-bold">type</p> 
      </v-col>
      <v-col>
        <p class="p1-black-bold">client</p> 
      </v-col>
      <v-col class="d-flex align-center me-4">
        <p class="p1-black-bold me-2">photoshoot date</p> 
        <v-icon>mdi-sort</v-icon>
      </v-col>
      <v-col>

      </v-col>
  </v-row>

</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include p;

p{
  text-transform: uppercase;
}

.v-icon{
  cursor: pointer;
  color: $black-color;
}

.v-row{
  border-bottom: 1px solid $greyish-color;
  padding-bottom: 0.1rem;
  margin-bottom: 1rem;
}
</style>