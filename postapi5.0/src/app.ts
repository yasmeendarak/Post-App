const express = require('express');
const bodyParser = require('body-parser');
const router = require('./service/routes');
const cors = require('cors'); 
const app = express();

app.use(cors({ origin: 'http://localhost:3001' })); 
app.use(bodyParser.json());
app.use('/posts', router);

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
