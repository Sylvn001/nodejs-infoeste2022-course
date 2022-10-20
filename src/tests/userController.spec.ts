/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { CreateUserDTO } from "./../dto/createUserDTO";
import { app } from "../app";
import request from "supertest";

describe("User Controller", () => {
  it("should be able to create a new user", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        email: "junior@teste.com",
        password: "abacate",
      } as CreateUserDTO);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  });

  it("should not be able to create a user with an existing email", async () => {
    await request(app)
      .post("/users")
      .send({
        email: "juniorExiste@teste.com",
        password: "abacate",
      } as CreateUserDTO);

    const response = await request(app)
      .post("/users")
      .send({
        email: "juniorExiste@teste.com",
        password: "abacate",
      } as CreateUserDTO);

    expect(response.status).toBe(400);
  });
});
