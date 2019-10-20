import axios from "../axios";

export default {
  namespaced: true,
  state: {
    user: null,
    signupStatus: null
  },
  mutations: {
    UPDATE_TOKEN_MUTATION(state, user) {
      state.user = user;
    },
    UPDATE_SIGNUP_RESPONSE_MUTATION(state, status) {
      state.signupStatus = status;
    }
  },
  actions: {
    signupAction({ commit }, param) {
      console.log("param:---> ", param); //eslint-disable-line
      const request = {
        username: param.username,
        password: param.password
      };
      axios
        .post("/users/signup", request)
        .then(() => {
          param.callback(true);
          commit("UPDATE_SIGNUP_RESPONSE_MUTATION", true);
        })
        .catch(() => {
          param.callback(false);
          commit("UPDATE_SIGNUP_RESPONSE_MUTATION", false);
        });
    }
  }
};
