import Sequelize from 'sequelize';
import db from '../config/db.js';

const Stat = db.define('Stat', {
    year: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
    },
    intakes: {
        type: Sequelize.DataTypes.INTEGER,
    },
    adoptions: {
        type: Sequelize.DataTypes.INTEGER,
    },
    relocations: {
        type: Sequelize.DataTypes.INTEGER,
    },
});

export default Stat;