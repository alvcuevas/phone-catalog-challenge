const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const catalogRoutes = require('./routes/catalog.routes');

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 5000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(catalogRoutes);

app.listen(app.get('port'), () => {
  console.log('Phones API running on port', app.get('port'));
});
