import { expect } from '@jest/globals';
import { keyValues } from '../src/client/js/app.js';

const keys = {
    value: 'Batman'
}

test('return key values from the server', async() => {
    expect.assertions(1);
    const data = await keys.value;
    expect(data).toEqual('Batman');
});