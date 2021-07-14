const { Router } = require('express');
const router = Router();


router.use(require('./countries'));
router.use(require('./activities'));


module.exports = router;
