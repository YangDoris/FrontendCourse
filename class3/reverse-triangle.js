function Triangle(num5){

    let array1 = [];
    for(let i = 1; i <= num5; i++){
        for(let j = 1; j < i; j++){
            array1[i]= array1[i] + " ";
        }
        for(let j = num5; j >= i; j--){
            array1[i]= array1[i] + "*";
        }

        console.log(array1[i].replace("undefined",""));

    }
}

Triangle(12);