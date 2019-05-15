var sample = (arg,...args)=>{ //REST in a array
    console.log(arg);
    console.log(args);
    
}
var numbers = [10,20,30,40];
sample(5,...numbers);//spread the data from the array