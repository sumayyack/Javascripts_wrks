var num=7;
var flg=0;
for(let i=2;i<num;i++){
    if(num %i==0){
        flg=1;
        break;
    }
}

console.log(flg==0?"prime":"notprime");