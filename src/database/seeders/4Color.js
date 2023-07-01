'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('colors', [
      {
        color: 'azul',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//1
      },
      {
        color: 'rojo',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//2
      },
      {
        color: 'verde',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//3
      },
      {
        color: 'naranja',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//4
      },
      {
        color: 'violeta',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//5
      },
      {
        color: 'rosa',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//6
      },
      {
        color: 'gris',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//7
      },
      {
        color: 'negro',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//8
      },
      {
        color: 'blanco',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//9
      },
      {
        color: 'celeste',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//10
      },
      {
        color: 'ocre',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//11
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
