const orderOptionsModel = (sequelize, DataTypes) => {
	const orderOptionsTable = sequelize.define('OrderOptions', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		nDup: DataTypes.STRING,
		dVenc: DataTypes.STRING,
		vDup: DataTypes.STRING,
		availableToMarket: DataTypes.TINYINT,
		orderId: DataTypes.INTEGER,
	}, {timestamps: false});
	return orderOptionsTable;
};

module.exports = orderOptionsModel;