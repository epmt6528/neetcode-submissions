class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let leftP = 0
        let rightP = nums.length - 1

        while(leftP <= rightP) {
            if (nums[leftP] === val && nums[rightP] === val) {
                rightP--
            } else if (nums[leftP] === val && nums[rightP] !== val) {
                [nums[leftP], nums[rightP]] = [nums[rightP], nums[leftP]]
                rightP--
                leftP++
            } else {
                leftP++
            }
        }

        return leftP
    }
}
