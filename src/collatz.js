export default function collatz( n ) {
  if(isNaN(n)){
    return 'input is not a number'
  }
  let number = n
  let result = []
   result.push(n)
   while (number != 1){
     if( number % 2 === 0  ){
       number = number / 2
       result.push(number)
     } else {
       number = (3 * number) + 1
       result.push(number)
     }

   }
  return result
}
