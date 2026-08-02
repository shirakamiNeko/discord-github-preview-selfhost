import request from "supertest";
import app from "../src/app";

describe("Test /discord-profile-preview/user/:id", () => {
  test("It should respond with an error for invalid ID", () => {
    return request(app)
      .get("/discord-profile-preview/user/invalid")
      .then(response => {
        expect(response.statusCode).toBe(400);
      });
  });
  test("It should respond with my info", () => {
    return request(app)
      .get("/discord-profile-preview/user/214167454291722241")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});