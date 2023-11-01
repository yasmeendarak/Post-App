const { DataTypes, Model, Sequelize } = require('sequelize');
const sequelize = require('../dataConfig').sequelize;

interface PostAttributes {
  id: number;
  title: string;
  author: string;
  content: string;
  category: string;
  subcategory: string;
}

class Post extends Model<PostAttributes> {
  static init: any;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.STRING,
    },
    subcategory: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Post',
  }
);

export { Post };
