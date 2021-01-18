<template>
  <div class="search-wrapper">

    <h1>Title Search</h1>

    <input type="text" placeholder="Type Film" v-model="t">
    <input type="text" placeholder="Year Film" v-model="y">
    <button @click="submit()">Застосувати</button>

    <div>{{ arr.Title }}</div>
    <div>{{ arr.Year }}</div>
    <img :src="arr.Poster">


  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "Search",
  data() {
    return {
      t: "",
      y: "",
      arr: []
    }
  },
  async mounted() {

  },
  methods: {
    ...mapMutations(['UpdateMovies']),
    submit() {
      const params = new URLSearchParams({
        t: this.t,
        y: this.y,
        apikey: '6ca4667d',
      }).toString();

      const url = `http://www.omdbapi.com/?${params}`;
      console.log(url);
      fetch(url)
          .then((response) => response.json())
          .then((json) => {
            const value = typeof json === 'object' ? [json] : json
            this.arr = value

            this.UpdateMovies({
              arr: this.arr
            })
          });
    }

  }
}
</script>

<style>
.search-wrapper {
  background-color: coral;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
}

img {
  width: 100px;
}

button {
  width: 120px;
  height: 40px;
  color: aliceblue;
  margin: 10px 0 5px 0px;
  display: block;
  background-color: deeppink;
  border: 0px;
  border-radius: 4px;
}
</style>
