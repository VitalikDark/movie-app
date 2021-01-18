<template>
  <div class="movie-wrapper">

    <div v-for="item in allMovies" class="movie-box">
      <div>{{ item.Title }}</div>
      <div>{{ item.Year }}</div>
      <img :src="item.Poster">
      <button @click="AddToGallery(item)" class="add-btn">Додати</button>
    </div>

    <div v-if="arrGellery.length">
      <h1>Gallery</h1>
      <div style="display: flex;">
        <button @click="sortType = 'name'">Sort by Name</button>
        <button @click="sortType = 'year'">Sort by Year</button>
        <button @click="resetGallery()">Reset</button>
      </div>
      <div v-for="item in sortedMovies" class="movie-box__gallery">
        {{ item.Title }}
        {{ item.Year }}
        <button @click="deleteM(item)">Delete</button>
        <img :src="item.Poster" alt="">
      </div>
    </div>
    <p v-else>
      Empty Gellery ...
    </p>


  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Main",
  data() {
    return {
      sortType: '',
      arrGellery: []
    }
  },
  computed: {
    allMovies() {
      return this.$store.getters.allMovies;
    },
    sortedMovies() {
      if (this.sortType === '') return this.arrGellery

      if (this.sortType === 'name') {
        return this.arrGellery.sort((a, b) => {
          if (a.Title < b.Title)
            return -1;
          if (a.Title > b.Title)
            return 1;
          return 0;
        })
      }

      if (this.sortType === 'year') {
        return this.arrGellery.sort((a, b) => {
          if (a.Year < b.Year)
            return -1;
          if (a.Year > b.Year)
            return 1;
          return 0;
        })
      }
    }
  },
  async mounted() {
    this.$store.dispatch("fetchMovie")
  },
  methods: {
    AddToGallery(item) {
      this.arrGellery = [...this.arrGellery, {...item}]
      console.log('g ', this.arrGellery);
    },
    resetGallery() {
      this.arrGellery = []
    },
    deleteM(index) {
      this.arrGellery.splice(index, 1);
    }
  }
}
</script>
<style>
.movie-wrapper {
  width: 70%;
  display: flex;
  flex-wrap: wrap;

}

.movie-box {
  position: relative;
  border: 2px solid #eee;
  display: flex;
  flex-direction: column;
  background-color: powderblue;
  color: #222;
  width: 200px;
  margin: 20px;
  height: 300px;
  padding: 20px;
  border-radius: 10px;
}

.movie-box img {
  position: absolute;
  bottom: 80px;
  width: 100px;
}

.add-btn {
  position: absolute;
  bottom: 20px;
}

input {
  border: 0px;
  background: azure;
  margin: 10px;
}

.movie-box__gallery {
  background-color: #eeeeee;
  width: 200px;
  height: 260px;
  padding: 20px;
  margin: 10px;
}
</style>


