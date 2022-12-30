// 'use strict';

// module.exports = {
// 	up: async (queryInterface, Sequelize) => {
// 		await queryInterface.addConstraint('Providers', {
// 			fields: ['cnpjId'],
// 			type: 'foreign key',
// 			name: 'providers_ibfk_1',
// 			references: {
// 				table: 'Cnpjs',
// 				field: 'id'
// 			},
// 			onDelete: null,
// 			onUpdate: 'cascade',
// 		}).then(() => queryInterface.addIndex('Providers', ['cnpjId'], { name:  'cnpjId' }));
// 	},

// 	down: async (queryInterface, Sequelize) => {
// 		await queryInterface.removeConstraint('Providers', 'cnpjId');
// 	}
// };
