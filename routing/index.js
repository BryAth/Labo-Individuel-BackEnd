const commandRouter = require('./command-router');
const userRouter = require ('./user-router');
const burgerRouter = require ('./burger-router');
const authRouter = require ('./auth-router')

const router = require ('express').Router();

router.use('/commandes',commandRouter);
router.use('/users',userRouter);
router.use ('/burgers',burgerRouter);
router.use('/auth',authRouter)


module.exports = router;