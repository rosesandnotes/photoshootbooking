<template>
  <div class="navigation-container d-flex align-center">
    <v-container>
      <v-row class="navigation d-flex justify-space-between">
        <v-col class="lef-menu  d-flex justify-start align-center "> 
          <router-link to="/" class="mr-8"> <div class="logo-container"></div>  </router-link>
          <ul class="d-flex  align-center">
            <li class="mr-6 d-flex  align-center"> <router-link to="/" > <p class="p1 p1-secondary"> Home </p>  </router-link> </li>  
            <li> <router-link to="/bookings" > <p class="p1 p1-secondary"> Bookings </p>  </router-link> </li>  
          </ul>
        </v-col>
        <v-col class="right-menu d-flex justify-end align-center"> 
          <ul class="d-flex  align-center">
            <!-- <li class="mr-6 d-flex  align-center" > <router-link to="/search" > <p class="p1 p1-secondary"> Search </p>  </router-link> </li> -->
            <li v-if="!isLoggedin"> <router-link to="/login" > <p class="p1 p1-secondary"> Login </p>  </router-link> </li>
            <li v-if="isLoggedin" @click="logout()">  <p class="p1 p1-secondary"> Logout </p>  </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
   
  </div>
</template>

<script setup>

// import {onMounted} from 'vue'
// import useUsers from '@/modules/useUsers'


// const { 
//     isLoggedin,
//     isLoggedinTest,
//     logout
//       } = useUsers()

// onMounted(() => {
//   isLoggedinTest()
// })

</script>

<style lang="scss">

@import "../assets/shared";
@include p;

.navigation-container{
  background-color: $greyish-color;
  height: 10vh;
}

.navigation{
  text-transform: uppercase;
  p{
    transition: 0.3s;
    &:hover{
      text-decoration: underline;
      text-underline-offset: 0.5rem;
      opacity: 0.5;
    }
  }
}

li {
  list-style: none;
  :hover{
    cursor: pointer;
  }
}

.logo-container{
  width: 90px;
  height: 60px;
  background-image: url("../assets/logo.png");
  background-size: contain;
  background-position: center;
}

a {
  text-decoration: none;

}

</style>