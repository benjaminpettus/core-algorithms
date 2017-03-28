import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function() {

  it('should be a function', function() {
    expect(isPalindrome).to.be.a('function')
  })

  it('should return a string', function(){
    expect(isPalindrome('radar')).to.be.a('string')
  })

  it('should ignore punctuation, spacing, and case sensitivity.', function() {
    expect(isPalindrome('rad&ar')).to.eql('radar')
    expect(isPalindrome('wha(&*^()&t)')).to.eql('what')
    expect(isPalindrome('ra d ar')).to.eql('radar')
  })

  it.only('should return true if the sting is a palindrome', function() {
    expect(isPalindrome('radar')).to.be.true
    expect(isPalindrome('bananas')).to.be.false
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.be.true
  })

})
