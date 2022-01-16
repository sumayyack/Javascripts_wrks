var baleno={
    name:"baleno",
    brand:"nexa",
    price:"8lac",
    varients:["petrol","diesel"],
    colors:["red","grey","white"]
}


console.log(baleno.varients);
console.log(baleno.price);
if ("fast_tag" in baleno){
    baleno["fast_tag"]=true
}
else{
    baleno["fast_tag"]=false
}
console.log(baleno);