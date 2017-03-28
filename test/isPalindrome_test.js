import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function() {

  it('should be a function', function() {
    expect(isPalindrome).to.be.a('function')
  })

  it('should ignore punctuation, spacing, and case sensitivity.', function() {
    expect(isPalindrome('ra#d(*&)&a!r')).to.be.true
    expect(isPalindrome('radAr')).to.be.true
    expect(isPalindrome('ra d ar')).to.be.true
    expect(isPalindrome('fungus')).to.be.false
  })

  it('should return true if the sting is a palindrome', function() {
    expect(isPalindrome('radar')).to.be.true
    expect(isPalindrome('bananas')).to.be.false
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.be.true
  })

})
