import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        comments: []
    },
    mutations: {
        addComment(state, payload) {
            state.comments.unshift(payload)
        },
        removeComment(state, {id}) {
            const index = state.comments.map(comment => comment.id).indexOf(id)
            state.comments.splice(index, 1)
        },
        changeComment(state, payload) {
            const index = state.comments.map(comment => comment.id).indexOf(payload.id)
            state.comments[index] = payload
        }
    }
})