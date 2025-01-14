const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    db.getUser(userId, (err, user) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Failed to retrieve user' });
      } else if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});
// ...rest of the code