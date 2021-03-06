import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        comments: [],
        isModalOpen: false,
        commentToDelete: {}
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
        },
        setModalOpen(state, {status, comment}) {
            state.isModalOpen = status
            state.commentToDelete = comment
        }
    },
    getters: {
        getIsModalOpen: state => state.isModalOpen,
        getCommentToDelete: state => state.commentToDelete
    }
})