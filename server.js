const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = 4000
app.listen(PORT, ()=> {
    console.log(`Server live on port: ${PORT}`)
});

//importing userRouter and setting them to a root route of /user
app.use("/user", require("./routes/userRouter"))

app.use('/items', require('./routes/itemRoutes'))
