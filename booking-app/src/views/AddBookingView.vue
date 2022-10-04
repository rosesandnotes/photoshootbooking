<template>
  <div>
    <v-container class="mt-16 mb-9">
      <v-row class="page-title-container mb-16">
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
          <v-form>
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
          <v-form>
            <v-row>
              <v-col
                  cols="12"
                  md="6"
                >
                <v-select
                  :items="types"
                  label="Type"
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
                    v-model="photoshootpackage"
                    mandatory
                    row
                  >
                    <v-radio
                      label="Budget"
                      value="budget"
                    ></v-radio>
                    <v-radio
                      label="Standard"
                      value="standard"
                    ></v-radio>
                    <v-radio
                      label="Premium"
                      value="premium"
                    ></v-radio>
                  </v-radio-group>
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
                    <Datepicker v-model="date" label="Photoshoot Date" />
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
                  <textarea name="notes" >
                    This is an example note
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
          </v-form>
        </v-col>
        
      </v-row>
      
      <v-row class="btn-container d-flex justify-start mt-9 mb-16">
          <v-col
          cols="12"
          md="6"
          class="ps-0"
          >
              <v-btn class="btn primary-btn mr-5">
                Save
                </v-btn>
                <v-btn class="btn secondary-btn">
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

const types = ref([
  'Wedding',
  'Family',
  'Maternity',
  'Baby',
  'Child',
  'Pet',
  'Other'
]);

const photoshootpackage = ref('budget');
const date = ref(new Date());

document.getElementsByClassName("dp__action dp__select").innerHTML = "Save";

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

</style>