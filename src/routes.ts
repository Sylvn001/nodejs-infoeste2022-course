import { Router } from "express";
import { UserController } from "./controllers/UserController";

const userController = new UserController();

const router: Router = Router();

/*Users*/
router.get("/users", userController.findAll);
router.get("/users/:id", userController.findOne);
router.post("/users/:id", userController.findOne);
router.patch("/users/:id", userController.findOne);
router.delete("/users/:id", userController.findOne);

router.get("/", (req, res) => {
  return res.send("hello world");
});

export { router };
