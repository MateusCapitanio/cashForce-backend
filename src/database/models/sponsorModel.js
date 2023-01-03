const sponsorModel = (sequelize, DataTypes) => {
	const sponsorTable = sequelize.define('Sponsor', {
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
		bank: DataTypes.STRING,
		bankAgency: DataTypes.STRING,
		account: DataTypes.STRING,
		phoneNumber: DataTypes.STRING,
		situation: DataTypes.STRING,
		situationDate: DataTypes.STRING,
		cnpjId: DataTypes.INTEGER,
		email: DataTypes.STRING,
	},{
		tableName:'Sponsors',
	});

	sponsorTable.associate = (models) => {
		sponsorTable.belongsTo(models.Cnpj, { foreignKey: "cnpjId", as: "Sponsors" });
	}

	sponsorTable.associate = (models) => {
		sponsorTable.hasMany(models.Offer, { foreignKey: "sponsorId", as: "Offers" });
	}

	return sponsorTable;
};

module.exports = sponsorModel;