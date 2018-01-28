var assert = require('assert');
var palindromeCheck = require('../palindrome');

describe('Palindrome', function() {
  describe('All strings should be palindrome\'s', function() {

    it(`Drab as fool should be not a palindrome`, function() {
      const value = 'Drab as a fool,**7237823782378237aloof as a%^%$^#@(#*(@#*#@&^%^^%#@(b(#@)#&#@ard';
      assert.equal(palindromeCheck(value), true);
    });

    it(`#$!%$@aba@@@!\; should be a palindrome`, function() {
      const value = '#$!%$@aba@@@!\;';
      assert.equal(palindromeCheck(value), true);
    });

    it(`aba$##@$$#@ should be a palindrome`, function() {
      const value = 'aba$##@$$#@';
      assert.equal(palindromeCheck(value), true);
    });

    it(`#$a should be a palindrome`, function() {
      const value = '#$a';
      assert.equal(palindromeCheck(value), true);
    });

    it(`\0\'\;a should be a palindrome`, function() {
      const value = '\0\'\;a';
      assert.equal(palindromeCheck(value), true);
    });

    it(`A man, ... should be a palindrome`, function() {
      const value = ' A man, a plan, a canal, Panama! ';
      assert.equal(palindromeCheck(value), true);
    });

    it(`Are we not pure ... should be a palindrome`, function() {
      const value = 'Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.';
      assert.equal(palindromeCheck(value), true);
    });

    it(`a_a (: /-\ :) A-A should be a palindrome`, function() {
      const value = 'a_a (: /-\ :) A-A';
      assert.equal(palindromeCheck(value), true);
    });
    
    it(`A  d  #da$ should be a palindrome`, function() {
      const value = 'A  d  #da$';
      assert.equal(palindromeCheck(value), true);
    });

    it(`Empty string should be not a palindrome`, function() {
      const value = '';
      assert.equal(palindromeCheck(value), true);
    });
    
    it(`!^     $ should be not a palindrome`, function() {
      const value = '!^     $';
      assert.equal(palindromeCheck(value), true);
    });
    
    it(`!@#$%^&*()<>,.?/:;"\'{}\\ should be not a palindrome`, function() {
      const value = '!@#$%^&*()<>,.?/:;"\'{}\\';
      assert.equal(palindromeCheck(value), true);
    });

    
    it('Dammit I\'m mad should be a palindrome', function() {
      const value = `Dammit I’m mad.
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
      assert.equal(palindromeCheck(value), true);
    });
  });
  describe('All string should be not palindrome\'s', function() {
    it(`#@!%abaaa should be not a palindrome`, function() {
      const value = '#@!%abaaa';
      assert.equal(palindromeCheck(value), false);
    });
    
    it(`#@!#$$#$#$#$#@#$#@#$\;abaaaa should be not a palindrome`, function() {
      const value = '#@!#$$#$#$#$#@#$#@#$\;abaaaa';
      assert.equal(palindromeCheck(value), false);
    });
    
    it(`abaaa#@!%##$#$#$##$$### $should be not a palindrome`, function() {
      const value = 'abaaa#@!%##$#$#$##$$###$';
      assert.equal(palindromeCheck(value), false);
    });
        
    it(`0.00 should be not a palindrome`, function() {
      const value = 0.00;
      assert.equal(palindromeCheck(value), false);
    });
    
    it(`12344321 should be not a palindrome`, function() {
      const value = 12344321;
      assert.equal(palindromeCheck(value), false);
    });
    
    it(`Object should be not a palindrome`, function() {
      const value = { name: 'Test' };
      assert.equal(palindromeCheck(value), false);
    });
    
    it(`Array should be not a palindrome`, function() {
      const value = ['a', 'd', 'd', 'a'];
      assert.equal(palindromeCheck(value), false);
    });
    
    
    it(`null should be not a palindrome`, function() {
      const value = null;
      assert.equal(palindromeCheck(value), false);
    });
    
    it(`undefined should be not a palindrome`, function() {
      const value = undefined;
      assert.equal(palindromeCheck(value), false);
    });
  });
});
