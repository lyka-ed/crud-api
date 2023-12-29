const mongoose = require("mongoose")

// Create product schemas
const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            // validation is neccessary 
            required: [true, "Please enter product name "]
        },
        quantity:{
            type: Number,
            required: true,
            default: 0
        },
        price:{
            type: Number,
            required: [true,"Price is required"],
        },
        image:{
            type: String,
            required: false
        }
    },
    // timestamp is used tp create 2 fields: Created apps and updated apps .Tracks when data is saved and when it's modified 
    {
        timestamp: true
    }
)

const product = mongoose.model("Product", productSchema);
//  when saving data to db USE Product MODEL

module.exports =  product