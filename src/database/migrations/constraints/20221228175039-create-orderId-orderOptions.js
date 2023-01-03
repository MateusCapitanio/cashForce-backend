'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addConstraint('OrderOptions', {
			fields: ['orderId'],
			type: 'foreign key',
			name: 'orderPortions_ibfk_1',
			references: {
				table: 'Orders',
				field: 'id'
			},
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE',
		}).then(() => queryInterface.addIndex('OrderOptions', ['orderId'], { name:  'orderId' }));
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeConstraint('OderOptions', 'orderPortions_ibfk_1');
	}
};
