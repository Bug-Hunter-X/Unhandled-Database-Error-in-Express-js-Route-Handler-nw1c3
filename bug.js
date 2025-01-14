const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Should handle the error properly, not just log
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  });
});

// ...rest of the code