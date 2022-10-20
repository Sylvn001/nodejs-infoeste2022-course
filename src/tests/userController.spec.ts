import { CreateUserDTO } from "./../dto/createUserDTO";
import { Prisma } from "@prisma/client";
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

    console.log(response);
  });
});
