'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('orders', { 
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				primaryKey: true,
			},
			orderNfId: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			orderNumber: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			orderPath: {
				type: Sequelize.STRING,
				default: null,
				unique: true,
			},
			orderFileName: {
				type: Sequelize.STRING,
				default: null,
				unique: true,
			},
			orderOriginalName: {
				type: Sequelize.STRING,
				default: null,
				unique: true,
			},
			emissionDate: {
				type: Sequelize.STRING,
				default: null,
			},
			pdfFile: {
				type: Sequelize.STRING,
				default: null,
			},
			emitedTo: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			nNf: {
				type: Sequelize.STRING,
				default: null,
			},
			CTE: {
				type: Sequelize.STRING,
				default: null,
			},
			value: {
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
			userId: {
				type: Sequelize.INTEGER(11),
				default: null,
			},
			buyerId: {
				type: Sequelize.INTEGER(11),
				default: null,
			},
			providerId: {
				type: Sequelize.INTEGER(11),
				default: null,
			},
			orderStatusBuyer: {
				type: Sequelize.STRING,
				default: '0',
			},
			orderStatusProvider: {
				type: Sequelize.STRING,
				default: '0',
			},
			deliveryReceipt: {
				type: Sequelize.STRING,
				default: null,
			},
			cargoPackingList: {
				type: Sequelize.STRING,
				default: null,
			},
			deliveryCtrc: {
				type: Sequelize.STRING,
				default: null,
			},
		})
			.then(() => queryInterface.addIndex('orders', ['userId'], { name:  'userId', }))
			.then(() => queryInterface.addIndex('orders', ['buyerId'], { name:  'buyerId', }))
			.then(() => queryInterface.addIndex('orders', ['providerId'], { name:  'providerId', }))
			.then(() => queryInterface.addIndex('orders', ['cnpjId'], { name:  'cnpjId', }));
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('orders');
	}
};
