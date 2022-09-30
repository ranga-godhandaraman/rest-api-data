const db = require("../models");
const Datadm = db.dm; // DB name --ranga
const Op = db.Sequelize.Op;

// Create and Save
exports.create = (req, res) => {
  // Validate request
  if (!req.body.studyid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create 
  const dm = {
    studyid: req.body.studyid,
    usubjid: req.body.usubjid,
    subjid: req.body.subjid,
    siteid: req.body.siteid,
    age: req.body.age,
    ageu: req.body.ageu,
    sex: req.body.sex,
    race: req.body.race,
    arm: req.body.arm,
    country: req.body. country,
    published: req.body.published ? req.body.published : false
  };

  // Save data in db
  Datadm.create(dm)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating."
      });
    });
};

// Retrieve data from the database.
exports.findAll = (req, res) => {
  const studyid = req.query.studyid;
  var condition = studyid ? { studyid: { [Op.iLike]: `%${studyid}%` } } : null;

  Datadm.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
};

// Find a single data with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Datadm.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving data with id=" + id
      });
    });
};

// Update with ID
exports.update = (req, res) => {
  const id = req.params.id;

  Datadm.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update with id=${id}. Maybe data was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating with id=" + id
      });
    });
};

// Delete with specific request
exports.delete = (req, res) => {
  const id = req.params.id;

  Datadm.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete with id=${id}. Maybe data was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete with id=" + id
      });
    });
};

// Delete all from DB
exports.deleteAll = (req, res) => {
  Data.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all data."
      });
    });
};

// find all 
exports.findAllPublished = (req, res) => {
  Datadm.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
};
