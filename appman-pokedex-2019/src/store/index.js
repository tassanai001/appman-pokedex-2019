import Vue from "vue";
import Vuex from "vuex";

import userModule from "./modules/user";
import pokedexModule from "./modules/pokedex";
import informationModule from "./modules/infomation";
import pokemonModule from "./modules/pokemon";

import axios from "./axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: localStorage.getItem("TOKEN"),
    isAccess: null
  },
  modules: {
    users: userModule,
    pokedex: pokedexModule,
    info: informationModule,
    pokemon: pokemonModule
  },
  mutations: {
    UPDATE_STATUS_AUTHORIZED_MUTATION(state, response) {
      if (response.data) {
        state.isAccess = response.data.isOwner;
      }
    }
  },
  actions: {
    AuthorizedAddpokedex({ commit }, id) {
      Object.assign(axios.instance.defaults, {
        headers: { authorization: localStorage.getItem("TOKEN") }
      });
      const query = `/users/isAddpokedex/${id}`;
      axios.instance
        .get(query)
        .then(response => {
          commit("UPDATE_STATUS_AUTHORIZED_MUTATION", response);
        })
        .catch(e => {
          commit("UPDATE_STATUS_AUTHORIZED_MUTATION", e);
        });
    }
  }
});
