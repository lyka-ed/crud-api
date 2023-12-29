const express =  require("express");
const mongoose = require("mongoose")  //database connect 
const app =express();
const product = required("./models/pro")

// using middleware
app.use(express.json())

app.get('/', (req, res) =>{
    res.send("Hi, I'm Lyka. This is my CRUD API building practice ") 
})

// a route for savig data into database system.
// Using try and catch
app.post("/product", (req, res) => {
    try {

    } catch(error) {
        console.log(`Error occured: ${error}`);
        res.status(500).json({message: error.message})
    }
    console.log(req.body);
    res.send(req.body);
})

mongoose.connect("mongodb+srv://admin:lykaedem@crudapi.o9vwgx8.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to MongoDB")
    app.listen(3000, () =>{
        console.log('Server is running on port 3000');
    })
}).catch((error) => {
    console.log(error)
})