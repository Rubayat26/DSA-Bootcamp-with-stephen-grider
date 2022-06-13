// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words = str.split(' ')  //this will create an array or words based on the space among strings
     
    const newArray = []

    for (let word of words){
        newArray.push(word[0].toUpperCase()+ word.slice(1))
    }

    return newArray.join(' ')

}

module.exports = capitalize;
