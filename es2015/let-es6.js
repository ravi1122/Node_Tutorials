(function () {
    let i = 100;
    if (true) {
        let i = 1000;
        console.log(`i value inside the block : ${i}`);
    }
    console.log(`i value outside the block : ${i}`);
})();
//let keyword maintains the scope