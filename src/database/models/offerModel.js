const offerModel = (sequelize, DataTypes) => {
	const offerTable = sequelize.define('Offer', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
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
	}, {timestamps: false});
	return offerTable;
};

module.exports = offerModel;