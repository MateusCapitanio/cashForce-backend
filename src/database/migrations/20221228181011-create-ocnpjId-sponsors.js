'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addConstraint('sponsors', {
			fields: ['cnpjId'],
			type: 'foreign key',
			name: 'sponsors_ibfk_1',
			references: {
				table: 'cnpjs',
				field: 'id'
			},
			onDelete: null,
			onUpdate: 'cascade',
		}).then(() => queryInterface.addIndex('sponsors', ['cnpjId'], { name:  'cnpjId' }));
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeConstraint('sponsors', 'cnpjId');
	}
};
