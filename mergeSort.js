//归并排序
//不断地进行递归，直至数组左指针等于右指针:每次递归时准备一个辅助数组，如果左侧的数小于右侧的数，先拷贝左侧的进入辅助数组，如果等于则默认先拷贝左侧的，最后将有序的数组复制回原数组
//主过程，使数组的整体有序
function mergeSort(arr){
    //baseCase
    if(arr === null || arr.length < 2){
        return;
    }
    process(arr,0,arr.length-1)
//    merge过程
    function process(arr,L,R){
        //baseCase
        if(L === R){
            return;
        }
    //    中间指针
        let mid = L + ((R-L) >> 1);
    //    merge左侧部分，使左侧部分有序
        process(arr,L,mid);
    //    merge右侧部分，使右侧部分有序
        process(arr,mid+1,R);
    //    调用merge函数，使数组整体有序
        merge(arr,L,mid,R);
    }
    function merge(arr,L,M,R){
    //    开辟一个辅助空数组，长度与原数组相同
        let helpArr = [R - L + 1];
        // 向空数组中添加值时的索引
        let i = 0;
        // 左侧部分开始位置的下标值
        let p1 = L;
        // 右侧部分开始位置的下标值
        let p2 = M + 1;
        console.log(p1,p2,arr[p2])
        // 只要左右两部分都不越界，就往辅助数组中添加值
        while(p1 <= M && p2 <=R){
            // 如果左侧的值小于等于右侧的，就先添加左侧的值
            if(arr[p1] <= arr[p2]){
                helpArr[i] = arr[p1];
                i++;
                p1++;
            }else{
                // 否则就添加右侧的值
                helpArr[i] = arr[p2];
                i++;
                p2++;
            }
        }
        // 处理越界的情况
        // 当右侧越界时
        while(p1 <= M){
            helpArr[i]  = arr[p1];
            i++;
            p1++;
        }
        // 当左侧越界时
        while(p2 <= M){
            helpArr[i]  = arr[p2];
            i++;
            p2++;
        }
        // 该轮merge过程结束后，将辅助数组中的内容拷贝回原数组
        for(let i = 0;i<helpArr.length;i++){
            // L表示每次merge过程中子数组的第一个元素下标
            arr[L + i]=helpArr[i];
        }
        
    }
    return arr
}
console.log(mergeSort([5,3]))


// 对数器
function main(){
    const testTime = 50000;
    const maxSize = 300;
    const maxValue = 300;
    let flag = true;
    for(let i=0;i<testTime;i++){
        // 生成随机的数组
        let randomArray = generateRandomArray(maxSize,maxValue);
            // 复制一份随机的数组
        let copyRandomArray = copyArray(randomArray);
        // 使用归并排序对随机数组进行排序
        randomArray = mergeSort(randomArray);
        // 使用系统的排序方法对复制的数组进行排序
        copyRandomArray.sort((a,b)=>{
            return a-b;
        })
        // 判断排序后的两数组是否相同
        if(!isEqual(randomArray,copyRandomArray)){
            flag = false;
            break;
        }

    }
    return flag ? "Nice!" : "work harder!"
}
// console.log(main());
// 判断两数组是否相同
function isEqual(arr1,arr2){
    // baseCase
    if((arr1 === null && arr2 !== null) || ((arr1 !== null && arr2 === null))){
        return false;
    }else if(arr1 === null && arr2 === null){
            return null;
    }else if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0;i<arr1.length;i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }      
    return true;
}
// 产生随机数组
function generateRandomArray(maxSize,maxValue){
    let randomArray = [maxSize];
    for(let i=0;i<maxSize;i++){
        randomArray[i] = Math.ceil(Math.random()*maxValue);
    }
    return randomArray;
}
// 复制数组
function copyArray(arr){
    if(arr === null || arr.length < 0){
        return;
    }
    let arr2 = [arr.length];
    for(let i=0;i<arr.length;i++){
        arr2[i] = arr[i];
    }
    return arr2;
}
// console.log(copyArray(generateRandomArray(50,50)))
console.log(0 + ((3-0) >> 1))