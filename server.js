const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

app.post('/api/blogs', (req, res) => {
  const blogData = req.body;
  fs.readFile('public/data/blogs.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error reading file' });
    } else {
      const blogs = JSON.parse(data);
      blogs.push(blogData);
      fs.writeFile('public/data/blogs.json', JSON.stringify(blogs), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send({ message: 'Error writing file' });
        } else {
          res.send({ message: 'Blog created successfully' });
        }
      });
    }
  });
});

app.get('/api/blogs', (req, res) => {
  fs.readFile('public/data/blogs.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error reading file' });
    } else {
      const blogs = JSON.parse(data);
      res.send(blogs);
    }
  });
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});