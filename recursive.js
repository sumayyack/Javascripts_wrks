var pattern="ABABC"
// first recursive character A

var cnt={} // A:1 B:1
for(let char of pattern){
    if (char in cnt){
        console.log(char ,'is first recursive character');
        break;
    }
    else{
        cnt[char]=1
    }
}