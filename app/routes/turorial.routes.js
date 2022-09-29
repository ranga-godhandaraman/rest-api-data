module.exports = app => {
  const data = require("../controllers/data.controller.js"); // data defined instead of tutorials

  var router = require("express").Router();

  // Create 
  router.post("/", data.create);

  // Retrieve 
  router.get("/", data.findAll);

  // Retrieve all 
  router.get("/published", data.findAllPublished);

  // Retrieve with id
  router.get("/:id", data.findOne);

  // Update with id
  router.put("/:id", data.update);

  // Delete with id
  router.delete("/:id", data.delete);

  // Delete all 
  router.delete("/", data.deleteAll);

  app.use("/api/data", router);
};
