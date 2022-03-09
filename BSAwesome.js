//二分法寻找无序数组中一个局部最小的位置
function BSAwesomeIndex(array){
//    左指针
    let L = 0;
//    右指针
    let R = array.length - 1;
//    中间指针
    let mid = 0;
    if(array.length <= 2){
        return -1
    }
    while(L === mid || R === mid){
        mid = L + ((R - L) >> 1)
        // console.log(mid)
        // console.log(L)
        // console.log(R)
        if(!(array[L] < array[L+1] && array[mid] > array[mid -1])){
            L++;
            mid--;
            if(array[L] <= array[L+1] && array[L] <= array[L-1]){
                return array[L]
                // console.log(array[L])
            }
            if(array[mid] <= array[mid-1] && array[mid] <= array[mid+1]){
                return array[mid]
                // console.log(array[mid])
            }
        }else if(!(array[mid] < array[mid + 1] && array[R] > array[R+1])){
            R--;
            mid++;
            if(array[R] <= array[R+1] && array[R] <= array[R-1]){
                return array[R]
                // console.log(array[R])
            }
            if(array[mid] <= array[mid-1] && array[mid] <= array[mid+1]){
                return array[mid]
                // console.log(array[R])
            }
        }
    }
    return -1
}
console.log(BSAwesomeIndex([2,3,7,6,8,5,1,4,9,10,5,8,12,13,16,12,13]))