const express = require('express')
const router = express.Router()
const soni = require('../models/soni')


router.get('/', async(req,res) => {
    try{
           const soni = await Alien.find()
           res.json(soni)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const alien = new Soni({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await soni.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const soni = await Soni.findById(req.params.id) 
        soni.sub = req.body.sub
        const a1 = await soni.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res)=> {
    try{
        const soni = await Soni.findById(req.params.id) 
        soni.sub = req.body.sub
        const a1 = await soni.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router



