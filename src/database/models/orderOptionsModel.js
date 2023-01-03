const orderOptionsModel = (sequelize, DataTypes) => {
	const orderOptionsTable = sequelize.define('OrderOption', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		nDup: DataTypes.STRING,
		dVenc: DataTypes.STRING,
		vDup: DataTypes.STRING,
		availableToMarket: DataTypes.TINYINT,
		orderId: DataTypes.INTEGER,
	}, {
		tableName: 'OrderOptions',
	});

	orderOptionsTable.associate = (models) => {
		orderOptionsTable.belongsTo(models.Order, { foreignKey: "orderId", as: "Orders" });
	}

	return orderOptionsTable;
};

module.exports = orderOptionsModel;