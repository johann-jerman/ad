'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('color_products', [
      {
        color_id: 2,
        product_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 6,
        product_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 9,
        product_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 10,
        product_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 10,
        product_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 8,
        product_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 10,
        product_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 8,
        product_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 2,
        product_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 6,
        product_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 1,
        product_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 10,
        product_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 8,
        product_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 10,
        product_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 8,
        product_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 9,
        product_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 4,
        product_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 2,
        product_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 5,
        product_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 6,
        product_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 4,
        product_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 11,
        product_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 11,
        product_id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 8,
        product_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 9,
        product_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 8,
        product_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 9,
        product_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 8,
        product_id: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 9,
        product_id: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 3,
        product_id: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 8,
        product_id: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 9,
        product_id: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 6,
        product_id: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 2,
        product_id: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 9,
        product_id: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 9,
        product_id: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 2,
        product_id: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 5,
        product_id: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 6,
        product_id: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 2,
        product_id: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 5,
        product_id: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 6,
        product_id: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 1,
        product_id: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 10,
        product_id: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 8,
        product_id: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 9,
        product_id: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 8,
        product_id: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 9,
        product_id: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 3,
        product_id: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 8,
        product_id: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 9,
        product_id: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 7,
        product_id: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 8,
        product_id: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        color_id: 9,
        product_id: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
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
