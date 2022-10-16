import { UserEntity } from "./../models/user";

describe("User Controller Test", () => {
  it("Should return one user by Email", () => {
    const user = {};
    expect(user).toBeInstanceOf(UserEntity);
  });
});
