import connectDB from '../connectDB.js';
const {sequelize,DataTypes} = await connectDB();

const Tutorial= sequelize.define('Tutorial', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    videoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING, // e.g., "JavaScript", "React", etc.
    },
  }, {
    tableName: 'tutorials',
    timestamps: true,
  });

Tutorial.sync()
// Tutorial.sync({ force: true })
export default Tutorial