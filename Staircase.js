function staircase(n) {
    
    for (let i = 1; i <= n; i++){
        let vazio = " ".repeat(n-i);
        let hash = "#".repeat(i);
        console.log(vazio + hash)
    }

}