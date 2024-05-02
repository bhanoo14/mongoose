const  mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/e-com'

const main = async ()=>{
    await mongoose.connect(url)
    console.log("Connected to data base");

    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String,
        category: String
    })

    const Productmodel = mongoose.model('products', productSchema)
    let data = new Productmodel({name: "m8", price: 50000});
    let result = await data.save();
    console.log(result);

}

main()