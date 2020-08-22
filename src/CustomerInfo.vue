<template>
  <div id="Profile">
    <div class="container">
      <div class="container">
        <!-- <h1>User with id {{profile}}</h1> -->
        <h5>Name: {{ $store.getters.customer.name }}</h5>
        <h5>Address: {{ $store.getters.customer.address }}</h5>
        <h5>Telephone: {{ $store.getters.customer.phone }}</h5>
      </div>

      <center>
        <h3>Order List</h3>
      </center>

      <br>
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
        <tbody v-if="this.$store.getters.Order">
          <tr v-for="(o, index) in this.$store.getters.Order" v-bind:key="index">
            <td>{{ index+1 }}</td>
            <td>{{ o.pattern }}</td>
            <td>{{ o.size }}</td>
            <td>{{ o.color }}</td>
            <td>{{ o.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Profile",
  //  props: ["profile"],
  data() {
    return {
      peopleArray: []
    };
  },
  mounted() {},
  created() {
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