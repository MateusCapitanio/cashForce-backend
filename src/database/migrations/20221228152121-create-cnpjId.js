// 'use strict';

// module.exports = {
// 	up: async (queryInterface, Sequelize) => {
// 		await queryInterface.addConstraint('buyers', {
// 			fields: ['cnpjId'],
// 			type: 'foreign key',
// 			name: 'buyers_ibfk_1',
// 			// references: {
// 			// 	table: 'cnpjs',
// 			// 	field: 'id'
// 			// },
// 			onDelete: null,
// 			onUpdate: 'cascade',
// 		})
// 			.then(() => queryInterface.addIndex('buyers', ['cnpjId'], { name:  'cnpjId' }));
// 	},

// 	down: async (queryInterface, Sequelize) => {
// 		await queryInterface.removeConstraint('buyers', 'buyers_ibfk_1');
// 	}
// };
