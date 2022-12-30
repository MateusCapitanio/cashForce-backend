// 'use strict';

// module.exports = {
// 	up: async (queryInterface, Sequelize) => {
// 		await queryInterface.addConstraint('Buyers', {
// 			fields: ['cnpjId'],
// 			type: 'foreign key',
// 			name: 'buyers_ibfk_1',
// 			references: {
// 				table: 'Cnpjs',
// 				field: 'id'
// 			},
// 			onDelete: null,
// 			onUpdate: 'cascade',
// 		})
// 			.then(() => queryInterface.addIndex('Buyers', ['cnpjId'], { name:  'cnpjId' }));
// 	},

// 	down: async (queryInterface, Sequelize) => {
// 		await queryInterface.removeConstraint('Buyers', 'buyers_ibfk_1');
// 	}
// };
