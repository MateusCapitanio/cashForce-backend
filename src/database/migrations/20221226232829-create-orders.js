'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('orders', { 
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
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
				defaultValue: null,
				unique: true,
			},
			orderFileName: {
				type: Sequelize.STRING,
				defaultValue: null,
				unique: true,
			},
			orderOriginalName: {
				type: Sequelize.STRING,
				defaultValue: null,
				unique: true,
			},
			emissionDate: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			pdfFile: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			emitedTo: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			nNf: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			CTE: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			value: {
				type: Sequelize.STRING,
				defaultValue: null,
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
				defaultValue: null,
			},
			userId: {
				type: Sequelize.INTEGER(11),
				defaultValue: null,
			},
			buyerId: {
				type: Sequelize.INTEGER(11),
				defaultValue: null,
			},
			providerId: {
				type: Sequelize.INTEGER(11),
				defaultValue: null,
			},
			orderStatusBuyer: {
				type: Sequelize.STRING,
				defaultValue: '0',
			},
			orderStatusProvider: {
				type: Sequelize.STRING,
				defaultValue: '0',
			},
			deliveryReceipt: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			cargoPackingList: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
			deliveryCtrc: {
				type: Sequelize.STRING,
				defaultValue: null,
			},
		});
		// .then(() => queryInterface.addIndex('orders', ['userId'], { name:  'userId', }))
		// .then(() => queryInterface.addIndex('orders', ['buyerId'], { name:  'buyerId', }))
		// .then(() => queryInterface.addIndex('orders', ['providerId'], { name:  'providerId', }))
		// .then(() => queryInterface.addIndex('orders', ['cnpjId'], { name:  'cnpjId', }));
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('orders');
	}
};
