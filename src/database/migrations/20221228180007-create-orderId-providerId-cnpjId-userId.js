'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.addConstraint(
				'orders',
				{
					fields: ['buyerId'],
					type: 'foreign key',
					name: 'orders_ibfk_139',
					references: {
						table: 'buyers',
						field: 'id'
					},
					onDelete: null,
					onUpdate: 'cascade',
				}
			),
			queryInterface.addConstraint(
				'orders',
				{
					fields: ['providerId'],
					type: 'foreign key',
					name: 'orders_ibfk_140',
					references: {
						table: 'providers',
						field: 'id'
					},
					onDelete: null,
					onUpdate: 'cascade',
				}
			),
			queryInterface.addConstraint(
				'orders',
				{
					fields: ['cnpjId'],
					type: 'foreign key',
					name: 'orders_ibfk_141',
					references: {
						table: 'cnpjs',
						field: 'id'
					},
					onDelete: null,
					onUpdate: 'cascade',
				}
			),
			queryInterface.addConstraint(
				'orders',
				{
					fields: ['userId'],
					type: 'foreign key',
					name: 'orders_ibfk_142',
					references: {
						table: 'users',
						field: 'id'
					},
					onDelete: null,
					onUpdate: 'cascade',
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
			queryInterface.removeConstraint('orders', 'orderId'),
			queryInterface.removeConstraint('orders', 'sponsorId')
		]);
	}
};
