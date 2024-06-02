const connection = require("../config/database");
const getAllUser = async () => {
  const [results, fields] = await connection.query(`SELECT * FROM  Users u`);
  return results;
};
module.exports = {
  getAllUser,
};
