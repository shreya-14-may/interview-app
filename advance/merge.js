var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;  
    let p2 = n - 1;  
    let pMerge = m + n - 1;  
    while (p2 >= 0) {  // Continue until all elements from nums2 are merged
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[pMerge] = nums1[p1];  // Place nums1[p1] in the correct position
            p1--;
        } else {
            nums1[pMerge] = nums2[p2];  // Place nums2[p2] in the correct position
            p2--;
        }
        pMerge--;
    }
    return nums1;
};

let nums1 = [1,2,3,0,0,0];
let m = 3;
let n = 2;
let nums2 = [2,5,6];
console.log(merge(nums1,m,nums2,n))

