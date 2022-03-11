// 求小和问题
function smallSum(arr){
    // baseCase
    if(arr === null || arr.length < 2){
        return 0;
    }
    // 调用merge过程，并返回process函数的结果
    return process(arr,0,arr.length - 1)
    // merge过程
    function process(arr, l, r){
        // baseCase
        if(l === r){
            return 0;
        }
        let mid = l + ((r - l) >>1);
        return process(arr,l,mid)//左侧排好序后并求小和的结果
               +
               process(arr, mid + 1 ,r)//右侧排好序后并求小和的结果
               +
               merge(arr,l,mid,r)//两侧合并后排好序并求小和的结果
    }
    // 每次merge后排序并求小和的过程
    function merge(arr,l,m,r){
        //辅助空数组，与原数组等长
        let helpArr = [r - l + 1];
        // 辅助数组的下标
        let i = 0;
        //排序求小和时左侧部分数组开始位置下标
        let p1 = l;
        //排序求小和时右侧部分数组开始位置的下标
        let p2 = m + 1;
        // 小和
        let sum = 0;
        //当p1和p2都不越界时
        while(p1 <= m && p2 <=r){
            if(arr[p1] < arr[p2]){
                sum += arr[p1]*(r - p2 + 1);
                helpArr[i] = arr[p1];
                i++;
                p1++
            }else{
                sum += 0;
                helpArr[i] = arr[p2];
                i++;
                p2++
            }
        }
        // 当右侧越界时
        while(p1 <= m){
            helpArr[i] = arr[p1];
            i++;
            p1++;
        }
        // 当左侧越界时
        while(p2 <= r){
            helpArr[i] = arr[p2];
            i++;
            p2++;
        }
        // 将辅助数组复制回原数组
        for(let i = 0; i<helpArr.length;i++){
            arr[l + i] = helpArr[i];
        }
        return sum;
    }
    
}
// console.log(smallSum([2,3,4,6,1,8,7]));
// 对数器
function comparator(arr){
    // baseCase
    if(arr === null || arr.length < 2){
        return 0;
    }
    let sum = 0;
    for(let i = 1;i<arr.length;i++){
        for(let j = 0;j<i;j++){
            if(arr[j] < arr[i]){
                sum +=arr[j];
            }else{
                sum += 0;
            }
        }
    }
    return sum;
}
function main(){
    let testTime = 50000;
    let maxSize = 200;
    let maxValue = 200;
    let flag = true;
    for(let i = 0; i<testTime;i++){
        let randomArray = generateRandomArray(maxSize,maxValue);
        let copyRandomArray = copyArray(randomArray);
        if(smallSum(randomArray) !== comparator(copyRandomArray)){
            flag = false;
            break;
        }
    }
    return flag ? "Nice!" : "work harder!"
}
console.log(main());
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