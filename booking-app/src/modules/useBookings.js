import {ref } from 'vue'
import {collection, onSnapshot, addDoc, doc, getDoc} from 'firebase/firestore';
import {db} from '../firebase.js'

const useBookings = () => {
  const bookings = ref([])
  const bookingItem = ref({})
  let counter = ref(0)
  const bookingDataRef = collection (db, "Bookings");

  const AddItemData = ref({})
  let snackbar = ref(false)

  // Retrieve data from firebase
  const getBookingsData = () => {
    console.log("getBookingsData")
    onSnapshot(bookingDataRef, (snapshot) => {
      bookings.value = snapshot.docs.map(doc => {
        return {
          
          ...doc.data(),
          id : doc.id,
          
        }
        
      })
      console.log("inside getBookingsData")
    })
  }


  const getBookingItem = (id) => {
    console.log("getBookingItem")
    const bookingItemRef = doc(db, "Bookings", id);
    getDoc(bookingItemRef).then((doc) => {
      if (doc.exists()) {
        bookingItem.value = doc.data()
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }


  // Count the number of bookings
  const countBookingsData = () => {
    
    onSnapshot(bookingDataRef, (snapshot) => {
      counter.value = snapshot.size
    })
  }


  // Adding Data to firebase
  const firebaseAddSingleItem = async() => {

    await addDoc(collection(db, "Bookings"), {
       clientdetails: {
        firstname: AddItemData.value.firstname,
        lastname: AddItemData.value.lastname,
        address: AddItemData.value.address,
        email: AddItemData.value.email,
        contactnumber: AddItemData.value.contactnumber
       },
       bookingdetails: {
        datetime: AddItemData.value.datetime,
        location: AddItemData.value.location,
        package: AddItemData.value.package,
        type: AddItemData.value.type,
        notes: AddItemData.value.notes
       },
       status: AddItemData.value.status,
    }).then(() => {
      snackbar.value = true
    })
  }

  return {
    bookings,
    counter,
    getBookingsData,
    AddItemData,
    snackbar,
    firebaseAddSingleItem,
    countBookingsData,
    bookingItem,
    getBookingItem
  }
}

export default useBookings