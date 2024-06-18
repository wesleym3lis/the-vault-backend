const express = require('express');
const Record = require('../models/Record');

const router = express.Router();

// Insert a new record
router.post('/records', async (req, res) => {
  const { service, username, password } = req.body;
  try {
    const newRecord = new Record({ service, username, password });
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an existing record
router.put('/records/:id', async (req, res) => {
  const { id } = req.params;
  const { service, username, password } = req.body;
  try {
    const updatedRecord = await Record.findByIdAndUpdate(
      id,
      { service, username, password },
      { new: true }
    );
    if (!updatedRecord) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a record
router.delete('/records/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRecord = await Record.findByIdAndDelete(id);
    if (!deletedRecord) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/getAll', async (req, res) => {
  try{
    const getAll = await Record.find();
    console.log(typeof(getAll));
    if (!getAll.length === 0) {
      return res.status(200).json([]);;
      }
      res.status(200).json(getAll);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

module.exports = router;
