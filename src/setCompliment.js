export default function setCompliment(set1, set2) {
  if(!Array.isArray(set1) || !Array.isArray(set2)) {
    return "sets must be arrays"
  }
  let newSet = []
  for ( let number in set2 ){
    if( !set1.includes(set2[number]) ){
      newSet.push(set2[number])
    }
  }
  return newSet

}
