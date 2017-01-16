/**
 * Created by wonder.it on 2017. 1. 16..
 */

var fs = require('fs');

var prepared_string1 = "Constant Variable 1";
var prepared_statement = "INSERT INTO TABLE_NAME (`a`, `b`, `c`, `d`, `e`, `f`) VALUES ( 'a1' , '{{SPLITTED_VALUE}}', '{{PREPARED_STRING1}}', 'b', now(), now())";

// This is for splitting string values to query
var joined_string = "a,b,c,d";

// This is for string array values to query
var splitted_array = [

];

if (splitted_array.length == 0) {
    splitted_array = joined_string.split(',');
}

var result_array = [];
prepared_statement = prepared_statement.replace('{{PREPARED_STRING1}}', prepared_string1);

for (var it in splitted_array) {
    var temp_prepared_statement = '';
    temp_prepared_statement = prepared_statement.replace('{{SPLITTED_VALUE}}',splitted_array[it]);
    result_array.push(temp_prepared_statement);
    console.log(temp_prepared_statement);
}

fs.writeFile('./results/mysql_split_query_generator_result.txt', result_array.join(';\n'), function(err) {
    if(err) throw err;
    console.log('File write completed');
});