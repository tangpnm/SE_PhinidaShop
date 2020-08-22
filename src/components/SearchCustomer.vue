<template>
  <div class="oldCustomer">
    <form>
      <div class="searchInfo">
        <b-form-input
          size="sm"
          class="mr-sm-2"
          placeholder="Search"
          v-model="search"
          autocomplete="off"
        ></b-form-input>
        <div class="list-group cursor">
          <li v-for="customer in selectedCustomer" :key="customer.name">
            <a class="list-group-item" @click="showProfile(customer)">{{ customer.name }}</a>
          </li>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

/* eslint-disable */
import firebase from "firebase";
import { VueAutosuggest } from "vue-autosuggest";

export default {
  // props: ["Profile"],
  name: "Customer",
  components: {
    VueAutosuggest
  },
  data() {
    return {
      search: "",
      Customer: [],
      newCus: "",
      selectedCustomer: new Set([]),
      selected: '',
      profile: [],
      ordered: [],
      getOrder: []
    };
  },
  methods: {
    addNewCustomer() {
      firebase
        .database()
        .ref("Customer")
        .push({ name: this.newCus });
      this.newCus = "";
      // /* eslint-disable */
      //     console.log(this.search);
    },
    showProfile: function(customer) {
      /* eslint-disable */
      //console.log(customer.name);
      let cus = firebase.database().ref("Customer")
      cus.orderByChild('name').equalTo(customer.name)
      .on('child_added', snapshot => {
        let val = snapshot.val();
        
        this.$store.commit('select', val);

        console.log(this.$store.getters.customer.order)
        this.profile.push(val);
        this.selectedCustomer = [];

        // let valOrder = snapshot.val();
        // // console.log(val)
        // this.$store.commit('selectOld', valOrder);
        // console.log(this.$store.getters.Order)
        // this.ordered.push(valOrder);
      });

      // console.log("ffff");
      // console.log(this.profile);
      
      firebase.database().ref("Customer/order").orderByChild('name').equalTo(customer.name)
      .on('child_added', snapshot => {
        let valOrder = snapshot.val();
        if (customer.name === valOrder.name) {
          this.getOrder.push(valOrder)
          
          console.log("sf")
          console.log(this.$store.getters.Order)
          // this.ordered.push(valOrder);
        }
      });
      console.log(this.getOrder)
        this.$store.commit('selectOld', this.getOrder);
      // return;
      /* eslint-disable */
      // console.log(this.ordered);
      this.$router.replace('CustomerInfo');

    },
  },
  watch: {
    search(newVal) {
      if (newVal == "") {
        this.selectedCustomer = [];
        // return;
      } else {
        let vue = this;
        let mRootRef = firebase.database().ref("Customer");
        let x = mRootRef
          .orderByChild("name")
          .startAt(newVal)
          .endAt(newVal + "\uf8ff")
          .limitToFirst(5)
          .once("value", function(snapshot) {
            if(vue.search != "") {
              vue.selectedCustomer = snapshot.val();
            }
          });
      }
    }
  },
  created () {
    
  }
};
</script>

<style>
.oldCustomer {
  width: 100%;
  height: 50%;
}
.searchInfo {
  width: 105%;
  height: 10px;
  padding: 0.5rem 1rem
}
.cursor{
  cursor: pointer;
}
.list-group {
  position: absolute;
}

</style>