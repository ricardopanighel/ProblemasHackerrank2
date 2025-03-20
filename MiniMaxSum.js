function miniMaxSum(arr) {
    let sum = BigInt(0);
    let menorValor = arr[0];
    let maiorValor = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < menorValor) {
            menorValor = arr[i];
        }
        if (arr[i] > maiorValor) {
            maiorValor = arr[i];
        }
        
        sum += BigInt(arr[i]);
    }
    
    let somaMenor = sum - BigInt(maiorValor);
    let somaMaior = sum - BigInt(menorValor);
    
    console.log(somaMenor.toString(), somaMaior.toString());

}
