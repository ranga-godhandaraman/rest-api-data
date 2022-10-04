module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Che&castro2",// set to respective DB --ranga
  DB: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
