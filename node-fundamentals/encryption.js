const bcyrptjs = require('bcryptjs');

var dataToBeEncrypted = 'Karthik works in Capgemini University as a Senior Manager';

var encryptedData = bcyrptjs.hashSync(dataToBeEncrypted); 
console.log(encryptedData);

var result = bcyrptjs.compareSync('Karthik works In Capgemini University as a Senior Manager',encryptedData);
if(result){
    console.log('Matched');
}
else{
    console.log('Not Matched');
}


