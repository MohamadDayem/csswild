class MyArray {
    constructor(tab = []) {
        this.tab = tab
    }
    
    forEach(callback) {
        for (let i = 0; i < this.tab.length; i++) {
            callback(this.tab[i], i, this.tab)
        }
    }
    
    filter(callback) {
        const newTab = []
        for (let i = 0; i < this.tab.length; i++) {
            if (callback(this.tab[i], i, this.tab)) {
                newTab.push(this.tab[i])
            }
        }
        return newTab;
    }
    
    map(callback) {
        const newTab = []
        for (let i = 0; i < this.tab.length; i++) {
            newTab.push(callback(this.tab[i], i, this.tab))
        }
        return newTab
    }


    reduce(callback, initValue) {
        let acc = initValue;
        let initIndex = 0
        if (acc === undefined) {
            acc = this.tab[0]
            initIndex = 1
        }
        for (let i = initIndex; i < this.tab.length; i++) {
           acc = callback(acc, this.tab[i], i, this.tab)
        }
        return acc
    }
}