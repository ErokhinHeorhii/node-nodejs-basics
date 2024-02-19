function parseArgs() {
    let args = process.argv;
    console.log(process.argv)
    for (let i = 0; i < args.length; i += 2) {
        let propName = args[i].replace(/^--/, "");
        let propValue = args[i + 1];
        console.log(`${propName} is ${propValue}`);
    }
}

parseArgs();




