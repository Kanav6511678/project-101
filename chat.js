// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBafLWsYb7T_LPZ6_iiyzyBtdhatRgAHWw",
    authDomain: "letschat-web-app---part-12c14.firebaseapp.com",
    databaseURL: "https://letschat-web-app---part-12c14-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app---part-12c14",
    storageBucket: "letschat-web-app---part-12c14.appspot.com",
    messagingSenderId: "296989056376",
    appId: "1:296989056376:web:7c8fff9888e012a7457c8d"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome"+user_name+"!";

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
   localStorage.setItem("user_name" , user_name);

    window.location = "chat_room.hyml";
   
}



