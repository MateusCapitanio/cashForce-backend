const offerModel = (sequelize, DataTypes) => {
	const offerTable = sequelize.define('Offer', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
		},
		tax: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		tariff: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		adValorem: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		float: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		iof: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		expiresIn: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		paymentStatusSponsor: {
			type: DataTypes.TINYINT,
		},
		paymentStatusProvider: {
			type: DataTypes.TINYINT,
		},
		orderId: {
			type: DataTypes.INTEGER,
		},
		sponsorId: {
			type: DataTypes.INTEGER,
		},
	}, {timestamps: false});
	return offerTable;
};

module.exports = offerModel;