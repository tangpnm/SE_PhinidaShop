<template>
  <div id="app" class="app">
    <template v-if="!currentUser">
    </template>
    <NavBar v-if='currentRoute && !routesWithNoNav.includes(currentRoute)'/>
    <router-view/> <!-- ห้ามเอาออก!! เอาไว้โหลดหน้าอื่นมาแสดง -->
  </div>
</template>

<script>
/* eslint-disable */
import NavBar from '@/components/NavBar.vue'
import database from '@/service/database.js'

export default {
    name: 'app',
    components: {
      NavBar,
    },
    computed: {
      currentUser () {
        return this.$store.state.currentUser
      },
    },
    data() {
      return {
        currentRoute: '-',

        routesWithNoNav: [
          'Login'
        ],
      }
    },
    watch:{
      $route (to, from){
        this.currentRoute = to.name.toString()
      },
      currentRoute(newVal) {
        console.log(newVal)
      }
    },
    created() {
      // console.log('created!!')
      this.currentRoute = this.$route.name.toString()
      // console.log(this.$route.name)
    },
    methods: {
      async signOut() {
        await database.signOut()
      }
      
    },
}
</script>

<style>
.v-dialog {
  background-color: #ffffff;
}
</style>
