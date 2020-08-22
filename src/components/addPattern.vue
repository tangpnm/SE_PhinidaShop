<template>
  <div class="patternBox">
    <center>
      <h4>Add Pattern</h4>
    </center>
    
    <br>

    <div class="form-group">
      <label for="addTitle">name of pattern: </label>
      <textarea class="form-control" rows="1" v-model="titlePattern" placeholder="title" style="height: 45px; width: 300px;"></textarea>
    </div>

    <br>

    <div class="form-group">
      <label for="addDetail">detail of pattern: </label>
      <textarea class="form-control" rows="2" v-model="detailPattern" placeholder="detail" style="height: 45px; width: 300px;"></textarea>
    </div>

    <b-button raised variant="success" class="primary sizeButton" @click="onPickFile">Upload image</b-button>
    <input
      type="file"
      style="display: none"
      ref="fileInput"
      accept="image/*"
      @change="onFilePicked"
    >
    <br>
    <b-button variant="info" class="sizeButton" @click="savePattern">Save pattern</b-button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "patternBox",
  data() {
    return {
      titlePattern: "",
      detailPattern: "",
      imageUrl: ""
    };
  },
  computed: {
    formIsValid() {
      return this.titlePattern !== "" && this.detailPattern !== "" && this.imageUrl !== "";
    }
  },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(e) {
      /* eslint-disable */
      let file = e.target.files[0];
      var storageRef = firebase.storage().ref("pattern/" + file.name);
      let uploadTask = storageRef.put(file);

      uploadTask.on(
        "state_changed",
        snapshot => {},
        error => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(
            function(downloadURL) {
              this.imageUrl = downloadURL;
              console.log("File available at", downloadURL);
            }.bind(this)
          );
        }
      );
      storageRef.put(file);
    },
    savePattern() {
      console.log(this.color);
      if (this.titlePattern == "" && this.imageUrl == "" && this.detailPattern == "") {
        alert("Put your pattern again.");
      } else {
        firebase
          .database()
          .ref("Pattern")
          .push({ title: this.titlePattern, detail: this.detailPattern, image: this.imageUrl });
        alert("add pattern done.");
      }
    }
  }
};
</script>

<style>
.sizeButton {
  width: 100%;
}
</style>