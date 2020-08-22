<template>

<div class="container">
    <center><h3>Order List</h3></center>
    <br>
    <b-table striped hover :items="items"></b-table>
    <div class="blockSize" >
    <label for="exampleInputEmail1">Deliverly :</label>
            
    </div>
    <br>
    <v-flex>
      <pdf/>
    </v-flex>
  </div>
</template>

<script>
import pdf from './components/pdfFile.vue'

 export default {
    name: "Finish",
    components: {
        pdf
    },
    data() {
      return {
        items: [
          { Pattern: 'B2', Size: 'S', Color: 'Blue', Amount: 10},
          { Pattern: 'B1', Size: 'L', Color: 'Red', Amount: 5},
        ]
      }
    }
  }
</script>

<style>
.blockSize{
    width: 30%;
}
.blockButton{
  padding: .1rem 1rem;
  width: 50%;
}
</style>