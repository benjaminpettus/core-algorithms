export default function isPalindrome(string){
  if(typeof string != 'string' ){
    return 'input not a string'
  }
  const noSpecialChar = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()
  const noSpaces = noSpecialChar.replace(/\s/g, '')
  const splitter = noSpaces.split('')
  const reverse = splitter.reverse()
  const backwards = reverse.join('')
  return backwards == noSpaces
}
