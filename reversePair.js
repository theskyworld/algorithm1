// 逆序对问题
// 传统解法
function reversePair1(arr){
    // baseCase
    if(arr === null || arr.length < 2){
        return ;
    }
    let res = 0;
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[j] > arr[i]){
                res++
                // console.log(j,":",arr[j],i,":",arr[i]);
            }
        }
    }
    return res;
}
console.log(reversePair1([
    42, 17, 28, 28, 27, 26, 21,  6, 38, 21,  3,
    32, 14, 16, 13, 25, 37, 23, 17, 44, 16, 39,
    13, 18, 43, 47, 30, 30, 27, 14,  8, 14,  5,
    25, 39,  6, 49, 11, 49, 40,  5, 21, 35,  9,
    25,  4, 16, 25, 18, 17
  ]));
// 递归解法
function reverPairNumber(arr) {
    if (arr == null || arr.length < 2) {
        return 0;
    }
    return process(arr, 0, arr.length - 1);
}

// arr[L..R]既要排好序，也要求逆序对数量返回
// 所有merge时，产生的逆序对数量，累加，返回
// 左 排序 merge并产生逆序对数量
// 右 排序 merge并产生逆序对数量
function process(arr, l, r) {
    if (l == r) {
        return 0;
    }
    // l < r
    let mid = l + ((r - l) >> 1);
    return process(arr, l, mid) + process(arr, mid + 1, r) + merge(arr, l, mid, r);
}
function merge(arr, L, m, r) {
    let help = [r - L + 1];
    let i = help.length - 1;
    let p1 = m;
    let p2 = r;
    let res = 0;
    while (p1 >= L && p2 > m) {
        res += arr[p1] > arr[p2] ? (p2 - m) : 0;
        help[i--] = arr[p1] > arr[p2] ? arr[p1--] : arr[p2--];
    }
    while (p1 >= L) {
        help[i--] = arr[p1--];
    }
    while (p2 > m) {
        help[i--] = arr[p2--];
    }
    for (i = 0; i < help.length; i++) {
        arr[L + i] = help[i];
    }
    return res;
}
console.log(reverPairNumber([
    42, 17, 28, 28, 27, 26, 21,  6, 38, 21,  3,
    32, 14, 16, 13, 25, 37, 23, 17, 44, 16, 39,
    13, 18, 43, 47, 30, 30, 27, 14,  8, 14,  5,
    25, 39,  6, 49, 11, 49, 40,  5, 21, 35,  9,
    25,  4, 16, 25, 18, 17
  ]))
// arr[p1]跟arr[p2]比较之后，放入辅助数组(改变原数组的顺序)之前找出逆序对
// 对数器
function main(){
    let testTime = 5000;
    let maxSize = 50;
    let maxValue = 50;
    let flag = true;
    for(let i = 0; i< testTime; i++){
        let arr1 = generateRandomArray(maxSize,maxValue);
        let arr2 = copyArray(arr1);
        console.log('1:',arr1);
        console.log('2:',arr2);
        if(reversePair1(arr1) !== reverPairNumber(arr2)){
            flag = false;
            break;
        }
    }
    return flag ? "Nice!" : "work harder!"
}
// console.log(main())
// 产生随机数组
function generateRandomArray(maxSize,maxValue){
    let randomArray = [maxSize];
    for(let i = 0; i < maxSize ; i++){
        randomArray[i] = Math.ceil(Math.random()*maxValue);
    }
    console.log("产生随机数组函数中的:",randomArray);
    return randomArray;
}
// console.log(generateRandomArray(20,20))
// 复制随机数组
function copyArray(arr){
    if(arr === null || arr.length === 0){
        return;
    }
    let randomArrayCopy = [arr.length];
    for(let i = 0; i < arr.length ; i++){
        randomArrayCopy[i] = arr[i];
    }
    return randomArrayCopy;
}
// console.log(copyArray(generateRandomArray(20,20)))