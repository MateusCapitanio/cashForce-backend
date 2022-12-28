'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn('buyers', 'cnpjId', {
			type: Sequelize.INTEGER(11),
			defaultValue: null,
			references: {
				model: 'cnpjs',
				key: 'id',
			},
			onUpdate: null,
			onDelete: 'CASCADE',
		}).then(() => queryInterface.addIndex('buyers', ['cnpjId'], { name:  'cnpjId' }));
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn('buyers', 'cnpjId');
	}
};
