require("dotenv").config();

module.exports = {
  development: {
    dialect: "sqlite",                // Chuyển sang SQLite
    storage: "./database.sqlite",     // Đường dẫn file SQLite
    logging: false,                   // Tắt log để gọn gàng
  },
  test: {
    dialect: "sqlite",
    storage: "./test-database.sqlite",
    logging: false,
  },
  production: {
    dialect: "sqlite",
    storage: "./prod-database.sqlite",
    logging: false,
  },
};