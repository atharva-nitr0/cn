// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd-B7BIAIS6UAAXCjMo79PV-aJMgPeWYU",
  authDomain: "pet-care-online.firebaseapp.com",
  databaseURL: "https://pet-care-online-default-rtdb.firebaseio.com",
  projectId: "pet-care-online",
  storageBucket: "pet-care-online.appspot.com",
  messagingSenderId: "962181494341",
  appId: "1:962181494341:web:a7eb82e984402fdeb6d52c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database under "bookingForm"
var bookingFormDB = firebase.database().ref("bookingForm");

// Add event listener to the booking form
document.getElementById("bookingForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get form values
  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var reservationDate = getElementVal("reservationDate");
  var reservationTime = getElementVal("reservationTime");
  var service = getElementVal("service");

  // Log the values to the console
  console.log("Name: " + name);
  console.log("Email ID: " + emailid);
  console.log("Reservation Date: " + reservationDate);
  console.log("Reservation Time: " + reservationTime);
  console.log("Service: " + service);

  // Save the booking details to Firebase
  saveMessages(name, emailid, reservationDate, reservationTime, service);

  // Show success alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("bookingForm").reset();
}

// Function to save the booking details to Firebase
const saveMessages = (name, emailid, reservationDate, reservationTime, service) => {
  var newBookingForm = bookingFormDB.push();
  
  newBookingForm.set({
    name: name,
    emailid: emailid,
    reservationDate: reservationDate,
    reservationTime: reservationTime,
    service: service,
  });
};

// Function to get form values
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
