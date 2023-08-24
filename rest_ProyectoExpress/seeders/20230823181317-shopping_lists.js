'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('shopping_lists', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        PK_list_id: 1,
        user_id: "jhondoe",
        list_name: "Compras Semanales",
        creation_date: "2023-08-21 10:00:00"
      },
      {
        //
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('shopping_lists', null, {});
  }
};
