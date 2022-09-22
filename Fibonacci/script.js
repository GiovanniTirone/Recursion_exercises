function fib (seq) {
    const l=seq.length; 
    if(l>20){return seq}else{seq.push(seq[l-1]+seq[l-2]); return fib(seq)} 
}

console.log(fib([0,1]));