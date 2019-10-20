import axios from "../axios";

export default {
  namespaced: true,
  state: {
    pokedexLists: [
      {
        _id: "",
        username: ""
      }
    ]
  },
  mutations: {
    UPDATE_POKEMONDEXLIST_MUTATION(state, response) {
      if (response.data) {
        state.pokedexLists = response.data;
      }
    }
  },
  actions: {
    getPokedexListAction({ commit }) {
      Object.assign(axios.instance.defaults, {
        headers: { authorization: localStorage.getItem("TOKEN") }
      });
      axios.instance
        .post("/users/pokedexlists")
        .then(response => {
          commit("UPDATE_POKEMONDEXLIST_MUTATION", response);
        })
        .catch(e => {
          commit("UPDATE_POKEMONDEXLIST_MUTATION", e);
        });
    }
  }
};
