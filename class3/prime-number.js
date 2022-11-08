function PrimeNumber(num6){
    let array2 = [];
    let temp = 0;
    let count = 0;
    /*for迴圈第一個會先執行,之後的才會根據 判斷式 來判斷可不可執行 */
    if (num6 > 1){
        for (x = 2 ; x <= num6 ; x++){
            for(y = 2; y < x; y++){
                if (x % y == 0){
                    y = x;
                    count ++;
                }
                
            }
            if(count == 0){
                array2[temp] = x;
                temp ++;
            }
            count = 0;
            
            
        }
        console.log(`介於1~ ${num6}之間的質數: `);
        console.log(array2);
    }else{
        console.log('沒有質數');
    }
}

PrimeNumber(50);
PrimeNumber(2);
PrimeNumber(1);
PrimeNumber(150);
