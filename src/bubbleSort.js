export default function bubbleSort(arr){
  if(!Array.isArray(arr)){
    return 'input must be an array'
  }
  for (let i = 0; i < arr.length; i++){
     if (arr[i] > arr[i + 1]){
       let holder = arr[i]
       arr[i] = arr[i + 1]
       arr[i + 1] = holder
       bubbleSort(arr)
     }
   }
   return arr

}
