<template>
  <div class="addCustomer">
              <h4>Add Profile of Customer</h4>
            <br>
            <!-- <span class="close">&times;</span> -->

              <h6>Name: </h6><b-form-input size="sm" class="mr-sm-7 addInfo" type="text" placeholder="Name" v-model="newName"></b-form-input><br>
              <h6>Address: </h6><b-form-input size="sm" class="mr-sm-2 addInfo" type="text" placeholder="Address" v-model="newAddress"></b-form-input><br>
              <h6>Telephone: </h6><b-form-input size="sm" class="mr-sm-2 addInfo" type="text" placeholder="Phone number" v-model="newPhone"></b-form-input><br>

              <b-button variant="info" class="sizeButton"   @click ="addNewCustomer()">
                Add customer
              </b-button>
  
  </div>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";

export default {
  name: "addCustomer",
  components: {},
  data() {
    return {
      newName: "",
      newAddress: "",
      newPhone: "",
      haveCustomer: [],
      value: ""
    };
  },
  created() { },
  methods: {
    addNewCustomer() {
      firebase
        .database()
        .ref("Customer")
        .orderByChild("name")
        .equalTo(this.newName)
        .on("child_added", snapshot => {
          console.log("bbb");
          this.value = snapshot.val();
          console.log(this.value.name);
        });
      console.log("nameofcus");
      console.log(this.value.name);
      if (this.newName == "" || this.newAddress == "" || this.newPhone == "") {
        alert("you forget something, please check again!!");
      } else if (this.value.name == this.newName) {
        alert("คุณเคยเพิ่มชื่อนี้ลงไปแล้ว");
      } else {
        firebase
          .database()
          .ref("Customer")
          .push({
            name: this.newName,
            address: this.newAddress,
            phone: this.newPhone
          });
        alert("add customer done.");
      }

      // firebase
      //   .database()
      //   .ref("Customer")
      //   .on("child_added", snapshot => {
      //     let value = snapshot.val();
      //     if (
      //       this.newName == "" ||
      //       this.newAddress == "" ||
      //       this.newPhone == ""
      //     ) {
      //       alert("you forget something, please check again!!");
      //     // } else if (value.name == this.newName) {
      //     //   alert("put again");
      //     } else {
      //       firebase
      //         .database()
      //         .ref("Customer")
      //         .push({
      //           name: this.newName,
      //           address: this.newAddress,
      //           phone: this.newPhone
      //         });
      //       alert("add customer done.");
      //     }
      //   });
    }
  }
};
</script>

<style>
.sizeButton {
  width: 50%;
}
.addInfo {
  width: 300%;
  height: 30px;
}
.btn-info {
  width: 50%
}
</style>