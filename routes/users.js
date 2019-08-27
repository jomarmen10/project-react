const express = require('express');
const router = express.Router();
const bycrpt = require('bcrypt')


const User = require('../models/User')

/* GET users listing. */
router.get('/', (req, res) => {
  return res.json({data: 'Received a GET HTTP method users'});
});

router.post('/create', (req, res) => {
 try {
   const user = await User.create(req.body)
   res.json({
     user,
     success:true
   })
 } catch(err) {
   res.json({err})
 }
});

router.post('/login', async(req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if(user.password === req.body.password){
      res.json({
        user,
        success: true
      })
    }

  } catch(err) {
    res.json({err})
  }
})

router.put('/:id', async(req, res) => {
  try{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      user,
      success: true
    })
  }catch(err){
    return err
  }
});

router.delete('/delete/:id', async(req, res) => {
  try{
    const deleteUser = await User.findByIdAndRemove(req.params.id);
    res.json({
      success: true
    })
  }catch(err){
    return err
  }
});




module.exports = router;
