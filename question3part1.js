const fs = require('fs');
const path = require('path');


if(!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}


process.chdir("Logs");


for(let x = 0; x < 10; x++) {
   
    const nameFile = `log${x}.txt`;
    fs.writeFile(nameFile, 'some text', (err) => {
        if (err) {
            throw err;
        }
    });
    
    console.log(nameFile);
}