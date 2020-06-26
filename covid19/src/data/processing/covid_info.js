const fs = require("fs");
const csv = require("csv-parser");
const dbconn = require("../../db/config/connection");
const covid = require("../../db/models/covid_info");
const country = require("../../db/models/countries");
const update_col_data = require("./update_cols");
const config = require("./config");

const Covid = covid.Covid;
const Country = country.Country;
const sequelize = dbconn.sequelize;
const months = config.dates;

async function data_insertion_covid_info() {
  Covid.sync().then(async function () {
    await Covid.destroy({ where: {}, truncate: true });
  });
  await fs
    .createReadStream(
      "/Users/bhagyalakshmi/Documents/Everest_Assignments/covid19/src/data/csv_files/confirm.csv"
    )
    .pipe(csv())
    .on("data", async (row) => {
      const date = [
        months.jan,
        months.feb,
        months.march,
        months.april,
        months.may,
        months.june,
      ];
      let date_val = [];
      date_val = date.map((ele) => {
        return row[ele];
      });
      const country = await row["Country/Region"];
      sequelize
        .query("select country_code from countries where country_name=:value", {
          replacements: { value: country },
        })
        .then(async (data) => {
          const country_id = data[0][0].country_code;
          const record = await Covid.findOne({
            where: {
              country_code: country_id,
            },
          });
          if (!record) {
            await sequelize.sync().then(async function () {
              return Covid.bulkCreate([
                {
                  country_code: country_id,
                  dates: months.jan,
                  confirm_cases: row[months.jan],
                  recover_cases: 0,
                  no_of_deaths: 0,
                },
                {
                  country_code: country_id,
                  dates: months.feb,
                  confirm_cases: row[months.feb],
                  recover_cases: 0,
                  no_of_deaths: 0,
                },
                {
                  country_code: country_id,
                  dates: months.march,
                  confirm_cases: row[months.march],
                  recover_cases: 0,
                  no_of_deaths: 0,
                },
                {
                  country_code: country_id,
                  dates: months.april,
                  confirm_cases: row[months.april],
                  recover_cases: 0,
                  no_of_deaths: 0,
                },
                {
                  country_code: country_id,
                  dates: months.may,
                  confirm_cases: row[months.may],
                  recover_cases: 0,
                  no_of_deaths: 0,
                },
                {
                  country_code: country_id,
                  dates: months.june,
                  confirm_cases: row[months.june],
                  recover_cases: 0,
                  no_of_deaths: 0,
                },
              ]);
            });
          } else {
            const result = await update_col_data.update_data(
              country_code,
              0,
              date_val
            );
            console.log(result);
          }
        });
    })
    .on("end", async () => {
      console.log("csv file is successfully processed!");
      await update_col_data.main();
    });
}

module.exports = { data_insertion_covid_info };
