const {Router} = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/chekRoleMiddleware')

router.post('/', typeController.create) //потом поставить вторым параметром checkRole('ADMIN'), 
router.get('/', typeController.getAll)

module.exports = router

