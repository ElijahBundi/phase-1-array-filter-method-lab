//Code your solution here

function findMatching(array, name) {
    const upperName = name.toUpperCase();
    let match = array.filter((x) => {
        return (x.toUpperCase() === upperName)
    })
    return match
}

function fuzzyMatch(array, letters) {
    const newNames = array.filter((x) => {
        return x.startsWith(letters)
    })
    return newNames
}

function matchName(array, string) {
    const matchMaker = array.filter((x) => {
        return (x.name === string)
    })
    return matchMaker
}







