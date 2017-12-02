
export default {
    async nuxtServerInit() {
        // ...
    },

    async setError({ commit }, model) {
        commit('SET_ERROR', model);
    },

    async resetGithubData({ commit, state }) {
        if (state.profile && state.profile.github) commit('UPDATE_PROFILE', { github: null });
    },

    async getGithubData({ commit }, username) {
        const data = await this.$axios.$get(`/users/${username}`);
        if (data) commit('UPDATE_PROFILE', { github: data });
    },

    async updateProfile({ commit }, model) {
        commit('UPDATE_PROFILE', model);
    },
};
