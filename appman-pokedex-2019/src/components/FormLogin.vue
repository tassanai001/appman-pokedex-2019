<template>
  <div class="login">
    <h1>Sign In to Pokemon Trainer Account</h1>
    <form _lpchecked="1" @submit.prevent="signIn">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="username"
          id="username"
          name="username"
          placeholder="Username"
          class="form-control"
          v-model="username"
          style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          class="form-control"
          v-model="password"
          style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"
        />
      </div>
      <div>
        <button class="action" type="submit" @submit.prevent="signIn">Sign In</button>
      </div>
      <router-link to="/signup">Don't have an account?</router-link>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FormLogin",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    ...mapActions("users", ["signinAction"]),
    signIn() {
      if (this.username !== "" && this.password !== "") {
        const param = {
          username: this.username,
          password: this.password,
          callback: this.redirectRoute
        };
        this.signinAction(param);
      }
    },
    redirectRoute(status) {
      if (status) {
        this.$router.push("pokedex");
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
</style>
