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
}

module.exports = anagrams;
