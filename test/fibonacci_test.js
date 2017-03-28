import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('returns an array to the nth position', function() {
    expect(fibonacci(10)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
    expect(fibonacci(4)).to.eql([0, 1, 1, 2])
    expect(fibonacci(13)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144])
  })

  it('should err if input is not a number', function() {
    expect(fibonacci('words')).to.eql('input is not a number')
  })
})
