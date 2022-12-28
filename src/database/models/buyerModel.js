const BuyerModel = (sequelize, DataTypes) => {
	const buyerTable = sequelize.define('Buyer', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		tradingName: DataTypes.STRING,
		cashforceTax: DataTypes.STRING,
		responsibleName: DataTypes.STRING,
		responsibleEmail: DataTypes.STRING,
		responsiblePosition: DataTypes.STRING,
		responsiblePhone: DataTypes.STRING,
		responsibleMobile: DataTypes.STRING,
		website: DataTypes.STRING,
		postalCode: DataTypes.STRING,
		address: DataTypes.STRING,
		number: DataTypes.STRING,
		complement: DataTypes.STRING,
		neighborhood: DataTypes.STRING,
		city: DataTypes.STRING,
		state: DataTypes.STRING,
		phoneNumber: DataTypes.STRING,
		situation: DataTypes.STRING,
		situationDate: DataTypes.STRING,
		// cnpjId: DataTypes.INTEGER,
		confirm: DataTypes.TINYINT,
		email: DataTypes.STRING,
	},);

	// buyerTable.associate = (models) => {
	// 	buyerTable.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpjs' });
	// };

	return buyerTable;
};

module.exports = BuyerModel;