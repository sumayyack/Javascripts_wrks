var parent={
    mobile(){
        console.log("samsung a6");
    }
}

var child={
    mobile(){
        console.log("iphone 12");
    }
}

child.__proto__=parent
child.mobile()