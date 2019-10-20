<template>
  <div class="pokedex">
    <router-link class="back" :to="`/infomation/?id=${$route.query.pokedexId}`">Back</router-link>
    <h1>Add pokemon to pokedex #{{$route.query.index}}</h1>
    <form>
      <div class="form-group">
        <input
          id="query"
          name="query"
          type="query"
          placeholder="Search pokemons"
          class="form-control"
          v-model="searchPokemon"
        />
      </div>
    </form>
    <ul>
      <li>
        <div class="pokemon" v-for="(item, index) in returnPokemonList" :key="index">
          <div class="image">
            <img :src="item.imageUrl" alt="Cubone" />
          </div>
          <div class="body">
            <h2>{{item.name}}</h2>
            <p>
              TYPE:
              <span>{{ item.type }}</span>
            </p>
            <p>
              HP:
              <span>{{ item.hp }}</span>
            </p>
            <p>
              ATK:
              <span>{{ item.attack }}</span>
            </p>
            <p>
              RES:
              <span>{{ item.resistance}}</span>
            </p>
            <button @click="addPokemon(item)">Add to Pokedex</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import _debounce from "lodash/debounce";
import { mapState, mapActions } from "vuex";
export default {
  name: "AddPokedexList",
  data() {
    return {
      searchPokemon: ""
    };
  },
  watch: {
    searchPokemon: _debounce(function(word) {
      if (word) {
        this.searhPokemon(word);
      } else {
        this.getPokeLists();
      }
    }, 500)
  },
  computed: {
    ...mapState("pokemon", ["pokemonLists"]),
    returnPokemonList() {
      return this.pokemonLists || [];
    }
  },
  mounted() {
    this.getPokeLists();
  },
  methods: {
    ...mapActions("pokemon", [
      "searchPokedexAction",
      "getPokeListsAction",
      "addPokemonAction"
    ]),
    searhPokemon(word) {
      this.searchPokedexAction(word);
    },
    getPokeLists() {
      this.getPokeListsAction();
    },
    addPokemon(pokemonInfo) {
      if (pokemonInfo._id) {
        const request = {
          pokemonId: pokemonInfo._id
        };
        this.addPokemonAction(request);
      }
    }
  }
};
</script>

<style scoped>
.back {
  color: #333;
  font-style: italic;
}
.pokemon {
  display: flex;
  padding: 8px;
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
.pokemon button {
  background-color: #a00;
  color: #fff;
  font-style: italic;
}
</style>
