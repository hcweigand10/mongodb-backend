const router = require('express').Router();
const libraryRoutes = require('./libraryRoutes');

router.use('/librarys', libraryRoutes);

module.exports = router;
