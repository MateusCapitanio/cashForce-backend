'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('users', { 
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			phoneNumber: {
				type: Sequelize.STRING,
				default: null,
			},
			mobile: {
				type: Sequelize.STRING,
				default: null,
			},
			departament: {
				type: Sequelize.STRING,
				default: null,
			},
			verificationCode: {
				type: Sequelize.STRING,
				default: null,
			},
			emailChecked: {
				type: Sequelize.TINYINT(1),
				default: 0,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			cashforceAdm: {
				type: Sequelize.TINYINT(1),
				default: 0,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('users');
	}
};
