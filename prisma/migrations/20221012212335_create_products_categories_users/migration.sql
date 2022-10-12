-- CreateTable
CREATE TABLE "user_items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" INTEGER NOT NULL,
    "total" DECIMAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "user_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
