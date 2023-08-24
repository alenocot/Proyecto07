'use strict';

/* IMPORTE El ARCHIVO CON EL MODELO */
const productosClass = require('../models').productos;


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    /* CREACIÓN DE LA TABLA A PARTIR DE LA CLASE */
    await productosClass.sync()
  },

  async down (queryInterface, Sequelize) {

    /* ELIMINACIÓN LA TABLA */
    await queryInterface.dropTable('productos');
  }
};
