for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} là số chẵn`);
        continue;     // break thoát khỏi vòng lặp  
    }
    console.log(`${i} là số lẻ`);
    
}