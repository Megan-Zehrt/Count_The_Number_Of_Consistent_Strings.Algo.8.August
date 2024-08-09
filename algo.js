// 1684. Count the Number of Consistent Strings



// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.







/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    
    let map = new Map()
    let count = 0

    for(let i = 0; i < allowed.length; i++){

        if(map.has(allowed[i])){
            let n = map.get(allowed[i])
            map.set(allowed[i], n+1)
        }else{
            map.set(allowed[i], 1)
        }
    }

    for(let word of words){
        for(let i = 0; i < word.length; i++){

            if(!map.has(word[i])){
                break
            }

            if(map.has(word[i]) && i == word.length-1){
                count += 1
            }
        }
    }

    return count
};