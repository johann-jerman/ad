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
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//1
      },
      {
        color: 'rojo',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//2
      },
      {
        color: 'verde',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//3
      },
      {
        color: 'naranja',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//4
      },
      {
        color: 'violeta',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//5
      },
      {
        color: 'rosa',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//6
      },
      {
        color: 'gris',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//7
      },
      {
        color: 'negro',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//8
      },
      {
        color: 'blanco',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//9
      },
      {
        color: 'celeste',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//10
      },
      {
        color: 'ocre',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//11
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
