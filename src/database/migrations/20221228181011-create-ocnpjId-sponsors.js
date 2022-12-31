'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addConstraint('Sponsors', {
			fields: ['cnpjId'],
			type: 'foreign key',
			name: 'sponsors_ibfk_1',
			references: {
				table: 'Cnpjs',
				field: 'id'
			},
			onDelete: null,
			onUpdate: 'cascade',
		}).then(() => queryInterface.addIndex('Sponsors', ['cnpjId'], { name:  'cnpjId' }));
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeConstraint('Sponsors', 'cnpjId');
	}
};
