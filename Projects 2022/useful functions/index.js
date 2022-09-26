
// find all unique chars and count them
let uniqueArray1=words1.reduce((acc,sum)=>{
  if(acc[sum]===undefined){
  acc[sum]=1
  return acc
}
  else {
      acc[sum]+=1
      return acc
  }
},{})