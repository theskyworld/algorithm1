//二分法找有序数组中大于等于某个数最左侧的位置
//不断二分，直至L的值大于R的值，如果中间值的元素大于目标值，在左侧继续二分，否则在右侧继续二分
function BSNearLeftIndex(sortedArr,value){
//    左指针
    let L = 0;
//    右指针
    let R = sortedArr.length-1;
//    记录符合条件的最左侧元素的位置
    let aimIndex = -1;
    //如果有序数组最后一个元素都小于目标值，则数组中不存在大于等于该数的位置
    if(sortedArr[sortedArr.length-1] < value){
        aimIndex = -1;
    }
    while(L <= R){
        //    中间指针
        let mid = L + ((R-L)>>1);
        if(sortedArr[mid] >= value){
            aimIndex = mid;
            R = mid-1;
        }else{
            L = mid+1;
        }
    }
    return aimIndex;
}
// console.log(BSNearLeftIndex([1,3,4,5,6,7,8,9,10,11,12,13,45,65],15))
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
        // console.log(BSNearLeftIndex(randomArray,randomValue));
        if(test(randomArray,randomValue) !== BSNearLeftIndex(randomArray,randomValue)){
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
//测试方法
function test(sortedArray,num){
    if(sortedArray === null || sortedArray.length === 0){
        return -1
    }else{
        for(let i = 0;i < sortedArray.length;i++){
            if(sortedArray[i] >= num){
                return i
            }
        }
        if(sortedArray[sortedArray.length-1] < num){
            return -1;
        }
    }

    return -1
}