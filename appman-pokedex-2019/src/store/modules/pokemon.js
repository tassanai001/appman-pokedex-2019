import axios from "../axios";

export default {
  namespaced: true,
  state: {
    pokemonLists: [],
    addPokemonStatus: null
  },
  mutations: {
    UPDATE_SEARCH_POKEMONDEXLIST_MUTATION(state, response) {
      if (response.data) {
        state.pokemonLists = response.data;
      }
    },
    UPDATE_POKEMONLIST_MUTATION(state, response) {
      if (response.data) {
        state.pokemonLists = response.data;
      }
    },
    UPDATE_ADD_POKEMONDEXLIST_MUTATION(state, response) {
      state.addPokemonStatus = response;
    }
  },
  actions: {
    getPokeListsAction({ commit }) {
      Object.assign(axios.instance.defaults, {
        headers: { authorization: localStorage.getItem("TOKEN") }
      });
      axios.instance
        .get("/pokemon/lists")
        .then(response => {
          commit("UPDATE_POKEMONLIST_MUTATION", response);
        })
        .catch(e => {
          commit("UPDATE_POKEMONLIST_MUTATION", e);
        });
    },
    searchPokedexAction({ commit }, word) {
      Object.assign(axios.instance.defaults, {
        headers: { authorization: localStorage.getItem("TOKEN") }
      });
      const query = `/pokemon/search/${word}`;
      axios.instance
        .get(query)
        .then(response => {
          commit("UPDATE_SEARCH_POKEMONDEXLIST_MUTATION", response);
        })
        .catch(e => {
          commit("UPDATE_SEARCH_POKEMONDEXLIST_MUTATION", e);
        });
    },
    addPokemonAction({ commit }, param) {
      Object.assign(axios.instance.defaults, {
        headers: { authorization: localStorage.getItem("TOKEN") }
      });
      axios.instance
        .post("/users/addpokemon", param)
        .then(() => {
          commit("UPDATE_ADD_POKEMONDEXLIST_MUTATION", true);
        })
        .catch(() => {
          commit("UPDATE_ADD_POKEMONDEXLIST_MUTATION", false);
        });
    }
  }
};
