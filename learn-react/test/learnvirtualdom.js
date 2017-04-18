// var div=document.createElement('div')
// var str=""
// for(var key in div){
//     str=str+key+" "
// }
// console.log(str)

var element={
    tagName:'ul',
    props:{
        id:'list'
    },
    child:[
        {
            tagName:'li',props:{class:'item'},children:["Item 1"],
            tagName:'li',props:{class:'item'},children:["Item 2"],
            tagName:'li',props:{class:'item'},children:["Item 3"]
        }
    ]
}