const connection = require("../config/database");
const getAllUser = async () => {
  const [results, fields] = await connection.query(`SELECT * FROM  Users u`);
  return results;
};
const createUser = async (email, name, city) => {
  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?,  ?, ?)`,
    [email, name, city]
  );
  return results;
};

const getUserupdate = async (id) => {
  const [results, fields] = await connection.query(
    `SELECT * FROM  Users u WHERE id = ?`,
    [id]
  );
  return results;
};
const updateUser = async (id, email, name, city) => {
  const [results, fields] = await connection.query(
    `UPDATE Users SET email = ?, name  = ?, city = ? WHERE id = ?`,
    [email, name, city, id]
  );
  return results;
};
let DeleteUser = async (id) => {
  const [results, fields] = await connection.query(
    `DELETE FROM Users  WHERE id = ? `,
    [id]
  );
  return results;
};
module.exports = {
  getAllUser,
  createUser,
  getUserupdate,
  updateUser,
  DeleteUser,
};
