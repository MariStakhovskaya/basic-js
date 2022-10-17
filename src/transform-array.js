const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr ) {
    let newArr = [...arr]
    if (newArr.length ===0) return []

        try {
          Array.isArray(newArr)

        } catch (e) {
            throw new Error('\'arr\' parameter must be an instance of the Array!')
        }


 for (let i=0 ; i< newArr.length; i++){
   switch (newArr[i]){
       case '--discard-next':
           newArr.splice(i, 2)

           break;
       case '--discard-prev':

           newArr.splice(i-1, 2)
           break;
     case '--double-next':
      newArr[i] = newArr[i+1];
       break;
     case '--double-prev':
       newArr[i] = newArr[i-1];
       break;

     default: return newArr
   }
 }
 console.log(newArr)
}

module.exports = {
  transform
};
