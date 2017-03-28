export default function setUnion(set1, set2) {
  let newSet = set1
  for (let item in set2){
    if(!newSet.includes(set2[item])){
    newSet.push(set2[item])
    }
  }
  return newSet
}
