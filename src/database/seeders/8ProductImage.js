'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('image_products', [
      {
        image_id: 1,
        product_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 2,
        product_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 3,
        product_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 4,
        product_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 5,
        product_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 6,
        product_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 7,
        product_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 8,
        product_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 9,
        product_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 10,
        product_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 11,
        product_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 12,
        product_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 13,
        product_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 14,
        product_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 15,
        product_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 16,
        product_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 17,
        product_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 18,
        product_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 19,
        product_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 20,
        product_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 21,
        product_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 22,
        product_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 23,
        product_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 24,
        product_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 25,
        product_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 26,
        product_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 27,
        product_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 28,
        product_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 29,
        product_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 30,
        product_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 31,
        product_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 32,
        product_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 33,
        product_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 34,
        product_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 35,
        product_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 36,
        product_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 37,
        product_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 38,
        product_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 39,
        product_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 40,
        product_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 41,
        product_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 42,
        product_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 43,
        product_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 44,
        product_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 45,
        product_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 46,
        product_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 47,
        product_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 48,
        product_id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 49,
        product_id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 50,
        product_id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 51,
        product_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 52,
        product_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 53,
        product_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 54,
        product_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 55,
        product_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 56,
        product_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 57,
        product_id: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 58,
        product_id: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 59,
        product_id: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 60,
        product_id: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 61,
        product_id: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 62,
        product_id: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 63,
        product_id: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 64,
        product_id: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 65,
        product_id: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 66,
        product_id: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 67,
        product_id: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 68,
        product_id: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 69,
        product_id: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 70,
        product_id: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 71,
        product_id: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 72,
        product_id: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 73,
        product_id: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 74,
        product_id: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 75,
        product_id: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 76,
        product_id: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 77,
        product_id: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 78,
        product_id: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 79,
        product_id: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 80,
        product_id: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 81,
        product_id: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 82,
        product_id: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 83,
        product_id: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 84,
        product_id: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 85,
        product_id: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 86,
        product_id: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 87,
        product_id: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 88,
        product_id: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 89,
        product_id: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 90,
        product_id: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 91,
        product_id: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 92,
        product_id: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        image_id: 93,
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
