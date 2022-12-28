// 'use strict';

// module.exports = {
// 	up: (queryInterface, Sequelize) => {
// 		return Promise.all([
// 			queryInterface.addConstraint(
// 				'offers',
// 				{
// 					fields: ['orderId'],
// 					type: 'foreign key',
// 					name: 'offers_ibfk_61',
// 					// references: {
// 					// 	table: 'orders',
// 					// 	field: 'id'
// 					// },
// 					onDelete: null,
// 					onUpdate: 'cascade',
// 				}
// 			),
// 			queryInterface.addConstraint(
// 				'offers',
// 				{
// 					fields: ['sponsorId'],
// 					type: 'foreign key',
// 					name: 'offers_ibfk_62',
// 					// references: {
// 					// 	table: 'sponsors',
// 					// 	field: 'id'
// 					// },
// 					onDelete: null,
// 					onUpdate: 'cascade',
// 				}
// 			),
// 		])
// 			.then(() => queryInterface.addIndex('offers', ['orderId'], { name:  'orderId', }))
// 			.then(() => queryInterface.addIndex('offers', ['sponsorId'], { name:  'sponsorId', }));
// 	},

// 	down: (queryInterface, Sequelize) => {
// 		return Promise.all([
// 			queryInterface.removeConstraint('offers', 'offers_ibfk_61'),
// 			queryInterface.removeConstraint('offers', 'offers_ibfk_62')
// 		]);
// 	}
// };
