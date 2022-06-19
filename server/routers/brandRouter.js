const {Router} = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/chekRoleMiddleware')


router.post('/', brandController.create) //потом поставить вторым параметром checkRole('ADMIN'), 
router.get('/', brandController.getAll)


module.exports = router