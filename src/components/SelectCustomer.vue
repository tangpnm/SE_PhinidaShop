<template>
  <div id="selectCustomer">
    <!-- <v-select :options="options" label="nrame"> -->
    <center>
      <div class="sizeCustomer">
        <vue-select :options="customers" label="name" v-model="orderCustomer">
          <template slot="option" slot-scope="option">{{ option.name }}</template>
        </vue-select>
      </div>
    </center>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";

export default {
  name: "Custo",
  components: {},
  data() {
    return {
      customers: [],
      selectedCustomer: null,
      orderCustomer: "",
      named: ""
    };
  },
  methods: {},
  watch: {
    orderCustomer(newVal) {
      this.$store.commit("word", newVal);
      this.named = newVal;
      // console.log("wow");
      // console.log(this.named);
      // console.log(newVal);

      /* eslint-disable */
      firebase
        .database()
        .ref("Customer")
        .orderByChild("name")
        .equalTo(newVal.name)
        .on("child_added", snapshot => {
          let pdfValue = snapshot.val();
          this.$store.commit("pdfDetail", pdfValue);

          // console.log(pdfValue);
        });
    }
  },
  created() {
    firebase
        .database()
        .ref("Customer").limitToFirst(10)
        .on("child_added", snapshot => {
          let value = snapshot.val();
          this.customers.push(snapshot.val());
        });
  }
};
</script>

<style>
.oldCustomer {
  width: 100%;
  height: 50%;
}
.searchInfos {
  width: 80%;
  height: 10px;
}
.sizeCustomer {
  width: 50%;
}
</style>