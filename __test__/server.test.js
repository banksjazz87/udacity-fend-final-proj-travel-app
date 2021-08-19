const { expect } = require("@jest/globals");
const request = require("supertest");
import { app } from "../src/server/app.js";
import "core-js/stable";
import "regenerator-runtime/runtime";

describe("Testing the root path for the express server", () => {
    test("It should return with an HTTP code of 200", async() => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});