export default function setIntersection(set1, set2){
  let newSet = []
  if(!Array.isArray(set1) || !Array.isArray(set2)){
    return "sets must be arrays"
  }
  for (let n in set1){
    if (set2.includes(set1[n])){
      newSet.push(set1[n])
    }
  }
  return newSet
}
