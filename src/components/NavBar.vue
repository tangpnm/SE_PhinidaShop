<template>
  <!-- <h1>{{ this.$route.name }}</h1> -->
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav >
          <a href="Home"><img src="@/assets/Logover3_0.png" height="40" width="40"></a>
           <!-- <router-link to="home" @click="refresh();"></router-link>       -->
            <popup1/>
            <popup2/>
          <br>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <customer/>

          <div class="d-inline-block">
          </div>

          <v-flex>
            <template v-if="currentUser">
              <v-btn href="login" flat slot="activator" @click="signOut" class="success">sign out</v-btn>
            </template>
          </v-flex>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import database from "@/service/database.js";
import popup1 from "./Popup1.vue";
import popup2 from "./Popup2.vue";
import customer from "./SearchCustomer.vue";
// import pdf from './pdfFile.vue'

export default {
  name: "navbar",
  components: {
    popup1,
    popup2,
    customer
    // pdf
  },
  data() {
    return {};
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    }
  },
  methods: {
    async signOut() {
      await database.signOut();

      this.$router.push("/login");
    },
    refresh() {
      //  this.$store.getters.collect = '';
      //  this.$store.getters.get = '';
    }
  }
};
</script>

<style>
.navbar-expand-lg {
  background-color: #4c4646;
}
.logout {
  padding: 0.1rem 1rem;
}
.d-inline-block {
  padding: 0.5rem 1rem;
}
.button {
  width: 25%;
}
.space {
  width: 25%;
}
.navbar-nav a[href="/home"] {
  display: flex;
  align-items: center;
}
.navbar-nav {
  width: 50% !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.v-dialog__container .v-dialog__activator {
  width: 100%;
  height: 100%;
}
.v-dialog__container .v-dialog__activator button {
  width: 100% !important;
}
.searchInfo {
  height: auto !important;
}
.oldCustomer {
  display: flex;
  justify-content: flex-end;
}
.list-group.cursor {
  width: 100%;
  padding: 0.5rem 1rem;
  top: 33px;
  right: 0;
}
.searchInfo {
  position: relative;
}

</style>
