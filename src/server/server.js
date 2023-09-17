const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

const postRouter = require('./routes/Subscribers');
app.use("/subscribers", postRouter);

const port = 5172;
db.sequelize.sync().then(() => { app.listen(port, () => console.log(`Server running on port ${port}}`)) });