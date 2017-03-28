export default function setUnion(set1, set2) {
  let newSet = set1
  if(!Array.isArray(set1) || !Array.isArray(set2)){
    return "sets must be arrays"
  }
  for (let item in set2){
    if(!newSet.includes(set2[item])){
    newSet.push(set2[item])
    }
  }
  return newSet
}
