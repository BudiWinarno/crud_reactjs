import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Produk = db.define(
  "daftarbarang",
  {
    nama: {
      type: DataTypes.STRING,
    },
    harga: {
      type: DataTypes.DOUBLE,
    },
    stok: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Produk;
