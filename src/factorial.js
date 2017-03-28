export default function factorial(n) {
  if(isNaN(n)){
    return 'input is not a number'
  }
  let result = n
  for (let i = n - 1; i > 0; i--){
      result *= i
  }
  return(result)
}
