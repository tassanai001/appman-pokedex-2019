import Vue from "vue";
import VueRouter from "vue-router";

import store from "./store/index";
import App from "./App.vue";
import Login from "./Login.vue";
import Signup from "./Signup.vue";
import Pokedexes from "./Pokedexes.vue";
import Information from "./Information.vue";
import AddPokedex from "./AddPokedex.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/pokedex", component: Pokedexes },
  { path: "/infomation", component: Information },
  { path: "/addpokedex", component: AddPokedex }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});
// Now the app has started!

router.beforeEach((to, from, next) => {
  if (!store.state.accessToken) {
    next("/login");
  }
  if (to.path === "/addpokedex/") {
    store.dispatch("AuthorizedAddpokedex", to.query.pokedexId);
    setTimeout(function() {
      if (!store.state.isAccess) {
        next("/pokedex");
      } else {
        next();
      }
    }, 100);
  } else {
    next();
  }
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
