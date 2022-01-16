var accounts= [
      {
        acno: 1000, ac_type: "savings", balance: 5000, transactions: [
          { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
          { to: 1002, amount: 600, note: "geto", method: "neft" },
          { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
        ]
      },
      {
        acno: 1001, ac_type: "savings", balance: 6000, transactions: [
          { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
          { to: 1002, amount: 500, note: "geto", method: "neft" },
          { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
    
        ]
      },
      {
        acno: 1002, ac_type: "current", balance: 8000, transactions: [
          { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
          { to: 1001, amount: 5000, note: "geto", method: "neft" },
          { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
    
        ]
      },
      {
        acno: 1003, ac_type: "current", balance: 16000, transactions: [
          { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
          { to: 1002, amount: 500, note: "geto", method: "neft" },
          { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
    
        ]
      },
    
]

// print tansaction of amount 100

//flat is used to remove nested array or objected array
var amount_tansactions=accounts.map(data=>data.transactions).flat().filter(trans=>trans.amount==100)
console.log(amount_tansactions);

// print transaction detail of acc.no 1000
//amount >500
var account_num_1000=accounts.find(data=>data.acno==1000).transactions.filter(trans=>trans.amount>500)
console.log(account_num_1000);

// print sum of amount payed by phonepe

var sum_phone_pe=accounts.map(data=>data.transactions).flat().filter(t=>t.method=="phone-pay").
map(t=>t.amount).reduce((amt1,amt2)=>amt1+amt2)
console.log(sum_phone_pe);

// print details of saving account

var acc_sav=accounts.filter(data=>data.ac_type=="savings")
console.log(acc_sav);

// print credit trans of 1002

var credit_trans_1002=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
console.log(credit_trans_1002);