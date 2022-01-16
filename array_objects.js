var bill_details=[


    {bill_number:1000,date:"17-09-2021",amount:5000,payment_type:"card"},
    {bill_number:1001,date:"17-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1002,date:"17-09-2021",amount:6000,payment_type:"card"},
    {bill_number:1003,date:"17-09-2021",amount:2000,payment_type:"cash"},
    {bill_number:1004,date:"18-09-2021",amount:10000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1006,date:"18-09-2021",amount:3000,payment_type:"cash"},
    {bill_number:1007,date:"19-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1008,date:"19-09-2021",amount:6000,payment_type:"cash"},
]


//print all cash payment bill details
var cash_bills=bill_details.filter(bill=>bill.payment_type=="cash")
console.log(cash_bills);

// print all bills whose billing date="18-09-2021"
var date_bills=bill_details.filter(bill=>bill.date=="18-09-2021")
console.log(date_bills);

// print details of bill number 1008
var date_par=bill_details.find(bill=>bill.bill_number==1008)
console.log(date_par);

// 