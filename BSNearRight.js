//二分法找有序数组中小于等于某个数最右侧的位置
function BSNearRightIndex(sortedArray,num){
    //左侧指针
    let L = 0;
    //右侧指针
    let R = sortedArray.length - 1;
    //中间指针
    let mid = 0;
    //记录最右侧的位置
    let index = -1
    //如果该有序数组中最小值都大于目标值，则说明该数组中不存在小于等于某个数的位置
    if(sortedArray[0] > num){
        return -1
    }
    if(sortedArray.length === 0){
        return -1
    }else{
        while(L <= R){
            mid = L + ((R - L) >> 1);
            if(sortedArray[mid] <= num ){
                index = mid
                L = mid + 1
            }else{
                R = mid - 1
            }
        }
        return index
    }
}
// console.log(BSNearRightIndex([1,2,5,6,8,9,12,13,15,18,19],14))
//测试方法
function test(sortedArray,num){
    if(sortedArray.length === 0){
        return -1
    }
    if(sortedArray[0] > num){
        return -1
    }
    //对有序数组中的元素从右到左进行遍历，然后判断是否小于等于目标值(如果从左到右遍历会一直返回0)
    for(let i=sortedArray.length-1;i>=0;i--){
        if(sortedArray[i] <= num){
            return i
        }
    }
}
//对数器
function main(){
//    测试次数
    let testTime = 50000;
//    随机数组最大长度
    let maxSize = 100;
//    随机数组最大值
    const maxValue = 100;
//    标志变量
    let flag = true;
    for(let i = 0;i < testTime; i++){
        //    产生随机数组
        const randomArray =generateRandomArray(maxSize,maxValue);
        //    对数组进行排序
        randomArray.sort((a,b)=>{
            return a-b
        })
        //    产生一个随机数，作为目标值
        const randomValue = Math.ceil(Math.random()*maxValue)
        // console.log(test(randomArray,randomValue));
        // console.log(BSNearRightIndex(randomArray,randomValue));
        if(test(randomArray,randomValue) !== BSNearRightIndex(randomArray,randomValue)){
            flag = false;
            break;
        }
    }
    return flag? "Nice!" : "Fucking fucked!"
}
console.log(main())
//产生随机数组
function generateRandomArray(maxSize,maxValue){
    let randomArray = [];
    for(let i = 0;i < maxSize;i++){
        randomArray[i] = Math.ceil(Math.random()*maxValue)
    }
    return randomArray;
}