const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middle ware 
app.use(cors());
app.use(express.json())




app.get('/', (req, res) => {
    res.send('College is running...')
})

app.listen(port, (req, res) => {
    console.log('College is running on: ', port);
})