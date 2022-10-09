// import { ref } from 'vue';
// import {getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'

// const useUsers = () => {
//   const auth = getAuth()
//   const email = ref('')
//   const password = ref('')
//   const user = ref(null)

//   const login = async () => {
//     signInWithEmailAndPassword(auth, email.value, password.value)
//     .then((userCredential) => {
//       //Signed In
//       user.value = userCredential.user;
//       console.log("user info", user.value.email)
//     }).catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       if(errorCode === 'auth/wrong-password'){
//         alert('Wrong password')
//       }else{
//         alert(errorMessage)
//       }
//     })
//   }

//   const logout = async () => {
//     signOut(auth).then(() => {
//       console.log("logged out", user.value)
//     }).catch((error) => {
//       console.log(error)
//     })
//   }

//   const isLoggedIn = ref(false)
//   const isLoggedInTest = () => {
//      const auth = getAuth();
//      user.value = auth.currentUser;
//      onAuthStateChanged (auth, (user) => {
//         if (user) {
//           isLoggedIn.value = true;
         
//         } else {
//           isLoggedIn.value = false;
          
//         }
//      });
//   }

//   return {
//     login,
//     email,
//     password,
//     user,
//     auth,
//     logout,
//     isLoggedIn,
//     isLoggedInTest
//   }
// }

// export default useUsers