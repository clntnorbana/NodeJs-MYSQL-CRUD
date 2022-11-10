const connection = require("../database/dbcon");

// get students
const getStudents = async (req, res) => {
  try {
    await connection.query("SELECT * FROM students", (error, result) => {
      if (error) return res.status(404).json(error);
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get single students
const getStudent = async (req, res) => {
  const { id } = req.params;

  try {
    await connection.query(
      "SELECT * FROM students WHERE id = ?",
      [id],
      (error, result) => {
        if (error) return res.status(400).json(error);
        res.status(200).json(result);
      }
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// create student
const createStudent = async (req, res) => {
  const { username, password } = req.body;

  try {
    await connection.query(
      "INSERT INTO students (username, password) VALUES (?, ?)",
      [username, password],
      (error, result) => {
        if (error) return res.status(400).json(error);
        res.status(200).json(result);
      }
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete student
const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    await connection.query(
      "DELETE FROM students WHERE id=?",
      [id],
      (error, result) => {
        if (error) return res.status(400).json(error);
        res.status(200).json(result);
      }
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update student
const updateStudent = async (req, res) => {
  const { username, password } = req.body;
  const { id } = req.params;

  try {
    await connection.query(
      "UPDATE students SET username=?, password=? WHERE id=?",
      [username, password, id],
      (error, result) => {
        if (error) return res.status(400).json(error);
        res.status(200).json(result);
      }
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  deleteStudent,
  updateStudent,
};
