import { createStore } from 'vuex'

export const store = createStore({
    state: {
        errors: new Set(),
        showErrors: false,
    },
    mutations: {
        addError(state, payload) {
            state.errors.add(payload);
            state.showErrors = true;
        },
        clearErrors(state) {
            state.errors.clear();
            state.showErrors = false;
        }
    }
})

