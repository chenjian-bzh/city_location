let fs = require('fs')
let xlsx = require('node-xlsx')
let region = require('../region')

var obj = xlsx.parse('../地区编码.xlsx');
var excelObj=obj[0].data;

var data = [];
for(var i in excelObj){
    var arr=[];
    var value=excelObj[i];
    
    for(var j in value){
        console.log("### ",j)
        console.log("!!! ",value[j])
        console.log("--------------------------------")
        arr.push(value[j]);
    }
    data.push(arr);
}
console.log(data);

// let obj = {
//     "data" : data
// }

fs.writeFile("../dist/excel.text",JSON.stringify(data),err => {
    if(err){
        console.log(err)
    }else{
        console.log("write success")
    }

})
