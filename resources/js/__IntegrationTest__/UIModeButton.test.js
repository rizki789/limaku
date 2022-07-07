/* eslint-disable @typescript-eslint/no-var-requires */
// import UIMode from '../Redux/UIMode';
// const UIMode = require('../resources/js/Redux/UIMode');
const UIMode = require('../Redux/UIModeES5');
// const UIMode = require('../Redux/UIMode');

test('UI Mode Toggle: Redux', () => {
    UIMode.dispatch({ type: 'FLIP'});
    // const response = trigger();
    expect(UIMode.getState()).toEqual({mode: 'light'});
});

test('UI Mode Toggle: Redux 2nd', () => {
    UIMode.dispatch({ type: 'FLIP'});
    // const response = trigger();
    expect(UIMode.getState()).toEqual({mode: 'dark'});
});
