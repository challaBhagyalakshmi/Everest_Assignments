const dotenv = require("dotenv");
dotenv.config();

const dates = {
  jan: process.env.jan,
  feb: process.env.feb,
  march: process.env.march,
  april: process.env.april,
  may: process.env.may,
  june: process.env.june,
  confirm_file_path: process.env.confirmed_file_path,
  recover_file_path: process.env.recovered_file_path,
  deaths_file_path: process.env.deaths_file_path,
};

module.exports = { dates };
