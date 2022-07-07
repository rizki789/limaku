/* eslint-disable @typescript-eslint/no-var-requires */
const { createStore } = require('@reduxjs/toolkit');
// import { legacy_createStore as createStore } from '@reduxjs/toolkit';

const initialState = {
    mode: 'dark',
};

const modeReducer = (state = initialState, action) => {
    if (action.type == 'FLIP') {
        return {
            ...state,
            mode: state.mode == 'light' ? 'dark' : 'light',
        };
    }
};
//
const store = createStore(modeReducer);

store.subscribe(() => {
    // const html = document.querySelector('html');
    console.log(store.getState());
    // html.classList.toggle('dark', store.getState().mode == 'light');
    // html.classList.toggle('light', store.getState().mode == 'dark');
});

const trigger = () => {
    store.dispatch({type: 'FLIP'})
    return store.getState();
}
store.trigger = trigger;

module.exports = store;
