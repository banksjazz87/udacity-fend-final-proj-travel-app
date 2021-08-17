import { keysInfo } from '../src/client/js/app.js';


test('return key values from the server', () => {
    expect(keysInfo()).toBeDefined();
});