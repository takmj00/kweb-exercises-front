let getDevisior = x => {
    let n = Math.floor(x ** 0.5);
    let arr = Array.from(new Array(n), (x, i) => i + 1);
    let ans = arr.filter(item => x % item === 0);  
    ans = ans.concat(ans.map(item => x / item));
    return ans.sort((a,b) => a - b);
}