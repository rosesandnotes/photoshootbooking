import {ref} from 'vue'
import {getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { useRouter } from 'vue-router';

const useUsers = () =>{
  const auth = getAuth()
  const email = ref('')
  const password = ref('')
  const user = ref(null)
  const router = useRouter()
  const errMsg = ref('')

  const login = async () => {
    
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      user.value = userCredential.user;
      console.log("user: ", user.value)
      localStorage.setItem("userLoginInfoFireBase", user.value.email);
      console.log(localStorage.getItem("userLoginInfoFireBase"))
      router.push("/bookings")
    }).catch((error) => {
      console.log("Error Code: ", error.code)
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

  const logout = async () => {
    signOut(auth).then(() => {
      console.log("logged out". user.value)
      localStorage.removeItem("userLoginInfoFireBase");
      // user.value = null
      router.push("/login")
    }).catch((error) => {
      console.log(error)
    })
  }

  const isLoggedin = ref(false)

  const isLoggedinTest = async () => {
    // const auth = getAuth();
    console.log("isLoggedinTest auth", auth)
    user.value = auth.currentUser;
     await onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user: ", user)
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