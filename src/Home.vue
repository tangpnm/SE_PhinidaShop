<template>
  <div id="home" class="home">
    <div class="mainAddOrder">
      <!-- <addCustomer/> -->
      <div class="container">
        <br>
      <center>
        <h2>Order product</h2>
      </center>
      <br>
      <customerSelect/>
      <br>
        <div class="my-custom-scrollbar my-custom-scrollbar-primary">
          <center>
            <div class="card-deck">
              <div class="row">
                  <div v-for="pattern in patterns" :key="pattern.title" :class="{active:pattern.active}" class="col-4">
                    <button class="patternnn" @click="selectPattern(pattern)">
                      <img class="card-img-top" :src="pattern.image">
                      <div class="overlay" >
                        <div class="items"></div>
                        <div class="items head">
                          <p>{{pattern.title}}</p>
                          <hr>
                        </div>
                        <div class="items detail">
                          <p class="new"> {{pattern.detail}} </p>
                        </div>
                      </div>
                      <div class="overlay_check d-flex align-items-center">
                        <div class="check">
                          <img src="@/assets/check2.png" width="100" height="100">
                        </div>
                      </div>
                    </button>
                    <!-- <popupPattern/> -->
                  </div>
              </div>
            </div>
          </center>
          <br>
          <br>
          <br>
          <!-- <div class="container" v-if=" $store.getters.get">
              <tableOrder/>
          </div>-->
        </div>
      </div>
      <div class="container">
        <center>
        <h2>Item</h2>
        </center>
        <div class="btn-group box" id="item" role="group" aria-lable="Basic example">
          <div class="blockSize">
            <label for="exampleInputEmail1">Color</label>
            <select class="browser-default custom-select" v-model="selectedColor">
              <!-- Color:
              <select v-model="selectedColor">-->
              <option disabled value>Please select one</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
            <!-- <span>Selected: {{ selectedColor }}</span> -->
          </div>

          <div class="patternn">
            <label for="exampleInputEmail1">Size</label>
            <select class="browser-default custom-select" v-model="selectedSize">
              <option disabled value>Please select one</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>

            <!-- <span>
              <br>
              Selected: {{ selectedSize }}
            </span> -->
          </div>

          <div class="pattern">
           <label> Amount </label><br>
           <input type="number" name="counter" value="0" v-model="counter"><br>
          </div>
        </div>
        <div class="d-flex justify-content-center add_button">
          <b-button v-if="savebtn" @click="addOrder()" class="addBtn">Add order</b-button>
        </div>
      </div>
      <div class="container" v-if=" $store.getters.get">
        <tableOrder/>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import customerSelect from "./components/SelectCustomer.vue";
import tableOrder from "./tableOrder.vue";

export default {
  name: "home",
  components: {
    // addCustomer,
    customerSelect,
    tableOrder
    // popupPattern
  },
  data() {
    return {
      image: [],
      patterns: [],
      selectedColor: "",
      selectedSize: "",
      counter: 0,
      //selectedPattern: "",
      selectedPattern: null,
      orders: [],
      newOrder: [],
      errorMsg: false,
      successMsg: false,
      showDeleteModel: false,
      newNum: "",
      savebtn: true,
      parsedobj: []
    };
  },
  methods: {
    selectPattern(pattern) {
      //this.selectedPattern = pattern.title;
      //pattern.active = true;

      // if there is an old one -> de-activate
      if (this.selectedPattern)
        this.selectedPattern.active = false;
      
      // make activate the new one
      this.selectedPattern = pattern;
      pattern.active = true;
    },

    addOrder: function() {
      this.orders.push({
        id: this.newNum,
        pattern: this.selectedPattern.title,
        color: this.selectedColor,
        size: this.selectedSize,
        amount: this.counter
      });

      /* eslint-disable */
      this.$store.commit("chooseOrder", this.orders);
      console.log(this.orders);
      this.clear();

      var result = Object.values(this.orders);
      var result1 = Object.values(result);
      /* eslint-disable */
      console.log(result1[0]);
    },

    clear: function() {
      this.savebtn = true;
      this.newNum = "";
      this.selectedPattern.active = false;
      this.selectedPattern = null;
      this.selectedColor = "";
      this.selectedSize = "";
      this.counter = 0;
    },
    increment() {
      this.counter++;
    }
  },
  created() {
    firebase
      .database()
      .ref("Pattern")
      .on("child_added", snapshot => {
        this.patterns.push(snapshot.val());
      });
  },
  computed: {
    dis: function() {
      if (
        (this.selectedPattern == null ||
          this.selectedColor == "" ||
          this.selectedSize == "",
        this.selectedSize || this.counter == 0)
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

.menu {
  width: 100%;
  background: #673ab7;
  overflow: auto;
}

.menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 60px;
}

.menu li {
  float: left;
}

.menu ul li a {
  background: #d2f3e0;
  text-decoration: none;
  width: 130px;
  display: block;
  text-align: center;
  color: #f2f2f2;
  font-size: 18px;
  font-family: sans-serif;
  letter-spacing: 0.5px;
}

.menu li a:hover {
  color: #fff;
  opacity: 0.5;
  font-size: 19px;
}

.search-form {
  float: right;
  background: white;
  margin-right: 100px;
}

input[type="text"] {
  padding: 7px;
  border: none;
  font-size: 16px;
  font-family: sans-serif;
}

button {
  float: right;
  /* background: orange; */
  color: white;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  position: relative;
  padding: 7px;
  font-family: sans-serif;
  border: none;
  font-size: 16px;
}
.blockSize {
  width: 30%;
}

.card-deck {
  width: 80%;
  max-height: 400px;
  overflow: auto;
}
.pattern {
  padding: 1rem 1rem;
}
.buttonSize {
  width: 140%;
}
.buttonsSize {
  width: 180%;
}
.patternnn {
  position: relative;
  padding: 0mm 2rem;
}

.card-img-top {
  display: block;
  height: 270px;

  object-fit: cover;
  object-position: 50%;
}

.overlay {
  position: absolute;
  bottom: 0;
  /* background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); Black see-through */
  color: #f1f1f1;
  width: 70%;
  /* transition: 0.5s ease; */
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 15px;
  text-align: center;
  /* z-index: 2; */
  cursor: pointer;
}

.patternnn .overlay {
  opacity: 0;
}

.card-deck button.patternnn:hover .overlay {
  opacity: 1;
}

.mainAddOrder .container {
  background-color: #4c4646;
  border-radius: 20px;
  margin-top: 40px;
  color: #fff;
}

.mainAddOrder #table .container, .mainAddOrder .container:nth-child(3) {
  background-color: transparent !important;
}

.mainAddOrder .container:nth-child(2) {
  padding-bottom: 60px;
  /* margin-bottom: 40px; */
}

.mainAddOrder .pattern {
  padding: 0 !important;
}

.mainAddOrder #item {
  display: flex;
  justify-content: space-between;
  padding: 0 45px;
  margin-top: 35px;
  margin-bottom: 60px;
}

.add_button button {
  width: 220px !important;
}

.add_button {
  padding: 0 35%;
}

.pattern input[name="counter"] {
  height: 33.5px;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 4px;
}

.sizeCustomer .vs__dropdown-toggle {
  border: 1px solid #fff !important;
}

.vs__open-indicator {
  fill: #7d7d7d !important;
}

.card-deck {
  overflow-x: hidden;
  max-height: 240px;
  margin-top: 40px;
}

.card-deck button.patternnn {
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
}

.card-img-top.active {
  border: 5px solid ;
}

button.patternnn {
  outline: none !important;
}

.overlay {
  width: 100%;
  height: 100%;
  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  
  /* background: rgba(77, 77, 77, .9); */
  background: #dad3ba;
  color: #FEF5DF;
  opacity: 0;
  transition: all 0.5s;
  
  font-family: 'Playfair Display', serif;
}

.items {
  letter-spacing: 3px;
}

.head {
  font-size: 30px;
  line-height: 40px;
  
  transform: translateY(40px);
  transition: all 0.7s;
}

.head.hr {
  display: block;
    width: 0;
    
    border: none;
    border-bottom: solid 2px #FEF5DF;
    
    position: absolute;
    bottom: 0; left:20px;
    
    transition: all .5s;
}

.price {
  font-size: 22px;
  line-height: 10px;
  font-weight: bold;  
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.7s;
}

.card-deck button.patternnn:hover .overlay.head {
    transform: translateY(0px);
}

.card-deck button.patternnn:hover .overlay hr {
    width: 75px;
    transition-delay: 0.4s;
}

.card-deck button.patternnn:hover .overlay.price {
    transform: translateY(0px);
    transition-delay: 0.3s;
    opacity: 1;
}

.overlay_check {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #d2f3d2;
  top: 0;
  left: 0;
  opacity: 0;
}

.active .overlay_check {
  opacity: .8;
}

.btn.addBtn.btn-secondary {
  background-color: #2B547E;
} 

.vs--searchable .vs__dropdown-toggle {
    cursor: text;
    background-color: #fff;
}

.table-striped tbody tr {
  background-color: #fdfdf6 !important;
}

.table th, .table td {
  text-align: center;
  vertical-align: middle !important;
}

.table td:last-child() {
  display: flex;
  justify-content: center;
}

.vs__open-indicator {
  cursor: pointer;
}
</style>