const NodeEnvironment = require("jest-environment-node").TestEnvironment;
const { execSync } = require("child_process");
const { resolve } = require("path");

const prismaCli = "./node_modules/.bin/prisma";

require("dotenv").config({
  path: resolve(__dirname, "..", ".env.test"),
});

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    console.log("schemas", this.schema);
    this.connectionString = process.env.DATABASE_URL;
  }

  setup() {
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;

    // Rodar as migrations
    execSync(`${prismaCli} migrate reset --force`);
  }
}

module.exports = CustomEnvironment;
