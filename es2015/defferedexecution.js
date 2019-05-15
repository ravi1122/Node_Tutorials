//JavaScript is single threaded - Thread never sleeps
(function(){
    console.log("01");
    console.log("02");
        setTimeout(function(){
        console.log("05");
    },10);
    //delayed Execution function(function invoked through events will go back to the callback queue)
    setTimeout(function(){
        console.log("06");
    },0);//tick events(in 0 ms it will add into callback queue)

    console.log("03");
    console.log("04");
    //for(;;){}
})();

//Event loop will check for the main stack if it empty it takes the function from the callback queue and put it in the main stack for execution


//Timers, User Events, XHR (AJAX) can produce deferred executions