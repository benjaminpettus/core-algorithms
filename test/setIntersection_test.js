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

  context('incorrect input', function() {

    it('should err if either inputs arent arrays', function() {
      const a = "what"
      const b = [2, 4, 6, 8]
      expect(setIntersection(a, b)).to.eql("sets must be arrays")
    })

    it('should err if either inputs arent arrays', function() {
      const a = [1, 2, 3, 4]
      const b = "definitely not an array"
      expect(setIntersection(a, b)).to.eql("sets must be arrays")
    })

  })
})
