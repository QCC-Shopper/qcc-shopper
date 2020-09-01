const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const models = require('./models')

const init = async() => {
    await models.db.sync()
    console.log('All models synced succesfully')
    app.listen(4000, ()=> {
        console.log(`Server live on port: 4000`)
    });
}

init()

//importing userRouter and setting them to a root route of /user
app.use("/user", require("./routes/userRouter"))

app.use('/items', require('./routes/itemRoutes'))
