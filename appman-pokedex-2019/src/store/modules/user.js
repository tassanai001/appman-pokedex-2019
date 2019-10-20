import axios from "../axios";

export default {
  namespaced: true,
  state: {
    user: null,
    signupStatus: null,
    signinStatus: {
      status: null,
      response: null
    }
  },
  mutations: {
    UPDATE_TOKEN_MUTATION(state, user) {
      state.user = user;
    },
    UPDATE_SIGNUP_RESPONSE_MUTATION(state, status) {
      state.signupStatus = status;
    },
    UPDATE_SIGNIN_TOKEN_MUTATION(state, response) {
      if (response.status === 200) {
        localStorage.setItem("TOKEN", response.data);
        axios.updateToKEN(response.data);
      } else {
        localStorage.setItem("TOKEN", "");
      }
    }
  },
  actions: {
    signupAction({ commit }, param) {
      const request = {
        username: param.username,
        password: param.password
      };
      axios.instance
        .post("/users/signup", request)
        .then(() => {
          param.callback(true);
          commit("UPDATE_SIGNUP_RESPONSE_MUTATION", true);
        })
        .catch(() => {
          param.callback(false);
          commit("UPDATE_SIGNUP_RESPONSE_MUTATION", false);
        });
    },
    signinAction({ commit }, param) {
      const request = {
        username: param.username,
        password: param.password
      };
      axios.instance
        .post("/login", request)
        .then(response => {
          param.callback(true);
          commit("UPDATE_SIGNIN_TOKEN_MUTATION", response);
        })
        .catch(e => {
          param.callback(false);
          commit("UPDATE_SIGNIN_TOKEN_MUTATION", e);
        });
    }
  }
};
