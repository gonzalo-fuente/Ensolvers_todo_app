'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
       'todos',
       [
         {
            text: 'Wash the dishes',
            isDone: true,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            text: 'Finish Ensolvers excercise',
            isDone: true,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            text: "Master Rubik's Cube",
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
