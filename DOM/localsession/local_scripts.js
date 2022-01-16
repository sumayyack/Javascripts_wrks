var user = {
    acc_no: 1002,
    email: "ccc@gmail.com",
    name: "ccc",
    acc_type: "savings",
    balance: 25000,
    password: "ccc@123",

}


//localStorage.setItem(user.acc_no,JSON.stringify(user))

//var userdata=JSON.parse(localStorage.getItem(1000))
//console.log(userdata.password);

//console.log(1005 in localStorage);

//localStorage.removeItem(1002)

function fundTransfer(acno, amount) {
    let data = JSON.parse(localStorage.getItem(acno))
    let newbalance = data.balance + amount
    data.balance = newbalance
    localStorage.setItem(data.acc_no, JSON.stringify(data))
}

//fundTransfer(1000,3000)

function authenticateUser(acno, pswrd) {
    if (acno in localStorage) {
        let data=JSON.parse(localStorage.getItem(acno))
        if (data.password==pswrd){
            console.log("access granded");
        }
        else{
            console.log("invalid password");
        }

    }
    else{
        console.log("invalid user");
    }
}

authenticateUser(1000,"abc@123")