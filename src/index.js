const express = require("express")
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
const port = 3000

const Dog = mongoose.model('Dog', {
    title: String,
    description: String,
    image_url: String,
});

app.get("/", async (req, res) => {
    const dogs = await Dog.find()
    res.send(dogs)
})

app.post("/", async (req, res) => {
    const dog = new Dog ({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url
    })
    await dog.save()
    res.send(dog)
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://Bueno45:Batata0312@bueno.ejteen9.mongodb.net/?retryWrites=true&w=majority');
    console.log('App running')
})