'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
       'todos',
       [
         {
            id: 1,
            text: 'Wash the dishes',
            isDone: true,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            text: "Master Rubik's Cube",
            isDone: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 3,
            text: 'Take over the world',
            isDone: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          },          
        ],
      {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
