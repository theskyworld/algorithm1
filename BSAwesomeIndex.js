//二分法寻找无序数组中其中一个局部最小的位置
function getLessIndex(arr){
    //baseCase判断
    //如果数组为空数组
    if(arr.length === 0){
        return -1;
    }
//    如果数组中只有一个元素，返回该元素的位置
    if(arr.length === 1){
        return 0;
    }
//    数组长度大于1时，数组最两端两个元素的判断
//    如果第一个元素小于第二个元素，返回第一个元素的位置
    if(arr[0] < arr[1]){
        return 0;
    }
//    如果最后一个元素小于倒数第二个元素，返回最后一个元素的位置
    if(arr[arr.length-1] < arr[arr.length-2]){
        return arr.length-1;
    }
//    左指针
    let L = 1;
//    右指针
    let R = arr.length - 2;
//    中间指针
    let mid = 0;
    while(L < R){
        mid = L + ((R - L) >> 1);
        //如果中间的值大于它的前一个值，说明局部最小值在中间值的左侧区域
        if(arr[mid] > arr[mid - 1]){
            R = mid - 1
        //    如果中间的值大于它的后一个值，说明局部最小值在中间值的右侧区域
        }else if(arr[mid] > arr[mid + 1]){
            L =mid + 1
        }else {
            return mid;
        }
    }
    return L;
}
console.log(getLessIndex([1,1,1,1,2,1,1,1,1,1,1,1]))