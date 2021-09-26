const express = require('express')
const bodyParser = require('body-parser')
const promotionRouter = express.Router()

promotionRouter.use(bodyParser.json())

promotionRouter.route('/')
.all( (req,res,next)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    next()
})

.get((req,res,next)=> {
    res.end('Will send all the promoes to you!')
})

.post((req,res,next)=>{
    res.end("Will add the promo: "+req.body.name+" with deatils: "+req.body.description)
})

.put((req,res,next)=>{
    res.statusCode=403
    res.end("PUT operation not supported on /promotions")
})
// Dengerous Operation
.delete((req,res,next)=> {
    res.end('Deleting all the promoes!')
})



promotionRouter.route('/:promoId')
.get((req,res,next)=> {
    res.end('Will send details of the promo: '+req.params.promoId+' to you!')
})

.post((req,res,next)=>{
    res.statusCode=403
    res.end('POST operation not supported on /promotions/'+req.params.promoId)
})

.put((req,res,next)=>{
    res.write('Updating the promo: '+req.params.promoId+'\n')
    res.end('Will update the promo: '+req.body.name+' with deatils: '+req.body.description)
})
// Dengerous Operation
.delete((req,res,next)=> {
    res.end('Deleting promo:'+req.params.promoId)
})

module.exports = promotionRouter