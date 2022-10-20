import { app } from "./app";
app.listen(3000, () =>
  console.log("Server is running : ENV = " + process.env.ENV)
);
