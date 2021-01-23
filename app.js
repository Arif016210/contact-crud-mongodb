const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routees')

const app = express();


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// let Schema = mongoose.Schema
// let testSchema = new Schema({
//     name: String
// })

// let Test = mongoose.model('Test', testSchema);

app.use('/contacts', router)


app.get('/', (req, res) => {

    // let test = new Test({
    //     name: 'Ariful Islam'
    // })

    // test.save()
    //     .then(t => {
    //         res.json(t)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json({
    //             message: 'Server Error'
    //         })
    //     })

})



const PORT = process.env.PORT || 4000

mongoose.connect(`mongodb://localhost:27017/mongoBD`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database is Connected!');
            console.log(`Server is listing PORT:${PORT}`);
        })
    })
    .catch(e => {
        console.log(e);
    })

