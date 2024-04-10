/*let ids=[10,20,30,49,59]
let users=[]
if(ids.length>0){
    console.log("Not empty array")

}
else{
    console.log("empty array")
}*/
let emp={
      "name":"kiruthika",id:"101"
}
let count=0
for(prop in emp){
    count++
}
if(count>0){
    console.log(emp)
}
else{
    console.log("empty object")
}