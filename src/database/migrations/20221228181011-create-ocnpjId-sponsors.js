'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn('sponsors', 'cnpjId', {
			type: Sequelize.INTEGER(11),
			defaultValue: null,
			references: {
				model: 'cnpjs',
				key: 'id',
			},
			onUpdate: 'CASCADE',
			onDelete: null,
		}).then(() => queryInterface.addIndex('sponsors', ['cnpjId'], { name:  'cnpjId' }));
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn('sponsors', 'cnpjId');
	}
};
