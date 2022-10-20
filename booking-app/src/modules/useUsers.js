import { ref } from 'vue'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import {auth} from '../firebase'

import { useRouter } from 'vue-router'

const useUsers = () => {
  // const auth = getAuth()
  const email = ref('')
  const password = ref('')
  const user = ref(null)
  const router = useRouter()
  const errMsg = ref('')
  const isLoggedin = ref(false)

  console.log("Auth Initial: ", auth)

  const login = async () => {
    console.log("Inside Login")
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      user.value = userCredential.user;
      // console.log("user: ", user.value)
      localStorage.setItem("userLoginInfoFireBase", user.value.email);
      // console.log(localStorage.getItem("userLoginInfoFireBase"))
      router.push("/bookings");
    }).catch((error) => {
      // console.log("Error Code: ", error.code)
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email address"
          break;
        case "auth/user-not-found":
          errMsg.value = "User not found"
          break;
        case "auth/wrong-password":
          errMsg.value = "Wrong password"
          break;
        default:
          errMsg.value = "Email or password is incorrect."
      }
    })
  }

  const logout = () => {
    signOut(auth).then(() => {
      console.log("logged out", user.value)
      // localStorage.removeItem("userLoginInfoFireBase");
      // user.value = null
      router.push("/login");
    }).catch((error) => {
      console.log(error)
    })
  }



  const isLoggedinTest = () => {
      user.value = auth.currentUser;
      onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("user: ", user)
        isLoggedin.value = true
      } else {
        console.log("no user")
        isLoggedin.value = false
      }
    });
    console.log("isLoggedin", isLoggedin.value)
  }
  
  return {
    login,  
    email,
    password,
    user,
    auth,
    logout,
    isLoggedin,
    isLoggedinTest,
    errMsg
  }
}

export default useUsers