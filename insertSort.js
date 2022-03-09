//插入排序
function insertSort(arr){
//    baseCase判断
    if(arr === null || arr.length < 2){
        return arr
    }
//    0~0范围上遍历，使其有序
//    0~1范围上遍历，i和j位置上的数进行比较，谁小谁往左移，直至最小的放在最左边，使其有序
//    0~2范围上遍历，i和j位置上的数进行比较，谁小谁往左移，直至最小的放在最左边，使其有序
    for(let i = 1; i<arr.length;i++){
        for(let j=i+1;j>=0;j--){
            if(arr[j+1] < arr[j]){
                swap(j+1,j,arr)
            }
            // //降序排序
            // if(arr[j+1] > arr[j]){
            //     swap(j+1,j,arr);
            // }
        }
    }
    function swap(i,j,arr){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}
// console.log(insertSort([3,5,1,4,9,6,7,0,8]))
//对数器
function main(){
//    测试的次数
    let testTime = 5000;
    //随机数组大小的最大值
    let maxSize = 500;
    //随机数组元素值的最大值
    let maxValue = 500;
    //标志变量
    let flag = true;
    for(let i=0;i<testTime;i++){
        //随机数组
        const arr1 = generateRandomArray(maxSize,maxValue);
        //随机数组的复制
        const arr2 = copyArray(arr1);
        // const arr2 = [1,5,6]
    //对随机数组使用算法排序方法进行排序
        insertSort(arr1);
    //    对复制的数组使用系统的方法进行排序
        arr2.sort((a,b)=>{
            //升序排序
            return a-b;
        })
    //    比较两次排序后的数组是否一致
        if(!isEqual(arr1,arr2)){
            flag = false;
            break
        }
    }
    return flag? "Nice!" : "Fucking fucked"
}
console.log(main())
//产生随机的数组
function generateRandomArray(maxSize,maxValue){
    let randomArray = [];
    for(let i=0;i<maxSize;i++){
        randomArray[i] = Math.ceil(Math.random()*(maxValue+1))
    }
    return randomArray
}
// console.log(generateRandomArray(20,20))
//复制随机的数组
function copyArray(arr){
    let copyRandomArray=[];
    if(arr === null){
        return null;
    }
    for(let i = 0;i<arr.length;i++){
        copyRandomArray[i] = arr[i];
    }
    return copyRandomArray
}
//判断两数组是否相同
function isEqual(arr1,arr2){
    if((arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)){
        return false
    } else if(arr1 === null && arr2 === null){
        return true
    } else if(arr1.length !== arr2.length){
        return false;
    }else {for(let i=0;i<arr1.length;i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }}
    return true
}
// console.log(isEqual([1,2,5],[1,2,4]))