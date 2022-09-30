module.exports = app => {
  const datadm = require("../controllers/datadm.controller.js"); // datadm defined instead of tutorials

  var router = require("express").Router();

  // Create 
  router.post("/", datadm.create);

  // Retrieve 
  router.get("/", datadm.findAll);

  // Retrieve all 
  router.get("/published", datadm.findAllPublished);

  // Retrieve with id
  router.get("/:id", datadm.findOne);

  // Update with id
  router.put("/:id", datadm.update);

  // Delete with id
  router.delete("/:id", datadm.delete);

  // Delete all 
  router.delete("/", datadm.deleteAll);

  app.use("/api/datadm", router);
};
