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
    }
}