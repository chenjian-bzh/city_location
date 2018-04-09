let fs = require('fs')
let xlsx = require('node-xlsx')
let region = require('../region')

var obj = xlsx.parse('../地区编码.xlsx');
var excelObj=obj[0].data;

var data = [];
for(var i in excelObj){
    let obj = {};
    var value=excelObj[i];
    console.log("### ",value)
    console.log("--------------------------------")
    obj = {
        code:value[0],
        name:value[1]
    }
    data.push(obj);
}

// let obj = {cls
//     "data" : data
// }

fs.writeFile("../dist/excel.text",JSON.stringify(data),err => {
    if(err){
        console.log(err)
    }else{
        console.log("write success")
    }

})
