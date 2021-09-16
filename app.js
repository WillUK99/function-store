console.log("hello world")

const store = {
    id: 1,
    cache: {},
    add(fn) {
        if (!fn.id) {
            fn.id = this.id++
            this.cache[fn.id] = fn
            return true
        }
    }
}

const foo = () => {
    return 1 + 1
}

const bar = () => {
    let theta = Math.random() * 2 * Math.PI;
    return {
        x: Math.cos(theta),
        y: Math.sin(theta)
    };
}

store.add(foo)
store.add(bar)

console.log(store.cache)