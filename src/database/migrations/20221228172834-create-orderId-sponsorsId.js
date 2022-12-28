'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.addColumn(
				'offers',
				'orderId',
				{
					type: Sequelize.INTEGER(11),
					defaultValue: null,
					references: {
						model: 'orders',
						key: 'id',
					},
					onUpdate: 'CASCADE',
					onDelete: null,
				}
			),
			queryInterface.addColumn(
				'offers',
				'sponsorId',
				{
					type: Sequelize.INTEGER(11),
					defaultValue: null,
					references: {
						model: 'sponsors',
						key: 'id',
					},
					onUpdate: 'CASCADE',
					onDelete: null,
				}
			),
		])
			.then(() => queryInterface.addIndex('offers', ['orderId'], { name:  'orderId', }))
			.then(() => queryInterface.addIndex('offers', ['sponsorId'], { name:  'sponsorId', }));
	},

	down: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.removeColumn('offers', 'orderId'),
			queryInterface.removeColumn('offers', 'sponsorId')
		]);
	}
};
