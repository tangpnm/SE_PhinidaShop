<template>
  <div class="login">
    <form>
      <br>
      <br>
      
      <center>
        <img alt="Vue logo" src="./assets/Logover3_0.png" height="200" width="200">
      </center>
      <br>

      <center>
        <h4>Your Password</h4>
      </center>
      <br>

      <center>
        <b-col sm="4">
          <b-form-input id="password" type="password" v-model="password" placeholder="password"></b-form-input>
        </b-col>
      </center>
      <br> 
   
    <center>
    <div class="col-md-4">
        <b-button variant="info" type="submit" id="login" name="login" @click='checkPassword(password)'>Login</b-button>
      </div>
      </center>

   </form>
   </div>
</template>

<script>
/* eslint-disable */

import firebase from "@/service/database.js";

export default {
  data() {
    return {
      password: ""
    };
  },
  methods: {
    checkPassword(password) {
      console.log("ffff");
      console.log(this.password);
      var email = "phinidashop@gmail.com";

      let result = firebase.signIn(email, this.password)

      if(result.message){
        this.error = result.message;
        console.log("ggg");
      }else if(this.password == ""){
        alert("put your password");
      } else {
        alert('User is signed in!')
        this.$router.push('/home')
      }
    }
  }
}
</script>

<style>
button {
  width: 50%;
  margin: auto;
  right: 25%;
}
.foot{
  height: 120px;
}
</style>



