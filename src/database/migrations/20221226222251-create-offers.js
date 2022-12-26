'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Offers', { 
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				primaryKey: true,
			},
			tax: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			tariff: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			adValorem: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			float: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			iof: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			expiresIn: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			paymentStatusSponsor: {
				type: Sequelize.TINYINT(1),
				default:0,
			},
			paymentStatusProvider: {
				type: Sequelize.TINYINT(1),
				default:0,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			orderId: {
				type: Sequelize.INTEGER,
			},
			sponsorId: {
				type: Sequelize.INTEGER,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Offers');
	}
};