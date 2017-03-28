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

  context('incorrect input', function() {

    it('should err if either inputs arent arrays', function() {
      const a = "what"
      const b = [2, 4, 6, 8]
      expect(setUnion(a,b)).to.eql("sets must be arrays")
    })

    it('should err if either inputs arent arrays', function() {
      const a = [1, 2, 3, 4]
      const b = "definitely not an array"
      expect(setUnion(a,b)).to.eql("sets must be arrays")
    })
  })
})
