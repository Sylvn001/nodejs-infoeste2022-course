import { UserService } from "./../services/userService";
import { db } from "../database/client";
import { BadRequest } from "../errors/bad_request";

const test_env = process.env;
let userService: UserService;

describe("Create user", () => {
  beforeAll(() => {
    userService = new UserService();
  });

  beforeEach(() => {
    jest.resetModules(); // limpa cache
  });

  it("Should be able to create a new user", async () => {
    const userData = {
      email: "junioro@test.com",
      password: "abacate",
    };

    const user = await userService.create(userData);

    expect(user).toHaveProperty("id");
  });

  it("should not be able to create a new user with same email", async () => {
    const userData = {
      email: "junioroExiste@test.com",
      password: "abacate",
    };

    await userService.create(userData);

    await expect(userService.create(userData)).rejects.toEqual(
      new BadRequest("Email already exists")
    );
  });
});
