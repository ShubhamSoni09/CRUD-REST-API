const express = require('express');
const router = express.Router()
const soni = require('../models/soni')

router.get('/', async(req,res)=> {

    try{
        const sonis = await soni.find
        res.json(aliens)
    }
    catch(err){
        res.send('Error'+err)
    }
  res.send('Get request')
})


module.exports = router