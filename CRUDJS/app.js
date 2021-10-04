const express = require('express');
const mongoose = require('mongoose');
const url = 'SoniDB'
const app = express();


mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() => {
    console.log('connected..')
})

app.use(express.json())

const soniRouter = require('./routes/soni.js')

app.use('/soni',soniRouter)
con.on('open',function(){
    console.log('Connected...')
})

app.listen(9000, () => {
    console.log("The server is listening on 9000")
})