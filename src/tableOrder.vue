<template>
  <div id="table">
      <center>
        <h2 class="text" style="color: #a3816a">Order of : {{ $store.getters.collect.name }} </h2>
      <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Pattern</th>
          <th scope="col">Size</th>
          <th scope="col">Color</th>
          <th scope="col">Amount</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody v-if="this.$store.getters.get">
        <tr v-for="(product, index) in this.$store.getters.get" v-bind:key="index">
          <th scope="row">{{ index+1 }}</th>
          <td>{{ product.pattern }}</td>
          <td>{{ product.size }}</td>
          <td>{{ product.color }}</td>
          <td>{{ product.amount }}</td>
          <td>
            <button type="button" class="btn btn-default btn-sm" @click="deleteOrder(index)">
              <img src="@/assets/bin.png" width="30" height="30">
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <b-button variant="success" @click="addDelivery()">save</b-button>
  </div>
  </center>
  </div>
</template>

<script>
export default {
  methods: {
    check() {
      /* eslint-disable */
      console.log($store.getters.get.pattern);
    },
    deleteOrder(index){
        this.$store.getters.get.splice(index, 1);
    },
    addDelivery() {
        this.$router.push('/Delivery')
    }
  }
};
</script>

<style>
.container{
    width: 1000px;
}

.table td {
    padding: 0.75rem;
    vertical-align: middle;
    border-top: 1px solid #000;
    background-color: #fdfdf6;
}

.table th {
  padding: 0.75rem;
    /* vertical-align: top; */
    border-top: 1px solid #dee2e6;
}
.table thead th {
    padding: 20px;
    vertical-align: bottom;
    border-bottom: 2px solid #324557;
    background-color: #b8b2a6;
}

</style>