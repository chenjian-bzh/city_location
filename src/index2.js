let fs = require('fs')
let old = require('./city')

fs.readFile('./newCity.text',(err,data) => {
    let newCity = JSON.parse(data)
    let index = 0
    console.log("######### 之前 ，old的子节点数目 ： ",Object.keys(old).length)
    console.log("######### 之前 ，newCity的子节点数目 ： ",Object.keys(newCity).length)

    Object.keys(old).forEach(key => {
        if(!newCity[[key]]){
            console.log(`${index++} 添加了key ：`,key)
            Object.assign(newCity,{
                [key]:old[[key]]
            })
        }
    })

    console.log("#########  之后，newCity的子节点数目 ： ",Object.keys(newCity).length)
    fs.writeFile('./newCity2.text',JSON.stringify(newCity),function(err){
        if(err){
            console.log(err)
        }else{
            console.log("#############    write success")
        }
    })


})