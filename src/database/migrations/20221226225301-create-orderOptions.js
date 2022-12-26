'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('OrderOption', { 
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
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
				default: 1,
			},
			orderId: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('OrderOption');
	}
};
