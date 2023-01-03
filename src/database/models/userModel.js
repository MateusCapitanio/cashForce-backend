const userModel = (sequelize, DataTypes) => {
	const userTable = sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		phoneNumber: DataTypes.STRING,
		mobile: DataTypes.STRING,
		departament: DataTypes.STRING,
		verificationCode: DataTypes.STRING,
		emailChecked: DataTypes.TINYINT,
		cashforceAdm: DataTypes.TINYINT,
	},{
		tableName: 'Users'
	});

	return userTable;
};

module.exports = userModel;