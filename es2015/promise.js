var promiseObj = new Promise(function(resolve,reject){
    resolve(5);
    //reject('Some Error Occured');
});

promiseObj.then(function(data){
    console.log(`Promise Resolved : ${data}`);
},function(err){
    console.log(`Promise Rejected: ${err}`);
});