var mobiles=[
    [1000,"redmi","redmi note 9",13000,50],
    [1001,"redmi","redmi note 10",17000,30],
    [1002,"redmi","redmi note 10 promax",20000,50],
    [1003,"samsung","a52s",23000,20],
    [1004,"samsung","a52s 5g",30000,50],
    [10005,"apple","iphone12",100000,0],
]


var mobile_names=mobiles.map(mobile=>mobile[2])
console.log(mobile_names);



// print all mobile names in Uppercase

var uppercase=mobiles.map(mobile=>mobile[2].toUpperCase())
console.log(uppercase);
// print details of samsung mobiles
var samsung_mobiles=mobiles.filter(product=>product[1]=="samsung")
console.log(samsung_mobiles);

//print details of mobiles under 15000

var mob_under_15000=mobiles.filter(product=>product[3]<15000)
console.log(mob_under_15000);

// sort mobile wrt price

mobiles.sort((p1,p2)=>p2[3]-p1[3])
console.log(mobiles);

// print highest price mobile

var highest_price=mobiles.reduce((p1,p2)=>p1[3]>p2[3]?p1:p2)
console.log(highest_price);


// find used for check whether the product exist or not
var samsung_prdt=mobiles.find(product=>product[1]=="samsung")
console.log(samsung_prdt);


var is_available=mobiles.some(product=>product[3]<3000)
console.log(is_available);