const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {dexID: process.env.DEXID, dexURI: `http://localhost:${process.env.PORT}/oauth/redirect`});
});

module.exports = router;
