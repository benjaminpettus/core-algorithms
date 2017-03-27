export default function fizzBuzz() {
  const result = []

  for( let i = 1; i <= 100; i++ ){
    result.push( i )
  }

  for ( let number in result ) {
     if ( result[ number ] % 3 === 0 && result[number] % 5 === 0 ) {
       result[ number ] = 'FizzBuzz'
     } else if( result[ number ] % 5 === 0 ){
       result[ number ] = 'Buzz'
     } else if( result[ number ] % 3 === 0 ) {
       result[ number ] = 'Fizz'
     }
   }

  return result
}
