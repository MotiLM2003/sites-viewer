const express = require('express');
const cors = require('cors');
const sitesrouter = require('./routers/main');
const app = express();
require('./db/mongoose');
const PORT = process.env.PORT || 5000;
const origin = process.env.ORIGIN || 'http://localhost:5500';

app.use(cors());
app.use(express.json());
app.use('/sites', sitesrouter);
app.listen(PORT, () => {
  console.log('app is running');
});
