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
              @tap="login"
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
              @tap="login"
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

  }),
  methods: {
  }
};
</script>
