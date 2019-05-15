var numbers = [5,10,15,20];
console.log(numbers.length);

//To add an item at the last
numbers.push(25);

//To remove an item from the last
numbers.pop();

//To remove an item from specific index
numbers.splice(numbers.indexOf(10),1);

//To update an item at the specific index
numbers.splice(numbers.indexOf(15),1,100);

console.log(numbers);
