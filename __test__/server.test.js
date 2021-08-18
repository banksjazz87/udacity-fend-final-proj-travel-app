import { serverRunning } from "../src/server/server.js"

test('this should just return a console.log statement', () => {
    expect(serverRunning).toBeDefined();
})