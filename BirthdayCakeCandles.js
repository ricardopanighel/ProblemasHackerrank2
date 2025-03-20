function birthdayCakeCandles(candles) {
    
    let maiorVela = candles[0];
    let quantasMaiores = 0;
    

    for (let i = 0; i < candles.length; i++) {
        if (maiorVela < candles[i]) {
            maiorVela = candles[i];
            quantasMaiores = 1;
        } else if (maiorVela == candles[i]) {
            quantasMaiores++;
        }
    }

    console.log(quantasMaiores);
    return quantasMaiores;
}
