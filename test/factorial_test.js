import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function() {
    expect(factorial).to.be.a('function')
  })

  it('should return the factorial of a number', function(){
    expect(factorial(5)).to.eql(120)
    expect(factorial(10)).to.eql(3628800)
    expect(factorial(3)).to.eql(6)
  })

  it('should err if input is not a number', function(){
    expect(factorial('word')).to.eql('input is not a number')
  })
})
