'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Buyers', { 
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tradingName: {
        type: Sequelize.STRING,
        default: null,
      },
      cashforceTax: {
        type: Sequelize.STRING,
        default: null,
      },
      responsibleName: {
        type: Sequelize.STRING,
        default: null,
      },
      responsibleEmail: {
        type: Sequelize.STRING,
        default: null,
      },
      responsiblePosition: {
        type: Sequelize.STRING,
        default: null,
      },
      responsiblePhone: {
        type: Sequelize.STRING,
        default: null,
      },
      responsibleMobile: {
        type: Sequelize.STRING,
        default: null,
      },
      website: {
        type: Sequelize.STRING,
        default: null,
      },
      postalCode: {
        type: Sequelize.STRING,
        default: null,
      },
      address: {
        type: Sequelize.STRING,
        default: null,
      },
      number: {
        type: Sequelize.STRING,
        default: null,
      },
      complement: {
        type: Sequelize.STRING,
        default: null,
      },
      neighborhood: {
        type: Sequelize.STRING,
        default: null,
      },
      city: {
        type: Sequelize.STRING,
        default: null,
      },
      state: {
        type: Sequelize.STRING,
        default: null,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        default: null,
      },
      situation: {
        type: Sequelize.STRING,
        default: null,
      },
      situationDate: {
        type: Sequelize.STRING,
        default: null,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cnpjId: {
        type: Sequelize.INTEGER(11),
        default: null,
      },
      confirm: {
        type: Sequelize.TINYINT(1),
        default: 1,
      },
      email: {
        type: Sequelize.STRING,
        default: null,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Buyers');
  }
};
