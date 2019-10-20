<template>
  <div class="pokedex">
    <router-link to="/pokedex">Back</router-link>
    <h1>
      Pokedex #{{$route.query.index}}
      <router-link
        :to="`/addpokedex/?pokedexId=${$route.query.id}&index=${$route.query.index}`"
        class="add-pokemon"
      >Add Pokemon</router-link>
    </h1>
    <ul>
      <li v-for="(item, index) in returnPokedexList" :key="index">
        <div class="pokemon">
          <div class="image">
            <img :src="item.imageUrl" :alt="item.name" />
          </div>
          <div class="body">
            <h2>{{item.name}}</h2>
            <p>
              TYPE:
              <span>{{item.type}}</span>
            </p>
            <p>
              HP:
              <span>{{item.hp}}</span>
            </p>
            <p>
              ATK:
              <span>{{item.attack}}</span>
            </p>
            <p>
              RES:
              <span>{{item.resistance}}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "InformationList",
  mounted() {
    this.initPokedexInformation();
  },
  computed: {
    ...mapState("info", ["pokemonLists"]),
    returnPokedexList() {
      console.log("return pokedex:--> ", this.pokemonLists); // eslint-disable-line
      return this.pokemonLists || [];
    }
  },
  methods: {
    ...mapActions("info", ["getPokedexListAction"]),
    initPokedexInformation() {
      console.log("IN Information:--> ", this.$route.query.id); // eslint-disable-line
      if (this.$route.query.id) {
        this.getPokedexListAction(this.$route.query.id);
      }
    }
  }
};
</script>

<style scoped>
.signup,
.login {
  width: 600px;
  margin: 200px auto;
}
.back {
  color: #333;
  font-style: italic;
}
.pokemon {
  display: flex;
  padding: 8px;
}
.pokemon > .image {
  flex-grow: 1;
}
.pokemon > .body {
  flex-grow: 15;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.pokemon span {
  font-style: italic;
  font-size: 24px;
  margin-left: 15px;
}
.add-pokemon {
  color: #a00;
  font-style: italic;
}
</style>
