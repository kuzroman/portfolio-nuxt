import axios from 'axios'

const apiGetAllLeaders = '/api/users/getAll'
const apiAddLeader = '/api/users/add'

export const state = () => ({
    leaders: [],
    isSent: false
})

export const getters = {
    leaders: (state) => state.leaders,
    isSent: (state) => state.isSent,
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
    setIsSent(state, bool) {
        state.isSent = bool
    },
}

export const actions = {
    getLeaders({commit}) {
        return fetch(apiGetAllLeaders)
            .then((response) => response.json())
            .then((leaders) => {
                commit('addLeaders', leaders)
            })
    },
    addLeader({commit}, data) {
        return axios.post(apiAddLeader, data)
            .then(function (response) {
                // console.log(response);
                commit('setIsSent', true)
            })
            .catch(function (error) {
                // console.error(error);
            });
    }
}