module.exports = (sequelize, Sequelize) => {
  const Data = sequelize.define("data", {
    studyid: {
      type: Sequelize.STRING
    },
    usubjid: {
      type: Sequelize.STRING
    },
    subjid: {
      type: Sequelize.STRING
    },
    siteid: {
      type: Sequelize.STRING
    },
    siteid: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.STRING
    },
    ageu: {
      type: Sequelize.STRING
    },
    sex: {
      type: Sequelize.STRING
    },
    race: {
      type: Sequelize.STRING
    },
    arm: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    }
  });

  return Data;
};
 // 