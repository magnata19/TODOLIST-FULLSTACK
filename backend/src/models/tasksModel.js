const connection = require("./connection");

//esse método me retorna todas tasks do banco de dados
const getAll = async () => {
  const tasks = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

module.exports = {
  getAll,
};
