<template>
  <div class="bookingdetailsview-container my-16 ">
    <v-container>
      <v-snackbar
        v-model="snackbar"
        :multi-line="multiLine"
      
      >
      Booking updated successfully.

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
      <v-row class="btn-container d-flex align-center mb-16">
          <a href="/bookings" class="me-9">
              <v-icon class="left-arrow"> mdi-arrow-left</v-icon> 
            </a>
            <h5 class="me-9">
              Update Booking ID: {{ $route.params.id }}
              <!-- Booking #: {{ bookingNumber }} -->
            </h5>
            <!-- <div class="booking-status btn-rounded btn-rounded-black ">
              <p class="p-black-boldld "> {{bookingItem.status}} </p>
          </div> -->
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
                v-if="bookingItem.clientdetails"
                v-model="bookingItem.clientdetails.firstname"
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
                v-if="bookingItem.clientdetails"
                v-model="bookingItem.clientdetails.lastname"
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
                v-if="bookingItem.clientdetails"
                v-model="bookingItem.clientdetails.address"
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
                v-if="bookingItem.clientdetails"
                v-model="bookingItem.clientdetails.contactnumber"
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
                v-if="bookingItem.clientdetails"
                v-model="bookingItem.clientdetails.email"
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
                  v-if="bookingItem.bookingdetails"
                  v-model="bookingItem.bookingdetails.type"
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
                v-if="bookingItem.bookingdetails"
                  v-model="bookingItem.bookingdetails.package"
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
                v-if="bookingItem.bookingdetails"
                  v-model="bookingItem.bookingdetails.location"
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
                    <Datepicker 
                    v-if="bookingItem.bookingdetails"
                    v-model="bookingItem.bookingdetails.datetime"
                    label="Photoshoot Date" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="mt-9">
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
                    v-model="bookingItem.bookingdetails.notes"
                   
                  ></textarea>


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
                  v-if="bookingItem"
                  v-model="bookingItem.status"
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
              <v-btn @click="firebaseUpdateSingleItem(route.params.id)" class="btn primary-btn mr-5" >
                Save
                </v-btn>
                <v-btn @click="$router.go(-1)" class="btn secondary-btn">
                Cancel
                </v-btn>
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

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import useBookings from '@/modules/useBookings';
import Datepicker from '@vuepic/vue-datepicker';

const {
  getBookingItem,
  bookingItem,
  firebaseUpdateSingleItem,
  snackbar
} = useBookings()

// const bookingNumber = useRoute().params.id.split("/")[1];

const route = useRoute();
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

.primary-btn{
  color: $white-color
}



</style>