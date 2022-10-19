<template>
  <div>
    <v-container class="mt-16 mb-9">
      <v-snackbar
        v-model="snackbar"
        :multi-line="multiLine"
      
      >
      Booking added successfully.

        <template v-slot:action="{ attrs }">
          <v-btn
            color="red"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
      
      <v-row class="page-title-container mb-16 d-flex align-center">
        <a href="/bookings" class="me-9">
              <v-icon class="left-arrow"> mdi-arrow-left</v-icon> 
            </a>
        <v-col
        cols="12"
        md="6"
        class="ps-0"
        >
          <h5 class="me-9">
            Add New Booking
          </h5>
        </v-col>
      </v-row>
      <v-row class="row-underline pb-2 mt-9">
        <h6 class="h6-bold">
            Client Details
          </h6>
      </v-row>
      <v-row class="mt-3">
        <v-col cols="12" class="form-container">
          <v-form
         
          >
            <v-row>
              <v-col
                  cols="12"
                  md="6"
                >
                <v-text-field
                label="First Name"
                placeholder="First Name"
                outlined
                dense
                required
                class="inputfield"
                v-model= "AddItemData.firstname"
              ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
              <v-col
                  cols="12"
                  md="6"
                >
                <v-text-field
                label="Last Name"
                placeholder="Last Name"
                v-model="AddItemData.lastname"
              ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
              <v-col
                  cols="12"
                  md="6"
                >
                <v-text-field
                label="Address"
                placeholder="Address"
                v-model="AddItemData.address"
              ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
              <v-col
                  cols="12"
                  md="6"
                >
                <v-text-field 
                label="Phone Number"
                placeholder="Phone Number"
                v-model="AddItemData.contactnumber"
              ></v-text-field>

                </v-col>
            </v-row>
            <v-row>
              <v-col
                  cols="12"
                  md="6"
                >
                <v-text-field 
                label="Email"
                type="email"
                placeholder="Email"
                v-model="AddItemData.email"
              ></v-text-field>
                </v-col>
            </v-row>
          
        </v-form>
        </v-col>
        
      </v-row>

      <v-row class="row-underline pb-2 mt-9">
        <h6 class="h6-bold">
            Photoshoot Details
          </h6>
      </v-row>
      <v-row class="mt-3">
        <v-col cols="12" class="form-container">
          <v-form
        
          >
            <v-row>
              <v-col
                  cols="12"
                  md="6"
                >
                <v-select
                  :items="types"
                  label="Type"
                  v-model="AddItemData.type"
                ></v-select>
                </v-col>
            </v-row>
            <v-row>
              <v-col
                  cols="12"
                  md="6"
                >
                <p> Package</p>
                <v-radio-group
                    v-model="AddItemData.package"
                    mandatory
                    row
                  >
                    <v-radio
                      label="Budget"
                      value="Budget"
                    ></v-radio>
                    <v-radio
                      label="Standard"
                      value="Standard"
                    ></v-radio>
                    <v-radio
                      label="Premium"
                      value="Premium"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
            </v-row>

            <v-row class="mt-3 ">
              <v-col
                  cols="12"
                  md="6"
                >
                <v-text-field
                label="Photoshoot Location"
                placeholder="Photoshoot Location"
                outlined
                dense
                required
                class="inputfield"
                v-model= "AddItemData.location"
              ></v-text-field>
                </v-col>
            </v-row>
            
            <v-row class="mt-3 ">
              <v-col  cols="12"
                  md="6">
                <v-row>
                  <v-col>
                    <p> Photoshoot Date and Time</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <Datepicker v-model="AddItemData.datetime" label="Photoshoot Date" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

          
            <v-row class=" mt-9">
              <v-col>
                <h6 class="h6-bold">
                Additional Notes
                </h6>
              </v-col>
              
            </v-row>

            <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <textarea 
                  name="notes" 
                  v-model="AddItemData.notes"
                  >
                   
                  </textarea>
                </v-col>
            </v-row>
            <v-row class="mt-9">
              <v-col>
                <h6 class="h6-bold">
               Attachment
                </h6>
              </v-col>
            </v-row>
            <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
              
                  <v-file-input
                  truncate-length="15"
                  label="Upload File"
                ></v-file-input>
                </v-col>
            </v-row>
            <v-row class="mt-9">
              <v-col>
                <h6 class="h6-bold">
               Status
                </h6>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                  cols="12"
                  md="6"
                >
                <v-select
                  :items="statuses"
                  label="Status"
                  v-model="AddItemData.status"
                ></v-select>
                </v-col>
            </v-row>
          </v-form>
        </v-col>
        
      </v-row>
      
      <v-row class="btn-container d-flex justify-start mt-9 mb-16">
          <v-col
          cols="12"
          md="6"
          class="ps-0"
          >
              <v-btn @click="firebaseAddSingleItem()" class="btn primary-btn mr-5" >
                Save
                </v-btn>
              
                <v-btn @click="$router.go(-1)" class="btn secondary-btn">
                Cancel
                </v-btn>

          </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script setup>

import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';

import useBookings from '@/modules/useBookings';

const {
  firebaseAddSingleItem,
  AddItemData,
  snackbar
} = useBookings()

const multiLine = ref(true)

const types = ref([
  'Event',
  'Outdoor Portrait',
  'Holiday'
]);

const statuses = ref([
  'Pending',
  'Confirmed',
  'Cancelled'
]);


// const photoshootpackage = ref('budget');
// const date = ref(new Date());


document.getElementsByClassName("dp__action dp__select").innerHTML = "Save";

// onMounted(() => {
//   getLastItem()
// })

</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include btn;
@include h6;
@include row-underline;
@include h5;

.form-container{
  
  padding-left: 0;
}

.v-radio-group{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}

textarea{
  background-color: $greyish-color-opacity40;
  border: 1px solid $greyish-color;
  min-height: 200px;
  min-width: 100%;
}

.v-icon {
  color: $primary-color;
}

</style>