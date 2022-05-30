// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    return str.split('').reduce((a,b)=>{
        return b+a

    },'')
    // here the firts element in reduce the starting element, the first time the element would be ''


}




module.exports = reverse;

/*
const revString = [];
    
    let arr1 = str.split(''); 


    for (i=0;i<str.length;i++){

       let result = arr1.pop();

        revString.push(result);
    }

    return revString.join(''); 

*/
