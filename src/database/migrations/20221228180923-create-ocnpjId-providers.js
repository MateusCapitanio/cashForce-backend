'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn('providers', 'cnpjId', {
			type: Sequelize.INTEGER(11),
			defaultValue: null,
			references: {
				model: 'cnpjs',
				key: 'id',
			},
			onUpdate: 'CASCADE',
			onDelete: null,
		}).then(() => queryInterface.addIndex('providers', ['cnpjId'], { name:  'cnpjId' }));
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn('providers', 'cnpjId');
	}
};
