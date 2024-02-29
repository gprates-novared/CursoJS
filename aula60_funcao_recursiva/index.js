function recursive(max){
    if (max > 55000){ return; }
    console.log(max);
    max++;
    
    recursive(max);
}

recursive(-9);