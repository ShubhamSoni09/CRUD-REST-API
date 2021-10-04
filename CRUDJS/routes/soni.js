const express = require('express');
const router = express.Router()
const soni = require('../models/soni')

router.get('/', async(req,res)=> {

    try{
        const sonis = await soni.find
        res.json(sonis)
    }
    catch(err){
        res.send('Error'+err)
    }
  res.send('Get request')
})

router.get('/:id', async(req,res)=> {

    try{
        const soni = await soni.find
        res.json(soni)
    }
    catch(err){
        res.send('Error'+err)
    }
  res.send('Get request')
})

router.post('/soni', async(req,res)=> {
    const soni = new soni({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub    
    })
    try{
        const a1 = await soni.save()
        res.json(a1)
    }
    catch{
        res.send('Error'+err)
    }
})




module.exports = router