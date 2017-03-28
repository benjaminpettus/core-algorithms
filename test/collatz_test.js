import { expect } from 'chai'
import collatz from '../src/collatz'

describe('collatz()', function(){

  it('should be a function', function(){
    expect(collatz).to.be.a('function')
  })

  it('should return an array', function() {
    expect(collatz(7)).to.eql([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
    expect(collatz(10)).to.eql([10, 5, 16, 8, 4, 2, 1])
    expect(collatz(19)).to.eql([19, 58, 29, 88, 44, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
    expect(collatz(3)).to.eql([3, 10, 5, 16, 8, 4, 2, 1])
  })
})
