<template>
  <v-container>
        <h6 class="display-3" >Create film</h6>
  <v-form @submit.prevent="createFilm"
    ref="form"
  >
          
          <v-text-field
            v-model="name"
            label="Name"
            required
            ></v-text-field>

            <v-text-field
            v-model="description"
            label="Description"
            required
            ></v-text-field>

            <v-text-field
            v-model="acteurs"
            label="Mouad MOUNACH - Ayoub MADANI - ..."
            required
            ></v-text-field>

            <v-text-field
              v-model="annee"
              class="mt-0"
              hide-details
              single-line
              type="number"
            ></v-text-field>

            <v-switch
              :label="`Disponible: ${disponible.toString()}`"
              v-model="disponible"
            ></v-switch>

        
          <v-select
            v-model="value"
            :items="items"
            attach
            chips
            label="Categories"
            multiple
          ></v-select>


           <v-btn
      color="success"
      type="submit"
    >
      create
    </v-btn>

    
  </v-form>
  </v-container>
</template>


<script>
import axios from 'axios';

  export default {
    name: "NewSerieForm",
    data: () => ({
        name: '',
        description: '',
        acteurs: '',
        annee: 2019,
        disponible: true,
        categories: '',
        items: ['foo', 'bar', 'fizz', 'buzz'],
        value: ['foo', 'bar', 'fizz', 'buzz']
    }),
    methods: {
      createFilm() {
      this.$store.dispatch('createFilm', {
        name: this.name,
        description: this.description,
        acteurs: this.acteurs,
        annee: this.annee.toString(),
        disponible: this.disponible,
        //categories: this.categories
      })
        .then(response => {
            console.log(this.$store.getters.createdFilm)
        })
    }
    }
  }
</script>
    