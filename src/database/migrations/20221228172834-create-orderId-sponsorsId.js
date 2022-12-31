'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.addConstraint(
				'Offers',
				{
					fields: ['orderId'],
					type: 'foreign key',
					name: 'offers_ibfk_61',
					references: {
						table: 'Orders',
						field: 'id'
					},
					onDelete: null,
					onUpdate: 'cascade',
				}
			),
			queryInterface.addConstraint(
				'Offers',
				{
					fields: ['sponsorId'],
					type: 'foreign key',
					name: 'offers_ibfk_62',
					references: {
						table: 'Sponsors',
						field: 'id'
					},
					onDelete: null,
					onUpdate: 'cascade',
				}
			),
		])
			.then(() => queryInterface.addIndex('Offers', ['orderId'], { name:  'orderId', }))
			.then(() => queryInterface.addIndex('Offers', ['sponsorId'], { name:  'sponsorId', }));
	},

	down: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.removeConstraint('Offers', 'offers_ibfk_61'),
			queryInterface.removeConstraint('Offers', 'offers_ibfk_62')
		]);
	}
};
