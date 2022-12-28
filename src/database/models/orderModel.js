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
		// cnpjId: DataTypes.INTEGER,
		userId: DataTypes.INTEGER,
		buyerId: DataTypes.INTEGER,
		providerId: DataTypes.INTEGER,
		orderStatusBuyer: DataTypes.STRING,
		orderStatusProvider: DataTypes.STRING,
		deliveryReceipt: DataTypes.STRING,
		cargoPackingList: DataTypes.STRING,
		deliveryCtrc: DataTypes.STRING,
	},);
	return orderTable;
};

module.exports = orderModel;