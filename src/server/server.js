const express = require('express')
const fs = require('fs')
const app = express()
const cors = require('cors');
const port = 4000

// CORS for react app, assuming port 3000
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
  
// read feed from json file
const fileContents = fs.readFileSync('./data/data.json', 'utf-8');
const data = JSON.parse(fileContents);

app.get('/api/categories', (req, res) => {
  const othercategories =  data.categories.filter((item) => {
    return item.id !== req.query.currentcat;
  });
  res.send(othercategories)  
})
app.get('/api/category/:id', (req, res) => {
  const finditem =  data.categories.find((item) => {
    return item.id === req.params.id;
  });
  res.send(finditem)
})
app.get('/api/articles', (req, res) => res.send(data.articles))

app.listen(port, () => console.log(`API listening at http://localhost:${port}`))