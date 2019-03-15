export const Utils = {
    methods: {
        startPartie( data ) {
            return new Promise((resolve, reject) => {
                window.axios.post('series/'+ data.id +'/parties',{
                  joueur: data.joueur
              }).then(response => {
                  resolve(response)
              }).catch(error => {
                  reject(error)
              });
            })
          },
          retrieveSeries() {
            window.axios.get('series')
              .then(response => {
                this.$store.commit('retrieveSeries', response.data.series)
                console.log(response.data)
              })
              .catch(error => {
                console.log(error)
              })
          },
          retrieveSerie(data) {
            window.axios.get('series/'+data.id)
              .then(response => {
                this.$store.commit('retrieveSerie', response.data.serie)
                console.log(response.data)
              })
              .catch(error => {
                console.log(error)
              })
          },
          retrievePartie(data) {
            this.$store.commit('setTokenAxios');
            window.axios.get('parties/'+data.id)
              .then(response => {
                this.$store.commit('retrievePartie', response.data.partie)
                console.log(response.data)
              })
              .catch(error => {
                console.log(error)
              })
          },
          retrievePhotos(data) {
            window.axios.get('parties/'+data.id+'/photos')
              .then(response => {
                this.$store.commit('retrievePhotos', response.data.photos)
                console.log(response.data)
              })
              .catch(error => {
                console.log(error)
              })
          }
    }
}
