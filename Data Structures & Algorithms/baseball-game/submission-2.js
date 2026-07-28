class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []

        for(let i = 0; i < operations.length; i++) {
            switch(operations[i]) {
                case "+":
                    const prev = stack.pop()
                    const prevPrev = stack.pop()
                    stack.push(prevPrev)
                    stack.push(prev)
                    stack.push(prev + prevPrev) 
                    break
                case "D":
                    const prev1 = stack.pop()
                    stack.push(prev1)
                    stack.push(prev1 * 2)
                    break
                case "C":
                    stack.pop()
                    break
                default:
                    stack.push(+operations[i])
            }
        }

        

        return stack.reduce((total, num) => total + num, 0)
    }
}
