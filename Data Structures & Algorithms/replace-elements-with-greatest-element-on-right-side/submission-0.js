class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let largestVal = -1

        for (let i = arr.length - 1; 0 <= i; i--) {
            let currentVal = arr[i]

            arr[i] = largestVal

            if (currentVal > largestVal) {
                largestVal = currentVal
            }
        }

        return arr
    }
}
