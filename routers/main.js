const express = require('express');
const router = new express.Router();
const Sites = require('../models/Sites');

router.post('/', async (req, res) => {
  const temp = { ...req.body };
  console.log(temp);
  const sitesModal = new Sites(temp);
  console.log(sitesModal);
  const site = await sitesModal.save();
  res.status(201).send('Success');
});
// router.delete('/delete/:id', async (req, res) => {});
router.get('/', async (req, res) => {
  const data = await Sites.getAll({});
  res.send(data);
});

module.exports = router;
