const isSymbol = chr => (typeof chr === 'string' && chr.length == 1);

const  isSpecialChar = chr => 
   isSymbol(chr) ? !(chr >= 'a' &&  chr <= 'z' || 
         chr >= 'A' &&  chr <= 'Z') : true;

const lower = (chr) => {  
  if(isSymbol(chr)) { 
    return chr.toLowerCase();
  }
  throw "Parameter must be one char!";
}

const palindromeCheck = (value) => {
  if (typeof value !== 'string') return false;
  let l = 0;
  let r = (value.length - 1);
  // l ->>>=<<<- r
  while(l <= r) {
    const left = value[l];
    const right = value[r];
    if (isSpecialChar(left)) {
      l++;
    } else if (isSpecialChar(right)) {
      r--;
    } else if (lower(left) === lower(right)) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = palindromeCheck;
