import axios from "axios";

async function SendEmail(name, email, subject, message) {
    const data = JSON.stringify({
      "Messages": [{
        "From": {"Email": email, "Name": name},
        "To": [{"Email": "johnlexterpanti@gmail.com", "Name": "John Lexter Panti"}],
        "Subject": subject,
        "TextPart": message
      }]
    });
  
    const config = {
      method: 'post',
      url: 'https://api.mailjet.com/v3.1/send',
      data: data,
      headers: {'Content-Type': 'application/json'},
      auth: {username: '<API Key>', password: '<Secret Key>'},
    };
  
    return axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  
  }
  
  // define your own email api which points to your server.
  app.post('/api/sendemail/', function (req, res) {
    const {name, email, subject, message} = req.body;
    //implement your spam protection or checks.
    SendEmail(name, email, subject, message);
  });
  

export default SendEmail;