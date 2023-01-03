const orderModel = (sequelize, DataTypes) => {
	const orderTable = sequelize.define('Order', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		orderNfId: DataTypes.STRING,
		orderNumber: DataTypes.STRING,
		orderPath: DataTypes.STRING,
		orderFileName: DataTypes.STRING,
		orderOriginalName: DataTypes.STRING,
		emissionDate: DataTypes.STRING,
		pdfFile: DataTypes.STRING,
		emitedTo: DataTypes.STRING,
		nNf: DataTypes.STRING,
		CTE: DataTypes.STRING,
		value: DataTypes.STRING,
		cnpjId: DataTypes.INTEGER,
		userId: DataTypes.INTEGER,
		buyerId: DataTypes.INTEGER,
		providerId: DataTypes.INTEGER,
		orderStatusBuyer: DataTypes.STRING,
		orderStatusProvider: DataTypes.STRING,
		deliveryReceipt: DataTypes.STRING,
		cargoPackingList: DataTypes.STRING,
		deliveryCtrc: DataTypes.STRING,
	},{
		tableName: 'Orders'
	});

	orderTable.associate = (models) => {
		orderTable.belongsTo(models.User, { foreignKey: "userId", as: "Users" });
		orderTable.belongsTo(models.Cnpj, { foreignKey: "cnpjId", as: "Cnpjs" });
		orderTable.belongsTo(models.Buyer, { foreignKey: "buyerId", as: "Buyers" });
		orderTable.belongsTo(models.Provider, { foreignKey: "providerId", as: "Providers" });
	}

	orderTable.associate = (models) => {
		orderTable.hasMany(models.Offer, { foreignKey: "orderId", as: "Offers" });
		orderTable.hasMany(models.OrderOption, { foreignKey: "orderId", as: "OrderOptions" });
	}

	return orderTable;
};

module.exports = orderModel;