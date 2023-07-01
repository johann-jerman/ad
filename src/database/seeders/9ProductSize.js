'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('size_products', [
      {
        size_id: 2,
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 1,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 2,
        product_id: 2,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 2,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 2,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 2,
        product_id: 3,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 3,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        
        product_id: 3,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 2,
        product_id: 4,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 4,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 4,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 5,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 5,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 6,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 6,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 7,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 7,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 8,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 8,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 9,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 9,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 10,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 10,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 11,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 11,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 12,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 12,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 13,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 13,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 14,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 14,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 15,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 15,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 16,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 16,
        createdAt: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 17,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 17,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 18,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 18,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 19,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 19,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 20,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 20,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 21,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 21,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 5,
        product_id: 22,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 6,
        product_id: 22,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 4,
        product_id: 23,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 2,
        product_id: 23,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 4,
        product_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 2,
        product_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 4,
        product_id: 25,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 2,
        product_id: 25,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 4,
        product_id: 26,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 2,
        product_id: 26,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 4,
        product_id: 27,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 2,
        product_id: 27,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 4,
        product_id: 28,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 2,
        product_id: 28,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 4,
        product_id: 29,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 2,
        product_id: 29,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 4,
        product_id: 30,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 2,
        product_id: 30,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 4,
        product_id: 31,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 2,
        product_id: 31,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 4,
        product_id: 32,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        size_id: 2,
        product_id: 32,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
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
