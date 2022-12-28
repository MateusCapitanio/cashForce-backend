'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('users', { 
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			phoneNumber: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			mobile: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			departament: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			verificationCode: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			emailChecked: {
				type: Sequelize.TINYINT(1),
				defaultValue: 0,
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
				defaultValue: 0,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('users');
	}
};
