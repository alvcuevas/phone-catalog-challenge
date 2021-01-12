const { Router } = require('express');
const { fetchCatalog } = require('../controllers/catalog.controller');

const router = Router();

router.get('/phones', fetchCatalog);

module.exports = router;
