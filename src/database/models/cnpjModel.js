const cnpjModel = (sequelize, DataTypes) => {
	const cnpjTable = sequelize.define('Cnpj', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		cnpj: {
			type: DataTypes.STRING,
			unique: true,
		},
		companyType: DataTypes.STRING,
	}, {timestamps: false});

	// cnpjTable.associate = (models) => {
	// 	cnpjTable.hasMany(models.Buyer, { foreignKey: 'id', as: 'cnpjId' });
	// };

	return cnpjTable;
};

module.exports = cnpjModel;