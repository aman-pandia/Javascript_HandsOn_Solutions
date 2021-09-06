process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function(data) {
    __input_stdin += data;
});

/*
 * Complete the function below.
 */
function fibonacciSequence(n) {
    if (n===1) 
    {
        return [0, 1];
    } 
    else 
    {
        var s = fibonacciSequence(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}
var fs = require('fs');
var wstream = fs.createWriteStream(process.env.OUTPUT_PATH);

process.stdin.on('end', function() {
    __input_stdin_array = __input_stdin.split("\n");
    var input;
    var input = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;


    res = fibonacciSequence(input);
    for(var res_i = 0; res_i < res.length; res_i++) {
        wstream.write(res[res_i]+"\n");
    }

    wstream.end();
});
