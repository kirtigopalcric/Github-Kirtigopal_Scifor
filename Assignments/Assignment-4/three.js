// continue condition statement

for (let i = 0; i <= 30; i++) {
    if( i>2 && i%3 ==0 ){
        console.log(i);
    }else{
        continue;
        
    }
    
}

// Break condition statement

const array = [4,8,12,16,20,24,28,32,35,40,44,48,52,56,60]

for (let i = 0; i < array.length; i++) {
    if(array[i]%4 == 0){
        console.log(`array = ${array[i]}`);
        
    }else{
        break;
    }
    
}