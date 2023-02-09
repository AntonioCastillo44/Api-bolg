const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Posts = db.define( 'posts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false 
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isPublished: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

module.exports = Posts
