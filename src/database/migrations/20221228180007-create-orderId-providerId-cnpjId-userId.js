'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.addConstraint(
				'Orders',
				{
					fields: ['buyerId'],
					type: 'foreign key',
					name: 'orders_ibfk_139',
					references: {
						table: 'Buyers',
						field: 'id'
					},
					onDelete: 'SET NULL',
					onUpdate: 'CASCADE',
				}
			),
			queryInterface.addConstraint(
				'Orders',
				{
					fields: ['providerId'],
					type: 'foreign key',
					name: 'orders_ibfk_140',
					references: {
						table: 'Providers',
						field: 'id'
					},
					onDelete: 'SET NULL',
					onUpdate: 'CASCADE',
				}
			),
			queryInterface.addConstraint(
				'Orders',
				{
					fields: ['cnpjId'],
					type: 'foreign key',
					name: 'orders_ibfk_141',
					references: {
						table: 'Cnpjs',
						field: 'id'
					},
					onDelete: 'SET NULL',
					onUpdate: 'CASCADE',
				}
			),
			queryInterface.addConstraint(
				'Orders',
				{
					fields: ['userId'],
					type: 'foreign key',
					name: 'orders_ibfk_142',
					references: {
						table: 'Users',
						field: 'id'
					},
					onDelete: 'SET NULL',
					onUpdate: 'CASCADE',
				}
			),
		])
			.then(() => queryInterface.addIndex('Orders', ['userId'], { name:  'userId', }))
			.then(() => queryInterface.addIndex('Orders', ['buyerId'], { name:  'buyerId', }))
			.then(() => queryInterface.addIndex('Orders', ['providerId'], { name:  'providerId', }))
			.then(() => queryInterface.addIndex('Orders', ['cnpjId'], { name:  'cnpjId', }));
	},

	down: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.removeConstraint('Orders', 'orderId'),
			queryInterface.removeConstraint('Orders', 'sponsorId')
		]);
	}
};
