var colour = require('colour');
var palindromeCheck = require('../palindrome');


console.log('String should be Palindrome\n');
let value = `Dammit I’m mad.
Evil is a deed as I live.
God, am I reviled? I rise, my bed on a sun, I melt.
To be not one man emanating is sad. I piss.
Alas, it is so late. Who stops to help?
Man, it is hot. I’m in it. I tell.
I am not a devil. I level “Mad Dog”.
Ah, say burning is, as a deified gulp,
In my halo of a mired rum tin.
I erase many men. Oh, to be man, a sin.
Is evil in a clam? In a trap?
No. It is open. On it I was stuck.
Rats peed on hope. Elsewhere dips a web.
Be still if I fill its ebb.
Ew, a spider… eh?
We sleep. Oh no!
Deep, stark cuts saw it in one position.
Part animal, can I live? Sin is a name.
Both, one… my names are in it.
Murder? I’m a fool.
A hymn I plug, deified as a sign in ruby ash.
A Goddam level I lived at.
On mail let it in. I’m it.
Oh, sit in ample hot spots. Oh wet!
A loss it is alas (sip). I’d assign it a name.
Name not one bottle minus an ode by me:
“Sir, I deliver. I’m a dog”
Evil is a deed as I live.
Dammit I’m mad.`;
console.time('Dammit Im mad');
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `Dammit I’m mad. --Demetri Martin`);
console.timeEnd('Dammit Im mad');
console.log('\r')

value = '#$!%$@aba@@@!33\;';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = 'aba$##@$$#@';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = '#$a';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = '\0\'\;a';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = ' A man, a plan, a canal, Panama! ';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = 'b\r\rabba\r\rb';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = 'Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = 'a_a (: /-\ :) A-A';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = 'aSa';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = 'aa';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = 'Eh, ça va, la vaçhe?';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = '\u0041 \u0042 \u0043\u0043 ##$\u0042\u0041';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = 'Adda';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value =
  "Delia's debonair dahlias, poor, drop, or droop. Sail, Hadrian; Obed sailed.";
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = 'sator arepo tenet opera rotas';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = 'Eva, can I see bees in a cave?';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = 'A  d  #da$';
console.log(palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

console.log('\n\nString should not be Palindrome\n');

value = '#@!%abaaa';
console.log(!palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = '#@!#$$#$#$#$#@#$#@#$\;abaaaa';
console.log(!palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = 'abaaa#@!%##$#$#$##$$###$';
console.log(!palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = '';
console.log(!palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red, `${value}Empty String`);

value = '!^     $';
console.log(
  !palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red,
  `${value}`
);

value = '!@#$%^&*()<>,.?/:;"\'{}\\';
console.log(
  !palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red,
  `${value}`
);

value = 0.0;
console.log(
  !palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red,
  `${value}`
);

value = 12344321;
console.log(
  !palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red,
  `${value}`
);

value = { name: 'Test' };
console.log(
  !palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red,
  `${value}`
);

value = ['a', 'd', 'd', 'a'];
console.log(
  !palindromeCheck(value) ? 'PASSED'.green : 'FAILED'.red,
  `${value}`
);

value = 'Drab as a fool,**7237823782378237aloof as a%^%$^#@(#*(@#*#@&^%^^%#@(b(#@)#&#@ard';
console.log(!palindromeCheck() ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = null;
console.log(!palindromeCheck() ? 'PASSED'.green : 'FAILED'.red, `${value}`);

value = undefined;
console.log(!palindromeCheck() ? 'PASSED'.green : 'FAILED'.red, `${value}`);

console.log('\n\n');

