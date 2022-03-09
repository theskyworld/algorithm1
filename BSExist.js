//二分法判断有序数组中某个数是否存在
//每次在当前数组长度的中点进行二分，如果中点的值大于目标值，则从中点的左侧继续二分，如果小于目标值，则从中点的右侧继续二分，如果等于目标值，则直接返回true(或者该值)
function BSExist(sortedArr,num){
    //baseCase判断
    if(sortedArr === null || sortedArr.length === 0){
        return false
    }
//    左指针
    let L = 0;
//    右指针
    let R = sortedArr.length-1;
//    中间指针
    let mid = 0;
    //只要L的值小于R，就不断进行二分，直到刚好中间指针所指的值为目标值，返回true
    while(L<R){//数组长度至少为2时
    //    中间指针的值等于L+R值的一半
        mid = L + ((R -L) >> 1);
        //如果中间指针所指的值刚好等于目标值，直接返回ture
        if(sortedArr[mid] === num){
            return true;
            // return mid
        //    如果中间指针所指的值大于目标值，则说明目标值在当前值的左边区域，R重新被赋值为mid-1
        }else if(sortedArr[mid] > num){
            R = mid-1;
        //    如果中间指针所指的指小于目标值，则说明目标值在当前值的右边区域，L重新被赋值为mid+1
        }else{
            L = mid+1
        }
    }
    //数组长度为1时，直接判断该值是否为目标值
    return sortedArr[L] === num;
}
//对数器
function main(){
    //测试的次数
    let testTime = 50000;
    //随机数组的最大长度
    let maxSize = 500;
//    随机数组的最大值
    let maxValue = 500;
//    标志变量
    let flag = true;
    for(let i=0;i<testTime;i++){
        //产生随机数组
        const randomArray=generateRandomArray(maxSize,maxValue);
    //    对随机数组进行排序，升序
        randomArray.sort((a,b)=>{
            return a-b
        })
    //    产生一个随机数组最大长度内的一个随机数值，用于作为目标值
        let randomValue = Math.ceil(Math.random()*maxSize)
    //     let randomValue = 508
        //用遍历的方法和二分的方法分别对目标值是否存在进行判断
        if(Exist(randomArray,randomValue) !== BSExist(randomArray,randomValue)){
            flag = false;
            break;
        }
    }
    return flag? "Nice!" : "Fucking fucked!"
}
console.log(main())
function Exist(arr,num){
    if(arr === null ||arr.length === 0){
        return false;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i] === num){
            return true
        }
    }
    return false
}
// console.log(Exist([1,5,2,6,7,10,9,8,3],50))
//产生随机的数组
function generateRandomArray(maxSize,maxValue){
    let randomArray = [];
    for(let i = 0;i < maxSize; i++){
        randomArray[i] = Math.ceil(Math.random()*maxValue)
    }
    return randomArray
}