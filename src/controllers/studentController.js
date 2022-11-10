const connection = require("../database/dbcon");

// get all students
const getStudents = async (req, res) => {
  const getDatas = () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM students", (error, result) => {
        if (error) {
          return reject(error);
        }
        return resolve(result);
      });
    });
  };

  const data = await getDatas();
  res.status(200).json(data);
};

// get single student
const getStudent = async (req, res) => {
  const { id } = req.params;

  const getData = () => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM students WHERE id=?",
        [id],
        (error, result) => {
          if (error) {
            return reject(error);
          }
          return resolve(result);
        }
      );
    });
  };

  const data = await getData();
  res.status(200).json(data);
};

// create student
const createStudent = async (req, res) => {
  const { username, password } = req.body;

  const createData = () => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO students (username, password) VALUES (?, ?)",
        [username, password],
        (error, result) => {
          if (error) {
            return reject(error);
          }
          return resolve(result);
        }
      );
    });
  };

  // update student
  const data = await createData();
  res.status(200).json(data);
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  const updateData = () => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE students SET username=?, password=? WHERE id=?",
        [username, password, id],
        (error, result) => {
          if (error) {
            return reject(error);
          }
          return resolve(result);
        }
      );
    });
  };

  const data = await updateData();
  res.status(200).json(data);
};

// delete student
const deleteStudent = async (req, res) => {
  const { id } = req.params;

  const deleteData = () => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM students WHERE id=?",
        [id],
        (error, result) => {
          if (error) {
            return reject(error);
          }
          return resolve(result);
        }
      );
    });
  };

  const data = await deleteData();
  res.status(200).json(data);
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
