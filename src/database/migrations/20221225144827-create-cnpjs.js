'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('cnpjs', { 
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false
			},
			cnpj: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			companyType: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('cnpjs');
	}
};
