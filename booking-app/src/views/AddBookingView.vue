<template>
  <div>
    <v-container class="mt-16 mb-9">
      <v-snackbar
        v-model="snackbar"
        :multi-line="multiLine"
        :timeout="timeout"
      >
        {{ snackbarText }}
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
      <v-form
      ref="form"
       v-model="valid"
        lazy-validation
          >

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
          
            <v-row>
              <v-col
                  cols="12"
                  md="6"
                >
                <v-text-field
                label="First Name"
                placeholder="First Name"
                :rules="rules"
                hide-details="auto"
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
                :rules="rules"
                hide-details="auto"
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
                :rules="rules"
                hide-details="auto"
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
                :rules="phoneRules"
                hide-details="auto"
                type="tel"
                pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                hint="Format: 12-34-5678"
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
                hide-details="auto"
                :rules="emailRules"
              ></v-text-field>
                </v-col>
            </v-row>
          
        <!-- </v-form> -->
        </v-col>
        
      </v-row>

      <v-row class="row-underline pb-2 mt-9">
        <h6 class="h6-bold">
            Photoshoot Details
          </h6>
      </v-row>
      <v-row class="mt-3">
        <v-col cols="12" class="form-container">
          <!-- <v-form
        
          > -->
            <v-row>
              <v-col
                  cols="12"
                  md="6"
                >
                <v-select
                  :items="types"
                  label="Type"
                  v-model="AddItemData.type"
                  :rules="selectRules"
                  hide-details="auto"
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
                    :rules="selectRules"
                    hide-details="auto"
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
                :rules="rules"
                hide-details="auto"
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
                    hide-details="auto"
                    required=""
                    v-model="AddItemData.datetime" label="Photoshoot Date" />
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
                  :rules="rules"
                hide-details="auto"
                  >
                   
                  </textarea>
                </v-col>
            </v-row>
            <!-- <v-row class="mt-9">
              <v-col>
                <h6 class="h6-bold">
               Attachment
                </h6>
              </v-col>
            </v-row> -->
            <!-- <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
              
                  <v-file-input
                  truncate-length="15"
                  label="Upload File"
                ></v-file-input>
                </v-col>
            </v-row> -->
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
                  :rules = "selectRules"
                    hide-details="auto"
                ></v-select>
                </v-col>
            </v-row>
         
        </v-col>
        
      </v-row>
    </v-form>
      <v-row class="btn-container d-flex justify-start mt-9 mb-16">
          <v-col
          cols="12"
          md="6"
          class="ps-0"
          >
              <v-btn
              :disabled="!valid"
              @click="firebaseAddSingleItem()" 
              class="btn primary-btn mr-5" >
                Save
                </v-btn>
                <!-- <v-btn
              :disabled="!valid"
              @click="validate()" 
              class="btn primary-btn mr-5" >
                Save
                </v-btn> -->
              
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
const valid = ref(true)

const snackbarText = ref('Booking saved successfully.')

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

const timeout = ref(3000)

const rules = ref([
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
]);


const phoneRules = ref([
  value => !!value || 'Required.',
  value => (value && value.length >= 8) || 'Min 8 characters',
]);

const emailRules = ref([
  value => !!value || 'Required.',
  value => /.+@.+\..+/.test(value) || 'E-mail must be valid',
]);

const selectRules = ref([
  value => !!value || 'Required.',
]);


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