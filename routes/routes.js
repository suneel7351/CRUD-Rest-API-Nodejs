function routes(app) {
  app.post("/create", require("../controllers/crudController")().create);
  app.put("/update", require("../controllers/crudController")().update);
  app.delete("/delete", require("../controllers/crudController")().delete);
  app.get("/read", require("../controllers/crudController")().read);
  app.get("/find", require("../controllers/crudController")().find);
}

module.exports = routes;
