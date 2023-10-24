const { Sequelize } = require ("sequelize")
// Connection parameters
const sequelize2 = new Sequelize('db2', 'postgres', 'sAH82460#',  {
  host: 'localhost',
  dialect: 'postgres' 
}
)
const testDbConnection2 = async () => {
    try {
      await sequelize2.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  module.exports = { sq: sequelize2, testDbConnection2 };