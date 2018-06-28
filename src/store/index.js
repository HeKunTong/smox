import { Store } from 'smox';

const state = {
    count: 1
};

const actions = {
    asyncAdd: ({ commit }) => {
        setTimeout(() => {
            commit('add')
        }, 1000)
    }
};

const mutations = {
    add: (state) => {
        state.count += 1
    },
    cut: (state) => {
        state.count -= 1
    }
};

const store = new Store({ state, mutations, actions });

export default store;