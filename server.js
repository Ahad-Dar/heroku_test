process.EventEmitter = require('events').EventEmitter;
var zetta = require('zetta');
var LED = require('zetta-led-mock-driver');
zetta()
  .name('FirstName-LastName')
  .use(LED)
  //.link('https://git.heroku.com/aqueous-hollows-43439.git')
  .listen(0.0.0.0:1337, function(){
     console.log('Zetta is running at http://127.0.0.1:1337');
});
