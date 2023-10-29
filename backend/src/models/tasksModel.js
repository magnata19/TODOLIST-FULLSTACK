const connection = require("./connection");

//esse método me retorna todas tasks do banco de dados
const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const query = 'INSERT INTO tasks(title, status, created_at) VALUES(?, ?, ?)';
  
  const createdTask = await connection.execute(query, [title, 'pendente', 'daser'])
}

module.exports = {
  getAll,
  createTask
};
