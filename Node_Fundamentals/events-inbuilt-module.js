const EventEmitter = require('events');

class AppEventEmitter extends EventEmitter{
   
}

const appEmitter = new AppEventEmitter();

//Creating an event and assigning listener function to it
appEmitter.addListener('cgEvent',()=>{
    console.log('cgEvent Occured');
});

//Triggering the Custom Event
setTimeout(function(){
    appEmitter.emit('cgEvent');
},4000);

var listenerFn01 = (args)=>{
    console.log(`customEvent occured with listenerFn01:${args}`);
}

var listenerFn02 = (args)=>{
    console.log(`customEvent occured with listenerFn02:${args}`);
}

//Hooking up the Listener Functions to an event(Subscribing)
appEmitter.addListener('customEvent',listenerFn01);
appEmitter.on('customEvent',listenerFn02);

//Remove a Listener (unsubscribing)
appEmitter.removeListener('customEvent',listenerFn01);

//Remove all listeners
appEmitter.removeAllListeners('customEvent');

//Trigger the Custom Event
appEmitter.emit('customEvent','passing data to args');