const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

//nondestructive below
function appendCat(name){
    let copyCats = cats.slice()
    copyCats.push(name)
    return copyCats
}

function prependCat(name){
   let copyCats = cats.slice()
   copyCats.unshift(name)
   return copyCats
}

function removeLastCat(name){
    let copyCats = cats.slice()
    copyCats.pop(name)
    return copyCats
}

function removeFirstCat(name){
    let copyCats = cats.slice()
    copyCats.shift(name)
    return copyCats
}