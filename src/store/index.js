import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        movie: []
    },
    actions: {
        async fetchMovie(ctx) {
            const res = await fetch(
                'http://www.omdbapi.com/?apikey=6ca4667d&s=transformers'
            )
            const movie = await res.json()
            console.log(5,5,movie);
            ctx.commit('UpdateMovies', {
                arr: movie.Search
            })
        }
    },
    mutations: {
        UpdateMovies(state, movie) {
            console.log(movie);
            state.movie = movie.arr
        }
    },
    modules: {},
    getters: {
        allMovies(state) {
            return state.movie
        }
    }
})
