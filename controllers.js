
const { connect } = require('mongoose')
const Contact = require('./Contact')

exports.getAllContact = (req, res) =>{
  Contact.find()
        .then(contacts =>{
            res.json(contacts)
        })
        .catch(e=>{
            console.log(e)
            res.json({
                massage:"error occurred",
            })
        })
}
exports.getSingelcontact = (req, res) =>{
    let {id} = req.params
    Contact.findById(id)
        .then( contact =>{
            res.json(contact)
        })
        .catch(e =>{
            console.log(e)
            res.json({
                massage:"error occourred"
            } )
        })
         

   
}
exports.creactContact = (req, res) =>{
    let{name,phone,email} = req.body
    let contact = new Contact({
        name,
        email,
        phone
    })
   
   contact.save()
        .then(c =>{
            res.json(c)
        })
        .catch( e =>{
            console.log(e);
            res.json({
                massage:"error occurred"
            })
        })
}

exports.updateContact = (req, res) =>{
    let {name,email,phone} = req.body;
    let {id} = req.params;
    Contact.findOneAndUpdate(
        {_id:id},
        {$set :{
            name,
            email,
            phone
        }
        },{new:true})
    .then(contact =>{
        res.json(contact)
    })
    .catch(e =>{
        console.log(e);
        res.json({
            massage:"error occurred"
        })
    })
}
exports.deleteContact = (req, res) =>{
    let {id} = req.params;
    Contact.findOneAndRemove({_id:id} )
    .then(contact =>{
        res.json(contact)
    })
    .catch(e =>{
        console.log(e);
        res.json({
            massage:"error occurred"
        })
    })
    
}