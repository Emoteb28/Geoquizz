<template>
  <b-container>
    <div class="up">
      <div>
        <b-card no-body class="overflow-hidden center22" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="12">
              <b-card-body :title="serie.ville ">
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <b-list-group v-if="scores">
        <b-list-group-item variant="dark">scores (
          <b-badge variant="light">{{scores.length}}</b-badge>score(s))
        </b-list-group-item>
        <b-list-group-item>
          <b-list-group v-for="score in scores" :key="score._id">
            <b-list-group-item class="top1">
              {{ score.joueur }}
              <b-badge pill variant="secondary" class="float-right">{{ score.score }}</b-badge>
            </b-list-group-item>
          </b-list-group>
        </b-list-group-item>
      </b-list-group>
    </div>
  </b-container>
</template>
<script>
export default {
  name: "Score",
  data() {
    return {};
  },
  created() {
    this.retrieveSerie({
      id: this.$route.params.id
    });

    this.retrieveScores({
      id: this.$route.params.id
    });
  },
  computed: {
    scores() {
      return this.$store.state.parties;
    },
    serie() {
      return this.$store.state.serie;
    }
  },
  methods: {}
};
</script>

<style >
.center22{
  margin: auto;
  text-align: center;
}
h4.card-title {
  font-size: 2.5em;
}

.mar {
  margin-left: 2em;
}

.top1 {
  margin-top: 15px;
}
</style>

