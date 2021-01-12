const phones = require('../data/catalog.json');

const fetchCatalog = (req, res) => {
  return res.send({ phones });
};

module.exports = {
  fetchCatalog
};
