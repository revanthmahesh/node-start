const eventEmitter = require('events');

//custom modular vent from event Emitter folder

const jobs = require('./eventEmitter/modular')
const job = new jobs()
// get a copy by classes

class Event extends eventEmitter{}

const event = new Event();


event.on('check1',(data) =>{
    console.log('single emitted  current Year:', data)
});

event.emit('check1', new Date().getFullYear());

//modular level event emitings;

job.on('display',(data)=>{
    console.log(data)
})
job.emit('start','from event.js--->modularjs');
//remove all the events added to job
job.removeAllListeners();

job.emit('start','from event.js--->modularjs');