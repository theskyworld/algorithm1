//冒泡排序
function bubbleSort(arr){
//    baseCase判断
    if(arr === null || arr.length < 2){
        return arr
    }
    //0~n-1上遍历，i和j位置的数进行比较，谁大谁往右移，否则不交换
    //0~n-2上遍历，i和j位置的数进行比较，谁大谁往右移，否则不交换
    //......
    //i从0位置出发，始终小于j的值；j从i+1位置出发，始终大于j的值，临界值为小于arr.length-1
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                swap(i,j,arr)
            }
        }
    }
    function swap(i,j,arr){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
    }
    return arr
}
// console.log(bubbleSort([2,5,1,3,8,6,9,7,0,4,45,26,12,89,12,31]))

//对数器
function main(){
//    测试的次数
    const testTime = 50000;
//    随机数组的大小最大值
    let maxSize = 100;
//    随机数组的元素最大值
    let maxValue = 100;
//    标志变量
    let flag = true;
    for(let i = 0;i < testTime;i++){
        //产生随机的数组
        let arr1 = generateRandomArray(maxSize,maxValue);
    //    复制一份随机的数组
        let arr2 = copyArray(arr1);
    //    用算法排序方法对随机数组进行排序
        bubbleSort(arr1);
    //    用系统排序方法对复制的数组进行排序
        arr2.sort((a,b)=>{
            return a-b
        })
    //    判断排序后的两数组是否相同
        if(!isEqual(arr1,arr2)){
            flag = false;
            break;
        }
    }
    return flag ? "Nice!" : "Fucking fucked!"
}
console.log(main())
//产生随机数组的方法
function generateRandomArray(maxSize,maxValue){
    let randomArray = [];
    for(let i=0; i<maxSize; i++){
        //先产生0-1随机的数，然后再乘以maxValue，再向上取整，再赋值给随机数组的当前元素值
        randomArray[i] = Math.ceil(Math.random()*maxValue)
    }
    return randomArray
}
// console.log(generateRandomArray(50,50))
//复制一份随机的数组
function copyArray(arr){
    if(arr === null){
        return null;
    }
    let copyRandomArray = [];
    for(let i = 0;i<arr.length;i++){
        copyRandomArray[i] = arr[i]
    }
    return copyRandomArray
}
//判断数组是否相同
function isEqual(arr1,arr2){
    //baseCase判断
    if((arr1 == null && arr2 !== null) || (arr1 !== null && arr2 === null)){
        return false;
    }
    if(arr1 ===null && arr2 === null){
        return true;
    }
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i = 0;i < arr1.length;i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }
    return true;
}