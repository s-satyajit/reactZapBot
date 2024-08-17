const venom = require('venom-bot');
const { response } = require("./chatGPT");

venom
  .create({
    session: 'session-name', 
    multidevice: true 
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body && message.isGroupMsg === false && message.from !== 'status@broadcast') {
        response(message.body).then(data => {
            console.log(data.data.choices[0]);
            client
            .sendText(message.from, data.data.choices[0].text)
            .then((result) => {
              console.log('Result: ', result);
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); 
            });
          }).catch(err =>{
            console.log(err);
          })
    }
  });
}
