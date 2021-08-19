import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import "core-js/stable";
import "regenerator-runtime/runtime";
import { keysInfo } from '../src/client/js/app.js';


describe('testing api for receiving data from my server', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('calls my server and returns data to me', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: 'robot' }))

        keysInfo().then(res => {
            expect(res.data).toEqual('robot')
        })
    })
})