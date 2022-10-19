import {ref } from 'vue'
import {collection, onSnapshot, addDoc, doc, getDoc, updateDoc, deleteDoc} from 'firebase/firestore';
import {db} from '../firebase.js'
import { useRouter } from 'vue-router';

const useBookings = () => {
  const bookings = ref([])
  const bookingItem = ref({})
  const router = useRouter()
  let counter = ref(0)
  let eventCtr = ref(0)
  let outdoorCtr = ref(0)
  let holidayCtr = ref(0)
  const bookingDataRef = collection (db, "Bookings");

  const AddItemData = ref({})
  let snackbar = ref(false)

  // Retrieve data from firebase
  const getBookingsData = () => {
    console.log("getBookingsData")
    onSnapshot(bookingDataRef, (snapshot) => {
      bookings.value = snapshot.docs.map(doc => {
        console.log("Doc Data",doc.data())
        if(doc.data().bookingdetails.type == "Event"){
          eventCtr.value++
        }else if(doc.data().bookingdetails.type == "Outdoor Portrait"){
          outdoorCtr.value++
        }else if(doc.data().bookingdetails.type == "Holiday"){
          holidayCtr.value++
        }
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
        console.log("Document data:", bookingItem.value);
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
      router.push("/bookings")
    })
  }

  const firebaseUpdateSingleItem = async(id) => {
    console.log("firebaseUpdateSingleItem ID:", id)
    console.log("Booking Item Date: ", bookingItem.value)
    console.log("firebaseUpdateSingleItem Data:", bookings.value.find(item => item.id === id))
    await updateDoc(doc(bookingDataRef, id),{
      
      clientdetails: {
        firstname: bookingItem.value.clientdetails.firstname,
        lastname: bookingItem.value.clientdetails.lastname,
        address: bookingItem.value.clientdetails.address,
        email: bookingItem.value.clientdetails.email,
        contactnumber: bookingItem.value.clientdetails.contactnumber
        },
        bookingdetails: {
          datetime: bookingItem.value.bookingdetails.datetime,
          location: bookingItem.value.bookingdetails.location,
          package: bookingItem.value.bookingdetails.package,
          type: bookingItem.value.bookingdetails.type,
          notes: bookingItem.value.bookingdetails.notes
        },
      status: bookingItem.value.status,

    }).then(() => { 
      snackbar.value = true
      router.push("/bookings")
    })
  }

  const firebaseDeleteSingleItem = async(id) => {
    await deleteDoc(doc(bookingDataRef, id)).then(() => {
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
    getBookingItem,
    firebaseUpdateSingleItem,
    firebaseDeleteSingleItem,
    eventCtr,
    outdoorCtr,
    holidayCtr
  }
}

export default useBookings