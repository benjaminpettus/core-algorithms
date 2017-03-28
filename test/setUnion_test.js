import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function() {

  it('should be a function', function() {
    expect(setUnion).to.be.a('function')
  })

  it('should return the union of two sets', function() {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setUnion(a,b)).to.eql([1, 2, 3, 4, 6, 8])
  })

  it('should error if either of the inputs is not an array', function() {
    const a = 'not an array'
    const b = [2, 4, 6, 8]
    expect(setUnion(a, b)).to.equal("sets must be an array")
  })
})
