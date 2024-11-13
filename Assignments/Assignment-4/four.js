const arr = [1,2,3,58,14,52,0,-2,-56,55, 85, -36, -25,0,-5,5,0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]>0) {
        console.log(`positive no. on this index ${i}`);
    } else if(arr[i]==0) {
        console.log(`i==0 on this index ${i}`);
        
    }else{
        console.log(`negative no. on this index ${i}`);
        
    } 
    
}

