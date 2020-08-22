<template>
    <v-dialog v-model="di" max-width="600px">
        <v-btn flat slot="activator" class="success"> Add new pattern </v-btn>

        <v-card>
            <v-card-title>
                <addPattern/>
                <v-btn flat @click="di = false" class="colorClose" xs12 sm4 text-xs-center style="right: 0; top: 0; position: absolute; width: 10%"> &times; </v-btn>
            </v-card-title>
        </v-card>
    </v-dialog>
</template>

<script>
import addPattern from './addPattern.vue'

export default {
    data() {
    return {
      di : false
    }
  },
    components: {
        addPattern
    },

}
</script>

<style>
.colorClose {
  background-color: #c72c41
} 

</style>

