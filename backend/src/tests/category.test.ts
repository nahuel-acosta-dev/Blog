import {describe, expect, test} from '@jest/globals';
import app from "../app";
import request from "supertest";

describe('GET /category', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/categories').send();
        expect(response.statusCode).toBe(200);
        //console.log(response);
    })
})
