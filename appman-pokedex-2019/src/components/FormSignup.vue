<template>
  <div class="signup">
    <h1>Create Pokemon Trainer Account</h1>
    <form @submit.prevent="signup">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          name="username"
          type="username"
          placeholder="Username"
          class="form-control"
          v-model="username"
          style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          class="form-control"
          v-model="password"
          style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"
        />
      </div>
      <div>
        <button class="action" type="submit" @click="signup">Create Account</button>
      </div>
      <router-link to="/login">Already have an account?</router-link>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FormSignup",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("users", ["signupAction"]),
    signup() {
      if (this.username !== "" && this.password !== "") {
        const param = {
          username: this.username,
          password: this.password,
          callback: this.redirectRoute
        };
        this.signupAction(param);
      }
    },
    redirectRoute(status) {
      if (status) {
        this.$router.push("login");
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
