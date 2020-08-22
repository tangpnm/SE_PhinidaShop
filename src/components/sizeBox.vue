<template>

  <div id="addSize">
    <form required>
      <input type="checkbox" name="size1" value="S" v-model="size"> S
      <input type="checkbox" name="size2" value="M" v-model="size"> M
      <input type="checkbox" name="size3" value="L" v-model="size"> L
      <input type="checkbox" name="size4" value="XL" v-model="size"> XL
      <br>
      <br>
      <span>Checked names: {{ size }}</span>
      <!-- <input type="submit" value="Submit"> -->
    </form>
  </div>

</template>

<script>
export default {
  name: "addSize",
  data() {
    return {
      size: []
    }
  },
}
</script>