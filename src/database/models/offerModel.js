const offerModel = (sequelize, DataTypes) => {
	const offerTable = sequelize.define('Offer', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		tax: DataTypes.STRING,
		tariff: DataTypes.STRING,
		adValorem: DataTypes.STRING,
		float: DataTypes.STRING,
		iof: DataTypes.STRING,
		expiresIn: DataTypes.DATE,
		paymentStatusSponsor: DataTypes.TINYINT,
		paymentStatusProvider: DataTypes.TINYINT,
		orderId: DataTypes.INTEGER,
		sponsorId: DataTypes.INTEGER,
	},{
		tableName: 'Offers'
	});

	return offerTable;
};

module.exports = offerModel;