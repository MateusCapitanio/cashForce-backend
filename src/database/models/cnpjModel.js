const cnpjModel = (sequelize, DataTypes) => {
	const cnpjTable = sequelize.define('Cnpj', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		cnpj: {
			type: DataTypes.STRING,
			unique: true,
		},
		companyType: DataTypes.STRING,
	}, {
		tableName: 'Cnpjs'
	});

	cnpjTable.associate = (models) => {
		cnpjTable.hasMany(models.Order, { foreignKey: "cnpjId", as: "Orders" });
		cnpjTable.hasMany(models.Buyer, { foreignKey: "cnpjId", as: "Buyers" });
		cnpjTable.hasMany(models.Provider, { foreignKey: "cnpjId", as: "Providers" });
		cnpjTable.hasMany(models.Sponsor, { foreignKey: "cnpjId", as: "Sponsors" });
	}

	return cnpjTable;
};

module.exports = cnpjModel;