<template>
<div class="container">
  <div id="popup3">
      <v-dialog max-width="50%">
      <br>
      <center><h4>Finish this order</h4></center>
      <br>
      <v-btn flat slot="activator" @click="finishOrder()" style="width: 20%">finish</v-btn>
      <addPDF/>
      <div class="box">
        </div>
      </v-dialog>
 
  </div>
  </div>
</template>

<script>
import addPDF from "./pdfFile.vue";
import firebase from "firebase";

export default {
  // name: popup,
  components: {
    addPDF
  },
  methods: {
    finishOrder() {
      var x = new Date();
      x.toDateString();

      for (let index = 0; index < this.$store.getters.get.length; index++) {
        let dbPattern = this.$store.getters.get[index].pattern;
        let dbColor = this.$store.getters.get[index].color;
        let dbSize = this.$store.getters.get[index].size;
        let dbAmount = this.$store.getters.get[index].amount;

        let customer = firebase.database().ref("Customer");
        customer.child("order").push({
          name: this.$store.getters.collect.name,
          pattern: dbPattern,
          color: dbColor,
          size: dbSize,
          amount: dbAmount,
          date: x.toDateString()
        });
      }
    }
  },
};
</script>

<style>
.popup3 {
  background: blue;
}
.box {
  height: 50px;
}
.popup33 {
  background: #66cccc;
  width: 0%;
}
</style>
