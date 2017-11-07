const regex = require('regex');
const fs = require('fs');

var fileName = "test_enUS.txt"

var readableStream = fs.createReadStream(fileName);
var body = fs.readFileSync(fileName).toString();

var reg = new RegExp(/\*+[^*]+\*+/g);
var subst = "$&\n"

var result = body.match(reg, subst);

console.log(result);

fs.writeFile(`${fileName}_output.txt`, result, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('The file was saved');
});

// \*(.*?)\*