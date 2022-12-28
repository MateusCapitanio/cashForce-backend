'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addConstraint('orderOptions', {
			fields: ['orderId'],
			type: 'foreign key',
			name: 'orderPortions_ibfk_1',
			references: {
				table: 'orders',
				field: 'id'
			},
			onDelete: null,
			onUpdate: 'cascade',
		}).then(() => queryInterface.addIndex('orderOptions', ['orderId'], { name:  'orderId' }));
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeConstraint('orderOptions', 'orderPortions_ibfk_1');
	}
};
