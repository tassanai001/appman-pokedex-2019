<template>
  <div class="pokedex">
    <router-link to="/pokedex">Back</router-link>
    <h1>
      Pokedex #1
      <router-link to="/addpokedex/?pokedexId=16" class="add-pokemon">Add Pokemon</router-link>
    </h1>
    <ul>
      <li>
        <div class="pokemon">
          <div class="image">
            <img src="https://images.pokemontcg.io/ex8/98.png" alt="Deoxys ex" />
          </div>
          <div class="body">
            <h2>Deoxys ex</h2>
            <p>
              TYPE:
              <span>Psychic</span>
            </p>
            <p>
              HP:
              <span>110</span>
            </p>
            <p>
              ATK:
              <span>50</span>
            </p>
            <p>
              RES:
              <span>0</span>
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="pokemon">
          <div class="image">
            <img src="https://images.pokemontcg.io/xyp/XY05.png" alt="Xerneas" />
          </div>
          <div class="body">
            <h2>Xerneas</h2>
            <p>
              TYPE:
              <span>Fairy</span>
            </p>
            <p>
              HP:
              <span>130</span>
            </p>
            <p>
              ATK:
              <span>100</span>
            </p>
            <p>
              RES:
              <span>20</span>
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="pokemon">
          <div class="image">
            <img src="https://images.pokemontcg.io/ex8/102.png" alt="Rayquaza ex" />
          </div>
          <div class="body">
            <h2>Rayquaza ex</h2>
            <p>
              TYPE:
              <span>Colorless</span>
            </p>
            <p>
              HP:
              <span>100</span>
            </p>
            <p>
              ATK:
              <span>50</span>
            </p>
            <p>
              RES:
              <span>40</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InformationList",
  mounted() {
    console.log("IN Information:--> ", this.$route.query.id); // eslint-disable-line
  }
};
</script>

<style scoped>
.signup,
.login {
  width: 600px;
  margin: 200px auto;
}
.back {
  color: #333;
  font-style: italic;
}
.pokemon {
  display: flex;
  padding: 8px;
}
.pokemon > .image {
  flex-grow: 1;
}
.pokemon > .body {
  flex-grow: 15;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.pokemon span {
  font-style: italic;
  font-size: 24px;
  margin-left: 15px;
}
.add-pokemon {
  color: #a00;
  font-style: italic;
}
</style>
