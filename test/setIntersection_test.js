import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', function() {
  it('should be a function', function() {
    expect(setIntersection).to.be.a('function')
  })

  it('should return the complement of two sets', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setIntersection(a, b)).to.eql([2, 4])
  })

  it('should error if either of the inputs is not an array', function() {
    const a = 'not an array'
    const b = [2, 4, 6, 8]
    expect(setIntersection(a, b)).to.equal("sets must be an array")
  })
})
