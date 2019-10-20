import axios from "../axios";

export default {
  namespaced: true,
  state: {
    pokemonLists: []
  },
  mutations: {
    UPDATE_POKEDEXINFO_MUTATION(state, response) {
      if (response.data.pokemonLists) {
        state.pokemonLists = response.data.pokemonLists;
      }
    }
  },
  actions: {
    getPokedexListAction({ commit }, userId) {
      Object.assign(axios.instance.defaults, {
        headers: { authorization: localStorage.getItem("TOKEN") }
      });
      const query = `/users/pokedexbyuserid/${userId}`;
      axios.instance
        .get(query)
        .then(response => {
          commit("UPDATE_POKEDEXINFO_MUTATION", response);
        })
        .catch(e => {
          commit("UPDATE_POKEDEXINFO_MUTATION", e);
        });
    }
  }
};
