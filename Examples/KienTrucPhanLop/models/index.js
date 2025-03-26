"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};
const log = require("log4js").getLogger("models:index");
log.level = "info";

let sequelize;
// Khởi tạo Sequelize dựa trên cấu hình từ config.js
sequelize = new Sequelize({
  dialect: config.dialect,
  storage: config.storage, // Dùng cho SQLite
  logging: config.logging,
});

(async () => {
  try {
    await sequelize.sync(); // Đồng bộ hóa models với database
    log.info("SQLite Connected ✅");
  } catch (error) {
    log.error("SQLite Connection Failure 🔥", error);
    process.exit(1);
  }
})();

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;