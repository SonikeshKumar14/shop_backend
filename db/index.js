const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('db is connected');
})
.catch((err) => {
  console.log('db connection failed ',err);
});
