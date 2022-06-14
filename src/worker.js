console.log('worker started');

const queue = require('./queue');

queue.consume('tasks', (message) => {
  console.log('processing', message.content.toString());
});
