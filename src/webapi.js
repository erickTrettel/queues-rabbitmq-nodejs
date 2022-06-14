const express = require('express');
const app = express();
const queue = require('./queue');

app.use(express.json());

const router = express.Router();

router.post('/task', (req, res) => {
  const task = req.body;

  queue.sendToQueue('tasks', task);

  return res.status(200).json({ message: 'Your request will be processed!' });
});

app.use('/', router);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
