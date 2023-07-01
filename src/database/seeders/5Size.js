'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
    Example:
    */
    await queryInterface.bulkInsert('sizes', [
      {
        size: 'XS',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//1
      },
      {
        size: 'S',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//2
      },
      {
        size: 'M',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//3
      },
      {
        size: 'L',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//4
      },
      {
        size: 'XL',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//5
      },
      {
        size: 'XXL',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//6
      },
      {
        size: 'XXXL',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null//7
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
