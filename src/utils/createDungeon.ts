type DungeonOptions = {
    width: number,
    height: number,
    minSquare: number
}

const createDungeon = {
    diviseSectors(arr: number[][]) {
        
    },

    leftRequrse(arr: number[][]) {
    },

    rightRequrse(arr: number[][]) {
    },

    lineOnWidth(arr: number[][]) {
        let lineIndex = Math.floor(Math.random() * arr.length)
        arr[lineIndex].forEach(i => i = 1)
        return arr
    },

    lineOnHeight(arr: number[][]) {
        let lineIndex = Math.floor(Math.random() * arr[0].length)
        arr.forEach(item => item[lineIndex] = 1)
        return arr
    },

    create(options: DungeonOptions) {
        let result: number[][] = Array(options.height).fill(Array(options.width).fill(0))
        
        if(Math.random() == 1)
            result = this.lineOnWidth(result)
        else
            result = this.lineOnHeight(result)
        return result
    }
}

export default createDungeon