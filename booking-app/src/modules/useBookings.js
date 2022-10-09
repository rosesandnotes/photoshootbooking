import {ref } from 'vue'
import {collection, onSnapshot} from 'firebase/firestore';
import {db} from '../firebase.js'

const useBookings = () => {
  const bookings = ref([])
  const bookingDataRef = collection (db, "Bookings");
  
  const getBookingsData = () => {
    onSnapshot(bookingDataRef, (snapshot) => {
      bookings.value = snapshot.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
    })
  }

  return {
    bookings,
    getBookingsData
  }
}

export default useBookings