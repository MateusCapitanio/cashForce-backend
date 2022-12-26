const orderOptionsModel = (sequelize, DataTypes) => {
	const orderOptionsTable = sequelize.define('OrderOptions', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
		},
		nDup: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dVenc: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		vDup: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		availableToMarket: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		orderId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}, {timestamps: false});
	return orderOptionsTable;
};

module.exports = orderOptionsModel;