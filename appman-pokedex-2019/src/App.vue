<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import FormLogin from "./components/FormLogin.vue";

export default {
  name: "app",
  components: {
    // "form-login": FormLogin
  }
};
</script>

<style>
* {
  font-family: "Atma", cursive;
}

@font-face {
  font-family: "Atma";
  src: url("./assets/uK_z4rqWc-Eoo9J0GjA3Pw.woff2") format("woff");
  font-weight: bold;
  font-style: normal;
}

body {
  margin: 0;
  padding: 0;
}
#app {
  width: 1024px;
  /* height: 768px; */
  margin: 50px auto;
  border-color: #353535;
  border-radius: 40px;
  border-width: 28px 103px 28px 74px;
  border-style: solid;
  position: relative;
}
#app:before {
  content: "";
  position: absolute;
  left: -80px;
  transform: rotate(270deg);
  background: url(https://cdn-images-1.medium.com/fit/c/200/200/1*PKHCHuLxDyZ8SV3PKxzizA.png)
    no-repeat center center / 100%;
  width: 85px;
  height: 180px;
  top: 40%;
}
#app:after {
  content: "";
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background: #5c5c5c;
  position: absolute;
  right: -80px;
  top: 50%;
  border: 1px inset #7b7b7b;
}

.signup,
.login {
  width: 600px;
  margin: 200px auto;
}
.form-group {
  margin-bottom: 30px;
}
.form-control {
  padding: 15px;
  font-size: 15px;
  line-height: 15px;
  display: block;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #333;
  box-sizing: border-box;
}
.action {
  background-color: red;
  color: #fff;
  font-size: 15px;
  line-height: 15px;
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border-width: 0;
  margin-bottom: 30px;
}

.loading,
.pokedexes,
.pokedex {
  padding: 30px;
  overflow: scroll;
  height: 708px;
}

ul {
  list-style-type: none;
  padding: 0 8px;
}
li {
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #eee;
}
a {
  display: block;
  padding: 8px;
}
</style>
