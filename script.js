
let arr = [1,1,2,2,3,3,4,5]

const removeDuplicate=()=>{
    for(i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
               arr[i+1] = arr[i+2] ;
        }
    }
    return arr;
}


console.log(removeDuplicate())