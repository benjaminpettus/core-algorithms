export default function fibonacci(n) {
  if(isNaN(n)){
    return 'input is not a number'
  }
  let result = [0, 1]
  for(let i = 2; i < n; i++ ){
    result.push(result[i - 2] + result[i -1])
  }
  return result
}
