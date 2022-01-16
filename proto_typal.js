var baleno={
    manufacture:"nexa",
    colors:["red","white","blue"],
    varients:["petrol"],
    price:"7laks",
    breaks:"abs",
    getPrice(){
        return this.price
    },
    getManufacture(){
        return this.manufacture
    }

}


var glanza={
    manufacture:"toyota",
    price:"8laks"
}

glanza.__proto__=baleno
console.log(glanza.getPrice());