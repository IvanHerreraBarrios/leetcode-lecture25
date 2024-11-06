var maxCoins = function(piles){
    piles = piles.sort((a, b) => a-b)

    let count = 0
    const length = piles.length
    for(let i = length / 3; i < length; i += 2){
        count += piles[i]
    }

    return count
}