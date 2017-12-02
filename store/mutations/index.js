
/* eslint-disable no-param-reassign */

const mutations = {
    SET_ERROR(state, model) {
        state.error = model;
    },
    UPDATE_PROFILE(state, model) {
        state.profile = { ...state.profile, ...model };
    },
};

export default mutations;
