class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack[this.stack.length] = val
        this.minStack[this.minStack.length] = 
            this.minStack.length === 0 
                ? val
                : Math.min(this.minStack[this.minStack.length - 1], val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.length--
        this.minStack.length--
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
