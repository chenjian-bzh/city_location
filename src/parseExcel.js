let fs = require('fs')
let xlsx = require('node-xlsx')
let region = require('./region')

var obj = xlsx.parse('code.xlsx');
var excelObj=obj[0].data;

var data = [];
let codeObj = {}
let location = {}
for(var i in excelObj){
    let obj = {};
    var value=excelObj[i];
    
    Object.assign(codeObj,{
        [value[0]]:value[1]
    })
}
region.forEach(item => {
    Object.assign(location,{
        [item['name']]:item['geoCoord']
    })
})
console.log("### ",codeObj)
console.log("--------------------------------")
let code_locat = {}
Object.keys(location).forEach(key =>{
    let loc = location[[key]]
    let name = ""
    if(key!='code'){
        name = codeObj[parseInt([key])]
    }
    if(name){
        Object.assign(code_locat,{
            "name":name,
            "value":loc
        })
    }
})


// let obj = {cls
//     "data" : data`
// }

fs.writeFile("../dist/excel.text",JSON.stringify(code_locat),err => {
    if(err){
        console.log(err)
    }else{
        console.log("write success")
    }

})
