<template>
  <v-app>
    <v-container style="width:300px;margin-top:2rem;box-shadow:4px 2px 2px #8c7d7d94">
         <v-tabs>
          <v-tab @click="signIn = true">Sign Up</v-tab>
          <v-tab @click="signIn = false">Sign In</v-tab>
        </v-tabs>
        <div v-if="signIn" class="SignUp">
          <!-- <v-app> -->
            <h2>Sign Up</h2>
            <v-text-field v-model="email" label="Email"></v-text-field>

            <v-text-field v-model="password" type="password" label="Password"></v-text-field>

            <v-btn  small color="success" @click="signUp">Sign up</v-btn>

            <v-alert v-if="err" type="error" style="margin-top:1rem">{{errorMessage}}</v-alert>
            <!-- <v-alert type="error">Error </v-alert> -->

          <!-- </v-app> -->
        </div>

        <div v-else class="SignIn">
          <!-- <v-app> -->
            <h2>Sign In</h2>
            <v-text-field v-model="email" label="Email"></v-text-field>

            <v-text-field v-model="password" type="password" label="Password"></v-text-field>

            <v-btn  small color="primary" @click="signInMethod">Sign In</v-btn>

            <v-alert v-if="err" type="error" style="margin-top:1rem">{{errorMessage}}</v-alert>
            <!-- <v-alert type="error">Error </v-alert> -->

          <!-- </v-app> -->
        </div>

    </v-container>
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.css';

//import
import firebase from 'firebase'

// get your config from fireabse website
var firebaseConfig = {
    apiKey: "XXXX",
    authDomain: "XXXX",
    databaseURL: "XXXX",
    projectId: "XXXX",
    storageBucket: "XXXX",
    messagingSenderId: "XXXXX",
    appId: "XXXXX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default {

  data(){
    return {
       email : '',
       password :'',
       err :false,
       errorMessage : null,
       signIn : true
    }
  },
  watch : {
    signIn(){
      this.email = "",
      this.password = "";
      this.err = false,
      this.errorMessage = null
    },
    email(){
      this.err = false,
       this.errorMessage= null
    },
    password(){
      this.err = false,
       this.errorMessage= null
    }
  },  
  methods : {
    signUp(){
      
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(response => {
        this.err = false
        this.errorMessage = null
        console.log("response",response)
      })
      .catch((error) =>  {
        this.err = true
        this.errorMessage = error.message
        console.log("error",error)
      });
    },
    signInMethod(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(response =>{
        this.err = false
         console.log("response",response)
      })
      .catch((error) => {
        this.err = true
        this.errorMessage = error.message
    });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.SignUp, .SignIn{
  box-shadow: 2px 2px 2px #fff;
  border :1px solid #fff;
  padding:2rem;
  background :#fff
}
</style>
