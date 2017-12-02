
export default {
    async nuxtServerInit() {
        // ...
    },

    async setError({ commit }, model) {
        commit('SET_ERROR', model);
    },

    async getGithubData({ commit }, username) {
        const data = await this.$axios.$get(`/users/${username}`);
        if (data) commit('UPDATE_PROFILE', { github: data });
    },

    async updateProfile({ commit }, model) {
        commit('UPDATE_PROFILE', model);
    },
};
