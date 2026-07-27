class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0
        let currentCount = 0

        for(let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                currentCount++
            } else {
                currentCount = 0
            }

            maxCount = Math.max(maxCount, currentCount)
        }

        return maxCount
    }
}
