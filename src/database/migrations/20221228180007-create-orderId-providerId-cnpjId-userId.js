'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.addColumn(
				'orders',
				'buyerId',
				{
					type: Sequelize.INTEGER(11),
					defaultValue: null,
					references: {
						model: 'buyers',
						key: 'id',
					},
					onUpdate: 'CASCADE',
					onDelete: null,
				}
			),
			queryInterface.addColumn(
				'orders',
				'providerId',
				{
					type: Sequelize.INTEGER(11),
					defaultValue: null,
					references: {
						model: 'providers',
						key: 'id',
					},
					onUpdate: 'CASCADE',
					onDelete: null,
				}
			),
			queryInterface.addColumn(
				'orders',
				'cnpjId',
				{
					type: Sequelize.INTEGER(11),
					defaultValue: null,
					references: {
						model: 'cnpjs',
						key: 'id',
					},
					onUpdate: 'CASCADE',
					onDelete: null,
				}
			),
			queryInterface.addColumn(
				'orders',
				'userId',
				{
					type: Sequelize.INTEGER(11),
					defaultValue: null,
					references: {
						model: 'users',
						key: 'id',
					},
					onUpdate: 'CASCADE',
					onDelete: null,
				}
			),
		])
			.then(() => queryInterface.addIndex('orders', ['userId'], { name:  'userId', }))
			.then(() => queryInterface.addIndex('orders', ['buyerId'], { name:  'buyerId', }))
			.then(() => queryInterface.addIndex('orders', ['providerId'], { name:  'providerId', }))
			.then(() => queryInterface.addIndex('orders', ['cnpjId'], { name:  'cnpjId', }));
	},

	down: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.removeColumn('orders', 'orderId'),
			queryInterface.removeColumn('orders', 'sponsorId')
		]);
	}
};
