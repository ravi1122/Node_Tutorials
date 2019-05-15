class Foo{
    //Access specifiers is not supported
    //Constructor overloading is not supported
    constructor(id){
        this.id = id;
    }

    getDetails(){
        //console.log('Id = '+this.id);//ES5
        console.log(`Id = ${this.id}`);//String Interpolation - ES2015
    }
}

var fooObj = new Foo(4);
fooObj.getDetails();