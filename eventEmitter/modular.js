const eventEmitter = require('events');

class Job extends eventEmitter {
    constructor(ops){
        super(ops);
        this.on('start',(data)=>{
             this.checkEmitter(data)
        })
    }

 checkEmitter(data){

    //any logic goes here

     this.emit('display',data +' : ' + new Date().getFullYear());
 }

}
module.exports = Job;
