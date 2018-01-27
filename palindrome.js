const isSymbol = chr => (typeof chr === 'string' && chr.length == 1);

const  isSpecialChar = chr => 
   isSymbol(chr) ? !(chr >= 'a' &&  chr <= 'z' || 
         chr >= 'A' &&  chr <= 'Z') : true;

function lower(chr) {  
  if(isSymbol(chr)) { 
    return chr.toLowerCase();
  }
  throw "Parameter must be one char!";
}

function palindromeCheck(value) {
  let isPalindrome = false;
  if (typeof value !== 'string') {
    return false;
  }
  let l = 0;
  let h = (value.length - 1);
  const half = h / 2;
  while(l <= half) {
    const left = value[l];
    const right = value[h];
    if (isSpecialChar(left)) {
      l++;
    } else if (isSpecialChar(right)) {
      h--;
    } else if (lower(left) === lower(right)) {
      isPalindrome = true;
      l++;
      h--;
    } else {
      return false;
    }
  }
  return isPalindrome;
}

module.exports = palindromeCheck;
