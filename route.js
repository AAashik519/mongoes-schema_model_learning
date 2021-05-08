const router= require('express').Router()

const {
 getAllContact,
 getSingelcontact,
 creactContact,
 updateContact,
 deleteContact
} = require('./controllers')

router.get('/',getAllContact)
router.get('/:id',getSingelcontact)
router.post('/',creactContact)
router.put('/:id',updateContact)
router.delete('/:id',deleteContact)




module.exports=router