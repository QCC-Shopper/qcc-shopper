const { Router }  = require('express')
const Items = require('../models/items')
const router = new Router()

// route for all items
router.get('/', async(req, res, next) => {
    try {
        const items = await Items.findAll()
        res.send(items)
    } catch(er) {next(er)}
})

// route for single item
router.get('/:id', async(req, res, next) => {
    try {
        const item = await Items.findAll({where: {id: req.params.id}})
        res.send(item)
    } catch(er) {next(er)}
})

module.exports = router
