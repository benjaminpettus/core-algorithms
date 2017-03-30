export default function mergeSort(arr){
  if(!Array.isArray(arr)){
    return 'input can only be an array'
  }
  let left = []
  let right = []

  if( arr.length < 2 ) {
   return arr
  }
  let middle = Math.floor(arr.length/2)
  right = arr.splice(middle)
  left = arr.splice(0, middle)

  left = mergeSort(left)
  right = mergeSort(right)

  return merger(left, right)

}

function merger(left, right){
 let result = []

 while (left.length > 0 && right.length > 0){
   if(left[0] <= right[0]){
     result.push(left.shift())
   } else {
     result.push(right.shift())
   }
 }

 while (left.length > 0){
   result.push(left.shift())
 }
 while (right.length > 0){
   result.push(right.shift())
 }

 return result
}
