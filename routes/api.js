const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

router.get('/', async(req, res) => {
  try{
    const pictures = await fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_KEY}&count=30`)
    const parsedPics = await pictures.json();
    console.log(parsedPics)
    res.json({
      success:true,
      results:parsedPics,
      message: 'pictures have been fetched!!'
    })
  }catch(err){
    console.log(err)
  }
});

router.post('/', async(req, res) => {
  try{
  // const apiHandler = (str) => {
  //   if(!str){
  //     return `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_KEY}&count=30`
  //   } else {
  //     return `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_KEY}&query=${this.state.searchPic}&per_page=30`
  //   }
  // }
    const pic = await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_KEY}&query=${req.body.searchPic}&per_page=30`)
    const parsedPic = await pic.json()
    res.json({
      success:true,
      result: parsedPic,
      message: 'picture has been fetched!!'
    })
  }catch(err){
    console.log(err)
  }
});

router.put('/', (req, res) => {
  return res.send({data: 'Received a PUT HTTP method'});
});

router.delete('/', (req, res) => {
  return res.send({data: 'Received a DELETE HTTP method'});
});

module.exports = router;
