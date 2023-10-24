const { sq } = require ("../config/db1")
const { DataTypes } = require("sequelize")

const User1 = sq.define("user",  {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    fullName: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    employed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
})

User1.sync().then(()=>{
    console.log("User Model Synced")
})

module.exports = User1;