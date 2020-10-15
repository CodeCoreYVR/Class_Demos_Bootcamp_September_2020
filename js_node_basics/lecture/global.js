if (false) {
    setTimeout = () => {
        console.log('You suck!');
    };

    setTimeout();
}
// this 
if (false) {
    

    function test() {
        console.log('this', this);
    }
    test(); // This will print out global object
}

global.process;