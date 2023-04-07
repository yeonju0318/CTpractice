process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let star = "*".repeat(a);
    for(i=0;i<b;i++){
        console.log(star);
    }
    
});




function solution(a, b) {
    var answer = 0;
    if(a>=b){
        for(let i=b; i<=a; i++){
            answer+=i;
        }
    }else{
        for(let j=a; j<=b; j++){
            answer+=j;
        }
    }
    return answer;
}