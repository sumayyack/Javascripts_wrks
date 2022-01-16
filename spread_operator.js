// spread opertor = ... args,   ethra arguments ndenkilum return cheyyum  ithan overloading

var math={
    add(...args){
        return args.reduce((n1,n2)=>n1+n2)
    }
}

console.log(math.add(10,20));
console.log(math.add(10,20,30));