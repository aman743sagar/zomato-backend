const express = require('express');
const router = express.Router();
const Rating = require('../models/Rating');

// POST route to add a new rating
router.post('/ratings', async (req, res) => {
  try {
    const { orderId, productId, rating } = req.body;
    const newRating = new Rating({ orderId, productId, rating });
    await newRating.save();
    res.status(201).json(newRating);
  } catch (error) {
    console.error('Error saving rating:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to get all ratings
router.get('/ratings', async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.status(200).json(ratings);
  } catch (error) {
    console.error('Error fetching ratings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.get('/ratings/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    const ratings = await Rating.find({ productId });
    res.status(200).json(ratings);
  } catch (error) {
    console.error('Error fetching ratings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// PUT route to update a rating
router.put('/ratings/:id', async (req, res) => {
  try {
    const { rating } = req.body;
    const updatedRating = await Rating.findByIdAndUpdate(req.params.id, { rating }, { new: true });
    res.status(200).json(updatedRating);
  } catch (error) {
    console.error('Error updating rating:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE route to delete a rating
router.delete('/ratings/:id', async (req, res) => {
  try {
    await Rating.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting rating:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router;