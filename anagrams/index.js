// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    let charMapA = characterMapString(stringA);
    let charMapB = characterMapString(stringB);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length){
        return false
    }

    for (let i in charMapA){
        if (charMapA[i] !== charMapB[i]){       // remember here i is the element of string which means charMap['h']
            return false
        }
    }

    return true



    function characterMapString(str){

        let shortString  = str.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g,'');



        let charMap = {}

        for (let char of shortString){
            if(!charMap[char]){
                charMap[char]=1
            } else {
                charMap[char]++
            }
        }

        return charMap;



    }
    




}

module.exports = anagrams;



/*
let sortedStringA = shortenSortedString(stringA);
    let sortedStringB = shortenSortedString(stringB);
    
    if (sortedStringA.length !== sortedStringB.length){
        return false;

    } else if (sortedStringA !== sortedStringB){
        return false

    } else {
        return true
    }




    function shortenSortedString(str){
    let shortString  = str.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g,'');
    
    let sortedString = shortString.split('').sort().join('')
    
    return sortedString;

    }


*/