function MaxOfTwoNumber(num2,num3){
    console.log(`${num2} 跟 ${num3} 誰比較大?`)
    if (num2 > num3){
        console.log(num2)
    }else if(num3 > num2){
        console.log(num3)
    }else{
        console.log('一樣大')
    }
}

console.log('誰比較大? ')
MaxOfTwoNumber(20,40)
MaxOfTwoNumber(30,13)
MaxOfTwoNumber(10,10)