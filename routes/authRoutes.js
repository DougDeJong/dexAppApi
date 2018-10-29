const express    = require('express');
const router     = express.Router();
const axios      = require('axios');



const app = express();

var Querystring = require("querystring");
var http = require("https");



const clientID = process.env.DEXID
const clientSecret = process.env.DEXSEC
const clientURI = `http://localhost:${process.env.PORT}/oauth/redirect`



// client_secret=${clientSecret}
// Declare the redirect route
router.get('/oauth/redirect', (req, res) => {


  const requestToken = req.query.code;
  const data = {
    grant_type: 'authorization_code',
    client_id: clientID,
    client_secret: clientSecret,
    code: requestToken,
    redirect_uri: clientURI,
  };
  
    
    
    
    
    axios.post('https://sandbox-api.dexcom.com/v2/oauth2/token', Querystring.stringify(data))
    .then((response) => {
      
      
        const accessToken = response.data.access_token
        // redirect the user to the welcome page, along with the access token
        res.redirect('success',  {accessToken: accessToken})
      })
      .catch((err) => {
          console.log(err)
        })

      });
        
        





module.exports = router;