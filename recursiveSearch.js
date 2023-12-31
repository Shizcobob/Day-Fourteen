/*
    Recursive Binary Search

    Input: SORTED array of ints, int value
    Output: bool representing if value is found

    Recursively search to find if the value exists, do not loop over every element.

    Approach:
    Take the middle item and compare it to the given value.
    Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;





/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;
function binarySearch(sortedNums, searchNum, leftIndx=0, rightIndx=sortedNums.length, searchIndx) {

    if(sortedNums[searchIndx] == searchNum){
        return true
    }
    if(sortedNums[searchIndx] < searchNum){
        return binarySearch(sortedNums, 3, leftIndx=searchIndx, rightIndx, searchIndx = Math.floor((rightIndx + leftIndx)/2));
    }
    if(sortedNums[searchIndx] > searchNum){
        return binarySearch(sortedNums, 3, leftIndx, rightIndx=searchIndx, searchIndx = Math.floor((rightIndx + leftIndx)/2));
    }
    return false
} 
console.log(binarySearch(binarySearch(nums3, 3, 0, nums3.length, Math.floor(nums3.length / 2))))


/*****************************************************************************/

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;
// Solution Given by Aaron
function aaron_binarySearch(sortedNums, searchNum) {
    let leftIndx = 0, rightIndx = sortedNums.length;
    let searchIndx = Math.floor(sortedNums.length / 2);


        if (sortedNums[searchIndx] == searchNum) {
            return true}

        if (sortedNums[searchIndx] < searchNum) {
            leftIndx = searchIndx;
            searchIndx = Math.floor((rightIndx + leftIndx) / 2);
        }


        else if (sortedNums[searchIndx] > searchNum) {
            rightIndx = searchIndx;
            searchIndx = Math.floor((rightIndx + leftIndx) / 2);
        }
    return false
    }
   

console.log(aaron_binarySearch(nums2, 5)