'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('sponsors', { 
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				default: null,
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
			bank: {
				type: Sequelize.STRING,
				default: null,
			},
			bankAgency: {
				type: Sequelize.STRING,
				default: null,
			},
			account: {
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
				allowNull: false,
				type: Sequelize.INTEGER(11),
			},
			email: {
				type: Sequelize.STRING,
				default: null,
			},
		}).then(() => queryInterface.addIndex('sponsors', ['cnpjId'], { name:  'cnpjId', }));
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('sponsors');
	}
};
