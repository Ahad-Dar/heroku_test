process.EventEmitter = require('events').EventEmitter;
var zetta = require('zetta');
var LED = require('zetta-led-mock-driver');
const port=process.env.PORT || 3000
zetta()
  .name('FirstName-LastName')
  .use(LED)
  //.link('https://web-production-d01e.up.railway.app/')
  .listen(port, function(){
     console.log('Zetta is running at http://127.0.0.1:3000');
});
