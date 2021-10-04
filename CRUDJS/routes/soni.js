const express = require('express');
const router = express.Router()

router.get('/', async(req,res)=> {

    try{

    }
    catch(err){
        res.send('Error'+err)
    }
  res.send('Get request')
})


module.exports = router