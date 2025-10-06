const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// CREATE: Add a new student
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// READ: Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

// UPDATE: Edit a student by ID
router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!student) {
      return res.status(404).send();
    }
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE: Remove a student by ID
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send();
    }
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;