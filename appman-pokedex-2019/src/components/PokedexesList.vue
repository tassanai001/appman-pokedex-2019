<template>
  <div class="pokedexes">
    <h1>Pokedexes</h1>
    <ul>
      <li v-for="(item, index) in returnPokedexLists" :key="index">
        <router-link :to="`/infomation/?id=${item._id}&index=${index+1}`">{{item.username}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "PokedexesList",
  computed: {
    ...mapState("pokedex", ["pokedexLists"]),
    returnPokedexLists() {
      return this.pokedexLists || [];
    }
  },
  mounted() {
    this.initPokedexList();
  },
  methods: {
    ...mapActions("pokedex", ["getPokedexListAction"]),
    initPokedexList() {
      this.getPokedexListAction();
    }
  }
};
</script>

<style scoped>
.pokemon span {
  font-style: italic;
  font-size: 24px;
  margin-left: 15px;
}
</style>
