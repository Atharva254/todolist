const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the Angular dist directory
app.use(express.static(path.join(__dirname, 'dist/todo-list')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/todo-list/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
