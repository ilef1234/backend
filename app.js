const express= require('express');
const dotenv =require('dotenv')
const cors = require('cors')
const mongoose= require('mongoose');
const app=express();


const categorieRouter =require("./routes/categorie.route")
const scategorieRouter =require("./routes/scategorie.route")
const articleRouter = require("./routes/article.route");

dotenv.config()
app.use(cors())
app.use(express.json());
app.use("/api/articles", articleRouter);
app.use('/api/categories', categorieRouter);
app.use('/api/scategories', scategorieRouter);


const data = process.env.DATABASE

const userRouter =require("./routes/user.route")
app.use('/api/users', userRouter);

app.get('/api/productTest', (req, res) => {
    res.json([
    { name: 'iPhone', price: 800 },
    { name: 'iPad', price: 650 },
    { name: 'iWatch', price: 750 }
    ])
    })
mongoose.connect(data)
    .then(() =>{console.log("DataBase successfully connected");}).catch(err =>{
        console.log('unable to connect',err);
        process.exit();
    });
app.get('/', (req, res) => {
    res.send('Hello World!')
    });
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port ${process.env.PORT}`); });
        module.exports = app;