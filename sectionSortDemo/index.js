//选择排序
const sectionSort=function (arr) {
    if (arr.length === null || arr.length<2){
        return null;
    }
   for(let i = 0; i<arr.length-1; i++){
       let minIndex = i;
       for(let j = i+1; j<arr.length; j++){
           if(arr[j]<arr[minIndex]) {
               minIndex = j;
           }
       }
       swap(arr, i ,minIndex);
   }
   return  arr;
}
// 交换元素下标
const swap=function(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j]=temp;
}

// console.log(sectionSort([2,4,7,9,0,1,5,8,9]))


// //对数器
//调用主函数，进行对数判断
const main = function () {
    //测试的次数
    const testTime=5000;
//    随机数组的最大长度
    let maxSize = 500;
//    随机数组的最大值
    let maxValue = 500;
//    定义标志变量
    let succeed = true;
//    进行测试过程
    for( let i=0; i<testTime; i++){
        //随机产生的数组
        const arr1=generateRandomArray(maxSize,maxValue);
        //    复制的随机数组
        const arr2 = copyRandomArray(arr1);
        //    使用选择排序的方法对其中一个数组进行排序
        sectionSort(arr1);
        //    使用系统自带的sort方法对另一个数组进行排序
        arr2.sort();
        //    使用isEqual方法对排序后的两个数组进行是否相同的判断
        const res = isEqual(arr1,arr2);
        // console.log(res)
        if(res === true){
            succeed = true
        }else{
            succeed = false
        }
    }
    return succeed

}
console.log(main())
//产生完全随机的数组
// console.log(Math.ceil(Math.random()*10))
const generateRandomArray=function(maxSize, maxValue){
    let randomArray=[];
    for(let i = 0; i<maxSize; i++ ){
        randomArray[i]=Math.ceil(Math.random()*maxValue)
    }
    return randomArray;
}
// // console.log(generateRandomArray(100000,100000))
//将随机数组复制一份
const copyRandomArray=function(arr) {
    if (arr === null) {
        return null;
    }
    let randomArrayCopy = [];
    for (let i = 0; i < arr.length; i++) {
        randomArrayCopy[i] = arr[i];
    }
    return randomArrayCopy;
}
//判断两个数组是否相同
const isEqual=function(arr1,arr2){
//    初始判断
//    如果其中一个数组为空数组，直接返回false
    if((arr1===null && arr2 !== null) || (arr1 !==null && arr2 === null)){
        return false;
    }
//    如果两个都为空数组，返回true
    if(arr1 ===null && arr2 ===null){
        return true
    }
//    如果两数组的长度不相等，直接返回false
    if(arr1 !== null && arr2 !== null){
        if(arr1.length !== arr2.length){
            return false
        }
    }
//    进行两数组内部元素的判断
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[i]){
            return true
        }
        // if(arr1[i] !== arr2[i]){
        //     return false
        // }
    }
    return true
}
// // console.log(isEqual())
// //对数器2
// const index = function (){
//     const testTime = 5000;
//     const maxValue = 500;
//     const maxSize = 500;
//     let succeed = true;
//     for(let i = 0; i < testTime; i++){
//         const arr1 = generateRandomArray();
//         const arr2 = copyRandomArray();
//         sectionSort(arr1);
//         arr2.sort();
//         const res = isEqual(arr1,arr2);
//         if(res !== true){
//             succeed = false;
//         }
//     }
//     return succeed
// }
// //产生一个随机的数组
// const generateRandomArray = function (maxSize,maxValue){
//     let arr=[maxSize-5];
//     for(let i = 0;i<maxSize; i++){
//         arr[i]=Math.ceil(Math.random()*maxValue)
//     }
//     arr.filter(function (a,b){
//         if(a===b){
//             return a
//         }
//     })
//     return arr;
// }
// // console.log(generateRandomArray(100,100))
// const res=generateRandomArray(100,100);
// console.log(res)
// console.log(res.sort(function(a,b){
//     return a-b;
// }));