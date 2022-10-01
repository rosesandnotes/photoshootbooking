<template>
  <div>
    <v-container>
      <div class="btn-container d-flex justify-end mb-16">
            <v-btn class="btn primary-btn mr-5">
            Add
            </v-btn>
            <v-btn class="btn secondary-btn">
            Cancel
            </v-btn>
      </div>
      <v-row class="row-underline pb-2">
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

      <v-row class="row-underline pb-2">
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
            
            <v-row>
              <v-col
                  cols="12"
                  md="6"
                >
              
                <v-menu
                  v-model="showPicker"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
              >
                  <template v-slot:activator="{ on }">
                      <v-text-field
                          v-model="selectedDate"
                          label="Photoshoot Date"
                          hint="YYYY/MM/DD"
                          persistent-hint
                          readonly
                          v-on="on"
                          prepend-icon="mdi-calendar"
                      ></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="selectedDate"
                      no-title
                      @input="showPicker = false"
                  ></v-date-picker>
              </v-menu>

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
    
    </v-container>


  </div>
</template>

<script setup>

import { ref } from 'vue';


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

const showPicker = ref(false);
const selectedDate = ref(null);

</script>

<style lang="scss" scoped>
@import "../assets/shared";
@include btn;
@include h6;
@include row-underline;

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
</style>