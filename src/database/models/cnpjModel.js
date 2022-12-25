const cnpjModel = (sequelize, DataTypes) => {
	const cnpjTable = sequelize.define('Buyer', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		cnpj: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		companyType: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, {timestamps: false});
	return cnpjTable;
};

module.exports = cnpjModel;