const { sq } = require ("../config/db2")
const { DataTypes } = require("sequelize")

const User2 = sq.define("user",  {
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

User2.sync().then(()=>{
    console.log("User Model Synced")
})

module.exports = User2;