const BuyerModel = (sequelize, DataTypes) => {
	const buyerTable = sequelize.define('Buyer', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		tradingName: {
			type: DataTypes.STRING,
			default: null,
		},
		cashforceTax: {
			type: DataTypes.STRING,
			default: null,
		},
		responsibleName: {
			type: DataTypes.STRING,
			default: null,
		},
		responsibleEmail: {
			type: DataTypes.STRING,
			default: null,
		},
		responsiblePosition: {
			type: DataTypes.STRING,
			default: null,
		},
		responsiblePhone: {
			type: DataTypes.STRING,
			default: null,
		},
		responsibleMobile: {
			type: DataTypes.STRING,
			default: null,
		},
		website: {
			type: DataTypes.STRING,
			default: null,
		},
		postalCode: {
			type: DataTypes.STRING,
			default: null,
		},
		address: {
			type: DataTypes.STRING,
			default: null,
		},
		number: {
			type: DataTypes.STRING,
			default: null,
		},
		complement: {
			type: DataTypes.STRING,
			default: null,
		},
		neighborhood: {
			type: DataTypes.STRING,
			default: null,
		},
		city: {
			type: DataTypes.STRING,
			default: null,
		},
		state: {
			type: DataTypes.STRING,
			default: null,
		},
		phoneNumber: {
			type: DataTypes.STRING,
			default: null,
		},
		situation: {
			type: DataTypes.STRING,
			default: null,
		},
		situationDate: {
			type: DataTypes.STRING,
			default: null,
		},
		cnpjId: {
			type: DataTypes.INTEGER,
			default: null,
		},
		confirm: {
			type: DataTypes.TINYINT,
			default: 1,
		},
		email: {
			type: DataTypes.STRING,
			default: null,
		},
	}, {timestamps: false});
	return buyerTable;
};

module.exports = BuyerModel;