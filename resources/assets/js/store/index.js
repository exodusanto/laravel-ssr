import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import { 
//     getUser,
//     userLogout,
//     queryArticleById
// } from '../api'

const state = {
    list: ['Prova - Store']
}

const mutations = {
    ADD_TO (state, item) {
        state.list.push(item);
    }
}

const actions = {
    addToList ({ commit }, item) {
        commit('ADD_TO', item);
    }
}

const getters = {
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store