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
		/**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('cnpjs');
		/**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
	}
};
