
/*let arr = [12,121,1434.343,132,[56,343,3434,[43,434,232,[948394,4834]]]]
console.log(arr)
console.log(arr.flat(Infinity))
arr.flatMap(item => {
    console.log("Item : ",item)
})

arr.flat(Infinity).map(item => {
    console.log("Item fl : ",item)
})*/


let obj = [
    { key1 : "test1"},
    { key2 : "test2"},
    { key3 : "test3"},
    91,89,
    [
        {  key44 : "test44"  },
        {  key55 : "test55" },
    ],
    "2382332sdqeedd",
    true,
    [ {
        key78:"value78"
    }, 
    ],
    [78,90,[223]],
    {msg : "got data"}
]

obj.flat(Infinity).map(item => {
    console.log("Item fl : ",item)
})





