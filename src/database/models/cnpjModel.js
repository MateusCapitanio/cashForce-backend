const cnpjModel = (sequelize, DataTypes) => {
	const cnpjTable = sequelize.define('Cnpj', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		cnpj: DataTypes.STRING,
		companyType: DataTypes.STRING,
	}, {timestamps: false});
	return cnpjTable;
};

module.exports = cnpjModel;