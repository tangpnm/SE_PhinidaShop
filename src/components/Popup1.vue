<template>
  <div id="popup1" class="popup1">
    <v-dialog v-model="dialog" max-width="50%">
      <v-btn flat slot="activator" class="success">Add new customer</v-btn>
      <v-card>
        <v-card-title>
          <addCustomer/>
          <v-btn flat @click="dialog = false" class="colorClose" xs12 sm4 text-xs-center style="right: 0; top: 0; position: absolute; width: 10%"> &times; </v-btn>
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import addCustomer from "./addCustomer.vue";

export default {
  data() {
    return {
      dialog : false
    }
  },
  components: {
    addCustomer
  }
};
</script>

<style>
.v-dialog {
  width: 40% !important
}

.colorClose {
  background-color: #ffffff !important
} 

.v-btn-content {
  color: aliceblue;
}
</style>
