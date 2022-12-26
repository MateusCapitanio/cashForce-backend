const cnpjModel = (sequelize, DataTypes) => {
	const cnpjTable = sequelize.define('Cnpj', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		cnpj: DataTypes.STRING,
		companyType: DataTypes.STRING,
	}, {timestamps: false});
	return cnpjTable;
};

module.exports = cnpjModel;