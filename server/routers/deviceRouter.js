const {Router} = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/chekRoleMiddleware')

router.post('/', deviceController.create) //потом поставить вторым параметром checkRole('ADMIN'), 
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)
router.delete('/:id', deviceController.delete)

module.exports = router