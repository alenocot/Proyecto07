'use strict';

/* IMPORTE El ARCHIVO CON EL MODELO */
const categoriaClass = require('../models').categoria;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    /* CREACIÓN DE LA TABLA A PARTIR DE LA CLASE */
    await categoriaClass.sync()
  },

  async down (queryInterface, Sequelize) {
    
     /* ELIMINACIÓN LA TABLA */
     await queryInterface.dropTable('categoria');
  }
};
