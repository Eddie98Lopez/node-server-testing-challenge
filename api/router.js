const router = require('express').Router()
const model = require('./router-model')


router.post('/', async (req,res)=>{
try{
    const incoming = await model.insert(req.body)
    res.status(200).json(incoming)
}
catch(err){
    res.status(400).json('error')
}
})

router.delete('/:id', async (req,res)=>{
    const id = req.params.id
    try{
        const result = await model.remove(id)
        res.status(200).json({result})
    }
    catch(err){
        res.status(500).json("error")
    }

})


module.exports = router