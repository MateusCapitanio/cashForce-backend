'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addConstraint('providers', {
			fields: ['cnpjId'],
			type: 'foreign key',
			name: 'providers_ibfk_1',
			references: {
				table: 'cnpjs',
				field: 'id'
			},
			onDelete: null,
			onUpdate: 'cascade',
		}).then(() => queryInterface.addIndex('providers', ['cnpjId'], { name:  'cnpjId' }));
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeConstraint('providers', 'cnpjId');
	}
};
