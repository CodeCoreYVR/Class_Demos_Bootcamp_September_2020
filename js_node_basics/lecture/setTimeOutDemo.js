if (false) {
    console.log('Started Wait')

    setTimeout(() => {
        console.log("wait 2 seconds")

    }, 2000);
    console.log("Done Waiting")
}

if (true) {
    let greeting = "Good morning!";
    console.log("Before Timeout:", greeting);

    setTimeout(() => {
        greeting = 'Yo!';
        console.log("In the callback:", greeting);
    }, 1000);

    console.log("After setTimeout: ", greeting)
}