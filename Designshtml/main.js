let amount = 3443432323.897485;
let v = new Intl.NumberFormat
('en-IN',
    {
        currency : 'INR',
        style : 'currency',
        notation : 'compact'
    }
).format(amount);

console.log(v)


let usp = [
    {
    prd : "Fruits",
    prdprice : 209
    },
    {
        prd : "Veg",
        prdprice : 289
    },
    {
        prd : "Fish",
        prdprice : 409
    },
]
usp.map(item => {
    console.log(item.prd +" - "
    +item.prdprice);
    if(item.prd == "Fish")
    {
        console.log
        ("Fish Price is "
        +item.prdprice)
    }
})







