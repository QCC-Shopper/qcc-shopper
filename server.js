const express = require('express')
const morgan = require('morgan')

const app = express()
const PORT = 4000

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, ()=> {
    console.log(`Server live on port: ${PORT}`)
});

//importing userRouter and setting them to a root route of /user
app.use("/user", require("./routes/userRouter"))

app.get('/api/students', (req, res) => {
    const students = [
        {id: 1, name: 'Aidan', pets: ['doobi', 'poopie', 'loopy']},
        {id: 2, name: 'Bob', pets: ['doobi', 'poopie', 'loopy']},
        {id: 3, name: 'Yori', pets: ['doobi', 'poopie', 'loopy']},
        {id: 4, name: 'Freind', pets: ['s', 'poopie']},
        {id: 5, name: 'Nola', pets: ['doobi', 'poopie', 'loopy']},
        {id: 6, name: 'Dia'},
    ]
    res.json(students)
})
