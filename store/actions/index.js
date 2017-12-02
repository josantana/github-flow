
export default {
    async nuxtServerInit() {
        // ...
    },

    async setError({ commit }, model) {
        commit('SET_ERROR', model);
    },

    async updateProfile({ commit }, model) {
        commit('UPDATE_PROFILE', model);
    },
};
