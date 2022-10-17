import { Request, Response, Router } from "express";
import { AuthController } from "./controllers/authController";
import { CategoryController } from "./controllers/categoryController";
import { ProductController } from "./controllers/productController";
import { UserController } from "./controllers/UserController";
import { UserAuthenticated } from "./middlewares/authMiddleware";

const userController = new UserController();
const categoryController = new CategoryController();
const authController = new AuthController();
const productController = new ProductController();

const router: Router = Router();

/*Users*/
router.get("/users", userController.findAll);
router.get("/users/:id", userController.findOne);
router.post("/users", userController.create);
router.patch("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);

/* Auth */
router.post("/login", authController.login);

/*Categories*/
router.get("/categories", categoryController.findAll);
router.get("/categories/:id", categoryController.findOne);
router.post("/categories", categoryController.create);
router.patch("/categories/:id", categoryController.update);
router.delete("/categories/:id", categoryController.delete);

/*Products*/
router.get("/products", productController.findAll);
router.get("/products/:id", productController.findOne);
router.post("/products", productController.create);
router.patch("/products/:id", productController.update);
router.delete("/products/:id", productController.delete);

router.get("/", UserAuthenticated, (req: Request, res: Response) => {
  return res.send("hello world id: " + req.id_user);
});

export { router };
