let fs = require('fs')

fs.readFile("./cities.json",(err,data) => {
    if(err){
        throw err
    }
    data = JSON.parse(data)
    let ret = {},
        obj = {},
        temp_loc = [];
    Object.keys(data).forEach(key => {
         obj = data[[key]]
         temp_loc = [obj['lon'],obj['lat']]
         Object.assign(ret,{
             [key]:temp_loc
         })
    })
    fs.writeFile("./newCity.text",JSON.stringify(ret),(err) => {
        if(err){
            console.log(err)
        }else{
            console.log("write success")
        }

    })
})
