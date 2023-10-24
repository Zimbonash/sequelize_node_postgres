const { Sequelize } = require ("sequelize")
// Connection parameters
const sequelize1 = new Sequelize('db1', 'postgres', 'sAH82460#',  {
  host: 'localhost',
  dialect: 'postgres' 
}
)
const testDbConnection1 = async () => {
    try {
      await sequelize1.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  module.exports = { sq: sequelize1, testDbConnection1 };