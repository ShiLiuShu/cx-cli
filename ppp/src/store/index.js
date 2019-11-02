import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import movies from './module/movies'
import movieDetails from './module/movieDetail'
import person from './module/person'
import cinemas from './module/cinemas'
import cinemaDetail from './module/cinemaDetail'



Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules:{
        movies,
        movieDetails,
        person,
        cinemas,
        cinemaDetail
    }
})