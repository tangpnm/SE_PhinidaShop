<template>
    <div class="container">
      
      <div id="table">
        <h5>Name:   {{ $store.getters.collect.name }}</h5>
        <h5>Address: {{ $store.getters.collect.address }} </h5>
        <h5>Phone number: {{ $store.getters.collect.phone }} </h5>
        <br><br><br>
        <center>
          <h5> Your order list </h5>
        </center>
        <br><br>
        
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Pattern</th>
              <th scope="col">Size</th>
              <th scope="col">Color</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody v-if="this.$store.getters.get">
            <tr v-for="(product, index) in this.$store.getters.get" v-bind:key="index">
              <th scope="row">{{ index+1 }}</th>
              <td>{{ product.pattern }}</td>
              <td>{{ product.size }}</td>
              <td>{{ product.color }}</td>
              <td>{{ product.amount }}</td>
            </tr>
          </tbody>
        </table>
        <div class="blockSize">
          <label for="exampleInputEmail1">Deliverly</label>
          <select class="browser-default custom-select">
            <option disabled value>Please select one</option>
            <option>Pick up</option>
            <option>Deliverly</option>
          </select>
        </div>
      </div>
       
       <div class="containner">
         <router-link to="home"><b-button> edit order </b-button></router-link>
          <finishOrder/>
       </div>
    
 </div>
</template>

<script>
import firebase from "firebase";
import finishOrder from "./components/completeBox.vue";
export default {
  name: "Delivery",
  components: {
    finishOrder
  },
  data() {
    return {};
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
        customer.orderByChild("order").push({
          name: this.$store.getters.collect.name,
          pattern: dbPattern,
          color: dbColor,
          size: dbSize,
          amount: dbAmount,
          date: x.toDateString()
        });
      }
    }
  }
};
</script>

<style>
.blockSize {
  width: 30%;
}
.blockButton {
  padding: 0.1rem 1rem;
  width: 35%;
}
</style>