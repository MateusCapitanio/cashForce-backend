'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn('orderOptions', 'orderId', {
			type: Sequelize.INTEGER(11),
			defaultValue: null,
			references: {
				model: 'orders',
				key: 'id',
			},
			onUpdate: 'CASCADE',
			onDelete: null,
		}).then(() => queryInterface.addIndex('orderOptions', ['orderId'], { name:  'orderId' }));
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn('orderOptions', 'orderId');
	}
};
