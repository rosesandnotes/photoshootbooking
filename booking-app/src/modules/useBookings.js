import {ref} from 'vue'
import {collection, onSnapshot, addDoc, doc, getDoc, updateDoc, deleteDoc, query, where, getDocs} from 'firebase/firestore';
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
  let bookingPending = ref([])
  let bookingConfirmed = ref([])
  let bookingCancelled = ref([])
  const filterStatus = ref("All")
  let filteredBookings = ref([])

  const AddItemData = ref({})
  let snackbar = ref(false)
  let snackbarText = ref('')

  // Retrieve data from firebase
  const getBookingsData = () => {
    // console.log("getBookingsData")
    onSnapshot(bookingDataRef, (snapshot) => {
      bookings.value = snapshot.docs.map(doc => {
        // console.log("Doc Data",doc.data())
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
      filteredBookings.value = {
        ...bookings.value,
        id: bookings.value.id
      };
    })
  }

  const getBookingItem = (id) => {
    // console.log("getBookingItem")
    const bookingItemRef = doc(db, "Bookings", id);
    getDoc(bookingItemRef).then((doc) => {
      if (doc.exists()) {
        bookingItem.value = doc.data()
        // console.log("Document data:", bookingItem.value);
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
      snackbarText.value = "Booking Added Successfully"
      router.push("/bookings")
    })
  }

  const firebaseUpdateSingleItem = async(id) => {
    // console.log("firebaseUpdateSingleItem ID:", id)
    // console.log("Booking Item Date: ", bookingItem.value)
    // console.log("firebaseUpdateSingleItem Data:", bookings.value.find(item => item.id === id))
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
      snackbarText.value = "Booking Updated Successfully"
      router.push("/bookings")
    })
  }

  const firebaseDeleteSingleItem = async(id) => {
    await deleteDoc(doc(bookingDataRef, id)).then(() => {
      snackbar.value = true
      snackbarText.value = "Booking Deleted Successfully"
      location.reload()
    })
  }

  const getBookingsStatus = async (status) => {
    filterStatus.value = status
    bookingPending.value = []
    bookingConfirmed.value = []
    bookingCancelled.value = []
    console.log("getBookingItem")
    const bookingStatusRef = query(bookingDataRef, where("status", "==", status));
    const querySnapshot = await getDocs(bookingStatusRef);
    querySnapshot.forEach((doc) => {
      switch(doc.data().status){
        case 'Pending':
          bookingPending.value.push({...doc.data(), id: doc.id})
          break;
        case 'Confirmed':
          bookingConfirmed.value.push({...doc.data(), id: doc.id})
          break;
        case 'Cancelled':
          bookingCancelled.value.push({...doc.data(), id: doc.id})
          break;
      }
    });
  }

  const getFilteredBookings = (status) => {
    if(status != "All"){
      getBookingsStatus(status)
    }
    switch(status){
      case 'Pending':
        console.log("Pending")
        filteredBookings.value = bookingPending.value
        break;
      case 'Confirmed':
        console.log("Confirmed")
        filteredBookings.value = bookingConfirmed.value
        break;
      case 'Cancelled':
        console.log("Cancelled")
        filteredBookings.value = bookingCancelled.value
        break;
      default:
        console.log("All")
        getBookingsData();
        break;
    }
  }

  return {
    bookings,
    counter,
    getBookingsData,
    AddItemData,
    snackbar,
    snackbarText,
    firebaseAddSingleItem,
    countBookingsData,
    bookingItem,
    getBookingItem,
    firebaseUpdateSingleItem,
    firebaseDeleteSingleItem,
    eventCtr,
    outdoorCtr,
    holidayCtr,
    getBookingsStatus,
    bookingPending,
    bookingConfirmed,
    bookingCancelled,
    filterStatus,
    getFilteredBookings,
    filteredBookings
  }
}

export default useBookings