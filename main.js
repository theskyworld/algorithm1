function main(arr1,arr2){
    let succeed = true;
    if(arr1 === null && arr2===null){
        succeed = true;
    }
    if(arr1 === null || arr2 === null){
        succeed = false;
    }
    if(arr1 !== null && arr2 !==null){
        //算法排序方法对数组进行排序

        //系统排序方法对数组进行排序
        arr2=arr2.sort((a,b)=>{
            return a-b
        })
        isEqual(arr1,arr2);
        while(!isEqual()){
            succeed = false;
        }
    }
    return succeed;
}
console.log()