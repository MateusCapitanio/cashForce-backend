'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('orderOptions', { 
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			nDup: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			dVenc: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			vDup: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			availableToMarket: {
				type: Sequelize.TINYINT(1),
				allowNull: false,
				defaultValue: 1,
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
				type: Sequelize.INTEGER(11),
				defaultValue: null,
			}
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('orderOptions');
	}
};
