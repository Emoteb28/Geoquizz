<template>
  <v-form @submit.prevent="sendFile" enctype="multipart/form-data">
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <v-flex xs12>
            <v-text-field name="lat" label="Latitude" id="lat" v-model="lat" type="text" required></v-text-field>
          </v-flex>

          <v-flex xs10>
            <v-text-field
              name="lon"
              label="Longitude"
              id="lon"
              v-model="lon"
              type="text"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs10>
            <v-text-field
              name="desc"
              label="Description"
              id="desc"
              v-model="desc"
              type="text"
              required
            ></v-text-field>
          </v-flex>
          <v-progress-linear v-model="progress"></v-progress-linear>

          <input type="file" @change="selectFile" ref="file">

          <div>
            <v-btn type="submit" depressed color="primary">Primary</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>


<script>
import axios from "axios";

export default {
  data: () => ({
    file: "",
    desc: "",
    lon: "",
    lat: ""
  }),
  methods: {
    selectFile(){
            this.file = this.$refs.file.files[0];
    },
    sendFile() {
      let fd= new FormData();
      fd.append('image', this.file)
      fd.append('desc', this.desc)
      fd.append('lat', this.lat)
      fd.append('lng', this.lon)

      this.$store.dispatch("createPhotoS", {
          fd: fd
        })
        .then(response => {        
            this.$router.push({ name: 'login' })
        });
    }
  }
};
</script>
