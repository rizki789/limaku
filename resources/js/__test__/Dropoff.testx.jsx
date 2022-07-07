// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'

// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

import '@testing-library/jest-dom'
const token = setupServer(
    rest.get('/token', (req, res, ctx) =>{
        // return res(ctx.json());
    })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('should render a button with the correct text', () => {
    console.log(token);
});
