// arrow functions


var cube=(n1)=>n1**3
var add=(n1,n2)=>n1+n2
var sub=(n1,n2)=>n1-n2
console.log(add (10,20));
console.log((cube(7)));
console.log(sub(50,20));


var smartSub=(n1,n2)=>n1>n2?n1-n2:n2-n1
var even=(n)=>n%2==0?true:false
console.log(even(3));

var startA=(name)=>name[0]=="a"||name[0]=="A"?true:false