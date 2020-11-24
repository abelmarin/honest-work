const Pool = require("pg").Pool;
const pool = new Pool({
	user: "my_user",
	host: "localhost",
	database: "my_database",
	password: "root",
	port: 5432,
});

const getFeedback = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM Feedback ORDER BY HonestPoints', (error, results) => {
      if (error)
      {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const createFeedback = (body) => {
  return new Promise(function(resolve, reject) {
    const {FeedbackID, subject, txt, PID} = body;
    pool.query('INSERT INTO Feedback (FeedbackID, subject, text, PID) VALUES ($1, $2, $3, $4) RETURNING *', [FeedbackID, subject, txt, PID], (error, results) => {
      if (error) 
      {
        reject(error);
      }
      resolve("A new feedback has been added: ${results.rows[0]}");
    });
  });
};

const updateFeedback = (body) => {
  return new Promise(function(resolve, reject) {
    const {FID, Points} = body;
    pool.query('UPDATE Feedback SET HonestPoints = Points WHERE FeedbackID = FID', (error, results) => {
      if (error)
      {
	 reject(error);
      }
      resolve(results.rows);
    });
  });
});

const getProject = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM Project ORDER BY ProjectID', (error, results) => {
      if (error)
      {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const createProject = (body) => {
  return new Promise(function(resolve, reject) {
    const {ProjectID, AdminID, TeamID, TasksID, Name} = body;
    pool.query('INSERT INTO Projects (ProjectID, AdminID, TeamID, TasksID, Name) VALUES ($1, $2, $3, $4, $5) RETURNING *', [ProjectID, AdminID, TeamID, TasksID, Name], (error, results) => {
      if (error)
      {
        reject(error);
      }
      resolve("A new project has been added: ${results.rows[0]}");
    });
  });
};

const getUsers = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM Users ORDER BY ID', (error, results) => {
      if (error)
      {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const updateUsers = (body) => {
  return new Promise(function(resolve, reject) {
    const {UID, pwd} = body;
    pool.query('UPDATE Users SET password = pwd WHERE ID = UID', (error, results) => {
      if (error)
      {
	 reject(error);
      }
      resolve(results.rows);
    });
  });
});

const createUser = (body) => {
  return new Promise(function(resolve, reject) {
    const {ID, username, pwd} = body;
    pool.query('INSERT INTO Users (ID, username, password) VALUES ($1, $2, $3) RETURNING *', [ID, username, pwd], (error, results) => {
      if (error) 
      {
        reject(error);
      }
      resolve("A new user has been added: ${results.rows[0]}");
    });
  });
};

const getTasks = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM Tasks ORDER BY ProjectID', (error, results) => {
      if (error)
      {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const createTask = (body) => {
  return new Promise(function(resolve, reject) {
    const {TaskID, TaskName, ProjectID} = body;
    pool.query('INSERT INTO Users (TaskID, TaskName, ProjectID) VALUES ($1, $2, $3) RETURNING *', [TaskID, TaskName, ProjectID], (error, results) => {
      if (error) 
      {
        reject(error);
      }
      resolve("A new task has been added: ${results.rows[0]}");
    });
  });
};

const deleteTask = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id);
    pool.query('DELETE FROM Tasks WHERE TaskID = $1', [id], (error, results) => {
      if (error) 
      {
        reject(error);
      }
      resolve("Task deleted with ID: ${id}");
    });
  });
};

const getTeams = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM Teams ORDER BY TeamID', (error, results) => {
      if (error)
      {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const createTeam = (body) => {
  return new Promise(function(resolve, reject) {
    const {TeamID, UserID} = body;
    pool.query('INSERT INTO Teams(TeamID, UserID) VALUES ($1, $2) RETURNING *', [TeamID, UserID], (error, results) => {
      if (error) 
      {
        reject(error);
      }
      resolve("A new team has been added: ${results.rows[0]}");
    });
  });
};

const deleteTeam = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id);
    pool.query('DELETE FROM Teams WHERE TeamID = $1', [id], (error, results) => {
      if (error) 
      {
        reject(error);
      }
      resolve("Team deleted with ID: ${id}");
    });
  });
};

module.exports = {
  getFeedback,
  createFeedback,
  updateFeedback,
  getProject,
  createProject,
  getUsers,
  updateUsers,
  createUser,
  getTasks,
  createTask,
  deleteTask,
  getTeams,
  createTeam,
  deleteTeam
};
