import Vue from "vue";
import Vuex from "vuex";

import userModule from "./modules/user";
import pokedexModule from "./modules/pokedex";
import informationModule from "./modules/infomation";
import pokemonModule from "./modules/pokemon";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    users: userModule,
    pokedex: pokedexModule,
    info: informationModule,
    pokemon: pokemonModule
  }
});
