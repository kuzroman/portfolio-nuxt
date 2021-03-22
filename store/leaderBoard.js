// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
// const adapter = new FileSync('db.json')
// const db = low(adapter)
// const getLeadersApi = 'http://localhost:3000/leaderBoards'
const getLeadersApi = 'https://api.nuxtjs.dev/mountains'

export const state = () => ({
  leaders: [],
})

export const getters = {
  leaders: (state) => state.leaders,
  getSortLeaders: (state) =>
      [...state.leaders].sort((a, b) => b.score - a.score),
}

export const mutations = {
  addLeader(state, leader) {
    state.leaders.push(leader)
  },
  addLeaders(state, leaders) {
    state.leaders = leaders
  },
  sortLeaders(state) {
    state.leaders.sort((a, b) => b.score - a.score)
  }
}

export const actions = {
  getLeaders({ commit }) {
    fetch(getLeadersApi)
        .then((response) => response.json())
        .then((leaders) => {
          commit('addLeaders', leaders)
        })
  },
}