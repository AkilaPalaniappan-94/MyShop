import express from 'express'
import { authUser } from '../controllers/userController.js'

 const router=express.Router()

 //@desc UserLogin
 //@Route /api/users/login
 //@access public
router.use('/login',authUser)

export default router