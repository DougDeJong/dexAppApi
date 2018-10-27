const express    = require('express');
const router     = express.Router();
const axios      = require('axios');



const app = express();

var qs = require("querystring");
var http = require("https");



const clientID = process.env.DEXID
const clientSecret = process.env.DEXSEC
const clientURI = `http://localhost:${process.env.PORT}/oauth/redirect`




// Declare the redirect route
// router.get('/oauth/redirect', (req, res) => {


//   if (res) {
//     console.log('############')
//     console.log(res)

//     res.render('success', {auth: res.data})
//   }




// axios({
  //   method: 'post',
  //   url: `https://sandbox-api.dexcom.com/v2/oauth2/token?client_secret=${clientSecret}&client_id=${clientID}&code=${requestToken}&grant_type=authorization_code&redirect_uri=${clientURI}&scope=offline_access`,
  //   headers: {
    //        accept: 'application/x-www-form-urlencoded'
    //   },
    
    // }).then((response) => {
      
      //   console.log('$$$$$$$$$$$$$$$');
      //   console.log(response.data)
      
      //   const accessToken = response.data.access_token
      //   // redirect the user to the welcome page, along with the access token
      //   res.redirect(`/index.html?access_token=${accessToken}`)
      // })
      // .catch((err) => {
        //   console.log('@#$@#$!#@$!@#$!@#$!@#$!@#$!@#$!@#$!@#$!@#$!@#$!@#$!@#$!@#$!@#$')
        //   console.log(req.query)
        //   console.log(err)
        // })
        
        
        
        
        
        
        var options = {
          "method": "POST",
          "hostname": "sandbox-api.dexcom.com",
          "port": null,
          "path": "/v2/oauth2/token",
          "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
          }
        };
        const requestToken = req.query.code
        
        var req = http.request(options, function (res) {
          var chunks = [];
          
          res.on("data", function (chunk) {
            chunks.push(chunk);
          });
          
          res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
          });
  });

  
  req.write(qs.stringify({ client_secret: `${clientSecret}`,
    client_id: `${clientID}`,
    code: `${requestToken}`,
    grant_type: 'authorization_code',
    redirect_uri: `localhost:${process.env.PORT}`,
    scope: 'offline_access'}))
    req.end()


  ;
  









  // axios({
  //   method: 'post',
  //   url: `https://api.dexcom.com/v2/oauth2/token?client_secret=${clientSecret}&client_id=${clientID}&code=${requestToken}&redirect_uri=${clientURI}`,
  //   headers: {
  //        accept: 'application/x-www-form-urlencoded'
  //   },
  //   // query: {
  //   //   client_secret: clientSecret,
  //   //   client_id: clientID,
  //   //   code: requestToken,
  //   //   redirect_uri: clientURI,
  //   // }
  // }).then((response) => {

  //   const accessToken = response.data.access_token
  //   // redirect the user to the welcome page, along with the access token
  //   res.redirect(`/index.html?access_token=${accessToken}`)
  // })
  // .catch((err) => {
  //   console.log('@#$@#$!#@$!@#$!@#$!@#$!@#$!@#$!@#$!@#$!@#$!@#$!@#$!@#$!@#$!@#$')
  //   console.log(req.query)
  //   console.log(err)
  // })





module.exports = router;