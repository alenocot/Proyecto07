'use strict';

/* IMPORTE El ARCHIVO CON EL MODELO */
const shoppingListClass = require('../models').shopping_lists;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* CREACIÓN DE LA TABLA A PARTIR DE LA CLASE */
    await shoppingListClass.sync()
  },

  async down (queryInterface, Sequelize) {
    /* ELIMINACIÓN LA TABLA */
    await queryInterface.dropTable('shopping_lists');
  }
};
