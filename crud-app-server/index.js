// Import express from nodejs 
const express = require('express');

// Creating an instance of the express application
const app = express();

// Environment Variables
require('dotenv').config();

// Middleware
const cors = require('cors');
const corsConfig = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))

app.use(express.json())

// Defines port in which the server is to be launched
// During deployment it will assign any of the available ports to our server.
const port = process.env.PORT || 5000;



// Connect Mongodb Database
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.VITE_DB_USER}:${process.env.VITE_DB_PASSWORD}@cluster0.10dhryt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        // Connect database
        const database = client.db('seequenzeDB');
        const photos = database.collection('photos')



        // API Endpoints
        // Defining a URL and the response the users will get when they go to that url.
        app.get('/', (request, response) => {
            response.send('Hello from my projects server')
        })
        app.get('/photos', async(req, res)=>{
            const result = await photos.find({}).toArray();
            res.send(result)
        })
        app.post('/addphoto', async (req, res) => {
            try {
                const body = req.body;
                const result = await photos.insertOne(body);
                console.log(result);
                res.send(result);

            } catch (error) {
                console.error('Error saving photo', error);
                res.status(500).json({ error: 'Failed to save photo.' });
            }
        })
        app.put('/editphoto/:id', async(req, res)=>{
            const id = req.params.id;
            const body = req.body;
            const filter = { _id: new ObjectId(id)};
            const editPhoto = {
                $set:{
                    author_name: body.author_name,
                    width: body.width,
                    height: body.height,
                    url: body.url,
                    download_url: body.download_url

                }
            };
            const result = await photos.updateOne(filter, editPhoto);
            res.send(result);
        })
        app.delete('/delete/:id', async(req, res)=>{
            const id = req.params.id;
            const query = { _id: new ObjectId(id)};
            const result = await photos.deleteOne(query);
            res.send(result)
        })


    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


// Set the port at which the server should listen for incoming requests
app.listen(port, () => {
    console.log(`My projects server is running on port ${port}`);
})
