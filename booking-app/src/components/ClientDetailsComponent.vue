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
                  <p class="p1 p1-black item-label">Fullname</p>
                  <p class="p-black" v-if="props.clientdetails"> {{ props.clientdetails.firstname + " " +  props.clientdetails.lastname}} </p>

                </v-col>
              </v-row>
              <v-row class="mb-3">
                <v-col cols="12" md="6">
                  <p class="p1 p1-black item-label">Address</p>
                  <p class="p-black" v-if="props.clientdetails"> {{props.clientdetails.address}} </p>
                </v-col>
              </v-row>
              <v-row class="mb-3">
                <v-col cols="12" md="6">
                  <p class="p1 p1-black item-label">contact number</p>
                  <p class="p-black"  v-if="props.clientdetails">{{props.clientdetails.contactnumber}} </p>
                </v-col>
              </v-row>
              <v-row class="mb-3">
                <v-col cols="12" md="6">
                  <p class="p1 p1-black item-label">email</p>
                  <p class="p-black" v-if="props.clientdetails">{{props.clientdetails.email}} </p>
                </v-col>
              </v-row>
            </v-col>  
        </v-row>
  </div>
</template>

<script setup>


const props = defineProps({
  clientdetails: {
    type: Object,
    required: true,
  }
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