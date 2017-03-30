export default function binarySearch(arr, n) {
  if(!Array.isArray(arr) || typeof n != 'number'){
    return 'incorrect input type'
  }
  for(let int in arr ){
    if(n == arr[int]){
      return parseInt(int)
    }
  }
}
